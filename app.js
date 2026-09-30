/* ============================================================================
   Renderer. No build step, no dependencies. Data lives in data/*.js.
   ========================================================================== */
(function () {
  "use strict";

  var FILE = window.FILE, PROMPTS = window.PROMPTS, BRIEFS = window.BRIEFS,
      LAUNCH_POST = window.LAUNCH_POST, PROTOCOL = window.PROTOCOL,
      SCORING = window.SCORING, SECTIONS = window.SECTIONS;

  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c];
    });
  };
  // keeps author-intended <b> fill-in markers, escapes everything else
  var escKeepB = function (s) {
    return esc(s).replace(/&lt;b&gt;/g, "<b>").replace(/&lt;\/b&gt;/g, "</b>");
  };
  var plain = function (s) { return s.replace(/<\/?b>/g, ""); };

  var patternCount = 0;
  FILE.forEach(function (t) {
    t.rails.forEach(function (r) { patternCount += r.cards.length; });
  });
  var promptCount = PROMPTS.reduce(function (n, s) { return n + s.items.length; }, 0);

  /* ---------- fragments ---------- */

  function cardEl(c) {
    var k = c.kind.toLowerCase();
    var cls = k === "anti-pattern" ? " is-anti" : (k === "benchmark" ? " is-bench" : "");
    return '<article class="card' + cls + '">' +
      '<div class="card-kind">' + esc(c.kind) + '</div>' +
      '<h4 class="card-name">' + esc(c.name) + '</h4>' +
      '<p class="card-def">' + esc(c.def) + '</p>' +
      '<p class="card-why">' + esc(c.why) + '</p>' +
      '<div class="card-foot">' +
        (c.stat ? '<div class="card-stat">' + esc(c.stat).replace(/\n/g, "<br>") + '</div>' : "") +
        (c.src ? '<div class="card-src">' + esc(c.src) + '</div>' : "") +
      '</div></article>';
  }

  function railEl(r) {
    return '<section class="rail">' +
      '<div class="rail-tab">' +
        '<div class="rail-name">' + esc(r.name) + '</div>' +
        '<div class="rail-meta">' + esc(r.sub) + ' · ' + r.cards.length + '</div>' +
        '<div class="rail-arrows">' +
          '<button type="button" data-dir="-1" aria-label="Scroll ' + esc(r.name) + ' left">&#8592;</button>' +
          '<button type="button" data-dir="1" aria-label="Scroll ' + esc(r.name) + ' right">&#8594;</button>' +
        '</div>' +
      '</div>' +
      '<div class="rail-scroll" tabindex="0">' + r.cards.map(cardEl).join("") + '</div>' +
    '</section>';
  }

  function blockEl(b) {
    return '<article class="block">' +
      '<div class="block-top">' +
        '<div class="block-titles">' +
          '<div class="block-name">' + esc(b.name) + '</div>' +
          '<div class="block-use">' + esc(b.use) + '</div>' +
        '</div>' +
        '<button type="button" class="copy" data-copy="' + esc(plain(b.text)) + '">Copy</button>' +
      '</div>' +
      '<pre class="text">' + escKeepB(b.text) + '</pre>' +
    '</article>';
  }

  /* ---------- built section bodies ---------- */

  var BUILT = {
    __SWIPE__: FILE.map(function (t) {
      return '<section class="track">' +
        '<div class="track-head">' +
          '<div class="sec-no" style="margin:0">' + esc(t.tag) + '</div>' +
          '<h3 class="track-title">' + esc(t.title) + '</h3>' +
          '<p class="track-note">' + esc(t.note) + '</p>' +
        '</div>' + t.rails.map(railEl).join("") +
      '</section>';
    }).join(""),

    __PROMPTS__: '<div class="prose">' + PROMPTS.map(function (s) {
      return '<section class="stage">' +
        '<div class="stage-head"><h3>' + esc(s.stage) + '</h3>' +
        '<span>' + esc(s.sub) + ' · ' + s.items.length + '</span></div>' +
        '<div class="blocks">' + s.items.map(blockEl).join("") + '</div>' +
      '</section>';
    }).join("") + '</div>',

    __PROTOCOL__: '<div class="prose"><div class="steps">' +
      PROTOCOL.steps.map(function (s, i) {
        return '<div class="step"><div class="step-no">' +
          String(i + 1).padStart(2, "0") + '</div><div>' +
          '<h4>' + esc(s.h) + '</h4><p>' + s.p + '</p>' +
          '<p class="ask">' + esc(s.ask) + '</p></div></div>';
      }).join("") + '</div></div>',

    __BRIEFS__: '<div class="prose"><div class="blocks">' +
      BRIEFS.map(blockEl).join("") + '</div></div>',

    __LAUNCHPOST__: blockEl(LAUNCH_POST),

    __SCORING__: '<div class="prose">' +
      [{ h:"Track 01 — Creatives", rows:SCORING.creative },
       { h:"Track 02 — Landing Pages", rows:SCORING.lp }].map(function (g) {
        return '<section class="stage">' +
          '<div class="stage-head"><h3>' + esc(g.h) + '</h3><span>100 points</span></div>' +
          '<div class="table-wrap"><table>' +
          '<thead><tr><th>Criterion</th><th>Weight</th><th>How it\'s judged</th></tr></thead>' +
          '<tbody>' + g.rows.map(function (r) {
            return '<tr><td class="n">' + esc(r.n) + '</td><td class="w">' + esc(r.w) +
              '</td><td>' + esc(r.d) + '</td></tr>';
          }).join("") + '</tbody></table></div></section>';
      }).join("") +
      '<h2>Tracking submissions</h2>' +
      '<p>One row per submission. Columns: team · track · angle in one sentence · hook pattern or ' +
      'hero pattern · the single variable changed from the previous version · each criterion ' +
      'scored · total · judge.</p>' +
      '<p>The angle and variable columns are the ones worth keeping after the event — they\'re ' +
      'what turns a day of building into a reusable library.</p>' +
      '<div class="callout warn"><p><strong>Weights are a proposal, not a decision.</strong> ' +
      'They\'re set to reward argument over polish. If the group wants craft weighted higher, ' +
      'change them before the day rather than during judging.</p></div></div>'
  };

  function expand(html) {
    return html.replace(/__[A-Z]+__/g, function (k) {
      return Object.prototype.hasOwnProperty.call(BUILT, k) ? BUILT[k] : k;
    });
  }

  /* ---------- toolkit index (derived from SECTIONS) ---------- */

  var TOOLKIT = [
    { go:"swipe",    nm:"The Swipe File", ds:"Every hook, format, script structure and landing-page pattern worth knowing, with the mechanism that makes it fire and the benchmark attached where one exists. Filed by the job it does.", go_label: patternCount + " patterns →" },
    { go:"prompts",  nm:"The Prompt Chain", ds:"Research → angles → hooks → scripts → page. Built to run in sequence, each stage eating the previous stage's output. Copy straight out.", go_label: promptCount + " prompts →" },
    { go:"teardown", nm:"Teardown Protocol", ds:"How to turn somebody else's winner into your own asset — taking the angle and the structure, never the execution. Run it before you write anything original.", go_label:"6 steps →" },
    { go:"briefs",   nm:"Brief Templates", ds:"One for creative, one for landing pages. Both force the decisions teams normally discover halfway through building — the angle, the one goal, the single objection, what gets omitted.", go_label:"2 templates →" },
    { go:"ai-build", nm:"The AI Build", ds:"A worked seven-stage spec for the festive creative engine — one product URL in, a labelled batch of testable variations out. Model-agnostic, assigned, implementable without further briefing.", go_label:"7 stages →" },
    { go:"pitch",    nm:"The Pitch", ds:"The six-part anatomy of a pitch page for a creative product, and the ShopOS festive pitch built on the same bones. Doubles as your demo narrative.", go_label:"Anatomy + pitch →" },
    { go:"scoring",  nm:"Judging Rubric", ds:"What the judges weight, per track, with the weights published. Both rubrics reward the argument over the polish, deliberately.", go_label:"2 rubrics →" },
    { go:"ship",     nm:"Ship & After", ds:"What to submit, how to run a three-minute demo that doesn't collapse, what you leave with, and the launch-post skeleton for the days after.", go_label:"Demo + post →" },
    { go:null,       nm:"Stack & Agent Map", ds:"Which ShopOS workflow surfaces participants get on the day, and which parts of the chain above are automated versus hand-run. Blocked on the tooling decision.", go_label:"Pending" }
  ];

  var SOURCES = '<div class="srcs"><h4>Sources</h4><ul>' + [
    ['https://segwise.ai/blog/dtc-ad-creative-hooks', 'segwise.ai', 'hook taxonomy, percentiles'],
    ['https://adriselab.com/blog/what-is-a-good-hook-rate-meta-ads-2026', 'adriselab.com', 'hook-rate thresholds'],
    ['https://pixis.ai/blog/ugc-in-2026-whats-working-whats-stale-and-how-to-refresh-your-hook-library/', 'pixis.ai', 'UGC fatigue'],
    ['https://reloop.so/blog/article/ugc-script-templates/', 'reloop.so', 'script structures'],
    ['https://leadpages.com/blog/high-converting-landing-page-examples', 'leadpages.com', 'landing-page patterns'],
    ['https://www.digitalapplied.com/blog/landing-page-conversion-study-2000-pages-tested-2026', 'digitalapplied.com', '2,000-page test'],
    ['https://genesysgrowth.com/blog/landing-page-conversion-stats-for-marketing-leaders', 'genesysgrowth.com', 'conversion benchmarks'],
    ['https://getgimmegimme.com', 'getgimmegimme.com', 'case 01']
  ].map(function (s) {
    return '<li><a href="' + s[0] + '" rel="noopener">' + s[1] + '</a> — ' + s[2] + '</li>';
  }).join("") + '</ul><p class="caveat">Benchmarks are aggregated from public marketing ' +
  'write-ups and vendor blogs, not primary research — most are single-test or single-account ' +
  'results. Use them to decide what to test first, not as facts to quote on stage. Meta ' +
  'publishes no official hook-rate benchmark; your own account history is the only one that ' +
  'binds.</p></div>';

  /* ---------- mount ---------- */

  document.getElementById("content").innerHTML = SECTIONS.map(function (s, i) {
    var prev = SECTIONS[i - 1], next = SECTIONS[i + 1];
    var pager = '<div class="pager">' +
      (prev ? '<button type="button" data-go="' + prev.id + '"><span>← Previous</span>' + esc(prev.nav) + '</button>' : "") +
      (next ? '<button type="button" data-go="' + next.id + '"><span>Next →</span>' + esc(next.nav) + '</button>' : "") +
    '</div>';
    return '<section class="sec" id="sec-' + s.id + '">' +
      '<div class="sec-head">' +
        '<div class="sec-no">' + String(i + 1).padStart(2, "0") + ' — ' + esc(s.nav).toUpperCase() + '</div>' +
        '<h1 class="sec-title">' + s.title + '</h1>' +
        '<div class="sec-rule"></div>' +
        '<p class="lede">' + s.lede + '</p>' +
      '</div>' + expand(s.html) + pager +
      (i === SECTIONS.length - 1 ? SOURCES : "") +
    '</section>';
  }).join("");

  var idx = document.getElementById("toolkit-index");
  if (idx) {
    idx.innerHTML = TOOLKIT.map(function (t, i) {
      return '<button type="button" class="index-item"' +
        (t.go ? ' data-go="' + t.go + '"' : ' disabled') + '>' +
        '<div class="n">' + String(i + 1).padStart(2, "0") + '</div>' +
        '<div><div class="nm">' + esc(t.nm) + '</div><div class="ds">' + esc(t.ds) + '</div></div>' +
        '<div class="go">' + esc(t.go_label) + '</div></button>';
    }).join("");
  }

  document.getElementById("toc").innerHTML = SECTIONS.map(function (s, i) {
    return '<button type="button" data-go="' + s.id + '">' +
      '<span class="n">' + String(i + 1).padStart(2, "0") + '</span>' +
      '<span>' + esc(s.nav) + '</span>' +
      (s.tick ? '<span class="tick">' + esc(s.tick) + '</span>' : '<span></span>') +
    '</button>';
  }).join("");

  document.getElementById("progress").innerHTML =
    SECTIONS.map(function () { return "<i></i>"; }).join("");

  function show(id) {
    var i = SECTIONS.findIndex(function (s) { return s.id === id; });
    if (i < 0) return;
    SECTIONS.forEach(function (s) {
      document.getElementById("sec-" + s.id).classList.toggle("is-on", s.id === id);
    });
    document.querySelectorAll("#toc button").forEach(function (b) {
      b.setAttribute("aria-current", String(b.dataset.go === id));
    });
    document.querySelectorAll("#progress i").forEach(function (el, n) {
      el.classList.toggle("on", n <= i);
    });
    if (location.hash.slice(1) !== id) history.replaceState(null, "", "#" + id);
    scrollTo({ top: 0, behavior: "auto" });
    syncRails();
  }

  document.addEventListener("click", function (e) {
    var go = e.target.closest("[data-go]");
    if (go && !go.disabled) { show(go.dataset.go); return; }
    var cp = e.target.closest(".copy");
    if (cp) {
      navigator.clipboard.writeText(cp.dataset.copy).then(function () {
        cp.textContent = "Copied"; cp.classList.add("done");
        setTimeout(function () { cp.textContent = "Copy"; cp.classList.remove("done"); }, 1600);
      }).catch(function () { cp.textContent = "Press ⌘C"; });
    }
  });

  /* ---------- rails ---------- */
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var syncers = [];

  document.querySelectorAll(".rail").forEach(function (rail) {
    var scroller = rail.querySelector(".rail-scroll");
    var arrows = rail.querySelectorAll(".rail-arrows button");
    var left = arrows[0], right = arrows[1];

    var sync = function () {
      var max = scroller.scrollWidth - scroller.clientWidth - 1;
      left.disabled = scroller.scrollLeft <= 0;
      right.disabled = scroller.scrollLeft >= max;
    };
    syncers.push(sync);

    arrows.forEach(function (btn) {
      btn.addEventListener("click", function () {
        scroller.scrollBy({
          left: scroller.clientWidth * 0.8 * Number(btn.dataset.dir),
          behavior: reduce ? "auto" : "smooth"
        });
      });
    });
    scroller.addEventListener("scroll", sync, { passive: true });

    var down = false, startX = 0, startScroll = 0, moved = 0;
    scroller.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") return;
      down = true; moved = 0; startX = e.clientX;
      startScroll = scroller.scrollLeft; scroller.classList.add("dragging");
    });
    scroller.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      scroller.scrollLeft = startScroll - dx;
    });
    var release = function () {
      if (down) { down = false; scroller.classList.remove("dragging"); }
    };
    scroller.addEventListener("pointerup", release);
    scroller.addEventListener("pointerleave", release);
    scroller.addEventListener("pointercancel", release);
    scroller.addEventListener("click", function (e) {
      if (moved > 6) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  });

  function syncRails() { syncers.forEach(function (f) { f(); }); }
  addEventListener("resize", syncRails);

  var initial = location.hash.slice(1);
  show(SECTIONS.some(function (s) { return s.id === initial; }) ? initial : SECTIONS[0].id);
})();
