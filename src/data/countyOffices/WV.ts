import { CountyOffice } from "@/types";

/**
 * All 55 West Virginia county offices that issue birth certificates.
 *
 * In West Virginia, birth certificates are obtained from the West Virginia
 * Department of Health and Human Resources Vital Registration Office in
 * Charleston, or from the county clerk in the county where the birth occurred.
 *
 * Data gathered March 2026 from official county and WV DHHR websites.
 */
export const WV_COUNTIES: CountyOffice[] = [
  { county: "Barbour", name: "Barbour County Clerk", address: "8 North Main Street, Suite 1, Philippi, WV 26416", phone: "(304) 457-2232", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Berkeley", name: "Berkeley County Clerk", address: "100 West King Street, Room 1, Martinsburg, WV 25401", phone: "(304) 264-1927", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Boone", name: "Boone County Clerk", address: "200 State Street, Room 130, Madison, WV 25130", phone: "(304) 369-7337", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Braxton", name: "Braxton County Clerk", address: "300 Main Street, Suite 1, Sutton, WV 26601", phone: "(304) 765-2833", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Brooke", name: "Brooke County Clerk", address: "632 Main Street, Suite 1, Wellsburg, WV 26070", phone: "(304) 737-3661", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Cabell", name: "Cabell County Clerk", address: "750 5th Avenue, Room 108, Huntington, WV 25701", phone: "(304) 526-8625", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Calhoun", name: "Calhoun County Clerk", address: "363 Main Street, Suite 1, Grantsville, WV 26147", phone: "(304) 354-6725", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Clay", name: "Clay County Clerk", address: "246 Main Street, Suite 1, Clay, WV 25043", phone: "(304) 587-4259", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Doddridge", name: "Doddridge County Clerk", address: "118 East Court Street, Suite 102, West Union, WV 26456", phone: "(304) 873-2631", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Fayette", name: "Fayette County Clerk", address: "100 North Court Street, Fayetteville, WV 25840", phone: "(304) 574-4253", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Gilmer", name: "Gilmer County Clerk", address: "10 Howard Street, Glenville, WV 26351", phone: "(304) 462-7641", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Grant", name: "Grant County Clerk", address: "5 Highland Avenue, Petersburg, WV 26847", phone: "(304) 257-4550", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Greenbrier", name: "Greenbrier County Clerk", address: "912 Court Street North, Lewisburg, WV 24901", phone: "(304) 647-6602", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Hampshire", name: "Hampshire County Clerk", address: "66 North High Street, Room 1, Romney, WV 26757", phone: "(304) 822-5112", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Hancock", name: "Hancock County Clerk", address: "102 Court Street, Suite 2, New Cumberland, WV 26047", phone: "(304) 564-3311", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Hardy", name: "Hardy County Clerk", address: "204 Washington Street, Room 111, Moorefield, WV 26836", phone: "(304) 530-0250", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Harrison", name: "Harrison County Clerk", address: "301 West Main Street, Suite 201, Clarksburg, WV 26301", phone: "(304) 624-8611", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Jackson", name: "Jackson County Clerk", address: "100 Court Street, Suite 204, Ripley, WV 25271", phone: "(304) 373-2250", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Jefferson", name: "Jefferson County Clerk", address: "100 East Washington Street, Suite 101, Charles Town, WV 25414", phone: "(304) 728-3215", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Kanawha", name: "Kanawha County Clerk", address: "409 Virginia Street East, Room 100, Charleston, WV 25301", phone: "(304) 357-0130", website: "https://kanawha.us/countyclerk/", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Lewis", name: "Lewis County Clerk", address: "110 Center Avenue, Suite 2, Weston, WV 26452", phone: "(304) 269-8215", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Lincoln", name: "Lincoln County Clerk", address: "8000 Court Avenue, Suite 102, Hamlin, WV 25523", phone: "(304) 824-3336", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Logan", name: "Logan County Clerk", address: "300 Stratton Street, Suite 103, Logan, WV 25601", phone: "(304) 792-8600", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Marion", name: "Marion County Clerk", address: "200 Jackson Street, Suite 201, Fairmont, WV 26554", phone: "(304) 367-5440", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Marshall", name: "Marshall County Clerk", address: "600 7th Street, Suite 103, Moundsville, WV 26041", phone: "(304) 845-1220", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Mason", name: "Mason County Clerk", address: "200 6th Street, Room 1, Point Pleasant, WV 25550", phone: "(304) 675-1997", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "McDowell", name: "McDowell County Clerk", address: "90 Wyoming Street, Suite 109, Welch, WV 24801", phone: "(304) 436-8544", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Mercer", name: "Mercer County Clerk", address: "1501 West Main Street, Suite 1, Princeton, WV 24740", phone: "(304) 487-8311", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Mineral", name: "Mineral County Clerk", address: "150 Armstrong Street, Room 1, Keyser, WV 26726", phone: "(304) 788-3924", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Mingo", name: "Mingo County Clerk", address: "75 East 2nd Avenue, Room 114, Williamson, WV 25661", phone: "(304) 235-0370", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Monongalia", name: "Monongalia County Clerk", address: "243 High Street, Suite 123, Morgantown, WV 26505", phone: "(304) 291-7230", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Monroe", name: "Monroe County Clerk", address: "216 Main Street, Suite 5, Union, WV 24983", phone: "(304) 772-3096", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Morgan", name: "Morgan County Clerk", address: "77 Fairfax Street, Suite 1, Berkeley Springs, WV 25411", phone: "(304) 258-8547", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Nicholas", name: "Nicholas County Clerk", address: "700 Main Street, Suite 1, Summersville, WV 26651", phone: "(304) 872-7820", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Ohio", name: "Ohio County Clerk", address: "1500 Chapline Street, Room 205, Wheeling, WV 26003", phone: "(304) 234-3656", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Pendleton", name: "Pendleton County Clerk", address: "100 South Main Street, Suite 1, Franklin, WV 26807", phone: "(304) 358-2505", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Pleasants", name: "Pleasants County Clerk", address: "301 Court Lane, Suite 103, St. Marys, WV 26170", phone: "(304) 684-7542", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Pocahontas", name: "Pocahontas County Clerk", address: "900C 10th Avenue, Marlinton, WV 24954", phone: "(304) 799-4549", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Preston", name: "Preston County Clerk", address: "101 West Main Street, Room 201, Kingwood, WV 26537", phone: "(304) 329-0070", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Putnam", name: "Putnam County Clerk", address: "3389 Winfield Road, Suite 5, Winfield, WV 25213", phone: "(304) 586-0202", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Raleigh", name: "Raleigh County Clerk", address: "215 Main Street, Suite 200, Beckley, WV 25801", phone: "(304) 255-9123", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Randolph", name: "Randolph County Clerk", address: "2 Randolph Avenue, Suite 1, Elkins, WV 26241", phone: "(304) 636-0543", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Ritchie", name: "Ritchie County Clerk", address: "115 East Main Street, Suite 1, Harrisville, WV 26362", phone: "(304) 643-2164", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Roane", name: "Roane County Clerk", address: "200 Main Street, Suite 1, Spencer, WV 25276", phone: "(304) 927-2860", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Summers", name: "Summers County Clerk", address: "120 Ballengee Street, Suite 1, Hinton, WV 25951", phone: "(304) 466-7104", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Taylor", name: "Taylor County Clerk", address: "214 West Main Street, Suite 201, Grafton, WV 26354", phone: "(304) 265-1401", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Tucker", name: "Tucker County Clerk", address: "211 1st Street, Suite 203, Parsons, WV 26287", phone: "(304) 478-2414", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Tyler", name: "Tyler County Clerk", address: "121 Main Street, Suite 1, Middlebourne, WV 26149", phone: "(304) 758-2102", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Upshur", name: "Upshur County Clerk", address: "40 West Main Street, Suite 101, Buckhannon, WV 26201", phone: "(304) 473-5074", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Wayne", name: "Wayne County Clerk", address: "700 Hendricks Street, Suite 1, Wayne, WV 25570", phone: "(304) 272-6371", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Webster", name: "Webster County Clerk", address: "2 Court Square, Suite 1, Webster Springs, WV 26288", phone: "(304) 847-2508", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Wetzel", name: "Wetzel County Clerk", address: "200 Main Street, Suite 1, New Martinsville, WV 26155", phone: "(304) 455-8224", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Wirt", name: "Wirt County Clerk", address: "75 Court Street, Suite 1, Elizabeth, WV 26143", phone: "(304) 275-4271", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Wood", name: "Wood County Clerk", address: "1 Court Square, Suite 101, Parkersburg, WV 26101", phone: "(304) 424-1850", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Wyoming", name: "Wyoming County Clerk", address: "100 Main Street, Suite 1, Pineville, WV 24874", phone: "(304) 732-8000", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
];
