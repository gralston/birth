import { CountyOffice } from "@/types";

/**
 * Arizona county offices that issue birth certificates.
 *
 * In Arizona, birth certificates can be obtained from the Clerk of
 * the Superior Court in the county where the birth occurred, or from
 * the Arizona Department of Health Services Office of Vital Records
 * in Phoenix. Arizona has only 15 counties.
 *
 * Data gathered March 2026 from official county and AZ DHS websites.
 */
export const AZ_COUNTIES: CountyOffice[] = [
  {
    county: "Maricopa",
    name: "Maricopa County Clerk of Superior Court – Vital Records",
    address: "601 West Jackson Street, Phoenix, AZ 85003",
    phone: "(602) 372-5375",
    website: "https://www.clerkofcourt.maricopa.gov/records/vital-records",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Pima",
    name: "Pima County Clerk of Superior Court – Vital Records",
    address: "110 West Congress Street, Suite 100, Tucson, AZ 85701",
    phone: "(520) 724-3200",
    website: "https://www.sc.pima.gov/clerk-of-court/vital-records/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Pinal",
    name: "Pinal County Clerk of Superior Court – Vital Records",
    address: "971 North Jason Lopez Circle, Building A, Florence, AZ 85132",
    phone: "(520) 866-5350",
    website: "https://www.pinalcountyaz.gov/clerkofcourt/Pages/home.aspx",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Yavapai",
    name: "Yavapai County Clerk of Superior Court – Vital Records",
    address: "120 South Cortez Street, Prescott, AZ 86303",
    phone: "(928) 777-3270",
    website: "https://www.yavapai.us/clerk",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Mohave",
    name: "Mohave County Clerk of Superior Court – Vital Records",
    address: "401 East Spring Street, Kingman, AZ 86401",
    phone: "(928) 753-0713",
    website: "https://www.mohavecourts.com/clerk/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Yuma",
    name: "Yuma County Clerk of Superior Court – Vital Records",
    address: "250 West 2nd Street, Suite A, Yuma, AZ 85364",
    phone: "(928) 817-4251",
    website: "https://www.yumacountyaz.gov/government/courts/clerk-of-court",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Coconino",
    name: "Coconino County Clerk of Superior Court – Vital Records",
    address: "200 North San Francisco Street, Flagstaff, AZ 86001",
    phone: "(928) 679-7600",
    website: "https://www.coconino.az.gov/157/Clerk-of-Superior-Court",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Navajo",
    name: "Navajo County Clerk of Superior Court – Vital Records",
    address: "100 East Code Talkers Drive, Suite 301, Holbrook, AZ 86025",
    phone: "(928) 524-4214",
    website: "https://www.navajocountyaz.gov/Departments/Clerk-of-Courts",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Apache",
    name: "Apache County Clerk of Superior Court – Vital Records",
    address: "70 West 3rd South, St. Johns, AZ 85936",
    phone: "(928) 337-7550",
    website: "https://www.apachecountyaz.gov/Clerk-of-Court",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Cochise",
    name: "Cochise County Clerk of Superior Court – Vital Records",
    address: "100 Quality Hill Road, Bisbee, AZ 85603",
    phone: "(520) 432-8570",
    website: "https://www.cochise.az.gov/clerk-of-court",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Gila",
    name: "Gila County Clerk of Superior Court – Vital Records",
    address: "1400 East Ash Street, Globe, AZ 85501",
    phone: "(928) 402-8710",
    website: "https://www.gilacountyaz.gov/government/clerk_of_court/index.php",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Graham",
    name: "Graham County Clerk of Superior Court – Vital Records",
    address: "800 Main Street, Safford, AZ 85546",
    phone: "(928) 428-3310",
    website: "https://www.graham.az.gov/departments/clerk_of_court/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "La Paz",
    name: "La Paz County Clerk of Superior Court – Vital Records",
    address: "1316 Kofa Avenue, Suite 607, Parker, AZ 85344",
    phone: "(928) 669-6131",
    website: "https://www.lapazcountyaz.org/departments/clerk_of_court/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Santa Cruz",
    name: "Santa Cruz County Clerk of Superior Court – Vital Records",
    address: "2150 North Congress Drive, Suite 201, Nogales, AZ 85621",
    phone: "(520) 375-7700",
    website: "https://www.santacruzcountyaz.gov/157/Clerk-of-the-Superior-Court",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Greenlee",
    name: "Greenlee County Clerk of Superior Court – Vital Records",
    address: "223 Fifth Street, Clifton, AZ 85533",
    phone: "(928) 865-4312",
    website: "https://www.greenlee.az.gov/clerk-of-court/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
];
