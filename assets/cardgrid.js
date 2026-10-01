/* ============================================================================
   Shared card grid. Mounts the 128 flip cards + filters into any container.
   Usage:  CardGrid.mount(rootEl, window.CARDS)
   Requires assets/cards.css (components) and assets/sloosh.css (tokens).
   ========================================================================== */
window.CardGrid = (function () {
  "use strict";

  var DARK = ["#090909"];   // section grounds already near-black

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c];
    });
  }

  function cardEl(c) {
    var dark = DARK.indexOf(c.colour) >= 0;
    return '<button class="card3d" style="--c:' + c.colour + '" aria-pressed="false" ' +
      'aria-label="Card ' + c.n + '. ' + esc(c.problem) + ' Activate to see the build.">' +
      '<div class="inner">' +

        '<div class="face front' + (dark ? ' dark-ground' : '') + '">' +
          '<div class="f-top">' +
            '<span class="sec-pill">' + esc(c.section) + '</span>' +
            '<span class="num">#' + String(c.n).padStart(2, "0") + '</span>' +
          '</div>' +
          '<div class="mascot">' +
            '<div class="pack"><span class="eye l"></span><span class="eye r"></span></div>' +
            '<span class="quip">' + esc(c.quip) + '</span>' +
          '</div>' +
          '<div class="flipnote">Flip this over if your brand has this problem.</div>' +
          (c.brand ? '<div class="brandtag">' + esc(c.brand) + '</div>' : '') +
          '<p class="problem">' + esc(c.problem) + '</p>' +
          '<div class="f-foot">' +
            '<span class="flip-pill">' + esc(c.flip) + '</span>' +
            '<span class="by-small">ShopOS × DSG</span>' +
            '<span class="flipcue">Flip ↻</span>' +
          '</div>' +
        '</div>' +

        '<div class="face back">' +
          '<div class="b-head' + (dark ? ' dark-ground' : '') + '">' +
            '<span class="t"><span class="eyes2"><i></i><i></i></span>Build this Sloosh</span>' +
            '<span class="num">#' + String(c.n).padStart(2, "0") + '</span>' +
          '</div>' +
          '<h3 class="buildname">' + esc(c.build) + '</h3>' +
          '<p class="lbl">How do you build it</p>' +
          c.steps.map(function (s, i) {
            return '<div class="bstep"><b>' + (i + 1) + '</b><span>' + esc(s) + '</span></div>';
          }).join("") +
          '<p class="lbl" style="margin-top:13px">What do you need</p>' +
          '<div class="needs">' + c.needs.map(function (n) {
            return '<span>' + esc(n) + '</span>'; }).join("") + '</div>' +
          '<p class="lbl">What metric does this move</p>' +
          '<p class="metric">' + esc(c.metric) + '</p>' +
          '<p class="lbl">What are the outputs</p>' +
          '<p class="outs">' + esc(c.outputs) + '</p>' +
          '<span class="run">Run This For Me</span>' +
        '</div>' +

      '</div></button>';
  }

  function mount(root, CARDS) {
    if (!root || !CARDS) return;
    root.classList.add("cardset");

    var sections = [];
    CARDS.forEach(function (c) {
      if (sections.indexOf(c.section) < 0) sections.push(c.section);
    });

    root.innerHTML =
      '<div class="cg-bar">' +
        '<div class="cg-chips">' +
          '<button class="cg-chip" data-sec="" aria-pressed="true">All' +
            '<span class="ct">' + CARDS.length + '</span></button>' +
          sections.map(function (s) {
            var n = CARDS.filter(function (c) { return c.section === s; }).length;
            return '<button class="cg-chip" data-sec="' + esc(s) + '" aria-pressed="false">' +
                   esc(s) + '<span class="ct">' + n + '</span></button>';
          }).join("") +
        '</div>' +
        '<input class="cg-q" type="search" placeholder="Search brand, problem, build…" ' +
          'aria-label="Search cards">' +
        '<span class="cg-count"></span>' +
      '</div>' +
      '<div class="cg-grid"></div>' +
      '<div class="cg-empty" hidden>Nothing matches that. Try a brand name or a section.</div>';

    var grid  = root.querySelector(".cg-grid");
    var empty = root.querySelector(".cg-empty");
    var count = root.querySelector(".cg-count");
    var active = null, query = "";

    function render() {
      var q = query.trim().toLowerCase();
      var list = CARDS.filter(function (c) {
        if (active && c.section !== active) return false;
        if (!q) return true;
        return (c.brand || "").toLowerCase().indexOf(q) >= 0 ||
               c.problem.toLowerCase().indexOf(q) >= 0 ||
               c.build.toLowerCase().indexOf(q) >= 0 ||
               c.flip.toLowerCase().indexOf(q) >= 0 ||
               c.section.toLowerCase().indexOf(q) >= 0;
      });
      grid.innerHTML = list.map(cardEl).join("");
      empty.hidden = list.length > 0;
      count.textContent = list.length + " of " + CARDS.length + " cards";
    }

    root.addEventListener("click", function (e) {
      var chip = e.target.closest(".cg-chip");
      if (chip) {
        active = chip.dataset.sec || null;
        root.querySelectorAll(".cg-chip").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === chip));
        });
        render();
        return;
      }
      var card = e.target.closest(".card3d");
      if (card) {
        card.setAttribute("aria-pressed",
          card.getAttribute("aria-pressed") === "true" ? "false" : "true");
      }
    });

    root.querySelector(".cg-q").addEventListener("input", function (e) {
      query = e.target.value; render();
    });

    render();
  }

  return { mount: mount };
})();
