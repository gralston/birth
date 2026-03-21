import { StateVitalRecords } from "@/types";

export const VT: StateVitalRecords = {
  stateCode: "VT",
  stateName: "Vermont",
  office: {
    name: "Vermont Department of Health, Vital Records Office",
    address: "280 State Drive, Waterbury, VT 05671-8370",
    phone: "(802) 863-7275",
    website: "https://www.healthvermont.gov/stats/vital-records",
    hours: "Mon–Fri 7:45 AM – 4:30 PM ET",
  },
  fees: {
    certified: 10,
    additionalCopy: 10,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online only)",
      "cash (in-person at town clerk)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://secure.vermont.gov/VSARA/vitalrecords/",
      provider: "state",
      additionalFee: 2,
      notes:
        "Vermont operates its own online ordering portal through the Secretary of State's office (VSARA). Each certified copy costs $12 ($10 state fee + $2 online processing fee). Most orders ship via standard US mail within 5–7 business days. Expedited shipping is available for an additional $14.50 flat rate.",
    },
    mail: {
      address:
        "Vermont Department of Health, Vital Records, 280 State Drive, Waterbury, VT 05671-8370",
      processingTime: "10–20 business days",
      notes:
        "Include completed Application for Certified Copy of Vermont Birth or Death Certificate, a photocopy of your government-issued photo ID, and a check or money order for $10 per copy payable to 'Vermont Department of Health.' Mail requests require a copy of valid ID.",
    },
    inPerson: {
      locations:
        "Any Vermont town or city clerk's office statewide, or the State Vital Records office at 280 State Drive, Waterbury, VT.",
      processingTime: "Same day at most town/city clerk offices",
      notes:
        "Under Vermont Act 46, certified copies of birth certificates can be obtained from any town or city clerk, regardless of where the birth occurred. This is the fastest and often cheapest option for people in Vermont. Fees may vary slightly by municipality. Call ahead to confirm hours and availability.",
      localOfficesUrl:
        "https://www.healthvermont.gov/stats/vital-records/information-town-and-city-clerks",
    },
    phone: {
      number: "(802) 863-7275",
      notes:
        "Phone service is available for questions and to check order status. Toll-free within Vermont: (800) 439-5008. Phone ordering of certificates is not available; use the online portal or mail instead.",
    },
  },
  requirements: {
    primaryId: [
      "Valid U.S. or state driver's license or ID card",
      "Valid U.S. passport or foreign passport",
      "Valid U.S. military ID card containing signature",
      "U.S. territories driver's license or ID card",
    ],
    secondaryId: [
      "U.S. Resident Alien Card or Green Card",
      "U.S. Employment Authorization Document or Card",
      "U.S. Internal Revenue W-2 form",
      "U.S. Selective Service Card",
      "U.S. or state court documents with current address",
      "Utility bill with name and current address",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant)",
      "A parent listed on the certificate",
      "Legal guardian with court documentation",
      "Court-appointed parties",
      "Legal representative of an eligible party",
    ],
    notes:
      "Vermont restricts access to certified birth certificates to eligible applicants with a direct and legitimate interest. A valid government-issued photo ID or two forms of alternate identification (which together must contain a current address and the applicant's signature) are required with all requests.",
    acceptableIdUrl:
      "https://www.healthvermont.gov/stats/vital-records/order-vital-records",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals experiencing homelessness (lacking a fixed, regular, and adequate nighttime residence)",
      howToClaim:
        "Complete and submit the Affidavit of Homeless Status form (available from the Vital Records office or healthvermont.gov). The affidavit must be signed by both the applicant and a qualified homeless services provider, attorney, school liaison, or state-funded service provider. Submit the affidavit with your birth certificate application; no fee payment is required.",
      citation: "18 V.S.A. § 5017",
    },
    {
      eligibility:
        "Former foster youth ages 18–24 who resided in a foster home or residential child care facility between ages 16 and 18 pursuant to placement by a child-placing agency",
      howToClaim:
        "Attest to your former foster care status on your application. The State Registrar will waive the fee upon verification. Contact the Vital Records office at (802) 863-7275 if you need assistance documenting your eligibility.",
      citation: "18 V.S.A. § 5017",
    },
  ],
  recordsAvailableFrom: 1857,
  applicationFormUrl:
    "https://www.healthvermont.gov/sites/default/files/documents/pdf/HS_VR_App_Certified-Copy-Birth-Death-Form.pdf",
  specialNotes: [
    "Vermont has a dual system: both the state Vital Records office in Waterbury and all municipal (town/city) clerks statewide can issue certified birth certificates. Under Act 46, any clerk can issue a certificate regardless of where the birth occurred.",
    "Town and city clerks are often the fastest option for in-person requests and may process same-day. The state office handles mail and online requests.",
    "Vermont vital records date back to approximately 1760 from town-level records. The modern vital registration law was enacted in 1857. For records before 1857, contact the town clerk where the birth occurred or the Vermont State Archives (VSARA).",
    "Noncertified copies of birth certificates are available at no charge and are printed on plain white paper with a 'noncertified copy' watermark. These are not valid for legal purposes but can be used for informational needs.",
    "Online orders through the state portal (secure.vermont.gov) cost $12 per copy ($10 fee + $2 processing). Expedited shipping adds $14.50.",
  ],
  noIdWorkaround:
    "If you lack a government-issued photo ID, Vermont accepts two forms of alternate identification that together contain a current address and your signature (e.g., a W-2 form plus a utility bill, or a court document plus a Selective Service card). For individuals experiencing homelessness, complete the Affidavit of Homeless Status form with the help of a homeless services provider, shelter staff, school McKinney-Vento liaison, or attorney — this waives both the ID requirement and the fee. An eligible family member (parent, guardian, or legal representative) who has valid ID can also request the certificate on your behalf. Contact the Vital Records office at (802) 863-7275 or toll-free at (800) 439-5008 for assistance.",
  lastVerified: "2026-03-21",
};
