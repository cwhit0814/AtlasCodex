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
      ["Angiogenesis", "unknown", "BPC-157 and TB-500 both promote blood vessel growth, a theoretical concern with existing tumors", "contested"], vendor],
    a: [["BPC-157", "animal", "Tissue repair and angiogenesis in rodent injury models"], ["GHK-Cu", "in vitro", "Collagen and glycosaminoglycan synthesis in skin cells"], ["TB-500", "animal", "Cell migration and wound repair via actin regulation"]],
    t: [], noTrials: "The blend has never been tested in humans. None of its three ingredients has a completed randomized human trial for the uses it is sold for.",
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "Each peptide keeps its own pharmacokinetics; BPC-157 has a plasma half-life under 30 minutes in animals"], ["Half-life", NE]], ke: "animal",
    related: ["bpc-157", "ghk-cu", "tb-500", "klow"] });

  A.add({ slug: "klow", name: "KLOW", aliases: ["KLOW blend", "GLOW + KPV"], category: "products", status: "Research only",
    class: "Peptide blend (BPC-157 + GHK-Cu + TB-500 + KPV)", developer: "Research-peptide vendors", tags: ["blend", "KPV", "BPC-157", "GHK-Cu", "TB-500"],
    summary: "GLOW with KPV added, an anti-inflammatory tripeptide. It is sold as an 80 mg vial for skin, recovery and inflammation. The blend has never been studied.",
    names: "A vendor blend sold as KLOW, usually in 80 mg vials. It is commonly described as GLOW (BPC-157, GHK-Cu and TB-500) plus 10 mg of KPV, but sellers don't always publish the ratio, so check the label.",
    structure: "A lyophilized mix of four separate peptides in one vial. See each ingredient's entry for details.",
    pubchem: false, pnote: blendNote, p: [["Preclinical signal", 3], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [comboUntested, fixedRatio, ["Unclear composition", "moderate", "The ratio is not standardized across vendors", "established"], vendor],
    a: [["KPV", "animal", "Anti-inflammatory effects in mouse colitis models"], ["BPC-157, GHK-Cu, TB-500", "animal", "As described for GLOW"]],
    t: [], noTrials: "The blend has never been tested in humans.",
    k: [["Route", "Subcutaneous injection (informal)"], ["Components", "Each peptide keeps its own pharmacokinetics"], ["Half-life", NE]], ke: "animal",
    related: ["glow", "kpv", "bpc-157"] });

  A.add({ slug: "tri-amino", name: "Tri-Amino", aliases: ["Tri-Amino Pump", "Injectable Tri-Amino"], category: "products", status: "Research only",
    class: "Injectable amino acid blend (nitric oxide precursors)", developer: "Research-chemical vendors", tags: ["blend", "arginine", "citrulline", "ornithine", "pump"],
    summary: "An injectable amino acid solution sold as a pre-workout \"pump\" enhancer. It is commonly arginine, citrulline and ornithine. Oral citrulline has modest evidence; injecting these amino acids for a pump has none.",
    names: "A vendor product, typically sold at 300 mg/mL. It is commonly described as L-arginine, L-citrulline and L-ornithine, but compositions vary by seller.",
    structure: "A concentrated sterile-labeled solution of free amino acids. Concentrated amino acid solutions are hyperosmolar, which can make injections painful and irritating.",
    pubchem: false, pnote: blendNote, p: [["Pump effect", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [["Injection site", "moderate", "Concentrated amino acid solutions can cause pain, irritation and sterile abscesses", "established"],
      ["Sterility", "high", "Non-pharmaceutical injectables carry infection risk", "established"],
      ["Electrolytes", "low", "Large IV arginine doses can raise potassium; amounts in this product are smaller", "established"], vendor],
    a: [["Nitric oxide", "human rct", "Arginine is the substrate for nitric oxide synthase; citrulline raises arginine levels more reliably when taken orally"],
      ["Performance", "contested", "Oral citrulline has small, inconsistent performance benefits; no studies of injected blends"]],
    t: [], noTrials: "There are no studies of injectable Tri-Amino. Evidence for its ingredients comes from oral supplementation studies.",
    k: [["Route", "Subcutaneous or intramuscular injection (informal); the ingredients are normally taken orally"], ["Half-life", "Arginine: about 1 hour; citrulline: about 1 hour"], ["Excretion", "Metabolized via the urea cycle"]], ke: "human obs",
    related: ["sildenafil", "l-carnitine"] });

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
    t: [], noTrials: "There are no trials of this specific combination. Evidence comes from separate studies of silicone and corticosteroids for scars.",
    k: [["Route", "Topical"], ["Betamethasone absorption", "Low through intact skin, higher on thin skin, under occlusion or over large areas"], ["Lidocaine absorption", "Low on small areas of intact skin"]], ke: "established",
    related: ["ghk-cu", "throne-thr004"] });

  /* ================================================================ Throne personal care */
  const throne = (slug, name, aliases, kind, summary, purpose, extraRisk) => A.add({ slug, name, aliases, category: "products", status: "Cosmetic",
    class: kind, developer: "Throne", tags: ["Throne", "skincare", "cosmetic"],
    summary,
    names: `A Throne personal care product, marketed for ${purpose}. Throne markets its line to people using anabolic steroids and peptides. The \"Cosmetic\" status means it is sold as a cosmetic, not a drug.`,
    structure: "A full ingredient list was not available when this entry was written. Check the product label or the brand's website for ingredients and concentrations.",
    pubchem: false, p: [["Independent evidence", 0], ["Risk load", 1, 1], ["Evidence quality", 0]],
    r: [["Unknown formula", "unknown", "Without a published ingredient list, the effect and irritation risk can't be assessed", "unknown"],
      ["Skin irritation", "low", "Any skincare product can irritate sensitive skin; patch-test first", "established"], ...(extraRisk || [])],
    a: [["Claimed effect", "unknown", `Marketed for ${purpose}; there are no independent studies of this product`]],
    t: [], noTrials: "There are no independent studies of this product.",
    k: [["Route", "Topical"], ["Systemic absorption", "Not applicable for typical cosmetic use"]], ke: "unknown",
    related: ["ghk-cu", "throne-thr001", "throne-thr004"].filter((s) => s !== slug) });

  throne("throne-ghk-soap", "Throne GHK Charcoal Soap", ["THR Soap Bar", "GHK charcoal soap"], "Cleansing bar (GHK-Cu + activated charcoal)",
    "A face and body soap bar marketed as containing GHK-Cu and charcoal. Copper peptides have some evidence in leave-on products, but a rinse-off soap leaves little time for them to act.",
    "skin cleansing, acne and skin aging",
    [["Rinse-off limits", "low", "Active ingredients in rinse-off products have limited contact time with skin", "established"]]);
  throne("throne-thr001", "Throne THR001", ["THR001", "Throne cleanser"], "Facial cleanser",
    "A facial cleanser, the first step of Throne's three-product routine.",
    "skin cleansing, acne and skin aging");
  throne("throne-thr002", "Throne THR002", ["THR002", "Throne eye cream"], "Under-eye treatment",
    "An under-eye product marketed to reduce dark circles and puffiness.",
    "under-eye discoloration and puffiness",
    [["Eye area", "low", "Skin around the eyes is thin and more prone to irritation", "established"]]);
  throne("throne-thr004", "Throne THR004", ["THR004", "Throne moisturizer"], "Facial moisturizer",
    "A facial moisturizer, the final step of Throne's routine, marketed for hydration and skin aging.",
    "hydration and signs of skin aging");
})(window.ATLAS);
