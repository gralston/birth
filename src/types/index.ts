/** Core data types for the Birth Certificate Navigator */

export interface StateVitalRecords {
  /** Two-letter state code (e.g., "CA", "TX") */
  stateCode: string;
  /** Full state name */
  stateName: string;
  /** The vital records office that issues birth certificates */
  office: {
    name: string;
    address: string;
    phone: string;
    website: string;
    hours?: string;
  };
  /** Fees for birth certificate copies */
  fees: {
    /** Standard certified copy fee in dollars */
    certified: number;
    /** Additional copy fee (same order) */
    additionalCopy: number;
    /** Expedited processing fee, if available */
    expedited?: number;
    /** Accepted payment methods */
    paymentMethods: string[];
  };
  /** How to request a birth certificate */
  requestMethods: {
    online?: {
      url: string;
      provider: "vitalchek" | "state" | "other";
      /** State fee for online orders, if different from the standard certified fee */
      fee?: number;
      additionalFee?: number;
      notes?: string;
      /** URL to state page listing all authorized online vendors */
      vendorListUrl?: string;
    };
    mail?: {
      address: string;
      processingTime: string;
      /** State fee for mail orders, if different from the standard certified fee */
      fee?: number;
      notes?: string;
    };
    inPerson?: {
      locations: string;
      processingTime: string;
      /** State fee for in-person orders, if different from the standard certified fee */
      fee?: number;
      notes?: string;
      /** URL to a directory of local offices that can issue certificates */
      localOfficesUrl?: string;
    };
    phone?: {
      number: string;
      provider?: string;
      notes?: string;
    };
  };
  /** What ID/documents are required */
  requirements: {
    /** Primary acceptable IDs (any one of these) */
    primaryId: string[];
    /** If no primary ID, accept two of these */
    secondaryId: string[];
    /** Who can request (registrant, parent, legal rep, etc.) */
    eligibleRequestors: string[];
    /** Additional requirements or notes */
    notes?: string;
    /** URL to state's official acceptable ID page */
    acceptableIdUrl?: string;
  };
  /** Fee waiver information */
  feeWaivers: FeeWaiver[];
  /** Earliest year for which records are available */
  recordsAvailableFrom: number;
  /** URL to downloadable application form PDF */
  applicationFormUrl?: string;
  /** URL to application form in Spanish, if available */
  applicationFormUrlEs?: string;
  /** Any special notes or warnings for this state */
  specialNotes?: string[];
  /** Workarounds for people with no ID (the catch-22) */
  noIdWorkaround?: string;
  /** Whether county-level offices can issue birth certificates */
  countyOfficesAvailable?: boolean;
  /** ISO date (YYYY-MM-DD) when this data was last verified against official sources */
  lastVerified: string;
}

/** A local county office that can issue birth certificates */
export interface CountyOffice {
  /** County name */
  county: string;
  /** Office name */
  name: string;
  /** Street address */
  address: string;
  /** Phone number */
  phone: string;
  /** Website URL */
  website?: string;
  /** Hours of operation */
  hours?: string;
}

export interface FeeWaiver {
  /** Who qualifies */
  eligibility: string;
  /** How to claim it */
  howToClaim: string;
  /** Legal citation if available */
  citation?: string;
  /** If set, this waiver only surfaces when the user's reason matches */
  forReason?: IntakeAnswers["reason"];
}

/** User's answers from the intake wizard */
export interface IntakeAnswers {
  /** State where the person was born */
  birthState: string;
  /** Whether the person has a government-issued photo ID */
  hasGovernmentId: boolean;
  /** Reason for needing the certificate */
  reason: "voter-id" | "passport" | "real-id" | "employment" | "benefits" | "personal" | "other";
  /** User's zip code for finding nearest office */
  zipCode?: string;
  /** Special circumstances that affect the process */
  circumstances: Circumstance[];
}

export type Circumstance =
  | "homeless"
  | "name-change"
  | "adopted"
  | "no-id"
  | "born-abroad"
  | "born-before-records"
  | "transgender"
  | "incarcerated"
  | "none";

/** A step in the personalized action plan */
export interface ActionStep {
  /** Step number */
  order: number;
  /** Short title */
  title: string;
  /** Detailed instruction */
  description: string;
  /** Link to form, office, or resource */
  link?: { url: string; label: string };
  /** Secondary link (e.g., Spanish-language form) */
  secondaryLink?: { url: string; label: string };
  /** Whether this step is critical / blocking */
  critical?: boolean;
  /** Estimated time or processing duration */
  estimatedTime?: string;
  /** Cost for this step */
  cost?: string;
  /** Tips or warnings */
  tips?: string[];
  /** Request method options — rendered as comparison cards */
  methodOptions?: RequestMethodOption[];
}

/** A request method option for the comparison cards */
export interface RequestMethodOption {
  method: "online" | "inPerson" | "mail";
  label: string;
  tag: string;
  cost: string;
  time: string;
  description: string;
  link?: { url: string; label: string };
  /** Secondary link (e.g., vendor list) */
  secondaryLink?: { url: string; label: string };
  tips?: string[];
  /** Full contact details for this method */
  contact?: {
    name?: string;
    address?: string;
    phone?: string;
    hours?: string;
    website?: string;
  };
}
