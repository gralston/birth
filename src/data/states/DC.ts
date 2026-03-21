import { StateVitalRecords } from "@/types";

export const DC: StateVitalRecords = {
  stateCode: "DC",
  stateName: "District of Columbia",
  office: {
    name: "DC Health, Vital Records Division",
    address: "899 North Capitol Street NE, First Floor, Washington, DC 20002",
    phone: "(202) 442-9009",
    website: "https://dchealth.dc.gov/service/birth-certificates",
    hours: "Mon–Fri 8:30 AM – 3:30 PM ET (walk-ins); online orders accepted 24/7",
  },
  fees: {
    certified: 23,
    additionalCopy: 13,
    paymentMethods: [
      "credit card (online)",
      "money order",
      "certified check",
      "cash (in-person)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://dchealth.dc.gov/service/birth-certificates",
      provider: "state",
      notes:
        "DC Vital Records offers online ordering through its own portal. You must create an account on the DC Health Vital Records system. Credit or debit card required. Standard processing is 5–10 business days; expedited shipping options available at checkout.",
    },
    mail: {
      address:
        "DC Vital Records Division, 899 North Capitol Street NE, First Floor, Washington, DC 20002",
      processingTime: "4–6 weeks from receipt",
      notes:
        "Include a completed Application for a Certified Copy of a Birth Certificate, a photocopy of your valid government-issued photo ID, and a money order or certified check payable to 'DC Treasurer.' Include a self-addressed stamped envelope. Do not send cash by mail.",
    },
    inPerson: {
      locations:
        "DC Vital Records Division, 899 North Capitol Street NE, First Floor, Washington, DC 20002",
      processingTime: "Same day if record is on file",
      notes:
        "Walk-in service available Monday through Friday. Bring valid government-issued photo ID. Arrive early as wait times can be significant, especially mid-month. Cash, money orders, and certified checks accepted in person.",
    },
    phone: {
      number: "(202) 442-9009",
      notes:
        "Phone line is for inquiries and status checks. Phone ordering is not available; use the online portal or visit in person to place orders.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Valid US military ID (CAC)",
      "Valid permanent resident card (green card)",
      "DC-issued identification card",
    ],
    secondaryId: [
      "Social Security card",
      "Health insurance card with name",
      "Utility bill (current, with name and address)",
      "Bank statement (recent, with name and address)",
      "Employment ID with photo",
      "School ID with photo",
      "W-2 or 1099 tax form (recent year)",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant) if 18 or older",
      "Parent listed on the birth certificate",
      "Legal guardian with court documentation",
      "Licensed attorney representing the registrant with written authorization",
      "Authorized government agency representative",
      "Other person demonstrating a direct, tangible, and legitimate interest",
    ],
    notes:
      "DC requires proof of identity and proof of eligibility. If you are not the registrant, you must provide documentation proving your relationship (e.g., your own birth certificate, court order, power of attorney, or notarized authorization letter).",
    acceptableIdUrl: "https://dchealth.dc.gov/service/birth-certificates",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless individuals requesting a birth certificate for the purpose of obtaining housing, employment, public benefits, or identification",
      howToClaim:
        "Provide a letter or referral from a shelter, social services agency, or homeless services provider (such as the DC Department of Human Services Community Partnership for the Prevention of Homelessness) certifying your homeless status. Present the letter at the Vital Records office and request a fee waiver.",
      citation: "D.C. Code § 7-231.24(e)",
    },
    {
      eligibility:
        "Victims of domestic violence who need a birth certificate to obtain a protective order, establish a new identity, or access safety services",
      howToClaim:
        "Provide documentation of domestic violence status, such as a civil protection order, police report, or letter from a domestic violence service provider. Contact the Vital Records Division at (202) 442-9009 to request a fee waiver before visiting.",
      citation: "D.C. Code § 7-231.24",
    },
    {
      eligibility:
        "Individuals who demonstrate financial hardship and need the certificate to obtain government-required identification or public benefits",
      howToClaim:
        "Submit a written request explaining financial hardship and the purpose for which the certificate is needed. Include documentation of enrollment in public assistance programs (TANF, SNAP, Medicaid, or DC Alliance) if available. The Registrar may waive the fee at their discretion.",
      citation: "D.C. Code § 7-231.24(e)",
    },
    {
      eligibility:
        "Youth aging out of foster care in the District of Columbia who need birth certificates for identification, employment, or housing",
      howToClaim:
        "The DC Child and Family Services Agency (CFSA) or assigned caseworker should request the certificate on the youth's behalf. Contact CFSA at (202) 442-6100 or the Vital Records office directly.",
      citation: "D.C. Code § 4-1301.09a",
    },
  ],
  recordsAvailableFrom: 1874,
  applicationFormUrl:
    "https://dchealth.dc.gov/sites/default/files/dc/sites/doh/service_content/attachments/Birth%20Certificate%20Application.pdf",
  specialNotes: [
    "DC Vital Records maintains birth records from 1874 to present. For records prior to 1874, contact the DC Archives at (202) 727-2054.",
    "DC issues computer-generated certified copies. Long-form (full) and short-form (abstract) copies are available; most agencies and federal applications require the long-form certified copy.",
    "Birth certificates for events that occurred in DC are only available from DC Vital Records — not from any state vital records office.",
    "For international use, birth certificates may need an apostille or authentication from the DC Superior Court or the US Department of State.",
    "Name or gender marker changes on DC birth certificates can be requested through the Vital Records Division. DC does not require surgery or a court order for gender marker changes — a signed statement from the applicant is sufficient under D.C. Code § 7-231.18.",
    "Expedited processing is available for online orders only; there is no state-run expedited service for mail-in requests.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, DC will accept two forms of secondary identification (e.g., Social Security card plus a utility bill, or a health insurance card plus a bank statement). Homeless individuals can present a letter from a shelter or homeless services provider certifying their identity — contact the Vital Records Division at (202) 442-9009 before visiting to discuss your situation. Youth aging out of foster care should work with their CFSA caseworker, who can request the certificate on their behalf. DC also participates in the District's coordinated ID services through the Department of Human Services, which can assist individuals experiencing homelessness or lacking identification.",
  lastVerified: "2026-03-21",
};
