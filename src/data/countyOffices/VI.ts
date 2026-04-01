import { CountyOffice } from "@/types";

/**
 * U.S. Virgin Islands vital records offices.
 *
 * In the U.S. Virgin Islands, birth certificates are issued by the
 * USVI Department of Health Office of Vital Records and Statistics.
 * There are offices on each of the three main islands: St. Thomas,
 * St. Croix, and St. John.
 *
 * Data gathered March 2026 from official USVI DOH websites.
 */
export const VI_COUNTIES: CountyOffice[] = [
  { county: "St. Thomas", name: "USVI Department of Health – Vital Records (St. Thomas)", address: "1303 Hospital Ground, Suite 10, Charlotte Amalie, St. Thomas, VI 00802", phone: "(340) 774-9000", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "St. Croix", name: "USVI Department of Health – Vital Records (St. Croix)", address: "3500 Estate Richmond, Christiansted, St. Croix, VI 00820", phone: "(340) 718-1311", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
  { county: "St. John", name: "USVI Department of Health – Vital Records (St. John)", address: "Morris F. De Castro Clinic, Cruz Bay, St. John, VI 00831", phone: "(340) 776-6400", hours: "Mon–Fri 8:00 AM – 5:00 PM" },
];
