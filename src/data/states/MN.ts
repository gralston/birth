import { StateVitalRecords } from "@/types";

export const MN: StateVitalRecords = {
  stateCode: "MN",
  stateName: "Minnesota",
  office: {
    name: "Minnesota Department of Health, Office of Vital Records",
    address: "P.O. Box 64499, St. Paul, MN 55164-0499",
    phone: "(651) 201-5970",
    website: "https://www.health.state.mn.us/people/vitalrecords/index.html",
    hours:
      "Mon–Fri 8:00 AM – 4:30 PM CT (help desk closed 12:30 – 1:30 PM for lunch)",
  },
  fees: {
    certified: 26,
    additionalCopy: 19,
    expedited: 20,
    paymentMethods: [
      "credit card (Visa, MasterCard, Discover)",
      "check",
      "money order",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.health.state.mn.us/people/vitalrecords/birthnc.html",
      provider: "state",
      notes:
        "Minnesota is developing a state-run online ordering portal. Currently, online ordering is limited. For most orders, submit by mail or fax, or visit a county vital records office for fastest service.",
    },
    mail: {
      address:
        "Office of Vital Records, Minnesota Department of Health, P.O. Box 64499, St. Paul, MN 55164-0499",
      processingTime: "4–6 weeks (standard); 1–2 weeks (expedited)",
      notes:
        "Include completed birth certificate application, photocopy of valid ID (notarized signature required), and payment by check, money order, or credit card. Write 'Expedite' on the envelope for expedited processing (add $20). Fax orders also accepted at (866) 416-1357.",
    },
    inPerson: {
      locations:
        "County vital records offices throughout Minnesota. The state Office of Vital Records in St. Paul does not offer in-person service — visit your local county office instead.",
      processingTime: "Same day at most county offices",
      notes:
        "For fastest service, visit a county vital records office in person. Most county offices can issue certified copies while you wait. You must present valid ID and sign the request form in front of county staff.",
      localOfficesUrl:
        "https://www.health.state.mn.us/people/vitalrecords/registrars.html",
    },
    phone: {
      number: "(651) 201-5970",
      provider: "Minnesota Office of Vital Records",
      notes:
        "Call the help desk for questions and ordering assistance. Phone hours Mon–Fri 8:00 AM – 4:30 PM CT (closed 12:30 – 1:30 PM). Credit card required for phone payments.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Valid US military ID",
      "Tribal ID issued by a federally recognized tribe",
    ],
    secondaryId: [
      "Social Security card",
      "Health insurance card",
      "Bank statement or credit card statement",
      "Utility bill",
      "Pay stub",
      "School records or transcript",
    ],
    eligibleRequestors: [
      "The person named on the record (registrant)",
      "A parent listed on the birth certificate",
      "A legal custodian, guardian, or conservator of the subject",
      "A health care agent for the subject",
      "A personal representative or successor for estate administration",
      "A person with a direct and tangible interest who provides proof of need",
      "An adoption agency for post-adoption search",
      "A local, state, tribal, or federal government agency",
    ],
    notes:
      "All requesters must provide identification and sign the request form in front of a notary public (for mail/fax orders) or county vital records staff (for in-person orders), attesting to eligibility. If you lack acceptable ID, a witness who has known you for two or more years can complete a Statement to Identify form.",
    acceptableIdUrl:
      "https://www.health.state.mn.us/people/vitalrecords/localreg/docs/statementid.pdf",
  },
  feeWaivers: [
    {
      eligibility:
        "Homeless youth (age 24 or younger, unaccompanied by a parent or guardian, and without shelter)",
      howToClaim:
        "Submit a completed birth certificate application with a signed statement that you are a homeless youth. A verification statement from an authorized individual (shelter worker, social services provider, outreach worker) can substitute for standard ID. The certified birth certificate is issued at no cost but expires six months from the date of issuance.",
      citation: "Minn. Stat. §§ 144.226, 144.2255, 256K.45 subd. 1a(c)",
    },
    {
      eligibility: "Veterans and their families (for VA benefits purposes)",
      howToClaim:
        "A certified copy of a birth record is issued free of charge to any veteran, the surviving spouse or next of kin of a veteran, service officers of any congressionally chartered veterans organization, or the Department of Veterans Affairs, when the record is needed for presenting claims to the VA or for veterans organization purposes.",
      citation: "Minn. Stat. § 197.63",
    },
  ],
  recordsAvailableFrom: 1900,
  applicationFormUrl:
    "https://www.health.state.mn.us/people/vitalrecords/docs/bcappia.pdf",
  specialNotes: [
    "The state Office of Vital Records does not offer in-person service — for same-day certificates, visit a county vital records office.",
    "For births before 1900, contact the county where the birth occurred directly, as the state office does not hold pre-1900 records.",
    "Mail and fax orders require a notarized signature attesting to your identity and eligibility. In-person county orders require signing in front of county staff.",
    "Expedited processing adds $20 to the fee — write 'Expedite' on the envelope when mailing your application.",
    "Minnesota offers no-cost birth certificates to homeless youth (age 24 or younger) through either the state office or any county vital records office.",
    "Fax orders can be sent to (866) 416-1357 with credit card payment.",
  ],
  noIdWorkaround:
    "If you do not have acceptable government-issued photo ID, Minnesota allows a witness who has known you for two or more years to complete a 'Statement to Identify' form (available at county offices or online) to swear to your identity. If you are a homeless youth (age 24 or younger), you can obtain a birth certificate at no cost under Minn. Stat. § 144.2255 by submitting a signed statement of homeless status along with verification from a shelter worker, social services provider, or outreach worker — no standard ID is required. Contact the Office of Vital Records at (651) 201-5970 or email health.vitalrecords@state.mn.us for guidance on your specific situation.",
  lastVerified: "2026-03-21",
};
