import { StateVitalRecords } from "@/types";

export const NY: StateVitalRecords = {
  stateCode: "NY",
  stateName: "New York",
  office: {
    name: "New York State Department of Health, Vital Records",
    address:
      "Vital Records Section, P.O. Box 2602, Albany, NY 12220-2602",
    phone: "(855) 322-1022",
    website:
      "https://www.health.ny.gov/vital_records/",
    hours: "Mon–Fri 8:30 AM – 4:30 PM ET",
  },
  fees: {
    certified: 30,
    additionalCopy: 30,
    paymentMethods: ["check", "money order", "credit card (online)"],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/new-york",
      provider: "vitalchek",
      fee: 45,
      additionalFee: 14,
      notes:
        "For births OUTSIDE of New York City. NYC births must be ordered through the NYC Office of Vital Records. Other authorized online vendors may also be available — check the NYS Vital Records website.",
    },
    mail: {
      address:
        "Vital Records Section, P.O. Box 2602, Albany, NY 12220-2602",
      processingTime: "6–8 weeks typical",
      notes:
        "Use form DOH-4380. Include payment and a copy of your photo ID.",
    },
    inPerson: {
      locations:
        "Depends on where you were born (not where you live now)",
      processingTime: "Same day to a few days",
      notes:
        "Born in NYC (Manhattan, Brooklyn, Queens, Bronx, Staten Island)? Go to the NYC Office of Vital Records: 125 Worth Street, Room 133, New York, NY 10013. Phone: (212) 788-4520. Fee: $15.\n\nBorn elsewhere in New York State? Contact the city or town clerk where you were born — they are the local registrar and can issue your birth certificate. The state office in Albany can also process requests for any NY birth.",
    },
  },
  requirements: {
    primaryId: [
      "Valid driver's license or state ID",
      "Valid US passport",
      "Valid military ID",
    ],
    secondaryId: [
      "Utility bill",
      "Bank statement",
      "Government correspondence",
      "School records",
    ],
    eligibleRequestors: [
      "The person named on the certificate",
      "A parent listed on the certificate",
      "A legal guardian",
      "An attorney or authorized representative",
      "A spouse or domestic partner",
    ],
    notes:
      "You must include a legible copy of your ID with all applications.",
    acceptableIdUrl: "https://www.health.ny.gov/vital_records/birth.htm",
  },
  feeWaivers: [
    {
      eligibility: "Free birth certificate for voter eligibility",
      howToClaim:
        "No fee when a birth certificate is required by a board of elections for determining voter eligibility.",
      citation: "NY Public Health Law § 4174",
      forReason: "voter-id",
    },
    {
      eligibility: "People receiving public assistance (indigency/homelessness)",
      howToClaim:
        "No fee for birth certificates to be used for 'purposes of public relief.' This covers individuals receiving Medicaid, SNAP, TANF, or experiencing homelessness. Contact your caseworker or a legal aid organization like the Coalition for the Homeless to request on this basis.",
      citation: "NY Public Health Law § 4174",
    },
    {
      eligibility: "Incarcerated individuals (re-entry)",
      howToClaim:
        "No fee when requested by the Department of Corrections and Community Supervision or a local correctional facility for an incarcerated individual in anticipation of release.",
      citation: "NY Public Health Law § 4174",
    },
    {
      eligibility: "School entrance or employment certificates",
      howToClaim:
        "No fee when the record is needed for school entrance or an employment certificate.",
      citation: "NY Public Health Law § 4174",
    },
    {
      eligibility: "Veterans (for VA purposes)",
      howToClaim:
        "Records for Veterans Administration purposes are provided at no charge.",
    },
  ],
  recordsAvailableFrom: 1880,
  applicationFormUrl: "https://www.health.ny.gov/forms/doh-4380.pdf",
  specialNotes: [
    "New York State and New York City have SEPARATE vital records offices — see the in-person option above for details.",
    "New York provides unrestricted access to original birth certificates for adult adoptees (since January 2020).",
  ],
  noIdWorkaround:
    "If you have no photo ID, contact the local registrar or NYS Vital Records at (855) 322-1022 to discuss alternative documentation. Legal aid organizations like the City Bar Justice Center's Vital Records Project can also assist.",
  lastVerified: "2026-03-21",
};
