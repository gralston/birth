import { StateVitalRecords } from "@/types";

export const AL: StateVitalRecords = {
  stateCode: "AL",
  stateName: "Alabama",
  office: {
    name: "Alabama Center for Health Statistics, Alabama Department of Public Health",
    address: "201 Monroe Street, Suite 1150, Montgomery, AL 36104",
    phone: "(334) 206-5418",
    website: "https://www.alabamapublichealth.gov/vitalrecords/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM CT",
  },
  fees: {
    certified: 15,
    additionalCopy: 6,
    paymentMethods: [
      "money order",
      "certified check",
      "personal check (payable to State Board of Health)",
      "credit card (online or phone orders)",
      "cash (in-person at county health departments)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/alabama",
      provider: "vitalchek",
      additionalFee: 12.5,
      notes:
        "VitalChek is the sole authorized online vendor. A service fee of approximately $12.50 applies in addition to the state fee. Credit or debit card required. Expedited shipping available for an additional cost.",
    },
    mail: {
      address:
        "Center for Health Statistics, P.O. Box 5625, Montgomery, AL 36103-5625",
      processingTime: "4–6 weeks",
      notes:
        "Include completed application form, a copy of your valid photo ID, and a money order or certified check payable to 'State Board of Health.' Personal checks are accepted but may delay processing until the check clears.",
    },
    inPerson: {
      locations:
        "State office in Montgomery and county health departments across Alabama",
      processingTime: "Same day to 5 business days at the state office; varies at county offices",
      notes:
        "Walk-ins accepted at the Montgomery office. County health departments can also process requests; availability and fees may vary by county. Call ahead to confirm hours and accepted payment methods.",
      localOfficesUrl:
        "https://www.alabamapublichealth.gov/countyservices/index.html",
    },
    phone: {
      number: "877-572-6332",
      provider: "VitalChek",
      notes:
        "VitalChek service fee (~$12.50) applies. Credit or debit card required. Available 24/7.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Valid military ID (DD-214 or active duty)",
      "Permanent resident card (green card)",
    ],
    secondaryId: [
      "Social Security card",
      "Voter registration card",
      "Utility bill or bank statement (with name and address)",
      "School records or transcript",
      "Notarized affidavit of identity from a person who can verify your identity",
    ],
    eligibleRequestors: [
      "The person named on the certificate (if 18 or older)",
      "A parent or legal guardian named on the certificate",
      "Spouse of the registrant",
      "Adult child, grandchild, or sibling of the registrant",
      "An authorized legal representative with court order or power of attorney",
      "A funeral director (for burial/transit permits)",
    ],
    notes:
      "Alabama requires a notarized application or a copy of valid photo ID with every request. If someone other than the registrant is requesting, documentation of their relationship (e.g., court order, POA) must be included.",
    acceptableIdUrl:
      "https://www.alabamapublichealth.gov/vitalrecords/birth-certificates.html",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals who need a birth certificate to obtain a photo ID for voting purposes",
      howToClaim:
        "Submit the application with a signed statement that the certificate is needed to obtain voter ID. The fee is waived under Alabama's voter ID law to prevent the requirement from functioning as a poll tax.",
      citation: "Ala. Code § 29-9-10 (Alabama Photo Voter ID Act)",
    },
    {
      eligibility: "Foster youth and individuals aging out of foster care",
      howToClaim:
        "Contact your DHR caseworker or the Alabama Department of Human Resources. The agency can request your birth certificate on your behalf at no cost.",
      citation: "Ala. Code § 38-12-2",
    },
    {
      eligibility:
        "Individuals experiencing homelessness receiving services through a homeless assistance program",
      howToClaim:
        "Work with a case manager at a HUD-funded homeless services agency or Legal Aid office, who can submit a request on your behalf and request a fee waiver.",
    },
  ],
  recordsAvailableFrom: 1908,
  applicationFormUrl:
    "https://www.alabamapublichealth.gov/vitalrecords/assets/birth-app-10-19.pdf",
  specialNotes: [
    "Alabama began statewide birth registration in 1908. Records before that are fragmentary — contact the county probate court where the birth occurred or the Alabama Department of Archives and History (archives.alabama.gov).",
    "Heirloom (commemorative) birth certificates are available for $35 and can be ordered online or at the state office.",
    "Name changes or corrections require a court order and a separate amendment application.",
    "For births that were not registered at the time, a delayed birth certificate can be filed through the probate court with supporting evidence.",
    "County health departments may charge a small additional local fee; call ahead to confirm total costs.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent, spouse, adult child, or sibling) with valid photo ID request on your behalf. If you need a birth certificate specifically for voter ID purposes, the fee is waived under Alabama law — contact the Center for Health Statistics at (334) 206-5418 to ask about the voter ID fee waiver process. If experiencing homelessness, a homeless services provider or Legal Aid of Alabama (legalservicesalabama.org or 866-456-4995) can help you obtain your certificate without photo ID. You may also submit secondary documentation such as a Social Security card, notarized affidavit of identity, and school records — call the state office to discuss your specific situation.",
  lastVerified: "2026-03-21",
};
