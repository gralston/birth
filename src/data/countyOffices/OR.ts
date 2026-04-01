import { CountyOffice } from "@/types";

/**
 * All 36 Oregon county offices that issue birth certificates.
 *
 * In Oregon, birth certificates are obtained from the Oregon Health
 * Authority Center for Health Statistics in Portland, or from the
 * county clerk in the county where the birth occurred.
 *
 * Data gathered March 2026 from official county and OHA websites.
 */
export const OR_COUNTIES: CountyOffice[] = [
  { county: "Baker", name: "Baker County Clerk", address: "1995 3rd Street, Suite 150, Baker City, OR 97814", phone: "(541) 523-8207", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Benton", name: "Benton County Clerk", address: "120 NW 4th Street, Room 14, Corvallis, OR 97330", phone: "(541) 766-6831", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Clackamas", name: "Clackamas County Clerk", address: "2051 Kaen Road, Suite 154, Oregon City, OR 97045", phone: "(503) 655-8698", website: "https://www.clackamas.us/clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Clatsop", name: "Clatsop County Clerk", address: "749 Commercial Street, Astoria, OR 97103", phone: "(503) 325-8511", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Columbia", name: "Columbia County Clerk", address: "230 Strand Street, St. Helens, OR 97051", phone: "(503) 397-7214", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Coos", name: "Coos County Clerk", address: "250 North Baxter Street, Coquille, OR 97423", phone: "(541) 396-7610", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Crook", name: "Crook County Clerk", address: "300 NE 3rd Street, Room 23, Prineville, OR 97754", phone: "(541) 447-6553", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Curry", name: "Curry County Clerk", address: "29821 Ellensburg Avenue, Gold Beach, OR 97444", phone: "(541) 247-3297", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Deschutes", name: "Deschutes County Clerk", address: "1300 NW Wall Street, Suite 202, Bend, OR 97703", phone: "(541) 388-6549", website: "https://www.deschutes.org/clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Douglas", name: "Douglas County Clerk", address: "1036 SE Douglas Avenue, Room 221, Roseburg, OR 97470", phone: "(541) 440-4323", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Gilliam", name: "Gilliam County Clerk", address: "221 South Oregon Street, Suite 201, Condon, OR 97823", phone: "(541) 384-2311", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Grant", name: "Grant County Clerk", address: "201 South Humbolt Street, Suite 290, Canyon City, OR 97820", phone: "(541) 575-1675", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Harney", name: "Harney County Clerk", address: "450 North Buena Vista Avenue, Suite 14, Burns, OR 97720", phone: "(541) 573-6641", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Hood River", name: "Hood River County Clerk", address: "601 State Street, Hood River, OR 97031", phone: "(541) 386-1442", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Jackson", name: "Jackson County Clerk", address: "10 South Oakdale Avenue, Room 211, Medford, OR 97501", phone: "(541) 774-6147", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Jefferson", name: "Jefferson County Clerk", address: "75 SE C Street, Suite 5, Madras, OR 97741", phone: "(541) 475-4451", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Josephine", name: "Josephine County Clerk", address: "500 NW 6th Street, Department 9, Grants Pass, OR 97526", phone: "(541) 474-5243", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Klamath", name: "Klamath County Clerk", address: "305 Main Street, Suite 105, Klamath Falls, OR 97601", phone: "(541) 883-5134", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lake", name: "Lake County Clerk", address: "513 Center Street, Lakeview, OR 97630", phone: "(541) 947-6006", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lane", name: "Lane County Clerk", address: "125 East 8th Avenue, Eugene, OR 97401", phone: "(541) 682-4234", website: "https://www.lanecounty.org/government/county_departments/county_clerk", hours: "Mon–Fri 9:00 AM – 4:00 PM" },
  { county: "Lincoln", name: "Lincoln County Clerk", address: "225 West Olive Street, Room 201, Newport, OR 97365", phone: "(541) 265-4131", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Linn", name: "Linn County Clerk", address: "300 SW 4th Avenue, Room 110, Albany, OR 97321", phone: "(541) 967-3831", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Malheur", name: "Malheur County Clerk", address: "251 B Street West, Suite 4, Vale, OR 97918", phone: "(541) 473-5151", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Marion", name: "Marion County Clerk", address: "100 High Street NE, Suite 1331, Salem, OR 97301", phone: "(503) 588-5225", website: "https://www.co.marion.or.us/CO/clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Morrow", name: "Morrow County Clerk", address: "100 Court Street, Suite 106, Heppner, OR 97836", phone: "(541) 676-9061", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Multnomah", name: "Multnomah County Vital Records", address: "426 SW Stark Street, Suite 180, Portland, OR 97204", phone: "(503) 988-3683", website: "https://www.multco.us/health/vital-records", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Polk", name: "Polk County Clerk", address: "850 Main Street, Suite 201, Dallas, OR 97338", phone: "(503) 623-8173", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sherman", name: "Sherman County Clerk", address: "500 Court Street, Moro, OR 97039", phone: "(541) 565-3606", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Tillamook", name: "Tillamook County Clerk", address: "201 Laurel Avenue, Tillamook, OR 97141", phone: "(503) 842-3402", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Umatilla", name: "Umatilla County Clerk", address: "216 SE 4th Street, Room 108, Pendleton, OR 97801", phone: "(541) 278-6236", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Union", name: "Union County Clerk", address: "1001 4th Street, Suite A, La Grande, OR 97850", phone: "(541) 963-1006", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wallowa", name: "Wallowa County Clerk", address: "101 South River Street, Room 204, Enterprise, OR 97828", phone: "(541) 426-4543", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wasco", name: "Wasco County Clerk", address: "511 Washington Street, Suite 201, The Dalles, OR 97058", phone: "(541) 506-2530", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Washington", name: "Washington County Clerk", address: "155 North 1st Avenue, Suite 130, Hillsboro, OR 97124", phone: "(503) 846-8749", website: "https://www.washingtoncountyor.gov/clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wheeler", name: "Wheeler County Clerk", address: "701 Adams Street, Suite 204, Fossil, OR 97830", phone: "(541) 763-2400", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Yamhill", name: "Yamhill County Clerk", address: "535 NE 5th Street, Room 133, McMinnville, OR 97128", phone: "(503) 434-7518", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
];
