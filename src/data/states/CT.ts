import { StateVitalRecords } from "@/types";

export const CT: StateVitalRecords = {
  stateCode: "CT",
  stateName: "Connecticut",
  office: {
    name: "State Vital Records Office, Department of Public Health",
    address: "410 Capitol Avenue, 1st Floor, Hartford, CT 06106",
    phone: "(860) 509-7700",
    website: "https://portal.ct.gov/dph/vital-records/birth-certificates",
    hours: "Mon–Fri 8:30 AM – 4:30 PM ET",
  },
  fees: {
    certified: 30,
    additionalCopy: 30,
    paymentMethods: [
      "money order (payable to 'Treasurer, State of Connecticut')",
      "credit card (online/phone via VitalChek)",
      "cash (in-person at town clerk offices)",
      "check (accepted at some town clerk offices)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/connecticut",
      provider: "vitalchek",
      additionalFee: 14.5,
      notes:
        "VitalChek is the only third-party vendor approved by the Connecticut Department of Public Health. Additional processing and shipping fees apply beyond the certificate fee. Town clerk certificates ($20) may also be ordered through VitalChek for participating municipalities.",
    },
    mail: {
      address:
        "State of Connecticut, Department of Public Health, Vital Records Section, 410 Capitol Avenue, MS #11VRS, P.O. Box 340308, Hartford, CT 06134-0308",
      processingTime: "Up to 12 weeks",
      notes:
        "Include completed application form, photocopy of government-issued photo ID, and money order payable to 'Treasurer, State of Connecticut.' Personal checks and credit cards are not accepted for mail orders to the state office. Do not send cash.",
    },
    inPerson: {
      locations:
        "State Vital Records Office at 410 Capitol Avenue, 1st Floor, Hartford, CT. Also available at all 169 town/city clerk offices statewide.",
      processingTime:
        "Same day at most town clerk offices; varies at state office",
      notes:
        "Town clerk offices charge $20 per certified copy (long form) or $15 (short form), which is less than the state office fee of $30. Photo ID is required to enter the state office building. Visit the town/city clerk where the birth occurred for fastest and most affordable service.",
      localOfficesUrl:
        "https://portal.ct.gov/dph/vital-records/town-vital-records-offices",
    },
    phone: {
      number: "1-800-669-8313",
      provider: "VitalChek",
      notes:
        "Same fees and additional processing charges as online VitalChek orders. Credit/debit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license",
      "Valid US passport",
      "Valid state-issued photo ID card",
      "Other government-issued photo ID",
    ],
    secondaryId: [
      "If no photo ID is available, contact the Vital Records Office at (860) 509-7700 for alternative identification options",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant)",
      "A parent listed on the certificate",
      "Legal guardian or conservator of the registrant",
      "Spouse of the registrant",
      "An attorney representing an eligible party",
      "An authorized agent of a state or federal agency with a signed release",
      "A member of a Connecticut genealogical society (for records 100+ years old)",
    ],
    notes:
      "Birth records less than 100 years old are confidential under Conn. Gen. Stat. \u00A7 7-51 and are not available to the general public. You must demonstrate your relationship to the registrant. Records 100 years or older are open to the public.",
    acceptableIdUrl:
      "https://portal.ct.gov/-/media/departments-and-agencies/dph/hisr/vr/birth-cert-request-form_state-rev-12-2021-1-22.pdf",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless youths (ages 18–24) and certified homeless youths as defined under Conn. Gen. Stat. \u00A7 7-36",
      howToClaim:
        "The homeless youth and the person certifying them as homeless must appear in person at any town registrar's office with access to the electronic vital records system or the State Vital Records Office. The certifying person must present sufficient identification and documentation of the youth's homeless status. No fee is charged for the certified copy.",
      citation: "Conn. Gen. Stat. \u00A7 7-51(e)",
    },
    {
      eligibility:
        "Town clerk offices charge lower fees than the state office ($20 for long form, $15 for short form vs. $30 at the state office)",
      howToClaim:
        "Request your birth certificate from the town/city clerk where the birth occurred or any town clerk with access to the ConnVRS electronic system. Fees are set by Conn. Gen. Stat. \u00A7 7-74 and are lower than the state office rate.",
      citation: "Conn. Gen. Stat. \u00A7 7-74",
    },
  ],
  recordsAvailableFrom: 1897,
  applicationFormUrl:
    "https://portal.ct.gov/-/media/departments-and-agencies/dph/hisr/vr/birth-cert-request-form_state-rev-12-2021-1-22.pdf",
  specialNotes: [
    "Connecticut has a dual system: both the State Vital Records Office and all 169 town/city clerk offices can issue birth certificates. Town clerks are typically faster and cheaper ($20 long form vs. $30 at the state office).",
    "The state office maintains records from July 1, 1897, to present. For births before that date, contact the town clerk where the birth occurred or the Connecticut State Library at (860) 757-6580.",
    "Birth records less than 100 years old are confidential and restricted to eligible requestors. Records 100 years or older are open to the public.",
    "ConnVRS (Connecticut Vital Records System) launched in 2016 and allows town clerks statewide to access and issue certificates electronically, so you do not have to visit the specific town where the birth occurred.",
    "Mail orders sent to the State Vital Records Office can take up to 12 weeks to process. For faster service, visit a local town clerk office or order online through VitalChek.",
    "The state office does not accept personal checks or credit cards for mail orders. Only money orders payable to 'Treasurer, State of Connecticut' are accepted.",
  ],
  noIdWorkaround:
    "Connecticut requires a government-issued photo ID to obtain a birth certificate. If you do not have a photo ID, contact the State Vital Records Office at (860) 509-7700 to discuss alternative identification options. Homeless youths (ages 18–24) can obtain a free certified copy under Conn. Gen. Stat. \u00A7 7-51(e) by appearing in person with a certifying individual who can attest to their homeless status. Community organizations such as Connecticut 2-1-1 (dial 2-1-1) can connect you with programs that help individuals obtain birth certificates and identification documents at no cost. A legal aid attorney may also be able to help you petition for alternative proof of identity.",
  lastVerified: "2026-03-21",
};
