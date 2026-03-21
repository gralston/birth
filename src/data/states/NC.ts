import { StateVitalRecords } from "@/types";

export const NC: StateVitalRecords = {
  stateCode: "NC",
  stateName: "North Carolina",
  office: {
    name: "North Carolina Vital Records",
    address: "1903 Mail Service Center, Raleigh, NC 27699-1903",
    phone: "(919) 733-3000",
    website: "https://vitalrecords.nc.gov/",
    hours: "In-person by appointment only (last appointment 2:30 PM)",
  },
  fees: {
    certified: 24,
    additionalCopy: 15,
    expedited: 15,
    paymentMethods: [
      "certified check",
      "business check",
      "money order",
      "credit card (online via VitalChek)",
      "cash (in-person)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://vitalrecords.nc.gov/order.htm",
      provider: "vitalchek",
      additionalFee: 13.95,
      notes:
        "Online orders are processed through VitalChek. Processing time is currently 110–115 business days due to REAL ID demand. County Register of Deeds is much faster.",
    },
    mail: {
      address:
        "NC Vital Records, 1903 Mail Service Center, Raleigh, NC 27699-1903",
      processingTime: "110–115 business days (REAL ID backlog)",
      notes:
        "Extremely long processing time. Strongly consider visiting your county Register of Deeds for same-day service instead.",
    },
    inPerson: {
      locations:
        "State office at 225 N. McDowell St., Raleigh, NC (by appointment). County Register of Deeds offices — fastest option.",
      processingTime: "Same day at county Register of Deeds",
      notes:
        "County Register of Deeds is strongly recommended. They can issue certified copies for any NC birth and typically process same-day.",
      localOfficesUrl: "https://vitalrecords.nc.gov/county.htm",
    },
  },
  requirements: {
    primaryId: [
      "Valid state driver's license or non-driver ID",
      "Valid government-issued photo ID",
    ],
    secondaryId: [
      "Two different secondary IDs (if no photo ID available)",
    ],
    eligibleRequestors: [
      "The person named on the certificate",
      "Spouse or sibling",
      "Direct ancestor or descendant",
      "Stepparent or stepchild",
      "Legal representative",
      "A person with legal property or personal rights interest",
    ],
    notes:
      "One primary photo ID OR two different secondary IDs required.",
    acceptableIdUrl: "https://vitalrecords.nc.gov/faqs.htm",
  },
  feeWaivers: [
    {
      eligibility: "Free birth certificate for voter ID",
      howToClaim:
        "Registered voters who sign a declaration that they need a birth certificate to obtain photo ID and do not currently have one can get a free certified copy from the county Register of Deeds.",
      citation: "NCGS 130A-93.1(b) and NCGS 161-10(a)(8)",
      forReason: "voter-id",
    },
    {
      eligibility: "Seniors 62+ (reduced fee at county level)",
      howToClaim:
        "County Register of Deeds may waive the $10 local retention fee for applicants age 62 and older.",
      citation: "NCGS 130A-93.1(a) and NCGS 161-10(a)(8)",
    },
  ],
  recordsAvailableFrom: 1913,
  applicationFormUrl:
    "https://vitalrecords.nc.gov/documents/ApplicationStandardVRFillableBirth122818.pdf",
  specialNotes: [
    "Mail and online processing is currently 110–115 business days due to REAL ID demand. Visit your county Register of Deeds for same-day service.",
    "The $24 search fee is nonrefundable even if no record is found and covers a 3-year search window.",
    "For births before October 1913, contact the county Register of Deeds — they may have earlier records.",
    "Since January 2026, adoptees can obtain birth certificates directly from the county Register of Deeds (SB 248).",
  ],
  noIdWorkaround:
    "North Carolina accepts two different secondary (non-photo) IDs instead of one primary photo ID. If homeless, a letter from a social service provider may be accepted as ID. If you are a registered voter who needs a birth certificate to get photo ID, you can get a free copy at your county Register of Deeds by signing a voter declaration. Visit the county Register of Deeds for the most flexible in-person assistance — directory at vitalrecords.nc.gov/county.htm.",
  lastVerified: "2026-03-21",
};
