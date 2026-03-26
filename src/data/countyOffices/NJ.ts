import { CountyOffice } from "@/types";

/**
 * New Jersey local registrar / municipal clerk offices that issue birth certificates.
 *
 * In New Jersey, birth certificates can be obtained from the local
 * registrar in the municipality where the birth occurred, or from
 * the NJ Department of Health Office of Vital Statistics and Registry.
 * Listed here are the county seat municipal clerks or primary
 * registrar offices for each county, which handle the largest volume.
 *
 * Data gathered March 2026 from official municipal and NJ DOH websites.
 */
export const NJ_COUNTIES: CountyOffice[] = [
  {
    county: "Bergen",
    name: "Hackensack City Clerk – Vital Records (Bergen County seat)",
    address: "65 Central Avenue, Hackensack, NJ 07601",
    phone: "(201) 646-3930",
    website: "https://www.hackensack.org/departments/city-clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Essex",
    name: "Newark City Clerk – Vital Records",
    address: "920 Broad Street, Room 122, Newark, NJ 07102",
    phone: "(973) 733-3680",
    website: "https://www.newarknj.gov/departments/cityclerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Hudson",
    name: "Jersey City Clerk – Vital Records",
    address: "280 Grove Street, Jersey City, NJ 07302",
    phone: "(201) 547-5155",
    website: "https://www.jerseycitynj.gov/cityhall/clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Middlesex",
    name: "New Brunswick City Clerk – Vital Records (Middlesex County seat)",
    address: "78 Bayard Street, New Brunswick, NJ 08901",
    phone: "(732) 745-5004",
    website: "https://www.cityofnewbrunswick.org/city-clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Monmouth",
    name: "Freehold Township Clerk – Vital Records (Monmouth County seat)",
    address: "1 Municipal Plaza, Freehold, NJ 07728",
    phone: "(732) 294-2000",
    website: "https://www.twpoffreehold.com/departments/clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Ocean",
    name: "Toms River Township Clerk – Vital Records (Ocean County seat)",
    address: "33 Washington Street, Toms River, NJ 08753",
    phone: "(732) 341-1000",
    website: "https://www.tomsrivertownship.com/departments/clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Union",
    name: "Elizabeth City Clerk – Vital Records (Union County seat)",
    address: "50 Winfield Scott Plaza, Elizabeth, NJ 07201",
    phone: "(908) 820-4124",
    website: "https://www.elizabethnj.org/city-clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Passaic",
    name: "Paterson City Clerk – Vital Records",
    address: "155 Market Street, Suite 115, Paterson, NJ 07505",
    phone: "(973) 321-1345",
    website: "https://www.patersonnj.gov/egov/apps/staff/directory.egov?view=detail&id=52",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Camden",
    name: "Camden City Clerk – Vital Records",
    address: "520 Market Street, Suite 102, Camden, NJ 08102",
    phone: "(856) 757-7200",
    website: "https://www.ci.camden.nj.us/city-clerk/",
    hours: "Mon–Fri 8:30 AM – 4:00 PM",
  },
  {
    county: "Morris",
    name: "Morristown Town Clerk – Vital Records (Morris County seat)",
    address: "200 South Street, Morristown, NJ 07960",
    phone: "(973) 292-6660",
    website: "https://www.townofmorristown.org/town-clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Burlington",
    name: "Mount Holly Township Clerk – Vital Records (Burlington County seat)",
    address: "23 Washington Street, Mount Holly, NJ 08060",
    phone: "(609) 267-0170",
    website: "https://www.mounthollynj.us/clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Mercer",
    name: "Trenton City Clerk – Vital Records (Mercer County seat)",
    address: "319 East State Street, Trenton, NJ 08608",
    phone: "(609) 989-3179",
    website: "https://www.trentonnj.org/188/City-Clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Somerset",
    name: "Somerville Borough Clerk – Vital Records (Somerset County seat)",
    address: "25 West End Avenue, Somerville, NJ 08876",
    phone: "(908) 725-2300",
    website: "https://www.somervillenj.org/clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Atlantic",
    name: "Atlantic City Clerk – Vital Records",
    address: "1301 Bacharach Boulevard, Atlantic City, NJ 08401",
    phone: "(609) 347-5300",
    website: "https://www.acnj.gov/city-clerk",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
  },
];
