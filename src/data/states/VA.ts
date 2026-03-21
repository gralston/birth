import { StateVitalRecords } from "@/types";

export const VA: StateVitalRecords = {
  stateCode: "VA",
  stateName: "Virginia",
  office: {
    name: "Virginia Department of Health, Office of Vital Records",
    address: "P.O. Box 1000, Richmond, VA 23218-1000",
    phone: "(804) 662-6200",
    website: "https://www.vdh.virginia.gov/vital-records/",
    hours: "Mon–Fri 8:00 AM – 4:30 PM ET (walk-in lobby 7:00 AM – 4:00 PM)",
  },
  fees: {
    certified: 12,
    additionalCopy: 12,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/in-person)",
      "cash (in-person)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vdh.virginia.gov/vital-records/applications-for-a-vital-record/",
      provider: "state",
      notes:
        "Virginia has its own online portal (no third-party fee). Processing takes about 5 business days. VitalChek also available with a $12.70 service fee for expedited orders.",
    },
    mail: {
      address:
        "VDH, Office of Vital Records, P.O. Box 1000, Richmond, VA 23218-1000",
      processingTime: "8 business days from receipt",
      notes:
        "Include completed VS6B form, photocopy of ID, and check/money order payable to 'State Health Department.'",
    },
    inPerson: {
      locations:
        "Main office at 8701 Park Central Dr., Suite 100, Richmond, VA. Also available at all DMV offices statewide ($14 fee) and local health department offices.",
      processingTime: "Same day at main office; varies at DMV/local offices",
      notes:
        "Virginia is unusual: all DMV Customer Service Centers statewide can issue birth certificates ($14 = $12 + $2 admin fee). No appointment needed at main office.",
      localOfficesUrl:
        "https://www.vdh.virginia.gov/vital-records/vital-record-walk-in-locations/",
    },
    phone: {
      number: "1-877-572-6333",
      provider: "VitalChek",
      notes: "Press option 2. Service fee applies. VDH phone line is for inquiries only, not ordering.",
    },
  },
  requirements: {
    primaryId: [
      "Valid US photo driver's license or ID card (or expired less than 1 year)",
      "Valid US passport",
      "Valid US military ID",
      "Immigration documents",
    ],
    secondaryId: [
      "Two required if no primary ID: Selective Service card, DD-214 discharge papers, certified school records/transcript, life insurance policy, health insurance card (Medicare, Medicaid)",
    ],
    eligibleRequestors: [
      "Mother, father, current spouse, child, brother, sister, or grandparent only",
    ],
    notes:
      "Virginia has strict eligibility — only immediate family members can request. Aunts, uncles, cousins, and in-laws are NOT eligible.",
    acceptableIdUrl:
      "https://www.vdh.virginia.gov/vital-records/id-requirements/",
  },
  feeWaivers: [
    {
      eligibility: "Homeless youth",
      howToClaim:
        "No fee for any vital record. Submit a completed 'Virginia Affidavit Certifying Homeless Youth Status' (DMV Form DL-60), valid for 90 days, signed by a school liaison, shelter director, or other certifier.",
      citation: "Va. Code § 32.1-273 (HB 1617, effective July 1, 2025)",
    },
    {
      eligibility: "Foster care youth aging out",
      howToClaim:
        "When a child leaves foster care at age 18 (after 6+ months in care), the local DSS department is required to obtain their birth certificate.",
      citation: "Va. Code § 63.2-905.3",
    },
    {
      eligibility: "American Indian / Native American racial designation correction",
      howToClaim:
        "One free certified copy for any American Indian/Native American whose birth record filed before July 1, 1960 contains an incorrect racial designation (legacy of the Racial Integrity Act of 1924).",
      citation: "Va. Code § 32.1-272",
    },
  ],
  recordsAvailableFrom: 1912,
  applicationFormUrl:
    "https://www.vdh.virginia.gov/content/uploads/sites/93/2020/07/VS6B_Birth-application.pdf",
  specialNotes: [
    "All Virginia DMV offices can issue birth certificates ($14) — you don't have to go to the health department.",
    "Virginia's online portal has no third-party fee — cheaper than VitalChek.",
    "Only immediate family members can request (no aunts, uncles, cousins, or in-laws).",
    "For births before 1912, check the Library of Virginia for records from 1853–1896 (incomplete) at lva-virginia.libguides.com/bmd.",
  ],
  noIdWorkaround:
    "Virginia accepts two secondary documents instead of a photo ID (e.g., health insurance card + school transcript, or DD-214 + life insurance policy). Homeless youth can use the DL-60 affidavit signed by a school liaison or shelter director — no standard photo ID needed, and the fee is waived. Foster care youth aging out at 18 should have their local DSS obtain the certificate. Contact VDH at (804) 662-6200 to discuss your specific situation.",
  lastVerified: "2026-03-21",
};
