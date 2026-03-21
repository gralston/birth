import { StateVitalRecords } from "@/types";

export const MO: StateVitalRecords = {
  stateCode: "MO",
  stateName: "Missouri",
  office: {
    name: "Missouri Department of Health and Senior Services, Bureau of Vital Records",
    address: "930 Wildwood Drive, Jefferson City, MO 65109",
    phone: "(573) 751-6387",
    website: "https://health.mo.gov/data/vitalrecords/",
    hours: "Mon-Fri 8:30 AM - 4:30 PM CT (walk-in by appointment)",
  },
  fees: {
    certified: 15,
    additionalCopy: 11,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
      "cash (in-person at local offices)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/missouri",
      provider: "vitalchek",
      additionalFee: 11.25,
      notes:
        "VitalChek is the ONLY recognized and endorsed method to obtain Missouri vital records online. Expedited shipping available for an additional fee. Processing is typically 7-10 business days.",
    },
    mail: {
      address:
        "Bureau of Vital Records, 930 Wildwood Drive, Jefferson City, MO 65109",
      processingTime: "4 to 6 weeks",
      notes:
        "All mail-in applications must be notarized (traditional, electronic, or remote online notarization accepted). Include completed application form, copy of valid photo ID, notarized signature, self-addressed stamped return envelope, and check or money order payable to 'Missouri Department of Health and Senior Services.'",
    },
    inPerson: {
      locations:
        "Bureau of Vital Records at 930 Wildwood Drive, Jefferson City, MO (by appointment). Also available at 115 local public health agency (LPHA) offices across Missouri offering walk-in services.",
      processingTime:
        "Same day at local offices; varies at state office depending on appointment availability",
      notes:
        "Local public health agencies often provide faster service. Must present valid photo ID in person. Contact your local health department for hours and availability.",
      localOfficesUrl: "https://health.mo.gov/living/lpha/lphas.php",
    },
    phone: {
      number: "(866) 550-0768",
      provider: "VitalChek",
      notes:
        "VitalChek is the only authorized phone ordering service. Same fees as online orders (state fee plus VitalChek processing fee). General inquiries: (573) 751-6387.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport",
      "US military ID",
      "Work or school photo ID",
    ],
    secondaryId: [
      "Two alternate identification documents containing your name and the name of the issuing company or organization (e.g., utility bill, bank statement, insurance card, voter registration card, Social Security card)",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate)",
      "A member of the registrant's immediate family",
      "A legal guardian (with certified guardianship documents)",
      "An official representative or legal representative of any of the above",
      "Any person or entity demonstrating a direct and tangible interest in the record",
    ],
    notes:
      "All mail-in applications must be notarized pursuant to 19 CSR 10-10, regardless of the requestor or reason. The applicant's relationship to the registrant and reason for the request determine whether tangible interest documentation must accompany the application.",
    acceptableIdUrl:
      "https://health.mo.gov/data/vitalrecords/pdf/id-requirements-flyer.pdf",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless children/youth or unaccompanied youth as defined in 42 U.S.C. Section 11434a(6)",
      howToClaim:
        "A homeless services provider must complete and submit an 'Affidavit of Homeless or Unaccompanied Youth Status for Fee Exempt Certified Copy of Birth Certificate' verifying the person's homeless status. One certificate is provided at no cost; statutory fee applies to additional copies.",
      citation: "RSMo 193.265",
    },
    {
      eligibility: "Victims of domestic violence or abuse",
      howToClaim:
        "Provide documentation signed by an employee, agent, or volunteer of a victim service provider, an attorney, or a health care or mental health professional stating under penalty of perjury that they believe the victim has been involved in an incident of domestic violence or abuse. Eligible one time only.",
      citation: "RSMo 193.265",
    },
  ],
  recordsAvailableFrom: 1910,
  applicationFormUrl:
    "https://health.mo.gov/data/vitalrecords/pdf/birthdeath.pdf",
  specialNotes: [
    "All mail-in applications must be notarized — traditional, electronic, and remote online notarization (RON) are all accepted by the Bureau of Vital Records.",
    "Missouri vital records are not open to the general public. Only persons with a direct and tangible interest in the record may obtain a certified copy.",
    "Local public health agency offices (115 across Missouri) often provide faster walk-in service than the state office in Jefferson City.",
    "For births before 1910, contact the Missouri State Archives at (573) 751-3280 or visit sos.mo.gov/archives for historical records.",
    "The Bureau of Vital Records is implementing a new Missouri Electronic Vital Records (MoEVR 2.0) system with phased rollout from fall 2025 through summer 2027, which may temporarily affect processing times.",
    "VitalChek is the ONLY authorized online/phone vendor for Missouri vital records — beware of unofficial third-party websites that charge excessive fees.",
  ],
  noIdWorkaround:
    "If you have no photo ID, you may submit two alternate identification documents containing your name and the name of the issuing organization (utility bill, bank statement, insurance card, voter registration card, etc.). For mail-in requests, the application must still be notarized. Alternatively, VitalChek can verify identity online through LexisNexis public record data without requiring physical ID — this is the state's recommended option for those who cannot produce standard identification. If you are experiencing homelessness, a homeless services provider can submit an affidavit on your behalf, which also waives the fee. Contact the Bureau at (573) 751-6387 or email VitalRecordsInfo@health.mo.gov for assistance.",
  lastVerified: "2026-03-21",
};
