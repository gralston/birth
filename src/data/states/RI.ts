import { StateVitalRecords } from "@/types";

export const RI: StateVitalRecords = {
  stateCode: "RI",
  stateName: "Rhode Island",
  office: {
    name: "Center for Vital Records, Rhode Island Department of Health",
    address: "Simpson Hall, 6 Harrington Road, Cranston, RI 02920",
    phone: "(401) 222-2811",
    website: "https://health.ri.gov/vital-records",
    hours: "Mon\u2013Fri 7:30 AM \u2013 3:30 PM ET (closed state holidays)",
  },
  fees: {
    certified: 22,
    additionalCopy: 18,
    expedited: 7,
    paymentMethods: [
      "cash (in-person only)",
      "check (payable to 'General Treasurer, State of Rhode Island')",
      "money order",
      "debit card",
      "Visa",
      "Mastercard",
      "Discover",
      "Apple Pay (in-person only)",
      "Samsung Pay (in-person only)",
      "contactless tap payments (in-person only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/rhode-island/rhode-island-dept-of-health",
      provider: "vitalchek",
      additionalFee: 14.25,
      notes:
        "VitalChek is the state-authorized online vendor. Birth certificates are available for events that occurred in Rhode Island within the current year and 100 years prior. Credit/debit card required. Additional VitalChek processing and shipping fees apply beyond the state certificate fee.",
    },
    mail: {
      address:
        "Center for Vital Records, Simpson Hall, 6 Harrington Road, Cranston, RI 02920",
      processingTime: "4\u20136 weeks (5\u20137 business days for rush orders with additional $7 fee)",
      fee: 25,
      notes:
        "Include completed birth certificate application form, photocopy of government-issued photo ID, and check or money order payable to 'General Treasurer, State of Rhode Island.' A drop box is also available at the same location. Do not send cash. Rush processing is available for an additional $7.",
    },
    inPerson: {
      locations:
        "Center for Vital Records at Simpson Hall, 6 Harrington Road, Cranston, RI 02920. Also available at city and town clerk offices throughout Rhode Island.",
      processingTime: "Same day at state office; varies at local clerk offices",
      notes:
        "Walk-in service is available during office hours. Bring completed application form and valid government-issued photo ID. City and town clerks can issue birth certificates for births that occurred in their municipality. For births prior to 1960, contact the city or town clerk where the birth occurred.",
      localOfficesUrl:
        "https://www.sos.ri.gov/divisions/state-archives/VitalRecords",
    },
    phone: {
      number: "1-800-255-2414",
      provider: "VitalChek",
      notes:
        "Same fees and additional processing charges as online VitalChek orders. Credit/debit card required. For general information and fee verification, call the Health Information Line at (401) 222-5960 during office hours.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license",
      "Valid US passport",
      "Military identification",
      "Certificate of naturalization",
      "Alien registration card (green card)",
    ],
    secondaryId: [
      "If no government-issued photo ID is available, submit two documents showing your name and current address: utility bill, bank statement, car registration, or copy of income tax return",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant), if 18 or older",
      "Parent listed on the certificate",
      "Sibling (brother or sister)",
      "Grandparent or grandchild of the registrant",
      "Legal guardian of the registrant",
      "Authorized agent with a signed release from an eligible requestor",
      "Attorney-at-law with a copy of their bar card and valid ID, in the conduct of official duties",
      "Title examiners in the conduct of official duties",
      "Members of legally incorporated genealogical societies in the conduct of official duties",
      "Person who has been granted a court order instructing the registrar to provide disclosure",
      "Person requiring information for the determination or protection of a personal or property right",
      "Authorized agent of a state or federal agency",
    ],
    notes:
      "Vital records in Rhode Island are confidential and may only be issued to individuals with a 'Direct and Tangible Interest' as defined under RIGL \u00A7 23-3-23. You must demonstrate your relationship to the registrant. Requests must include a valid government-issued photo ID or two secondary documents.",
    acceptableIdUrl:
      "https://health.ri.gov/vital-records/requesting-vital-record-state",
  },
  feeWaivers: [
    {
      eligibility:
        "Veterans of the United States armed forces are exempt from fees for copies and searches of vital records",
      howToClaim:
        "Present proof of veteran status (e.g., DD-214, VA identification card, or military discharge papers) when requesting the vital record at the Center for Vital Records or a local city/town clerk office.",
      citation: "RIGL \u00A7 23-3-25.1",
    },
    {
      eligibility:
        "Persons experiencing homelessness may be eligible for a fee waiver for birth certificates needed to obtain identification documents",
      howToClaim:
        "Contact the Rhode Island Department of Health Center for Vital Records at (401) 222-2811 or visit in person to inquire about the fee waiver process. A homeless services provider or social worker may be able to certify your status. You can also call Rhode Island 2-1-1 (dial 2-1-1) for referral to programs that assist with obtaining vital records at no cost.",
      citation: "RIGL \u00A7 34-37.1 (Homeless Bill of Rights)",
    },
  ],
  recordsAvailableFrom: 1853,
  applicationFormUrl:
    "https://health.ri.gov/sites/g/files/xkgbur1006/files/forms/recordrequest/Birth.doc",
  specialNotes: [
    "Rhode Island has a dual system: both the state Center for Vital Records and local city/town clerk offices can issue birth certificates. The state office maintains records from 1853 to present.",
    "For births prior to 1960, the city or town clerk where the birth occurred may have the original record and can issue certified copies.",
    "Birth and marriage records more than 100 years old and death records more than 50 years old are transferred to the Rhode Island State Archives and are open to the public. Contact the State Archives at (401) 222-2353.",
    "The mail-order fee ($25) is higher than the in-person fee ($22) for the first certified copy. Additional copies purchased at the same time are $18 regardless of method.",
    "Rush processing is available for an additional $7 and reduces processing time from 4\u20136 weeks to 5\u20137 business days for mail orders.",
    "A record search covers one name and two consecutive calendar years at no additional charge. Each additional year searched costs $2 (RIGL \u00A7 23-3-25).",
    "VitalChek is the only authorized online/phone vendor. The state does not operate its own online ordering portal.",
  ],
  noIdWorkaround:
    "Rhode Island accepts two secondary documents in place of a government-issued photo ID: combine any two documents showing your name and current address, such as a utility bill, bank statement, car registration, or copy of income tax return. If you have no documents at all, contact the Center for Vital Records at (401) 222-2811 to discuss your situation. Veterans can obtain vital records at no cost under RIGL \u00A7 23-3-25.1 by presenting proof of military service. Persons experiencing homelessness should call Rhode Island 2-1-1 (dial 2-1-1) for referral to community programs that help obtain birth certificates and ID documents. A legal aid attorney from Rhode Island Legal Services at (401) 274-2652 may also be able to help you petition for alternative proof of identity or obtain your records.",
  lastVerified: "2026-03-21",
};
