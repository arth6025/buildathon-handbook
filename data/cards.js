/* 128 problem cards for the Orbit Buildathon (16 Dec 2026, Mumbai).
   Every card names a live DSG portfolio brand (Active / Partially Exited,
   all above Rs 1 Cr revenue). Brand and problem are chosen to match the
   build on the back of the card. "track" is the Orbit track the build fits
   ("01" Stop the Scroll, "02" Make Them Buy, "03" Your Own Creative
   Engine), or null if it is beyond the day. "recipe" is the engine recipe
   id in recipes.js the build runs on.
   See CONTRIBUTING.md. */
window.CARDS = [
 {
  "n": 1,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Farmley",
  "cat": "Dry fruits & nuts",
  "revenueCr": 394,
  "flip": "Commerce",
  "quip": "oof.",
  "problem": "Your gift pack reads premium in the hand and like a brown blur on a 2 cm quick commerce tile.",
  "build": "Q-Comm Tile Tester",
  "steps": [
   "Upload pack and your one claim",
   "Make 6 bold hero tiles",
   "Test each at 2 cm next to rivals"
  ],
  "needs": [
   "Pack shot",
   "Pack size and main claim"
  ],
  "metric": "Add-to-cart rate on the quick commerce listing",
  "outputs": "6 test tiles + exports for each app",
  "track": "02",
  "recipe": "marketplace"
 },
 {
  "n": 2,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Sleepy Owl",
  "cat": "Coffee",
  "revenueCr": 44.3,
  "flip": "Creative",
  "quip": "yep.",
  "problem": "Your cold brew ads fatigue by day 9 and the next shoot is six weeks away.",
  "build": "Ad Refresh Engine",
  "steps": [
   "Upload pack and last winning ad",
   "Write 20 new hooks",
   "Make statics and 6 s cuts"
  ],
  "needs": [
   "Pack shot",
   "Last winning ad",
   "Top 3 hooks"
  ],
  "metric": "Cost per purchase holds steady past day 10",
  "outputs": "20 statics, 5 motion ads, hook sheet",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 3,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Epigamia",
  "cat": "Greek yogurt",
  "revenueCr": 173.7,
  "flip": "Content",
  "quip": "again?",
  "problem": "Yogurt is an ingredient in half the dishes your buyers make every week and you have no recipe content.",
  "build": "Recipe Reel Factory",
  "steps": [
   "Pick 7 recipes for the product",
   "Make a top-down reel for each",
   "Add a recipe card and caption"
  ],
  "needs": [
   "Product shot",
   "Flavour and best uses"
  ],
  "metric": "Saves per reel and recipe page visits",
  "outputs": "7 reels, 7 recipe cards, captions",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 4,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Go Desi",
  "cat": "Desi snacks / confectionery",
  "revenueCr": 55.6,
  "flip": "Merchandising",
  "quip": "sigh.",
  "problem": "Your listings are missing pack size, weight and shelf life, so buyers ask instead of buying.",
  "build": "Listing Slot Filler",
  "steps": [
   "Pull claims from back of pack",
   "Match one buyer question per slot",
   "Make all 7 images and A+ modules"
  ],
  "needs": [
   "Pack shot",
   "Back of pack",
   "Top 5 buyer questions"
  ],
  "metric": "Listing conversion and fewer \"what size is this?\" questions",
  "outputs": "7 listing images + 5 A+ modules",
  "track": "02",
  "recipe": "marketplace"
 },
 {
  "n": 5,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Anveshan",
  "cat": "Farm-to-fork foods",
  "revenueCr": 77,
  "flip": "Research",
  "quip": "hmm.",
  "problem": "Three hundred reviews mention the same packaging gripe and nobody has read them in order.",
  "build": "Review Miner",
  "steps": [
   "Upload review exports",
   "Group into loves, gripes, uses",
   "Pull 10 quotes for ads"
  ],
  "needs": [
   "Review export (CSV)",
   "SKU list"
  ],
  "metric": "One product or pack fix shipped from the gripes list",
  "outputs": "Insight poster + 10 ad-ready quotes",
  "track": null,
  "recipe": null
 },
 {
  "n": 6,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Pip & Nut",
  "cat": "Nut butter",
  "revenueCr": 206.5,
  "flip": "Growth",
  "quip": "help.",
  "problem": "You want a new flavour for 2027 and the decision has been three meetings of opinions with no customer in them.",
  "build": "Flavour Concept Lab",
  "steps": [
   "List 10 flavour ideas",
   "Score each on trend and reviews",
   "Render each as a real pack"
  ],
  "needs": [
   "Current pack",
   "10 flavour ideas",
   "Review and search trends"
  ],
  "metric": "Votes and waitlist signups per flavour",
  "outputs": "10 pack renders + a vote carousel",
  "track": null,
  "recipe": null
 },
 {
  "n": 7,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Raw Pressery",
  "cat": "Cold-pressed juice",
  "revenueCr": 154.2,
  "flip": "Sales",
  "quip": "same.",
  "problem": "Modern-trade buyers decide next year's shelf space in January and your pitch deck is last year's.",
  "build": "Buyer Pitch Pack",
  "steps": [
   "Enter buyer and store format",
   "Mock your range on their shelf",
   "Write margin and promo slides"
  ],
  "needs": [
   "Buyer and channel",
   "Latest price list",
   "Range shots"
  ],
  "metric": "Listings won per buyer meeting",
  "outputs": "8-slide deck + one sell sheet",
  "track": null,
  "recipe": null
 },
 {
  "n": 8,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Chai Point",
  "cat": "Chai retail chain",
  "revenueCr": 234.7,
  "flip": "Creative",
  "quip": "ugh.",
  "problem": "Corporate gifting is the biggest order of your year and you have no hamper SKU to sell.",
  "build": "Gift Hamper Drop",
  "steps": [
   "Pick occasion, offer, hero SKUs",
   "Render hampers and gift boxes",
   "Resize banners and posts"
  ],
  "needs": [
   "Range shots",
   "Occasion and offer"
  ],
  "metric": "Order value and hamper share of orders",
  "outputs": "Hamper renders, 6 banners, 3 posts",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 9,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Goa Brewing Co",
  "cat": "Craft beer",
  "revenueCr": 20.7,
  "flip": "Ops",
  "quip": "seen it.",
  "problem": "A label error on a batch means a reprint, a delay and a missed launch window.",
  "build": "Label Proof Checker",
  "steps": [
   "Upload every label size + spec",
   "Read text and compare to spec",
   "Flag every mismatch for QA"
  ],
  "needs": [
   "Label artworks, all sizes",
   "Master spec sheet"
  ],
  "metric": "Zero reprints caused by label errors",
  "outputs": "Marked proofs + pass or fail sheet",
  "track": null,
  "recipe": null
 },
 {
  "n": 10,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Bombay Banta",
  "cat": "Craft soda",
  "revenueCr": 7.8,
  "flip": "Marketing",
  "quip": "uh oh.",
  "problem": "You send a hundred boxes to creators and get back eleven posts you can actually use.",
  "build": "Creator Brief Kit",
  "steps": [
   "Upload one great creator video",
   "Break it into shots and hooks",
   "Write the one-page brief"
  ],
  "needs": [
   "Product shots",
   "Campaign line",
   "One great creator video"
  ],
  "metric": "Usable posts per 100 boxes sent",
  "outputs": "Brief, sample storyboard, checklist card",
  "track": null,
  "recipe": null
 },
 {
  "n": 11,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Native Milk",
  "cat": "A2 dairy",
  "revenueCr": 5,
  "flip": "Commerce",
  "quip": "oof.",
  "problem": "Your bundle outsells singles and the only photo you have is of one bottle.",
  "build": "Bundle Shot Studio",
  "steps": [
   "Pick the SKUs in each bundle",
   "Style one set at true scale",
   "Add price and savings badges"
  ],
  "needs": [
   "Single SKU shots",
   "Bundle list and prices"
  ],
  "metric": "Bundle attach rate and average order value",
  "outputs": "A styled shot for every bundle",
  "track": "02",
  "recipe": "full-funnel"
 },
 {
  "n": 12,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Go Zero",
  "cat": "Zero-sugar ice cream",
  "revenueCr": 100,
  "flip": "Marketing",
  "quip": "yep.",
  "problem": "Every ad gets \"but is this actually healthy?\" in the comments and nothing on the asset answers it.",
  "build": "Proof Explainer",
  "steps": [
   "Pick one claim and its number",
   "Show it next to what shoppers eat",
   "Animate a 15 s explainer"
  ],
  "needs": [
   "Pack shot",
   "One claim with its number",
   "Nutrition panel"
  ],
  "metric": "Thumb-stop rate and fewer \"is this healthy?\" comments",
  "outputs": "15 s explainer, 6 s cut, one static",
  "track": null,
  "recipe": null
 },
 {
  "n": 13,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Kilrr",
  "cat": "Meat masalas / marinades",
  "revenueCr": 6.6,
  "flip": "Retail",
  "quip": "again?",
  "problem": "Your masala sits next to four rivals on an end-cap with nothing on the shelf saying why yours.",
  "build": "Shelf Talker Studio",
  "steps": [
   "Pick store format and offer",
   "Design 4 strips and wobblers",
   "Test each from 2 metres away"
  ],
  "needs": [
   "Pack shot",
   "Store chain and offer"
  ],
  "metric": "Store sell-through during the promo",
  "outputs": "4 designs + print-ready files",
  "track": "02",
  "recipe": "marketplace"
 },
 {
  "n": 14,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Nuguru (Everiday Foods)",
  "cat": "Wellness incubator / gluten-free bakery",
  "revenueCr": 20.4,
  "flip": "Retention",
  "quip": "sigh.",
  "problem": "Subscribers sign up in October and cancel in January, and nobody knows what month three should feel like.",
  "build": "Subscriber Box Story",
  "steps": [
   "Enter this month's blend notes",
   "Make origin art and brew card",
   "Cut a 10 s unboxing teaser"
  ],
  "needs": [
   "Blend and origin notes",
   "Bag shot"
  ],
  "metric": "Month-three retention",
  "outputs": "Insert card, brew guide, teaser",
  "track": null,
  "recipe": null
 },
 {
  "n": 15,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Frontier Nutrition",
  "cat": "Fortified snacks",
  "revenueCr": 30.8,
  "flip": "Growth",
  "quip": "hmm.",
  "problem": "Your Bangladesh calendar is not India's and the creative is translated, not rewritten.",
  "build": "Market Localiser",
  "steps": [
   "Upload winning ads, pick market",
   "Swap scenes, people, currency",
   "Localise copy, human check"
  ],
  "needs": [
   "Top 5 ads",
   "New market and language"
  ],
  "metric": "CTR in the new market against the home baseline",
  "outputs": "Localised versions of 5 ads",
  "track": "01",
  "recipe": "bharat"
 },
 {
  "n": 16,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Brewlander",
  "cat": "Craft beer",
  "revenueCr": 23.8,
  "flip": "Content",
  "quip": "help.",
  "problem": "Nobody can describe what your brew tastes like, so the product page describes the hops instead.",
  "build": "Taste Words",
  "steps": [
   "Pull taste words from reviews",
   "Write 3 page versions",
   "Add a macro texture shot"
  ],
  "needs": [
   "Product and ingredients",
   "Top reviews"
  ],
  "metric": "Product page conversion in an A/B test",
  "outputs": "3 copy versions, a shot, 5 headlines",
  "track": null,
  "recipe": null
 },
 {
  "n": 17,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Melati",
  "cat": "Non-alcoholic aperitif",
  "revenueCr": 13.6,
  "flip": "Creative",
  "quip": "same.",
  "problem": "Bars rebuild their drinks list every quarter and your can looks like every other non-alc on the back bar.",
  "build": "Can Art Drop",
  "steps": [
   "Turn tasting notes into a style",
   "Make 4 label designs",
   "Mock on can, tap and bar wall"
  ],
  "needs": [
   "Brew name and tasting notes",
   "Current can or bottle"
  ],
  "metric": "Bars stocking the new batch in week one",
  "outputs": "4 labels, mockups, one merch design",
  "track": "02",
  "recipe": "marketplace"
 },
 {
  "n": 18,
  "section": "Food & drinks",
  "colour": "#FA4903",
  "brand": "Pickup Coffee",
  "cat": "Grab-and-go coffee chain",
  "revenueCr": 620,
  "flip": "Support",
  "quip": "ugh.",
  "problem": "The same six drink questions arrive every day and a human answers each one.",
  "build": "FAQ to Carousel",
  "steps": [
   "Cluster the last 500 questions",
   "Write a correct answer for each",
   "Make carousels and quick replies"
  ],
  "needs": [
   "Chat or DM export",
   "Product spec"
  ],
  "metric": "Repeat questions per week",
  "outputs": "12 carousels, page FAQ, reply sheet",
  "track": null,
  "recipe": null
 },
 {
  "n": 19,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Colourette",
  "cat": "Cosmetics",
  "revenueCr": 178.2,
  "flip": "Creative",
  "quip": "seen it.",
  "problem": "Your shade range is the whole pitch and every ad shows it on one skin tone.",
  "build": "Shade on Every Skin",
  "steps": [
   "Upload swatches and shade names",
   "Apply each on 6 house models",
   "Lay out the shade grid"
  ],
  "needs": [
   "Shade swatches",
   "House models, 6 skin tones"
  ],
  "metric": "Shade returns and \"which shade?\" DMs",
  "outputs": "72 try-on images + a shade grid",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 20,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Deconstruct",
  "cat": "Skincare",
  "revenueCr": 130,
  "flip": "Content",
  "quip": "uh oh.",
  "problem": "\"Did nothing for me\" is your most common review and the product was being used wrong.",
  "build": "Routine Explainer",
  "steps": [
   "Enter steps, amount, AM or PM",
   "Make a hands-and-face video",
   "Add captions and export"
  ],
  "needs": [
   "Product shot",
   "Steps, amount, AM or PM"
  ],
  "metric": "\"Did nothing for me\" reviews drop",
  "outputs": "One 20 s how-to per SKU",
  "track": "01",
  "recipe": "reviews-ugc"
 },
 {
  "n": 21,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Arata",
  "cat": "Hair care",
  "revenueCr": 53.4,
  "flip": "Research",
  "quip": "oof.",
  "problem": "An ingredient trend takes six weeks to reach your concept brief, by which point it is over.",
  "build": "Ingredient Radar",
  "steps": [
   "Upload trend exports",
   "Rank rising ingredients",
   "Match each to a SKU or a gap"
  ],
  "needs": [
   "Search and social trend exports",
   "Your ingredient list"
  ],
  "metric": "Days from trend spotted to concept brief",
  "outputs": "Weekly radar page + one concept pack",
  "track": null,
  "recipe": null
 },
 {
  "n": 22,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "82°E",
  "cat": "Skincare / self-care",
  "revenueCr": 14.7,
  "flip": "Marketing",
  "quip": "yep.",
  "problem": "Your studio creative is beautiful and a shaky real-results clip out-clicks it every time.",
  "build": "Results Story Builder",
  "steps": [
   "Upload photos with consent only",
   "Align the pair, never retouch",
   "Lay out the story with days used"
  ],
  "needs": [
   "Consented before and after photos",
   "Days used and routine"
  ],
  "metric": "Ad CTR against studio creative",
  "outputs": "Carousel + 10 s reel per customer",
  "track": null,
  "recipe": null
 },
 {
  "n": 23,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Secret Alchemist",
  "cat": "Clean fragrance",
  "revenueCr": 17,
  "flip": "Creative",
  "quip": "again?",
  "problem": "Fragrance cannot be smelled through a screen and your page never offers a sample.",
  "build": "Scent Story",
  "steps": [
   "Enter top, heart and base notes",
   "Make a mood world per layer",
   "Cut a 12 s film"
  ],
  "needs": [
   "Bottle shot",
   "Top, heart and base notes"
  ],
  "metric": "Sample orders and time on page",
  "outputs": "3 stills, a film, a note pyramid",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 24,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Rosé All Day",
  "cat": "Cosmetics",
  "revenueCr": 132,
  "flip": "Retention",
  "quip": "sigh.",
  "problem": "Trial sizes sell well and almost nobody moves up to the full size afterwards.",
  "build": "Trial to Hero Flow",
  "steps": [
   "Map feelings on day 1, 4, 7, 14",
   "Write a message per day",
   "Add the full-size offer"
  ],
  "needs": [
   "Trial kit and full-size shots",
   "What to expect by day"
  ],
  "metric": "Trial to full-size conversion",
  "outputs": "4-step message sequence + visuals",
  "track": "02",
  "recipe": "winback"
 },
 {
  "n": 25,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Smile Makers (Ramblin' Brands)",
  "cat": "Female sexual wellness",
  "revenueCr": 132,
  "flip": "Marketing",
  "quip": "hmm.",
  "problem": "Half your creative gets rejected by ad review and you find out after the slot is gone.",
  "build": "Policy-Safe Creative",
  "steps": [
   "Upload rejected ads + reasons",
   "Rewrite inside the policy",
   "Make 6 softer variants"
  ],
  "needs": [
   "Rejected ads",
   "Rejection reasons"
  ],
  "metric": "Approval rate on first submission",
  "outputs": "6 policy-safe ads + review notes",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 26,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Fix My Curls",
  "cat": "Curly hair care",
  "revenueCr": 15,
  "flip": "Merchandising",
  "quip": "help.",
  "problem": "\"Which one for my hair type?\" is the question support answers most, every single week.",
  "build": "Hair Type Matcher",
  "steps": [
   "List the hair types it suits",
   "Show results on each type",
   "Build a routine block on the landing page"
  ],
  "needs": [
   "Product shot",
   "Hair types it suits"
  ],
  "metric": "Hair-type questions in support",
  "outputs": "Hair-type grid + 3 reels",
  "track": "02",
  "recipe": "full-funnel"
 },
 {
  "n": 27,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Blood",
  "cat": "Feminine care",
  "revenueCr": 74.8,
  "flip": "Ops",
  "quip": "same.",
  "problem": "A single unverified claim in an ad can pause the whole account and nobody checks before upload.",
  "build": "Claim Checker",
  "steps": [
   "Upload trials and certificates",
   "Paste new ad or page copy",
   "Flag claims with no proof"
  ],
  "needs": [
   "Trial reports and certificates",
   "New ad and page copy"
  ],
  "metric": "Ads paused for claim issues",
  "outputs": "Claim table with proof + rewrites",
  "track": null,
  "recipe": null
 },
 {
  "n": 28,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Deconstruct",
  "cat": "Skincare",
  "revenueCr": 130,
  "flip": "Creative",
  "quip": "ugh.",
  "problem": "Your pack redesign has been open for five weeks across three threads and no decision.",
  "build": "Pack Redesign Sprint",
  "steps": [
   "Upload new and current artwork",
   "Render on pack, shelf, in hand",
   "Make an unboxing clip"
  ],
  "needs": [
   "New pack artwork",
   "Current pack"
  ],
  "metric": "A decision made in one meeting",
  "outputs": "Renders, shelf tests, unboxing clip",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 29,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Rosé All Day",
  "cat": "Cosmetics",
  "revenueCr": 132,
  "flip": "Marketing",
  "quip": "seen it.",
  "problem": "Your launch gets no coverage because the press kit is a Drive folder nobody opened.",
  "build": "Launch PR Kit",
  "steps": [
   "Enter the launch story",
   "Make hero film and stills",
   "Lay out press PDF and notes"
  ],
  "needs": [
   "Product shots",
   "Launch story in 5 lines"
  ],
  "metric": "Coverage pieces in launch week",
  "outputs": "Press PDF, film, stills, pitch emails",
  "track": null,
  "recipe": null
 },
 {
  "n": 30,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Arata",
  "cat": "Hair care",
  "revenueCr": 53.4,
  "flip": "Commerce",
  "quip": "uh oh.",
  "problem": "One shoot has to reach six retailers in six formats and it takes a fortnight each time.",
  "build": "One Shoot, Every Store",
  "steps": [
   "Upload shoot, pick marketplaces",
   "Fill missing angles and lifestyle",
   "Size and badge per store"
  ],
  "needs": [
   "Product shoot",
   "Marketplace spec list"
  ],
  "metric": "Days from shoot to live everywhere",
  "outputs": "A ready image folder per marketplace",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 31,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "The Indus Valley",
  "cat": "Healthy cookware",
  "revenueCr": 117,
  "flip": "Growth",
  "quip": "oof.",
  "problem": "Buyers don't know which oil is for them and there is no quiz, so they guess and churn.",
  "build": "Real Regimen Quiz",
  "steps": [
   "Map concerns to routines",
   "Write 6 plain questions",
   "Make a routine card per result"
  ],
  "needs": [
   "Product catalogue",
   "Skin types and concerns"
  ],
  "metric": "Quiz to cart conversion",
  "outputs": "Quiz logic, 12 cards, result copy",
  "track": null,
  "recipe": null
 },
 {
  "n": 32,
  "section": "Beauty & personal care",
  "colour": "#E8CCFF",
  "brand": "Colourette",
  "cat": "Cosmetics",
  "revenueCr": 178.2,
  "flip": "Commerce",
  "quip": "yep.",
  "problem": "Live shopping is where your category sells in the Philippines and your set is a phone on a stack of books.",
  "build": "Live Shop Set",
  "steps": [
   "Pick theme and 6 products",
   "Make the set and overlays",
   "Add price cards per product"
  ],
  "needs": [
   "Product shots",
   "Session theme and offers"
  ],
  "metric": "Live viewers to orders",
  "outputs": "Live set, overlays, 6 product cards",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 33,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "Power Gummies",
  "cat": "Nutritional gummies",
  "revenueCr": 3.5,
  "flip": "Marketing",
  "quip": "again?",
  "problem": "Your ad lists ingredients and the shopper scrolls past before reaching the one that matters.",
  "build": "Ingredient Cards",
  "steps": [
   "Upload formulation and dosage",
   "Write one plain line each",
   "Illustrate a card per ingredient"
  ],
  "needs": [
   "Formulation sheet",
   "Product shot"
  ],
  "metric": "Scroll depth and add-to-cart on the page",
  "outputs": "Ingredient cards, reel, page section",
  "track": "01",
  "recipe": "reviews-ugc"
 },
 {
  "n": 34,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "Moom Health",
  "cat": "Women's supplements",
  "revenueCr": 37.4,
  "flip": "Retention",
  "quip": "sigh.",
  "problem": "Buyers take the supplement for nine days and the thirtieth-day reorder never comes.",
  "build": "Habit Nudge Pack",
  "steps": [
   "Split 30 days into 4 weeks",
   "Write a short daily reminder",
   "Add the reorder nudge on day 24"
  ],
  "needs": [
   "Dose and time of day",
   "Product shot"
  ],
  "metric": "Day-30 reorder rate",
  "outputs": "30 messages, 8 visuals, reorder nudge",
  "track": "02",
  "recipe": "winback"
 },
 {
  "n": 35,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "Nutrova",
  "cat": "Nutrition supplements",
  "revenueCr": 16.5,
  "flip": "Support",
  "quip": "hmm.",
  "problem": "Support answers clinical questions during spikes by improvising, which is a compliance problem.",
  "build": "Safe Answer Library",
  "steps": [
   "Pull the top 20 safety questions",
   "Draft from approved docs only",
   "Send to your expert to sign off"
  ],
  "needs": [
   "Product dossier and approved FAQ",
   "Support ticket export"
  ],
  "metric": "Handle time and escalations",
  "outputs": "20 reviewed answers + routing sheet",
  "track": null,
  "recipe": null
 },
 {
  "n": 36,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "Moom Health",
  "cat": "Women's supplements",
  "revenueCr": 37.4,
  "flip": "Content",
  "quip": "help.",
  "problem": "Your women's health content is the growth engine and it is posted whenever someone remembers.",
  "build": "Cycle Content Calendar",
  "steps": [
   "Enter 12 topics and expert notes",
   "Write each post warm and plain",
   "Illustrate in your style"
  ],
  "needs": [
   "12 topics and expert notes",
   "Brand illustrations"
  ],
  "metric": "Saves and shares per post",
  "outputs": "12 posts with copy + illustrations",
  "track": null,
  "recipe": null
 },
 {
  "n": 37,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "GOQii",
  "cat": "Wearables / preventive health",
  "revenueCr": 30.1,
  "flip": "Marketing",
  "quip": "same.",
  "problem": "You sit on real behaviour data and your ads look like every other wearable ad.",
  "build": "Data Story Ads",
  "steps": [
   "Pick 3 outcomes with numbers",
   "Show app screens in real moments",
   "Animate the metric changing"
  ],
  "needs": [
   "Anonymised outcome data",
   "Device and app screens"
  ],
  "metric": "CTR against product-only ads",
  "outputs": "3 data-led ads + stills",
  "track": null,
  "recipe": null
 },
 {
  "n": 38,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "Protocol Health",
  "cat": "Preventive health clinic",
  "revenueCr": 3.4,
  "flip": "Commerce",
  "quip": "ugh.",
  "problem": "Your health-check packages differ in ways no page explains, so people pick the cheapest.",
  "build": "Package Explainer",
  "steps": [
   "Upload tests in each package",
   "Group by organ or goal",
   "Draw a body map and one-pager"
  ],
  "needs": [
   "Test package list",
   "Who it is for"
  ],
  "metric": "Package booking conversion",
  "outputs": "One-page guide, body map, 20 s video",
  "track": "02",
  "recipe": "full-funnel"
 },
 {
  "n": 39,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "Aire",
  "cat": "Adult incontinence / senior care",
  "revenueCr": 27.2,
  "flip": "Marketing",
  "quip": "seen it.",
  "problem": "The after-the-feast use case is your strongest argument and the copy is written for clinicians.",
  "build": "Buyer Lens Rewrite",
  "steps": [
   "Upload ads, name buyer and user",
   "Rewrite angle and scene for buyer",
   "Make 6 dignified ads"
  ],
  "needs": [
   "Current ads",
   "Who buys and who uses"
  ],
  "metric": "CTR among 28 to 45 year old buyers",
  "outputs": "6 rewritten ads with copy",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 40,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "Nutrova",
  "cat": "Nutrition supplements",
  "revenueCr": 16.5,
  "flip": "Commerce",
  "quip": "uh oh.",
  "problem": "Buyers purchase once and subscription is a checkbox nobody has ever argued for.",
  "build": "Subscribe Pitch",
  "steps": [
   "Enter price, discount, frequency",
   "Work out yearly savings",
   "Make a page block and visuals"
  ],
  "needs": [
   "Product shot",
   "Price, discount, frequency"
  ],
  "metric": "Subscription share of orders",
  "outputs": "Page block, 3 visuals, copy options",
  "track": null,
  "recipe": null
 },
 {
  "n": 41,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "BeFit",
  "cat": "Low-cost gyms",
  "revenueCr": 4.4,
  "flip": "Marketing",
  "quip": "oof.",
  "problem": "Join offers need creator posts and every creator invents their own format.",
  "build": "Gym Content Pack",
  "steps": [
   "Enter 3 workouts and 3 shakes",
   "Make templates with timers",
   "Build the creator kit"
  ],
  "needs": [
   "Product shot",
   "3 workouts, 3 shake recipes"
  ],
  "metric": "Creator posts that use the template",
  "outputs": "6 templates, recipe cards, sample video",
  "track": null,
  "recipe": null
 },
 {
  "n": 42,
  "section": "Health & wellness",
  "colour": "#54DA9C",
  "brand": "GOQii",
  "cat": "Wearables / preventive health",
  "revenueCr": 30.1,
  "flip": "Research",
  "quip": "yep.",
  "problem": "New-year resolution intent starts in late December and your ads treat the whole quarter as one moment.",
  "build": "Moment Mapper",
  "steps": [
   "Pull moments from reviews and DMs",
   "Rank them by strength",
   "Make one ad per moment"
  ],
  "needs": [
   "Reviews and DMs",
   "Product shot"
  ],
  "metric": "ROAS of the best moment against the generic ad",
  "outputs": "5 moment ads + a ranking",
  "track": "01",
  "recipe": "reviews-ugc"
 },
 {
  "n": 43,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "XYXX",
  "cat": "Men's innerwear",
  "revenueCr": 187,
  "flip": "Creative",
  "quip": "again?",
  "problem": "Gifting creative needs a model and your samples arrive eleven days before the launch.",
  "build": "Flat Lay to Model",
  "steps": [
   "Upload flat lays, pick 3 models",
   "Generate front, back, side",
   "Keep fabric and print true"
  ],
  "needs": [
   "Flat lay or ghost shots",
   "House models"
  ],
  "metric": "Days from sample to live",
  "outputs": "A 3-angle on-model set per style",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 44,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "XYXX",
  "cat": "Men's innerwear",
  "revenueCr": 187,
  "flip": "Commerce",
  "quip": "sigh.",
  "problem": "Size anxiety kills the gift purchase and returns come back as the wrong size, every time.",
  "build": "Fit Visualiser",
  "steps": [
   "Upload garment and size chart",
   "Show it on 4 body types",
   "Mark waist, rise, length"
  ],
  "needs": [
   "Garment shots",
   "Size chart"
  ],
  "metric": "Size-related returns",
  "outputs": "Fit grid + page block per style",
  "track": "02",
  "recipe": "marketplace"
 },
 {
  "n": 45,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "Knya",
  "cat": "Medical apparel",
  "revenueCr": 110,
  "flip": "Creative",
  "quip": "hmm.",
  "problem": "Comfort over a twelve-hour shift is the whole argument and the ad shows folded fabric.",
  "build": "Comfort Proof Ads",
  "steps": [
   "List 3 comfort claims + proof",
   "Make macro fabric visuals",
   "Cut 4 ads and 6 s versions"
  ],
  "needs": [
   "Product shots",
   "Fabric tech and claims"
  ],
  "metric": "Thumb-stop rate and CTR",
  "outputs": "4 ads + 4 cutdowns",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 46,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "Knya",
  "cat": "Medical apparel",
  "revenueCr": 110,
  "flip": "Sales",
  "quip": "help.",
  "problem": "Hospitals and clinics buy scrubs in bulk at the start of the year and you have no lookbook to send them.",
  "build": "Shift Lookbook",
  "steps": [
   "Pick roles and styles",
   "Show house models on shift",
   "Lay out lookbook and posts"
  ],
  "needs": [
   "Garment shots",
   "Roles: nurse, surgeon, dentist"
  ],
  "metric": "Hospital and clinic enquiries",
  "outputs": "Lookbook PDF + 6 social posts",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 47,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "Saturdays",
  "cat": "Eyewear",
  "revenueCr": 149.6,
  "flip": "Commerce",
  "quip": "same.",
  "problem": "Buyers don't know which frame suits their face, so eyewear gifting never converts.",
  "build": "Face Shape Guide",
  "steps": [
   "Upload frames, front and side",
   "Show on 6 face shapes",
   "Write a fit note for each"
  ],
  "needs": [
   "Frame shots",
   "House models, 6 face shapes"
  ],
  "metric": "Try-on to purchase rate",
  "outputs": "Frame-by-face grid + page block",
  "track": "02",
  "recipe": "marketplace"
 },
 {
  "n": 48,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "ICON",
  "cat": "D2C luggage",
  "revenueCr": 12,
  "flip": "Marketing",
  "quip": "ugh.",
  "problem": "Luggage shoppers compare on durability and your listing argues about colour.",
  "build": "Durability Proof",
  "steps": [
   "Enter your real test numbers",
   "Make drop, rain and wheel clips",
   "Add spec overlays"
  ],
  "needs": [
   "Product shots",
   "Real test specs"
  ],
  "metric": "Listing conversion against rivals",
  "outputs": "Proof video, listing video, 3 ad cuts",
  "track": null,
  "recipe": null
 },
 {
  "n": 49,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "ICON",
  "cat": "D2C luggage",
  "revenueCr": 12,
  "flip": "Merchandising",
  "quip": "seen it.",
  "problem": "You commit stock to colourways chosen in a meeting rather than by pre-orders.",
  "build": "Colourway Pre-Sell",
  "steps": [
   "Render 8 colourways",
   "Make a pre-order card each",
   "Post a vote and a drop"
  ],
  "needs": [
   "Product shot",
   "8 colourway ideas"
  ],
  "metric": "Colours that hit MOQ on pre-orders",
  "outputs": "8 renders, cards, a poll set",
  "track": null,
  "recipe": null
 },
 {
  "n": 50,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "Saturdays",
  "cat": "Eyewear",
  "revenueCr": 149.6,
  "flip": "Merchandising",
  "quip": "uh oh.",
  "problem": "One frame per order is your ceiling because nothing on the page shows the second pair.",
  "build": "Complete the Look",
  "steps": [
   "Pick a hero item and 3 occasions",
   "Pair with items from your range",
   "Add shop-the-look tags"
  ],
  "needs": [
   "Range shots",
   "3 occasions"
  ],
  "metric": "Items per order",
  "outputs": "3 tagged outfits per hero item",
  "track": "02",
  "recipe": "full-funnel"
 },
 {
  "n": 51,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "XYXX",
  "cat": "Men's innerwear",
  "revenueCr": 187,
  "flip": "Commerce",
  "quip": "oof.",
  "problem": "Your collection page is a grid of SKUs with no reason to click any of them.",
  "build": "Collection Page Refresh",
  "steps": [
   "Pick collection and its story",
   "Make a banner and 4 tiles",
   "Drop a story tile every 8 items"
  ],
  "needs": [
   "Product shots",
   "Collection name and mood"
  ],
  "metric": "Collection page click-through",
  "outputs": "Banner, 4 tiles, collection copy",
  "track": null,
  "recipe": null
 },
 {
  "n": 52,
  "section": "Fashion & accessories",
  "colour": "#090909",
  "brand": "Saturdays",
  "cat": "Eyewear",
  "revenueCr": 149.6,
  "flip": "Retail",
  "quip": "yep.",
  "problem": "Your retail window is the same as it was in August and the footfall walks past it.",
  "build": "Window Swap",
  "steps": [
   "Upload window photo and size",
   "Make 3 concepts with new range",
   "Export print files for the glass"
  ],
  "needs": [
   "Store window photo",
   "New collection shots"
  ],
  "metric": "Footfall while the window runs",
  "outputs": "3 window concepts + print files",
  "track": null,
  "recipe": null
 },
 {
  "n": 53,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "SleepyCat",
  "cat": "Mattresses / sleep",
  "revenueCr": 98,
  "flip": "Marketing",
  "quip": "again?",
  "problem": "A mattress is a feel you cannot photograph and the product page tries anyway.",
  "build": "Sleep Feel Film",
  "steps": [
   "Upload the layer spec",
   "Animate a cutaway of each layer",
   "Add sink and motion tests"
  ],
  "needs": [
   "Mattress shot",
   "Layer spec"
  ],
  "metric": "Page conversion and trial requests",
  "outputs": "Layer film, page film, 3 ad cuts",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 54,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "SuperBottoms",
  "cat": "Reusable baby hygiene",
  "revenueCr": 84.3,
  "flip": "Marketing",
  "quip": "sigh.",
  "problem": "Parents ask what the fabric is actually made of and the page answers with a certification logo.",
  "build": "Material Proof Story",
  "steps": [
   "Upload certificates and lab reports",
   "Write what each test checked",
   "Compare against common pans"
  ],
  "needs": [
   "Certificates and lab reports",
   "Product shots"
  ],
  "metric": "Conversion and safety questions in support",
  "outputs": "Comparison visual, explainer, trust strip",
  "track": null,
  "recipe": null
 },
 {
  "n": 55,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "Ugaoo",
  "cat": "Plants / gardening",
  "revenueCr": 95,
  "flip": "Support",
  "quip": "hmm.",
  "problem": "Plant gifts die in three weeks and the buyer blames you, not the watering.",
  "build": "Plant Care Coach",
  "steps": [
   "Enter light, water, soil needs",
   "Make a week 1 to 4 care card",
   "Cut a 15 s care video"
  ],
  "needs": [
   "Plant shot",
   "Light, water, soil needs"
  ],
  "metric": "Plant complaints in the first 30 days",
  "outputs": "Care card, video, in-box QR card",
  "track": null,
  "recipe": null
 },
 {
  "n": 56,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "Koparo",
  "cat": "Natural home cleaning",
  "revenueCr": 23.4,
  "flip": "Marketing",
  "quip": "help.",
  "problem": "\"Natural\" is a word everyone uses and your cleaning ad has no test that proves yours.",
  "build": "Clean Proof Test",
  "steps": [
   "Pick the surface and the stain",
   "Film the real test once",
   "Edit before, during, after"
  ],
  "needs": [
   "Product shot",
   "Surfaces and stains"
  ],
  "metric": "Repeat purchase and reel saves",
  "outputs": "6 test reels + stills",
  "track": null,
  "recipe": null
 },
 {
  "n": 57,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "SuperBottoms",
  "cat": "Reusable baby hygiene",
  "revenueCr": 84.3,
  "flip": "Commerce",
  "quip": "same.",
  "problem": "Kidswear sizing questions outnumber orders and the size chart is a table of numbers.",
  "build": "Kid-Safe Lifestyle Set",
  "steps": [
   "Pick 5 moments of the day",
   "Make hands-only or illustrated scenes",
   "Show spills and size in a hand"
  ],
  "needs": [
   "Product shots",
   "Age group and moments"
  ],
  "metric": "Page conversion and fewer size questions",
  "outputs": "5 scenes in page and ad sizes",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 58,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "SuperBottoms",
  "cat": "Reusable baby hygiene",
  "revenueCr": 84.3,
  "flip": "Support",
  "quip": "ugh.",
  "problem": "The first week with a reusable decides whether they repeat, and nobody tells the new buyer how to wash it.",
  "build": "First Week Guide",
  "steps": [
   "Enter use, wash and dry steps",
   "Make step visuals with a doll",
   "Cut a 30 s guide and print card"
  ],
  "needs": [
   "Product shots",
   "How to use, wash, dry"
  ],
  "metric": "Repeat purchase and wash-question tickets",
  "outputs": "Guide video, print card, 3 tips",
  "track": null,
  "recipe": null
 },
 {
  "n": 59,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "Supertails",
  "cat": "Pet care platform",
  "revenueCr": 108.3,
  "flip": "Marketing",
  "quip": "seen it.",
  "problem": "A Labrador and an Indie need different food and your ads speak to \"dog parents\".",
  "build": "Breed Ad Matrix",
  "steps": [
   "Pick top breeds from orders",
   "Show product with each breed",
   "Write a line per breed"
  ],
  "needs": [
   "Product shot",
   "Top breeds from orders"
  ],
  "metric": "CTR by breed against the generic ad",
  "outputs": "12 breed ads with copy",
  "track": "01",
  "recipe": "winner-batch"
 },
 {
  "n": 60,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "Smylo",
  "cat": "Clean-label cat food",
  "revenueCr": 6.3,
  "flip": "Marketing",
  "quip": "uh oh.",
  "problem": "Cats reject new food and buyers won't risk a full bag without a trial pack that proves it.",
  "build": "Picky Eater Proof",
  "steps": [
   "Pull taste-test wins",
   "Illustrate cat reactions",
   "Make a carousel and trial ad"
  ],
  "needs": [
   "Feedback and repeat data",
   "Product shot"
  ],
  "metric": "Trial pack sales",
  "outputs": "A carousel + a trial pack ad",
  "track": "02",
  "recipe": "full-funnel"
 },
 {
  "n": 61,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "Merlin Brands (Rabitat)",
  "cat": "Kids & adult drinkware",
  "revenueCr": 27.9,
  "flip": "Commerce",
  "quip": "oof.",
  "problem": "Personalised gifting is your unlock and the buyer cannot see the name on the bottle before paying.",
  "build": "Personal Gift Preview",
  "steps": [
   "Upload the gift templates",
   "Render name, message, occasion",
   "Make a share card"
  ],
  "needs": [
   "Gift product shots",
   "Name, message, occasion"
  ],
  "metric": "Checkout conversion on personalised gifts",
  "outputs": "Personalised render + share card",
  "track": "02",
  "recipe": "full-funnel"
 },
 {
  "n": 62,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "SleepyCat",
  "cat": "Mattresses / sleep",
  "revenueCr": 98,
  "flip": "Commerce",
  "quip": "yep.",
  "problem": "Buyers cannot picture the bed in their room, so they close the tab and think about it.",
  "build": "Your Room Preview",
  "steps": [
   "Upload product and room photo",
   "Place at true scale, matched light",
   "Show 3 colour or size options"
  ],
  "needs": [
   "Product shot",
   "Customer room photo"
  ],
  "metric": "Add-to-cart after a preview",
  "outputs": "Room previews in 3 options",
  "track": null,
  "recipe": null
 },
 {
  "n": 63,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "Ugaoo",
  "cat": "Plants / gardening",
  "revenueCr": 95,
  "flip": "Support",
  "quip": "again?",
  "problem": "Plants arrive broken during peak courier weeks and every claim is resolved by hand.",
  "build": "Damage Claim Sorter",
  "steps": [
   "Upload photo and order note",
   "Classify damage and severity",
   "Draft the reply with the fix"
  ],
  "needs": [
   "Complaint photos",
   "Order details"
  ],
  "metric": "Time to resolve a claim",
  "outputs": "Classified claim, reply, route flags",
  "track": null,
  "recipe": null
 },
 {
  "n": 64,
  "section": "Home, kids & pets",
  "colour": "#5C4ADE",
  "brand": "SleepyCat",
  "cat": "Mattresses / sleep",
  "revenueCr": 98,
  "flip": "Creative",
  "quip": "sigh.",
  "problem": "Your creative is the same creative you ran last season, for a buyer with a different problem.",
  "build": "Season Switch",
  "steps": [
   "Pick season and use cases",
   "Re-stage each product",
   "Write a season benefit line"
  ],
  "needs": [
   "Top 10 product shots",
   "Season and use cases"
  ],
  "metric": "CTR against last season's creative",
  "outputs": "Season sets for 10 products",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 65,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "Hunger Inc. (Bombay Sweet Shop)",
  "cat": "Restaurants / Bombay Sweet Shop",
  "revenueCr": 115,
  "flip": "Commerce",
  "quip": "hmm.",
  "problem": "Your delivery menu is the dine-in menu with prices changed, and orders stall at the cart.",
  "build": "Delivery Menu Refresh",
  "steps": [
   "Upload phone photos and menu",
   "Restyle each dish, keep portions",
   "Size for each delivery app"
  ],
  "needs": [
   "Phone photos of each dish",
   "Current menu"
  ],
  "metric": "Menu to cart conversion",
  "outputs": "Full menu set in every app spec",
  "track": "02",
  "recipe": "marketplace"
 },
 {
  "n": 66,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "Hunger Inc. (Bombay Sweet Shop)",
  "cat": "Restaurants / Bombay Sweet Shop",
  "revenueCr": 115,
  "flip": "Marketing",
  "quip": "help.",
  "problem": "Your limited mithai drop has one week to sell and the launch kit gets built the night before.",
  "build": "Drop Kit",
  "steps": [
   "Enter drink, price, launch date",
   "Make hero, poster, counter card",
   "Cut a 10 s reel and 3 posts"
  ],
  "needs": [
   "Drink photo",
   "Name, price, story"
  ],
  "metric": "Units sold in launch week",
  "outputs": "Poster, counter card, reel, posts",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 67,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "SaladStop",
  "cat": "Healthy F&B chain",
  "revenueCr": 340,
  "flip": "Ops",
  "quip": "same.",
  "problem": "A campaign has to reach stores across three markets and each one rebuilds the assets locally.",
  "build": "Store Kit Generator",
  "steps": [
   "Upload master and outlet list",
   "Resize for each outlet's frames",
   "Swap language and prices by city"
  ],
  "needs": [
   "Master creative",
   "Outlet list with frame sizes"
  ],
  "metric": "Days to roll out a campaign",
  "outputs": "A print folder per outlet",
  "track": null,
  "recipe": null
 },
 {
  "n": 68,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "Every Half Coffee",
  "cat": "Specialty coffee chain",
  "revenueCr": 110.5,
  "flip": "Internal",
  "quip": "ugh.",
  "problem": "Every new drink is trained store by store and tastes different in each one.",
  "build": "Recipe Training Cards",
  "steps": [
   "Enter steps and measures",
   "Make a step card per item",
   "Cut a 30 s training video"
  ],
  "needs": [
   "Recipe steps and measures",
   "Station photo"
  ],
  "metric": "Days to train a new hire and remake rate",
  "outputs": "Step cards + videos per item",
  "track": null,
  "recipe": null
 },
 {
  "n": 69,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "EazyDiner",
  "cat": "Dining platform",
  "revenueCr": 139,
  "flip": "Retention",
  "quip": "seen it.",
  "problem": "Diners who booked through you last year have not heard from you since.",
  "build": "Lapsed Guest Win-Back",
  "steps": [
   "Group lapsed guests by favourite",
   "Write a message per group",
   "Add one small offer"
  ],
  "needs": [
   "Order history export",
   "Menu photos"
  ],
  "metric": "Return visits from lapsed guests",
  "outputs": "A message + visual per group",
  "track": "02",
  "recipe": "winback"
 },
 {
  "n": 70,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "EazyDiner",
  "cat": "Dining platform",
  "revenueCr": 139,
  "flip": "Support",
  "quip": "uh oh.",
  "problem": "Reviews arrive faster than anyone can reply and the rating slides every busy month.",
  "build": "Review Reply Desk",
  "steps": [
   "Upload the week's reviews",
   "Draft a specific reply each",
   "Route bad ones to the outlet"
  ],
  "needs": [
   "Review export",
   "Voice and escalation rules"
  ],
  "metric": "Reply rate and rating trend",
  "outputs": "Drafted replies + weekly issue log",
  "track": null,
  "recipe": null
 },
 {
  "n": 71,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "Suzette Gourmet",
  "cat": "Restaurants (crêperie)",
  "revenueCr": 37.5,
  "flip": "Sales",
  "quip": "oof.",
  "problem": "Corporate catering enquiries wait three days for a proposal built from scratch each time.",
  "build": "Catering Proposal Pack",
  "steps": [
   "Enter client, headcount, budget",
   "Build menu options in budget",
   "Style a spread per option"
  ],
  "needs": [
   "Client, headcount, budget, date",
   "Catering menu"
  ],
  "metric": "Proposal to order rate",
  "outputs": "A 4-page proposal PDF",
  "track": null,
  "recipe": null
 },
 {
  "n": 72,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "Hunger Inc. (Bombay Sweet Shop)",
  "cat": "Restaurants / Bombay Sweet Shop",
  "revenueCr": 115,
  "flip": "Marketing",
  "quip": "yep.",
  "problem": "Gift boxes sell out or sit, and the pre-order window is guessed rather than planned.",
  "build": "Gift Box Planner",
  "steps": [
   "Pick occasions and price tiers",
   "Make box and hamper visuals",
   "Build the gifting catalogue"
  ],
  "needs": [
   "Box and sweet photos",
   "Occasions and price tiers"
  ],
  "metric": "Pre-orders before the occasion week",
  "outputs": "Box visuals, catalogue PDF, share cards",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 73,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "SaladStop",
  "cat": "Healthy F&B chain",
  "revenueCr": 340,
  "flip": "Creative",
  "quip": "again?",
  "problem": "Your best-selling bowl has not been looked at in two years and orders are drifting.",
  "build": "Bowl Glow-Up",
  "steps": [
   "Upload your bowl photos",
   "Restyle with true portions",
   "Add macro and ingredient overlay"
  ],
  "needs": [
   "Bowl photos",
   "Ingredients and macros"
  ],
  "metric": "Orders per bowl after the refresh",
  "outputs": "Restyled bowls, overlays, a reel",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 74,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "Pickup Coffee",
  "cat": "Grab-and-go coffee chain",
  "revenueCr": 620,
  "flip": "Marketing",
  "quip": "sigh.",
  "problem": "The morning rush is where you win or lose the day and the app order takes ninety seconds.",
  "build": "60-Second Coffee",
  "steps": [
   "Enter your real order-to-cup time",
   "Make a timer-led video",
   "Cut 3 commute ads"
  ],
  "needs": [
   "Store and cup photos",
   "Real order-to-cup time"
  ],
  "metric": "App orders in the morning rush",
  "outputs": "A timer video + 3 ads",
  "track": null,
  "recipe": null
 },
 {
  "n": 75,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "EazyDiner",
  "cat": "Dining platform",
  "revenueCr": 139,
  "flip": "Commerce",
  "quip": "hmm.",
  "problem": "Half your restaurant listings use photos the restaurant sent in 2023.",
  "build": "Partner Photo Fixer",
  "steps": [
   "Upload the partner's photos",
   "Fix light and crop, keep it real",
   "Make a cover and quality score"
  ],
  "needs": [
   "Partner photos",
   "Cuisine and vibe"
  ],
  "metric": "Listing click-through",
  "outputs": "Fixed photos, cover, listing score",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 76,
  "section": "Cafés & restaurants",
  "colour": "#793A04",
  "brand": "Suzette Gourmet",
  "cat": "Restaurants (crêperie)",
  "revenueCr": 37.5,
  "flip": "Ops",
  "quip": "help.",
  "problem": "You do not know which menu item raises the bill, so the menu is ordered by category.",
  "build": "Menu Hero Finder",
  "steps": [
   "Upload sales and food cost",
   "Sort into stars and dead weight",
   "Redesign the menu"
  ],
  "needs": [
   "Item sales and cost export",
   "Current menu"
  ],
  "metric": "Average bill per guest",
  "outputs": "Item map, new menu, delivery version",
  "track": null,
  "recipe": null
 },
 {
  "n": 77,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "StayVista",
  "cat": "Luxury villa rentals",
  "revenueCr": 181,
  "flip": "Commerce",
  "quip": "same.",
  "problem": "Long-weekend villa demand is decided eight weeks out and your listing photos say \"nice house\".",
  "build": "Villa Mood Set",
  "steps": [
   "Upload real property photos",
   "Relight to golden hour and night",
   "Stage for each guest type"
  ],
  "needs": [
   "Real villa photos",
   "Guest types"
  ],
  "metric": "Listing CTR and booking rate",
  "outputs": "Mood sets per guest type",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 78,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "WanderOn",
  "cat": "Group travel",
  "revenueCr": 100,
  "flip": "Sales",
  "quip": "ugh.",
  "problem": "Group trips sell on who else is going and your page shows a day-by-day itinerary.",
  "build": "Trip Vibe Reel",
  "steps": [
   "Enter the itinerary",
   "Build visuals from past trips",
   "Cut a 30 s reel and stories"
  ],
  "needs": [
   "Day-by-day itinerary",
   "Past trip photos"
  ],
  "metric": "Enquiry to booking",
  "outputs": "A trip reel + story set",
  "track": null,
  "recipe": null
 },
 {
  "n": 79,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "WanderOn",
  "cat": "Group travel",
  "revenueCr": 100,
  "flip": "Sales",
  "quip": "seen it.",
  "problem": "A custom trip quote takes two days and the traveller books something else on day one.",
  "build": "Itinerary Builder",
  "steps": [
   "Paste the call notes",
   "Build the plan from inventory",
   "Export branded PDF + WhatsApp card"
  ],
  "needs": [
   "Call notes, budget, dates",
   "Your trip inventory"
  ],
  "metric": "Quote turnaround time",
  "outputs": "Itinerary PDF + WhatsApp card",
  "track": null,
  "recipe": null
 },
 {
  "n": 80,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "Mandala Club",
  "cat": "Members club",
  "revenueCr": 102,
  "flip": "Marketing",
  "quip": "uh oh.",
  "problem": "Programming is the membership argument and nobody leaves an event booked onto the next one.",
  "build": "Event Loop",
  "steps": [
   "Enter the event details",
   "Make poster and invite",
   "Upload clips, cut the recap"
  ],
  "needs": [
   "Event details",
   "Venue photo",
   "Event clips"
  ],
  "metric": "RSVP rate and next-event signups",
  "outputs": "Poster, invite, recap reel, stills",
  "track": null,
  "recipe": null
 },
 {
  "n": 81,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "Triangle Group",
  "cat": "Live entertainment / touring",
  "revenueCr": 176,
  "flip": "Marketing",
  "quip": "oof.",
  "problem": "A tour announcement has 48 hours of attention and the city-by-city assets take a week.",
  "build": "Tour City Pack",
  "steps": [
   "Upload key art and date list",
   "Add local landmarks and language",
   "Make posters, ads, countdowns"
  ],
  "needs": [
   "Show key art",
   "Tour dates and venues"
  ],
  "metric": "Ticket sales per city",
  "outputs": "A folder per city, every format",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 82,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "Leverage Edu",
  "cat": "Study-abroad platform",
  "revenueCr": 173,
  "flip": "Sales",
  "quip": "yep.",
  "problem": "Applications close in a few weeks and nobody can picture the campus they are applying to.",
  "build": "Campus Life Preview",
  "steps": [
   "Enter university and course",
   "Make a day-in-the-life video",
   "Add rent, transport, food costs"
  ],
  "needs": [
   "University, city, course",
   "Cost of living data"
  ],
  "metric": "Counselling call bookings",
  "outputs": "City video + cost card",
  "track": null,
  "recipe": null
 },
 {
  "n": 83,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "StayVista",
  "cat": "Luxury villa rentals",
  "revenueCr": 181,
  "flip": "Growth",
  "quip": "again?",
  "problem": "Your best marketing is a guest telling three friends, and nothing on checkout asks them to.",
  "build": "Guest Postcard",
  "steps": [
   "Pick property and stay",
   "Illustrate a postcard with name",
   "Add a referral code"
  ],
  "needs": [
   "Property photos",
   "Guest name and stay dates"
  ],
  "metric": "Shares and referral bookings",
  "outputs": "A postcard per guest",
  "track": null,
  "recipe": null
 },
 {
  "n": 84,
  "section": "Stays, travel & experiences",
  "colour": "#4DA2FF",
  "brand": "Mandala Club",
  "cat": "Members club",
  "revenueCr": 102,
  "flip": "Growth",
  "quip": "sigh.",
  "problem": "Weekends are full and the weekdays either side are empty.",
  "build": "Weekday Offer",
  "steps": [
   "Pick the empty dates",
   "Find 3 reasons to go",
   "Make ads and a WhatsApp blast"
  ],
  "needs": [
   "Property photos",
   "Empty dates and offer"
  ],
  "metric": "Weekday occupancy",
  "outputs": "3 themed offers with ads",
  "track": "02",
  "recipe": "full-funnel"
 },
 {
  "n": 85,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Merlin Brands (Rabitat)",
  "cat": "Kids & adult drinkware",
  "revenueCr": 27.9,
  "flip": "Creative",
  "quip": "hmm.",
  "problem": "Three agencies make your drinkware assets and no two use the same logo lockup.",
  "build": "Brand Guard",
  "steps": [
   "Upload your brand book once",
   "Drop in any new creative",
   "Score colour, type, logo, tone"
  ],
  "needs": [
   "Brand book",
   "New creative"
  ],
  "metric": "Off-brand assets that go live",
  "outputs": "A score + marked-up fixes",
  "track": "03",
  "recipe": "brand-guard"
 },
 {
  "n": 86,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Growthwell",
  "cat": "Plant-based foods (HAPPIEE!)",
  "revenueCr": 149.6,
  "flip": "Research",
  "quip": "help.",
  "problem": "Plant-based rivals launch a SKU every fortnight and nobody is tracking what they claim.",
  "build": "Rival Watch",
  "steps": [
   "Upload ad library screenshots",
   "Group by angle, offer, format",
   "Spot angles you haven't tested"
  ],
  "needs": [
   "Ad library and site screenshots",
   "Rival list"
  ],
  "metric": "One new angle tested each week",
  "outputs": "A weekly rival board",
  "track": null,
  "recipe": null
 },
 {
  "n": 87,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Youvit",
  "cat": "Gummy vitamins",
  "revenueCr": 123.2,
  "flip": "Growth",
  "quip": "same.",
  "problem": "Your best gummy ad won last year and nobody wrote down why it worked.",
  "build": "Winner Decoder",
  "steps": [
   "Upload ads and results",
   "Tag hook, scene, claim, format",
   "Find what the top 10% share"
  ],
  "needs": [
   "Ad performance export",
   "Ad creatives"
  ],
  "metric": "Hit rate of new ads",
  "outputs": "Pattern report + 5 briefs",
  "track": "03",
  "recipe": "brand-guard"
 },
 {
  "n": 88,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Simplee (Simplee Aloe)",
  "cat": "Aloe / functional drinks",
  "revenueCr": 41.3,
  "flip": "Marketing",
  "quip": "ugh.",
  "problem": "Your founder's sourcing story is the most convincing thing about the brand and it lives in one podcast.",
  "build": "Founder Story Engine",
  "steps": [
   "Record a voice note, 5 prompts",
   "Pull 8 stories",
   "Write posts, make visuals"
  ],
  "needs": [
   "Founder voice note",
   "Founder photo"
  ],
  "metric": "Followers and inbound DMs",
  "outputs": "8 posts with visuals",
  "track": "03",
  "recipe": "launch"
 },
 {
  "n": 89,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "IndiaLends",
  "cat": "Digital lending marketplace",
  "revenueCr": 49.8,
  "flip": "Internal",
  "quip": "seen it.",
  "problem": "The quarterly board update takes three days to assemble from six dashboards.",
  "build": "Board Update Builder",
  "steps": [
   "Upload the numbers sheet",
   "Write what happened, what's next",
   "Draw 4 simple charts"
  ],
  "needs": [
   "Monthly numbers",
   "Wins, misses, asks"
  ],
  "metric": "Founder hours spent",
  "outputs": "Update email, PDF, 4 charts",
  "track": null,
  "recipe": null
 },
 {
  "n": 90,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Bakers Circle India",
  "cat": "Frozen bakery (B2B)",
  "revenueCr": 80.7,
  "flip": "Hiring",
  "quip": "uh oh.",
  "problem": "You need six production hires before the 2027 ramp and the job post reads like a legal notice.",
  "build": "Job Post Glow-Up",
  "steps": [
   "Enter role and what great looks like",
   "Write it with one honest line",
   "Make a day-in-the-role carousel"
  ],
  "needs": [
   "Role, team, must-haves",
   "Team photo"
  ],
  "metric": "Qualified applicants per post",
  "outputs": "Job post, carousel, careers copy",
  "track": null,
  "recipe": null
 },
 {
  "n": 91,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Marathon Education",
  "cat": "K-12 edtech",
  "revenueCr": 39.6,
  "flip": "Internal",
  "quip": "oof.",
  "problem": "Every new batch teacher learns the format from whoever is free that day.",
  "build": "SOP to Video",
  "steps": [
   "Upload the SOP",
   "Split into one-action steps",
   "Add visuals and voiceover"
  ],
  "needs": [
   "SOP document",
   "Screens or photos"
  ],
  "metric": "Days to a new hire's first solo task",
  "outputs": "2-minute video + one-page card",
  "track": null,
  "recipe": null
 },
 {
  "n": 92,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Kind Kones",
  "cat": "Vegan ice cream",
  "revenueCr": 35.2,
  "flip": "Content",
  "quip": "yep.",
  "problem": "You need thirty UGC scripts and the creator brief is a WhatsApp voice note.",
  "build": "UGC Script Bank",
  "steps": [
   "Pull phrases from real reviews",
   "Write 20 scripts, 3 hooks each",
   "Make a sample cut for each"
  ],
  "needs": [
   "Product shots",
   "Top reviews"
  ],
  "metric": "UGC videos delivered per month",
  "outputs": "20 scripts, sample cuts, briefs",
  "track": "01",
  "recipe": "reviews-ugc"
 },
 {
  "n": 93,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Mswipe Technologies",
  "cat": "POS / payments",
  "revenueCr": 341.9,
  "flip": "Sales",
  "quip": "again?",
  "problem": "Merchant onboarding happens over WhatsApp and your catalogue is a PDF from March.",
  "build": "WhatsApp Catalogue",
  "steps": [
   "Upload price list and shots",
   "Make a card per product",
   "Group by category, export light"
  ],
  "needs": [
   "Product list with prices",
   "Product shots"
  ],
  "metric": "Reply rate on sales chats",
  "outputs": "Product cards + a 2 MB PDF",
  "track": null,
  "recipe": null
 },
 {
  "n": 94,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "bback",
  "cat": "Recovery / hangover drinks",
  "revenueCr": 34,
  "flip": "Retention",
  "quip": "sigh.",
  "problem": "Your party-season emails are last year's three sends, resent.",
  "build": "Email Story Rotation",
  "steps": [
   "Plan 8 emails across 3 types",
   "Write each with one idea",
   "Make a header for each"
  ],
  "needs": [
   "Product catalogue",
   "This month's goals"
  ],
  "metric": "Open and click rate trend",
  "outputs": "8 emails with headers",
  "track": "02",
  "recipe": "winback"
 },
 {
  "n": 95,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Piccolo",
  "cat": "Organic baby food",
  "revenueCr": 129.8,
  "flip": "Commerce",
  "quip": "hmm.",
  "problem": "Half your baby food listings carry the wrong pack shot and nobody owns the audit.",
  "build": "Listing Health Check",
  "steps": [
   "Upload listings from each channel",
   "Score images, title, bullets",
   "Fix the bottom 10"
  ],
  "needs": [
   "Listing export or screenshots",
   "Channels"
  ],
  "metric": "Conversion on the fixed SKUs",
  "outputs": "A scorecard + fixes for 10 SKUs",
  "track": null,
  "recipe": null
 },
 {
  "n": 96,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "SaladStop",
  "cat": "Healthy F&B chain",
  "revenueCr": 340,
  "flip": "Internal",
  "quip": "help.",
  "problem": "Menu decisions take four meetings across three markets and still get reopened.",
  "build": "One-Page Review",
  "steps": [
   "Paste the team updates",
   "Pull outcomes and blockers",
   "Draw one page, list decisions"
  ],
  "needs": [
   "Team updates and metrics",
   "Last week's decisions"
  ],
  "metric": "Decisions closed per week",
  "outputs": "One page: outcomes, numbers, decisions",
  "track": null,
  "recipe": null
 },
 {
  "n": 97,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Join Ventures (IGP.com)",
  "cat": "Gifting",
  "revenueCr": 400,
  "flip": "Creative",
  "quip": "same.",
  "problem": "Gifting is your entire business and the unboxing moment is designed by the courier.",
  "build": "Unboxing Moment",
  "steps": [
   "Upload box and product",
   "Make 3 insert and sleeve concepts",
   "Render an unboxing for each"
  ],
  "needs": [
   "Box and product shots",
   "Brand line"
  ],
  "metric": "Tagged unboxing posts",
  "outputs": "3 concepts, renders, print files",
  "track": "03",
  "recipe": "shoot"
 },
 {
  "n": 98,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Smylo",
  "cat": "Clean-label cat food",
  "revenueCr": 6.3,
  "flip": "Ops",
  "quip": "ugh.",
  "problem": "Your last offer went live at two different prices because three people built the creative.",
  "build": "Offer Creative Locker",
  "steps": [
   "Upload the offer price sheet",
   "Make assets with prices from it",
   "Check every asset against it"
  ],
  "needs": [
   "Offer price sheet",
   "Product shots"
  ],
  "metric": "Wrong-price errors per sale",
  "outputs": "Offer assets that match the sheet",
  "track": null,
  "recipe": null
 },
 {
  "n": 99,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "Shikho",
  "cat": "K-12 edtech",
  "revenueCr": 30.8,
  "flip": "Growth",
  "quip": "seen it.",
  "problem": "Your enrolment ads are written in English for parents who search in Bangla.",
  "build": "Bharat Ads",
  "steps": [
   "Pick top 5 ads and 6 languages",
   "Transcreate, native speaker check",
   "Swap scenes and characters"
  ],
  "needs": [
   "Top 5 ads",
   "Languages and regions"
  ],
  "metric": "CTR in tier 2 and tier 3 cities",
  "outputs": "30 localised ads",
  "track": "01",
  "recipe": "bharat"
 },
 {
  "n": 100,
  "section": "Every brand",
  "colour": "#FECC15",
  "brand": "The Form Art",
  "cat": "Online art marketplace",
  "revenueCr": 5,
  "flip": "Research",
  "quip": "uh oh.",
  "problem": "Nobody has spoken to a buyer who commissioned art since last year, so every brief is a guess.",
  "build": "Interview Synthesiser",
  "steps": [
   "Upload the transcripts",
   "Pull jobs, pains, their words",
   "Build 3 personas with quotes"
  ],
  "needs": [
   "Call notes or transcripts"
  ],
  "metric": "Briefs that cite a real customer quote",
  "outputs": "3 personas, quote bank, poster",
  "track": null,
  "recipe": null
 },
 {
  "n": 101,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Farmley",
  "cat": "Dry fruits & nuts",
  "revenueCr": 394,
  "flip": "Personalised pages",
  "quip": "oof.",
  "problem": "Your gifting ad sends paid traffic to the homepage, where dry fruit competes with everything else.",
  "build": "Ad-Matched Lander",
  "steps": [
   "Upload your top 5 ads",
   "Match headline and hero to each ad",
   "Publish one page per ad"
  ],
  "needs": [
   "Top 5 ads",
   "Product feed"
  ],
  "metric": "Landing page conversion vs homepage",
  "outputs": "5 ad-matched landing pages",
  "track": null,
  "recipe": null
 },
 {
  "n": 102,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Epigamia",
  "cat": "Greek yogurt",
  "revenueCr": 173.7,
  "flip": "Personalised pages",
  "quip": "yep.",
  "problem": "The everyday yogurt buyer and the gifting buyer get the same landing page.",
  "build": "Audience Split Pages",
  "steps": [
   "Pick 3 audiences from your data",
   "Rewrite hero, proof and FAQ for each",
   "Route each ad set to its page"
  ],
  "needs": [
   "Customer segments",
   "Product shots"
  ],
  "metric": "Conversion by audience segment",
  "outputs": "3 audience pages for one product",
  "track": null,
  "recipe": null
 },
 {
  "n": 103,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Fix My Curls",
  "cat": "Curly hair care",
  "revenueCr": 15,
  "flip": "Personalised pages",
  "quip": "again?",
  "problem": "Creators send you traffic and it all lands on one page with no sign they sent it.",
  "build": "Creator Storefront",
  "steps": [
   "Upload the creator photo and picks",
   "Generate their page with their code",
   "Share one link per creator"
  ],
  "needs": [
   "Creator photo, with consent",
   "Their picks and code"
  ],
  "metric": "Revenue per creator link",
  "outputs": "A storefront page per creator",
  "track": null,
  "recipe": null
 },
 {
  "n": 104,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Supertails",
  "cat": "Pet care platform",
  "revenueCr": 108.3,
  "flip": "Personalised pages",
  "quip": "sigh.",
  "problem": "Returning pet parents see the same first-time-buyer page every visit.",
  "build": "Returning Customer Page",
  "steps": [
   "Group customers by last purchase",
   "Build a refill and pairing page per group",
   "Send the link on WhatsApp and email"
  ],
  "needs": [
   "Order history export",
   "Product shots"
  ],
  "metric": "Repeat purchase rate",
  "outputs": "A personal reorder page per group",
  "track": null,
  "recipe": null
 },
 {
  "n": 105,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Chai Point",
  "cat": "Chai retail chain",
  "revenueCr": 234.7,
  "flip": "Personalised pages",
  "quip": "hmm.",
  "problem": "Tier 2 demand is your fastest-growing segment and every page is written for Bengaluru.",
  "build": "City Pages",
  "steps": [
   "List cities and delivery times",
   "Make a page per city with local proof",
   "Map each ad group to its city"
  ],
  "needs": [
   "Cities and delivery times",
   "Reviews by city"
  ],
  "metric": "Conversion in tier 2 and 3 cities",
  "outputs": "A landing page per city",
  "track": null,
  "recipe": null
 },
 {
  "n": 106,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Nutrova",
  "cat": "Nutrition supplements",
  "revenueCr": 16.5,
  "flip": "Pre-sell & pre-landers",
  "quip": "help.",
  "problem": "Cold traffic hits a supplement product page with no pre-sell and bounces at the price.",
  "build": "Advertorial Builder",
  "steps": [
   "Pick the problem your buyer feels",
   "Write a labelled story with real proof",
   "Link it to the PDP with one offer"
  ],
  "needs": [
   "The problem buyers feel",
   "Reviews and proof"
  ],
  "metric": "Cold traffic conversion and CPA",
  "outputs": "An advertorial page + 3 headline tests",
  "track": null,
  "recipe": null
 },
 {
  "n": 107,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Go Desi",
  "cat": "Desi snacks / confectionery",
  "revenueCr": 55.6,
  "flip": "Pre-sell & pre-landers",
  "quip": "same.",
  "problem": "Nobody has written the three reasons your sweets beat the box the neighbour brought.",
  "build": "Reasons Why Listicle",
  "steps": [
   "Pull top reasons from reviews",
   "Write one bold block per reason",
   "Close with the offer and reviews"
  ],
  "needs": [
   "Top reviews",
   "Product shots"
  ],
  "metric": "Click-through to the PDP",
  "outputs": "A listicle page + 2 headline versions",
  "track": null,
  "recipe": null
 },
 {
  "n": 108,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Anveshan",
  "cat": "Farm-to-fork foods",
  "revenueCr": 77,
  "flip": "Pre-sell & pre-landers",
  "quip": "ugh.",
  "problem": "Your founder's cold-press story converts in person and appears nowhere in the funnel.",
  "build": "Founder Letter Page",
  "steps": [
   "Record the founder's story as a voice note",
   "Turn it into a long-form letter page",
   "End with the product and one offer"
  ],
  "needs": [
   "Founder voice note",
   "Founder photo"
  ],
  "metric": "Time on page and conversion",
  "outputs": "A founder letter page",
  "track": null,
  "recipe": null
 },
 {
  "n": 109,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "SleepyCat",
  "cat": "Mattresses / sleep",
  "revenueCr": 98,
  "flip": "Pre-sell & pre-landers",
  "quip": "seen it.",
  "problem": "Mattress shoppers compare five brands and you have no buyer's guide to land them on.",
  "build": "Buyer's Guide Pre-Lander",
  "steps": [
   "List 5 things a good product needs",
   "Explain each with proof and visuals",
   "Show how yours scores, honestly"
  ],
  "needs": [
   "5 things that matter",
   "Specs and certificates"
  ],
  "metric": "Conversion from comparison shoppers",
  "outputs": "A buyer's guide pre-lander",
  "track": null,
  "recipe": null
 },
 {
  "n": 110,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "XYXX",
  "cat": "Men's innerwear",
  "revenueCr": 187,
  "flip": "Pre-sell & pre-landers",
  "quip": "uh oh.",
  "problem": "Comparison traffic finds a rival's versus page before yours, because yours does not exist.",
  "build": "Us vs Them Page",
  "steps": [
   "Pick 3 real rivals and fair criteria",
   "Build a clear comparison table",
   "Back every tick with a source"
  ],
  "needs": [
   "3 rivals and fair criteria",
   "Specs and prices"
  ],
  "metric": "Conversion from comparison traffic",
  "outputs": "A comparison page with sources",
  "track": null,
  "recipe": null
 },
 {
  "n": 111,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "GOQii",
  "cat": "Wearables / preventive health",
  "revenueCr": 30.1,
  "flip": "Pre-sell & pre-landers",
  "quip": "oof.",
  "problem": "Your demo is a two-minute video on YouTube rather than a page that sells.",
  "build": "Video Sales Page",
  "steps": [
   "Upload the demo or founder video",
   "Write the headline and chapter notes",
   "Reveal the offer after the key moment"
  ],
  "needs": [
   "Demo or founder video",
   "Offer"
  ],
  "metric": "Play rate and conversion",
  "outputs": "A video-first sales page",
  "track": null,
  "recipe": null
 },
 {
  "n": 112,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Deconstruct",
  "cat": "Skincare",
  "revenueCr": 130,
  "flip": "Product pages",
  "quip": "yep.",
  "problem": "Your best-selling product page is a wall of ingredient percentages and one photo.",
  "build": "PDP Rebuild",
  "steps": [
   "Pull claims, reviews and specs",
   "Rebuild hero, proof, how-to and FAQ",
   "Publish as a test version"
  ],
  "needs": [
   "Product shots",
   "Specs and reviews"
  ],
  "metric": "PDP conversion rate",
  "outputs": "A rebuilt PDP ready to A/B test",
  "track": null,
  "recipe": null
 },
 {
  "n": 113,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Colourette",
  "cat": "Cosmetics",
  "revenueCr": 178.2,
  "flip": "Product pages",
  "quip": "again?",
  "problem": "All your shades share one page, so the buyer scrolls past the one she came for.",
  "build": "Variant Pages",
  "steps": [
   "Upload variant shots and specs",
   "Make a hero and story per variant",
   "Link them as one product family"
  ],
  "needs": [
   "Variant shots",
   "Variant specs"
  ],
  "metric": "Variant conversion and returns",
  "outputs": "Variant pages and images",
  "track": null,
  "recipe": null
 },
 {
  "n": 114,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Pip & Nut",
  "cat": "Nut butter",
  "revenueCr": 206.5,
  "flip": "Product pages",
  "quip": "sigh.",
  "problem": "Your gift bundle exists in the warehouse and not as a page anyone can buy.",
  "build": "Bundle Page",
  "steps": [
   "Pick the bundle and its saving",
   "Make a page that shows the routine",
   "Add one button for the whole bundle"
  ],
  "needs": [
   "Product shots",
   "Bundle and saving"
  ],
  "metric": "Bundle attach rate and AOV",
  "outputs": "A bundle landing page",
  "track": null,
  "recipe": null
 },
 {
  "n": 115,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Arata",
  "cat": "Hair care",
  "revenueCr": 53.4,
  "flip": "Product pages",
  "quip": "hmm.",
  "problem": "Ingredient skepticism is the main objection and your proof is a logo in the footer.",
  "build": "Ingredient Proof Page",
  "steps": [
   "Upload formulation and certificates",
   "Explain each ingredient in plain words",
   "Link every claim to its proof"
  ],
  "needs": [
   "Formulation and certificates",
   "Product shot"
  ],
  "metric": "Conversion from skeptical traffic",
  "outputs": "An ingredient page with sources",
  "track": null,
  "recipe": null
 },
 {
  "n": 116,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Knya",
  "cat": "Medical apparel",
  "revenueCr": 110,
  "flip": "Product pages",
  "quip": "help.",
  "problem": "Scrub sets cost more than the market and nothing does the cost-per-wear maths.",
  "build": "Cost per Use Page",
  "steps": [
   "Enter price, uses and lifespan",
   "Show the cost per use honestly",
   "Compare with what buyers use today"
  ],
  "needs": [
   "Price, uses, lifespan",
   "Product shot"
  ],
  "metric": "Conversion on premium SKUs",
  "outputs": "A cost-per-use page + calculator block",
  "track": null,
  "recipe": null
 },
 {
  "n": 117,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "82°E",
  "cat": "Skincare / self-care",
  "revenueCr": 14.7,
  "flip": "Quizzes & tools",
  "quip": "same.",
  "problem": "Gift buyers don't know which skin type they are buying for and no quiz tells them.",
  "build": "Product Finder Quiz",
  "steps": [
   "Map needs to products",
   "Write 5 plain questions",
   "Make a result page per answer"
  ],
  "needs": [
   "Product catalogue",
   "Needs it solves"
  ],
  "metric": "Quiz completion and quiz-to-cart",
  "outputs": "A quiz with result pages",
  "track": null,
  "recipe": null
 },
 {
  "n": 118,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "The Indus Valley",
  "cat": "Healthy cookware",
  "revenueCr": 117,
  "flip": "Quizzes & tools",
  "quip": "ugh.",
  "problem": "Your routine is four products and the store sells them as four unrelated SKUs.",
  "build": "Routine Builder Page",
  "steps": [
   "Group products into steps",
   "Let shoppers pick one per step",
   "Add the whole routine to cart"
  ],
  "needs": [
   "Product catalogue",
   "Routine steps"
  ],
  "metric": "Items per order",
  "outputs": "A build-your-routine page",
  "track": null,
  "recipe": null
 },
 {
  "n": 119,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Koparo",
  "cat": "Natural home cleaning",
  "revenueCr": 23.4,
  "flip": "Quizzes & tools",
  "quip": "seen it.",
  "problem": "Deep-cleaning buyers guess quantities, over-order once and never return.",
  "build": "Calculator Page",
  "steps": [
   "Pick the number buyers need to know",
   "Build a simple calculator",
   "Recommend the right pack size"
  ],
  "needs": [
   "The number buyers need",
   "Pack sizes"
  ],
  "metric": "Conversion and right-size orders",
  "outputs": "A calculator page that ends in a pack",
  "track": null,
  "recipe": null
 },
 {
  "n": 120,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Ugaoo",
  "cat": "Plants / gardening",
  "revenueCr": 95,
  "flip": "Quizzes & tools",
  "quip": "uh oh.",
  "problem": "Plant gifting is your peak and with no gift finder everyone buys the same money plant.",
  "build": "Gift Finder Page",
  "steps": [
   "Ask who, budget and occasion",
   "Match picks from your range",
   "Show a ready-to-gift result page"
  ],
  "needs": [
   "Product catalogue",
   "Occasions and budgets"
  ],
  "metric": "Gift order conversion",
  "outputs": "A gift finder page",
  "track": null,
  "recipe": null
 },
 {
  "n": 121,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Furtados School of Music",
  "cat": "Music education",
  "revenueCr": 22,
  "flip": "Trojan horse",
  "quip": "oof.",
  "problem": "A free chord and scale tool would earn you organic traffic all year and you have not built it.",
  "build": "Free Tool Page",
  "steps": [
   "Pick a job your buyer searches for",
   "Build a free tool page for it",
   "Recommend your product in the result"
  ],
  "needs": [
   "A job buyers search for",
   "Product shots"
  ],
  "metric": "Organic visits and assisted sales",
  "outputs": "A free tool page that sells softly",
  "track": null,
  "recipe": null
 },
 {
  "n": 122,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "StayVista",
  "cat": "Luxury villa rentals",
  "revenueCr": 181,
  "flip": "Trojan horse",
  "quip": "yep.",
  "problem": "Gifting a villa stay is a real purchase and you have no gift guide page for it.",
  "build": "Gift Guide Page",
  "steps": [
   "Pick a persona and occasion",
   "Curate 7 picks from your range",
   "Write a short reason for each"
  ],
  "needs": [
   "Product catalogue",
   "Persona and occasion"
  ],
  "metric": "Gift-occasion conversion",
  "outputs": "A gift guide page per persona",
  "track": null,
  "recipe": null
 },
 {
  "n": 123,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "SuperBottoms",
  "cat": "Reusable baby hygiene",
  "revenueCr": 84.3,
  "flip": "Trojan horse",
  "quip": "again?",
  "problem": "Parents buy the starter pack once and never learn the second and third use.",
  "build": "Use-It-More Hub",
  "steps": [
   "List 20 uses from reviews and recipes",
   "Make a card for each use",
   "Link each card to the product"
  ],
  "needs": [
   "Reviews and recipes",
   "Product shots"
  ],
  "metric": "Repeat purchase rate",
  "outputs": "A use-case hub page",
  "track": null,
  "recipe": null
 },
 {
  "n": 124,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Protocol Health",
  "cat": "Preventive health clinic",
  "revenueCr": 3.4,
  "flip": "Trojan horse",
  "quip": "sigh.",
  "problem": "People ask AI assistants what a preventive health check covers and your answers are on no page.",
  "build": "Answer Pages",
  "steps": [
   "Pull 10 questions buyers ask",
   "Write a clear answer page for each",
   "Link each to the right product"
  ],
  "needs": [
   "Search and support questions",
   "Product catalogue"
  ],
  "metric": "Organic and AI search traffic",
  "outputs": "10 answer pages",
  "track": null,
  "recipe": null
 },
 {
  "n": 125,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "ICON",
  "cat": "D2C luggage",
  "revenueCr": 12,
  "flip": "Drops & offers",
  "quip": "hmm.",
  "problem": "Your drop sells out in an hour with no countdown page and no waitlist.",
  "build": "Drop Countdown Page",
  "steps": [
   "Enter the drop date and real stock",
   "Build a countdown and waitlist page",
   "Switch to buy mode at launch"
  ],
  "needs": [
   "Drop product shots",
   "Drop date and stock"
  ],
  "metric": "Waitlist signups and sell-through",
  "outputs": "A drop page with waitlist",
  "track": null,
  "recipe": null
 },
 {
  "n": 126,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Mandala Club",
  "cat": "Members club",
  "revenueCr": 102,
  "flip": "Drops & offers",
  "quip": "help.",
  "problem": "Member events are the whole value and non-members have no page showing what they are missing.",
  "build": "VIP Access Page",
  "steps": [
   "Pick the VIP list and the offer",
   "Build a code-gated page",
   "Send codes by SMS and email"
  ],
  "needs": [
   "VIP customer list",
   "VIP offer"
  ],
  "metric": "VIP conversion and AOV",
  "outputs": "A gated VIP sale page",
  "track": null,
  "recipe": null
 },
 {
  "n": 127,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "Saturdays",
  "cat": "Eyewear",
  "revenueCr": 149.6,
  "flip": "Drops & offers",
  "quip": "same.",
  "problem": "Last season's frames sit in the warehouse and the sale banner gets ignored.",
  "build": "Clearance Page",
  "steps": [
   "Upload the overstock list",
   "Build a page with honest markdowns",
   "Show the real stock left"
  ],
  "needs": [
   "Overstock list",
   "Product shots"
  ],
  "metric": "Units cleared per week",
  "outputs": "A clearance page",
  "track": null,
  "recipe": null
 },
 {
  "n": 128,
  "section": "Shopify pages",
  "colour": "#008060",
  "brand": "WanderOn",
  "cat": "Group travel",
  "revenueCr": 100,
  "flip": "Drops & offers",
  "quip": "ugh.",
  "problem": "Your booking confirmation says thanks and never asks who else is coming.",
  "build": "Thank-You Page Upsell",
  "steps": [
   "Pick the next best product",
   "Add how-to-use and referral blocks",
   "Publish as the order status page"
  ],
  "needs": [
   "Order data",
   "Product shots"
  ],
  "metric": "Second order and referral rate",
  "outputs": "A post-purchase page",
  "track": null,
  "recipe": null
 }
];
