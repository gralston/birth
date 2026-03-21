import { StateVitalRecords } from "@/types";

export const NE: StateVitalRecords = {
  stateCode: "NE",
  stateName: "Nebraska",
  office: {
    name: "Nebraska Department of Health and Human Services, Office of Vital Records",
    address: "1033 O Street, Suite 130, Lincoln, NE 68508 (mailing: P.O. Box 95065, Lincoln, NE 68509-5065)",
    phone: "(402) 471-2871",
    website: "https://dhhs.ne.gov/pages/vital-records.aspx",
    hours: "Mon-Fri 8:00 AM - 5:00 PM CT (arrive by 4:45 PM for walk-ins; closed state holidays)",
  },
  fees: {
    certified: 17,
    additionalCopy: 17,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
      "debit card (online/phone via VitalChek)",
      "credit card (in-person: Visa, Mastercard)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://nevitalrecords-dhhs.ne.gov/",
      provider: "state",
      notes:
        "Nebraska offers direct online ordering through its own portal at nevitalrecords-dhhs.ne.gov. Expedited orders are also available through VitalChek at vitalchek.com or by calling 1-800-255-2414, with an additional service fee. Credit or debit card required for online orders.",
    },
    mail: {
      address:
        "Nebraska Vital Records, P.O. Box 95065, Lincoln, NE 68509-5065",
      processingTime: "2 to 5 weeks",
      notes:
        "Include a completed birth certificate application form, a clear photocopy of your valid government-issued photo ID (front and back), and a check or money order for $17.00 payable to 'Vital Records.' Credit cards are not accepted for mail orders. Faxed or emailed applications are not accepted. Incomplete applications will be returned and cause delays.",
    },
    inPerson: {
      locations:
        "Office of Vital Records at 1033 O Street, Suite 130, Lincoln, NE (Gold's Galleria building, 1st floor). Also available at the Douglas County Health Department, 1819 Farnam Street, Room 402, Omaha, NE 68183 (phone: 402-444-7205) and some other county clerk offices across Nebraska.",
      processingTime:
        "Same day at state office (if record is located); varies at local offices",
      notes:
        "Bring valid government-issued photo ID and payment. Walk-ins are accepted during business hours; arrive no later than 4:45 PM. Not all county clerk offices issue birth certificates — call ahead to confirm availability and accepted payment methods.",
    },
    phone: {
      number: "(800) 255-2414",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with an additional service fee. Credit or debit card required. For general inquiries about your application or records, call the Office of Vital Records directly at (402) 471-2871.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid U.S. passport or passport card",
      "U.S. military ID (active duty, reserve, or retired)",
      "Permanent Resident Card (Form I-551, Green Card)",
      "Certificate of Naturalization or Citizenship",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill or bank statement (recent)",
      "Insurance card or Medicaid/Medicare card",
      "School or employer ID with photo",
      "Voter registration card",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be 18+)",
      "A parent listed on the birth certificate",
      "Spouse of the registrant",
      "Adult child of the registrant",
      "Legal guardian (with certified court documentation)",
      "Legal representative or attorney (with power of attorney or court order)",
      "Any person who demonstrates a proper purpose as defined in 174 NAC 3",
    ],
    notes:
      "Nebraska requires applicants to demonstrate 'proper purpose' under 174 NAC 3 to obtain a certified copy. A clear photocopy of valid government-issued photo ID (front and back) must accompany all mail requests. If your name is not on the certificate, you must provide proof of your relationship to the registrant.",
    acceptableIdUrl: "https://dhhs.ne.gov/pages/vital-records.aspx",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals who do not have a current Nebraska driver's license or state identification card and need a birth certificate to obtain a state ID for voting purposes",
      howToClaim:
        "Indicate on the application that the purpose of the request is to obtain a state identification card for voting purposes and that you do not have a current Nebraska driver's license or state ID card. One certified copy is provided at no charge.",
      citation: "Neb. Rev. Stat. \u00A7 71-612(9)",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Federal, state, and local government agencies may obtain certified copies without charge when the record is required for official government business. The request must be submitted on official agency letterhead.",
      citation: "Neb. Rev. Stat. \u00A7 71-612",
    },
  ],
  recordsAvailableFrom: 1904,
  applicationFormUrl:
    "https://nevitalrecords-dhhs.ne.gov/Home/DownloadForm?formName=Birth.pdf",
  specialNotes: [
    "Nebraska statewide birth registration began in 1904, though early records may be incomplete. Compliance with statewide registration was generally achieved by 1920. For births before 1904, contact the county clerk in the county of birth, as some counties maintained earlier records.",
    "Each certified copy costs $17 regardless of whether additional copies are ordered at the same time.",
    "Faxed or emailed applications are not accepted by the state office.",
    "For Douglas County births, you may also request certificates from the Douglas County Health Department at 1819 Farnam Street, Room 402, Omaha, NE 68183 (phone: 402-444-7205).",
    "Nebraska requires all applicants to demonstrate 'proper purpose' under 174 NAC 3 before a certified copy is issued. This is broader than some states but still requires a legitimate reason for the request.",
    "VitalChek is the authorized phone ordering vendor for Nebraska vital records. Beware of unofficial third-party websites that charge excessive fees for the same service.",
    "If you were adopted, request using your adoptive name and note 'adopted' on the application.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, you may provide two forms of secondary identification containing your name (e.g., Social Security card plus a utility bill). An eligible family member who has valid photo ID can submit the request on your behalf with proof of their relationship to the registrant. If you need a birth certificate specifically to obtain a state ID for voting, the fee is waived under Neb. Rev. Stat. \u00A7 71-612(9) — indicate this purpose on the application. Contact the Office of Vital Records at (402) 471-2871 or email DHHS.VitalRecords@nebraska.gov for guidance on acceptable alternative documentation.",
  lastVerified: "2026-03-21",
};
