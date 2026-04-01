import { CountyOffice } from "@/types";

/**
 * All 3 Delaware county offices that issue birth certificates.
 *
 * Delaware has only 3 counties. Birth certificates are issued by the
 * Delaware Division of Public Health Office of Vital Statistics in
 * Dover. The county offices listed here assist with vital records
 * requests and can direct residents to appropriate services.
 *
 * Data gathered March 2026 from official DE DPH and county websites.
 */
export const DE_COUNTIES: CountyOffice[] = [
  {
    county: "New Castle",
    name: "Delaware Office of Vital Statistics – Wilmington",
    address: "258 Chapman Road, Suite 102, Newark, DE 19702",
    phone: "(302) 283-7130",
    website: "https://www.dhss.delaware.gov/dph/ss/vitalstats.html",
    hours: "Mon–Fri 8:00 AM – 4:15 PM",
  },
  {
    county: "Kent",
    name: "Delaware Office of Vital Statistics – Dover (Main Office)",
    address: "417 Federal Street, Dover, DE 19901",
    phone: "(302) 744-4549",
    website: "https://www.dhss.delaware.gov/dph/ss/vitalstats.html",
    hours: "Mon–Fri 8:00 AM – 4:15 PM",
  },
  {
    county: "Sussex",
    name: "Delaware Office of Vital Statistics – Georgetown",
    address: "546 South Bedford Street, Georgetown, DE 19947",
    phone: "(302) 856-5496",
    website: "https://www.dhss.delaware.gov/dph/ss/vitalstats.html",
    hours: "Mon–Fri 8:00 AM – 4:15 PM",
  },
];
