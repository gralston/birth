import { StateVitalRecords } from "@/types";

export const ND: StateVitalRecords = {
  stateCode: "ND",
  stateName: "North Dakota",
  office: {
    name: "North Dakota Department of Health and Human Services, Division of Vital Records",
    address: "600 East Boulevard Avenue, Dept. 301, Bismarck, ND 58505-0200",
    phone: "(701) 328-2360",
    website: "https://www.hhs.nd.gov/vital",
    hours: "Mon–Fri 8:00 AM – 5:00 PM CT; closed state holidays",
  },
  fees: {
    certified: 7,
    additionalCopy: 4,
    paymentMethods: [
      "personal check (payable to North Dakota Department of Health and Human Services)",
      "money order",
      "credit card (online and phone orders via VitalChek)",
      "debit card (online and phone orders via VitalChek)",
      "cash (in-person only, exact change recommended)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/north-dakota",
      provider: "vitalchek",
      additionalFee: 13.25,
      notes:
        "VitalChek is the only authorized online ordering service for North Dakota vital records. A service fee of approximately $13.25 applies in addition to the state fee. Credit or debit card required. Standard processing typically takes 2–4 weeks; expedited shipping is available for an additional cost.",
    },
    mail: {
      address:
        "Division of Vital Records, 600 East Boulevard Avenue, Dept. 301, Bismarck, ND 58505-0200",
      processingTime: "2–4 weeks",
      notes:
        "Include a completed application form, a photocopy of your valid government-issued photo ID, and a check or money order payable to 'ND Department of Health and Human Services.' All required fields on the application must be completed or the request will be returned. Include a self-addressed stamped envelope if desired.",
    },
    inPerson: {
      locations:
        "Division of Vital Records central office at 600 East Boulevard Avenue, Bismarck, ND. Some local public health units across North Dakota may also assist with ordering certificates.",
      processingTime: "Same day at the Bismarck office when the record is on file",
      notes:
        "Walk-in service is available at the Bismarck office during business hours. Bring valid government-issued photo ID and payment. Local public health units may have limited hours and availability — call ahead to confirm.",
    },
    phone: {
      number: "(877) 457-0361",
      provider: "VitalChek",
      notes:
        "VitalChek service fee (~$13.25) applies in addition to the state fee. Credit or debit card required. Available 24/7. For general inquiries, call the Division of Vital Records directly at (701) 328-2360.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card with photo",
      "Valid U.S. passport or passport card",
      "Valid U.S. military ID with photo",
      "Permanent Resident Card (Form I-551, Green Card)",
      "Certificate of Naturalization or Citizenship",
      "Tribal government-issued photo ID",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill or bank statement dated within 90 days",
      "Voter registration card",
      "School or employer ID with photo",
      "Insurance card or Medicaid/Medicare card",
      "Certified marriage certificate or divorce decree",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be 18 or older)",
      "A parent listed on the certificate",
      "Legal guardian with certified court documentation",
      "Spouse of the registrant (with proof of marriage)",
      "Adult child, grandchild, or sibling of the registrant (with proof of relationship)",
      "An authorized legal representative with court order or power of attorney",
      "A government agency representative for official purposes",
      "A funeral director acting on behalf of the family",
    ],
    notes:
      "North Dakota vital records are not public records. Applicants must demonstrate a direct and tangible interest in the record. A photocopy of valid government-issued photo ID (front and back) must accompany all mail requests. Requests from someone other than the registrant require proof of relationship or legal authority.",
    acceptableIdUrl: "https://www.hhs.nd.gov/vital/birth",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals who need a birth certificate solely to obtain a valid photo ID for voting purposes",
      howToClaim:
        "Submit a written statement with your application indicating that the birth certificate is needed to obtain identification for voting. Under North Dakota Century Code, a certified copy may be furnished without fee when needed for voter identification purposes.",
      citation: "N.D.C.C. § 23-02.1-27",
    },
    {
      eligibility:
        "Homeless children, youth, or unaccompanied youth as defined under the federal McKinney-Vento Homeless Assistance Act",
      howToClaim:
        "A homeless services provider, school district homeless liaison, or government social services agency can submit a request on behalf of the individual certifying their homeless status. One certified copy is provided at no charge.",
      citation: "42 U.S.C. § 11434a (McKinney-Vento Act); N.D.C.C. § 23-02.1-27",
    },
    {
      eligibility:
        "Veterans or their dependents requesting records for Veterans Administration claims or benefits",
      howToClaim:
        "Include documentation that the request is for VA purposes. Certified copies needed for Veterans Administration claims are furnished free of charge.",
      citation: "38 U.S.C. § 1542; N.D.C.C. § 23-02.1-27",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Federal, state, and local government agencies may obtain certified copies without charge when the record is required for official government business. The request must be submitted on official agency letterhead.",
      citation: "N.D.C.C. § 23-02.1-27",
    },
  ],
  recordsAvailableFrom: 1870,
  applicationFormUrl:
    "https://www.hhs.nd.gov/vital/vital-records-forms",
  specialNotes: [
    "North Dakota has some birth records dating as far back as 1870, though statewide registration was not consistently enforced until July 1, 1893, when mandatory registration began. Records from 1870 to 1893 may be incomplete — contact the Division of Vital Records for assistance.",
    "North Dakota's birth certificate fees are among the lowest in the nation: $7 for the first certified copy and $4 for each additional copy ordered at the same time.",
    "North Dakota is one of few states that does not require a photo ID to vote. However, voters must present a valid form of identification that shows name, date of birth, and residential address at the polls.",
    "North Dakota allows amendments to birth certificates, including gender marker changes. A court order may be required depending on the type of amendment requested.",
    "Tribal-issued photo IDs are accepted as valid primary identification for requesting vital records, reflecting North Dakota's significant Native American population.",
    "Delayed birth certificates for births not registered at the time can be filed with the Division of Vital Records with supporting evidence such as census records, hospital records, or affidavits.",
    "VitalChek is the only authorized online/phone vendor for North Dakota vital records. Beware of unofficial third-party websites that charge excessive fees.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent, spouse, adult child, sibling, or grandchild) who has valid photo ID request the certificate on your behalf with proof of their relationship to the registrant. You may also provide two forms of secondary identification containing your name (e.g., Social Security card plus a utility bill) in lieu of a photo ID — contact the Division of Vital Records at (701) 328-2360 to discuss your situation. If you are experiencing homelessness, work with a homeless services provider, school homeless liaison, or social services agency who can submit the request on your behalf with the fee waived under federal and state law. Tribal members without state-issued ID may use a tribal government-issued photo ID as primary identification.",
  lastVerified: "2026-03-21",
};
