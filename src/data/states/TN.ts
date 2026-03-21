import { StateVitalRecords } from "@/types";

export const TN: StateVitalRecords = {
  stateCode: "TN",
  stateName: "Tennessee",
  office: {
    name: "Tennessee Department of Health, Office of Vital Records",
    address:
      "710 James Robertson Parkway, Andrew Johnson Tower, 1st Floor, Nashville, TN 37243",
    phone: "(615) 741-1763",
    website:
      "https://www.tn.gov/health/health-program-areas/vital-records.html",
    hours:
      "Mon/Wed/Fri 8 AM – 4 PM CT; Tue/Thu 8 AM – 6 PM CT (extended hours)",
  },
  fees: {
    certified: 15,
    additionalCopy: 15,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/tennessee/tennessee-vital-records",
      provider: "vitalchek",
      additionalFee: 10,
      notes:
        "VitalChek is the only authorized vendor. Additional $5 agency expedite fee applies. State warns against unauthorized third-party sites.",
    },
    mail: {
      address:
        "Tennessee Office of Vital Records, 710 James Robertson Parkway, Andrew Johnson Tower, 1st Floor, Nashville, TN 37243",
      processingTime: "2–6 weeks",
      notes:
        "Include completed Form PH-1654, check/money order, and photocopy of ID. If no response within 45 days, contact the office.",
    },
    inPerson: {
      locations:
        "State office in Nashville and any county health department statewide (not limited to county of birth)",
      processingTime: "Same day at state office and most county health departments",
      notes:
        "Any county health department can issue any Tennessee birth certificate — you don't need to go to the county where the birth occurred.",
      localOfficesUrl:
        "https://www.tn.gov/health/health-program-areas/localdepartments.html",
    },
    phone: {
      number: "1-800-255-2414",
      provider: "VitalChek",
      notes: "Same fees as online ordering. Credit/debit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Valid US driver's license (with issue and expiration date)",
      "Valid US passport",
      "Valid US military ID",
      "US Certificate of Naturalization or Citizenship",
    ],
    secondaryId: [
      "Two of different types required: bank statement, pay stub, Social Security card, utility bill, vehicle registration",
    ],
    eligibleRequestors: [
      "The person named on the certificate (if 18+)",
      "Spouse of the registrant",
      "Parent listed on the birth certificate",
      "Child of the registrant",
      "Legal guardian (with proof of guardianship)",
      "Authorized representative (with signed permission and copies of both IDs)",
    ],
    acceptableIdUrl:
      "https://vitalrecords.tn.gov/hc/en-us/articles/36331554733587-Identification-Requirements",
  },
  feeWaivers: [
    {
      eligibility: "Homeless youth (minors)",
      howToClaim:
        "Verified homeless children and youth may obtain a birth certificate through verification from a homeless services agency director, school McKinney-Vento liaison, school social worker/counselor, or TRIO/GEAR UP program director.",
      citation: "Tenn. Code Ann. § 49-50-1703 (effective July 1, 2018)",
    },
    {
      eligibility: "Foster care youth aging out",
      howToClaim:
        "The Department of Children's Services provides birth certificates to youth aging out of care at 18. Youth who exited without documents can call 844-887-7277.",
      citation: "Tenn. Code Ann. § 37-2-604",
    },
  ],
  recordsAvailableFrom: 1908,
  applicationFormUrl:
    "https://www.tn.gov/content/dam/tn/health/documents/vital-records/PH-1654-Application-For-Certificate-of-Birth.pdf",
  applicationFormUrlEs:
    "https://www.tn.gov/content/dam/tn/health/documents/vital-records/PH-1654-Application-For-Certificate-of-Birth-Spanish.pdf",
  specialNotes: [
    "Any county health department can issue any Tennessee birth or death certificate — you don't need to go to the county where the birth occurred.",
    "VitalChek is the only authorized third-party vendor.",
    "No records exist for 1913 (the registration law lapsed at end of 1912; resumed 1914).",
    "Some cities have earlier records: Memphis (1874), Chattanooga (1879), Nashville (1881), Knoxville (1881).",
  ],
  noIdWorkaround:
    "Tennessee offers a unique option: if the application (Form PH-1654) is signed and notarized, no additional ID documents are required. Alternatively, submit two secondary IDs of different types (bank statement, utility bill, Social Security card, pay stub, or vehicle registration). Homeless minors can obtain certificates through verification from a school McKinney-Vento liaison or homeless services provider. An authorized representative with valid ID can also request on your behalf.",
  lastVerified: "2026-03-21",
};
