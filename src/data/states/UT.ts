import { StateVitalRecords } from "@/types";

export const UT: StateVitalRecords = {
  stateCode: "UT",
  stateName: "Utah",
  office: {
    name: "Utah Department of Health and Human Services, Office of Vital Records and Statistics",
    address: "288 North 1460 West, P.O. Box 141012, Salt Lake City, UT 84114-1012",
    phone: "(801) 538-6105",
    website: "https://vitalrecords.utah.gov/",
    hours:
      "Mon\u2013Fri 8:00 AM \u2013 4:00 PM MT (closed weekends and state holidays; the state office does not have a public walk-in counter)",
  },
  fees: {
    certified: 22,
    additionalCopy: 10,
    paymentMethods: [
      "money order",
      "personal check",
      "cashier's check",
      "Visa (in-person and online only)",
      "Mastercard (in-person and online only)",
      "cash (in-person at local health department offices only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://secure.utah.gov/vitalrecords",
      provider: "state",
      notes:
        "Utah operates its own online ordering portal (SILVER) at secure.utah.gov/vitalrecords, which charges the lowest fees. Standard processing takes 10\u201314 business days. You may also order through VitalChek at vitalchek.com for expedited service, but additional service fees apply. Next-business-day processing is available through VitalChek if ordered before 1:00 PM MT with the expedite fee. Credit or debit card required for all online orders.",
    },
    mail: {
      address:
        "Office of Vital Records and Statistics, P.O. Box 141012, Salt Lake City, UT 84114-1012",
      processingTime: "6 weeks",
      notes:
        "Include the completed application form, payment by check or money order payable to 'UDOH Vital Records,' and an enlarged, clearly visible photocopy of the front of your valid government-issued photo ID. Credit cards are not accepted for mail orders. Applications with incomplete information or missing ID copies will be returned. All fees are non-refundable. If you do not respond to a written request from the office within 90 days, all moneys paid may be retained.",
    },
    inPerson: {
      locations:
        "Local health department offices across Utah (the state OVRS office in Salt Lake City does not have a public walk-in counter). Locations include Salt Lake County Health Department, Utah County Health Department (Provo and Payson), Davis County Health Department, Weber-Morgan Health Department (Ogden), Bear River Health Department (Logan, Brigham City, Tremonton), and others.",
      processingTime: "Same day at most local health department offices",
      notes:
        "In-person orders can be placed at most Utah local health department offices that have a walk-in window. Last orders are typically taken 30 minutes before closing. Bring valid photo ID, payment, and the completed application form. Hours vary by location \u2014 call ahead to confirm. Accepted payment methods at local offices generally include cash, check, money order, Visa, and Mastercard.",
      localOfficesUrl: "https://vitalrecords.utah.gov/utah-health-districts",
    },
    phone: {
      number: "(877) 457-0361",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with additional service fees beyond the state certificate fee. Credit or debit card required. The state office phone (801) 538-6105 is for questions only, not for placing orders.",
    },
  },
  requirements: {
    primaryId: [
      "Valid U.S. driver\u2019s license or state-issued photo ID",
      "U.S. passport or passport card",
      "U.S. military identification card",
      "Permanent Resident Card (Green Card)",
      "Employment Authorization Card",
      "Tribal identification card with photo",
      "Foreign passport or foreign visa with photo",
    ],
    secondaryId: [
      "Social Security card",
      "School, college, or university ID card (with date)",
      "Utility bill (recent)",
      "Voter registration card",
      "Motor vehicle registration",
      "Certified marriage license or certificate",
      "Court document bearing applicant\u2019s name",
      "Insurance card",
      "Business or professional license",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant, must be 18+)",
      "A parent listed on the certificate",
      "An immediate family member (spouse, adult child, adult sibling, grandparent) with proof of relationship",
      "Legal guardian (with certified court order)",
      "Legal representative or attorney (with documentation of authority)",
      "Government agency representative (for official purposes)",
    ],
    notes:
      "One form of primary photo ID is required. If you do not have a primary ID, two forms of secondary identification are required. The ID must not be expired by more than 90 days. For mail requests, include an enlarged and clearly visible photocopy of the front of your ID. Immediate family members must provide proof of relationship (e.g., vital certificates with common parents for siblings, marriage records for spouses, birth certificates for parents and grandparents).",
    acceptableIdUrl:
      "https://vitalrecords.utah.gov/certificates/order-a-vital-record-certificate",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals experiencing homelessness who need a birth certificate for identification purposes",
      howToClaim:
        "A representative of an approved homeless service provider, a Department of Workforce Services office, or a homeless shelter / transitional housing facility must complete a verification form confirming the applicant\u2019s homeless status. The fee-waived certificate can be ordered online, by mail, or in person at a local vital records office. Download the homeless waiver application packet from vitalrecords.utah.gov.",
      citation: "Utah Code \u00A7 26B-8-113",
    },
    {
      eligibility:
        "Homeless children and youth as defined under the federal McKinney-Vento Act (42 U.S.C. \u00A7 11434a)",
      howToClaim:
        "A school district homeless liaison or an approved homeless service provider may verify the child\u2019s or youth\u2019s status and submit the fee waiver request on their behalf.",
      citation: "Utah Code \u00A7 26B-8-113",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "The agency submits the request on official letterhead indicating the record is needed for official government business. The state registrar may provide copies without charge.",
      citation: "Utah Code \u00A7 26B-8-128",
    },
  ],
  recordsAvailableFrom: 1905,
  applicationFormUrl:
    "https://vitalrecords.utah.gov/wp-content/uploads/Birth-Certificate-Request-Application.pdf",
  applicationFormUrlEs:
    "https://vitalrecords.utah.gov/wp-content/uploads/104s-Birth-Certif-ApplicationRcpt-Spanish.pdf",
  specialNotes: [
    "Statewide birth registration in Utah began in 1905 and was generally complied with by 1917. For births before 1905, contact the county clerk\u2019s office in the county of birth, as most counties kept ledger entries of births starting in 1898. Microfilm copies of early records are also available at the Utah State Archives and the FamilySearch Library in Salt Lake City.",
    "The state Office of Vital Records and Statistics in Salt Lake City does not have a public walk-in counter. All in-person requests must be made at a local health department office.",
    "All fees paid to the Office of Vital Records are non-refundable. If an applicant does not respond to a written request from OVRS within 90 days, the office may retain all moneys paid.",
    "Utah allows birth certificate amendments for gender marker changes. A court order is required, and the petition must include evidence of medical history or care related to transition, proof of outward expression as the requested sex for at least six months, and proof that the change is a true part of the applicant\u2019s identity. Utah has also issued nonbinary \u2018X\u2019 gender markers on birth certificates since 2017.",
    "Utah provides free birth certificates for homeless individuals through an established fee waiver program. Approved homeless service providers can verify an applicant\u2019s status through the Department of Workforce Services program.",
    "The $10 additional copy fee applies only to additional certified copies of the same record ordered at the same time as the first copy.",
  ],
  noIdWorkaround:
    "If you do not have any form of government-issued photo ID, you may provide two forms of secondary identification (e.g., Social Security card plus a utility bill). Alternatively, an immediate family member who has valid photo ID \u2014 such as a spouse, parent, grandparent, adult sibling, or adult child \u2014 can request the certificate on your behalf with proof of their relationship to the registrant. For individuals experiencing homelessness, an approved homeless service provider can verify your identity and submit a fee-waived request under Utah Code \u00A7 26B-8-113. Contact the Office of Vital Records at (801) 538-6105 or vrequest@utah.gov for assistance with special circumstances.",
  lastVerified: "2026-03-21",
};
