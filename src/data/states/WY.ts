import { StateVitalRecords } from "@/types";

export const WY: StateVitalRecords = {
  stateCode: "WY",
  stateName: "Wyoming",
  office: {
    name: "Wyoming Department of Health, Vital Statistics Services",
    address: "2300 Capitol Avenue, Hathaway Building, Cheyenne, WY 82002",
    phone: "(307) 777-7591",
    website: "https://health.wyo.gov/admin/vitalstatistics/",
    hours:
      "Mon\u2013Thu 9:00 AM \u2013 4:00 PM MT; Fri by appointment only; closed state holidays",
  },
  fees: {
    certified: 25,
    additionalCopy: 25,
    paymentMethods: [
      "personal check (payable to Vital Statistics Services; must be bank-personalized)",
      "money order",
      "credit card (online orders via Wyoming VSS Portal; 2.4% convenience fee, $1 minimum)",
      "cash (in-person only; not recommended for mail)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://wyomingvitalrecords.wyo.gov/",
      provider: "state",
      additionalFee: 1,
      notes:
        "Wyoming operates its own online portal at wyomingvitalrecords.wyo.gov. Create a profile, select the certificate type, and complete all required fields. A 2.4% convenience fee ($1 minimum) is charged per order. Credit card required. Processing typically takes 3\u20135 business days after submission.",
    },
    mail: {
      address:
        "Vital Statistics Services, 2300 Capitol Avenue, Hathaway Building, Cheyenne, WY 82002",
      processingTime: "3\u20135 business days after receipt",
      notes:
        "Include a completed application form, a photocopy of valid government-issued photo ID bearing your permanent signature (IDs expired fewer than 60 days are accepted), payment by check or money order payable to \u2018Vital Statistics Services,\u2019 and a self-addressed stamped envelope. Checks must be bank-personalized and on the account of the person making the request. Incomplete applications will be returned. A notarized signature on the application may substitute for a photo ID copy.",
    },
    inPerson: {
      locations:
        "Vital Statistics Services, 2300 Capitol Avenue, Hathaway Building, Cheyenne, WY 82002. Wyoming birth certificates are only issued by the state office; county clerk offices do not maintain birth records.",
      processingTime: "Same day when the record is on file",
      notes:
        "Walk-in service is available during office hours (Mon\u2013Thu 9 AM\u20134 PM; Fri by appointment). Bring valid government-issued photo ID and payment. Cash, check, or money order accepted.",
    },
    phone: {
      number: "(307) 777-7591",
      provider: "State office",
      notes:
        "Call Vital Statistics Services to inquire about ordering by phone or to check the status of an existing request. Phone ordering availability may be limited; the state online portal is the preferred remote ordering method.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver\u2019s license or ID card with photo and signature",
      "Valid U.S. passport or passport card",
      "Valid U.S. military ID with photo",
      "Permanent Resident Card (Form I-551, Green Card)",
      "Tribal government-issued photo ID",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill or bank statement dated within 90 days",
      "Voter registration card",
      "School or employer ID with photo",
      "Insurance card or Medicaid/Medicare card",
      "Certified marriage certificate or divorce decree",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be of legal age)",
      "A parent listed on the birth certificate",
      "Legal guardian (with certified court documentation)",
      "An attorney representing the registrant, parent, or legal guardian",
      "An unemancipated minor with a signed parental affidavit",
      "General public (only for records more than 100 years old)",
    ],
    notes:
      "Wyoming is a closed-record state. Birth records are restricted for 100 years from the date of the event. Applicants must demonstrate entitlement by providing proof of identity and relationship. A photocopy of valid government-issued photo ID (with permanent signature) must accompany all mail requests; IDs expired fewer than 60 days are still accepted. After four (4) lifetime requests for certified copies of the same birth certificate, an additional Excessive Copies Form must be completed and notarized for each subsequent request.",
    acceptableIdUrl:
      "https://health.wyo.gov/admin/vitalstatistics/certificates/",
  },
  feeWaivers: [
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Federal, state, and local government agencies may obtain certified copies without charge when the record is required for official government business. The request must be submitted on official agency letterhead.",
      citation: "W.S. \u00A7 35-1-428",
    },
    {
      eligibility:
        "Homeless children, youth, or unaccompanied youth as defined under the federal McKinney-Vento Homeless Assistance Act",
      howToClaim:
        "A homeless services provider, school district homeless liaison, or government social services agency can submit a request on behalf of the individual certifying their homeless status. Contact Vital Statistics Services at (307) 777-7591 to coordinate.",
      citation:
        "42 U.S.C. \u00A7 11434a (McKinney-Vento Act); W.S. \u00A7 35-1-428",
    },
  ],
  recordsAvailableFrom: 1909,
  applicationFormUrl:
    "https://health.wyo.gov/admin/vitalstatistics/certificates/",
  specialNotes: [
    "Wyoming statewide birth registration began in July 1909. For births before 1909, records may be incomplete or unavailable \u2014 contact Vital Statistics Services for assistance. Records more than 100 years old are transferred to the Wyoming State Archives.",
    "Wyoming is a closed-record state: birth certificates are restricted to eligible requestors for 100 years from the date of birth. After 100 years, records become available to the general public through the Wyoming State Archives.",
    "Wyoming operates its own online ordering portal (wyomingvitalrecords.wyo.gov) rather than using VitalChek. A 2.4% credit card convenience fee ($1 minimum) applies to all online orders.",
    "After requesting four (4) or more lifetime certified copies of the same birth certificate, an additional Excessive Copies Form must be completed and notarized for each subsequent request.",
    "County clerk offices in Wyoming do not maintain birth or death records. All birth certificate requests must go through the state Vital Statistics Services office in Cheyenne.",
    "A notarized signature on the application form may be used in place of a photo ID copy for mail-in requests.",
    "Wyoming Vital Statistics Services can be reached by email at wdh.vss@wyo.gov or by fax at (307) 777-2483.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, you may have your signature notarized on the application form in lieu of providing a photo ID copy. Alternatively, an eligible family member (parent listed on the certificate, legal guardian, or attorney) who has valid photo ID can submit the request on your behalf. For individuals experiencing homelessness, a homeless services provider, school homeless liaison, or social services agency can request the certificate on your behalf with fees potentially waived under the McKinney-Vento Act. Contact Vital Statistics Services at (307) 777-7591 or wdh.vss@wyo.gov to discuss alternative identity verification options.",
  lastVerified: "2026-03-21",
};
