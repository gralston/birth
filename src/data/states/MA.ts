import { StateVitalRecords } from "@/types";

export const MA: StateVitalRecords = {
  stateCode: "MA",
  stateName: "Massachusetts",
  office: {
    name: "Registry of Vital Records and Statistics (RVRS), Department of Public Health",
    address: "150 Mount Vernon Street, 1st Floor, Dorchester, MA 02125-3105",
    phone: "(617) 740-2600",
    website:
      "https://www.mass.gov/orgs/registry-of-vital-records-and-statistics",
    hours: "Mon–Fri 8:45 AM – 4:45 PM ET",
  },
  fees: {
    certified: 20,
    additionalCopy: 20,
    paymentMethods: [
      "check",
      "money order",
      "cash (in-person only)",
      "credit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/vital-records/massachusetts/massachusetts-vital-records",
      provider: "vitalchek",
      additionalFee: 12,
      notes:
        "VitalChek is the sole online/phone vendor. Standard processing ~10 business days. Expedited (next business day) available for additional fee. Research requests not available online.",
    },
    mail: {
      address:
        "Registry of Vital Records and Statistics, 150 Mt. Vernon St., 1st Floor, Dorchester, MA 02125",
      fee: 32,
      processingTime: "15–20 business days",
      notes:
        "Include completed Application for Vital Record, photocopy of government-issued photo ID (or two alternate IDs), and check/money order payable to 'The Commonwealth of Massachusetts.' Expedited mail processing ($42) takes ~10 business days. Limit 5 searches per request. Do not send original ID documents.",
    },
    inPerson: {
      locations:
        "State RVRS office at 150 Mount Vernon St., Dorchester, MA. Also available at all 351 city/town clerk offices statewide.",
      processingTime: "Same day at state office and most city/town clerks",
      notes:
        "City/town clerks maintain their own records and are often faster and cheaper than the state office. Visit the clerk in the city/town where the birth occurred for fastest service.",
      localOfficesUrl: "https://www.mass.gov/lists/clerk-directory",
    },
    phone: {
      number: "1-866-300-8535",
      provider: "VitalChek",
      notes:
        "Same fees as online ordering. Research requests not available by phone.",
    },
  },
  requirements: {
    primaryId: [
      "Valid driver's license (recently expired accepted)",
      "Valid US passport",
      "Other government-issued photo ID",
    ],
    secondaryId: [
      "Two required if no photo ID: work or school photo ID, utility bill, W-2 form, pay stub, library card, military ID, Massachusetts-issued ID (RMV, SNAP, DTA), correctional facility ID",
    ],
    eligibleRequestors: [
      "Any person with proper ID and fees (most birth records are open to the public)",
      "Restricted records (births to unmarried parents, adoptions): only the person named, a named parent, legal guardian, or by court order",
    ],
    notes:
      "Most Massachusetts birth records are open to the public — anyone with valid ID and the fee can request a copy. Records of births to unmarried parents and adoption records are restricted to the named person, parents, guardians, or by court order from Probate & Family Court.",
    acceptableIdUrl:
      "https://www.mass.gov/doc/vital-records-mail-order-form/download",
  },
  feeWaivers: [
    {
      eligibility: "City/town clerk reduced fees",
      howToClaim:
        "MGL c.262 s.34 sets the baseline town clerk fee for a birth certificate at $2. Municipalities may set their own rates (typically $10–$20), which is significantly less than the state RVRS fee. Check with your local city/town clerk for their current fee.",
      citation: "MGL c.262, § 34",
    },
  ],
  recordsAvailableFrom: 1936,
  applicationFormUrl:
    "https://www.mass.gov/doc/vital-records-mail-order-form/download",
  specialNotes: [
    "Massachusetts has a dual system: both the state RVRS and all 351 city/town clerks issue birth certificates. Local clerks are often faster and cheaper.",
    "City/town clerk fees are set locally and are usually $10–$20 — significantly less than the state RVRS fee of $20–$54 depending on method.",
    "Every state RVRS fee includes a 10-year record search. If the record is not found, a certified Negative Statement is issued (same fee).",
    "The state RVRS only holds records from 1936 onward. For older records, contact the Massachusetts State Archives at (617) 727-2816 or the city/town clerk where the birth occurred.",
    "Records pre-dating January 1, 1841, are exempt from access restrictions.",
    "VitalChek is the sole online/phone vendor — the state does not have its own ordering portal.",
  ],
  noIdWorkaround:
    "Massachusetts accepts two secondary documents instead of a photo ID: combine any two from work/school photo ID, utility bill, W-2 form, pay stub, library card, military ID, Massachusetts-issued ID (RMV, SNAP, DTA card), or correctional facility ID. Recently expired photo IDs are also accepted. Most birth records in Massachusetts are open to the public, so anyone with valid ID and the fee can request a copy — an eligible family member or friend can obtain it for you. For those experiencing homelessness, contact the Homeless ID Project or dial 2-1-1 for help obtaining birth certificates at no cost through community programs. City/town clerks may also charge lower fees than the state office.",
  lastVerified: "2026-03-21",
};
