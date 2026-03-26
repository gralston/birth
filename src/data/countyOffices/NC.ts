import { CountyOffice } from "@/types";

/**
 * North Carolina Register of Deeds offices that issue birth certificates.
 *
 * In North Carolina, the county Register of Deeds can issue certified
 * copies of birth certificates for births that occurred in their county.
 * The NC Vital Records office in Raleigh can issue certificates for
 * births anywhere in the state (from 1913 onward).
 *
 * Data gathered March 2026 from official county and NC DHHS websites.
 */
export const NC_COUNTIES: CountyOffice[] = [
  {
    county: "Mecklenburg",
    name: "Mecklenburg County Register of Deeds – Vital Records",
    address: "720 East 4th Street, Suite 103, Charlotte, NC 28202",
    phone: "(704) 336-2443",
    website: "https://www.mecknc.gov/CountyManagersOffice/RegisterofDeeds/Pages/default.aspx",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Wake",
    name: "Wake County Register of Deeds – Vital Records",
    address: "301 South McDowell Street, Suite 100, Raleigh, NC 27601",
    phone: "(919) 856-5460",
    website: "https://www.wake.gov/departments-government/register-deeds",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Guilford",
    name: "Guilford County Register of Deeds – Vital Records",
    address: "201 South Eugene Street, Greensboro, NC 27401",
    phone: "(336) 641-3336",
    website: "https://www.guilfordcountync.gov/our-county/register-of-deeds",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Forsyth",
    name: "Forsyth County Register of Deeds – Vital Records",
    address: "201 North Chestnut Street, Room 103, Winston-Salem, NC 27101",
    phone: "(336) 703-2060",
    website: "https://www.forsyth.cc/ROD/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Cumberland",
    name: "Cumberland County Register of Deeds – Vital Records",
    address: "130 Gillespie Street, Room 15, Fayetteville, NC 28301",
    phone: "(910) 678-7775",
    website: "https://www.cumberlandcountync.gov/departments/register-of-deeds-group/register-of-deeds",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Durham",
    name: "Durham County Register of Deeds – Vital Records",
    address: "200 East Main Street, 1st Floor, Durham, NC 27701",
    phone: "(919) 560-0480",
    website: "https://www.dconc.gov/county-departments/departments-f-z/register-of-deeds",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Buncombe",
    name: "Buncombe County Register of Deeds – Vital Records",
    address: "205 College Street, Suite 132, Asheville, NC 28801",
    phone: "(828) 250-4300",
    website: "https://www.buncombecounty.org/governing/depts/register-of-deeds/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Union",
    name: "Union County Register of Deeds – Vital Records",
    address: "500 North Main Street, Suite 126, Monroe, NC 28112",
    phone: "(704) 283-3727",
    website: "https://www.unioncountync.gov/departments/register-of-deeds",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Cabarrus",
    name: "Cabarrus County Register of Deeds – Vital Records",
    address: "65 Church Street SE, Concord, NC 28025",
    phone: "(704) 920-2110",
    website: "https://www.cabarruscounty.us/departments/register-of-deeds",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "New Hanover",
    name: "New Hanover County Register of Deeds – Vital Records",
    address: "216 North 2nd Street, Suite 205, Wilmington, NC 28401",
    phone: "(910) 798-4530",
    website: "https://rod.nhcgov.com/",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    county: "Gaston",
    name: "Gaston County Register of Deeds – Vital Records",
    address: "325 North Marietta Street, Suite 100, Gastonia, NC 28052",
    phone: "(704) 862-7620",
    website: "https://www.gastongov.com/departments/register_of_deeds/index.php",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
  },
  {
    county: "Onslow",
    name: "Onslow County Register of Deeds – Vital Records",
    address: "109 Old Bridge Street, Room 102, Jacksonville, NC 28540",
    phone: "(910) 347-3451",
    website: "https://www.onslowcountync.gov/200/Register-of-Deeds",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
  },
];
