import { StateVitalRecords } from "@/types";

export const OR: StateVitalRecords = {
  stateCode: "OR",
  stateName: "Oregon",
  office: {
    name: "Oregon Health Authority, Center for Health Statistics",
    address: "800 NE Oregon Street, Suite 205, Portland, OR 97232 (mailing: P.O. Box 14050, Portland, OR 97293)",
    phone: "(971) 673-1190",
    website:
      "https://www.oregon.gov/oha/ph/birthdeathcertificates/pages/index.aspx",
    hours: "Mon–Fri 9:00 AM – 4:00 PM PT (phone); drop box available 24/7 at west entrance parking lot",
  },
  fees: {
    certified: 25,
    additionalCopy: 25,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/oregon/oregon-vital-records",
      provider: "vitalchek",
      additionalFee: 22.5,
      notes:
        "VitalChek is the only authorized online vendor. Total online cost is approximately $47.50 (includes $25 state fee + $11.25 VitalChek vendor/security fee + $4 authentication fee + $7 expedite/shipping fee). Additional copies of the same record are $25 each.",
    },
    mail: {
      address:
        "Center for Health Statistics, P.O. Box 14050, Portland, OR 97293",
      processingTime: "Approximately 5 weeks",
      notes:
        "Include completed OHA Form 45-13A, photocopy of valid ID, and check or money order payable to 'OHA/Vital Records.' No cash accepted. Processing may be delayed at least 3 weeks if payment is a check from a new bank account with a low check number. A drop box is also available at 800 NE Oregon Street (west entrance parking lot) with the same ~5 week processing time.",
    },
    inPerson: {
      locations:
        "State office at 800 NE Oregon Street, Suite 205, Portland, OR 97232 (by appointment, Mon–Fri 9:00 AM – 3:30 PM). County vital records offices can issue certificates for births that occurred in that county within the last 6 months.",
      processingTime: "Same day at state office (by appointment); same day or next business day at most county offices",
      notes:
        "The state office requires an appointment — no walk-ins. In-person state office fee is $28 for the first copy. County registrars can only issue certificates for births within their county from the last 6 months; for older records, contact the state office.",
      localOfficesUrl:
        "https://www.oregon.gov/oha/PH/BIRTHDEATHCERTIFICATES/Pages/CountyVitalRecords.aspx",
    },
    phone: {
      number: "1-800-255-2414",
      provider: "VitalChek",
      notes:
        "Same fees as online orders. Call (971) 673-1190 for general questions about your order or eligibility.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Consulate card (Matrícula Consular) with photo and address",
      "US Armed Services ID card with photo",
      "Tribal membership or ID card with photo and address",
      "Permanent Resident Card with photo",
      "State or federal government ID badge with photo",
    ],
    secondaryId: [
      "If no primary photo ID: submit three documents showing name and current address, such as utility bill, bank statement, paycheck stub, vehicle registration, voter registration card, tax statement, rental agreement, or similar",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant)",
      "Parent listed on the certificate",
      "Maternal grandparent",
      "Paternal grandparent (only if father is listed on the certificate)",
      "Sibling",
      "Legal guardian",
      "Legal representative (attorney)",
      "Authorized representative (with notarized OHA permission form)",
      "Government agency acting in the conduct of official duties",
    ],
    notes:
      "All IDs must be current and valid — expired documents are not accepted. A photocopy of ID is required for mail and drop-box orders. Online orders use VitalChek's identity verification system.",
    acceptableIdUrl:
      "https://www.oregon.gov/oha/PH/BIRTHDEATHCERTIFICATES/REGISTERVITALRECORDS/Pages/ID-required-for-orders.aspx",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals who are homeless (as defined under 42 U.S.C. §11302 — lacking a fixed, regular, and adequate nighttime residence)",
      howToClaim:
        "Visit a participating grant-funded organization (e.g., White Bird Clinic, community action agencies). The organization submits the request on your behalf at no cost. This program covers Oregon-born individuals only and is limited to the registrant's own certificate.",
      citation: "ORS 432.450; ORS 432.455",
    },
  ],
  recordsAvailableFrom: 1903,
  applicationFormUrl:
    "https://www.oregon.gov/oha/PH/BIRTHDEATHCERTIFICATES/Document%20Forms/45-13A.pdf",
  specialNotes: [
    "VitalChek is the ONLY authorized online vendor — Oregon warns against unauthorized third-party sites that charge additional fees.",
    "The $25 search fee is nonrefundable even if no record is found.",
    "County registrars may only issue certified copies for births that occurred in their county within the last 6 months; all other requests must go through the state office.",
    "In-person orders at the state office cost $28 (includes a $3 in-person service fee).",
    "Oregon records date back to 1903. For births before 1903, contact the county clerk where the birth occurred.",
    "Language assistance is available — call (971) 673-1190 and request an interpreter, or visit the OHA website which offers translation into multiple languages.",
  ],
  noIdWorkaround:
    "Oregon allows three secondary documents (utility bill, bank statement, paycheck stub, vehicle registration, etc.) in place of a photo ID. If you are experiencing homelessness, a participating grant-funded organization can submit a birth certificate request on your behalf at no cost and without personal ID — contact Oregon 211 (dial 2-1-1) or visit the OHA homeless resources page to find a participating organization near you. For additional help, call the Center for Health Statistics at (971) 673-1190 to discuss your situation.",
  lastVerified: "2026-03-21",
};
