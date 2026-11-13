/*
 * Atlas Codex: reported dosing. What people say they take, kept apart from js/dosing.js, which holds
 * only what a regulator label or a published trial established.
 *
 * GENERATED FILE. Do not edit by hand: edit tools/dosing/gen.js and run `node tools/dosing/gen.js`.
 * tools/dosing/README.md says where the figures come from and how to rebuild them.
 *
 * Keyed by entry slug, each one a list of blocks, one block per source, so two sources that disagree
 * are both on the page rather than one overwriting the other.
 *   { source: { name, href, year }, confidence, rows: [[context, amount]], note }
 *   confidence: "wide" many independent reports agree | "some" a handful of consistent reports
 *             | "thin" one source, or reports that disagree | "none" no human use on record
 *
 * A block is a record of practice, never a recommendation. tools/check.js refuses a block whose numbers
 * arrive without a grade and a named source, and refuses rows under confidence "none".
 *
 * The tier words (Low, Average, Medium, High) are the source's own, not the codex's: they describe where
 * an amount sits among people running it, and say nothing about whether it is safe or whether it works.
 */
(function (A) {
  const TAT = { name: "Tanner Tattered, FAQ", href: "https://docs.google.com/document/d/12Lw3X20BPpSpd4iEiEad2FR-NF6r4GMs_Srw7zj1W4M/", year: "2026" };
  const MPA = { name: "Maximum Pharma Archive", href: "https://maxpharma.wiki/stacks", year: "2026" };

  const REPORTED = {
  "1-3-dmaa": [{ source: TAT, confidence: "thin",
    rows: [["Low", "12.5mg of DMAA and 5mg of Sildenafil/Tadalafil"], ["Average", "25mg of DMAA and 10mg of Sildenafil/Tadalafil"], ["High", "50mg of DMAA and 20mg of Sildenafil/Tadalafil"], ["Route and timing", "Take with water"]] }],
  "5-amino-1mq": [{ source: TAT, confidence: "some",
    rows: [["Low", "100mcg/day"], ["Medium", "250mcg/day"], ["High", "500+mcg/day"], ["Route and timing", "Take with water"]],
    note: "There is no human data of any kind for this compound. The figures here are for the injectable form." }],
  "9-me-bc": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5mg/day or 10mg every other day"], ["Medium", "10-20mg/day"], ["High", "30mg/day or more"], ["Route and timing", "Take orally with water"]] }],
  "ace-031": [{ source: TAT, confidence: "thin",
    rows: [["Low", "50mcg/day"], ["Medium", "100mcg/day"], ["High", "200mcg/day or more"]] }],
  "adamax": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100mcg/day"], ["Medium", "250mcg/day"], ["High", "500+mcg/day"]] }],
  "ahk-cu": [{ source: TAT, confidence: "thin",
    rows: [["Low", "2.5mg/day"], ["Medium", "5mg/day"], ["High", "7.5-10mg/day"]] }],
  "aicar": [{ source: TAT, confidence: "thin",
    rows: [["Low", "20mg/day or less"], ["Medium", "25mg/day"], ["High", "100mg/day or more"]],
    note: "No human trial has given AICAR. Oral absorption is poor, which is why the reported route is injection." }],
  "ara-290": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.25-0.5mg/day (250-500mcg/day)"], ["Medium", "1mg/day"], ["High", "2-5mg/day"]] }],
  "atx-304": [{ source: TAT, confidence: "some",
    rows: [["Low", "100mg every other day"], ["Average", "100mg/day"], ["High", "200mg/day or more"], ["Route and timing", "Take orally/sublingually with water upon waking"]],
    note: "The only human study gave it for 28 days in type 2 diabetes. Nothing is known past that, and the source notes it may increase cardiac hypertrophy." }],
  "bronchogen": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.5mg/day"], ["Medium", "1mg/day"], ["High", "2mg/day or more"]] }],
  "cagrilintide": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.1mg/day | ~1mg/wk"], ["Medium", "0.25mg/day | ~2mg/wk"], ["High", "0.5-1mg/day or more | 3.5-7mg/wk or more"], ["Route and timing", "Use Ondansetron (Zofran) to eliminate the nausea"]] }],
  "cjc-1295": [{ source: TAT, confidence: "thin",
    rows: [["Low", "150mcg/day"], ["Medium", "250mcg/day"], ["High", "500mcg/day"], ["Route and timing", "Use SGLT-2 or DPP-4 inhibitors if necessary beyond this"]] }],
  "clenbuterol": [{ source: TAT, confidence: "some",
    rows: [["Low", "10-20mcg/day, probably won’t even feel the clen shakes"], ["Average", "30-40mcg/day, should definitely feel clen"], ["High", "50+mcg/day, far too aggressive for most non-competitors"]],
    note: "The controlled human trials gave 40 µg daily for two to four weeks and measured glucose uptake, not fat loss. The half-life is one to two days, so a daily dose keeps accumulating for several days before it levels off." }],
  "dapoxetine": [{ source: TAT, confidence: "thin",
    rows: [["Low", "10mg"], ["Average", "20mg"], ["High", "40mg or more"], ["Route and timing", "Administer 15-30 min or less before sexual activity"]] }],
  "dihexa": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5mg/day"], ["Average", "10-15mg/day"], ["High", "15-50mg/day"], ["Route and timing", "Take orally/sublingually with water"]] }],
  "ecdysterone": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.5ml/day (0.25 in each administration)"], ["Medium", "1ml/day (0.5 in each administration)"], ["High", "1.5+ml/day (0.75+ in each administration)"], ["Route and timing", "Inject every training day for 16-20 weeks"]] }],
  "emoxypine": [{ source: TAT, confidence: "thin",
    rows: [["Low", "50-125mg as desired"], ["Average", "125mg/day"], ["High", "250mg/day or more"], ["Route and timing", "Take with water"]] }],
  "ezetimibe": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5 mg/day"], ["Average", "10 mg/day"], ["High", "20 mg/day"]] }],
  "finasteride": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.25mg/day"], ["Average", "0.5 - 1mg/day"], ["High", "1.5+mg/day"]],
    note: "Persistent sexual and mood side effects after stopping are reported by a minority of users and remain contested in the literature." }],
  "fladrafinil": [{ source: TAT, confidence: "thin",
    rows: [["Low", "50mg per session"], ["Average", "100mg per session"], ["High", "150mg per session"], ["Route and timing", "Administer sublingually"]] }],
  "foxo4-dri": [{ source: TAT, confidence: "thin",
    rows: [["Low", "250-750mcg/day"], ["Average", "750-1500mcg/day"], ["High", "1500-5000mcg/day"]] }],
  "ghk-cu": [{ source: TAT, confidence: "thin",
    rows: [["Low", "2.5mg/day"], ["Medium", "5mg/day"], ["High", "7.5-10mg/day"], ["Route and timing", "Apply to areas where effects are desired 1-2x per day"]] }],
  "ghrp-2": [{ source: TAT, confidence: "thin",
    rows: [["Low", "125mcg"], ["Medium", "250mcg"], ["High", "500mcg"]] }],
  "ghrp-6": [{ source: TAT, confidence: "thin",
    rows: [["Low", "125mcg"], ["Medium", "250mcg"], ["High", "500mcg"], ["Route and timing", "Use peptiwiki's peptide calculatorto find out how much you need to fill the syringe to get your desired dose"]] }],
  "hexarelin": [{ source: TAT, confidence: "thin",
    rows: [["Low", "150mcg/day"], ["Average", "250mcg/day"], ["High", "500mcg/day"]] }],
  "hgh-frag-176-191": [{ source: TAT, confidence: "thin",
    rows: [["Low", "125mcg/day"], ["Medium", "250mcg/day"], ["High", "500+mcg/day"], ["Route and timing", "Inject your HGH FRAG before any activity (fasted cardio, lifting) for best results"]] }],
  "hmg": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100IU per week or 37.5IU per day (half a vial per day)"], ["Medium", "75IU per day (one full vial per day)"], ["High", "150IU per day (two full vials per day)"]] }],
  "humanin": [{ source: TAT, confidence: "thin",
    rows: [["Low", "250-1000mcg per day"], ["Average", "2500-5000mcg per day"], ["High", "5000mcg (or more) per day"]] }],
  "igf-1-des": [{ source: TAT, confidence: "thin",
    rows: [["Average", "100-200mcg pre workout and/or intra workout"], ["High", "300-500mcg pre workout and/or intra workout"]] }],
  "igf-1-lr3": [{ source: TAT, confidence: "thin",
    rows: [["Average", "100-200mcg per day"], ["High", "300-500mcg per day"]] }],
  "l-carnitine": [{ source: TAT, confidence: "thin",
    rows: [["Low", "250mg per day"], ["Average", "500-1000mg per day"], ["High", "1500+mg per day"]],
    note: "The meta-analysis of 37 trials calls the fat-loss effect modest and finds it shrinks the longer people take it." }],
  "ll-37": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100-250mcg per day"], ["Average", "250-500mcg per day"], ["High", "500-1000mcg (or more) per day"]] }],
  "mazdutide": [{ source: TAT, confidence: "thin",
    rows: [["Low", "2mg per week or 285mcg per day"], ["Average", "4-6mg per week or 570-860mcg per day"], ["High", "9mg per week or 1.3mg per day"], ["Route and timing", "Use Ondansetron (Zofran) to eliminate the nausea"]] }],
  "melanotan-1": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100mcg/day"], ["Medium", "250mcg/day"], ["High", "500+mcg/day"], ["Route and timing", "Use your dose once per week instead of once daily, and reduce it as desired"]] }],
  "metformin": [{ source: TAT, confidence: "thin",
    rows: [["Low", "1mg per 1g of carbs consumed per day"], ["Average", "500mg/day"], ["High", "1000 to 2000mg/day"]],
    note: "The FAQ's low tier is given as a rule tied to carbohydrate intake rather than a fixed amount, which is not how the label doses it." }],
  "methylene-blue": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5-10mg/day"], ["Average", "10-20mg/day"], ["High", "20mg-30mg/day"]],
    note: "Serotonin syndrome is the interaction to know: methylene blue is a monoamine oxidase inhibitor and should not be combined with serotonergic drugs." }],
  "mgf": [{ source: TAT, confidence: "thin",
    rows: [["Average", "100-200mcg per day"], ["High", "300-500mcg per day"]] }],
  "mots-c": [{ source: TAT, confidence: "some",
    rows: [["Low", "500mcg/day"], ["Medium", "750mcg/day"], ["High", "1000-2000mcg/day"]],
    note: "No human has been given MOTS-c in a published trial. This figure and the Maximum Pharma Archive's differ several-fold." }],
  "nad-plus": [{ source: TAT, confidence: "thin",
    rows: [["Low", "50mg/week"], ["Medium", "125mg/week"], ["High", "250-500mg/week or more"]] }],
  "naltrexone": [{ source: TAT, confidence: "thin",
    rows: [["Medium", "1 pill"], ["High", "2 pills"], ["Route and timing", "Take dose with water"]] }],
  "nebivolol": [{ source: TAT, confidence: "thin",
    rows: [["Low", "2.5mg daily"], ["Average", "5mg daily"], ["High", "10mg daily"]] }],
  "nefiracetam": [{ source: TAT, confidence: "thin",
    rows: [["Low", "10-20mg on-demand (whenever cognition is desired)"], ["Average", "10-20mg/day"], ["High", "30-50mg/day or more"], ["Route and timing", "Take orally with water"]] }],
  "nsi-189": [{ source: TAT, confidence: "thin",
    rows: [["Low", "20mg/day"], ["Average", "40mg every other day"], ["High", "40mg/day"], ["Route and timing", "Take orally/sublingually with water upon waking"]] }],
  "ondansetron": [{ source: TAT, confidence: "thin",
    rows: [["Average", "1 pill"], ["High", "2 pills"]] }],
  "orforglipron": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5mg/day"], ["Average", "10-30mg/day"], ["High", "40-50mg/day"], ["Route and timing", "Take with water"]] }],
  "ostarine": [{ source: TAT, confidence: "thin",
    rows: [["Low", "12.5mg/day or 25mg every other day"], ["Average", "25mg/day"], ["High", "50+mg/day"], ["Route and timing", "Administer desired dose orally"]],
    note: "A SARM with no approved human indication. Trials found it raises lean mass and suppresses testosterone; liver injury has been reported with products sold online." }],
  "oxiracetam": [{ source: TAT, confidence: "thin",
    rows: [["Low", "500mg on-demand (whenever cognition is desired)"], ["Average", "500-1000mg/day"], ["High", "1500mg/day or more"], ["Route and timing", "Take with water before cognitively-demanding tasks"]] }],
  "pe-22-28": [{ source: TAT, confidence: "thin",
    rows: [["Low", "150mcg/day"], ["Average", "500mcg/day"], ["High", "1000mcg/day or more"]] }],
  "phenibut": [{ source: TAT, confidence: "thin",
    rows: [["Low", "300mg-1000mg (0.3g-1g)"], ["Average", "1000mg-2000mg (1g-2g)"], ["High", "2000-5000mg (2g-5g)"]],
    note: "Tolerance builds quickly and withdrawal after regular use can be severe. The upper figures here are well into the range where that happens." }],
  "phenylpiracetam": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100mg on-demand (whenever cognition is desired)"], ["Average", "100mg/day"], ["High", "200-300mg/day or more"], ["Route and timing", "Take orally with water"]] }],
  "picamilon": [{ source: TAT, confidence: "thin",
    rows: [["Low", "50mg as desired"], ["Average", "50mg/day"], ["High", "100mg/day or more"], ["Route and timing", "Take with water"]] }],
  "pinealon": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.5mg/day"], ["Medium", "1mg/day"], ["High", "2mg/day or more"]] }],
  "pramipexole": [{ source: TAT, confidence: "thin",
    rows: [["Low", "125mcg as symptoms persist"], ["Average", "250mcg as symptoms persist"], ["High", "750-1000mcg as symptoms persist"], ["Route and timing", "Administer orally"]] }],
  "propranolol": [{ source: TAT, confidence: "thin",
    rows: [["Low", "10-20mg daily upon waking"], ["Average", "40-80mg daily, divided across 2 doses per day (AM/PM)"], ["High", "120mg\\+ daily, divided across 3 doses per day (AM/noon/PM)"]] }],
  "proviron": [{ source: TAT, confidence: "thin",
    rows: [["Low", "25-50mg daily"], ["Average", "75-100mg daily"], ["High", "125-200mg daily"], ["Route and timing", "Administer"]] }],
  "rad-140": [{ source: TAT, confidence: "thin",
    rows: [["Low", "10mg/day or 20mg every other day"], ["Average", "20mg/day"], ["High", "30+mg/day"], ["Route and timing", "Administer desired dose orally"]],
    note: "No approved human indication, and the clinical programme that studied it was in breast cancer, not muscle. Liver injury has been reported." }],
  "retatrutide": [{ source: TAT, confidence: "thin",
    rows: [["Low", "1mg or 1000mcg per week to 4mg or 4000mcg per week"], ["Average", "5mg or 5000mcg per week to 8mg or 8000mcg per week"], ["High", "9mg or 9000mcg per week to 12mg or 12000mcg per week"], ["Route and timing", "Inject by pressing and holding the button until the dose window returns to 0"]],
    note: "Still investigational, with no approved label anywhere. The phase 3 arms were 4, 9 and 12 mg weekly." }],
  "selank": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100mcg/day"], ["Medium", "250mcg/day"], ["High", "500mcg/day"], ["Route and timing", "Spray:"]] }],
  "sildenafil": [{ source: TAT, confidence: "thin",
    rows: [["Low", "12.5mg daily"], ["Average", "25mg daily"], ["High", "50mg daily"], ["Route and timing", "Administer sublingually"]] }],
  "ss-31": [{ source: TAT, confidence: "thin",
    rows: [["Low", "250-1000mcg per day"], ["Average", "2500-5000mcg per day"], ["High", "5000mcg (or more) per day"]],
    note: "Elamipretide's trials used 40 mg daily, roughly ten times the top of this range, and it is approved only for Barth syndrome." }],
  "tamoxifen": [{ source: TAT, confidence: "thin",
    rows: [["Low", "10mg/day"], ["Average", "20mg/day"]],
    note: "Two blocks appear here because the FAQ gives an oral and a liquid-spray route. Both are recorded." }],
  "tamoxifen": [{ source: TAT, confidence: "thin",
    rows: [["Low", "2 sprays per day = 4mg/day"], ["Average", "4 sprays per day = 8mg/day"], ["High", "6 or more sprays per day = 12mg or more per day"], ["Route and timing", "Administer sublingually"]],
    note: "Two blocks appear here because the FAQ gives an oral and a liquid-spray route. Both are recorded." }],
  "tb-500": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100mcg per day"], ["Average", "200-250mcg per day"], ["High", "400+mcg per day"]] }],
  "testagen": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.5mg/day"], ["Medium", "1mg/day"], ["High", "2mg/day or more"]] }],
  "thymalin": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.5mg/day"], ["Medium", "1mg/day"], ["High", "2mg/day or more"]] }],
  "tri-amino": [{ source: TAT, confidence: "thin",
    rows: [["Low", "0.5mL or 150mg"], ["Average", "1mL or 300mg"], ["High", "2mL+ or 600mg+"], ["Route and timing", "Inject the muscle you’re going to train (see http://spotinjections.com)"]] }],
  "turinabol": [{ source: TAT, confidence: "thin",
    rows: [["Low", "25mg daily"], ["Average", "50mg daily"], ["High", "75-100mg daily"], ["Route and timing", "Take your dose sublingually 20-40 minutes pre workout"]] }],
  "vip": [{ source: TAT, confidence: "thin",
    rows: [["Low", "50mcg/day"], ["Average", "150-250mcg/day"], ["High", "500mcg/day or more"]] }],
  "vitamin-b12": [{ source: TAT, confidence: "thin",
    rows: [["Low", "125-250mcg per day"], ["Average", "500-750mcg per day"], ["High", "1000-2000mcg per day or more"], ["Route and timing", "Administer the B12 (tutorials available online, google it)"]] }],
  "winstrol": [{ source: TAT, confidence: "thin",
    rows: [["Low", "10mg daily"], ["Average", "25mg daily"], ["High", "50-75mg daily"], ["Route and timing", "Take your dose sublingually 20-40 minutes pre workout"]] }]
  };

  /* The Maximum Pharma Archive's figures, read off its per-compound database pages, which carry their own
   * evidence grade. Where its stack protocols give a different number from its compound page, both are
   * recorded and the disagreement is named: a source contradicting itself is worth a reader knowing. */
  const ARCHIVE = {
  "bam15": [{ source: MPA, confidence: "thin",
    rows: [["Reported use", "200–400 mg daily, split into 2–3 doses every 3–4 hours"],
      ["What sits behind it", "The same source's compound page states that no human dose exists, and puts rodent-equivalent conversions near 400–1000 mg/day"]],
    note: "The amount above is the one its stack protocols give, which describe what people run rather than what a study measured, and the codex records the stack figure as the practice figure for that reason. It is not a studied dose: no human has taken BAM15 in any published work, and the higher rodent-converted range is a calculation, not an exposure. Uncouplers as a class are defined by a narrow gap between the amount that raises expenditure and the amount that causes fatal overheating, and DNP killed people inside that gap; BAM15 did not raise body temperature in mice, which is the basis for calling it the safer one, and that has never been tested in a person." }],
  "slu-pp-332": [{ source: MPA, confidence: "thin",
    rows: [["Reported use", "100–400 mg by mouth before training, 30 minutes before fasted cardio"]],
    note: "This source's compound page and its stack protocols agree with each other, and both sit far below the 500–1000 mg the FAQ suggests may be needed. The animal work injected it and oral bioavailability in humans has never been measured, so whether any of an oral dose is absorbed is unknown." }],
  "mots-c": [{ source: MPA, confidence: "some",
    rows: [["Reported use", "1 mg under the skin before cardio, or 5–10 mg weekly split across 2–3 doses"]],
    note: "A mouse-to-human conversion of the original study would give roughly 85 mg, far above anything people run. MOTS-c has never been given to a human in a published trial." }],
  "5-amino-1mq": [{ source: MPA, confidence: "some",
    rows: [["Reported use", "50 mg by mouth before cardio"]],
    note: "An oral figure, against the FAQ's injectable one. There is no human data of any kind for this compound." }],
  "mirabegron": [{ source: MPA, confidence: "some",
    rows: [["Reported use for fat loss", "200 mg daily, split morning and evening"],
      ["What sits behind it", "The same source's compound page gives 100–200 mg daily, noting the human measurements were 200 mg as a single dose and 100 mg daily for four weeks"]],
    note: "The 200 mg daily figure is the one its stack protocols give and is recorded as the practice figure. It is four times the 50 mg approved maximum, and nothing has been studied at 200 mg taken daily: the single 200 mg dose raised resting metabolic rate about 203 kcal/day in twelve men, and the four-week study used half that amount." }],
  "clenbuterol": [{ source: MPA, confidence: "some",
    rows: [["Reported use for fat loss", "20–80 µg daily, taken in the morning"],
      ["Cycling", "Either two weeks on and two off, or a continuous climb in 20 µg steps every one to two weeks, both to stay ahead of β2 receptor desensitisation"],
      ["What sits behind it", "The same source's compound page gives a wider 20–120 µg daily"]],
    note: "The 20–80 µg range is the one its stack protocols give and is recorded as the practice figure. Both ranges run above the 40 µg the controlled human trials used, and those trials measured glucose uptake over two to four weeks rather than looking for a safe ceiling. Tanner Tattered's FAQ is the most conservative source here, calling 50+ µg far too aggressive for most non-competitors." }],
  "atx-304": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "50–400 mg daily by mouth, graded as human trial data and split morning and evening on half-life grounds"]],
    note: "This is the range the clinical trial used, which is unusual for this category. The trial endpoint was glucose control in type 2 diabetes over 28 days, not weight or body composition." }],
  "testosterone": [{ source: MPA, confidence: "some",
    rows: [["Replacement and above", "70–250 mg per week"], ["Beginner cycle", "300–500 mg per week"],
      ["Intermediate and advanced", "500–1000+ mg per week"],
      ["Duration", "No maximum is established, and no trial has run long enough to set one"]],
    note: "The two sources agree on the beginner range: Tanner Tattered's 4 mg/kg rule lands at roughly 300–400 mg for most people, inside this source's 300–500 mg. They part company above it, where this source records amounts up to and past 1000 mg a week and the FAQ's upper figure of 6 mg/kg reaches only about 500 mg." }],
  "trenbolone": [{ source: MPA, confidence: "some",
    rows: [["Lower range", "30–75 mg per week"], ["Advanced", "75–300 mg per week"],
      ["Very high exposure", "500–700+ mg per week, which this source marks as substantially riskier and strongly discourages"]],
    note: "The only investigated human doses are 5 and 10 mg over about two weeks, far below every figure in circulation. The two sources disagree at the top: Tanner Tattered's FAQ caps its advice near 100–150 mg a week and argues directly against more, while this source records an advanced range reaching 300 mg." }],
  "nandrolone": [{ source: MPA, confidence: "thin",
    rows: [["Typical range", "Given only as varies widely, with no figure and no duration cap on record"]],
    note: "This source declines to put a number on it, so the ratio on Tanner Tattered's entry is the only figure the codex has for nandrolone." }],
  "masteron": [{ source: MPA, confidence: "some",
    rows: [["As a ratio to testosterone", "Commonly run 1:1 with testosterone, or scaled higher"]],
    note: "Both sources express this as a ratio rather than an amount, and they agree at the top of Tanner Tattered's 1:2 to 1:1 range." }],
  "primobolan": [{ source: MPA, confidence: "some",
    rows: [["As a ratio to testosterone", "Mostly run 1:1 with testosterone across a cycle, to control estrogen"]],
    note: "The two sources agree within a fifth: 1:1 here against 0.8:1 to 1:1 in Tanner Tattered's FAQ." }],
  "equipoise": [{ source: MPA, confidence: "some",
    rows: [["As a ratio to testosterone", "Typically 3:1 to 2:1 testosterone to boldenone, scaled to the aromatising compound it runs alongside"]],
    note: "Written the other way round from Tanner Tattered's 1:2 to 1:4 boldenone to testosterone, which is worth care when reading: both describe boldenone at a third to a half of the testosterone dose, so the two sources agree." }],
  "t3": [{ source: MPA, confidence: "some",
    rows: [["Reported use for fat loss, with T4", "60–80 µg of T4 with 25–35 µg of T3, T3 in the morning or split"],
      ["Coming off", "Tapered, with a window for the body's own output to recover, rather than stopped"]],
    note: "The T3 amount is within the range used to replace a failed thyroid, but here it is added to a working one, which is the use the label's boxed warning names. In a deficit the weight it takes off is disproportionately lean mass." }],
  "sana": [{ source: MPA, confidence: "thin",
    rows: [["Reported use", "100–200 mg daily, split morning and evening"]],
    note: "At and just below the phase 1 trial's twice-daily arms, where mild side effects were common in every dose group. Continuous use is beyond anything studied." }]
  };

  /* The steroid sections of the FAQ do not use the Low/Average/High block the rest of it uses. Most of them
   * are stubs pointing at one list inside the testosterone guide, where an added compound is given as a ratio
   * to the testosterone dose rather than as an amount. Recorded in that form, because converting a ratio to
   * a number would invent a figure the source never gave. Read by hand from that list, not extracted. */
  const AAS = {
  "testosterone": [{ source: TAT, confidence: "some",
    rows: [["Typical weekly dose", "4 mg per kg of body weight per week, which the source puts at roughly 300–400 mg for most people"],
      ["Upper range", "4–6 mg/kg per week, described as what some people tolerate rather than what is advised"],
      ["Working up to it", "Raise by about 100 mg a week until the intended dose is reached, rather than starting there"],
      ["Injection frequency", "Long esters (cypionate, enanthate) at least twice weekly; propionate and sustanon 3–4 times weekly or daily"]],
    note: "A body-weight rule, not a fixed amount, so the number it produces rises with the person. For scale, a replacement dose for diagnosed hypogonadism is typically 50–100 mg weekly, which the approved label covers; everything above that is off-label and is what this row describes." }],
  "growth-hormone": [{ source: TAT, confidence: "thin",
    rows: [["Replacement or beginner", "2–3 IU daily"], ["Intermediate", "4–6 IU daily"], ["Advanced", "7–9 IU daily"],
      ["Aggressive", "10–17 IU daily"], ["Above that", "18–36 IU or more, which the source marks as an extreme"],
      ["For scale", "The source notes the body makes the equivalent of roughly 1–2 IU a day on its own"]],
    note: "Approved adult growth-hormone-deficiency dosing is far below even the lowest of these tiers. The risks that scale with dose are insulin resistance and raised blood glucose, fluid retention, carpal tunnel symptoms and joint pain." }],
  "nandrolone": [{ source: TAT, confidence: "thin",
    rows: [["As a ratio to testosterone", "1:2 up to 1:1 nandrolone to testosterone, so 250–500 mg nandrolone alongside 500 mg of testosterone"],
      ["Or by steps", "Added in increments of about 150 mg per week"]],
    note: "Given as a ratio, so the amount depends entirely on the testosterone dose it sits beside. Nandrolone raises prolactin and suppresses the body's own testosterone strongly, and its long ester makes a dose hard to walk back once injected." }],
  "masteron": [{ source: TAT, confidence: "some",
    rows: [["As a ratio to testosterone, for strength", "1:2 masteron to testosterone"],
      ["As a ratio to testosterone, for a leaner look", "1:2 up to 1:1 masteron to testosterone"],
      ["Worked example from the source", "200 mg per week of masteron alongside 400 mg per week of testosterone"]],
    note: "There is no approved human label for drostanolone in current use and no modern trial, so nothing here has a studied amount to sit above it." }],
  "primobolan": [{ source: TAT, confidence: "some",
    rows: [["As a ratio to testosterone, to grow muscle", "0.8:1 primobolan to testosterone"],
      ["As a ratio to testosterone, for a leaner look", "1:1 primobolan to testosterone"]],
    note: "Metenolone is withdrawn in the United States, so there is no current label and no modern trial behind any of this." }],
  "trenbolone": [{ source: TAT, confidence: "some",
    rows: [["For strength", "75–150 mg per week"], ["For a leaner look", "100 mg per week"],
      ["Alongside testosterone for the first time", "No higher than 100 mg per week, after eight weeks of testosterone alone"]],
    note: "The source argues directly against larger amounts, saying there is little reason to exceed about 100 mg a week outside professional competition. It also names the mental and behavioural effects as the reason for caution, not the physical ones. Trenbolone has no human label of any kind: it is a veterinary compound." }],
  "equipoise": [{ source: TAT, confidence: "some",
    rows: [["As a ratio to testosterone", "1:2, 1:3 or 1:4 boldenone to testosterone"],
      ["Half-life caution from the source", "Not to be added partway through a cycle, because the ester is long"]],
    note: "Boldenone undecylenate is a veterinary drug with no human label. Its very long half-life is the practical risk: an amount that turns out to be too high stays in the body for weeks." }],
  "exemestane": [{ source: TAT, confidence: "thin",
    rows: [["Alongside testosterone, if estrogen effects appear", "Weekly testosterone dose in mg divided by 20, as the weekly exemestane dose, split across injection days"]],
    note: "A rule of thumb from the source, which calls its own estrogen-control protocols loose guidelines. Driving estrogen too low carries its own costs: joint pain, low mood, poor lipids and bone loss. The approved use of exemestane is breast cancer, at 25 mg daily." }],
  "anastrozole": [{ source: TAT, confidence: "thin",
    rows: [["Alongside testosterone, if estrogen effects appear", "Weekly testosterone dose in mg divided by 500, as the weekly anastrozole dose, split across injection days"]],
    note: "A rule of thumb from the source, which calls its own estrogen-control protocols loose guidelines. The approved use of anastrozole is breast cancer, at 1 mg daily." }],
  "raloxifene": [{ source: TAT, confidence: "thin",
    rows: [["If gynecomastia has developed or is worsening", "60 mg daily"]],
    note: "60 mg daily is also the approved dose for osteoporosis prevention, though that is a different indication from the one described here. Raloxifene raises the risk of venous thromboembolism, which its label carries a boxed warning for." }]
  };

  /* Sections of the FAQ that carry more than one dose block. Most restate one protocol for a different way of
   * measuring it (a dropper, a scale, a syringe in units) and collapse to a single set; the real splits are
   * injection against nasal spray. Read by hand, because which block belongs to which route cannot be
   * inferred from the numbers. Two nasal figures are recorded as errors rather than as doses: see the notes. */
  const MULTI = {
  "semax": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "100 mcg/day"], ["Injected, medium", "250 mcg/day"], ["Injected, high", "500+ mcg/day"],
      ["Nasal spray", "1 spray ≈ 125 mcg; 2–3 sprays 250–375 mcg; 4 or more 500+ mcg per day"]],
    note: "The two routes line up, which is a sign the spray arithmetic is right here: a spray is about 0.1 mL and lands near the injected amount." }],
  "ipamorelin": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "150 mcg/day"], ["Injected, average", "250 mcg/day"], ["Injected, high", "500 mcg/day"],
      ["Nasal spray", "1 spray ≈ 125 mcg; 2–3 sprays 250–375 mcg; 4 or more 500+ mcg per day"]] }],
  "melanotan-2": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "100–250 mcg/day, starting low because the source warns side effects can be harsh"],
      ["Injected, average", "300–500 mcg/day"], ["Injected, high", "1000–1500 mcg/day"],
      ["Nasal spray", "1 spray ≈ 125–200 mcg; the source caps its spray protocols at 1000 mcg/day"]],
    note: "The only compound here where the source volunteers a ceiling on its own high tier. Melanotan II darkens and can change existing moles, which is the reason dermatological review matters before and during use." }],
  "bremelanotide": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "125 mcg/day"], ["Injected, average", "250 mcg/day"], ["Injected, high", "500–1000 mcg/day"],
      ["Nasal spray", "1 spray ≈ 250 mcg; 2–3 sprays 500–750 mcg; 4 or more 1000+ mcg per day"]],
    note: "The approved product, Vyleesi, is 1.75 mg as a single dose before activity and not more than once in 24 hours or eight times a month, which is a different pattern from the daily use described here." }],
  "oxytocin": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "100 mcg/day"], ["Injected, medium", "250 mcg/day"], ["Injected, high", "500+ mcg/day"],
      ["Nasal spray", "10 IU in one spray; 20 IU in two; 30–50 IU or more in 3–5 sprays"]],
    note: "Two unit systems appear in the same section, micrograms for the injection and international units for the spray, and the source does not convert between them. Do not read a figure in one as the other." }],
  "semaglutide": [{ source: TAT, confidence: "thin",
    rows: [["Injected weekly, low", "0.25 mg (250 mcg) per week"], ["Injected weekly, average", "0.5 mg (500 mcg) per week"],
      ["Injected weekly, high", "1 mg per week"],
      ["Oral, daily", "500 mcg/day low, 1000–3000 mcg/day average, 4000–5000 mcg/day high"],
      ["Nasal spray", "1 spray ≈ 0.04 mg/day, about 0.28 mg per week"]],
    note: "The injected figures match the approved escalation on the Ozempic label. The oral figures are far above the approved Rybelsus range of 3 to 14 mg daily in milligram terms once converted, so read the units carefully: 4000–5000 mcg is 4–5 mg." }],
  "bpc-157": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "100–250 mcg/day"], ["Injected, average", "250–500 mcg/day"], ["Injected, high", "500–1000+ mcg/day"],
      ["Oral", "500 mcg/day low, 1000 mcg/day medium, 1500+ mcg/day high"],
      ["Nasal spray", "Not recorded: the source's per-spray figure does not survive its own arithmetic"]],
    note: "The source gives its nasal spray as 4–5 mg per spray, which cannot be right: the vial it describes holds 5 or 10 mg in total and is reconstituted into about 2 mL, so a spray of roughly 0.1 mL delivers in the region of 250 mcg, not 4 mg. It looks like the vial's contents were read as the dose of a single spray. The figure is left out rather than reproduced, because following it would mean something like twenty times the injected amount." }],
  "dsip": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "100 mcg/day"], ["Injected, medium", "200 mcg/day"], ["Injected, high", "500+ mcg/day"],
      ["Nasal spray", "Not recorded: the source's per-spray figure does not survive its own arithmetic"]],
    note: "The same error as the BPC-157 entry. The source gives 5 mg per spray while describing a 5 mg vial reconstituted into 1–2 mL, so one 0.1 mL spray is nearer 250–500 mcg. Left out rather than reproduced." }],
  "kpv": [{ source: TAT, confidence: "thin",
    rows: [["Injected, low", "100–250 mcg/day"], ["Injected, average", "250–500 mcg/day"], ["Injected, high", "500–1000+ mcg/day"],
      ["The section's second protocol", "500 mcg every other day, 500 mcg daily, or 500 mcg twice daily"]] }],
  "tirzepatide": [{ source: TAT, confidence: "thin",
    rows: [["Low", "1–4 mg (1000–4000 mcg) per week"], ["Average", "5–8 mg per week"], ["High", "9–12 mg per week"],
      ["The section's second protocol", "2 mg/week low, 5 mg/week average, 10–15 mg/week high"]],
    note: "The approved maximum on both the Mounjaro and Zepbound labels is 15 mg weekly, reached by escalation, so the top of these ranges meets the label ceiling rather than exceeding it. The two protocols in the section differ at the top by 3 mg a week." }],
  "mk-677": [{ source: TAT, confidence: "thin",
    rows: [["Liquid, by dropper", "5 mg daily low, 10 mg average, 20–30 mg high"],
      ["The section's second protocol", "5–10 mg daily or 10–25 mg every other day low, 10–25 mg daily average, 25–50 mg daily high"]],
    note: "The two protocols disagree at the top by nearly twofold. MK-677 raises blood glucose and causes water retention, and both scale with the amount taken." }],
  "gw501516": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5–10 mg/day, or 10 mg every other day"], ["Medium", "10–25 mg/day"], ["High", "20 mg/day, up to 50 mg/day or more in the widest of the section's protocols"]],
    note: "Three protocols appear in this section and they agree on a 5–10 mg floor while differing at the top, from 20 mg to 50 mg or more. The human lipid studies used 10 mg daily for two weeks, which is the low end. GSK abandoned the compound after two-year rodent studies produced cancers in several organs." }],
  "enclomiphene": [{ source: TAT, confidence: "thin",
    rows: [["Low", "12.5 mg two to three times a week, about 25 mg weekly"],
      ["Average", "12.5 mg every other day, or 6.25 mg daily, about 43.75 mg weekly"],
      ["High", "12.5 mg daily, about 87.5 mg weekly, with 25 mg daily given in one of the section's protocols"]],
    note: "The section states the same protocol four times over for different ways of measuring it, by tablet, by scale and by volume; the amounts agree apart from the top tier." }],
  "glutathione": [{ source: TAT, confidence: "thin",
    rows: [["Low", "100 mg three times a week"], ["Average", "200 mg three times a week"], ["High", "200 mg daily"],
      ["By volume", "At a 200 mg/mL concentration that is 0.5 mL and 1.0 mL respectively, on a 1 mL insulin syringe"]] }],
  "tadalafil": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5 mg daily"], ["Average", "10 mg daily"], ["High", "20 mg daily"],
      ["Alongside testosterone", "5 mg daily is the amount the source suggests when blood pressure runs slightly high"]],
    note: "These match the approved label range for tadalafil, where 2.5–5 mg daily is the once-daily dose and 20 mg is the as-needed maximum. Combining it with nitrates can drop blood pressure dangerously." }],
  "telmisartan": [{ source: TAT, confidence: "thin",
    rows: [["Low", "20 mg daily"], ["Average", "40–80 mg daily"], ["High", "80–160 mg daily"]],
    note: "The approved maximum for hypertension is 80 mg daily, so the high tier here is up to twice the label ceiling. Telmisartan is an angiotensin receptor blocker: it is contraindicated in pregnancy and needs kidney function and potassium watched." }],
  "anadrol": [{ source: TAT, confidence: "thin",
    rows: [["Low", "25 mg daily"], ["Average", "50 mg daily"], ["High", "75–100 mg daily"]],
    note: "A third set of figures appears in this section at 5, 10 and 20 mg daily, which does not fit oxymetholone and is not recorded here, since it could not be tied to a compound with confidence. Oxymetholone is 17-alpha alkylated and is among the more hepatotoxic orals in use; its approved label is for anemia, at 1–5 mg/kg daily." }],
  "meldonium": [{ source: TAT, confidence: "thin",
    rows: [["Low", "5 mg per kg of body weight per day"], ["Average", "10 mg/kg per day"],
      ["High", "15–20 mg/kg, after a week at the low amount first"]],
    note: "A second set of figures in this section, 1–4 mg daily rising to 20+ mg daily, is two orders of magnitude below the body-weight rule and could not be matched to meldonium, so it is not recorded. Meldonium has been prohibited by WADA since 2016." }]
  };

  /* Sections written as prose rather than as a dose block. Most of the rest of the FAQ's sections are marked
   * "Coming soon" by its author and carry no dosing at all, which is recorded as such on those entries.
   * The topical compounds here are dosed by volume of a solution, so the strength of that solution decides
   * what the volume delivers; the figure means nothing without it. Read by hand. */
  const PROSE = {
  "hcg": [{ source: TAT, confidence: "thin",
    rows: [["Alongside a cycle, the source's preferred option", "250 IU every other day"],
      ["General range given", "500 IU per week low, 250 IU every other day or daily average, 500+ IU per day high"],
      ["Starting six weeks before the end of a cycle", "Weeks 6–4: 500–1000 IU three times a week. Weeks 3–1: 250–500 IU three times a week"],
      ["Starting one to two weeks before a SERM", "1000–1500 IU every other day"]],
    note: "Used here to keep the testicles working during suppression rather than for any approved indication. Its approved uses are fertility treatment and undescended testicles, at different amounts and schedules. Overshooting it can desensitise the Leydig cells it is meant to be keeping active." }],
  "berberine": [{ source: TAT, confidence: "thin",
    rows: [["Reported use", "1500 mg with 8–12 fl oz of water, taken with the first meal of the day"]],
    note: "Berberine inhibits CYP3A4, so it raises the levels of a long list of other drugs taken alongside it. That interaction, rather than berberine itself, is the usual reason for caution." }],
  "doxepin": [{ source: TAT, confidence: "thin",
    rows: [["Low", "10 mg/day"], ["Average", "20 mg/day"], ["High", "30 mg/day"]],
    note: "For sleep, these sit near the approved low-dose insomnia product, which is 3 to 6 mg at bedtime; doxepin's antidepressant labelling runs far higher, from 75 mg upward. It is a tricyclic, so it carries the anticholinergic effects and the overdose risk of that class." }],
  "trazodone": [{ source: TAT, confidence: "thin",
    rows: [["Low", "50 mg/day"], ["Average", "100 mg/day"], ["High", "150 mg/day"],
      ["The source's note", "Antidepressant effects are described as beginning at 150 mg daily or more"]],
    note: "Used here for sleep. Priapism is the rare but urgent risk, and combining it with other serotonergic drugs raises the risk of serotonin syndrome." }],
  "slu-pp-332": [{ source: TAT, confidence: "thin",
    rows: [["The source's position", "It reports evidence that the compound does not work as advertised at usual amounts, and that megadosing at 500–1000 mg (0.5–1 g) daily may be required"],
      ["Its own section", "Marked Coming soon, with no protocol given"]],
    note: "This is several times the 100–400 mg the Maximum Pharma Archive gives, and the two sources do not agree. Neither figure has anything human behind it: SLU-PP-332 has never been given to a person in a published study, the animal work injected it, and oral absorption in humans has never been measured, so whether any oral amount is taken up at all is unknown." }],
  "minoxidil": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "0.25–0.5 mL of solution per application from the dropper, where a full dropper is about 1 mL, spread thin over the area and massaged in"],
      ["Frequency", "Every day for best results, left on for at least 6 to 8 hours before rinsing"],
      ["Strength", "5% is the usual over-the-counter concentration; 10% is described as much more potent per drop and is not generally sold without a prescription"],
      ["Alongside it", "Microneedling once a week at 1.0–1.5 mm"]],
    note: "A volume, not a dose: what 0.5 mL delivers depends entirely on whether the solution is 5% or 10%, so the two are twice apart at the same volume. Topical minoxidil is absorbed systemically enough to lower blood pressure and cause fluid retention in some people." }],
  "clascoterone": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "About 0.5 mL of solution per application from the dropper, a full dropper being roughly 1 mL, spread over the area"]],
    note: "A volume rather than an amount, so the solution's strength decides what it delivers. The approved product, Winlevi, is a 1% cream applied twice daily for acne, which is a different preparation from the liquid described here." }],
  "pyrilutamide": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "0.5–1 mL of solution per application from the dropper, a full dropper being roughly 1 mL"]],
    note: "A volume rather than an amount. KX-826 is investigational, with no approval anywhere, and its phase 2 hair-loss results in men were reported as missing the primary endpoint." }],
  "ru-58841": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "0.5–1 mL of solution per application from the dropper, a full dropper being roughly 1 mL"]],
    note: "A volume rather than an amount. RU-58841 was never developed past early work, has no human trial and no approval, and is sold only as a research chemical, so the strength of a given solution is unverified." }],
  "pp405": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "0.5–1 mL of solution per application from the dropper, a full dropper being roughly 1 mL"]],
    note: "A volume rather than an amount. PP405 is in early clinical development and nothing sold outside a trial is the trial formulation." }],
  "ptd-dbm": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "0.5–1 mL of solution per application from the dropper, a full dropper being roughly 1 mL"]],
    note: "A volume rather than an amount, and there is no human trial of PTD-DBM for hair growth to put a concentration beside it." }],
  "sm04554": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "0.5–1 mL of solution per application from the dropper, a full dropper being roughly 1 mL"]],
    note: "A volume rather than an amount. SM04554 reached phase 2 for androgenetic alopecia and was not taken further." }],
  "topilutamide": [{ source: TAT, confidence: "thin",
    rows: [["Topical", "0.5–1 mL of solution per application from the dropper, a full dropper being roughly 1 mL"]],
    note: "A volume rather than an amount. Topilutamide, also called fluridil, has no approval in the United States or the United Kingdom." }],
  "glow": [{ source: TAT, confidence: "thin",
    rows: [["How the source sets it", "Matched to the GHK-Cu amount, with the other two scaled around it. For a medium dose it gives 1 mg BPC-157, 5 mg GHK-Cu and 1 mg TB-500"],
      ["How it is sold", "Commonly as 10 mg / 50 mg / 10 mg blended vials"]],
    note: "A premixed blend of three peptides, so the ratio is fixed by the vial and only the total is chosen. None of the three has an approved human indication, and the blend as a blend has never been studied." }]
  };

  /* A second pass over the Maximum Pharma Archive's compound pages, read for comparison against the FAQ.
   * Each carries that page's own evidence grade. Where the two sources disagree the note says by how much;
   * where they agree the compound's grade is lifted from one-source "thin" to "some". */
  const ARCHIVE2 = {
  "tirzepatide": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "2.5 mg weekly, titrated to 5, 7.5, 10 or 15 mg weekly, graded as human trial data"]],
    note: "Both sources stop at the label's 15 mg weekly ceiling." }],
  "retatrutide": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "0.5–10 mg weekly"]],
    note: "The FAQ's top tier reaches 12 mg weekly against this source's 10. The phase 3 arms were 4, 9 and 12 mg weekly, so both sit inside what has been trialled." }],
  "cagrilintide": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Around 0.25 mg three times weekly, titrating up"]],
    note: "Framed per week here and per day in the FAQ; converted, the two land in the same region. The trials used 2.4 mg weekly alongside semaglutide." }],
  "orforglipron": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "3–36 mg orally once daily, titrated, graded as human trial data"]],
    note: "The FAQ's high tier of 40–50 mg daily runs above the trial range this source gives." }],
  "berberine": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "500 mg two or three times daily, which is what the trials used, graded as human trial data"]],
    note: "A daily total of 1000–1500 mg, which matches the FAQ's single 1500 mg dose with the first meal; the two differ on how it is split rather than on how much." }],
  "metformin": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "500 mg daily by mouth, with or after the evening meal, graded as human trial data"]],
    note: "Matches the FAQ's average tier. The FAQ's high tier of 1000–2000 mg daily is within the approved label range but above what this source records as typical." }],
  "anadrol": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Men: 25–150 mg/day"]],
    note: "Agrees with the FAQ at the bottom, and runs half as high again at the top." }],
  "proviron": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Men: 25–100 mg/day"]],
    note: "The FAQ's high tier of 125–200 mg daily is roughly twice this source's ceiling." }],
  "winstrol": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Men: 25–100 mg/day by mouth, or about 50 mg every other day to 25 mg daily injectable"]],
    note: "Agrees with the FAQ, which gives 10, 25 and 50–75 mg daily across its tiers." }],
  "mk-677": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "10–25 mg orally once daily, graded as human trial data"]],
    note: "Matches the first of the FAQ's two protocols. The FAQ's second reaches 50 mg daily, double this ceiling." }],
  "cjc-1295": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250–500 mcg under the skin daily, on no-DAC protocols"]],
    note: "Agrees with the FAQ. Note the qualifier: this is for the no-DAC form, which is a different molecule from CJC-1295 with DAC and is cleared far faster." }],
  "ipamorelin": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250–500 mcg under the skin daily"]],
    note: "Agrees with the FAQ's average and high tiers." }],
  "ghrp-6": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "100–300 mcg under the skin, one to three times daily, fasted"]],
    note: "Broadly agrees with the FAQ, whose top tier of 500 mcg sits above this range." }],
  "hexarelin": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "100–200 mcg under the skin, one to twice daily, cycled"]],
    note: "The FAQ runs higher throughout, from 150 up to 500 mcg daily. Hexarelin desensitises faster than the other ghrelin agonists, which is why this source specifies cycling." }],
  "hgh-frag-176-191": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250–500 mcg under the skin, one to three times daily, so 500–1500 mcg/day"]],
    note: "Agrees with the FAQ." }],
  "bpc-157": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250–1000 mcg under the skin, once or twice daily"]],
    note: "Agrees with the FAQ's injected tiers." }],
  "tb-500": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "500–1000 mcg weekly, under the skin"]],
    note: "Given per week here against per day in the FAQ, whose 100–400+ mcg daily works out at roughly 700–2800 mcg a week. Read the period, not just the number: the FAQ is up to three times higher." }],
  "kpv": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "200–500 mcg under the skin, one to twice daily, up to about 1 mg a day divided"]],
    note: "Agrees with the FAQ." }],
  "ll-37": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "100–500 mcg under the skin, one to twice daily during acute illness"]],
    note: "Agrees with the FAQ on amount. This source ties it to acute illness rather than continuous use." }],
  "humanin": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250 mcg to 1 mg under the skin daily, up to 2.5–5 mg on aggressive protocols"]],
    note: "The sources disagree about what is normal: what this one calls aggressive, 2.5–5 mg, is the FAQ's average tier." }],
  "ara-290": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "2–4 mg under the skin daily in the trials; 1, 4 and 8 mg have been studied"]],
    note: "The FAQ's high tier, 2–5 mg, is this source's typical range, and the FAQ's low and medium tiers sit below anything trialled." }],
  "igf-1-lr3": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250–500 mcg daily, under the skin or into muscle"]],
    note: "Agrees with the FAQ's high tier. IGF-1 analogues drop blood glucose, which is the acute risk with any of them." }],
  "igf-1-des": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "20–100 mcg per injection into or around the target muscle; 50–150 mcg/day on training days"]],
    note: "The two sources are far apart here. The FAQ gives 100–200 mcg as its average and 300–500 mcg as its high, which is two to five times this range." }],
  "semax": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250–500+ mcg daily"]],
    note: "Agrees with the FAQ's medium and high tiers." }],
  "methylene-blue": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "0.5–10 mg/day orally"]],
    note: "The FAQ runs considerably higher, to 20–30 mg daily. Methylene blue is a monoamine oxidase inhibitor, and serotonin syndrome is the interaction that matters: the risk of it rises with the amount." }],
  "glutathione": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "600–1200 mg into muscle, three to five times weekly"]],
    note: "The widest disagreement found between the two sources: the FAQ gives 100–200 mg three times a week, around a sixth of this. Neither explains the gap, and nothing published settles it." }],
  "telmisartan": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "40 mg daily, titrated to 80 mg"]],
    note: "This source stops at the approved 80 mg ceiling. The FAQ's high tier of 80–160 mg daily is up to twice the label maximum." }],
  "pyrilutamide": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "A 0.5% solution applied twice daily, the concentration used in the animal comparison and the one the community follows"]],
    note: "This supplies what the FAQ leaves out. The FAQ gives a volume, 0.5–1 mL from a dropper, with no strength attached, and a volume without a concentration says nothing about the amount delivered." }],
  "ru-58841": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Commonly a 5% solution, roughly 0.5 mL to the scalp daily"]],
    note: "Again the strength the FAQ omits, and it matches the FAQ's volume. As a research chemical the actual concentration of any given bottle is unverified." }],
  "bremelanotide": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "250–1000 mcg under the skin, a few hours before activity"]],
    note: "The same amounts as the FAQ but a different pattern: before activity here, against daily use in the FAQ. The approved product is dosed before activity and not more than once in 24 hours." }]
  };

  /* The last of the Maximum Pharma Archive comparison. Its topical entries are the useful ones: they give
   * the concentration of the solution, which is what the FAQ's bare volumes were missing. */
  const ARCHIVE3 = {
  "l-carnitine": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "500 mg daily into muscle or under the skin; 500–1000 mg into muscle 30–60 minutes before fasted cardio"]],
    note: "Agrees with the FAQ, whose tiers run 250, 500–1000 and 1500+ mg daily. Injected carnitine is the form both describe; oral absorption is poor, which is why." }],
  "minoxidil": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "A 5% solution or foam, 1 mL twice daily"]],
    note: "Twice the FAQ's volume and twice the frequency, so up to eight times the exposure at the same strength. Both name 5% as the usual concentration, which is the figure that makes either volume meaningful." }],
  "topilutamide": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "A 2% solution applied to the scalp once daily"]],
    note: "The strength the FAQ omits, which its bare volume of 0.5–1 mL needs in order to mean anything." }],
  "sm04554": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "A 0.15% or 0.25% topical solution once daily, the concentrations reported for its clinical programme"]],
    note: "The strength the FAQ omits, and here it comes from the trial programme rather than from practice." }],
  "pp405": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Roughly 1 mL of a vendor preparation to the hairline daily"]],
    note: "Agrees with the FAQ's volume, and neither source can give a strength: PP405 is in early trials and no vendor preparation is the trial formulation." }],
  "melanotan-2": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "500–1000 mcg daily while loading, then about 250 mcg weekly to maintain"]],
    note: "A loading-then-maintenance pattern the FAQ does not describe; the FAQ gives daily tiers throughout, reaching 1000–1500 mcg a day, which is well above this maintenance figure." }],
  "melanotan-1": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Research protocols of 500–1000 mcg daily while loading, then 250 mcg weekly"]],
    note: "The same pattern as its sister compound. The FAQ gives 100, 250 and 500+ mcg daily with no maintenance phase." }],
  "meldonium": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "500–1000 mg daily by mouth, cycled"]],
    note: "Agrees with the FAQ's body-weight rule, which works out at roughly 350–1400 mg daily for a 70 kg person. Prohibited by WADA since 2016." }],
  "turinabol": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "Men: 30–60 mg/day"]],
    note: "The FAQ runs higher, to 75–100 mg daily at its top tier. Turinabol is 17-alpha alkylated, so liver strain scales with both amount and duration." }],
  "tadalafil": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "5–20 mg daily for vascularity and pump"]],
    note: "Matches the FAQ's tiers exactly, and both sit inside the approved label range." }],
  "ezetimibe": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "10 mg daily"]],
    note: "The approved dose, and the FAQ's average tier. The FAQ's high tier of 20 mg is twice the label amount, which no trial supports." }],
  "propranolol": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "10 to 60 mg, taken when needed"]],
    note: "The FAQ runs considerably higher and daily rather than as needed, to 80–160 mg or more. Stopping a beta blocker abruptly after regular use can cause rebound tachycardia." }],
  "sildenafil": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "25–100 mg as needed, 30–60 minutes ahead; 25–50 mg for pump use"]],
    note: "The sources describe different patterns rather than different amounts: as needed here, daily in the FAQ at 12.5–50 mg. Combining it with nitrates can drop blood pressure dangerously." }],
  "vip": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "50–100 mcg under the skin or intranasally, one to twice daily"]],
    note: "The FAQ runs several times higher at its top, to 500+ mcg daily. VIP is a potent vasodilator and can drop blood pressure." }],
  "thymalin": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "0.5–2 mg under the skin daily, in courses of 10 to 20 days"]],
    note: "The same amounts as the FAQ, with a course structure the FAQ does not give: these peptides are described as run in short blocks rather than continuously." }],
  "bronchogen": [{ source: MPA, confidence: "some",
    rows: [["Typical range", "0.5–2 mg under the skin daily, in courses of 10 to 20 days"]],
    note: "Agrees with the FAQ, again with the course structure added." }],
  "ace-031": [{ source: MPA, confidence: "some",
    rows: [["In the trials", "0.02 to 3 mg per kg under the skin as a single dose, and every two to four weeks in the Duchenne study"],
      ["What is sold", "No dose is established for the peptide fragment sold under this name"]],
    note: "The distinction matters more than the figure: the trials used the full ACE-031 fusion protein, which is not what is sold online. The FAQ's 50–200 mcg daily does not correspond to either. The trial programme was stopped over bleeding and vascular side effects." }],
  "mgf": [{ source: MPA, confidence: "thin",
    rows: [["Typical range", "Given only as reported from animal studies, with no human figure"]],
    note: "This source declines to put a human number on it, so the FAQ's 100–500 mcg daily is the only figure the codex has for MGF." }]
  };

  /* Three compounds the Archive covers where the FAQ has a section but not a figure: its SNAP-8 and TA-1
   * entries read "Coming soon", and its SR-9009 entry gives a volume without the vial strength that would
   * turn it into an amount. The Archive fills what is missing, which is the order the codex works in. */
  const ARCHIVE4 = {
  "sr-9009": [{ source: TAT, confidence: "thin",
    rows: [["Reported protocol", "Reconstitute the vial with 2 mL, then inject 0.2–0.5 mL on waking, repeated as needed to move a sleep schedule"],
      ["Route and timing", "Injected, taken at the hour the user wants to start waking"]],
    note: "A fraction of a vial rather than an amount: each dose is a tenth to a quarter of whatever the vial holds, and this source does not say what that is. The timing is the part worth reading, since the compound acts on the circadian clock rather than on a daily total." },
    { source: MPA, confidence: "thin",
    rows: [["Typical range", "20–30 mg daily, split across the day"]],
    note: "The amount the other source leaves out, and for the oral form. SR-9009 is very poorly absorbed by mouth, so an oral figure and an injected one are not interchangeable: every endurance and fat-loss finding came from mouse studies that injected it." }],
  "snap-8": [{ source: MPA, confidence: "thin",
    rows: [["Typical range", "A 3–10% cream or solution applied twice daily"]],
    note: "A concentration rather than a dose, which is how a cosmetic peptide is used. The other source lists an injectable vial for it, calls injected SNAP-8 understudied and gives no figure; nothing published supports injecting it." }],
  "thymosin-alpha-1": [{ source: MPA, confidence: "thin",
    rows: [["Typical range", "1.6 mg under the skin twice weekly"]],
    note: "The same figure as the hepatitis B trials above, so this source reports the trial schedule rather than anything beyond it. The other source stocks it but gives no amount, and records that its author was disappointed with it." }]
  };

  // Attach to the dosing record, creating an entry for compounds that have no label or trial dose at all.
  A.dosing = A.dosing || {};
  for (const set of [REPORTED, ARCHIVE, ARCHIVE2, ARCHIVE3, ARCHIVE4, AAS, MULTI, PROSE]) for (const [slug, blocks] of Object.entries(set)) {
    const d = A.dosing[slug] || (A.dosing[slug] = { source: "No label or trial dose", evidence: "anecdotal" });
    d.reported = (d.reported || []).concat(blocks);
  }

  /* Tanner Tattered's FAQ is the codex's primary dosing source: where both sources give a figure for the
   * same compound, his is the one the page shows, and the Archive fills only what he leaves out.
   *
   * Where the two materially disagree AND his figure is the higher one, the Archive's block is folded into
   * a line inside his rather than printed beside it. One figure leads, and the lower one a second source
   * gives is still on the page, because suppressing it outright would hide the more cautious number.
   * Disagreements about route, period or substance are not in this list: those two blocks describe
   * different things rather than competing, so both stay. */
  const PRIMARY = "Tanner Tattered, FAQ", SECOND = "Maximum Pharma Archive";
  const ARCHIVE_SAYS = {
    "methylene-blue": "0.5–10 mg daily",
    "igf-1-des": "20–100 mcg per injection, or 50–150 mcg a day on training days",
    "tb-500": "500–1000 mcg weekly",
    "propranolol": "10–60 mg taken when needed, rather than daily",
    "slu-pp-332": "100–400 mg",
    "vip": "50–100 mcg once or twice daily",
    "telmisartan": "40 mg daily, titrated to 80 mg",
    "proviron": "25–100 mg daily",
    "ezetimibe": "10 mg daily",
    "hexarelin": "100–200 mcg once or twice daily, cycled"
  };
  for (const [slug, says] of Object.entries(ARCHIVE_SAYS)) {
    const d = A.dosing[slug];
    if (!d || !d.reported) continue;
    const lead = d.reported.find((b) => (b.source || {}).name === PRIMARY);
    if (!lead) continue;
    lead.note = (lead.note ? lead.note + " " : "") +
      "A second source, the Maximum Pharma Archive, gives " + says + " for the same use, below the figure above. " +
      "The codex follows this source where the two disagree, so the lower amount is recorded here rather than shown beside it.";
    d.reported = d.reported.filter((b) => (b.source || {}).name !== SECOND);
  }

  // The primary source leads wherever both are present.
  for (const d of Object.values(A.dosing)) {
    if (!d.reported || d.reported.length < 2) continue;
    d.reported.sort((a, b) => ((b.source || {}).name === PRIMARY ? 1 : 0) - ((a.source || {}).name === PRIMARY ? 1 : 0));
  }

  /* The grade follows the corroboration, so it is derived here rather than written out on each block:
   * a figure one source gives alone is "thin", and a second independent source reporting the same kind of
   * use lifts it to "some". Blocks already graded higher, and "none", are left alone. A compound whose
   * second block was folded away above is back to one source, and its grade drops to "thin" to match. */
  /* Two blocks are not corroboration when they are not describing the same thing. On these compounds one
   * source declines to put a figure on it at all, or the two give different routes with no shared unit,
   * so both blocks stay on the page and the grade stays at one source:
   *   nandrolone  the Archive gives no figure, only that practice varies widely
   *   mgf         the Archive declines a human figure and reports animal studies only
   *   sr-9009     a fraction of an unstated vial, injected, against a daily oral amount */
  const NO_LIFT = new Set(["nandrolone", "mgf", "sr-9009"]);

  for (const [slug, d] of Object.entries(A.dosing)) {
    if (!d.reported) continue;
    const corroborated = !NO_LIFT.has(slug) &&
      new Set(d.reported.map((b) => (b.source || {}).name)).size > 1;
    d.reported.forEach((b) => {
      if (!corroborated && b.confidence === "some") b.confidence = "thin";
      if (corroborated && b.confidence === "thin") b.confidence = "some";
    });
  }
})(window.ATLAS);
