import { StateVitalRecords } from "@/types";

export const PA: StateVitalRecords = {
  stateCode: "PA",
  stateName: "Pennsylvania",
  office: {
    name: "Pennsylvania Department of Health, Division of Vital Records",
    address:
      "P.O. Box 1528, New Castle, PA 16103",
    phone: "(724) 656-3100",
    website:
      "https://www.pa.gov/agencies/health/programs/vital-records/birth-certificates",
    hours: "Mon–Fri 8:00 AM – 4:30 PM ET",
  },
  fees: {
    certified: 20,
    additionalCopy: 20,
    paymentMethods: ["check", "money order", "credit card (online)"],
  },
  requestMethods: {
    online: {
      url: "https://mycertificates.health.pa.gov/",
      provider: "state",
      notes:
        "Pennsylvania has its own online ordering portal (mycertificates). Also available via VitalChek.",
    },
    mail: {
      address:
        "Division of Vital Records, P.O. Box 1528, New Castle, PA 16103",
      processingTime: "4–8 weeks",
      notes:
        "Include completed application, payment, and a photocopy of your government-issued photo ID.",
    },
    inPerson: {
      locations:
        "State office in New Castle, PA. Some county offices may assist.",
      processingTime: "Same day if record is on file",
      localOfficesUrl: "https://www.pa.gov/agencies/health/programs/vital-records/public-offices",
    },
  },
  requirements: {
    primaryId: [
      "Valid Pennsylvania driver's license or state ID",
      "Valid US passport",
      "Valid military ID",
    ],
    secondaryId: [
      "Utility bill",
      "Bank statement",
      "Insurance document",
      "Government correspondence",
    ],
    eligibleRequestors: [
      "The person named on the certificate",
      "A parent listed on the certificate",
      "A legal guardian",
      "An attorney or authorized representative",
    ],
    notes:
      "Pennsylvania requires government-issued photo ID for all applications. Limited alternative verification options.",
    acceptableIdUrl: "https://www.pa.gov/agencies/health/programs/vital-records/acceptable-id",
  },
  feeWaivers: [
    {
      eligibility: "Individuals experiencing homelessness",
      howToClaim:
        "Fee waived with assistance of a qualified advocate (shelter staff, case manager, or social worker). A dedicated application form is available from the PA Department of Health.",
    },
    {
      eligibility: "Foster care and juvenile justice-involved youth (ages 16–24)",
      howToClaim:
        "Fee waived for individuals who are or have been in foster care or the juvenile justice system. Dedicated form available from PA Department of Health.",
    },
    {
      eligibility: "Individuals affected by opioid use disorder",
      howToClaim:
        "Fee waived with appropriate documentation from a treatment provider.",
    },
    {
      eligibility: "Natural disaster victims",
      howToClaim:
        "Fee waived for individuals affected by a declared natural disaster.",
    },
    {
      eligibility: "Active military and veterans",
      howToClaim:
        "Fee waived for active service members, their spouses, and those discharged under conditions other than dishonorable.",
      citation: "Act 137 of 2024",
    },
  ],
  recordsAvailableFrom: 1906,
  applicationFormUrl:
    "https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/certificates-and-records/Application_for_a_Birth_Certificate.pdf",
  applicationFormUrlEs:
    "https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/certificates-and-records/Solicitud%20de%20un%20Certificado%20de%20Nacimiento.pdf",
  specialNotes: [
    "Pennsylvania has stricter ID requirements than many states — government-issued photo ID is generally required with limited alternatives.",
    "For births before 1906, contact the Register of Wills in the county of birth.",
  ],
  noIdWorkaround:
    "Pennsylvania has limited options for applicants without government-issued photo ID. Contact the Division of Vital Records at (724) 656-3100 to discuss your situation. Legal aid organizations may be able to assist with obtaining alternative documentation.",
  lastVerified: "2026-03-21",
};
