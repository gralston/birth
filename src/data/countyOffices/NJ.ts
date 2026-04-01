import { CountyOffice } from "@/types";

/**
 * All 21 New Jersey county offices that issue birth certificates.
 *
 * In New Jersey, birth certificates are obtained from the local
 * registrar in the municipality where the birth occurred, or from
 * the NJ Department of Health Office of Vital Statistics and Registry.
 * Listed here are the county clerk offices for each of the 21 counties.
 *
 * Data gathered March 2026 from official county and NJ DOH websites.
 */
export const NJ_COUNTIES: CountyOffice[] = [
  { county: "Atlantic", name: "Atlantic County Clerk", address: "5901 Main Street, Suite 1180, Mays Landing, NJ 08330", phone: "(609) 625-4011", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Bergen", name: "Bergen County Clerk", address: "1 Bergen County Plaza, Room 122, Hackensack, NJ 07601", phone: "(201) 336-7000", website: "https://www.bergencountyclerk.com/", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Burlington", name: "Burlington County Clerk", address: "49 Rancocas Road, Mount Holly, NJ 08060", phone: "(609) 265-5020", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Camden", name: "Camden County Clerk", address: "520 Market Street, Suite 102, Camden, NJ 08102", phone: "(856) 225-7300", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Cape May", name: "Cape May County Clerk", address: "7 North Main Street, Cape May Court House, NJ 08210", phone: "(609) 465-1010", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Cumberland", name: "Cumberland County Clerk", address: "60 West Broad Street, Suite 100, Bridgeton, NJ 08302", phone: "(856) 453-4860", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Essex", name: "Essex County Clerk", address: "465 Dr. Martin Luther King Jr. Boulevard, Room 236, Newark, NJ 07102", phone: "(973) 621-4921", website: "https://www.essexclerk.com/", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Gloucester", name: "Gloucester County Clerk", address: "1 North Broad Street, Suite 300, Woodbury, NJ 08096", phone: "(856) 853-3237", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Hudson", name: "Hudson County Clerk", address: "583 Newark Avenue, Jersey City, NJ 07306", phone: "(201) 369-3470", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
  { county: "Hunterdon", name: "Hunterdon County Clerk", address: "71 Main Street, Suite 1, Flemington, NJ 08822", phone: "(908) 788-1214", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Mercer", name: "Mercer County Clerk", address: "209 South Broad Street, Room 102, Trenton, NJ 08608", phone: "(609) 989-6464", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Middlesex", name: "Middlesex County Clerk", address: "75 Bayard Street, Suite 101, New Brunswick, NJ 08901", phone: "(732) 745-3005", hours: "Mon–Fri 8:30 AM – 4:15 PM" },
  { county: "Monmouth", name: "Monmouth County Clerk", address: "33 Mechanic Street, Freehold, NJ 07728", phone: "(732) 431-7324", website: "https://www.monmouthcountyclerk.com/", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Morris", name: "Morris County Clerk", address: "10 Court Street, Suite 110, Morristown, NJ 07960", phone: "(973) 285-6120", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Ocean", name: "Ocean County Clerk", address: "118 Washington Street, Toms River, NJ 08753", phone: "(732) 929-2018", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Passaic", name: "Passaic County Clerk", address: "401 Grand Street, Room 130, Paterson, NJ 07505", phone: "(973) 225-3632", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Salem", name: "Salem County Clerk", address: "92 Market Street, Salem, NJ 08079", phone: "(856) 935-7510", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Somerset", name: "Somerset County Clerk", address: "20 Grove Street, Somerville, NJ 08876", phone: "(908) 231-7006", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Sussex", name: "Sussex County Clerk", address: "83 Spring Street, Suite 304, Newton, NJ 07860", phone: "(973) 579-0900", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Union", name: "Union County Clerk", address: "2 Broad Street, Room 115, Elizabeth, NJ 07207", phone: "(908) 527-4787", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Warren", name: "Warren County Clerk", address: "413 2nd Street, Belvidere, NJ 07823", phone: "(908) 475-6211", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
];
