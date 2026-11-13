# The reported-dosing pipeline

`js/dosing-reported.js` is generated. This directory holds the thing that generates it, and the
scripts used to check the result. Nothing here runs at page load; it is all offline tooling, run by
hand with Node and no dependencies.

## Rebuilding

```
node tools/dosing/gen.js
```

That reads `mapped.json` and the tables written out inside `gen.js` itself, and writes
`js/dosing-reported.js`. It is the only command needed for an ordinary change, and it is the only
way that file should ever change — do not edit the generated file by hand, because the next run
will overwrite it.

Afterwards, always:

```
node tools/check.js
```

which refuses a reported block that carries numbers without a confidence grade or a named source,
rows under `confidence: "none"`, a malformed row, or two blocks from the same source on one compound.
That last rule has caught a real duplicate twice.

## Where the figures come from

Two sources, and the codex keeps them apart from the record rather than merging them:

| | |
|---|---|
| **Tanner Tattered, FAQ** | The primary source. Extracted from the document by `extract.js` and `map.js`. |
| **Maximum Pharma Archive** | Fills only what the FAQ leaves out. Read by hand off its compound and stack pages, and written directly into the `ARCHIVE`, `ARCHIVE2`, `ARCHIVE3` and `ARCHIVE4` tables in `gen.js`. |

Neither ever overwrites `js/dosing.js`, which holds only what a regulator label or a published trial
established. See the Positioning section of `PRODUCT.md` for the policy this implements.

### The full extraction, when the FAQ changes

```
node tools/dosing/extract.js    # faq.txt          -> faq-doses.json
node tools/dosing/map.js        # faq-doses.json   -> mapped.json   (matches headings to codex slugs)
node tools/dosing/gen.js        # mapped.json      -> js/dosing-reported.js
```

**`faq.txt` is not in this repository, and should not be put in it.** It is another author's
document in full, and redistributing it is not ours to do — the codex credits and links the source
instead. `extract.js` is the only step that needs it, and it stops with an explanation if it is
absent. To re-extract, export the FAQ to Markdown and save it as `tools/dosing/faq.txt`; both it and
the `faq-doses.json` it produces are listed in `.gitignore`.

`mapped.json` is committed, because it holds only the dose tables that are already published in
`js/dosing-reported.js`, and keeping it means the common case needs no source document at all.

`map.js` splits its output: sections with one clear dose block are safe to import, sections with
several need a person to read them, and those are written into `gen.js` by hand. It currently
reports 167 FAQ sections, 160 matched to a codex entry, 72 safe to import.

## The rules the generator applies

These live in the footer of `gen.js`, after the tables, and are the reason the output is generated
rather than written:

- **Source order.** The FAQ leads wherever both sources cover a compound; blocks are sorted so it is
  printed first. `PRIMARY` and `SECOND` name them.
- **Folding.** `ARCHIVE_SAYS` lists compounds where the two materially disagree *and* the FAQ's
  figure is the higher one. The Archive's lower figure folds into a line inside the FAQ's block and
  its own block is dropped, so one figure leads without the more cautious number disappearing.
  Disagreements about route, period or substance are deliberately not in that list: those two blocks
  describe different things rather than competing, so both stay.
- **Grading.** A figure one source gives alone is `thin`; a second independent source reporting the
  same kind of use lifts it to `some`. The grade is derived here rather than written on each block,
  so it cannot drift from the evidence.
- **`NO_LIFT`.** Two blocks are not corroboration when they are not describing the same thing. On
  the compounds named there, one source declines to give a figure at all, or the two give different
  routes with no shared unit, so the grade stays at one source.
- **`BY_HAND`.** Slugs the extractor must not emit a block for, because the FAQ has two sections for
  them and they would otherwise get two blocks from the same source.

## Checking the result

Read-only; none of these write anything.

| Script | What it prints |
|---|---|
| `node tools/dosing/stats.js` | Source precedence and the grade spread. Confirms the FAQ leads, that no page prints the Archive above it, and that no compound carries two blocks from one source. |
| `node tools/dosing/conflicts.js` | The two sources compared compound by compound: clashes needing a decision, agreements, each source's gaps, and compounds with no dosing of any kind. |
| `node tools/dosing/gaps.js` | Compounds no source gives a figure for, split by entry type so guides and blends are not counted as gaps. |
| `node tools/dosing/peek.js <slug>...` | One compound's whole dosing record, label and trial rows then every reported block. |

Each loads the codex the way a page does, by running the files `js/load.js` lists in order, so they
read exactly what the site reads. That loader is repeated in each script rather than shared; it is
eight lines, and keeping them standalone means any one can be copied out and run on its own.
