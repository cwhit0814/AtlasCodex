# Entry page: three directions

Design studies for the compound entry page, made before the instrument direction was chosen and
built. They are kept as the record of what the choice was between. Open `index.html`.

| | Direction | Authority comes from | Where the two asks sit |
|---|---|---|---|
| 1 | **Monograph** — light, dense, clinical. Public Sans + DM Mono, navy, 3px radius | Completeness. Reads like a drug label | Their own section, framed as the two things the page cannot do for you |
| 2 | **Instrument** — dark, figures first. IBM Plex, amber, square. **This is the one that was built** | Precision. A key-figure strip, everything measured | Directly under the dosing table, at the decision point |
| 3 | **Reading room** — light, airy, one column. Newsreader + DM Mono, forest green, 10px radius | The writing. Drop cap, generous measure | Coaching is a full-width pause after dosing; the affiliate line stays quiet near the end |

All three render the same real tirzepatide record — 5 risks, 7 trials, 10 jurisdictions, 22
references, both dosing sources with the FAQ leading, and the live Half Nattys listing — so the only
variable between them is the design.

## These are not pages of the site

They are self-contained HTML with their own inline styles. They do not load `css/style.css` or
`js/*.js`, they are not reachable from any page, and nothing on the site links to them. The record
they show is a snapshot taken when they were made and does not update with the data files, so treat
any figure in them as illustration rather than as the codex's current record.

Because the site is served statically with `.nojekyll`, every file in this repository is reachable by
URL. Each of the four files therefore carries `<meta name="robots" content="noindex,nofollow">`, so
they are not indexed. That is the only edit made to them; they are otherwise exactly as reviewed. If
you would rather they were not served at all, the options are a `robots.txt` with `Disallow: /design/`
(which stops crawling but not direct access), or moving this directory out of the published tree.

Two things in them are deliberately unfinished, and are the reason they are studies:

- **The coaching copy is placeholder.** "The record above is the same for everyone. What it means for
  one person depends on their labs…" was written to hold the shape of the argument, not to ship. It
  is the string doing the conversion work in all three, and it should be rewritten in the site
  owner's own voice before any of it goes live.
- **The consult button goes nowhere** (`href="#"`). There is no coaching page for it to point at yet.

## What was built from this

Direction 2. It ships as `css/entry-instrument.css` layered over `css/style.css` and scoped to
`body[data-page="entry"]`, with the key strip built from the record in `js/app.js`. `DESIGN.md`
records it as a surface-scoped visual world with its own palette, type ramp and named rules.

The built page differs from the comp in two ways worth knowing. It carries the whole entry record —
profile scores, interactions, monitoring, anecdotes, reader reports, mechanism, stacks — where the
comp showed a simplified subset. And it does not include the comp's two conversion cards, because the
copy is placeholder; the site's existing support surfaces are used instead.
