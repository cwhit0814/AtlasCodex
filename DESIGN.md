---
name: Atlas Codex
description: An open reference library of peptides and research compounds, set as a panel of readings on one dark ground.
colors:
  ground: "#101114"
  surface: "#17191d"
  surface-raised: "#1d2026"
  rule: "#2a2e36"
  ink: "#e8eaed"
  soft-ink: "#969ba5"
  amber: "#f0a02a"
  amber-hover: "#f7b14b"
  amber-ink: "#17120a"
  plate: "#f3f3ef"
  plate-ink: "#17181d"
  laurel: "#6fcf97"
  verdigris: "#67b9c4"
  signal: "#e0ac5e"
  alarm: "#ef8b8b"
  light-ground: "#f6f6f4"
  light-surface: "#fdfdfc"
  light-surface-raised: "#eeeeeb"
  light-rule: "#dcdcd6"
  light-ink: "#16181c"
  light-soft-ink: "#585d66"
  light-amber: "#9c5c00"
  light-amber-ink: "#fffdf8"
typography:
  display:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 0.9vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.1
  lead:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 600
    lineHeight: 1.2
  reading:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.96875rem"
    fontWeight: 400
    lineHeight: 1.5
  figure:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.03em"
  micro:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
  wordmark:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    letterSpacing: "0.2em"
  ledger:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(4rem, 2rem + 4.5vw, 6.5rem)"
    fontWeight: 600
    lineHeight: 0.85
    letterSpacing: "-0.02em"
rounded:
  none: "0px"
spacing:
  band-gap: "4px"
  margin: "clamp(1.25rem, 3.3vw, 3rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(4rem, 7vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 22px"
  button-quiet:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "48px"
  band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "11px 20px"
  tab-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "48px"
  button-on-accent:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "48px"
  support-band:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
---

# Design System: Atlas Codex

## Overview

**Creative North Star: "The Instrument"**

Atlas Codex is a panel of readings. People arrive at it deciding something, usually with lab results in mind and two other sources open, so the site answers with measurement before it answers with prose: figures first, every claim carrying its grade beside it, surfaces divided by a hairline rather than by a step of tone, and one amber accent held back for the single action.

Everything hangs from one vertical line at 42% of the viewport. Headings start on it, body text hangs from it, and the zone to its left carries labels, notes, figures, filters and the structure plate. On a phone the line collapses to the left margin and side notes move inline above their content.

The brand carries the atmosphere instead of pictures: the ATLAS CODEX wordmark with CODEX in amber, the compass rose beside the home statement, and IBM Plex Sans over IBM Plex Mono. The only pictures are PubChem structure drawings and the creator portraits on Credits, where they carry information.

This replaced an earlier world, "The Printed Annual", set in Cormorant Garamond and EB Garamond on an ink ground with antique gold, parchment fields, a laid-paper texture and gold drop caps. It was a better-looking world and a worse-fitting one: six of the ten pages are filter panels, tables and records, and a display serif over a filter rail was fighting its own content. The three studies the replacement was chosen from are on the orphan `design` branch.

**Key Characteristics:**
- One axis at 42% of the viewport, reused on every page
- One dark ground, one amber accent, four meaning colours for evidence and risk
- IBM Plex Sans for everything read, IBM Plex Mono for measurement and for the labels that name a reading
- Surfaces separated by 1px rules, never by tone steps or shadows
- Square corners everywhere
- Evidence and status written as outlined words, never as a fill
- Density set by what a surface is for, not by one number for the whole site

## Density by surface

One token set across the site, two settings, because a page read end to end and a page worked in are different jobs.

- **Worked surfaces** (entry, codex, archive, compare, stacks, stack) keep the panel density: body at 15.5px, tight padding, hairline rows.
- **Read surfaces** (about, credits, support) take body at 17px, leading 1.6 and a 68ch measure. They opt in by `body[data-page]` at the end of `css/style.css`.

The entry page is the densest surface and the only one with components of its own, in `css/entry-instrument.css`: the key strip of readings that closes its head, the paired rail that sets the structure plate beside the facts, its section labels in mono, and the dosing blocks whose first source carries the accent edge. Nothing in that file is a visual world; it tightens the shared ramp rather than redefining it.

### Named Rules
**The Readings Rule.** The entry key strip prints only values that read as a figure at a glance; the cutoff is 32 characters. Testosterone's half-life names four esters, so it has no half-life cell and the figure stays in the pharmacokinetics table. A strip is suppressed below three readings. No cell is ever truncated and no cell is ever empty.

**The Leading Source Rule.** The first reported-dosing block carries the accent hairline on its left edge and every block after it stays plain, so the primary source is identifiable before a word is read. It is the one coloured edge on the surface, and it is 1px.

**One Authored Moment.** The entry key strip wipes open cell by cell. Everything else settles in opacity without drifting, because a panel of figures that floats upward reads as a slide rather than an instrument.

## Colors

One accent on one dark ground, with four meaning colours kept for evidence, status and risk.

### Primary
- **Amber** (`amber`): the one action colour. Primary buttons, link accents, the active nav item and the selected filter, focus outlines, the live figure, the reader's own scores, and the accent edge on the leading dosing source. It deepens to `light-amber` (#9c5c00) in the light theme, where the lighter value would not reach 4.5:1.

### Secondary
- **Rule** (`rule`): the hairline that divides every surface from the next. It does the work tone steps used to do, and it is always 1px.
- **Plate** (`plate`): the one light material, the ground a structure drawing is multiplied onto. It stays light in both themes, because the PubChem line art is black on transparent and vanishes on a dark field.

### Tertiary
- **Laurel** (`laurel`): human RCT, established, approved.
- **Verdigris** (`verdigris`): human observational, veterinary, compounded.
- **Signal** (`signal`): animal, in vitro, anecdotal, contested; investigational, supplement; editor's notes and warning signs.
- **Alarm** (`alarm`): research only, never approved, high risk, and profile rows where higher is worse. Banned is the one solid stamp.

### Neutral
- **Ground**, **Surface**, **Surface Raised** (`ground`, `surface`, `surface-raised`): the page and its two panel tones. Panels sit on the ground behind a rule; they no longer alternate.
- **Ink** (`ink`): all running text.
- **Soft Ink** (`soft-ink`): secondary notes only. Checked at 6.2:1 on the panel tone and 6.5:1 on the ground.

### Named Rules
**The Full Ink Rule.** Running text is set in the full ink. The soft ink is for notes, captions and secondary labels, never for paragraphs a visitor came to read.

**The Meaning Colour Rule.** Laurel, verdigris, signal and alarm carry evidence, status and risk and nothing else.

**The One Field Rule.** The accent is an edge, a word or a button, never a field. The support surfaces that used to be slabs of gold are panels with an amber border and an amber button; a block of accent the size of a filter rail shouts over the thing the reader came to use.

## Typography

**Display and Body Font:** IBM Plex Sans (with system-ui)
**Measurement Font:** IBM Plex Mono (with ui-monospace)

**Character:** one humanist grotesque for everything read, and its monospace sibling wherever a number is meant to be compared down a column.

### Hierarchy
- **Display** (600, 36–64px, leading 1.04, tracking -0.02em): page titles and the home statement. Two lines at most.
- **Headline** (600, 24–32px): section claims.
- **Lead** (600, 17–19px): side-zone titles and statements.
- **Reading** (400, 17px, leading 1.6): the surfaces read end to end, and entry ledes.
- **Body** (400, 15.5px, leading 1.5): everything else read. Measure 45–75 characters.
- **Label** (mono 500, 13px, tracking 0.03em): the labels that name a reading, including entry section heads.
- **Micro** (mono 500, 12px): evidence and status words, trial metadata.
- **Figure** (mono 500, 19px, tabular): the readings in the entry key strip.
- **Ledger** (600, 64–104px): the single live figure on the home page.
- **Wordmark** (600, tracked 0.2em, capitals): ATLAS in ink, CODEX in amber.

### Named Rules
**The Two Line Rule.** Every heading fits in two lines at every width. Cut words before shrinking type.

**The Measurement Rule.** Mono is the voice of measurement and of the labels that name a reading: amounts, counts, half-lives, dates, filter counts, trial metadata, section labels. Nothing else takes it, and prose never does. Everything numeric is set in tabular lining figures so a column of amounts lines up on the decimal.

This replaced "The No Costume Rule", which forbade monospace outright and belonged to the annual. The line it was defending is still here, one step over: mono for data is the system, mono for atmosphere is the costume. Mono for the section labels is the one place this sits close to the line, and it was chosen with the direction rather than drifted into.

## Layout

Tight side margins (20–48px), the axis at 42vw, and 48–80px between sections. Pages are text spreads: title on the axis, body to its right, labels and notes to its left. Lists are banded: full-width rows divided by a rule, with fixed column starts (status, name and note, structure thumbnail).

The home page runs: the support notice, the statement beside the compass rose, the live figure, browse by field (tabs and bands), the range of the record as one comparison table, the standards paragraph, the support band, and the footer with the wordmark first.

Below 56rem the axis collapses, tabs wrap into rows, bands stack status under name, and side zones move inline.

## Elevation & Depth

Flat. There is no depth: a panel is told apart from the ground by a 1px rule, not by elevation, and the two panel tones are for grouping rather than for lift. Only the two things that truly float carry a shadow: the search dialog and the ask panel (`0 30px 80px rgba(0,0,0,.45)`). The ask button is flat.

## Shapes

Square corners on everything: buttons, bands, tabs, fields, tiles, pictures. The 1px rule is the structural device and appears wherever one surface meets another: between sections, around panels, between list rows, inside tables, and around every control.

## Components

### Buttons
- **Primary:** amber fill, amber-ink text, 48px tall, square, Plex Sans 600. Presses to 97% scale; hover lightens the amber. Only buttons that are actually the accent take that hover, because the quiet variant carries light text.
- **Quiet:** raised-surface fill, full ink text, same shape; hover steps to the panel tone.
- **Text link:** the underline appears on hover; amber where the link is the way forward.

### Bands
The codex's list unit: a full-width row divided from the next by a rule. Status word at the left, name (600) with a one-line note, and a thumbnail of the structure on its light plate at the right on desktop. Hover tints the row with the accent.

### The archive index
The archive is an A to Z index. A row of filled letter blocks jumps to each letter (letters with no records sit faded), and each letter opens its own section under a gold display initial, with ordinary bands beneath. Names that open on a digit or a Greek letter file under #.

### Stacks
The Stacks page is a banded list like the codex: each band leads with the grade of the pair, then the name over its parts joined with +, and its use cases at the right. Each stack has its own page in the entry layout. Its side zone carries the **formula plate**, a light plate where the parts are set as a sum in Plex Sans with an amber + and the pair's grade under a heavier rule. **The parts** section is the ledger: one table row per part (name with status, what it adds, its own grade), any class finding as an italic row, then a heavier rule and the **Together** line with the grade that counts.

### Use-case rows
The codex and the stacks filter by use case with a row of tabs under a small sentence-case label (Use case, Field), the one place a label sits above a control row. Tabs are toggles: several can be pressed at once (any of the picked fields, and any of the picked use cases), a second click releases one, and All or Any clears the row. Every codex and stack band lists its use cases at the right, one per line in soft ink, stepping down to 15px when a band carries more than two (the owner's call, and the one setting below the 17px floor); the ones being filtered on move to the top in full ink with a small gold square.

### Tabs and pickers
Filled blocks, each behind a rule. Selected takes the amber fill with amber-ink text, the same way every other selected control on the site does. Counts sit beside each name in mono tabular figures.

### Evidence and status
Words in sentence case, set in mono at 12px and outlined in a 40% mix of their meaning colour against the ground: "Human RCT", "Research only". Square, no fill. Banned is the one exception and keeps a solid fill, because it is a warning rather than a reading.

### Support surfaces
Visitors are steered toward the affiliate source and the Support page on every page, always with the commission disclosure beside the link and never as a recommendation of a compound:
- **Notice strip** under the header: "use code ATLAS at Half Nattys", with a shop link.
- **Support me** is the gold primary button in the header; Search is quiet beside it.
- **Support band** (bordered panel) on the home page: "Keep the codex free.", the source's logo, an amber Shop button, Copy code, and the disclosure.
- **Buy from** on each entry: a product button when `js/buy.js` has a listing, otherwise an amber-bordered "Support the codex at Half Nattys" link with the code.
- **Support sheet**, a compact amber-bordered panel near the end of every entry.
- **Support bar**, a slim amber bar that rises after the first screen on every page except Support, naming the compound when the source lists it. It can be dismissed for the browser session, and the Ask button lifts above it.
- **Side card** under the filters on Codex and Archive, and one labelled **Affiliate row** in the codex list, shown only when the list isn't split into fields, so it never sits inside a field.
- **Search** results end with a shop row.
- **Listed compounds** (the source's own popular list) get a direct "Shop {compound}" button. Banned compounds never get a compound-specific shop prompt.

### Entry spreads
Each section is a spread: its title and a one-line note in the side zone (sticky on desktop), the content on the axis in panels of `surface`, each behind a rule. Tables carry the data, the activity list pairs with a sticky detail panel, and trials are sheets with an amber editor's note.

Compound entries run in one order, so the record comes before the numbers drawn from it: profile, risk, interactions, monitoring, human clinical record, anecdotal reports, reader reports, dosing, pharmacokinetics, mechanism, references, then stacks, related, support and the record. Interactions and monitoring always appear. When an entry has nothing for them, they show the same honest "none recorded" sheet the dosing panel uses. The head's side zone ends with **On this page**, a plain list of the sections on desktop and a wrap of filled blocks on phones.

- **Anecdotes:** two sections after the clinical record, banded like the risk grid. The left column names the kind (Effect, Side effect, No effect noticed) over how often it is reported (three small squares in soft ink) or, for a reader, the month it was sent. The reported words are set in quotation marks, because they are someone else's voice, followed by the Anecdotal grade, the source, and the record's answer on a tint step (amber when the record points the other way, and for an editor's note). Reader reports also carry an Unverified tag and link their issue number. The reader section ends with an amber-bordered panel and a Send a report button that opens a prefilled public issue. Neither section ever carries a dose.
- **Risk key:** a soft-ink line above each risk grid names the two columns: the risk and how serious it is, then what the record shows and how strong the evidence is.
- **Thin human record:** a profile risk row scored 2 or lower, on a compound with no randomized human trial and little other human data, drops its colour: hatched squares in soft ink and the label "Thin human record". Green never stands for "little is known".
- **The record:** the dates, a citation in full ink, then Print or save as PDF, Copy citation and Report an error in this entry. A print stylesheet drops the header, support surfaces and side tools, opens every risk detail and sets the entry in black on white.

### Status where it applies
An "Approved" tag names where, on a second line in the same tint, when the approval is outside the US or only as a cosmetic ("China", "Outside the US", "As a cosmetic"). The places come from each entry's own text, in `site.approvedWhere`.

### Stacks that cost
On the stacks list, a stack filed under "Where the record pushes back" carries a crimson "Cost found" line under its grade, so a strong grade there reads as strong evidence of a cost.

### Ask the archive
A flat square with an open-book mark, never a sparkle, because it is a keyword search and not an AI model. On desktop it sits in the right page margin, clear of the content column, and its name slides out to the left on hover or focus. On phones it is the same square at the screen edge, above the support bar.

### Access
A skip link is the first stop on every page. Where the pointer is a finger, every control and every link outside running text is at least 44px tall. On phones the codex's two tab rows fold behind one "Use case and field" line that counts the picks.

### The live figure
On the home page, one number owns a surface band: the share of compounds with a randomized human trial, recounted from the entry data for whichever field the visitor picks. The claim above it rewrites itself to stay true.

## Do's and Don'ts

### Do:
- **Do** start every heading on the axis and hang the content from it.
- **Do** separate surfaces with a 1px rule.
- **Do** set every paragraph in the full ink, at 15.5px on a worked surface and 17px on one that is read end to end.
- **Do** keep the commission disclosure next to every affiliate link and code.
- **Do** give every entrance a reduced-motion fallback that keeps the content visible.

### Don't:
- **Don't** use mono for prose, eyebrow labels, tracked micro capitals, index numbers, gradients, glows or resting shadows.
- **Don't** round a corner.
- **Don't** use the meaning colours for decoration, and don't let the accent become a field.
- **Don't** let a heading run to three lines.
- **Don't** add decorative pictures; the brand marks carry the atmosphere.
- **Don't** word any support surface as a recommendation of a compound or product.
