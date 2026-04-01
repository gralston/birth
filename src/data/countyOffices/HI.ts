import { CountyOffice } from "@/types";

/**
 * All 5 Hawaii county offices that issue birth certificates.
 *
 * Hawaii has 5 counties (4 main counties plus Kalawao). Birth certificates
 * are issued by the Hawaii State Department of Health Vital Records
 * Section in Honolulu, as well as district health offices on each island.
 *
 * Data gathered March 2026 from official Hawaii DOH and county websites.
 */
export const HI_COUNTIES: CountyOffice[] = [
  {
    county: "Honolulu",
    name: "Hawaii State Department of Health – Vital Records Section",
    address: "1250 Punchbowl Street, Room 103, Honolulu, HI 96813",
    phone: "(808) 586-4533",
    website: "https://health.hawaii.gov/vitalrecords/",
    hours: "Mon–Fri 7:45 AM – 2:30 PM",
  },
  {
    county: "Hawaii",
    name: "Hawaii District Health Office – Vital Records (Hilo)",
    address: "75 Aupuni Street, Suite 103, Hilo, HI 96720",
    phone: "(808) 974-6008",
    website: "https://health.hawaii.gov/vitalrecords/",
    hours: "Mon–Fri 7:45 AM – 2:30 PM",
  },
  {
    county: "Maui",
    name: "Maui District Health Office – Vital Records",
    address: "54 South High Street, Room 301, Wailuku, HI 96793",
    phone: "(808) 984-8230",
    website: "https://health.hawaii.gov/vitalrecords/",
    hours: "Mon–Fri 7:45 AM – 2:30 PM",
  },
  {
    county: "Kauai",
    name: "Kauai District Health Office – Vital Records",
    address: "3040 Umi Street, Suite 210, Lihue, HI 96766",
    phone: "(808) 241-3495",
    website: "https://health.hawaii.gov/vitalrecords/",
    hours: "Mon–Fri 7:45 AM – 2:30 PM",
  },
  {
    county: "Kalawao",
    name: "Kalawao County – Hawaii State Department of Health",
    address: "1250 Punchbowl Street, Room 103, Honolulu, HI 96813",
    phone: "(808) 586-4533",
    website: "https://health.hawaii.gov/vitalrecords/",
    hours: "Mon–Fri 7:45 AM – 2:30 PM",
  },
];
