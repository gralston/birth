import { CountyOffice } from "@/types";

/**
 * New York county/city clerk offices that issue birth certificates.
 *
 * In New York, birth certificates for births outside NYC are obtained
 * from the city/town clerk where the birth occurred, or from the
 * NYS Department of Health. NYC births are handled by the NYC
 * Department of Health and Mental Hygiene.
 *
 * Data gathered March 2026 from official county/city websites and NY DOH.
 */
export const NY_COUNTIES: CountyOffice[] = [
  {
    county: "New York City",
    name: "NYC Department of Health and Mental Hygiene – Office of Vital Records",
    address: "125 Worth Street, Room 144, New York, NY 10013",
    phone: "(212) 788-4520",
    website: "https://www.nyc.gov/site/doh/services/birth-certificates.page",
    hours: "Mon–Fri 9:00 AM – 3:30 PM",
  },
  {
    county: "Erie",
    name: "Erie County Clerk – Vital Records",
    address: "92 Franklin Street, Buffalo, NY 14202",
    phone: "(716) 858-8785",
    website: "https://www2.erie.gov/clerk/index.php?q=vital-records",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
  },
  {
    county: "Suffolk",
    name: "Suffolk County Clerk – Vital Records",
    address: "310 Center Drive, Riverhead, NY 11901",
    phone: "(631) 852-2000",
    website: "https://www.suffolkcountyny.gov/Departments/County-Clerk",
    hours: "Mon–Fri 9:00 AM – 4:00 PM",
  },
  {
    county: "Nassau",
    name: "Nassau County Clerk – Vital Records",
    address: "240 Old Country Road, Mineola, NY 11501",
    phone: "(516) 571-2664",
    website: "https://www.nassaucountyny.gov/2877/County-Clerk",
    hours: "Mon–Fri 9:00 AM – 4:45 PM",
  },
  {
    county: "Westchester",
    name: "Westchester County Clerk – Vital Records",
    address: "110 Dr. Martin Luther King Jr. Blvd, White Plains, NY 10601",
    phone: "(914) 995-3080",
    website: "https://clerk.westchestergov.com/vital-records",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Monroe",
    name: "Monroe County Clerk – Vital Records",
    address: "39 West Main Street, Room 101, Rochester, NY 14614",
    phone: "(585) 753-1600",
    website: "https://www.monroecounty.gov/clerk",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Onondaga",
    name: "Onondaga County Clerk – Vital Records",
    address: "401 Montgomery Street, Room 200, Syracuse, NY 13202",
    phone: "(315) 435-2227",
    website: "https://www.ongov.net/clerk/vitalRecords.html",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Albany",
    name: "Albany County Clerk – Vital Records",
    address: "16 Eagle Street, Room 128, Albany, NY 12207",
    phone: "(518) 487-5100",
    website: "https://www.albanycounty.com/departments/county-clerk",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
  },
  {
    county: "Rockland",
    name: "Rockland County Clerk – Vital Records",
    address: "1 South Main Street, Suite 100, New City, NY 10956",
    phone: "(845) 638-5070",
    website: "https://rocklandgov.com/departments/county-clerk/",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
  },
  {
    county: "Orange",
    name: "Orange County Clerk – Vital Records",
    address: "4 Glenmere Cove Road, Goshen, NY 10924",
    phone: "(845) 291-2690",
    website: "https://www.orangecountygov.com/149/County-Clerk",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
  },
  {
    county: "Dutchess",
    name: "Dutchess County Clerk – Vital Records",
    address: "22 Market Street, Poughkeepsie, NY 12601",
    phone: "(845) 486-2120",
    website: "https://www.dutchessny.gov/Departments/County-Clerk/County-Clerk.htm",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
  },
  {
    county: "Oneida",
    name: "Oneida County Clerk – Vital Records",
    address: "800 Park Avenue, Utica, NY 13501",
    phone: "(315) 798-5794",
    website: "https://www.ocgov.net/oneida/countyclerk",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Broome",
    name: "Broome County Clerk – Vital Records",
    address: "60 Hawley Street, Binghamton, NY 13902",
    phone: "(607) 778-2255",
    website: "https://www.gobroomecounty.com/clerk",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Saratoga",
    name: "Saratoga County Clerk – Vital Records",
    address: "40 McMaster Street, Ballston Spa, NY 12020",
    phone: "(518) 885-2213",
    website: "https://www.saratogacountyny.gov/county-clerk/",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Schenectady",
    name: "Schenectady County Clerk – Vital Records",
    address: "620 State Street, Schenectady, NY 12305",
    phone: "(518) 388-4220",
    website: "https://www.schenectadycounty.com/county-clerk",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
];
