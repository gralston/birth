import { CountyOffice } from "@/types";

/**
 * All 10 New Hampshire county offices that issue birth certificates.
 *
 * In New Hampshire, birth certificates are obtained from the town/city
 * clerk where the birth occurred, or from the NH Division of Vital
 * Records Administration in Concord. Listed here are the primary
 * city/town clerks for each of the 10 counties.
 *
 * Data gathered March 2026 from official municipal and NH DVRA websites.
 */
export const NH_COUNTIES: CountyOffice[] = [
  { county: "Belknap", name: "Laconia City Clerk – Vital Records", address: "45 Beacon Street East, Laconia, NH 03246", phone: "(603) 527-1265", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Carroll", name: "Ossipee Town Clerk – Vital Records (Carroll County Seat)", address: "55 Main Street, Center Ossipee, NH 03814", phone: "(603) 539-4181", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
  { county: "Cheshire", name: "Keene City Clerk – Vital Records", address: "3 Washington Street, Keene, NH 03431", phone: "(603) 352-0133", website: "https://ci.keene.nh.us/city-clerk", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Coos", name: "Berlin City Clerk – Vital Records", address: "168 Main Street, Berlin, NH 03570", phone: "(603) 752-8587", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Grafton", name: "Lebanon City Clerk – Vital Records", address: "51 North Park Street, Lebanon, NH 03766", phone: "(603) 448-3054", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Hillsborough", name: "Manchester City Clerk – Vital Records", address: "1 City Hall Plaza, Manchester, NH 03101", phone: "(603) 624-6455", website: "https://www.manchesternh.gov/Departments/City-Clerk", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Hillsborough", name: "Nashua City Clerk – Vital Records", address: "229 Main Street, Nashua, NH 03060", phone: "(603) 589-3010", website: "https://www.nashuanh.gov/175/City-Clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Merrimack", name: "Concord City Clerk – Vital Records", address: "41 Green Street, Concord, NH 03301", phone: "(603) 225-8500", website: "https://www.concordnh.gov/193/City-Clerk", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Rockingham", name: "Exeter Town Clerk – Vital Records (Rockingham County Seat)", address: "10 Front Street, Exeter, NH 03833", phone: "(603) 773-6111", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Strafford", name: "Dover City Clerk – Vital Records", address: "288 Central Avenue, Dover, NH 03820", phone: "(603) 516-6018", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Sullivan", name: "Newport Town Clerk – Vital Records (Sullivan County Seat)", address: "15 Sunapee Street, Newport, NH 03773", phone: "(603) 863-1877", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
];
