import { StateVitalRecords } from "@/types";

export const VI: StateVitalRecords = {
  stateCode: "VI",
  stateName: "U.S. Virgin Islands",
  office: {
    name: "Virgin Islands Department of Health, Office of Vital Records and Statistics",
    address:
      "1303 Hospital Ground, Suite 10, St. Thomas, VI 00802",
    phone: "(340) 774-9000 ext. 4685",
    website: "https://doh.vi.gov/programs/vital-records-statistics/",
    hours:
      "Mon, Wed, Fri 8:00 AM – 1:00 PM AST (in-person service only on these days)",
  },
  fees: {
    certified: 15,
    additionalCopy: 15,
    paymentMethods: [
      "money order",
      "cash (in-person only)",
    ],
  },
  requestMethods: {
    mail: {
      address:
        "Office of Vital Records and Statistics, 1303 Hospital Ground, Suite 10, St. Thomas, VI 00802",
      processingTime: "4–8 weeks",
      notes:
        "Include a completed Application for Certified Copy of Birth Record, a photocopy of your valid government-issued photo ID, and a U.S. Postal money order for $15.00 payable to 'Virgin Islands Department of Health.' Personal checks are not accepted. If requesting from off-island, use the Off-Island Birth Application form. A separate application and money order is required for each certificate requested.",
    },
    inPerson: {
      locations:
        "St. Thomas: 1303 Hospital Ground, Suite 10, St. Thomas, VI 00802; St. Croix: 3500 Estate Richmond, Christiansted, St. Croix, VI 00820",
      processingTime: "Same day if record is on file",
      fee: 12,
      notes:
        "Walk-in service available Monday, Wednesday, and Friday only, 8:00 AM to 1:00 PM. Bring a valid government-issued photo ID. Payment by cash or money order. The in-person fee is $12.00 per certified copy, lower than the mail fee.",
    },
    phone: {
      number: "(340) 774-9000 ext. 4685",
      notes:
        "Phone line is for inquiries and status checks only. Orders cannot be placed by phone. For St. Croix inquiries, call (340) 643-6302.",
    },
  },
  requirements: {
    primaryId: [
      "Valid state- or territory-issued driver's license or ID card",
      "Valid US passport or passport card",
      "Valid US military ID",
      "Valid permanent resident card (green card)",
    ],
    secondaryId: [
      "Social Security card",
      "Health insurance card with name",
      "Employer-issued ID with photo",
      "School ID with photo",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant) if 18 or older",
      "A parent or legal guardian of a minor listed on the certificate",
      "A legal representative with a certified copy of a court order or power of attorney",
      "An attorney representing the person named on the certificate",
      "A person authorized by the registrant via notarized written statement",
    ],
    notes:
      "A legible copy of your government-issued photo ID must accompany all requests. If applying as a legal guardian or representative, include a certified copy of the court order or appointment document. For mail requests from off-island, a notarized application may be required.",
  },
  feeWaivers: [
    {
      eligibility:
        "No formal fee waiver program has been identified in the Virgin Islands Code or Department of Health policies for vital records requests",
      howToClaim:
        "Contact the Office of Vital Records and Statistics at (340) 774-9000 ext. 4685 to inquire about hardship accommodations. Community organizations and legal aid providers such as Legal Services of the Virgin Islands may be able to assist with obtaining certificates for indigent individuals.",
    },
  ],
  recordsAvailableFrom: 1840,
  applicationFormUrl:
    "https://doh.vi.gov/wp-content/uploads/2024/04/Off-Island-Birth-Application-4-9-24.pdf",
  specialNotes: [
    "The USVI has two vital records offices: one serving St. Thomas and St. John, and one serving St. Croix. You must contact the office for the island where the birth occurred.",
    "Birth records for St. Croix are available from 1840; records for St. Thomas and St. John are available from July 1906.",
    "In-person requests are $12.00 per certified copy, while mail requests are $15.00 per certified copy.",
    "Personal checks are not accepted. Payment must be by U.S. Postal money order (mail) or cash/money order (in person), payable to the Virgin Islands Department of Health.",
    "Birth verification letters (non-certified) are available for $6.00 and may be sufficient for some purposes.",
    "For international use, birth certificates may need an apostille or authentication. Contact the VI Superior Court or the US Department of State for apostille services.",
    "Court order amendments to birth records carry an additional $30.00 fee.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, contact the Office of Vital Records and Statistics at (340) 774-9000 ext. 4685 to discuss alternative documentation. You may have an authorized representative who has valid ID request the certificate on your behalf using a notarized authorization statement. Legal Services of the Virgin Islands ((340) 774-4525) may be able to assist individuals who lack identification in obtaining vital records.",
  lastVerified: "2026-03-21",
};
