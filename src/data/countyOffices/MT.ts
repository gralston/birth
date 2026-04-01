import { CountyOffice } from "@/types";

/**
 * All 56 Montana county offices that issue birth certificates.
 *
 * In Montana, the county clerk and recorder can issue certified copies
 * of birth certificates. The Montana DPHHS Vital Records office in
 * Helena also issues certificates statewide.
 *
 * Data gathered March 2026 from official county and MT DPHHS websites.
 */
export const MT_COUNTIES: CountyOffice[] = [
  { county: "Beaverhead", name: "Beaverhead County Clerk and Recorder", address: "2 South Pacific Street, Suite 3, Dillon, MT 59725", phone: "(406) 683-3760", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Big Horn", name: "Big Horn County Clerk and Recorder", address: "121 West 3rd Street, Hardin, MT 59034", phone: "(406) 665-9760", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Blaine", name: "Blaine County Clerk and Recorder", address: "400 Ohio Street, Chinook, MT 59523", phone: "(406) 357-3250", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Broadwater", name: "Broadwater County Clerk and Recorder", address: "515 Broadway Street, Townsend, MT 59644", phone: "(406) 266-3443", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Carbon", name: "Carbon County Clerk and Recorder", address: "17 West 11th Street, Red Lodge, MT 59068", phone: "(406) 446-1220", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Carter", name: "Carter County Clerk and Recorder", address: "214 Park Street, Ekalaka, MT 59324", phone: "(406) 775-8749", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Cascade", name: "Cascade County Clerk and Recorder", address: "121 4th Street North, Suite 2B, Great Falls, MT 59401", phone: "(406) 454-6803", website: "https://www.cascadecountymt.gov/departments/clerk-recorder", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Chouteau", name: "Chouteau County Clerk and Recorder", address: "1308 Franklin Street, Fort Benton, MT 59442", phone: "(406) 622-5151", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Custer", name: "Custer County Clerk and Recorder", address: "1010 Main Street, Miles City, MT 59301", phone: "(406) 874-3343", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Daniels", name: "Daniels County Clerk and Recorder", address: "213 Main Street, Scobey, MT 59263", phone: "(406) 487-5561", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Dawson", name: "Dawson County Clerk and Recorder", address: "207 West Bell Street, Glendive, MT 59330", phone: "(406) 377-3058", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Deer Lodge", name: "Deer Lodge County Clerk and Recorder", address: "800 South Main Street, Anaconda, MT 59711", phone: "(406) 563-4060", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Fallon", name: "Fallon County Clerk and Recorder", address: "10 West Fallon Avenue, Suite 202, Baker, MT 59313", phone: "(406) 778-7106", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Fergus", name: "Fergus County Clerk and Recorder", address: "712 West Main Street, Suite 204, Lewistown, MT 59457", phone: "(406) 535-5242", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Flathead", name: "Flathead County Clerk and Recorder", address: "800 South Main Street, Suite 208, Kalispell, MT 59901", phone: "(406) 758-5526", website: "https://www.flathead.mt.gov/clerk_recorder/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Gallatin", name: "Gallatin County Clerk and Recorder", address: "311 West Main Street, Room 203, Bozeman, MT 59715", phone: "(406) 582-3050", website: "https://gallatincomt.virtualtownhall.net/clerk-recorder", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Garfield", name: "Garfield County Clerk and Recorder", address: "100 Jordan Avenue, Jordan, MT 59337", phone: "(406) 557-2760", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Glacier", name: "Glacier County Clerk and Recorder", address: "512 East Main Street, Cut Bank, MT 59427", phone: "(406) 873-3609", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Golden Valley", name: "Golden Valley County Clerk and Recorder", address: "107 Kemp Street, Ryegate, MT 59074", phone: "(406) 568-2231", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Granite", name: "Granite County Clerk and Recorder", address: "220 North Sansome Street, Philipsburg, MT 59858", phone: "(406) 859-3771", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Hill", name: "Hill County Clerk and Recorder", address: "315 4th Street, Havre, MT 59501", phone: "(406) 265-5481", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Jefferson", name: "Jefferson County Clerk and Recorder", address: "201 Centennial Street, Boulder, MT 59632", phone: "(406) 225-4020", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Judith Basin", name: "Judith Basin County Clerk and Recorder", address: "100 Courthouse Square, Stanford, MT 59479", phone: "(406) 566-2277", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lake", name: "Lake County Clerk and Recorder", address: "106 4th Avenue East, Polson, MT 59860", phone: "(406) 883-7268", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lewis and Clark", name: "Lewis and Clark County Clerk and Recorder", address: "316 North Park Avenue, Room 168, Helena, MT 59623", phone: "(406) 447-8376", website: "https://www.lccountymt.gov/clerk-and-recorder.html", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Liberty", name: "Liberty County Clerk and Recorder", address: "111 1st Street East, Chester, MT 59522", phone: "(406) 759-5365", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lincoln", name: "Lincoln County Clerk and Recorder", address: "512 California Avenue, Libby, MT 59923", phone: "(406) 293-7781", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Madison", name: "Madison County Clerk and Recorder", address: "100 West Wallace Street, Suite 106, Virginia City, MT 59755", phone: "(406) 843-4270", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "McCone", name: "McCone County Clerk and Recorder", address: "1004 Avenue C, Circle, MT 59215", phone: "(406) 485-3505", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Meagher", name: "Meagher County Clerk and Recorder", address: "15 West Main Street, White Sulphur Springs, MT 59645", phone: "(406) 547-3612", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Mineral", name: "Mineral County Clerk and Recorder", address: "300 River Street, Superior, MT 59872", phone: "(406) 822-3520", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Missoula", name: "Missoula County Clerk and Recorder", address: "200 West Broadway, Missoula, MT 59802", phone: "(406) 258-4751", website: "https://www.missoulacounty.us/government/administration/clerk-recorder", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Musselshell", name: "Musselshell County Clerk and Recorder", address: "506 Main Street, Roundup, MT 59072", phone: "(406) 323-1104", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Park", name: "Park County Clerk and Recorder", address: "414 East Callender Street, Livingston, MT 59047", phone: "(406) 222-4110", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Petroleum", name: "Petroleum County Clerk and Recorder", address: "201 East Main Street, Winnett, MT 59087", phone: "(406) 429-5311", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Phillips", name: "Phillips County Clerk and Recorder", address: "314 South 2nd Avenue West, Suite 1, Malta, MT 59538", phone: "(406) 654-2429", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Pondera", name: "Pondera County Clerk and Recorder", address: "20 4th Avenue SW, Conrad, MT 59425", phone: "(406) 271-4000", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Powder River", name: "Powder River County Clerk and Recorder", address: "100 Courthouse Drive, Broadus, MT 59317", phone: "(406) 436-2361", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Powell", name: "Powell County Clerk and Recorder", address: "409 Missouri Avenue, Deer Lodge, MT 59722", phone: "(406) 846-9786", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Prairie", name: "Prairie County Clerk and Recorder", address: "217 West Park Street, Terry, MT 59349", phone: "(406) 635-5575", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Ravalli", name: "Ravalli County Clerk and Recorder", address: "215 South 4th Street, Suite D, Hamilton, MT 59840", phone: "(406) 375-6550", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Richland", name: "Richland County Clerk and Recorder", address: "201 West Main Street, Sidney, MT 59270", phone: "(406) 433-1708", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Roosevelt", name: "Roosevelt County Clerk and Recorder", address: "400 2nd Avenue South, Wolf Point, MT 59201", phone: "(406) 653-6254", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Rosebud", name: "Rosebud County Clerk and Recorder", address: "1200 Main Street, Forsyth, MT 59327", phone: "(406) 346-7318", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sanders", name: "Sanders County Clerk and Recorder", address: "1111 Main Street, Thompson Falls, MT 59873", phone: "(406) 827-6922", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sheridan", name: "Sheridan County Clerk and Recorder", address: "100 West Laurel Avenue, Plentywood, MT 59254", phone: "(406) 765-3403", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Silver Bow", name: "Silver Bow County Clerk and Recorder", address: "155 West Granite Street, Butte, MT 59701", phone: "(406) 497-6342", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Stillwater", name: "Stillwater County Clerk and Recorder", address: "400 3rd Avenue North, Suite 104, Columbus, MT 59019", phone: "(406) 322-8000", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sweet Grass", name: "Sweet Grass County Clerk and Recorder", address: "200 West 1st Avenue, Big Timber, MT 59011", phone: "(406) 932-5152", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Teton", name: "Teton County Clerk and Recorder", address: "100 Main Avenue North, Choteau, MT 59422", phone: "(406) 466-2693", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Toole", name: "Toole County Clerk and Recorder", address: "226 1st Street South, Shelby, MT 59474", phone: "(406) 424-8300", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Treasure", name: "Treasure County Clerk and Recorder", address: "307 Reno Avenue, Hysham, MT 59038", phone: "(406) 342-5547", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Valley", name: "Valley County Clerk and Recorder", address: "501 Court Square, Suite 3, Glasgow, MT 59230", phone: "(406) 228-6220", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wheatland", name: "Wheatland County Clerk and Recorder", address: "201 Avenue A NW, Harlowton, MT 59036", phone: "(406) 632-4891", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Wibaux", name: "Wibaux County Clerk and Recorder", address: "200 South Wibaux Street, Wibaux, MT 59353", phone: "(406) 796-2481", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Yellowstone", name: "Yellowstone County Clerk and Recorder", address: "217 North 27th Street, Room 404, Billings, MT 59101", phone: "(406) 256-2785", website: "https://www.yellowstonecountymt.gov/clerk_recorder/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
];
