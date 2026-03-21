import { StateVitalRecords } from "@/types";

export const MS: StateVitalRecords = {
  stateCode: "MS",
  stateName: "Mississippi",
  office: {
    name: "Mississippi State Department of Health, Vital Records",
    address: "222 Marketridge Drive, Ridgeland, MS 39157",
    phone: "(601) 206-8200",
    website: "https://msdh.ms.gov/page/30,0,109.html",
    hours: "Mon–Fri 8:00 AM – 5:00 PM CT; excludes state holidays",
  },
  fees: {
    certified: 17,
    additionalCopy: 10,
    paymentMethods: [
      "money order (payable to Mississippi State Department of Health)",
      "certified check",
      "personal check",
      "credit or debit card (online and phone orders only)",
      "cash (in-person only, exact amount recommended)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/mississippi",
      provider: "vitalchek",
      additionalFee: 13.75,
      notes:
        "VitalChek is the sole authorized online vendor for Mississippi vital records. A service fee of approximately $13.75 applies in addition to the state fee. Credit or debit card required. Expedited shipping available for an additional cost.",
    },
    mail: {
      address:
        "Mississippi Vital Records, P.O. Box 1700, Jackson, MS 39215-1700",
      processingTime: "4–6 weeks",
      notes:
        "Include a completed application form, a photocopy of your valid photo ID, and a money order or check payable to 'Mississippi State Department of Health.' Include a self-addressed stamped envelope to expedite return. Personal checks may delay processing until the check clears.",
    },
    inPerson: {
      locations:
        "Mississippi State Department of Health, Vital Records office at 222 Marketridge Drive, Ridgeland, MS 39157, and county health department offices statewide",
      processingTime:
        "Same day at the Ridgeland office for records on file; up to 10 business days at county health departments",
      notes:
        "Walk-ins accepted at the Ridgeland office. Bring valid photo ID. County health departments can also process requests but may have limited hours and additional processing time. Call ahead to confirm availability.",
      localOfficesUrl:
        "https://msdh.ms.gov/page/43,0,181.html",
    },
    phone: {
      number: "(877) 817-0757",
      provider: "VitalChek",
      notes:
        "VitalChek service fee (~$13.75) applies in addition to the state fee. Credit or debit card required. Available 24/7.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license with photo",
      "Valid state-issued photo ID card",
      "Valid U.S. passport or passport card",
      "Valid U.S. military ID with photo",
      "Permanent resident card (green card)",
    ],
    secondaryId: [
      "Social Security card",
      "Voter registration card",
      "Employee ID with photo",
      "Insurance card or policy",
      "Utility bill or bank statement showing name and address",
      "Notarized affidavit of identity",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant, if 18 or older)",
      "A parent or legal guardian listed on the certificate",
      "Spouse of the registrant",
      "Adult child or grandchild of the registrant",
      "Sibling of the registrant",
      "Legal representative with court order or power of attorney",
      "A funeral director acting on behalf of the family",
    ],
    notes:
      "One valid photo ID is required with every request. If no photo ID is available, two secondary documents may be accepted — contact the Vital Records office to confirm. Requests from legal representatives must include proof of authority (court order or notarized power of attorney).",
    acceptableIdUrl:
      "https://msdh.ms.gov/page/30,0,109.html",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals who need a birth certificate to obtain a photo ID for voting purposes",
      howToClaim:
        "Submit a signed statement with your application indicating the birth certificate is being requested solely for the purpose of obtaining a voter ID. Mississippi waives the fee to ensure the voter ID requirement does not function as a poll tax.",
      citation: "Miss. Code Ann. § 23-15-7 (Mississippi Voter ID Law)",
    },
    {
      eligibility:
        "Veterans requesting records for Veterans Administration purposes",
      howToClaim:
        "Include documentation that the request is for VA benefit purposes. Records needed for Veterans Administration claims are furnished free of charge under federal law.",
      citation: "38 U.S.C. § 1542",
    },
    {
      eligibility:
        "Youth currently or formerly in foster care under the Mississippi Department of Child Protection Services",
      howToClaim:
        "Contact your DCPS caseworker or the Mississippi Department of Child Protection Services. The agency can request the birth certificate on your behalf at no charge.",
      citation: "Miss. Code Ann. § 43-15-13",
    },
  ],
  recordsAvailableFrom: 1912,
  applicationFormUrl:
    "https://msdh.ms.gov/msdhsite/index.cfm/30,909,109,pdf/BirthApp.pdf",
  specialNotes: [
    "Mississippi began mandatory statewide birth registration on November 1, 1912. Records before that date are incomplete — contact the county chancery clerk's office where the birth occurred for earlier records.",
    "Mississippi issues only long-form (full) certified copies of birth certificates; short-form or wallet-size versions are not available.",
    "A heirloom (commemorative) birth certificate suitable for framing is available for an additional fee and can be ordered through the state office.",
    "For corrections or changes to a birth certificate (name, parentage, gender marker), a court order from a Mississippi chancery court is required along with a separate amendment application.",
    "Delayed birth certificates for births not registered at the time can be filed through the chancery court with supporting evidence such as census records, hospital records, or affidavits.",
    "Mississippi birth records become public 100 years after the date of birth. Records less than 100 years old are restricted to eligible requestors.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent, spouse, adult child, sibling, or grandchild) who has valid photo ID request the certificate on your behalf. If you need a birth certificate specifically to obtain voter ID, the fee is waived under Mississippi law — contact Vital Records at (601) 206-8200 to ask about the voter ID fee waiver process. If you have no photo ID and no family member can assist, you may submit two secondary documents (e.g., Social Security card, voter registration card, notarized affidavit of identity) — call the state office to discuss your situation. Mississippi Center for Legal Services (mscenterforlegalservices.org or 601-948-6752) or North Mississippi Rural Legal Services (nmrls.com or 662-234-2918) can help individuals who have difficulty obtaining vital records.",
  lastVerified: "2026-03-21",
};
