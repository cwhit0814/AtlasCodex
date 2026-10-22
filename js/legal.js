/*
 * Atlas Codex: legal status by jurisdiction, keyed by entry slug.
 *
 * Every compound page has a Legal status section built from these rows. A jurisdiction with no row is listed as
 * not yet checked, never as unregulated.
 *
 * Each row: { where, kind, status, text, refs }
 *   where   "US" | "UK" | "EU" | "CA" | "AU" | "NZ" | "JP" | "CN" | "RU" | "WADA"
 *   kind    "rx" | "otc" | "controlled" | "supplement" | "cosmetic" | "unapproved" | "prohibited" | "vet",
 *           or for WADA "sport-banned" | "sport-in-comp" | "sport-monitored" | "sport-allowed"
 *   status  a few words, shown as the tag
 *   text    one sentence on what the source shows
 *   refs    ids from the references list: the statute, schedule, register or list itself
 *
 * Same sourcing rules as the rest of the codex. Law changes, so legalChecked records when the rows were last checked.
 */
(function (A) {
  A.legalChecked = "2026-10-21";
  A.legal = {
    "1-3-dmaa": [
      {
        "where": "US",
        "kind": "prohibited",
        "status": "Illegal in dietary supplements",
        "text": "FDA says DMAA is not a dietary ingredient, that products marketed as supplements with it are illegal, and that it has no information showing DMAA is safe.",
        "refs": [
          1006
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada says dimethylamylamine (DMAA) is a drug that is not authorized for use in Canada, and lists high blood pressure, chest pain and stroke among its side effects.",
        "refs": [
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "prohibited",
        "status": "Banned (Schedule 10)",
        "text": "Listed in Schedule 10 of the Poisons Standard, which bans its sale, supply and use.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. Methylhexanamine (1,3-dimethylamylamine, DMAA) is listed, except when present as an unmodified, naturally occurring substance.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (4-methylhexan-2-amine, 1,3-DMAA) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"4-метилгексан-2-амин (ДМАА)\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime.",
        "refs": [
          1700
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.B stimulant, banned in competition",
        "text": "4-Methylhexan-2-amine (1,3-DMAA, methylhexaneamine) is named as a specified stimulant under S6.B, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "1-4-dmaa": [
      {
        "where": "AU",
        "kind": "prohibited",
        "status": "Banned (Schedule 10)",
        "text": "Listed in Schedule 10 of the Poisons Standard, which bans its sale, supply and use.",
        "refs": [
          1400
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (5-methylhexan-2-amine, 1,4-DMAA) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"1,4-диметилпентиламин (1,4-ДМАА)\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime.",
        "refs": [
          1700
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.B stimulant, banned in competition",
        "text": "5-Methylhexan-2-amine (1,4-DMAA) is named as a specified stimulant under S6.B, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "5-amino-1mq": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no 5-Amino-1MQ product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "9-me-bc": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no 9-Me-BC product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "acarbose": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic acarbose).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Acarbose tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1150
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Acarbose is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Mar-Acarbose are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1554
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "acd856": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved ACD856 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no ACD856 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "ace-031": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved ACE-031 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no ACE-031 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (ACE-031) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as an activin receptor trap).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.3 activin receptor agent, banned at all times",
        "text": "ACE-031 is named as a decoy activin receptor under S4.3, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "adrafinil": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved adrafinil product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no adrafinil product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard.",
        "refs": [
          3600
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (adrafinil) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "List II psychotropic (Decree No. 681)",
        "text": "Adrafinil is named on List II of Russia's drug-control list: its trade is restricted and placed under state control.",
        "refs": [
          1701
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Adrafinil is named as a non-specified stimulant under S6.A, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "ahk-cu": [
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4, except low-copper or 5% or less preparations",
        "text": "Copper compounds for human use are Schedule 4, except internal-use products with 5 mg or less of copper per daily dose and other preparations with 5% or less copper compounds. The entry names copper compounds in general, not copper peptides.",
        "refs": [
          1400
        ]
      }
    ],
    "aicar": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved AICAR product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no AICAR product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (AICAR) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as an AMPK activator).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.4.1 metabolic modulator, banned at all times",
        "text": "AICAR is named as an AMPK activator under S4.4.1 metabolic modulators, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "albuterol": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (inhalers and oral forms).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Salbutamol (albuterol) inhalers such as Ventolin Evohaler are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1107
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Salbutamol (albuterol) is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Ventolin HFA are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "otc",
        "status": "Schedule 3 inhaler; otherwise Schedule 4",
        "text": "Salbutamol in standard-dose inhalers is pharmacist-only (Schedule 3); other forms are prescription only (Schedule 4).",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (salbutamol sulfate). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1511
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (salbutamol) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as salbutamol), except inhaled use up to 1600 micrograms in 24 hours.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Ventolin inhaler)",
        "text": "Ventolin (salbutamol, albuterol) 100 micrograms per dose metered inhaler has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1724
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S3 beta-2 agonist; inhaled use allowed within limits",
        "text": "Salbutamol is a prohibited beta-2 agonist except when inhaled up to 1600 micrograms in 24 hours (no more than 600 micrograms in 8 hours), and urine above 1000 ng/mL counts as a positive unless a controlled study shows a therapeutic inhaled dose.",
        "refs": [
          1800
        ]
      }
    ],
    "alpha-gpc": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved choline alfoscerate (alpha-GPC) product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "amphetamine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only, Schedule II",
        "text": "FDA-approved and sold by prescription (Adderall and other amphetamine products). Amphetamine, its salts and optical isomers are listed in Schedule II of the Controlled Substances Act.",
        "refs": [
          1000,
          1003
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Prescription only, Class B / Schedule 2",
        "text": "Listed by name (amphetamine) as a Class B drug under the Misuse of Drugs Act 1971 and in Schedule 2 of the Misuse of Drugs Regulations 2001, the strictest tier for medicines in clinical use. Dexamfetamine (Amfexa) is licensed in the UK as a prescription only medicine, according to the electronic Medicines Compendium. Adderall itself is not listed there.",
        "refs": [
          1100,
          1101,
          1143
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule I controlled substance",
        "text": "Amphetamines, their salts, derivatives and isomers are listed in Schedule I of the Controlled Drugs and Substances Act.",
        "refs": [
          1301
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Controlled drug (Schedule 8)",
        "text": "Listed in Schedule 8 of the Poisons Standard: prescription only, with strict controls on storage, prescribing and supply.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Class B controlled drug",
        "text": "Amphetamine is listed in Schedule 2, Part 1 of the Misuse of Drugs Act 1975 (Class B1 in the Medsafe database).",
        "refs": [
          1401,
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "controlled",
        "status": "Stimulant under the Stimulants Control Act",
        "text": "Amphetamine (phenylaminopropane) and its salts are defined as stimulants by name in Article 2 of the Stimulants Control Act.",
        "refs": [
          1501
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Class I psychotropic drug",
        "text": "Listed as amfetamine in Class I of China’s 2025 medicinal psychotropic drug catalogue, the strictest class, and also as a stimulant on the 2026 doping list.",
        "refs": [
          1602,
          1600
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "List I psychotropic (Decree No. 681), prohibited",
        "text": "Amphetamine and its derivatives are on List I of Russia's drug-control list, the substances whose trade is banned.",
        "refs": [
          1701
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Amfetamine is named as a non-specified stimulant under S6.A, prohibited in competition only, and all optical isomers, such as dextroamphetamine, are covered.",
        "refs": [
          1800
        ]
      }
    ],
    "anadrol": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Oxymetholone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists oxymetholone (Anadrol-50) only as discontinued.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (oxymetholone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Oxymetholone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (oxymetholone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"оксиметолон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Oxymetholone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "anastrozole": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Arimidex and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Anastrozole tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1116
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Anastrozole is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Arimidex are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1515
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (anastrozole) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (tablets)",
        "text": "Anastrozole 1 mg tablets (Anastrozole Kabi) have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1715
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.1 aromatase inhibitor, banned at all times",
        "text": "Anastrozole is named under S4.1 aromatase inhibitors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "anavar": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Oxandrolone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists oxandrolone products only as discontinued.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (oxandrolone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Oxandrolone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (oxandrolone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"оксандролон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Oxandrolone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "andarine": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved; illegal as a supplement",
        "text": "No approved andarine product in Drugs@FDA. FDA says products sold as SARMs are illegally marketed unapproved drugs, not dietary supplements, and that life-threatening reactions including liver injury needing hospitalisation have occurred.",
        "refs": [
          1000,
          1007
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists andarine among drugs that are not authorized in Canada for any use, and warns that SARM products can cause heart attack, stroke and liver damage. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for selective androgen receptor modulators",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for selective androgen receptor modulators, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for selective androgen receptor modulators",
        "text": "Not named in the Medsafe classification database, but covered by its entry for selective androgen receptor modulators, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (andarine) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.2 SARM, banned at all times",
        "text": "Andarine is named as a selective androgen receptor modulator under S1.2, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "aniracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved aniracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Aniracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, which also covers racetams as a group.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "aod-9604": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved AOD-9604 product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no AOD-9604 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (AOD-9604) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as a growth hormone fragment).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.3 GH fragment, banned at all times",
        "text": "AOD-9604 is named as a growth hormone fragment under S2.2.3, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "ara-290": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved cibinetide (ARA-290) product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no ARA-290 (cibinetide) product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.1.5 erythropoiesis agent, banned at all times",
        "text": "Not named, but innate repair receptor agonists are prohibited at all times under S2.1.5, and cibinetide acts at that receptor.",
        "refs": [
          1800
        ]
      }
    ],
    "ashwagandha": [
      {
        "where": "EU",
        "kind": "supplement",
        "status": "Sold as a supplement; EU-level review under way",
        "text": "EU food-safety heads rated ashwagandha supplements a priority for an Article 8 review under Regulation 1925/2006 because of concerns about reproduction, thyroid, immune and liver effects; no EU-wide ban exists yet.",
        "refs": [
          1236,
          1237
        ]
      },
      {
        "where": "CA",
        "kind": "supplement",
        "status": "Licensed natural health product",
        "text": "Ashwagandha (Withania somnifera) is a medicinal ingredient in products that hold a Natural Product Number and are marked as marketed in Health Canada’s Licensed Natural Health Products Database.",
        "refs": [
          1307
        ]
      },
      {
        "where": "JP",
        "kind": "unapproved",
        "status": "Medicine-only ingredient; barred from foods",
        "text": "Withania somnifera (whole plant) is on MHLW's list of ingredients used only as medicines, so it may not be sold as a food or supplement.",
        "refs": [
          1504
        ]
      }
    ],
    "atomoxetine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic atomoxetine).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Atomoxetine capsules are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1154
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Atomoxetine is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Teva-Atomoxetine are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1548
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (capsules)",
        "text": "Atomoxetine Canon capsules (10 to 60 mg) have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1744
        ]
      }
    ],
    "atx-304": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no ATX-304 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.4.1 metabolic modulator, banned at all times",
        "text": "Not named, but activators of AMP-activated protein kinase (AMPK) are prohibited at all times under S4.4.1, and O304 is a pan-AMPK activator.",
        "refs": [
          1800
        ]
      }
    ],
    "b7-33": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no B7-33 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "bam15": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved BAM15 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no BAM15 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (BAM15) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.4.1 metabolic modulator, banned at all times",
        "text": "BAM15 was added as a named AMPK activator under S4.4.1 for 2026 after it turned up in supplements, and is prohibited in and out of competition.",
        "refs": [
          1800,
          1802
        ]
      }
    ],
    "bemethyl": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved bemethyl product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no bemethyl product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "berberine": [
      {
        "where": "EU",
        "kind": "supplement",
        "status": "EU Article 8 procedure started",
        "text": "According to the EU food-safety heads' working group, the Commission has already started an Article 8 procedure under Regulation 1925/2006 for berberine.",
        "refs": [
          1236
        ]
      },
      {
        "where": "CA",
        "kind": "supplement",
        "status": "Licensed natural health product",
        "text": "Berberine is a medicinal ingredient in products that hold a Natural Product Number and are marked as marketed in Health Canada’s Licensed Natural Health Products Database.",
        "refs": [
          1307
        ]
      },
      {
        "where": "NZ",
        "kind": "otc",
        "status": "General sale medicine",
        "text": "Berberine is classified as a general sale medicine in the Medsafe classification database.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (berberine sulfate and berberine chloride products). The package inserts for the injection and for Feroberin tablets are marked as prescription drugs (shohosen iyakuhin).",
        "refs": [
          1500,
          1525,
          1526
        ]
      }
    ],
    "bpap": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved BPAP product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no BPAP product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "bpc-157": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved BPC-157 product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no BPC-157 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. It is covered by the entry for BPC-157 and its analogues.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (BPC-157) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "BPC-157 is named as an example under S0 non-approved substances, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "bremelanotide": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Vyleesi).",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Bremelanotide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine, under the entry for melanocyte stimulating compounds",
        "text": "Not named in the Medsafe classification database, but covered by its entry for melanocyte stimulating compounds, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "bromantane": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved bromantane product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Bromantane product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (bromantan) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime; the listing covers stimulants in competition.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Ladasten)",
        "text": "Ladasten (bromantane, adamantylbromphenylamine) 50 mg and 100 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1712
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Bromantan is named as a non-specified stimulant under S6.A, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "bupropion": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Wellbutrin SR, Zyban generics, Contrave).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Zyban; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1124
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised with naltrexone",
        "text": "The only EU-wide authorisation is Mysimba, a naltrexone and bupropion tablet for weight management, which the EMA says can only be obtained with a prescription.",
        "refs": [
          1212,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Bupropion is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Wellbutrin XL and Zyban are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-monitored",
        "status": "2026 Monitoring Program, not prohibited",
        "text": "Bupropion is on the 2026 Monitoring Program, in competition only. The Prohibited List says substances in the Program are not prohibited.",
        "refs": [
          1801
        ]
      }
    ],
    "cabergoline": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic cabergoline).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Dostinex; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1114
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Cabergoline is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Dostinex are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1552
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Agalates tablets)",
        "text": "Agalates (cabergoline) 0.5 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1736
        ]
      }
    ],
    "caffeine": [
      {
        "where": "UK",
        "kind": "otc",
        "status": "General sale (some products); prescription only (caffeine citrate solution)",
        "text": "Medicines containing caffeine range from the General Sales List (Anadin Extra) to prescription only (caffeine citrate oral solution), according to the electronic Medicines Compendium. Schedule 1 of the Psychoactive Substances Act 2016 exempts caffeine from that Act.",
        "refs": [
          1153,
          1131,
          1104
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only as caffeine citrate for newborns",
        "text": "Caffeine citrate is authorised EU-wide as Peyona and Gencebok for breathing pauses in premature babies, and the EMA says both can only be obtained with a prescription.",
        "refs": [
          1224,
          1200
        ]
      },
      {
        "where": "AU",
        "kind": "otc",
        "status": "Schedule 4 above 600 mg a day; lower-dose products not scheduled",
        "text": "Caffeine for internal therapeutic use is Schedule 4 unless the product is labelled with a maximum daily dose of 600 mg or less (and, if undivided, is under 5% caffeine); products inside those limits are not scheduled.",
        "refs": [
          1400
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only; allowed in foods",
        "text": "Caffeine is listed in Japan's drug price standard and appears on MHLW's list of ingredients not treated as medicines unless sold with drug claims. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1504,
          1556
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Class II psychotropic drug",
        "text": "Caffeine as a drug substance is listed in Class II of China’s 2025 medicinal psychotropic drug catalogue; the 2026 doping list only monitors it in competition.",
        "refs": [
          1602,
          1600
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-monitored",
        "status": "2026 Monitoring Program, not prohibited",
        "text": "Caffeine is on the 2026 Monitoring Program, in competition only. The Prohibited List says substances in the Program are not prohibited.",
        "refs": [
          1801
        ]
      }
    ],
    "cagrilintide": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved cagrilintide product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Cagrilintide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "ce-123": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved CE-123 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no CE-123 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "cerebroprotein-hydrolysate": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved cerebrolysin product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Cerebroprotein hydrolysate product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "cjc-1295": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved CJC-1295 product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no CJC-1295 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (CJC-1295) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as a growth hormone releasing hormone analogue).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "CJC-1295 is named as a GHRH analogue under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "clascoterone": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Winlevi cream).",
        "refs": [
          1000
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Winlevi cream since October 2025, and the EMA says it can only be obtained with a prescription.",
        "refs": [
          1208,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Clascoterone is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Winlevi are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "clenbuterol": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved clenbuterol for people product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (clenbuterol) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, no authorized product",
        "text": "Clenbuterol is on Health Canada’s Prescription Drug List, but the Drug Product Database has no clenbuterol product in any status.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Spiropent and generic tablets). The generic tablet package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1510
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (clenbuterol) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.2 other anabolic agent, banned at all times",
        "text": "Clenbuterol is named under S1.2 other anabolic agents, prohibited in and out of competition, so the inhaled beta-2 exceptions do not apply to it.",
        "refs": [
          1800
        ]
      }
    ],
    "clomiphene": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic clomiphene citrate).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Clomifene citrate tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1158
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, no product on the market",
        "text": "Clomiphene is on Health Canada’s Prescription Drug List. The Drug Product Database shows no marketed product; Clomid and Serophene are listed as cancelled.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (clomiphene citrate). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1551
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (clomifene) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Clostilbegyt)",
        "text": "Clostilbegyt (clomiphene) 50 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1718
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.2 anti-estrogen, banned at all times",
        "text": "Clomifene is named under S4.2 anti-estrogenic substances (SERMs), prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "cms-121": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved CMS121 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no CMS121 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "coluracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved coluracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no coluracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard. It is also cross-referenced to the racetams group.",
        "refs": [
          3600
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "creatine": [
      {
        "where": "CA",
        "kind": "supplement",
        "status": "Licensed natural health product",
        "text": "Creatine monohydrate is a medicinal ingredient in products that hold a Natural Product Number and are marked as marketed in Health Canada’s Licensed Natural Health Products Database.",
        "refs": [
          1307
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "cyclazodone": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved cyclazodone product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no cyclazodone product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "cytisine": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved cytisinicline product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Cytisine product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "otc",
        "status": "Schedule 3 for quitting smoking; otherwise Schedule 4",
        "text": "Oral preparations of 9 mg a day or less to help adults quit smoking are pharmacist-only (Schedule 3); other forms are prescription only.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "otc",
        "status": "Restricted medicine for quitting smoking",
        "text": "Divided oral and mouth preparations used to help adults withdraw from nicotine dependence are classified as restricted medicines.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "otc",
        "status": "Sold without prescription (Desigarten tablets)",
        "text": "Desigarten (cytisine) 1.5 mg film-coated tablets have a record in the State Register of Medicinal Products, marked for dispensing without a prescription.",
        "refs": [
          1743
        ]
      }
    ],
    "dapoxetine": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved dapoxetine product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Dapoxetine product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (tablets)",
        "text": "Dapoxetine 30 mg and 60 mg film-coated tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1747
        ]
      }
    ],
    "dhea": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only (vaginal insert)",
        "text": "Approved only as Intrarosa, a prescription vaginal insert of prasterone.",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C / Schedule 4 Part II; prasterone pessary is prescription only",
        "text": "Listed by name (prasterone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply. The only licensed prasterone medicine in the electronic Medicines Compendium is Intrarosa, a prescription only vaginal pessary. This row covers prasterone as a medicine, not DHEA supplements.",
        "refs": [
          1100,
          1102,
          1149
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only as Intrarosa vaginal pessary",
        "text": "Prasterone (DHEA) is authorised EU-wide only as Intrarosa, a vaginal pessary, which the EMA says can only be obtained with a prescription.",
        "refs": [
          1222,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Prasterone (DHEA) is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "unapproved",
        "status": "Medicine-only ingredient; barred from foods",
        "text": "Dehydroepiandrosterone is on MHLW's list of ingredients used only as medicines, so it may not be sold as a food or supplement.",
        "refs": [
          1504
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (prasterone (DHEA)) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"прастерон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Prasterone (DHEA) is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "dianabol": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Methandienone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists no product for methandienone (methandrostenolone).",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (methandienone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Metandienone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (metandienone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"метандиенон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Metandienone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "dihexa": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved dihexa product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Dihexa product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "dnp": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "2,4-Dinitrophenol is on the Prescription Drug List, but the Drug Product Database has no product in any status, and Health Canada says no health product containing DNP is approved because of serious safety concerns.",
        "refs": [
          1302,
          1303,
          1306
        ]
      },
      {
        "where": "AU",
        "kind": "prohibited",
        "status": "Banned for human use (Schedule 10)",
        "text": "Schedule 10 of the Poisons Standard bans 2,4-dinitrophenol for human use.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. Dinitrophenols are listed as a group.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (2,4-dinitrophenol) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"2,4-динитрофенол\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime.",
        "refs": [
          1700
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "2,4-Dinitrophenol (DNP) is named as an example under S0 non-approved substances, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "dnsp-11": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no DNSP-11 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "doxepin": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Silenor and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Doxepin capsules are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1156
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Doxepin is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Sinequan and Silenor are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (capsules)",
        "text": "Doxepin 10 mg and 25 mg capsules have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1737
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "dsip": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved emideltide (DSIP) product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no DSIP product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "dutasteride": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Avodart and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Avodart; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1139
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "EU safety review, label precaution added",
        "text": "The same 2025 EU review found no proven link between dutasteride and suicidal ideation, but product information is being updated on mood changes as a precaution for 5-alpha reductase inhibitors.",
        "refs": [
          1233
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Dutasteride is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Avodart are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1531
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) lists dutasteride soft capsules (GSK) with imported-drug approval HJ20160515.",
        "refs": [
          1610
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Avodart capsules)",
        "text": "Avodart (dutasteride) 0.5 mg capsules have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1730
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "ecdysterone": [
      {
        "where": "WADA",
        "kind": "sport-monitored",
        "status": "2026 Monitoring Program, not prohibited",
        "text": "Ecdysterone is on the 2026 Monitoring Program as an anabolic agent, in and out of competition. It is not prohibited, but WADA is watching for misuse.",
        "refs": [
          1801
        ]
      }
    ],
    "emoxypine": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved emoxypine product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Emoxypine product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (injection)",
        "text": "Methylethylpyridinol (emoxypine) 10 mg/mL solution for injection has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1709
        ]
      }
    ],
    "enclomiphene": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved product in Drugs@FDA. Enclomiphene citrate sits in category 1 (under evaluation) of FDA's 503A compounding list.",
        "refs": [
          1000,
          1002
        ]
      },
      {
        "where": "EU",
        "kind": "unapproved",
        "status": "Marketing authorisation refused (2018)",
        "text": "The EMA's medicines committee recommended refusing EnCyzix for male hypogonadism in January 2018, citing unproven symptom benefit and a risk of blood clots.",
        "refs": [
          1220,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Enclomiphene product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.2 anti-estrogen, banned at all times",
        "text": "Not named, but it is an isomer of clomifene, which is named under S4.2 anti-estrogenic substances, an open-ended class prohibited at all times.",
        "refs": [
          1800
        ]
      }
    ],
    "ephedrine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (ephedrine sulfate injection).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Ephedrine hydrochloride tablets and injections are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1119
        ]
      },
      {
        "where": "EU",
        "kind": "prohibited",
        "status": "Ephedra herb banned in food",
        "text": "Ephedra herb and its preparations are listed in Part A (prohibited substances) of Annex III to Regulation 1925/2006, so they cannot be used in foods.",
        "refs": [
          1238
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Class A precursor (Schedule VI)",
        "text": "Ephedrine, its salts and any plant containing it are Class A precursors in Schedule VI of the Controlled Drugs and Substances Act.",
        "refs": [
          1301
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Class B controlled drug; prescription medicine",
        "text": "Ephedrine is listed in Schedule 2, Part 2 of the Misuse of Drugs Act 1975 (Class B2 in the Medsafe database) and is also a prescription medicine.",
        "refs": [
          1401,
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "controlled",
        "status": "Approved drug; stimulant raw material",
        "text": "Ephedrine is an approved drug in Japan's price standard, and the Stimulants Control Act lists it as a stimulant raw material when a product holds more than 10%; it is also barred from foods.",
        "refs": [
          1500,
          1501,
          1504
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: precursor chemical",
        "text": "Listed in the medicinal precursor chemicals section of China’s 2026 doping list, and ephedrine-type substances are in Class 1 of the schedule to the Regulations on the Administration of Precursor Chemicals, the strictest class, so they are handled under special precursor rules.",
        "refs": [
          1600,
          1601,
          1614
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "List IV precursor, Table I (Decree No. 681)",
        "text": "Ephedrine at 10 percent or more is a precursor under special control on Russia's drug-control list.",
        "refs": [
          1701
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.B stimulant, urine threshold 10 µg/mL",
        "text": "Ephedrine is a specified stimulant under S6.B, prohibited in competition when its urine level is above 10 micrograms per millilitre.",
        "refs": [
          1800
        ]
      }
    ],
    "epitalon": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved epitalon product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Epitalon product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for pineal gland peptides and their analogues",
        "text": "Not named in the Medsafe classification database, but covered by its entry for pineal gland peptides and their analogues, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "epobis": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Epobis product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "equipoise": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Boldenone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists no boldenone product for people.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "US",
        "kind": "vet",
        "status": "Veterinary only (horses)",
        "text": "FDA's animal drug regulations approve boldenone undecylenate injection only for horses, by or on the order of a veterinarian, and not for horses intended for human consumption.",
        "refs": [
          1010
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (boldenone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Boldenone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (boldenone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"болденон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Boldenone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "exemestane": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Aromasin and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Aromasin; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1133
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Exemestane is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Aromasin are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1516
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (exemestane) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Aromeston tablets)",
        "text": "Aromeston (exemestane) 25 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1719
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.1 aromatase inhibitor, banned at all times",
        "text": "Exemestane is named under S4.1 aromatase inhibitors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "ezetimibe": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Zetia and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Ezetimibe tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1148
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Ezetimibe is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Ezetrol are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1535
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered an approval document for ezetimibe tablets in December 2024.",
        "refs": [
          1608
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "fasoracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved fasoracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no fasoracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard. It is also cross-referenced to the racetams group.",
        "refs": [
          3600
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "fgl": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved FGL product in Drugs@FDA.",
        "refs": [
          1000
        ]
      }
    ],
    "finasteride": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Propecia, Proscar and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Finasteride 1 mg tablets and Proscar 5 mg tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1142,
          1108
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "EU safety review, suicidal ideation added",
        "text": "An EU review concluded in 2025 that suicidal ideation is a side effect of finasteride 1 mg and 5 mg tablets (frequency not known); benefits still outweigh risks, and a patient card is required in packs.",
        "refs": [
          1233
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Finasteride is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Proscar and Propecia are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Propecia (finasteride) is approved in Japan for male pattern hair loss, and its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1557
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered an approval document for finasteride tablets in September 2025.",
        "refs": [
          1607
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Penester tablets)",
        "text": "Penester (finasteride) 5 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1728
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "fladrafinil": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved fladrafinil product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (fladrafinil) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "List II psychotropic (Decree No. 681)",
        "text": "Fladrafinil is named on List II of Russia's drug-control list: its trade is restricted and placed under state control.",
        "refs": [
          1701
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Fladrafinil was added to the S6.A non-specified stimulants for 2026 as an unapproved modafinil analogue sold as a supplement, and is prohibited in competition.",
        "refs": [
          1800,
          1802
        ]
      }
    ],
    "flmodafinil": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved flmodafinil product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no flmodafinil product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (flmodafinil) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Flmodafinil is named as a non-specified stimulant under S6.A, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "foxo4-dri": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no FOXO4-DRI product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "gb-115": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved GB-115 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no GB-115 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "gc-1": [
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "ghk-cu": [
      {
        "where": "EU",
        "kind": "cosmetic",
        "status": "Listed cosmetic ingredient (CosIng)",
        "text": "Copper tripeptide-1 is in the EU CosIng database as a skin-conditioning ingredient, with no restriction listed under the Cosmetics Regulation.",
        "refs": [
          1239
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4, except low-copper or 5% or less preparations",
        "text": "Copper compounds for human use are Schedule 4, except internal-use products with 5 mg or less of copper per daily dose and other preparations with 5% or less copper compounds. The entry names copper compounds in general, not copper peptides.",
        "refs": [
          1400
        ]
      }
    ],
    "ghrp-2": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved pralmorelin product in Drugs@FDA. FDA lists GHRP-2 as a significant safety risk for outsourcing-facility compounding (503B category 2).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no GHRP-2 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only (diagnostic use)",
        "text": "Pralmorelin hydrochloride is listed in Japan's national health insurance drug price standard as GHRP Kaken 100 for injection. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1522
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (GHRP-2 (pralmorelin)) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (listed as GHRP-2, pralmorelin).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "GHRP-2 (pralmorelin) is named as a GH-releasing peptide under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "ghrp-6": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved GHRP-6 product in Drugs@FDA. FDA lists GHRP-6 as a significant safety risk for outsourcing-facility compounding (503B category 2).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no GHRP-6 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (GHRP-6) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "GHRP-6 is named as a GH-releasing peptide under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "glutathione": [
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only for injection (Schedule 4)",
        "text": "Schedule 4 of the Poisons Standard covers glutathione for parenteral use only.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription for injection; general sale otherwise",
        "text": "The injectable form is a prescription medicine, and all other forms are general sale.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only; barred from foods",
        "text": "Listed in Japan's drug price standard (Tathion) and on MHLW's list of ingredients used only as medicines, so it may not be sold in foods. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1504,
          1545
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it. Intravenous infusions of more than 100 mL in 12 hours are prohibited as a method (M2.2) unless given in a hospital.",
        "refs": [
          1800
        ]
      }
    ],
    "growth-hormone": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (somatropin products such as Genotropin, Humatrope, Norditropin).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Prescription only, Class C / Schedule 4 Part II",
        "text": "Listed by name (somatropin) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply. Somatropin is licensed in the UK as Genotropin, which the electronic Medicines Compendium lists as a prescription only medicine.",
        "refs": [
          1100,
          1102,
          1105
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Somatropin is authorised EU-wide as Omnitrope and NutropinAq, and the EMA says both can only be obtained with a prescription.",
        "refs": [
          1203,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Somatropin is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Saizen, Serostim and Omnitrope are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (somatropin). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1508
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (growth hormone) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"соматотропин\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Genotropin)",
        "text": "Genotropin (somatropin) injectable powder in cartridges has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1720
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.3 growth hormone, banned at all times",
        "text": "Growth hormone, its analogues and fragments are prohibited at all times under S2.2.3.",
        "refs": [
          1800
        ]
      }
    ],
    "guanfacine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Intuniv and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Intuniv; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1130
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Intuniv since 2015 and as Paxneury since 2025, and the EMA says Intuniv can only be obtained with a prescription.",
        "refs": [
          1218,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Guanfacine is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Intuniv XR are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Intuniv). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1549
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "S6 stimulant exception, not prohibited",
        "text": "The List names guanfacine as an exception to the stimulants class (S6), so it is not prohibited.",
        "refs": [
          1800
        ]
      }
    ],
    "gw501516": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved cardarine (GW501516) product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists cardarine (GW501516) among drugs that are not authorized in Canada for any use. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "prohibited",
        "status": "Banned (Schedule 10)",
        "text": "Listed in Schedule 10 of the Poisons Standard, which bans its sale, supply and use.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (GW501516) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"GW 1516\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.4.1 metabolic modulator, banned at all times",
        "text": "GW1516 (GW501516) is named as a PPARδ agonist under S4.4.1, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "halotestin": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Fluoxymesterone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists fluoxymesterone products only as discontinued.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (fluoxymesterone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Fluoxymesterone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (fluoxymesterone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"флуоксиместерон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Fluoxymesterone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "hcg": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Pregnyl, Ovidrel and chorionic gonadotropin).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (chorionic gonadotrophin) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised as Ovitrelle",
        "text": "Recombinant hCG (choriogonadotropin alfa) is authorised EU-wide as Ovitrelle, which the EMA says can only be obtained with a prescription.",
        "refs": [
          1228,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Human chorionic gonadotropin is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Pregnyl are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. Pregnancy test kits are general sale.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (human chorionic gonadotropin). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1520
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (chorionic gonadotrophin) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime; the listing applies to men only.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (injectable powder)",
        "text": "Chorionic gonadotropin 500, 1000 and 1500 IU injectable powder has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1721
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.1, banned at all times in males",
        "text": "Chorionic gonadotrophin is named under S2.2.1 as a testosterone-stimulating peptide, prohibited at all times in male athletes.",
        "refs": [
          1800
        ]
      }
    ],
    "hexarelin": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved hexarelin product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Hexarelin product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (examorelin (hexarelin)) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "Examorelin (hexarelin) is named as a GH-releasing peptide under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "hgh-frag-176-191": [
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (hGH 176-191) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"гормон роста человека, фрагмент 176-191\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.3 GH fragment, banned at all times",
        "text": "hGH 176-191 is named as a growth hormone fragment under S2.2.3, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "hmg": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Menopur).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Menopur (menotrophin); the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1125
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Menotropins (HMG) is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Menopur are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (human menopausal gonadotropin). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1521
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.1, banned at all times in males",
        "text": "Luteinizing hormone is named under S2.2.1 as a testosterone-stimulating peptide prohibited at all times in males, and menotropins carry LH activity.",
        "refs": [
          1800
        ]
      }
    ],
    "humanin": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved humanin product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Humanin product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for mitochondria-derived peptides and their analogues",
        "text": "Not named in the Medsafe classification database, but covered by its entry for mitochondria-derived peptides and their analogues, which is prescription only.",
        "refs": [
          1402
        ]
      }
    ],
    "igf-1-des": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no IGF-1 DES product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for insulin-like growth factors",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for insulin-like growth factors, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for insulin-like growth factors",
        "text": "Not named in the Medsafe classification database, but covered by its entry for insulin-like growth factors, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (IGF-1 and its analogues) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as an analogue of IGF-1).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.3 growth factor, banned at all times",
        "text": "IGF-1 and its analogues are prohibited at all times under S2.3, and IGF-1 DES is a truncated IGF-1 analogue.",
        "refs": [
          1800
        ]
      }
    ],
    "igf-1-lr3": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no IGF-1 LR3 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for insulin-like growth factors",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for insulin-like growth factors, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for insulin-like growth factors",
        "text": "Not named in the Medsafe classification database, but covered by its entry for insulin-like growth factors, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (IGF-1 and its analogues) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as an analogue of IGF-1).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.3 growth factor, banned at all times",
        "text": "IGF-1 and its analogues are prohibited at all times under S2.3, and IGF-1 LR3 is an IGF-1 analogue.",
        "refs": [
          1800
        ]
      }
    ],
    "ipamorelin": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved ipamorelin product in Drugs@FDA. FDA lists ipamorelin as a significant safety risk for outsourcing-facility compounding (503B category 2).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Ipamorelin product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (ipamorelin) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (named as a growth hormone secretagogue).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "Ipamorelin is named as a growth hormone secretagogue under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "isrib": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved ISRIB product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no ISRIB product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "j-147": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved J-147 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no J-147 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "ketoconazole": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (tablets, cream and shampoo).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "otc",
        "status": "General sale (antidandruff shampoo); prescription only (cream)",
        "text": "Nizoral Antidandruff Shampoo is on the General Sales List, while Nizoral 2% Cream is a prescription only medicine, according to the electronic Medicines Compendium.",
        "refs": [
          1137,
          1160
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised for Cushing's syndrome",
        "text": "Oral ketoconazole is authorised EU-wide as Ketoconazole Esteve for Cushing's syndrome, and the EMA says it can only be obtained with a prescription from a doctor experienced in that condition.",
        "refs": [
          1207,
          1200
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Oral tablets suspended EU-wide since 2013",
        "text": "After an EU review, the Commission suspended the marketing authorisations of oral ketoconazole for fungal infections on 11 October 2013 because liver injury risk outweighed the benefit; creams and shampoos were not affected.",
        "refs": [
          1231
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, except shampoo",
        "text": "Ketoconazole is on the Prescription Drug List except in topical shampoos. Nizoral is marketed without a prescription, and ketoconazole tablets such as Teva-Ketoconazole are marketed as prescription drugs.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "otc",
        "status": "Schedule 2 for skin use; otherwise Schedule 4",
        "text": "Skin preparations are pharmacy medicines (Schedule 2), 1% scalp and tinea pedis products are unscheduled, and other forms are prescription only.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "otc",
        "status": "Pharmacy only for skin use; otherwise prescription",
        "text": "Skin medicines are pharmacy-only, with tinea pedis products and scalp products of 1% or less general sale; other forms are prescription.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (ketoconazole cream). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1532
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "kisspeptin": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved kisspeptin product in Drugs@FDA. FDA lists kisspeptin-10 as a significant safety risk for pharmacy compounding (503A category 2).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Kisspeptin product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (kisspeptin and its agonist analogues) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.1, banned at all times in males",
        "text": "Kisspeptin and its agonist analogues are named under S2.2.1 as testosterone-stimulating peptides, prohibited at all times in male athletes.",
        "refs": [
          1800
        ]
      }
    ],
    "kpv": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved KPV product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no KPV product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "kw-6356": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved KW-6356 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no KW-6356 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "l-carnitine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (levocarnitine tablets, solution and injection).",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only for carnitine deficiency",
        "text": "Levocarnitine is on the Prescription Drug List when sold to treat primary or secondary carnitine deficiency. Carnitor is marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (levocarnitine). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1523
        ]
      },
      {
        "where": "JP",
        "kind": "supplement",
        "status": "Also allowed in foods",
        "text": "L-carnitine is on MHLW's list of ingredients not treated as medicines unless sold with drug claims.",
        "refs": [
          1504
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered an approval document for levocarnitine oral solution in June 2025.",
        "refs": [
          1613
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it. Intravenous infusions of more than 100 mL in 12 hours are prohibited as a method (M2.2) unless given in a hospital.",
        "refs": [
          1800
        ]
      }
    ],
    "letrozole": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Femara and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Femara; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1109
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Letrozole is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Femara are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1517
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (letrozole) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (tablets)",
        "text": "Letrozole 2.5 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1716
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.1 aromatase inhibitor, banned at all times",
        "text": "Letrozole is named under S4.1 aromatase inhibitors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "lgd-4033": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved; illegal as a supplement",
        "text": "No approved ligandrol product in Drugs@FDA. FDA says products sold as SARMs are illegally marketed unapproved drugs, not dietary supplements, and that life-threatening reactions including liver injury needing hospitalisation have occurred.",
        "refs": [
          1000,
          1007
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists LGD-4033 among drugs that are not authorized in Canada for any use, and warns that SARM products can cause heart attack, stroke and liver damage. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for selective androgen receptor modulators",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for selective androgen receptor modulators, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for selective androgen receptor modulators",
        "text": "Not named in the Medsafe classification database, but covered by its entry for selective androgen receptor modulators, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (LGD-4033) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"лигандрол (LGD-4033)\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.2 SARM, banned at all times",
        "text": "LGD-4033 (ligandrol) is named as a selective androgen receptor modulator under S1.2, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "liraglutide": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Victoza, Saxenda and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Saxenda and as generic liraglutide pens; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1118,
          1162
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Victoza (2009), Saxenda (2015) and generics, and the EMA says both brands can only be obtained with a prescription.",
        "refs": [
          1219,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Liraglutide is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Victoza and Saxenda are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Victoza). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1550
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered an approval document for liraglutide injection (Chia Tai Tianqing) in June 2024.",
        "refs": [
          1604
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Vesfol injection)",
        "text": "Vesfol (liraglutide) 6 mg/mL solution for subcutaneous injection has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1740
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "lisdexamfetamine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only, Schedule II",
        "text": "FDA-approved and sold by prescription (Vyvanse and generics). Lisdexamfetamine is listed by name in Schedule II of the Controlled Substances Act.",
        "refs": [
          1000,
          1003
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Prescription only, Class B / Schedule 2",
        "text": "Listed by name (lisdexamphetamine) as a Class B drug under the Misuse of Drugs Act 1971 and in Schedule 2 of the Misuse of Drugs Regulations 2001, the strictest tier for medicines in clinical use. Licensed in the UK as Elvanse; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1100,
          1101,
          1157
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule I controlled substance, prescription only",
        "text": "The Drug Product Database lists Vyvanse and its generics under Schedule I of the Controlled Drugs and Substances Act, which covers amphetamines and their derivatives.",
        "refs": [
          1301,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Controlled drug (Schedule 8)",
        "text": "Listed in Schedule 8 of the Poisons Standard: prescription only, with strict controls on storage, prescribing and supply.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Class B controlled drug; prescription medicine",
        "text": "Lisdexamfetamine is listed in Schedule 2, Part 2 of the Misuse of Drugs Act 1975 (Class B2 in the Medsafe database) and is also a prescription medicine.",
        "refs": [
          1401,
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "controlled",
        "status": "Approved drug; stimulant raw material",
        "text": "Listed in Japan's drug price standard as Vyvanse capsules, and designated a stimulant raw material by Cabinet Order under the Stimulants Control Act.",
        "refs": [
          1500,
          1502
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (lisdexamfetamine) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Lisdexamfetamine is named as a non-specified stimulant under S6.A, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "ll-37": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved LL-37 product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no LL-37 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for anti-microbial peptides and their precursors",
        "text": "Not named in the Medsafe classification database, but covered by its entry for anti-microbial peptides and their precursors, which is prescription only.",
        "refs": [
          1402
        ]
      }
    ],
    "masteron": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Drostanolone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists no drostanolone product.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (drostanolone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Drostanolone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (drostanolone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"дростанолон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Drostanolone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "mazdutide": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved mazdutide product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Mazdutide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine, under the entry for glucagon-like peptide-1 receptor agonists",
        "text": "Not named in the Medsafe classification database, but covered by its entry for glucagon-like peptide-1 receptor agonists, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) approved mazdutide injection (Xin’ermei) for marketing in June 2025.",
        "refs": [
          1603
        ]
      }
    ],
    "melanotan-1": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Scenesse implant (afamelanotide)).",
        "refs": [
          1000
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Specialist prescription, centrally authorised",
        "text": "Afamelanotide is authorised EU-wide as the Scenesse implant for erythropoietic protoporphyria, prescribed only by specialist doctors in recognised centres.",
        "refs": [
          1209,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, authorized but not yet marketed",
        "text": "Afamelanotide is on Health Canada’s Prescription Drug List. Scenesse is approved in the Drug Product Database but is not shown as marketed.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "melanotan-2": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved melanotan II product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Melanotan II product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for melanocyte stimulating compounds",
        "text": "Not named in the Medsafe classification database, but covered by its entry for melanocyte stimulating compounds, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "melatonin": [
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "The licensed melatonin medicine, Circadin, is listed by the electronic Medicines Compendium as a prescription only medicine.",
        "refs": [
          1120
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Circadin, Slenyto and Melatonin Neurim, and the EMA says Circadin and Slenyto can only be obtained with a prescription.",
        "refs": [
          871,
          1223,
          1200
        ]
      },
      {
        "where": "EU",
        "kind": "supplement",
        "status": "Supplement ingredient under EU review",
        "text": "EU food-safety heads listed melatonin food supplements among 13 substances most eligible for an Article 8 review under Regulation 1925/2006, citing French and Norwegian risk assessments.",
        "refs": [
          1236
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only for sleep use under 18",
        "text": "Since 2 June 2026, melatonin sold for sleep in children and teens under 18 is on the Prescription Drug List. Slenyto is the melatonin drug product marketed in the Drug Product Database.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "CA",
        "kind": "supplement",
        "status": "Licensed natural health product (adults)",
        "text": "Melatonin products with a Natural Product Number are licensed and marked as marketed in Health Canada’s Licensed Natural Health Products Database.",
        "refs": [
          1307
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; Schedule 3 for limited packs",
        "text": "Prescription only, except small packs of 2 mg modified-release tablets for adults 55+ with insomnia and 5 mg jet-lag packs, which are pharmacist-only (Schedule 3).",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription, with pharmacy-only low-dose packs",
        "text": "Melatonin is a prescription medicine, except specific low-dose oral packs for insomnia or jet lag in adults, which are pharmacy-only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only; barred from foods",
        "text": "Listed in Japan's drug price standard as Melatobel for children and on MHLW's list of ingredients used only as medicines, so it may not be sold as a supplement. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1504,
          1555
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "meldonium": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved meldonium product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Meldonium product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (meldonium) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Mildronate)",
        "text": "Mildronate (meldonium) 500 mg capsules have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1711
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.4.3 metabolic modulator, banned at all times",
        "text": "Meldonium is named under S4.4.3, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "ment": [
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (trestolone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"трестолон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime.",
        "refs": [
          1700
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Trestolone (MENT) is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "metformin": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic metformin).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Metformin tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1132
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Metformin is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Glucophage are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (metformin hydrochloride). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1524
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered approval documents for metformin hydrochloride tablets in December 2025.",
        "refs": [
          1606
        ]
      }
    ],
    "methylene-blue": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (ProvayBlue injection).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Proveblue (methylthioninium chloride injection); the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1141
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Methylthioninium chloride is authorised EU-wide as Methylthioninium chloride Proveblue and as Lumeblue, and the EMA says both can only be obtained with a prescription.",
        "refs": [
          1205,
          1200
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4 for injection; other human forms not listed",
        "text": "Methylene blue in preparations for injection is Schedule 4. The other entries for methylene blue (Schedules 5 and 7) apply to veterinary use.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription for injection; general sale otherwise",
        "text": "The injectable form is a prescription medicine, and all other forms are general sale.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Methylthioninium chloride is listed in Japan's national health insurance drug price standard as an intravenous injection. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1528
        ]
      }
    ],
    "methylphenidate": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only, Schedule II",
        "text": "FDA-approved and sold by prescription (Ritalin, Concerta and others). Methylphenidate is listed by name in Schedule II of the Controlled Substances Act.",
        "refs": [
          1000,
          1003
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Prescription only, Class B / Schedule 2",
        "text": "Listed by name (methylphenidate) as a Class B drug under the Misuse of Drugs Act 1971 and in Schedule 2 of the Misuse of Drugs Regulations 2001, the strictest tier for medicines in clinical use. Licensed in the UK as Ritalin and Concerta XL; the electronic Medicines Compendium lists them as prescription only medicines.",
        "refs": [
          1100,
          1101,
          1161,
          1140
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised as Tuzulby",
        "text": "Tuzulby is the only EU-wide authorisation, granted in February 2025, and the EMA says it can only be obtained with a prescription.",
        "refs": [
          1217,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Methylphenidate and its salts, derivatives and isomers are listed in Schedule III of the Controlled Drugs and Substances Act.",
        "refs": [
          1301
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Controlled drug (Schedule 8)",
        "text": "Listed in Schedule 8 of the Poisons Standard: prescription only, with strict controls on storage, prescribing and supply.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Class B controlled drug; prescription medicine",
        "text": "Methylphenidate is listed in Schedule 2, Part 2 of the Misuse of Drugs Act 1975 (Class B2 in the Medsafe database) and is also a prescription medicine.",
        "refs": [
          1401,
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "controlled",
        "status": "Approved drug; first-class psychotropic",
        "text": "Listed in Japan's drug price standard (Ritalin, Concerta), and named a first-class psychotropic under the Narcotics and Psychotropics Control Act Enforcement Order.",
        "refs": [
          1500,
          1503
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Class I psychotropic drug",
        "text": "Listed in Class I of China’s 2025 medicinal psychotropic drug catalogue, the strictest class, and also as a stimulant on the 2026 doping list.",
        "refs": [
          1602,
          1600
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "List I psychotropic (Decree No. 681), prohibited",
        "text": "Methylphenidate and its derivatives are on List I of Russia's drug-control list, the substances whose trade is banned.",
        "refs": [
          1701
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.B stimulant, banned in competition",
        "text": "Methylphenidate is named as a specified stimulant under S6.B, prohibited in competition only, and all optical isomers, such as dexmethylphenidate, are covered.",
        "refs": [
          1800
        ]
      }
    ],
    "mgf": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no MGF product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for insulin-like growth factors",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for insulin-like growth factors, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for insulin-like growth factors",
        "text": "Not named in the Medsafe classification database, but covered by its entry for insulin-like growth factors, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (mechano growth factors) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as mechano growth factor).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.3 growth factor, banned at all times",
        "text": "Mechano growth factors (MGFs) are named under S2.3, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "minoxidil": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only (oral tablets)",
        "text": "Oral minoxidil tablets are approved for prescription use.",
        "refs": [
          1000
        ]
      },
      {
        "where": "US",
        "kind": "otc",
        "status": "Over the counter (topical)",
        "text": "Topical minoxidil for hair loss is approved for sale without a prescription.",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "otc",
        "status": "General sale (scalp solution); prescription only (tablets)",
        "text": "Minoxidil scalp solution such as Regaine is on the General Sales List, while minoxidil tablets (Loniten) are prescription only medicines, according to the electronic Medicines Compendium.",
        "refs": [
          1135,
          1126
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, except low-strength topicals",
        "text": "Minoxidil is on the Prescription Drug List except in topical preparations of 5% or less, which can be sold without a prescription. Men’s Rogaine is marketed without a prescription and Loniten tablets are marketed as a prescription drug.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "otc",
        "status": "Schedule 2 (5% or less, topical); otherwise Schedule 4",
        "text": "Skin preparations with 5% or less are pharmacy medicines (Schedule 2); all other forms, including tablets, are prescription only.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "otc",
        "status": "Pharmacy only for skin products up to 5%; otherwise prescription",
        "text": "Skin (dermal) medicines with 5% or less minoxidil are pharmacy-only; all other forms, including tablets, are prescription.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "otc",
        "status": "Over the counter, class 1",
        "text": "Topical minoxidil is sold without a prescription as a class 1 OTC drug (Riup Jet) for male pattern hair loss.",
        "refs": [
          1559
        ]
      },
      {
        "where": "RU",
        "kind": "otc",
        "status": "Sold without prescription (Alerana spray)",
        "text": "Alerana (minoxidil) 2% and 5% topical spray has a record in the State Register of Medicinal Products, marked for dispensing without a prescription.",
        "refs": [
          1729
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "mirabegron": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Myrbetriq and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK; the electronic Medicines Compendium lists mirabegron tablets as prescription only medicines.",
        "refs": [
          1121
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Betmiga since 2012, and the EMA says it can only be obtained with a prescription.",
        "refs": [
          1225,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Mirabegron is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Myrbetriq are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Betanis). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1512
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Betmiga tablets)",
        "text": "Betmiga (mirabegron) 25 mg and 50 mg prolonged-release tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1746
        ]
      }
    ],
    "mk-677": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved ibutamoren (MK-677) product in Drugs@FDA. FDA lists ibutamoren as a significant safety risk for compounding (category 2, both 503A and 503B).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists MK-677 among drugs that are not authorized in Canada for any use. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed by name (ibutamoren, MK-677) in the peptide hormones section of China’s 2026 doping list; the list notes it is not a peptide but is controlled as one, so import and export need a permit.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "Ibutamoren (MK-677) is named as a growth hormone secretagogue under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "mk-777": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no MK-777 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for growth hormone secretagogues",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for growth hormone secretagogues, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for human growth hormone secretagogues",
        "text": "Not named in the Medsafe classification database, but covered by its entry for human growth hormone secretagogues, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "Not named, but growth hormone secretagogues and their mimetics, including capromorelin, are prohibited at all times under S2.2.4.",
        "refs": [
          1800
        ]
      }
    ],
    "mod-grf-1-29": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Mod GRF 1-29 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for growth hormone releasing hormones",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for growth hormone releasing hormones, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for growth hormone releasing hormones",
        "text": "Not named in the Medsafe classification database, but covered by its entry for growth hormone releasing hormones, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (GHRH and its analogues) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "Not named, but GHRH and its analogues are prohibited at all times under S2.2.4, and this is a modified GHRH(1-29) analogue.",
        "refs": [
          1800
        ]
      }
    ],
    "modafinil": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only, Schedule IV",
        "text": "FDA-approved and sold by prescription (Provigil generics; armodafinil as Nuvigil). Modafinil is listed by name in Schedule IV of the Controlled Substances Act.",
        "refs": [
          1000,
          1005
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Modafinil tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1127
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "EU-wide restriction to narcolepsy",
        "text": "An EU review ended with a Commission decision on 27 January 2011 limiting modafinil medicines to narcolepsy; sleep apnoea, shift-work sleep disorder and idiopathic hypersomnia were removed.",
        "refs": [
          1232
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Modafinil is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Alertec are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "controlled",
        "status": "Approved drug; first-class psychotropic",
        "text": "Listed in Japan's drug price standard (Modiodal), and named a first-class psychotropic under the Narcotics and Psychotropics Control Act Enforcement Order.",
        "refs": [
          1500,
          1503
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Class II psychotropic drug",
        "text": "Listed in Class II of China’s 2025 medicinal psychotropic drug catalogue, so pharmacies may sell it only on a prescription, and also as a stimulant on the 2026 doping list.",
        "refs": [
          1602,
          1600
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "List II psychotropic (Decree No. 681)",
        "text": "Modafinil is on List II of Russia's drug-control list: its trade is restricted and placed under state control.",
        "refs": [
          1701
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Modafinil is named as a non-specified stimulant under S6.A, prohibited in competition only, and all optical isomers, such as armodafinil, are covered.",
        "refs": [
          1800
        ]
      }
    ],
    "mots-c": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved MOTS-c product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no MOTS-c product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for mitochondria-derived peptides and their analogues",
        "text": "Not named in the Medsafe classification database, but covered by its entry for mitochondria-derived peptides and their analogues, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (MOTS-c) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.4.1 metabolic modulator, banned at all times",
        "text": "MOTS-c is named as an AMPK activator under S4.4.1 metabolic modulators, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "naltrexone": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Vivitrol and generic tablets).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Naltrexone 50 mg tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1123
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised with bupropion",
        "text": "The only EU-wide authorisation is Mysimba, a naltrexone and bupropion tablet for weight management, which the EMA says can only be obtained with a prescription.",
        "refs": [
          1212,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Naltrexone is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Revia are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (tablets)",
        "text": "Naltrexone 50 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1725
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "nandrolone": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Nandrolone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists nandrolone products only as discontinued.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (nandrolone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Nandrolone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (nandrolone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"нандролон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Nandrolone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "nebivolol": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Bystolic and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Nebilet; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1113
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Nebivolol is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Bystolic are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (nebivolol) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime; as a beta-blocker it is banned in competition only, in the listed sports such as shooting, archery, golf and darts.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (tablets)",
        "text": "Nebivolol 5 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1726
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "P1 beta-blocker in particular sports",
        "text": "Nebivolol is a named beta-blocker under P1, banned in competition in archery, motor sport, billiards, darts, golf, mini-golf, shooting and some underwater sports, and also out of competition in archery, shooting and those underwater sports.",
        "refs": [
          1800
        ]
      }
    ],
    "neboglamine": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved neboglamine product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no neboglamine product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "nefiracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved nefiracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Nefiracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, which also covers racetams as a group.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "nemifitide": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved nemifitide product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Nemifitide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "nicotinamide-riboside": [
      {
        "where": "UK",
        "kind": "supplement",
        "status": "Authorised novel food (Great Britain)",
        "text": "Nicotinamide riboside chloride is an authorised novel food in England, Scotland and Wales, allowed in food supplements up to maximum levels set in the register.",
        "refs": [
          1165
        ]
      },
      {
        "where": "EU",
        "kind": "supplement",
        "status": "Authorised novel food (food supplements)",
        "text": "Nicotinamide riboside chloride was added to the EU Union list of novel foods in January 2020 for use in food supplements for adults.",
        "refs": [
          1234
        ]
      },
      {
        "where": "CA",
        "kind": "supplement",
        "status": "Licensed natural health product",
        "text": "Nicotinamide riboside is a medicinal ingredient in products that hold a Natural Product Number and are marked as marketed in Health Canada’s Licensed Natural Health Products Database.",
        "refs": [
          1307
        ]
      },
      {
        "where": "JP",
        "kind": "supplement",
        "status": "Allowed in foods",
        "text": "On MHLW's list of ingredients not treated as medicines unless sold with drug claims, so it can be sold as a food.",
        "refs": [
          1504
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "nicotine": [
      {
        "where": "US",
        "kind": "otc",
        "status": "Over the counter (NRT)",
        "text": "Nicotine gum, lozenges and patches are FDA-approved for sale without a prescription.",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "otc",
        "status": "General sale (nicotine replacement gum and patches)",
        "text": "Nicorette nicotine gum and patches are on the General Sales List, according to the electronic Medicines Compendium. Schedule 1 of the Psychoactive Substances Act 2016 exempts nicotine from that Act.",
        "refs": [
          1110,
          1136,
          1104
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, with exceptions",
        "text": "Nicotine for human use is on the Prescription Drug List, except in natural substances and in gum, patches (up to 22 mg a day), sprays, inhalers, lozenges, buccal pouches and oral or sublingual tablets, which are excepted at 4 mg or less per dosage unit.",
        "refs": [
          1302
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4, except registered quit-smoking products and pharmacist-only vaping goods",
        "text": "Nicotine in preparations for human use is Schedule 4. Exceptions are gum, lozenges, patches and similar registered quit aids, and therapeutic vaping goods for smoking cessation supplied by a pharmacist (Schedule 3). Nicotine outside these entries is a Schedule 7 dangerous poison, apart from tobacco for smoking.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "otc",
        "status": "General sale for mouth and skin products; pharmacy only for inhalation",
        "text": "Nicotine absorbed through the mouth or skin is general sale, nicotine for inhalation is pharmacy-only, and nasal nicotine is prescription unless supplied from a smoking cessation clinic.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only; barred from foods",
        "text": "Listed in Japan's drug price standard as the Nicotinell TTS patch and on MHLW's list of ingredients used only as medicines, so it may not be sold in foods. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1504,
          1546
        ]
      },
      {
        "where": "JP",
        "kind": "otc",
        "status": "Over the counter (nicotine gum)",
        "text": "Nicotinell nicotine gum is sold without a prescription as a class 2 OTC drug to ease irritability and difficulty concentrating while quitting smoking.",
        "refs": [
          1558
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-monitored",
        "status": "2026 Monitoring Program, not prohibited",
        "text": "Nicotine is on the 2026 Monitoring Program, in competition only. The Prohibited List says substances in the Program are not prohibited.",
        "refs": [
          1801
        ]
      }
    ],
    "nmn": [
      {
        "where": "US",
        "kind": "supplement",
        "status": "Lawful as a dietary supplement (FDA position)",
        "text": "In a letter dated 29 September 2025, FDA concluded NMN is not excluded from the dietary supplement definition, reversing its earlier position, because NMN was sold as a supplement before it was authorised for drug investigation.",
        "refs": [
          1008
        ]
      },
      {
        "where": "EU",
        "kind": "unapproved",
        "status": "EFSA safety opinion issued, authorisation separate",
        "text": "EFSA concluded in May 2026 that one applicant's β-NMN is safe for adults in food supplements; an EFSA opinion is not itself an authorisation, which needs a Commission regulation.",
        "refs": [
          1235
        ]
      },
      {
        "where": "CA",
        "kind": "supplement",
        "status": "Licensed natural health product",
        "text": "Nicotinamide mononucleotide is a medicinal ingredient in products that hold a Natural Product Number and are marked as marketed in Health Canada’s Licensed Natural Health Products Database.",
        "refs": [
          1307
        ]
      },
      {
        "where": "JP",
        "kind": "supplement",
        "status": "Allowed in foods",
        "text": "On MHLW's list of ingredients not treated as medicines unless sold with drug claims, so it can be sold as a food.",
        "refs": [
          1504
        ]
      }
    ],
    "nooglutyl": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved nooglutyl product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no nooglutyl product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "noopept": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved omberacetam (noopept) product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Noopept product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, which also covers racetams as a group.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "otc",
        "status": "Sold without prescription (Noopept tablets)",
        "text": "Noopept (omberacetam) 10 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing without a prescription.",
        "refs": [
          1713
        ]
      }
    ],
    "nsi-189": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no NSI-189 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "ondansetron": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic ondansetron).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Ondansetron injection is listed by the electronic Medicines Compendium as a prescription only medicine.",
        "refs": [
          1138
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Ondansetron is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as PMS-Ondansetron and Sandoz Ondansetron are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1538
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Latran tablets)",
        "text": "Latran (ondansetron) 4 mg film-coated tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1742
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "orforglipron": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Foundayo).",
        "refs": [
          1000
        ]
      },
      {
        "where": "EU",
        "kind": "unapproved",
        "status": "Positive CHMP opinion, not yet authorised",
        "text": "On 15 October 2026 the EMA's medicines committee recommended authorising it as Foundayo for type 2 diabetes and weight management; the European Commission decision was still pending.",
        "refs": [
          1204,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Orforglipron product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for glucagon-like peptide-1 receptor agonists",
        "text": "Not named in the Medsafe classification database, but covered by its entry for glucagon-like peptide-1 receptor agonists, which is prescription only.",
        "refs": [
          1402
        ]
      }
    ],
    "ostarine": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved enobosarm product in Drugs@FDA. FDA says products sold as SARMs are illegally marketed unapproved drugs, not dietary supplements, and that life-threatening reactions including liver injury needing hospitalisation have occurred.",
        "refs": [
          1000,
          1007
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists ostarine among drugs that are not authorized in Canada for any use, and warns that SARM products can cause heart attack, stroke and liver damage. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (enobosarm (ostarine)) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"остарин\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.2 SARM, banned at all times",
        "text": "Enobosarm (ostarine) is named as a selective androgen receptor modulator under S1.2, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "oxiracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved oxiracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Oxiracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, which also covers racetams as a group.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "An oxiracetam and glucose injection is approved in mainland China (approval number H20220011), according to its filing with the National Healthcare Security Administration.",
        "refs": [
          1612
        ]
      }
    ],
    "oxytocin": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Pitocin injection).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Oxytocin infusion concentrate is listed by the electronic Medicines Compendium as a prescription only medicine.",
        "refs": [
          1115
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Oxytocin is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Oxytocin Injection USP are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. Only products with 1 microgram or less per litre or kilogram are general sale.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (oxytocin injection). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1529
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only, hospital supply (injection)",
        "text": "Oxytocin 5 IU/mL solution for injection has a record in the State Register of Medicinal Products, marked for dispensing by prescription and for hospitals.",
        "refs": [
          1745
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "pe-22-28": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no PE-22-28 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "phenibut": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved phenibut product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Phenibut product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prohibited substance (Schedule 9)",
        "text": "Listed in Schedule 9 of the Poisons Standard, which limits it to approved research and teaching.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Noofen)",
        "text": "Noofen (phenibut) 500 mg oral powder has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1707
        ]
      }
    ],
    "phenylpiracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved phenylpiracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Phenylpiracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, which also covers racetams as a group.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (fonturacetam (4-phenylpiracetam)) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Phenotropil)",
        "text": "Phenotropil tablets are in the State Register of Medicinal Products and dispensed by prescription; fonturacetam is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1703,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.A stimulant, banned in competition",
        "text": "Fonturacetam (phenylpiracetam, carphedon) is named as a non-specified stimulant under S6.A, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "picamilon": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved picamilon product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Picamilon product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Picamilon tablets)",
        "text": "Picamilon 20 mg and 50 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1706
        ]
      }
    ],
    "piracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved piracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Nootropil; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1163
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Piracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, which also covers racetams as a group.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Myocalm oral solution). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1509
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered approval documents for piracetam injection in December 2024.",
        "refs": [
          1608
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (injection)",
        "text": "Piracetam 200 mg/mL solution for injection (Piracetam-Verein) has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1710
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "pitavastatin": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Livalo, Zypitamag).",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Pitavastatin product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1534
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "pnc-27": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no PNC-27 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "pp405": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no PP405 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "pramipexole": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Mirapex ER and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Mirapexin; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1112
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Sifrol, Mirapexin and generics, and the EMA says Sifrol and Mirapexin can only be obtained with a prescription.",
        "refs": [
          1215,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Pramipexole is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Mirapex are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1543
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Mirapex tablets)",
        "text": "Mirapex (pramipexole) 0.25 mg and 1 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1734
        ]
      }
    ],
    "pramiracetam": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved pramiracetam product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Pramiracetam product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, which also covers racetams as a group.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "primobolan": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Methenolone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists no methenolone product.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (methenolone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Metenolone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (metenolone acetate, Primobolan tablets; metenolone enanthate injection). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1514
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (metenolone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"метенолон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Metenolone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "prl-8-53": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no PRL-8-53 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "propranolol": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Inderal LA and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Inderal; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1155
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised as Hemangiol",
        "text": "The only EU-wide authorisation is Hemangiol, an oral solution for infantile haemangioma, which the EMA says can only be obtained with a prescription.",
        "refs": [
          1211,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Propranolol is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Teva-Propranolol are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. Only products with 1 mg or less per litre or kilogram are general sale.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1537
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (propranolol) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered an approval document for propranolol hydrochloride injection in December 2024. This is separate from its doping-list entry.",
        "refs": [
          1608
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime; as a beta-blocker it is banned in competition only, in the listed sports such as shooting, archery, golf and darts.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Anaprilin tablets)",
        "text": "Anaprilin (propranolol) 40 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1723
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "P1 beta-blocker in particular sports",
        "text": "Propranolol is a named beta-blocker under P1, banned in competition in archery, motor sport, billiards, darts, golf, mini-golf, shooting and some underwater sports, and also out of competition in archery, shooting and those underwater sports.",
        "refs": [
          1800
        ]
      }
    ],
    "proviron": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Mesterolone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists no mesterolone product.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (mesterolone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Mesterolone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (mesterolone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"местеролон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Mesterolone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "ptd-dbm": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no PTD-DBM product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "pyrilutamide": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved pyrilutamide product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Pyrilutamide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "rad-140": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved; illegal as a supplement",
        "text": "No approved testolone (RAD-140) product in Drugs@FDA. FDA says products sold as SARMs are illegally marketed unapproved drugs, not dietary supplements, and that life-threatening reactions including liver injury needing hospitalisation have occurred.",
        "refs": [
          1000,
          1007
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists RAD-140 among drugs that are not authorized in Canada for any use, and warns that SARM products can cause heart attack, stroke and liver damage. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for selective androgen receptor modulators",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for selective androgen receptor modulators, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for selective androgen receptor modulators",
        "text": "Not named in the Medsafe classification database, but covered by its entry for selective androgen receptor modulators, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (RAD140) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"тестолон (RAD-140)\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.2 SARM, banned at all times",
        "text": "RAD140 is named as a selective androgen receptor modulator under S1.2, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "raloxifene": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Evista and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Raloxifene tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1151
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Evista and Raloxifene Teva, and the EMA says Evista can only be obtained with a prescription.",
        "refs": [
          1229,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Raloxifene is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Apo-Raloxifene are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (raloxifene hydrochloride). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1519
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (raloxifene) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.2 anti-estrogen, banned at all times",
        "text": "Raloxifene is named under S4.2 anti-estrogenic substances (SERMs), prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "resmetirom": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Rezdiffra).",
        "refs": [
          1000
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Rezdiffra since August 2025, and the EMA says it can only be obtained with a prescription.",
        "refs": [
          1226,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Resmetirom product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "retatrutide": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved product in Drugs@FDA; it is still in clinical trials.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Retatrutide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "rgpu-95": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved RGPU-95 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no RGPU-95 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "rosuvastatin": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Crestor and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Crestor; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1145
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Rosuvastatin is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Crestor are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1533
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Akorta tablets)",
        "text": "Akorta (rosuvastatin) 10 mg and 20 mg film-coated tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1731
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "ru-58841": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved RU-58841 product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no RU-58841 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "sana": [
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "selank": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved selank product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Selank product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine, under the entry for tuftsin and its analogues",
        "text": "Not named in the Medsafe classification database, but covered by its entry for tuftsin and its analogues, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "otc",
        "status": "Sold without prescription (Selank nasal drops)",
        "text": "Selank 0.15% nasal drops have a record in the State Register of Medicinal Products, marked for dispensing without a prescription.",
        "refs": [
          1704
        ]
      }
    ],
    "semaglutide": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Ozempic, Wegovy, Rybelsus).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Ozempic, Rybelsus and Wegovy; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1103
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Ozempic (2018), Rybelsus (2020) and Wegovy (2022), and the EMA says each can only be obtained with a prescription.",
        "refs": [
          1201,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Semaglutide is on the Prescription Drug List, and Ozempic and Rybelsus are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Rybelsus tablets). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1505
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered approval documents for semaglutide injection (Novo Nordisk) in June 2024.",
        "refs": [
          1604
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Rybelsus tablets)",
        "text": "Rybelsus (oral semaglutide) 3 mg, 7 mg and 14 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1722
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-monitored",
        "status": "2026 Monitoring Program, not prohibited",
        "text": "Markers of semaglutide are on the 2026 Monitoring Program, in and out of competition. Semaglutide itself is not on the Prohibited List.",
        "refs": [
          1801
        ]
      }
    ],
    "semax": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved semax product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Semax product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine, under the entry for adrenocorticotropic hormone analogues",
        "text": "Not named in the Medsafe classification database, but covered by its entry for adrenocorticotropic hormone analogues, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Semax 1% nasal drops)",
        "text": "Semax 1% nasal drops have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1705
        ]
      }
    ],
    "sermorelin": [
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, no authorized product",
        "text": "Sermorelin is on Health Canada’s Prescription Drug List, but the Drug Product Database has no sermorelin product in any status.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (sermorelin) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as a growth hormone releasing hormone analogue).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "Sermorelin is named as a GHRH analogue under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "sildenafil": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Viagra, Revatio).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Viagra; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1146
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Viagra (1998), Revatio (2005) and several generics, and the EMA says both brands can only be obtained with a prescription.",
        "refs": [
          1213,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Sildenafil is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Viagra and Revatio are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. A trained pharmacist may supply 100 mg or less in packs of up to 12 for erectile dysfunction in men aged 35 to 70.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only; barred from foods",
        "text": "Listed in Japan's drug price standard (Revatio 20 mg, Viagra and generics) and on MHLW's list of ingredients used only as medicines, so it may not be sold in foods. The Viagra and sildenafil 20 mg package inserts are marked as prescription drugs (shohosen iyakuhin).",
        "refs": [
          1500,
          1504,
          1539,
          1540
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered approval documents for sildenafil citrate tablets in July 2026.",
        "refs": [
          1609
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Viagra tablets)",
        "text": "Viagra (sildenafil) 25, 50 and 100 mg film-coated tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1732
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "sirolimus": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Rapamune, Fyarro).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Rapamune; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1111
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Rapamune tablets and as Hyftor gel, and the EMA says both can only be obtained with a prescription.",
        "refs": [
          1221,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Sirolimus is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Rapamune are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Rapalimus). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1553
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Rapamune tablets)",
        "text": "Rapamune (sirolimus) 1 mg coated tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1741
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "slu-pp-332": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no SLU-PP-332 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "sm04554": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no SM04554 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "sr-9009": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists SR-9009 among drugs that are not authorized in Canada for any use. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (SR9009) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"реверол (SR9009)\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.4.1 metabolic modulator, banned at all times",
        "text": "SR9009 is named as a Rev-erbα agonist under S4.4.1, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "ss-31": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Forzinity (elamipretide)).",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no SS-31 (elamipretide) product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "sunifiram": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved sunifiram product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no sunifiram product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard. It is also cross-referenced to the racetams group.",
        "refs": [
          3600
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "superdrol": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Methasterone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists no methasterone product.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for anabolic steroidal agents",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for anabolic steroidal agents, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for androgenic and anabolic steroidal agents",
        "text": "Not named in the Medsafe classification database, but covered by its entry for androgenic and anabolic steroidal agents, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (methasterone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"метастерон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Methasterone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "survodutide": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved survodutide product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Survodutide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for glucagon-like peptide-1 receptor agonists",
        "text": "Not named in the Medsafe classification database, but covered by its entry for glucagon-like peptide-1 receptor agonists, which is prescription only.",
        "refs": [
          1402
        ]
      }
    ],
    "t3": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Cytomel and generic liothyronine).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Liothyronine sodium tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1152
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Liothyronine is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Cytomel are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (liothyronine sodium). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1513
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "tadalafil": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Cialis, Adcirca).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Cialis; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1144
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Cialis (2002), Adcirca (2008) and several generics, and the EMA says both brands can only be obtained with a prescription.",
        "refs": [
          1214,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Tadalafil is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Cialis are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only; barred from foods",
        "text": "Listed in Japan's drug price standard (Adcirca and generics) and on MHLW's list of ingredients used only as medicines, so it may not be sold in foods. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1504,
          1541
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered approval documents for tadalafil tablets in December 2024.",
        "refs": [
          1608
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Dinamico Long tablets)",
        "text": "Dinamico Long (tadalafil) 5, 10 and 20 mg film-coated tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1733
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "tak-653": [
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no TAK-653 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S0 non-approved substance, banned at all times",
        "text": "Not named, but S0 prohibits at all times any pharmacological substance with no current approval for human therapeutic use that no other section covers, and this one is covered by S0 as a non-approved substance.",
        "refs": [
          1800
        ]
      }
    ],
    "taltirelin": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved taltirelin product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Taltirelin product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (taltirelin hydrate). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1527
        ]
      }
    ],
    "tamoxifen": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic tamoxifen citrate).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Nolvadex and as generic tamoxifen; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1164
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Tamoxifen is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Teva-Tamoxifen and Apo-Tamox are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (tamoxifen citrate). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1518
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "On national doping list",
        "text": "Listed by name (tamoxifen) in the other substances section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) delivered an approval document for tamoxifen citrate tablets in January 2025. This is separate from its doping-list entry.",
        "refs": [
          1611
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime.",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (tablets)",
        "text": "Tamoxifen 10 mg and 20 mg tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1717
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S4.2 anti-estrogen, banned at all times",
        "text": "Tamoxifen is named under S4.2 anti-estrogenic substances (SERMs), prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "tb-500": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved thymosin beta-4 / TB-500 product in Drugs@FDA. FDA's compounding page lists it among nominations that were withdrawn, and it is no longer on the category 2 list (page updated 22 April 2026).",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no TB-500 (thymosin beta-4) product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (thymosin-β4 and its derivatives, such as TB-500) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as a derivative of thymosin beta-4).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.3 growth factor, banned at all times",
        "text": "Thymosin beta-4 and its derivatives, with TB-500 named, are prohibited at all times under S2.3.",
        "refs": [
          1800
        ]
      }
    ],
    "telmisartan": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic telmisartan).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Micardis; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1122
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Micardis and several generics, and the EMA says Micardis can only be obtained with a prescription.",
        "refs": [
          1210,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Telmisartan is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Micardis are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1536
        ]
      }
    ],
    "teriparatide": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Forteo, Bonsity and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Forsteo; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1117
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Forsteo since 2003 and as several biosimilars, and the EMA says Forsteo can only be obtained with a prescription.",
        "refs": [
          1206,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Teriparatide is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Osnuvo and Apo-Teriparatide are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1530
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Forsteo pen)",
        "text": "Forsteo (teriparatide) 250 micrograms/mL solution in pen cartridges has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1727
        ]
      }
    ],
    "tesamorelin": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Egrifta).",
        "refs": [
          1000
        ]
      },
      {
        "where": "EU",
        "kind": "unapproved",
        "status": "Application withdrawn (2012)",
        "text": "Ferrer withdrew its EU application for Egrifta, for abdominal fat in people with HIV, in June 2012, so it never received an EU-wide authorisation.",
        "refs": [
          1227,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, no product on the market",
        "text": "Tesamorelin is on Health Canada’s Prescription Drug List. The Drug Product Database shows no marketed product; Egrifta is listed as cancelled.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for growth hormone releasing hormones",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for growth hormone releasing hormones, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: peptide hormone",
        "text": "Listed (tesamorelin) in the peptide hormones section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as a growth hormone releasing hormone analogue).",
        "refs": [
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S2.2.4 GH releasing factor, banned at all times",
        "text": "Tesamorelin is named as a GHRH analogue under S2.2.4 growth hormone releasing factors, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "tesofensine": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved tesofensine product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Tesofensine product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: stimulant",
        "text": "Listed by name (tesofensine) in the stimulants section of China’s 2026 doping list; the Anti-Doping Regulations place listed substances under strict control, so unlawful production, sale, import or export is barred, and substances outside the anabolic and peptide classes are managed as prescription drugs.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-in-comp",
        "status": "S6.B stimulant, banned in competition",
        "text": "Tesofensine is named as a specified stimulant under S6.B, prohibited in competition only.",
        "refs": [
          1800
        ]
      }
    ],
    "testosterone": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only, Schedule III",
        "text": "FDA-approved and sold by prescription (injections, gels and other forms). Testosterone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act.",
        "refs": [
          1000,
          1004
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Prescription only, Class C / Schedule 4 Part II",
        "text": "Listed by name (testosterone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply. Licensed in the UK as Testogel, which the electronic Medicines Compendium lists as a prescription only medicine.",
        "refs": [
          1100,
          1102,
          1147
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Testosterone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984. Only products with 1 mg or less per litre or kilogram are general sale.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (testosterone enanthate, Enarmon Depot). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1507
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (testosterone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "On the doping list (Decree 339)",
        "text": "Named on Russia's doping list for Criminal Code arts. 230.1 and 230.2, so inducing an athlete to use it or supplying it to an athlete is a crime (as an endogenous anabolic steroid when given from outside the body).",
        "refs": [
          1702
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Nebido injection)",
        "text": "Testosterone undecanoate (Nebido) 250 mg/mL solution for injection has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1714
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Testosterone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "thozalinone": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved thozalinone product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no thozalinone product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "thymalin": [
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Thymalin)",
        "text": "Thymalin 10 mg injectable powder has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1708
        ]
      }
    ],
    "thymosin-alpha-1": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved thymalfasin product in Drugs@FDA. FDA flagged it as a significant compounding risk; the nomination was later withdrawn.",
        "refs": [
          1000,
          1001
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Thymosin alpha-1 product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine, under the entry for thymic peptide hormones and their analogues",
        "text": "Not named in the Medsafe classification database, but covered by its entry for thymic peptide hormones and their analogues, which is prescription only.",
        "refs": [
          1402
        ]
      }
    ],
    "tirzepatide": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Mounjaro, Zepbound).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Mounjaro; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1159
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Mounjaro since September 2022, and the EMA says it can only be obtained with a prescription.",
        "refs": [
          1202,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Tirzepatide is on the Prescription Drug List, and Mounjaro is marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Mounjaro). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1506
        ]
      },
      {
        "where": "CN",
        "kind": "rx",
        "status": "Approved medicine",
        "text": "China’s drug regulator (NMPA) lists tirzepatide injection (Eli Lilly) with imported-drug approval HJ20240022.",
        "refs": [
          1605
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Munzhelio injection)",
        "text": "Munzhelio (tirzepatide) solution for subcutaneous injection, 2.5 to 15 mg, has a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1739
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-monitored",
        "status": "2026 Monitoring Program, not prohibited",
        "text": "Markers of tirzepatide are on the 2026 Monitoring Program, in and out of competition. Tirzepatide itself is not on the Prohibited List.",
        "refs": [
          1801
        ]
      }
    ],
    "tongkat-ali": [
      {
        "where": "CA",
        "kind": "supplement",
        "status": "Licensed natural health product",
        "text": "Tongkat ali (Eurycoma longifolia) is a medicinal ingredient in products that hold a Natural Product Number and are marked as marketed in Health Canada’s Licensed Natural Health Products Database.",
        "refs": [
          1307
        ]
      },
      {
        "where": "JP",
        "kind": "supplement",
        "status": "Allowed in foods",
        "text": "Eurycoma longifolia root is on MHLW's list of ingredients not treated as medicines unless sold with drug claims, so it can be sold as a food.",
        "refs": [
          1504
        ]
      }
    ],
    "topilutamide": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved topilutamide product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Topilutamide product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      }
    ],
    "tranylcypromine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Parnate and generics).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Tranylcypromine tablets are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          3601
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Marketed in Canada as Parnate and M-Tranylcypromine, both in the Drug Product Database under the prescription schedule.",
        "refs": [
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          3600
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "trazodone": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (generic trazodone).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Trazodone tablets and capsules are listed by the electronic Medicines Compendium as prescription only medicines.",
        "refs": [
          1129
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Trazodone is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as PMS Trazodone and Apo-Trazodone are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug. Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1542
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (Trittico prolonged-release tablets)",
        "text": "Trittico (trazodone) 150 mg prolonged-release tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1735
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "trenbolone": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Trenbolone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists no trenbolone product for people.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "US",
        "kind": "vet",
        "status": "Veterinary only (cattle implants)",
        "text": "FDA's animal drug regulations approve trenbolone acetate only as an implant for cattle, for improved feed efficiency or weight gain.",
        "refs": [
          1009
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (trenbolone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Trenbolone is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (trenbolone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"тренболон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Trenbolone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "tropisetron": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved tropisetron product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Tropisetron product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "turinabol": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Dehydrochloromethyltestosterone is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act.",
        "refs": [
          1004
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (4-chloromethandienone) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (dehydrochloromethyltestosterone) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"дегидрохлорметилтестостерон\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Dehydrochlormethyltestosterone is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "unifiram": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved unifiram product in Drugs@FDA.",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no unifiram product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed by name in Schedule 4 of the Poisons Standard. It is also cross-referenced to the racetams group.",
        "refs": [
          3600
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "varenicline": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Chantix, Tyrvaya).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only medicine (POM)",
        "text": "Licensed in the UK as Champix; the electronic Medicines Compendium lists it as a prescription only medicine.",
        "refs": [
          1106
        ]
      },
      {
        "where": "EU",
        "kind": "rx",
        "status": "Prescription only, centrally authorised",
        "text": "Authorised EU-wide as Champix since 2006, and the EMA says it can only be obtained with a prescription.",
        "refs": [
          1216,
          1200
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Varenicline is on Health Canada’s Prescription Drug List, so it can be sold only with a prescription. Products such as Apo-Varenicline are marketed in Canada.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (Champix). Its package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1547
        ]
      },
      {
        "where": "RU",
        "kind": "rx",
        "status": "Prescription only (tablets)",
        "text": "Varenicline 0.5 mg and 1 mg film-coated tablets have a record in the State Register of Medicinal Products, marked for dispensing by prescription.",
        "refs": [
          1738
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "viloxazine": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (Qelbree).",
        "refs": [
          1000
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no Viloxazine product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "vip": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved",
        "text": "No approved aviptadil product in Drugs@FDA. Vasoactive intestinal peptide sits in category 1 (under evaluation) of FDA's 503A compounding list.",
        "refs": [
          1000,
          1002
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "No authorized product",
        "text": "The Drug Product Database has no VIP (aviptadil) product in any status. A manufacturer cannot sell a drug in dosage form in Canada without a drug identification number.",
        "refs": [
          1303,
          1304
        ]
      },
      {
        "where": "AU",
        "kind": "rx",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "rx",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      }
    ],
    "vitamin-b12": [
      {
        "where": "US",
        "kind": "rx",
        "status": "Prescription only",
        "text": "FDA-approved and sold by prescription (cyanocobalamin injection).",
        "refs": [
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "rx",
        "status": "Prescription only (injection); pharmacy medicine (oral tablets)",
        "text": "Hydroxocobalamin injection is a prescription only medicine, while 50 microgram cyanocobalamin tablets are pharmacy medicines, according to the electronic Medicines Compendium.",
        "refs": [
          1128,
          1134
        ]
      },
      {
        "where": "NZ",
        "kind": "otc",
        "status": "General sale medicine",
        "text": "Cyanocobalamin and hydroxocobalamin are classified as general sale medicines in the Medsafe classification database.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "rx",
        "status": "Prescription only",
        "text": "Listed in Japan's national health insurance drug price standard as a medical-use drug (cyanocobalamin, mecobalamin and hydroxocobalamin). The mecobalamin package insert is marked as a prescription drug (shohosen iyakuhin).",
        "refs": [
          1500,
          1544
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-allowed",
        "status": "Not on the 2026 List",
        "text": "Not named on the 2026 Prohibited List, and no prohibited class covers it.",
        "refs": [
          1800
        ]
      }
    ],
    "winstrol": [
      {
        "where": "US",
        "kind": "controlled",
        "status": "Schedule III controlled substance",
        "text": "Stanozolol is listed by name as an anabolic steroid in Schedule III of the Controlled Substances Act. Drugs@FDA lists stanozolol (Winstrol) only as discontinued.",
        "refs": [
          1004,
          1000
        ]
      },
      {
        "where": "UK",
        "kind": "controlled",
        "status": "Class C controlled drug, Schedule 4 Part II",
        "text": "Listed by name (stanozolol) as a Class C drug under the Misuse of Drugs Act 1971 and in Schedule 4 Part II of the Misuse of Drugs Regulations 2001, which allows possession of a medicinal product for personal use but not supply.",
        "refs": [
          1100,
          1102
        ]
      },
      {
        "where": "CA",
        "kind": "controlled",
        "status": "Schedule IV controlled substance",
        "text": "Stanozolol is named under anabolic steroids in Schedule IV of the Controlled Drugs and Substances Act. Possessing it is not an offence, but selling, importing, exporting or making it without authorization is.",
        "refs": [
          1300
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4; illegal to possess without a prescription",
        "text": "Listed in Schedule 4 of the Poisons Standard and in Appendix D, clause 5, which makes possession without authority illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (stanozolol) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "RU",
        "kind": "controlled",
        "status": "Potent substance (Decree No. 964)",
        "text": "Named (\"станозолол\") on Russia's list of potent substances for Criminal Code art. 234, which makes illegal trade in it a crime; it is also on the doping list for Criminal Code arts. 230.1 and 230.2.",
        "refs": [
          1700,
          1702
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.1 anabolic steroid, banned at all times",
        "text": "Stanozolol is named under S1.1 anabolic androgenic steroids, prohibited in and out of competition, and the List covers their esters too.",
        "refs": [
          1800
        ]
      }
    ],
    "yk-11": [
      {
        "where": "US",
        "kind": "unapproved",
        "status": "Not FDA approved; illegal as a supplement",
        "text": "FDA says products sold as SARMs are illegally marketed unapproved drugs, not dietary supplements, and that life-threatening reactions including liver injury needing hospitalisation have occurred.",
        "refs": [
          1007
        ]
      },
      {
        "where": "CA",
        "kind": "unapproved",
        "status": "Not authorized (Health Canada advisory)",
        "text": "Health Canada lists YK-11 among drugs that are not authorized in Canada for any use, and warns that SARM products can cause heart attack, stroke and liver damage. The Drug Product Database has no product in any status.",
        "refs": [
          1303,
          1305
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Schedule 4 (prescription only), under the entry for selective androgen receptor modulators",
        "text": "Not named in the Poisons Standard, but covered by its Schedule 4 entry for selective androgen receptor modulators, which is also listed in Appendix D, clause 5, so possession without authority is illegal.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine, under the entry for selective androgen receptor modulators",
        "text": "Not named in the Medsafe classification database, but covered by its entry for selective androgen receptor modulators, which is prescription only.",
        "refs": [
          1402
        ]
      },
      {
        "where": "CN",
        "kind": "controlled",
        "status": "Doping list: anabolic agent",
        "text": "Listed by name (YK-11) in the anabolic agents section of China’s 2026 doping list; production, wholesale, import and export need state permits, retail pharmacies may not sell it, and hospitals supply it only on prescription.",
        "refs": [
          1600,
          1601
        ]
      },
      {
        "where": "WADA",
        "kind": "sport-banned",
        "status": "S1.2 SARM, banned at all times",
        "text": "YK-11 is named as a selective androgen receptor modulator under S1.2, prohibited in and out of competition.",
        "refs": [
          1800
        ]
      }
    ],
    "yohimbine": [
      {
        "where": "EU",
        "kind": "prohibited",
        "status": "Yohimbe bark banned in food",
        "text": "Yohimbe bark (Pausinystalia yohimbe) and its preparations are listed in Part A (prohibited substances) of Annex III to Regulation 1925/2006, so they cannot be used in foods.",
        "refs": [
          1238
        ]
      },
      {
        "where": "CA",
        "kind": "rx",
        "status": "Prescription only, no product on the market",
        "text": "Yohimbine is on Health Canada’s Prescription Drug List. The Drug Product Database lists only cancelled yohimbine products, such as Yocon.",
        "refs": [
          1302,
          1303
        ]
      },
      {
        "where": "AU",
        "kind": "controlled",
        "status": "Prescription only (Schedule 4)",
        "text": "Listed in Schedule 4 of the Poisons Standard, so it is a prescription-only medicine.",
        "refs": [
          1400
        ]
      },
      {
        "where": "NZ",
        "kind": "controlled",
        "status": "Prescription medicine",
        "text": "Classified as a prescription medicine in the Medsafe classification database, which follows Schedule 1 of the Medicines Regulations 1984.",
        "refs": [
          1402
        ]
      },
      {
        "where": "JP",
        "kind": "unapproved",
        "status": "Medicine-only ingredient; barred from foods",
        "text": "Yohimbe bark (Corynanthe johimbe, and Pausinystalia johimbe root bark) is on MHLW's list of ingredients used only as medicines, so it may not be sold as a food or supplement.",
        "refs": [
          1504
        ]
      }
    ]
  };
})(window.ATLAS);
