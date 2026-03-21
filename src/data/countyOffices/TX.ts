import { CountyOffice } from "@/types";

/**
 * Texas county clerk offices that issue birth certificates.
 *
 * In Texas, county clerks can issue certified copies of birth certificates
 * for births registered in their county. This is often the fastest option
 * for obtaining a birth certificate in person (same-day service).
 *
 * Note: Some larger cities (Houston, Dallas, San Antonio, Austin, etc.)
 * have their own local registrars (often the city health department) that
 * handle births within city limits. The county clerk typically handles
 * births outside city limits or in smaller municipalities within the county.
 *
 * Data gathered March 2026 from official county websites and Texas DSHS.
 */
export const TX_COUNTIES: CountyOffice[] = [
  // ── Top 30 Texas counties by population ──────────────────────────────

  {
    county: "Harris",
    name: "Harris County Clerk",
    address: "201 Caroline St, Suite 330, Houston, TX 77002",
    phone: "(713) 274-8686",
    website: "https://www.cclerk.hctx.net/PersonalRecords.aspx",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Dallas",
    name: "Dallas County Clerk – Vital Records Division",
    address: "500 Elm St, Suite 2100, Dallas, TX 75202",
    phone: "(214) 653-7099",
    website:
      "https://www.dallascounty.org/government/county-clerk/vital-records/birth-certificate.php",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Tarrant",
    name: "Tarrant County Clerk – Vital Records",
    address: "200 Taylor St, Fort Worth, TX 76196",
    phone: "(817) 884-1550",
    website:
      "https://www.tarrantcountytx.gov/en/county-clerk/vital-records.html",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Bexar",
    name: "Bexar County Clerk – Vital Statistics",
    address: "100 Dolorosa, Suite 104, San Antonio, TX 78205",
    phone: "(210) 335-2216",
    website: "https://www.bexar.org/2952/Birth-and-Death-Certificates",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Travis",
    name: "Travis County Clerk – Recording Division",
    address: "5501 Airport Blvd, Suite 100B, Austin, TX 78751",
    phone: "(512) 854-9188",
    website:
      "https://countyclerk.traviscountytx.gov/departments/recording/vital-stats/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Collin",
    name: "Collin County Clerk – Vital Records",
    address: "2300 Bloomdale Rd, Suite 2106, McKinney, TX 75071",
    phone: "(972) 548-4185",
    website: "https://www.collincountytx.gov/County-Clerk",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    county: "Denton",
    name: "Denton County Clerk – Vital Records",
    address: "1450 E McKinney St, Denton, TX 76209",
    phone: "(940) 349-2018",
    website: "https://www.dentoncounty.gov/329/Birth-Death-Certificates",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Hidalgo",
    name: "Hidalgo County Clerk – Vitals Department",
    address: "100 N Closner Blvd, Edinburg, TX 78539",
    phone: "(956) 318-2100",
    website: "https://www.hidalgocounty.us/1349/Birth-and-Death-Records",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Fort Bend",
    name: "Fort Bend County Clerk – Vital Records",
    address: "301 Jackson St, Suite 136, Richmond, TX 77469",
    phone: "(281) 341-8685",
    website:
      "https://www.fortbendcountytx.gov/government/departments/county-clerk/birth-death-marriage/birth-death-certificates",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "El Paso",
    name: "El Paso County Clerk",
    address: "500 E San Antonio, Suite 105, El Paso, TX 79901",
    phone: "(915) 273-3532",
    website: "https://www.epcounty.com/clerk/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Williamson",
    name: "Williamson County Clerk – Vital Records",
    address: "405 Martin Luther King St, Georgetown, TX 78626",
    phone: "(512) 943-1515",
    website: "https://www.wilcotx.gov/countyclerk",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Montgomery",
    name: "Montgomery County Clerk – Vital Records",
    address: "210 W Davis St, Conroe, TX 77301",
    phone: "(936) 539-7885",
    website: "https://www.mctx.org/vital_records/birth_certificate.php",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Brazoria",
    name: "Brazoria County Clerk",
    address: "237 E Locust St, Suite 102, Angleton, TX 77515",
    phone: "(979) 864-2728",
    website:
      "https://www.brazoriacountyclerktx.gov/departments/recording-department/birth-records",
    hours: "Mon–Fri 8:00 AM – 4:30 PM (closed 12:00–1:00 PM for lunch)",
  },
  {
    county: "Galveston",
    name: "Galveston County Clerk",
    address: "600 59th St, Suite 2001, Galveston, TX 77551",
    phone: "(409) 770-6044",
    website:
      "https://www.galvestoncountytx.gov/our-county/county-clerk/birth-death-records-information",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Nueces",
    name: "Nueces County Clerk",
    address: "901 Leopard St, Room 201, Corpus Christi, TX 78401",
    phone: "(361) 888-0580",
    website: "https://www.nuecesco.com/county-services/county-clerk",
    hours: "Mon–Fri 8:00 AM – 4:45 PM",
  },
  {
    county: "Lubbock",
    name: "Lubbock County Clerk",
    address: "904 Broadway, Room 207, Lubbock, TX 79401",
    phone: "(806) 775-1630",
    website: "https://www.lubbockcounty.gov/department/?fDD=2-0",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Webb",
    name: "Webb County Clerk",
    address: "1110 Victoria St, Suite 201, Laredo, TX 78040",
    phone: "(956) 523-4266",
    website: "https://www.webbcountytx.gov/countyclerk/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "McLennan",
    name: "McLennan County Clerk",
    address: "215 N 5th St, Room 223-A, Waco, TX 76701",
    phone: "(254) 757-5078",
    website: "https://www.mclennan.gov/168/Birth-Death-Records",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Jefferson",
    name: "Jefferson County Clerk",
    address: "1085 Pearl St, 1st Floor, Beaumont, TX 77701",
    phone: "(409) 835-8475",
    website: "https://jeffersoncountytx.gov/cclerk/",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Smith",
    name: "Smith County Clerk – Vital Statistics",
    address: "200 E Ferguson St, Suite 300, Tyler, TX 75702",
    phone: "(903) 590-4670",
    website: "https://www.smith-county.com/304/Birth-Certificates",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Bell",
    name: "Bell County Clerk – Vital Statistics",
    address: "1201 Huey Rd, Belton, TX 76513",
    phone: "(254) 933-5165",
    website: "https://www.bellcountytx.com/county_government/county_clerk/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Midland",
    name: "Midland County Clerk – Vital Records",
    address: "500 N Loraine St, Midland, TX 79701",
    phone: "(432) 688-4401",
    website: "https://www.co.midland.tx.us/176/Birth-or-Death-Certificate",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Ector",
    name: "Ector County Clerk",
    address: "300 N Grant St, Room 111, Odessa, TX 79760",
    phone: "(432) 498-4130",
    website: "https://www.co.ector.tx.us/page/ector.BirthandDeathRecords",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Hays",
    name: "Hays County Clerk – Records Division",
    address: "712 S Stagecoach Trail, Suite 2008, San Marcos, TX 78666",
    phone: "(512) 393-7330",
    website: "https://www.hayscountytx.gov/county-clerk/records-division",
    hours: "Mon–Fri 8:00 AM – 4:30 PM (closed 12:00–1:00 PM for lunch)",
  },
  {
    county: "Cameron",
    name: "Cameron County Clerk – Vital Statistics",
    address: "835 E Levee St, 3rd Floor, Brownsville, TX 78520",
    phone: "(956) 544-0817",
    website:
      "https://www.cameroncountytx.gov/county-clerk/cameron-county-clerk-birth-records/",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Potter",
    name: "Potter County Clerk",
    address: "500 S Fillmore St, Suite 201, Amarillo, TX 79101",
    phone: "(806) 379-2285",
    website: "https://www.co.potter.tx.us/page/County.Clerk",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Tom Green",
    name: "Tom Green County Clerk",
    address: "124 W Beauregard, San Angelo, TX 76903",
    phone: "(325) 659-6556",
    website: "https://www.tomgreencountytx.gov/page/cck.CountyClerkHome",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Taylor",
    name: "Taylor County Clerk",
    address: "300 Oak St, Suite 100, Abilene, TX 79602",
    phone: "(325) 674-1202",
    website:
      "https://www.taylorcounty.texas.gov/121/Birth-Death-Certificates",
    hours: "Mon–Fri 8:00 AM – 4:30 PM",
  },
  {
    county: "Wichita",
    name: "Wichita County Clerk",
    address: "900 7th St, Room 250, Wichita Falls, TX 76301",
    phone: "(940) 766-8100",
    website: "https://wichitacountytx.com/locations/county-clerk/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Bowie",
    name: "Bowie County Clerk",
    address: "710 James Bowie Dr, New Boston, TX 75570",
    phone: "(903) 628-6740",
    website: "https://www.co.bowie.tx.us/page/bowie.county.clerk",
    hours: "Mon–Fri 8:00 AM – 4:00 PM (closed 12:00–1:00 PM for lunch)",
  },
];
