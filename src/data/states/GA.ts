import { StateVitalRecords } from "@/types";

export const GA: StateVitalRecords = {
  stateCode: "GA",
  stateName: "Georgia",
  office: {
    name: "Georgia Department of Public Health, State Office of Vital Records",
    address: "1680 Phoenix Boulevard, Suite 100, Atlanta, GA 30349",
    phone: "(404) 679-4702",
    website: "https://dph.georgia.gov/VitalRecords",
    hours: "Mon–Fri 8:00 AM – 4:00 PM ET",
  },
  fees: {
    certified: 25,
    additionalCopy: 5,
    paymentMethods: [
      "money order",
      "certified check",
      "credit card (online)",
      "cash (in-person at county offices)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://services.georgia.gov/gta/rover/",
      provider: "state",
      additionalFee: 8,
      notes:
        "ROVER is Georgia's state portal. GoCertificates and VitalChek are also authorized vendors. Processing takes up to 10 weeks regardless of vendor — expedited shipping ($16) only speeds delivery, not processing.",
      vendorListUrl: "https://dph.georgia.gov/ways-request-vital-record/online-ordering",
    },
    mail: {
      address:
        "State Office of Vital Records, 1680 Phoenix Boulevard, Suite 100, Atlanta, GA 30349",
      processingTime: "8–10 weeks",
      notes:
        "Include completed Form 3918, copy of valid photo ID, and money order or certified check.",
    },
    inPerson: {
      locations:
        "State office in Atlanta and 159 county probate courts across Georgia",
      processingTime: "Same day at many county probate courts",
      notes:
        "County probate courts are independent and may have different fees and payment methods. Many can process requests while you wait.",
      localOfficesUrl: "https://dph.georgia.gov/Vital-Records-Registrar-Locations",
    },
    phone: {
      number: "877-572-6343",
      provider: "VitalChek",
      notes: "VitalChek service fee (~$12.50) applies. Credit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Georgia driver's license or state ID",
      "Valid US passport",
      "Valid military ID or veteran's ID",
      "Georgia Weapons Carry License (with photo)",
      "Driver's license from another US state (unexpired)",
      "Current school/university ID (with ID number and signature)",
    ],
    secondaryId: [
      "Social Security card",
      "School records",
      "Affidavits from relatives or community members",
    ],
    eligibleRequestors: [
      "The person named on the certificate",
      "A parent named on the certificate",
      "Adult child, grandparent, or adult sibling of the registrant",
      "Spouse of the registrant",
      "Authorized legal guardian or legal representative",
    ],
    acceptableIdUrl: "https://dph.georgia.gov/ways-request-vital-record/birth",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness (via DBHDD partnership)",
      howToClaim:
        "If receiving services through a DBHDD-contracted agency or hospital, the agency can request your birth certificate at no cost with no photo ID required. Turnaround is approximately 5 business days. Contact a local homeless services provider to check if they participate.",
    },
    {
      eligibility: "Foster youth aging out of care",
      howToClaim:
        "Case workers are expected to assist youth exiting foster care with obtaining their birth certificate, Social Security card, and state ID.",
      citation: "O.C.G.A. § 49-5-3",
    },
  ],
  recordsAvailableFrom: 1919,
  applicationFormUrl:
    "https://dph.georgia.gov/document/document/request-search-birth-form-3918/download",
  specialNotes: [
    "Online orders take up to 10 weeks regardless of vendor. Expedited shipping only speeds delivery, not processing.",
    "County probate courts often provide faster in-person service than the state office.",
    "For births in 2004–2006, you must provide the hospital name on your application.",
    "For births before 1919, contact the county or the Georgia Archives at georgiaarchives.org.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent, adult child, spouse, sibling, grandparent) with valid ID request on your behalf — this is the simplest path. If experiencing homelessness, a DBHDD-contracted agency can request your certificate with no photo ID and no fee. You may also contact the State Office at (404) 679-4702 to discuss submitting secondary documentation (Social Security card, school records, notarized affidavit from a relative). Georgia Legal Aid (georgialegalaid.org) can provide free assistance.",
  lastVerified: "2026-03-21",
};
