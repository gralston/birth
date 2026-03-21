import { StateVitalRecords } from "@/types";

export const OK: StateVitalRecords = {
  stateCode: "OK",
  stateName: "Oklahoma",
  office: {
    name: "Oklahoma State Department of Health, Vital Records Service",
    address: "P.O. Box 248964, Oklahoma City, OK 73124-8964",
    phone: "(405) 426-8880",
    website:
      "https://oklahoma.gov/health/services/birth-and-death-certificates.html",
    hours: "Mon–Fri 8:30 AM – 4:00 PM CT",
  },
  fees: {
    certified: 20,
    additionalCopy: 15,
    paymentMethods: [
      "money order",
      "check",
      "credit card (online/phone)",
      "debit card (online/phone)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/oklahoma",
      provider: "vitalchek",
      additionalFee: 12.95,
      notes:
        "Oklahoma does not operate its own online portal. All online orders go through VitalChek, which charges an additional processing fee. You can choose mail delivery or Will Call pickup within 2 business days.",
    },
    mail: {
      address:
        "Vital Records Service, Oklahoma State Department of Health, P.O. Box 248964, Oklahoma City, OK 73124-8964",
      processingTime: "2–4 weeks",
      notes:
        "Include completed application (Form 18008VR), payment by check or money order payable to OSDH, and a clear photocopy of your valid government-issued photo ID.",
    },
    inPerson: {
      locations:
        "Will Call pickup at three locations: Oklahoma City (123 Robert S. Kerr Ave, Oklahoma City, OK 73102), Tulsa (James O. Goodwin Health Center, 5051 S. 129th East Ave, Tulsa, OK 74134), and McAlester (Pittsburg County Health Department, 1400 E. College Ave, McAlester, OK 74501)",
      processingTime:
        "Will Call orders ready within 2 business days (must be ordered online or by phone first)",
      notes:
        "Walk-in ordering is not available. You must place your order online or by phone first, then pick up at Will Call. Will Call hours are 12:00 PM – 4:45 PM, Mon–Fri.",
    },
    phone: {
      number: "(877) 817-7364",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek. An additional processing fee applies. You can choose mail delivery or Will Call pickup.",
    },
  },
  requirements: {
    primaryId: [
      "Valid U.S.-issued driver's license or state ID card",
      "Valid U.S. passport (must be signed)",
    ],
    secondaryId: [
      "U.S. Selective Service card",
      "Official police report or arrest record showing name and current address",
      "Government-issued benefit statement (e.g., DHS, WIC, or SSA)",
      "Oklahoma DOC Consolidated Record Card (CRC)",
    ],
    eligibleRequestors: [
      "The person named on the certificate (self)",
      "A parent listed on the certificate (mother or father)",
      "An immediate family member",
      "A legal representative with proof of legal relationship (court order, client agreement, etc.)",
    ],
    notes:
      "A clear, legible photocopy of valid government-issued photo ID is required with all applications. If no primary ID is available, two forms of secondary ID are required, and at least one must show a current address. Certificates requested with secondary ID will be mailed only — Will Call pickup is not available.",
    acceptableIdUrl:
      "https://oklahoma.gov/health/services/birth-and-death-certificates/acceptable-identification.html",
  },
  feeWaivers: [
    {
      eligibility: "Veterans (for VA purposes)",
      howToClaim:
        "A birth certificate required for submission to the Veterans Administration or U.S. Commissioner of Pensions in connection with a claim for military-service-connected benefits may be obtained at no charge. Attach a signed statement explaining that the copy is needed for VA benefits and requesting issuance without fee.",
      citation: "63 O.S. § 1-324",
    },
  ],
  recordsAvailableFrom: 1908,
  applicationFormUrl:
    "https://oklahoma.gov/content/dam/ok/en/health/health2/aem-documents/vital-records/forms/18008vr-vr-birth-application-eng-eform.pdf",
  specialNotes: [
    "Oklahoma began filing birth records in October 1908, but filing was not required by law until 1917. Most births were not filed timely until around 1950.",
    "Records of births occurring at least 125 years ago are considered open records and do not require proof of eligibility to obtain.",
    "Walk-in ordering is not available at any location. All orders must be placed online, by phone, or by mail first.",
    "Will Call pickup is available at Oklahoma City, Tulsa, and McAlester locations (Mon–Fri, 12:00 PM – 4:45 PM).",
    "If all information is correct and no additional services are needed (e.g., amendment, adoption), processing takes approximately 2 business days.",
  ],
  noIdWorkaround:
    "If you do not have a primary photo ID, Oklahoma allows you to submit two forms of secondary identification, with at least one showing your current address. Acceptable secondary IDs include a government benefit statement (DHS, WIC, SSA), a Selective Service card, or an official police report with your name and address. Certificates requested with secondary ID will be mailed to the address on file and cannot be picked up at Will Call. For further assistance, contact Vital Records at (405) 426-8880 or email AskVR@health.ok.gov. Legal Aid Services of Oklahoma (oklaw.org) can also help navigate ID barriers.",
  lastVerified: "2026-03-21",
};
