# Atlas Codex

An open reference library of peptides and research compounds, built as a static wiki. It has no build step or dependencies.

## Pages

- `index.html`: home page with search, stats, categories and recently updated entries
- `codex.html`: A–Z index with category chips, a status filter and live search
- `archive.html`: chronological archive grouped by month, with filters for type and date field and a sort toggle
- `entry.html?slug=…`: wiki-style entry page with a table of contents, an infobox, tags and related entries
- `about.html`: editorial standards and disclaimer

Other features: press `/` anywhere for quick search, and use the moon button to switch between light and dark themes.

## Editing content

All content lives in `js/data.js`. To add a page, add an object to `entries` with a unique `slug`. Categories are defined in the same file.

## Running locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying

The site is plain static files, so it works on GitHub Pages (Settings → Pages → deploy from branch), Netlify, Vercel or Cloudflare Pages without configuration.
