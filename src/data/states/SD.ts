import { StateVitalRecords } from "@/types";

export const SD: StateVitalRecords = {
  stateCode: "SD",
  stateName: "South Dakota",
  office: {
    name: "South Dakota Department of Health, Vital Records",
    address: "221 West Capitol Avenue, Pierre, SD 57501",
    phone: "(605) 773-4961",
    website:
      "https://doh.sd.gov/licensing-and-records/vital-records/",
    hours: "Mon-Fri 8:00 AM - 5:00 PM CT (closed state holidays)",
  },
  fees: {
    certified: 15,
    additionalCopy: 15,
    expedited: 11.5,
    paymentMethods: [
      "check or money order (payable to South Dakota Department of Health)",
      "credit card (online/phone via VitalChek: Visa, MasterCard, Discover, American Express)",
      "debit card (online/phone via VitalChek)",
      "cash (in person at state office or Register of Deeds)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/south-dakota",
      provider: "vitalchek",
      additionalFee: 11.5,
      notes:
        "VitalChek is the only authorized online vendor for South Dakota vital records. Credit or debit card required. An additional expedite fee of $11.50 applies per record on top of the $15 state fee. Standard processing is 3-5 business days after order is received by the state office.",
    },
    mail: {
      address:
        "Vital Records, 221 West Capitol Avenue, Pierre, SD 57501",
      processingTime: "3 to 5 business days after receipt",
      notes:
        "Include completed South Dakota Vital Records Request form, a clear photocopy of your valid government-issued photo ID (front and back), and payment by check or money order payable to 'South Dakota Department of Health.' You may also mail requests to any South Dakota Register of Deeds office. You may submit your request in a prepaid priority envelope for expedited return shipping.",
    },
    inPerson: {
      locations:
        "State Vital Records Office at 221 West Capitol Avenue, Pierre, SD. Also available at any of the 64 county Register of Deeds offices throughout South Dakota.",
      processingTime: "Same day at most locations if the record is on file",
      notes:
        "Bring valid government-issued photo ID and completed application form. Both the state office and county Register of Deeds offices maintain sets of standard birth, death, and marriage records.",
      localOfficesUrl:
        "https://doh.sd.gov/licensing-and-records/find-a-register-of-deeds-office/",
    },
    phone: {
      number: "(605) 773-4961",
      provider: "VitalChek",
      notes:
        "Phone orders are processed through VitalChek with an additional $11.50 expedite fee per record. Credit or debit card required. The credit card must be in your name for security purposes. For general inquiries, call the Vital Records office at (605) 773-4961.",
    },
  },
  requirements: {
    primaryId: [
      "Valid government-issued photo ID (state, tribal, or federal)",
      "Valid U.S. passport or passport card",
      "U.S. military ID",
      "Permanent Resident Card (Green Card)",
      "Foreign government-issued photo ID from country of residence",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill or bank statement (recent)",
      "Insurance card or Medicaid/Medicare card",
      "School or employer ID with photo",
      "Voter registration card",
      "Certified marriage certificate or divorce decree",
    ],
    eligibleRequestors: [
      "The registrant (person named on the certificate)",
      "Spouse of the registrant",
      "Parent listed on the certificate",
      "Child of the registrant",
      "Legal guardian (with certified court documentation)",
      "Next of kin",
      "Authorized representative or legal agent (with documentation of authority)",
    ],
    notes:
      "Applicants must demonstrate eligibility to obtain a certified copy. Proof of relationship may be required at the time of request. If you do not have a government-issued photo ID, you must provide photocopies of two acceptable secondary documents. Vital records are released only as certified or informational copies per ARSD 44:09:06:02. Informational copies are issued on plain paper and contain the statement 'For Informational Purposes Only. Not for Legal Proof of Identification.'",
    acceptableIdUrl:
      "https://doh.sd.gov/licensing-and-records/vital-records/order-vital-records/eligibility-identification/",
  },
  feeWaivers: [
    {
      eligibility:
        "Individuals experiencing homelessness, limited to one certified copy of their South Dakota birth certificate",
      howToClaim:
        "Complete the South Dakota Vital Records Request form and the Affidavit of Homeless Status for a Certified Copy of a Birth Certificate. The affidavit must be signed before a notary public by both the individual and a homeless services provider (e.g., shelter, food bank, housing assistance program, human services agency, or law enforcement homeless liaison) with knowledge of the individual's housing status. Submit both forms along with applicable identification to the Vital Records office.",
      citation: "SDCL 34-25-63",
    },
    {
      eligibility:
        "Veterans or their dependents requesting a birth certificate for military or veterans' claims",
      howToClaim:
        "Submit a completed Military Fee Waiver Request form along with the Vital Records Request form. Provide documentation of the military claim or veterans' benefit application for which the certificate is needed.",
      citation: "SDCL 34-25-54",
    },
    {
      eligibility:
        "Minors participating in an organized sports program sponsored by a patriotic organization (e.g., American Legion Baseball)",
      howToClaim:
        "Submit a completed Fee Waiver Request for a Certified Copy of a Birth Record form along with the Vital Records Request form. One certified copy is provided at no charge.",
      citation: "SDCL 34-25-54",
    },
    {
      eligibility:
        "Children enrolled in Head Start, upon presentation of a valid Head Start enrollment form",
      howToClaim:
        "Submit a completed Fee Waiver Request for a Certified Copy of a Birth Record form along with a copy of the valid Head Start enrollment form for the child.",
      citation: "SDCL 34-25-54.1",
    },
    {
      eligibility:
        "Children needing a birth certificate for school enrollment, where the applicant is eligible for Temporary Assistance for Needy Families (TANF) under SDCL chapter 28-7, food stamps under SDCL chapter 28-12, or county poor relief under SDCL chapter 28-13",
      howToClaim:
        "Submit a completed Fee Waiver Request for a Certified Copy of a Birth Record form along with proof of eligibility for TANF, food stamps, or county poor relief.",
      citation: "SDCL 34-25-54.2",
    },
  ],
  recordsAvailableFrom: 1905,
  applicationFormUrl:
    "https://doh.sd.gov/media/enwfylbq/stateapplication.pdf",
  specialNotes: [
    "South Dakota statewide vital records registration began in July 1905. Some county Register of Deeds offices may have records filed prior to 1905.",
    "The Vital Records system is supported by 64 local Register of Deeds offices across the state, in addition to the state office in Pierre. Both the state and county offices hold sets of standard birth, death, and marriage records.",
    "Each certified copy costs $15 regardless of whether additional copies are ordered at the same time.",
    "An expedite fee of $11.50 per record applies to all online and phone orders through VitalChek, in addition to the $15 state fee.",
    "VitalChek is the only authorized third-party vendor for South Dakota vital records. Beware of unofficial websites that charge excessive fees.",
    "South Dakota allows amendments to birth certificates, including gender marker changes, through the Amendments & Court Orders process. See the Department of Health website for requirements.",
  ],
  noIdWorkaround:
    "If you have no government-issued photo ID, you may provide photocopies of two forms of secondary identification containing your name (e.g., Social Security card plus a utility bill). An eligible family member who has valid photo ID can submit the request on your behalf with proof of their relationship to the registrant. For individuals experiencing homelessness, a homeless services provider can sign the Affidavit of Homeless Status and the fee will be waived under SDCL 34-25-63. You may also visit a county Register of Deeds office in person where staff may be able to assist with alternative verification. Contact the Vital Records office at (605) 773-4961 for guidance on your specific situation.",
  lastVerified: "2026-03-21",
};
