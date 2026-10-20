/*
 * Atlas Codex: anecdotal evidence. Two lists, kept apart on purpose.
 *
 * A.anecdotes — what people report, collected by the editor from forums, creators and threads.
 * A.readerReports — what readers sent in through the issue tracker, read before it goes up.
 * Both always show on a compound entry, straight after the human clinical record, with an honest
 * empty sheet when a compound has none. Nothing here is invented: no sample, filler or composite report.
 *
 * SCOPE — what people noticed, never how much they took. No doses, units, schedules, vendors or
 * product names: dosing comes only from labels and published trials (js/dosing.js), and
 * tools/check.js fails on a number followed by a dose unit. Paraphrase unless verbatim is set.
 *
 * Editor's anecdote:
 *   { kind, text, often, source: { name, href, year }, verbatim, record, recordNote, refs, added }
 *   kind:   "effect" (something it seemed to do) | "side" (a side effect) | "none" (no effect noticed)
 *   often:  "often" (many independent reports) | "some" (a handful) | "single" (one report)
 *   record: "agrees" | "silent" | "disagrees" — how the report sits against the published record.
 *           recordNote says why, in one or two sentences, with refs where the record has them.
 *
 * Reader report:
 *   { kind, text, weeks, with, stopped, sent, issue, note }
 *   weeks:   how long they had been using it when they noticed, as a number of weeks (optional)
 *   with:    other compounds taken at the same time, as entry slugs or plain names (optional)
 *   stopped: what happened when they stopped, in their words (optional)
 *   sent:    YYYY-MM-DD the issue was opened. issue: its number on the tracker, shown as the source.
 *   note:    an editor's note, when the record speaks to the report (optional)
 */
(function (A) {
  A.anecdotes = {
  };

  A.readerReports = {
  };
})(window.ATLAS);
