# Atlas Codex

An open reference library of peptides and research compounds, built as a static, dark-first wiki. It has no build step or dependencies.

## Pages

- `index.html`: home page with an announcement ticker, glowing hero, ⌘K search, "ask atlas", category chips, call-to-action cards and recently updated entries
- `codex.html`: the database, with filters by category, status and sort order
- `archive.html`: chronological archive grouped by month
- `entry.html?slug=…`: compound page with these sections:
  - names and origin, and structure (with a PubChem structure image)
  - **profile**: editorial 1–5 scores; red rows are ones where higher is worse. Visitors can add their own scores, which are saved in their browser
  - **risk and monitoring**: a grid graded by evidence, with expandable detail
  - **mechanism and receptor activity**: a list with a detail panel
  - **human clinical record**: trials with design meta lines and editor's notes
  - **references**, with links to PubMed
- `credits.html`: "Creators I Learned From" page. Cards come from `credits.people` in `js/data.js` and use generated monogram avatars; set `image` on a person to use a real photo or logo you have permission to use
- `support.html`: "support me" page with source cards (logo, copy-to-clipboard code, attributes, what they sell, shop button). Sources are set in `support.sources` in `js/data.js`
- Compound pages carry a **Monitoring** section from `js/monitoring.js`: which markers that compound makes worth watching, why, and warning signs. Target ranges are deliberately omitted, since interpreting a result is a clinical decision
- Longer guide articles live in `js/entries-guides.js`
- Every compound page has a **Dosing in Labels and Trials** panel. `js/dosing.js` holds only two kinds of numbers: dosing from an approved regulator-reviewed label, and dosing a published trial actually administered. Protocols from forums, vendors or coaching documents are deliberately excluded. Compounds with neither source show an honest "no established human dose" panel instead, with per-compound wording in `site.noDoseBySlug` for drugs approved abroad or sold as cosmetics
- Every compound page also has a **Pharmacokinetics** panel (route, bioavailability, half-life, metabolism, excretion). The data live in `js/pk.js`, keyed by entry slug
- Every compound page has a **Buy from** block under the title. Add product links in `js/buy.js` (keyed by entry slug, pointing at a source `id` from `support.sources`). The `?ref=` code is added automatically. Compounds with no link show "No current stock"
- `about.html`: evidence grades, status labels and disclaimer

## Design

The identity is an Alexandrian library by way of Victorian scientific engraving: ink, parchment and antique gold, taken from the brand mark (`#17181d`, `#eee8d2`, `#b8874f`). Every colour is a token in the `:root` block of `css/style.css`; dark is the default and light is aged paper rather than white, so changing a theme means editing one block. The background is a laid-paper texture (fine engraver's hatch plus widely spaced chain lines) rather than a grid. Display type is Cormorant Garamond, prose is EB Garamond, and Inter and JetBrains Mono carry the dense data. The home page line art is a compass rose, an armillary sphere and a graticule. Section headings carry a hairline out to the margin like an engraved running head, a compass ornament marks true breaks, and entry ledes open with a gold drop cap.

Other features:
- Press `⌘K`, `Ctrl+K` or `/` to search.
- The ✦ button opens "ask the archive", which pulls answers from the text of codex entries. It is a keyword search, not an AI model.
- A sun/moon button switches between dark and light themes.

## Editing content

Site settings and the original entries live in `js/data.js`. More entries live in `js/entries-aas.js` (steroids and GH), `js/entries-noots.js` (racetams and other nootropics) and `js/entries-metabolic.js` (exercise mimetics) and `js/entries-fatloss.js` (fat loss agents, plus TAK-653). `js/entries-faq-1.js` and `js/entries-faq-2.js` hold the larger batch added later, written in a shorter format using `ATLAS.add()` from `js/builder.js` (the short forms are documented at the top of that file). `js/entries-products.js` holds blends and branded products. Each extra file adds to the same list, so you can put a new entry in any of them. That file sets the ticker text, header buttons, home cards, categories, entries and references. The comment at the top of the file documents the entry schema.

## Running locally

```sh
python3 -m http.server 8000
```

## Deploying

The site is plain static files, so it works on GitHub Pages, Netlify, Vercel or Cloudflare Pages without configuration.
