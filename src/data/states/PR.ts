import { StateVitalRecords } from "@/types";

export const PR: StateVitalRecords = {
  stateCode: "PR",
  stateName: "Puerto Rico",
  office: {
    name: "Puerto Rico Department of Health, Demographic Registry (Registro Demográfico)",
    address:
      "P.O. Box 11854, Fernández Juncos Station, San Juan, PR 00910",
    phone: "(787) 765-2929 ext. 6100",
    website: "https://www.registrodemografico.pr.gov/",
    hours: "Mon–Fri 8:00 AM – 4:00 PM AST",
  },
  fees: {
    certified: 5,
    additionalCopy: 10,
    paymentMethods: [
      "money order (payable to Secretary of the Treasury / Secretario de Hacienda)",
      "cash (in-person at regional offices)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.registrodemografico.pr.gov/",
      provider: "state",
      notes:
        "The Demographic Registry offers online services through its portal. You must create an account and upload a copy of valid photo ID. Credit or debit card accepted for online orders. Processing time varies; standard delivery is 10–15 business days.",
    },
    mail: {
      address:
        "Registro Demográfico, P.O. Box 11854, Fernández Juncos Station, San Juan, PR 00910",
      processingTime: "4–8 weeks from receipt",
      notes:
        "Include a completed application form (Solicitud de Certificación de Nacimiento), a legible photocopy of the front and back of a valid unexpired government-issued photo ID, a money order payable to 'Secretario de Hacienda' (Secretary of the Treasury), and a pre-addressed stamped return envelope. Applications must be signed by the requestor. Do not send cash by mail.",
    },
    inPerson: {
      locations:
        "Demographic Registry Central Office — Metro Center Building, 5 Calle Mayagüez, 9th Floor, Hato Rey, PR 00918; and regional Demographic Registry offices throughout the island",
      processingTime: "Same day at central office if record is on file",
      notes:
        "Walk-in service is available at the central office in Hato Rey and at regional offices in municipalities across the island. Bring a valid government-issued photo ID. Wait times can be significant at the central office; regional offices may have shorter waits. Cash and money orders accepted in person.",
      localOfficesUrl: "https://www.registrodemografico.pr.gov/",
    },
    phone: {
      number: "(787) 765-2929 ext. 6100",
      notes:
        "Phone line is for inquiries and status checks only. Phone ordering is not available; use the online portal, visit in person, or submit a mail request.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Puerto Rico driver's license or state ID (Real ID compliant)",
      "Valid US passport or passport card",
      "Valid US military ID (CAC)",
      "Valid permanent resident card (green card)",
      "TSCE (Tarjeta de Seguro de Contribución Especial) — Puerto Rico government employee ID",
    ],
    secondaryId: [
      "Social Security card",
      "Health insurance card with full name",
      "Utility bill (current, with name and address)",
      "Bank statement (recent, with name and address)",
      "Employment ID with photo",
      "School or university ID with photo",
      "Voter registration card (Tarjeta Electoral)",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant) if 18 or older",
      "Parent listed on the birth certificate",
      "Legal guardian with court documentation",
      "Licensed attorney with written authorization from the registrant",
      "Authorized government agency representative",
      "Other person with direct, tangible, and legitimate interest who provides a notarized authorization from the registrant",
    ],
    notes:
      "Puerto Rico requires a legible photocopy of the front and back of a valid, unexpired government-issued photo ID. If you are not the registrant, you must provide documentation proving your relationship (e.g., court order, power of attorney, or notarized authorization). Puerto Rico limits birth certificate issuances to 3 copies per 12-month period to prevent fraud and identity theft.",
    acceptableIdUrl: "https://www.registrodemografico.pr.gov/",
  },
  feeWaivers: [
    {
      eligibility:
        "Persons age 60 and older who are residents of Puerto Rico receive their first certified birth certificate copy free of charge within a 12-month period",
      howToClaim:
        "Present valid government-issued photo ID showing date of birth and proof of Puerto Rico residency at any Demographic Registry office. The fee waiver is applied automatically when age is verified. Subsequent copies (2nd and 3rd within the same 12-month period) are $10 each.",
      citation: "Ley 191-2009, as amended; Demographic Registry administrative policy",
    },
    {
      eligibility:
        "Veterans of the US Armed Forces who need a birth certificate for official government use (e.g., VA benefits, federal employment, or military-related purposes)",
      howToClaim:
        "Present your DD-214 (Certificate of Release or Discharge from Active Duty) along with valid photo ID and documentation showing the certificate is needed for official use. The fee is waived at the discretion of the Demographic Registry.",
      citation: "Ley 191-2009; Puerto Rico Veterans' Bill of Rights (Ley 203-2007)",
    },
    {
      eligibility:
        "Individuals experiencing homelessness who need a birth certificate to obtain housing, employment, public benefits, or identification",
      howToClaim:
        "Obtain a referral letter from a shelter, social services agency, or the Puerto Rico Department of the Family (Departamento de la Familia) certifying your status. Present the letter at a Demographic Registry office and request a fee waiver. Contact (787) 765-2929 ext. 6100 in advance to confirm current procedures.",
    },
  ],
  recordsAvailableFrom: 1931,
  applicationFormUrl:
    "https://www.registrodemografico.pr.gov/",
  applicationFormUrlEs:
    "https://www.registrodemografico.pr.gov/",
  specialNotes: [
    "CRITICAL — Law 191 of 2009 (Ley 191-2009): Puerto Rico voided ALL birth certificates issued before July 1, 2010 due to widespread identity theft and fraud involving Puerto Rican birth certificates. Every person born in Puerto Rico must obtain a new certified birth certificate issued under the new security standards. Old certificates are no longer accepted by any government agency, school, or employer. This applies to all Puerto Ricans, whether they live on the island or in the US mainland.",
    "Puerto Rico limits birth certificate issuances to a maximum of 3 certified copies per 12-month period per person. This limit was enacted as an anti-fraud measure under Law 191.",
    "The Demographic Registry (Registro Demográfico) maintains birth records from April 22, 1931 to present. For births before 1931, contact the local church parish where the baptism was recorded, as civil registration was not centralized before that date.",
    "Puerto Rico is a US territory; birth certificates issued by the Demographic Registry are valid US documents and are accepted for passports, Real ID, and all federal purposes.",
    "Application forms and services are available in Spanish (the primary administrative language) and English. The Demographic Registry website is primarily in Spanish.",
    "New security certificates issued after July 1, 2010 include enhanced anti-fraud features such as watermarks, microprinting, and tamper-resistant paper.",
    "Puerto Ricans living on the US mainland can request new birth certificates by mail or online. Many Puerto Rican community organizations and congressional offices in the mainland can assist with the process.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, Puerto Rico's Demographic Registry may accept two forms of secondary identification (e.g., Social Security card plus a utility bill with your name and address). Homeless individuals should obtain a referral letter from a shelter or the Departamento de la Familia (Department of the Family) — call (787) 765-2929 ext. 6100 before visiting to discuss your situation. Puerto Ricans living on the US mainland without ID can contact their local congressional representative's office or a Puerto Rican community organization for assistance navigating the process. If you were affected by the 2010 certificate voiding (Law 191) and have no current ID, contact the Demographic Registry directly to discuss alternative verification procedures, as they may be able to verify identity through their records and additional documentation such as school records, medical records, or affidavits from family members.",
  lastVerified: "2026-03-21",
};
