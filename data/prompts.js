/* ============================================================================
   PROMPTS, BRIEFS and the LAUNCH POST skeleton.
   In `text`, wrap fill-in placeholders in <b>…</b>. They render blue on the
   page and are stripped from the clipboard copy automatically.
   To contribute: append to the relevant stage's `items`. See CONTRIBUTING.md.
   ========================================================================== */

window.PROMPTS = [
  { stage:"Research", sub:"before you write anything", items:[
    { name:"Voice-of-customer extraction", use:"Run first. Everything downstream is only as good as the language this returns.", text:
`You are a direct-response creative strategist.

Below are customer reviews, support tickets and forum posts about <b>[PRODUCT]</b>.

<b>[PASTE 30–100 RAW REVIEWS / TICKETS / THREADS]</b>

Extract, using the customers' own words only — do not paraphrase into
marketing language:

1. The five phrases they use to describe the PROBLEM.
2. The three objections that appear most often, with a verbatim quote each.
3. The single outcome mentioned most often.
4. Any phrase that appears verbatim three or more times.
5. The words they use that our marketing does NOT currently use.

Output as a table. Flag anything you inferred rather than found.` },
    { name:"Competitor ad teardown", use:"Point it at whatever is currently scaling in the category.", text:
`Here is a competitor ad that is currently scaling: <b>[PASTE TRANSCRIPT
OR DESCRIBE THE AD FRAME BY FRAME]</b>

Break it down:
1. HOOK — which pattern is it? (negative open / open loop / result-first /
   before-after / stat drop / bold claim / list promise / social proof /
   scarcity / price anchor)
2. ANGLE — the underlying argument, stated in one sentence, with no
   reference to their product or brand.
3. AWARENESS STAGE it assumes: unaware / problem-aware / solution-aware /
   product-aware / most-aware.
4. PROOF it leans on, and what would break if that proof were removed.
5. The ONE thing doing the work. If you had to keep a single element, which.

Then: state the angle in a form that could be run by a company that
sells something completely different.` },
    { name:"Angle generation", use:"Angles, not executions. You want arguments you could shoot ten different ways.", text:
`Product: <b>[PRODUCT + WHAT IT ACTUALLY DOES]</b>
Customer language: <b>[PASTE OUTPUT OF THE VOICE-OF-CUSTOMER PROMPT]</b>

Generate 12 distinct ANGLES — underlying arguments for why this person
should buy. Not hooks, not headlines, not executions.

Rules:
- Each angle must be defensible in one sentence.
- Each must be different in KIND, not in wording. If two could be shot
  the same way, they are one angle.
- At least three must be uncomfortable — things a brand team would
  hesitate to approve.
- For each, name the awareness stage it works on and the objection it
  pre-empts.

Reject any angle that is just a feature restated as a benefit.` },
    { name:"Festive angle pass", use:"Run after angle generation when you're building for a sale season.", text:
`Here are my angles: <b>[PASTE THE 12 ANGLES]</b>
Season: <b>[FESTIVE PERIOD + THE DATES THAT MATTER]</b>
Category: <b>[WHAT THE BRAND SELLS]</b>

For each angle:
1. Does the season change the argument, or just the urgency? Only the
   first is a festive angle. The second is a discount with a costume on.
2. What does the shopper believe during this period that they don't
   believe in a normal month? Gifting, self-reward, restocking, upgrading.
3. Rewrite the angle to use that belief, without mentioning a discount.
4. Name the objection the season CREATES — delivery timing, authenticity,
   "will it arrive before the date" — and what proof kills it.

Rank the rewritten angles by how badly they break if you remove the
discount. The ones that survive are the ones worth shooting.` }
  ]},
  { stage:"Hooks", sub:"volume, then judgement", items:[
    { name:"Hook batch", use:"Generate wide, then cut hard. Expect to keep two or three.", text:
`Angle: <b>[ONE ANGLE FROM THE PREVIOUS STEP]</b>
Customer's own words: <b>[PASTE THE VERBATIM PHRASES]</b>

Write 20 hooks for a short-form video ad, spread across these patterns:
negative open, open loop, result-first rewind, before/after, stat drop,
bold claim, list promise, social proof cold open.

Hard constraints — a hook that breaks any of these is discarded:
- Sayable out loud in under 3 seconds.
- Contains at least one concrete noun from the customer's world.
- Does not contain the brand name.
- Does not contain: introducing, revolutionary, game-changing, unlock,
  elevate, seamless, effortless, transform your.
- Reads as something a person would say, not something a brand would write.

Label each with its pattern. Then rank your own top 3 and say why.` },
    { name:"Hook stress test", use:"Before anything gets shot. Kills the ones that only look good on a slide.", text:
`Here are my shortlisted hooks: <b>[PASTE 5–10 HOOKS]</b>

For each, answer as a skeptical media buyer:
1. What is the viewer's first thought at 0.5 seconds? Write it verbatim.
2. Does this look like an ad within the first half-second? Yes/no, why.
3. What does the NEXT frame have to show for this hook to pay off?
   If you can't answer, the hook is a phrase, not a hook.
4. Which of the 2026 overexposed patterns does it resemble
   (ring-lit demo, talking-head value list)?
5. Kill, iterate, or shoot?

Be harsh. Assume most of these should be killed.` }
  ]},
  { stage:"Scripts & copy", sub:"the body under the hook", items:[
    { name:"Script build", use:"Timings are the point. A script that runs long fails on hold rate, not on writing.", text:
`Hook: <b>[WINNING HOOK]</b>
Angle: <b>[THE ANGLE]</b>
Proof available: <b>[REVIEWS, DATA, DEMO, CREDENTIAL]</b>
Platform: <b>[META / TIKTOK / YOUTUBE SHORTS]</b>

Write the script to these beats and timings:
  0–3s    HOOK — as written above, unchanged
  3–10s   PROBLEM — name the pain in the customer's words
  10–20s  SOLUTION — product as the answer, with one piece of proof
  last 3–5s  CTA — exactly one next step

Rules:
- Total runtime 9–15 seconds for cold traffic.
- Written to be SPOKEN. Read it aloud; if you stumble, rewrite the line.
- Voice must be platform-native: TikTok sounds like a person posting,
  Meta blends into the feed. Never voiceover-announcer.
- One idea per sentence.

Output three columns: timecode / spoken line / what's on screen.` },
    { name:"Iteration pass", use:"Your cheapest volume lever. New openings on a body that already works.", text:
`This ad is a proven winner: <b>[PASTE THE FULL WINNING SCRIPT]</b>
It won because: <b>[WHAT YOU THINK THE DRIVER WAS]</b>

Keep the body and the CTA exactly as they are. Generate 10 new openings
(0–3s) that hand off cleanly into the existing 3-second mark.

Each must:
- Use a DIFFERENT hook pattern from the original.
- Still set up the same problem, so the body still makes sense.
- Change one variable only. If it needs a new body, it's a new ad, not
  an iteration — say so and set it aside.

Flag any where the handoff is rough.` }
  ]},
  { stage:"Landing page", sub:"keeping the promise the ad made", items:[
    { name:"Message-match audit", use:"The first thing to check when a page with good traffic converts badly.", text:
`The ad that sends this traffic says: <b>[AD HOOK + ON-SCREEN OFFER]</b>
The landing page headline says: <b>[CURRENT HEADLINE + SUBHEAD]</b>

1. Score message match 1–5. A 5 means the visitor sees the ad's exact
   offer, in the ad's own words, without reading twice.
2. Name every word the ad used that the page dropped.
3. Name every word the page added that the ad never promised.
4. Rewrite the headline so it repeats the ad's offer in the ad's own
   language. Give three versions.
5. Rewrite the subheadline to carry the HOW, so the headline only has to
   carry WHAT and WHO.

Keep the value proposition under 30 words total.` },
    { name:"Five-second test", use:"Simulates the only test that matters above the fold.", text:
`Here is the above-the-fold content of a landing page:
<b>[PASTE HEADLINE, SUBHEAD, CTA, VISIBLE PROOF, AND DESCRIBE THE VISUAL]</b>

Answer strictly as a first-time visitor who has looked for five seconds
and no longer:

1. What is this? (If unclear, say "unclear" — do not infer.)
2. Who is it for?
3. What does it want me to do?
4. Why should I believe it?
5. What is stopping me?

Then: name the single change that would most improve answer 1.
Then: is there more than one call to action visible? If yes, which to cut.` },
    { name:"Objection → proof map", use:"Turns a wall of testimonials into placed proof.", text:
`Product: <b>[PRODUCT]</b>
Audience: <b>[WHO]</b>
Page sections in order: <b>[LIST THEM]</b>
Proof assets available: <b>[TESTIMONIALS, LOGOS, NUMBERS, CERTS, DEMOS]</b>

1. List the objections a visitor forms, in the order they form them as
   they scroll.
2. For each, name the ONE proof asset that answers it.
3. Place each proof asset at the exact section where its objection forms
   — not earlier, not in the footer.
4. Identify which proof assets answer nothing. Cut them.
5. Confirm at least one proof element sits above the fold and one sits
   immediately before the primary CTA.

Target three to five placed proof elements. More than five means you're
decorating, not persuading.` },
    { name:"Friction audit", use:"Run against the form and the ask, not the copy.", text:
`Here is the conversion flow: <b>[FORM FIELDS, STEPS, CTA COPY, WHAT
HAPPENS ON SUBMIT]</b>

1. List every field. For each, state what it is used for within 24 hours
   of submission. Any field that fails this is cut — say so explicitly.
2. Could this be staged into progressive steps? Show the split.
3. Rewrite the CTA button to name the action AND the value. Reject
   "Get started", "Learn more", "Submit", "Continue".
4. What happens after submit, and does the page say so before they click?
5. On mobile: is the ask visible without scrolling back? If not, specify
   a sticky treatment.

Report expected direction of impact for each change, and say which one
you'd ship first.` },
    { name:"Shopify page brief", use:"Turns a collection or product into a campaign page spec you can build.", text:
`Store: <b>[SHOPIFY STORE URL]</b>
Target collection or product: <b>[URL]</b>
Traffic source: <b>[THE AD OR CAMPAIGN THAT WILL SEND TRAFFIC]</b>
Season: <b>[FESTIVE PERIOD]</b>

Produce a build spec for a dedicated campaign landing page:

1. HEADLINE that repeats the ad's offer in the ad's own words.
2. HERO choice — giant number / product-forward / value grid — and say
   which product images from the store to use. No autoplay video.
3. The three to five OBJECTIONS this shopper forms, and which existing
   store asset answers each: reviews, ratings, shipping policy, returns,
   size guide, certifications.
4. Which sections of the existing theme to REMOVE for this page: nav,
   cross-sells, related collections, anything that isn't the one goal.
5. The single conversion goal, and the CTA copy that names action + value.
6. What must be true on mobile at 390px, listed as pass/fail checks.

Output as a spec a developer can build from without asking questions.` }
  ]}
];

window.BRIEFS = [
  { name:"Creative brief", use:"One angle per brief. If you need two angles, write two briefs.", text:
`CREATIVE BRIEF — <b>[PROJECT]</b> — <b>[DATE]</b>

ANGLE            <b>[The argument, one sentence. Not a feature.]</b>
AUDIENCE         <b>[Who, specifically. Not a demographic — a situation.]</b>
AWARENESS        <b>[unaware / problem / solution / product / most-aware]</b>
OBJECTION        <b>[The one thing stopping them. Just one.]</b>

HOOK             <b>[Verbatim. Under 3 seconds spoken.]</b>
HOOK PATTERN     <b>[negative open / open loop / result-first / …]</b>
FORMAT           <b>[ugly ad / UGC testimonial / problem-solution / …]</b>
RUNTIME          <b>[9–15s cold · longer only with a reason]</b>

BEATS
  0–3s           <b>[hook — on screen and spoken]</b>
  3–10s          <b>[problem, in customer language]</b>
  10–20s         <b>[solution + the one proof point]</b>
  last 3–5s      <b>[single CTA]</b>

PROOF            <b>[The specific asset. "Testimonials" is not an asset.]</b>
CTA              <b>[Exact words]</b>

DELIVERABLES     <b>[ratios, cuts, captions burned or not]</b>
DO NOT           <b>[Ring light. Brand name in the first 3s. Voiceover
                 announcer read. Anything on the banned-words list.]</b>
REFERENCE        <b>[Link to the ad this is iterating on, if any]</b>` },
  { name:"Landing page brief", use:"Write this before anyone opens a design tool.", text:
`LANDING PAGE BRIEF — <b>[PROJECT]</b> — <b>[DATE]</b>

TRAFFIC FROM     <b>[The exact ad. Paste its hook and on-screen offer.]</b>
ONE GOAL         <b>[The single action. If there are two, pick one.]</b>
SUCCESS METRIC   <b>[What number moves, measured how]</b>

HEADLINE         <b>[Repeats the ad's offer in the ad's own words]</b>
SUBHEAD          <b>[Carries the HOW. Under 30 words with the headline.]</b>
HERO             <b>[giant number / product screenshot / value grid]</b>
                 <b>[No autoplay video. It tested −7%.]</b>

PROOF ABOVE FOLD <b>[The one element that makes them believe before scroll]</b>
OBJECTION MAP    <b>[objection → proof asset → section it sits in]</b>
                 <b>[Three to five total. No gallery.]</b>

SECTIONS         <b>[In order. Each one earns its place or is cut.]</b>

CTA COPY         <b>[Names the action and the value]</b>
CTA PLACEMENT    <b>[Above fold + sticky on mobile]</b>
FORM FIELDS      <b>[List each. Each must be used within 24h of submit.]</b>
AFTER SUBMIT     <b>[What happens, and where it's stated pre-click]</b>

OMIT             <b>[Top nav. Second offer. Competing links. Anything
                 that isn't the one goal.]</b>
MOBILE FIRST     <b>[Designed at 390px, adapted up. Not the reverse.]</b>` }
];

window.LAUNCH_POST = {
  name:"Launch post skeleton",
  use:"Nine beats, roughly 120 words. Post it while the event is still news.",
  text:
`Introducing <b>[PRODUCT]</b>.

If you <b>[WHAT THE AUDIENCE DOES FOR A LIVING]</b>, you need to be
using this.

I built the first version at the <b>[EVENT + HOSTS]</b> this weekend.
<b>[PARTICIPANT COUNT]</b> participants, <b>[TEAM COUNT]</b> teams, and
<b>[YOUR RESULT]</b>.

<b>[TIME SINCE]</b> later, it's now publicly available.

It's super simple: <b>[THE ONE INPUT]</b> and instantly get
<b>[THE ABSURD OUTPUT, QUANTIFIED]</b>.

<b>[HOW IT WORKS — THREE BEATS, ONE SENTENCE]</b>

You get <b>[CONCRETE DELIVERABLES, IN THE FORMAT THE BUYER'S EXISTING
TOOL CONSUMES]</b>.

Try it on your <b>[THEIR THING]</b> now: <b>[LINK]</b>

P.S. shoutout to the <b>[EVENT]</b>, this idea exists because of it.`
};
