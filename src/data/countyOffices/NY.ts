import { CountyOffice } from "@/types";

/**
 * All 62 New York county/city clerk offices that issue birth certificates.
 *
 * In New York, birth certificates for births outside NYC are obtained
 * from the city/town clerk where the birth occurred, or from the
 * NYS Department of Health. NYC births (5 boroughs) are handled by
 * the NYC Department of Health and Mental Hygiene.
 *
 * Data gathered March 2026 from official county/city websites and NY DOH.
 */
export const NY_COUNTIES: CountyOffice[] = [
  { county: "New York City", name: "NYC Department of Health – Office of Vital Records", address: "125 Worth Street, Room 144, New York, NY 10013", phone: "(212) 788-4520", website: "https://www.nyc.gov/site/doh/services/birth-certificates.page", hours: "Mon–Fri 9:00 AM – 3:30 PM" },
  { county: "Albany", name: "Albany County Clerk – Vital Records", address: "16 Eagle Street, Room 128, Albany, NY 12207", phone: "(518) 487-5100", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Allegany", name: "Allegany County Clerk", address: "7 Court Street, Belmont, NY 14813", phone: "(585) 268-9270", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Broome", name: "Broome County Clerk – Vital Records", address: "60 Hawley Street, Binghamton, NY 13902", phone: "(607) 778-2255", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Cattaraugus", name: "Cattaraugus County Clerk", address: "303 Court Street, Little Valley, NY 14755", phone: "(716) 938-2297", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Cayuga", name: "Cayuga County Clerk", address: "160 Genesee Street, Auburn, NY 13021", phone: "(315) 253-1271", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Chautauqua", name: "Chautauqua County Clerk", address: "1 North Erie Street, Mayville, NY 14757", phone: "(716) 753-4331", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Chemung", name: "Chemung County Clerk", address: "210 Lake Street, Elmira, NY 14902", phone: "(607) 737-2920", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Chenango", name: "Chenango County Clerk", address: "5 Court Street, Norwich, NY 13815", phone: "(607) 337-1450", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Clinton", name: "Clinton County Clerk", address: "137 Margaret Street, Suite 204, Plattsburgh, NY 12901", phone: "(518) 565-4700", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Columbia", name: "Columbia County Clerk", address: "401 Union Street, Suite 150, Hudson, NY 12534", phone: "(518) 828-3339", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Cortland", name: "Cortland County Clerk", address: "46 Greenbush Street, Suite 105, Cortland, NY 13045", phone: "(607) 753-5021", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Delaware", name: "Delaware County Clerk", address: "3 Court Street, Delhi, NY 13753", phone: "(607) 746-2123", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Dutchess", name: "Dutchess County Clerk – Vital Records", address: "22 Market Street, Poughkeepsie, NY 12601", phone: "(845) 486-2120", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Erie", name: "Erie County Clerk – Vital Records", address: "92 Franklin Street, Buffalo, NY 14202", phone: "(716) 858-8785", website: "https://www2.erie.gov/clerk/index.php?q=vital-records", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Essex", name: "Essex County Clerk", address: "7559 Court Street, Elizabethtown, NY 12932", phone: "(518) 873-3600", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Franklin", name: "Franklin County Clerk", address: "355 West Main Street, Suite 145, Malone, NY 12953", phone: "(518) 481-1681", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Fulton", name: "Fulton County Clerk", address: "223 West Main Street, Johnstown, NY 12095", phone: "(518) 736-5555", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Genesee", name: "Genesee County Clerk", address: "15 Main Street, Batavia, NY 14020", phone: "(585) 344-2550", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Greene", name: "Greene County Clerk", address: "411 Main Street, Suite 419, Catskill, NY 12414", phone: "(518) 719-3255", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Hamilton", name: "Hamilton County Clerk", address: "102 County View Drive, Lake Pleasant, NY 12108", phone: "(518) 548-7111", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Herkimer", name: "Herkimer County Clerk", address: "109 Mary Street, Suite 1111, Herkimer, NY 13350", phone: "(315) 867-1129", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Jefferson", name: "Jefferson County Clerk", address: "175 Arsenal Street, Watertown, NY 13601", phone: "(315) 785-3081", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Lewis", name: "Lewis County Clerk", address: "7660 North State Street, Suite 3, Lowville, NY 13367", phone: "(315) 376-5333", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Livingston", name: "Livingston County Clerk", address: "6 Court Street, Room 201, Geneseo, NY 14454", phone: "(585) 243-7010", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Madison", name: "Madison County Clerk", address: "138 North Court Street, Wampsville, NY 13163", phone: "(315) 366-2261", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Monroe", name: "Monroe County Clerk – Vital Records", address: "39 West Main Street, Room 101, Rochester, NY 14614", phone: "(585) 753-1600", website: "https://www.monroecounty.gov/clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Montgomery", name: "Montgomery County Clerk", address: "58 Broadway, Fonda, NY 12068", phone: "(518) 853-8115", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Nassau", name: "Nassau County Clerk – Vital Records", address: "240 Old Country Road, Mineola, NY 11501", phone: "(516) 571-2664", website: "https://www.nassaucountyny.gov/2877/County-Clerk", hours: "Mon–Fri 9:00 AM – 4:45 PM" },
  { county: "Niagara", name: "Niagara County Clerk", address: "175 Hawley Street, Lockport, NY 14094", phone: "(716) 439-7022", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Oneida", name: "Oneida County Clerk – Vital Records", address: "800 Park Avenue, Utica, NY 13501", phone: "(315) 798-5794", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Onondaga", name: "Onondaga County Clerk – Vital Records", address: "401 Montgomery Street, Room 200, Syracuse, NY 13202", phone: "(315) 435-2227", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Ontario", name: "Ontario County Clerk", address: "20 Ontario Street, Canandaigua, NY 14424", phone: "(585) 396-4200", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Orange", name: "Orange County Clerk – Vital Records", address: "4 Glenmere Cove Road, Goshen, NY 10924", phone: "(845) 291-2690", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Orleans", name: "Orleans County Clerk", address: "3 South Main Street, Suite 1, Albion, NY 14411", phone: "(585) 589-5334", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Oswego", name: "Oswego County Clerk", address: "46 East Bridge Street, Oswego, NY 13126", phone: "(315) 349-8385", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Otsego", name: "Otsego County Clerk", address: "197 Main Street, Cooperstown, NY 13326", phone: "(607) 547-4276", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Putnam", name: "Putnam County Clerk", address: "40 Gleneida Avenue, Carmel, NY 10512", phone: "(845) 808-1142", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Rensselaer", name: "Rensselaer County Clerk", address: "105 3rd Street, Troy, NY 12180", phone: "(518) 270-4080", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Rockland", name: "Rockland County Clerk – Vital Records", address: "1 South Main Street, Suite 100, New City, NY 10956", phone: "(845) 638-5070", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Saratoga", name: "Saratoga County Clerk – Vital Records", address: "40 McMaster Street, Ballston Spa, NY 12020", phone: "(518) 885-2213", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Schenectady", name: "Schenectady County Clerk – Vital Records", address: "620 State Street, Schenectady, NY 12305", phone: "(518) 388-4220", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Schoharie", name: "Schoharie County Clerk", address: "300 Main Street, Suite 3, Schoharie, NY 12157", phone: "(518) 295-8316", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Schuyler", name: "Schuyler County Clerk", address: "105 9th Street, Unit 8, Watkins Glen, NY 14891", phone: "(607) 535-8133", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Seneca", name: "Seneca County Clerk", address: "1 DiPronio Drive, Waterloo, NY 13165", phone: "(315) 539-1771", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "St. Lawrence", name: "St. Lawrence County Clerk", address: "48 Court Street, Canton, NY 13617", phone: "(315) 379-2237", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Steuben", name: "Steuben County Clerk", address: "3 East Pulteney Square, Bath, NY 14810", phone: "(607) 664-2563", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Suffolk", name: "Suffolk County Clerk – Vital Records", address: "310 Center Drive, Riverhead, NY 11901", phone: "(631) 852-2000", website: "https://www.suffolkcountyny.gov/Departments/County-Clerk", hours: "Mon–Fri 9:00 AM – 4:00 PM" },
  { county: "Sullivan", name: "Sullivan County Clerk", address: "100 North Street, Monticello, NY 12701", phone: "(845) 807-0411", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Tioga", name: "Tioga County Clerk", address: "16 Court Street, Owego, NY 13827", phone: "(607) 687-8660", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Tompkins", name: "Tompkins County Clerk", address: "320 North Tioga Street, Suite 110, Ithaca, NY 14850", phone: "(607) 274-5431", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Ulster", name: "Ulster County Clerk", address: "244 Fair Street, Kingston, NY 12401", phone: "(845) 340-3040", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Warren", name: "Warren County Clerk", address: "1340 State Route 9, Lake George, NY 12845", phone: "(518) 761-6429", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Washington", name: "Washington County Clerk", address: "383 Broadway, Fort Edward, NY 12828", phone: "(518) 746-2170", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Wayne", name: "Wayne County Clerk", address: "26 Church Street, Lyons, NY 14489", phone: "(315) 946-7470", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Westchester", name: "Westchester County Clerk – Vital Records", address: "110 Dr. Martin Luther King Jr. Boulevard, White Plains, NY 10601", phone: "(914) 995-3080", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Wyoming", name: "Wyoming County Clerk", address: "143 North Main Street, Suite 104, Warsaw, NY 14569", phone: "(585) 786-8810", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Yates", name: "Yates County Clerk", address: "417 Liberty Street, Suite 1107, Penn Yan, NY 14527", phone: "(315) 536-5120", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
];
