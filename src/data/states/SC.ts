import { StateVitalRecords } from "@/types";

export const SC: StateVitalRecords = {
  stateCode: "SC",
  stateName: "South Carolina",
  office: {
    name: "South Carolina Department of Public Health, Division of Vital Records",
    address: "2600 Bull Street, Columbia, SC 29201",
    phone: "(803) 898-3630",
    website: "https://dph.sc.gov/public/vital-records",
    hours:
      "Mon, Tue, Thu, Fri 8:30 AM - 5:00 PM; Wed 9:30 AM - 5:00 PM (effective Jan 1, 2026)",
  },
  fees: {
    certified: 12,
    additionalCopy: 3,
    expedited: 5,
    paymentMethods: [
      "money order",
      "cashier's check",
      "credit card (in-person and online)",
      "debit card (in-person and online)",
      "cash (in-person only, no bills larger than $50)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/south-carolina/south-carolina-vital-records",
      provider: "vitalchek",
      additionalFee: 13.95,
      notes:
        "Online orders are processed through VitalChek. Only the person named on the birth certificate may order through VitalChek. Average processing time is 5-7 business days. The $17 expedited search fee applies to online orders.",
    },
    mail: {
      address:
        "S.C. Department of Public Health, Vital Records Section, P.O. Box 2046, West Columbia, SC 29171",
      processingTime: "4 weeks (standard $12) or 5 business days (expedited $17)",
      notes:
        "Include completed application (Form D-2595), photocopy of valid photo ID, and money order or cashier's check payable to S.C. DPH. Mail requests are only accepted at the state office.",
    },
    inPerson: {
      locations:
        "State office at 2600 Bull Street, Columbia, plus 16 regional Vital Records offices across the state (Aiken, Beaufort, Charleston, Chesterfield, Hampton, Orangeburg, Rock Hill, and others)",
      processingTime: "Same day (30-45 minutes typical)",
      notes:
        "Same-day service is the goal at all Vital Records offices. Amendment requests may take 1-2 business days. Bring valid photo ID and payment.",
      localOfficesUrl:
        "https://dph.sc.gov/public/vital-records/about-vital-records/office-locations",
    },
    phone: {
      number: "1-877-284-1008",
      provider: "VitalChek",
      notes:
        "Available 7 days a week, 24 hours a day. Credit card required. VitalChek service fee applies. Only the person named on the certificate may order by phone.",
    },
  },
  requirements: {
    primaryId: [
      "Valid US state driver's license or ID card (unexpired)",
      "Valid US passport",
      "Valid military ID",
      "Current school or employer issued photo ID",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill or bank statement with name and address",
      "Vehicle registration",
    ],
    eligibleRequestors: [
      "The person named on the certificate (must be at least 18)",
      "A parent named on the certificate",
      "Legal guardian with current court order",
      "Attorney representing the registrant or a parent listed on the certificate",
      "Department of Social Services for individuals in foster care or legal custody",
      "Kinship caregiver with a current court order",
      "Director or designee of a SC government agency or registered nonprofit on behalf of a homeless child or youth",
      "Immediate family member of a deceased registrant",
    ],
    notes:
      "A valid government, school, or employer issued photo ID is required. Applications without proper identification are automatically rejected and not processed.",
    acceptableIdUrl:
      "https://dph.sc.gov/public/vital-records/birth-certificates",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless children and youth served by a SC government agency or registered nonprofit",
      howToClaim:
        "The director or designee of a qualifying South Carolina governmental agency or nonprofit organization registered with the SC Secretary of State may request a birth certificate on behalf of a homeless child or youth at no fee, subject to the department's verification process.",
      citation: "S.C. Code Ann. 44-63-80",
    },
    {
      eligibility:
        "Department of Social Services for individuals in foster care",
      howToClaim:
        "DSS may obtain certified copies for individuals in foster care or its legal custody at no charge.",
      citation: "S.C. Code Ann. 44-63-80",
    },
  ],
  recordsAvailableFrom: 1915,
  applicationFormUrl:
    "https://dph.sc.gov/sites/scdph/files/Library/D-2595.pdf",
  specialNotes: [
    "DHEC was split into two agencies effective July 1, 2024. Vital records are now managed by the South Carolina Department of Public Health (DPH) at dph.sc.gov.",
    "The $12 standard search fee is non-refundable even if no record is found. The fee includes one certified copy if a record is located.",
    "The $5 expedite fee (total $17) provides processing within 5 business days or less, including all in-person requests.",
    "For births before 1915, contact the county probate court where the birth occurred.",
    "Beginning January 1, 2026, all Vital Records offices open at 9:30 AM on Wednesdays instead of 8:30 AM.",
    "Bill S.766 (2025-2026 session) proposes waiving fees for homeless individuals and former foster care youth, but has not yet been enacted as of March 2026.",
  ],
  noIdWorkaround:
    "South Carolina strictly requires a valid government, school, or employer issued photo ID; applications without proper identification are automatically rejected. If you lack photo ID, ask an eligible family member (parent named on the certificate) who does have ID to request on your behalf. If you are a homeless child or youth, a director or designee of a qualifying SC government agency or registered nonprofit can request your certificate without you presenting ID. Contact SC Legal Services at (888) 346-5592 or sclegal.org for free legal help obtaining ID and vital records. You may also call the state Vital Records office at (803) 898-3630 to discuss alternative documentation options.",
  lastVerified: "2026-03-21",
};
