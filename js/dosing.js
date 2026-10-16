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
  retatrutide: { source: "Phase 2 trial", evidence: "human rct", refs: [8], rows: [
    ["Trial arms", "1, 4, 8 or 12 mg weekly, reached by escalation over several weeks"],
    ["Duration studied", "48 weeks"]],
    note: "Phase 2 only. No label exists, and the dose for approval has not been set." },
  cagrilintide: { source: "Phase 3 trial (REDEFINE 1)", evidence: "human rct", rows: [
    ["Trial arms", "2.4 mg weekly, alone or with semaglutide 2.4 mg weekly"], ["Duration studied", "68 weeks"]] },
  mazdutide: { source: "Phase 3 trial (GLORY-1)", evidence: "human rct", rows: [
    ["Trial arms", "4 mg or 6 mg weekly"], ["Duration studied", "48 weeks"]],
    note: "Approved in China; its Chinese label is the authority there." },
  survodutide: { source: "Phase 2 trial", evidence: "human rct", rows: [
    ["Trial arms", "Escalated weekly doses up to 6 mg"], ["Duration studied", "48 weeks"]] },
  orforglipron: { source: "Phase 3 trial (ATTAIN-1)", evidence: "human rct", rows: [
    ["Trial arms", "Up to 36 mg daily by mouth"], ["Duration studied", "72 weeks"],
    ["Administration", "Taken with or without food, unlike oral semaglutide"]] },
  metformin: { source: "FDA label", evidence: "established", rows: [
    ["Type 2 diabetes", "Typically started at 500 mg once or twice daily with meals and increased gradually; maximum 2,550 mg daily for immediate-release"],
    ["Why it escalates", "Slow increases reduce the diarrhea and nausea that otherwise cause people to stop"]] },
  gw501516: { source: "Phase 1 trials", evidence: "human rct", refs: [64, 65], rows: [
    ["Doses studied", "2.5 to 10 mg daily"], ["Longest study", "2 weeks"]],
    note: "Development was abandoned after rodent carcinogenicity findings, so these short phase 1 exposures are the only human dosing on record." },
  "atx-304": { source: "Phase 2a trial", evidence: "human rct", refs: [72], rows: [
    ["Trial design", "Added to metformin in type 2 diabetes"], ["Duration studied", "28 days"]] },

  /* ---------------------------------------------------------- fat loss */
  mirabegron: { source: "FDA label and research trials", evidence: "established", refs: [85, 86, 87], rows: [
    ["Overactive bladder (label)", "25 mg once daily, may increase to 50 mg; 50 mg is the maximum approved dose"],
    ["Brown fat research", "200 mg as a single dose, and 100 mg daily for 4 weeks, in studies that were not for weight loss"],
    ["Important gap", "The research doses are two to four times the maximum approved dose, and raised heart rate and blood pressure"]] },
  albuterol: { source: "FDA label", evidence: "established", rows: [
    ["Asthma (inhaled)", "Typically 2 inhalations every 4 to 6 hours as needed"],
    ["Oral tablets", "2 to 4 mg three or four times daily in adults"],
    ["Sport", "Inhaled use is permitted in sport only below a set daily limit; oral use is prohibited outright"]], refs: [99] },
  clenbuterol: { source: "Non-US human labels", evidence: "human obs", rows: [
    ["Asthma, where approved", "Human respiratory labels in some countries use microgram amounts two to three times daily"],
    ["Not approved in the US", "There is no US human label; US approval covers horses only"],
    ["Why misuse is risky", "Its 1- to 2-day half-life means levels accumulate for days, and poison center reports describe rapid heart rate, chest pain and low potassium"]], refs: [98] },
  t3: { source: "FDA label", evidence: "established", refs: [95], rows: [
    ["Hypothyroidism", "Started at 25 µg daily and adjusted in 12.5 to 25 µg steps based on blood tests and symptoms"],
    ["Boxed warning", "The label states thyroid hormones must not be used for obesity or weight loss, alone or with other agents"],
    ["Why", "In people with normal thyroid function, amounts large enough to cause weight loss can cause serious or life-threatening toxicity"]] },
  resmetirom: { source: "FDA label", evidence: "established", rows: [
    ["MASH with fibrosis", "80 mg or 100 mg once daily, chosen by body weight"], ["Duration in trial", "52 weeks to the biopsy endpoint"]], refs: [89] },
  ephedrine: { source: "Published trial", evidence: "human rct", refs: [91], rows: [
    ["Trial regimen", "Ephedrine 20 mg with caffeine 200 mg, three times daily, alongside an energy-restricted diet"],
    ["Duration studied", "24 weeks"],
    ["Context", "Ephedra supplements were banned in the US in 2004; ephedrine itself remains approved for other uses"]] },
  tesofensine: { source: "Phase 2 trial (TIPO-1)", evidence: "human rct", refs: [92], rows: [
    ["Trial arms", "0.25, 0.5 or 1.0 mg daily"], ["Duration studied", "24 weeks"],
    ["Note from the trial", "The 1.0 mg arm was not carried forward because of side effects"]] },
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
  anadrol: { source: "FDA label", evidence: "established", rows: [
    ["Anemias", "Weight-based dosing, with the label advising the minimum effective amount and a limited course"],
    ["Boxed warning", "The label warns of peliosis hepatis, liver tumors and lipid changes with prolonged use"]] },
  anavar: { source: "Withdrawn FDA label", evidence: "established", refs: [41, 42, 43, 44], rows: [
    ["Trial dosing (adult burns)", "10 mg twice daily during acute hospitalization"],
    ["Trial dosing (older men)", "20 mg daily for 12 weeks, which markedly lowered HDL"],
    ["Current status", "The FDA withdrew approval of all oxandrolone products in 2023, so no current approved dose exists"]] },
  "growth-hormone": { source: "FDA label and trials", evidence: "established", refs: [47, 49, 81], rows: [
    ["Adult GH deficiency", "Weight- or non-weight-based daily subcutaneous dosing, titrated to IGF-1 within the normal range"],
    ["Healthy-adult research", "Systematic reviews of GH in healthy people found about 2 kg more lean mass, much of it water, with no strength gain"],
    ["Legal note", "In the US, distributing GH for anti-aging or athletic use is a federal offense"]] },
  "mk-677": { source: "Published trial", evidence: "human rct", rows: [
    ["Trial regimen", "25 mg daily for 12 months in healthy older adults"],
    ["What it showed", "IGF-1 rose to young-adult levels and fat-free mass rose about 1.1 kg, while fasting glucose rose and insulin sensitivity fell"]] },
  tesamorelin: { source: "FDA label", evidence: "established", rows: [
    ["HIV lipodystrophy", "2 mg once daily by subcutaneous injection"], ["Duration in trial", "26 weeks"]] },
  "cjc-1295": { source: "Phase 1 trial", evidence: "human rct", refs: [16], rows: [
    ["Doses studied", "Single subcutaneous doses of 30 to 250 µg/kg"],
    ["What followed", "GH stayed raised for 6 or more days and IGF-1 for 9 to 11 days; clinical development stopped in 2006"]] },
  ipamorelin: { source: "Phase 2 trial", evidence: "human rct", refs: [15], rows: [
    ["Trial regimen", "0.03 mg/kg intravenously twice daily for up to 7 days after bowel resection"],
    ["Outcome", "The trial missed its primary endpoint, and development for that use ended"]] },

  /* ---------------------------------------------------------- SARMs */
  ostarine: { source: "Phase 2 trials", evidence: "human rct", rows: [
    ["Doses studied", "0.1 to 3 mg daily"], ["Longest arms", "86 to 113 days"],
    ["Findings at 3 mg", "About 1.3 kg more lean mass, alongside dose-dependent falls in HDL, SHBG and testosterone"],
    ["Status", "Not approved anywhere; later phase 3 trials missed their co-primary endpoints"]] },
  "lgd-4033": { source: "Phase 1 trial", evidence: "human rct", rows: [
    ["Doses studied", "0.1, 0.3 or 1.0 mg daily"], ["Duration studied", "21 days"],
    ["Findings at 1.0 mg", "About 1.2 kg more lean mass, with testosterone, SHBG, FSH and HDL all suppressed within 3 weeks"]] },
  "rad-140": { source: "Breast cancer trials", evidence: "human rct", rows: [
    ["Human trials", "Its only human dosing comes from oncology trials, not muscle or performance studies"],
    ["Safety signal", "Several published case reports describe liver injury from products sold as RAD-140"]] },

  /* ---------------------------------------------------------- PCT and fertility */
  anastrozole: { source: "FDA label", evidence: "established", rows: [
    ["Breast cancer", "1 mg once daily"], ["Use in men", "Off-label; no approved dose exists, and over-suppression of estradiol causes joint pain, low libido and bone loss"]] },
  letrozole: { source: "FDA label", evidence: "established", rows: [
    ["Breast cancer", "2.5 mg once daily"], ["Potency note", "It suppresses estradiol by more than 95%, which makes crashing estrogen easy"]] },
  exemestane: { source: "FDA label", evidence: "established", rows: [
    ["Breast cancer", "25 mg once daily after a meal"], ["Absorption", "A fatty meal increases how much is absorbed"]] },
  tamoxifen: { source: "FDA label", evidence: "established", rows: [
    ["Breast cancer", "20 to 40 mg daily, with doses above 20 mg split"],
    ["Use in men", "Gynecomastia and testosterone restart are off-label; no approved male dose exists"],
    ["Pharmacogenetics", "CYP2D6 converts it to its active form, so strong CYP2D6 inhibitors blunt it"]] },
  raloxifene: { source: "FDA label", evidence: "established", rows: [
    ["Osteoporosis", "60 mg once daily"], ["Gynecomastia", "Off-label; evidence is limited to small retrospective studies"]] },
  enclomiphene: { source: "Phase 3 trials", evidence: "human rct", rows: [
    ["Doses studied", "12.5 and 25 mg daily"], ["Duration studied", "16 weeks"],
    ["What it showed", "Testosterone rose into the normal range while sperm concentration was maintained, unlike with topical testosterone"],
    ["Status", "Not approved; the FDA declined it and the EMA rejected it"]] },
  hcg: { source: "FDA label", evidence: "established", rows: [
    ["Hypogonadotropic hypogonadism", "Label dosing is in international units, given two or three times weekly and adjusted to response"],
    ["FDA warning", "The label states HCG has no proven value for weight loss"]] },

  /* ---------------------------------------------------------- hair and skin */
  finasteride: { source: "FDA label", evidence: "established", refs: [32, 82], rows: [
    ["Male pattern hair loss", "1 mg once daily (Propecia)"], ["Enlarged prostate", "5 mg once daily (Proscar)"],
    ["Topical, where approved", "A 0.25% spray matched oral 1 mg on hair counts in phase 3, with lower blood levels"],
    ["Handling", "Pregnant people should not handle broken or crushed tablets"]] },
  dutasteride: { source: "FDA label and trial", evidence: "established", rows: [
    ["Enlarged prostate", "0.5 mg once daily"],
    ["Hair loss", "0.5 mg daily beat finasteride 1 mg on hair count in a 24-week trial; approved for hair in Japan and South Korea, off-label elsewhere"],
    ["Long tail", "Its 5-week half-life means effects persist for months after stopping"]] },
  minoxidil: { source: "FDA label and trials", evidence: "established", refs: [31], rows: [
    ["Topical", "1 mL of 2% or 5% solution twice daily, or 5% foam once or twice daily"],
    ["Trial finding", "5% produced about 45% more regrowth than 2% at 48 weeks, with more itching and irritation"],
    ["Oral", "Low-dose oral use for hair is off-label; the approved oral product is for severe hypertension"],
    ["Cat warning", "Residue on skin or bedding is highly toxic to cats"]] },
  clascoterone: { source: "FDA label", evidence: "established", rows: [
    ["Acne (Winlevi)", "1% cream applied twice daily to affected areas"],
    ["Hair loss", "A higher-strength solution is still in trials and is not approved"]] },
  "tri-blend-topical": { source: "Component labels and trials", evidence: "human rct", refs: [31, 33, 82], rows: [
    ["Why no combined dose", "No trial has tested minoxidil, RU-58841 and finasteride together, so there is no studied dose for the blend"],
    ["Minoxidil component", "The labeled strengths are 2% and 5%; this product's 10% is above any approved strength"],
    ["Finasteride component", "At 0.05% it is one-fifth the 0.25% strength tested in phase 3"],
    ["RU-58841 component", "Never completed a human trial, so no human dose exists at all"]] },

  /* ---------------------------------------------------------- health and support */
  rosuvastatin: { source: "FDA label", evidence: "established", rows: [
    ["High cholesterol", "5 to 40 mg once daily; 40 mg is reserved for people who do not reach goal on 20 mg"],
    ["Trial regimen", "20 mg daily in JUPITER, which cut major cardiovascular events by about 44%"]] },
  pitavastatin: { source: "FDA label", evidence: "established", rows: [
    ["High cholesterol", "1 to 4 mg once daily"], ["Trial regimen", "4 mg daily in REPRIEVE, over a median 5.1 years"]] },
  ezetimibe: { source: "FDA label", evidence: "established", rows: [["High cholesterol", "10 mg once daily, alone or with a statin"]] },
  telmisartan: { source: "FDA label", evidence: "established", rows: [
    ["Hypertension", "20 to 80 mg once daily"], ["Note", "Contraindicated in pregnancy"]] },
  nebivolol: { source: "FDA label", evidence: "established", rows: [
    ["Hypertension", "Usually started at 5 mg once daily and titrated up to 40 mg"],
    ["Stopping", "Abrupt discontinuation can cause rebound tachycardia, so beta blockers are tapered"]] },
  propranolol: { source: "FDA label", evidence: "established", rows: [
    ["Hypertension and angina", "Divided daily dosing, titrated to response"],
    ["Performance anxiety", "Off-label; no approved dose exists for this use"],
    ["Contraindication", "Avoid in asthma, since it blocks β2 receptors in the airways"]] },
  ondansetron: { source: "FDA label", evidence: "established", rows: [
    ["Nausea and vomiting", "4 to 8 mg per dose, with frequency set by indication"],
    ["Cardiac caution", "Higher doses prolong the QT interval; the 32 mg single IV dose was withdrawn for this reason"]] },
  tropisetron: { source: "EU label (Navoban) and published trials", evidence: "established", refs: [105, 101, 102], rows: [
    ["Chemotherapy nausea (label)", "5 mg once daily for up to 6 days: intravenously on the day of chemotherapy, then by mouth on the days after"],
    ["Postoperative nausea (label)", "2 mg intravenously as a single dose"],
    ["Schizophrenia trials (off-label)", "5, 10 or 20 mg daily by mouth, for 10 days to 8 weeks"],
    ["Quitting nicotine", "No trial has given tropisetron for this, so there is no dose for it"]],
    note: "Poor CYP2D6 metabolizers, and anyone taking a CYP2D6 inhibitor such as bupropion, reach much higher blood levels from the same dose." },
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
    ["Severe kidney impairment", "No more than 0.5 mg twice daily"]],
    note: "Taken after food with a full glass of water to reduce nausea." },
  cytisine: { source: "Tabex label (EU) and ORCA-2 trial", evidence: "established", refs: [142, 111], rows: [
    ["Days 1–3 (Tabex, 1.5 mg tablets)", "One tablet every 2 hours, six a day"],
    ["Days 4–12", "One every 2.5 hours, five a day"], ["Days 13–16", "One every 3 hours, four a day"],
    ["Days 17–20", "One every 5 hours, three a day"], ["Days 21–25", "One or two a day"],
    ["Quit date", "No later than day 5"],
    ["Cytisinicline (ORCA-2 trial)", "3 mg three times daily for 6 or 12 weeks"]] },
  bupropion: { source: "FDA label", evidence: "established", refs: [132], rows: [
    ["Quitting smoking (Zyban, SR)", "150 mg once daily for 3 days, then 150 mg twice daily, starting 1–2 weeks before the quit date, for 7–12 weeks"],
    ["Depression (XL)", "150 mg once each morning, increased to 300 mg after at least 4 days; maximum 450 mg"],
    ["ADHD (off-label trial)", "SR up to 200 mg twice daily in the controlled adult trial"],
    ["Seizure ceiling", "Do not exceed 450 mg a day; seizure risk rises steeply above it"]],
    note: "Doses are spaced at least 8 hours apart with the SR form, and the last dose is taken well before bed to limit insomnia." },
  /* ---------------------------------------------------------- ADHD and wakefulness */
  amphetamine: { source: "FDA label", evidence: "established", refs: [125], rows: [
    ["ADHD, IR (Adderall), age 6 and up", "Start 5 mg once or twice daily; increase by 5 mg weekly. Doses above 40 mg a day are rarely needed"],
    ["ADHD, XR (Adderall XR), adults", "20 mg once each morning"],
    ["Narcolepsy", "5–60 mg a day in divided doses"],
    ["With a strong CYP2D6 inhibitor", "Start lower and titrate cautiously (for example alongside bupropion)"]] },
  lisdexamfetamine: { source: "FDA label", evidence: "established", refs: [126], rows: [
    ["ADHD", "30 mg once each morning; increase by 10–20 mg weekly; maximum 70 mg"],
    ["Binge eating disorder", "Start 30 mg; titrate to 50–70 mg"]] },
  methylphenidate: { source: "FDA label", evidence: "established", refs: [127], rows: [
    ["IR (Ritalin), adults", "20–30 mg a day in 2–3 doses, 30–45 minutes before meals; range 10–60 mg"],
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
    ["Maximum", "4 mg (age 6–12) or 7 mg (age 13–17)"],
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
  sildenafil: { source: "FDA label", evidence: "established", rows: [
    ["Erectile dysfunction", "50 mg about an hour before sex, adjustable to 25 or 100 mg; at most once daily"],
    ["Pulmonary hypertension", "A separate, lower three-times-daily regimen"],
    ["Absolute contraindication", "Never with nitrates"]] },
  tadalafil: { source: "FDA label", evidence: "established", rows: [
    ["As needed", "10 mg before sex, adjustable to 5 or 20 mg"], ["Once daily", "2.5 or 5 mg, also used for enlarged prostate"],
    ["Absolute contraindication", "Never with nitrates"]] },
  dapoxetine: { source: "Non-US labels", evidence: "established", rows: [
    ["Premature ejaculation", "30 mg 1 to 3 hours before sex, adjustable to 60 mg; not approved in the US"],
    ["Caution", "Fainting is a known risk, worsened by alcohol and dehydration"]] },
  trazodone: { source: "FDA label", evidence: "established", rows: [
    ["Depression (approved)", "Started at 150 mg daily in divided doses"],
    ["Insomnia", "Off-label at far lower doses; evidence for insomnia is from small trials"],
    ["Urgent side effect", "Priapism requires immediate medical attention"]] },
  doxepin: { source: "FDA label", evidence: "established", rows: [
    ["Insomnia (Silenor)", "3 or 6 mg once nightly within 30 minutes of bedtime"],
    ["Why so low", "At these doses it acts as a selective histamine blocker; antidepressant doses are many times higher and bring anticholinergic effects"]] },
  pramipexole: { source: "FDA label", evidence: "established", rows: [
    ["Parkinson's and restless legs", "Started very low and titrated slowly"],
    ["Serious risk", "Impulse control disorders, including compulsive gambling and hypersexuality, are well documented"]] },
  teriparatide: { source: "FDA label", evidence: "established", rows: [
    ["Osteoporosis", "20 µg once daily by subcutaneous injection"],
    ["Height claims", "It is contraindicated with open growth plates, and there is no evidence it increases height"]] },
  "vitamin-b12": { source: "FDA label", evidence: "established", rows: [
    ["Deficiency", "Injection schedules start with loading doses and move to maintenance, set by cause and severity"],
    ["If not deficient", "Replacement corrects deficiency; it does not add energy in people with normal levels"]] },
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
  "thymosin-alpha-1": { source: "Non-US labels and trial", evidence: "human rct", refs: [23], rows: [
    ["Chronic hepatitis B, where approved", "Twice-weekly subcutaneous injection"],
    ["Sepsis trial", "A large trial found no mortality benefit, overturning earlier optimism"]] },
  "ss-31": { source: "FDA label", evidence: "established", rows: [
    ["Barth syndrome", "Weight-based daily subcutaneous injection under accelerated approval"],
    ["Other uses", "Trials in mitochondrial myopathy and heart failure missed their primary endpoints"]] },
  "nsi-189": { source: "Phase 2 trial", evidence: "human rct", refs: [63], rows: [
    ["Trial arms", "40 mg or 80 mg daily"], ["Duration studied", "12 weeks"],
    ["Outcome", "It missed its primary endpoint on the MADRS depression scale"]] },
  "prl-8-53": { source: "Single 1978 study", evidence: "human rct", refs: [58], rows: [
    ["Dose studied", "A single 5 mg oral dose"],
    ["Caveat", "This one study, run by the compound's inventor, has never been independently replicated, and nothing is known about repeated use"]] },
  "aod-9604": { source: "Phase 2b trial", evidence: "human rct", rows: [
    ["Trial arms", "Several oral doses against placebo over 24 weeks"],
    ["Outcome", "No significant difference from placebo, and development for obesity ended"]] },
  "ace-031": { source: "Phase 1 trial", evidence: "human rct", rows: [
    ["Trial design", "Single ascending subcutaneous doses in healthy postmenopausal women"],
    ["Why it stopped", "A later trial in boys with muscular dystrophy was halted over nosebleeds, gum bleeding and dilated blood vessels"]] },
  ecdysterone: { source: "Published trial", evidence: "human rct", rows: [
    ["Trial regimen", "Ecdysterone-containing supplements over 10 weeks of training"],
    ["Caveat", "Many commercial products were found to contain far less than labeled, and the finding needs replication"]] },
  "ara-290": { source: "Phase 2 trial", evidence: "human rct", rows: [
    ["Trial regimen", "Daily subcutaneous injection for 28 days in sarcoidosis-related small fiber neuropathy"]] },
  "ll-37": { source: "Phase 1/2 trial", evidence: "human rct", rows: [
    ["Trial design", "Topical application to venous leg ulcers over 4 weeks"],
    ["Finding", "Lower concentrations improved healing; the highest did not"]] }
};
