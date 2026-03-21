import { StateVitalRecords } from "@/types";

export const WV: StateVitalRecords = {
  stateCode: "WV",
  stateName: "West Virginia",
  office: {
    name: "West Virginia Vital Registration Office, Health Statistics Center",
    address:
      "Vital Registration Office, Room 165, 350 Capitol Street, Charleston, WV 25301-3701",
    phone: "(304) 558-2931",
    website: "https://dhhr.wv.gov/HSC/VR/Pages/default.aspx",
    hours: "Mon-Fri 8:30 AM - 5:00 PM ET (closed state holidays)",
  },
  fees: {
    certified: 12,
    additionalCopy: 12,
    paymentMethods: [
      "check",
      "money order",
      "cash (in-person only)",
      "debit/credit card (in-person only, 4% surcharge)",
      "credit card (online via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/west-virginia/west-virginia-vital-registration",
      provider: "vitalchek",
      additionalFee: 13.75,
      notes:
        "West Virginia does not have its own online ordering portal. All online orders go through VitalChek, which charges an additional service fee on top of the $12 state fee. VitalChek accepts Visa, MasterCard, American Express, and Discover.",
    },
    mail: {
      address:
        "Vital Registration Office, Room 165, 350 Capitol Street, Charleston, WV 25301-3701",
      processingTime: "10-14 business days (up to 3 weeks during peak periods)",
      notes:
        "Include completed application form, a color photocopy of valid ID, and a check or money order for $12 per copy payable to 'Vital Registration.' No debit/credit cards accepted by mail. Peak periods include school enrollment season, Little League registration, and holidays.",
    },
    inPerson: {
      locations:
        "Vital Registration Office, Room 165, 350 Capitol Street, Charleston, WV 25301. Walk-up counter is on the right side of the main lobby. County clerk offices throughout the state also issue birth certificates for births in their county.",
      processingTime: "Same day at Charleston office; varies at county clerk offices",
      notes:
        "Metered street parking is available on Capitol Street. Wait times may be longer during the lunch hour. County clerk offices may have different fees and processing times. Cash, check, money order accepted; debit/credit cards accepted at walk-up counter with a 4% surcharge.",
    },
    phone: {
      number: "1-800-255-5325",
      provider: "VitalChek",
      notes:
        "VitalChek expedited phone orders. Accepts Visa, MasterCard, American Express, and Discover. Additional VitalChek service fee applies on top of the $12 state fee.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or photo ID card (unexpired or expired no more than 1 year)",
      "U.S. passport (unexpired or expired no more than 5 years)",
      "Unexpired U.S. military ID card (active duty or retired; dependent IDs not accepted)",
      "Current photo ID card (school or employment)",
    ],
    secondaryId: [
      "If no primary ID, submit two (2) from secondary list: U.S. Selective Service card, West Virginia Criminal Justice Agency Offender Information Form",
    ],
    eligibleRequestors: [
      "The registrant (person named on certificate, if 18+ or emancipated minor)",
      "Parent listed on the birth certificate",
      "Spouse of the registrant",
      "Child of the registrant",
      "Sibling of the registrant",
      "Grandparent or grandchild of the registrant",
      "Legal guardian (proof of guardianship required)",
      "Legal representative (proof of representation required)",
      "Any person with a court order",
    ],
    notes:
      "West Virginia is not an 'open record' state. Access to certified copies is restricted to eligible requestors listed above. A color photocopy of ID is required for mail orders. Check cashing cards are not acceptable as identification.",
    acceptableIdUrl:
      "https://dhhr.wv.gov/HSC/VR/CR/Pages/default.aspx",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless individuals residing at a homeless shelter in West Virginia",
      howToClaim:
        "Apply through a homeless shelter. The shelter employee or representative must sign an affidavit certifying the applicant is a resident of the shelter and has no other known address. The shelter address is used as the applicant's address of residence. Limited to one identifying document per individual per 30-day period.",
      citation: "W.Va. Code \u00A7 17B-2-16 (HB 2215)",
    },
    {
      eligibility:
        "Youth aging out of foster care",
      howToClaim:
        "Contact your DHHR caseworker or local child welfare agency. The department is required to assist foster youth in obtaining vital identification documents, including birth certificates, as part of the transition plan before leaving care.",
      citation: "W.Va. Code \u00A7 49-4-714 (John H. Chafee Foster Care Independence Program)",
    },
  ],
  recordsAvailableFrom: 1917,
  applicationFormUrl:
    "https://dhhr.wv.gov/HSC/forms/Documents/birthfmnew.pdf",
  specialNotes: [
    "The state Vital Registration Office in Charleston has records from January 1917 forward. For births before 1917, contact the county clerk in the county where the birth occurred - some counties have records dating back to 1853.",
    "West Virginia does not have a state-run online ordering system. All online orders go through VitalChek with an additional service fee.",
    "County clerk offices throughout the state can also issue birth certificates, often with shorter wait times than the state office. Contact the specific county clerk for hours, fees, and availability.",
    "The $12 fee includes a non-refundable search fee. If a record is not found in the requested year, the office searches the year before and the year after. Additional three-year searches cost $12 each.",
    "For genealogical research on older records, the West Virginia Division of Culture and History maintains historical vital records at the Culture Center in Charleston.",
  ],
  noIdWorkaround:
    "West Virginia allows exceptions to ID requirements on a case-by-case basis. If you have no primary ID, submit two secondary documents (e.g., Selective Service card and Criminal Justice Agency Offender Information Form). Homeless individuals residing in a WV shelter can obtain a birth certificate at no cost with an affidavit from the shelter. Foster youth aging out of care should work with their DHHR caseworker. If you have no ID at all, contact the Vital Registration Office at (304) 558-2931 to discuss your situation — they may be able to arrange alternative verification.",
  lastVerified: "2026-03-21",
};
