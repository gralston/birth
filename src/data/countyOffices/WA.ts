import { CountyOffice } from "@/types";

/**
 * All 39 Washington county offices that issue birth certificates.
 *
 * In Washington, birth certificates are obtained from the Washington
 * State Department of Health Center for Health Statistics, or from
 * local health jurisdictions (county health departments).
 *
 * Data gathered March 2026 from official county and WA DOH websites.
 */
export const WA_COUNTIES: CountyOffice[] = [
  { county: "Adams", name: "Adams County Auditor", address: "210 West Broadway Avenue, Suite 200, Ritzville, WA 99169", phone: "(509) 659-3249", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Asotin", name: "Asotin County Auditor", address: "135 2nd Street, Asotin, WA 99402", phone: "(509) 243-2084", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Benton", name: "Benton-Franklin Health District – Vital Records", address: "7102 West Okanogan Place, Suite 101, Kennewick, WA 99336", phone: "(509) 460-4205", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Chelan", name: "Chelan-Douglas Health District – Vital Records", address: "200 Valley Mall Parkway, East Wenatchee, WA 98802", phone: "(509) 886-6400", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Clallam", name: "Clallam County Auditor", address: "223 East 4th Street, Suite 1, Port Angeles, WA 98362", phone: "(360) 417-2221", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Clark", name: "Clark County Public Health – Vital Records", address: "1601 East 4th Plain Boulevard, Vancouver, WA 98661", phone: "(564) 397-8002", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Columbia", name: "Columbia County Auditor", address: "341 East Main Street, Dayton, WA 99328", phone: "(509) 382-4541", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Cowlitz", name: "Cowlitz County Health Department – Vital Records", address: "1952 9th Avenue, Longview, WA 98632", phone: "(360) 414-5599", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Douglas", name: "Douglas County Auditor", address: "213 South Rainier Street, Waterville, WA 98858", phone: "(509) 745-8527", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Ferry", name: "Ferry County Auditor", address: "350 East Delaware Avenue, Suite 2, Republic, WA 99166", phone: "(509) 775-5225", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Franklin", name: "Franklin County Auditor", address: "1016 North 4th Avenue, Suite A206, Pasco, WA 99301", phone: "(509) 545-3525", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Garfield", name: "Garfield County Auditor", address: "789 Main Street, Pomeroy, WA 99347", phone: "(509) 843-1411", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Grant", name: "Grant County Health District – Vital Records", address: "1038 West Ivy Avenue, Suite 1, Moses Lake, WA 98837", phone: "(509) 766-7960", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Grays Harbor", name: "Grays Harbor County Auditor", address: "100 West Broadway, Suite 2, Montesano, WA 98563", phone: "(360) 249-3842", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Island", name: "Island County Auditor", address: "400 North Main Street, Suite 8, Coupeville, WA 98239", phone: "(360) 679-7366", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Jefferson", name: "Jefferson County Auditor", address: "1820 Jefferson Street, Suite 100, Port Townsend, WA 98368", phone: "(360) 385-9107", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "King", name: "King County Vital Records – Public Health Seattle & King County", address: "401 5th Avenue, Suite 1300, Seattle, WA 98104", phone: "(206) 296-4769", website: "https://kingcounty.gov/en/dept/dph/health-safety/vital-records", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
  { county: "Kitsap", name: "Kitsap Public Health District – Vital Records", address: "345 6th Street, Suite 300, Bremerton, WA 98337", phone: "(360) 728-2235", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Kittitas", name: "Kittitas County Auditor", address: "205 West 5th Avenue, Suite 105, Ellensburg, WA 98926", phone: "(509) 962-7503", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Klickitat", name: "Klickitat County Auditor", address: "205 South Columbus Avenue, Suite 201, Goldendale, WA 98620", phone: "(509) 773-4001", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Lewis", name: "Lewis County Auditor", address: "351 NW North Street, Suite 110, Chehalis, WA 98532", phone: "(360) 740-1164", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lincoln", name: "Lincoln County Auditor", address: "450 Logan Street, Davenport, WA 99122", phone: "(509) 725-4971", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Mason", name: "Mason County Auditor", address: "411 North 5th Street, Suite 244, Shelton, WA 98584", phone: "(360) 427-9670", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Okanogan", name: "Okanogan County Auditor", address: "149 3rd Avenue North, Suite 104, Okanogan, WA 98840", phone: "(509) 422-7240", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Pacific", name: "Pacific County Auditor", address: "300 Memorial Drive, Suite 203, South Bend, WA 98586", phone: "(360) 875-9317", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Pend Oreille", name: "Pend Oreille County Auditor", address: "229 South Garden Avenue, Suite 130, Newport, WA 99156", phone: "(509) 447-6472", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Pierce", name: "Tacoma-Pierce County Health Department – Vital Records", address: "3629 South D Street, Tacoma, WA 98418", phone: "(253) 798-6500", website: "https://www.tpchd.org/healthy-people/vital-records", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "San Juan", name: "San Juan County Auditor", address: "350 Court Street, Suite 7, Friday Harbor, WA 98250", phone: "(360) 378-3357", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Skagit", name: "Skagit County Auditor", address: "700 South 2nd Street, Room 201, Mount Vernon, WA 98273", phone: "(360) 416-1700", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Skamania", name: "Skamania County Auditor", address: "240 NW Vancouver Avenue, Stevenson, WA 98648", phone: "(509) 427-3730", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Snohomish", name: "Snohomish Health District – Vital Records", address: "3020 Rucker Avenue, Suite 306, Everett, WA 98201", phone: "(425) 339-5278", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Spokane", name: "Spokane Regional Health District – Vital Records", address: "1101 West College Avenue, Suite 400, Spokane, WA 99201", phone: "(509) 324-1442", website: "https://srhd.org/vital-records", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Stevens", name: "Stevens County Auditor", address: "215 South Oak Street, Suite 210, Colville, WA 99114", phone: "(509) 684-7514", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Thurston", name: "Thurston County Auditor", address: "2000 Lakeridge Drive SW, Building 1, Olympia, WA 98502", phone: "(360) 786-5408", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wahkiakum", name: "Wahkiakum County Auditor", address: "64 Main Street, Cathlamet, WA 98612", phone: "(360) 795-3219", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Walla Walla", name: "Walla Walla County Auditor", address: "315 West Main Street, Room 203, Walla Walla, WA 99362", phone: "(509) 524-2530", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Whatcom", name: "Whatcom County Health Department – Vital Records", address: "509 Girard Street, Bellingham, WA 98225", phone: "(360) 778-6100", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Whitman", name: "Whitman County Auditor", address: "400 North Main Street, Colfax, WA 99111", phone: "(509) 397-5240", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Yakima", name: "Yakima Health District – Vital Records", address: "1210 Ahtanum Ridge Drive, Union Gap, WA 98903", phone: "(509) 249-6541", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
];
