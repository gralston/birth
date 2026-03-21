import { StateVitalRecords } from "@/types";

export const HI: StateVitalRecords = {
  stateCode: "HI",
  stateName: "Hawaii",
  office: {
    name: "Hawaii Department of Health, Office of Health Status Monitoring",
    address:
      "Isenberg Building, 1250 Punchbowl Street, Room 103, Honolulu, HI 96813",
    phone: "(808) 586-4539",
    website: "https://health.hawaii.gov/vitalrecords/",
    hours: "Mon–Fri 7:45 AM – 2:30 PM HST",
  },
  fees: {
    certified: 10,
    additionalCopy: 4,
    paymentMethods: [
      "credit card (online)",
      "cash (in person)",
      "cashier's check",
      "certified check",
      "money order",
    ],
  },
  requestMethods: {
    online: {
      url: "https://vitrec.ehawaii.gov/vitalrecords/",
      provider: "state",
      additionalFee: 2.5,
      notes:
        "Orders placed through the eHawaii portal. A $2.50 portal administration fee applies per order for up to five copies. Payment by Visa, MasterCard, American Express, or Discover. You can choose mail delivery or in-person pickup at the Honolulu office.",
    },
    mail: {
      address:
        "State Department of Health, Office of Health Status Monitoring, Isenberg Building, 1250 Punchbowl Street, Room 103, Honolulu, HI 96813",
      processingTime: "4–6 weeks",
      notes:
        "Include a completed Request for Certified Copy of Birth Record form, a copy of your government-issued photo ID, and payment by cashier's check, certified check, or money order payable to the State Department of Health. Personal checks and cash are not accepted by mail.",
    },
    inPerson: {
      locations:
        "Honolulu main office (1250 Punchbowl St, Room 103); district health offices on Maui, Kauai, and Hawaii Island",
      processingTime: "Same day at Honolulu office; 14 business days at district offices",
      notes:
        "Walk-in service available. Bring a valid government-issued photo ID. Payment accepted by cash, credit card, cashier's check, certified check, or money order.",
      localOfficesUrl:
        "https://health.hawaii.gov/vitalrecords/birth-marriage-certificates/",
    },
    phone: {
      number: "(808) 586-4539",
      notes:
        "Phone line is for inquiries and order status. To place an order, use the online portal or submit by mail or in person.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state driver's license or state ID card",
      "Valid US passport or passport card",
      "Valid military ID",
    ],
    secondaryId: [
      "School ID with photo",
      "Work ID with photo",
      "Foreign passport",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant)",
      "A parent or legal guardian listed on the certificate",
      "Spouse or domestic partner of the registrant",
      "A descendant of the registrant (child, grandchild)",
      "A person with a common ancestor (sibling, grandparent, aunt/uncle, cousin)",
      "An authorized agent or legal representative with a notarized statement",
    ],
    notes:
      "A legible copy of the applicant's government-issued photo ID must be submitted with all requests. For online orders, upload the ID during the ordering process.",
    acceptableIdUrl:
      "https://health.hawaii.gov/vitalrecords/birth-marriage-certificates/",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "Submit a verification letter from a homeless service provider corroborating your homeless status. Present the letter with your birth certificate request.",
      citation: "HRS § 338-14(b)(2)",
    },
    {
      eligibility:
        "Veterans and their immediate family members (spouse, children, parents, next of kin of a deceased veteran)",
      howToClaim:
        "Submit documentation showing the certified copy is needed in connection with a claim based on service in the armed forces of the United States.",
      citation: "HRS § 338-14(b)(1)",
    },
    {
      eligibility:
        "Individuals affected by the 2023 Maui wildfires (with a Lahaina residential address or FEMA disaster assistance ID)",
      howToClaim:
        "Provide your FEMA disaster assistance ID number or proof of Lahaina residential address when requesting your first replacement copy.",
      citation: "Emergency fee waiver by Hawaii Department of Health",
    },
  ],
  recordsAvailableFrom: 1842,
  applicationFormUrl:
    "https://health.hawaii.gov/vitalrecords/files/2025/09/birth-revised-2025-on-9.8.25.pdf",
  specialNotes: [
    "Hawaii has maintained vital records since 1842, though few records exist before 1896 and general compliance did not begin until 1929. For older records, contact the Hawaii State Archives.",
    "A $2.50 eHawaii portal administration fee is added to online orders for every increment of up to five copies.",
    "Certified copies include a security watermark and raised seal and are accepted for all legal purposes.",
    "District health offices on Maui, Kauai, and Hawaii Island can process birth certificate orders submitted through the online portal.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, you may have an authorized representative with valid ID request the certificate on your behalf using a notarized authorization statement. People experiencing homelessness can obtain a free certification of birth with a verification letter from a homeless service provider (HRS § 338-14), which can then be used to obtain other forms of ID.",
  lastVerified: "2026-03-21",
};
