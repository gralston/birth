import { CountyOffice } from "@/types";

/**
 * Massachusetts town/city clerk offices that issue birth certificates.
 *
 * In Massachusetts, birth certificates are obtained from the city or
 * town clerk where the birth occurred, or from the Massachusetts
 * Registry of Vital Records and Statistics in Boston (for births from
 * 1926 onward). Listed here are the city/town clerks for the largest
 * municipalities, organized by the county they fall within.
 *
 * Data gathered March 2026 from official municipal and MA RVR websites.
 */
export const MA_COUNTIES: CountyOffice[] = [
  {
    county: "Suffolk",
    name: "Boston City Clerk – Vital Records (Registry Division)",
    address: "1 City Hall Square, Room 213, Boston, MA 02201",
    phone: "(617) 635-4175",
    website: "https://www.boston.gov/departments/registry/birth-certificates",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
  },
  {
    county: "Middlesex",
    name: "Cambridge City Clerk – Vital Records",
    address: "795 Massachusetts Avenue, Cambridge, MA 02139",
    phone: "(617) 349-4260",
    website: "https://www.cambridgema.gov/cityclerk/vitalrecords",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Middlesex",
    name: "Lowell City Clerk – Vital Records",
    address: "375 Merrimack Street, Room 3, Lowell, MA 01852",
    phone: "(978) 674-4161",
    website: "https://www.lowellma.gov/234/City-Clerk",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Hampden",
    name: "Springfield City Clerk – Vital Records",
    address: "36 Court Street, Room 4, Springfield, MA 01103",
    phone: "(413) 787-6130",
    website: "https://www.springfield-ma.gov/cos/index.php?id=37",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Worcester",
    name: "Worcester City Clerk – Vital Records",
    address: "455 Main Street, Room 206, Worcester, MA 01608",
    phone: "(508) 799-1121",
    website: "https://www.worcesterma.gov/city-clerk/vital-records",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Bristol",
    name: "New Bedford City Clerk – Vital Records",
    address: "133 William Street, Room 112, New Bedford, MA 02740",
    phone: "(508) 979-1410",
    website: "https://www.newbedford-ma.gov/city-clerk/",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Bristol",
    name: "Fall River City Clerk – Vital Records",
    address: "1 Government Center, Fall River, MA 02722",
    phone: "(508) 324-2310",
    website: "https://www.fallriverma.org/city-clerk/",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Essex",
    name: "Lynn City Clerk – Vital Records",
    address: "3 City Hall Square, Room 201, Lynn, MA 01901",
    phone: "(781) 598-4000",
    website: "https://www.lynnma.gov/cityhall_departments/city_clerk.shtml",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Essex",
    name: "Lawrence City Clerk – Vital Records",
    address: "200 Common Street, Room 203, Lawrence, MA 01840",
    phone: "(978) 620-3230",
    website: "https://www.cityoflawrence.com/158/City-Clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Norfolk",
    name: "Quincy City Clerk – Vital Records",
    address: "1305 Hancock Street, Quincy, MA 02169",
    phone: "(617) 376-1135",
    website: "https://www.quincyma.gov/government/city_clerk/vital_records.php",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Plymouth",
    name: "Brockton City Clerk – Vital Records",
    address: "45 School Street, Brockton, MA 02301",
    phone: "(508) 580-7123",
    website: "https://www.brockton.ma.us/city-clerk/",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Middlesex",
    name: "Somerville City Clerk – Vital Records",
    address: "93 Highland Avenue, Somerville, MA 02143",
    phone: "(617) 625-6600",
    website: "https://www.somervillema.gov/departments/city-clerk",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Barnstable",
    name: "Barnstable Town Clerk – Vital Records",
    address: "367 Main Street, Hyannis, MA 02601",
    phone: "(508) 862-4044",
    website: "https://www.townofbarnstable.us/Departments/TownClerk/",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Berkshire",
    name: "Pittsfield City Clerk – Vital Records",
    address: "70 Allen Street, Room 108, Pittsfield, MA 01201",
    phone: "(413) 499-9321",
    website: "https://www.cityofpittsfield.org/city_hall/city_clerk/",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
];
