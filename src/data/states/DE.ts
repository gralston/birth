import { StateVitalRecords } from "@/types";

export const DE: StateVitalRecords = {
  stateCode: "DE",
  stateName: "Delaware",
  office: {
    name: "Delaware Division of Public Health, Office of Vital Statistics",
    address: "417 Federal Street, Jesse Cooper Building, Dover, DE 19901",
    phone: "(302) 744-4549",
    website: "https://dhss.delaware.gov/dhss/dph/ss/vitalstats.html",
    hours: "Mon–Fri 8:00 AM – 4:30 PM ET",
  },
  fees: {
    certified: 25,
    additionalCopy: 25,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
      "cash (in-person)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/delaware",
      provider: "vitalchek",
      additionalFee: 12.5,
      notes:
        "Orders processed through VitalChek, the state-authorized online vendor. State fee of $25 plus VitalChek service fee. Expedited shipping available for additional cost.",
    },
    mail: {
      address:
        "Office of Vital Statistics, 417 Federal Street, Dover, DE 19901",
      processingTime: "4–6 weeks",
      notes:
        "Include completed application form, photocopy of valid government-issued ID, and check or money order payable to 'Office of Vital Statistics.' Do not send cash by mail.",
    },
    inPerson: {
      locations:
        "Main office at 417 Federal Street, Jesse Cooper Building, Dover, DE 19901. Walk-in service available during business hours.",
      processingTime: "Same day if record is on file",
      notes:
        "Bring valid photo ID. Walk-ins accepted; no appointment required. Payment by cash, check, or money order.",
    },
    phone: {
      number: "1-877-572-6332",
      provider: "VitalChek",
      notes:
        "Credit or debit card required. State fee plus VitalChek service fee applies. Available 24/7.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Valid US military ID (CAC)",
      "Valid permanent resident card (green card)",
    ],
    secondaryId: [
      "Social Security card",
      "Health insurance card",
      "Utility bill (current, with name and address)",
      "Bank statement (recent, with name and address)",
      "W-2 or 1099 tax form (recent year)",
      "Vehicle registration",
      "Voter registration card",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant) if 18 or older",
      "Parent listed on the birth certificate",
      "Legal guardian with court documentation",
      "Licensed attorney representing the registrant",
      "Government agency authorized by statute",
      "Other persons demonstrating a direct and tangible interest",
    ],
    notes:
      "Delaware requires proof of identity for all applicants. If you are not the registrant, you must provide documentation proving your relationship (e.g., court order, power of attorney). A photocopy of ID is required for mail requests; original ID must be presented for in-person requests.",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless individuals needing a birth certificate for housing, employment, or public benefits",
      howToClaim:
        "Submit a written statement from a shelter, social services agency, or homeless services provider certifying homeless status. Contact the Office of Vital Statistics at (302) 744-4549 to request the waiver.",
      citation: "16 Del. C. § 3104",
    },
    {
      eligibility:
        "Victims of domestic violence who need identification documents for safety or legal proceedings",
      howToClaim:
        "Provide documentation such as a Protection From Abuse order or letter from a domestic violence program. Contact the Office of Vital Statistics at (302) 744-4549 to request a fee waiver.",
      citation: "16 Del. C. § 3104",
    },
    {
      eligibility:
        "Youth aging out of foster care (ages 18–21) who need birth certificates for identification or employment purposes",
      howToClaim:
        "The Delaware Division of Family Services or the youth's caseworker should submit the request on the youth's behalf. Contact the DFS caseworker to initiate the process.",
      citation: "29 Del. C. § 9015",
    },
    {
      eligibility:
        "Indigent individuals who cannot afford the fee and need the certificate for a government-required purpose",
      howToClaim:
        "Submit a written request explaining financial hardship and the reason the certificate is needed. Include proof of public assistance enrollment (e.g., Medicaid, SNAP, TANF) if available. Contact (302) 744-4549.",
      citation: "16 Del. C. § 3104",
    },
  ],
  recordsAvailableFrom: 1861,
  applicationFormUrl:
    "https://dhss.delaware.gov/wp-content/uploads/sites/10/dph/pdf/birth.pdf",
  specialNotes: [
    "Delaware birth records from 1861 to present are maintained by the Office of Vital Statistics. For records before 1861, contact the Delaware Public Archives at (302) 744-5000.",
    "Delaware is a small state with a single vital records office in Dover — there are no branch offices. Plan travel accordingly if requesting in person.",
    "Expedited processing is available only through VitalChek (online or phone) for an additional fee; the state office does not offer its own expedited mail service.",
    "Apostille or authentication of birth certificates for international use can be requested through the Delaware Secretary of State at (302) 739-4111.",
    "Delaware issues certified copies that include a raised seal and registrar signature. Short-form abstracts are not issued; all copies are full certified copies.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, Delaware will accept two forms of secondary identification (e.g., Social Security card plus a utility bill, or health insurance card plus a bank statement). Homeless individuals can present a letter from a shelter or social services agency certifying their identity — contact the Office of Vital Statistics at (302) 744-4549 to discuss your situation before visiting. Youth aging out of foster care should work with their DFS caseworker, who can request the certificate on their behalf. You may also contact Delaware 2-1-1 for referrals to organizations that help with obtaining vital records and identification documents.",
  lastVerified: "2026-03-21",
};
