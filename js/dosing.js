/*
 * Atlas Codex: dosing recorded from approved drug labels and published clinical trials.
 *
 * SCOPE RULE — only two kinds of numbers belong in this file:
 *   1. Dosing from an approved regulator-reviewed label (say which regulator and indication).
 *   2. Dosing a published trial actually administered (tie it to that trial).
 * Nothing else. No protocols from forums, vendors, coaches or FAQ documents, and no
 * extrapolation from animal doses. A compound with neither source gets no entry here and
 * the page states that no human dose has been established, which is the honest answer.
 *
 * Shape: slug: { source, evidence, rows: [[context, amount]], note, refs }
 */
window.ATLAS.dosing = {
  /* ---------------------------------------------------------- metabolic */
  semaglutide: { source: "FDA label", evidence: "established", refs: [76], rows: [
    ["Type 2 diabetes (Ozempic)", "0.25 mg weekly for 4 weeks, then 0.5 mg; may increase to 1 mg and then 2 mg weekly, each after at least 4 weeks"],
    ["Weight management (Wegovy)", "Escalated over 16 weeks: 0.25, 0.5, 1.0, 1.7, then 2.4 mg weekly"],
    ["Oral (Rybelsus)", "3 mg daily for 30 days, then 7 mg; may increase to 14 mg"],
    ["Why it escalates", "The stepwise increase exists to limit nausea and vomiting, which cluster at each dose step"]],
    note: "The oral tablet must be taken fasting with up to 120 mL of water, at least 30 minutes before food, drink or other medicines." },
  tirzepatide: { source: "FDA label", evidence: "established", refs: [77], rows: [
    ["Type 2 diabetes (Mounjaro)", "2.5 mg weekly for 4 weeks, then 5 mg; may increase in 2.5 mg steps at 4-week intervals to a maximum of 15 mg"],
    ["Weight management (Zepbound)", "Same escalation; maintenance at 5, 10 or 15 mg weekly"]] },
  retatrutide: { source: "Phase 2 and phase 3 trials (TRIUMPH-1, TRIUMPH-2, TRANSCEND-T2D-1)", evidence: "human rct", refs: [8, 410, 411, 412], rows: [
    ["Phase 3 trial arms", "4, 9 or 12 mg weekly, reached by escalation"],
    ["Phase 3 duration", "80 weeks in the two obesity trials, 40 weeks in the diabetes trial"],
    ["Phase 2 trial arms", "1, 4, 8 or 12 mg weekly, reached by escalation over several weeks"],
    ["Phase 2 duration", "48 weeks"]],
    note: "The phase 3 doses differ from the range used in phase 2. No label exists, and the dose for approval has not been set." },
  cagrilintide: { source: "Phase 3 trials (REDEFINE 1 and 2)", evidence: "human rct", refs: [414, 415, 416], rows: [
    ["Trial arms", "2.4 mg weekly, alone or with semaglutide 2.4 mg weekly"], ["Duration studied", "68 weeks"],
    ["Earlier dose-finding", "0.3 to 4.5 mg weekly over 26 weeks in phase 2"]],
    note: "No label exists. A cardiovascular outcomes trial of the combination (REDEFINE 3) has not reported." },
  mazdutide: { source: "Phase 3 trials (GLORY-1 and a type 2 diabetes trial)", evidence: "human rct", refs: [417, 418, 419], rows: [
    ["Trial arms", "4 mg or 6 mg weekly"], ["Duration studied", "48 weeks in both trials"]],
    note: "Approved in China; its Chinese label is the authority there, and its dosing is not reproduced here." },
  survodutide: { source: "Phase 3 trials (SYNCHRONIZE-1, -2 and -MASLD) and phase 2", evidence: "human rct", refs: [420, 421, 422, 423], rows: [
    ["Phase 3 trial arms", "Escalated to 3.6 mg or 6.0 mg weekly"],
    ["Phase 3 duration", "76 weeks in the two obesity trials, 48 weeks in the liver trial"],
    ["Phase 2", "Escalated weekly doses up to 6 mg over 46 to 48 weeks"]],
    note: "No label exists. Phase 2 used a faster escalation and reported more gastrointestinal intolerance than the phase 3 schedule." },
  orforglipron: { source: "Phase 3 trials (ATTAIN-1 and ATTAIN-2)", evidence: "human rct", refs: [425, 426], rows: [
    ["Trial arms", "6, 12 or 36 mg daily by mouth"], ["Duration studied", "72 weeks"],
    ["Administration", "Taken with or without food, unlike oral semaglutide"]] },
  berberine: { source: "Published trial", evidence: "human rct", refs: [434, 435], rows: [
    ["Trial regimen", "In the trial that compared it with metformin, 500 mg was given three times daily for 3 months"],
    ["Duration studied", "Most trials in the meta-analyses ran 1 to 3 months; longer use has not been studied"]],
    note: "No regulator has approved berberine as a glucose-lowering drug, so the only figures available are what trials gave." },
  metformin: { source: "FDA label", evidence: "established", rows: [
    ["Type 2 diabetes", "Typically started at 500 mg once or twice daily with meals and increased gradually; maximum 2,550 mg daily for immediate-release"],
    ["Why it escalates", "Slow increases reduce the diarrhea and nausea that otherwise cause people to stop"]] },
  gw501516: { source: "Phase 1 trials", evidence: "human rct", refs: [64, 65], rows: [
    ["Doses studied", "2.5 to 10 mg daily"], ["Longest study", "2 weeks"]],
    note: "Development was abandoned after rodent carcinogenicity findings, so these short phase 1 exposures are the only human dosing on record." },
  "atx-304": { source: "Phase 2a trial", evidence: "human rct", refs: [72], rows: [
    ["Trial design", "Added to metformin in type 2 diabetes"], ["Duration studied", "28 days"]] },
  aicar: { source: "Published trial (RED-CABG) and metabolic studies", evidence: "human rct", refs: [445, 446, 447], rows: [
    ["RED-CABG trial", "Given as acadesine, 0.1 mg/kg per minute intravenously for 7 hours during heart bypass surgery"],
    ["Metabolic studies", "Single intravenous infusions lasting hours"],
    ["By mouth", "No published human study has given it by mouth"]],
    note: "All human dosing on record is intravenous and short. The mouse endurance work that made it famous cannot be converted into a human amount." },
  "1-3-dmaa": { source: "Published pharmacokinetic study", evidence: "human obs", refs: [448], rows: [
    ["Only dose studied", "A single 25 mg oral dose, given to eight healthy men"],
    ["Half-life measured", "About 8.5 hours"],
    ["Harm reports", "Blood levels in published case reports of adverse events were 15 to 30 times higher than the peak after that single dose"],
    ["Legal status", "Not a lawful dietary ingredient in the US, and prohibited by WADA"]],
    note: "One single-dose study in eight men is the entire human dosing record. It says nothing about repeated use." },

  /* ---------------------------------------------------------- fat loss */
  mirabegron: { source: "FDA label and research trials", evidence: "established", refs: [85, 86, 87], rows: [
    ["Overactive bladder (label)", "25 mg once daily, may increase to 50 mg; 50 mg is the maximum approved dose"],
    ["Brown fat research", "200 mg as a single dose, and 100 mg daily for 4 weeks, in studies that were not for weight loss"],
    ["Important gap", "The research doses are two to four times the maximum approved dose, and raised heart rate and blood pressure"]] },
  albuterol: { source: "FDA label", evidence: "established", rows: [
    ["Asthma (inhaled)", "Typically 2 inhalations every 4 to 6 hours as needed"],
    ["Oral tablets", "2 to 4 mg three or four times daily in adults"],
    ["Resistance-training trial", "In a randomized trial in healthy trained men, 16 mg daily by mouth was given for 11 weeks, above the approved oral range"],
    ["Sport", "Inhaled use is permitted in sport only below a set daily limit; oral use is prohibited outright"]], refs: [99, 453],
    note: "The training trial used a supratherapeutic dose and found both a lean mass gain and measurable costs." },
  clenbuterol: { source: "Published trials and non-US human labels", evidence: "human rct", rows: [
    ["Controlled human trials", "In randomized placebo-controlled crossover studies of glucose metabolism, 40 µg daily was given for 2 weeks and for 4 weeks"],
    ["Asthma, where approved", "Human respiratory labels in some countries use microgram amounts two to three times daily"],
    ["Not approved in the US", "There is no US human label; US approval covers horses only"],
    ["Why misuse is risky", "Its 1- to 2-day half-life means levels accumulate for days, and poison center reports describe rapid heart rate, chest pain and low potassium"]], refs: [98, 450, 451, 452],
    note: "No trial has given clenbuterol for fat loss, at any dose or for any duration." },
  t3: { source: "FDA label", evidence: "established", refs: [95], rows: [
    ["Hypothyroidism", "Started at 25 µg daily and adjusted in 12.5 to 25 µg steps based on blood tests and symptoms"],
    ["Boxed warning", "The label states thyroid hormones must not be used for obesity or weight loss, alone or with other agents"],
    ["Why", "In people with normal thyroid function, amounts large enough to cause weight loss can cause serious or life-threatening toxicity"]] },
  resmetirom: { source: "FDA label", evidence: "established", rows: [
    ["MASH with fibrosis", "80 mg or 100 mg once daily, chosen by body weight"], ["Duration in trial", "52 weeks to the biopsy endpoint"]], refs: [89] },
  ephedrine: { source: "Published trials", evidence: "human rct", refs: [91, 463, 464, 465], rows: [
    ["Trial regimen", "Ephedrine 20 mg with caffeine 200 mg, three times daily, alongside an energy-restricted diet"],
    ["Duration studied", "24 weeks"],
    ["Longest trial", "In a 6-month trial, a herbal preparation delivering about 90 mg ephedrine alkaloids and 192 mg caffeine daily was given"],
    ["What the trials produced", "About 0.9 kg per month of weight loss beyond placebo, pooled across trials"],
    ["Context", "Ephedra supplements were banned in the US in 2004; ephedrine itself remains approved for other uses"]],
    note: "No trial has run beyond six months, so nothing is known about longer use." },
  yohimbine: { source: "Published trial", evidence: "human rct", refs: [462], rows: [
    ["Trial regimen", "In a 21-day trial in 20 trained men, 20 mg daily was given in two divided doses"],
    ["No approved label", "There is no current FDA-approved yohimbine product"]],
    note: "One small trial is the only published human dosing for this purpose. Supplement products are often mislabeled, so the amount stated on a product is not a dose." },
  tesofensine: { source: "Phase 2 trial (TIPO-1)", evidence: "human rct", refs: [92, 467], rows: [
    ["Trial arms", "0.25, 0.5 or 1.0 mg daily"], ["Duration studied", "24 weeks"],
    ["Note from the trial", "The 1.0 mg arm was not carried forward because of side effects, and heart rate rose 7.4 beats per minute at 0.5 mg"]],
    note: "This 2008 phase 2 trial is still the only published dosing for weight loss. No published phase 3 result or regulator label was found." },
  meldonium: { source: "Published trial (MILSS I)", evidence: "human rct", refs: [471], rows: [
    ["Trial arms", "In MILSS I, 100, 300, 1,000 or 3,000 mg daily was added to standard therapy in people with stable angina"],
    ["What the trial concluded", "The authors judged 500 mg twice daily the most effective regimen tested"],
    ["Sport", "Prohibited by WADA, and detectable in urine for months after use"]],
    note: "Approved in Latvia and nearby countries for cardiac use; its label dosing is not reproduced here. These are trial doses in people with angina, not athletes." },
  "l-carnitine": { source: "FDA label", evidence: "established", rows: [
    ["Carnitine deficiency", "Oral doses in grams per day, divided with meals; IV dosing is weight-based in dialysis"],
    ["Weight loss", "No approved dose; meta-analyses of supplementation show only small effects"]] },
  dnp: { source: "Historical use (1930s)", evidence: "human obs", refs: [88], rows: [
    ["Why no dose is listed", "DNP was withdrawn in 1938 as unfit for human consumption, and no modern dosing exists"],
    ["The core hazard", "Toxic and fatal amounts overlap with amounts taken for weight loss, and there is no antidote"],
    ["Clinical reality", "Deaths continue to be reported, often in young people, from accumulation over several days"]] },

  /* ---------------------------------------------------------- AAS and GH */
  testosterone: { source: "FDA labels", evidence: "established", refs: [78], rows: [
    ["Hypogonadism (cypionate)", "Label dosing is in the range of 50 to 400 mg every 2 to 4 weeks, adjusted to blood levels"],
    ["Gel", "Applied once daily, with the dose titrated to mid-range blood testosterone"],
    ["Trial ceiling", "600 mg weekly for 20 weeks is the highest dose ever given in a controlled trial of healthy men"],
    ["Why that matters", "Any comparison made above 600 mg weekly is extrapolating past the end of the only measured dose-response curve"]] },
  anadrol: { source: "FDA label and published trial", evidence: "established", refs: [220], rows: [
    ["Anemias", "Weight-based dosing, with the label advising the minimum effective amount and a limited course"],
    ["Boxed warning", "The label warns of peliosis hepatis, liver tumors and lipid changes with prolonged use"],
    ["Trial dosing (older men)", "In a 12-week randomized trial in men aged 65 to 80, 50 or 100 mg was given daily; HDL fell by 19 to 23 mg/dL and ALT rose by an average of 72 U/L at 100 mg"]],
    note: "The trial dose is a research record from older men, not an approved dose for any use other than the anemias on the label." },
  anavar: { source: "Withdrawn FDA label", evidence: "established", refs: [41, 42, 43, 44, 222, 223], rows: [
    ["Trial dosing (adult burns)", "10 mg twice daily during acute hospitalization"],
    ["Trial dosing (older men)", "20 mg daily for 12 weeks, which markedly lowered HDL"],
    ["Trial dosing (Turner syndrome, girls)", "In a UK randomized trial, 0.05 mg/kg (maximum 2.5 mg) was given daily alongside growth hormone from age 9 to final height"],
    ["Trial dosing (HIV wasting)", "In a randomized trial in men with HIV wasting, 5 or 15 mg was given daily for 16 weeks"],
    ["Current status", "The FDA withdrew approval of all oxandrolone products in 2023, so no current approved dose exists"]] },
  nandrolone: { source: "FDA label (US nandrolone decanoate, now discontinued) and published trials", evidence: "established", refs: [268, 208, 210], rows: [
    ["Anemia of renal disease, women (label)", "50 to 100 mg per week by deep intramuscular injection"],
    ["Anemia of renal disease, men (label)", "100 to 200 mg per week"],
    ["Children aged 2 to 13 (label)", "An average of 25 to 50 mg every 3 to 4 weeks"],
    ["Label stopping rule", "Stop if the blood count has not improved within the first six months; therapy should be intermittent where possible"],
    ["Trial dosing (dialysis)", "In a randomized trial in dialysis patients, 100 mg was given by intramuscular injection once weekly for 6 months"],
    ["Trial dosing (older women after hip fracture)", "In a randomized trial, 25 mg was given by intramuscular injection every 3 weeks for 6 months, with a protein supplement"]],
    note: "Label text is from the US generic label on DailyMed (revised March 2006); labels in other countries may differ. It remains approved for anemia of kidney disease in several countries, where dosing is set by a physician for that indication. There is no approved dose for muscle building." },
  dianabol: { source: "Published trials", evidence: "human rct", refs: [212, 213], rows: [
    ["Trial dosing (weightlifters)", "In a double-blind crossover trial in 13 weightlifters, 10 or 25 mg was given daily against placebo; systolic blood pressure rose and 3 withdrew with side effects"],
    ["Trial dosing (weightlifters)", "In a double-blind crossover trial in 7 weightlifters, 100 mg was given daily for 6 weeks against placebo"]],
    note: "Small trials from 1975 and 1981. No current approved label exists in the US or most of Europe, so these are records of what trials gave, not dosing guidance." },
  halotestin: { source: "FDA label (Halotestin, discontinued) and published trial", evidence: "established", refs: [269, 216], rows: [
    ["Male hypogonadism (label)", "5 to 20 mg daily, taken once or split into three or four doses"],
    ["Inoperable breast cancer in women (label)", "10 to 40 mg daily in divided doses"],
    ["Label warning sign", "The label names priapism as a sign of excess dose"],
    ["Trial dosing (breast cancer, women)", "In a randomized trial in 238 postmenopausal women with metastatic breast cancer, 10 mg was given twice daily alongside tamoxifen"]],
    note: "Label text is from the Pharmacia and Upjohn label on DailyMed (May 2002 text). US products are now discontinued, so there is no current approved dose." },
  ment: { source: "Published trial", evidence: "human rct", refs: [217], rows: [
    ["Trial dosing (contraception)", "In a randomized dose comparison in 35 healthy men, 1, 2 or 4 subdermal implants were given, each releasing about 400 µg/day at first, for 6 to 12 months"],
    ["Non-responders", "2 of 12 men on 4 implants did not reach azoospermia"]],
    note: "Studied as a contraceptive implant rather than at fixed injected doses, and the program never reached approval. This is a trial record, not guidance; injectable MENT acetate or enanthate has no human trial dose." },
  proviron: { source: "Published trial", evidence: "human rct", refs: [218], rows: [
    ["Trial dosing (male infertility)", "In a WHO double-blind, placebo-controlled trial in unexplained male infertility, 75 or 150 mg was given daily for 6 months, with no significant benefit over placebo"]],
    note: "Approved outside the US for hypogonadism and male infertility, where dosing is set by a physician. Those labels are not reproduced here." },
  winstrol: { source: "Published studies", evidence: "human obs", refs: [214, 215], rows: [
    ["Hereditary angioedema (long-term cohort)", "In a 20- to 40-year follow-up of 21 patients, minimal effective starting doses were 0.5 to 2 mg daily, reduced as attacks fell"],
    ["Trial dosing (lipid study)", "In a randomized crossover trial in 11 weightlifters, 6 mg was given daily for 6 weeks; HDL fell by a third"]],
    note: "US human products were discontinued in 2010 and the old label is not reproduced here. These are records of what studies gave, not dosing guidance." },
  "growth-hormone": { source: "FDA label (Genotropin) and trials", evidence: "established", refs: [305, 47, 49, 81, 300], rows: [
    ["Adult GH deficiency", "Weight- or non-weight-based daily subcutaneous dosing, titrated to IGF-1 within the normal range"],
    ["Non-weight-based start (Genotropin)", "About 0.2 mg/day (range 0.15 to 0.30 mg/day), raised gradually every 1 to 2 months by about 0.1 to 0.2 mg/day"],
    ["Weight-based start (Genotropin)", "Not more than 0.04 mg/kg/week at the start, increased as tolerated to not more than 0.08 mg/kg/week at 4- to 8-week intervals"],
    ["Route", "The weekly dose is divided into 6 or 7 subcutaneous injections; the label states it must not be given intravenously"],
    ["Healthy-adult research", "Systematic reviews of GH in healthy people found about 2 kg more lean mass, much of it water, with no gain in strength or aerobic capacity"],
    ["Legal note", "In the US, distributing GH for anti-aging or athletic use is a federal offense"]],
    note: "Brands differ: the starting figures are from the Genotropin label. Long-acting weekly products have their own labels and are not interchangeable with daily somatropin." },
  "mk-677": { source: "Published trials", evidence: "human rct", refs: [321, 322, 323, 324], rows: [
    ["Trial regimen", "25 mg daily by mouth for 12 months in healthy older adults"],
    ["Other trials at 25 mg", "Given for 12 months in 563 people with Alzheimer's disease and for 24 weeks after hip fracture"],
    ["Dose-ranging", "2, 10 and 25 mg daily were compared in healthy older people; GH rose with dose, and 25 mg raised 24-hour GH by 97%"],
    ["What it showed", "IGF-1 rose to young-adult levels and fat-free mass rose about 1.1 kg, while fasting glucose rose and insulin sensitivity fell, with no gain in strength or function"],
    ["Stopped trial", "The hip fracture trial was ended early over a heart failure signal"]],
    note: "No country has approved MK-677, and it is prohibited by WADA. These are doses trials gave, not an approved dose." },
  tesamorelin: { source: "FDA labels (Egrifta SV, Egrifta WR) and trials", evidence: "established", refs: [335, 336, 331, 334], rows: [
    ["Egrifta SV (2 mg vial)", "1.4 mg (0.35 mL of reconstituted solution) by subcutaneous injection once daily"],
    ["Egrifta WR (11.6 mg vial)", "1.28 mg (0.16 mL of reconstituted solution) by subcutaneous injection once daily into the abdomen, rotating sites; one vial lasts 7 days and is discarded 7 days after mixing"],
    ["Not interchangeable", "The label states the two products cannot be substituted for each other"],
    ["Original formulation (trials)", "2 mg once daily by subcutaneous injection, in the phase 3 trials and the liver-fat trials"],
    ["Duration in trial", "26 weeks in phase 3, 52 weeks with the safety extension, 12 months in the fatty liver trial"]],
    note: "Older literature refers to 2 mg daily, the strength of the original formulation; the current reformulated products are labeled at 1.4 mg and 1.28 mg." },
  sermorelin: { source: "Published trials (approved product discontinued)", evidence: "human rct", refs: [327, 328, 329], rows: [
    ["Children with GH deficiency", "In the trial behind the original approval, 30 µg/kg was given subcutaneously once daily at bedtime for up to 1 year"],
    ["Older men", "In a 14-day trial, GHRH(1-29) 0.5 mg or 1 mg was given subcutaneously twice daily; only 1 mg twice daily significantly raised GH and IGF-1"],
    ["Longest controlled study in older adults", "10 µg/kg of a GHRH(1-29) analog nightly for 16 weeks"],
    ["Status", "The approved product was discontinued in 2008, so there is no current approved dose"]],
    note: "The two studies in older adults used GHRH(1-29) or a close analog rather than the marketed product. Compounded sermorelin is not an approved product, and none of these regimens was chosen for anti-aging use." },
  "cjc-1295": { source: "Phase 1 trial", evidence: "human rct", refs: [16], rows: [
    ["Doses studied", "Single subcutaneous doses of 30 to 250 µg/kg, and repeated doses in a 28-day arm"],
    ["What followed", "GH stayed raised for 6 or more days and IGF-1 for 9 to 11 days; the estimated half-life was 5.8 to 8.1 days"],
    ["Status", "Clinical development stopped in 2006, so no dose was established for any use"]],
    note: "These doses were chosen to measure hormone response in a phase 1 setting, not because any was shown to be safe or effective over time." },
  ipamorelin: { source: "Phase 2 and phase 1 trials", evidence: "human rct", refs: [15, 306], rows: [
    ["Trial regimen", "0.03 mg/kg intravenously twice daily for up to 7 days after bowel resection"],
    ["Phase 1 doses", "Single intravenous infusions of 4.21 to 140.45 nmol/kg over 15 minutes in healthy men"],
    ["Outcome", "The phase 2 trial missed its primary endpoint, and development for that use ended; the phase 1 work measured only GH release"],
    ["What is not established", "No published human study used subcutaneous dosing, dosing beyond 7 days, or any dose chosen for body composition"]] },
  "ghrp-2": { source: "Diagnostic use approved in Japan, and published trials", evidence: "human rct", refs: [313, 311, 314], rows: [
    ["Diagnostic test", "A single 100 µg intravenous dose, with GH sampled over the next 2 hours; GH peaks within 60 minutes"],
    ["Appetite study", "In healthy men, 1 µg/kg/h was given subcutaneously for 270 minutes"],
    ["Critical illness study", "1 µg/kg/h by continuous infusion for 5 days"],
    ["What is not established", "No published human study gave GHRP-2 repeatedly for weeks, and no dose exists for body composition"]],
    note: "The Japanese approval covers a single-use diagnostic test for growth hormone deficiency, not treatment." },
  "ghrp-6": { source: "Published pharmacology studies", evidence: "human rct", refs: [309, 310], rows: [
    ["Doses studied", "Single intravenous doses of 0.05 to 2.5 µg/kg, infused over 30 minutes or given as a bolus"],
    ["GH response", "GH rose consistently from 0.25 µg/kg upward, peaking around 45 minutes and back to baseline by about 210 minutes"],
    ["Other hormones", "Prolactin and cortisol rose only at 1 µg/kg, not at lower doses"],
    ["What is not established", "No published human study gave repeated doses or used the subcutaneous route"]],
    note: "These are single-dose experiments from 1989 and 1990. No human study has tested a regimen." },
  hexarelin: { source: "Published trials", evidence: "human rct", refs: [315, 316, 319], rows: [
    ["Single-dose studies", "1 and 2 µg/kg intravenously, 1.5 and 3 µg/kg subcutaneously, 20 µg/kg intranasally, and 20 and 40 mg by mouth, in healthy volunteers"],
    ["Longest regimen", "1.5 µg/kg subcutaneously twice daily for 16 weeks"],
    ["What that regimen produced", "The GH response fell by about 45% by week 16, and IGF-1, body fat, lean mass and bone density did not change"],
    ["Cardiac study", "A single 2.0 µg/kg intravenous dose during bypass surgery"],
    ["Bioavailability", "77% subcutaneously, 4.8% intranasally, 0.3% by mouth"]],
    note: "The 16-week regimen is the longest published human exposure to any GHRP, and its result was negative on every downstream measure." },

  /* ---------------------------------------------------------- SARMs */
  ostarine: { source: "Phase 2 trials", evidence: "human rct", refs: [230, 231, 232], rows: [
    ["Doses studied", "0.1 to 3 mg daily"], ["Longest arms", "86 to 113 days"],
    ["Findings at 3 mg", "About 1.3 kg more lean mass, alongside dose-dependent falls in HDL, SHBG and testosterone"],
    ["Highest human doses (breast cancer trial)", "In a randomized phase 2 trial in women with advanced breast cancer, 9 or 18 mg was given daily; raised liver enzymes and high calcium were among the serious drug-related events"],
    ["Status", "Not approved anywhere; later phase 3 trials missed their co-primary endpoints"]],
    note: "Not approved and prohibited in sport. These are doses trials gave, not dosing guidance." },
  "lgd-4033": { source: "Phase 1 trial", evidence: "human rct", refs: [234], rows: [
    ["Doses studied", "0.1, 0.3 or 1.0 mg daily"], ["Duration studied", "21 days"],
    ["Findings at 1.0 mg", "About 1.2 kg more lean mass, with testosterone, SHBG, FSH and HDL all suppressed within 3 weeks"]] },
  "rad-140": { source: "Phase 1 trial (breast cancer)", evidence: "human obs", refs: [236], rows: [
    ["Human trials", "Its only human dosing comes from oncology trials, not muscle or performance studies"],
    ["Doses studied", "In an open-label phase 1 dose-escalation study in 22 women with metastatic breast cancer, 50, 100 or 150 mg was given once daily"],
    ["Maximum tolerated dose", "100 mg daily; raised liver enzymes were the most common adverse event"],
    ["Half-life", "About 45 hours"],
    ["Safety signal", "Several published case reports describe liver injury from products sold as RAD-140"]],
    note: "Never approved. No muscle or performance trial has been published, so there is no human dose for that use; the cancer-trial doses are a research record, not guidance." },

  /* ---------------------------------------------------------- PCT and fertility */
  anastrozole: { source: "FDA label and published trials in men", evidence: "established", refs: [240, 241, 242], rows: [
    ["Breast cancer", "1 mg once daily"], ["Use in men", "Off-label; no approved dose exists, and over-suppression of estradiol causes joint pain, low libido and bone loss"],
    ["Trial dosing (older men)", "In randomized trials in older men with low testosterone, 1 mg daily or 1 mg twice weekly was given for 12 weeks, and 1 mg daily for 1 year; spine bone density fell over the year"],
    ["Trial dosing (boys, gynecomastia)", "In a randomized trial, 1 mg was given daily for 6 months and was no better than placebo"]] },
  letrozole: { source: "FDA label and published trial", evidence: "established", refs: [248], rows: [
    ["Breast cancer", "2.5 mg once daily"], ["Potency note", "It suppresses estradiol by more than 95%, which makes crashing estrogen easy"],
    ["Trial dosing (healthy men)", "In a placebo-controlled crossover study in young and older men, 2.5 mg was given daily for 28 days"]],
    note: "Use in men and for ovulation induction is off-label in the US." },
  exemestane: { source: "FDA label and published trial", evidence: "established", refs: [245], rows: [
    ["Breast cancer", "25 mg once daily after a meal"], ["Absorption", "A fatty meal increases how much is absorbed"],
    ["Trial dosing (young men)", "In a randomized crossover study in healthy males aged 14 to 26, 25 or 50 mg was given daily for 10 days; both lowered estradiol about equally"]] },
  tamoxifen: { source: "FDA label and published trials in men", evidence: "established", refs: [243, 249], rows: [
    ["Breast cancer", "20 to 40 mg daily, with doses above 20 mg split"],
    ["Use in men", "Gynecomastia and testosterone restart are off-label; no approved male dose exists"],
    ["Pharmacogenetics", "CYP2D6 converts it to its active form, so strong CYP2D6 inhibitors blunt it"],
    ["Trial dosing (preventing antiandrogen gynecomastia)", "In a randomized trial in men on bicalutamide, 20 mg was given daily for 48 weeks"],
    ["Trial dosing (established gynecomastia)", "In a double-blind crossover trial in 10 men, 10 mg was given twice daily for 1 month"]],
    note: "Off-label in men. No trial of tamoxifen for recovery after anabolic steroid use was found." },
  raloxifene: { source: "FDA label and published trial", evidence: "established", refs: [251], rows: [
    ["Osteoporosis", "60 mg once daily"], ["Gynecomastia", "Off-label; evidence is limited to small retrospective studies"],
    ["Trial dosing (older men)", "In a randomized trial in healthy men aged 60 to 70, 120 mg was given daily for 3 months, twice the osteoporosis label dose; PSA rose 17%"]] },
  enclomiphene: { source: "Phase 3 trials", evidence: "human rct", refs: [260], rows: [
    ["Doses studied", "12.5 and 25 mg daily"], ["Duration studied", "16 weeks"],
    ["What it showed", "Testosterone rose into the normal range while sperm concentration was maintained, unlike with topical testosterone"],
    ["Status", "Not approved; the FDA declined it and the EMA rejected it"]] },
  hcg: { source: "FDA label (chorionic gonadotropin) and published trial", evidence: "established", refs: [266, 261], rows: [
    ["Hypogonadotropic hypogonadism in males, regimen 1 (label)", "500 to 1,000 USP units three times a week for three weeks, then the same dose twice a week for three weeks"],
    ["Hypogonadotropic hypogonadism in males, regimen 2 (label)", "4,000 USP units three times weekly for six to nine months, then 2,000 USP units three times weekly for three more months"],
    ["Route", "Intramuscular only, per the label"],
    ["FDA warning", "The label states HCG has no proven value for weight loss"],
    ["Trial dosing (alongside testosterone)", "In a randomized trial in 29 healthy men on testosterone enanthate 200 mg weekly, 125, 250 or 500 IU was given every other day for 3 weeks; it measured testicular testosterone, not sperm output"]],
    note: "The label describes these regimens as advocated by various authorities. Use alongside testosterone or anabolic steroids is off-label." },
  hmg: { source: "UK SmPC (Menopur)", evidence: "established", refs: [267], rows: [
    ["Hypogonadotrophic hypogonadism in men (UK)", "After stimulation with hCG 1,000 to 2,000 IU two to three times a week, menotrophin 75 or 150 IU FSH with 75 or 150 IU LH two or three times weekly"],
    ["Duration (UK)", "At least 3 or 4 months"],
    ["US label", "The US Menopur label covers women only"]],
    note: "A fertility medicine dosed by a specialist and adjusted to hormone monitoring, so the label figures are a framework rather than a fixed dose. Per the UK SmPC (revision dated 3 June 2026), men with primary testicular failure are usually unresponsive." },
  kisspeptin: { source: "Published research studies", evidence: "human rct", refs: [271, 272, 276, 273, 274], rows: [
    ["Kisspeptin-54, men", "In a placebo-controlled crossover study in 6 healthy men, 4 pmol/kg/min was given intravenously for 90 minutes"],
    ["Kisspeptin-10, men (bolus)", "In a dose-response study, intravenous boluses of 0.01 to 3.0 µg/kg were given; LH rose fastest at 1 µg/kg and less at 3 µg/kg"],
    ["Kisspeptin-10, men (repeated)", "In a randomized placebo-controlled study, 150 nmol/h was given subcutaneously for 8 hours daily for 12 days and kept LH raised; continuous infusion at 180 nmol/h lost its effect on LH and FSH by day 5"],
    ["Kisspeptin-54, IVF trigger", "In IVF studies, a single subcutaneous injection of 1.6 to 12.8 nmol/kg was given to trigger egg maturation"]],
    note: "No approved product or label exists. These are research doses from short studies, not dosing guidance." },

  /* ---------------------------------------------------------- hair and skin */
  finasteride: { source: "FDA label", evidence: "established", refs: [32, 82], rows: [
    ["Male pattern hair loss", "1 mg once daily (Propecia)"], ["Enlarged prostate", "5 mg once daily (Proscar)"],
    ["Topical, where approved", "A 0.25% spray matched oral 1 mg on hair counts in phase 3, with lower blood levels"],
    ["Handling", "Pregnant people should not handle broken or crushed tablets"]] },
  dutasteride: { source: "FDA label and trial", evidence: "established", rows: [
    ["Enlarged prostate", "0.5 mg once daily"],
    ["Hair loss", "0.5 mg daily beat finasteride 1 mg on hair count in a 24-week trial; approved for hair in Japan and South Korea, off-label elsewhere"],
    ["Long tail", "Its 5-week half-life means effects persist for months after stopping"]] },
  minoxidil: { source: "FDA label and trials", evidence: "established", refs: [31, 710], rows: [
    ["Topical", "1 mL of 2% or 5% solution twice daily, or 5% foam once or twice daily"],
    ["Trial finding", "5% produced about 45% more regrowth than 2% at 48 weeks, with more itching and irritation"],
    ["Oral", "Low-dose oral use for hair is off-label; the approved oral product is for severe hypertension"],
    ["Oral, as tested against topical", "In a 24-week randomized trial in men, 5 mg was given by mouth once daily; this is a trial dose, not a label dose for hair"],
    ["Cat warning", "Residue on skin or bedding is highly toxic to cats"]] },
  clascoterone: { source: "FDA label", evidence: "established", rows: [
    ["Acne (Winlevi)", "1% cream applied twice daily to affected areas"],
    ["Hair loss", "A higher-strength solution is still in trials and is not approved"]] },
  "tri-blend-topical": { source: "Component labels and trials", evidence: "human rct", refs: [31, 33, 82], rows: [
    ["Why no combined dose", "No trial has tested minoxidil, RU-58841 and finasteride together, so there is no studied dose for the blend"],
    ["Minoxidil component", "The labeled strengths are 2% and 5%; this product's 10% is above any approved strength"],
    ["Finasteride component", "At 0.05% it is one-fifth the 0.25% strength tested in phase 3"],
    ["RU-58841 component", "Never completed a human trial, so no human dose exists at all"]] },
  ketoconazole: { source: "FDA label (ketoconazole 2% shampoo)", evidence: "established", refs: [713, 712], rows: [
    ["Labeled use (tinea versicolor)", "Applied to damp skin over the affected area and a wide margin around it, lathered, left for 5 minutes and rinsed; the label says one application should be enough"],
    ["Hair loss", "No label dose. The comparative study used 2% shampoo, and its abstract does not say how often"]],
    note: "The shampoo label is for a skin infection, not hair loss. Oral ketoconazole carries a boxed warning for liver injury and is not used for hair." },
  pyrilutamide: { source: "Trial registry", evidence: "human rct", refs: [719], rows: [
    ["In trials", "0.5% or 1.0% solution, about 1 mL (7 sprays) to the scalp twice daily"]],
    note: "Not approved anywhere, and no phase 3 result has been published in a peer-reviewed journal. These are the doses the trials gave." },
  topilutamide: { source: "Published trial", evidence: "human rct", refs: [720], rows: [
    ["In the trial", "2% fluridil applied to the scalp; the abstract does not say how often"]],
    note: "Registered as a cosmetic in the Czech Republic (Eucapil) and used as directed on the product label. No regulator has reviewed a drug label for it." },
  pp405: { source: "Trial registry", evidence: "human rct", refs: [722], rows: [
    ["In phase 2a", "0.05% gel applied to the scalp once daily for 4 weeks"]],
    note: "Investigational and not approved. This is the trial dose only; no results have been posted to the registry or peer reviewed." },
  sm04554: { source: "Trial registry results", evidence: "human rct", refs: [724, 725], rows: [
    ["In trials", "0.15% or 0.25% topical solution, applied once a day at about the same time"]],
    note: "Not approved. Neither strength beat placebo in the posted results." },
  "melanotan-2": { source: "Published trials", evidence: "human rct", refs: [734, 736], rows: [
    ["Pilot study (3 men)", "0.01 to 0.03 mg/kg by subcutaneous injection"],
    ["Erectile dysfunction trial", "0.025 mg/kg by subcutaneous injection"]],
    note: "Never approved. These are the only doses trials gave, in about two dozen men in total. Products sold online are unregulated." },

  /* ---------------------------------------------------------- health and support */
  rosuvastatin: { source: "FDA label", evidence: "established", refs: [729, 743, 744, 745], rows: [
    ["High cholesterol", "5 to 40 mg once daily; 40 mg is reserved for people who do not reach goal on 20 mg"],
    ["Asian patients (label)", "Started at 5 mg once daily, because blood levels run higher"],
    ["Severe kidney impairment, not on dialysis (label)", "Started at 5 mg, and not more than 10 mg once daily"],
    ["Trial regimen", "20 mg daily in JUPITER, which cut major cardiovascular events by about 44%"],
    ["Other outcome trials", "10 mg daily in HOPE-3, CORONA and AURORA"]] },
  pitavastatin: { source: "FDA label", evidence: "established", rows: [
    ["High cholesterol", "1 to 4 mg once daily"], ["Trial regimen", "4 mg daily in REPRIEVE, over a median 5.1 years"]] },
  ezetimibe: { source: "FDA label", evidence: "established", rows: [["High cholesterol", "10 mg once daily, alone or with a statin"],
    ["With a bile acid sequestrant", "Taken at least 2 hours before or 4 hours after the sequestrant"]] },
  telmisartan: { source: "FDA label", evidence: "established", refs: [798, 754], rows: [
    ["Hypertension", "20 to 80 mg once daily; the current label's usual starting dose is 40 mg"],
    ["Cardiovascular risk reduction", "80 mg once daily, the dose used in ONTARGET and TRANSCEND"],
    ["Note", "Contraindicated in pregnancy"]] },
  nebivolol: { source: "FDA label", evidence: "established", rows: [
    ["Hypertension", "Usually started at 5 mg once daily and titrated up to 40 mg"],
    ["Stopping", "Abrupt discontinuation can cause rebound tachycardia, so beta blockers are tapered"]] },
  propranolol: { source: "FDA label", evidence: "established", refs: [796, 759], rows: [
    ["Hypertension and angina", "Divided daily dosing, titrated to response"],
    ["Hypertension (label figures)", "40 mg twice daily to start; usual maintenance 120 to 240 mg a day"],
    ["Migraine prevention (label)", "80 mg a day in divided doses to start; usual range 160 to 240 mg a day. Stopped, with a taper over several weeks, if there is no response within 4 to 6 weeks at the maximum dose"],
    ["After a heart attack (BHAT trial)", "180 or 240 mg a day"],
    ["Performance anxiety", "Off-label; no approved dose exists for this use"],
    ["Contraindication", "Avoid in asthma, since it blocks β2 receptors in the airways"]] },
  ondansetron: { source: "FDA label", evidence: "established", rows: [
    ["Nausea and vomiting", "4 to 8 mg per dose, with frequency set by indication"],
    ["Cardiac caution", "Higher doses prolong the QT interval; the 32 mg single IV dose was withdrawn for this reason"]] },
  tropisetron: { source: "European labels (Navoban: France, Italy, Germany) and published trials", evidence: "established", refs: [105, 101, 102], rows: [
    ["Chemotherapy nausea (label)", "5 mg once daily for up to 6 days: intravenously on the day of chemotherapy, then by mouth on the days after"],
    ["Children over 2 (label)", "0.2 mg/kg once daily, up to 5 mg a day, for up to 6 days"],
    ["Postoperative nausea (label)", "2 mg intravenously, by slow injection or infusion, shortly before anaesthesia is induced"],
    ["Schizophrenia trials (off-label)", "5, 10 or 20 mg daily by mouth, for 10 days to 8 weeks"],
    ["Quitting nicotine", "No trial has given tropisetron for this, so there is no dose for it"]],
    note: "Poor CYP2D6 metabolizers, and anyone taking a CYP2D6 inhibitor such as bupropion, reach much higher blood levels from the same dose. The labels set no reduction for the single 2 mg dose, and the French capsule label restricts use to adults from 15." },
  /* ---------------------------------------------------------- dependence and cessation */
  nicotine: { source: "FDA over-the-counter label (replacement therapy)", evidence: "established", refs: [135], rows: [
    ["Patch, more than 10 cigarettes a day", "21 mg/24 h for 6 weeks, then 14 mg for 2 weeks, then 7 mg for 2 weeks"],
    ["Patch, 10 or fewer a day", "14 mg/24 h for 6 weeks, then 7 mg for 2 weeks"],
    ["Gum or lozenge strength", "4 mg if the first cigarette comes within 30 minutes of waking; otherwise 2 mg"],
    ["Gum or lozenge schedule", "One every 1–2 hours in weeks 1–6, every 2–4 hours in weeks 7–9, every 4–8 hours in weeks 10–12. No more than 24 pieces of gum or 20 lozenges a day"],
    ["Pouches and e-liquids", "Consumer products with no dosing label"]],
    note: "The label schedule tapers on purpose. Replacement exists to step the dose and frequency down to zero, not to hold them steady." },
  varenicline: { source: "FDA label", evidence: "established", refs: [112], rows: [
    ["Days 1–3", "0.5 mg once daily"], ["Days 4–7", "0.5 mg twice daily"], ["Day 8 onward", "1 mg twice daily"],
    ["Quit date", "Set about one week after starting, or flexibly between days 8 and 35"],
    ["Duration", "12 weeks, with a further 12 weeks for people who have quit"],
    ["Gradual approach", "For people unwilling to quit abruptly: start varenicline, cut smoking by half within 4 weeks and by half again over the next 4, aiming to stop by week 12, then continue to 24 weeks"],
    ["Severe kidney impairment", "Start 0.5 mg once daily, up to 0.5 mg twice daily; no more than 0.5 mg a day on hemodialysis"]],
    note: "Taken after food with a full glass of water to reduce nausea." },
  cytisine: { source: "UK label (cytisinicline 1.5 mg, the Tabex schedule) and ORCA-2 trial", evidence: "established", refs: [142, 111], rows: [
    ["Days 1–3 (Tabex, 1.5 mg tablets)", "One tablet every 2 hours, six a day"],
    ["Days 4–12", "One every 2.5 hours, five a day"], ["Days 13–16", "One every 3 hours, four a day"],
    ["Days 17–20", "One every 5 hours, three a day"], ["Days 21–25", "One or two a day"],
    ["Quit date", "No later than day 5"],
    ["Course", "25 days, one pack of 100 tablets"],
    ["Not recommended (UK label)", "Over 65, under 18, or with kidney or liver impairment, for lack of data"],
    ["Cytisinicline (ORCA-2 trial)", "3 mg three times daily for 6 or 12 weeks"]] },
  bupropion: { source: "FDA label", evidence: "established", refs: [132], rows: [
    ["Quitting smoking (Zyban, SR)", "150 mg once daily for 3 days, then 150 mg twice daily at least 8 hours apart. Start about a week before the quit date, setting the date within the first 2 weeks, and continue for 7–12 weeks"],
    ["Depression (XL)", "150 mg once each morning, increased to 300 mg after at least 4 days; maximum 450 mg"],
    ["ADHD (off-label trial)", "SR up to 200 mg twice daily in the controlled adult trial"],
    ["Seizure ceiling", "No more than 300 mg a day for quitting smoking (SR) and 450 mg a day for depression (XL). The label reports seizures in about 0.1% at up to 300 mg a day of SR, and about 0.4% at up to 400 mg"]],
    note: "Doses are spaced at least 8 hours apart with the SR form, and the last dose is taken well before bed to limit insomnia." },
  /* ---------------------------------------------------------- ADHD and wakefulness */
  amphetamine: { source: "FDA label", evidence: "established", refs: [125], rows: [
    ["ADHD, IR (Adderall), age 6 and up", "Start 5 mg once or twice daily; increase by 5 mg weekly. Only rarely is more than 40 mg a day needed. First dose on waking, further doses 4–6 hours apart"],
    ["ADHD, XR (Adderall XR), adults", "20 mg once each morning"],
    ["Narcolepsy", "5–60 mg a day in divided doses"],
    ["With a CYP2D6 inhibitor (for example bupropion)", "The Adderall XR label warns this can raise amphetamine exposure and serotonin syndrome risk, and advises considering an alternative drug that does not inhibit CYP2D6"]] },
  lisdexamfetamine: { source: "FDA label", evidence: "established", refs: [126], rows: [
    ["ADHD", "30 mg once each morning; increase by 10–20 mg weekly; maximum 70 mg"],
    ["Binge eating disorder", "Start 30 mg; increase by 20 mg weekly to 50–70 mg"],
    ["Kidney impairment", "Maximum 50 mg a day if severe; 30 mg a day in end-stage disease"]] },
  methylphenidate: { source: "FDA label", evidence: "established", refs: [127], rows: [
    ["IR (Ritalin), adults", "Average 20–30 mg a day in 2–3 doses, 30–45 minutes before meals; maximum 60 mg"],
    ["Extended-release (Concerta), adults", "Start 18 or 36 mg once each morning; maximum 72 mg"],
    ["Dexmethylphenidate (Focalin)", "Half the methylphenidate dose, because it is the active isomer alone"]] },
  atomoxetine: { source: "FDA label", evidence: "established", refs: [128], rows: [
    ["Adults and children over 70 kg", "40 mg a day, increased after at least 3 days to 80 mg; maximum 100 mg"],
    ["With a strong CYP2D6 inhibitor, or poor metabolizers", "Start 40 mg; increase to 80 mg only after 4 weeks if needed"],
    ["Onset", "Full effect can take 4 weeks or more"]] },
  viloxazine: { source: "FDA label", evidence: "established", refs: [129], rows: [
    ["Age 6–11", "100 mg once daily; up to 400 mg"], ["Age 12–17", "200 mg once daily; up to 400 mg"], ["Adults", "200 mg once daily; up to 600 mg"]] },
  guanfacine: { source: "FDA label (Intuniv)", evidence: "established", refs: [130], rows: [
    ["Age 6–17", "Start 1 mg once daily; increase by no more than 1 mg a week. Target 0.05–0.12 mg/kg a day"],
    ["Highest doses evaluated", "4 mg a day at age 6–12 and 7 mg a day at age 13–17; higher doses have not been studied"],
    ["Stopping", "Taper by no more than 1 mg every 3–7 days to avoid rebound high blood pressure"]] },
  modafinil: { source: "FDA label", evidence: "established", refs: [131], rows: [
    ["Narcolepsy or sleep apnea", "200 mg once each morning"],
    ["Shift-work sleepiness", "200 mg about 1 hour before the shift"],
    ["Higher doses", "400 mg a day was tested and gave no consistent extra benefit"],
    ["Armodafinil (Nuvigil)", "150–250 mg once daily"]] },
  naltrexone: { source: "FDA label", evidence: "established", rows: [
    ["Alcohol or opioid dependence", "50 mg once daily by mouth, or a monthly 380 mg intramuscular injection"],
    ["Low-dose naltrexone", "Compounded off-label at a small fraction of the approved dose; evidence is small and mixed"],
    ["Critical warning", "It precipitates immediate withdrawal in anyone currently taking opioids"]] },
  sildenafil: { source: "FDA labels (Viagra, Revatio)", evidence: "established", refs: [740], rows: [
    ["Erectile dysfunction", "50 mg about an hour before sex, adjustable to 25 or 100 mg; at most once daily"],
    ["Pulmonary arterial hypertension (Revatio)", "20 mg three times daily by mouth, up to 80 mg three times daily if needed; 10 mg three times daily intravenously"],
    ["Absolute contraindication", "Never with nitrates"]] },
  tadalafil: { source: "FDA labels (Cialis, Adcirca)", evidence: "established", refs: [799], rows: [
    ["As needed", "10 mg before sex, adjustable to 5 or 20 mg"], ["Once daily", "2.5 or 5 mg, also used for enlarged prostate"],
    ["Pulmonary arterial hypertension (Adcirca)", "40 mg once daily, not divided. Started at 20 mg with mild to moderate kidney impairment, and avoided with severe impairment"],
    ["Absolute contraindication", "Never with nitrates; the Adcirca label says not within 48 hours of the last dose"]] },
  dapoxetine: { source: "Non-US labels", evidence: "established", rows: [
    ["Premature ejaculation", "30 mg 1 to 3 hours before sex, adjustable to 60 mg; not approved in the US"],
    ["Caution", "Fainting is a known risk, worsened by alcohol and dehydration"]] },
  trazodone: { source: "FDA label and trial", evidence: "established", refs: [780], rows: [
    ["Depression (approved)", "Started at 150 mg daily in divided doses, increased by 50 mg a day every 3 to 4 days, up to 400 mg a day for outpatients; taken after a meal or snack, and tapered to stop"],
    ["Insomnia", "Off-label at far lower doses; evidence for insomnia is from small trials"],
    ["Insomnia, as tested", "In a 2-week trial in Alzheimer's disease, 50 mg was given at bedtime"],
    ["Urgent side effect", "Priapism requires immediate medical attention"]] },
  doxepin: { source: "FDA label (Silenor)", evidence: "established", refs: [795], rows: [
    ["Insomnia (Silenor)", "3 or 6 mg once nightly within 30 minutes of bedtime"],
    ["Adults", "6 mg once daily; 3 mg may be enough for some"],
    ["Aged 65 or older", "Started at 3 mg; may increase to 6 mg"],
    ["Timing and limit", "Not within 3 hours of a meal; no more than 6 mg a day"],
    ["Contraindications", "An MAO inhibitor within the past 2 weeks, untreated narrow-angle glaucoma, or severe urinary retention"],
    ["Why so low", "At these doses it acts as a selective histamine blocker; antidepressant doses are many times higher and bring anticholinergic effects"]] },
  pramipexole: { source: "FDA label and trial", evidence: "established", refs: [797, 785], rows: [
    ["Parkinson's and restless legs", "Started very low and titrated slowly"],
    ["Parkinson's disease (label)", "0.125 mg three times daily in week 1, raised weekly to a maximum of 1.5 mg three times daily (4.5 mg a day); reduced in kidney impairment"],
    ["Restless legs (label)", "0.125 mg 2 to 3 hours before bed, raised if needed to 0.25 and then 0.5 mg every 4 to 7 days"],
    ["Treatment-resistant depression, as tested", "In the PAX-D trial, it was titrated to 2.5 mg a day added to an antidepressant; this is not a label use"],
    ["Stopping", "The extended-release label says to taper"],
    ["Serious risk", "Impulse control disorders, including compulsive gambling and hypersexuality, are well documented"]] },
  teriparatide: { source: "FDA label (Forteo)", evidence: "established", refs: [649], rows: [
    ["Osteoporosis", "20 µg once daily by subcutaneous injection, in the thigh or abdomen"],
    ["First doses", "Given where the person can sit or lie down, because of transient drops in blood pressure on standing"],
    ["Duration", "Use beyond 2 years in a lifetime is considered only if fracture risk remains high"],
    ["Route", "Not approved for intravenous or intramuscular use"],
    ["Height claims", "It is contraindicated with open growth plates, and there is no evidence it increases height"]],
    note: "Calcium and vitamin D are added if dietary intake is inadequate." },
  "vitamin-b12": { source: "FDA label (cyanocobalamin injection) and trial", evidence: "established", refs: [662, 660, 661], rows: [
    ["Deficiency", "Injection schedules start with loading doses and move to maintenance, set by cause and severity"],
    ["Pernicious anemia, start (label)", "100 µg daily for 6 to 7 days by intramuscular or deep subcutaneous injection"],
    ["Pernicious anemia, continuing (label)", "Then alternate days for 7 doses, every 3 to 4 days for 2 to 3 weeks, then 100 µg monthly for life"],
    ["By mouth, as tested", "In a 4-month trial, 2 mg cyanocobalamin daily by mouth matched intramuscular injection"],
    ["Route", "The label advises against intravenous use, since almost all of the dose is lost in urine"],
    ["If not deficient", "Replacement corrects deficiency; it does not add energy in people with normal levels"]],
    note: "The label says oral B12 is not dependable in pernicious anemia, but later trials show high-dose oral B12 can work." },
  piracetam: { source: "Non-US labels and trial", evidence: "human rct", refs: [53], rows: [
    ["Myoclonus (where approved)", "Trial dosing was 9.6, 16.8 or 24 g daily, far above amounts used as a nootropic"],
    ["Not approved in the US", "The FDA does not accept it as a lawful supplement ingredient"],
    ["Kidney function", "It is cleared unchanged by the kidneys and needs adjustment when function is reduced"]] },
  "melanotan-1": { source: "EMA and FDA label", evidence: "established", rows: [
    ["Erythropoietic protoporphyria", "A 16 mg controlled-release implant placed about every 2 months"],
    ["Not the injectable", "Injectable \"Melanotan I\" sold online is a different, unregulated product"]] },
  bremelanotide: { source: "FDA label", evidence: "established", refs: [24], rows: [
    ["HSDD in premenopausal women", "1.75 mg by subcutaneous autoinjector, as needed"],
    ["Limits", "No more than one dose in 24 hours and no more than eight per month"]] },
  "thymosin-alpha-1": { source: "Non-US labels and published trials", evidence: "human rct", refs: [23, 621, 622, 624], rows: [
    ["Chronic hepatitis B, where approved", "Twice-weekly subcutaneous injection"],
    ["Chronic hepatitis B trials", "1.6 mg subcutaneously twice weekly for 26 weeks; one arm continued for 52 weeks"],
    ["Sepsis trial (TESTS)", "Subcutaneous injection every 12 hours for 7 days. This large trial found no mortality benefit, overturning earlier optimism"],
    ["Metastatic melanoma trial", "1.6, 3.2 or 6.4 mg per dose added to chemotherapy; the schedule is not reported"]],
    note: "National labels where thymalfasin is approved were not reviewed here, so the doses listed are trial regimens. It is not FDA approved." },
  "ss-31": { source: "FDA label (Forzinity, accelerated approval)", evidence: "established", refs: [633, 630, 631], rows: [
    ["Barth syndrome, 30 kg or more", "40 mg subcutaneously once daily, at the same time each day"],
    ["eGFR under 30 mL/min, not on dialysis", "20 mg subcutaneously once daily"],
    ["On dialysis, or children with kidney impairment", "No dose recommended; data are insufficient"],
    ["Missed dose", "Skipped, with the next dose taken at the usual time; doses are not doubled"],
    ["Other uses", "Trials in mitochondrial myopathy and heart failure missed their primary endpoints"]],
    note: "Approved only for Barth syndrome in patients weighing at least 30 kg." },
  "nsi-189": { source: "Phase 2 trial", evidence: "human rct", refs: [63], rows: [
    ["Trial arms", "40 mg or 80 mg daily"], ["Duration studied", "12 weeks"],
    ["Outcome", "It missed its primary endpoint on the MADRS depression scale"]] },
  "prl-8-53": { source: "Single 1978 study", evidence: "human rct", refs: [58], rows: [
    ["Dose studied", "A single 5 mg oral dose"],
    ["Caveat", "This one study, run by the compound's inventor, has never been independently replicated, and nothing is known about repeated use"]] },

  /* ---------------------------------------------------------- nootropics and CNS */
  semax: { source: "Russian clinical studies", evidence: "human obs", refs: [503, 502], rows: [
    ["Acute stroke study (1997)", "12 mg a day (moderate stroke) or 18 mg a day (severe stroke) given intranasally for 5 or 10 days"],
    ["Stroke recovery study (2018)", "Two 10-day courses of 6,000 µg a day, 20 days apart"]],
    note: "Approved in Russia as a nasal spray; its Russian label dosing is not reproduced here. These doses come from non-randomized stroke studies and say nothing about use in healthy people." },
  aniracetam: { source: "Dementia trial", evidence: "human rct", refs: [507], rows: [
    ["Dose studied", "1 g a day by mouth for 3 months, in older people with Alzheimer-type dementia"]],
    note: "That trial found no benefit over placebo. No regulator has approved aniracetam in the US or EU." },
  oxiracetam: { source: "Clinical trials", evidence: "human rct", refs: [509, 510, 511], rows: [
    ["Post-stroke trial (Korea)", "800 mg twice daily by mouth for 36 weeks; no benefit over placebo"],
    ["Brain injury trial (China, LOCATE)", "Oxiracetam 6 g a day, with a separate L-oxiracetam arm at 4 g a day; treatment length not reported"]],
    note: "Marketed in Italy in the past and used as an injection in China; no English-language regulatory label is available, so these are trial doses only." },
  pramiracetam: { source: "Published trials", evidence: "human rct", refs: [513, 512], rows: [
    ["Healthy-volunteer study", "600 mg twice daily by mouth for 10 days, in a scopolamine-challenge study"],
    ["Alzheimer's trial", "Up to 4,000 mg a day, with no reproducible benefit"]],
    note: "Never approved in the US or EU. These are study doses, not an established dose." },
  nefiracetam: { source: "Post-stroke trials", evidence: "human rct", refs: [514, 515, 516], rows: [
    ["Doses studied", "600 mg or 900 mg a day by mouth"], ["Longest duration", "12 weeks"]],
    note: "Not approved anywhere. The trials were negative on their primary endpoints." },
  noopept: { source: "Russian clinical study", evidence: "human obs", refs: [520], rows: [
    ["Dose studied", "20 mg a day by mouth for 2 months, in stroke patients with mild cognitive impairment"]],
    note: "Prescribed in Russia; its Russian label dosing is not reproduced here. This open study had no placebo group. The FDA does not accept noopept as a lawful supplement ingredient." },
  bromantane: { source: "Russian clinical studies", evidence: "human obs", refs: [522, 523], rows: [
    ["Multicentre study", "50 to 100 mg a day for 28 days, in an open study without a control group"],
    ["Placebo-controlled study", "Single test doses of 15 mg"]],
    note: "Prescribed in Russia as Ladasten; its Russian label dosing is not reproduced here. Bromantane is prohibited in sport." },
  emoxypine: { source: "Stroke trial (EPICA)", evidence: "human rct", refs: [527], rows: [
    ["Trial regimen", "500 mg a day by intravenous infusion for 10 days, then 125 mg three times a day by mouth for 8 weeks"]],
    note: "Prescribed in Russia as Mexidol; its Russian label dosing is not reproduced here. This is a trial dose in ischemic stroke." },
  nemifitide: { source: "Pilot trial", evidence: "human rct", refs: [532], rows: [
    ["Dose studied", "0.2 mg/kg subcutaneously once a day for 5 days, in major depression"]],
    note: "One small pilot. Development stopped and no dose was established." },
  taltirelin: { source: "Phase 4 trial (Korea)", evidence: "human rct", refs: [539], rows: [
    ["Trial regimen", "5 mg by mouth twice daily after meals for 24 weeks, in spinocerebellar degeneration"]],
    note: "Approved in Japan as Ceredist; its Japanese label dosing is not reproduced here. The trial paper states its dose was approved by the Korean regulator." },
  "methylene-blue": { source: "Clinical trials", evidence: "human rct", refs: [546, 548, 550], rows: [
    ["Bipolar depression trial", "195 mg a day by mouth for 6 months, against 15 mg a day as the comparison"],
    ["Claustrophobia trial", "A single 260 mg dose by mouth straight after an exposure session"]],
    note: "Trial doses only. The only approved dose is the intravenous antidote dose for methemoglobinemia (1 mg/kg on the FDA label); there is no approved dose for cognitive or energy use." },
  "tak-653": { source: "Healthy-volunteer study", evidence: "human rct", refs: [517], rows: [
    ["Doses studied", "Single oral doses of 0.5 mg and 6 mg, against placebo, in 24 healthy volunteers"],
    ["Depression trials", "The doses used in the phase 2 depression trial have not been published"]],
    note: "A single-dose study of brain effects, not an efficacy trial. TAK-653 is not approved." },
  "aod-9604": { source: "Published trials", evidence: "human rct", refs: [345], rows: [
    ["Phase 1, intravenous", "Single doses of 25 to 400 µg/kg in 15 healthy men"],
    ["Phase 2a, intravenous", "Single doses of 25, 50 and 100 µg/kg in 23 men with obesity"],
    ["Phase 2a, oral", "9, 27 and 54 mg as single doses, then 9, 27 or 54 mg daily for 7 days"],
    ["Phase 2b (300 patients)", "1, 5, 10, 20 or 30 mg daily by capsule for 12 weeks"],
    ["Phase 2b (502 patients)", "0.25, 0.5 or 1 mg daily by tablet for 24 weeks"],
    ["Outcome", "No significant difference from placebo, and development for obesity ended"],
    ["Never tested", "Subcutaneous injection, the route in which it is sold today"]],
    note: "The doses come from a pooled safety paper covering six company-run trials; the efficacy results were never fully published." },
  "ace-031": { source: "Published trials", evidence: "human rct", refs: [349, 350], rows: [
    ["Trial design", "Single ascending subcutaneous doses of 0.02 to 3 mg/kg in 48 healthy postmenopausal women; the 3 mg/kg group showed a lean mass change"],
    ["Half-life", "10 to 15 days"],
    ["Duchenne trial", "Subcutaneous doses every 2 to 4 weeks, at ascending doses"],
    ["Why it stopped", "A later trial in boys with muscular dystrophy was halted over nosebleeds, gum bleeding and dilated blood vessels"]],
    note: "Never approved; no dose was established for any use." },
  ecdysterone: { source: "Published trials", evidence: "human rct", refs: [472, 473], rows: [
    ["Trial regimen", "Ecdysterone-containing supplements over 10 weeks of training"],
    ["Why no amount is listed", "Product analysis in both published trials found content far below the label, so labeled amounts do not describe what anyone received"],
    ["Caveat", "Many commercial products were found to contain far less than labeled, and the finding needs replication"]] },

  /* ---------------------------------------------------------- repair, immune and longevity */
  "bpc-157": { source: "Uncontrolled human pilot studies", evidence: "human obs", refs: [600, 602, 604], rows: [
    ["Interstitial cystitis pilot (12 women)", "10 mg in total, injected into the bladder wall once during cystoscopy"],
    ["Intravenous safety pilot (2 adults)", "10 mg in 250 mL saline over 1 hour, then 20 mg the next day"]],
    note: "These are the only doses a published human study is known to have given. Neither study had a control group, so neither shows that a dose is effective or safe. A knee injection study did not report its dose, and a registered oral phase 1 trial from 2015 has never reported results." },
  "nad-plus": { source: "Published trials (precursors and intravenous NAD+)", evidence: "human rct", refs: [634, 636, 635, 637], rows: [
    ["Nicotinamide riboside", "1,000 mg a day by mouth for 6 weeks in healthy older adults, and for 30 days in Parkinson's disease"],
    ["NMN", "250 mg a day by mouth for 10 weeks in women with prediabetes"],
    ["Intravenous NAD+", "3 µmol/min for 6 hours in a metabolic pilot without a control group"]],
    note: "These doses raised NAD+ levels. None has been shown to produce a clinical benefit, and wellness-clinic intravenous protocols have no trial basis." },
  glutathione: { source: "Published trials", evidence: "human rct", refs: [657, 658, 659], rows: [
    ["By mouth, body stores", "250 or 1,000 mg a day for 6 months"],
    ["By mouth, skin lightening", "500 mg a day in two doses for 4 weeks"],
    ["Intravenous, Parkinson's disease", "1,400 mg three times a week for 4 weeks; no benefit over placebo"]],
    note: "No regulator has approved a glutathione dose for skin lightening, detoxification or general health." },
  vip: { source: "Published trials", evidence: "human rct", refs: [655, 652], rows: [
    ["Erectile dysfunction (injection into the penis)", "VIP 25 µg with phentolamine 1 or 2 mg per injection"],
    ["COVID-19 respiratory failure (intravenous)", "12-hour infusions on 3 consecutive days at 600, 1,200 and 1,800 pmol/kg; no benefit"]],
    note: "The erectile dysfunction combination is approved in some countries; its national label was not reviewed, so these are trial doses. No trial supports injected or nasal VIP for other uses." },
  "ara-290": { source: "Phase 2 trials", evidence: "human rct", refs: [642, 643], rows: [
    ["Trial regimen", "Daily subcutaneous injection for 28 days in sarcoidosis-related small fiber neuropathy"],
    ["Sarcoidosis doses", "1, 4 or 8 mg once daily; only 4 mg met the nerve fiber endpoint"],
    ["Type 2 diabetes with neuropathy", "4 mg subcutaneously once daily for 28 days"]],
    note: "No trial has given more than 28 days of dosing, and no regulator has approved a dose." },
  "ll-37": { source: "Phase 1/2 and phase 2b trials (topical only)", evidence: "human rct", refs: [650, 651], rows: [
    ["Trial design", "Topical application to venous leg ulcers over 4 weeks"],
    ["First-in-human trial", "0.5, 1.6 or 3.2 mg/mL applied to the ulcer twice weekly for 4 weeks"],
    ["Phase 2b trial", "0.5 or 1.6 mg/mL with compression therapy"],
    ["Finding", "Lower concentrations improved healing; the highest did not. Neither strength beat placebo overall in the phase 2b trial"]],
    note: "Topical use on wounds only. No injected dose has been studied in humans." }
};
