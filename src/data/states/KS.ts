import { StateVitalRecords } from "@/types";

export const KS: StateVitalRecords = {
  stateCode: "KS",
  stateName: "Kansas",
  office: {
    name: "Kansas Department of Health and Environment, Office of Vital Statistics",
    address: "1000 SW Jackson Street, Suite 120, Topeka, KS 66612",
    phone: "(785) 296-1400",
    website: "https://www.kdheks.gov/vital/",
    hours: "Mon-Fri 8:00 AM - 5:00 PM CT (closed state holidays)",
  },
  fees: {
    certified: 15,
    additionalCopy: 15,
    paymentMethods: [
      "personal check",
      "money order",
      "cashier's check",
      "credit card (online/phone via VitalChek)",
      "debit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/kansas",
      provider: "vitalchek",
      additionalFee: 11.75,
      notes:
        "VitalChek is the only authorized online ordering service for Kansas vital records. Credit or debit card required. Standard processing takes 2-4 weeks. Expedited shipping is available for an additional fee.",
    },
    mail: {
      address:
        "Office of Vital Statistics, 1000 SW Jackson Street, Suite 120, Topeka, KS 66612",
      processingTime: "4 to 6 weeks",
      notes:
        "Include completed VS 230 application form, a clear photocopy of your valid photo ID (front and back), and payment by check or money order payable to 'Office of Vital Statistics.' Incomplete applications will be returned and cause delays.",
    },
    inPerson: {
      locations:
        "Office of Vital Statistics at 1000 SW Jackson Street, Suite 120, Topeka, KS. Also available at some local county health departments and district courts across Kansas.",
      processingTime:
        "Same day at state office (if record is located); varies at local offices",
      notes:
        "Bring valid photo ID and completed application form. Walk-ins are accepted at the state office during business hours. Not all local offices issue birth certificates — call ahead to confirm availability and fees.",
    },
    phone: {
      number: "(877) 457-0361",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with additional service fees. Credit or debit card required. For general inquiries, call the Office of Vital Statistics at (785) 296-1400.",
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
      "Utility bill or bank statement dated within 90 days",
      "Insurance card or Medicaid/Medicare card",
      "School or employer ID with photo",
      "Voter registration card",
      "Certified marriage certificate or divorce decree",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be 18+)",
      "A parent listed on the certificate",
      "Legal guardian (with certified court documentation)",
      "Legal representative or attorney (with documentation of authority)",
      "Spouse of the registrant (with proof of marriage)",
      "Adult child or grandchild of the registrant (with proof of relationship)",
      "Government agency representative (for official purposes)",
    ],
    notes:
      "Kansas vital records are restricted records. Applicants must demonstrate a direct and tangible interest in the record. A clear photocopy of valid photo ID (front and back) must accompany all mail requests.",
    acceptableIdUrl: "https://www.kdheks.gov/vital/birth_info.html",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless children, youth, or unaccompanied youth as defined under the federal McKinney-Vento Homeless Assistance Act (42 U.S.C. 11434a)",
      howToClaim:
        "A homeless services provider, school district homeless liaison, or government agency may submit a request on behalf of the individual certifying their homeless status. One certified copy is provided at no charge.",
      citation: "K.S.A. 65-2418(a)(4)",
    },
    {
      eligibility:
        "Victims of domestic violence, sexual assault, human trafficking, or stalking who need identity documents",
      howToClaim:
        "Provide documentation from a victim services organization, law enforcement agency, or legal services provider verifying victim status. Submit with the application to the Office of Vital Statistics. One fee-exempt certified copy per request.",
      citation: "K.S.A. 65-2418(a)(4)",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Federal, state, and local government agencies may obtain certified copies without charge when the record is required for official government business. The request must be submitted on official agency letterhead.",
      citation: "K.S.A. 65-2418(a)(1)",
    },
  ],
  recordsAvailableFrom: 1911,
  applicationFormUrl:
    "https://www.kdheks.gov/vital/download/birth_application.pdf",
  specialNotes: [
    "Kansas statewide birth registration began on July 1, 1911. For births before 1911, contact the county clerk in the county of birth, as some counties maintained earlier records.",
    "Each certified copy costs $15 regardless of whether additional copies are ordered at the same time.",
    "Kansas allows amendments to birth certificates for gender marker changes. A court order or affidavit from a licensed physician or psychologist may be required depending on the type of amendment.",
    "Kansas law restricts who may obtain a certified birth certificate. The applicant must have a direct and tangible interest in the record per K.S.A. 65-2422d.",
    "VitalChek is the only authorized online/phone vendor for Kansas vital records. Beware of unofficial third-party websites that charge excessive fees for the same service.",
    "District courts in the county of birth may also have birth records and can issue certified copies in some cases. Contact the district court clerk for availability.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, you may provide two forms of secondary identification containing your name (e.g., Social Security card plus a utility bill). An eligible family member who has valid photo ID can submit the request on your behalf with proof of their relationship to the registrant. VitalChek may also verify identity through electronic records without requiring physical ID. For individuals experiencing homelessness, a homeless services provider or school liaison can submit the request on your behalf and the fee will be waived under K.S.A. 65-2418(a)(4). Contact the Office of Vital Statistics at (785) 296-1400 for guidance.",
  lastVerified: "2026-03-21",
};
