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
      fee: 19,
      additionalFee: 11,
      notes:
        "VitalChek is the exclusive authorized online vendor for Florida vital records. Fees may vary by county when ordering through VitalChek.",
    },
    mail: {
      address:
        "Bureau of Vital Statistics, P.O. Box 210, Jacksonville, FL 32231-0042",
      processingTime: "4–6 weeks",
      notes: "Include completed DH 726 form, payment, and a copy of your ID.",
    },
    inPerson: {
      locations:
        "1217 N Pearl St, Jacksonville, FL 32202",
      processingTime: "Same day at Jacksonville office",
      notes:
        "Some county health departments can also issue certificates — contact your local office to check.",
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
    acceptableIdUrl: "https://www.floridahealth.gov/certificates-records/birth-certificates/",
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
    "https://www.floridahealth.gov/wp-content/uploads/2025/07/DH726-birth-app-6-30-2023.pdf",
  applicationFormUrlEs:
    "https://www.floridahealth.gov/wp-content/uploads/2025/07/DH726S-BirthApp-Spanish-6-30-2023.pdf",
  specialNotes: [
    "Florida has some of the lowest birth certificate fees in the country ($9 for the first copy).",
    "Records from 1917 to present are available from the state office. For earlier records, contact the county clerk of court.",
  ],
  noIdWorkaround:
    "Florida requires valid photo ID for all birth certificate requests and does not publish a list of alternatives. If you have no photo ID, call the Bureau of Vital Statistics at (904) 359-6900 to ask about options. An eligible family member with photo ID can request on your behalf using a notarized Affidavit to Release a Birth Certificate. Organizations like Spread the Vote (spreadthevote.org) may also be able to help.",
  lastVerified: "unverified",
};
