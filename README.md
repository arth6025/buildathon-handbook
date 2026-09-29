# The Buildathon Handbook

**DSGCP × ShopOS · Mumbai · Oct 7 or 8** *(date to be confirmed)*

> 📖 **Read the handbook: https://arth6025.github.io/buildathon-handbook/**

A working handbook for a two-track buildathon on ad creative and high-converting landing pages. Patterns you apply, prompts you paste, templates you fill, and the rubric you're scored against — all open, all taking pull requests.

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
| 03 | The pitch | Six-part anatomy of a pitch page, and the ShopOS festive pitch |
| 04 | The toolkit | Index of everything below |
| 05 | Swipe file | 52 patterns across 9 rails — hooks, formats, scripts, LP patterns, benchmarks |
| 06 | Prompt chain | 13 prompts that run in sequence, research → page |
| 07 | Teardown protocol | 6 steps to turn a competitor's winner into your own asset |
| 08 | Briefs | Creative brief + landing page brief |
| 09 | Scoring | Judging rubric per track, weights published |
| 10 | Ship & after | Submission, 3-minute demo, credits + FDE, launch-post skeleton |

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
index.html          shell + sidebar
app.js              renderer — no dependencies
assets/styles.css   all styling, theme tokens at the top
data/swipe.js       the 52 swipe-file pattern cards
data/prompts.js     prompts, brief templates, launch-post skeleton
data/handbook.js    sections, teardown protocol, scoring, build ideas
```

All content lives in `data/`. You never need to touch `app.js` to add a pattern, a prompt or a section.

---

## Contributing

Pull requests welcome — especially new patterns, new prompts, and new outcome cases from teams who shipped. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the shape of each entry.

The fastest useful contribution: **add a pattern you've actually seen work, with the mechanism and a source.** A pattern without a mechanism is an opinion.

---

## Open items

- [ ] Confirm the date — Oct 7 or 8
- [ ] Agree the scoring weights before the day (current set is a proposal, deliberately weighted toward argument over polish)
- [ ] Section 04 item 08 — Stack & Agent Map, blocked on the tooling decision
- [x] Enable GitHub Pages
