import { CountyOffice } from "@/types";

/**
 * District of Columbia vital records office.
 *
 * Washington, DC is a single federal district — not a state with counties.
 * Birth certificates are issued by the DC Department of Health Vital
 * Records Division.
 *
 * Data gathered March 2026 from official DC DOH website.
 */
export const DC_COUNTIES: CountyOffice[] = [
  {
    county: "District of Columbia",
    name: "DC Department of Health – Vital Records Division",
    address: "899 North Capitol Street NE, 1st Floor, Washington, DC 20002",
    phone: "(202) 442-9009",
    website: "https://dchealth.dc.gov/service/vital-records",
    hours: "Mon–Fri 8:30 AM – 3:30 PM",
  },
];
