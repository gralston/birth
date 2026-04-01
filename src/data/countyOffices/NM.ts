import { CountyOffice } from "@/types";

/**
 * All 33 New Mexico county offices that issue birth certificates.
 *
 * In New Mexico, the county clerk in each county can assist with
 * vital records requests. Birth certificates are primarily issued
 * by the New Mexico Department of Health Bureau of Vital Records
 * and Health Statistics in Santa Fe.
 *
 * Data gathered March 2026 from official county and NM DOH websites.
 */
export const NM_COUNTIES: CountyOffice[] = [
  { county: "Bernalillo", name: "Bernalillo County Clerk", address: "415 Silver Avenue SW, Albuquerque, NM 87102", phone: "(505) 468-1290", website: "https://www.bernco.gov/clerk/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Catron", name: "Catron County Clerk", address: "100 Main Street, Reserve, NM 87830", phone: "(575) 533-6400", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Chaves", name: "Chaves County Clerk", address: "1 St. Mary's Place, Suite 106, Roswell, NM 88203", phone: "(575) 624-6614", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Cibola", name: "Cibola County Clerk", address: "515 West High Street, Grants, NM 87020", phone: "(505) 285-2535", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Colfax", name: "Colfax County Clerk", address: "100 North 3rd Street, Raton, NM 87740", phone: "(575) 445-5551", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Curry", name: "Curry County Clerk", address: "700 North Main Street, Suite 7, Clovis, NM 88101", phone: "(575) 763-5591", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "De Baca", name: "De Baca County Clerk", address: "514 Avenue C, Fort Sumner, NM 88119", phone: "(575) 355-2601", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Dona Ana", name: "Dona Ana County Clerk", address: "845 North Motel Boulevard, Las Cruces, NM 88007", phone: "(575) 647-7421", website: "https://www.donaanacounty.org/clerk/", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Eddy", name: "Eddy County Clerk", address: "101 West Greene Street, Carlsbad, NM 88220", phone: "(575) 885-3383", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Grant", name: "Grant County Clerk", address: "201 North Cooper Street, Silver City, NM 88061", phone: "(575) 574-0042", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Guadalupe", name: "Guadalupe County Clerk", address: "420 Parker Avenue, Suite 4, Santa Rosa, NM 88435", phone: "(575) 472-3791", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Harding", name: "Harding County Clerk", address: "100 West 3rd Street, Mosquero, NM 87733", phone: "(575) 673-2301", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Hidalgo", name: "Hidalgo County Clerk", address: "300 South Shakespeare Street, Lordsburg, NM 88045", phone: "(575) 542-9213", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lea", name: "Lea County Clerk", address: "100 North Main Street, Lovington, NM 88260", phone: "(575) 396-8521", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Lincoln", name: "Lincoln County Clerk", address: "300 Central Avenue, Carrizozo, NM 88301", phone: "(575) 648-2394", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Los Alamos", name: "Los Alamos County Clerk", address: "1000 Central Avenue, Suite 240, Los Alamos, NM 87544", phone: "(505) 662-8010", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Luna", name: "Luna County Clerk", address: "700 South Silver Avenue, Deming, NM 88030", phone: "(575) 546-0491", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "McKinley", name: "McKinley County Clerk", address: "207 West Hill Avenue, Gallup, NM 87301", phone: "(505) 863-6866", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Mora", name: "Mora County Clerk", address: "100 Courthouse Square, Suite 1, Mora, NM 87732", phone: "(575) 387-2448", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Otero", name: "Otero County Clerk", address: "1101 New York Avenue, Room 108, Alamogordo, NM 88310", phone: "(575) 437-4942", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Quay", name: "Quay County Clerk", address: "300 South 3rd Street, Suite 1, Tucumcari, NM 88401", phone: "(575) 461-0510", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Rio Arriba", name: "Rio Arriba County Clerk", address: "1122 Industrial Park Road, Espanola, NM 87532", phone: "(505) 753-8291", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Roosevelt", name: "Roosevelt County Clerk", address: "109 West 1st Street, Portales, NM 88130", phone: "(575) 356-8562", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "San Juan", name: "San Juan County Clerk", address: "100 South Oliver Drive, Suite 200, Aztec, NM 87410", phone: "(505) 334-9471", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "San Miguel", name: "San Miguel County Clerk", address: "500 West National Avenue, Suite 101, Las Vegas, NM 87701", phone: "(505) 425-9331", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sandoval", name: "Sandoval County Clerk", address: "1500 Idalia Road, Building D, Bernalillo, NM 87004", phone: "(505) 867-7572", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Santa Fe", name: "Santa Fe County Clerk", address: "100 Catron Street, Suite 1, Santa Fe, NM 87501", phone: "(505) 986-6280", website: "https://www.santafecountynm.gov/clerk", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Sierra", name: "Sierra County Clerk", address: "311 North Date Street, Truth or Consequences, NM 87901", phone: "(575) 894-2840", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Socorro", name: "Socorro County Clerk", address: "200 Church Street, Socorro, NM 87801", phone: "(575) 835-0423", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Taos", name: "Taos County Clerk", address: "105 Albright Street, Suite A, Taos, NM 87571", phone: "(575) 737-6380", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Torrance", name: "Torrance County Clerk", address: "205 South 9th Street, Estancia, NM 87016", phone: "(505) 246-4735", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Union", name: "Union County Clerk", address: "200 Court Street, Suite 102, Clayton, NM 88415", phone: "(575) 374-9491", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "Valencia", name: "Valencia County Clerk", address: "444 Luna Avenue, Los Lunas, NM 87031", phone: "(505) 866-2073", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
];
