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
  orbit: [
    { n:"The outcome", w:"40", d:"What your track asks for. Visibility: a stranger stops scrolling. Revenue: one promise from the ad to the landing page to the email. AI Agency: it runs on a product it has never seen." },
    { n:"The angle", w:"30", d:"One sentence, no product name: a real reason to care. Polish with no angle scores low." },
    { n:"On-brand", w:"30", d:"The brand would run it tomorrow, with no designer fixing it first." }
  ]
};

/* What brands can build — seeds, not specs. */
window.IDEAS = [
  { t:"Ad engine from your winners", d:"One input: your top 3 ads. Finds what made them work, writes new angles on the same bones and returns 12+ statics ready for Ads Manager.", s:"Track 01 · the proven shape" },
  { t:"Creative refresh loop", d:"Watches which ads are fatiguing and generates iterations of the winner (new hooks on a proven body) instead of fresh concepts from zero.", s:"Track 01" },
  { t:"Hook tester", d:"Generates twenty openings against one angle, then stress-tests each as a skeptical media buyer and kills the ones that pattern-match as ads.", s:"Track 01" },
  { t:"Occasion switcher", d:"Takes one winning static and re-stages it for every moment in your 2027 calendar, with an argument that survives the discount being removed.", s:"Track 01" },
  { t:"Rival rebuild", d:"Give it a competitor's longest-running ad. It names the pattern and the angle, then rebuilds the angle on your product with your own proof. Never a copy.", s:"Track 02" },
  { t:"Category watch", d:"Pulls what rivals are claiming this month and returns the three claims nobody in the category is making, as ready-to-test statics.", s:"Track 02" },
  { t:"Review-to-video pipeline", d:"Reads the store's own reviews, pulls the verbatim customer language and turns it into short UGC-style scripts and Seedance videos. The proof and the copy come from the same place.", s:"Track 01" },
  { t:"Proof explainer", d:"Takes the one objection in your comments and answers it in a 15-second video and a 6-second cut, built from your own product shots.", s:"Track 01" }
];

/* ---------- sections ---------- */
window.SECTIONS = [
  {
    id:"welcome", nav:"Welcome",
    title:`The playbook. <em>For going deeper.</em>`,
    lede:`The deep reference behind the Assemble Buildathon. Read the <a href="../handbook/">builder handbook</a> first: rules, tracks, scoring and the day, in ten short chapters.`,
    html:`<div class="prose"><h2>What's in here</h2><ul><li><strong>What good looks like</strong>: a winning build and the pattern under it</li><li><strong>The AI build</strong>: a seven-stage spec for a creative engine</li><li><strong>The pitch</strong>: how to pitch what you build</li><li><strong>The swipe files</strong>: creative, landing page and content patterns</li><li><strong>The prompt chain, teardown protocol and briefs</strong>: the tools you build with</li></ul><div class="callout"><p><strong>The short version lives in the <a href="../handbook/">builder handbook</a>.</strong> This playbook is the deep reference: swipe files, the prompt chain, the teardown protocol and the briefs.</p></div></div>`
  },

  {
    id:"the-day", nav:"The day", tick:"New",
    title:`The day <em>lives in the handbook.</em>`,
    lede:`Timings, teams, the CXO room and scoring are in the <a href="../handbook/#welcome">builder handbook</a> and <a href="../flow/">How Assemble works</a>.`,
    html:`<div class="prose"><div class="callout"><p><strong>The short version lives in the <a href="../handbook/">builder handbook</a>.</strong> This playbook is the deep reference: swipe files, the prompt chain, the teardown protocol and the briefs.</p></div></div>`
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
      <p>Seeds, not specs. Each of these fits one Assemble track, is small enough to build in a day,
        and is useful enough that a brand would keep running it through 2027.</p>
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
    id:"ai-build", nav:"The AI build", tick:"New",
    title:`One product in. <em>Fifty ads out.</em>`,
    lede:`A worked spec for the creative engine: pair a frontier model with an agent and turn a single product into a quarter's worth of testable variations in one pass. <strong>Built for a year of launches, not one sale.</strong>`,
    html:`<div class="prose">
      <h2>The pattern being copied</h2>
      <p>The version going around collapses what used to be five separate rounds — strategy,
        scripting, casting, shooting, production — into a single workflow. One product goes in,
        fifty-plus ad variations come out, and the model handles creative angles, synthetic actors,
        real-life product situations, and variation across skin tones, textures, hair, locations
        and environments.</p>
      <p><strong>The transferable claim is throughput, not novelty.</strong> Nothing in that list
        is individually new. What's new is that it happens in one pass, which means the unit of
        work stops being “an ad” and becomes “a test batch.”</p>

      <h2>Why India in 2027 isn't a find-and-replace</h2>
      <p>The original is built for Black Friday: a single-day, discount-led, largely single-market
        event. A brand's 2027 in India is none of those things, and the differences change the spec
        rather than just the copy.</p>
      <div class="lesson">
        <div class="lesson-row"><div class="lk">Occasion, not discount</div><div class="lv">Black Friday's angle is price. The angles that work across an Indian year are <b>gifting, family, new beginnings, self-reward and restocking</b>: arguments that survive with the discount removed. An angle that collapses without a percentage-off is a sale wearing a costume.</div></div>
        <div class="lesson-row"><div class="lk">A year, not a day</div><div class="lv">From the new year through summer, monsoon, the wedding season and the festive run, 2027 is a string of distinct moments, each with its own buying reason. That's not one campaign. It's a <b>calendar of angles</b>, which is exactly what a workflow is good at and a shoot is not.</div></div>
        <div class="lesson-row"><div class="lk">Regional variation is the axis</div><div class="lv">The reference varies skin tone and environment. Here the high-value axis is <b>region, language and household context</b> — the same product, the same angle, rendered for genuinely different settings. This is where the variation count actually earns its keep.</div></div>
        <div class="lesson-row"><div class="lk">Proof is the objection</div><div class="lv">Every occasion creates its own doubt: <b>will it arrive before the date, is it actually healthy, will it fit</b>. Every variation needs a proof beat that answers the doubt of its moment, or the creative works and the conversion doesn't.</div></div>
      </div>

      <h2>The build</h2>
      <p>Seven stages. Stages 01–03 are the prompt chain in this handbook, already written — don't
        rewrite them. Stages 04–07 are what the team builds around it.</p>
      <div class="steps">
        <div class="step"><div class="step-no">01</div><div>
          <h4>Ingest the product</h4>
          <p>One input: a Shopify product or collection URL. Pull title, description, images,
            price and — the part most teams skip — <strong>the existing reviews</strong>, which are
            where the customer's own language lives.</p>
          <p class="ask">Prompt: Voice-of-customer extraction. Feed it the reviews, not the product copy.</p>
        </div></div>
        <div class="step"><div class="step-no">02</div><div>
          <h4>Generate angles</h4>
          <p>Twelve angles, then filtered by the occasion pass, which ranks them by how badly they
            break when you remove the discount. <strong>The survivors are the ones worth
            producing.</strong></p>
          <p class="ask">Prompts: Angle generation → Occasion angle pass. Both already in the chain.</p>
        </div></div>
        <div class="step"><div class="step-no">03</div><div>
          <h4>Write and stress-test the hooks</h4>
          <p>Twenty hooks per surviving angle, then killed down by the stress test. Expect to keep
            two or three per angle. This is the step that decides whether the other fifty
            variations are worth rendering.</p>
          <p class="ask">Prompts: Hook batch → Hook stress test.</p>
        </div></div>
        <div class="step"><div class="step-no">04</div><div>
          <h4>Expand across the variation matrix</h4>
          <p>Here the agent takes over. Each surviving hook is rendered across the variation axes
            that matter for your 2027 calendar: <strong>occasion moment × regional setting × household
            context × format</strong>. Four hooks across a modest matrix is where the fifty comes
            from — it's multiplication, not fifty separate ideas.</p>
          <p class="ask">Cap the matrix before you run it. Unbounded expansion produces volume nobody reviews.</p>
        </div></div>
        <div class="step"><div class="step-no">05</div><div>
          <h4>Produce the assets</h4>
          <p>Statics on Seedream, short videos on Seedance, product imagery into real-life
            scenes, all inside Sloosh on the day's build credits. Everything lands in the ratios you'd actually run, with copy attached —
            <strong>ready for Ads Manager without a second tool.</strong></p>
          <p class="ask">The last mile is where these systems usually die. Budget real time for it.</p>
        </div></div>
        <div class="step"><div class="step-no">06</div><div>
          <h4>Label everything on the way out</h4>
          <p>Every asset carries its angle, hook pattern, and the single variable that distinguishes
            it from its sibling. Without this you have fifty ads and no ability to learn from
            them — <strong>volume without attribution is just spend.</strong></p>
          <p class="ask">This is also what the scoring rubric rewards. Build it in, don't bolt it on.</p>
        </div></div>
        <div class="step"><div class="step-no">07</div><div>
          <h4>Close the loop</h4>
          <p>Feed hook rate and CPA back in, retire the fatigued, and let the iteration prompt
            generate fresh openings on bodies that are already winning. <strong>This is the step
            that makes it a workflow rather than a generator.</strong></p>
          <p class="ask">Prompt: Iteration pass. Without stage 07 you've built a batch tool.</p>
        </div></div>
      </div>

      <h2>Which model</h2>
      <p>At Assemble the images and video come from <strong>BytePlus</strong> (Seedream for statics,
        Seedance for video), run inside Sloosh on the build credits we cover for the day. The text chain in stages
        01–03 is model-agnostic and works on either <strong>Claude or GPT</strong>: the prompts are
        written to be portable, and nothing in them depends on a provider-specific feature.</p>
      <p>The one thing that does matter: stages 02 and 03 hand the model long, constraint-heavy
        prompts with explicit rejection criteria, and the output is only useful if those
        constraints are actually honoured. <strong>Test both on the hook batch prompt and keep
        whichever discards more of its own output.</strong> A model that returns twenty hooks when
        twelve should have been rejected is doing the expensive half of the work and skipping the
        valuable half.</p>

      <h2>Done looks like</h2>
      <ul>
        <li>A store URL goes in with no other configuration.</li>
        <li>Out comes a labelled batch — angle, hook pattern, variable — in runnable ratios.</li>
        <li>Every angle survives the discount being removed.</li>
        <li>Every variation carries a proof beat for the doubt its occasion creates.</li>
        <li>It runs again on a second product with no edits.</li>
        <li>Performance data can be fed back in to produce the next batch.</li>
      </ul>

      <div class="callout warn">
        <p><strong>Owner: Prashant + engineer.</strong> This is an assigned build, not an idea on
          the pile — the spec above is meant to be implementable without further briefing. Open a
          PR against this section as it gets built, and replace the stage descriptions with what
          the thing actually does once it does it.</p>
      </div>

      <div class="callout">
        <p><strong>Timing is the whole argument.</strong> Assemble sits on 16 December, two weeks
          before the year turns. A creative engine that exists on 1 January runs every launch of
          2027; the same engine built in March has already missed a quarter.</p>
      </div>
    </div>`
  },

  {
    id:"pitch", nav:"The pitch",
    title:`Sell the supply, <em>not the software.</em>`,
    lede:`Whatever you build, you have to pitch it — on the day to judges, and afterwards to a brand. This is the anatomy of a pitch page that works for a creative product, and the Assemble pitch built on the same bones.`,
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

      <h2>The Assemble pitch</h2>
      <p>Same bones, our offer. This is the version you're effectively demoing on the day, and the
        one a brand hears when they ask what they're walking away with.</p>

      <div class="case">
        <div class="case-top">
          <h3 class="case-nm">Build like the top 1%.</h3>
          <p class="case-one">Your brand problem. Our playbook. A working AI workflow, built by your
            own team in one day on Sloosh, running into 2027.</p>
        </div>
        <div class="case-facts">
          <div class="fact"><div class="k">Input</div><div class="v">Your top ads + reviews</div></div>
          <div class="fact"><div class="k">Output</div><div class="v">A creative workflow</div></div>
          <div class="fact"><div class="k">Lands in</div><div class="v">Sloosh + Ads Manager</div></div>
          <div class="fact"><div class="k">Timeline</div><div class="v">One day</div></div>
        </div>
        <div class="case-body">
          <h4>The inventory</h4>
          <p>Eleven hook patterns, ten ad formats, four script structures, and eighteen
            landing-page patterns — filed by the job they do, with the benchmark attached where one
            exists. That's the swipe file in this handbook, and it's what the workflow is built
            against.</p>

          <h4>What a brand walks away with</h4>
          <p>The engine itself and the first approved batch, still in their Sloosh workspace. <strong>Brand teams play for $1,500. Builders play for a paid pilot.</strong></p>

          <h4>Who it's for</h4>
          <p>Consumer brands doing ₹1Cr+ in revenue, with ads already running, where the
            constraint is creative supply rather than strategy.</p>
        </div>
      </div>

      <div class="callout">
        <p><strong>Use this as your own template.</strong> Run the six-part anatomy against
          whatever you build, and you have your demo narrative and your landing page in the same
          pass. The rubric in Scoring rewards exactly the things this structure forces you to
          decide.</p>
      </div>

      <h2>The post-click pitch</h2>
      <p>Landing pages are beyond the Assemble day, but if your creative lands on a page, this is the
        pitch for it. It's a sharp one, because it rests on a gap the buyer
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
          repeated ask — is at <a href="../">the root</a>. It obeys the rules in the landing page swipe file: no top nav, one goal, no autoplay hero, sticky CTA on mobile, proof beside
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
      <p>These are working documents rather than lead magnets, and they work for all three tracks: Visibility, Revenue and AI Agency. Everything is in the repo, and everything takes pull requests.</p>
      <div class="index-list" id="toolkit-index"></div>
    </div>`
  },

  {
    id:"cards", nav:"The cards", tick:"New",
    title:`128 problems your brand <em>already has.</em>`,
    lede:`The Sloosh × DSG deck, rewritten for 2027, with 51 cards tagged to the three Assemble tracks and an engine recipe each. Each card names one problem — click it to flip for the build that fixes it. <strong>Filter by track or section, or search a brand name.</strong>`,
    html:`<div class="prose">
      <p><strong>Every card names a brand.</strong> All 128 are matched to one of the 70 live DSG
        portfolio companies — Active or Partially Exited, every one above ₹1 Cr. Brand and problem
        are both chosen to fit the build on the back, so the fix always suits the company named.</p>
      <p>Pick the card that makes you wince. For Assemble, pick from the track filters: those builds fit one day on Sloosh. If two apply, take the
        one whose metric you already report on, because you will be able to prove the change.</p>
      <div class="callout warn">
        <p><strong>These are conversation starters, not findings.</strong> Each problem is inferred
          from the brand's category and its build, not from an audit of
          anyone's store or ad account. The framing is conditional on purpose: flip it <em>if</em>
          it's true.</p>
      </div>
    </div>
    <div class="cards-mount" id="cards-mount"></div>`
  },

  {
    id:"swipe-creative", nav:"Creative swipe file",
    title:`Hooks, formats, <em>and the first 1.5 seconds.</em>`,
    lede:`Everything before the click, filed by the job it does rather than the brand that ran it. Each card carries what it is, the mechanism underneath, and the number attached where one exists. A <strong>dashed card</strong> is a benchmark — judge with it, don't build from it. A card with a <strong>red edge</strong> tested negative.`,
    html:"__SWIPE_CREATIVE__"
  },

  {
    id:"swipe-lp", nav:"Landing page swipe file",
    title:`Above the fold, proof, <em>and what you're charging them.</em>`,
    lede:`Everything after the click. The creative sold a promise; these are the patterns that decide whether the page keeps it. Same card grammar as the creative file — <strong>dashed</strong> is a benchmark, a <strong>red edge</strong> tested negative.`,
    html:"__SWIPE_LP__"
  },

  {
    id:"content-swipe", nav:"Content swipe file", tick:"New",
    title:`Where to go <em>and look at the work.</em>`,
    lede:`The libraries worth opening before you build anything. <strong>Study how patterns get filed, not just what's in them</strong> — the taxonomy is usually more useful than any single asset.`,
    html:`<div class="prose">
      <p>Everything in sections 07 and 08 was distilled from sources like these. Go upstream when
        you want more than the pattern — the live examples, the current ones, the ones running in
        your category this week.</p>

      <h2>Ad creative</h2>
      <div class="index-list">
        <a class="index-item" href="https://www.facebook.com/ads/library/" target="_blank" rel="noopener">
          <div class="n">01</div>
          <div><div class="nm">Meta Ad Library</div><div class="ds">The primary source, and free. Every active ad, searchable by advertiser. <strong>How long an ad has been running is the only real performance signal you get without an account</strong> — a ninety-day ad is evidence, a new one is a guess.</div></div>
          <div class="go">Start here →</div></a>
        <a class="index-item" href="https://ads.tiktok.com/business/creativecenter/" target="_blank" rel="noopener">
          <div class="n">02</div>
          <div><div class="nm">TikTok Creative Center</div><div class="ds">Top-performing ads by category, region and objective, with engagement data attached. Free, and the regional filter matters for India.</div></div>
          <div class="go">Free →</div></a>
        <a class="index-item" href="https://www.foreplay.co/" target="_blank" rel="noopener">
          <div class="n">03</div>
          <div><div class="nm">Foreplay</div><div class="ds">Saved-ad libraries and brand tracking. The useful part is building your own filed collection rather than browsing someone else's.</div></div>
          <div class="go">Paid →</div></a>
        <a class="index-item" href="https://www.atria.so/" target="_blank" rel="noopener">
          <div class="n">04</div>
          <div><div class="nm">Atria</div><div class="ds">Creative analytics and format breakdowns — what shape of asset is working, not just which one.</div></div>
          <div class="go">Paid →</div></a>
        <a class="index-item" href="https://motionapp.com/" target="_blank" rel="noopener">
          <div class="n">05</div>
          <div><div class="nm">Motion</div><div class="ds">Creative reporting against spend. Closest thing to a dashboard for the questions in section 07's benchmark rail.</div></div>
          <div class="go">Paid →</div></a>
      </div>

      <h2>Landing pages and conversion</h2>
      <div class="index-list">
        <a class="index-item" href="https://baymard.com/" target="_blank" rel="noopener">
          <div class="n">06</div>
          <div><div class="nm">Baymard Institute</div><div class="ds">Large-sample ecommerce UX research — <strong>the closest thing to primary evidence in this space</strong>, and the one source here that isn't a vendor blog. Check claims against it before you quote them.</div></div>
          <div class="go">Research →</div></a>
        <a class="index-item" href="https://land-book.com/" target="_blank" rel="noopener">
          <div class="n">07</div>
          <div><div class="nm">Land-book</div><div class="ds">A curated gallery. Useful for structure and sequencing; judge it on layout logic rather than visual taste.</div></div>
          <div class="go">Gallery →</div></a>
        <a class="index-item" href="https://saaslandingpage.com/" target="_blank" rel="noopener">
          <div class="n">08</div>
          <div><div class="nm">SaaS Landing Page</div><div class="ds">Filed by page section, which is the part worth copying — it lets you study heroes against heroes.</div></div>
          <div class="go">Gallery →</div></a>
      </div>

      <h2>Toolkits</h2>
      <div class="index-list">
        <a class="index-item" href="https://app.notion.com/p/adcrate/The-Adcrate-Creative-Toolkit-34cd5575919580f18be7fcfa1b91fb58" target="_blank" rel="noopener">
          <div class="n">09</div>
          <div><div class="nm">Adcrate Creative Toolkit</div><div class="ds">A Notion resource hub: an ads-menu playbook, a prompt list, brief templates and a creative tracker. Worth reading for how a performance shop files its own working documents.</div></div>
          <div class="go">Notion →</div></a>
      </div>

      <div class="callout warn">
        <p><strong>Browse on a timer.</strong> Reference libraries are the most enjoyable way to
          avoid building. Give yourself twenty minutes, take three patterns, then close the tab and
          run the teardown protocol on one of them.</p>
      </div>
    </div>`
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
    lede:`One outcome per track, proven on screen. Hit the base, then keep going: overflow is uncapped. The <a href="../handbook/#scoring">handbook</a> has the gates and power-ups.`,
    html:"__SCORING__"
  },

  {
    id:"ship", nav:"Ship & after",
    title:`Submit and demo <em>live in the handbook.</em>`,
    lede:`What to lock by 16:00, the three-minute showcase and the script prompt are in the <a href="../handbook/#submit">builder handbook</a>.`,
    html:`<div class="prose"><div class="callout"><p><strong>The short version lives in the <a href="../handbook/">builder handbook</a>.</strong> This playbook is the deep reference: swipe files, the prompt chain, the teardown protocol and the briefs.</p></div></div>`
  }
];
