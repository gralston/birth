import { StateVitalRecords } from "@/types";

export const NV: StateVitalRecords = {
  stateCode: "NV",
  stateName: "Nevada",
  office: {
    name: "Nevada Division of Public and Behavioral Health, Office of Vital Records",
    address: "4150 Technology Way, Suite 104, Carson City, NV 89706",
    phone: "(775) 684-4242",
    website: "https://dpbh.nv.gov/Programs/BirthDeath/Birth_and_Death_Certificates/",
    hours: "Mon–Fri 8:00 AM – 4:00 PM PT (closed weekends and state holidays)",
  },
  fees: {
    certified: 25,
    additionalCopy: 10,
    paymentMethods: [
      "money order",
      "cashier's check",
      "personal check (payable to 'Office of Vital Records')",
      "credit card (online and phone orders only)",
      "debit card (online and phone orders only)",
      "cash (in-person at county health district offices only)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/nevada/nevada-vital-records",
      provider: "vitalchek",
      additionalFee: 13.75,
      notes:
        "VitalChek is the authorized online vendor for Nevada. Additional processing and shipping fees apply. Credit/debit card required. Standard delivery is 7–10 business days after processing; expedited shipping options available for an additional fee.",
    },
    mail: {
      address:
        "Office of Vital Records, 4150 Technology Way, Suite 104, Carson City, NV 89706",
      processingTime: "4–6 weeks",
      notes:
        "Include completed application form, payment by money order, cashier's check, or personal check payable to 'Office of Vital Records,' and a photocopy of your valid government-issued photo ID (front and back). Include a self-addressed stamped envelope for fastest return. If requesting additional copies in the same order, each additional copy is $10.",
    },
    inPerson: {
      locations:
        "Office of Vital Records in Carson City (4150 Technology Way, Suite 104); Southern Nevada Health District (280 S. Decatur Blvd., Las Vegas, NV 89107); Washoe County Health District (1001 E. 9th St., Reno, NV 89512). County health district offices may issue certificates for events that occurred in their jurisdiction.",
      processingTime: "Same day to 2–3 weeks depending on location",
      notes:
        "The Carson City state office and county health district offices accept walk-in requests. Bring valid photo ID and payment. The Southern Nevada Health District in Las Vegas processes requests for Clark County events. The Washoe County Health District in Reno processes requests for Washoe County events. Processing time varies; some offices may issue certificates same day while the state office may take longer.",
      localOfficesUrl:
        "https://dpbh.nv.gov/Programs/BirthDeath/dta/Links/Birth_and_Death_Links/",
    },
    phone: {
      number: "(877) 803-0609",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with additional service fees. The state office phone (775) 684-4242 is for information and status inquiries only, not ordering.",
    },
  },
  requirements: {
    primaryId: [
      "U.S. driver's license or state ID card",
      "U.S. passport or passport card",
      "U.S. military ID",
      "Permanent Resident Card (Green Card)",
      "Certificate of Citizenship or Naturalization",
      "Foreign passport with valid U.S. visa",
      "Tribal ID card with photo",
    ],
    secondaryId: [
      "Social Security card",
      "Employment ID with photo",
      "School ID with photo",
      "Health insurance card",
      "Voter registration card",
      "Notarized sworn statement of identity",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate, must be 18+)",
      "A parent listed on the certificate",
      "Legal guardian (with certified court order)",
      "Child or grandchild of the registrant (18+)",
      "Sibling of the registrant (18+, with proof of common parentage)",
      "Spouse or domestic partner of the registrant (with proof of relationship)",
      "Attorney representing an eligible party (with written authorization)",
      "Legal representative with power of attorney (with valid POA document)",
      "Government agency for official purposes",
      "Licensed adoption agency (for adoption-related purposes)",
    ],
    notes:
      "For mail requests, include a clear photocopy of the front and back of your valid government-issued photo ID. For in-person requests, present original photo ID. If you do not have a primary ID, you may present two forms of secondary identification. All applicants must demonstrate a direct and tangible interest in the record per NRS 440.650.",
    acceptableIdUrl:
      "https://dpbh.nv.gov/Programs/BirthDeath/Birth_and_Death_Certificates/",
  },
  feeWaivers: [
    {
      eligibility:
        "Victims of domestic violence seeking protective orders or safety planning",
      howToClaim:
        "Submit a request through a domestic violence advocacy organization or law enforcement agency. The agency may request records on the victim's behalf at no charge for protective order proceedings.",
      citation: "NRS 440.700",
    },
    {
      eligibility:
        "Government agencies requesting records for official purposes",
      howToClaim:
        "Government agencies may obtain certified copies without charge when records are needed for official governmental purposes. The request must be on official letterhead and state the official purpose.",
      citation: "NRS 440.690",
    },
    {
      eligibility:
        "Veterans Administration (for VA benefits purposes)",
      howToClaim:
        "Records requested for Veterans Administration purposes are provided at no charge per federal requirements. The request should reference the veteran's claim or benefits case.",
    },
    {
      eligibility:
        "Children in foster care or former foster youth (up to age 26)",
      howToClaim:
        "The Division of Child and Family Services or a licensed child-placing agency may request birth certificates on behalf of children in state custody at no charge. Former foster youth may request fee waivers through their caseworker or the agency that had custody.",
      citation: "NRS 432B.175",
    },
    {
      eligibility:
        "Individuals experiencing homelessness",
      howToClaim:
        "Homeless individuals may obtain a fee waiver through social services agencies, homeless shelters, or legal aid organizations that can submit requests on their behalf. Contact the Office of Vital Records at (775) 684-4242 for the specific process.",
      citation: "NRS 440.690",
    },
  ],
  recordsAvailableFrom: 1911,
  applicationFormUrl:
    "https://dpbh.nv.gov/uploadedFiles/dpbhnvgov/content/Programs/BirthDeath/dta/Forms/Birth%20Certificate%20Application.pdf",
  specialNotes: [
    "Nevada statewide birth registration began on July 1, 1911. For births before 1911, contact the county recorder in the county where the birth occurred, as some counties maintained earlier records.",
    "The Southern Nevada Health District (SNHD) in Las Vegas serves as the local registrar for Clark County and can issue birth certificates for births that occurred in Clark County. SNHD may have different hours and fees; contact them at (702) 759-1010.",
    "The Washoe County Health District in Reno serves as the local registrar for Washoe County. Contact them at (775) 328-2400.",
    "Nevada law restricts access to birth certificates to persons with a 'direct and tangible interest' in the record, as defined in NRS 440.650. Unauthorized access is a misdemeanor.",
    "Heirloom (commemorative) birth certificates are available for an additional fee and feature a decorative border with Nevada imagery. These are fully certified copies.",
    "Amendments or corrections to birth certificates require a separate process and additional fees. Contact the Office of Vital Records for instructions.",
    "For adoptions finalized in Nevada, an amended birth certificate is issued by the Office of Vital Records. The original certificate is sealed per NRS 127.140.",
  ],
  noIdWorkaround:
    "If you do not have a government-issued photo ID, you may present two forms of secondary identification (e.g., Social Security card plus a notarized sworn statement of identity). Alternatively, an eligible family member who has valid photo ID can request the certificate on your behalf with proof of their relationship to you (e.g., their own birth certificate showing common parentage, a marriage certificate, or a court order). Homeless service providers, legal aid organizations, and government agencies may also request records on behalf of individuals who lack ID under NRS 440.690. Contact the Office of Vital Records at (775) 684-4242 for assistance with alternative verification.",
  lastVerified: "2026-03-21",
};
