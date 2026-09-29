# Contributing

All content lives in `data/`. You never need to touch `app.js`.

Fork, edit one file, open a PR. No build step — open `index.html` in a browser to check your change.

---

## Add a swipe-file pattern

Edit **`data/swipe.js`**. Find the track (`creative` or `lp`) and the rail, append to its `cards` array:

```js
{
  kind: "Hook",
  name: "Negative Open",
  def:  "What it is. One or two sentences, concrete.",
  why:  "The mechanism. Why it moves a number — not that it does.",
  stat: "71% decide within 3s · avg. 1.7s",   // optional, "" if none
  src:  "where the claim came from"
}
```

**`kind`** is free text, with two reserved values:

| Value | Renders as |
|---|---|
| `"anti-pattern"` | Red left edge — something that tested negative |
| `"benchmark"` | Dashed card — a number to judge against, not a tactic |
| anything else | A normal pattern card |

**The bar for `why`.** This is the field that makes the file worth having. "It grabs attention" is not a mechanism. "Loss aversion — people move harder to avoid a pain than to gain the equivalent" is. If you can't write the mechanism, the pattern isn't understood well enough to file yet.

**The bar for `stat`.** Only if you have a real number with a real source. An invented benchmark is worse than no benchmark, because someone will quote it on stage. Leave it `""` and the card renders fine.

---

## Add a prompt

Edit **`data/prompts.js`**. Append to the relevant stage's `items`:

```js
{
  name: "Voice-of-customer extraction",
  use:  "When to reach for it, one line.",
  text: `The prompt itself.

Wrap fill-ins in <b>[LIKE THIS]</b>.`
}
```

Placeholders wrapped in `<b>…</b>` render blue on the page and are **stripped automatically from the clipboard copy**, so the copied prompt is clean.

Prompts are a chain — each stage consumes the previous stage's output. If your prompt needs input that no earlier prompt produces, say so explicitly in the prompt body.

---

## Add an outcome case

Edit the `outcomes` section in **`data/handbook.js`**. A case needs five things, in this order:

1. **One-line description** — what it does, no adjectives
2. **Facts strip** — four short facts: where it was built, the field, the result, time to public
3. **What it actually does** — the mechanic
4. **Why it won** — and be honest; "the tech was novel" almost never is the reason
5. **The transferable pattern** — pulled out *separately* from the story

Point 5 is the one that matters. A case study without an extracted pattern is a highlight reel.

---

## Add a section

Append to `window.SECTIONS` in **`data/handbook.js`**:

```js
{
  id:    "kebab-case-id",       // becomes the URL hash
  nav:   "Sidebar label",
  tick:  "New",                 // optional badge
  title: `Headline with an <em>accent clause.</em>`,
  lede:  `One paragraph. <strong>Bold the load-bearing claim.</strong>`,
  html:  `<div class="prose">…</div>`
}
```

Sidebar, progress bar, pagers and URL hash all derive from `SECTIONS` — nothing else to update.

---

## House style

- **Mechanism over assertion.** Every claim earns its place by explaining why it works.
- **Numbers carry sources.** No source, no number.
- **No hedging.** "Consider testing whether you might want to" → "Test it."
- **Name the anti-pattern.** Things that don't work are more useful than things that do, and rarer to find written down.
- **Write for someone building at 2pm with four hours left.** Short, direct, actionable.

---

## Checking your change

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Check:

- Your entry renders where you expect
- No console errors
- The page still works at 390px wide
- Both light and dark themes still look right (your OS theme toggles it)
