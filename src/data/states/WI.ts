import { StateVitalRecords } from "@/types";

export const WI: StateVitalRecords = {
  stateCode: "WI",
  stateName: "Wisconsin",
  office: {
    name: "Wisconsin Department of Health Services, Vital Records Office",
    address: "1 West Wilson Street, Room 158, P.O. Box 309, Madison, WI 53701-0309",
    phone: "(608) 266-1373",
    website: "https://www.dhs.wisconsin.gov/vitalrecords/birth.htm",
    hours: "Mon–Fri 7:45 AM – 4:30 PM CT (walk-in); Phone hours Mon–Fri 8:00 AM – 4:00 PM CT",
  },
  fees: {
    certified: 20,
    additionalCopy: 3,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone)",
      "cash (in-person)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://vitalrecords.wi.gov/",
      provider: "state",
      notes:
        "Wisconsin offers direct online ordering through its own portal at vitalrecords.wi.gov. VitalChek is also available as an alternative at www.vitalchek.com. Online orders require a valid credit or debit card.",
    },
    mail: {
      address:
        "Wisconsin Vital Records Office, P.O. Box 309, Madison, WI 53701-0309",
      processingTime: "2–4 weeks",
      notes:
        "Include completed Form F-05291 application, photocopy of valid ID, and check or money order payable to 'Wisconsin Vital Records.' Write the registrant's name on the memo line.",
    },
    inPerson: {
      locations:
        "State Vital Records Office at 1 West Wilson Street, Room 158, Madison, WI. Local Register of Deeds offices in each county can also issue certified copies for births registered in their county.",
      processingTime: "Same day at state office; varies by county (often same day)",
      notes:
        "County Register of Deeds offices are often more convenient and may have shorter wait times. Call ahead to confirm hours and availability.",
      localOfficesUrl:
        "https://www.wrdaonline.org/counties",
    },
    phone: {
      number: "(608) 266-1373",
      provider: "Wisconsin Vital Records Office",
      notes:
        "Call to request by phone with a credit card. VitalChek phone orders also available at 1-877-817-5832.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Wisconsin driver's license or state ID",
      "Valid US passport or passport card",
      "Valid US military ID",
      "Tribal ID issued by a federally recognized tribe",
    ],
    secondaryId: [
      "Social Security card",
      "Health insurance card or medical records",
      "Bank statement or credit card statement",
      "Utility bill (within 90 days)",
      "Pay stub (within 90 days)",
      "W-2 or tax return",
      "School records or transcript",
      "Vehicle registration",
    ],
    eligibleRequestors: [
      "The person named on the record (registrant)",
      "A parent listed on the birth certificate",
      "A legal guardian (with certified guardianship order)",
      "A legal representative (attorney with authorization)",
      "A member of the registrant's immediate family with a direct and tangible interest",
      "A government agency for official purposes",
    ],
    notes:
      "If you lack a primary photo ID, you must provide two secondary documents that together verify your identity and address. All photocopies of ID must be legible.",
    acceptableIdUrl:
      "https://www.dhs.wisconsin.gov/vitalrecords/record.htm",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "Fee waived for one certified copy of a birth certificate per year. Provide a written statement from a shelter, social services agency, or outreach worker verifying homeless status.",
      citation: "Wis. Stat. § 69.22(1m)",
    },
    {
      eligibility: "Victims of sexual assault, domestic abuse, or trafficking",
      howToClaim:
        "Fee waived for a certified copy needed for purposes related to the abuse or trafficking. Provide documentation from law enforcement, a district attorney, or a victim services agency.",
      citation: "Wis. Stat. § 69.22(1p)",
    },
    {
      eligibility: "Veterans (for VA benefits purposes)",
      howToClaim:
        "One free certified copy when needed for veterans' benefits claims. Indicate on the application that the record is needed for VA benefits and provide proof of veteran status (DD-214 or VA letter).",
      citation: "Wis. Stat. § 69.22(1r)",
    },
  ],
  recordsAvailableFrom: 1907,
  applicationFormUrl:
    "https://www.dhs.wisconsin.gov/forms/f0/f05291.pdf",
  applicationFormUrlEs:
    "https://www.dhs.wisconsin.gov/forms/f0/f05291s.pdf",
  specialNotes: [
    "County Register of Deeds offices can issue certified copies and are often faster and more convenient than the state office — check your county's Register of Deeds first.",
    "For births before October 1, 1907, contact the Register of Deeds in the county where the birth occurred, as the state office may not have those records.",
    "Wisconsin allows tribal IDs from federally recognized tribes as valid primary identification.",
    "Heirloom (decorative) birth certificates are available for an additional $40 — these are keepsake items and should not be confused with standard certified copies.",
    "Wisconsin's online portal (vitalrecords.wi.gov) is a state-run system, not a third-party vendor, making it a convenient and secure option.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, Wisconsin allows you to submit two pieces of secondary identification (such as a Social Security card plus a utility bill or bank statement). If experiencing homelessness, a verification letter from a shelter or social services agency both supports your identity and qualifies you for a fee waiver under Wis. Stat. § 69.22(1m). You may also contact the Vital Records Office at (608) 266-1373 to discuss your situation — staff can advise on acceptable alternative documents. County Register of Deeds offices may also be more flexible for in-person requests.",
  lastVerified: "2026-03-21",
};
