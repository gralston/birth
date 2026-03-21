import { StateVitalRecords } from "@/types";

export const AR: StateVitalRecords = {
  stateCode: "AR",
  stateName: "Arkansas",
  office: {
    name: "Arkansas Department of Health, Division of Vital Records",
    address: "4815 West Markham Street, Slot 44, Little Rock, AR 72205",
    phone: "(501) 661-2336",
    website: "https://www.healthy.arkansas.gov/programs-services/topics/certificates-background-vital-records",
    hours: "Mon–Fri 8:00 AM – 4:30 PM CT; excludes state holidays",
  },
  fees: {
    certified: 12,
    additionalCopy: 10,
    paymentMethods: [
      "money order",
      "certified check",
      "personal check (payable to Arkansas Department of Health)",
      "credit card (online and phone orders only)",
      "cash (in-person only, exact change preferred)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/arkansas",
      provider: "vitalchek",
      additionalFee: 13.75,
      notes:
        "VitalChek is the sole authorized online vendor for Arkansas vital records. A service fee of approximately $13.75 applies in addition to the state fee. Credit or debit card required. Expedited shipping available for an additional cost.",
    },
    mail: {
      address:
        "Arkansas Department of Health, Division of Vital Records, 4815 West Markham Street, Slot 44, Little Rock, AR 72205",
      processingTime: "4–6 weeks",
      notes:
        "Include a completed application form, a photocopy of your valid photo ID, and a check or money order payable to 'Arkansas Department of Health.' Include a self-addressed stamped envelope to expedite return delivery. All required fields on the application must be completed or the request will be returned.",
    },
    inPerson: {
      locations:
        "Division of Vital Records central office in Little Rock and local health units across Arkansas",
      processingTime: "Same day at the Little Rock central office when records are on file",
      notes:
        "Walk-in service is available at the Little Rock office. Bring valid photo ID and payment. Local health units can also process requests but may have limited hours. Call ahead to confirm availability.",
      localOfficesUrl:
        "https://www.healthy.arkansas.gov/health-units",
    },
    phone: {
      number: "(866) 209-9482",
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
      "Utility bill or bank statement showing name and address",
      "School records or transcript",
      "W-2 or 1099 tax form",
      "Notarized affidavit of identity",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant, if 18 or older)",
      "A parent listed on the certificate",
      "Legal guardian with court documentation",
      "Spouse of the registrant",
      "Adult child, grandchild, or sibling of the registrant",
      "An authorized legal representative with court order or power of attorney",
      "A funeral director acting on behalf of the family",
    ],
    notes:
      "A valid government-issued photo ID is required for all requests. If someone other than the registrant is requesting, proof of relationship or legal authority (court order, power of attorney) must be provided. The application must be notarized if no photo ID is submitted.",
    acceptableIdUrl:
      "https://www.healthy.arkansas.gov/programs-services/topics/birth-certificates",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals who need a birth certificate solely to obtain a photo ID for voting purposes",
      howToClaim:
        "Submit a written statement with your application indicating that the birth certificate is needed to obtain a voter ID. Under Arkansas law, the fee is waived to prevent the identification requirement from functioning as a poll tax.",
      citation: "Ark. Code Ann. § 7-5-324(c) (Arkansas Voter ID Law)",
    },
    {
      eligibility:
        "Foster youth currently in state custody or aging out of foster care",
      howToClaim:
        "Contact your DCFS caseworker or the Arkansas Division of Children and Family Services. The agency can request your birth certificate on your behalf at no charge.",
      citation: "Ark. Code Ann. § 9-28-113",
    },
    {
      eligibility: "Veterans requesting records for Veterans Administration claims or benefits",
      howToClaim:
        "Include documentation that the request is for VA purposes. Records needed for Veterans Administration claims are furnished free of charge under federal law.",
      citation: "38 U.S.C. § 1542",
    },
    {
      eligibility:
        "Individuals experiencing homelessness who are receiving services from a homeless assistance program",
      howToClaim:
        "Work with a case manager at a homeless services organization or a Legal Aid of Arkansas office, who can help submit a fee waiver request on your behalf.",
    },
  ],
  recordsAvailableFrom: 1914,
  applicationFormUrl:
    "https://www.healthy.arkansas.gov/images/uploads/pdf/BirthCert_App_2019.pdf",
  specialNotes: [
    "Arkansas began statewide birth registration on February 1, 1914. Records before that date are incomplete — contact the county clerk's office in the county where the birth occurred for older records.",
    "Heirloom (commemorative) birth certificates are available and can be ordered through VitalChek or the state office.",
    "Arkansas law restricts access to birth records: certificates are not public records and are only available to eligible requestors as defined by statute (Ark. Code Ann. § 20-18-304).",
    "Name changes or corrections require a court order and a separate amendment application filed with the Division of Vital Records.",
    "Delayed birth certificates for births not registered at the time can be filed through circuit court with supporting evidence such as census records, hospital records, or affidavits.",
    "Processing times for mail orders may be longer during peak periods. Call (501) 661-2336 to check current turnaround times.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent, spouse, adult child, sibling, or grandchild) who has valid photo ID request the certificate on your behalf. If you need a birth certificate specifically to obtain voter ID, the fee is waived under Arkansas law (Ark. Code Ann. § 7-5-324) — contact the Division of Vital Records at (501) 661-2336 to ask about the voter ID fee waiver process. If you are experiencing homelessness, contact Legal Aid of Arkansas (arlegalaid.org or 1-800-952-9243) or a local homeless services provider for assistance in obtaining your certificate without photo ID. You may also provide two forms of secondary identification (e.g., Social Security card, utility bill, notarized affidavit) — call the state office to discuss your situation.",
  lastVerified: "2026-03-21",
};
