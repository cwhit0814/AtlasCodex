/*
 * Atlas Codex: pharmacokinetics for each compound, keyed by entry slug.
 *   evidence: the strongest source behind the numbers (same badge values as elsewhere)
 *   rows:     [label, value] pairs. Use "Not established" rather than guessing
 *   note:     optional caveat shown under the table
 *   refs:     reference ids from the references lists
 * Loaded after the entry files. It attaches `pk` to each matching entry.
 */
(function (A) {
  const NE = "Not established in humans";
  const PK = {
    /* ------------------------------------------------------------ metabolic */
    semaglutide: { evidence: "human rct", refs: [76], rows: [
      ["Route", "Subcutaneous injection (weekly) or oral tablet (daily)"],
      ["Bioavailability", "About 89% subcutaneous; about 0.4–1% oral"],
      ["Time to peak", "1–3 days subcutaneous; about 1 hour oral"],
      ["Half-life", "About 1 week (roughly 165 hours)"],
      ["Steady state", "4–5 weeks of weekly dosing"],
      ["Metabolism", "Proteolytic cleavage of the peptide and β-oxidation of the fatty-acid side chain"],
      ["Excretion", "Urine and feces as metabolites; about 3% excreted unchanged in urine"] ],
      note: "The oral tablet has to be taken fasting with a small sip of water, because its absorption enhancer (SNAC) only works in an empty stomach." },
    tirzepatide: { evidence: "human rct", refs: [77], rows: [
      ["Route", "Subcutaneous injection (weekly)"],
      ["Bioavailability", "About 80%"],
      ["Time to peak", "8–72 hours"],
      ["Half-life", "About 5 days"],
      ["Steady state", "About 4 weeks of weekly dosing"],
      ["Metabolism", "Proteolytic cleavage, β-oxidation of the C20 fatty diacid and amide hydrolysis"],
      ["Excretion", "Urine and feces as metabolites"] ] },
    retatrutide: { evidence: "human rct", refs: [8], rows: [
      ["Route", "Subcutaneous injection (weekly)"],
      ["Bioavailability", "Not published"],
      ["Half-life", "About 6 days in early-phase studies"],
      ["Metabolism", "Expected to follow other acylated peptides: proteolysis and fatty-acid β-oxidation"],
      ["Excretion", "Not published"] ],
      note: "Full pharmacokinetic data will come with regulatory filings. These values are from early clinical studies." },
    "gw501516": { evidence: "human rct", refs: [65], rows: [
      ["Route", "Oral"],
      ["Bioavailability", "Orally active; absolute bioavailability not published"],
      ["Half-life", "Roughly 16–24 hours, which supports once-daily dosing"],
      ["Metabolism", "Hepatic; detectable sulfoxide and sulfone metabolites are used in doping tests"],
      ["Excretion", "Mainly as metabolites"] ],
      note: "Anti-doping labs target the sulfone metabolites because the parent compound clears quickly from urine." },
    "slu-pp-332": { evidence: "animal", refs: [68], rows: [
      ["Route", "Intraperitoneal injection in mouse studies"],
      ["Bioavailability", "Oral bioavailability not reported"],
      ["Half-life", NE],
      ["Metabolism", NE],
      ["Excretion", NE] ],
      note: "Oral capsules sold online assume oral absorption that has never been demonstrated." },
    bam15: { evidence: "animal", refs: [71], rows: [
      ["Route", "Oral (mixed into food or given by gavage) in mouse studies"],
      ["Bioavailability", "Orally bioavailable in mice"],
      ["Half-life", "About 1.7 hours in mice"],
      ["Metabolism", NE],
      ["Excretion", NE] ],
      note: "The short half-life is one reason mouse studies gave it continuously in food. Human values are unknown." },
    "atx-304": { evidence: "human rct", refs: [72], rows: [
      ["Route", "Oral"],
      ["Dosing interval", "Once daily in clinical studies"],
      ["Half-life", "Not published"],
      ["Metabolism", "Not published"],
      ["Excretion", "Not published"] ] },

    /* ------------------------------------------------------------ repair / skin */
    "bpc-157": { evidence: "animal", refs: [73], rows: [
      ["Route", "Injection (subcutaneous or intramuscular) or oral in animal studies"],
      ["Bioavailability", "Low after intramuscular injection in rats, moderate in dogs. Oral bioavailability not established"],
      ["Half-life", "Under 30 minutes in plasma in rats and dogs"],
      ["Metabolism", "Broken down rapidly into smaller peptides and amino acids"],
      ["Excretion", "Mainly urine and bile as metabolites"] ],
      note: "Effects reported in animals last far longer than the measured plasma half-life, a gap that has never been explained." },
    "tb-500": { evidence: "unknown", rows: [
      ["Route", "Subcutaneous or intramuscular injection (informal use)"],
      ["Bioavailability", NE],
      ["Half-life", NE],
      ["Metabolism", "Expected proteolysis to amino acids"],
      ["Excretion", NE] ],
      note: "Full-length thymosin β4 has been dosed in human trials, but those data do not transfer to the short fragment sold as TB-500." },
    "ghk-cu": { evidence: "in vitro", refs: [13], rows: [
      ["Route", "Topical (cosmetics); injection in informal use"],
      ["Skin penetration", "Limited through intact skin; improved by penetration enhancers and microneedling"],
      ["Half-life", "Not established; small peptides like this are typically degraded in plasma within minutes"],
      ["Metabolism", "Peptidase cleavage; copper released and handled by normal copper transport"],
      ["Excretion", NE] ] },
    "tri-blend-topical": { evidence: "human rct", refs: [31, 33, 82], rows: [
      ["Route", "Topical scalp solution"],
      ["Minoxidil", "About 1–2% of a topical dose reaches the bloodstream. Activated in the follicle by sulfotransferase. Oral half-life about 4 hours"],
      ["Finasteride", "Topical use gives plasma levels far below oral dosing, but enough to lower serum DHT. Oral half-life 5–6 hours (longer in older men)"],
      ["RU-58841", "Human pharmacokinetics never published. Designed to act locally, but systemic absorption is not ruled out"],
      ["Excretion", "Minoxidil mainly in urine as glucuronide; finasteride in urine and feces as metabolites"] ],
      note: "Absorption rises with larger volumes, broken or inflamed skin, and occlusion such as caps worn after application." },

    /* ------------------------------------------------------------ gh axis */
    "growth-hormone": { evidence: "established", refs: [81], rows: [
      ["Route", "Subcutaneous injection (daily, or weekly for long-acting forms)"],
      ["Bioavailability", "About 70–80% subcutaneous"],
      ["Time to peak", "About 4–6 hours subcutaneous"],
      ["Half-life", "About 2–3 hours subcutaneous; about 20 minutes intravenous"],
      ["Metabolism", "Proteolysis in the liver and kidneys"],
      ["Excretion", "Very little intact GH appears in urine"] ],
      note: "IGF-1, which carries much of GH's effect, stays raised for about a day after a single dose." },
    ipamorelin: { evidence: "human rct", refs: [74], rows: [
      ["Route", "Intravenous in human studies; subcutaneous in informal use"],
      ["Bioavailability", "Not established subcutaneously in humans"],
      ["Half-life", "About 2 hours intravenous"],
      ["GH response", "GH peaks about 40 minutes after an IV dose, as a single pulse"],
      ["Excretion", "Mainly renal"] ] },
    "cjc-1295": { evidence: "human rct", refs: [16], rows: [
      ["Route", "Subcutaneous injection"],
      ["Half-life", "About 5.8–8.1 days (DAC version)"],
      ["Duration of effect", "GH raised for 6 or more days and IGF-1 for 9–11 days after one dose"],
      ["Mechanism of extension", "Covalent binding to serum albumin"],
      ["Excretion", NE] ],
      note: "\"CJC-1295 without DAC\" (Modified GRF 1-29) has a half-life of about 30 minutes. These values do not apply to it." },

    /* ------------------------------------------------------------ longevity / immune / melanocortin */
    epitalon: { evidence: "unknown", rows: [
      ["Route", "Injection or intranasal in informal use"],
      ["Bioavailability", NE],
      ["Half-life", "Not established; expected to be short for a tetrapeptide"],
      ["Metabolism", "Expected peptidase cleavage to amino acids"],
      ["Excretion", NE] ] },
    "mots-c": { evidence: "animal", refs: [20], rows: [
      ["Route", "Intraperitoneal injection in mouse studies"],
      ["Bioavailability", NE],
      ["Half-life", NE],
      ["Endogenous levels", "Circulates naturally in human plasma and rises with exercise"],
      ["Excretion", NE] ] },
    "thymosin-alpha-1": { evidence: "human rct", rows: [
      ["Route", "Subcutaneous injection"],
      ["Time to peak", "About 1–2 hours"],
      ["Half-life", "About 2 hours"],
      ["Metabolism", "Proteolysis"],
      ["Excretion", "Renal"] ] },
    bremelanotide: { evidence: "human rct", refs: [24], rows: [
      ["Route", "Subcutaneous autoinjector, as needed"],
      ["Bioavailability", "About 100% subcutaneous"],
      ["Time to peak", "About 1 hour"],
      ["Half-life", "About 2.7 hours"],
      ["Metabolism", "Hydrolysis of peptide bonds"],
      ["Excretion", "About 65% in urine and 23% in feces"] ],
      note: "The label limits use to one dose per 24 hours and eight doses per month." },

    /* ------------------------------------------------------------ nootropics */
    selank: { evidence: "animal", rows: [
      ["Route", "Intranasal"],
      ["Bioavailability", "Reaches the brain after intranasal dosing in animals"],
      ["Half-life", "Minutes in blood; effects are reported to outlast plasma levels"],
      ["Metabolism", "Peptidase cleavage into shorter active fragments"],
      ["Excretion", NE] ] },
    semax: { evidence: "animal", refs: [19], rows: [
      ["Route", "Intranasal"],
      ["Bioavailability", "Reaches the brain after intranasal dosing in animals"],
      ["Half-life", "Minutes in blood; effects on BDNF last many hours"],
      ["Metabolism", "Peptidase cleavage; Pro-Gly-Pro fragments may be active"],
      ["Excretion", NE] ] },
    dihexa: { evidence: "animal", refs: [28], rows: [
      ["Route", "Oral or intraperitoneal in rat studies"],
      ["Bioavailability", "Orally active and crosses the blood–brain barrier in rats"],
      ["Half-life", NE],
      ["Metabolism", NE],
      ["Excretion", NE] ] },
    piracetam: { evidence: "established", refs: [51, 80], rows: [
      ["Route", "Oral or intravenous"],
      ["Bioavailability", "About 100% oral"],
      ["Time to peak", "About 1 hour"],
      ["Half-life", "About 5 hours in plasma; about 8.5 hours in cerebrospinal fluid"],
      ["Metabolism", "Not metabolized"],
      ["Excretion", "Almost entirely unchanged in urine. Dose adjustment is needed in kidney impairment"] ] },
    aniracetam: { evidence: "human obs", rows: [
      ["Route", "Oral"],
      ["Bioavailability", "About 0.2% as the parent drug"],
      ["Half-life", "Under an hour for the parent drug"],
      ["Metabolism", "Extensive first-pass metabolism to N-anisoyl-GABA, p-anisic acid and 2-pyrrolidinone"],
      ["Excretion", "Mainly urine as metabolites"] ],
      note: "Because so little parent drug survives, its metabolites probably account for much of any effect after oral dosing." },
    oxiracetam: { evidence: "human obs", rows: [
      ["Route", "Oral or intravenous"],
      ["Bioavailability", "Roughly 55–80% oral"],
      ["Half-life", "About 8 hours in healthy adults; much longer in kidney impairment"],
      ["Metabolism", "Little or none"],
      ["Excretion", "Mainly unchanged in urine"] ] },
    pramiracetam: { evidence: "human obs", rows: [
      ["Route", "Oral"],
      ["Time to peak", "About 2–3 hours"],
      ["Half-life", "Roughly 5–6 hours"],
      ["Metabolism", "Not well characterized"],
      ["Excretion", "Not well characterized"] ] },
    phenylpiracetam: { evidence: "established", rows: [
      ["Route", "Oral"],
      ["Bioavailability", "About 100%"],
      ["Time to peak", "About 1 hour"],
      ["Half-life", "About 3–5 hours"],
      ["Metabolism", "Not metabolized"],
      ["Excretion", "Unchanged, about 40% in urine and the remainder in bile and sweat (per Russian labeling)"] ] },
    nefiracetam: { evidence: "human obs", rows: [
      ["Route", "Oral"],
      ["Half-life", "Roughly 3–5 hours"],
      ["Metabolism", "Hepatic hydroxylation"],
      ["Excretion", "Mainly urine as metabolites"] ] },
    "prl-8-53": { evidence: "unknown", rows: [
      ["Route", "Oral (single 5 mg dose in the only human study)"],
      ["Bioavailability", NE],
      ["Half-life", NE],
      ["Metabolism", "Not established; the methyl ester is likely hydrolyzed"],
      ["Excretion", NE] ] },
    "9-me-bc": { evidence: "unknown", rows: [
      ["Route", "Oral in informal use; injection in animal studies"],
      ["Bioavailability", NE],
      ["Half-life", NE],
      ["Metabolism", NE],
      ["Excretion", NE] ] },
    "nsi-189": { evidence: "human rct", refs: [62], rows: [
      ["Route", "Oral"],
      ["Half-life", "Roughly 17–20 hours, which supports once-daily dosing"],
      ["Metabolism", "Not published"],
      ["Excretion", "Not published"] ] },

    /* ------------------------------------------------------------ aas */
    testosterone: { evidence: "established", refs: [78], rows: [
      ["Route", "Intramuscular or subcutaneous injection, transdermal gel, oral undecanoate"],
      ["Half-life by form", "Free testosterone: minutes. Enanthate: about 4–5 days. Cypionate: about 8 days. Undecanoate injection: weeks (dosed every 10–12 weeks)"],
      ["Gel absorption", "About 10% of the applied dose is absorbed through the skin"],
      ["Oral", "Unmodified testosterone is mostly destroyed by first-pass liver metabolism. Oral undecanoate is absorbed through the lymphatic system and must be taken with food"],
      ["Metabolism", "Liver, to androsterone and etiocholanolone. Converted to estradiol by aromatase and to DHT by 5α-reductase"],
      ["Excretion", "About 90% in urine as glucuronide and sulfate conjugates"] ],
      note: "An ester only controls how slowly testosterone is released from the injection site. Once freed, the hormone is identical whatever the ester." },
    masteron: { evidence: "anecdotal", rows: [
      ["Route", "Intramuscular injection"],
      ["Half-life", "Propionate: roughly 2 days. Enanthate: roughly 5 days. Both are estimates from ester chemistry, not human studies"],
      ["Metabolism", "Hepatic; not aromatized and not further 5α-reduced"],
      ["Excretion", "Urine as conjugated metabolites"] ] },
    equipoise: { evidence: "anecdotal", rows: [
      ["Route", "Intramuscular injection"],
      ["Half-life", "Roughly 14 days for the undecylenate ester; an estimate, not a human measurement"],
      ["Metabolism", "Hepatic; partly aromatized to an estrogen and 5α-reduced to a weak androgen"],
      ["Excretion", "Urine. Metabolites are detectable in doping tests for months after the last dose"] ] },
    anavar: { evidence: "established", refs: [79], rows: [
      ["Route", "Oral"],
      ["Bioavailability", "About 97%"],
      ["Time to peak", "About 1 hour"],
      ["Half-life", "About 9–10 hours; longer in older adults"],
      ["Metabolism", "Unusually limited for an oral steroid"],
      ["Excretion", "About 28% excreted unchanged in urine"] ],
      note: "Its relatively small reliance on liver metabolism is part of why it is milder on the liver than other 17α-alkylated steroids." },
    anadrol: { evidence: "anecdotal", rows: [
      ["Route", "Oral"],
      ["Half-life", "Not well characterized; roughly 8–9 hours is commonly cited"],
      ["Metabolism", "Hepatic"],
      ["Excretion", "Urine as metabolites"] ] },
    superdrol: { evidence: "unknown", rows: [
      ["Route", "Oral"],
      ["Half-life", "Not established; roughly 8 hours is commonly cited without a source"],
      ["Metabolism", "Hepatic; metabolites characterized by anti-doping labs"],
      ["Excretion", "Urine as metabolites"] ] }
  };

  Object.entries(PK).forEach(([slug, pk]) => {
    const e = A.entries.find((x) => x.slug === slug);
    if (e) e.pk = pk;
  });

  Object.assign(A.references, {
    73: "He L et al. Pharmacokinetics, distribution, metabolism, and excretion of body-protective compound 157, a potential drug for treating various wounds, in rats and dogs. Front Pharmacol 2022;13:1026182.",
    74: "Gobburu JV et al. Pharmacokinetic-pharmacodynamic modeling of ipamorelin, a growth hormone releasing peptide, in human volunteers. Pharm Res 1999;16:1412–1416.",
    76: "Ozempic and Rybelsus (semaglutide) prescribing information. US FDA.",
    77: "Mounjaro (tirzepatide) prescribing information. US FDA.",
    78: "Depo-Testosterone (testosterone cypionate) and AndroGel (testosterone gel) prescribing information. US FDA.",
    79: "Oxandrin (oxandrolone) prescribing information. US FDA.",
    80: "Nootropil (piracetam) summary of product characteristics. UCB.",
    81: "Genotropin (somatropin) prescribing information. US FDA.",
    82: "Propecia (finasteride) prescribing information. US FDA."
  });
})(window.ATLAS);
