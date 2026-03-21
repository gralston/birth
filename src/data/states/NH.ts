import { StateVitalRecords } from "@/types";

export const NH: StateVitalRecords = {
  stateCode: "NH",
  stateName: "New Hampshire",
  office: {
    name: "Division of Vital Records Administration, NH Secretary of State",
    address: "9 Ratification Way, Concord, NH 03301-2410",
    phone: "(603) 271-4650",
    website: "https://www.sos.nh.gov/vital-records-0",
    hours: "Lobby: Mon-Fri 8:30 AM - 3:30 PM ET; Research Room: Mon-Fri 8:30 AM - 4:30 PM ET",
  },
  fees: {
    certified: 15,
    additionalCopy: 10,
    paymentMethods: [
      "check",
      "money order",
      "cash (in-person only)",
      "credit card (online via VitalChek or EB2Gov)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/vital-records/new-hampshire/new-hampshire-vital-records",
      provider: "vitalchek",
      notes:
        "VitalChek and EB2Gov are the two authorized third-party online vendors. Both charge additional processing and shipping fees on top of the $15 search fee. EB2Gov is used primarily through local city/town clerk offices. All online orders are mailed; in-person pickup is not available for online orders.",
    },
    mail: {
      address:
        "Division of Vital Records Administration, NH Secretary of State, 9 Ratification Way, Concord, NH 03301-2410",
      processingTime: "20 business days from receipt",
      notes:
        "Complete the VR-201 application form, print and sign it, and mail it with payment (check or money order payable to 'Treasurer, State of New Hampshire'), a photocopy of your government-issued photo ID, and a self-addressed stamped envelope. U.S. funds only. The $15 fee is payable whether or not a record is found.",
    },
    inPerson: {
      locations:
        "State DVRA office at 9 Ratification Way, Concord, NH. Also available at all 234 city and town clerk offices statewide.",
      processingTime: "Same day at state office and most city/town clerks",
      notes:
        "Bring a valid government-issued photo ID and payment. City/town clerks maintain their own records and can issue certified copies. The clerk in the city/town where the birth occurred may have the fastest access.",
      localOfficesUrl:
        "https://www.sos.nh.gov/vital-records-0/vital-records-contact-information",
    },
    phone: {
      number: "1-877-878-8007",
      provider: "VitalChek",
      notes:
        "Same fees as online ordering plus additional VitalChek processing and shipping fees. Available 24/7 via VitalChek's automated system.",
    },
  },
  requirements: {
    primaryId: [
      "Valid driver's license",
      "Valid US passport",
      "Other government-issued photo ID",
    ],
    secondaryId: [
      "New Hampshire does not specify alternative secondary IDs; a current unexpired government-issued photo ID is required for all requests",
    ],
    eligibleRequestors: [
      "The person named on the record (registrant)",
      "Immediate legal family member (spouse, parent, child, sibling, grandparent, grandchild)",
      "Legal guardian or legal representative with documentation",
      "Government agency with a direct and tangible interest (law enforcement, courts, attorney general, DHHS)",
      "Any person who can demonstrate a 'direct and tangible interest' in the record with a written claim describing why the record is needed",
    ],
    notes:
      "New Hampshire vital records are private and access is restricted by RSA 5-C:9 and RSA 5-C:102 to those with a 'direct and tangible interest.' Birth records more than 100 years old are considered public domain and available without restriction. Effective January 1, 2005, all requestors must present positive photo identification.",
    acceptableIdUrl:
      "https://www.sos.nh.gov/vital-records-0/purchasing-correcting-vital-records/access-vital-records",
  },
  feeWaivers: [
    {
      eligibility:
        "Persons registering to vote who need a birth certificate solely as proof of citizenship for voter registration",
      howToClaim:
        "The DVRA provides free certified copies of NH vital records for voter registration purposes only. The certified copy must be surrendered to the election official processing the voter registration application. Contact DVRA or your local city/town clerk and state the record is needed for voter registration.",
      citation: "RSA 654:12; RSA 659:13",
      forReason: "voter-id",
    },
    {
      eligibility: "Town clerk fee structure is lower than state office",
      howToClaim:
        "Under RSA 5-C:10, the $15 search fee is split between the town clerk ($7) and the state vital records fund ($8). Town clerks charge the same statutory fee, but requesting locally avoids any third-party processing fees charged by online vendors.",
      citation: "RSA 5-C:10",
    },
  ],
  recordsAvailableFrom: 1640,
  applicationFormUrl:
    "https://www.sos.nh.gov/sites/g/files/ehbemt561/files/documents/2022-04/vr201.pdf",
  specialNotes: [
    "New Hampshire has a dual system: both the state DVRA and all 234 city/town clerks issue certified birth certificates. Visit the clerk in the city/town where the birth occurred for fastest service.",
    "The $15 search fee is charged whether or not a record is found. If a record is found, the first certified copy is included in the search fee. Additional copies of the same record at the same time cost $10 each.",
    "Birth records more than 100 years old are public domain and available to anyone without demonstrating direct and tangible interest (RSA 5-C:105).",
    "A delayed birth certificate (for births not registered at the time they occurred) costs $25, which includes issuance of a certified copy.",
    "The DVRA Research Room contains genealogical records dating back to 1640 and is open to the public.",
    "VitalChek and EB2Gov are the only authorized third-party online vendors. Both charge additional processing and shipping fees beyond the standard $15 state fee.",
  ],
  noIdWorkaround:
    "New Hampshire requires a current unexpired government-issued photo ID for all vital records requests. If you lack photo ID, contact the DVRA at (603) 271-4650 to discuss your situation — they may accept alternative documentation on a case-by-case basis. You can obtain a free non-driver photo ID from the NH DMV for voting purposes (RSA 659:13). An eligible immediate family member with valid photo ID can request the record on your behalf, as family members have a statutory 'direct and tangible interest.' For those experiencing homelessness, dial 2-1-1 (NH 211) to connect with community organizations that assist with obtaining vital records and identification documents.",
  lastVerified: "2026-03-21",
};
