import { StateVitalRecords } from "@/types";

export const FL: StateVitalRecords = {
  stateCode: "FL",
  stateName: "Florida",
  office: {
    name: "Florida Department of Health, Bureau of Vital Statistics",
    address: "P.O. Box 210, Jacksonville, FL 32231-0042",
    phone: "(904) 359-6900",
    website:
      "https://www.floridahealth.gov/certificates/certificates/birth/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM ET",
  },
  fees: {
    certified: 9,
    additionalCopy: 4,
    expedited: 10,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/florida",
      provider: "vitalchek",
      additionalFee: 14,
      notes:
        "VitalChek is the exclusive authorized online vendor for Florida vital records.",
    },
    mail: {
      address:
        "Bureau of Vital Statistics, P.O. Box 210, Jacksonville, FL 32231-0042",
      processingTime: "4–6 weeks",
      notes: "Include completed DH 726 form, payment, and a copy of your ID.",
    },
    inPerson: {
      locations:
        "Jacksonville state office and select county health department offices",
      processingTime: "Same day at Jacksonville office",
      notes:
        "Some county health departments can issue certificates — contact your local office to check.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Florida driver's license or ID card",
      "Valid US passport",
      "Valid military ID",
    ],
    secondaryId: [
      "Utility bill",
      "Bank statement",
      "Vehicle registration",
      "Insurance document",
    ],
    eligibleRequestors: [
      "The registrant (person on the certificate)",
      "A parent listed on the certificate",
      "A legal guardian",
      "An attorney or legal representative",
      "A spouse",
    ],
  },
  feeWaivers: [
    {
      eligibility: "Veterans (for VA purposes)",
      howToClaim:
        "Records for Veterans Administration purposes are provided at no charge.",
    },
  ],
  recordsAvailableFrom: 1917,
  applicationFormUrl:
    "https://www.floridahealth.gov/certificates/certificates/birth/_documents/DH726-birth-app-6-30-2023.pdf",
  specialNotes: [
    "Florida has some of the lowest birth certificate fees in the country ($9 for the first copy).",
    "Records from 1917 to present are available from the state office. For earlier records, contact the county clerk of court.",
  ],
  noIdWorkaround:
    "If you have no photo ID, contact the Bureau of Vital Statistics at (904) 359-6900 for guidance on alternative documentation. You may need to provide multiple forms of secondary identification.",
  lastVerified: "unverified",
};
