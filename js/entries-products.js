/* Atlas Codex: peptide blends (GLOW, KLOW and the rest), branded products (Tri-Amino, Scar Cream, Throne) and supplies.
   Uses ATLAS.add / ATLAS.cat from builder.js. */
(function (A) {
  const NE = A.NE;
  A.cat("blends", "Peptide Blends", "Several peptides sold together in one vial or spray. Each blend links to its ingredients' own records.");
  A.cat("products", "Products", "Compounded creams, injectable amino acid blends and branded personal care products.");

  const blendNote = "A blend's evidence can be no better than the evidence for its weakest ingredient. No blend here has been tested as a combination.";
  const vendor = ["Product quality", "moderate", "Sold as an unregulated research product; identity, ratio and sterility are unverified", "established"];
  const comboUntested = ["Combination untested", "unknown", "No study has tested these ingredients together, so interactions and the benefit of combining them are unknown", "unknown"];
  const fixedRatio = ["Fixed ratio", "moderate", "Every ingredient is dosed together, so adjusting one changes all of them", "established"];

  /* ================================================================ Peptide blends */
  A.add({ slug: "glow", name: "GLOW", aliases: ["GLOW blend", "BPC-157 + GHK-Cu + TB-500"], category: "blends", parts: ["bpc-157", "ghk-cu", "tb-500"], status: "Research only",
    class: "Peptide blend (BPC-157 + GHK-Cu + TB-500)", developer: "Research-peptide vendors", tags: ["blend", "BPC-157", "GHK-Cu", "TB-500", "skin", "recovery"],
    summary: "A three-peptide vial combining BPC-157, GHK-Cu and TB-500, sold for skin, recovery and \"youth\". Each ingredient has mostly animal or cell evidence, and the blend itself has never been studied.",
    names: "A vendor blend sold under the name GLOW. Vials are commonly 10 mg BPC-157, 50 mg GHK-Cu and 10 mg TB-500 (a 1 : 5 : 1 ratio). It is not a pharmaceutical product.",
    structure: "A lyophilized mix of three separate peptides in one vial: BPC-157 (15 amino acids), GHK-Cu (a copper tripeptide) and TB-500 (a thymosin β4 fragment). See each ingredient's entry for details.",
    pubchem: false, pnote: blendNote, p: [["Preclinical signal", 3], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Copper load", "low", "GHK-Cu is the largest component by weight; injected copper has no human safety data", "unknown"],
      ["Angiogenesis", "unknown", "BPC-157 and TB-500 both promote blood vessel growth, a theoretical concern with existing tumors", "contested"], vendor,
      ["Evidence base", "high", "No ingredient has controlled human data in the injected form sold here", "established", "BPC-157's human record is three uncontrolled studies totaling 30 people. Thymosin β4 trials used the full-length protein in eye drops, gel or IV infusion, not the fragment. GHK-Cu trials were topical.", [603, 606, 610, 612]]],
    a: [["BPC-157", "animal", "Tissue repair and angiogenesis in rodent injury models"], ["GHK-Cu", "in vitro", "Collagen and glycosaminoglycan synthesis in skin cells"], ["TB-500", "animal", "Cell migration and wound repair via actin regulation"]],
    t: [], noTrials: "The blend has never been tested in humans. No ingredient has a controlled human trial in the injected form sold here: BPC-157's human studies are uncontrolled, the thymosin β4 trials used the full-length protein rather than the TB-500 fragment, and the GHK-Cu trials were topical.", noTrialsRefs: [603, 606, 610, 612],
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "Each peptide keeps its own pharmacokinetics; BPC-157 has a plasma half-life under 30 minutes in animals"], ["Half-life", NE]], ke: "animal",
    related: ["bpc-157", "ghk-cu", "tb-500", "klow"], updated: "2026-10-17" });

  A.add({ slug: "klow", name: "KLOW", aliases: ["KLOW blend", "GLOW + KPV"], category: "blends", parts: ["bpc-157", "ghk-cu", "tb-500", "kpv"], status: "Research only",
    class: "Peptide blend (BPC-157 + GHK-Cu + TB-500 + KPV)", developer: "Research-peptide vendors", tags: ["blend", "KPV", "BPC-157", "GHK-Cu", "TB-500"],
    summary: "GLOW with KPV added, an anti-inflammatory tripeptide. It is sold as an 80 mg vial for skin, recovery and inflammation. The blend has never been studied.",
    names: "A vendor blend sold as KLOW, usually in 80 mg vials. It is commonly described as GLOW (BPC-157, GHK-Cu and TB-500) plus 10 mg of KPV, but sellers don't always publish the ratio, so check the label.",
    structure: "A lyophilized mix of four separate peptides in one vial. See each ingredient's entry for details.",
    pubchem: false, pnote: blendNote, p: [["Preclinical signal", 3], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Unclear composition", "moderate", "The ratio is not standardized across vendors", "established"], vendor,
      ["Evidence base", "high", "No ingredient has controlled human data in the injected form sold here, and KPV has never been given to a human", "established", "KPV's evidence is mouse colitis models. The other three ingredients are as for GLOW.", [603, 610, 639]]],
    a: [["KPV", "animal", "Anti-inflammatory effects in mouse colitis models"], ["BPC-157, GHK-Cu, TB-500", "animal", "As described for GLOW"]],
    t: [], noTrials: "The blend has never been tested in humans, and KPV, the ingredient it adds to GLOW, has only been studied in mice and cells.", noTrialsRefs: [639],
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "Each peptide keeps its own pharmacokinetics"], ["Half-life", NE]], ke: "animal",
    related: ["glow", "kpv", "bpc-157"], updated: "2026-10-17" });

  // Blends added 2026-10-18 from the Half Nattys catalogue; compositions are as the vendor lists them.
  const ghRisk = ["Glucose", "moderate", "Raising GH lowers insulin sensitivity and can raise fasting glucose", "human rct", "Shown for GH itself and for oral secretagogues that raise it.", [48, 321]];
  const added = "2026-10-18";

  A.add({ slug: "grow", name: "GROW", aliases: ["GROW blend", "IGF-1 LR3 + Ipamorelin + CJC-1295"], category: "blends", parts: ["igf-1-lr3", "ipamorelin", "cjc-1295"], status: "Research only",
    class: "Peptide blend (IGF-1 LR3 + ipamorelin + CJC-1295 with DAC)", developer: "Research-peptide vendors", tags: ["blend", "growth hormone", "IGF-1", "ipamorelin", "CJC-1295"],
    summary: "A three-peptide vial that pairs two GH releasers with IGF-1 LR3, sold for growth and recovery. IGF-1 LR3 has never been given to humans, the GH releasers have only short pharmacology studies, and the blend has never been studied.",
    names: "A vendor blend sold as GROW. Half Nattys lists 1 mg IGF-1 LR3, 5 mg ipamorelin and 5 mg CJC-1295 with DAC per vial. It is not a pharmaceutical product.",
    structure: "A lyophilized mix of three peptides in one vial: IGF-1 LR3 (an 83-amino-acid IGF-1 analog), ipamorelin (a ghrelin receptor agonist) and CJC-1295 with DAC (an albumin-binding GHRH analog). See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["GH and IGF-1 signal", 3], ["Human evidence", 1], ["Risk load", 3, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ghRisk,
      ["IGF-1 exposure", "unknown", "Adds IGF-1 signaling directly on top of the GH it releases; long-term cancer risk from IGF-1 is unresolved", "contested", "", [303, 338]], vendor,
      ["Evidence base", "high", "IGF-1 LR3 has never been given to humans, and the two GH releasers have only short dosing studies in healthy adults", "established", "", [339, 306, 16]]],
    a: [["IGF-1 LR3", "animal", "Acts on the IGF-1 receptor directly and binds IGF binding proteins poorly, so more of it stays free"], ["Ipamorelin", "human rct", "Releases GH through the ghrelin receptor"], ["CJC-1295 with DAC", "human rct", "Raises GH and IGF-1 for days through the GHRH receptor"]],
    t: [], noTrials: "The blend has never been tested in humans. IGF-1 LR3 has never been given to people in a published study; ipamorelin and CJC-1295 each have short dose-finding studies in healthy adults.", noTrialsRefs: [339, 306, 16],
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "CJC-1295 with DAC lasts days; ipamorelin and IGF-1 LR3 act for hours"], ["Half-life", NE]], ke: "human rct",
    related: ["igf-1-lr3", "ipamorelin", "cjc-1295", "ipamorelin-cjc"], added, updated: added });

  A.add({ slug: "glow-3", name: "Glow 3.0", aliases: ["Glow 3", "SNAP-8 + KPV + Epithalon + GHK-Cu"], category: "blends", parts: ["snap-8", "kpv", "epitalon", "ghk-cu"], status: "Research only",
    class: "Peptide blend (SNAP-8 + KPV + epithalon + GHK-Cu)", developer: "Research-peptide vendors", tags: ["blend", "skin", "GHK-Cu", "epithalon", "KPV", "SNAP-8"],
    summary: "A four-peptide vial sold for skin and aging, built around GHK-Cu with SNAP-8, KPV and epithalon. None of the four has controlled human data in injected form, and the blend has never been studied.",
    names: "A vendor blend sold as Glow 3.0, distinct from GLOW. Half Nattys lists 5 mg SNAP-8, 5 mg KPV, 10 mg epithalon and 50 mg GHK-Cu per vial.",
    structure: "A lyophilized mix of four peptides in one vial. See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["Preclinical signal", 2], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Copper load", "low", "GHK-Cu is the largest component by weight; injected copper has no human safety data", "unknown"],
      ["Topical ingredients injected", "unknown", "SNAP-8 and GHK-Cu were studied on the skin, not by injection", "unknown", "SNAP-8's human study used a microneedle patch, and the GHK-Cu trials were topical.", [728, 612]], vendor,
      ["Evidence base", "high", "No ingredient has controlled human data in the injected form sold here", "established", "KPV has only mouse data, and epithalon's human reports are uncontrolled Russian studies.", [639, 614, 616]]],
    a: [["GHK-Cu", "in vitro", "Collagen and glycosaminoglycan synthesis in skin cells"], ["SNAP-8", "human rct", "A cosmetic peptide that mimics part of the SNARE complex to soften expression lines, studied topically"], ["KPV", "animal", "Anti-inflammatory effects in mouse colitis models"], ["Epithalon", "contested", "Claimed telomerase activation and anti-aging effects from one Russian research school"]],
    t: [], noTrials: "The blend has never been tested in humans, and none of its ingredients has a controlled human trial by injection.", noTrialsRefs: [612, 728, 639, 614],
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "Each peptide keeps its own pharmacokinetics"], ["Half-life", NE]], ke: "unknown",
    related: ["glow", "klow", "ghk-cu", "snap-8", "epitalon", "kpv"], added, updated: added });

  A.add({ slug: "ipamorelin-cjc", name: "Ipamorelin + CJC-1295", aliases: ["Ipamorelin/CJC-1295 with DAC", "Ipa/CJC"], category: "blends", parts: ["ipamorelin", "cjc-1295"], status: "Research only",
    class: "Peptide blend (ipamorelin + CJC-1295 with DAC)", developer: "Research-peptide vendors", tags: ["blend", "growth hormone", "ipamorelin", "CJC-1295"],
    summary: "A two-peptide vial pairing a ghrelin receptor agonist with a long-acting GHRH analog, sold to raise growth hormone. Each has short human pharmacology studies; the pair has never been studied.",
    names: "A vendor blend. Half Nattys lists 5 mg ipamorelin and 5 mg CJC-1295 with DAC per vial.",
    structure: "A lyophilized mix of two peptides in one vial. See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["GH signal", 3], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ghRisk,
      ["Mismatched durations", "unknown", "CJC-1295 with DAC raises GH for days while ipamorelin acts for hours, so one vial cannot time both", "unknown", "", [16, 306]], vendor,
      ["Evidence base", "high", "Neither ingredient has a trial longer than a few weeks", "established", "", [16, 306, 308]]],
    a: [["Ipamorelin", "human rct", "Releases GH through the ghrelin receptor"], ["CJC-1295 with DAC", "human rct", "Raises GH and IGF-1 for days through the GHRH receptor; GH pulses persist"]],
    t: [], noTrials: "The pair has never been tested together. Each ingredient has short dose-finding studies in healthy adults.", noTrialsRefs: [306, 16, 308],
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "CJC-1295 with DAC lasts days; ipamorelin acts for hours"], ["Half-life", NE]], ke: "human rct",
    related: ["ipamorelin", "cjc-1295", "mod-grf-1-29", "grow", "ipamorelin-tesamorelin"], added, updated: added });

  A.add({ slug: "ipamorelin-tesamorelin", name: "Ipamorelin + Tesamorelin", aliases: ["Ipamorelin/Tesamorelin", "Ipa/Tesa"], category: "blends", parts: ["ipamorelin", "tesamorelin"], status: "Research only",
    class: "Peptide blend (ipamorelin + tesamorelin)", developer: "Research-peptide vendors", tags: ["blend", "growth hormone", "ipamorelin", "tesamorelin", "visceral fat"],
    summary: "A two-peptide vial pairing ipamorelin with tesamorelin, the GHRH analog approved for abdominal fat in HIV. Tesamorelin has phase 3 trials on its own; the pair has never been studied.",
    names: "A vendor blend. Half Nattys lists 8 mg ipamorelin and 2 mg tesamorelin per vial.",
    structure: "A lyophilized mix of two peptides in one vial. See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["GH signal", 3], ["Human evidence", 2], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [comboUntested, fixedRatio, ["Glucose", "moderate", "Tesamorelin can raise blood glucose, and ipamorelin adds a second GH stimulus", "human rct", "", [332, 336]],
      ["Hypersensitivity", "low", "Tesamorelin caused reactions such as itching, flushing or rash in 4% of trial patients", "human rct", "", [336]], vendor],
    a: [["Tesamorelin", "human rct", "A stabilized GHRH analog that raises GH and IGF-1 and reduced visceral fat in phase 3 trials"], ["Ipamorelin", "human rct", "Releases GH through the ghrelin receptor"]],
    t: [], noTrials: "The pair has never been tested together. Tesamorelin alone was tested at 2 mg daily in phase 3 trials in HIV-associated abdominal fat; ipamorelin has short pharmacology studies.", noTrialsRefs: [331, 332, 306],
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "Each peptide keeps its own pharmacokinetics"], ["Half-life", NE]], ke: "human rct",
    related: ["tesamorelin", "ipamorelin", "ipamorelin-cjc"], added, updated: added });

  A.add({ slug: "cag-mots-c", name: "Cagrilintide + MOTS-c", aliases: ["CAG + MOTS-c"], category: "blends", parts: ["cagrilintide", "mots-c"], status: "Research only",
    class: "Peptide blend (cagrilintide + MOTS-c)", developer: "Research-peptide vendors", tags: ["blend", "amylin", "cagrilintide", "MOTS-c", "weight loss"],
    summary: "A two-peptide vial pairing cagrilintide, a weekly amylin analog with phase 3 weight-loss data, with MOTS-c, a mitochondrial peptide studied only in mice. The pair has never been studied.",
    names: "A vendor blend. Half Nattys lists 2.5 mg cagrilintide and 25 mg MOTS-c per vial as its standard configuration, with other options sold.",
    structure: "A lyophilized mix of two peptides in one vial. See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["Weight signal", 3], ["Human evidence", 2], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Gastrointestinal", "moderate", "Cagrilintide causes nausea, vomiting and constipation, mostly while the dose is being raised", "human rct", "", [415]],
      ["Evidence base", "high", "MOTS-c has never been tested as a treatment in humans", "established", "Its evidence is injection studies in mice, with measurements only in human exercise samples.", [437, 438]], vendor],
    a: [["Cagrilintide", "human rct", "A long-acting amylin analog that reduces appetite; trialed weekly, alone and with semaglutide"], ["MOTS-c", "animal", "Improved insulin sensitivity and exercise capacity in mice"]],
    t: [], noTrials: "The pair has never been tested together. Cagrilintide has phase 2 and phase 3 trials as a weekly injection; MOTS-c has only mouse studies.", noTrialsRefs: [414, 415, 437],
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "Cagrilintide was trialed once weekly; MOTS-c has no human pharmacokinetic data"], ["Half-life", NE]], ke: "unknown",
    related: ["cagrilintide", "mots-c", "semaglutide"], added, updated: added });

  A.add({ slug: "wolverine", name: "Wolverine (BPC-157 + TB-500)", aliases: ["Wolverine stack", "BPC-157 + TB-500 blend"], category: "blends", parts: ["bpc-157", "tb-500"], status: "Research only",
    class: "Peptide blend (BPC-157 + TB-500)", developer: "Research-peptide vendors", tags: ["blend", "BPC-157", "TB-500", "recovery", "healing"],
    summary: "BPC-157 and TB-500 sold together in one vial or nasal spray for injury recovery. Both have mostly animal evidence, and the combination has never been tested.",
    names: "A vendor blend sold as the Wolverine stack. Half Nattys lists 10 mg of each peptide per vial, and a nasal spray giving 50 mcg of each per spray.",
    structure: "A mix of two peptides: BPC-157 (15 amino acids) and TB-500 (a thymosin β4 fragment). See each ingredient's entry, and the stack page for the pair.",
    pubchem: false, pnote: blendNote, p: [["Preclinical signal", 3], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Angiogenesis", "unknown", "Both peptides promote blood vessel growth, a theoretical concern with existing tumors", "contested", "", [11]], vendor,
      ["Evidence base", "high", "Neither ingredient has controlled human data in the form sold here", "established", "BPC-157's human record is uncontrolled studies totaling about 30 people. Thymosin β4 trials used the full-length protein in eye drops or gel.", [603, 606]]],
    a: [["BPC-157", "animal", "Tissue repair and angiogenesis in rodent injury models"], ["TB-500", "animal", "Cell migration and wound repair via actin regulation"]],
    t: [], noTrials: "The combination has never been tested in humans. BPC-157's human studies are uncontrolled, and the thymosin β4 trials used the full-length protein rather than the TB-500 fragment. Neither has been studied as a nasal spray.", noTrialsRefs: [603, 606],
    k: [["Route", "Subcutaneous injection or nasal spray (informal)"], ["Components", "BPC-157 has a plasma half-life under 30 minutes in animals"], ["Half-life", NE]], ke: "animal",
    related: ["bpc-157", "tb-500", "glow"], added, updated: added });

  A.add({ slug: "semax-selank", name: "Semax + Selank", aliases: ["Semax + Selank blend"], category: "blends", parts: ["semax", "selank"], status: "Research only",
    class: "Nasal peptide blend (semax + selank)", developer: "Research-peptide vendors", tags: ["blend", "nootropic", "semax", "selank", "nasal spray", "anxiety"],
    summary: "A nasal spray combining semax and selank, two Russian peptides sold for focus and calm. Each is approved in Russia with small local studies, and the spray matches the nasal route they were studied by; the pair has never been studied.",
    names: "A vendor blend. Half Nattys lists 50 mcg semax and 50 mcg selank per spray, 100 sprays per bottle.",
    structure: "A solution of two peptides: semax (an ACTH(4-10) analog) and selank (a tuftsin analog). See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["Cognitive signal", 2], ["Human evidence", 2], ["Risk load", 1, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, vendor,
      ["Evidence base", "moderate", "Each peptide's human data are small Russian studies, several unblinded", "established", "", [500, 501, 502, 503]]],
    a: [["Semax", "human obs", "Studied in Russia for stroke recovery, with rises in BDNF"], ["Selank", "human rct", "Studied in Russia as an add-on for anxiety disorders"]],
    t: [], noTrials: "The pair has never been tested together. Semax's human data are Russian stroke studies, and selank's are small Russian anxiety trials.", noTrialsRefs: [500, 501, 502, 503],
    k: [["Route", "Nasal spray"], ["Components", "Each peptide keeps its own pharmacokinetics"], ["Half-life", NE]], ke: "unknown",
    related: ["semax", "selank", "selank-semax-dihexa", "adamax"], added, updated: added });

  A.add({ slug: "selank-semax-dihexa", name: "Selank + Semax + Dihexa", aliases: ["Tri Blend nasal spray", "Nootropic tri-blend"], category: "blends", parts: ["selank", "semax", "dihexa"], status: "Research only",
    class: "Nasal peptide blend (selank + semax + dihexa)", developer: "Research-peptide vendors", tags: ["blend", "nootropic", "dihexa", "semax", "selank", "nasal spray"],
    summary: "The semax and selank spray with dihexa added, a compound that has never been given to humans. The blend has never been studied.",
    names: "A vendor blend. Half Nattys lists 50 mcg each of selank, semax and dihexa per spray, 100 sprays per bottle.",
    structure: "A solution of two peptides and dihexa, an angiotensin IV analog. See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["Cognitive signal", 2], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Oncogenic signaling", "unknown", "Dihexa potentiates HGF/c-Met, a pathway that drives some cancers", "contested", "", [30]], vendor,
      ["Evidence base", "high", "Dihexa has no human data at all, by any route", "established", "", [30]]],
    a: [["Dihexa", "animal", "Potentiates HGF/c-Met signaling and improved memory in rodent models"], ["Semax and selank", "human obs", "As described for the semax and selank blend"]],
    t: [], noTrials: "The blend has never been tested in humans, and dihexa has never been given to a person in a published study.", noTrialsRefs: [30],
    k: [["Route", "Nasal spray"], ["Components", "Each compound keeps its own pharmacokinetics; dihexa's in humans are unknown"], ["Half-life", NE]], ke: "unknown",
    related: ["dihexa", "semax", "selank", "semax-selank"], added, updated: added });

  A.add({ slug: "oxy-pt", name: "Oxytocin + PT-141", aliases: ["OXY + PT", "Oxytocin + bremelanotide"], category: "blends", parts: ["oxytocin", "bremelanotide"], status: "Research only",
    class: "Nasal peptide blend (oxytocin + bremelanotide)", developer: "Research-peptide vendors", tags: ["blend", "oxytocin", "PT-141", "libido", "nasal spray"],
    summary: "A nasal spray combining oxytocin with PT-141 (bremelanotide), sold for libido and bonding. Oxytocin has nasal trials; bremelanotide was approved as an injection that causes nausea in about 40% of users. The pair has never been studied.",
    names: "A vendor blend. Half Nattys lists 50 mcg oxytocin and 100 mcg PT-141 per spray, 100 sprays per bottle.",
    structure: "A solution of two peptides: oxytocin (a 9-amino-acid hormone) and bremelanotide (a melanocortin receptor agonist). See each ingredient's entry.",
    pubchem: false, pnote: blendNote, p: [["Sexual function signal", 2], ["Human evidence", 2], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Nausea", "moderate", "Bremelanotide caused nausea in about 40% of users in phase 3", "human rct", "", [22]],
      ["Blood pressure", "moderate", "Bremelanotide raises blood pressure briefly after each dose", "human rct", "", [24]], vendor],
    a: [["Bremelanotide", "human rct", "A melanocortin agonist approved as an as-needed injection for low sexual desire in premenopausal women"], ["Oxytocin", "human rct", "Studied as a nasal spray for social function, with mixed results"]],
    t: [], noTrials: "The pair has never been tested together. Bremelanotide's approval trials used injection, not a nasal spray; oxytocin's trials were nasal.", noTrialsRefs: [22, 551, 552],
    k: [["Route", "Nasal spray"], ["Components", "Each peptide keeps its own pharmacokinetics"], ["Half-life", NE]], ke: "unknown",
    related: ["oxytocin", "bremelanotide", "melanotan-2"], added, updated: added });

  /* ================================================================ Supplies */
  A.cat("supplies", "Supplies", "Diluents and lab supplies sold alongside compounds.");
  A.add({ slug: "bac-water", name: "Bacteriostatic Water", aliases: ["BAC water", "Bacteriostatic Water for Injection, USP"], category: "supplies", status: "Approved",
    class: "Diluent (sterile water with benzyl alcohol)", developer: "Hospira and other manufacturers of the USP preparation", tags: ["diluent", "reconstitution", "benzyl alcohol", "supplies"],
    summary: "Sterile water with 0.9% benzyl alcohol, used to dissolve or dilute drugs for injection. The preservative lets one vial be entered many times; it must never be used for newborns.",
    names: "Labelled in the US as Bacteriostatic Water for Injection, USP, and sold by research vendors for reconstituting peptide vials. Half Nattys sells it in 30 mL bottles.",
    structure: "Water for injection with benzyl alcohol at 0.9% (9 mg/mL), or 1.1% in some vials, as a bacteriostatic preservative. pH about 5.7.",
    pubchem: false,
    r: [["Newborns", "high", "Not for use in neonates: benzyl alcohol is toxic to them", "established", "The label carries this as its boxed warning and says to use preservative-free sterile water when preparing drugs for newborns.", [892]],
      ["Intravenous use", "moderate", "Injected into a vein without a dissolved drug it can burst red blood cells", "established", "The label says it must be made roughly isotonic before IV use.", [892]],
      ["Injection site", "moderate", "Infection, abscess or tissue damage at the site can follow from the solution, the added drug or the technique", "established", "The label requires aseptic technique for every entry into the vial.", [892]],
      ["Compatibility", "low", "Some drugs are incompatible with benzyl alcohol", "established", "The label defers to the drug maker's instructions on which diluent to use.", [892]],
      ["Product quality", "moderate", "Water sold by research vendors may not be the labelled USP product; sterility is unverified", "established"]],
    a: [["Preservative", "established", "Benzyl alcohol stops bacteria growing, so the vial can be entered repeatedly", "Plain sterile water for injection has no preservative and is meant for single use."]],
    t: [], noTrials: "Not a drug with trials. It is a labelled pharmaceutical aid, indicated only for diluting or dissolving drugs for injection into a vein, muscle or under the skin.", noTrialsRefs: [892],
    related: ["bpc-157", "tb-500", "tri-amino"], added: "2026-10-18", updated: "2026-10-18" });

  A.add({ slug: "tri-amino", name: "Tri-Amino", aliases: ["Tri-Amino Pump", "Injectable Tri-Amino"], category: "products", status: "Research only",
    class: "Injectable amino acid blend (nitric oxide precursors)", developer: "Research-chemical vendors", tags: ["blend", "arginine", "citrulline", "ornithine", "pump"],
    summary: "An injectable amino acid solution sold as a pre-workout \"pump\" enhancer. It is commonly arginine, citrulline and ornithine. Oral citrulline has modest evidence; injecting these amino acids for a pump has none.",
    names: "A vendor product, typically sold at 300 mg/mL. It is commonly described as L-arginine, L-citrulline and L-ornithine, but compositions vary by seller.",
    structure: "A concentrated sterile-labeled solution of free amino acids. Concentrated amino acid solutions are hyperosmolar, which can make injections painful and irritating.",
    pubchem: false, pnote: blendNote, p: [["Pump effect", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [["Injection site", "moderate", "Concentrated amino acid solutions can cause pain, irritation and sterile abscesses", "established"],
      ["Sterility", "high", "Non-pharmaceutical injectables carry infection risk", "established"],
      ["Electrolytes", "low", "Large IV arginine doses can raise potassium; amounts in this product are smaller", "established", "IV arginine shifts potassium out of cells. Life-threatening hyperkalemia, one case fatal, has been reported in patients with liver and kidney impairment who had recently taken spironolactone.", [678]], vendor],
    a: [["Nitric oxide", "human rct", "Arginine is the substrate for nitric oxide synthase; citrulline raises arginine levels more reliably when taken orally"],
      ["Performance", "contested", "Oral citrulline has small, inconsistent performance benefits; no studies of injected blends"]],
    t: [{ title: "Ingredient evidence: oral citrulline and endurance", evidence: "human rct", meta: ["9 trials, 158 recreationally active young adults", "acute oral citrulline or control", "single dose or short loading", "systematic review and meta-analysis"], body: "Citrulline did not change time to exhaustion or time to completion in endurance exercise.", note: "This is oral citrulline, one ingredient, not the injectable blend. No study of injected Tri-Amino exists.", refs: [679] }],
    noTrials: "There are no studies of injectable Tri-Amino. The only evidence is for individual ingredients taken orally.",
    k: [["Route", "Subcutaneous or intramuscular injection (informal); the ingredients are normally taken orally"], ["Half-life", "Arginine: about 1 hour; citrulline: about 1 hour"], ["Excretion", "Metabolized via the urea cycle"]], ke: "human obs",
    related: ["sildenafil", "l-carnitine"], updated: "2026-10-17" });

  /* ================================================================ Compounded */
  A.add({ slug: "scar-cream", name: "Scar Cream", aliases: ["Advanced Scar Therapy Gel Cream", "Nourisil + Betamethasone + Lidocaine"], category: "products", status: "Compounded",
    class: "Compounded topical (silicone + corticosteroid + anesthetic)", developer: "Compounding pharmacies", tags: ["scars", "silicone", "corticosteroid", "compounded"],
    summary: "A prescription compounded cream combining a silicone base, the steroid betamethasone and the numbing agent lidocaine. Silicone and steroids both have evidence for raised scars; the combination itself is not an approved product.",
    names: "Sold as a compounded prescription (marketed as Advanced Scar Therapy Gel Cream). Nourisil is a silicone-based compounding base. Compounded products are not FDA-approved and their exact strength varies by pharmacy.",
    structure: "Silicone base (Nourisil) with betamethasone, a potent corticosteroid, and lidocaine, a local anesthetic. Strengths depend on the prescription.",
    pubchem: false, p: [["Raised scar flattening", 3], ["Discoloration", 2], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [["Steroid skin effects", "moderate", "Long-term topical steroids can thin skin, cause stretch marks, visible blood vessels and lighter patches, especially on the face", "established"],
      ["Lidocaine", "low", "Applying to large areas or broken skin raises systemic absorption", "established"],
      ["Wrong scar type", "moderate", "Steroids help raised scars but can worsen sunken (atrophic) acne scars by thinning skin further", "established"],
      ["Compounding variability", "moderate", "Strength and quality vary between pharmacies", "established"]],
    a: [["Silicone", "human rct", "Silicone gels and sheets are a first-line option for preventing and flattening hypertrophic scars and keloids, though trial quality is mixed"],
      ["Betamethasone", "established", "Reduces inflammation and collagen overproduction in raised scars; injected steroids are more effective than topical"],
      ["Lidocaine", "established", "Numbs itching and discomfort; does not change the scar"]],
    t: [{ title: "Ingredient evidence: silicone gel sheeting (Cochrane review)", evidence: "human rct", meta: ["20 trials, 873 people aged 1.5–81", "adhesive silicone gel sheeting against no treatment, other dressings, laser, steroid injection and others", "varied", "systematic review"], body: "Silicone sheeting reduced hypertrophic scarring in high-risk people (RR 0.46) and reduced the thickness and color of established scars.", note: "This is evidence for silicone, not for the compounded cream. The reviewers called the evidence weak, from trials highly susceptible to bias, and these trials used sheets, not a silicone cream base.", refs: [676] },
      { title: "Ingredient evidence: topical silicone gel after surgery", evidence: "human rct", meta: ["6 trials, 375 patients", "topical silicone gel against placebo or no treatment", "postoperative", "meta-analysis"], body: "Silicone gel lowered scar pigmentation, height and pliability scores. Gel and sheets performed similarly, and gel was no better than other non-silicone topicals.", note: "This is evidence for silicone gel alone. No trial has tested it combined with betamethasone and lidocaine.", refs: [677] }],
    noTrials: "There are no trials of this specific combination. Evidence comes from separate studies of silicone and corticosteroids for scars.",
    k: [["Route", "Topical"], ["Betamethasone absorption", "Low through intact skin, higher on thin skin, under occlusion or over large areas"], ["Lidocaine absorption", "Low on small areas of intact skin"]], ke: "established",
    related: ["ghk-cu", "throne-thr004"], updated: "2026-10-17" });

  /* ================================================================ Throne personal care */
  const listed = (x) => `The brand lists ${x} as key ingredients but does not publish a full ingredient list or any concentrations. Check the product label for the complete formula.`;
  const throne = (slug, name, aliases, kind, summary, purpose, extraRisk, o = {}) => A.add({ slug, name, aliases, category: "products", status: "Cosmetic",
    class: kind, developer: "Throne", tags: ["Throne", "skincare", "cosmetic"],
    summary,
    names: `A Throne personal care product, marketed for ${purpose}. Throne markets its line to people using anabolic steroids and peptides. The \"Cosmetic\" status means it is sold as a cosmetic, not a drug.`,
    structure: o.structure || "A full ingredient list was not available when this entry was written. Check the product label or the brand's website for ingredients and concentrations.",
    pubchem: false, p: [["Independent evidence", 0], ["Risk load", 1, 1], ["Evidence quality", 0]],
    r: [o.structure ? ["Unknown formula", "unknown", "Without a full ingredient list or concentrations, the effect and irritation risk can't be assessed", "unknown"]
      : ["Unknown formula", "unknown", "Without a published ingredient list, the effect and irritation risk can't be assessed", "unknown"],
      ["Skin irritation", "low", "Any skincare product can irritate sensitive skin; patch-test first", "established"], ...(extraRisk || [])],
    a: [["Claimed effect", "unknown", `Marketed for ${purpose}; there are no independent studies of this product`]],
    t: o.t || [], noTrials: o.noTrials || "There are no independent studies of this product.", noTrialsRefs: o.noTrialsRefs,
    k: [["Route", "Topical"], ["Systemic absorption", "Not applicable for typical cosmetic use"]], ke: "unknown",
    related: ["ghk-cu", "throne-thr001", "throne-thr004"].filter((s) => s !== slug), ...(o.updated ? { updated: o.updated } : {}) });

  throne("throne-ghk-soap", "Throne GHK Charcoal Soap", ["THR Soap Bar", "GHK charcoal soap"], "Cleansing bar (GHK-Cu + activated charcoal)",
    "A face and body soap bar marketed as containing GHK-Cu and charcoal. Copper peptides have some evidence in leave-on products, but a rinse-off soap leaves little time for them to act.",
    "skin cleansing, acne and skin aging",
    [["Rinse-off limits", "low", "Active ingredients in rinse-off products have limited contact time with skin", "established"]],
    { updated: "2026-10-17", structure: listed("activated charcoal and GHK-Cu"),
      noTrials: "There are no studies of this soap. The peer-reviewed human trials of GHK-Cu are one wound-gel trial in diabetic ulcers and one 13-patient laser-resurfacing study, both with leave-on products. No controlled human data were found for charcoal in cleansers.", noTrialsRefs: [612, 613] });
  throne("throne-thr001", "Throne THR001", ["THR001", "Throne cleanser"], "Facial cleanser",
    "A facial cleanser, the first step of Throne's three-product routine.",
    "skin cleansing, acne and skin aging", null,
    { updated: "2026-10-17", structure: listed("a beta hydroxy acid (BHA), a polyhydroxy acid (PHA), niacinamide, zinc PCA and a small amount of GHK-Cu"),
      noTrials: "There are no independent studies of this product. The only human evidence is for single ingredients in other formulations.",
      t: [{ title: "Ingredient evidence: topical niacinamide in acne", evidence: "human rct", meta: ["76 patients with moderate inflammatory acne", "4% nicotinamide gel or 1% clindamycin gel, twice daily", "8 weeks", "randomized, double-blind, active-controlled"], body: "82% improved on nicotinamide and 68% on clindamycin, a difference that was not significant. Lesion counts fell similarly.", note: "This is evidence for one ingredient, not for this product. It was a leave-on 4% gel; a rinse-off wash with an undisclosed amount of niacinamide cannot borrow the result.", refs: [792] }] });
  throne("throne-thr002", "Throne THR002", ["THR002", "Throne eye cream"], "Under-eye treatment",
    "An under-eye product marketed to reduce dark circles and puffiness.",
    "under-eye discoloration and puffiness",
    [["Eye area", "low", "Skin around the eyes is thin and more prone to irritation", "established"]],
    { updated: "2026-10-17", structure: listed("acetyl hexapeptide-8 (Argireline), acetyl octapeptide-3 (SNAP-8), GHK-Cu, caffeine, dipeptide-2 and hyaluronic acid"),
      noTrials: "There are no independent studies of this product. The only human evidence is for single ingredients in other formulations.",
      t: [{ title: "Ingredient evidence: Argireline around the eyes", evidence: "human rct", meta: ["60 Chinese adults with periorbital wrinkles", "Argireline or placebo, randomized 3:1, twice daily", "4 weeks", "multicenter, placebo-controlled"], body: "The authors report an overall anti-wrinkle efficacy of 48.9% in the Argireline group and a significant reduction in wrinkle depth.", note: "This is evidence for one ingredient, not for this product. It was small and short, and the placebo response rate is not reported.", refs: [790] },
        { title: "Ingredient evidence: SNAP-8 in a combination microneedle patch", evidence: "human rct", meta: ["24 healthy adults", "microneedle patch with acetyl octapeptide-3 and other actives, against a plain patch, overnight under the eyes", "28 days", "split-face, placebo-controlled"], body: "Wrinkles, elasticity and lift improved more on the active side.", note: "Microneedles delivered several actives together, so the result cannot be attributed to SNAP-8 and does not apply to an eye cream.", refs: [728] }] });
  throne("throne-thr004", "Throne THR004", ["THR004", "Throne moisturizer"], "Facial moisturizer",
    "A facial moisturizer, the final step of Throne's routine, marketed for hydration and skin aging.",
    "hydration and signs of skin aging", null,
    { updated: "2026-10-17", structure: listed("palmitoyl tripeptide-1 and palmitoyl tetrapeptide-7 (sold together as Matrixyl 3000), GHK-Cu, niacinamide and a ceramide"),
      noTrials: "There are no independent studies of this product. The only human evidence is for single ingredients, or a related peptide, in other formulations.",
      t: [{ title: "Ingredient evidence: niacinamide 5% for facial aging", evidence: "human rct", meta: ["50 white women with facial photoaging", "5% niacinamide on one half of the face, vehicle on the other, twice daily", "12 weeks", "double-blind, split-face, randomized"], body: "Fine lines, wrinkles, dark spots, red blotchiness and sallowness improved, and elasticity increased on the niacinamide side.", note: "This is evidence for one ingredient, not for this product. The trial was sponsor-run (Procter & Gamble), and the amount of niacinamide in THR004 is not disclosed.", refs: [791] },
        { title: "Related peptide, not in this product: palmitoyl pentapeptide-4", evidence: "human rct", meta: ["93 white women aged 35–55", "moisturizer with 3 ppm pal-KTTKS against the same moisturizer without it", "12 weeks", "double-blind, split-face, placebo-controlled"], body: "Wrinkles and fine lines improved more on the peptide side, and it was well tolerated.", note: "This is the original Matrixyl peptide, not the Matrixyl 3000 peptides in THR004. No controlled trial of Matrixyl 3000 itself was found.", refs: [793] }] });
})(window.ATLAS);
