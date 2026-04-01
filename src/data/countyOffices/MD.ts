import { CountyOffice } from "@/types";

/**
 * All 24 Maryland county/city offices that issue birth certificates.
 *
 * Maryland has 23 counties plus Baltimore City (an independent city).
 * Birth certificates are issued by the Maryland Division of Vital
 * Records in Baltimore. Local health departments can assist with
 * requests and direct residents to appropriate services.
 *
 * Data gathered March 2026 from official MD DVR and county websites.
 */
export const MD_COUNTIES: CountyOffice[] = [
  { county: "Allegany", name: "Allegany County Health Department", address: "12501 Willowbrook Road SE, Cumberland, MD 21502", phone: "(301) 759-5000", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Anne Arundel", name: "Anne Arundel County Health Department", address: "3 Harry S. Truman Parkway, Suite 200, Annapolis, MD 21401", phone: "(410) 222-7095", website: "https://www.aahealth.org/", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Baltimore County", name: "Baltimore County Health Department", address: "6401 York Road, 3rd Floor, Baltimore, MD 21212", phone: "(410) 887-2243", website: "https://www.baltimorecountymd.gov/departments/health/", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Baltimore City", name: "Maryland Division of Vital Records (Main Office)", address: "6764-B Reisterstown Road, Baltimore, MD 21215", phone: "(410) 764-3038", website: "https://health.maryland.gov/vsa/Pages/birth.aspx", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Calvert", name: "Calvert County Health Department", address: "975 Solomons Island Road North, Prince Frederick, MD 20678", phone: "(410) 535-5400", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Caroline", name: "Caroline County Health Department", address: "403 South 7th Street, Suite 134, Denton, MD 21629", phone: "(410) 479-8000", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Carroll", name: "Carroll County Health Department", address: "290 South Center Street, Westminster, MD 21157", phone: "(410) 876-2152", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Cecil", name: "Cecil County Health Department", address: "401 Bow Street, Elkton, MD 21921", phone: "(410) 996-5550", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Charles", name: "Charles County Health Department", address: "4545 Crain Highway, White Plains, MD 20695", phone: "(301) 609-6900", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Dorchester", name: "Dorchester County Health Department", address: "3 Cedar Street, Cambridge, MD 21613", phone: "(410) 228-3223", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Frederick", name: "Frederick County Health Department", address: "350 Montevue Lane, Frederick, MD 21702", phone: "(301) 600-1029", website: "https://health.frederickcountymd.gov/", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Garrett", name: "Garrett County Health Department", address: "1025 Memorial Drive, Oakland, MD 21550", phone: "(301) 334-7700", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Harford", name: "Harford County Health Department", address: "120 South Hays Street, Bel Air, MD 21014", phone: "(410) 838-1500", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Howard", name: "Howard County Health Department", address: "8930 Stanford Boulevard, Columbia, MD 21045", phone: "(410) 313-6300", website: "https://www.howardcountymd.gov/health", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Kent", name: "Kent County Health Department", address: "125 South Lynchburg Street, Chestertown, MD 21620", phone: "(410) 778-7024", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Montgomery", name: "Montgomery County Health Department", address: "8500 Colesville Road, Silver Spring, MD 20910", phone: "(240) 777-1050", website: "https://www.montgomerycountymd.gov/hhs/", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Prince George's", name: "Prince George's County Health Department", address: "1701 McCormick Drive, Suite 200, Largo, MD 20774", phone: "(301) 583-3300", website: "https://www.princegeorgescountymd.gov/departments-offices/health-department", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Queen Anne's", name: "Queen Anne's County Health Department", address: "206 North Commerce Street, Centreville, MD 21617", phone: "(410) 758-2357", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Somerset", name: "Somerset County Health Department", address: "7920 Crisfield Highway, Westover, MD 21871", phone: "(410) 651-1020", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "St. Mary's", name: "St. Mary's County Health Department", address: "21580 Peabody Street, Leonardtown, MD 20650", phone: "(301) 475-4330", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Talbot", name: "Talbot County Health Department", address: "100 South Hanson Street, Easton, MD 21601", phone: "(410) 819-5600", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Washington", name: "Washington County Health Department", address: "1302 Pennsylvania Avenue, Hagerstown, MD 21742", phone: "(240) 313-3200", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Wicomico", name: "Wicomico County Health Department", address: "108 East Main Street, Salisbury, MD 21801", phone: "(410) 546-4446", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Worcester", name: "Worcester County Health Department", address: "6040 Public Landing Road, Snow Hill, MD 21863", phone: "(410) 632-1100", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
];
