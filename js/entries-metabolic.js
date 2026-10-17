/* Atlas Codex: exercise mimetics and metabolic research compounds. Same schema as data.js. */
(function (A) {
  const mimeticNote = "Scored relative to other metabolic compounds in the codex. Every compound here except GW501516 has animal data only.";
  const greyMarket = { system: "Product quality", level: "high", text: "Only available as unregulated research-chemical powder or capsules. Identity, purity and dose are unverified", evidence: "established" };
  const noHuman = { system: "Human safety", level: "unknown", text: "No published human safety or pharmacokinetic data", evidence: "unknown" };

  A.entries.push(
    /* ------------------------------------------------------------ gw501516 */
    {
      slug: "gw501516", type: "compound", name: "Cardarine",
      aliases: ["GW501516", "GW1516", "Endurobol"], category: "metabolic", status: "Research only",
      class: "PPARδ agonist", developer: "GlaxoSmithKline / Ligand (1990s)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["PPARδ", "exercise mimetic", "endurance", "WADA prohibited", "carcinogenicity"],
      summary: "A PPARδ activator developed for cholesterol and metabolic disease. It improved blood lipids in small human studies, but GSK abandoned it in 2007 after it caused cancers in long-term animal studies.",
      names: "GW501516 is the GSK development code. It is sold as \"Cardarine\" or \"Endurobol\" on the gray market, often wrongly labeled as a SARM. GSK stopped development around 2007 after two-year rodent carcinogenicity studies found cancers in multiple organs. In 2013 WADA took the unusual step of issuing a public health warning about it. It is prohibited in sport.",
      structure: "C<sub>21</sub>H<sub>18</sub>F<sub>3</sub>NO<sub>3</sub>S<sub>2</sub>, about 453.5 g/mol. It is a phenoxyacetic acid with a thiazole ring and is a highly selective agonist of PPARδ (also called PPARβ/δ) over PPARα and PPARγ.",
      pubchem: "GW501516",
      profile: { note: mimeticNote, rows: [
        { label: "Endurance signal", score: 4 }, { label: "Lipid improvement", score: 3 },
        { label: "Risk load", score: 5, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Cancer", level: "high", text: "Caused cancers in multiple organs in two-year rodent studies, which ended its development", evidence: "animal", detail: "The tumors appeared at doses relevant to the exposures intended for humans. Whether this applies to people is unknown, but no regulator would allow further development on that record.", refs: [67] },
        { system: "Sport", level: "high", text: "Prohibited by WADA at all times, with a specific public health warning", evidence: "established", refs: [67] },
        greyMarket
      ],
      activity: [
        { title: "PPARδ", evidence: "established", summary: "Activates the nuclear receptor PPARδ, shifting muscle and liver toward burning fat for fuel" },
        { title: "Endurance", evidence: "animal", summary: "Combined with exercise, it increased running endurance and oxidative muscle fibers in mice", refs: [66] },
        { title: "Lipids and liver fat", evidence: "human rct", summary: "Raised HDL, lowered triglycerides and LDL, and reduced liver fat in small human studies", refs: [64, 65] }
      ],
      trials: [
        { title: "Moderately obese men", evidence: "human rct", meta: ["13 moderately obese men", "GW501516 10 mg daily or placebo", "2 weeks per period", "randomized, double-blind, crossover"], body: "GW501516 lowered fasting triglycerides, LDL, insulin and liver fat, and increased fat oxidation in muscle.", note: "This is a very small, very short study. It shows the drug does what the mechanism predicts in people, but says nothing about long-term safety.", refs: [64] },
        { title: "Lipids in healthy volunteers", evidence: "human rct", meta: ["healthy volunteers", "GW501516 at increasing doses or placebo", "2 weeks", "randomized, placebo-controlled"], body: "Triglycerides fell and HDL rose with dose, as the mechanism predicts.", refs: [65] },
        { title: "Lipids in people with low HDL and metabolic syndrome features", evidence: "human rct", meta: ["adults with low HDL cholesterol and metabolic syndrome characteristics", "GW501516 at daily doses, or placebo", "weeks", "randomized, placebo-controlled"], body: "GW501516 changed HDL cholesterol, LDL cholesterol, apoA1 and apoB, with fewer very-low-density particles and larger LDL, a shift the authors read as less atherogenic.", note: "A lipid study, not a performance or fat loss study. Nothing about endurance in people was ever published.", refs: [439] }
      ],
      related: ["slu-pp-332", "bam15", "atx-304"]
    },

    /* ------------------------------------------------------------ slu-pp-332 */
    {
      slug: "slu-pp-332", type: "compound", name: "SLU-PP-332",
      aliases: ["SLU-PP", "SLUPP"], category: "metabolic", status: "Research only",
      class: "ERRα/β/γ agonist (exercise mimetic)", developer: "Saint Louis University (Burris lab)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["ERR", "exercise mimetic", "endurance", "mitochondria"],
      summary: "An experimental exercise mimetic that activates estrogen-related receptors (ERRs). In mice it increased endurance and reduced obesity. It has never been tested in humans.",
      names: "Developed at Saint Louis University; the \"SLU\" in the name comes from there. It is a research tool compound and has not entered clinical development. Products sold online under this name are unregulated.",
      structure: "C<sub>18</sub>H<sub>14</sub>N<sub>2</sub>O<sub>2</sub>, about 290.3 g/mol. It is a small aryl hydrazide. Despite the name, estrogen-related receptors do not bind estrogen, and the compound has no estrogenic activity.",
      pubchem: "SLU-PP-332",
      profile: { note: mimeticNote, rows: [
        { label: "Endurance signal", score: 3 }, { label: "Fat loss signal", score: 3 },
        { label: "Human evidence", score: 0 }, { label: "Risk load", score: 3, neg: true },
        { label: "Evidence quality", score: 1 } ] },
      risks: [
        noHuman,
        { system: "Oral bioavailability", level: "unknown", text: "Animal studies used injection, so it is unclear whether oral products sold online are absorbed", evidence: "contested", detail: "The published mouse work on metabolic syndrome gave it by injection. A later, orally active analog (SLU-PP-915) was developed separately, which suggests the original was not suited to oral use.", refs: [69] },
        greyMarket
      ],
      activity: [
        { title: "ERRα (and ERRβ/γ)", evidence: "in vitro", summary: "Agonist of all three ERR isoforms, with the strongest action on ERRα", refs: [68] },
        { title: "Exercise mimetic", evidence: "animal", summary: "Shifted mouse muscle toward oxidative fibers and increased running endurance", refs: [68] },
        { title: "Metabolic syndrome", evidence: "animal", summary: "Reduced fat mass, improved insulin sensitivity and increased energy expenditure in obese mice", refs: [69] }
      ],
      trials: [],
      noTrials: "It has never been given to humans in a published study. The strongest evidence is a mouse study in diet-induced obese and ob/ob mice, where injections raised energy expenditure and fat oxidation, reduced fat mass gain and improved insulin sensitivity.",
      noTrialsRefs: [69],
      related: ["gw501516", "bam15", "mots-c"]
    },

    /* ------------------------------------------------------------ bam15 */
    {
      slug: "bam15", type: "compound", name: "BAM15",
      aliases: ["BAM-15"], category: "metabolic", status: "Research only",
      class: "Mitochondrial uncoupler (protonophore)", developer: "University of Virginia (Hoehn/Kenwood, 2014)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["mitochondrial uncoupler", "fat loss", "energy expenditure", "DNP"],
      summary: "A mitochondrial uncoupler that makes cells burn more fuel to produce the same energy. In mice it reversed diet-induced obesity without the overheating that made DNP notorious. There are no human data.",
      names: "Identified in 2014 as an uncoupler that, unlike older ones, does not depolarize the outer cell membrane. Several academic groups have studied it in mice. There has been no clinical development, and analogs are being explored to improve its poor solubility.",
      structure: "C<sub>16</sub>H<sub>10</sub>F<sub>2</sub>N<sub>6</sub>O, about 340.3 g/mol. It is an oxadiazolopyrazine, chemically unrelated to DNP.",
      pubchem: "BAM15",
      profile: { note: mimeticNote, rows: [
        { label: "Fat loss signal", score: 4 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 4, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        noHuman,
        { system: "Hyperthermia", level: "unknown", text: "Uncouplers as a class can cause fatal overheating. BAM15 did not raise body temperature in mice, but this has not been tested in humans", evidence: "contested", detail: "DNP, the best-known uncoupler, has caused many deaths at doses close to those people take for fat loss. BAM15's wider margin is a mouse finding only.", refs: [71, 443] },
        greyMarket
      ],
      activity: [
        { title: "Mitochondrial uncoupling", evidence: "in vitro", summary: "Carries protons across the inner mitochondrial membrane, so cells burn more fuel for the same ATP", detail: "Unlike older uncouplers it does not depolarize the plasma membrane. That selectivity is the main reason it looks safer in cell studies.", refs: [70] },
        { title: "Obesity models", evidence: "animal", summary: "Reversed diet-induced obesity and insulin resistance in mice without reducing food intake or lean mass", refs: [71] }
      ],
      trials: [],
      noTrials: "It has never been given to humans in a published study. The strongest evidence is two independent mouse studies, in which oral BAM15 reduced fat mass and improved insulin sensitivity without changing food intake or raising body temperature.",
      noTrialsRefs: [71, 443],
      related: ["slu-pp-332", "gw501516", "atx-304"]
    },

    /* ------------------------------------------------------------ atx-304 */
    {
      slug: "atx-304", type: "compound", name: "ATX-304",
      aliases: ["O304"], category: "metabolic", status: "Investigational",
      class: "Pan-AMPK activator", developer: "Betagenon (Sweden)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["AMPK", "exercise mimetic", "type 2 diabetes", "microvascular"],
      summary: "An oral drug that activates AMPK, the cell's main energy sensor. A small early trial in type 2 diabetes showed lower glucose and better blood flow in small vessels.",
      names: "First described as O304 and later developed as ATX-304. It is in clinical development and approved nowhere. Material sold online is unregulated.",
      structure: "A small-molecule activator of all AMPK isoforms. It works by protecting AMPK from being switched off (dephosphorylated), rather than by binding the same site as AMP.",
      pubchem: "O304",
      profile: { note: mimeticNote, rows: [
        { label: "Glycemic signal", score: 2 }, { label: "Exercise-mimetic signal", score: 3 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Well tolerated in early human studies", evidence: "human rct", refs: [72] },
        { system: "Cardiac", level: "unknown", text: "Activating AMPK throughout the body could affect the heart. Some genetic AMPK mutations cause heart muscle disease", evidence: "contested", detail: "Genetic AMPK-γ2 mutations cause cardiomyopathy. Whether drug activation carries any similar risk has not been shown. In the paper that reported the human study, O304 did not increase heart weight in mice or rats, which addresses one specific concern and says nothing about the others.", refs: [72] },
        greyMarket
      ],
      activity: [
        { title: "AMPK", evidence: "in vitro", summary: "Activates all AMPK isoforms by suppressing their dephosphorylation", refs: [72] },
        { title: "Glucose uptake", evidence: "animal", summary: "Increased glucose uptake in muscle and improved insulin sensitivity in diabetic mice", refs: [72] },
        { title: "Microvascular perfusion", evidence: "human rct", summary: "Improved blood flow in small peripheral vessels in people with type 2 diabetes", refs: [72] }
      ],
      trials: [
        { title: "Phase 2a in type 2 diabetes on metformin", evidence: "human rct", meta: ["adults with type 2 diabetes on metformin", "O304 or placebo added to metformin", "28 days", "randomized, double-blind, placebo-controlled"], body: "O304 lowered fasting glucose and HOMA-IR, improved peripheral microvascular perfusion and reduced blood pressure compared with placebo, and was well tolerated.", note: "The human part of this paper is a 28-day proof-of-concept study reported alongside mouse work, not a stand-alone trial report. Everything beyond 28 days in people is unknown.", refs: [72] }
      ],
      related: ["bam15", "slu-pp-332", "mots-c"]
    }
  );

  Object.assign(A.references, {
    64: "Risérus U et al. Activation of peroxisome proliferator-activated receptor (PPAR)δ promotes reversal of multiple metabolic abnormalities, reduces oxidative stress, and increases fatty acid oxidation in moderately obese men. Diabetes 2008;57:332–339.",
    65: "Sprecher DL et al. Triglyceride:high-density lipoprotein cholesterol effects in healthy subjects administered a peroxisome proliferator activated receptor δ agonist. Arterioscler Thromb Vasc Biol 2007;27:359–365.",
    66: "Narkar VA et al. AMPK and PPARδ agonists are exercise mimetics. Cell 2008;134:405–415.",
    67: "World Anti-Doping Agency. WADA issues alert on GW501516. Announcement, 2013.",
    68: "Billon C et al. Synthetic ERRα/β/γ agonist induces an ERRα-dependent acute aerobic exercise response and enhances exercise capacity. ACS Chem Biol 2023;18:756–771.",
    69: "Billon C et al. A synthetic ERR agonist alleviates metabolic syndrome. J Pharmacol Exp Ther 2024;388:232–240.",
    70: "Kenwood BM et al. Identification of a novel mitochondrial uncoupler that does not depolarize the plasma membrane. Mol Metab 2014;3:114–123.",
    71: "Alexopoulos SJ et al. Mitochondrial uncoupler BAM15 reverses diet-induced obesity and insulin resistance in mice. Nat Commun 2020;11:2397.",
    72: "Steneberg P et al. PAN-AMPK activator O304 improves glucose homeostasis and microvascular perfusion in mice and type 2 diabetes patients. JCI Insight 2018;3:e99114."
  });
})(window.ATLAS);
