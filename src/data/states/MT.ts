import { StateVitalRecords } from "@/types";

export const MT: StateVitalRecords = {
  stateCode: "MT",
  stateName: "Montana",
  office: {
    name: "Montana Department of Public Health and Human Services, Office of Vital Records",
    address: "111 N Sanders, Room 6, PO Box 4210, Helena, MT 59604-4210",
    phone: "(406) 444-2685",
    website: "https://dphhs.mt.gov/vitalrecords/",
    hours:
      "Mon\u2013Thu 8:00 AM \u2013 4:30 PM, Fri 8:00 AM \u2013 4:00 PM (closed Fri 10:30 AM \u2013 12:00 PM); closed state holidays",
  },
  fees: {
    certified: 16,
    additionalCopy: 16,
    paymentMethods: [
      "personal check (payable to Montana DPHHS)",
      "money order",
      "credit card (online and phone orders via VitalChek)",
      "debit card (online and phone orders via VitalChek)",
      "cash (in-person only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/montana/montana-vital-recordshs",
      provider: "vitalchek",
      additionalFee: 14.0,
      notes:
        "VitalChek is the only authorized online ordering service for Montana vital records. An additional service fee applies on top of the state fee. Credit or debit card required. Standard processing typically takes 2\u20134 weeks; expedited shipping is available for an additional cost.",
    },
    mail: {
      address:
        "Office of Vital Records, PO Box 4210, Helena, MT 59604-4210",
      processingTime: "2\u20134 weeks",
      notes:
        "Include a completed Birth Certificate Application form, an enlarged legible photocopy of both sides of your valid driver\u2019s license or other government-issued photo ID with signature, and a check or money order payable to \u2018Montana DPHHS.\u2019 If you do not have a photo ID with a signature, the application must be notarized, or you must provide two alternative forms of identification (one must have your signature). All fees are non-refundable.",
    },
    inPerson: {
      locations:
        "Office of Vital Records, 111 N Sanders, Room 6, Helena, MT. Any County Clerk and Recorder\u2019s office statewide can also issue birth certificates for events that occurred in Montana.",
      processingTime:
        "Same day at the Helena office when the record is on file; processing times vary at county offices",
      notes:
        "Bring valid government-issued photo ID with signature and payment. You will fill out the application in person. County Clerk and Recorder offices may have different hours and fees \u2014 call ahead to confirm.",
    },
    phone: {
      number: "(888) 877-1946",
      provider: "VitalChek",
      notes:
        "VitalChek service fee applies in addition to the state fee. Credit or debit card required. Available 24/7. For general inquiries or to check order status, call the Office of Vital Records directly at (406) 444-2685 or email HHSVitalRecords@mt.gov.",
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
      "Signed Social Security card",
      "Signed debit, credit, or ATM card",
      "Signed fishing license",
      "Signed traffic citation",
      "Copy of car registration or insurance",
      "Doctor or medical record",
      "Utility bill with current address",
      "Voter registration card",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate)",
      "A parent listed on the certificate",
      "Legal guardian with certified court documentation",
      "Spouse of the registrant (with proof of marriage such as a marriage license)",
      "Grandparent of the registrant (with proof of relationship)",
      "Adult child of the registrant (with proof of relationship)",
      "An authorized legal representative with court order or power of attorney",
    ],
    notes:
      "An enlarged, legible photocopy of both sides of your photo ID with signature must accompany all mail requests. If you do not have a photo ID with a signature, you must either have the application notarized or provide two alternative forms of identification (one must include a signature). Eligible family members requesting on behalf of the registrant must provide proof of relationship (e.g., their own birth certificate or marriage license).",
    acceptableIdUrl:
      "https://dphhs.mt.gov/assets/Statistics/VitalStats/suggestedidentification.pdf",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals experiencing homelessness, including unaccompanied youth, as defined under the federal McKinney-Vento Homeless Assistance Act",
      howToClaim:
        "Montana\u2019s Office of Vital Records has a voluntary policy to waive the fee and reduce ID requirements for individuals experiencing homelessness. A letter from a homeless services provider, shelter, school homeless liaison, or social services agency certifying the applicant\u2019s homeless status can be submitted in lieu of standard identification. Only one form of ID is required instead of the standard requirements. Contact the Office of Vital Records at (406) 444-2685 for assistance.",
      citation:
        "42 U.S.C. \u00a7 11434a (McKinney-Vento Homeless Assistance Act); DPHHS voluntary policy",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Federal, state, and local government agencies may obtain certified copies without charge when the record is required for official government business. The request must be submitted on official agency letterhead.",
      citation: "MCA \u00a7 50-15-121",
    },
  ],
  recordsAvailableFrom: 1907,
  applicationFormUrl:
    "https://dphhs.mt.gov/assets/Statistics/VitalStats/BirthCertificateApplication.pdf",
  specialNotes: [
    "Montana began statewide registration of births and deaths in 1907. Records before 1907 are filed with the County Clerk in the county where the birth occurred. Mandatory registration was not consistently enforced until about 1915, so early records may be incomplete.",
    "Effective September 21, 2024, the fee for each certified copy of a birth certificate is $16. Each copy ordered is charged at the same rate; there is no discount for additional copies in the same order.",
    "Montana does not accept credit cards directly at the state Office of Vital Records. For credit or debit card payments, you must use VitalChek online or by phone, which charges an additional service fee.",
    "County Clerk and Recorder offices across Montana can also issue birth certificates. Fees and processing times may vary by county. Contact the local office for details.",
    "Montana allows corrections to birth certificates. Corrections within the first year of birth are free; after the first year, a $41 fee applies.",
    "Delayed birth certificates for births not registered at the time of occurrence can be filed with the Office of Vital Records with supporting documentation such as hospital records, census records, or affidavits.",
    "VitalChek is the only authorized online and phone vendor for Montana vital records. Beware of unofficial third-party websites that charge excessive fees for the same service.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent, grandparent, spouse, or adult child) who has valid photo ID request the certificate on your behalf with proof of their relationship to the registrant. Alternatively, if you do not have a photo ID with a signature, you may provide two alternative forms of identification (one must include a signature), such as a signed Social Security card plus a utility bill with your current address. You may also have your application notarized instead of providing a photo ID. If you are experiencing homelessness, contact the Office of Vital Records at (406) 444-2685 \u2014 Montana has a voluntary policy to accept a letter from a homeless services provider or shelter as identification and to waive the fee.",
  lastVerified: "2026-03-21",
};
