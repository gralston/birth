import { StateVitalRecords } from "@/types";

export const CO: StateVitalRecords = {
  stateCode: "CO",
  stateName: "Colorado",
  office: {
    name: "Colorado Department of Public Health and Environment, Vital Records Section",
    address: "4300 Cherry Creek Drive South, Denver, CO 80246",
    phone: "(303) 692-2200",
    website: "https://cdphe.colorado.gov/vitalrecords",
    hours:
      "Mon–Fri 8:00 AM – 5:00 PM MT (closed weekends and state holidays)",
  },
  fees: {
    certified: 20,
    additionalCopy: 13,
    paymentMethods: [
      "money order",
      "personal check",
      "cashier's check",
      "credit card (online and phone orders)",
      "debit card (online and phone orders)",
      "cash (in-person at county offices only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/colorado/colorado-vital-records-section",
      provider: "vitalchek",
      additionalFee: 11.75,
      notes:
        "VitalChek is the authorized online vendor for the Colorado Vital Records Section. Standard processing takes 2–4 weeks. Expedited shipping options are available for an additional fee. Credit/debit card required.",
    },
    mail: {
      address:
        "Vital Records Section, CDPHE-HSVR-A1, 4300 Cherry Creek Drive South, Denver, CO 80246",
      processingTime: "3–6 weeks",
      notes:
        "Include completed application form, payment by check or money order payable to 'Vital Records Section,' and a clear photocopy of the front and back of your valid government-issued photo ID. Applications with incomplete information or missing ID copies will be delayed or returned.",
    },
    inPerson: {
      locations:
        "The state Vital Records office in Denver (4300 Cherry Creek Drive South) and local county public health department offices across all 64 counties.",
      processingTime: "Same day at most county offices; 5–10 business days at the state office",
      notes:
        "For same-day service, visit a local county public health department office. Bring valid photo ID, payment, and the completed application form. Not all county offices issue birth certificates — call ahead to confirm. The state office in Denver accepts walk-in requests but may not provide same-day issuance.",
      localOfficesUrl:
        "https://cdphe.colorado.gov/find-your-local-public-health-agency",
    },
    phone: {
      number: "(877) 457-0361",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with additional service fees. Credit or debit card required. The state office phone (303) 692-2200 is for information only, not ordering.",
    },
  },
  requirements: {
    primaryId: [
      "Valid U.S. driver's license or state ID card",
      "U.S. passport or passport card",
      "U.S. military ID (active, reserve, or retired)",
      "Permanent Resident Card (Form I-551, Green Card)",
      "Foreign passport with valid U.S. visa",
      "Tribal enrollment card with photo",
      "Certificate of Naturalization or Citizenship (Form N-550 or N-560)",
    ],
    secondaryId: [
      "Social Security card",
      "Certified marriage certificate or divorce decree",
      "Utility bill, bank statement, or government mail dated within 90 days",
      "School or employer ID with photo",
      "Insurance card or Medicare/Medicaid card",
      "Notarized signature on application (accepted in lieu of photo ID for mail requests)",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be 18+)",
      "A parent listed on the certificate",
      "Legal guardian (with certified court order)",
      "Legal representative or attorney (with documentation of authority)",
      "Spouse of the registrant (with proof of marriage)",
      "Adult child of the registrant (18+, with proof of relationship)",
      "Adult grandchild of the registrant (18+, with proof of relationship)",
      "Adult sibling of the registrant (18+, with proof of common parentage)",
      "Government agency representative (for official purposes)",
    ],
    notes:
      "Applicants must provide a clear photocopy of the front and back of a valid government-issued photo ID for mail requests. For in-person requests, present the original ID. If you do not have a primary photo ID, you may provide two forms of secondary identification, or have your signature notarized on the application.",
    acceptableIdUrl:
      "https://cdphe.colorado.gov/order-certificate-now",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals experiencing homelessness who need a birth certificate for identification purposes",
      howToClaim:
        "Request through a homeless services provider or government agency that can submit the request on your behalf. County departments of human/social services may cover the fee or request a waiver when the certificate is needed for benefits enrollment.",
      citation: "CRS § 25-2-117(2)(b)",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "State and local registrars may provide copies without charge to federal, state, and local government agencies when the record is needed for official business.",
      citation: "CRS § 25-2-117(2)(a)",
    },
    {
      eligibility:
        "Victims of domestic violence or sexual assault who need identity documents",
      howToClaim:
        "A victim services organization or law enforcement agency may request a fee waiver on behalf of the individual. Provide documentation from the assisting agency.",
      citation: "CRS § 25-2-117(2)(b)",
    },
    {
      eligibility:
        "Individuals in the custody of the Colorado Department of Corrections",
      howToClaim:
        "CDOC may request records on behalf of incarcerated individuals preparing for reentry. The request is made through the facility's records or social services department.",
      citation: "CRS § 25-2-117(2)(a)",
    },
    {
      eligibility:
        "Youth aging out of foster care",
      howToClaim:
        "County departments of human services may request birth certificates at no charge for youth in foster care or aging out of the system who need identity documents.",
      citation: "CRS § 25-2-117(2)(a)",
    },
  ],
  recordsAvailableFrom: 1910,
  applicationFormUrl:
    "https://cdphe.colorado.gov/order-certificate-now",
  applicationFormUrlEs:
    "https://cdphe.colorado.gov/vitalrecords",
  specialNotes: [
    "Statewide birth registration in Colorado began in 1910 and was generally complied with by the 1940s. For births before 1910, contact the county clerk and recorder in the county of birth, as some counties maintained earlier records.",
    "Colorado allows birth certificate amendments for gender marker changes without requiring surgery, per CRS § 25-2-115(4). A court order or a signed statement from a licensed healthcare provider is required.",
    "An 'heirloom' commemorative birth certificate is available for births occurring in Colorado. It features artwork and is suitable for display but may not be accepted for all legal purposes.",
    "Colorado issues both short-form (abstract/certification) and long-form (full certified copy) birth certificates. Some agencies require the long-form version, so request a 'certified copy' to receive the full document.",
    "County offices may charge fees that differ from the state office fee schedule per local ordinance. Call the county office to confirm their current fees before visiting.",
    "The $13 additional copy fee applies only to additional copies ordered at the same time as the first copy in the same order.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, you may have your signature on the application notarized by a public notary to satisfy the identity verification requirement. Alternatively, you may provide two forms of secondary identification (e.g., Social Security card plus a utility bill). An eligible family member who has valid photo ID can also submit the request on your behalf with proof of their relationship to the registrant. For individuals experiencing homelessness, a homeless services provider or county department of human services may assist in obtaining the certificate and may request a fee waiver under CRS § 25-2-117(2)(b).",
  lastVerified: "2026-03-21",
};
