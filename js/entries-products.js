/* Atlas Codex: blends and branded products (GLOW, KLOW, Tri-Amino, Scar Cream, Throne).
   Uses ATLAS.add / ATLAS.cat from builder.js. */
(function (A) {
  const NE = A.NE;
  A.cat("products", "Blends & Products", "Multi-ingredient peptide blends, compounded creams and branded personal care products.");

  const blendNote = "A blend's evidence can be no better than the evidence for its weakest ingredient. No blend here has been tested as a combination.";
  const vendor = ["Product quality", "moderate", "Sold as an unregulated research product; identity, ratio and sterility are unverified", "established"];
  const comboUntested = ["Combination untested", "unknown", "No study has tested these ingredients together, so interactions and the benefit of combining them are unknown", "unknown"];
  const fixedRatio = ["Fixed ratio", "moderate", "Every ingredient is dosed together, so adjusting one changes all of them", "established"];

  /* ================================================================ Peptide blends */
  A.add({ slug: "glow", name: "GLOW", aliases: ["GLOW blend", "BPC-157 + GHK-Cu + TB-500"], category: "products", status: "Research only",
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

  A.add({ slug: "klow", name: "KLOW", aliases: ["KLOW blend", "GLOW + KPV"], category: "products", status: "Research only",
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
