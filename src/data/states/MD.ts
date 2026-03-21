import { StateVitalRecords } from "@/types";

export const MD: StateVitalRecords = {
  stateCode: "MD",
  stateName: "Maryland",
  office: {
    name: "Maryland Department of Health, Division of Vital Records",
    address: "6764-B Reisterstown Road, Baltimore, MD 21215",
    phone: "(410) 764-3038",
    website: "https://health.maryland.gov/vsa/Pages/birth.aspx",
    hours: "Mon–Fri 8:00 AM – 4:00 PM ET",
  },
  fees: {
    certified: 25,
    additionalCopy: 25,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone)",
      "cash (in-person)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://vitalchek.com/v/vital-records/maryland",
      provider: "vitalchek",
      additionalFee: 19.25,
      notes:
        "Orders placed through VitalChek, the state's exclusive online vendor. State fee of $25 plus VitalChek service fee. Expedited shipping available for additional cost.",
    },
    mail: {
      address:
        "Division of Vital Records, P.O. Box 68760, Baltimore, MD 21215-0036",
      processingTime: "4–6 weeks from receipt",
      notes:
        "Include completed VR-APPLICATION form, photocopy of valid government-issued ID, and check or money order payable to 'Division of Vital Records.' Include self-addressed stamped envelope for faster return.",
    },
    inPerson: {
      locations:
        "Main office at 6764-B Reisterstown Road, Baltimore, MD 21215. Also available at local health department offices in some counties.",
      processingTime: "Same day if record is on file",
      notes:
        "Walk-in service available at the Baltimore office. Bring valid photo ID. Appointments are not required but recommended during busy periods.",
      localOfficesUrl:
        "https://health.maryland.gov/vsa/Pages/lhd.aspx",
    },
    phone: {
      number: "1-877-572-6332",
      provider: "VitalChek",
      notes:
        "VitalChek phone ordering with credit/debit card. State fee plus VitalChek service fee applies.",
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
      "Certified school records or transcript",
      "W-2 or 1099 tax form (recent year)",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant) if 18 or older",
      "Parent listed on the birth certificate",
      "Legal guardian with court documentation",
      "Licensed attorney representing the registrant",
      "Government agency authorized by statute",
      "Other persons with a direct and tangible interest, with documentation",
    ],
    notes:
      "Maryland requires proof of identity and proof of relationship. If you are not the registrant, you must show documentation proving your relationship (e.g., your own birth certificate showing shared parentage, court order of guardianship, power of attorney).",
    acceptableIdUrl:
      "https://health.maryland.gov/vsa/Pages/idreqs.aspx",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless individuals requesting a birth certificate for the purpose of obtaining housing, employment, or public benefits",
      howToClaim:
        "Submit a written statement from a shelter, social services agency, or other organization certifying homeless status. The fee may be waived at the discretion of the registrar.",
      citation: "Md. Code Ann., Health–Gen. § 4-215(d)",
    },
    {
      eligibility:
        "Victims of domestic violence seeking records to establish a new identity or obtain protective orders",
      howToClaim:
        "Provide documentation of domestic violence status such as a protective order or letter from a domestic violence program. Contact the Division of Vital Records at (410) 764-3038 to request a fee waiver.",
      citation: "Md. Code Ann., Health–Gen. § 4-215",
    },
    {
      eligibility:
        "Youth aging out of foster care (ages 17–21) who need birth certificates for identification or employment",
      howToClaim:
        "The Maryland Department of Human Services or the local Department of Social Services should request the record on the youth's behalf. Contact the local DSS caseworker.",
      citation: "Md. Code Ann., Family Law § 5-534",
    },
    {
      eligibility:
        "Indigent individuals who cannot afford the fee and need the record for a government-required purpose",
      howToClaim:
        "Submit a written request explaining financial hardship and the reason the certificate is needed. Include proof of public assistance (e.g., SNAP, Medicaid, TANF enrollment) if available.",
      citation: "Md. Code Ann., Health–Gen. § 4-215(d)",
    },
  ],
  recordsAvailableFrom: 1898,
  applicationFormUrl:
    "https://health.maryland.gov/vsa/Documents/Certificates/Birth/birth%20cert%20appl_20211007.pdf",
  specialNotes: [
    "Maryland birth records from 1898 to present are maintained by the Division of Vital Records. For records before 1898, contact the Maryland State Archives at (410) 260-6400 or visit msa.maryland.gov.",
    "Baltimore City birth records from 1875–1941 are available through the Baltimore City Archives — contact (410) 396-4863.",
    "Maryland allows expedited processing through VitalChek for an additional fee; there is no state-run expedited service for mail orders.",
    "Apostille or authentication of birth certificates for international use can be requested through the Maryland Secretary of State at (410) 974-5521.",
    "Maryland issues both short-form (abstract) and long-form (full/vault copy) birth certificates. Most agencies require the long-form certified copy.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, Maryland will accept two forms of secondary identification (e.g., Social Security card + utility bill, or health insurance card + bank statement). Homeless individuals can present a letter from a shelter or social services agency certifying their identity and status — contact the Division of Vital Records at (410) 764-3038 to discuss your situation before visiting. Youth aging out of foster care should work with their DSS caseworker, who can request the certificate on their behalf without the standard ID requirements.",
  lastVerified: "2026-03-21",
};
