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
- `support.html`: "support me" page with source cards (logo, copy-to-clipboard code, attributes, what they sell, shop button). Sources are set in `support.sources` in `js/data.js`
- `about.html`: evidence grades, status labels and disclaimer

Other features:
- Press `⌘K`, `Ctrl+K` or `/` to search.
- The ✦ button opens "ask the archive", which pulls answers from the text of codex entries. It is a keyword search, not an AI model.
- A sun/moon button switches between dark and light themes.

## Editing content

Site settings and the original entries live in `js/data.js`. More entries live in `js/entries-aas.js` (steroids and GH), `js/entries-noots.js` (racetams and other nootropics) and `js/entries-metabolic.js` (exercise mimetics). Each extra file adds to the same list, so you can put a new entry in any of them. That file sets the ticker text, header buttons, home cards, categories, entries and references. The comment at the top of the file documents the entry schema.

## Running locally

```sh
python3 -m http.server 8000
```

## Deploying

The site is plain static files, so it works on GitHub Pages, Netlify, Vercel or Cloudflare Pages without configuration.
