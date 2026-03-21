import { StateVitalRecords } from "@/types";

export const IL: StateVitalRecords = {
  stateCode: "IL",
  stateName: "Illinois",
  office: {
    name: "Illinois Department of Public Health, Division of Vital Records",
    address: "925 E. Ridgely Avenue, Springfield, IL 62702-2737",
    phone: "(217) 782-6554",
    website:
      "https://dph.illinois.gov/topics-services/birth-death-other-records/birth-records.html",
    hours: "Mon–Fri 10:00 AM – 3:00 PM CT (walk-in and phone)",
  },
  fees: {
    certified: 15,
    additionalCopy: 2,
    paymentMethods: [
      "check",
      "money order",
      "credit card (in-person/online)",
      "debit card (in-person)",
      "cash (in-person)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/illinois",
      provider: "vitalchek",
      additionalFee: 10.45,
      notes:
        "VitalChek is the official online partner for IDPH. Expedited shipping available for an additional $19.50.",
    },
    mail: {
      address:
        "Division of Vital Records, 925 E. Ridgely Avenue, Springfield, IL 62702-2737",
      processingTime: "Approximately 12 weeks",
      notes:
        "Processing time is exceptionally long. Include completed VR 180 form, copy of valid photo ID, and check/money order. Consider VitalChek or in-person for faster service.",
    },
    inPerson: {
      locations:
        "State office at 925 E. Ridgely Ave., Springfield, IL. County clerks also issue certificates — often faster and cheaper.",
      processingTime: "Same day at state office and most county clerks",
      notes:
        "For births in Chicago and suburban Cook County, the Cook County Clerk's office has multiple locations and is often faster than IDPH.",
      localOfficesUrl:
        "https://dph.illinois.gov/topics-services/birth-death-other-records.html",
    },
    phone: {
      number: "(866) 252-8974",
      provider: "VitalChek",
      notes:
        "VitalChek toll-free for Cook County. Same fees as online. General IDPH inquiries: (217) 782-6554.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport",
      "FOID card (Firearm Owners Identification)",
      "Active duty military ID",
      "Matricula Consular card (issued after Oct 2006, not expired)",
      "Prison photo ID (with dated intake/offender summary sheet)",
    ],
    secondaryId: [
      "Two documents with your name (at least one showing current address): utility bill, medical card, auto insurance card, voter registration card, paycheck stub, bank statement, or credit card statement",
    ],
    eligibleRequestors: [
      "The person named on the record (if 18+)",
      "A parent listed on the birth certificate",
      "A legal guardian (with certified guardianship documents)",
      "A legal representative or attorney",
      "An agent authorized by power of attorney",
    ],
    notes:
      "If your photo ID expired less than 6 months ago, you need one additional document. If expired more than 6 months ago or you have no photo ID, you need two documents.",
    acceptableIdUrl:
      "https://dph.illinois.gov/topics-services/birth-death-other-records/valid-government-issued-photo-id.html",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "Fee waived for up to 4 birth records per year. Provide a verification letter of homeless status from a human services provider, legal services provider, or similar agency funded by the State of Illinois.",
      citation: "410 ILCS 535/25.3",
    },
    {
      eligibility: "Youth in care / former foster youth (under 27)",
      howToClaim:
        "All fees waived for current youth in care or anyone under age 27 who was in care on or after their 18th birthday as defined by the Children and Family Services Act.",
      citation: "410 ILCS 535/25.4",
    },
    {
      eligibility: "Domestic violence victims",
      howToClaim:
        "No fee assessed against a victim of domestic violence. Must provide a certification letter from a DV shelter or services provider.",
      citation: "410 ILCS 535/25.5, 25.6",
    },
    {
      eligibility: "Released from incarceration (DOC)",
      howToClaim:
        "One-time fee waiver upon release on parole, mandatory supervised release, final discharge, or pardon. Present a DOC verification form confirming date of birth and SSN.",
      citation: "410 ILCS 535/25",
    },
    {
      eligibility: "Released from juvenile justice (DJJ)",
      howToClaim:
        "One-time fee waiver for persons placed on aftercare release or released from the Department of Juvenile Justice, with a DJJ verification form.",
      citation: "410 ILCS 535/25",
    },
  ],
  recordsAvailableFrom: 1916,
  applicationFormUrl:
    "https://dph.illinois.gov/content/dam/soi/en/web/idph/files/forms/formsoppsapplication-illinois-birth-record-2018.pdf",
  specialNotes: [
    "Mail processing takes approximately 12 weeks — plan far ahead or use VitalChek/in-person options.",
    "County clerks are often faster and cheaper. For Cook County births, contact the Cook County Clerk at cookcountyclerkil.gov.",
    "Illinois accepts Matricula Consular cards as valid ID — significant for immigrant communities.",
    "For births before 1916, contact the county clerk in the county of birth — some counties have records back to 1877.",
  ],
  noIdWorkaround:
    "Illinois explicitly allows requests without photo ID. Submit two pieces of documentation with your name, at least one showing your current address (utility bill, medical card, voter registration card, bank statement, etc.). If experiencing homelessness, a verification letter from a human services agency both serves as ID support and waives the fee (up to 4 certificates per year). Contact (217) 782-6554 or email DPH.VITALS@illinois.gov for assistance.",
  lastVerified: "2026-03-21",
};
