import { CountyOffice } from "@/types";

/**
 * Washington state county offices that issue birth certificates.
 *
 * In Washington, birth certificates can be obtained from the county
 * auditor where the birth occurred or from the Washington State
 * Department of Health Center for Health Statistics. Most county
 * auditor offices provide walk-in service.
 *
 * Data gathered March 2026 from official county and WA DOH websites.
 */
export const WA_COUNTIES: CountyOffice[] = [
  {
    county: "King",
    name: "King County Vital Records (Public Health – Seattle & King County)",
    address: "908 Jefferson Street, Suite 300, Seattle, WA 98104",
    phone: "(206) 477-8600",
    website: "https://kingcounty.gov/depts/health/vital-statistics.aspx",
    hours: "Mon–Fri 8:30 AM – 4:00 PM",
  },
  {
    county: "Pierce",
    name: "Tacoma-Pierce County Health Department – Vital Records",
    address: "3629 South D Street, Tacoma, WA 98418",
    phone: "(253) 798-6410",
    website: "https://www.tpchd.org/healthy-people/vital-records",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Snohomish",
    name: "Snohomish County Auditor – Vital Records",
    address: "3000 Rockefeller Avenue, M/S 505, Everett, WA 98201",
    phone: "(425) 388-3483",
    website: "https://snohomishcountywa.gov/212/Vital-Records",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Spokane",
    name: "Spokane Regional Health District – Vital Records",
    address: "1101 West College Avenue, Suite 301, Spokane, WA 99201",
    phone: "(509) 324-1511",
    website: "https://srhd.org/vital-records",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Clark",
    name: "Clark County Auditor – Vital Records",
    address: "1300 Franklin Street, Suite 160, Vancouver, WA 98660",
    phone: "(564) 397-2376",
    website: "https://clark.wa.gov/auditor/vital-records",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Thurston",
    name: "Thurston County Auditor – Vital Records",
    address: "2000 Lakeridge Drive SW, Building 1, Olympia, WA 98502",
    phone: "(360) 786-5408",
    website: "https://www.thurstoncountywa.gov/auditor/vital-records",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Kitsap",
    name: "Kitsap County Auditor – Vital Records",
    address: "614 Division Street, Port Orchard, WA 98366",
    phone: "(360) 337-7164",
    website: "https://www.kitsapgov.com/auditor/Pages/vital-records.aspx",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Yakima",
    name: "Yakima County Auditor – Vital Records",
    address: "128 North 2nd Street, Room 117, Yakima, WA 98901",
    phone: "(509) 574-1340",
    website: "https://www.yakimacounty.us/177/Vital-Records",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Whatcom",
    name: "Whatcom County Auditor – Vital Records",
    address: "311 Grand Avenue, Suite 103, Bellingham, WA 98225",
    phone: "(360) 778-5100",
    website: "https://www.whatcomcounty.us/291/Vital-Records",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
  {
    county: "Benton",
    name: "Benton County Auditor – Vital Records",
    address: "620 Market Street, Prosser, WA 99350",
    phone: "(509) 736-3085",
    website: "https://www.co.benton.wa.us/auditor/vital-records",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Skagit",
    name: "Skagit County Auditor – Vital Records",
    address: "700 South 2nd Street, Room 201, Mount Vernon, WA 98273",
    phone: "(360) 416-1702",
    website: "https://www.skagitcounty.net/Departments/Auditor/vitalrecords.htm",
    hours: "Mon–Fri 8:30 AM – 4:30 PM",
  },
];
