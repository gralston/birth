import { StateVitalRecords } from "@/types";

export const MI: StateVitalRecords = {
  stateCode: "MI",
  stateName: "Michigan",
  office: {
    name: "Michigan Department of Health and Human Services, Division for Vital Records",
    address: "P.O. Box 30721, Lansing, MI 48909",
    phone: "(517) 335-8666",
    website: "https://www.michigan.gov/mdhhs/doing-business/vitalrecords",
    hours: "Phone: Mon–Fri 10 AM – 12:30 PM & 1 PM – 3:30 PM ET",
  },
  fees: {
    certified: 34,
    additionalCopy: 16,
    expedited: 12,
    paymentMethods: ["check", "money order", "credit card (online/phone)"],
  },
  requestMethods: {
    online: {
      url: "https://www.michigan.gov/mdhhs/doing-business/vitalrecords/order-a-record-online",
      provider: "vitalchek",
      additionalFee: 12.5,
      notes:
        "Orders processed through VitalChek. Will-call pickup option available — order online, pick up in Lansing within 2–5 business days (Tuesdays and Thursdays only).",
    },
    mail: {
      address:
        "Vital Records Request, P.O. Box 30721, Lansing, MI 48909",
      processingTime: "4–6 weeks",
      notes:
        "Include completed application, photocopy of valid ID, and payment by check or money order. Rush fee of $12 available for faster processing.",
    },
    inPerson: {
      locations:
        "State office at 333 S. Grand Ave., Lansing, MI (Tuesdays & Thursdays, 10 AM – 2 PM, by appointment). County clerks also issue certificates.",
      processingTime: "Same day at state office; varies by county",
      notes:
        "County clerks in the county where the birth occurred can issue certified copies, often with lower fees and faster turnaround. Drop box available at state office Mon–Fri 7 AM – 5:30 PM.",
      localOfficesUrl: "https://michigancountyclerks.us/contact/",
    },
    phone: {
      number: "1-866-443-9897",
      provider: "VitalChek",
      notes: "Same fees as online ordering. Credit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Michigan driver's license or state ID",
      "Valid US passport",
      "Department of Corrections photo ID (with verification letter)",
    ],
    secondaryId: [
      "3 pieces of dated documentation from different sources verifying name and date of birth (at least one dated within the past year)",
    ],
    eligibleRequestors: [
      "The person named on the record",
      "A parent named on the record",
      "A court-appointed legal guardian",
      "A legally licensed representative (attorney)",
      "An heir (must provide death certificate for the registrant)",
    ],
    notes:
      "Records 100+ years old are unrestricted — anyone can request them without ID. Senior citizens (65+) pay a reduced fee of $14.",
    acceptableIdUrl:
      "https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Doing-Business-with-MDHHS/Birth-Death-Marriage-and-Divorce-Records/Photo_ID_Alternative_Documents.pdf",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness (Category 1)",
      howToClaim:
        "Obtain a Homeless Verification Letter on official letterhead from a public service agency (shelter, social services, etc.) certifying you meet the HUD Category 1 homeless definition. Submit with your application.",
      citation: "MCL 333.2891 (as amended by HB 4853, 2020)",
    },
    {
      eligibility: "Indigent individuals",
      howToClaim:
        "Submit an indigent affidavit stating you are receiving public assistance or are unable to pay due to indigence. Waives the first $20 of the fee.",
      citation: "MCL 15.234 (Freedom of Information Act)",
    },
    {
      eligibility: "Veterans (for benefits purposes)",
      howToClaim:
        "One free certified copy labeled 'for veteran's benefits only, not for personal use.' Submit a formal application indicating veteran status.",
      citation: "MCL 333.2891",
    },
  ],
  recordsAvailableFrom: 1867,
  applicationFormUrl:
    "https://www.michigan.gov/-/media/Project/Websites/mdhhs/Folder1/Folder3/birthapp.pdf",
  specialNotes: [
    "County clerks are often faster and cheaper than the state office — check your local county clerk first.",
    "Birth records 100+ years old are public records; anyone can request them without ID or eligibility restrictions.",
    "Senior citizens (65+) pay a reduced fee of $14 for their own birth record.",
    "Michigan's 'Free ID for Me' program provides free state ID cards for homeless individuals at Secretary of State offices.",
  ],
  noIdWorkaround:
    "Michigan has a specific alternative: provide 3 pieces of dated documentation from different sources that verify your name and date of birth, with at least one dated within the past year. See the full Photo ID Alternative Documents list at michigan.gov. If experiencing homelessness, a Homeless Verification Letter from a public service agency serves as both ID support and qualifies you for a fee waiver. Contact (517) 335-8666 or email VRCustomerService@michigan.gov for help.",
  lastVerified: "2026-03-21",
};
