import { CountyOffice } from "@/types";

/**
 * All 17 Nevada county/city offices that issue birth certificates.
 *
 * Nevada has 16 counties plus Carson City (an independent city).
 * Birth certificates are issued by the Nevada Division of Public and
 * Behavioral Health Office of Vital Records in Carson City, or from
 * county health districts.
 *
 * Data gathered March 2026 from official county and NV DPBH websites.
 */
export const NV_COUNTIES: CountyOffice[] = [
  { county: "Carson City", name: "Carson City Health and Human Services – Vital Records", address: "900 East Long Street, Suite 200, Carson City, NV 89706", phone: "(775) 887-2190", website: "https://gethealthycarsoncity.org/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Churchill", name: "Churchill County Recorder", address: "155 North Taylor Street, Suite 192, Fallon, NV 89406", phone: "(775) 423-6028", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Clark", name: "Southern Nevada Health District – Vital Records", address: "280 South Decatur Boulevard, Las Vegas, NV 89107", phone: "(702) 759-1010", website: "https://www.snhd.info/vital-records", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Douglas", name: "Douglas County Recorder", address: "1616 8th Street, Minden, NV 89423", phone: "(775) 782-9014", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Elko", name: "Elko County Recorder", address: "571 Idaho Street, Room 103, Elko, NV 89801", phone: "(775) 753-4600", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Esmeralda", name: "Esmeralda County Recorder", address: "233 Crook Avenue, Goldfield, NV 89013", phone: "(775) 485-6309", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Eureka", name: "Eureka County Recorder", address: "10 South Main Street, Eureka, NV 89316", phone: "(775) 237-5263", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Humboldt", name: "Humboldt County Recorder", address: "25 West 5th Street, Room 203, Winnemucca, NV 89445", phone: "(775) 623-6343", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lander", name: "Lander County Recorder", address: "315 South Humboldt Street, Suite 6, Battle Mountain, NV 89820", phone: "(775) 635-5738", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lincoln", name: "Lincoln County Recorder", address: "181 North Main Street, Suite 103, Pioche, NV 89043", phone: "(775) 962-5390", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lyon", name: "Lyon County Recorder", address: "31 South Main Street, Yerington, NV 89447", phone: "(775) 463-6503", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Mineral", name: "Mineral County Recorder", address: "105 South A Street, Suite 1, Hawthorne, NV 89415", phone: "(775) 945-2446", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Nye", name: "Nye County Recorder", address: "101 Radar Road, Tonopah, NV 89049", phone: "(775) 482-8127", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Pershing", name: "Pershing County Recorder", address: "398 Main Street, Room 6, Lovelock, NV 89419", phone: "(775) 273-2208", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Storey", name: "Storey County Recorder", address: "26 South B Street, Virginia City, NV 89440", phone: "(775) 847-0969", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Washoe", name: "Washoe County Health District – Vital Records", address: "1001 East 9th Street, Building B, Reno, NV 89512", phone: "(775) 328-2460", website: "https://www.washoecounty.gov/health/programs-and-services/vital-records/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "White Pine", name: "White Pine County Recorder", address: "801 Clark Street, Suite 4, Ely, NV 89301", phone: "(775) 293-6509", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
];
