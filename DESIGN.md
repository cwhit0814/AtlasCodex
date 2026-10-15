---
name: Atlas Codex
description: An open reference library of peptides and research compounds, set in ink, parchment and antique gold.
colors:
  ink: "#17181d"
  ink-raised: "#1c1e24"
  folio: "#1b1d23"
  folio-raised: "#23252c"
  hairline: "#2c2e36"
  rule: "#3b3d47"
  parchment: "#eee8d2"
  faded-ink: "#a69d88"
  marginalia: "#968e7c"
  lamp-gold: "#c89a5b"
  brass: "#b8874f"
  gilt-wash: "#272016"
  oxblood: "#cf7a6b"
  oxblood-line: "#6b382f"
  amber-caution: "#d7a24e"
  amber-wash: "#2b2213"
  laurel: "#86a877"
  laurel-wash: "#1b2419"
  verdigris: "#6fa89a"
  aged-paper: "#f3eee1"
  aged-paper-raised: "#fbf8ef"
  paper-folio: "#fcfaf3"
  paper-folio-raised: "#ece5d5"
  paper-hairline: "#ddd4bf"
  paper-rule: "#c7bba1"
  press-ink: "#1d1f25"
  paper-muted: "#5d5747"
  paper-dim: "#6a6355"
  burnished-gold: "#80591d"
  paper-oxblood: "#9b3127"
  paper-laurel: "#4a6b32"
  paper-verdigris: "#2f6b5c"
typography:
  display:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(2.8rem, 9vw, 6.2rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: ".015em"
  headline:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(2.2rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: ".005em"
  title:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.15
  wordmark:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.18rem"
    fontWeight: 600
    letterSpacing: ".2em"
  prose:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: ".72rem"
    fontWeight: 500
    letterSpacing: ".24em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: ".6875rem"
    fontWeight: 600
    letterSpacing: ".08em"
rounded:
  hairline: "2px"
  stamp: "3px"
  panel: "6px"
  field: "8px"
  banner: "10px"
  card: "12px"
  overlay: "14px"
  pill: "99px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  section: "56px"
  container: "1170px"
components:
  button-primary:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.parchment}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  button-gilt:
    backgroundColor: "{colors.lamp-gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px"
  chip:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  chip-selected:
    backgroundColor: "{colors.gilt-wash}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  input-field:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
  panel:
    backgroundColor: "{colors.folio}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.panel}"
  status-stamp:
    typography: "{typography.data}"
    rounded: "{rounded.stamp}"
    padding: "3px 8px"
  evidence-badge:
    typography: "{typography.data}"
    rounded: "{rounded.hairline}"
    padding: "4px 8px"
---

# Design System: Atlas Codex

## Overview

**Creative North Star: "The Alexandrian Reading Room"**

Atlas Codex is a reading room at night. The lamp is low, the folios are open, and the authority comes from what is written rather than how loudly it is said. The palette comes straight from the brand mark (ink, parchment and antique gold), and the material language is Victorian scientific engraving: laid paper, hairline rules, captions and plates. Dark is the native state. The light theme is aged paper, never white.

The system is restrained and archival. Panels are tonal leaves with hairline edges, not floating cards. Gold is lamplight: it lands only where something means something, such as a running head, a selected item, a drop cap, the reader's own scores, or an action. Density is high where readers compare (risk grids, PK tables, trial meta) and loose where they read (ledes, guide prose). Four typefaces each have one job, so dense data never has to compete with the serif voice.

Ornament follows engraved-plate convention and is never decoration for its own sake. Section labels run a hairline out to the margin like a running head. A compass motif marks a true break. Entry ledes open with one gold drop cap. The home page carries line art (compass rose, armillary sphere, graticule) at low opacity, and it is hidden below 900px.

**Key Characteristics:**
- Ink-dark ground with a laid-paper texture (a fine 5px hatch plus chain lines every 68px), fixed to the viewport
- Gold used sparingly, as signal and never as fill
- Cormorant Garamond for display, EB Garamond for prose, Inter for interface and JetBrains Mono for data and labels
- Flat tonal panels with hairline borders; shadows only on things that float above the page
- Evidence and status shown with a disciplined color code (laurel, verdigris, amber, oxblood)
- Every color is a token on `:root` in `css/style.css`, so a theme is one block

## Colors

An ink-and-parchment library palette with one warm metal and a small set of semantic hues for evidence and risk.

### Primary
- **Lamp Gold** (`lamp-gold`): the accent. Used for links, running-head labels, selected-state borders, drop caps, focus outlines, the wordmark's CODEX half and the reader's own meter. On light paper it becomes **Burnished Gold** (`burnished-gold`) so it keeps its contrast.
- **Brass** (`brass`): the deeper gold from the brand mark. Used on secondary accent edges such as the ask button's border.
- **Gilt Wash** (`gilt-wash`): a near-black gold tint. It is the ground for selected chips, the ticker, the rate bar, targeted references and gilt CTA cards.

### Secondary (semantic: evidence, status and risk)
- **Laurel** (`laurel`, on `laurel-wash`): strong evidence (human RCT, established) and approved status. Also marks low risk.
- **Verdigris** (`verdigris`): human observational evidence, veterinary and compounded status.
- **Amber Caution** (`amber-caution`, on `amber-wash`): weaker evidence (animal, in vitro, anecdotal, contested), investigational and supplement status, editor's notes, moderate risk and the monitoring "watch" markers.
- **Oxblood** (`oxblood`, edged with `oxblood-line`): research-only and never-approved status, high risk, profile rows where higher is worse, and the outline of the risk grid. Banned status is the only solid fill: oxblood behind ink.

### Neutral
- **Ink** (`ink`): the page ground, and the ink on primary buttons.
- **Ink Raised** (`ink-raised`): inputs, chips and the search pill.
- **Folio** / **Folio Raised** (`folio`, `folio-raised`): panel surfaces, and their hover and selected rows.
- **Hairline** (`hairline`): row dividers inside panels.
- **Rule** (`rule`): panel borders, input strokes and empty meter cells.
- **Parchment** (`parchment`): primary text, and the fill of primary buttons.
- **Faded Ink** (`faded-ink`): secondary text, subtitles and detail prose.
- **Marginalia** (`marginalia`): tertiary text, timestamps, ref lines and keyboard hints.
- **Light theme:** `aged-paper` (ground), `aged-paper-raised`, `paper-folio`, `paper-folio-raised`, `paper-hairline`, `paper-rule`, `press-ink` (text), `paper-muted`, `paper-dim`, `paper-oxblood`, `paper-laurel` and `paper-verdigris` map one to one onto the dark roles.

### Named Rules
**The Lamplight Rule.** Gold marks meaning: something selected, a heading, an action, the reader's own input. It is never a background fill bigger than a button. Large surfaces take gold only as a wash.

**The Evidence Code Rule.** Laurel, verdigris, amber and oxblood carry evidence and risk meaning and nothing else. Never use them for decoration, branding or category color.

**The Aged Paper Rule.** The light theme is parchment (`aged-paper`), never `#fff`. PubChem structure plates sit on aged paper with `mix-blend-mode: multiply` in both themes.

## Typography

**Display Font:** Cormorant Garamond (falling back to EB Garamond, Georgia)
**Prose Font:** EB Garamond (falling back to Georgia, Times New Roman)
**Interface Font:** Inter (falling back to system-ui)
**Label/Data Font:** JetBrains Mono (falling back to ui-monospace)

**Character:** a high-contrast engraver's display serif over a bookish text serif, with a neutral sans and a tracked monospace handling the index-card work. The serifs speak. The sans and mono record.

### Hierarchy
- **Display** (600, `clamp(2.8rem, 9vw, 6.2rem)`, 1): the home hero title only. It carries the lamp glow `text-shadow`.
- **Headline** (600, `clamp(2.2rem, 5vw, 3rem)`, 1.15): page and entry titles. On the support page it rises to `clamp(2.6rem, 6vw, 3.8rem)`.
- **Title** (600, 1.4–1.45rem): card names (creators, sources).
- **Wordmark** (600, 1.18rem, tracked .2em, uppercase): ATLAS in parchment, CODEX in gold.
- **Prose** (400, 1.02–1.05rem, 1.6–1.7): entry ledes, risk and activity detail, trial notes, references, about and guide copy. Keep measure near 70ch (`.about` caps at 760px).
- **Body** (400, 15px, 1.6): interface copy, rows, summaries and trial bodies.
- **Label** (500, .72rem, tracked .24em, uppercase, gold at .82 opacity): section running heads.
- **Data** (500–600, .6875–.72rem (11px floor), tracked .04–.1em, uppercase): status stamps, evidence badges, trial meta, PK terms, ref lines and nav links.

### Named Rules
**The Four Hands Rule.** Each face has one job. Display serif for titles, text serif for anything read as an argument, sans for interface, mono for labels and data. Don't set prose in Inter or titles in mono.

**The Running Head Rule.** Section labels are tracked uppercase mono followed by a gold hairline that fades out to the margin (`h2.label::after`). This is the only section-heading form.

## Layout

The container is 1170px, centered, with 16px gutters that grow to 32px from 720px up. The header is sticky at 70px. It wraps below 960px, with the nav dropping to its own full-width row and secondary pill buttons hidden. Sections open with a 56px top margin, and running-head labels sit 36px above their panels. Panel internals use 14–18px padding on a 16px base.

Data layouts are grids that collapse cleanly:
- Codex rows run 4 columns (`minmax(160px,1.2fr) 2fr 120px 120px`) and drop to 2 below 760px.
- The risk grid is 2-up and drops to 1 below 760px.
- Activity is a list plus a sticky detail panel (sticky at `top: 90px`) and stacks below 860px.
- The PK grid is a term/definition table and stacks below 600px.
- The archive runs 4 columns and drops to 2 below 640px.

Card collections use `auto-fill` grids (sources `minmax(260px,1fr)`, creators `minmax(330px,1fr)`). Home CTAs are 3-up and drop to 1 below 900px. Floating UI (the ask FAB and panel) anchors 28px from the bottom-right corner, 16px on phones.

## Elevation & Depth

Flat by default. Depth comes from tonal layering: ink, then folio, then folio-raised, with hairline and rule borders separating leaves. The laid-paper texture gives the ground a physical grain that flat panels sit on. Shadows are reserved for elements that genuinely float above the page (dropdown menus, the search overlay and the ask panel), plus the gold lamp glow on the hero title and on hover for gilt actions.

### Shadow Vocabulary
- **Menu lift** (`box-shadow: 0 20px 50px rgba(0,0,0,.35)`): nav dropdowns.
- **Overlay lift** (`box-shadow: 0 30px 80px rgba(0,0,0,.5)`): the search panel and ask panel. Paired with a 60% black scrim and a 3px blur.
- **Lamp glow** (`--glow`: `0 0 22px rgba(238,232,210,.28), 0 0 60px rgba(200,154,91,.14)`, lighter on paper): hero title text only.
- **Gilt hover** (`0 0 18px color-mix(in srgb, var(--accent) 35%, transparent)`): hover on gold-filled actions.

### Named Rules
**The Flat Folio Rule.** Panels and cards rest flat. Shadows belong only to things that float (menus, overlays, the FAB). Hover changes border color, tone or brightness, not elevation.

**The Lifted Float Rule.** Floating controls (the ask FAB) take a real offset shadow (`0 10px 28px rgba(0,0,0,.35)`), and gold glow is added only on hover. Violet glows from the previous identity were removed; never reintroduce them.

## Shapes

Corners scale with the role of the object. Stamps and plates are nearly square: evidence badges, editor's notes and the structure plate use 2px, and status stamps use 3px. Reading surfaces are softly squared: panels, the risk grid, CTAs and the disclaimer use 6px. Fields use 8px, the ticker and buy buttons 10px, and cards and menus 12px, with overlays at 14px. Everything a finger presses or a filter toggles is a full pill (99px): nav pills, chips, the search pill, shop and creator links, and code chips. Borders are 1px throughout. The only heavier strokes are a 3px gold left edge on the ticker, a 2px left rule on the entry intro, and a 2px gold left edge on the selected activity item. Dashed 1px borders mean "secondary or empty": profile "mine" rows, risk detail, the disclaimer and the "No current stock" state. Meter cells are hard-edged squares (11px).

## Components

Restrained and archival: hairline-edged leaves and tracked labels, with gold held back for meaning.

### Buttons
- **Shape:** full pill (99px).
- **Primary** (`button-primary`): a parchment fill with ink text, Inter 600 at .82rem tracked .06em, padded 9px 18px. Header "Support me".
- **Secondary** (`button-secondary`): transparent with a 1px rule border and parchment text. Hover turns the border gold.
- **Gilt** (`button-gilt`): a gold fill with ink text. Only for the shop action on a source card. Hover adds brightness 1.12 and the gilt glow.
- **Rate button:** a squared variant (4px) in gold with mono text, inside the profile's rate bar.
- **Focus:** a 2px gold outline at a 2px offset, on every interactive element.

### Chips
- **Style** (`chip`): an ink-raised pill with a 1px rule border, Inter at 1rem, and an optional mono count in marginalia.
- **Selected** (`chip-selected`, `aria-pressed="true"`): a gold border on a gilt-wash ground. Hover on any chip turns the border gold.
- **Code chip:** a gold mono pill on gilt wash for the referral code, which copies on click.

### Status stamps & evidence badges
The signature data marks. Uppercase mono at .6–.64rem with 1px borders tinted from the semantic hue (45–50% mix) on its wash. Status stamps use 3px corners. Evidence badges use 2px and read like a plate caption. Banned is the only solid stamp. Unknown evidence is marginalia text on a rule border, with no fill.

### Cards / Containers
- **Panel:** folio ground, 1px rule border, 6px corners, flat. Rows inside are separated by hairlines and hover to folio-raised.
- **Source and creator cards:** folio ground with 12px corners and 20–22px padding. Creator cards carry a 3px gradient top edge in the creator's own accent pair and turn that hue on hover.
- **Risk grid:** a panel outlined in oxblood-line, with a 2-up cell grid and an 8px square level marker (laurel, amber, oxblood or marginalia) before each system label.
- **Editor's note:** an amber 55% border on amber wash with amber text and 2px corners.

### Inputs / Fields
- **Style:** an ink-raised ground with a 1px rule stroke, 8px corners and 10px 14px padding. The hero search is the exception: a 12px radius, a 55% gold stroke, 1.25rem text and an inset search glyph.
- **Search pill:** a 300px pill (200px below 1180px, icon only below 960px) showing the ⌘K kbd hint. Hover turns the border gold.
- **Focus:** a 2px gold outline at a 2px offset.

### Navigation
A sticky header on ink at 90% with a 10px backdrop blur and a hairline bottom border. Nav links are mono at .85rem tracked .14em in parchment, turning gold on hover and when active. Dropdown menus are 12px folio leaves with menu lift; items have 8px corners and hover to folio-raised. Below 960px the nav wraps to its own row. Below 480px the wordmark and links shrink.

### Profile meter
Five hard-edged 11px squares. Filled cells are parchment, or oxblood on rows where higher is worse. The reader's own meter is outlined gold and fills gold, sitting under a dashed divider, with cells that grow to 15px while editing.

### Ornament
A running-head hairline on every section `h2.label`, a centered compass rose (a 17px stroked star in a circle) between 190px fading hairlines for true breaks, and a gold Cormorant drop cap (3.3em, 2.9em on phones) on the first paragraph of an entry intro.

## Do's and Don'ts

### Do:
- **Do** take every color from a `:root` token in `css/style.css` and define its light-theme counterpart in the same change.
- **Do** keep gold to meaning: labels, selection, focus, actions and the reader's own input (The Lamplight Rule).
- **Do** show evidence grade and status with the existing stamps and badges, at the point of the claim.
- **Do** set argued prose (ledes, detail, notes, guides) in EB Garamond and data in tracked uppercase JetBrains Mono.
- **Do** separate leaves with hairlines and tone. Panels stay flat (The Flat Folio Rule).
- **Do** keep a 2px gold focus outline at a 2px offset on every interactive element.
- **Do** respect `prefers-reduced-motion`. The ticker already stops under it.

### Don't:
- **Don't** use violet or indigo anywhere. That palette belongs to the retired identity.
- **Don't** use `#fff` or pure white surfaces. The light theme is aged paper.
- **Don't** use laurel, verdigris, amber or oxblood for anything other than evidence, status or risk.
- **Don't** add drop shadows to resting panels or cards.
- **Don't** add new ornament forms. Use the running head, compass break and drop cap, and keep the home line art below 0.55 opacity and hidden under 900px.
- **Don't** let the gilt "Buy from" or shop treatments outweigh the evidence panels on a compound page. Commerce stays secondary to the record.
