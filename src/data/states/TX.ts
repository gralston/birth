import { StateVitalRecords } from "@/types";

export const TX: StateVitalRecords = {
  stateCode: "TX",
  stateName: "Texas",
  office: {
    name: "Texas Department of State Health Services, Vital Statistics",
    address: "P.O. Box 12040, Austin, TX 78711-2040",
    phone: "(888) 963-7111",
    website: "https://www.dshs.texas.gov/vital-statistics",
    hours: "Mon–Fri 8:00 AM – 5:00 PM CT",
  },
  fees: {
    certified: 22,
    additionalCopy: 22,
    expedited: 10,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online)",
      "debit card (online)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://ovra.txapps.texas.gov/",
      provider: "state",
      notes:
        "Texas has its own online ordering portal (OVRA). No VitalChek surcharge when ordering directly.",
    },
    mail: {
      address:
        "Vital Statistics, P.O. Box 12040, Austin, TX 78711-2040",
      processingTime: "4–6 weeks typical",
      notes:
        "Include completed application, payment, and a copy of a valid government-issued photo ID.",
    },
    inPerson: {
      locations:
        "County clerk offices throughout Texas can issue birth certificates for births registered in their county",
      processingTime: "Same day in most cases",
      notes:
        "Contact your county clerk's office to verify they can issue your certificate.",
    },
    phone: {
      number: "(888) 963-7111",
      notes: "For ordering assistance; online or mail ordering recommended.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Texas driver's license or ID card",
      "Valid US passport",
      "Valid military ID",
      "Concealed handgun license",
    ],
    secondaryId: [
      "Utility bill (recent)",
      "Bank statement",
      "Government letter",
      "Vehicle registration or title",
      "School records",
    ],
    eligibleRequestors: [
      "The person named on the certificate (if 18+)",
      "A parent listed on the certificate",
      "A legal guardian with court documentation",
      "An attorney or authorized representative",
    ],
    notes:
      "A copy of a valid government-issued photo ID is required with all applications.",
    acceptableIdUrl: "https://www.dshs.texas.gov/vital-statistics/acceptable-identification-id",
  },
  feeWaivers: [
    {
      eligibility: "Free birth certificate for Election ID",
      howToClaim:
        "Texas provides a free birth certificate marked 'For Election Identification Purposes Only' to obtain an Election Identification Certificate (EIC). You must apply in person at a local registrar, county clerk, or the Vital Statistics office in Austin. Can only be issued once per lifetime.",
      forReason: "voter-id",
    },
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "A homeless shelter or service provider can request fee waiver on your behalf.",
    },
    {
      eligibility: "Youth in foster care",
      howToClaim:
        "Fee-exempt when requested by the Department of Family and Protective Services.",
    },
    {
      eligibility: "Victims of family or dating violence",
      howToClaim:
        "Contact DSHS for information on fee waiver for DV victims.",
    },
    {
      eligibility: "Veterans (for VA purposes)",
      howToClaim:
        "Records for Veterans Administration purposes are provided at no charge (federal requirement).",
    },
  ],
  recordsAvailableFrom: 1903,
  applicationFormUrl:
    "https://www.dshs.texas.gov/sites/default/files/vs/doc/Texas-Birth-Certificate-Application.pdf",
  applicationFormUrlEs:
    "https://www.dshs.texas.gov/sites/default/files/vs/doc/Texas-Birth-Certificate-Application-sp.pdf",
  specialNotes: [
    "Texas county clerks can issue birth certificates for births in their county — this is often the fastest option.",
    "For births before 1903, contact the county clerk in the county of birth.",
    "Texas accepts a certified birth certificate as a supporting document for voters who face a 'reasonable impediment' to obtaining photo ID.",
  ],
  noIdWorkaround:
    "If you have no photo ID, Texas allows a 'reasonable impediment' declaration for voting purposes. For obtaining the birth certificate itself, contact DSHS at (888) 963-7111 to discuss alternative verification options. A homeless services provider may also be able to assist.",
  lastVerified: "2026-03-21",
};
