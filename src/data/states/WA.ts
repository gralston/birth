import { StateVitalRecords } from "@/types";

export const WA: StateVitalRecords = {
  stateCode: "WA",
  stateName: "Washington",
  office: {
    name: "Washington State Department of Health, Center for Health Statistics",
    address: "P.O. Box 9709, Olympia, WA 98507",
    phone: "(360) 236-4300",
    website:
      "https://doh.wa.gov/licenses-permits-and-certificates/vital-records",
    hours: "Mon–Fri 9:00 AM – 2:00 PM PT (phone); counter 9 AM – 4 PM by appointment",
  },
  fees: {
    certified: 25,
    additionalCopy: 25,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/washington",
      provider: "vitalchek",
      additionalFee: 17.5,
      notes:
        "VitalChek is the only approved third-party vendor. Service fee includes $6 agency fee + $11.50 handling. The state warns against unauthorized third-party sites.",
    },
    mail: {
      address:
        "Center for Health Statistics, P.O. Box 9709, Olympia, WA 98507",
      processingTime: "8–10 weeks",
      notes:
        "Include completed DOH 422-182 form, photocopy of ID, and check/money order payable to 'Department of Health.'",
    },
    inPerson: {
      locations:
        "State office at 111 Israel Road SE, Tumwater, WA (by appointment only). Local county health departments also offer in-person service.",
      processingTime: "Same day at state office and most local offices",
      notes:
        "State office requires an appointment — no walk-ins. Local county health departments may be more convenient.",
      localOfficesUrl:
        "https://doh.wa.gov/about-us/contact-us/office-locations-and-hours",
    },
    phone: {
      number: "1-866-687-1464",
      provider: "VitalChek",
      notes: "Same fees as online. Spanish language support: call (360) 236-4300, option 8.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Washington driver's license, EDL, or state ID",
      "Valid out-of-state driver's license or REAL ID",
      "Valid US passport or passport card",
      "Consulate card",
      "Valid US military ID",
      "Tribal membership/enrollment ID (federally recognized)",
      "Foreign passport, driver's license, or ID card",
    ],
    secondaryId: [
      "Two required if no primary ID: Social Security card, utility bill, bank statement, W-2/1099 tax forms, letter from alternative housing facility on letterhead",
    ],
    eligibleRequestors: [
      "The person named on the certificate",
      "Spouse or domestic partner",
      "Parent, stepparent, child, stepchild, sibling",
      "Grandparent, grandchild, great-grandparent, great-grandchild",
      "Legal guardian or legal representative",
      "Authorized representative (with notarized form or power of attorney)",
    ],
    acceptableIdUrl:
      "https://doh.wa.gov/sites/default/files/legacy/Documents/Pubs/422-177-AcceptableProofsOfIdentityDocuments.pdf",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "No fee for homeless persons living in Washington. The request must be submitted by a government agency or homeless services provider on your behalf with a letter on official letterhead asserting you meet the HUD definition of homeless.",
      citation: "RCW 70.58A.560",
    },
    {
      eligibility: "SNAP recipients enrolling a child in school",
      howToClaim:
        "No fee for a parent/guardian enrolling a child in an early learning program or K-12 public school, if the child is in a household receiving SNAP or WA food assistance benefits. Submit benefits documentation with application.",
      citation: "RCW 70.58A.560",
    },
    {
      eligibility: "Veterans (for VA claim purposes)",
      howToClaim:
        "No fee for a vital record for use in connection with a claim for compensation or pension pending before the Veterans Administration. Submit VA documentation with application.",
      citation: "RCW 70.58A.560",
    },
  ],
  recordsAvailableFrom: 1907,
  applicationFormUrl:
    "https://doh.wa.gov/sites/default/files/2025-07/422-182-BirthCertificateOrderForm.pdf",
  applicationFormUrlEs:
    "https://doh.wa.gov/sites/default/files/legacy/Documents/Pubs/422-182-BirthCertificateOrderFormSpanish.pdf",
  specialNotes: [
    "VitalChek is the ONLY approved third-party vendor — the state warns against unauthorized sites.",
    "The $25 fee is nonrefundable even if no record is found.",
    "State office requires an appointment — no walk-ins.",
    "For births before July 1, 1907, contact the county auditor or local health department where the birth occurred.",
    "Spanish phone support: call (360) 236-4300, option 8.",
  ],
  noIdWorkaround:
    "Washington accepts two secondary documents instead of a photo ID (Social Security card, utility bill, bank statement, W-2/1099, or letter from housing facility). If experiencing homelessness, a government agency or homeless services provider can submit the request on your behalf — no personal ID needed and the fee is waived. Anyone can request a noncertified 'informational copy' ($25) without ID restrictions, which can serve as a stepping stone to get other documents. Contact (360) 236-4300 for assistance.",
  lastVerified: "2026-03-21",
};
