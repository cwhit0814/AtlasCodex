/* Atlas Codex: additional compounds, part 1 of 2 — steroids, SARMs, PCT & fertility, GH axis,
   muscle & performance, metabolic. Uses ATLAS.add / ATLAS.cat from builder.js. */
(function (A) {
  const NE = A.NE;
  A.cat("sarms", "SARMs", "Selective androgen receptor modulators: investigational drugs sold as research chemicals.");
  A.cat("pct", "PCT & Fertility", "Aromatase inhibitors, SERMs and gonadotropins used to manage estrogen and restore natural testosterone.");
  A.cat("muscle", "Muscle & Performance", "Myostatin blockers, ecdysteroids and endurance compounds.");

  const aasNote = "Scored relative to other AAS at doses used in the studies or clinical settings cited, not on an absolute scale.";
  const hpta = ["HPTA / fertility", "high", "Suppresses the body's own testosterone and sperm production", "established", "All androgens shut down LH and FSH through negative feedback. Recovery after stopping usually happens but can take months and is not guaranteed."];
  const oralLiver = ["Liver", "high", "17α-alkylation brings a risk of cholestasis, peliosis hepatis and liver tumors with prolonged use", "established"];
  const hdl = (level) => ["Lipids", level, "Lowers HDL cholesterol, worsening the cholesterol profile", "established"];
  const illicit = ["Product quality", "high", "Current supply is mostly illicit or underground. Concentration and sterility are unverified", "established"];
  const sarmNote = "Scored relative to other SARMs in the codex at doses used in clinical studies.";

  /* ================================================================ AAS */
  A.add({ slug: "nandrolone", updated: "2026-10-17", name: "Nandrolone", aliases: ["Deca-Durabolin", "Nandrolone decanoate", "NPP", "Nandrolone phenylpropionate"], category: "aas", status: "Approved",
    class: "19-nortestosterone derivative", developer: "Organon (1950s–60s)", tags: ["AAS", "19-nor", "progestogenic", "anemia"],
    summary: "Testosterone without its 19-carbon. It builds muscle with weaker androgenic effects on skin and scalp, but it acts on progesterone receptors and suppresses natural testosterone strongly.",
    names: "Sold as Deca-Durabolin (decanoate, long-acting) and Durabolin (phenylpropionate, \"NPP\", shorter-acting). It is approved in many countries for anemia of kidney disease and for some wasting conditions, and is a Schedule III controlled substance in the US.",
    structure: "19-nortestosterone. C<sub>18</sub>H<sub>26</sub>O<sub>2</sub>, about 274.4 g/mol (free steroid). 5α-reductase converts it to dihydronandrolone, a weaker androgen than DHT, which is why it is milder on hair and skin. It aromatizes at a lower rate than testosterone.",
    pubchem: "nandrolone", pnote: aasNote,
    p: [["Anabolism", 4], ["Strength", 3], ["Androgenic effects", 2, 1], ["Estrogenic / progestogenic effects", 3, 1], ["Liver strain", 1, 1], ["Risk load", 3, 1], ["Evidence quality", 3]],
    r: [hpta,
      ["Progestogenic", "moderate", "Activates progesterone receptors, which can raise prolactin and contribute to gynecomastia and sexual dysfunction", "established"],
      ["Sexual function", "moderate", "Low libido and erectile problems are widely reported, especially without adequate testosterone alongside it", "anecdotal"],
      hdl("moderate"), ["Hematocrit", "moderate", "Raises red blood cell production, which is the basis of its anemia use", "established"],
      ["Kidney tests", "low", "Serum creatinine rose in the dialysis trial, which the authors read as a sign of more muscle rather than kidney harm", "human rct", "Relevant because creatinine is the standard kidney screen.", [208]]],
    a: [["Androgen receptor", "established", "Binds the androgen receptor strongly; muscle and bone gains in clinical use"],
      ["Progesterone receptor", "established", "Significant progestogenic activity, unusual among AAS"],
      ["Collagen and joints", "contested", "Often credited with easing joint pain through collagen synthesis. Human evidence is limited"]],
    t: [{ title: "Dialysis patients", evidence: "human rct", meta: ["adults on hemodialysis", "nandrolone decanoate weekly or placebo", "6 months", "randomized, double-blind, placebo-controlled"], body: "Nandrolone increased lean body mass and improved walking and stair-climbing performance compared with placebo.", refs: [208] },
      { title: "HIV with immune deficiency: Nandrolone with or without training", evidence: "human rct", meta: ["30 HIV-positive men with CD4 below 400", "weekly nandrolone decanoate injections at pharmacological doses, alone or with supervised resistance training", "12 weeks", "randomized, open-label, no placebo"], body: "Both groups gained about 3-4 kg of body weight, mostly lean tissue, and thigh muscle area rose similarly. Lean mass and strength rose more when training was added.", refs: [209] },
      { title: "Older women after hip fracture", evidence: "human rct", meta: ["60 lean women aged about 83 after femoral neck fracture", "protein supplement alone, protein plus nandrolone decanoate 25 mg IM every 3 weeks, or control", "6 months, with 12-month follow-up", "randomized, open-label"], body: "Lean mass fell 1.2 kg in the control and protein-only groups but held steady with nandrolone. Daily living function and quality of life declined least in the nandrolone group.", refs: [210] },
      { title: "HIV wasting: Open trial", evidence: "human obs", meta: ["24 men with HIV wasting who did not respond to diet advice", "nandrolone decanoate IM every 2 weeks", "16 weeks", "open, uncontrolled"], body: "Weight and lean mass rose (about 3 kg lean mass by anthropometry) and quality of life improved. No toxicity was reported.", note: "No control group, and 7 of 24 did not complete. Weak evidence on its own.", refs: [211] }],
    k: [["Route", "Intramuscular injection"], ["Half-life by ester", "Decanoate: about 6–12 days. Phenylpropionate: about 2–3 days"], ["Metabolism", "Liver; 5α-reduction to dihydronandrolone; limited aromatization"], ["Excretion", "Urine as 19-norandrosterone and related metabolites. Detectable in doping tests for many months after decanoate"]], ke: "established",
    related: ["testosterone", "trenbolone", "equipoise"] });

  A.add({ slug: "dianabol", updated: "2026-10-17", name: "Dianabol", aliases: ["Methandrostenolone", "Metandienone", "Dbol"], category: "aas", status: "Discontinued",
    class: "17α-alkylated testosterone derivative (oral)", developer: "Ciba (1958)", tags: ["AAS", "oral", "17α-alkylated", "aromatizing"],
    summary: "The classic oral steroid of the 1960s and 70s. It produces fast gains in weight and strength, much of it water, and is hard on the liver and blood pressure.",
    names: "Ciba marketed it as Dianabol in the US from 1958 until the 1980s. It is no longer approved in the US or most of Europe but is still produced in some countries. It is a Schedule III controlled substance in the US.",
    structure: "17α-methyl-1-dehydrotestosterone. C<sub>20</sub>H<sub>28</sub>O<sub>2</sub>, about 300.4 g/mol. It aromatizes to 17α-methylestradiol, a potent, long-lasting estrogen.",
    pubchem: "methandrostenolone", pnote: aasNote,
    p: [["Anabolism", 4], ["Strength", 4], ["Androgenic effects", 2, 1], ["Estrogenic effects", 4, 1], ["Liver strain", 4, 1], ["Risk load", 4, 1], ["Evidence quality", 2]],
    r: [hpta, oralLiver, ["Estrogenic", "high", "Converts to a potent methylated estrogen; water retention and gynecomastia are common", "established"], ["Blood pressure", "high", "Fluid retention raises blood pressure", "established", "Systolic blood pressure rose significantly in a controlled trial in weightlifters at 10-25 mg daily.", [213]], hdl("high")],
    a: [["Androgen receptor", "established", "Strong anabolic effect relative to its androgenic effect in animal assays"], ["Aromatase", "established", "Converted to 17α-methylestradiol"]],
    t: [
      { title: "Weightlifters: Methandienone 10 or 25 mg daily", evidence: "human rct", meta: ["13 experienced male weightlifters on high-protein diets", "methandienone 10 or 25 mg daily, or placebo", "crossover periods", "double-blind, crossover"], body: "Performance improved more on methandienone than on placebo. Body weight rose, apparently with water retention, and systolic blood pressure rose significantly. Side effects made 3 of the 13 withdraw; all resolved after stopping.", refs: [213] },
      { title: "Weightlifters: Methandienone 100 mg daily", evidence: "human rct", meta: ["7 male weightlifters in regular training", "methandienone 100 mg daily or placebo", "6 weeks each, with 6 weeks between", "double-blind, crossover"], body: "Weight (about 2.3 kg), body potassium and nitrogen, muscle size and leg strength rose on the drug but not on placebo. The authors concluded the weight gained was not normal muscle tissue.", refs: [212] }],
    k: [["Route", "Oral"], ["Half-life", "About 3–6 hours"], ["Metabolism", "Liver; aromatized to 17α-methylestradiol"], ["Excretion", "Urine as metabolites. Long-term metabolites are detectable in doping tests for weeks"]], ke: "established",
    related: ["anadrol", "testosterone", "turinabol"] });

  A.add({ slug: "halotestin", updated: "2026-10-17", name: "Halotestin", aliases: ["Fluoxymesterone", "Androxy"], category: "aas", status: "Discontinued",
    class: "17α-alkylated fluorinated testosterone derivative (oral)", developer: "Upjohn (1956)", tags: ["AAS", "oral", "17α-alkylated", "androgen"],
    summary: "A very strong oral androgen with little muscle-building effect. It is known for aggression and strength gains and is one of the most liver-toxic steroids.",
    names: "Sold by Upjohn as Halotestin, later as Androxy. It was approved for male hypogonadism and some breast cancers. US products have been discontinued. It is a Schedule III controlled substance.",
    structure: "9α-fluoro-11β-hydroxy-17α-methyltestosterone. C<sub>20</sub>H<sub>29</sub>FO<sub>3</sub>, about 336.4 g/mol. It does not aromatize.",
    pubchem: "fluoxymesterone", pnote: aasNote,
    p: [["Anabolism", 2], ["Strength", 4], ["Androgenic effects", 5, 1], ["Estrogenic effects", 0, 1], ["Liver strain", 5, 1], ["Risk load", 5, 1], ["Evidence quality", 2]],
    r: [hpta, oralLiver, hdl("high"), ["Mood and aggression", "moderate", "Associated with irritability and aggression", "anecdotal"]],
    a: [["Androgen receptor", "established", "Potent androgen with weak anabolic action in muscle relative to its androgenic effects"], ["11β-HSD2", "in vitro", "Inhibits 11β-hydroxysteroid dehydrogenase type 2, which may contribute to fluid and blood pressure effects"]],
    t: [
      { title: "Metastatic breast cancer: Added to tamoxifen", evidence: "human rct", meta: ["238 postmenopausal women with metastatic breast cancer", "tamoxifen 10 mg twice daily alone or with fluoxymesterone 10 mg twice daily", "to progression", "randomized"], body: "Response rate was 53% with the combination against 42% with tamoxifen alone. Survival did not differ, and androgenic side effects were greater with fluoxymesterone.", refs: [216] }],
    k: [["Route", "Oral"], ["Bioavailability", "Well absorbed"], ["Half-life", "About 9 hours"], ["Metabolism", "Liver"], ["Excretion", "Urine"]], ke: "established",
    related: ["superdrol", "anadrol", "winstrol"] });

  A.add({ slug: "ment", updated: "2026-10-17", name: "MENT", aliases: ["Trestolone", "7α-methyl-19-nortestosterone"], category: "aas", status: "Investigational",
    class: "7α-methylated 19-nortestosterone", developer: "Population Council (male contraceptive research)", tags: ["AAS", "19-nor", "contraception"],
    summary: "An extremely potent synthetic androgen studied as a male contraceptive implant. It is much stronger than testosterone per milligram and aromatizes to a potent estrogen.",
    names: "Developed by the Population Council as a long-acting male contraceptive and androgen replacement implant. It has never been approved. Trestolone acetate and enanthate sold online are underground products.",
    structure: "7α-methyl-19-nortestosterone. C<sub>19</sub>H<sub>28</sub>O<sub>2</sub>, about 288.4 g/mol. The 7α-methyl group blocks 5α-reduction, so prostate stimulation is lower than with testosterone. It aromatizes to 7α-methylestradiol.",
    pubchem: "trestolone", pnote: aasNote,
    p: [["Anabolism", 5], ["Strength", 4], ["Androgenic effects", 3, 1], ["Estrogenic effects", 4, 1], ["Risk load", 4, 1], ["Evidence quality", 2]],
    r: [hpta, ["Estrogenic", "high", "Aromatizes to a potent estrogen", "established"], hdl("moderate"), illicit,
      ["Hematocrit", "moderate", "Raised red cell count, hematocrit and hemoglobin in the implant trial", "human rct", "Reversible after implant removal.", [217]]],
    a: [["Androgen receptor", "human rct", "Potent androgen receptor agonist; suppresses gonadotropins strongly enough to stop sperm production"], ["5α-reductase", "established", "Not a substrate, which spares the prostate relative to testosterone"]],
    t: [
      { title: "Contraceptive implants in healthy men", evidence: "human rct", meta: ["35 healthy men at 3 clinics", "1, 2 or 4 MENT acetate implants, each releasing about 400 µg/day at first", "6 to 12 months", "randomized dose comparison"], body: "Testosterone, LH and FSH fell with dose. No man on 1 implant became oligozoospermic. With 4 implants, 8 of 12 reached azoospermia but 2 did not respond. Hematocrit and hemoglobin rose, SHBG fell, and these changes reversed.", refs: [217] }],
    k: [["Route", "Implant in clinical studies; injection (acetate or enanthate) in informal use"], ["Half-life", "Short for the free steroid; depends on ester"], ["Metabolism", "Liver; aromatized; not 5α-reduced"], ["Excretion", NE]], ke: "human obs",
    related: ["nandrolone", "trenbolone"] });

  A.add({ slug: "primobolan", name: "Primobolan", aliases: ["Metenolone", "Methenolone", "Primo"], category: "aas", status: "Discontinued",
    class: "DHT derivative (1-methyl)", developer: "Schering (1960s)", tags: ["AAS", "DHT", "non-aromatizing"],
    summary: "A mild DHT-derived steroid available as an oral acetate and an injectable enanthate. It is known for being gentle relative to other AAS, which also means it is weak.",
    names: "Schering sold metenolone acetate (oral) and enanthate (injection) as Primobolan and Primobolan Depot. Bayer, which later acquired Schering, stopped production. It is a Schedule III controlled substance in the US and is heavily counterfeited.",
    structure: "1-methyl-5α-androst-1-en-17β-ol-3-one. It is not 17α-alkylated, so the oral form is less liver-toxic but also poorly bioavailable. It does not aromatize. Molecular weight about 302.5 g/mol (free steroid).",
    pubchem: "metenolone", pnote: aasNote,
    p: [["Anabolism", 2], ["Strength", 2], ["Androgenic effects", 2, 1], ["Estrogenic effects", 0, 1], ["Liver strain", 1, 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [hpta, hdl("moderate"), ["Product quality", "high", "One of the most commonly faked steroids, since genuine pharmaceutical supply ended", "anecdotal"]],
    a: [["Androgen receptor", "established", "Moderate anabolic, low androgenic profile"], ["Aromatase", "established", "Not a substrate"]],
    t: [], noTrials: "There are no modern controlled trials.",
    k: [["Route", "Oral (acetate) or intramuscular injection (enanthate)"], ["Half-life", "Acetate: a few hours. Enanthate: roughly 5 days (ester estimate)"], ["Metabolism", "Liver"], ["Excretion", "Urine"]], ke: "anecdotal",
    related: ["masteron", "anavar"] });

  A.add({ slug: "proviron", updated: "2026-10-17", name: "Proviron", aliases: ["Mesterolone"], category: "aas", status: "Approved",
    class: "Oral DHT derivative (1α-methyl)", developer: "Schering (1960s)", tags: ["AAS", "DHT", "oral", "SHBG"],
    summary: "An oral DHT derivative with weak anabolic effect. It is used to support libido and binds SHBG strongly, which may raise free levels of other steroids.",
    names: "Sold as Proviron by Bayer in Europe and elsewhere for male hypogonadism and infertility. It is not approved in the US.",
    structure: "1α-methyl-dihydrotestosterone. C<sub>20</sub>H<sub>32</sub>O<sub>2</sub>, about 304.5 g/mol. It is not 17α-alkylated and does not aromatize.",
    pubchem: "mesterolone", pnote: aasNote,
    p: [["Anabolism", 1], ["Libido / androgenic", 3], ["Liver strain", 1, 1], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [["HPTA", "moderate", "Suppresses natural testosterone less than most AAS at clinical doses, but suppression still occurs at higher doses", "human obs"], ["Androgenic", "moderate", "Scalp hair loss and acne in susceptible people", "established"], hdl("moderate")],
    a: [["Androgen receptor", "established", "Androgenic with little muscle effect, since it is inactivated in muscle tissue"], ["SHBG", "established", "Binds sex hormone–binding globulin strongly"]],
    t: [
      { title: "WHO trial in unexplained male infertility", evidence: "human rct", meta: ["248 infertile couples at 7 centres (157 meeting strict criteria)", "mesterolone 75 or 150 mg daily, or placebo", "6 months", "randomized, double-blind, placebo-controlled"], body: "Pregnancy rates at 8 months were 9%, 12% and 16% for placebo, 75 mg and 150 mg; the differences were not significant. Semen quality did not change.", note: "The one large controlled trial of its main fertility use found no clear benefit.", refs: [218] }],
    k: [["Route", "Oral"], ["Bioavailability", "Low but sufficient orally"], ["Half-life", "About 12 hours"], ["Metabolism", "Liver"], ["Excretion", "Urine"]], ke: "established",
    related: ["masteron", "testosterone"] });

  A.add({ slug: "trenbolone", name: "Trenbolone", aliases: ["Tren", "Trenbolone acetate", "Trenbolone enanthate", "Parabolan", "Finaplix"], category: "aas", status: "Veterinary",
    class: "19-nortestosterone derivative (triene)", developer: "Roussel Uclaf (1960s)", tags: ["AAS", "19-nor", "veterinary", "progestogenic"],
    summary: "A very potent 19-nor steroid used legally only as a cattle implant. It is known for dramatic body composition changes alongside severe side effects on sleep, mood, lipids and cardiovascular health.",
    names: "Trenbolone acetate is approved for beef cattle as ear implants (e.g. Finaplix, Revalor). A human version, Parabolan (trenbolone hexahydrobenzylcarbonate), was briefly sold in France and discontinued in 1997. All human-use products are underground conversions or illicit manufacture. It is a Schedule III controlled substance.",
    structure: "17β-hydroxyestra-4,9,11-trien-3-one. C<sub>18</sub>H<sub>22</sub>O<sub>2</sub>, about 270.4 g/mol. It does not aromatize and is not 5α-reduced, but it is strongly progestogenic.",
    pubchem: "trenbolone", pnote: aasNote,
    p: [["Anabolism", 5], ["Strength", 5], ["Androgenic effects", 4, 1], ["Progestogenic effects", 4, 1], ["Cardiovascular strain", 5, 1], ["Risk load", 5, 1], ["Evidence quality", 1]],
    r: [hpta, hdl("high"), ["Cardiovascular", "high", "Strongly unfavorable lipid changes; associated with heart muscle changes in observational studies of users", "human obs"],
      ["Sleep and mood", "high", "Insomnia, night sweats, anxiety and aggression are commonly reported", "anecdotal"],
      ["Progestogenic", "moderate", "Can raise prolactin and contribute to gynecomastia and sexual dysfunction", "established"], illicit],
    a: [["Androgen receptor", "animal", "Binds the androgen receptor with high affinity; strong anabolic effect in livestock"], ["Progesterone receptor", "established", "Significant progestogenic activity"], ["Glucocorticoid receptor", "contested", "Proposed anti-catabolic effect by opposing cortisol"]],
    t: [], noTrials: "There are no human clinical trials. Evidence comes from livestock research and user reports.",
    k: [["Route", "Intramuscular injection (illicit); cattle ear implant (veterinary)"], ["Half-life by ester", "Acetate: about 1–3 days. Enanthate: roughly 5–7 days (ester estimates)"], ["Metabolism", "Liver; not aromatized"], ["Excretion", "Urine"]], ke: "anecdotal",
    related: ["nandrolone", "ment", "testosterone"] });

  A.add({ slug: "turinabol", updated: "2026-10-17", name: "Turinabol", aliases: ["Oral Turinabol", "Chlorodehydromethyltestosterone", "Tbol"], category: "aas", status: "Discontinued",
    class: "17α-alkylated chlorinated testosterone derivative (oral)", developer: "Jenapharm (East Germany, 1960s)", tags: ["AAS", "oral", "17α-alkylated", "doping history"],
    summary: "The oral steroid at the center of East Germany's state doping program. It is milder than Dianabol, but still a liver-toxic oral androgen.",
    names: "Produced by Jenapharm in East Germany and given to thousands of athletes in the State Plan 14.25 doping program. Pharmaceutical production ended in the 1990s. Re-tests of samples from the 2008 and 2012 Olympics caught many athletes using newly detectable long-term metabolites.",
    structure: "4-chloro-17α-methyl-1-dehydrotestosterone. C<sub>20</sub>H<sub>27</sub>ClO<sub>2</sub>, about 334.9 g/mol. The 4-chloro group prevents aromatization.",
    pubchem: "4-chlorodehydromethyltestosterone", pnote: aasNote,
    p: [["Anabolism", 3], ["Strength", 3], ["Androgenic effects", 2, 1], ["Estrogenic effects", 0, 1], ["Liver strain", 3, 1], ["Risk load", 3, 1], ["Evidence quality", 2]],
    r: [hpta, oralLiver, hdl("high"), ["Long-term harm", "high", "Former East German athletes report high rates of health problems, though attributing them to one drug is difficult", "human obs", "Classified program records analysed after 1990 show thousands of East German athletes a year, including minors and especially girls, were given androgens, and damaging side effects were recorded, some needing surgery.", [219]]],
    a: [["Androgen receptor", "established", "Moderate anabolic effect with low androgenicity"], ["Aromatase", "established", "Not a substrate"]],
    t: [
      { title: "Single controlled dose: How long it is detectable", evidence: "human obs", meta: ["5 healthy male volunteers", "single 5 mg oral dose of dehydrochloromethyltestosterone", "60 days of urine collection", "controlled administration, excretion study"], body: "Long-term metabolites were found in all five men. The last clearly positive sample was collected between about 10 and 45 days after one dose, varying between men.", note: "An anti-doping study, not a study of effects or safety.", refs: [226] }],
    k: [["Route", "Oral"], ["Half-life", "About 16 hours"], ["Metabolism", "Liver; long-lived metabolites"], ["Excretion", "Urine. Long-term metabolites detectable for months"]], ke: "established",
    related: ["dianabol", "anavar", "winstrol"] });

  A.add({ slug: "winstrol", updated: "2026-10-17", name: "Winstrol", aliases: ["Stanozolol", "Winny", "Winstrol-V"], category: "aas", status: "Discontinued",
    class: "17α-alkylated DHT derivative (pyrazole)", developer: "Winthrop (1962)", tags: ["AAS", "oral", "17α-alkylated", "doping history"],
    summary: "A DHT-derived steroid taken orally or as an injectable suspension. It is known for a dry, hard look and strength gains, and for severe effects on cholesterol.",
    names: "Sold as Winstrol for hereditary angioedema and anemia. Human US products were discontinued in 2010. A veterinary version (Winstrol-V) existed for animals. Ben Johnson's 1988 Olympic disqualification involved stanozolol. It is a Schedule III controlled substance.",
    structure: "17α-methyl-2'H-androsta-2,4-dieno[3,2-c]pyrazol-17β-ol. C<sub>21</sub>H<sub>32</sub>N<sub>2</sub>O, about 328.5 g/mol. The pyrazole ring fused to the A-ring is unique among AAS. It does not aromatize.",
    pubchem: "stanozolol", pnote: aasNote,
    p: [["Anabolism", 3], ["Strength", 4], ["Androgenic effects", 3, 1], ["Estrogenic effects", 0, 1], ["Liver strain", 4, 1], ["Risk load", 4, 1], ["Evidence quality", 2]],
    r: [hpta, oralLiver, ["Lipids", "high", "Lowers HDL cholesterol, worsening the cholesterol profile", "established", "In a randomized crossover trial, 6 mg daily cut HDL by a third and raised LDL by nearly a third within 6 weeks.", [214]], ["Joints and tendons", "moderate", "Joint pain is widely reported", "anecdotal"],
      ["Virilization (women)", "moderate", "Hirsutism, acne and menstrual changes in long-term clinical use at low doses", "human obs", null, [215]]],
    a: [["Androgen receptor", "established", "Anabolic with moderate androgenicity"], ["SHBG", "established", "Lowers SHBG, raising free testosterone"]],
    t: [
      { title: "Stanozolol against testosterone: Lipids", evidence: "human rct", meta: ["11 male weightlifters", "stanozolol 6 mg daily orally or testosterone enanthate 200 mg weekly IM", "6 weeks each", "randomized crossover"], body: "Stanozolol cut HDL by 33%, HDL2 by 71% and apolipoprotein A-I by 40%, and raised LDL by 29%. Testosterone lowered HDL by only 9%. Weight gain was similar.", note: "Shows the HDL collapse is a property of the oral 17α-alkylated drug, not of androgen dose alone.", refs: [214] },
      { title: "Hereditary angioedema: 20 to 40 years of use", evidence: "human obs", meta: ["21 patients with hereditary angioedema", "stanozolol, lowest effective dose", "20-40 years", "long-term follow-up with questionnaire, labs and liver ultrasound"], body: "Minimal effective starting doses were 0.5 to 2 mg daily. Side effects occurred in 10 of 21 (hirsutism, weight gain, menstrual changes, acne, mood changes) and settled with dose reduction. Five had low HDL; liver enzymes showed no persistent abnormality.", refs: [215] }],
    k: [["Route", "Oral tablets or intramuscular aqueous suspension"], ["Half-life", "About 9 hours oral; about 24 hours for the injectable suspension"], ["Metabolism", "Liver"], ["Excretion", "Urine; long-term metabolites detectable for weeks"]], ke: "established",
    related: ["anavar", "turinabol", "masteron"] });

  /* ================================================================ SARMs */
  A.add({ slug: "ostarine", updated: "2026-10-17", name: "Ostarine", aliases: ["Enobosarm", "MK-2866", "GTx-024"], category: "sarms", status: "Investigational",
    class: "Nonsteroidal selective androgen receptor modulator", developer: "GTx; now Veru", tags: ["SARM", "cachexia", "muscle wasting", "WADA prohibited"],
    summary: "The most studied SARM. In clinical trials it added modest lean mass in older adults and cancer patients. It is still not approved and is illegally sold in supplements.",
    names: "Developed by GTx as enobosarm for cancer-related muscle wasting and later for breast cancer and muscle preservation during GLP-1 weight loss (Veru). It is not approved anywhere. The FDA has warned about SARMs in supplements, and it is prohibited by WADA.",
    structure: "A nonsteroidal aryl-propionamide. C<sub>19</sub>H<sub>14</sub>F<sub>3</sub>N<sub>3</sub>O<sub>3</sub>, about 389.3 g/mol. It does not aromatize or undergo 5α-reduction.",
    pubchem: "enobosarm", pnote: sarmNote,
    p: [["Lean mass", 2], ["Strength", 2], ["Suppression", 2, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["HPTA", "moderate", "Lowers natural testosterone and SHBG in a dose-dependent way", "human rct"], ["Lipids", "moderate", "Lowers HDL cholesterol", "human rct"],
      ["Liver", "moderate", "Case reports of drug-induced liver injury with SARM products", "human obs", "Raised liver enzymes were the commonest serious drug-related event at 9-18 mg daily in a breast cancer trial, and cholestatic liver injury has been reported with ostarine supplement products.", [232, 233]], ["Product quality", "high", "Supplement and research-chemical products often contain the wrong dose or a different SARM", "human obs"],
      ["Calcium", "low", "High blood calcium occurred in about 3% at 9-18 mg daily in women with advanced breast cancer", "human rct", "Bone metastases may have contributed.", [232]]],
    a: [["Androgen receptor", "human rct", "Tissue-selective activation: anabolic in muscle and bone with less effect on prostate"]],
    t: [{ title: "Healthy older men and women", evidence: "human rct", meta: ["120 healthy older adults", "enobosarm 0.1–3 mg daily or placebo", "86 days", "randomized, double-blind, placebo-controlled, phase 2"], body: "The 3 mg dose increased total lean mass by about 1.3 kg and improved stair-climb power. HDL fell and SHBG fell in a dose-dependent way.", refs: [230] },
      { title: "Cancer cachexia", evidence: "human rct", meta: ["159 patients with cancer-related muscle wasting", "enobosarm 1 mg or 3 mg daily, or placebo", "up to 113 days", "randomized, double-blind, placebo-controlled, phase 2"], body: "Lean body mass increased by about 1–1.5 kg with enobosarm, with no significant change on placebo.", note: "Later phase 3 trials (POWER) did not meet their co-primary endpoints combining lean mass and stair-climb power.", refs: [231] },
      { title: "Advanced ER-positive breast cancer", evidence: "human rct", meta: ["136 postmenopausal women with AR-positive, ER-positive, HER2-negative advanced breast cancer", "enobosarm 9 or 18 mg daily", "median follow-up 7.5 months", "randomized, open-label, phase 2, no placebo"], body: "Clinical benefit at 24 weeks was 32% at 9 mg and 29% at 18 mg. Grade 3-4 drug-related adverse events occurred in 8% and 16%, most often raised liver enzymes, high calcium and fatigue.", note: "These are the highest doses given to humans, three to six times the muscle-trial dose.", refs: [232] }],
    k: [["Route", "Oral"], ["Bioavailability", "Orally active"], ["Half-life", "About 24 hours"], ["Metabolism", "Liver, including glucuronidation"], ["Excretion", "Urine and feces"]], ke: "human rct",
    related: ["lgd-4033", "rad-140", "testosterone"] });

  A.add({ slug: "lgd-4033", updated: "2026-10-17", name: "LGD-4033", aliases: ["Ligandrol", "VK5211"], category: "sarms", status: "Investigational",
    class: "Nonsteroidal selective androgen receptor modulator", developer: "Ligand Pharmaceuticals; later Viking Therapeutics", tags: ["SARM", "muscle wasting", "hip fracture", "WADA prohibited"],
    summary: "A potent SARM that added lean mass within three weeks in a small trial in young men, with dose-dependent suppression of natural testosterone and HDL.",
    names: "Developed by Ligand and later by Viking as VK5211 for muscle recovery after hip fracture. It is not approved anywhere. It is one of the most common SARMs in illegal supplements and anti-doping cases.",
    structure: "A nonsteroidal pyrrolidinyl-benzonitrile. C<sub>14</sub>H<sub>12</sub>F<sub>6</sub>N<sub>2</sub>O, about 338.3 g/mol.",
    pubchem: "ligandrol", pnote: sarmNote,
    p: [["Lean mass", 3], ["Strength", 2], ["Suppression", 3, 1], ["Risk load", 3, 1], ["Evidence quality", 3]],
    r: [["HPTA", "high", "Suppressed total testosterone, SHBG and FSH in a dose-dependent way within 21 days", "human rct"], ["Lipids", "high", "HDL fell markedly at the highest dose", "human rct"],
      ["Liver", "moderate", "Case reports of cholestatic liver injury with LGD-4033 products", "human obs", "Includes a biopsy-confirmed case of cholestatic hepatitis in a man using an LGD-4033 product. The product contents were not confirmed by analysis.", [235]], ["Product quality", "high", "Supplement and research-chemical products are frequently mislabeled", "human obs"]],
    a: [["Androgen receptor", "human rct", "High-affinity, tissue-selective androgen receptor agonist"]],
    t: [{ title: "Healthy young men", evidence: "human rct", meta: ["76 healthy men aged 21–50", "LGD-4033 0.1, 0.3 or 1.0 mg daily, or placebo", "21 days", "randomized, double-blind, placebo-controlled"], body: "Lean body mass increased by about 1.2 kg at 1.0 mg, with no significant change in fat. Total testosterone, SHBG, FSH and HDL fell with dose; all returned to baseline after stopping. Hemoglobin, PSA, liver enzymes and the QT interval did not change.", refs: [234] },
      { title: "Recovery after hip fracture (company-reported, unpublished)", evidence: "contested", meta: ["older adults recovering from hip fracture", "VK5211 or placebo", "12 weeks", "phase 2, described by the developer as randomized, double-blind and placebo-controlled"], body: "The developer announced that lean body mass increased with VK5211 compared with placebo, meeting the primary endpoint.", note: "This trial has not been published in a peer-reviewed journal. The result rests on company announcements only and cannot be checked independently." }],
    k: [["Route", "Oral"], ["Half-life", "About 24–36 hours"], ["Metabolism", "Liver"], ["Excretion", "Urine; metabolites detectable for weeks"]], ke: "human rct",
    related: ["ostarine", "rad-140"] });

  A.add({ slug: "rad-140", updated: "2026-10-17", name: "RAD-140", aliases: ["Testolone", "Vosilasarm", "EP0062"], category: "sarms", status: "Investigational",
    class: "Nonsteroidal selective androgen receptor modulator", developer: "Radius Health; later Ellipses Pharma", tags: ["SARM", "breast cancer", "WADA prohibited"],
    summary: "A SARM now in clinical development for hormone-sensitive breast cancer. It has no published muscle-building trials in humans, and there are multiple case reports of liver injury from products sold as RAD-140.",
    names: "Developed by Radius Health and now Ellipses as vosilasarm for androgen receptor–positive, estrogen receptor–positive breast cancer. It is not approved anywhere and is prohibited by WADA.",
    structure: "A nonsteroidal benzonitrile with an oxadiazole ring. C<sub>20</sub>H<sub>16</sub>ClN<sub>5</sub>O<sub>2</sub>, about 393.8 g/mol.",
    pubchem: "RAD140", pnote: sarmNote,
    p: [["Lean mass", 3], ["Human evidence (muscle)", 0], ["Suppression", 3, 1], ["Risk load", 3, 1], ["Evidence quality", 2]],
    r: [["Liver", "high", "Several published case reports of drug-induced liver injury, some severe", "human obs", "Liver-enzyme rises were the most common adverse event in its only human trial, in women with metastatic breast cancer at 50-150 mg daily. A 24-year-old developed cholestatic liver injury with very high bilirubin after 5 weeks of a RAD-140 supplement; it resolved after stopping.", [236, 237]], ["HPTA", "high", "Expected to suppress natural testosterone, but this has never been measured in men", "contested", "SHBG fell in every patient in the phase 1 trial in women, a sign of androgen action. No male data exist.", [236]],
      ["Lipids", "moderate", "Expected to lower HDL, as other SARMs do", "contested"], ["Product quality", "high", "Products sold as RAD-140 are unregulated", "established"]],
    a: [["Androgen receptor", "animal", "Potent anabolic effect in muscle with reduced prostate stimulation in primates"], ["Breast cancer", "human rct", "Androgen receptor activation suppresses growth of some ER-positive breast cancers"]],
    t: [
      { title: "First-in-human: ER-positive metastatic breast cancer", evidence: "human rct", meta: ["22 postmenopausal women with ER-positive, HER2-negative metastatic breast cancer", "RAD140 50, 100 or 150 mg once daily", "until progression", "phase 1, dose escalation, open-label"], body: "Raised AST (59%), ALT (46%) and bilirubin (27%) were the commonest adverse events, and grade 3-4 events occurred in 73%. The maximum tolerated dose was 100 mg daily. Half-life was about 45 hours, and SHBG fell in every patient tested.", note: "The only published human trial. It is a cancer study and says nothing about muscle.", refs: [236] }],
    k: [["Route", "Oral"], ["Half-life", "Long; supports once-daily dosing"], ["Metabolism", NE], ["Excretion", NE]], ke: "human rct",
    related: ["lgd-4033", "ostarine"] });

  /* ================================================================ PCT & fertility */
  const aiRisks = (extra) => [["Low estrogen", "high", "Excess suppression causes joint pain, low libido, low mood and lower bone density, and worsens the lipid profile", "established"], ...(extra || [])];
  A.add({ slug: "anastrozole", updated: "2026-10-17", name: "Anastrozole", aliases: ["Arimidex"], category: "pct", status: "Approved",
    class: "Nonsteroidal aromatase inhibitor", developer: "AstraZeneca", tags: ["aromatase inhibitor", "estrogen", "breast cancer"],
    summary: "An aromatase inhibitor approved for breast cancer. It is used off-label on cycle to control estrogen, where overuse commonly drives estradiol too low.",
    names: "Sold as Arimidex for hormone receptor–positive breast cancer in postmenopausal women. Off-label use in men on testosterone is common but not an approved indication.",
    structure: "A triazole nonsteroidal aromatase inhibitor. C<sub>17</sub>H<sub>19</sub>N<sub>5</sub>, about 293.4 g/mol. It binds aromatase reversibly.",
    pubchem: "anastrozole", p: [["Estrogen control", 4], ["Risk of over-suppression", 3, 1], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: aiRisks([["Bone", "moderate", "Reduces bone mineral density with long-term use", "human rct", "In older men, spine bone density fell over one year at 1 mg daily while it rose on placebo.", [241]],
      ["Gynecomastia (lack of effect)", "unknown", "It did not prevent or reverse gynecomastia in two controlled trials, so it should not be assumed to treat it", "human rct", "Pubertal gynecomastia and antiandrogen-induced gynecomastia. Not tested in steroid users.", [242, 243]]]),
    a: [["Aromatase", "established", "Reversibly inhibits aromatase, lowering estradiol by about 80% or more in postmenopausal women"]],
    t: [
      { title: "Older men with low testosterone: Hormones", evidence: "human rct", meta: ["37 men aged 62-74 with testosterone below 350 ng/dL", "anastrozole 1 mg daily, 1 mg twice weekly, or placebo", "12 weeks", "randomized, double-blind, placebo-controlled"], body: "Total testosterone rose from about 343 to 572 ng/dL on daily dosing and from 397 to 520 ng/dL twice weekly. Estradiol fell by about a third in both groups and LH rose. Sexual function, quality of life and hematocrit did not change. PSA rose in the twice-weekly group only.", refs: [240] },
      { title: "Older men with low testosterone: Bone over one year", evidence: "human rct", meta: ["69 men aged 60+ with low or borderline testosterone and symptoms", "anastrozole 1 mg daily or placebo", "1 year", "randomized, double-blind, placebo-controlled"], body: "Testosterone rose from 319 to 474 ng/dL by one year and estradiol fell from 15 to 12 pg/mL. Spine bone density fell on anastrozole and rose on placebo, a significant difference.", note: "Raising testosterone this way did not help the skeleton, because estradiol, not testosterone, protects male bone.", refs: [241] },
      { title: "Pubertal gynecomastia", evidence: "human rct", meta: ["80 boys aged 11-18 with gynecomastia persisting at least 3 months", "anastrozole 1 mg daily or placebo", "6 months", "randomized, double-blind, placebo-controlled"], body: "A 50% or greater reduction in breast volume occurred in 38.5% on anastrozole and 31.4% on placebo, which was not a significant difference.", refs: [242] },
      { title: "Preventing gynecomastia from an antiandrogen: Against tamoxifen", evidence: "human rct", meta: ["114 men with prostate cancer on bicalutamide 150 mg daily", "added placebo, tamoxifen 20 mg daily or anastrozole 1 mg daily", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "Gynecomastia developed in 73% on placebo, 51% on anastrozole and 10% on tamoxifen. Anastrozole did not significantly prevent it, and adverse events were reported in 69% on anastrozole against 35-37% in the other groups.", refs: [243] },
      { title: "Infertile men with a low testosterone-to-estradiol ratio", evidence: "human obs", meta: ["140 subfertile men with abnormal testosterone-to-estradiol ratios", "anastrozole 1 mg daily or testolactone 100-200 mg daily", "during treatment", "uncontrolled comparison"], body: "The testosterone-to-estradiol ratio rose from about 7 to 18 on anastrozole. In 25 oligospermic men with semen tests, sperm concentration rose from 5.5 to 15.6 million/mL.", note: "No placebo group, so the semen change cannot be separated from natural variation.", refs: [244] }],
    k: [["Route", "Oral"], ["Bioavailability", "About 85%"], ["Half-life", "About 40–50 hours"], ["Metabolism", "Liver (N-dealkylation, hydroxylation, glucuronidation)"], ["Excretion", "Mostly urine as metabolites"]], ke: "established",
    related: ["exemestane", "letrozole", "testosterone"] });

  A.add({ slug: "exemestane", updated: "2026-10-17", name: "Exemestane", aliases: ["Aromasin"], category: "pct", status: "Approved",
    class: "Steroidal (irreversible) aromatase inhibitor", developer: "Pharmacia / Pfizer", tags: ["aromatase inhibitor", "estrogen", "breast cancer"],
    summary: "A steroidal aromatase inhibitor that permanently disables the enzyme. It is approved for breast cancer and used off-label to manage estrogen.",
    names: "Sold as Aromasin for hormone receptor–positive breast cancer.",
    structure: "6-methylenandrosta-1,4-diene-3,17-dione. C<sub>20</sub>H<sub>24</sub>O<sub>2</sub>, about 296.4 g/mol. Because it is steroidal, its metabolite has mild androgenic activity.",
    pubchem: "exemestane", p: [["Estrogen control", 4], ["Risk of over-suppression", 3, 1], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: aiRisks(),
    a: [["Aromatase", "established", "Irreversibly binds and inactivates aromatase (\"suicide inhibition\"), so the body must make new enzyme"], ["Androgen receptor", "established", "Its 17-hydro metabolite is weakly androgenic"]],
    t: [
      { title: "Young men: Dose finding and pharmacokinetics", evidence: "human rct", meta: ["12 healthy males aged 14-26 (crossover); 10 in a PK study", "exemestane 25 or 50 mg daily", "10 days each, 14-day washout", "randomized crossover"], body: "Estradiol fell 38% at 25 mg and 32% at 50 mg, with testosterone rising about 60%. Lipids and IGF-1 did not change. Terminal half-life was 8.9 hours in these young men.", note: "The 24-hour half-life on the label comes from postmenopausal women. In these young men it was much shorter.", refs: [245] },
      { title: "MAP.3: Breast cancer prevention", evidence: "human rct", meta: ["4,560 postmenopausal women at raised breast cancer risk", "exemestane or placebo", "median 35 months", "randomized, double-blind, placebo-controlled"], body: "Invasive breast cancer fell 65% (HR 0.35). Adverse events were slightly more common (88% against 85%), with no significant difference in fractures or cardiovascular events over the follow-up.", refs: [246] }],
    k: [["Route", "Oral"], ["Absorption", "Increased by a fatty meal"], ["Half-life", "About 24 hours in postmenopausal women; about 9 hours in young men"], ["Metabolism", "Liver, CYP3A4"], ["Excretion", "Urine and feces as metabolites"]], ke: "established", kr: [245],
    related: ["anastrozole", "letrozole"] });

  A.add({ slug: "letrozole", updated: "2026-10-17", name: "Letrozole", aliases: ["Femara"], category: "pct", status: "Approved",
    class: "Nonsteroidal aromatase inhibitor", developer: "Novartis", tags: ["aromatase inhibitor", "estrogen", "fertility"],
    summary: "The most potent aromatase inhibitor. It is approved for breast cancer and is also used for ovulation induction. Its strength makes estrogen crashes easy.",
    names: "Sold as Femara for breast cancer. It is widely used off-label for ovulation induction in polycystic ovary syndrome.",
    structure: "A triazole nonsteroidal aromatase inhibitor. C<sub>17</sub>H<sub>11</sub>N<sub>5</sub>, about 285.3 g/mol.",
    pubchem: "letrozole", p: [["Estrogen control", 5], ["Risk of over-suppression", 4, 1], ["Risk load", 3, 1], ["Evidence quality", 5]],
    r: aiRisks([["Bone", "moderate", "Reduces bone mineral density with long-term use", "human rct"]]),
    a: [["Aromatase", "established", "Reversibly inhibits aromatase with very high potency, suppressing estradiol by more than 95% in postmenopausal women"]],
    t: [
      { title: "Young and older men: Gonadotropin response", evidence: "human rct", meta: ["10 young and 10 elderly healthy men", "letrozole 2.5 mg daily or placebo", "28 days each, 2-week washout", "placebo-controlled crossover"], body: "Estradiol fell 46% in young and 62% in older men. LH rose more than threefold and testosterone rose 146% and 99% respectively.", refs: [248] },
      { title: "Letrozole against clomiphene for ovulation in PCOS", evidence: "human rct", meta: ["750 infertile women with polycystic ovary syndrome", "letrozole or clomiphene", "up to 5 cycles", "randomized, double-blind, multicentre"], body: "Live births were 27.5% with letrozole against 19.1% with clomiphene. Fatigue and dizziness were more common with letrozole, hot flushes with clomiphene.", refs: [247] }],
    k: [["Route", "Oral"], ["Bioavailability", "About 100%"], ["Half-life", "About 2 days"], ["Steady state", "2–6 weeks"], ["Metabolism", "Liver, CYP3A4 and CYP2A6"], ["Excretion", "Urine as metabolites"]], ke: "established",
    related: ["anastrozole", "exemestane"] });

  A.add({ slug: "tamoxifen", updated: "2026-10-17", name: "Tamoxifen", aliases: ["Nolvadex", "Nolva"], category: "pct", status: "Approved",
    class: "Selective estrogen receptor modulator (SERM)", developer: "ICI (now AstraZeneca)", tags: ["SERM", "PCT", "gynecomastia", "breast cancer"],
    summary: "A SERM that blocks estrogen in breast tissue and stimulates natural testosterone production in men. It is used off-label for post-cycle therapy and gynecomastia.",
    names: "Sold as Nolvadex for breast cancer treatment and prevention. Off-label it is used in men for gynecomastia and to restart the body's own testosterone production after AAS.",
    structure: "A triphenylethylene. C<sub>26</sub>H<sub>29</sub>NO, about 371.5 g/mol. It is a prodrug, converted by CYP2D6 to endoxifen, its main active form.",
    pubchem: "tamoxifen", p: [["Gynecomastia control", 4], ["Testosterone restart", 3], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Blood clots", "moderate", "Raises the risk of venous thromboembolism", "human rct"], ["Eyes", "low", "Cataracts and other eye changes with long-term use", "human rct"],
      ["Interactions", "moderate", "Strong CYP2D6 inhibitors (some antidepressants) reduce its activation to endoxifen", "established"], ["Endometrium", "moderate", "In women, raises the risk of endometrial cancer", "human rct"]],
    a: [["Estrogen receptor (breast)", "established", "Antagonist in breast tissue"], ["Hypothalamus / pituitary", "human rct", "Blocks estrogen feedback, raising LH, FSH and testosterone in men"], ["Gynecomastia", "human obs", "Reduces pain and size of recent-onset gynecomastia"]],
    t: [
      { title: "Preventing gynecomastia from an antiandrogen", evidence: "human rct", meta: ["114 men with prostate cancer on bicalutamide 150 mg daily", "added tamoxifen 20 mg daily, anastrozole 1 mg daily or placebo", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "Gynecomastia developed in 10% on tamoxifen against 73% on placebo, and breast pain in 6% against 39%. Adverse events were not increased. Total testosterone rose, but free testosterone did not change because SHBG rose.", refs: [243] },
      { title: "Established gynecomastia", evidence: "human rct", meta: ["10 men with gynecomastia", "tamoxifen 10 mg twice daily or placebo", "1 month each", "double-blind crossover"], body: "Seven of ten had a decrease in breast size on tamoxifen, and all four with pain had relief. Reduction was partial. No toxicity was seen.", refs: [249] },
      { title: "Persistent pubertal gynecomastia", evidence: "human obs", meta: ["38 boys with persistent pubertal gynecomastia", "tamoxifen or raloxifene for 3 to 9 months, or reassurance", "3-9 months", "retrospective chart review"], body: "Breast nodule diameter fell by a mean of 2.1 cm on tamoxifen. A reduction of more than half was seen in 41% on tamoxifen against 86% on raloxifene. No side effects were recorded.", refs: [250] }],
    k: [["Route", "Oral"], ["Half-life", "About 5–7 days (tamoxifen); about 14 days (N-desmethyltamoxifen)"], ["Steady state", "About 4 weeks"], ["Metabolism", "Liver, CYP2D6 and CYP3A4, to endoxifen"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["raloxifene", "enclomiphene", "hcg"] });

  A.add({ slug: "raloxifene", updated: "2026-10-17", name: "Raloxifene", aliases: ["Evista"], category: "pct", status: "Approved",
    class: "Selective estrogen receptor modulator (SERM)", developer: "Eli Lilly", tags: ["SERM", "gynecomastia", "osteoporosis"],
    summary: "A SERM approved for osteoporosis. It is used off-label for established gynecomastia, where small studies suggest it may work better than tamoxifen.",
    names: "Sold as Evista for postmenopausal osteoporosis and breast cancer risk reduction.",
    structure: "A benzothiophene. C<sub>28</sub>H<sub>27</sub>NO<sub>4</sub>S, about 473.6 g/mol.",
    pubchem: "raloxifene", p: [["Gynecomastia control", 3], ["Risk load", 2, 1], ["Evidence quality", 3]],
    r: [["Blood clots", "moderate", "Raises the risk of venous thromboembolism", "human rct"], ["Hot flashes and cramps", "low", "Common in women", "human rct"],
      ["Prostate", "low", "PSA rose 17% over 3 months at 120 mg daily in older men", "human rct", null, [251]]],
    a: [["Estrogen receptor", "established", "Antagonist in breast and uterus; agonist in bone"], ["Gynecomastia", "human obs", "Small studies in pubertal gynecomastia reported larger reductions than tamoxifen"]],
    t: [
      { title: "Healthy older men: Hormones", evidence: "human rct", meta: ["30 healthy men aged 60-70", "raloxifene 120 mg daily or placebo", "3 months", "randomized, double-blind, placebo-controlled"], body: "LH rose 29%, FSH 21% and total testosterone 20%; estradiol also rose 21%. Total cholesterol fell slightly. HDL tended to fall, and PSA rose 17%.", refs: [251] },
      { title: "Persistent pubertal gynecomastia", evidence: "human obs", meta: ["38 boys with persistent pubertal gynecomastia", "raloxifene or tamoxifen for 3 to 9 months, or reassurance", "3-9 months", "retrospective chart review"], body: "Nodule diameter fell by a mean of 2.5 cm on raloxifene. A reduction of more than half was seen in 86% on raloxifene against 41% on tamoxifen.", note: "Retrospective and not randomized; the authors say a true treatment effect is still unproven.", refs: [250] }],
    k: [["Route", "Oral"], ["Bioavailability", "About 2% (extensive glucuronidation)"], ["Half-life", "About 27–32 hours"], ["Metabolism", "Glucuronidation"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["tamoxifen"] });

  A.add({ slug: "enclomiphene", updated: "2026-10-17", name: "Enclomiphene", aliases: ["Enclomiphene citrate", "Androxal", "trans-clomiphene"], category: "pct", status: "Investigational",
    class: "Selective estrogen receptor modulator (SERM)", developer: "Repros Therapeutics", tags: ["SERM", "secondary hypogonadism", "fertility", "PCT"],
    summary: "The active, anti-estrogenic half of clomiphene. It raises natural testosterone while preserving sperm production, but it was never approved.",
    names: "Developed by Repros as Androxal for secondary hypogonadism. The FDA declined to approve it, and the European regulator also rejected it. It is widely compounded in the US.",
    structure: "The trans-isomer of clomiphene. C<sub>26</sub>H<sub>28</sub>ClNO, about 406.0 g/mol (free base). Clomiphene (Clomid) is a mix of enclomiphene and zuclomiphene; zuclomiphene is weakly estrogenic and very long-lived.",
    pubchem: "enclomiphene", p: [["Testosterone restoration", 3], ["Fertility preservation", 3], ["Risk load", 2, 1], ["Evidence quality", 3]],
    r: [["Vision", "low", "Visual disturbances reported with clomiphene", "human obs"], ["Mood", "low", "Mood changes reported", "human obs"], ["Blood clots", "low", "SERM class risk", "contested"]],
    a: [["Hypothalamus / pituitary", "human rct", "Blocks estrogen feedback, raising LH, FSH and testosterone while maintaining sperm counts"]],
    t: [{ title: "Phase 3 in secondary hypogonadism", evidence: "human rct", meta: ["men with secondary hypogonadism", "enclomiphene citrate, topical testosterone or placebo", "16 weeks", "randomized, double-blind, placebo-controlled"], body: "Enclomiphene raised testosterone into the normal range and maintained sperm concentration, while topical testosterone lowered it.", refs: [260] },
      { title: "Men coming off testosterone gel", evidence: "human rct", meta: ["12 men with secondary hypogonadism previously on topical testosterone", "enclomiphene citrate or testosterone gel", "6 months", "randomized, open-label, phase 2b"], body: "Testosterone rose similarly in both groups. Only enclomiphene raised LH and FSH, and it raised sperm counts in every man tested, while the gel did not. Testosterone fell back to pretreatment levels a month after stopping.", refs: [253] },
      { title: "Phase 2 against topical testosterone", evidence: "human rct", meta: ["men with secondary hypogonadism", "oral enclomiphene citrate or 1% testosterone gel", "duration not stated", "randomized, phase 2"], body: "Enclomiphene raised testosterone, estradiol and LH to levels similar to the gel, while sperm counts were preserved.", refs: [254] }],
    k: [["Route", "Oral"], ["Half-life", "About 10 hours"], ["Metabolism", "Liver, CYP2D6 and CYP3A4"], ["Excretion", "Mainly feces"]], ke: "human rct",
    related: ["tamoxifen", "hcg", "kisspeptin"] });

  A.add({ slug: "hcg", updated: "2026-10-17", name: "HCG", aliases: ["Human chorionic gonadotropin", "Pregnyl", "Novarel", "Ovidrel"], category: "pct", status: "Approved",
    class: "Gonadotropin (LH receptor agonist)", developer: "Endogenous hormone; urinary and recombinant forms", tags: ["gonadotropin", "fertility", "testicular size", "TRT"],
    summary: "A pregnancy hormone that acts like LH. It keeps the testes producing testosterone and preserves size and fertility during TRT or AAS use.",
    names: "Sold as Pregnyl and Novarel (urinary) and Ovidrel (recombinant) for fertility treatment and hypogonadotropic hypogonadism. In 2020 the FDA reclassified it as a biologic, which ended most US compounding. The FDA has warned that HCG is not approved for weight loss.",
    structure: "A glycoprotein of about 37 kDa with α and β subunits. The β subunit gives it a longer half-life than LH.",
    pubchem: false, p: [["Testicular function", 4], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Estrogenic", "moderate", "Raises testicular estradiol production; gynecomastia can occur", "established", "In a treatment series of men with isolated hypogonadotropic hypogonadism, about a third given hCG alone developed estradiol above the normal range.", [264]], ["Desensitization", "low", "High doses can desensitize Leydig cells", "human obs"], ["Weight loss misuse", "moderate", "No evidence it aids weight loss; the FDA has warned against this use", "established"]],
    a: [["LH receptor", "established", "Stimulates Leydig cells to produce testosterone and support spermatogenesis"]],
    t: [
      { title: "Low-dose hCG alongside testosterone: Intratesticular testosterone", evidence: "human rct", meta: ["29 healthy men", "testosterone enanthate 200 mg weekly plus placebo or hCG 125, 250 or 500 IU every other day", "3 weeks", "randomized, placebo-controlled"], body: "Testosterone alone cut testicular testosterone by 94%. It rose in line with hCG dose: 25% below baseline at 125 IU, 7% below at 250 IU and 26% above at 500 IU.", note: "Measures testicular hormone, not sperm output or fertility.", refs: [261] },
      { title: "hCG alone in isolated hypogonadotropic hypogonadism", evidence: "human obs", meta: ["22 men with isolated hypogonadotropic hypogonadism", "hCG until maximal testicular growth", "until maximal response", "prospective treatment series"], body: "All reached normal testosterone, and 14 of 22 produced sperm. Response depended on starting testicular size. Seven of 22 developed estradiol above the normal range.", refs: [264] },
      { title: "Onset before or after puberty predicts response", evidence: "human obs", meta: ["21 men with hypogonadotropic hypogonadism", "hCG, then hCG plus hMG if needed", "until response", "treatment series"], body: "hCG alone normalized sperm count in all 6 men whose hypogonadism began after puberty, but in only 1 of 15 whose began before puberty.", refs: [263] },
      { title: "Meta-analysis: Gonadotropin therapy for sperm production", evidence: "human obs", meta: ["44 studies of gonadotropin therapy in azoospermic men with hypogonadotropic hypogonadism", "hCG with or without FSH", "varied", "meta-analysis"], body: "Sperm appeared in 75% overall, with a mean concentration of about 6 million/mL. Results were better with onset after puberty and with hCG plus FSH. Earlier testosterone treatment did not affect outcomes.", refs: [265] }],
    k: [["Route", "Subcutaneous or intramuscular injection"], ["Time to peak", "About 6 hours IM; up to a day SC"], ["Half-life", "About 24–36 hours (terminal)"], ["Metabolism", "Proteolysis"], ["Excretion", "About 10–12% unchanged in urine, which is why it shows on pregnancy tests"]], ke: "established",
    related: ["hmg", "kisspeptin", "enclomiphene"] });

  A.add({ slug: "hmg", updated: "2026-10-17", name: "HMG", aliases: ["Human menopausal gonadotropin", "Menotropins", "Menopur"], category: "pct", status: "Approved",
    class: "Gonadotropin (FSH + LH activity)", developer: "Extracted from the urine of postmenopausal women", tags: ["gonadotropin", "fertility", "FSH"],
    summary: "A fertility drug that provides both FSH and LH activity. In men it is used with HCG to restore sperm production when HCG alone is not enough.",
    names: "Sold as Menopur and other brands for IVF and ovulation induction, and in men for hypogonadotropic hypogonadism.",
    structure: "A purified mixture of FSH and LH-like activity from urine, with added HCG in some products.",
    pubchem: false, p: [["Spermatogenesis support", 4], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Cost and handling", "low", "Expensive and must be reconstituted and injected", "established"], ["Estrogenic", "low", "Raises estradiol via increased testicular activity", "established"]],
    a: [["FSH receptor", "established", "Stimulates Sertoli cells and sperm production"], ["LH receptor", "established", "Stimulates testosterone production"]],
    t: [
      { title: "Adding hMG when hCG alone fails", evidence: "human obs", meta: ["14 men with hypogonadism beginning before puberty who did not respond to hCG", "hMG added to hCG", "until response", "treatment series"], body: "Sperm count normalized in 5 of 7 men without a history of undescended testes, but in only 1 of 7 with it.", refs: [263] },
      { title: "Time to sperm and pregnancy on gonadotropins", evidence: "human obs", meta: ["29 gonadotropin-deficient men wanting children, 43 courses", "hCG with urinary or recombinant FSH", "1982-1998", "single-centre survival analysis"], body: "Median time to any sperm was 5.5 months and to 20 million/mL 29 months. Conception occurred in 22 of 43 courses, at a median of 20.5 months, often at low sperm counts. Urinary and recombinant FSH worked similarly.", refs: [262] },
      { title: "Meta-analysis: Gonadotropin therapy for sperm production", evidence: "human obs", meta: ["44 studies of azoospermic men with hypogonadotropic hypogonadism", "hCG with or without FSH preparations", "varied", "meta-analysis"], body: "Sperm appeared in 75% overall. Success was higher with hCG plus FSH than without FSH, and did not differ between FSH preparations.", refs: [265] }],
    k: [["Route", "Subcutaneous or intramuscular injection"], ["Half-life", "FSH component: about 1–2 days"], ["Metabolism", "Proteolysis"], ["Excretion", "Urine"]], ke: "established",
    related: ["hcg", "kisspeptin"] });

  A.add({ slug: "kisspeptin", updated: "2026-10-17", name: "Kisspeptin", aliases: ["Kisspeptin-10", "Kisspeptin-54", "Metastin"], category: "pct", status: "Research only",
    class: "Hypothalamic neuropeptide (GnRH stimulator)", developer: "Endogenous peptide; research tool", tags: ["GnRH", "LH", "fertility", "libido"],
    summary: "The brain's master switch for reproductive hormones. Injecting it releases a pulse of LH and testosterone, but it is very short-lived and not an approved drug.",
    names: "Kisspeptin is the product of the KISS1 gene. Kisspeptin-10 and kisspeptin-54 are used in human research on fertility, IVF triggering and sexual function. Neither is approved.",
    structure: "Kisspeptin-10 is the active 10-amino-acid C-terminal fragment of the 54-amino-acid kisspeptin-54.",
    pubchem: false, p: [["LH stimulation", 3], ["Duration of effect", 1], ["Risk load", 1, 1], ["Evidence quality", 3]],
    r: [["Tachyphylaxis", "moderate", "Continuous exposure desensitizes the response", "human rct", "Continuous infusion lost its effect on LH and FSH within 5 days, and the highest bolus dose gave a smaller response than a lower one. Daily intermittent dosing kept working for 12 days.", [276, 272]], ["Product quality", "moderate", "Vendor peptides are unregulated", "established"]],
    a: [["GnRH neurons", "human rct", "Stimulates GnRH release, which raises LH, FSH and testosterone"], ["Sexual brain processing", "human rct", "Enhanced brain responses to sexual and romantic cues in small imaging studies"]],
    t: [
      { title: "Kisspeptin-54 infusion in men", evidence: "human rct", meta: ["6 healthy men", "kisspeptin-54 4 pmol/kg/min IV for 90 minutes or saline", "single sessions", "double-blind, placebo-controlled crossover"], body: "LH, FSH and testosterone all rose against saline (mean LH 10.8 against 4.2 U/L). Plasma half-life was about 28 minutes.", refs: [271] },
      { title: "Kisspeptin-10 dose response in men", evidence: "human rct", meta: ["healthy men (groups of 4-6)", "IV boluses of 0.01-3.0 µg/kg, and infusions of 1.5 or 4 µg/kg/h for up to 22.5 h", "hours", "vehicle-controlled dose-response"], body: "LH rose fastest at 1 µg/kg; 3 µg/kg gave a smaller response. A 22.5-hour infusion raised testosterone from about 17 to 24 nmol/L, and a lower-dose infusion increased LH pulse frequency.", refs: [272] },
      { title: "Chronic subcutaneous kisspeptin-10 in men", evidence: "human rct", meta: ["15 healthy men, 12 controls", "continuous SC infusion 180 nmol/h for 5 days, or daily 8-hour infusions 150 nmol/h for 12 days", "5-12 days", "randomized, single-blind, placebo-controlled"], body: "With continuous infusion, gonadotropins fell back to placebo levels by day 5, though testosterone stayed raised. Daily 8-hour infusions kept LH raised through day 12.", note: "Direct human evidence that continuous exposure desensitizes the response and intermittent exposure does not.", refs: [276] },
      { title: "Triggering egg maturation in IVF", evidence: "human obs", meta: ["53 women undergoing IVF", "single SC injection of kisspeptin-54, 1.6 to 12.8 nmol/kg", "one cycle", "dose-finding, uncontrolled"], body: "Eggs matured at every dose. Embryos were transferred in 92%, with a clinical pregnancy rate of 23%.", refs: [273] },
      { title: "IVF in women at high risk of ovarian hyperstimulation", evidence: "human rct", meta: ["60 women at high risk of OHSS", "single SC kisspeptin-54, 3.2 to 12.8 nmol/kg", "one cycle", "randomized, open-label, phase 2 dose comparison"], body: "Oocyte maturation occurred in 95%. Live birth rate per transfer was 45%. No woman developed moderate, severe or critical OHSS.", refs: [274] },
      { title: "Sexual and emotional brain processing", evidence: "human rct", meta: ["29 healthy young heterosexual men", "kisspeptin or vehicle infusion", "single sessions", "placebo-controlled; functional MRI"], body: "Kisspeptin enhanced limbic brain activity in response to sexual and couple-bonding images and reduced negative mood.", refs: [275] }],
    k: [["Route", "Intravenous or subcutaneous injection"], ["Half-life", "Kisspeptin-10: about 4 minutes. Kisspeptin-54: about 28 minutes"], ["Metabolism", "Proteolysis"], ["Excretion", NE]], ke: "human rct",
    related: ["hcg", "enclomiphene"] });

  /* ================================================================ GH axis */
  A.add({ slug: "ghrp-2", updated: "2026-10-17", name: "GHRP-2", aliases: ["Pralmorelin", "KP-102"], category: "gh", status: "Approved",
    class: "Growth hormone secretagogue (ghrelin receptor agonist)", developer: "Kaken Pharmaceutical", tags: ["GHRP", "ghrelin", "growth hormone"],
    summary: "A potent synthetic GH-releasing peptide. In Japan it is approved as a diagnostic test for GH deficiency. It also raises hunger, cortisol and prolactin.",
    names: "Approved in Japan as pralmorelin (GHRP Kaken) for diagnosing GH deficiency. Elsewhere it is sold only as a research peptide. It is prohibited by WADA.",
    structure: "D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH<sub>2</sub>, a hexapeptide. Molecular weight about 818 g/mol.",
    pubchem: "pralmorelin", p: [["GH release", 4], ["Hunger", 3], ["Risk load", 2, 1], ["Evidence quality", 3]],
    r: [
      ["Cortisol and prolactin", "moderate", "Raises cortisol and prolactin as well as GH", "human rct", "For the closely related GHRP-6, prolactin and cortisol rose about two-fold above baseline only at the highest dose tested in normal men.", [310]],
      ["Glucose", "low", "Raised GH can reduce insulin sensitivity", "established"],
      ["Product quality", "moderate", "Vendor peptides are unregulated", "established"],
      ["Appetite", "moderate", "A subcutaneous infusion raised food intake at a buffet meal by about 36% in healthy men, with every participant eating more", "human rct", null, [311, 312]],
      ["Metabolic markers in illness", "low", "In critically ill men, five days of GHRP-2 infusion raised serum lactate and white cell count by day 5", "human rct", "Observed in critical illness, where interpretation is difficult; carried here because it is the only multi-day human dosing record.", [314]],
      ["Long-term safety", "unknown", "No human study has given GHRP-2 for longer than 5 days", "unknown", null, [314]]], a: [["Ghrelin receptor", "human rct", "Strong GH release, synergistic with GHRH"]],
    t: [
      { title: "Diagnostic validation in adult GH deficiency", evidence: "human rct", meta: ["77 healthy subjects and 58 patients with peak GH below 3 µg/L on insulin tolerance testing", "GHRP-2 100 µg intravenously after an overnight fast", "2 hours of sampling", "diagnostic validation study"], body: "GH peaked within 60 minutes in every subject. Peak GH was 84.6 plus or minus 60.9 µg/L in healthy subjects versus 1.36 plus or minus 2.60 µg/L in GH-deficient patients. A 15 µg/L cut-off corresponded to the 3 µg/L insulin-tolerance-test threshold. Responses were slightly lower in older and heavier subjects and reproducible on repeat testing.", note: "This is the study behind the Japanese approval. It is the compound's best human evidence, and it is evidence that GHRP-2 reliably releases GH once, not that giving it repeatedly does anything useful.", refs: [313] },
      { title: "Food intake in healthy men", evidence: "human rct", meta: ["7 lean healthy men", "GHRP-2 1 µg/kg/h or saline subcutaneously for 270 minutes, then an ad libitum buffet meal", "single sessions", "controlled crossover"], body: "Participants ate 35.9 plus or minus 10.9% more on GHRP-2 than on saline, with every subject eating more, and macronutrient composition unchanged. Serum GH rose markedly during the infusion.", note: "The appetite effect is a measured human finding, not a class inference. It was replicated in people with obesity by the same group.", refs: [311, 312] },
      { title: "Prolonged critical illness", evidence: "human rct", meta: ["33 men with prolonged critical illness", "GHRP-2 1 µg/kg/h by infusion, alone or combined with TRH and pulsatile GnRH, or placebo", "5 days", "randomized comparison of hormone combinations"], body: "GHRP-2 infusion reactivated GH secretion and normalized IGF-1, IGFBP-3 and the acid-labile subunit. GHRP-2 alone did not reduce ureagenesis or raise osteocalcin, and on day 5 it raised serum lactate and white cell count; the metabolic benefits appeared only when TRH and GnRH were added.", note: "The clearest human demonstration that restoring the GH axis alone, without the thyroid and gonadal axes, does not deliver the metabolic result. Also the only repeated-dosing human safety data of any length for GHRP-2.", refs: [314] }],
    k: [["Route", "Intravenous (diagnostic); subcutaneous in informal use"], ["Half-life", "Short, under an hour"], ["GH response", "GH peaks within about 30–60 minutes"], ["Excretion", NE]], ke: "human rct",
    related: ["ghrp-6", "hexarelin", "ipamorelin"] });

  A.add({ slug: "ghrp-6", updated: "2026-10-17", name: "GHRP-6", aliases: ["Growth hormone releasing hexapeptide"], category: "gh", status: "Research only",
    class: "Growth hormone secretagogue (ghrelin receptor agonist)", developer: "Cyril Bowers (1980s research)", tags: ["GHRP", "ghrelin", "appetite"],
    summary: "One of the first synthetic GH-releasing peptides. It causes strong hunger shortly after injection, along with GH, cortisol and prolactin release.",
    names: "Developed in Cyril Bowers' research on growth hormone secretagogues. It was never approved and is sold as a research peptide. It is prohibited by WADA.",
    structure: "His-D-Trp-Ala-Trp-D-Phe-Lys-NH<sub>2</sub>, a hexapeptide. Molecular weight about 873 g/mol.",
    pubchem: "GHRP-6", p: [["GH release", 3], ["Hunger", 5], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [
      ["Cortisol and prolactin", "moderate", "Raises cortisol and prolactin as well as GH", "human rct", "Both rose about two-fold above baseline at the 1 µg/kg intravenous dose in normal men, but not at lower doses.", [310]],
      ["Glucose", "low", "Raised GH can reduce insulin sensitivity", "established"],
      ["Product quality", "moderate", "Vendor peptides are unregulated", "established"],
      ["Appetite", "moderate", "Strong hunger shortly after dosing is the effect the compound is best known for; the closest controlled human measurement is for GHRP-2, where food intake rose about 36%", "contested", "No published randomized human study has measured food intake on GHRP-6 itself. The appetite claim for GHRP-6 specifically rests on animal work and uncontrolled human reports.", [311]],
      ["Long-term safety", "unknown", "Every published human study gave single intravenous doses; there is no human repeated-dosing record", "unknown", null, [309, 310]]], a: [["Ghrelin receptor", "human rct", "Releases GH and strongly stimulates appetite"]],
    t: [
      { title: "First human GH-release study", evidence: "human rct", meta: ["17 normal men, with 8 given saline as control", "GHRP-6 (SK&F 110679) 0.05 to 2.5 µg/kg as a 30-minute intravenous infusion", "single doses", "controlled dose-ranging study"], body: "Serum GH rose consistently at 0.25 µg/kg and above, peaked at 45 minutes and returned to baseline by 210 minutes. Mean peak GH was 17.8 µg/L at 0.25 µg/kg, 38.3 µg/L at 0.5 µg/kg and 63.0 µg/L at 1.0 µg/kg. LH, FSH, TSH and ACTH were unaffected and the peptide was well tolerated.", note: "The founding human study for the whole GHRP class.", refs: [309] },
      { title: "Synergy with GHRH in normal men", evidence: "human rct", meta: ["18 normal men", "GHRP-6 0.1, 0.3 and 1.0 µg/kg by intravenous bolus, alone and with GHRH 1.0 µg/kg", "single doses", "controlled comparison"], body: "Mean peak GH was 1.2 µg/L after placebo and 7.6, 16.5 and 68.7 µg/L at the three GHRP-6 doses. Submaximal GHRP-6 doses plus GHRH released GH synergistically. Prolactin and cortisol rose about two-fold above baseline only at the 1 µg/kg dose; LH and TSH did not change in the first hour.", note: "This is the human source for two claims the class is sold on: the GHRH synergy, and the cortisol and prolactin rise. Both are real, and the hormone rise was dose-dependent rather than universal.", refs: [310] }],
    k: [["Route", "Subcutaneous injection"], ["Half-life", "Short, under an hour"], ["Metabolism", "Proteolysis"], ["Excretion", NE]], ke: "human obs",
    related: ["ghrp-2", "hexarelin", "mk-677"] });

  A.add({ slug: "hexarelin", updated: "2026-10-17", name: "Hexarelin", aliases: ["Examorelin"], category: "gh", status: "Research only",
    class: "Growth hormone secretagogue (ghrelin receptor agonist)", developer: "Mediolanum (Italy)", tags: ["GHRP", "ghrelin", "CD36", "heart"],
    summary: "The most potent of the GH-releasing peptides, with a response that fades quickly with repeated use. It also binds CD36, which has been studied for heart protection.",
    names: "Studied as examorelin in Italy in the 1990s for GH deficiency and heart failure. It was never approved and is sold as a research peptide. It is prohibited by WADA.",
    structure: "His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH<sub>2</sub>, a GHRP-6 analog. Molecular weight about 887 g/mol.",
    pubchem: "hexarelin", p: [["GH release", 4], ["Desensitization", 4, 1], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [
      ["Cortisol and prolactin", "moderate", "Raises cortisol and prolactin as well as GH", "human rct", "Acute doses raise cortisol and prolactin, but over 16 weeks of twice-daily dosing the cortisol response fell rather than rose, and prolactin, ACTH and urinary free cortisol did not change. This is a case where the chronic data contradict the acute data, and the chronic data are the better guide.", [317]],
      ["Glucose", "low", "Raised GH can reduce insulin sensitivity", "established"],
      ["Product quality", "moderate", "Vendor peptides are unregulated", "established"],
      ["Tachyphylaxis", "moderate", "GH response drops substantially with continued use", "human rct", "The GH response fell by about 45% over 16 weeks of twice-daily dosing, and recovered four weeks after stopping. Over the same 16 weeks IGF-1, body fat, lean mass and bone density did not change at all.", [316]],
      ["Cardiovascular", "unknown", "A single intravenous dose acutely raised ejection fraction and cardiac output in surgical patients, an effect not shared by GH or GHRH; whether that is beneficial or harmful over time has never been tested", "human rct", "Reported as a possible cardioprotective mechanism, but no trial has followed any cardiac outcome.", [318, 319]],
      ["Response in older people", "low", "The GH-releasing effect of hexarelin is blunted in elderly subjects, and was restored by adding arginine or GHRH", "human rct", null, [320]]],
    a: [["Ghrelin receptor", "human rct", "Potent GH release"], ["CD36", "animal", "Cardioprotective effects in animal models through CD36, independent of GH"]],
    t: [
      { title: "GH release by four routes in healthy volunteers", evidence: "human rct", meta: ["12 healthy young volunteers", "hexarelin 1 and 2 µg/kg intravenously, 1.5 and 3 µg/kg subcutaneously, 20 µg/kg intranasally and 20 and 40 mg orally, against saline and GHRH 1 µg/kg", "single doses", "controlled crossover"], body: "GH release after 1 µg/kg intravenously was about twice that after an equal dose of GHRH, and the response was dose-dependent and highly reproducible. Biological bioavailability was 77.0% subcutaneously, 4.8% intranasally and 0.3% orally.", note: "The reason hexarelin is called the most potent of the GHRPs, and the source of the bioavailability figures. Note how poorly it works orally.", refs: [315] },
      { title: "Sixteen weeks of twice-daily dosing: does the response last?", evidence: "human rct", meta: ["healthy adults", "hexarelin 1.5 µg/kg subcutaneously twice daily", "16 weeks of treatment plus 4 weeks off", "open longitudinal study with repeat provocation testing"], body: "The GH response area fell from 19.1 µg/L.h at baseline to 12.3 at week 4 and 10.5 at week 16, then returned to 19.4 four weeks after stopping. IGF-1 and IGFBP-3 did not change significantly over the 20 weeks. Body fat, lean mass and bone mineral density were unchanged at week 16.", note: "The most informative study on long-term use of this class: the GH response halved within 16 weeks, it recovered after a month off, and nothing downstream changed at all. Tachyphylaxis here is a measured finding, not a theory.", refs: [316] },
      { title: "Effect of chronic dosing on cortisol, ACTH and prolactin", evidence: "human rct", meta: ["healthy adults", "hexarelin 1.5 µg/kg subcutaneously twice daily", "16 weeks, with assessment 4 weeks after stopping", "longitudinal endocrine study"], body: "The cortisol response area fell from 1506 to 1222 nmol/L/h at week 16 and returned to 1586 four weeks later. ACTH response, 24-hour urinary free cortisol, cortisol-binding globulin and the prolactin response did not change significantly.", note: "A useful correction to the class warning: on this regimen the pituitary-adrenal axis was not over-stimulated over time, and the acute cortisol spike seen after single doses faded rather than accumulated.", refs: [317] },
      { title: "Cardiac performance during bypass surgery", evidence: "human rct", meta: ["24 men with coronary artery disease undergoing bypass surgery under general anaesthesia", "hexarelin 2.0 µg/kg intravenously, against GHRH 2.0 µg/kg, recombinant GH 10.0 µg/kg or placebo", "90 minutes of monitoring", "controlled comparison with intraoperative echocardiography and catheterization"], body: "Hexarelin raised left ventricular ejection fraction, cardiac index and cardiac output within 10 minutes and for up to 90 minutes, and lowered wedge pressure, with no change in systemic vascular resistance. GHRH, recombinant GH and placebo had no haemodynamic effect.", note: "This is the human evidence that hexarelin's cardiac effect does not run through GH: GH itself did nothing. A separate study found the ejection fraction rise in ischemic but not dilated cardiomyopathy. These are acute single-dose effects, and no trial has tested whether they translate into any clinical benefit.", refs: [318, 319] }],
    k: [["Route", "Subcutaneous or intravenous injection"], ["Half-life", "About an hour"], ["Excretion", NE]], ke: "human obs",
    related: ["ghrp-2", "ghrp-6"] });

  A.add({ slug: "mk-677", updated: "2026-10-17", name: "MK-677", aliases: ["Ibutamoren", "MK-0677", "LUM-201"], category: "gh", status: "Investigational",
    class: "Oral growth hormone secretagogue (ghrelin receptor agonist)", developer: "Merck; later Lumos Pharma", tags: ["GH secretagogue", "IGF-1", "appetite", "oral"],
    summary: "An oral pill that raises GH and IGF-1 for a full day. In older adults it increased lean mass, but it also increased appetite and fasting glucose and reduced insulin sensitivity.",
    names: "Developed by Merck as MK-0677 and later by Lumos Pharma as LUM-201 for pediatric GH deficiency. It is not approved anywhere and is prohibited by WADA. It is commonly mislabeled as a SARM.",
    structure: "A nonpeptide spiropiperidine ghrelin mimetic. C<sub>27</sub>H<sub>36</sub>N<sub>4</sub>O<sub>5</sub>S, about 528.7 g/mol.",
    pubchem: "ibutamoren", p: [["GH / IGF-1 elevation", 4], ["Lean mass", 2], ["Hunger", 4, 1], ["Glucose impact", 3, 1], ["Evidence quality", 4]],
    r: [
      ["Glucose", "moderate", "Raised fasting glucose and lowered insulin sensitivity in clinical trials", "human rct", "Fasting glucose rose from 5.4 to 6.8 mmol/L within 4 weeks at 25 mg daily in older subjects, and over 12 months fasting glucose rose and insulin sensitivity fell. The dose-ranging study showed this happens within weeks, not only with long use.", [321, 323]],
      ["Fluid retention", "moderate", "Swelling and joint pain", "human rct", "Transient mild lower-extremity edema and muscle pain were among the commonest effects over 12 months.", [321]],
      ["Heart failure signal", "moderate", "A hip fracture trial was stopped early after more heart failure events on MK-677", "human rct", "The signal rested on a limited number of patients, and the trial's authors called the safety profile unfavorable in that population.", [322]],
      ["Appetite", "moderate", "Increased appetite is common", "human rct", "Increased appetite was common and subsided over a few months; body weight rose 2.7 kg over a year, and the increase in limb fat was larger than on placebo.", [321]],
      ["Cortisol", "low", "Cortisol rose by 47 nmol/L over 12 months in healthy older adults, although a 4-week dose-ranging study found no change", "human rct", null, [321, 323]],
      ["Bone", "unknown", "Changes consistent with increased bone remodeling occurred over 12 months; added to alendronate it raised femoral neck bone density more than alendronate alone (4.2% versus 2.5%) but not at the spine, total hip or total body", "human rct", "The osteoporosis trial authors judged the lack of benefit at other sites a concern when weighed against the side effects of raising GH.", [321, 326]],
      ["Function", "moderate", "Across trials the measured gain in fat-free mass did not translate into strength, physical function or cognition", "human rct", null, [321, 322, 324]]],
    a: [["Ghrelin receptor", "human rct", "Raises GH pulse amplitude and IGF-1 for about 24 hours per dose"]],
    t: [
      { title: "Healthy older adults", evidence: "human rct", meta: ["65 healthy adults aged 60–81", "MK-677 25 mg daily or placebo", "12 months", "randomized, double-blind, placebo-controlled"], body: "IGF-1 rose to young-adult levels and fat-free mass increased by about 1.1 kg. Fasting glucose rose and insulin sensitivity fell. Strength and function did not improve significantly.", refs: [321] },
      { title: "Hip fracture recovery, stopped early", evidence: "human rct", meta: ["123 elderly patients recovering from hip fracture", "MK-677 25 mg daily or placebo", "24 weeks, terminated early", "multicenter, randomized, double-blind, placebo-controlled phase 2b"], body: "IGF-1 rose 51.4 ng/mL versus placebo. Gait speed improved, but stair-climbing power and most other functional measures did not. The trial was terminated early because of a congestive heart failure safety signal in a small number of patients, and the authors concluded MK-677 has an unfavorable safety profile in this population.", note: "This is the source of the heart failure signal. It is a small number of events in frail elderly patients, which neither dismisses nor establishes the risk, but it was enough to stop the trial.", refs: [322] },
      { title: "Alzheimer disease progression", evidence: "human rct", meta: ["563 patients with mild to moderate Alzheimer disease", "MK-677 25 mg daily or placebo", "12 months", "randomized, double-blind, multicenter"], body: "IGF-1 rose 60.1% at 6 weeks and 72.9% at 12 months, confirming target engagement, but there were no differences between groups on any cognitive, functional or global measure.", note: "The largest and longest controlled human exposure to MK-677 at 25 mg daily, with 416 completers. Its value here is as the best available safety denominator, and as a clean negative on the cognition claim.", refs: [324] },
      { title: "Dose-ranging in healthy older subjects", evidence: "human rct", meta: ["32 healthy subjects aged 64-81", "MK-677 2, 10 or 25 mg orally once daily, or placebo", "two periods of 14 and 28 days", "randomized, double-blind, placebo-controlled"], body: "24-hour GH rose dose-dependently, by 97% at 25 mg/day, through higher GH pulse height and higher interpulse nadirs rather than more pulses. IGF-1 rose from 141 to 265 µg/L by 4 weeks at 25 mg. Fasting glucose rose from 5.4 to 6.8 mmol/L at 4 weeks. Cortisol did not change and prolactin rose 23% while staying in the normal range.", note: "The source of the 25 mg dose, and the sharpest version of the glucose finding: fasting glucose rose by about 1.4 mmol/L in four weeks at that dose.", refs: [323] }],
    k: [["Route", "Oral"], ["Half-life", "About 4–6 hours, though IGF-1 stays raised for 24 hours"], ["Metabolism", "Liver"], ["Excretion", "Mainly feces"]], ke: "human rct",
    related: ["growth-hormone", "ipamorelin", "ghrp-6"] });

  A.add({ slug: "sermorelin", updated: "2026-10-17", name: "Sermorelin", aliases: ["Geref", "GRF 1-29"], category: "gh", status: "Discontinued",
    class: "GHRH analog", developer: "Serono", tags: ["GHRH", "growth hormone"],
    summary: "The first 29 amino acids of growth-hormone-releasing hormone. It was once approved for children with GH deficiency. It is short-lived and much milder than GH itself.",
    names: "Sold as Geref until 2008, when the manufacturer stopped production. It is widely prescribed through compounding pharmacies for anti-aging use.",
    structure: "GHRH(1-29)-NH<sub>2</sub>, the shortest fully active fragment of GHRH. Molecular weight about 3358 g/mol.",
    pubchem: false, p: [["GH release", 2], ["Risk load", 1, 1], ["Evidence quality", 3]],
    r: [
      ["Injection site", "low", "Redness and pain", "human rct"],
      ["Flushing", "low", "Transient flushing and headache", "human rct"],
      ["Weak downstream effect", "moderate", "In older adults, nightly dosing raised GH pulses without raising IGF-1 in one study, and the IGF-1 rise faded by month four in another; no study has shown a change in body composition beyond skin thickness and, in men only, lean mass", "human rct", "This is the central limitation of the compound rather than a safety hazard: the human record shows a hormone signal that largely does not carry downstream.", [329, 330]],
      ["Pituitary dependence", "moderate", "It works only through a functioning pituitary, so a disrupted hypothalamic-pituitary axis makes it ineffective; the related approved GHRH analog lists such disruption as a contraindication", "established", null, [336]],
      ["Availability and product quality", "moderate", "Production of the approved product stopped in 2008, so present-day material comes from compounding pharmacies and is not an FDA-approved product", "established"],
      ["Long-term safety", "unknown", "The longest controlled human exposure is 16 weeks, in 19 older adults", "unknown", null, [329]]],
    a: [["GHRH receptor", "established", "Stimulates pulsatile GH release from the pituitary"]],
    t: [
      { title: "GH-deficient children, first year of therapy", evidence: "human rct", meta: ["110 previously untreated prepubertal GH-deficient children, 86 evaluable", "GHRH(1-29) 30 µg/kg subcutaneously once daily at bedtime", "up to 1 year", "multicenter, open-label study"], body: "Mean height velocity rose from 4.1 cm/year at baseline to 8.0 cm/year at 6 months and 7.2 cm/year at 12 months, and 74% were judged good responders at 6 months. Bone age advanced in proportion to height age. Fasting glucose did not change and IGF-1 was not excessively generated.", note: "This is the study behind the original Geref approval. It is open-label, not placebo-controlled, and it is about children with GH deficiency.", refs: [327] },
      { title: "GHRH(1-29) twice daily in older men", evidence: "human rct", meta: ["9 healthy young and 10 healthy old non-obese men", "GHRH(1-29) 0.5 mg and 1 mg subcutaneously twice daily, in random order with a 14-day washout", "14 days per dose", "randomized crossover"], body: "Only the 1 mg dose significantly raised 24-hour GH, pulse area, pulse amplitude and IGF-1; after that dose these measures no longer differed from those of young men. Fasting glucose, urinary C-peptide, blood pressure and chemistry panels were unaffected.", note: "The clearest human demonstration that GHRH(1-29) can restore the age-related fall in GH and IGF-1 and that it takes twice-daily dosing to do it. Two weeks long, with hormone levels as the only endpoint: no body composition or function was measured.", refs: [328] },
      { title: "Four months of a GHRH(1-29) analog in older men and women", evidence: "human rct", meta: ["10 women and 9 men aged 55-71", "[Nle27]GHRH(1-29)-NH2 10 µg/kg self-injected nightly, after 4 weeks of placebo", "16 weeks of active treatment", "single-blind, randomized, placebo-controlled"], body: "Nightly dosing raised nocturnal GH and, within 2 weeks, IGF-1 and IGFBP-3, which stayed raised for 12 weeks but drifted back toward baseline by 16 weeks. Skin thickness rose in both sexes; lean body mass rose in men only. Body weight, blood pressure, fasting glucose and insulin were unchanged, insulin sensitivity improved in men, and the only adverse effect was transient hyperlipidemia.", note: "The longest controlled human exposure to a short GHRH analog in older adults. Two findings matter: the effects were much milder than GH itself, and the IGF-1 rise faded by month four even with continued dosing.", refs: [329] },
      { title: "Single nightly injections in healthy elderly men", evidence: "human rct", meta: ["11 healthy non-obese men aged 64-76 with low IGF-1", "GHRH(1-29) 2 mg subcutaneously nightly, self-administered at home", "6 weeks", "open-label study with before-and-after measurement"], body: "Nocturnal GH release, GH peak area and peak amplitude rose, but IGF-1, IGFBP-3 and GH-binding protein did not change. Two of six strength measures and one endurance measure improved. Weight, body mass index, DEXA measures of muscle and fat, muscle histology, glucose, insulin and lipids were unchanged. No significant adverse effects were seen.", note: "The authors' own reading was that single nightly doses are less effective than multiple daily doses. Raising GH pulses without moving IGF-1 is the recurring result for this short-acting class.", refs: [330] }],
    k: [["Route", "Subcutaneous injection"], ["Half-life", "About 10–20 minutes"], ["Metabolism", "Proteolysis"], ["Excretion", NE]], ke: "established",
    related: ["tesamorelin", "cjc-1295"] });

  A.add({ slug: "tesamorelin", updated: "2026-10-17", name: "Tesamorelin", aliases: ["Egrifta"], category: "gh", status: "Approved",
    class: "Stabilized GHRH analog", developer: "Theratechnologies", tags: ["GHRH", "visceral fat", "HIV lipodystrophy"],
    summary: "A stabilized GHRH analog approved to reduce abdominal visceral fat in people with HIV lipodystrophy. It is the only GH-axis drug approved specifically for fat reduction.",
    names: "Sold as Egrifta (and Egrifta SV / WR) for excess abdominal fat in HIV-associated lipodystrophy.",
    structure: "The full 44-amino-acid GHRH sequence with a trans-3-hexenoyl group on the N-terminus, which protects against DPP-4 breakdown.",
    pubchem: false, p: [["Visceral fat reduction", 3], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [
      ["Glucose", "moderate", "Can raise blood glucose", "human rct", "The approved label records HbA1c of 6.5% or above in 5% of treated patients versus 1% on placebo, a hazard ratio of 3.3, and instructs that glucose status be evaluated before starting and monitored periodically. Trials found no clinically meaningful difference in glucose parameters at 26 and 52 weeks, and the early fasting-glucose rise seen at two weeks in one trial had resolved by six months. The label still treats it as a monitored risk.", [332, 333, 336]],
      ["Joint pain and swelling", "low", "Arthralgia and edema", "human rct", "The label warns of edema, arthralgia and carpal tunnel syndrome, described as transient or resolving on discontinuation; arthralgia was reported in over 5% of patients.", [336]],
      ["Injection site", "low", "Reactions are common", "human rct", "Injection-site reactions occurred in 25% of treated patients versus 14% on placebo in the first 26 weeks.", [336]],
      ["Hypersensitivity", "low", "Occurred in 4% of patients in trials, as pruritus, erythema, flushing, urticaria or rash", "human rct", null, [336]],
      ["IGF-1 elevation", "moderate", "IGF-1 rose 81-108 ng/mL in the phase 3 trials, and at 26 weeks 36% of patients had an IGF-1 standard deviation score above 3; the label directs that IGF-1 be monitored and that discontinuation be considered for persistent elevation", "human rct", null, [331, 332, 336]],
      ["Malignancy", "moderate", "Active malignancy is a contraindication on the label, and the label directs discontinuation if recurrent malignancy becomes evident", "established", null, [336]],
      ["Pituitary axis", "moderate", "Disruption of the hypothalamic-pituitary axis, such as hypophysectomy, hypopituitarism, pituitary tumour or surgery, or head irradiation or trauma, is a contraindication", "established", null, [336]],
      ["Acute critical illness", "moderate", "The label notes increased mortality reported with pharmacologic growth hormone doses in critically ill patients and says to consider discontinuation in such patients", "established", null, [336]],
      ["Pregnancy", "high", "Contraindicated in pregnancy; the label directs discontinuation if pregnancy occurs", "established", null, [336]],
      ["Reversibility", "moderate", "The visceral fat reduction depends on continued treatment and reverses after stopping", "human rct", null, [332]]],
    a: [["GHRH receptor", "human rct", "Raises GH and IGF-1 while keeping pulsatile secretion"], ["Visceral fat", "human rct", "Reduces visceral adipose tissue"]],
    t: [
      { title: "HIV-associated abdominal fat", evidence: "human rct", meta: ["412 adults with HIV and excess abdominal fat", "tesamorelin 2 mg daily or placebo", "26 weeks", "randomized, double-blind, placebo-controlled, phase 3"], body: "Visceral fat fell about 15% with tesamorelin and rose about 5% on placebo. The effect reversed after stopping.", refs: [331] },
      { title: "Pooled phase 3 analysis with 52-week extension", evidence: "human rct", meta: ["806 antiretroviral-treated adults with HIV and excess abdominal fat", "tesamorelin 2 mg subcutaneously daily or placebo, re-randomized at week 26", "26 weeks plus a 26-week safety extension", "pooled analysis of two multicenter, double-blind, placebo-controlled phase 3 trials"], body: "Visceral fat fell 24 cm2 versus a 2 cm2 rise on placebo, a 15.4% treatment effect, with subcutaneous abdominal fat preserved. Triglycerides and the cholesterol-to-HDL ratio fell, body image measures improved and IGF-1 rose 108 ng/mL. The reduction was maintained at 52 weeks in those who continued, with no clinically meaningful differences between groups in glucose parameters at 26 or 52 weeks.", note: "This is the largest safety and efficacy dataset for any GH-axis drug used for fat reduction, and the basis of the approval. The glucose result is the most reassuring in this class, but note the label still records HbA1c 6.5% or above in 5% versus 1% on placebo.", refs: [332] },
      { title: "Liver fat in HIV with abdominal fat accumulation", evidence: "human rct", meta: ["50 antiretroviral-treated adults with HIV and abdominal fat accumulation", "tesamorelin 2 mg subcutaneously daily or placebo", "6 months", "randomized, double-blind, placebo-controlled"], body: "Visceral fat fell by 34 cm2 versus an 8 cm2 rise on placebo, and liver fat fell by a median 2.0% of lipid-to-water percentage versus a 0.9% rise, a net effect of -2.9%. Fasting glucose rose by 7 mg/dL more than placebo at 2 weeks, but the difference was not significant at 6 months.", note: "The transient early glucose rise is worth carrying: it appeared at two weeks and had resolved by six months.", refs: [333] },
      { title: "Non-alcoholic fatty liver disease in HIV", evidence: "human rct", meta: ["61 people with HIV and a hepatic fat fraction of 5% or more", "tesamorelin 2 mg subcutaneously daily or placebo", "12 months, then a 6-month open-label phase", "randomized, double-blind, multicentre"], body: "Hepatic fat fraction fell by an absolute 4.1% more than placebo, a 37% relative reduction, and 35% of the tesamorelin group versus 4% of the placebo group reached a hepatic fat fraction below 5%. Fasting glucose and HbA1c did not differ between groups at 12 months. Localised injection-site complaints were more common on tesamorelin, none judged serious.", note: "The longest placebo-controlled exposure published for this compound, and the one with a liver histology endpoint.", refs: [334] }],
    k: [["Route", "Subcutaneous injection"], ["Half-life", "About 25–40 minutes"], ["Metabolism", "Proteolysis"], ["Excretion", NE]], ke: "established",
    related: ["sermorelin", "cjc-1295", "growth-hormone"] });

  A.add({ slug: "igf-1-lr3", updated: "2026-10-17", name: "IGF-1 LR3", aliases: ["Long R3 IGF-1"], category: "gh", status: "Research only",
    class: "Modified insulin-like growth factor 1", developer: "Developed as a cell-culture reagent", tags: ["IGF-1", "hypoglycemia"],
    summary: "A modified IGF-1 made for cell culture. It barely binds IGF-binding proteins, so it is far more active and longer-lasting than natural IGF-1. It can cause dangerous low blood sugar.",
    names: "Made for cell-culture media. It has never been developed as a drug. The approved IGF-1 medicine is mecasermin (Increlex), for severe primary IGF-1 deficiency.",
    structure: "Human IGF-1 with arginine at position 3 and a 13-amino-acid N-terminal extension. 83 amino acids, about 9.1 kDa.",
    pubchem: false, p: [["Anabolic signal", 2], ["Hypoglycemia risk", 4, 1], ["Risk load", 4, 1], ["Evidence quality", 1]],
    r: [
      ["Hypoglycemia", "high", "IGF-1 activates insulin signaling and can cause dangerous low blood sugar", "established", "Supraphysiologic IGF-1 lowers blood glucose directly: in diabetic patients, recombinant IGF-1 cut mean 24-hour glucose by nearly 40% and tripled insulin sensitivity, and hypoglycemia was the commonest adverse reaction on the approved IGF-1 label, affecting 42% of 71 trial subjects. The approved IGF-1 product is dosed with food and its label directs withholding a dose if the patient cannot eat, and avoiding high-risk activities for 2-3 hours after dosing. LR3 is engineered to evade the binding proteins that buffer natural IGF-1 and has a far longer half-life, so there is no basis for assuming it is gentler.", [338, 339]],
      ["Cancer", "unknown", "IGF-1 signaling promotes cell growth; long-term risk is unknown", "contested", "IGF-1 signalling is mitogenic and antiapoptotic, and the approved IGF-1 label contraindicates use with active or prior malignancy in children and directs discontinuation if malignancy develops; whether raising IGF-1 in healthy adults raises cancer risk is unresolved. The best long-term human data on raising the GH/IGF-1 axis, the SAGhE cohort of 23,984 GH-treated children, found no clear excess in patients without other major disease. That is reassurance about replacement dosing in children, not about supraphysiologic IGF-1 analogs in adults.", [303, 338]],
      ["Product quality", "high", "Research reagent; identity and dose unverified", "established"],
      ["Tolerability at high exposure", "moderate", "In the type 2 diabetes study, only 6 of 12 participants completed 6 weeks of recombinant IGF-1 at 100 µg/kg twice daily because of side effects", "human rct", null, [339]],
      ["Lymphoid and intracranial effects", "moderate", "On the approved IGF-1 label, tonsillar hypertrophy occurred in 15% of trial subjects, mostly in the first one to two years, and intracranial hypertension occurred in 3 of 71 subjects", "human rct", "These are effects of sustained high IGF-1 signalling in children, the only population with long-term IGF-1 exposure data.", [338]],
      ["Muscle-sparing claim", "unknown", "In food-restricted rats, LR3 maintained body weight and nitrogen retention but did not conserve muscle protein, and in adult rats it increased protein breakdown and reduced protein synthesis", "animal", "The animal evidence does not support the specific claim that it protects muscle in a deficit.", [341]]],
    a: [["IGF-1 receptor", "in vitro", "Potent activation with little neutralization by binding proteins"]],
    t: [], noTrials: "It has never been given to humans in a published study. The potency claim comes from 7-day infusions in diabetic rats, where LR3 and DES restored growth 2.5 to 3 times more potently than native IGF-1; in food-restricted rats LR3 preserved body weight but not muscle protein. The nearest human evidence is for recombinant IGF-1 (mecasermin), a different molecule, which sharply lowered blood glucose in people with type 2 diabetes.", noTrialsRefs: [340, 341, 339],
    k: [["Route", "Subcutaneous or intramuscular injection (informal)"], ["Half-life", "Roughly 20–30 hours in animals; not established in humans"], ["Excretion", NE]], ke: "animal",
    related: ["igf-1-des", "mgf", "growth-hormone"] });

  A.add({ slug: "igf-1-des", updated: "2026-10-17", name: "IGF-1 DES", aliases: ["DES(1-3) IGF-1"], category: "gh", status: "Research only",
    class: "Truncated insulin-like growth factor 1", developer: "Naturally occurring variant; research reagent", tags: ["IGF-1", "hypoglycemia"],
    summary: "A short form of IGF-1 missing its first three amino acids. It ignores binding proteins, acts very potently and is cleared within minutes.",
    names: "Found naturally in some tissues and used as a research reagent. It has never been developed as a drug.",
    structure: "IGF-1 lacking the N-terminal Gly-Pro-Glu tripeptide. 67 amino acids, about 7.4 kDa.",
    pubchem: false, p: [["Anabolic signal", 2], ["Hypoglycemia risk", 3, 1], ["Risk load", 3, 1], ["Evidence quality", 1]],
    r: [
      ["Hypoglycemia", "high", "Can cause low blood sugar", "established", "IGF-1 analogs activate insulin signalling and lower blood glucose; hypoglycemia affected 42% of subjects in the approved IGF-1 product's trials, and in diabetic adults recombinant IGF-1 cut mean 24-hour glucose by nearly 40%. DES ignores the binding proteins that restrain natural IGF-1, so the buffering that limits endogenous IGF-1 action does not apply. Its very short half-life limits the duration of an episode but not its depth.", [338, 339]],
      ["Product quality", "high", "Research reagent; identity and dose unverified", "established"],
      ["Human safety", "unknown", "No human has been given this peptide in any published study, so no human safety data of any kind exist", "unknown"],
      ["Cancer", "unknown", "IGF-1 receptor signalling is mitogenic; the approved IGF-1 product contraindicates use in children with active or prior malignancy, and nothing is known about repeated DES exposure", "contested", null, [338]]],
    a: [["IGF-1 receptor", "in vitro", "About 10 times more potent than IGF-1 in some cell assays because binding proteins don't hold it back"]],
    t: [], noTrials: "It has never been given to humans in a published study. The potency claim comes from 7-day infusions in diabetic rats, where DES restored growth 2.5 to 3 times more potently than native IGF-1. The nearest human evidence is for recombinant IGF-1, a different and less potent molecule, which sharply lowered blood glucose in people with type 2 diabetes.", noTrialsRefs: [340, 339],
    k: [["Route", "Injection (informal)"], ["Half-life", "Minutes"], ["Excretion", NE]], ke: "in vitro",
    related: ["igf-1-lr3", "mgf"] });

  A.add({ slug: "mgf", updated: "2026-10-17", name: "MGF", aliases: ["Mechano growth factor", "IGF-1Ec", "PEG-MGF"], category: "gh", status: "Research only",
    class: "IGF-1 splice-variant peptide", developer: "Academic research (Goldspink lab)", tags: ["IGF-1", "muscle repair"],
    summary: "A peptide based on a version of IGF-1 made by muscle after damage. Early research suggested it activates muscle stem cells, but later studies questioned whether the synthetic peptide does anything.",
    names: "Described by Geoffrey Goldspink's group as a local muscle repair factor. Synthetic MGF and pegylated MGF (PEG-MGF) are sold as research peptides. Neither has been developed as a drug.",
    structure: "Usually a 24-amino-acid peptide from the E-domain of the IGF-1Ec splice variant. PEG-MGF has polyethylene glycol attached to slow its breakdown.",
    pubchem: false, p: [["Anabolic signal", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [
      ["Human safety", "unknown", "No human data", "unknown"],
      ["Product quality", "high", "Research peptide; identity unverified", "established", "Sold both as plain MGF and as a pegylated version with different kinetics, with no human data for either."],
      ["Efficacy", "unknown", "An independent replication attempt at two pharmaceutical companies found the synthetic peptide inactive on myoblast proliferation, differentiation and cardiac myocyte signalling, while mature IGF-1 worked in the same assays", "in vitro", "The question for this compound is not how risky it is but whether it does anything at all.", [342, 343]]],
    a: [["Satellite cells", "contested", "Early studies reported muscle stem cell activation; independent work found the synthetic peptide inactive in several assays"]],
    t: [], noTrials: "It has never been tested in humans, and the laboratory record is contradictory. The group that first described MGF reported that it activated human muscle progenitor cells, but a replication attempt at two pharmaceutical companies found the synthetic peptide inactive on muscle cells while IGF-1 worked in the same assays. Its strongest positive animal finding is neuroprotection in a gerbil brain ischemia model, not muscle growth.", noTrialsRefs: [342, 343, 344],
    k: [["Route", "Injection (informal)"], ["Half-life", "Minutes for MGF; longer for PEG-MGF; not established in humans"], ["Excretion", NE]], ke: "unknown",
    related: ["igf-1-lr3", "igf-1-des"] });

  A.add({ slug: "hgh-frag-176-191", updated: "2026-10-17", name: "HGH Frag 176-191", aliases: ["HGH fragment", "Frag 176-191"], category: "gh", status: "Research only",
    class: "Growth hormone C-terminal fragment", developer: "Monash University / Metabolic Pharmaceuticals research", tags: ["GH fragment", "lipolysis", "peptide"],
    summary: "The fat-burning end of the growth hormone molecule. Its modified version, AOD-9604, failed to beat placebo in a large weight-loss trial.",
    names: "The unmodified 176–191 fragment of human GH. AOD-9604 is the same fragment with an extra tyrosine and went through clinical trials. The plain fragment did not.",
    structure: "Amino acids 176–191 of human growth hormone, a 16-amino-acid peptide with a disulfide bridge.",
    pubchem: false, p: [["Fat loss effect", 1], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [
      ["Efficacy", "moderate", "The closely related AOD-9604 failed its phase 2b weight-loss trial", "human rct", "The closely related AOD-9604, the same fragment plus a tyrosine, was taken through six randomized placebo-controlled trials and development for obesity ended; across those trials it produced no change in IGF-1 and no significant glucose effect. The published pooled paper reports safety only, so the negative weight-loss result rests on company reporting and the end of development.", [345]],
      ["Product quality", "moderate", "Research peptide; unregulated", "established", "Vendors frequently sell it interchangeably with AOD-9604, although they are different molecules."],
      ["Human safety", "unknown", "The plain fragment itself has never been given to humans in a published study", "unknown"]],
    a: [["Lipolysis", "animal", "Stimulated fat breakdown in obese rodents without raising IGF-1"]],
    t: [], noTrials: "The plain fragment has never been through a clinical trial. Its modified version, AOD-9604 (the same fragment with an added tyrosine), went through six randomized placebo-controlled trials and did not beat placebo for weight loss; see AOD-9604. The fat-loss claim rests on rodent work, where the peptide reduced weight gain and fat tissue in obese mice and rats without the insulin resistance that intact GH caused.", noTrialsRefs: [345, 346, 347, 348],
    k: [["Route", "Injection (informal)"], ["Half-life", "Short"], ["Excretion", NE]], ke: "animal",
    related: ["aod-9604", "growth-hormone"] });

  /* ================================================================ Muscle & performance */
  A.add({ slug: "ace-031", updated: "2026-10-17", name: "ACE-031", aliases: ["Ramatercept", "ActRIIB-Fc"], category: "muscle", status: "Research only",
    class: "Soluble activin receptor type IIB (myostatin trap)", developer: "Acceleron Pharma", tags: ["myostatin", "activin", "muscular dystrophy"],
    summary: "A decoy receptor that soaks up myostatin and related growth factors. A single dose increased muscle in healthy women, but development stopped after bleeding and blood vessel side effects in boys with muscular dystrophy.",
    names: "Developed by Acceleron with Shire for Duchenne muscular dystrophy. The trial was halted in 2011 and development ended. It is not available as a pharmaceutical product.",
    structure: "The extracellular domain of activin receptor IIB fused to an antibody Fc fragment. It is a large protein, not a small peptide.",
    pubchem: false, p: [["Muscle growth signal", 4], ["Risk load", 4, 1], ["Evidence quality", 3]],
    r: [
      ["Bleeding and blood vessels", "high", "Nosebleeds, gum bleeding and telangiectasias in the muscular dystrophy trial, which led to its halt", "human rct", "No serious or severe adverse events were recorded. The concern is thought to reflect the trap's binding of activins and BMP9, which have roles in vascular stability, rather than anything about muscle.", [350]],
      ["Off-target", "moderate", "Also binds activins and BMP9, affecting many tissues", "established", null, [350]],
      ["Product quality", "high", "Products sold under this name are unlikely to be the genuine fusion protein", "contested"],
      ["Unproven function", "moderate", "The only efficacy signals in the dystrophy trial were non-significant trends; no trial has shown a functional benefit", "human rct", null, [350]],
      ["Long exposure after one dose", "moderate", "The half-life is 10 to 15 days, so a single injection cannot be withdrawn quickly if an effect is unwanted", "human rct", null, [349]]],
    a: [["Myostatin / activin trap", "human rct", "Increases muscle mass by blocking myostatin and related ligands"]],
    t: [
      { title: "Single dose in healthy postmenopausal women", evidence: "human rct", meta: ["healthy postmenopausal women", "single subcutaneous dose at several levels, or placebo", "follow-up over weeks", "randomized, double-blind, placebo-controlled, phase 1"], body: "Lean mass and thigh muscle volume increased after one dose. Markers of bone formation and fat changed favorably.", refs: [349] },
      { title: "Ambulatory boys with Duchenne muscular dystrophy, stopped early", evidence: "human rct", meta: ["ambulatory boys with Duchenne muscular dystrophy", "ACE-031 subcutaneously every 2-4 weeks, ascending doses, or placebo", "stopped after the second dosing regimen", "randomized, double-blind, placebo-controlled, ascending-dose"], body: "There were no serious or severe adverse events, but the study was stopped after the second dosing regimen over potential safety concerns of epistaxis and telangiectasias. Non-significant trends favoured ACE-031 on the 6-minute walk test, lean body mass, bone mineral density and fat mass.", note: "The decisive trial. The bleeding and vascular findings were not classed as serious, yet they were enough to end development, which is the detail worth keeping: the signal was a mechanism concern, not a tally of severe events. The efficacy trends never reached significance.", refs: [350] }],
    k: [["Route", "Subcutaneous injection"], ["Half-life", "Days to weeks (Fc fusion)"], ["Metabolism", "Proteolysis"]], ke: "human rct",
    related: ["ecdysterone", "testosterone"] });

  A.add({ slug: "ecdysterone", updated: "2026-10-17", name: "Ecdysterone", aliases: ["20-Hydroxyecdysone", "Beta-ecdysterone", "Ecdy"], category: "muscle", status: "Supplement",
    class: "Phytoecdysteroid", developer: "Plant steroid (spinach, quinoa, Cyanotis)", tags: ["ecdysteroid", "supplement", "WADA monitoring"],
    summary: "A plant and insect steroid hormone sold as a natural muscle builder. One German study found greater gains than placebo, enough that WADA added it to its monitoring program.",
    names: "Sold as a dietary supplement, often from Cyanotis vaga extract. Not prohibited in sport, but WADA monitors it after the 2019 study.",
    structure: "20-hydroxyecdysone, a polyhydroxylated steroid. C<sub>27</sub>H<sub>44</sub>O<sub>7</sub>, about 480.6 g/mol. It does not bind the androgen receptor.",
    pubchem: "20-hydroxyecdysone", p: [["Muscle gain", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [
      ["Product quality", "moderate", "Many supplements contain far less than labeled", "human obs", "A commercial product analysed in a 2025 trial contained less than 1% of its claimed ecdysterone content. The same analysis found no biological activity in muscle cells, so participants taking it were effectively taking nothing.", [473]],
      ["Long-term safety", "unknown", "Not well studied", "unknown"],
      ["Replication", "unknown", "The one positive human trial has not been reproduced", "contested", "A later randomized training study using a commercial product found no difference from control, though the product was shown to be mislabeled, so it did not test the molecule either.", [472, 473]]],
    a: [["Estrogen receptor β", "in vitro", "Proposed to act through ERβ rather than the androgen receptor"], ["Protein synthesis", "animal", "Increased muscle fiber size in rodents"]],
    t: [
      { title: "Strength-trained young men", evidence: "human rct", meta: ["46 young men in a training program", "ecdysterone-containing supplements or placebo", "10 weeks", "randomized, double-blind, placebo-controlled"], body: "The ecdysterone groups gained more muscle mass and one-rep max bench press than placebo.", note: "This is a single study. Its results prompted WADA to monitor ecdysterone, but they need independent replication.", refs: [472] },
      { title: "A 12-week trial of a commercial product, with content analysis", evidence: "human rct", meta: ["24 participants completing a resistance training program", "a commercial phytosteroid product or control", "12 weeks", "randomized, double-blind training study with laboratory analysis of the product"], body: "Strength, fat-free mass, muscle mass, fat mass and muscle thickness all improved over time with no difference between groups. Analysis found less than 1% of the claimed 20-hydroxyecdysone content in the capsules, and the product produced no activity in muscle cells.", note: "The honest reading of the two studies together: the one positive result has not been reproduced, and a product sold for the purpose contained almost none of the compound. A null trial of a product with no active ingredient tests the market, not the molecule.", refs: [473] }],
    k: [["Route", "Oral (supplement); injection in informal use"], ["Bioavailability", "Low orally"], ["Half-life", "Several hours"], ["Excretion", "Urine"]], ke: "human obs",
    related: ["ace-031", "turinabol"] });

  A.add({ slug: "meldonium", updated: "2026-10-17", name: "Meldonium", aliases: ["Mildronate", "MET-88"], category: "muscle", status: "Approved",
    class: "Carnitine biosynthesis inhibitor", developer: "Latvian Institute of Organic Synthesis (Ivars Kalviņš)", tags: ["endurance", "ischemia", "WADA prohibited"],
    summary: "A Latvian heart drug that shifts metabolism from fat toward glucose. It became famous when WADA banned it in 2016 and many athletes, including Maria Sharapova, tested positive.",
    names: "Sold as Mildronate in Latvia, Russia and other Eastern European countries for angina and heart failure. It is not approved in the US or the EU. WADA prohibited it from 2016.",
    structure: "3-(2,2,2-trimethylhydrazinium) propionate, a small analog of γ-butyrobetaine. Molecular weight about 146.2 g/mol.",
    pubchem: "meldonium", p: [["Endurance signal", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [
      ["Sport", "high", "Prohibited by WADA; it stays detectable in urine for months", "established"],
      ["Tolerability", "low", "Generally well tolerated in clinical use", "human obs"]],
    a: [["γ-butyrobetaine hydroxylase", "established", "Blocks carnitine synthesis, shifting cells toward glucose metabolism, which uses less oxygen"]],
    t: [
      { title: "MILSS I: Exercise tolerance in stable angina", evidence: "human rct", meta: ["512 adults with chronic coronary heart disease and exercise-limiting ischemia, at 72 centres in 4 countries", "mildronate (meldonium) at 100, 300, 1,000 or 3,000 mg daily, or placebo, added to standard therapy", "not reported", "randomized, double-blind, placebo-controlled, phase 2 dose-finding"], body: "Mean change in total exercise time was −2.12 s at 100 mg and +11.48 s at 300 mg against −7.10 s on placebo, neither significant. The 1,000 mg group gained 35.18 s (P = 0.002); 3,000 mg gave a smaller gain than 1,000 mg. The authors concluded the most effective dose was 500 mg twice daily.", note: "The best human trial that exists, and the effect is 35 seconds of exercise time in people with angina, with a dose-response that is not monotonic. It is not evidence of performance benefit in healthy athletes, which has never been tested in a quality trial.", refs: [471] }],
    k: [["Route", "Oral or intravenous"], ["Bioavailability", "About 78%"], ["Half-life", "About 4–6 hours initially, but slow terminal elimination from tissues"], ["Metabolism", "Limited"], ["Excretion", "Urine; detectable for months after long-term use"]], ke: "established",
    related: ["l-carnitine", "aicar"] });

  A.add({ slug: "l-carnitine", updated: "2026-10-17", name: "L-Carnitine", aliases: ["Levocarnitine", "Carnitor", "L-Carnitine L-Tartrate"], category: "fatloss", status: "Approved",
    class: "Amino acid derivative (fatty acid transporter)", developer: "Endogenous nutrient", tags: ["fat oxidation", "supplement", "injection"],
    summary: "The molecule that carries fatty acids into mitochondria. It is approved for carnitine deficiency. Evidence for fat loss in healthy people is weak.",
    names: "Sold as Carnitor (levocarnitine) for primary and secondary carnitine deficiency, including in dialysis. Widely sold as a supplement, and injected off-label for physique goals.",
    structure: "C<sub>7</sub>H<sub>15</sub>NO<sub>3</sub>, about 161.2 g/mol.",
    pubchem: "levocarnitine", p: [["Fat loss effect", 1], ["Risk load", 1, 1], ["Evidence quality", 3]],
    r: [
      ["TMAO", "low", "Gut bacteria convert carnitine to TMAO, which has been linked to cardiovascular risk in observational studies", "contested"],
      ["GI and odor", "low", "Nausea and a fishy body odor at high oral doses", "established"]],
    a: [["Fatty acid transport", "established", "Required to move long-chain fatty acids into mitochondria"], ["Fat loss", "human rct", "Meta-analyses show only small effects on weight, mainly in older or overweight adults"]],
    t: [
      { title: "Meta-analysis of 37 randomized trials", evidence: "human rct", meta: ["37 randomized controlled trials", "L-carnitine supplementation against control, with dose-response analysis", "varied", "systematic review, meta-analysis and dose-response analysis"], body: "The pooled effect on body weight, BMI and fat mass was modest, and concentrated in adults with overweight or obesity.", note: "The largest synthesis available, and its own conclusion is the word 'modest'.", refs: [469] },
      { title: "Earlier meta-analysis of 9 trials", evidence: "human rct", meta: ["9 randomized trials of adequate methodological quality, 911 adults in total", "L-carnitine against control", "varied; the effect shrank with longer consumption", "systematic review and meta-analysis"], body: "Carnitine groups lost 1.33 kg more weight (95% CI 0.57 to 2.09) and 0.47 kg/m² more BMI than control. Meta-regression found the magnitude of the effect fell as duration of consumption increased.", note: "A little over a kilogram, shrinking the longer people take it, which is the opposite of what a durable fat loss effect looks like.", refs: [470] }],
    k: [["Route", "Oral, intravenous or intramuscular"], ["Bioavailability", "About 5–18% oral"], ["Half-life", "About 17 hours"], ["Metabolism", "Mostly not metabolized"], ["Excretion", "Urine"]], ke: "established",
    related: ["meldonium", "nad-plus"] });

  /* ================================================================ Metabolic */
  A.add({ slug: "cagrilintide", updated: "2026-10-17", name: "Cagrilintide", aliases: ["CagriSema (with semaglutide)"], category: "metabolic", status: "Investigational",
    class: "Long-acting amylin analog", developer: "Novo Nordisk", tags: ["amylin", "obesity", "appetite"],
    summary: "A once-weekly amylin analog that reduces appetite through a different pathway than GLP-1. Combined with semaglutide (CagriSema) it produced about 20% weight loss in phase 3.",
    names: "Developed by Novo Nordisk, mainly in combination with semaglutide as CagriSema. Not approved anywhere when this entry was written.",
    structure: "A lipidated analog of human amylin engineered for stability and a long half-life, allowing weekly dosing.",
    pubchem: false, p: [["Weight loss", 3], ["GI side effects", 3, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [
      ["Gastrointestinal", "moderate", "Nausea, vomiting and constipation, mostly during dose escalation", "human rct", "In REDEFINE 1, gastrointestinal adverse events affected 79.6% on the combination against 39.9% on placebo, mostly transient and mild to moderate.", [415]],
      ["Long-term safety", "unknown", "Limited long-term data", "unknown"]],
    a: [["Amylin and calcitonin receptors", "human rct", "Slows gastric emptying and increases fullness through brainstem receptors"]],
    t: [
      { title: "REDEFINE 1: CagriSema in obesity", evidence: "human rct", meta: ["about 3,400 adults with obesity or overweight", "cagrilintide 2.4 mg plus semaglutide 2.4 mg, either drug alone, or placebo, each weekly", "68 weeks", "randomized, double-blind, phase 3"], body: "The combination produced about 20% mean weight loss against about 3% on placebo. Cagrilintide alone produced about 12%.", refs: [415] },
      { title: "REDEFINE 2: Cagrilintide with semaglutide in type 2 diabetes", evidence: "human rct", meta: ["1,206 adults with overweight or obesity and type 2 diabetes", "cagrilintide 2.4 mg plus semaglutide 2.4 mg weekly or placebo", "68 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change was −13.7% against −3.4% with placebo. HbA1c reached 6.5% or less in 73.5% against 15.9%.", note: "As with every drug in this class, weight loss in people with type 2 diabetes was smaller than in those without.", refs: [416] },
      { title: "Phase 2 dose-finding, cagrilintide alone", evidence: "human rct", meta: ["706 adults with overweight or obesity", "cagrilintide 0.3 to 4.5 mg weekly, liraglutide 3.0 mg daily, or placebo", "26 weeks", "randomized, double-blind, placebo- and active-controlled dose-finding"], body: "Weight fell in a dose-dependent way across the cagrilintide doses, with the higher doses exceeding placebo and the trial supporting 2.4 mg for further study.", note: "This is the only published trial of cagrilintide on its own at several doses.", refs: [414] }],
    k: [["Route", "Subcutaneous injection (weekly)"], ["Half-life", "About 7–8 days"], ["Metabolism", "Proteolysis"], ["Excretion", "Not published"]], ke: "human rct",
    related: ["semaglutide", "tirzepatide", "retatrutide"] });

  A.add({ slug: "mazdutide", updated: "2026-10-17", name: "Mazdutide", aliases: ["IBI362", "LY3305677"], category: "metabolic", status: "Approved",
    class: "Dual GLP-1 / glucagon receptor agonist", developer: "Innovent Biologics (licensed from Eli Lilly)", tags: ["GLP-1", "glucagon", "obesity"],
    summary: "A weekly dual GLP-1 and glucagon agonist approved in China for weight management. The glucagon component may add effects on energy use and liver fat.",
    names: "Developed by Innovent in China from a Lilly molecule. Approved in China in 2025 for chronic weight management and type 2 diabetes. Not approved in the US or Europe.",
    structure: "An acylated peptide based on the oxyntomodulin profile, activating both GLP-1 and glucagon receptors.",
    pubchem: false, p: [["Weight loss", 4], ["GI side effects", 3, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [
      ["Gastrointestinal", "moderate", "Nausea, diarrhea and vomiting", "human rct"],
      ["Heart rate", "low", "Modest heart rate increases", "human rct"]],
    a: [["GLP-1 receptor", "human rct", "Appetite reduction and glucose control"], ["Glucagon receptor", "human rct", "Proposed to raise energy expenditure and reduce liver fat"]],
    t: [
      { title: "GLORY-1: obesity in Chinese adults", evidence: "human rct", meta: ["Chinese adults with overweight or obesity", "mazdutide 4 mg or 6 mg weekly, or placebo", "48 weeks", "randomized, double-blind, phase 3"], body: "Mazdutide produced roughly 11–14% mean weight loss, substantially more than placebo.", refs: [417] },
      { title: "Phase 3 in type 2 diabetes on diet and exercise alone", evidence: "human rct", meta: ["320 Chinese adults with type 2 diabetes, mean HbA1c 8.24%, mean diabetes duration 1.9 years", "mazdutide 4 mg or 6 mg weekly or placebo for 24 weeks, then 24 weeks of extended mazdutide treatment", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "At week 24 HbA1c fell 1.57% at 4 mg and 2.15% at 6 mg against 0.14% with placebo. Weight fell 5.61% and 7.81% against 1.26%. The most common adverse events were diarrhea, decreased appetite and nausea.", refs: [418] }],
    k: [["Route", "Subcutaneous injection (weekly)"], ["Half-life", "Long; supports weekly dosing"], ["Metabolism", "Proteolysis"]], ke: "human rct",
    related: ["survodutide", "retatrutide", "tirzepatide"] });

  A.add({ slug: "survodutide", updated: "2026-10-17", name: "Survodutide", aliases: ["BI 456906"], category: "metabolic", status: "Investigational",
    class: "Dual glucagon / GLP-1 receptor agonist", developer: "Boehringer Ingelheim / Zealand Pharma", tags: ["GLP-1", "glucagon", "obesity", "MASH"],
    summary: "A weekly glucagon and GLP-1 dual agonist in phase 3 for obesity and fatty liver disease. Phase 2 showed strong effects on liver fat.",
    names: "Developed by Boehringer Ingelheim with Zealand Pharma. It is in phase 3 (SYNCHRONIZE) for obesity and in trials for MASH.",
    structure: "An acylated peptide with balanced glucagon and GLP-1 receptor activity.",
    pubchem: false, p: [["Weight loss", 4], ["Liver fat reduction", 5], ["GI side effects", 4, 1], ["Evidence quality", 3]],
    r: [
      ["Gastrointestinal", "high", "Nausea, vomiting and diarrhea were common, especially with fast dose escalation", "human rct", "Gastrointestinal adverse events affected 80.9% at 3.6 mg and 89.7% at 6.0 mg in SYNCHRONIZE-1, against 47.9% on placebo.", [421]],
      ["Heart rate", "moderate", "Heart rate increases", "human rct"]],
    a: [["Glucagon receptor", "human rct", "Increases liver fat breakdown and energy expenditure"], ["GLP-1 receptor", "human rct", "Reduces appetite"]],
    t: [
      { title: "Phase 2 in MASH", evidence: "human rct", meta: ["293 adults with biopsy-confirmed MASH and fibrosis", "survodutide at several doses or placebo", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "Histological improvement in MASH without worsening fibrosis was more frequent on survodutide than placebo across doses.", refs: [424] },
      { title: "SYNCHRONIZE-1: Obesity without diabetes", evidence: "human rct", meta: ["725 adults with BMI ≥30, or ≥27 with a complication, excluding diabetes", "survodutide escalated to 3.6 mg or 6.0 mg weekly, or placebo", "76 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change was −12.2% at 3.6 mg and −13.0% at 6.0 mg against −5.4% with placebo. Gastrointestinal adverse events affected 80.9% and 89.7% against 47.9% on placebo. No deaths were reported.", note: "The placebo group lost 5.4%, unusually high, which narrows the apparent drug effect.", refs: [421] },
      { title: "SYNCHRONIZE-2: Obesity with type 2 diabetes", evidence: "human rct", meta: ["752 adults with type 2 diabetes and BMI ≥27", "survodutide 3.6 mg or 6.0 mg weekly or placebo", "76 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change was −8.2% at 3.6 mg and −9.8% at 6.0 mg against −3.9% with placebo.", refs: [422] },
      { title: "SYNCHRONIZE-MASLD: Liver fat in steatotic liver disease", evidence: "human rct", meta: ["216 adults with obesity and at-risk MASLD or biopsy-confirmed MASH", "survodutide 6.0 mg weekly or placebo, randomized 2:1", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "A reduction of at least 30% in liver fat occurred in 84.2% on survodutide against 24.3% on placebo (efficacy estimand). Mean weight change was −12.2% against −1.0%.", refs: [423] }],
    k: [["Route", "Subcutaneous injection (weekly)"], ["Half-life", "Long; supports weekly dosing"]], ke: "human rct",
    related: ["mazdutide", "retatrutide", "resmetirom"] });

  A.add({ slug: "orforglipron", updated: "2026-10-17", name: "Orforglipron", aliases: ["LY3502970", "Foundayo"], category: "metabolic", status: "Investigational",
    class: "Oral small-molecule GLP-1 receptor agonist", developer: "Eli Lilly (licensed from Chugai)", tags: ["GLP-1", "oral", "obesity", "type 2 diabetes"],
    summary: "A daily pill that activates the GLP-1 receptor without being a peptide. It can be taken with food and produced about 12% weight loss in phase 3.",
    names: "Developed by Eli Lilly, which submitted it for approval for obesity in 2025. Check current approval status, as regulatory decisions may have followed after this entry was written.",
    structure: "A nonpeptide small molecule that binds the GLP-1 receptor. Unlike oral semaglutide it needs no absorption enhancer or fasting.",
    pubchem: "orforglipron", p: [["Weight loss", 3], ["GI side effects", 3, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [
      ["Gastrointestinal", "moderate", "Nausea, constipation and diarrhea; GI-related discontinuations were more frequent than placebo", "human rct", "Adverse events led 5.3% to 10.3% of orforglipron participants to stop in ATTAIN-1 against 2.7% on placebo.", [425, 426]],
      ["Long-term safety", "unknown", "Outcome trials are ongoing", "unknown"]],
    a: [["GLP-1 receptor", "human rct", "Biased agonist favoring cAMP signaling"]],
    t: [
      { title: "ATTAIN-1: obesity without diabetes", evidence: "human rct", meta: ["about 3,100 adults with obesity or overweight", "orforglipron up to 36 mg daily or placebo", "72 weeks", "randomized, double-blind, phase 3"], body: "Mean weight change was −7.5%, −8.4% and −11.2% across the 6, 12 and 36 mg doses against −2.1% with placebo. At 36 mg, 54.6% lost at least 10% and 18.4% at least 20%. Adverse events led 5.3% to 10.3% to stop, against 2.7% on placebo.", refs: [425] },
      { title: "ATTAIN-2: Obesity with type 2 diabetes", evidence: "human rct", meta: ["1,613 adults with obesity or overweight and type 2 diabetes, mean HbA1c 8.05%", "orforglipron 6, 12 or 36 mg daily or placebo", "72 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change was −5.1%, −7.0% and −9.6% against −2.5% with placebo. All prespecified weight and cardiometabolic measures, including HbA1c, improved.", refs: [426] },
      { title: "ACHIEVE-1: Early type 2 diabetes", evidence: "human rct", meta: ["adults with type 2 diabetes inadequately controlled on diet and exercise", "orforglipron 3, 12 or 36 mg daily or placebo", "40 weeks", "randomized, double-blind, placebo-controlled"], body: "HbA1c and weight both fell more than with placebo across doses.", refs: [427] }],
    k: [["Route", "Oral, once daily, with or without food"], ["Half-life", "About 29–49 hours"], ["Metabolism", "Liver"], ["Excretion", "Mainly feces"]], ke: "human rct",
    related: ["semaglutide", "tirzepatide"] });

  A.add({ slug: "aicar", updated: "2026-10-17", name: "AICAR", aliases: ["Acadesine", "AICA riboside"], category: "metabolic", status: "Research only",
    class: "AMPK activator (AMP mimetic)", developer: "Gensia (as acadesine, for cardiac surgery)", tags: ["AMPK", "exercise mimetic", "WADA prohibited"],
    summary: "An AMPK activator that made sedentary mice run longer in a famous 2008 study. In humans it was only tested intravenously for heart surgery, where it failed.",
    names: "Tested as acadesine to protect the heart during bypass surgery; a large trial was stopped for futility. It is prohibited by WADA as an exercise mimetic.",
    structure: "5-aminoimidazole-4-carboxamide ribonucleoside. C<sub>9</sub>H<sub>14</sub>N<sub>4</sub>O<sub>5</sub>, about 258.2 g/mol. Inside cells it becomes ZMP, which mimics AMP.",
    pubchem: "acadesine", p: [["Endurance signal", 3], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [
      ["Human safety", "unknown", "Only short-term IV data in surgical patients", "human rct"],
      ["Uric acid", "moderate", "Raises uric acid levels", "human rct"],
      ["Sport", "high", "Prohibited by WADA", "established"],
      ["Route", "high", "Every human study used intravenous infusion, so oral products have no human evidence of absorption or effect", "human rct", "The three published human studies and the surgical trial all administered it intravenously.", [445, 446, 447]]],
    a: [["AMPK", "animal", "Activates AMPK through ZMP"], ["Endurance", "animal", "Increased running endurance in sedentary mice"]],
    t: [
      { title: "RED-CABG: Acadesine in coronary artery bypass surgery", evidence: "human rct", meta: ["adults undergoing on-pump coronary artery bypass grafting", "acadesine 0.1 mg/kg/min intravenously for 7 hours, also added to cardioplegic solution, or placebo", "through postoperative day 28", "randomized, double-blind, placebo-controlled"], body: "The trial was stopped for futility at a prespecified analysis: acadesine did not reduce the composite of death, non-fatal stroke or need for mechanical support.", note: "The largest human exposure on record, and it failed. It says nothing about endurance, which was never tested in people.", refs: [447] },
      { title: "Muscle glucose uptake in healthy men", evidence: "human rct", meta: ["29 healthy men, mean age 26, mean BMI 25", "intravenous AICAR, with exercise as a comparison", "acute, hours", "controlled physiological study"], body: "AICAR increased muscle AMPK activity and raised muscle 2-deoxyglucose uptake, confirming the mechanism works in human muscle.", note: "This is the only human evidence that AICAR engages its target in muscle, and it required intravenous infusion.", refs: [445] },
      { title: "Liver glucose output and lipolysis in type 2 diabetes", evidence: "human rct", meta: ["adults with type 2 diabetes", "intravenous AICAR infusion against control", "acute", "controlled infusion study"], body: "AICAR reduced the rate of glucose appearance from the liver, increased glucose disposal as a fraction of appearance, and reduced whole-body lipolysis.", note: "It reduced fat breakdown rather than increasing it, which is the opposite of what the compound is sold on.", refs: [446] }],
    k: [["Route", "Intravenous in trials; injection in informal use"], ["Bioavailability", "Poor orally"], ["Half-life", "Short (under 2 hours)"], ["Metabolism", "Phosphorylated to ZMP"]], ke: "human rct",
    related: ["gw501516", "slu-pp-332", "atx-304"] });

  A.add({ slug: "sr-9009", name: "SR-9009", aliases: ["Stenabolic"], category: "metabolic", status: "Research only",
    class: "Rev-erb agonist", developer: "Scripps Research (Burris lab)", tags: ["Rev-erb", "circadian", "exercise mimetic"],
    summary: "A circadian-clock modulator that increased endurance and reduced fat in mice. It barely survives oral dosing, and some of its effects turned out not to involve its supposed target.",
    names: "Developed at Scripps as a research tool for the Rev-erb nuclear receptors. It has never entered clinical trials. It is commonly mislabeled as a SARM.",
    structure: "C<sub>20</sub>H<sub>24</sub>ClN<sub>3</sub>O<sub>4</sub>S, about 437.9 g/mol.",
    pubchem: "SR9009", p: [["Fat loss signal", 2], ["Human evidence", 0], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [["Human safety", "unknown", "No human data", "unknown"], ["Oral bioavailability", "moderate", "Very poor orally, so oral products likely deliver little", "animal"], ["Product quality", "high", "Unregulated research chemical", "established"]],
    a: [["Rev-erb α/β", "animal", "Altered circadian gene expression, increased energy expenditure and endurance in mice"], ["Off-target effects", "contested", "Some cellular effects persisted in cells lacking Rev-erb"]],
    t: [], noTrials: "It has never been given to humans in a published study.",
    k: [["Route", "Intraperitoneal injection in mouse studies"], ["Bioavailability", "Very poor orally"], ["Half-life", "Short in mice"]], ke: "animal",
    related: ["slu-pp-332", "gw501516"] });

  A.add({ slug: "metformin", updated: "2026-10-17", name: "Metformin", aliases: ["Glucophage"], category: "metabolic", status: "Approved",
    class: "Biguanide", developer: "Jean Sterne (1957)", tags: ["type 2 diabetes", "insulin sensitivity", "longevity"],
    summary: "The first-line drug for type 2 diabetes. It lowers liver glucose output and is cheap and well studied. It is being investigated as an anti-aging drug.",
    names: "Sold as Glucophage and many generics. The TAME trial plans to test whether it delays age-related diseases in people without diabetes.",
    structure: "1,1-dimethylbiguanide. C<sub>4</sub>H<sub>11</sub>N<sub>5</sub>, about 129.2 g/mol.",
    pubchem: "metformin", p: [["Glucose control", 4], ["Weight effect", 1], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [
      ["Gastrointestinal", "moderate", "Diarrhea, nausea and bloating, reduced with extended-release forms", "human rct"],
      ["Vitamin B12", "moderate", "Long-term use lowers B12 levels", "human rct", "B12 was measured at 5 and 13 years in the randomized metformin and placebo groups of the Diabetes Prevention Program and its follow-up, with lower levels and more deficiency in the metformin group.", [430]],
      ["Lactic acidosis", "low", "Rare, mainly with severe kidney impairment", "established"],
      ["Exercise adaptation", "low", "May blunt some training adaptations in older adults", "human rct"],
      ["Anti-aging claims", "unknown", "The trial intended to test whether metformin slows aging has not reported results", "unknown", "TAME has been described in the literature as a design and a biomarker framework rather than a completed trial; no outcome publication exists. Nothing about lifespan or healthspan in people without diabetes has been established.", [433]]],
    a: [["Liver glucose output", "established", "Reduces gluconeogenesis, partly through mitochondrial complex I inhibition and AMPK"], ["Diabetes prevention", "human rct", "Reduced progression to diabetes in people with prediabetes"]],
    t: [
      { title: "Diabetes Prevention Program", evidence: "human rct", meta: ["3,234 adults with prediabetes", "metformin, intensive lifestyle intervention or placebo", "about 2.8 years", "randomized"], body: "Metformin reduced diabetes incidence by 31% compared with placebo. Intensive lifestyle change reduced it by 58%.", refs: [428] },
      { title: "DPPOS: The same people 15 years on", evidence: "human rct", meta: ["2,776 of the original DPP participants", "continued open-label metformin or lifestyle support after the blinded phase ended", "15 years from randomization", "long-term follow-up of a randomized trial, no longer blinded"], body: "Diabetes incidence remained 18% lower with metformin and 27% lower with lifestyle intervention than placebo. Neither arm reduced the aggregate microvascular outcome.", note: "Delaying diabetes is not the same as preventing the complications that matter, and over 15 years neither arm did the latter.", refs: [429] },
      { title: "MASTERS: Metformin added to resistance training in older adults", evidence: "human rct", meta: ["94 healthy adults aged 65 and over", "metformin 1,700 mg daily or placebo throughout 14 weeks of supervised progressive resistance training", "14 weeks", "randomized, double-blind, placebo-controlled, multicentre"], body: "The placebo group gained more lean body mass and more thigh muscle mass than the metformin group, and CT-measured increases in thigh muscle area and density were also greater on placebo. Strength gains trended lower on metformin.", note: "The trial was designed on the hypothesis that metformin would help, and found the opposite.", refs: [431] },
      { title: "Metformin and aerobic training in older adults", evidence: "human rct", meta: ["53 adults aged about 62", "metformin or placebo during 12 weeks of aerobic exercise training", "12 weeks", "randomized, double-blind, placebo-controlled"], body: "Training improved fat mass, HbA1c, fasting insulin and ambulant glucose regardless of treatment, but metformin blunted the training-induced gains in insulin sensitivity and cardiorespiratory fitness and inhibited skeletal muscle mitochondrial respiration.", refs: [432] }],
    k: [["Route", "Oral"], ["Bioavailability", "About 50–60%"], ["Half-life", "About 5 hours"], ["Metabolism", "Not metabolized"], ["Excretion", "Unchanged in urine"]], ke: "established",
    related: ["berberine", "semaglutide"] });

  A.add({ slug: "berberine", updated: "2026-10-17", name: "Berberine", aliases: ["Berberine HCl"], category: "metabolic", status: "Supplement",
    class: "Plant alkaloid", developer: "Natural product (goldenseal, barberry, Coptis)", tags: ["glucose", "AMPK", "supplement"],
    summary: "A bitter plant alkaloid that lowers blood glucose and cholesterol modestly in clinical studies. It is sometimes called \"nature's Ozempic\", which overstates its effect on weight.",
    names: "Sold as a dietary supplement. It is used in traditional Chinese medicine.",
    structure: "A quaternary isoquinoline alkaloid. C<sub>20</sub>H<sub>18</sub>NO<sub>4</sub><sup>+</sup>, about 336.4 g/mol.",
    pubchem: "berberine", p: [["Glucose control", 2], ["Weight effect", 1], ["Risk load", 1, 1], ["Evidence quality", 3]],
    r: [
      ["Gastrointestinal", "moderate", "Constipation, diarrhea and cramping", "human rct"],
      ["Interactions", "moderate", "Inhibits CYP2D6, CYP3A4 and P-glycoprotein, raising levels of many drugs", "established"],
      ["Pregnancy", "high", "Not safe in pregnancy or for newborns (risk of jaundice)", "established"]],
    a: [["AMPK", "animal", "Activates AMPK and improves insulin sensitivity"], ["LDL receptor", "in vitro", "Stabilizes LDL receptor mRNA, lowering LDL"]],
    t: [
      { title: "Meta-analysis of berberine in type 2 diabetes", evidence: "human rct", meta: ["46 randomized trials, mostly from China", "berberine alone or added to standard diabetes treatment, against control", "trial durations varied, most 1 to 3 months", "systematic review and meta-analysis of randomized trials"], body: "Pooled reductions were 0.73 percentage points in HbA1c, 0.86 mmol/L in fasting glucose, 1.07 kg/m² in BMI, 0.5 mmol/L in triglycerides and 0.86 mmol/L in LDL, with HDL 0.17 mmol/L higher.", note: "The effect on glucose is real but small, and the body of trials is dominated by small single-country studies with uneven methods, which inflates pooled estimates. The BMI change is the number most often quoted as evidence it is 'nature's Ozempic'; roughly 1 kg/m² is not comparable to an incretin drug.", refs: [435] },
      { title: "Berberine against metformin in newly diagnosed type 2 diabetes", evidence: "human rct", meta: ["36 adults with newly diagnosed type 2 diabetes (study A) plus 48 with poorly controlled diabetes (study B)", "berberine 500 mg three times daily, or metformin 500 mg three times daily", "3 months", "randomized pilot trial (study A) and single-arm add-on (study B)"], body: "In study A the glucose-lowering effect of berberine was similar to metformin: HbA1c fell from 9.5% to 7.5%, fasting glucose from 10.6 to 6.9 mmol/L and triglycerides from 1.13 to 0.89 mmol/L.", note: "A 36-person pilot is the origin of the claim that berberine matches metformin. It was never replicated at that size or with that design.", refs: [434] },
      { title: "Second meta-analysis of glucose lowering", evidence: "human rct", meta: ["randomized trials in type 2 diabetes", "berberine alone or with other therapy against control", "varied", "systematic review and meta-analysis"], body: "An independent pooled analysis reached the same conclusion: glucose and HbA1c fall modestly, and the underlying trials are small and of variable quality.", refs: [436] }],
    k: [["Route", "Oral"], ["Bioavailability", "Under 1%"], ["Half-life", "Several hours"], ["Metabolism", "Gut and liver"], ["Excretion", "Mainly feces"]], ke: "human obs",
    related: ["metformin"] });
})(window.ATLAS);
