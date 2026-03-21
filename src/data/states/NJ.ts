import { StateVitalRecords } from "@/types";

export const NJ: StateVitalRecords = {
  stateCode: "NJ",
  stateName: "New Jersey",
  office: {
    name: "New Jersey Department of Health, Office of Vital Statistics and Registry",
    address: "P.O. Box 370, Trenton, NJ 08625-0370",
    phone: "1-866-649-8726",
    website: "https://www.nj.gov/health/vital/",
    hours: "Mon–Fri 8:30 AM – 4:00 PM ET (walk-in drop-off only after 3:30 PM)",
  },
  fees: {
    certified: 25,
    additionalCopy: 2,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.nj.gov/health/vital/order-vital/online-requests/",
      provider: "vitalchek",
      additionalFee: 7,
      notes:
        "Orders processed through VitalChek. Optional expedited UPS shipping ~$12 additional. Processing takes 6–8 weeks from date of approval.",
    },
    mail: {
      address:
        "Office of Vital Statistics & Registry, NJ Department of Health, P.O. Box 370, Trenton, NJ 08625-0370",
      processingTime: "8–14 weeks",
      notes:
        "Include completed REG-27a form, copy of acceptable ID, and check/money order. Do NOT send original ID documents.",
    },
    inPerson: {
      locations:
        "State office at 140 East Front Street, Trenton, NJ. Local municipal registrars also issue certificates — often faster.",
      processingTime: "Same day at state office (arrive before 3:30 PM) and most local registrars",
      notes:
        "NJ has 565 municipal registrars. For fastest service, visit the registrar in the municipality where the birth occurred.",
    },
    phone: {
      number: "877-622-7549",
      provider: "VitalChek",
      notes: "Same fees as online ordering. Credit/debit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Valid US photo driver's license or photo non-driver ID with current address",
    ],
    secondaryId: [
      "Valid driver's license without photo PLUS one alternate ID with current address",
      "OR two alternate forms of ID (at least one with current address): voter registration card, utility bill (90 days), bank statement (90 days), W-2/tax return, vehicle registration, school ID, county ID, US or foreign passport",
    ],
    eligibleRequestors: [
      "The person named on the birth certificate (if of legal age)",
      "A parent of the person named on the record",
      "Child, sibling, or current spouse of the person named",
      "Legal representative (attorney)",
      "Authorized third party with notarized written release",
    ],
    notes:
      "Three ID options: (A) photo ID with current address, (B) non-photo driver's license plus one alternate ID, or (C) two alternate forms of ID.",
    acceptableIdUrl:
      "https://www.nj.gov/health/vital/contact-us/acceptable-identification/",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "One free certified copy. A social worker or emergency shelter coordinator submits the request on agency letterhead, including the agency's employer ID number and attestation of homeless status. The copy is mailed to the agency.",
      citation: "N.J.S.A. 26:8-63(f); P.L. 2016, c.98",
    },
    {
      eligibility: "Incarcerated individuals (re-entry)",
      howToClaim:
        "The Department of Corrections is required to provide a copy of the inmate's birth certificate at least 30 days prior to release for those incarcerated 90+ days who were born in NJ.",
      citation: "P.L. 2020, c.45 (Fair Release and Reentry Act)",
    },
    {
      eligibility: "Government, military, and pension purposes",
      howToClaim:
        "Free certified copies for prosecution of claims for public pension or military/naval enlistment purposes, and for administrative use by government agencies.",
      citation: "N.J.S.A. 26:8-63(a), (c), (d)",
    },
  ],
  recordsAvailableFrom: 1901,
  applicationFormUrl: "https://www.nj.gov/health/forms/reg-27a.pdf",
  specialNotes: [
    "Local municipal registrars are often much faster than the state office — visit the registrar in the municipality where the birth occurred for same-day service.",
    "State mail orders take 8–14 weeks; online orders take 6–8 weeks. Plan well ahead of deadlines.",
    "Arrive before 3:30 PM at the Trenton walk-in office for same-day processing.",
    "For records before 1901, contact the NJ State Archives or the local municipal registrar.",
    "Dial 2-1-1 in NJ for help finding free birth certificate programs and social worker referrals.",
  ],
  noIdWorkaround:
    "New Jersey accepts two alternate (non-photo) forms of ID instead of a photo ID. Combine any two from: voter registration card, utility bill (last 90 days), bank statement, W-2/tax return, vehicle registration, school ID, or county ID — at least one must show current address. If homeless, a social worker or shelter coordinator can submit the request on your behalf (no personal ID needed) and the fee is waived for one copy. Call 2-1-1 in NJ for referrals. If recently released from prison (90+ days), the DOC is required to help obtain your birth certificate before release.",
  lastVerified: "2026-03-21",
};
