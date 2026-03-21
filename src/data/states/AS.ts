import { StateVitalRecords } from "@/types";

export const AS: StateVitalRecords = {
  stateCode: "AS",
  stateName: "American Samoa",
  office: {
    name: "American Samoa Government, Department of Homeland Security, Office of Vital Statistics",
    address: "P.O. Box 6894, Pago Pago, AS 96799",
    phone: "(684) 633-1405",
    website: "https://asdhs.as.gov",
    hours: "Mon–Fri 8:00 AM – 4:00 PM SST (call to confirm; hours may vary)",
  },
  fees: {
    certified: 5,
    additionalCopy: 5,
    paymentMethods: [
      "money order (payable to 'Office of Vital Statistics/ASG')",
      "credit card (online via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/american-samoa/american-samoa-department-of-homeland-security",
      provider: "vitalchek",
      notes:
        "American Samoa partners with VitalChek for online ordering. Credit or debit card required. You will need to provide your Social Security number, parents' names, and upload a valid photo ID (driver's license, ID card, or passport) for verification. Additional VitalChek service and shipping fees apply beyond the base certificate fee.",
    },
    mail: {
      address:
        "American Samoa Government, Department of Homeland Security, Office of Vital Statistics, P.O. Box 6894, Pago Pago, AS 96799",
      processingTime: "4–8 weeks (longer due to remote location and limited mail service)",
      notes:
        "Include a money order payable to 'Office of Vital Statistics/ASG.' Personal checks are not accepted. Include a photocopy of your valid government-issued photo ID, a notarized letter authorizing the release of the record, the full name on the certificate, date and place of birth, parents' names (including mother's maiden name), your relationship to the registrant, the purpose for the request, and a self-addressed stamped envelope. Contact the office at (684) 633-1405 to confirm current fees before mailing.",
    },
    inPerson: {
      locations:
        "Office of Vital Statistics, Department of Homeland Security, Tafuna, Pago Pago, American Samoa",
      processingTime: "Same day to several business days depending on record availability",
      notes:
        "Bring valid government-issued photo ID. Personal identification is required for verification before any record is released. Contact the office at (684) 633-1405 to confirm hours and availability before visiting.",
    },
    phone: {
      number: "(684) 633-1405",
      notes:
        "Call for inquiries, status checks, and to verify current fees. Phone ordering is not available; use VitalChek online or visit in person. Alternate numbers: (684) 633-1406 (Vital Statistics) or (684) 633-4606 (Health Information Office). Email: vitalrecords@asdhs.as.gov.",
    },
  },
  requirements: {
    primaryId: [
      "Valid driver's license",
      "Valid state or territory ID card",
      "Valid US passport",
    ],
    secondaryId: [
      "Social Security card",
      "Notarized letter authorizing release of the record",
      "Employment ID with photo",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant) if 18 or older",
      "Parent listed on the birth certificate",
      "Legal guardian with court documentation",
      "Authorized representative with notarized authorization letter",
      "Authorized government agency representative",
    ],
    notes:
      "Personal identification is required for verification, and a notarized letter must be provided before the record will be released. For VitalChek online orders, two forms of identification must be scanned and uploaded. Contact the office at (684) 633-1405 to confirm specific requirements.",
  },
  feeWaivers: [
    {
      eligibility:
        "No formal fee waiver program has been publicly documented for American Samoa vital records. Individuals experiencing financial hardship should contact the Office of Vital Statistics directly to inquire about possible accommodations.",
      howToClaim:
        "Call the Office of Vital Statistics at (684) 633-1405 or (684) 633-1406 to discuss your situation and ask whether any fee reduction or waiver is available.",
    },
  ],
  recordsAvailableFrom: 1890,
  specialNotes: [
    "American Samoa vital records date back to 1890 for births and 1900 for deaths. Records before these dates may not exist in the civil registration system.",
    "American Samoa is an unincorporated US territory in the South Pacific. Mail delivery can be significantly slower than to the US mainland — allow extra time for mail-in requests.",
    "Personal checks are not accepted. Only money orders payable to 'Office of Vital Statistics/ASG' are accepted for mail requests.",
    "A notarized letter is required for mail-in requests to verify the requestor's identity and authorization.",
    "Persons born in American Samoa are US nationals but not US citizens at birth. Birth certificates from American Samoa reflect this status.",
    "For amendments to birth or death certificates, the fee is $7.00. Contact the office for amendment procedures.",
    "The CDC 'Where to Write' page for American Samoa was last reviewed in November 2015; fees and procedures may have changed. Always call to confirm before submitting a request.",
  ],
  noIdWorkaround:
    "If you lack a government-issued photo ID, contact the American Samoa Office of Vital Statistics at (684) 633-1405 to discuss alternative identification options. A notarized letter from a person who can verify your identity, along with whatever secondary identification you have (Social Security card, employment ID, or other documents with your name), may be accepted at the office's discretion. Because American Samoa is a small territory with close community ties, the office may be able to work with you on a case-by-case basis — call ahead to explain your situation before visiting or mailing a request.",
  lastVerified: "2026-03-21",
};
