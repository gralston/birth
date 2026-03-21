import { StateVitalRecords } from "@/types";

export const GU: StateVitalRecords = {
  stateCode: "GU",
  stateName: "Guam",
  office: {
    name: "Office of Vital Statistics, Department of Public Health and Social Services",
    address:
      "Rancare Commercial Building, 761 S. Marine Corps Drive, CBU Box 109, Tamuning, GU 96913",
    phone: "(671) 300-9263",
    website: "https://dphss.guam.gov/",
    hours:
      "Mon-Fri 8:00 AM - 12:00 PM & 1:00 - 3:30 PM ChST (except holidays); Marriage Licenses & Affidavits: 8:00 - 11:00 AM & 1:00 - 2:00 PM ChST",
  },
  fees: {
    certified: 5,
    additionalCopy: 5,
    paymentMethods: [
      "cashier's check",
      "money order",
      "local check (payable to 'Treasurer of Guam')",
    ],
  },
  requestMethods: {
    mail: {
      address:
        "Office of Vital Statistics, Rancare Commercial Building, 761 S. Marine Corps Drive, CBU Box 109, Tamuning, GU 96913",
      processingTime: "4-6 weeks from receipt",
      notes:
        "Include a written request with the full name and date of birth on the certificate, a self-addressed stamped envelope, and a cashier's check or money order payable to 'Treasurer of Guam.' Personal checks are not accepted for mail orders. You may also drop off your request in the drop box at the Rancare Commercial Building.",
    },
    inPerson: {
      locations:
        "Office of Vital Statistics, Rancare Commercial Building, 761 S. Marine Corps Drive, Tamuning, GU 96913 (across from Golden Marketing Office Supplies)",
      processingTime: "Same day to several business days depending on appointment availability",
      notes:
        "An appointment is required to request a new birth certificate. Contact the office at (671) 300-9263, (671) 300-9264, (671) 300-9265, or (671) 300-9270 to schedule. Bring a valid government-issued photo ID. Payment by cashier's check, money order, or local check payable to 'Treasurer of Guam.'",
    },
    phone: {
      number: "(671) 300-9263",
      notes:
        "Phone line is for inquiries, appointment scheduling, and status checks only. You cannot place an order by phone. Additional phone lines: (671) 300-9264, (671) 300-9265, (671) 300-9270. You may also email maria.quinata@dphss.guam.gov for general inquiries.",
    },
  },
  requirements: {
    primaryId: [
      "Valid government-issued photo ID (driver's license or state ID card)",
      "Valid US passport or passport card",
      "Valid US military ID (CAC)",
      "Valid permanent resident card (green card)",
    ],
    secondaryId: [
      "Social Security card",
      "Health insurance card with name",
      "Utility bill (current, with name and address)",
      "Bank statement (recent, with name and address)",
      "Employment ID with photo",
      "School ID with photo",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant) if 18 or older",
      "Parent listed on the birth certificate",
      "Legal guardian with court documentation",
      "Immediate family member (sibling, child) with proof of relationship",
      "Authorized legal representative or attorney with valid authorization documents",
    ],
    notes:
      "A valid government-issued photo ID is required for in-person requests. If requesting by mail, include a photocopy of your ID. If you are not the registrant, you must provide documentation proving your relationship to the person named on the certificate.",
  },
  feeWaivers: [
    {
      eligibility:
        "Guam does not have a broadly published fee waiver program for vital records. However, individuals experiencing financial hardship or those referred by government social service agencies may inquire about fee assistance through the Department of Public Health and Social Services.",
      howToClaim:
        "Contact the Office of Vital Statistics at (671) 300-9263 to ask about any available fee assistance. If you are working with a social worker or government agency caseworker, ask them to contact the office on your behalf to request a fee waiver or reduction.",
    },
  ],
  recordsAvailableFrom: 1901,
  applicationFormUrl:
    "https://www.govguamdocs.com/dphss/index_dphss.htm",
  specialNotes: [
    "Guam vital records date back to October 26, 1901. For events prior to that date, records may not be available through the Office of Vital Statistics.",
    "Appointments are required for new birth certificate requests and marriage license applications. Walk-in service is not guaranteed.",
    "Personal checks are not accepted. Payment must be by cashier's check, money order, or local check payable to 'Treasurer of Guam.'",
    "Guam does not currently offer online ordering of birth certificates through VitalChek or any other online provider. All requests must be made by mail, drop box, or in person.",
    "Divorce decrees are not issued by the Office of Vital Statistics. Contact the Superior Court of Guam Records Branch at (671) 475-3449 for divorce records.",
    "For international use, birth certificates may need an apostille or authentication. Contact the District Court of Guam or the US Department of State for guidance.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, a parent listed on the birth certificate may request the certificate on your behalf. You may also present two forms of secondary identification (e.g., Social Security card plus a utility bill). Contact the Office of Vital Statistics at (671) 300-9263 before visiting to discuss your situation and confirm what alternative documentation will be accepted. If you are working with a social services agency or caseworker, they may be able to assist with the request.",
  lastVerified: "2026-03-21",
};
