# Atlas Codex

An open reference library of peptides and research compounds, built as a static, dark-first wiki. It has no build step or dependencies.

## Pages

- `index.html`: home page with the support notice, the statement and search beside the compass rose, a live figure (how many compounds have a randomized human trial, recounted per field), browse by field, the range of the record as one table, the codex's standards and the support band
- `codex.html`: the database, with filters by category, status and sort order
- `stacks.html`: the list of stacks from `js/stacks.js`, filtered by use case, by how far the record goes (tested together, tested only in parts, where the record pushes back) or by name, and sortable A to Z or by last update
- `stack.html?id=…`: one stack, laid out like a compound entry: the parts as a formula plate, the theory, a ledger of each part's evidence summed to one grade for the pair (never higher than what the pair has been shown to do), the record, dosing only where a trial gave the combination, what to watch, references, and more stacks for the same use. Compound pages list the stacks they appear in
- Use cases (`js/uses.js`): healing and recovery, muscle building, fat loss and the rest, each a curated list of entry slugs. They filter the codex and the stacks, and appear on each entry. A use case says what a compound is studied or used for, not that it works. On the codex and the stacks the use-case and field tabs are multi-select toggles: an entry shows if it matches any picked field and any picked use case, a second click releases a tab, and the picks live in the URL (`?use=fatloss,muscle&cat=aas`)
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

The identity is a two-colour printed annual: ink ground, parchment ink and one antique gold action colour, all taken from the brand mark (`#17181d`, `#eee8d2`, `#b8874f`). Every page hangs from one vertical line at 42% of the viewport: headings start on it, text hangs from it, and the zone to its left holds notes, filters and the structure plate. Display type is Cormorant Garamond and everything read is EB Garamond, under the ATLAS CODEX wordmark, with a laid-paper texture, gold drop caps and a compass rose. Surfaces are separated by steps of tone rather than lines, corners are square, and evidence grades and statuses are written as words on a tint of their meaning colour. Every colour is a token in the `:root` block of `css/style.css`; dark is the default and the light theme is parchment. `DESIGN.md` records the full system.

The only pictures are PubChem structure drawings on entry pages (public domain, loaded from PubChem). Support for the codex is promoted on every page through the referral code in `support.sources` (`js/data.js`): a notice strip, the header button, the home support band, a support sheet on each entry, and the Buy from block. Add product URLs to `js/buy.js` to turn an entry's support link into a direct product button.

Other features:
- Press `⌘K`, `Ctrl+K` or `/` to search.
- The ✦ button opens "ask the archive", which pulls answers from the text of codex entries. It is a keyword search, not an AI model.
- A sun/moon button switches between dark and light themes.

## Editing content

Site settings and the original entries live in `js/data.js`. Compounds added in the October 2026 research pass live in `js/entries-new.js` (which also sets their dosing and monitoring), and the references that pass gathered (ids 200–799) live in `js/refs-research.js`. Use cases are curated slug lists in `js/uses.js`; stacks are in `js/stacks.js`. More entries live in `js/entries-aas.js` (steroids and GH), `js/entries-noots.js` (racetams and other nootropics) and `js/entries-metabolic.js` (exercise mimetics) and `js/entries-fatloss.js` (fat loss agents, plus TAK-653). `js/entries-faq-1.js` and `js/entries-faq-2.js` hold the larger batch added later, written in a shorter format using `ATLAS.add()` from `js/builder.js` (the short forms are documented at the top of that file). `js/entries-products.js` holds blends and branded products. Each extra file adds to the same list, so you can put a new entry in any of them. That file sets the ticker text, header buttons, home cards, categories, entries and references. The comment at the top of the file documents the entry schema.

## Running locally

```sh
python3 -m http.server 8000
```

## Deploying

The site is plain static files, so it works on GitHub Pages, Netlify, Vercel or Cloudflare Pages without configuration.
