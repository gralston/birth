import { StateVitalRecords } from "@/types";

export const MP: StateVitalRecords = {
  stateCode: "MP",
  stateName: "Northern Mariana Islands",
  office: {
    name: "Commonwealth Healthcare Corporation, Health and Vital Statistics Office (HVSO)",
    address: "P.O. Box 500409, Saipan, MP 96950",
    phone: "(670) 236-8717",
    website: "https://www.chcc.gov.mp/",
    hours: "Mon–Fri 7:30 AM – 4:30 PM ChST",
  },
  fees: {
    certified: 25,
    additionalCopy: 25,
    paymentMethods: [
      "money order",
      "bank cashier's check",
    ],
  },
  requestMethods: {
    mail: {
      address:
        "CNMI Vital Records, Commonwealth Healthcare Corporation, P.O. Box 500409, Saipan, MP 96950",
      processingTime: "4–8 weeks from receipt",
      notes:
        "You must first request the NMI Birth Certificate Mail Order Form by emailing info-hvso@chcc.health. Complete the form and return it with a photocopy of your valid government-issued ID and a money order or bank cashier's check for $25.00 payable to 'Commonwealth Healthcare Corporation.' Include an additional $5.00 money order for return mailing services. International mail may take longer.",
    },
    inPerson: {
      locations:
        "Commonwealth Healthcare Corporation, Health and Vital Statistics Office, Commonwealth Health Center, Garapan, Saipan, MP 96950",
      processingTime: "Same day to 3 business days, depending on record availability",
      notes:
        "Walk-in service is available during office hours. Bring a valid government-issued photo ID. Payment by money order or bank cashier's check only — cash and credit cards are generally not accepted. Records from 1946–1954 may require additional processing time due to incomplete records from that era.",
    },
    phone: {
      number: "(670) 236-8717",
      notes:
        "Phone line is for inquiries and status checks only. You may also call (670) 236-8702 for assistance. Phone ordering is not available; use mail or visit in person to place orders.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state- or territory-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Valid US military ID (CAC)",
      "Valid permanent resident card (green card)",
      "CNMI-issued identification card",
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
      "Licensed attorney representing the registrant with written authorization",
      "Authorized government agency representative",
    ],
    notes:
      "Applicants must submit a valid photocopy of a government-issued ID with their request. If requesting on behalf of someone else, provide documentation proving your relationship (e.g., court order, power of attorney, or notarized authorization letter).",
  },
  feeWaivers: [
    {
      eligibility:
        "There is no formally published fee waiver program for CNMI vital records. Individuals experiencing financial hardship may contact the HVSO directly to inquire about possible accommodations.",
      howToClaim:
        "Contact the Health and Vital Statistics Office at (670) 236-8717 or email info-hvso@chcc.health to explain your circumstances and request assistance. Social services agencies on Saipan may also be able to help cover the cost.",
    },
  ],
  recordsAvailableFrom: 1946,
  applicationFormUrl:
    "https://www.chcc.gov.mp/",
  specialNotes: [
    "CNMI Vital Records maintains birth records from 1946 to present. Records from 1945 and earlier (Japanese administration period) are not available through CNMI vital records.",
    "Records from 1946–1954 are incomplete due to the transition period following World War II. Locating records from this era may require additional time and research.",
    "The CNMI includes the islands of Saipan, Tinian, and Rota. The main vital records office is located on Saipan. Residents of Tinian and Rota should contact the HVSO for guidance on obtaining records remotely.",
    "To obtain the mail order application form, you must email info-hvso@chcc.health and request the NMI Birth Certificate Mail Order Form. The form is not available for direct download.",
    "Payment must be made by money order or bank cashier's check payable to 'Commonwealth Healthcare Corporation.' Personal checks, cash by mail, and credit cards are generally not accepted.",
    "For international use (apostille or authentication), contact the CNMI Superior Court or the US Department of State Office of Authentications.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, contact the Health and Vital Statistics Office at (670) 236-8717 or email info-hvso@chcc.health to discuss your situation before submitting a request. You may be able to provide two forms of secondary identification (e.g., Social Security card plus a utility bill). Social services agencies on Saipan, such as the CNMI Office of the Attorney General's Victim Advocacy Program or community assistance programs, may be able to help you obtain identification or vouch for your identity. If you are homeless or a victim of domestic violence, mention this when contacting the office as additional accommodations may be available.",
  lastVerified: "2026-03-21",
};
