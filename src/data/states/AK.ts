import { StateVitalRecords } from "@/types";

export const AK: StateVitalRecords = {
  stateCode: "AK",
  stateName: "Alaska",
  office: {
    name: "Health Analytics and Vital Records (HAVRS), Alaska Department of Health",
    address: "5441 Commercial Blvd, Juneau, AK 99801",
    phone: "(907) 465-3391",
    website: "https://health.alaska.gov/en/services/vital-records-orders/",
    hours: "Mon–Fri 8:30 AM – 4:30 PM AKT",
  },
  fees: {
    certified: 30,
    additionalCopy: 25,
    paymentMethods: [
      "personal check (pre-printed with name, payable to Alaska Vital Records)",
      "money order (payable to Alaska Vital Records)",
      "credit card (in-person, mail, fax, or online orders)",
      "cash (in-person only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/alaska",
      provider: "vitalchek",
      additionalFee: 12.95,
      notes:
        "VitalChek is the sole authorized online vendor for Alaska. A service fee applies in addition to the state fee. Credit or debit card required. Expedited processing is available only through VitalChek (rush service approximately $41 total). Expect at least 2–3 weeks for processing; expedited orders are processed in 3–4 weeks excluding shipping.",
    },
    mail: {
      address:
        "Health Analytics and Vital Records, P.O. Box 110675, Juneau, AK 99811-0675",
      processingTime: "2–3 months",
      notes:
        "Include completed application form, a photocopy of your valid government-issued photo ID, and payment by check, money order, or credit card number. Checks must be pre-printed with your name and address. There is a $30 NSF fee for returned checks. You may also fax requests to (907) 465-3618 (credit card payment only). Submit your order using only one method to avoid duplicate charges.",
    },
    inPerson: {
      locations:
        "Juneau office (5441 Commercial Blvd, Juneau, AK 99801) and Anchorage office (3901 Old Seward Hwy, Suite 101, Anchorage, AK 99503)",
      processingTime: "Same day to several business days depending on workload",
      notes:
        "Walk-ins accepted at both offices during business hours (Mon–Fri 8:30 AM – 4:30 PM AKT). Bring a valid government-issued photo ID and payment. Cash, check, money order, and credit card accepted in person.",
    },
    phone: {
      number: "877-572-6332",
      provider: "VitalChek",
      notes:
        "VitalChek service fee applies in addition to the state fee. Credit or debit card required. Available 24/7.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Valid military ID",
      "Tribal or BIA card with photo",
    ],
    secondaryId: [
      "Expired government-issued photo ID (must be less than one year past expiration)",
      "Social Security card",
      "Notarized consent letter from the registrant or legal guardian (for third-party requests)",
    ],
    eligibleRequestors: [
      "The person named on the certificate (age 18+ with valid ID, or age 14+ with school ID)",
      "A parent or legal guardian listed on the birth certificate",
      "A legal representative with a court order",
      "A third-party applicant with a notarized consent letter from the registrant or legal guardian",
      "Attorneys and government agencies (must provide a letter on letterhead stating who they represent and why the record is needed)",
    ],
    notes:
      "Requests that do not include an applicant signature, a photocopy of a valid government-issued photo ID, and payment will not be processed. If someone other than the registrant is requesting, documentation of their relationship or authorization must be included.",
    acceptableIdUrl:
      "https://health.alaska.gov/en/services/vital-records-orders/",
  },
  feeWaivers: [
    {
      eligibility:
        "Foster youth and individuals aging out of foster care in Alaska",
      howToClaim:
        "Contact your Office of Children's Services (OCS) caseworker at (907) 465-3191. OCS can request vital records on behalf of current and former foster youth at no cost as part of independent living and transition services.",
      citation: "AS 47.14.100 (Alaska Child in Need of Aid statutes)",
    },
    {
      eligibility:
        "Individuals experiencing homelessness who need a birth certificate for identification or services",
      howToClaim:
        "Work with a homeless services provider, legal aid organization, or social services agency. Alaska Legal Services Corporation (alsc-law.org or 888-478-2572) may be able to assist with obtaining vital records. Agencies may submit requests on your behalf and request a fee waiver from HAVRS on a case-by-case basis.",
    },
  ],
  recordsAvailableFrom: 1913,
  applicationFormUrl:
    "https://health.alaska.gov/dph/VitalStats/Documents/birth/birth_form.pdf",
  specialNotes: [
    "Alaska began territorial registration of births in 1913, but compliance was not widespread until approximately 1945. For births before 1913, church records are the best source — the Bureau of Vital Statistics has microfilmed local church records for the purpose of creating delayed birth certificates.",
    "Alaska Vital Records does not work with any third-party vendors except VitalChek.com. Beware of unofficial websites that charge high fees to 'process' or 'help apply' for certificates.",
    "Heirloom (commemorative) birth certificates are available for a separate fee and can be ordered through HAVRS.",
    "Name changes or corrections require a court order and a separate amendment application filed with HAVRS.",
    "For births that were not registered at the time, a delayed birth certificate can be filed with supporting evidence. Contact HAVRS for instructions.",
    "Fax orders are accepted at (907) 465-3618 with credit card payment only. Processing time for fax orders is the same as mail (2–3 months).",
    "The Anchorage office can be reached directly at (907) 269-0991.",
  ],
  noIdWorkaround:
    "Have an eligible family member (parent or legal guardian listed on the certificate) with valid photo ID request on your behalf. If you are 14 or older, a school-issued ID may be accepted. If experiencing homelessness, contact Alaska Legal Services Corporation (alsc-law.org or 888-478-2572) for assistance obtaining vital records without standard ID. You may also contact HAVRS directly at (907) 465-3391 or BVSOffice@alaska.gov to discuss alternative documentation options for your specific situation.",
  lastVerified: "2026-03-21",
};
