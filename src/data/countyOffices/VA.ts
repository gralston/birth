import { CountyOffice } from "@/types";

/**
 * Virginia vital records offices.
 *
 * Virginia uses a centralized vital records system — the Division of
 * Vital Records in Richmond handles all birth certificates statewide.
 * However, circuit court clerks in each county/city can also issue
 * certified copies. Listed here are circuit court clerk offices for
 * the most populous jurisdictions.
 *
 * Data gathered March 2026 from official VA DOH and circuit court websites.
 */
export const VA_COUNTIES: CountyOffice[] = [
  {
    county: "Fairfax",
    name: "Fairfax County Circuit Court Clerk – Vital Records",
    address: "4110 Chain Bridge Road, Fairfax, VA 22030",
    phone: "(703) 246-4111",
    website: "https://www.fairfaxcounty.gov/circuit/clerk/vital-records",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Virginia Beach (City)",
    name: "Virginia Beach Circuit Court Clerk – Vital Records",
    address: "2425 Nimmo Parkway, Building 10B, Virginia Beach, VA 23456",
    phone: "(757) 385-4181",
    website: "https://www.vbgov.com/government/departments/circuit-court-clerk/Pages/default.aspx",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Prince William",
    name: "Prince William County Circuit Court Clerk – Vital Records",
    address: "9311 Lee Avenue, Manassas, VA 20110",
    phone: "(703) 792-6015",
    website: "https://www.pwcgov.org/government/courts/circuit/Pages/Clerk-of-the-Circuit-Court.aspx",
    hours: "Mon–Fri 8:30 AM – 4:00 PM",
  },
  {
    county: "Loudoun",
    name: "Loudoun County Circuit Court Clerk – Vital Records",
    address: "18 East Market Street, Leesburg, VA 20176",
    phone: "(703) 777-0270",
    website: "https://www.loudoun.gov/211/Clerk-of-the-Circuit-Court",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Chesterfield",
    name: "Chesterfield County Circuit Court Clerk – Vital Records",
    address: "9500 Courthouse Road, Chesterfield, VA 23832",
    phone: "(804) 748-1241",
    website: "https://www.chesterfield.gov/258/Circuit-Court-Clerk",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Henrico",
    name: "Henrico County Circuit Court Clerk – Vital Records",
    address: "4301 East Parham Road, Henrico, VA 23228",
    phone: "(804) 501-4202",
    website: "https://henrico.us/clerk/",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Norfolk (City)",
    name: "Norfolk Circuit Court Clerk – Vital Records",
    address: "100 St. Pauls Boulevard, Norfolk, VA 23510",
    phone: "(757) 664-4380",
    website: "https://www.norfolk.gov/index.aspx?NID=1049",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Arlington",
    name: "Arlington County Circuit Court Clerk – Vital Records",
    address: "1425 North Courthouse Road, Suite 6100, Arlington, VA 22201",
    phone: "(703) 228-7010",
    website: "https://courts.arlingtonva.us/circuit-court/clerk/",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Richmond (City)",
    name: "Richmond Circuit Court Clerk – Vital Records",
    address: "400 North 9th Street, Richmond, VA 23219",
    phone: "(804) 646-6505",
    website: "https://www.rva.gov/circuit-court-clerk",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Chesapeake (City)",
    name: "Chesapeake Circuit Court Clerk – Vital Records",
    address: "307 Albemarle Drive, Suite 200A, Chesapeake, VA 23322",
    phone: "(757) 382-3000",
    website: "https://www.cityofchesapeake.net/government/circuit-court-clerk",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Stafford",
    name: "Stafford County Circuit Court Clerk – Vital Records",
    address: "1300 Courthouse Road, Stafford, VA 22554",
    phone: "(540) 658-8750",
    website: "https://www.staffordcountyva.gov/government/circuit-court-clerk",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Spotsylvania",
    name: "Spotsylvania County Circuit Court Clerk – Vital Records",
    address: "9111 Courthouse Road, Spotsylvania, VA 22553",
    phone: "(540) 507-7600",
    website: "https://www.spotsylvania.va.us/337/Circuit-Court-Clerk",
    hours: "Mon–Fri 8:30 AM – 4:00 PM",
  },
];
