import { StateVitalRecords } from "@/types";

export const LA: StateVitalRecords = {
  stateCode: "LA",
  stateName: "Louisiana",
  office: {
    name: "Louisiana Department of Health, Vital Records Registry",
    address: "1450 Poydras Street, Suite 400, New Orleans, LA 70112",
    phone: "(504) 593-5100",
    website: "https://ldh.la.gov/vital-records",
    hours: "Mon–Fri 8:00 AM – 3:30 PM CT (walk-in); excludes state holidays",
  },
  fees: {
    certified: 15,
    additionalCopy: 15,
    paymentMethods: [
      "money order",
      "check",
      "cash (in-person, exact amount required)",
      "credit card (VitalChek orders only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/louisiana",
      provider: "vitalchek",
      additionalFee: 12.5,
      notes:
        "VitalChek is the sole authorized online vendor. An additional service fee and a $0.50 state surcharge apply per order. Expedited shipping is available for an extra fee.",
    },
    mail: {
      address:
        "Vital Records Registry, P.O. Box 60630, New Orleans, LA 70160",
      processingTime: "8–10 weeks",
      notes:
        "Include completed application form, a photocopy of valid photo ID, and a check or money order payable to 'Louisiana Vital Records.' A $0.50 state surcharge is added to each mail order.",
    },
    inPerson: {
      locations:
        "Vital Records Central Office in New Orleans, nine regional OPH service centers, and participating parish clerks of court statewide",
      processingTime: "Same day at Central Office and most clerk of court locations",
      notes:
        "Walk-in services are available at the Central Office (1450 Poydras St., Suite 400, New Orleans). Participating parish clerks of court can also issue certified copies of birth records. Bring valid photo ID and exact payment. Clerks of court use a separate request form.",
      localOfficesUrl:
        "https://ldh.la.gov/index.cfm/directory/category/279",
    },
    phone: {
      number: "(877) 605-8562",
      provider: "VitalChek",
      notes:
        "VitalChek service fee (~$12.50) and $0.50 state surcharge apply. Credit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Current state-issued driver's license with photo",
      "Current state-issued photo ID card",
      "Current U.S. military ID with photo",
      "U.S. or foreign-issued passport",
      "U.S. Certificate of Naturalization (Form N-550, N-570, or N-578)",
      "U.S. Certificate of Citizenship (Form N-560 or N-578)",
      "Current school ID or yearbook with photo (high school students)",
    ],
    secondaryId: [
      "Payroll stub showing name and Social Security number (not handwritten)",
      "U.S. military dependent ID with photo",
      "Original DD-214 Military Discharge document",
      "Certified true copy of voter registration application",
      "Social Security card",
    ],
    eligibleRequestors: [
      "The person named on the certificate",
      "A parent listed on the certificate",
      "Adult child of the person named on the certificate",
      "Sibling of the person named on the certificate",
      "Grandparent of the person named on the certificate",
      "Adult grandchild of the person named on the certificate",
      "Attorney representing any of the above",
      "Authorized individual with a signed Authorization Release of Records and copy of the registrant's ID",
    ],
    notes:
      "One primary ID or two secondary IDs required. When someone other than a parent listed on the certificate requests a minor's record, a judgment of custody must be presented — notarized custody papers or provisional custody mandates are not accepted.",
    acceptableIdUrl:
      "https://ldh.la.gov/vital-records/identification-requirements",
  },
  feeWaivers: [
    {
      eligibility:
        "First certified copy of a newborn's birth certificate mailed to the parent",
      howToClaim:
        "No action needed — the state automatically mails the first certified copy to the parent's address shown on the birth record at no charge.",
      citation: "La. R.S. 40:40(B)",
    },
    {
      eligibility: "Veterans requesting records for VA purposes",
      howToClaim:
        "Records needed for Veterans Administration claims are furnished free of charge under federal law. Include documentation that the request is for VA purposes.",
      citation: "38 U.S.C. § 1542; La. R.S. 40:41",
    },
  ],
  recordsAvailableFrom: 1911,
  applicationFormUrl:
    "https://ldh.la.gov/assets/oph/Center-RS/vitalrec/birth_deathorderingpacket.pdf",
  specialNotes: [
    "Louisiana offers two types of birth certificates: a long-form certified copy ($15) and a short-form birth card ($9). The long form is a full photocopy of the original record; the short form (birth card) shows name at birth, date, parish, father's initials, and mother's last name and first initial.",
    "Vital Records fees are set by statute (La. R.S. 40:40) and are officially 'not subject to waiver' except as provided by law.",
    "A $0.50 state surcharge is added to each mail-in or VitalChek order.",
    "Participating parish clerks of court can issue birth certificates and may offer faster in-person service than the central office.",
    "For births before 1911, only Orleans Parish records may be available through the state office. Contact the Louisiana Secretary of State's archives for older records.",
    "Spouses are not listed as eligible requestors under Louisiana law — only the registrant, parents, adult children, siblings, grandparents, adult grandchildren, and their attorneys may request copies without a signed authorization.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent, adult child, sibling, grandparent, or adult grandchild) who has valid photo ID request the certificate on your behalf. If no family member can help, contact the Vital Records Registry at (504) 593-5100 to discuss submitting two secondary documents (e.g., payroll stub with SSN, voter registration, DD-214). Louisiana Legal Services (LouisianaLawHelp.org) and local homeless service providers may also be able to assist with obtaining identification documents.",
  lastVerified: "2026-03-21",
};
