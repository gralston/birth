import { StateVitalRecords } from "@/types";

export const AZ: StateVitalRecords = {
  stateCode: "AZ",
  stateName: "Arizona",
  office: {
    name: "Arizona Department of Health Services, Bureau of Vital Records",
    address: "P.O. Box 6018, Phoenix, AZ 85005",
    phone: "(602) 364-1300",
    website:
      "https://www.azdhs.gov/licensing/vital-records/index.php",
    hours: "Mon–Fri 8:00 AM – 5:00 PM MT (closed weekends and state holidays)",
  },
  fees: {
    certified: 20,
    additionalCopy: 20,
    paymentMethods: [
      "money order",
      "cashier's check",
      "credit card (online/in-person at county offices)",
      "debit card (online/in-person at county offices)",
      "cash (in-person at county offices only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/arizona/arizona-vital-records",
      provider: "vitalchek",
      additionalFee: 11.25,
      notes:
        "VitalChek is the authorized online vendor for the state Bureau of Vital Records. Orders are electronically sent by the next business day. Expect additional shipping fees depending on delivery speed (standard 7–10 business days, expedited 3–5 business days). Some county offices (e.g., Maricopa, Pima) also offer online ordering through VitalChek.",
    },
    mail: {
      address:
        "Bureau of Vital Records, P.O. Box 6018, Phoenix, AZ 85005",
      processingTime: "4–5 weeks",
      notes:
        "Include completed application form (VS-10), payment by money order or cashier's check payable to 'Bureau of Vital Records,' and a clear photocopy of the front and back of your valid government-issued photo ID (or have your signature notarized). The state office does not accept personal checks.",
    },
    inPerson: {
      locations:
        "Local county health department Offices of Vital Records (all 15 counties). The state Bureau of Vital Records in Phoenix (150 N. 18th Ave., Ste. 120) no longer provides same-day walk-in service for certificate issuance.",
      processingTime: "Same day at county offices",
      notes:
        "For same-day service, visit your local county health department Office of Vital Records. Arrive by 4:00 PM. Bring valid photo ID, payment, and documents proving eligibility. The state office processes mail-in requests only.",
      localOfficesUrl:
        "https://www.azdhs.gov/licensing/vital-records/index.php#local-county",
    },
    phone: {
      number: "(877) 803-0609",
      provider: "VitalChek",
      notes:
        "Phone orders processed through VitalChek with additional service fees. The state office phone (602) 364-1300 or toll-free (888) 816-5907 is for information only, not ordering.",
    },
  },
  requirements: {
    primaryId: [
      "U.S. driver's license or state ID card (not temporary)",
      "U.S. passport (with signature; passport cards without signature are not accepted)",
      "U.S. military ID (must contain bearer's signature)",
      "Tribal ID card (must contain bearer's signature)",
      "U.S. territories driver's license or ID card",
      "Permanent Resident Card (issued after May 11, 2010, with visible signature)",
      "Resident Alien Card (Form I-551)",
      "Foreign passport (or visa in passport with bearer's signature)",
      "Foreign Consulate ID card (only if issuing government uses biometric verification)",
    ],
    secondaryId: [
      "Notarized signature on application (accepted in lieu of photo ID for mail and in-person requests)",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be 18+)",
      "A parent listed on the certificate",
      "Spouse of the registrant (with notarized permission letter or registrant's ID copy plus marriage certificate)",
      "Grandparent (with parent's birth certificate showing connection)",
      "Adult child or grandchild of the registrant (18+, with proof of relationship)",
      "Adult sibling (18+, with proof of common parentage)",
      "Legal guardian (with certified court order)",
      "Power of Attorney designee (with valid POA document)",
      "Conservator (with certified court order)",
      "Court-designated person (named in court order)",
      "Attorney representing the registrant, parent, or guardian",
      "Adoption agency or private attorney (for pending or completed adoptions)",
      "Government agency (for official purposes)",
      "A child aged 16+ who is homeless or in DCS custody (without parental signature, per ARS 36-324(F))",
    ],
    notes:
      "For mail requests, provide a photocopy of both the front and back of your valid government-issued photo ID, OR have your signature notarized. For in-person requests, present your valid photo ID. Temporary IDs marked 'Not Valid for ID Purposes' are not accepted. Mexican Voter Registration Cards, school IDs, foreign driver's licenses, Employment Authorization Cards (Form I-766), and Arizona DOC Released Offender Cards are not accepted.",
    acceptableIdUrl:
      "https://www.maricopa.gov/1269/Forms-of-Acceptable-Identification",
  },
  feeWaivers: [
    {
      eligibility:
        "Department of Economic Security (child support and public benefits cases)",
      howToClaim:
        "The state registrar provides copies without charge to DES or its attorneys for child support cases under 42 U.S.C. 651–669 or public benefit matters. Records must be used only for official purposes.",
      citation: "ARS § 36-324(D)",
    },
    {
      eligibility:
        "Department of Child Safety (child welfare cases)",
      howToClaim:
        "The state registrar provides copies without charge to DCS or its attorneys for child welfare cases. Records must be used only for official purposes.",
      citation: "ARS § 36-324(D)",
    },
    {
      eligibility: "Government agencies (official purposes)",
      howToClaim:
        "State and local registrars may exempt any government agency (as defined in ARS 41-1001) from fees.",
      citation: "ARS § 36-341(F)",
    },
    {
      eligibility:
        "Youth aged 16+ who are homeless or in DCS custody",
      howToClaim:
        "A child who is at least 16 and either has no residence address or is in DCS custody may obtain a certified copy of their birth certificate without a parent/guardian signature. This removes the parental-consent barrier but does not explicitly waive the fee; however, DCS or a homeless services agency may cover the cost or request on the youth's behalf under ARS 36-324(D) or 36-341(F).",
      citation: "ARS § 36-324(F)",
    },
    {
      eligibility: "Veterans (for VA purposes)",
      howToClaim:
        "Records requested for Veterans Administration purposes are provided at no charge per federal requirements.",
    },
  ],
  recordsAvailableFrom: 1909,
  applicationFormUrl:
    "https://www.azdhs.gov/documents/vital-records/application-certificate-birth.pdf",
  specialNotes: [
    "Arizona's state Bureau of Vital Records no longer provides same-day walk-in service. For in-person/same-day service, visit your local county health department Office of Vital Records.",
    "Statewide birth registration began in July 1909 and was generally complied with by 1926. For births before 1909, the state office may have abstracts of records filed with counties; contact the county of birth directly.",
    "The Navajo Nation Office of Vital Records and Identification (NOVRI) in Window Rock issues tribal enrollment documents and affidavits of birth for Navajo Nation members. Arizona births on tribal land are still registered with the state, but tribal members may also need NOVRI documents for enrollment. Contact NOVRI at (928) 871-6386.",
    "AZDHS has partnered with Colorado, New Mexico, and Utah to host delayed birth registration events on the Navajo Nation for elderly tribal members who were never registered at birth.",
    "A $1 surcharge is assessed on each certified copy of a birth certificate under ARS 36-341(B) and is included in the $20 fee.",
    "Spanish-language application forms are available as reference examples from some county offices (e.g., Maricopa County) but are not official state forms. The official application must be completed in English.",
    "County offices may set their own fees per ARS 36-341(A), so costs may vary slightly by county.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, you may have your signature on the application notarized by a public notary — this satisfies the identity verification requirement for both mail and in-person requests. Alternatively, an eligible family member who does have valid photo ID can submit the request on your behalf with proof of relationship (e.g., their own birth certificate showing common parentage, marriage certificate, or court order). For youth aged 16+ who are homeless or in DCS custody, ARS 36-324(F) waives the parental signature requirement. Government agencies and homeless services providers may also request records on behalf of individuals under ARS 36-324(D)–(E).",
  lastVerified: "2026-03-21",
};
