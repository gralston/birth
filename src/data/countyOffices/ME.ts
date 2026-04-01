import { CountyOffice } from "@/types";

/**
 * All 16 Maine county offices that issue birth certificates.
 *
 * In Maine, birth certificates are obtained from the town/city clerk
 * where the birth occurred, or from the Maine CDC Office of Vital
 * Records in Augusta. Listed here are the primary municipal clerk
 * offices for each county (typically the county seat or largest city).
 *
 * Data gathered March 2026 from official municipal and Maine CDC websites.
 */
export const ME_COUNTIES: CountyOffice[] = [
  { county: "Androscoggin", name: "Lewiston City Clerk – Vital Records", address: "27 Pine Street, Lewiston, ME 04240", phone: "(207) 513-3124", website: "https://www.lewistonmaine.gov/170/City-Clerk", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Aroostook", name: "Presque Isle City Clerk – Vital Records", address: "12 Second Street, Presque Isle, ME 04769", phone: "(207) 760-2701", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Cumberland", name: "Portland City Clerk – Vital Records", address: "389 Congress Street, Room 204, Portland, ME 04101", phone: "(207) 874-8677", website: "https://www.portlandmaine.gov/152/City-Clerk", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Franklin", name: "Farmington Town Clerk – Vital Records", address: "153 Farmington Falls Road, Farmington, ME 04938", phone: "(207) 778-6538", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Hancock", name: "Ellsworth City Clerk – Vital Records", address: "1 City Hall Plaza, Ellsworth, ME 04605", phone: "(207) 669-6604", hours: "Mon–Fri 8:00 AM – 4:00 PM" },
  { county: "Kennebec", name: "Augusta City Clerk – Vital Records", address: "16 Cony Street, Augusta, ME 04330", phone: "(207) 626-2320", website: "https://www.augustamaine.gov/city-clerk", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Knox", name: "Rockland City Clerk – Vital Records", address: "270 Pleasant Street, Rockland, ME 04841", phone: "(207) 594-0304", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Lincoln", name: "Wiscasset Town Clerk – Vital Records", address: "51 Bath Road, Wiscasset, ME 04578", phone: "(207) 882-8200", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Oxford", name: "South Paris Town Clerk – Vital Records", address: "26 Western Avenue, South Paris, ME 04281", phone: "(207) 743-2501", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
  { county: "Penobscot", name: "Bangor City Clerk – Vital Records", address: "73 Harlow Street, Bangor, ME 04401", phone: "(207) 992-4200", website: "https://www.bangormaine.gov/city-clerk", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Piscataquis", name: "Dover-Foxcroft Town Clerk – Vital Records", address: "48 Morton Avenue, Suite A, Dover-Foxcroft, ME 04426", phone: "(207) 564-3318", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
  { county: "Sagadahoc", name: "Bath City Clerk – Vital Records", address: "55 Front Street, Bath, ME 04530", phone: "(207) 443-8334", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Somerset", name: "Skowhegan Town Clerk – Vital Records", address: "225 Water Street, Skowhegan, ME 04976", phone: "(207) 474-6907", hours: "Mon–Fri 8:30 AM – 4:30 PM" },
  { county: "Waldo", name: "Belfast City Clerk – Vital Records", address: "131 Church Street, Belfast, ME 04915", phone: "(207) 338-3370", hours: "Mon–Fri 8:00 AM – 4:30 PM" },
  { county: "Washington", name: "Machias Town Clerk – Vital Records", address: "4 Court Street, Machias, ME 04654", phone: "(207) 255-6621", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
  { county: "York", name: "Alfred Town Clerk – Vital Records (York County Seat)", address: "16 Saco Road, Alfred, ME 04002", phone: "(207) 324-5872", hours: "Mon–Fri 8:30 AM – 4:00 PM" },
];
