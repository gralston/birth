import { StateVitalRecords } from "@/types";

export const IA: StateVitalRecords = {
  stateCode: "IA",
  stateName: "Iowa",
  office: {
    name: "Iowa Department of Health and Human Services, Bureau of Health Statistics",
    address: "Lucas State Office Building, 1st Floor, 321 E. 12th Street, Des Moines, IA 50319-0075",
    phone: "(515) 281-4944",
    website: "https://hhs.iowa.gov/family-community/vital-records",
    hours: "Mon-Fri 7:00 AM - 4:30 PM CT (closed state holidays)",
  },
  fees: {
    certified: 15,
    additionalCopy: 15,
    paymentMethods: [
      "check",
      "money order",
      "credit card (in-person, online, or phone via VitalChek)",
      "debit card (in-person, online, or phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/iowa",
      provider: "vitalchek",
      additionalFee: 13.0,
      notes:
        "VitalChek is the authorized online ordering service for Iowa vital records. Credit or debit card required. Standard processing takes 2-4 weeks. Expedited shipping options are available for an additional fee.",
    },
    mail: {
      address:
        "Bureau of Health Statistics, Lucas State Office Building, 1st Floor, 321 E. 12th Street, Des Moines, IA 50319-0075",
      processingTime: "4 to 6 weeks",
      notes:
        "All mail applications must be notarized. Include a completed application form, a clear photocopy of your valid government-issued photo ID (front and back), and payment by check or money order payable to 'Iowa Department of Health and Human Services.' Cash is not accepted. Incomplete or un-notarized applications will be returned.",
    },
    inPerson: {
      locations:
        "Bureau of Health Statistics at Lucas State Office Building, 1st Floor, 321 E. 12th Street, Des Moines, IA. Also available at county recorder offices throughout Iowa (births from 1987 to present).",
      processingTime:
        "Same day at state office (requests received by 2:00 PM are typically processed within 2 hours); varies at county offices",
      notes:
        "Bring valid government-issued photo ID and completed application form. Walk-ins are accepted during business hours. County recorder offices maintain birth records from 1987 to present for births that occurred in that county. Not all county offices may have the same processing times — call ahead to confirm.",
      localOfficesUrl: "https://hhs.iowa.gov/vr-cr-portal",
    },
    phone: {
      number: "(877) 457-0361",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with an additional service fee starting at $9.00 per order. Credit or debit card required. Processing time is typically 10-14 days depending on seasonal demand. For general inquiries, call the Bureau of Health Statistics at (515) 281-4944.",
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
      "Insurance card or Medicaid/Medicare card",
      "Utility bill or bank statement (recent)",
      "School or employer ID with photo",
      "Voter registration card",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant, must be 18+)",
      "A parent listed on the birth certificate",
      "Spouse of the registrant",
      "Adult child of the registrant",
      "Grandparent or grandchild of the registrant",
      "Sibling of the registrant (with proof of relationship)",
      "Legal guardian (with certified court documentation)",
      "Legal representative or attorney (with documentation of authority)",
    ],
    notes:
      "Iowa vital records are restricted to entitled individuals. All applicants must satisfactorily prove entitlement to the record. A clear photocopy of valid government-issued photo ID must accompany all mail and fax requests. Legal guardians, legal representatives, and siblings must provide additional documentation proving their entitlement.",
    acceptableIdUrl:
      "https://hhs.iowa.gov/family-community/vital-records/how-request-certified-record",
  },
  feeWaivers: [
    {
      eligibility:
        "Parents whose birth expenses are reimbursed under the Iowa Medicaid program (chapter 249A) or who are indigent and unable to pay the expenses of the birth with no other means of payment available",
      howToClaim:
        "The registration fee and the fee for the first certified copy are automatically waived when the birth expenses are covered by Medicaid or when the parent demonstrates indigency. Contact the Bureau of Health Statistics for specific documentation requirements.",
      citation: "Iowa Code § 144.13A",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Federal, state, and local government agencies may obtain certified copies when the record is required for official government business. The request must be submitted on official agency letterhead.",
      citation: "Iowa Code § 144.46",
    },
  ],
  recordsAvailableFrom: 1880,
  applicationFormUrl: "https://hhs.iowa.gov/media/3054/download",
  specialNotes: [
    "Iowa statewide birth registration began on July 1, 1880, though records from the earliest years may be incomplete. For best results with older records, contact the Bureau of Health Statistics directly.",
    "All mail applications must be notarized. In-person applicants sign the form in front of office staff, so notarization is not required for walk-in requests.",
    "Each certified copy costs $15 regardless of whether additional copies are ordered at the same time.",
    "County recorder offices maintain birth records from 1987 to present for births occurring in that county. For births before 1987, contact the state office.",
    "Cash payments are not accepted at the state office. Payment must be by check, money order, or credit/debit card.",
    "VitalChek is the authorized online and phone ordering vendor for Iowa vital records. Beware of unofficial third-party websites that charge excessive fees.",
    "Genealogy requests may take up to 60 business days for processing regardless of the method of application.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, contact the Bureau of Health Statistics at (515) 281-4944 or email vitalrecords@hhs.iowa.gov to discuss alternative documentation options. An eligible family member who has valid photo ID can submit the request on your behalf with proof of their relationship to the registrant. For parents whose birth expenses were covered by Medicaid or who are indigent, the registration and first certified copy fees are waived under Iowa Code § 144.13A — contact the office for the process to claim this waiver without standard ID.",
  lastVerified: "2026-03-21",
};
