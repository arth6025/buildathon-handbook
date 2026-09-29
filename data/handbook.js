/* ============================================================================
   HANDBOOK — protocol, scoring, build ideas, and the sections themselves.
   SECTIONS drives the sidebar, the progress bar and the pagers. Add a section
   by appending an object; everything else derives from it.
   Section shape: { id, nav, title (HTML), lede (HTML), html (HTML), tick? }
   ========================================================================== */

window.PROTOCOL = {
  intro: "The repeatable way to turn somebody else's winner into your own asset. The rule that makes it work rather than plagiarism: you take the angle and the structure, never the execution. If your output is recognisable as a copy, you stopped at step three.",
  steps: [
    { h:"Capture", p:"Screen-record the ad or the full landing page scroll. Get the ad library entry if there is one — <strong>how long it has been running is the only real signal you have</strong> that it works. A new ad is a guess; a ninety-day ad is evidence.", ask:"Log: what it is · where it ran · how long it has been live · the audience it's obviously aimed at." },
    { h:"Label the pattern", p:"Name it against the swipe file. For an ad: which hook pattern, which format, which script structure. For a page: which hero pattern, where the proof sits, what the single goal is.", ask:"If you can't name the pattern, you don't understand the asset yet. Go back to step one." },
    { h:"Extract the angle", p:"State the underlying argument in one sentence <strong>with no reference to their product, brand or category</strong>. This is the step people skip, and skipping it is what produces copies instead of assets.", ask:"Test: could a company selling something completely unrelated run this angle? If no, you've written an execution, not an angle." },
    { h:"Find the load-bearing element", p:"Remove one element at a time in your head. Which removal breaks it? That's the thing doing the work — usually the proof, the specificity of a number, or the first 1.5 seconds.", ask:"Name the one element you would keep if you could keep only one." },
    { h:"Rebuild on your own product", p:"Same angle, same structure, your customer's language, your proof. Pull the words from your voice-of-customer output, never from their ad. Their phrasing is fitted to their customer, not yours.", ask:"Write it. Then check: is any phrase lifted verbatim? Replace it." },
    { h:"Change one variable", p:"Ship the rebuild, then iterate one thing at a time — the hook, or the proof, or the CTA. Never two. <strong>Roughly a third of tested changes win</strong>, so you need clean attribution to learn anything from the other two.", ask:"State the single variable and what result would make you keep it." }
  ]
};

window.SCORING = {
  creative: [
    { n:"Hook strength", w:"30%", d:"Does the first 1.5 seconds earn the next 1.5? Judged by watching it once, at speed, in a feed — not by reading the script." },
    { n:"Angle, not execution", w:"25%", d:"Is there a defensible argument underneath, statable in one sentence without naming the product? Polished ads with no angle score low here." },
    { n:"Platform nativeness", w:"20%", d:"Does it read as content on the platform it's built for, or as an ad cross-posted everywhere? Overexposed formats lose points." },
    { n:"Proof and specificity", w:"15%", d:"Concrete nouns, real numbers, checkable claims. Adjectives and superlatives score nothing." },
    { n:"Iteration discipline", w:"10%", d:"Did the team produce variants that change one variable, or ten unrelated ads? Volume with attribution beats volume." }
  ],
  lp: [
    { n:"Five-second answer", w:"30%", d:"A first-time visitor can state what it is, who it's for and what to do, having looked for five seconds. Tested live by a judge who hasn't seen it." },
    { n:"Message match", w:"20%", d:"The page repeats the promise of the ad or entry point that sends traffic, in the same words. Scored against the team's own creative." },
    { n:"Placed proof", w:"20%", d:"Three to five proof elements, each answering a specific objection at the point it forms. A testimonial wall scores as one element." },
    { n:"Friction", w:"20%", d:"One goal, minimum viable form, action-and-value CTA copy, ask visible on mobile without scrolling back." },
    { n:"Shopify-ready", w:"10%", d:"Runs against a real store, loads fast on mobile data, and could go live for the festive season without a rebuild." }
  ]
};

/* What brands can build — seeds, not specs. */
window.IDEAS = [
  { t:"Ad engine from a URL", d:"One input — a store URL. Learns the brand, studies what's working in the category, returns a month of ad variants with images and copy ready for Ads Manager.", s:"Track 01 · the proven shape" },
  { t:"Festive page generator", d:"Point it at a Shopify collection and get a dedicated campaign landing page — message-matched to the ad, proof pulled from existing reviews, nav stripped out.", s:"Track 02" },
  { t:"Review-to-creative pipeline", d:"Reads the store's own product reviews, extracts the verbatim customer language, and writes UGC scripts that use it. The proof and the copy come from the same place.", s:"Track 01" },
  { t:"Creative refresh loop", d:"Watches which ads are fatiguing and generates iterations of the winner — new hooks on a proven body — instead of fresh concepts from zero.", s:"Track 01" },
  { t:"Message-match checker", d:"Give it an ad and a landing page. It scores the match, names every promise the page dropped, and rewrites the headline in the ad's own words.", s:"Track 02" },
  { t:"Offer and bundle builder", d:"Turns festive SKU combinations into a page with the bundle logic, the urgency, and the objection-to-proof map already placed.", s:"Track 02" },
  { t:"Hook tester", d:"Generates twenty openings against one angle, then stress-tests each as a skeptical media buyer and kills the ones that pattern-match as ads.", s:"Track 01" },
  { t:"Storefront teardown", d:"Runs the five-second test against any Shopify store's top pages and returns a ranked list of what to fix before the sale season starts.", s:"Track 02" }
];

/* ---------- sections ---------- */
window.SECTIONS = [
  {
    id:"welcome", nav:"Welcome",
    title:`Two tracks. <em>One day.</em> Live before the festive rush.`,
    lede:`Everything you need for the DSGCP × ShopOS buildathon in Mumbai — the patterns, the prompts, the briefs and the rubric. <strong>Read it before the day, not during.</strong> The teams that place have already made their decisions by the time the clock starts.`,
    html:`<div class="prose">
      <h2>What we're actually trying to do</h2>
      <p class="big">Give brands a working preview of how to produce ad creative and
        high-converting landing pages with AI — and get it into Shopify in time for the festive
        season.</p>
      <p>Not a demo. Not a deck. By the end of the day you should have assets that could run, and
        a page that could take traffic. The festive window is the deadline that makes this real:
        whatever you build has to be something a store could switch on in weeks, not quarters.</p>
      <p>Everything runs on <strong>ShopOS workflow</strong>, so what you build on the day is
        built on the thing you'd keep using afterwards.</p>

      <h2>The two tracks</h2>
      <h3>Track 01 — Creatives</h3>
      <p>Build ad creative that survives a feed. The whole game is the first 1.5 seconds and
        whether there's a real argument underneath. Production value is not the game, and several
        of the highest-performing formats are deliberately ugly.</p>
      <h3>Track 02 — High-converting landing pages</h3>
      <p>Build the page that keeps the promise the ad made. Five seconds to answer what this is,
        who it's for, and what to do — then proof placed exactly where the objection forms, on a
        page that loads fast on mobile data.</p>
      <p>The two tracks are one funnel. If you're on Track 01, your creative eventually points at
        a page. If you're on Track 02, your page is judged against the ad that feeds it. Read both
        swipe-file tracks regardless of which you're in.</p>

      <h2>What you leave with</h2>
      <div class="callout">
        <p><strong>ShopOS credits</strong> — so the thing you built on the day keeps running
          after it.</p>
        <p><strong>A call with the ShopOS team</strong> to scope a forward-deployed engineer for
          the sale season, if you want to take it into production for your store.</p>
      </div>

      <h2>The blunt version</h2>
      <div class="callout warn">
        <p><strong>Most teams will not ship.</strong> They will browse ideas past the point of
          usefulness, get attached to the first concept, rebuild the thing twice, and demo a
          half-finished product with a story stitched over the gap.</p>
        <p><strong>The teams that place picked narrow and shipped early.</strong> One input, one
          output, one audience — then spent the remaining hours making that one thing undeniable
          rather than adding a second thing.</p>
      </div>

      <h2>How to use this handbook</h2>
      <ol>
        <li><strong>Before the day —</strong> read Welcome, What Good Looks Like, The Pitch, and
          the Scoring rubric. Skim the swipe file for your track.</li>
        <li><strong>First hour —</strong> run the Teardown Protocol on one competitor winner, then
          fill the brief for your track. Do not open a design tool before the brief is done.</li>
        <li><strong>Building —</strong> live in the Prompt Chain and the swipe file.</li>
        <li><strong>Last hour —</strong> Ship It.</li>
      </ol>
    </div>`
  },

  {
    id:"outcomes", nav:"What good looks like", tick:"New",
    title:`A sentence you can <em>repeat back.</em>`,
    lede:`Example outcomes from events like this one — what got built, what it actually does, and the transferable pattern underneath. <strong>Read these for shape, not for ideas to copy.</strong>`,
    html:`<div class="prose">
      <p>The point of this section is not to hand you a product to build. It's to show you what
        the winning <em>shape</em> looks like, because the shape is consistent across events even
        when the ideas are not.</p>
    </div>

    <div class="prose">
      <p class="kicker">Case 01 · Track-relevant · Paid ads</p>
      <div class="case">
        <div class="case-top">
          <h3 class="case-nm">Gimme Gimme Ads</h3>
          <p class="case-one">Enter your website, get 500 high-quality ads tailored to your
            company — every month.</p>
        </div>
        <div class="case-facts">
          <div class="fact"><div class="k">Built at</div><div class="v">ShopOS × DSGCP</div></div>
          <div class="fact"><div class="k">Field</div><div class="v">150 / 80 teams</div></div>
          <div class="fact"><div class="k">Result</div><div class="v">1st place</div></div>
          <div class="fact"><div class="k">To public</div><div class="v">48 hours</div></div>
        </div>
        <div class="case-body">
          <h4>The launch post</h4>
          <blockquote class="post">“Introducing Gimme Gimme Ads. If you work in paid ads, you need to be using this. […] It's super simple: enter your website and instantly get 500 high quality ads tailored to your company, every month. It learns your brand, studies the best Meta ads from your competitors and then goes to work.”<cite>Excerpt — founder's launch post · getgimmegimme.com</cite></blockquote>

          <h4>What it actually does</h4>
          <p>One input — a URL. From there it learns the brand, studies the best-performing Meta
            ads from competitors in the category, and generates angles, product imagery and
            branding. The output is images and copy, downloadable in the shape Ads Manager
            expects.</p>

          <h4>Why it won</h4>
          <p>Not because the technology was novel. Because the surface area was tiny and the
            output was immediately usable. There is no configuration step, no onboarding, no
            "connect your accounts" — and the thing you get back doesn't need a second tool to
            become an ad. It lands where the buyer already works.</p>
        </div>
      </div>

      <p class="kicker" style="margin-top:34px">The transferable pattern</p>
      <div class="lesson">
        <div class="lesson-row"><div class="lk">One input</div><div class="lv">A single field a stranger can fill without instructions. <b>A URL, not a form.</b> Every extra input is a place the demo stalls and a reason the judge stops listening.</div></div>
        <div class="lesson-row"><div class="lk">Absurd output</div><div class="lv">The quantity is the pitch. "500 ads a month" is a number you can't argue with in a demo — and it reframes the product from a tool into a supply.</div></div>
        <div class="lesson-row"><div class="lk">Lands in the existing tool</div><div class="lv">Output arrives ready for Ads Manager. <b>The last mile is where most hackathon products die</b> — they produce something that still needs work before it's usable.</div></div>
        <div class="lesson-row"><div class="lk">Borrowed proof</div><div class="lv">It studies competitors' best-performing ads. The credibility comes from the market, not from claims about the model — the same move as the Teardown Protocol, automated.</div></div>
        <div class="lesson-row"><div class="lk">Shipped in 48 hours</div><div class="lv">Public before the momentum decayed. The event is the credential; it only counts while people still remember it happened.</div></div>
      </div>

      <div class="callout warn">
        <p><strong>The trap.</strong> Read this and the instinct is to build an AI wrapper that
          generates a lot of something. That's copying the execution. The transferable part is the
          shape: <strong>narrowest possible input, output so complete it needs no second
          tool.</strong> Apply it to a problem you actually understand.</p>
      </div>

      <h2>What brands can build</h2>
      <p>Seeds, not specs. Each of these is small enough to ship in a day and useful enough that a
        store would switch it on for the festive season.</p>
      <div class="ideas">
        ${window.IDEAS.map((i) => `<div class="idea">
          <div class="t">${i.t}</div>
          <p class="d">${i.d}</p>
          <div class="s">${i.s}</div>
        </div>`).join("")}
      </div>

      <div class="slot">
        <div class="k">Case 02 — open</div>
        <p>More outcomes get filed here as they land. A case needs five things: the one-line
          description, the facts strip, what it actually does, why it won, and the transferable
          pattern pulled out separately from the story. Open a PR.</p>
      </div>
    </div>`
  },

  {
    id:"pitch", nav:"The pitch",
    title:`Sell the supply, <em>not the software.</em>`,
    lede:`Whatever you build, you have to pitch it — on the day to judges, and afterwards to a brand. This is the anatomy of a pitch page that works for a creative product, and the ShopOS festive pitch built on the same bones.`,
    html:`<div class="prose">
      <h2>The anatomy</h2>
      <p>A creative product is hard to pitch because the buyer has been sold "AI for marketing"
        forty times this year. The pages that land stop describing capability and start showing
        inventory. The move is consistent, and it's six parts.</p>

      <div class="steps">
        <div class="step"><div class="step-no">01</div><div>
          <h4>A claim about coverage, not quality</h4>
          <p>"Every format your media buyer needs" beats "beautiful creative that converts."
            <strong>Coverage is checkable; quality is an opinion.</strong> The buyer's real fear is
            running out of things to test, not that the next asset is ugly.</p>
          <p class="ask">Write the headline as a claim about what you will never be short of.</p>
        </div></div>
        <div class="step"><div class="step-no">02</div><div>
          <h4>Disqualify the portfolio</h4>
          <p>State plainly that the work is built to perform, not to look good in a showcase. It
            pre-empts the objection that AI creative is generic, and it signals you know the
            difference between a case-study asset and a workhorse.</p>
          <p class="ask">One line that rejects the thing your category is usually judged on.</p>
        </div></div>
        <div class="step"><div class="step-no">03</div><div>
          <h4>Show the inventory, categorised</h4>
          <p>The body of the page is the work itself, filed by format, in rails you scroll rather
            than a grid you scan. <strong>Categories do the arguing</strong> — seeing eight named
            format families proves range faster than any sentence about range.</p>
          <p class="ask">Name your categories. If two could be merged, merge them.</p>
        </div></div>
        <div class="step"><div class="step-no">04</div><div>
          <h4>Volume as the proof</h4>
          <p>Quantity is the credibility. A number the buyer can picture — assets per month, ads
            per store, pages per campaign — does more than a testimonial, because it maps directly
            onto their media plan.</p>
          <p class="ask">State your number. Make sure you could actually deliver it on Monday.</p>
        </div></div>
        <div class="step"><div class="step-no">05</div><div>
          <h4>One ask, repeated</h4>
          <p>No pricing table, no feature matrix, no second offer. A single action, restated at the
            end of the scroll. For a product with a qualification step, "Apply" outperforms "Sign
            up" — it implies the supply is constrained.</p>
          <p class="ask">Pick the one action. Delete everything competing with it.</p>
        </div></div>
        <div class="step"><div class="step-no">06</div><div>
          <h4>Name the buyer you want</h4>
          <p>Say who this is for in terms of their spend, their stage, or their category. It costs
            you the wrong leads and wins you the right ones, and it makes the claim above it
            legible — coverage means something different at ₹5L/month than at ₹50L.</p>
          <p class="ask">Finish the sentence: "This is for brands that —".</p>
        </div></div>
      </div>

      <h2>The ShopOS festive pitch</h2>
      <p>Same bones, our offer. This is the version you're effectively demoing on the day, and the
        one a brand hears when they ask what they're walking away with.</p>

      <div class="case">
        <div class="case-top">
          <h3 class="case-nm">Ship the festive season in a day, not a quarter.</h3>
          <p class="case-one">Built to run before the rush, not to look good in a deck. Creative
            and landing pages produced on ShopOS workflow and live in your Shopify store.</p>
        </div>
        <div class="case-facts">
          <div class="fact"><div class="k">Input</div><div class="v">Your store URL</div></div>
          <div class="fact"><div class="k">Output</div><div class="v">Ads + pages</div></div>
          <div class="fact"><div class="k">Lands in</div><div class="v">Shopify</div></div>
          <div class="fact"><div class="k">Timeline</div><div class="v">This season</div></div>
        </div>
        <div class="case-body">
          <h4>The inventory</h4>
          <p>Eleven hook patterns, ten ad formats, four script structures, and eighteen
            landing-page patterns — filed by the job they do, with the benchmark attached where one
            exists. That's the swipe file in this handbook, and it's what the workflow is built
            against.</p>

          <h4>What a brand walks away with</h4>
          <p>ShopOS credits to keep the workflow running past the event, and a call with the team
            to scope a forward-deployed engineer who takes it into production for the sale season.
            <strong>The event is the trial; the FDE is how it becomes infrastructure.</strong></p>

          <h4>Who it's for</h4>
          <p>Brands on Shopify with a festive calendar already committed and a media budget
            already allocated — where the constraint is creative supply and page throughput, not
            strategy.</p>
        </div>
      </div>

      <div class="callout">
        <p><strong>Use this as your own template.</strong> Run the six-part anatomy against
          whatever you build, and you have your demo narrative and your landing page in the same
          pass. The rubric in Scoring rewards exactly the things this structure forces you to
          decide.</p>
      </div>

      <h2>The post-click pitch</h2>
      <p>Track 02 has its own pitch, and it's a sharper one, because it rests on a gap the buyer
        can verify in thirty seconds by looking at their own account. Two moves do the work.</p>

      <h3>Borrow a model they've already bought</h3>
      <p>Meta predicts the best ad for every single impression — the buyer already believes this,
        because they watch it work every day. <strong>The pitch extends a mechanism they've
        accepted rather than introducing one they haven't.</strong> Before the click, Meta chooses
        the ad. After the click, everyone sees the same page. Stated that plainly, the gap argues
        for itself.</p>

      <h3>Reframe with a question they can't answer</h3>
      <p>“You'd never run two ads. So why run one page?” This is stronger than any benefit claim
        because it <strong>exposes an inconsistency in what they already do</strong> rather than
        asserting something about you. They kill losing creative in a day; the page has been
        untouched since launch.</p>
      <p>Then — and this is the part that stops it being glib — <strong>name why nobody did it
        before.</strong> Every landing page A/B test had to wait for statistical significance: two
        variants, three weeks, one answer. At that speed a portfolio was impossible. Naming the old
        constraint is what makes the reframe land as an observation rather than an accusation.</p>

      <h3>Ask for the thing you actually want</h3>
      <p>The easiest mistake is inheriting someone else's call to action. A pitch that ends in
        “book a 30-minute session” is selling a service; a pitch that ends in “go build one” is
        selling capacity. <strong>They are different businesses, and the CTA is where you declare
        which one you're in.</strong></p>
      <p>Ours is the second. The handbook is open, the repo takes pull requests, and the ask is to
        build — because the product is a workflow you own, not a batch of pages we deliver. If your
        build is a tool, your CTA is “use it.” If it's a service, it's “talk to us.” Pick
        deliberately rather than copying whatever the page you admired happened to do.</p>

      <div class="callout">
        <p><strong>The worked example is the front page of this site.</strong> A full pitch built
          on these moves — hero, reframe, why-a-workflow, three steps, offer, objection FAQ, one
          repeated ask — is at <a href="../">the root</a>. It obeys the Track 02 rules in the
          swipe file: no top nav, one goal, no autoplay hero, sticky CTA on mobile, proof beside
          the ask, zero form fields. Read it as a build reference, then replace the argument with
          yours.</p>
      </div>

      <div class="callout warn">
        <p><strong>Don't inherit someone else's number.</strong> A pitch like this usually carries
          a headline lift figure. Ours deliberately doesn't, because we haven't measured one yet —
          the page claims the <em>method</em> (“measured against a live holdout on your own
          traffic”) instead of a result. Put a number there only once you've earned it. An
          unearned benchmark is the fastest way to lose a room that buys media for a living.</p>
      </div>
    </div>`
  },

  {
    id:"toolkit", nav:"The toolkit",
    title:`Everything we use, <em>in one place.</em>`,
    lede:`The index. Each item is a section of this handbook — patterns to apply, prompts to run, protocols to follow, templates to fill. <strong>Nothing here is behind a form.</strong>`,
    html:`<div class="prose">
      <p>These are working documents rather than lead magnets, and they're written for two tracks
        rather than one. Everything is in the repo, and everything takes pull requests.</p>
      <div class="index-list" id="toolkit-index"></div>
    </div>`
  },

  {
    id:"swipe", nav:"Swipe file",
    title:`Patterns, filed by the <em>job they do.</em>`,
    lede:`Not by the brand that ran them. Each card carries what it is, the mechanism underneath, and the number attached where one exists. A <strong>dashed card</strong> is a benchmark — judge with it, don't build from it. A card with a <strong>red edge</strong> tested negative.`,
    html:"__SWIPE__"
  },

  {
    id:"prompts", nav:"Prompt chain",
    title:`A chain, <em>not a list.</em>`,
    lede:`Each stage eats the previous stage's output. Run them out of order and you mostly get confident nonsense — the hook prompts are only as good as the customer language you feed them. <strong>Bold marks what you fill in.</strong>`,
    html:"__PROMPTS__"
  },

  {
    id:"teardown", nav:"Teardown protocol",
    title:`Take the angle. <em>Leave the execution.</em>`,
    lede: window.PROTOCOL.intro,
    html:"__PROTOCOL__"
  },

  {
    id:"briefs", nav:"Briefs",
    title:`Decide it here, <em>not halfway through.</em>`,
    lede:`Both templates force the decisions teams usually discover mid-build. Filling one takes about fifteen minutes and saves roughly three hours. <strong>Bold marks what you fill in.</strong>`,
    html:"__BRIEFS__"
  },

  {
    id:"scoring", nav:"Scoring",
    title:`Published up front, <em>on purpose.</em>`,
    lede:`Teams optimise for what gets measured, so the weights are visible from the start. Both rubrics deliberately reward the argument over the polish — a beautiful asset with no angle underneath scores badly, and that is the intended behaviour.`,
    html:"__SCORING__"
  },

  {
    id:"ship", nav:"Ship & after",
    title:`The demo is <em>part of the build.</em>`,
    lede:`Work that can't be shown in three minutes scores as work that wasn't finished. And what happens after the event matters more than the event — that's where a day's build turns into something live for the season.`,
    html:`<div class="prose">
      <h2>What to submit</h2>
      <h3>Track 01 — Creatives</h3>
      <ul>
        <li>The assets themselves, in the ratios you'd actually run.</li>
        <li><strong>Your angle in one sentence</strong>, with no product name in it.</li>
        <li>The competitor teardown you started from.</li>
        <li>Your variants, labelled with the single variable each one changes.</li>
      </ul>
      <h3>Track 02 — Landing pages</h3>
      <ul>
        <li>A live URL, mobile-first. Not a design file.</li>
        <li>The ad or entry point it's built to receive, so message match can be scored.</li>
        <li>Your objection → proof map.</li>
        <li>Load time on mobile data, measured.</li>
        <li>What it would take to put this on a real Shopify store this season.</li>
      </ul>

      <h2>The three-minute demo</h2>
      <ol>
        <li><strong>0:00–0:20 — The one sentence.</strong> What it is, who it's for. If a judge
          can't repeat it back, nothing after this lands.</li>
        <li><strong>0:20–1:30 — Show the thing working.</strong> Live, on a real input, from a
          cold start. Not slides describing it.</li>
        <li><strong>1:30–2:30 — The argument.</strong> Why this angle, what you tore down to find
          it, what the pattern is. This is where the rubric's points actually are.</li>
        <li><strong>2:30–3:00 — What you'd change next.</strong> One variable. Naming it correctly
          demonstrates more judgement than a feature list.</li>
      </ol>
      <div class="callout warn">
        <p><strong>Demo failure modes, in order of frequency:</strong> opening with the origin
          story instead of the product · a video of the thing instead of the thing · explaining
          architecture nobody asked about · discovering the demo needs a warm cache · running long
          and getting cut before the argument.</p>
      </div>

      <h2>After the event</h2>
      <p>Two things happen, and they're the reason the day is worth more than a certificate.</p>
      <div class="callout">
        <p><strong>ShopOS credits.</strong> The workflow you built on doesn't switch off when the
          room empties. Whatever you made keeps running against your store.</p>
        <p><strong>A call with the ShopOS team.</strong> To scope a forward-deployed engineer who
          takes what you built into production for the sale season — so the festive calendar you
          already committed to has the creative supply and the pages behind it.</p>
      </div>
      <p>The window matters. A build that goes live before the season is a revenue decision; the
        same build in December is a learning experience.</p>

      <h2>Post it while it's news</h2>
      <p>The strongest thing you own at the end of the day is the credential — built at the event,
        placed, shipped. That decays fast. The launch post below is the structure that worked, with
        the specifics emptied out.</p>
      <div class="blocks">__LAUNCHPOST__</div>
      <p>Two notes on using it. The origin beat only works with real numbers — participants, teams,
        placement — so collect them on the day. And the P.S. crediting the event is not decoration:
        it's what makes the post shareable by everyone else who was there.</p>
    </div>`
  }
];
