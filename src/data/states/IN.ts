import { StateVitalRecords } from "@/types";

export const IN: StateVitalRecords = {
  stateCode: "IN",
  stateName: "Indiana",
  office: {
    name: "Indiana Department of Health, Vital Records Office",
    address: "2 N. Meridian Street, Indianapolis, IN 46204",
    phone: "(317) 233-2700",
    website: "https://www.in.gov/health/vital-records/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM ET",
  },
  fees: {
    certified: 10,
    additionalCopy: 4,
    paymentMethods: [
      "check",
      "money order",
      "credit card (online/phone)",
      "cash (in-person at local offices)",
    ],
  },
  requestMethods: {
    online: {
      url: "https://www.vitalchek.com/v/birth-certificates/indiana",
      provider: "vitalchek",
      additionalFee: 13.25,
      notes:
        "VitalChek is the sole authorized online vendor for Indiana vital records. Credit or debit card required. Expedited shipping options available at additional cost.",
    },
    mail: {
      address:
        "Indiana Department of Health, Vital Records Office, P.O. Box 7125, Indianapolis, IN 46206-7125",
      processingTime: "4–8 weeks",
      notes:
        "Include completed state application form (49666), a photocopy of valid photo ID, and check or money order payable to 'Indiana State Department of Health.' Do not send cash.",
    },
    inPerson: {
      locations:
        "Local health department offices throughout Indiana. The state vital records office in Indianapolis does not provide walk-in counter service — use your local health department instead.",
      processingTime: "Same day at most local health departments",
      notes:
        "Local health departments are the primary in-person option. Fees and accepted payment methods may vary by county. Contact your local office before visiting.",
      localOfficesUrl:
        "https://www.in.gov/health/vital-records/order-now/",
    },
    phone: {
      number: "1-866-849-1888",
      provider: "VitalChek",
      notes:
        "VitalChek toll-free line. Same state fee plus VitalChek processing fee. Credit or debit card required.",
    },
  },
  requirements: {
    primaryId: [
      "Valid Indiana driver's license or state-issued ID card",
      "Valid US passport or passport card",
      "Valid military ID (DD-214 or active duty)",
    ],
    secondaryId: [
      "Social Security card",
      "Utility bill with current address",
      "Bank statement",
      "Voter registration card",
      "Government-issued correspondence with name and address",
      "Employment ID with photo",
    ],
    eligibleRequestors: [
      "The person named on the certificate (if 18+)",
      "A parent listed on the birth certificate",
      "A legal guardian (with court-appointed guardianship documentation)",
      "A legal representative or attorney (with written authorization)",
      "A grandparent (with proof of relationship)",
    ],
    notes:
      "All applicants must provide a photocopy of a valid government-issued photo ID. If you do not have a primary photo ID, provide two forms of secondary identification.",
    acceptableIdUrl:
      "https://www.in.gov/health/vital-records/birth-information/",
  },
  feeWaivers: [
    {
      eligibility: "People experiencing homelessness",
      howToClaim:
        "Fee waived for individuals certified as homeless. Provide a letter from a shelter, social services agency, or other qualified organization verifying homeless status. Submit with your application.",
      citation: "IC 16-37-1-11.5",
    },
    {
      eligibility: "Victims of domestic violence, dating violence, sexual assault, stalking, or human trafficking",
      howToClaim:
        "Fee waived upon providing documentation of victim status from a law enforcement agency, prosecutor, or victim services provider such as a domestic violence shelter.",
      citation: "IC 16-37-1-11.7",
    },
    {
      eligibility: "Veterans (for VA benefits purposes)",
      howToClaim:
        "One certified copy provided at no charge when needed for Veterans Administration benefits claims. Indicate VA purpose on the application and provide proof of veteran status (DD-214 or VA letter).",
      citation: "IC 16-37-1-11",
    },
    {
      eligibility: "Individuals released from incarceration (Indiana DOC)",
      howToClaim:
        "Fee waived for one certified copy upon release from the Indiana Department of Correction. The DOC coordinates directly with Vital Records prior to release.",
      citation: "IC 16-37-1-11.6",
    },
  ],
  recordsAvailableFrom: 1907,
  applicationFormUrl:
    "https://forms.in.gov/Download.aspx?id=5623",
  specialNotes: [
    "Indiana birth certificates are primarily issued through local health departments for in-person requests — the state office in Indianapolis does not offer walk-in counter service.",
    "For births before 1907, contact the local county health department or county clerk in the county where the birth occurred.",
    "Indiana uses a statewide electronic vital records system (DRIVE), so local health departments can access records from any Indiana county.",
    "Amended birth certificates are available for gender marker changes under IC 16-37-2-10 with a court order.",
    "Processing times for mail orders can be significant — consider using VitalChek online or visiting a local health department for faster service.",
  ],
  noIdWorkaround:
    "If you lack a government-issued photo ID, Indiana allows you to submit two forms of secondary identification (e.g., Social Security card plus a utility bill or bank statement). Visit a local health department in person, as staff may be able to help verify your identity through alternative means. If you are experiencing homelessness, a verification letter from a shelter or social services agency both supports your identity and qualifies you for a fee waiver under IC 16-37-1-11.5. For additional assistance, contact the Indiana Vital Records Office at (317) 233-2700 or Indiana Legal Services at (317) 631-9410.",
  lastVerified: "2026-03-21",
};
