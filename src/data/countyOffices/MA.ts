import { CountyOffice } from "@/types";

/**
 * Massachusetts vital records offices covering all 14 counties.
 *
 * In Massachusetts, birth certificates are obtained from the city/town
 * clerk where the birth occurred, or from the Massachusetts Registry
 * of Vital Records in Boston. Listed here are the primary city/town
 * clerks for each of the 14 counties.
 *
 * Data gathered March 2026 from official municipal and MA RVR websites.
 */
export const MA_COUNTIES: CountyOffice[] = [
  { county: "Barnstable", name: "Barnstable Town Clerk – Vital Records", address: "367 Main Street, Hyannis, MA 02601", phone: "(508) 862-4044", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Berkshire", name: "Pittsfield City Clerk – Vital Records", address: "70 Allen Street, Room 101, Pittsfield, MA 01201", phone: "(413) 499-9321", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Bristol", name: "Fall River City Clerk – Vital Records", address: "1 Government Center, Fall River, MA 02722", phone: "(508) 324-2200", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Bristol", name: "New Bedford City Clerk – Vital Records", address: "133 William Street, Room 114, New Bedford, MA 02740", phone: "(508) 979-1410", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Bristol", name: "Taunton City Clerk – Vital Records", address: "15 Summer Street, Taunton, MA 02780", phone: "(508) 821-1000", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Dukes", name: "Edgartown Town Clerk – Vital Records", address: "70 Main Street, Edgartown, MA 02539", phone: "(508) 627-6110", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Essex", name: "Salem City Clerk – Vital Records", address: "93 Washington Street, Room 13, Salem, MA 01970", phone: "(978) 619-5610", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Essex", name: "Lawrence City Clerk – Vital Records", address: "200 Common Street, Room 102, Lawrence, MA 01840", phone: "(978) 620-3230", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Essex", name: "Lynn City Clerk – Vital Records", address: "3 City Hall Square, Room 105, Lynn, MA 01901", phone: "(781) 586-6780", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Franklin", name: "Greenfield Town Clerk – Vital Records", address: "14 Court Square, Greenfield, MA 01301", phone: "(413) 772-1560", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Hampden", name: "Springfield City Clerk – Vital Records", address: "36 Court Street, Room 113, Springfield, MA 01103", phone: "(413) 787-6093", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Hampden", name: "Holyoke City Clerk – Vital Records", address: "536 Dwight Street, Room 2, Holyoke, MA 01040", phone: "(413) 322-5510", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Hampshire", name: "Northampton City Clerk – Vital Records", address: "210 Main Street, Room 5, Northampton, MA 01060", phone: "(413) 587-1223", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Middlesex", name: "Cambridge City Clerk – Vital Records", address: "795 Massachusetts Avenue, Cambridge, MA 02139", phone: "(617) 349-4260", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Middlesex", name: "Lowell City Clerk – Vital Records", address: "375 Merrimack Street, Room 40, Lowell, MA 01852", phone: "(978) 970-4010", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Middlesex", name: "Somerville City Clerk – Vital Records", address: "93 Highland Avenue, Somerville, MA 02143", phone: "(617) 625-6600", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Nantucket", name: "Nantucket Town Clerk – Vital Records", address: "16 Broad Street, Nantucket, MA 02554", phone: "(508) 228-7216", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Norfolk", name: "Quincy City Clerk – Vital Records", address: "1305 Hancock Street, Quincy, MA 02169", phone: "(617) 376-1134", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Norfolk", name: "Brookline Town Clerk – Vital Records", address: "333 Washington Street, Brookline, MA 02445", phone: "(617) 730-2010", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Plymouth", name: "Brockton City Clerk – Vital Records", address: "45 School Street, Brockton, MA 02301", phone: "(508) 580-7113", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Plymouth", name: "Plymouth Town Clerk – Vital Records", address: "26 Court Street, Plymouth, MA 02360", phone: "(508) 747-1620", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Suffolk", name: "Boston City Clerk – Vital Records (Registry)", address: "1 City Hall Square, Room 213, Boston, MA 02201", phone: "(617) 635-4175", website: "https://www.boston.gov/departments/registry", hours: "Mon–Fri 9:00 AM – 5:00 PM" },
  { county: "Worcester", name: "Worcester City Clerk – Vital Records", address: "455 Main Street, Room 206, Worcester, MA 01608", phone: "(508) 799-1121", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Worcester", name: "Fitchburg City Clerk – Vital Records", address: "166 Boulder Drive, Suite 103, Fitchburg, MA 01420", phone: "(978) 829-1820", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
];
