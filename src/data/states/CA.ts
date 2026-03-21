import { StateVitalRecords } from "@/types";

export const CA: StateVitalRecords = {
  stateCode: "CA",
  stateName: "California",
  office: {
    name: "California Department of Public Health, Vital Records",
    address:
      "MS 5103, P.O. Box 997410, Sacramento, CA 95899-7410",
    phone: "(916) 445-2684",
    website:
      "https://www.cdph.ca.gov/Programs/CHSI/Pages/Vital-Records.aspx",
    hours: "Mon–Fri 8:00 AM – 4:00 PM PT",
  },
  fees: {
    certified: 31,
    additionalCopy: 31,
    expedited: 31,
    paymentMethods: ["check", "money order", "credit card (online)"],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/california",
      provider: "vitalchek",
      additionalFee: 14,
      notes: "VitalChek is one of several authorized online vendors. Others (State Vital Records, Vital Records Online, GoCertificates) charge similar fees.",
      vendorListUrl: "https://www.cdph.ca.gov/Programs/CHSI/Pages/Obtaining-Certified-Copies-Online.aspx",
    },
    mail: {
      address:
        "California Department of Public Health, Vital Records – MS 5103, P.O. Box 997410, Sacramento, CA 95899-7410",
      processingTime: "8–16 weeks typical",
      notes:
        "Include a completed VS 111 form, payment, and a copy of your ID.",
    },
    inPerson: {
      locations: "Sacramento office or select county recorder offices",
      processingTime: "Same day at county offices, if record is on file",
      notes:
        "Walk-in service available at some county recorder offices. Check your county's website.",
    },
    phone: {
      number: "(916) 445-2684",
      provider: "VitalChek",
      notes: "Phone orders processed through VitalChek with additional fee.",
    },
  },
  requirements: {
    primaryId: [
      "Valid California driver's license or ID card",
      "Valid US passport",
      "Valid military ID",
    ],
    secondaryId: [
      "Utility bill (within 3 months)",
      "Bank statement",
      "Vehicle registration",
      "Letter from a government agency",
      "School or work ID",
    ],
    eligibleRequestors: [
      "The person named on the certificate",
      "A parent or legal guardian listed on the certificate",
      "A party entitled to receive the record (spouse, domestic partner)",
      "An authorized agent or attorney",
    ],
    notes:
      "A notarized Sworn Statement (included in VS 111 form) is required. Must include a legible photocopy of your ID.",
    acceptableIdUrl: "https://www.cdph.ca.gov/Programs/CHSI/Pages/Vital-Records.aspx",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "Submit an affidavit signed by a homeless services provider certifying the applicant's homeless status. Use the CDPH homeless affidavit form.",
      citation: "California Health & Safety Code § 103526.5 (AB 1733)",
    },
    {
      eligibility: "Youth currently in foster care",
      howToClaim:
        "Request through the county child welfare agency or social worker.",
      citation: "California Health & Safety Code § 103526.7",
    },
  ],
  recordsAvailableFrom: 1905,
  applicationFormUrl:
    "https://www.cdph.ca.gov/Programs/CHSI/CDPH%20Document%20Library/VS111.pdf",
  applicationFormUrlEs:
    "https://www.cdph.ca.gov/CDPH%20Document%20Library/ControlledForms/VS111sp.pdf",
  specialNotes: [
    "California maintains records from July 1, 1905. For births before that date, contact the county recorder in the county of birth.",
    "Certified copies include a security watermark and are accepted for all legal purposes.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, you can submit a notarized Sworn Statement with two forms of secondary ID (utility bill, bank statement, etc.). A homeless services provider can also vouch for your identity using the CDPH affidavit form.",
  lastVerified: "2026-03-21",
};
