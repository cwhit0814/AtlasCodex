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
    testosterone: { markers: [...G.androgen], watch: ["Swelling in the ankles", "Persistent headaches", "Breast tissue that is tender or firm", "Shortness of breath on exertion"] },
    nandrolone: { markers: [...G.androgen, ["Prolactin", "Nandrolone is progestogenic, and raised prolactin contributes to sexual dysfunction and breast tissue"]], watch: ["Low libido or erectile difficulty despite adequate testosterone", "Nipple tenderness or discharge"] },
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
    equipoise: { markers: [...G.androgen, ["Hematocrit, repeated", "Users consistently report large rises, and its long ester means levels keep climbing for weeks"]], watch: ["Headaches or visual changes, which can accompany a high hematocrit", "Anxiety"] },
    ment: { markers: [...G.androgen], watch: ["Rapid estrogenic effects, since it aromatizes to a potent estrogen"] },

    ostarine: { markers: [["Total testosterone, LH, FSH", "SARMs suppress the body's own production in a dose-dependent way"], ["HDL cholesterol", "Falls in a dose-dependent way in trials"], ["Liver enzymes", "Case reports of liver injury exist across the SARM class"]] },
    "lgd-4033": { markers: [["Total testosterone, SHBG, LH, FSH", "All fell within 21 days in the phase 1 trial"], ["HDL cholesterol", "Fell markedly at the highest trial dose"], ["Liver enzymes", "Published case reports of cholestatic injury"]], watch: ["Fatigue or low libido, which track the suppression"] },
    "rad-140": { markers: [["Liver enzymes and bilirubin", "Several published case reports of drug-induced liver injury, some severe"], ["Total testosterone, LH, FSH", "Expected to suppress, by class"], ["HDL cholesterol", "Expected to fall, by class"]], watch: ["Jaundice", "Unexplained fatigue or nausea"] },

    "growth-hormone": { markers: [...G.gh], watch: ["Numbness or tingling in the hands, which suggests carpal tunnel compression", "Puffy hands and face", "Joint pain"] },
    "mk-677": { markers: [...G.gh], watch: ["Rising fasting glucose", "Swelling and joint pain", "Increased appetite that outpaces the goal"] },
    "cjc-1295": { markers: [...G.gh], watch: ["Injection-site reactions", "Water retention"] },
    ipamorelin: { markers: [...G.gh] },
    "ghrp-2": { markers: [...G.gh, ["Cortisol and prolactin", "This class raises both, unlike the more selective secretagogues"]] },
    "ghrp-6": { markers: [...G.gh, ["Cortisol and prolactin", "Raised by this class"]], watch: ["Intense hunger shortly after dosing"] },
    hexarelin: { markers: [...G.gh, ["Cortisol and prolactin", "Raised by this class"]] },
    tesamorelin: { markers: [...G.gh] },
    sermorelin: { markers: [...G.gh] },
    "igf-1-lr3": { markers: [["Blood glucose", "IGF-1 activates insulin signaling and can cause dangerous hypoglycemia"]], watch: ["Shakiness, sweating, confusion or faintness, which are signs of low blood sugar and need fast-acting carbohydrate"] },
    "igf-1-des": { markers: [["Blood glucose", "Same hypoglycemia risk as other IGF-1 analogs"]], watch: ["Signs of low blood sugar"] },

    semaglutide: { markers: [...G.glp1], watch: ["Severe or persistent abdominal pain radiating to the back, which can signal pancreatitis", "Right-sided abdominal pain after meals, which can signal gallstones", "Vision changes if you have diabetic retinopathy"] },
    tirzepatide: { markers: [...G.glp1], watch: ["Severe abdominal pain", "Persistent vomiting with poor fluid intake"] },
    retatrutide: { markers: [...G.glp1, ["Resting heart rate", "Rose with dose in the phase 2 trial, peaking around 24 weeks"]] },
    cagrilintide: { markers: [...G.glp1] },
    mazdutide: { markers: [...G.glp1, ["Resting heart rate", "Rises modestly"]] },
    survodutide: { markers: [...G.glp1, ["Resting heart rate", "Rises with dose"], ["Liver enzymes", "Studied in fatty liver disease, where liver markers are the endpoint"]] },
    orforglipron: { markers: [...G.glp1] },
    metformin: { markers: [["HbA1c and fasting glucose", "The effect being treated"], ["Vitamin B12", "Long-term use lowers it, and deficiency can be mistaken for unrelated neuropathy"], ...G.renal], watch: ["Persistent diarrhea or nausea, which is the usual reason people stop"] },

    t3: { markers: [...G.thyroid, ["Lean mass, if available", "Excess thyroid hormone breaks down muscle protein as well as fat"]], watch: ["Palpitations or an irregular pulse", "Heat intolerance and sweating", "Tremor"] },
    "gc-1": { markers: [...G.thyroid, ["Lipid panel", "LDL reduction is its intended effect"]] },
    resmetirom: { markers: [["Liver enzymes", "The label advises monitoring for drug-induced liver injury"], ["Lipid panel", "LDL falls as part of its effect"], ...G.thyroid] },

    clenbuterol: { markers: [...G.stimulant, ["Potassium", "It drives potassium into cells, and low blood potassium affects the heart"], ["Blood glucose", "Rises alongside the potassium shift"]], watch: ["Palpitations or chest pain, which warrant stopping and seeking care", "Muscle cramps", "Persistent tremor"] },
    albuterol: { markers: [...G.stimulant, ["Potassium", "Falls at higher doses, as with other β2 agonists"]], watch: ["Palpitations", "Tremor"] },
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

    anastrozole: { markers: [["Estradiol (sensitive assay)", "The point of the drug, and the marker that shows over-suppression"], ["Lipid panel", "Low estradiol worsens the cholesterol profile in men"], ["Bone density, over the long term", "Estrogen maintains bone"]], watch: ["Joint pain, dry skin, low libido or low mood, which together suggest estradiol has gone too low"] },
    letrozole: { markers: [["Estradiol (sensitive assay)", "It suppresses estradiol by more than 95%, so crashing it is easy"], ["Lipid panel", "Worsens with low estradiol"]], watch: ["The same low-estrogen pattern, which arrives faster than with weaker inhibitors"] },
    exemestane: { markers: [["Estradiol (sensitive assay)", "Irreversible inhibition means the effect outlasts the last dose"], ["Lipid panel", "Worsens with low estradiol"]] },
    tamoxifen: { markers: [["LH, FSH and total testosterone", "The markers that show whether the body's own production is restarting"], ["Liver enzymes", "Metabolized hepatically"]], watch: ["Leg swelling or pain, or sudden breathlessness, which can signal a clot", "Visual changes"] },
    raloxifene: { markers: [["LH, FSH, testosterone", "Relevant when used off-label in men"]], watch: ["Signs of a clot, as with other SERMs"] },
    enclomiphene: { markers: [["LH, FSH, total testosterone", "Its intended effect"], ["Estradiol (sensitive assay)", "Rises alongside testosterone"]], watch: ["Visual disturbances", "Mood change"] },
    hcg: { markers: [["Total testosterone", "The downstream effect"], ["Estradiol (sensitive assay)", "Testicular estradiol production rises, sometimes sharply"]], watch: ["Nipple tenderness"] },
    hmg: { markers: [["FSH, LH, testosterone", "Its intended effects"], ["Semen analysis, where fertility is the goal", "The only direct measure of whether sperm production is recovering"]] },

    finasteride: { markers: [["PSA", "It roughly halves PSA, so a baseline before starting matters for future prostate screening"], ["DHT, if relevant", "Confirms the mechanism is engaged"]], watch: ["Low libido, erectile difficulty or low mood, which are uncommon but are the reason most people stop"] },
    dutasteride: { markers: [["PSA", "Also roughly halves PSA; its 5-week half-life means effects persist for months"], ["DHT, if relevant", "Suppressed by more than 90%"]], watch: ["The same sexual and mood effects as finasteride, which take longer to clear"] },
    minoxidil: { markers: [["Blood pressure and resting heart rate, for oral use", "It was originally an oral antihypertensive"]], watch: ["Increased shedding in the first months, which is expected and usually settles", "Ankle swelling or breathlessness on oral use", "Unwanted facial or body hair"] },
    "tri-blend-topical": { markers: [["Blood pressure and resting heart rate", "The minoxidil component is above any approved strength"]], watch: ["Scalp irritation", "Low libido or fatigue, which users attribute to the RU-58841 component, though it has never been studied"] },
    "ru-58841": { watch: ["Low libido, fatigue or breast tenderness, which users report and which would indicate systemic absorption; none of this has ever been measured in a human study"] },

    methylene_blue_placeholder: null,
    "methylene-blue": { markers: [["G6PD status, before use", "It can cause hemolysis in people with G6PD deficiency"]], watch: ["Agitation, fever, rapid heart rate, muscle rigidity or confusion, which can signal serotonin syndrome if any serotonergic drug is also being taken, and need emergency care"] },
    phenibut: { watch: ["Needing more for the same effect, which is the first sign of tolerance", "Rebound anxiety or insomnia between doses, which signals dependence", "Withdrawal can include agitation, hallucinations and psychosis and has required hospital care; stopping abruptly after regular use is itself a risk"] },
    naltrexone: { markers: [["Liver enzymes", "Raised at higher doses"]], watch: ["It triggers immediate, severe withdrawal in anyone taking opioids, so opioid exposure must be fully cleared first"] },
    pramipexole: { watch: ["New or intensified gambling, shopping, eating or sexual urges, which are well documented, often unnoticed by the person, and reverse on stopping", "Sudden daytime sleep onset, which makes driving dangerous"] },
    teriparatide: { markers: [["Serum calcium", "It can raise calcium"]], watch: ["Dizziness on standing after an injection"] },
    oxandrolone_placeholder: null,

    "thymosin-alpha-1": { markers: [["White cell count", "Its intended immune effect"]] },
    "ss-31": { watch: ["Injection-site reactions, the most common effect in trials"] },
    "aod-9604": { markers: [["IGF-1", "Useful as a negative control: unlike GH, it does not raise IGF-1"]] },
    "ace-031": { watch: ["Nosebleeds, gum bleeding or new spider-like blood vessels, which halted its muscular dystrophy trial"] },
    glow: { markers: [["Nothing specific is established", "None of the three ingredients has human dosing or monitoring data"]] },
    "melanotan-2": { watch: ["Any new mole, or a change in the size, shape or color of an existing one, which warrants a dermatologist", "Prolonged erection, which is a medical emergency after four hours"] },
    "melanotan-1": { watch: ["Changes to moles; skin checks are advised during treatment"] },
    bremelanotide: { markers: [["Blood pressure", "Rises transiently after each dose"]], watch: ["Nausea, which affected about 40% in trials", "Darkening of the face, gums or breasts, which may not resolve"] },

    rosuvastatin: { markers: [["Lipid panel", "The effect being treated"], ["Liver enzymes", "Occasional rises"], ["Creatine kinase, if symptomatic", "Distinguishes muscle injury from ordinary training soreness"]], watch: ["Muscle pain or weakness, especially if widespread or with dark urine"] },
    pitavastatin: { markers: [["Lipid panel", "The effect being treated"], ["Creatine kinase, if symptomatic", "As with any statin"]], watch: ["Muscle pain or weakness"] },
    ezetimibe: { markers: [["Lipid panel", "The effect being treated"]] },
    telmisartan: { markers: [["Blood pressure", "The effect being treated"], ["Potassium", "ARBs raise it"], ...G.renal] },
    nebivolol: { markers: [["Blood pressure and resting heart rate", "The effects being treated"]], watch: ["Stopping abruptly can cause rebound tachycardia, so beta blockers are tapered"] },
    propranolol: { markers: [["Blood pressure and resting heart rate", "The effects being treated"]], watch: ["Wheeze or breathlessness, since it blocks β2 receptors in the airways", "It masks the warning signs of low blood sugar"] },
    ondansetron: { watch: ["Fainting or palpitations, which can reflect QT prolongation, particularly alongside other QT-prolonging drugs"] },
    sildenafil: { watch: ["An erection lasting over four hours is a medical emergency", "Sudden vision or hearing loss", "It must never be combined with nitrates"] },
    tadalafil: { watch: ["The same nitrate contraindication and priapism warning as sildenafil, lasting longer because of its 17-hour half-life"] },
    dapoxetine: { watch: ["Fainting, which is more likely with alcohol or dehydration"] },
    trazodone: { watch: ["A persistent erection, which requires immediate care", "Dizziness on standing"] },
    "vitamin-b12": { markers: [["B12, and folate alongside it", "High folate can mask B12 deficiency, and treating the wrong one allows nerve damage to progress"]] },
    glutathione: { watch: ["Wheeze, if inhaled"] }
  };

  delete M.methylene_blue_placeholder; delete M.oxandrolone_placeholder;
  Object.entries(M).forEach(([slug, m]) => { if (m) A.monitoring = Object.assign(A.monitoring || {}, { [slug]: m }); });

  // Class-level fallbacks: anything in these categories without its own entry gets the group list.
  const byCategory = { aas: G.androgen, sarms: [["Total testosterone, LH, FSH", "SARMs suppress the body's own production"], ["HDL cholesterol", "Falls across the class"], ["Liver enzymes", "Case reports of injury across the class"]], gh: G.gh };
  A.entries.filter((e) => e.type === "compound" && !A.monitoring[e.slug] && byCategory[e.category])
    .forEach((e) => { A.monitoring[e.slug] = { markers: byCategory[e.category] }; });
})(window.ATLAS);
