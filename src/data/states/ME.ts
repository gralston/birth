import { StateVitalRecords } from "@/types";

export const ME: StateVitalRecords = {
  stateCode: "ME",
  stateName: "Maine",
  office: {
    name: "Office of Data, Research, and Vital Statistics, Maine CDC, Department of Health and Human Services",
    address: "11 State House Station, 220 Capitol Street, Augusta, ME 04333-0011",
    phone: "(207) 287-3181",
    website:
      "https://www.maine.gov/dhhs/mecdc/public-health-systems/data-research/vital-records/",
    hours: "Mon–Fri 9:00 AM – 4:00 PM ET",
  },
  fees: {
    certified: 15,
    additionalCopy: 6,
    paymentMethods: [
      "check",
      "money order",
      "cash (in-person only)",
      "credit card (online/phone via VitalChek)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/vital-records/maine/maine-vital-records",
      provider: "vitalchek",
      additionalFee: 13.25,
      notes:
        "VitalChek is the authorized online vendor for the state of Maine. Processing typically takes 5–7 business days after verification. Expedited shipping options available for an additional fee.",
    },
    mail: {
      address:
        "Office of Data, Research, and Vital Statistics, 11 State House Station, 220 Capitol Street, Augusta, ME 04333-0011",
      processingTime: "4–6 weeks",
      notes:
        "Include completed VS-18 application form, a photocopy of your government-issued photo ID, and a check or money order payable to 'Treasurer, State of Maine.' Include a self-addressed stamped envelope for faster return. All mail requests require a copy of valid photo ID.",
    },
    inPerson: {
      locations:
        "State Vital Records office at 220 Capitol Street, Augusta, ME. Also available at the city or town clerk's office where the birth occurred.",
      processingTime: "Same day at state office; varies at municipal clerks",
      notes:
        "Municipal (city/town) clerks maintain birth records for events that occurred in their jurisdiction. Fees at municipal offices may differ from state fees. Call ahead to confirm hours and availability.",
      localOfficesUrl:
        "https://www.maine.gov/local/",
    },
    phone: {
      number: "1-866-310-2816",
      provider: "VitalChek",
      notes:
        "Credit or debit card required. Same state fee plus VitalChek processing fee. Available 24/7 through automated system.",
    },
  },
  requirements: {
    primaryId: [
      "Valid driver's license or state-issued photo ID",
      "Valid US passport",
      "Valid military ID",
    ],
    secondaryId: [
      "Social Security card",
      "Birth certificate (if requesting a replacement for someone else)",
      "Vehicle registration",
      "Utility bill with name and address",
      "School or employer photo ID",
      "Health insurance card",
      "W-2 or tax return",
    ],
    eligibleRequestors: [
      "The person named on the certificate (registrant)",
      "A parent listed on the certificate",
      "Legal guardian with court documentation",
      "Spouse of the registrant",
      "Adult child of the registrant",
      "Grandparent of the registrant",
      "Sibling of the registrant (if adult)",
      "Licensed attorney representing an eligible party",
      "Authorized agent with notarized written authorization from an eligible party",
    ],
    notes:
      "Maine birth records are restricted to eligible applicants. You must demonstrate a direct and legitimate interest. A photocopy of a valid government-issued photo ID is required with all requests. If you do not have a photo ID, two forms of secondary identification may be accepted.",
    acceptableIdUrl:
      "https://www.maine.gov/dhhs/mecdc/public-health-systems/data-research/vital-records/order/birth.shtml",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals experiencing homelessness who need a birth certificate for purposes of obtaining housing, employment, or social services",
      howToClaim:
        "Contact a local homeless services provider, General Assistance office, or Maine 2-1-1 to request assistance. A social worker or case manager can submit a request on your behalf with documentation of homelessness status. The fee may be waived or covered by the assisting agency.",
      citation: "22 MRSA § 2706(7)",
    },
    {
      eligibility:
        "Veterans and active-duty military service members requesting a birth certificate for military or VA purposes",
      howToClaim:
        "Submit a request through the Maine Bureau of Veterans' Services or a Veterans Service Officer (VSO). Include proof of military service (DD-214, military ID, or VA documentation).",
      citation: "22 MRSA § 2706",
    },
    {
      eligibility:
        "Individuals receiving MaineCare (Medicaid), TANF, or other means-tested public assistance who need a birth certificate to access benefits",
      howToClaim:
        "Contact your DHHS caseworker or local DHHS office to request a fee waiver. The caseworker can submit a request on your behalf or provide documentation for the vital records office.",
      citation: "22 MRSA § 2706",
    },
  ],
  recordsAvailableFrom: 1923,
  applicationFormUrl:
    "https://www.maine.gov/dhhs/mecdc/public-health-systems/data-research/vital-records/documents/VR-18-Birth-Request.pdf",
  specialNotes: [
    "Maine has a dual system: both the state Office of Vital Statistics in Augusta and municipal (city/town) clerks can issue birth certificates. Municipal clerks hold records for events in their jurisdiction.",
    "Municipal clerk fees may be lower than the state office fee. Contact the clerk in the municipality where the birth occurred for their current rates.",
    "Records from 1923 to the present are available from the state office. For records prior to 1923, contact the municipal clerk where the birth occurred or the Maine State Archives at (207) 287-5795.",
    "Maine law restricts access to vital records to persons with a 'direct and legitimate interest.' Genealogical copies of records more than 75 years old are available to the general public.",
    "Adoptees in Maine may access their original birth certificates under Maine's adoptee rights law (22 MRSA § 2768-C). Contact the Vital Records office for the specific process.",
    "VitalChek is the sole authorized online/phone vendor — Maine does not operate its own online ordering portal.",
  ],
  noIdWorkaround:
    "If you lack a government-issued photo ID, Maine allows two forms of secondary identification (e.g., Social Security card plus a utility bill, or a school ID plus a W-2). An eligible family member — such as a parent, spouse, adult child, or sibling — who has valid ID can request the certificate on your behalf. For individuals experiencing homelessness, contact Maine 2-1-1 or a local General Assistance office for help obtaining a birth certificate at no cost. Homeless service providers and DHHS caseworkers can submit requests on behalf of clients. Municipal clerks may also be more flexible with identification requirements for in-person requests.",
  lastVerified: "2026-03-21",
};
