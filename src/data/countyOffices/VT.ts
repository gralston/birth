import { CountyOffice } from "@/types";

/**
 * All 14 Vermont county offices that issue birth certificates.
 *
 * In Vermont, birth certificates are obtained from the town/city
 * clerk where the birth occurred, or from the Vermont Department
 * of Health Vital Records Office in Burlington. Listed here are
 * the primary town clerks for each of the 14 counties.
 *
 * Data gathered March 2026 from official municipal and VT DOH websites.
 */
export const VT_COUNTIES: CountyOffice[] = [
  { county: "Addison", name: "Middlebury Town Clerk – Vital Records", address: "77 Main Street, Middlebury, VT 05753", phone: "(802) 388-8100", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Bennington", name: "Bennington Town Clerk – Vital Records", address: "205 South Street, Bennington, VT 05201", phone: "(802) 442-1043", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Caledonia", name: "St. Johnsbury Town Clerk – Vital Records", address: "51 Depot Square, Suite 3, St. Johnsbury, VT 05819", phone: "(802) 748-4331", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Chittenden", name: "Burlington City Clerk – Vital Records", address: "149 Church Street, Burlington, VT 05401", phone: "(802) 865-7000", website: "https://www.burlingtonvt.gov/CT", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Essex", name: "Guildhall Town Clerk – Vital Records (Essex County Seat)", address: "3686 VT Route 102, Guildhall, VT 05905", phone: "(802) 676-3797", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Franklin", name: "St. Albans City Clerk – Vital Records", address: "100 North Main Street, St. Albans, VT 05478", phone: "(802) 524-1500", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Grand Isle", name: "North Hero Town Clerk – Vital Records (Grand Isle County Seat)", address: "6441 US Route 2, North Hero, VT 05474", phone: "(802) 372-6926", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Lamoille", name: "Hyde Park Town Clerk – Vital Records (Lamoille County Seat)", address: "344 Main Street, Hyde Park, VT 05655", phone: "(802) 888-2300", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Orange", name: "Chelsea Town Clerk – Vital Records (Orange County Seat)", address: "7 Jail Hill Road, Chelsea, VT 05038", phone: "(802) 685-4460", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Orleans", name: "Newport City Clerk – Vital Records", address: "222 Main Street, Newport, VT 05855", phone: "(802) 334-2112", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Rutland", name: "Rutland City Clerk – Vital Records", address: "1 Strongs Avenue, Rutland, VT 05701", phone: "(802) 773-1800", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Washington", name: "Montpelier City Clerk – Vital Records", address: "39 Main Street, Montpelier, VT 05602", phone: "(802) 223-9502", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Windham", name: "Brattleboro Town Clerk – Vital Records", address: "230 Main Street, Suite 108, Brattleboro, VT 05301", phone: "(802) 254-4541", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Windsor", name: "Woodstock Town Clerk – Vital Records (Windsor County Seat)", address: "31 The Green, Woodstock, VT 05091", phone: "(802) 457-3611", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
];
