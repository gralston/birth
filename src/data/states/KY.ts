import { StateVitalRecords } from "@/types";

export const KY: StateVitalRecords = {
  stateCode: "KY",
  stateName: "Kentucky",
  office: {
    name: "Kentucky Cabinet for Health and Family Services, Office of Vital Statistics",
    address: "275 East Main Street, 1E-A, Frankfort, KY 40621",
    phone: "(502) 564-4212",
    website:
      "https://www.chfs.ky.gov/agencies/dph/dehp/vsb/Pages/birth-certificates.aspx",
    hours:
      "Mon-Fri 8:00 AM - 4:30 PM ET (excluding state holidays; same-day service not guaranteed after 3:45 PM)",
  },
  fees: {
    certified: 10,
    additionalCopy: 10,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/kentucky/kentucky-office-of-vital-statistics",
      provider: "vitalchek",
      additionalFee: 13.75,
      notes:
        "VitalChek is the only authorized online/phone vendor. An additional processing fee applies on top of the $10 state fee. Accepts Visa, MasterCard, Discover, and American Express. UPS overnight delivery available for an additional shipping fee.",
    },
    mail: {
      address:
        "Vital Statistics, 275 East Main Street 1E-A, Frankfort, KY 40621",
      processingTime: "Up to 30 business days from date payment is posted",
      notes:
        "Include completed VS-37 application form and check or money order payable to the Kentucky State Treasurer. Do not send cash. Include a photocopy of valid photo ID. A drop box is also available at the visitor entrance at 275 E. Main St., Frankfort for in-person drop-off of mail-style applications.",
    },
    inPerson: {
      locations:
        "Office of Vital Statistics, 275 East Main Street (Martin Luther King Blvd entrance), Frankfort, KY. Application forms are also available at local county health departments statewide.",
      processingTime:
        "Not guaranteed same day; standard processing up to 30 business days",
      notes:
        "Walk-in lobby service available during office hours. A drop box at the visitor entrance is available for after-hours submissions. County health departments can provide blank application forms but certified copies are issued only by the state Office of Vital Statistics.",
      localOfficesUrl:
        "https://www.chfs.ky.gov/agencies/dph/dafm/pages/lhd.aspx",
    },
    phone: {
      number: "1-800-241-8322",
      provider: "VitalChek",
      notes:
        "Choose option 1. Same fees as online ordering (state fee plus VitalChek processing fee). Credit or debit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport",
      "Valid US military ID",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill",
      "Bank statement",
      "Vehicle registration",
      "Pay stub",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant)",
      "Parent listed on the birth certificate",
      "Legal guardian (with proof of guardianship)",
      "Immediate family member (spouse, child, sibling)",
      "Authorized representative (with written authorization and valid ID)",
      "Attorney representing the registrant",
    ],
    notes:
      "Kentucky restricts access to birth records less than 100 years old to the registrant, parents, legal guardians, immediate family members, and authorized legal representatives per KRS 213.131(5). Records 100+ years old are public. A photocopy of valid photo ID is recommended with all applications.",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless individuals verified by a qualified service provider (available to persons under age 25 experiencing homelessness)",
      howToClaim:
        "A director or designee of a governmental or nonprofit agency serving homeless persons, a local educational agency McKinney-Vento liaison, or a school social worker/counselor must complete Form VS-41 (Affidavit of Homeless Status for Fee Exempt Birth Certificate). Each eligible person may receive only one fee-exempt birth record per application.",
      citation: "KRS 213.141(d)",
    },
    {
      eligibility:
        "Youth in or aging out of DCBS foster care (Department for Community Based Services)",
      howToClaim:
        "DCBS caseworkers may submit the special VS-37 DCBS Youth form on behalf of youth in care. Youth who have aged out of care can contact the DCBS Transitional Services Branch or use the KY RISE portal at https://prd.webapps.chfs.ky.gov/kyrise for assistance obtaining essential documents.",
      citation: "KRS 620.360",
    },
  ],
  recordsAvailableFrom: 1911,
  applicationFormUrl:
    "https://www.chfs.ky.gov/agencies/dph/dehp/vsb/Forms/VS37BirthApp.pdf",
  applicationFormUrlEs:
    "https://www.chfs.ky.gov/agencies/dph/dehp/vsb/Forms/VS37BirthAppSpanish.pdf",
  specialNotes: [
    "Kentucky birth records date from 1911 (statewide registration began in 1911 with general compliance by 1917). For births before 1911, contact the Kentucky Department for Libraries and Archives at 300 Coffee Tree Road, Frankfort, KY 40602.",
    "VitalChek is the only authorized third-party vendor for online and phone orders.",
    "A drop box is available at the visitor entrance at 275 E. Main St., Frankfort for submitting applications outside of office hours.",
    "Payment must be made payable to the Kentucky State Treasurer (check or money order for mail orders).",
    "Birth records are restricted for 100 years from the date of birth per KRS 213.131(5); after 100 years they become public records.",
  ],
  noIdWorkaround:
    "Kentucky does not require notarization as a substitute for ID on the standard VS-37 application. If you lack a photo ID, you may submit two forms of secondary identification (e.g., Social Security card, utility bill, bank statement). Homeless individuals under 25 can obtain a fee-exempt certificate through a qualified service provider using Form VS-41 without standard ID. Youth in DCBS foster care can have their caseworker request a certificate on their behalf. You may also authorize a representative who has valid ID to request the certificate with written authorization.",
  lastVerified: "2026-03-21",
};
