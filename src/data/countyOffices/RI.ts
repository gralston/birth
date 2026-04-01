import { CountyOffice } from "@/types";

/**
 * Rhode Island vital records offices.
 *
 * Rhode Island has 5 counties but county government was abolished.
 * Birth certificates are obtained from the town/city clerk where the
 * birth occurred, or from the Rhode Island Department of Health
 * Office of Vital Records in Providence.
 *
 * Data gathered March 2026 from official municipal and RI DOH websites.
 */
export const RI_COUNTIES: CountyOffice[] = [
  { county: "Providence", name: "Providence City Clerk – Vital Records", address: "25 Dorrance Street, Providence, RI 02903", phone: "(401) 680-5240", website: "https://www.providenceri.gov/city-clerk/", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Providence", name: "Cranston City Clerk – Vital Records", address: "869 Park Avenue, Cranston, RI 02910", phone: "(401) 780-3166", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
  { county: "Providence", name: "Pawtucket City Clerk – Vital Records", address: "137 Roosevelt Avenue, Pawtucket, RI 02860", phone: "(401) 728-0500", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Providence", name: "Woonsocket City Clerk – Vital Records", address: "169 Main Street, Woonsocket, RI 02895", phone: "(401) 767-9218", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Kent", name: "Warwick City Clerk – Vital Records", address: "3275 Post Road, Warwick, RI 02886", phone: "(401) 738-2000", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Kent", name: "West Warwick Town Clerk – Vital Records", address: "1170 Main Street, West Warwick, RI 02893", phone: "(401) 822-9201", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Washington", name: "South Kingstown Town Clerk – Vital Records", address: "180 High Street, Wakefield, RI 02879", phone: "(401) 789-9331", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Newport", name: "Newport City Clerk – Vital Records", address: "43 Broadway, Newport, RI 02840", phone: "(401) 845-5386", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Bristol", name: "Bristol Town Clerk – Vital Records", address: "10 Court Street, Bristol, RI 02809", phone: "(401) 253-7000", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Providence", name: "East Providence City Clerk – Vital Records", address: "145 Taunton Avenue, East Providence, RI 02914", phone: "(401) 435-7500", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
];
