/*
 * Atlas Codex: what to monitor for each compound, and why.
 *
 * SCOPE — markers and warning signs only. Each row names a thing to measure or watch and the
 * reason that compound makes it worth watching. No target ranges, no "if X then take Y"
 * instructions: interpreting a result and acting on it is a clinician's job, and the number
 * that matters depends on the person, the lab and the assay.
 *
 * Shape: slug: { markers: [[what, why]], watch: ["warning sign", ...], note }
 * Groups below are shared by compound class so the per-compound lists stay short.
 */
(function (A) {
  const G = {
    androgen: [
      ["Total and free testosterone", "Confirms what is actually circulating, which vendor labels and ester maths cannot tell you"],
      ["Estradiol (sensitive assay)", "Aromatizing compounds raise it; the standard assay is unreliable in men, so the sensitive one is used"],
      ["LH and FSH", "Shows how far the body's own production is suppressed, and tracks recovery afterwards"],
      ["Hematocrit and hemoglobin", "Androgens raise red cell mass, which thickens the blood"],
      ["Lipid panel (HDL, LDL)", "Androgens lower HDL, and oral 17α-alkylated compounds lower it sharply"],
      ["Liver enzymes (ALT, AST) and bilirubin", "Relevant for oral 17α-alkylated compounds; injectable esters are far less hepatotoxic"],
      ["Blood pressure", "Rises with fluid retention and hematocrit, and is the cheapest thing on this list to measure"],
      ["PSA", "Androgens stimulate the prostate; a baseline matters more than any single later reading"]
    ],
    oral17aa: [["Liver enzymes and bilirubin", "17α-alkylation carries a real risk of cholestasis and liver injury, and symptoms often appear after enzymes have already risen"]],
    gh: [
      ["IGF-1", "The practical readout of GH exposure, since GH itself is pulsatile and a single measurement means little"],
      ["Fasting glucose and HbA1c", "Raised GH reduces insulin sensitivity"],
      ["Thyroid function (free T4, TSH)", "GH can unmask low thyroid function"]
    ],
    thyroid: [
      ["TSH, free T3, free T4", "Shows how far the body's own thyroid output is suppressed"],
      ["Resting heart rate", "Rises before most other signs of over-replacement"]
    ],
    glp1: [
      ["Fasting glucose and HbA1c", "The effect being treated, and the number that shows whether it is working"],
      ["Weight and waist", "Tracks response, and a rapid fall raises gallstone risk"],
      ["Lean mass, if available", "A meaningful share of weight lost on any large deficit is lean tissue"]
    ],
    stimulant: [
      ["Blood pressure and resting heart rate", "The dose-limiting effect for every sympathomimetic, and measurable at home"],
      ["Sleep", "Shortened or broken sleep is usually the first sign of too much, and it compounds the cardiovascular load"]
    ],
    renal: [["Kidney function (creatinine, eGFR)", "Worth a baseline, though creatinine is raised by muscle mass alone and is easily misread in trained people"]]
  };

  const M = {
    testosterone: { markers: [...G.androgen, ["Semen analysis, where fertility matters", "Sperm recovery lagged testosterone recovery by many months in the HAARLEM cohort"], ["Lipoprotein(a) and ApoB, if available", "Both moved unfavourably during cycles in the HAARLEM cohort"]], watch: ["Swelling in the ankles", "Persistent headaches", "Breast tissue that is tender or firm", "Shortness of breath on exertion, reduced exercise tolerance or palpitations, given the heart-function findings in long-term users", "Low libido, erectile difficulty or low mood persisting months after stopping"] },
    nandrolone: { markers: [...G.androgen, ["Prolactin", "Nandrolone is progestogenic, and raised prolactin contributes to sexual dysfunction and breast tissue"], ["Creatinine, read alongside muscle gain", "It rose on nandrolone in the dialysis trial, and muscle gain alone raises it"]], watch: ["Low libido or erectile difficulty despite adequate testosterone", "Nipple tenderness or discharge"] },
    trenbolone: { markers: [...G.androgen, ["Prolactin", "Strongly progestogenic"], ...G.renal], watch: ["Night sweats and insomnia", "Breathlessness on light activity", "Marked anxiety or mood change", "Dark urine"] },
    dianabol: { markers: [...G.androgen, ...G.oral17aa], watch: ["Rapid weight gain that is mostly water", "Rising blood pressure", "Yellowing of the eyes or skin"] },
    anadrol: { markers: [...G.androgen, ...G.oral17aa], watch: ["Yellowing of the eyes or skin", "Abdominal pain", "Unusual swelling", "Dark urine"] },
    superdrol: { markers: [...G.androgen, ...G.oral17aa], watch: ["Jaundice and intense itching, the pattern reported in published cases of liver injury", "Dark urine", "Pale stools"] },
    anavar: { markers: [...G.androgen, ...G.oral17aa], watch: ["Falling HDL on repeat testing", "Jaundice"] },
    winstrol: { markers: [...G.androgen, ...G.oral17aa], watch: ["Joint pain", "Jaundice"] },
    turinabol: { markers: [...G.androgen, ...G.oral17aa], watch: ["Jaundice"] },
    halotestin: { markers: [...G.androgen, ...G.oral17aa], watch: ["Jaundice", "Marked aggression or mood change"] },
    masteron: { markers: [...G.androgen], watch: ["Accelerated scalp hair loss"] },
    primobolan: { markers: [...G.androgen] },
    proviron: { markers: [...G.androgen] },
    equipoise: { markers: [...G.androgen, ["Hematocrit, repeated", "Users consistently report large rises, and its long ester means levels keep climbing for weeks"], ["Kidney function (creatinine, eGFR), interpreted with care", "A case report described a raised creatinine with boldenone that mimicked kidney disease"]], watch: ["Headaches or visual changes, which can accompany a high hematocrit", "Anxiety"] },
    ment: { markers: G.androgen.map((r) => r[0].startsWith("Hematocrit") ? [r[0], r[1] + "; both rose in the MENT implant trial"] : r), watch: ["Rapid estrogenic effects, since it aromatizes to a potent estrogen"] },

    ostarine: { markers: [["Total testosterone, LH, FSH", "SARMs suppress the body's own production in a dose-dependent way"], ["HDL cholesterol", "Falls in a dose-dependent way in trials"], ["Liver enzymes", "Case reports of liver injury exist across the SARM class"]] },
    "lgd-4033": { markers: [["Total testosterone, SHBG, LH, FSH", "All fell within 21 days in the phase 1 trial"], ["HDL cholesterol", "Fell markedly at the highest trial dose"], ["Liver enzymes", "Published case reports of cholestatic injury"]], watch: ["Fatigue or low libido, which track the suppression"] },
    "rad-140": { markers: [["Liver enzymes and bilirubin", "Several published case reports of drug-induced liver injury, some severe"], ["Total testosterone, LH, FSH", "Expected to suppress, by class"], ["HDL cholesterol", "Expected to fall, by class"]], watch: ["Jaundice", "Unexplained fatigue or nausea"] },

    "growth-hormone": { markers: [...G.gh, ["Morning cortisol", "Cortisol can fall on treatment, and previously hidden central adrenal insufficiency can surface"]], watch: ["Numbness or tingling in the hands, which suggests carpal tunnel compression", "Puffy hands and face, or ankle swelling", "Joint pain and stiffness in the limbs", "Headache with visual change, nausea or vomiting, which can signal raised intracranial pressure", "Persistent severe abdominal pain, which the label flags as possible pancreatitis"] },
    "mk-677": { markers: [...G.gh, ["Body weight", "Weight rose over a year of daily dosing, with more limb fat than on placebo, and increased appetite is the mechanism"]], watch: ["Rising fasting glucose", "Swelling of the ankles or lower legs, and muscle or joint pain", "Breathlessness on exertion, waking breathless, or new ankle swelling, which are the symptoms of the heart failure signal that stopped a trial", "Increased appetite that outpaces the goal"] },
    "cjc-1295": { markers: [["IGF-1", "A single dose raises it for 9 to 11 days, so it is the only practical measure of ongoing exposure"], ...G.gh.slice(1)], watch: ["Injection-site reactions, the most common adverse effect in the phase 1 trial", "Flushing and headache shortly after dosing", "Water retention, swelling or joint pain"] },
    ipamorelin: { markers: [...G.gh], watch: ["Swelling of the hands, face or ankles", "Joint pain"] },
    "ghrp-2": { markers: [...G.gh, ["Cortisol and prolactin", "This class raises both, unlike the more selective secretagogues"]], watch: ["Marked hunger and rising food intake after dosing", "Swelling and joint pain"] },
    "ghrp-6": { markers: [...G.gh, ["Cortisol and prolactin", "Raised by this class, more so at higher doses"]], watch: ["Intense hunger shortly after dosing", "Swelling and joint pain"] },
    hexarelin: { markers: [["IGF-1", "The readout of GH exposure; it did not move over 16 weeks of twice-daily dosing, which is itself informative"], ...G.gh.slice(1), ["Cortisol and prolactin", "Raised by acute dosing in this class, though not over 16 weeks on the one regimen studied"]], watch: ["A fading response to the same dose over weeks", "Swelling and joint pain"] },
    tesamorelin: { markers: [["IGF-1", "The label directs monitoring it during treatment, and sustained elevation was common in trials"], ["Fasting glucose and HbA1c", "The label directs checking glucose status before starting and periodically after; diabetes-range HbA1c was about three times as common as on placebo"], G.gh[2], ["Diabetic retinal examination, in people with diabetes", "The label directs regular checks for new or worsening retinopathy"]], watch: ["Injection-site redness, itching or pain, reported in about a quarter of treated patients", "Puffiness or swelling of the hands, feet or face", "Joint pain, or numbness and tingling in the hands", "Rash, hives, flushing or itching, which the label treats as possible hypersensitivity"] },
    sermorelin: { markers: [["IGF-1", "Shows whether the GH signal reaches anything downstream; in several studies of this class it did not move"], ["Fasting glucose and HbA1c", "Raised GH reduces insulin sensitivity, though trials of this compound found fasting glucose unchanged"], G.gh[2], ["Lipid panel", "Transient hyperlipidemia was the only adverse effect in the 16-week trial in older adults"]], watch: ["Injection-site redness or pain", "Flushing and headache shortly after dosing"] },
    "hgh-frag-176-191": { markers: [["IGF-1", "Useful mainly as a negative control: the related AOD-9604 did not raise IGF-1 in any of its trials, so a rise would suggest the product is not what it claims to be"]] },
    "igf-1-lr3": { markers: [["Blood glucose", "IGF-1 activates insulin signaling and can cause dangerous hypoglycemia; the approved IGF-1 label directs glucose checks before meals while the dose is being established"], ["IGF-1", "There is no established interpretation for the LR3 analog, which the standard IGF-1 assay may not measure reliably"]], watch: ["Shakiness, sweating, confusion or faintness, which are signs of low blood sugar and need fast-acting carbohydrate", "Loss of consciousness or seizure, which the approved IGF-1 label lists as a consequence of severe hypoglycemia", "Headache with visual change, nausea or vomiting, which on the approved IGF-1 label can signal raised intracranial pressure", "Snoring, sleep apnea or breathing difficulty, which on that label can reflect tonsillar enlargement"] },
    "igf-1-des": { markers: [["Blood glucose", "Same insulin-like glucose-lowering action as other IGF-1 analogs, and the most immediate hazard"]], watch: ["Shakiness, sweating, confusion or faintness, which are signs of low blood sugar", "Loss of consciousness or seizure, the severe end of the same effect"] },

    semaglutide: { markers: [...G.glp1, ["eGFR and urine albumin-to-creatinine ratio", "The kidney endpoints that improved in the FLOW trial, and the reason the drug is now studied in kidney disease"]], watch: ["Severe or persistent abdominal pain radiating to the back, which can signal pancreatitis", "Right-sided abdominal pain after meals, which can signal gallstones", "Vision changes if you have diabetic retinopathy", "Sudden painless loss of vision in one eye, the presentation of the optic neuropathy reported in an observational review"] },
    tirzepatide: { markers: [...G.glp1], watch: ["Severe abdominal pain", "Persistent vomiting with poor fluid intake"] },
    retatrutide: { markers: [...G.glp1, ["Resting heart rate", "Rose with dose in the phase 2 trial, peaking around 24 weeks"]], watch: ["Burning, tingling or altered skin sensation, which was reported more often than with placebo, and more often at higher doses, in phase 3"] },
    cagrilintide: { markers: [...G.glp1] },
    mazdutide: { markers: [...G.glp1, ["Resting heart rate", "Rises modestly"]] },
    survodutide: { markers: [...G.glp1, ["Resting heart rate", "Rises with dose"], ["Liver enzymes", "Studied in fatty liver disease, where liver markers are the endpoint"]] },
    orforglipron: { markers: [...G.glp1] },
    metformin: { markers: [["HbA1c and fasting glucose", "The effect being treated"], ["Vitamin B12", "Long-term use lowers it, and deficiency can be mistaken for unrelated neuropathy"], ...G.renal, ["Training response, if the goal is muscle or fitness", "Two randomized trials in older adults found metformin blunted gains from resistance and aerobic training"]], watch: ["Persistent diarrhea or nausea, which is the usual reason people stop"] },
    berberine: { markers: [["Fasting glucose and HbA1c", "The effect the trials measured, and the only way to know whether anything is happening"], ["Medication list, for interactions", "It inhibits CYP2D6, CYP3A4 and P-glycoprotein, so it raises blood levels of a long list of unrelated drugs"]], watch: ["Constipation, diarrhea or cramping, which are the usual reasons people stop"] },
    "atx-304": { markers: [["Fasting glucose and HbA1c", "The effect measured in the only human study"], ["Blood pressure", "Fell in both the animal and human parts of that study, so it is a measurable sign the compound is doing something"]] },
    aicar: { markers: [["Uric acid", "It raised uric acid in human studies, because it is metabolized through the purine pathway"], ["Blood glucose", "It lowered glucose in both healthy men and people with type 2 diabetes"]] },
    "sr-9009": { markers: [["Nothing specific is established", "No human has been dosed in a published study, so there is no marker known to track effect or harm"]] },
    "mots-c": { markers: [["Nothing specific is established", "With no human exposure data, there is no marker known to track either effect or harm"]] },

    t3: { markers: [...G.thyroid, ["Lean mass, if available", "Excess thyroid hormone breaks down muscle protein as well as fat"]], watch: ["Palpitations or an irregular pulse", "Heat intolerance and sweating", "Tremor"] },
    "gc-1": { markers: [...G.thyroid, ["Lipid panel", "LDL reduction is its intended effect"]] },
    resmetirom: { markers: [["Liver enzymes", "The label advises monitoring for drug-induced liver injury"], ["Lipid panel", "LDL falls as part of its effect"], ...G.thyroid] },

    clenbuterol: { markers: [...G.stimulant, ["Potassium", "It drives potassium into cells, and low blood potassium affects the heart"], ["Blood glucose", "Rises alongside the potassium shift"]], watch: ["Palpitations or chest pain, which warrant stopping and seeking care", "Muscle cramps", "Persistent tremor"] },
    albuterol: { markers: [...G.stimulant, ["Potassium", "Falls at higher doses, as with other β2 agonists"], ["Exercise capacity, if endurance matters", "High-dose oral use blocked the training-induced improvement in time to exhaustion in a randomized trial"]], watch: ["Palpitations", "Tremor"] },
    mirabegron: { markers: [["Blood pressure", "Rises, and more so at the doses used in brown fat research than at the approved dose"], ["Resting heart rate", "Rises with dose"]], watch: ["Difficulty passing urine, particularly with an enlarged prostate"] },
    ephedrine: { markers: [...G.stimulant], watch: ["Palpitations", "Agitation or insomnia", "Headache, which can accompany a blood pressure rise"] },
    "1-3-dmaa": { markers: [...G.stimulant], watch: ["Chest pain, severe headache or breathlessness, which have preceded reported strokes and cardiac events and warrant emergency care"] },
    "1-4-dmaa": { markers: [...G.stimulant], watch: ["The same cardiovascular warning signs as 1,3-DMAA, with no human data to calibrate them against"] },
    yohimbine: { markers: [...G.stimulant], watch: ["Panic or acute anxiety, which it is used experimentally to provoke", "Palpitations"] },
    tesofensine: { markers: [...G.stimulant], watch: ["Dry mouth and insomnia, which rose with dose in the trial", "Mood change"] },
    dnp: { markers: [["Core body temperature", "The mechanism produces heat directly, and overheating is what kills"]], watch: ["Fever, heavy sweating, rapid breathing or a racing heart, which are signs of overdose and need emergency care immediately", "Toxicity can build over days because the drug lingers"] },
    "slu-pp-332": { markers: [...G.stimulant] },
    bam15: { markers: [["Core body temperature", "An uncoupler, like DNP, though it did not raise temperature in mice"]], watch: ["Any sustained rise in temperature"] },
    gw501516: { markers: [["Lipid panel", "Its measured human effect"], ["Liver enzymes", "Liver fat was a trial endpoint"]] },
    "5-amino-1mq": { markers: [["Nothing specific is established", "No human has been dosed in a published study, so there is no marker known to track effect or harm"]] },
    "l-carnitine": { markers: [["Nothing specific is established for supplement use", "There is no marker that tracks benefit at supplement doses in people who are not carnitine-deficient"]], watch: ["A fishy body odor, which indicates the dose is high enough that gut bacteria are converting much of it"] },
    meldonium: { markers: [["Nothing specific is established", "The published trial reported it as generally well tolerated without naming markers to follow"]], watch: ["It remains detectable in urine for months, so for anyone subject to drug testing the exposure outlasts the use by a long way"] },
    ecdysterone: { markers: [["Nothing specific is established", "No marker of effect or harm has been identified in the two published human trials"]], watch: ["It is on WADA's monitoring program, so for anyone subject to testing its status is unsettled rather than clearly permitted"] },

    anastrozole: { markers: [["Estradiol (sensitive assay)", "The point of the drug, and the marker that shows over-suppression"], ["Lipid panel", "Low estradiol worsens the cholesterol profile in men"], ["Bone density, over the long term", "Estrogen maintains bone"]], watch: ["Joint pain, dry skin, low libido or low mood, which together suggest estradiol has gone too low"] },
    letrozole: { markers: [["Estradiol (sensitive assay)", "It suppresses estradiol by more than 95%, so crashing it is easy"], ["Lipid panel", "Worsens with low estradiol"]], watch: ["The same low-estrogen pattern, which arrives faster than with weaker inhibitors"] },
    exemestane: { markers: [["Estradiol (sensitive assay)", "Irreversible inhibition means the effect outlasts the last dose"], ["Lipid panel", "Worsens with low estradiol"]] },
    tamoxifen: { markers: [["LH, FSH and total testosterone", "The markers that show whether the body's own production is restarting"], ["Liver enzymes", "Metabolized hepatically"]], watch: ["Leg swelling or pain, or sudden breathlessness, which can signal a clot", "Visual changes"] },
    raloxifene: { markers: [["LH, FSH, testosterone", "Relevant when used off-label in men"], ["PSA, in older men", "It rose in a 3-month trial in men"]], watch: ["Signs of a clot, as with other SERMs"] },
    enclomiphene: { markers: [["LH, FSH, total testosterone", "Its intended effect"], ["Estradiol (sensitive assay)", "Rises alongside testosterone"]], watch: ["Visual disturbances", "Mood change"] },
    hcg: { markers: [["Total testosterone", "The downstream effect"], ["Estradiol (sensitive assay)", "Testicular estradiol production rises, sometimes sharply"], ["Semen analysis, where fertility is the goal", "Sperm returned only after months, and normal counts often took more than two years, in one gonadotropin series"]], watch: ["Nipple tenderness"] },
    hmg: { markers: [["FSH, LH, testosterone", "Its intended effects"], ["Semen analysis, where fertility is the goal", "The only direct measure of whether sperm production is recovering"]] },
    kisspeptin: { markers: [["LH, FSH and testosterone", "Its intended effect, and the readout that shows whether the response has faded with continuous exposure"]], watch: ["Effects fading over days of continuous use, which matches the desensitization seen in trials"] },

    finasteride: { markers: [["PSA, interpreted with the drug in mind", "It roughly halves PSA, so a baseline before starting matters for future prostate screening, and the prevention trial found more high-grade tumors among men on the 5 mg dose"], ["DHT, if relevant", "Confirms the mechanism is engaged"]], watch: ["Low libido, erectile difficulty or low mood, which are uncommon but are the reason most people stop", "Anxiety or thoughts of self-harm, which are label warnings and carry an observational signal", "Sexual symptoms that continue after stopping"] },
    dutasteride: { markers: [["PSA", "Also roughly halves PSA; its 5-week half-life means effects persist for months"], ["DHT, if relevant", "Suppressed by more than 90%"]], watch: ["The same sexual and mood effects as finasteride, which take longer to clear", "Low mood or thoughts of self-harm"] },
    minoxidil: { markers: [["Blood pressure and resting heart rate, for oral use", "It was originally an oral antihypertensive"], ["Weight, for oral use", "Fluid retention shows up as quick weight gain"]], watch: ["Increased shedding in the first months, which is expected and usually settles", "Ankle swelling or breathlessness on oral use", "Swelling around the eyes", "Headache after starting oral use", "Unwanted facial or body hair"] },
    ketoconazole: { watch: ["Scalp dryness, irritation or a change in hair texture"] },
    "tri-blend-topical": { markers: [["Blood pressure and resting heart rate", "The minoxidil component is above any approved strength"]], watch: ["Scalp irritation", "Low libido or fatigue, which users attribute to the RU-58841 component, though it has never been studied"] },
    "ru-58841": { watch: ["Low libido, fatigue or breast tenderness, which users report and which would indicate systemic absorption; none of this has ever been measured in a human study"] },

    methylene_blue_placeholder: null,
    "methylene-blue": { markers: [["G6PD status, before use", "It can cause hemolysis in people with G6PD deficiency"]], watch: ["Agitation, fever, rapid heart rate, muscle rigidity or confusion, which can signal serotonin syndrome if any serotonergic drug is also being taken, and need emergency care", "Pulse oximeter readings that look low after a dose, which may be an artefact of the dye rather than a real fall in oxygen", "Hives, swelling or breathing difficulty, which can signal an allergic reaction"] },
    piracetam: { markers: [["Kidney function (creatinine, eGFR)", "It is cleared unchanged by the kidneys and builds up when kidney function falls"]], watch: ["Unusual bruising or bleeding, especially with anticoagulants or antiplatelet drugs, because it reduces platelet aggregation"] },
    "9-me-bc": { watch: ["Agitation, fever, rapid heart rate, muscle rigidity or confusion when combined with serotonergic drugs, because it inhibits monoamine oxidase in vitro"] },
    "cerebroprotein-hydrolysate": { watch: ["Rash, swelling, wheeze or breathing difficulty during or after infusion, which can signal an allergic reaction"] },
    taltirelin: { markers: [["TSH and thyroid hormones", "As a TRH analog it can raise TSH, though less than TRH itself"]] },
    oxytocin: { markers: [["Sodium, with high or repeated dosing", "Its antidiuretic effect can lower blood sodium"]], watch: ["Headache, nausea, confusion or unusual drowsiness, which can signal low sodium"] },
    phenibut: { watch: ["Needing more for the same effect, which is the first sign of tolerance", "Rebound anxiety or insomnia between doses, which signals dependence", "Withdrawal can include agitation, hallucinations and psychosis and has required hospital care; stopping abruptly after regular use is itself a risk"] },
    naltrexone: { markers: [["Liver enzymes", "Checked before starting and during treatment; raised mainly at higher doses"], ["Urine drug screen", "Confirms opioids are cleared before the first dose"], ["Mood", "Depression and suicidal thoughts are label warnings in people treated for dependence"]], watch: ["It triggers immediate, severe withdrawal in anyone taking opioids, so opioid exposure must be fully cleared first", "Tolerance is lost while taking it, so using opioids after stopping or missing doses can be fatal", "Pain, swelling, hardening or a wound at the injection site"] },
    pramipexole: { watch: ["New or intensified gambling, shopping, eating or sexual urges, which are well documented, often unnoticed by the person, and reverse on stopping", "Sudden daytime sleep onset, which makes driving dangerous"] },
    teriparatide: { markers: [["Serum calcium", "It can raise calcium, and in the glucocorticoid trial more patients on teriparatide had high readings"], ["Digoxin level, if taking digoxin", "High calcium increases digoxin toxicity"], ["History of kidney stones", "The label flags active or recent urolithiasis"]], watch: ["Dizziness or a fast heartbeat on standing after an injection", "Hives, swelling of the face or throat, or difficulty breathing", "Flank pain or blood in the urine", "Worsening of existing calcium deposits in the skin"] },
    oxandrolone_placeholder: null,

    "bpc-157": { markers: [["Liver and kidney function, fasting glucose", "The only human safety study measured these; with no controlled data, a personal baseline is the only reference point"]], watch: ["Redness, swelling, heat or pus at an injection site, which can signal infection from non-sterile material", "A new lump, or a change in a known tumor, given the theoretical concern about blood vessel growth"] },
    "tb-500": { watch: ["Redness, swelling, heat or pus at an injection site, which can signal infection from non-sterile material"] },
    "thymosin-alpha-1": { markers: [["White cell count", "Its intended immune effect"], ["Liver enzymes (ALT) and, in hepatitis B, HBV DNA and HBeAg", "These were the trial endpoints, and responses often appeared months after treatment stopped"]] },
    "ss-31": { markers: [["Kidney function (eGFR)", "The label reduces the dose in severe kidney impairment"]], watch: ["Injection-site reactions, the most common effect in trials", "Rash, papules, eczema-like skin changes or a new cough, which the label lists as hypersensitivity signs that can appear months after starting"] },
    "nad-plus": { watch: ["Chest tightness, nausea, abdominal cramping or flushing during an infusion, which are commonly linked to infusion rate"] },
    vip: { markers: [["Blood pressure and heart rate", "VIP is a potent vasodilator, and low blood pressure with a fast heart rate are its expected effects"]], watch: ["Flushing, dizziness or fainting", "Watery diarrhea", "An erection lasting more than four hours after intracavernosal use, which is a medical emergency"] },
    "aod-9604": { markers: [["IGF-1", "Useful as a negative control: unlike GH, it did not raise IGF-1 in any of the six trials, so a rise suggests the product is not AOD-9604"]], watch: ["Headache, the most common adverse effect at the higher intravenous exposures"] },
    "ace-031": { markers: [["Hemoglobin and hematocrit", "Repeated nosebleeds and gum bleeding are the signal that halted its trial, and blood loss shows up here"], ["Blood pressure", "The vascular findings in the halted trial concerned vessel integrity"]], watch: ["Nosebleeds, gum bleeding or new spider-like blood vessels, which halted its muscular dystrophy trial", "Bleeding that is slow to stop", "Injection-site redness"] },
    glow: { markers: [["Nothing specific is established", "None of the three ingredients has human dosing or monitoring data for injection"]], watch: ["Redness, swelling, heat or pus at an injection site, which can signal infection from non-sterile material", "A new lump, or a change in a known tumor, given that two ingredients promote blood vessel growth"] },
    klow: { markers: [["Nothing specific is established", "None of the four ingredients has human dosing or monitoring data for injection"]], watch: ["Redness, swelling, heat or pus at an injection site, which can signal infection from non-sterile material"] },
    "tri-amino": { markers: [["Potassium and kidney function, with kidney or liver disease or a potassium-sparing drug", "Arginine raises potassium, and the reported dangerous cases occurred in that setting"]], watch: ["Pain, swelling, redness or a hard lump at the injection site, which can signal a sterile or infected abscess", "Palpitations, muscle weakness or an irregular heartbeat"] },
    "scar-cream": { watch: ["Thinning, shininess, stretch marks, visible small blood vessels or lightened patches where the cream is applied", "Numbness of the mouth, ringing in the ears, dizziness or confusion when used over large or broken areas, which can signal absorbed lidocaine"] },
    "melanotan-2": { watch: ["Any new mole, or a change in the size, shape or color of an existing one, which warrants a dermatologist", "Prolonged erection, which is a medical emergency after four hours"] },
    "melanotan-1": { watch: ["Changes to moles; skin checks are advised during treatment"] },
    bremelanotide: { markers: [["Blood pressure", "Rises transiently after each dose"]], watch: ["Nausea, which affected about 40% in trials", "Darkening of the face, gums or breasts, which may not resolve"] },

    rosuvastatin: { markers: [["Lipid panel", "The effect being treated"], ["Liver enzymes", "Occasional rises"], ["Creatine kinase, if symptomatic", "Distinguishes muscle injury from ordinary training soreness"]], watch: ["Muscle pain or weakness, especially if widespread or with dark urine"] },
    pitavastatin: { markers: [["Lipid panel", "The effect being treated"], ["Creatine kinase, if symptomatic", "As with any statin"], ["Fasting glucose or HbA1c", "New diabetes was more common on pitavastatin in the REPRIEVE trial"]], watch: ["Muscle pain or weakness"] },
    ezetimibe: { markers: [["Lipid panel", "The effect being treated"]] },
    telmisartan: { markers: [["Blood pressure", "The effect being treated"], ["Potassium", "ARBs raise it"], ...G.renal], watch: ["Lightheadedness or fainting, especially alongside other blood pressure drugs"] },
    nebivolol: { markers: [["Blood pressure and resting heart rate", "The effects being treated"]], watch: ["Stopping abruptly can cause rebound tachycardia, so beta blockers are tapered"] },
    propranolol: { markers: [["Blood pressure and resting heart rate", "The effects being treated"]], watch: ["Wheeze or breathlessness, since it blocks β2 receptors in the airways", "It masks the warning signs of low blood sugar"] },
    ondansetron: { watch: ["Fainting or palpitations, which can reflect QT prolongation, particularly alongside other QT-prolonging drugs"] },
    tropisetron: { markers: [["ECG (QTc)", "The class prolongs QT, and the effect is larger when blood levels run high"], ["Potassium and magnesium", "Low levels add to the QT risk"]], watch: ["Fainting or palpitations", "Starting any CYP2D6 inhibitor, bupropion included, which raises tropisetron levels several-fold", "Constipation that persists"] },
    nicotine: { markers: [["Blood pressure and resting heart rate", "Both rise with each dose, and the effect adds up across a day of frequent use"], ["Fasting glucose and HbA1c", "Chronic exposure reduces insulin sensitivity"], ["Doses per day, written down", "Creeping frequency is the clearest early sign that tolerance and dependence are building"]], watch: ["Nausea, sweating, palpitations or a racing heart, which signal too much", "Needing a dose on waking or during the night", "Keep e-liquids and pouches away from children"] },
    varenicline: { markers: [["Kidney function (creatinine, eGFR)", "It is cleared unchanged by the kidneys, and the dose is reduced in severe impairment"]], watch: ["Changes in mood, agitation or unusual behavior", "Reduced tolerance to alcohol", "Persistent nausea"] },
    cytisine: { watch: ["Nausea and sleep disturbance", "Missed doses on the frequent early schedule"] },
    bupropion: { markers: [["Blood pressure", "It can raise it, more so with nicotine replacement or stimulants"]], watch: ["Any seizure, or anything that lowers the seizure threshold: stimulant use, heavy alcohol use or sudden withdrawal, eating disorders", "Every other drug taken, since its CYP2D6 inhibition raises levels of many of them", "Mood changes and insomnia"] },
    amphetamine: { markers: [["Blood pressure and resting heart rate", "Stimulants raise both, and long-term use is linked to hypertension"], ["Weight", "Appetite loss is the most common side effect"], ["Sleep", "Insomnia is common and worsens everything else"]], watch: ["Chest pain, fainting or palpitations", "Paranoia, hearing voices or manic symptoms", "Dose creeping above the prescribed amount", "Adding bupropion or another CYP2D6 inhibitor, which raises amphetamine levels"] },
    lisdexamfetamine: { markers: [["Blood pressure and resting heart rate", "As for any amphetamine"], ["Weight", "Appetite loss is common"]], watch: ["Chest pain, fainting or palpitations", "Psychotic or manic symptoms"] },
    methylphenidate: { markers: [["Blood pressure and resting heart rate", "As for any stimulant"], ["Weight", "Appetite loss is common"]], watch: ["Chest pain or palpitations", "Psychotic symptoms, which are rare", "Alcohol alongside extended-release forms"] },
    atomoxetine: { markers: [["Blood pressure and heart rate", "Small rises, as with stimulants"], ["Liver enzymes, if symptomatic", "Rare severe liver injury is reported"]], watch: ["New suicidal thinking, especially in the first months", "Dark urine, jaundice or right-sided abdominal pain", "Starting bupropion, fluoxetine or paroxetine, which raise its levels several-fold"] },
    viloxazine: { markers: [["Blood pressure and heart rate", "Small rises"]], watch: ["New suicidal thinking", "Caffeine feeling stronger, because it blocks caffeine clearance"] },
    guanfacine: { markers: [["Blood pressure and heart rate", "It lowers both"]], watch: ["Dizziness or fainting", "Never stopping abruptly, because blood pressure can rebound"] },
    modafinil: { markers: [["Blood pressure", "Small rises"]], watch: ["Any rash, which is a reason to stop at once", "Reduced effectiveness of hormonal contraception, during use and for a month after"] },
    sildenafil: { watch: ["An erection lasting over four hours is a medical emergency", "Sudden vision or hearing loss", "It must never be combined with nitrates"] },
    tadalafil: { watch: ["The same nitrate contraindication and priapism warning as sildenafil, lasting longer because of its 17-hour half-life"] },
    dapoxetine: { watch: ["Fainting, which is more likely with alcohol or dehydration"] },
    trazodone: { watch: ["A persistent erection, which requires immediate care", "Dizziness on standing"] },
    doxepin: { watch: ["Next-day drowsiness, especially if taken close to a meal", "Eye pain or difficulty passing urine"] },
    "vitamin-b12": { markers: [["B12, and folate alongside it", "High folate can mask B12 deficiency, and treating the wrong one allows nerve damage to progress"], ["Serum potassium early in treatment of pernicious anemia", "The label warns potassium can fall as new blood cells are made"], ["Hematocrit and reticulocyte count", "The label uses these to confirm the marrow is responding"], ["Iron, before treatment", "Iron deficiency can blunt the response or obscure the diagnosis"]], watch: ["Swelling, breathlessness or wheeze early in treatment, since the label lists pulmonary edema and heart failure", "Hives or difficulty breathing after an injection"] },
    glutathione: { watch: ["Wheeze, if inhaled"] },

    /* nootropics added 2026-10-21. Where no human data exist, the row says so rather than inventing a marker. */
    coluracetam: { markers: [["Nothing specific is established", "No human trial exists, so no marker has been tied to it"]] },
    fasoracetam: { markers: [["Kidney function (creatinine, eGFR)", "Clearance is mainly renal, and blood levels were higher in elderly men whose kidneys cleared less of the drug"]] },
    sunifiram: { markers: [["Nothing specific is established", "No human trial exists, so no marker has been tied to it"]] },
    unifiram: { markers: [["Nothing specific is established", "No human trial exists, so no marker has been tied to it"]] },
    "rgpu-95": { markers: [["Nothing specific is established", "It has never been given to humans in a published study"]] },
    flmodafinil: { markers: [["Nothing specific is established", "The only human data are six volunteers in an anti-doping excretion study"]], note: "WADA prohibits it in competition, and the authors describe the drug and its metabolites as detectable for a relatively long time." },
    cyclazodone: { markers: [["Liver enzymes (ALT, AST) and bilirubin", "Pemoline, the drug it is related to, caused fatal liver failure; whether cyclazodone shares this is unknown"]], watch: ["Yellowing of the eyes or skin, or dark urine, given the liver failure seen with pemoline"] },
    thozalinone: { markers: [["Liver enzymes (ALT, AST) and bilirubin", "Pemoline, a related stimulant, caused fatal liver failure; no liver finding specific to thozalinone was found"]], watch: ["Yellowing of the eyes or skin, or dark urine, given the liver failure seen with pemoline"] },
    bpap: { markers: [["Nothing specific is established", "All evidence is from rodents, and the dose response in rats was two-peaked"]] },
    "ce-123": { markers: [["Nothing specific is established", "No human data exist"]], watch: ["Increased impulsive behavior, which rose mildly in aged rats"] },
    "kw-6356": { watch: ["Constipation, the most common adverse event in the 12-week trial, together with nasopharyngitis", "Involuntary jerking or writhing movements if taken with levodopa, given the marmoset finding"] },
    tranylcypromine: { markers: [
      ["Blood pressure, including standing readings", "The label calls for close monitoring, warns that full reliance should not be placed on readings, and lists postural hypotension as a major reaction above 30 mg a day"],
      ["Liver enzymes", "The label reports hepatitis and raised aminotransferases"],
      ["Blood glucose, in people with diabetes on insulin or other glucose-lowering drugs", "The label notes some MAOIs have contributed to hypoglycemia"]],
      watch: ["Headache at the back of the head, palpitations, neck stiffness, nausea or vomiting, sweating, dilated pupils, light sensitivity or confusion, which are signs of hypertensive crisis and need emergency care",
        "Agitation, hallucinations, fast heartbeat, unstable blood pressure, sweating or fever, which are signs of serotonin syndrome and need emergency care",
        "New or worsening suicidal thoughts, especially early in treatment and after dose changes",
        "Activation of mania or hypomania, which the label warns of in people with bipolar disorder",
        "Dizziness, nausea, headache, irritability, insomnia, anxiety or abnormal dreams after a dose reduction or stopping",
        "Reactions to foods or other drugs in the 10 days after the last dose, since enzyme inhibition can persist that long"],
      note: "Tyramine-rich foods and a long list of drugs are the central hazard; the label's contraindication table is the authority." },
    "alpha-gpc": { watch: ["Sudden facial droop, arm weakness or trouble speaking, since a large Korean cohort linked prescriptions to more strokes", "Nausea, which the Italian label attributes to a dopaminergic effect"] },
    bemethyl: { markers: [["Nothing specific is established", "No modern human safety trial was found"]], watch: ["Changed effects of other medicines, since it induced liver cytochrome P-450 enzymes in rats; this has not been shown in people"], note: "It has been on the WADA monitoring program since 2018." },
    nooglutyl: { markers: [["Nothing specific is established", "No human data were found"]] },
    "gb-115": { markers: [["Nothing specific is established", "Human data are one small, uncontrolled 21-day study"]], watch: ["Rebound anxiety or withdrawal symptoms on stopping, which rats did not show but people have not been tested for"] },
    neboglamine: { markers: [["Nothing specific is established", "No human data were found"]] },
    isrib: { markers: [["Nothing specific is established", "No human data exist, and the stress pathway it switches off protects cells in some settings"]] },
    "j-147": { markers: [["Nothing specific is established", "No human results are published; a phase 1 trial is registered"]] },
    "cms-121": { markers: [["Nothing specific is established", "The only human data are an unreviewed preprint"]] },
    acd856: { markers: [["Nothing specific is established", "In 7-day dosing up to 90 mg a day the trial tracked adverse events, laboratory tests, vital signs, ECG, stool frequency and mood questionnaires, including suicidal thoughts, and found no dose-related trends. Nothing is known beyond 7 days"]] },
    adrafinil: { markers: [["Nothing specific is established", "No human trial exists, and the French regulator's text does not name the side effects behind its 2011 review"]], watch: ["Involuntary movements of the mouth, lips or face, reported in a case that did not clear in the four months after stopping"], note: "WADA prohibits it in competition, and modafinil, its metabolite, is also tested for." }
  };

  delete M.methylene_blue_placeholder; delete M.oxandrolone_placeholder;
  Object.entries(M).forEach(([slug, m]) => { if (m) A.monitoring = Object.assign(A.monitoring || {}, { [slug]: m }); });

  // Class-level fallbacks: anything in these categories without its own entry gets the group list.
  const byCategory = { aas: G.androgen, sarms: [["Total testosterone, LH, FSH", "SARMs suppress the body's own production"], ["HDL cholesterol", "Falls across the class"], ["Liver enzymes", "Case reports of injury across the class"]], gh: G.gh };
  A.entries.filter((e) => e.type === "compound" && !A.monitoring[e.slug] && byCategory[e.category])
    .forEach((e) => { A.monitoring[e.slug] = { markers: byCategory[e.category] }; });
})(window.ATLAS);
