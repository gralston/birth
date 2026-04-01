import { CountyOffice } from "@/types";

/**
 * All 29 Utah county offices that issue birth certificates.
 *
 * In Utah, birth certificates are obtained from the Utah Department
 * of Health and Human Services Office of Vital Records and Statistics
 * in Salt Lake City, or from local health department offices.
 *
 * Data gathered March 2026 from official county and UT DHHS websites.
 */
export const UT_COUNTIES: CountyOffice[] = [
  { county: "Beaver", name: "Beaver County Clerk", address: "105 East Center Street, Beaver, UT 84713", phone: "(435) 438-6463", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Box Elder", name: "Box Elder County Clerk", address: "1 South Main Street, Brigham City, UT 84302", phone: "(435) 734-3354", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Cache", name: "Cache County Clerk", address: "179 North Main Street, Suite 102, Logan, UT 84321", phone: "(435) 755-1460", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Carbon", name: "Carbon County Clerk", address: "120 East Main Street, Price, UT 84501", phone: "(435) 636-3223", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Daggett", name: "Daggett County Clerk", address: "95 North 1st West, Manila, UT 84046", phone: "(435) 784-3154", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Davis", name: "Davis County Clerk", address: "61 South Main Street, Suite 101, Farmington, UT 84025", phone: "(801) 451-3214", website: "https://www.daviscountyutah.gov/clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Duchesne", name: "Duchesne County Clerk", address: "734 North Center Street, Duchesne, UT 84021", phone: "(435) 738-1128", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Emery", name: "Emery County Clerk", address: "75 East Main Street, Castle Dale, UT 84513", phone: "(435) 381-3550", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Garfield", name: "Garfield County Clerk", address: "55 South Main Street, Panguitch, UT 84759", phone: "(435) 676-1122", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Grand", name: "Grand County Clerk", address: "125 East Center Street, Moab, UT 84532", phone: "(435) 259-1321", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Iron", name: "Iron County Clerk", address: "68 South 100 East, Parowan, UT 84761", phone: "(435) 477-8340", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Juab", name: "Juab County Clerk", address: "160 North Main Street, Nephi, UT 84648", phone: "(435) 623-3410", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Kane", name: "Kane County Clerk", address: "76 North Main Street, Kanab, UT 84741", phone: "(435) 644-4966", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Millard", name: "Millard County Clerk", address: "765 South Highway 99, Suite 6, Fillmore, UT 84631", phone: "(435) 743-6223", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Morgan", name: "Morgan County Clerk", address: "48 West Young Street, Morgan, UT 84050", phone: "(801) 829-6811", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Piute", name: "Piute County Clerk", address: "550 North Main Street, Junction, UT 84740", phone: "(435) 577-2840", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Rich", name: "Rich County Clerk", address: "20 South Main Street, Randolph, UT 84064", phone: "(435) 793-2415", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Salt Lake", name: "Salt Lake County Clerk", address: "2001 South State Street, Suite S1-200, Salt Lake City, UT 84190", phone: "(385) 468-7400", website: "https://slco.org/clerk/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "San Juan", name: "San Juan County Clerk", address: "117 South Main Street, Suite 202, Monticello, UT 84535", phone: "(435) 587-3223", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sanpete", name: "Sanpete County Clerk", address: "160 North Main Street, Suite 202, Manti, UT 84642", phone: "(435) 835-2131", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sevier", name: "Sevier County Clerk", address: "250 North Main Street, Richfield, UT 84701", phone: "(435) 893-0401", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Summit", name: "Summit County Clerk", address: "60 North Main Street, Coalville, UT 84017", phone: "(435) 336-3204", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Tooele", name: "Tooele County Clerk", address: "47 South Main Street, Suite 318, Tooele, UT 84074", phone: "(435) 843-3148", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Uintah", name: "Uintah County Clerk", address: "147 East Main Street, Vernal, UT 84078", phone: "(435) 781-5361", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Utah", name: "Utah County Clerk", address: "100 East Center Street, Suite 3100, Provo, UT 84606", phone: "(801) 851-8109", website: "https://www.utahcounty.gov/Dept/Clerk/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wasatch", name: "Wasatch County Clerk", address: "25 North Main Street, Heber City, UT 84032", phone: "(435) 657-3190", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Washington", name: "Washington County Clerk", address: "197 East Tabernacle Street, St. George, UT 84770", phone: "(435) 634-5712", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wayne", name: "Wayne County Clerk", address: "18 South Main Street, Loa, UT 84747", phone: "(435) 836-1300", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Weber", name: "Weber County Clerk", address: "2380 Washington Boulevard, Suite 320, Ogden, UT 84401", phone: "(801) 399-8400", website: "https://www.webercountyutah.gov/clerk_auditor/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
];
