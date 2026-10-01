# The Buildathon Handbook

**DSGCP × ShopOS · Mumbai · Oct 7 or 8** *(date to be confirmed)*

## Build a workflow that converts for you.

Meta already picks the right ad for every single impression. Then the click lands — and every visitor sees the same page, because until now somebody had to build each one by hand. **Build the workflow instead.**

> 👁️ **Preview everything in one link: https://arth6025.github.io/buildathon-handbook/preview/**
>
> 🎯 **The pitch: https://arth6025.github.io/buildathon-handbook/**
> 📖 **The handbook: https://arth6025.github.io/buildathon-handbook/handbook/**
> 👀 **The 128 cards: https://arth6025.github.io/buildathon-handbook/cards/**

Everything is open — 52 patterns, 13 prompts, two brief templates, the teardown protocol and the scoring rubric. No form, no gate, and it takes pull requests.

---

## The outcome we're going for

**Give brands a working preview of how to produce ad creative and high-converting landing pages with AI — and get it into Shopify in time for the festive season.**

Not a demo, not a deck. By the end of the day a team should have assets that could run and a page that could take traffic. The festive window is the deadline that makes it real: whatever gets built has to be something a store could switch on in weeks, not quarters.

Everything runs on **ShopOS workflow**, so what gets built on the day is built on the thing a brand would keep using afterwards.

### What participants leave with

- **ShopOS credits** — the workflow doesn't switch off when the room empties.
- **A call with the ShopOS team** to scope a **forward-deployed engineer (FDE)** who takes the build into production for the sale season.

The event is the trial. The FDE is how it becomes infrastructure.

---

## The two tracks

| | Track 01 — Creatives | Track 02 — Landing Pages |
|---|---|---|
| **The job** | Ad creative that survives a feed | The page that keeps the ad's promise |
| **The game** | First 1.5 seconds + a real argument underneath | Five seconds to answer what/who/what-next |
| **Scored on** | Hook strength, angle, platform nativeness, proof, iteration discipline | Five-second answer, message match, placed proof, friction, Shopify-ready |
| **Not scored on** | Production value | Visual polish |

The two tracks are one funnel. Track 01 creative eventually points at a page; Track 02 pages are judged against the ad that feeds them. Read both.

---

## What brands can build

Seeds, not specs. Each is small enough to ship in a day and useful enough that a store would switch it on for the season.

| Idea | What it does | Track |
|---|---|---|
| **Ad engine from a URL** | One input — a store URL. Learns the brand, studies what's working in the category, returns a month of ad variants with images and copy ready for Ads Manager. | 01 |
| **Festive page generator** | Point it at a Shopify collection, get a campaign landing page — message-matched to the ad, proof pulled from existing reviews, nav stripped out. | 02 |
| **Review-to-creative pipeline** | Reads the store's own product reviews, extracts verbatim customer language, writes UGC scripts that use it. | 01 |
| **Creative refresh loop** | Watches which ads are fatiguing, generates iterations of the winner rather than fresh concepts from zero. | 01 |
| **Message-match checker** | Give it an ad and a page. Scores the match, names every promise the page dropped, rewrites the headline in the ad's own words. | 02 |
| **Offer and bundle builder** | Turns festive SKU combinations into a page with bundle logic, urgency, and the objection-to-proof map already placed. | 02 |
| **Hook tester** | Twenty openings against one angle, each stress-tested as a skeptical media buyer. Kills the ones that pattern-match as ads. | 01 |
| **Storefront teardown** | Runs the five-second test against a store's top pages, returns a ranked fix list for before the sale season. | 02 |

The shape that wins is consistent: **narrowest possible input, output so complete it needs no second tool.** See the *What good looks like* section in the handbook for the worked case.

---

## Swipe files worth studying

Reference libraries to browse before the day. These are other people's collections — useful for seeing how patterns get filed and how much range exists in a category.

**Ad creative**
- [Meta Ad Library](https://www.facebook.com/ads/library/) — the primary source. How long an ad has been running is the only real performance signal you get for free.
- [Foreplay](https://www.foreplay.co/) — saved-ad libraries and brand tracking.
- [Atria](https://www.atria.so/) · [Motion](https://motionapp.com/) — creative analytics and format breakdowns.
- [TikTok Creative Center](https://ads.tiktok.com/business/creativecenter/) — top-performing ads by category and region, free.
- [Adcrate Creative Toolkit](https://app.notion.com/p/adcrate/The-Adcrate-Creative-Toolkit-34cd5575919580f18be7fcfa1b91fb58) — a Notion-hosted resource hub: prompt list, ads-menu playbook, brief templates, creative tracker.

**Landing pages**
- [Land-book](https://land-book.com/) · [SaaS Landing Page](https://saaslandingpage.com/) — curated galleries.
- [Really Good Emails](https://reallygoodemails.com/) — adjacent, but the best-filed library of lifecycle copy anywhere.
- [Baymard Institute](https://baymard.com/) — ecommerce UX research, the closest thing to primary evidence in this space.

> **Note on numbers.** Benchmarks in the handbook are aggregated from public marketing write-ups and vendor blogs, not primary research. Most are single-test or single-account results. Use them to decide what to test first, not as facts to quote on stage.

---

## What's in the handbook

| # | Section | What it gives you |
|---|---|---|
| 01 | Welcome | The outcome, the tracks, how to use the day |
| 02 | What good looks like | Worked case + the transferable pattern + build ideas |
| 03 | The AI build | Seven-stage spec for the festive creative engine — assigned build |
| 04 | The pitch | Six-part anatomy of a pitch page, and the ShopOS festive pitch |
| 05 | The toolkit | Index of everything below |
| 06 | Swipe file | 52 patterns across 9 rails — hooks, formats, scripts, LP patterns, benchmarks |
| 07 | Prompt chain | 13 prompts that run in sequence, research → page |
| 08 | Teardown protocol | 6 steps to turn a competitor's winner into your own asset |
| 09 | Briefs | Creative brief + landing page brief |
| 10 | Scoring | Judging rubric per track, weights published |
| 11 | Ship & after | Submission, 3-minute demo, credits + FDE, launch-post skeleton |

---

## Running it locally

No build step, no dependencies. Any static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly from the filesystem works too.

---

## Repo layout

```
index.html            THE PITCH — the front door
preview/              all three pages in one link, with desktop/tablet/phone frames
cards/                the 128 festive problem cards (Sloosh deck, on screen)
assets/sloosh.css     SLOOSH brand tokens — link this before any page stylesheet
data/cards.js         the 128 cards
assets/pitch.css      pitch styling
handbook/index.html   the handbook shell + sidebar
assets/styles.css     handbook styling, theme tokens at the top
app.js                renderer — no dependencies
data/swipe.js         the 52 swipe-file pattern cards
data/prompts.js       prompts, brief templates, launch-post skeleton
data/handbook.js      sections, teardown protocol, scoring, build ideas
```

The root page is both the pitch and a build reference for Track 02 — it obeys the rules the swipe file argues for: no top nav, one goal, no autoplay hero, proof beside the ask, sticky CTA on mobile, zero form fields. Read it, then replace the argument with yours.

All content lives in `data/`. You never need to touch `app.js` to add a pattern, a prompt or a section.

---

## Contributing

Pull requests welcome — especially new patterns, new prompts, and new outcome cases from teams who shipped. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the shape of each entry.

The fastest useful contribution: **add a pattern you've actually seen work, with the mechanism and a source.** A pattern without a mechanism is an opinion.

---

## The 128 cards

[`cards/`](https://arth6025.github.io/buildathon-handbook/cards/) is the ShopOS × DSG Sloosh deck on screen — every card names one problem, flip it for the build that fixes it. Filter by section, search by brand.

Rewritten from the generic print deck for **the festive season**, and personalised:

- **84 cards name a specific DSG portfolio brand** (53 unique brands), drawn from the 70 live portfolio companies — Active and Partially Exited only. Exited and wound-down companies are excluded; they aren't attending.
- **44 cards are cross-brand by design** — the *Every brand* (16) and *Shopify pages* (28) sections are cross-cutting in the original deck and stay that way.
- Each card keeps the original build side (build name, three steps, inputs, metric, outputs) and carries a rewritten, festive-specific problem.

> **Read the brand-named cards as conversation starters, not findings.** Each problem is inferred from the brand's category and the festive calendar — not from an audit of that company's store or ad account. The card framing is conditional on purpose: *"Flip this over if your brand has this problem."* Review before using them anywhere outside the room.

---

## Branding

The whole site uses the **Sloosh** identity from the ShopOS × DSG print deck: near-black and `#FECC15` yellow, the googly-eye wordmark, thick black rules, offset shadows, and the nine section colours (`#FA4903` food, `#E8CCFF` beauty, `#54DA9C` health, `#090909` fashion, `#5C4ADE` home, `#793A04` cafés, `#4DA2FF` stays, `#FECC15` every brand, `#008060` Shopify pages).

Tokens live in [`assets/sloosh.css`](assets/sloosh.css) and are linked before every page stylesheet, so changing a brand colour in one place changes it everywhere.

---

## Assigned builds

| Build | Owner | Status | Spec |
|---|---|---|---|
| **Festive creative engine** — one product URL in, a labelled batch of testable ad variations out. Pairs a frontier model (Claude or GPT) with an agent across seven stages. | **Prashant + engineer** | Not started | [The AI build](https://arth6025.github.io/buildathon-handbook/handbook/#ai-build) |

The spec is written to be implementable without further briefing. Open a PR against `data/handbook.js` as it gets built, and replace the stage descriptions with what the thing actually does once it does it.

---

## Open items

- [ ] Confirm the date — Oct 7 or 8
- [ ] Agree the scoring weights before the day (current set is a proposal, deliberately weighted toward argument over polish)
- [ ] Section 04 item 08 — Stack & Agent Map, blocked on the tooling decision
- [x] Enable GitHub Pages
