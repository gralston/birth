import { StateVitalRecords } from "@/types";

export const OH: StateVitalRecords = {
  stateCode: "OH",
  stateName: "Ohio",
  office: {
    name: "Ohio Department of Health, Bureau of Vital Statistics",
    address: "P.O. Box 15098, Columbus, OH 43215-0098",
    phone: "(614) 466-2531",
    website: "https://odh.ohio.gov/know-our-programs/vital-statistics/",
    hours: "Mon–Fri 7:45 AM – 4:30 PM ET",
  },
  fees: {
    certified: 21.5,
    additionalCopy: 21.5,
    paymentMethods: ["check", "money order", "credit card (online)"],
  },
  requestMethods: {
    online: {
      url: "https://odhgateway.odh.ohio.gov/",
      provider: "state",
      notes:
        "Ohio has its own online ordering portal. You can also order via VitalChek.",
    },
    mail: {
      address:
        "Ohio Department of Health, Bureau of Vital Statistics, P.O. Box 15098, Columbus, OH 43215-0098",
      processingTime: "4–6 weeks",
      notes:
        "Include completed application, payment, and a copy of your ID.",
    },
    inPerson: {
      locations:
        "Columbus state office and local city or county health departments",
      processingTime: "Same day at many local offices",
      notes:
        "City and county health departments may have their own fees and processes — contact your local office.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Ohio driver's license or ID card",
      "Valid US passport",
      "Valid military ID",
    ],
    secondaryId: [
      "Utility bill",
      "Bank statement",
      "Government correspondence",
      "Voter registration card",
    ],
    eligibleRequestors: [
      "The person named on the certificate (if 18+)",
      "A parent listed on the certificate",
      "A legal guardian",
      "An authorized representative with notarized statement",
    ],
  },
  feeWaivers: [
    {
      eligibility: "Veterans (for VA purposes)",
      howToClaim:
        "Records for Veterans Administration purposes are provided at no charge.",
    },
  ],
  recordsAvailableFrom: 1908,
  specialNotes: [
    "Ohio vital records are managed at both the state and local levels. Your local city or county health department may be faster for in-person requests.",
    "For births before 1908, contact the probate court in the county of birth.",
    "Ohio requires strict photo ID requirements for voter ID (as of 2024).",
  ],
  noIdWorkaround:
    "Contact the Bureau of Vital Statistics at (614) 466-2531 for guidance if you lack a photo ID. Local health departments may have different verification options.",
  lastVerified: "unverified",
};
