import { StateVitalRecords } from "@/types";

export const ID_: StateVitalRecords = {
  stateCode: "ID",
  stateName: "Idaho",
  office: {
    name: "Idaho Bureau of Vital Records and Health Statistics",
    address: "450 West State Street, 1st Floor, Boise, ID 83702",
    phone: "(208) 334-5988",
    website:
      "https://healthandwelfare.idaho.gov/services-programs/birth-marriage-death-records",
    hours:
      "Mon–Fri 8:00 AM – 5:00 PM MT (closed weekends and state holidays)",
  },
  fees: {
    certified: 16,
    additionalCopy: 16,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
      "debit card (online/phone via VitalChek)",
      "cash (in-person at county offices only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/idaho/idaho-bureau-of-vital-records",
      provider: "vitalchek",
      additionalFee: 13.25,
      notes:
        "VitalChek is the only authorized online vendor for Idaho vital records. The state fee of $16 applies plus VitalChek's processing fee. Credit or debit card required. Standard processing takes 2–4 weeks; expedited shipping options are available for an additional fee.",
    },
    mail: {
      address:
        "Bureau of Vital Records and Health Statistics, P.O. Box 83720, Boise, ID 83720-0036",
      processingTime: "4–6 weeks",
      notes:
        "Include completed application form, payment by check or money order payable to 'Idaho Vital Records,' and a clear photocopy of a valid government-issued photo ID. Incomplete applications or missing ID copies will cause delays. Do not send cash.",
    },
    inPerson: {
      locations:
        "Idaho Bureau of Vital Records, 450 West State Street, 1st Floor, Boise, ID. Also available at local health district offices throughout Idaho.",
      processingTime:
        "Same day at the Boise office (if records are on file); varies at local health district offices",
      notes:
        "Bring a valid government-issued photo ID, completed application form, and payment. Local health district offices can process requests but availability and wait times vary — call ahead to confirm. The Boise office accepts walk-in requests during business hours.",
      localOfficesUrl:
        "https://healthandwelfare.idaho.gov/health-wellness/community-health/public-health-districts",
    },
    phone: {
      number: "1-800-241-8322",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with the same fees as online ordering (state fee plus VitalChek processing fee). Credit or debit card required. The state office phone (208) 334-5988 is for information and status inquiries only.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid U.S. passport or passport card",
      "Valid U.S. military ID",
      "Permanent Resident Card (Form I-551, Green Card)",
      "Tribal enrollment card with photo",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill or bank statement (dated within 90 days)",
      "Insurance card or Medicare/Medicaid card",
      "School or employer ID with photo",
      "Vehicle registration",
      "Certified marriage certificate or divorce decree",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be 18+)",
      "A parent listed on the birth certificate",
      "Legal guardian (with certified court order)",
      "Spouse of the registrant (with proof of marriage)",
      "Adult child of the registrant (18+)",
      "Legal representative or attorney (with documentation of authority)",
      "Government agency representative (for official purposes)",
    ],
    notes:
      "Idaho restricts access to birth records less than 100 years old to the registrant, parents, legal guardians, and other eligible applicants as defined by Idaho Code § 39-270. A photocopy of valid government-issued photo ID is required for all mail requests. For in-person requests, present the original ID.",
    acceptableIdUrl:
      "https://healthandwelfare.idaho.gov/services-programs/birth-marriage-death-records/order-record",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals experiencing homelessness who need a birth certificate for identification purposes",
      howToClaim:
        "A verified homeless services provider, shelter, or government social services agency may request a fee waiver on behalf of the individual. Contact the Bureau of Vital Records at (208) 334-5988 to coordinate the request.",
      citation: "Idaho Code § 39-270",
    },
    {
      eligibility:
        "Youth in foster care or aging out of the foster care system",
      howToClaim:
        "The Idaho Department of Health and Welfare child welfare caseworker may request a birth certificate on behalf of youth in foster care at no charge. Youth aging out of care should contact their caseworker or the Idaho Independent Living program for assistance.",
      citation: "Idaho Code § 16-1626",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Federal, state, and local government agencies may obtain certified copies without charge when needed for official business by submitting a request on official letterhead.",
      citation: "Idaho Code § 39-270(3)",
    },
  ],
  recordsAvailableFrom: 1911,
  applicationFormUrl:
    "https://healthandwelfare.idaho.gov/services-programs/birth-marriage-death-records/order-record",
  specialNotes: [
    "Idaho statewide birth registration began in 1911. For births before 1911, contact the county recorder in the county of birth, as some counties maintained earlier records.",
    "VitalChek is the only authorized third-party vendor for online and phone orders in Idaho.",
    "Idaho issues certified copies of birth certificates; short-form abstracts are not available. The certified copy includes all information from the original record.",
    "Idaho allows amendments to birth certificates for gender marker changes. A court order is required per Idaho Code § 39-250.",
    "Payment by check or money order for mail orders must be payable to 'Idaho Vital Records.' Personal checks are accepted but may delay processing until cleared.",
    "Birth records 100 years old or older are considered public records and may be requested by anyone without eligibility restrictions.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, you may provide two forms of secondary identification (e.g., Social Security card plus a utility bill dated within 90 days). An eligible family member who has valid photo ID can also submit the request on your behalf. For individuals experiencing homelessness, a homeless services provider or government social services agency may assist in obtaining the certificate and may request a fee waiver. You may also contact the Bureau of Vital Records at (208) 334-5988 for guidance on alternative identity verification options.",
  lastVerified: "2026-03-21",
};
