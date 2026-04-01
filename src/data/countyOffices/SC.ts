import { CountyOffice } from "@/types";

/**
 * All 46 South Carolina county offices that issue birth certificates.
 *
 * In South Carolina, birth certificates are obtained from the SC
 * Department of Health and Environmental Control (DHEC) Division of
 * Vital Records in Columbia. County health departments and probate
 * courts can also assist with vital records requests.
 *
 * Data gathered March 2026 from official county and SC DHEC websites.
 */
export const SC_COUNTIES: CountyOffice[] = [
  { county: "Abbeville", name: "Abbeville County Probate Court", address: "903 West Greenwood Street, Suite 1600, Abbeville, SC 29620", phone: "(864) 366-5312", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Aiken", name: "Aiken County Probate Court", address: "828 Richland Avenue West, Aiken, SC 29801", phone: "(803) 642-2013", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Allendale", name: "Allendale County Probate Court", address: "292 Barnwell Highway, Allendale, SC 29810", phone: "(803) 584-7042", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Anderson", name: "Anderson County Probate Court", address: "100 South Main Street, Room 206, Anderson, SC 29624", phone: "(864) 260-4036", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Bamberg", name: "Bamberg County Probate Court", address: "2997 Main Highway, Bamberg, SC 29003", phone: "(803) 245-3025", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Barnwell", name: "Barnwell County Probate Court", address: "141 Main Street, Suite 104, Barnwell, SC 29812", phone: "(803) 541-1020", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Beaufort", name: "Beaufort County Probate Court", address: "100 Ribaut Road, Suite 201, Beaufort, SC 29902", phone: "(843) 255-5800", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Berkeley", name: "Berkeley County Probate Court", address: "223 North Live Oak Drive, Suite 202, Moncks Corner, SC 29461", phone: "(843) 719-4262", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Calhoun", name: "Calhoun County Probate Court", address: "102 Courthouse Drive, Suite 108, St. Matthews, SC 29135", phone: "(803) 874-2435", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Charleston", name: "Charleston County Probate Court", address: "4000 Salt Pointe Parkway, North Charleston, SC 29405", phone: "(843) 958-5070", website: "https://www.charlestoncounty.org/departments/probate-court/", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Cherokee", name: "Cherokee County Probate Court", address: "125 East Floyd Baker Boulevard, Suite 109, Gaffney, SC 29340", phone: "(864) 487-2571", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Chester", name: "Chester County Probate Court", address: "140 Main Street, Suite 111, Chester, SC 29706", phone: "(803) 385-2604", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Chesterfield", name: "Chesterfield County Probate Court", address: "200 West Main Street, Chesterfield, SC 29709", phone: "(843) 623-2574", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Clarendon", name: "Clarendon County Probate Court", address: "3 West Keitt Street, Manning, SC 29102", phone: "(803) 435-4443", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Colleton", name: "Colleton County Probate Court", address: "101 Hampton Street, Room 224, Walterboro, SC 29488", phone: "(843) 549-5791", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Darlington", name: "Darlington County Probate Court", address: "1 Public Square, Room 208, Darlington, SC 29532", phone: "(843) 398-4330", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Dillon", name: "Dillon County Probate Court", address: "401 West Main Street, Suite 200, Dillon, SC 29536", phone: "(843) 774-1403", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Dorchester", name: "Dorchester County Probate Court", address: "201 Johnston Street, St. George, SC 29477", phone: "(843) 563-0114", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Edgefield", name: "Edgefield County Probate Court", address: "129 Courthouse Square, Edgefield, SC 29824", phone: "(803) 637-4072", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Fairfield", name: "Fairfield County Probate Court", address: "350 Columbia Road, Winnsboro, SC 29180", phone: "(803) 712-6526", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Florence", name: "Florence County Probate Court", address: "180 North Irby Street, MSC-Z, Florence, SC 29501", phone: "(843) 665-3042", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Georgetown", name: "Georgetown County Probate Court", address: "715 Prince Street, Suite 230, Georgetown, SC 29440", phone: "(843) 545-3076", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Greenville", name: "Greenville County Probate Court", address: "301 University Ridge, Suite 1200, Greenville, SC 29601", phone: "(864) 467-7180", website: "https://www.greenvillecounty.org/probate_court/", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Greenwood", name: "Greenwood County Probate Court", address: "528 Monument Street, Suite 207, Greenwood, SC 29646", phone: "(864) 942-8591", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Hampton", name: "Hampton County Probate Court", address: "200 Jackson Avenue West, Hampton, SC 29924", phone: "(803) 943-7510", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Horry", name: "Horry County Probate Court", address: "1301 2nd Avenue, Suite 1014, Conway, SC 29526", phone: "(843) 915-5370", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Jasper", name: "Jasper County Probate Court", address: "305 Russell Street, Suite 208, Ridgeland, SC 29936", phone: "(843) 717-3618", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Kershaw", name: "Kershaw County Probate Court", address: "515 Walnut Street, Suite 120, Camden, SC 29020", phone: "(803) 425-1500", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Lancaster", name: "Lancaster County Probate Court", address: "101 North Main Street, Suite 207, Lancaster, SC 29720", phone: "(803) 416-9350", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Laurens", name: "Laurens County Probate Court", address: "100 Hillcrest Square, Suite B, Laurens, SC 29360", phone: "(864) 984-3538", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Lee", name: "Lee County Probate Court", address: "131 South Main Street, Bishopville, SC 29010", phone: "(803) 484-5341", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Lexington", name: "Lexington County Probate Court", address: "139 East Main Street, Suite 244, Lexington, SC 29072", phone: "(803) 785-8230", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Marion", name: "Marion County Probate Court", address: "100 Court Street, Suite 301, Marion, SC 29571", phone: "(843) 423-8235", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Marlboro", name: "Marlboro County Probate Court", address: "105 East Market Street, Bennettsville, SC 29512", phone: "(843) 479-5613", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "McCormick", name: "McCormick County Probate Court", address: "133 South Mine Street, Suite 102, McCormick, SC 29835", phone: "(864) 465-2195", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Newberry", name: "Newberry County Probate Court", address: "1226 College Street, Room 209, Newberry, SC 29108", phone: "(803) 321-2110", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Oconee", name: "Oconee County Probate Court", address: "205 West Main Street, Suite 104, Walhalla, SC 29691", phone: "(864) 638-4275", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Orangeburg", name: "Orangeburg County Probate Court", address: "190 Gibson Street, Suite B, Orangeburg, SC 29115", phone: "(803) 533-6240", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Pickens", name: "Pickens County Probate Court", address: "222 McDaniel Avenue, Suite B-10, Pickens, SC 29671", phone: "(864) 898-5866", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Richland", name: "Richland County Probate Court", address: "2020 Hampton Street, Suite 1100, Columbia, SC 29204", phone: "(803) 576-1940", website: "https://www.richlandcountysc.gov/government/probate-court", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Saluda", name: "Saluda County Probate Court", address: "111 Law Enforcement Drive, Suite 5, Saluda, SC 29138", phone: "(864) 445-4500", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Spartanburg", name: "Spartanburg County Probate Court", address: "180 Magnolia Street, Suite 402, Spartanburg, SC 29306", phone: "(864) 596-2556", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Sumter", name: "Sumter County Probate Court", address: "141 North Main Street, Suite 301, Sumter, SC 29150", phone: "(803) 436-2227", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Union", name: "Union County Probate Court", address: "210 West Main Street, Union, SC 29379", phone: "(864) 429-1630", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "Williamsburg", name: "Williamsburg County Probate Court", address: "125 West Main Street, Suite 203, Kingstree, SC 29556", phone: "(843) 355-9321", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
  { county: "York", name: "York County Probate Court", address: "1675 York Highway, Suite 1104, York, SC 29745", phone: "(803) 684-8513", hours: "Mon–Fri 8:30 AM – 5:00 PM" },
];
