# Atlas Codex — design record

This branch holds design material that is deliberately **not** part of the site.

The site is served statically from the default branch with `.nojekyll`, which means every file on
that branch is reachable by URL. Design studies are not pages, and two of the three below show a
compound record in a visual world the site does not use, with a consult button that goes nowhere.
Keeping them here means they stay in version control without being served.

This branch shares no history with the site; it is an orphan branch, and nothing here is ever merged
into it.

## Contents

- [`entry-alternatives/`](entry-alternatives/) — the three directions the compound entry page was
  chosen from. Open `entry-alternatives/index.html`. Its README says which one was built, how the
  shipped page differs from its comp, and what in them is deliberately unfinished.

## Working with it

```
git fetch origin design
git worktree add ../atlas-design design      # a checkout beside the repo, leaving yours untouched
```

Or open the files straight from GitHub. To add to the record, commit on this branch; do not add
design studies to the default branch, where they would be published.
