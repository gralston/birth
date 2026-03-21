import { StateVitalRecords } from "@/types";

export const NM: StateVitalRecords = {
  stateCode: "NM",
  stateName: "New Mexico",
  office: {
    name: "New Mexico Department of Health, Bureau of Vital Records and Health Statistics",
    address: "P.O. Box 26110, Santa Fe, NM 87502",
    phone: "(866) 534-0051",
    website: "https://www.nmhealth.org/about/erd/bvrhs/vrb/",
    hours:
      "Mon-Fri 8:00 AM - 5:00 PM MT (closed weekends and state holidays)",
  },
  fees: {
    certified: 10,
    additionalCopy: 10,
    paymentMethods: [
      "money order",
      "personal check",
      "cashier's check",
      "credit card (online and phone orders)",
      "debit card (online and phone orders)",
      "cash (in-person only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/new-mexico/new-mexico-vital-records",
      provider: "vitalchek",
      additionalFee: 12.50,
      notes:
        "VitalChek is the authorized online vendor for the New Mexico Bureau of Vital Records and Health Statistics. Standard processing takes 2-4 weeks. Expedited shipping options are available for an additional fee. Credit or debit card required.",
    },
    mail: {
      address:
        "Bureau of Vital Records and Health Statistics, P.O. Box 26110, Santa Fe, NM 87502",
      processingTime: "4-6 weeks",
      notes:
        "Include completed application form, payment by check or money order payable to 'Vital Records,' and a clear photocopy of the front and back of your valid government-issued photo ID. Incomplete applications will be returned.",
    },
    inPerson: {
      locations:
        "The state Bureau of Vital Records office at 1190 S. St. Francis Drive, Suite S-1092, Santa Fe, NM 87505. County clerk offices across all 33 counties also issue certified copies of birth certificates.",
      processingTime: "Same day at state office and most county clerk offices",
      notes:
        "Bring a valid government-issued photo ID, completed application form, and payment. At the state office, walk-in requests are accepted during business hours. County clerk offices may have different hours and fees. Call ahead to confirm availability.",
      localOfficesUrl:
        "https://www.nmhealth.org/about/erd/bvrhs/vrb/",
    },
    phone: {
      number: "(877) 284-0942",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with additional service fees. Credit or debit card required. The state office phone (866) 534-0051 is for information only, not ordering.",
    },
  },
  requirements: {
    primaryId: [
      "Valid U.S. driver's license or state ID card",
      "U.S. passport or passport card",
      "U.S. military ID (active duty, reserve, or retired)",
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
      "Notarized affidavit of identity (accepted in lieu of photo ID)",
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
      "New Mexico requires proof of identity and proof of eligibility for all birth certificate requests. For mail requests, include a photocopy of the front and back of a valid government-issued photo ID. For in-person requests, present the original ID. If the requestor is not the registrant, documentation proving the relationship (e.g., court order, marriage certificate, or birth certificate showing parentage) must also be provided.",
    acceptableIdUrl:
      "https://www.nmhealth.org/about/erd/bvrhs/vrb/birth/",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals who need a birth certificate for voter registration or voting purposes",
      howToClaim:
        "Request a fee waiver by indicating that the birth certificate is needed for voter identification purposes. Under the New Mexico Election Code, individuals who need a birth certificate to obtain identification for voting may request a fee-free copy from the Bureau of Vital Records.",
      citation: "NMSA 1978, Section 1-1-24",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "State and local government agencies may obtain certified copies without charge when the record is needed for official governmental business.",
      citation: "NMSA 1978, Section 24-14-27",
    },
    {
      eligibility:
        "Individuals experiencing homelessness who need identity documents",
      howToClaim:
        "Request assistance through a homeless services provider or social services agency. The New Mexico Human Services Department or a partnering organization may cover the fee or request a waiver on behalf of the individual.",
      citation: "NMSA 1978, Section 24-14-27",
    },
    {
      eligibility:
        "Veterans requesting records for VA purposes",
      howToClaim:
        "Records requested for Veterans Administration purposes are provided at no charge per federal requirements. Submit the request through the VA or include documentation of the VA-related purpose.",
    },
    {
      eligibility:
        "Victims of domestic violence who need identity documents for safety planning",
      howToClaim:
        "A domestic violence services organization or law enforcement agency may assist in obtaining a fee waiver. Contact the New Mexico Coalition Against Domestic Violence or a local shelter for assistance.",
    },
  ],
  recordsAvailableFrom: 1920,
  applicationFormUrl:
    "https://www.nmhealth.org/publication/view/form/558/",
  specialNotes: [
    "Statewide birth registration in New Mexico began in 1920, though compliance was not universal until the late 1930s. For births before 1920, contact the county clerk in the county of birth, as some counties maintained earlier records. Church and baptismal records may also serve as evidence of birth.",
    "New Mexico allows birth certificate amendments for gender marker changes. A court order is required for legal name and gender changes on a birth certificate. Applications are processed through the Bureau of Vital Records.",
    "The Navajo Nation and Pueblo communities in New Mexico may have separate birth registration records. Births occurring on tribal land are registered with the state, but tribal enrollment offices (such as the Navajo Nation Office of Vital Records and Identification in Window Rock, AZ) may also have relevant records.",
    "New Mexico issues both short-form (certification of birth) and long-form (certified copy of the full birth certificate) documents. Many agencies require the long-form version, so request a 'certified copy' to receive the complete document.",
    "County clerk offices in all 33 counties can issue certified copies of birth certificates that occurred in their county. Fees at county offices may differ from the state office fee. Contact the county clerk directly for current fees and hours.",
    "For births that were never registered, New Mexico allows delayed birth registration. A petition must be filed with the district court, supported by documentary evidence of the birth (e.g., baptismal records, hospital records, census records, school records). See NMSA 1978, Section 24-14-15.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, you may submit a notarized affidavit of identity with your application. This requires a notary public to verify your identity through personal knowledge or other means. Alternatively, an eligible family member who has valid photo ID can submit the request on your behalf with proof of their relationship to the registrant (e.g., their own birth certificate, marriage certificate, or court order). For individuals experiencing homelessness, contact the New Mexico Human Services Department or a local homeless services provider, which may request the certificate on your behalf. Government agencies and social services organizations may also request records for official purposes under NMSA 1978, Section 24-14-27.",
  lastVerified: "2026-03-21",
};
