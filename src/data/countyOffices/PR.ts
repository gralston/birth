import { CountyOffice } from "@/types";

/**
 * Puerto Rico vital records offices (Demographic Registry).
 *
 * In Puerto Rico, birth certificates are issued exclusively by the
 * Puerto Rico Department of Health Demographic Registry (Registro
 * Demográfico). Regional offices serve different municipalities.
 * Puerto Rico has 78 municipalities but vital records are centralized.
 *
 * Data gathered March 2026 from official PR Department of Health websites.
 */
export const PR_COUNTIES: CountyOffice[] = [
  { county: "San Juan", name: "Registro Demográfico – Oficina Central", address: "171 Quisqueya Street, San Juan, PR 00917", phone: "(787) 767-9120", website: "https://www.salud.pr.gov/registro-demografico", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Bayamón", name: "Registro Demográfico – Oficina Regional Bayamón", address: "Centro Gubernamental de Bayamón, Bayamón, PR 00961", phone: "(787) 780-6017", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Ponce", name: "Registro Demográfico – Oficina Regional Ponce", address: "Centro Gubernamental de Ponce, Ponce, PR 00716", phone: "(787) 812-1777", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Carolina", name: "Registro Demográfico – Oficina Regional Carolina", address: "Centro Gubernamental de Carolina, Carolina, PR 00984", phone: "(787) 757-2535", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Caguas", name: "Registro Demográfico – Oficina Regional Caguas", address: "Centro Gubernamental de Caguas, Caguas, PR 00725", phone: "(787) 653-2121", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Arecibo", name: "Registro Demográfico – Oficina Regional Arecibo", address: "Centro Gubernamental de Arecibo, Arecibo, PR 00612", phone: "(787) 878-5959", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Mayagüez", name: "Registro Demográfico – Oficina Regional Mayagüez", address: "Centro Gubernamental de Mayagüez, Mayagüez, PR 00680", phone: "(787) 832-4550", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Aguadilla", name: "Registro Demográfico – Oficina Regional Aguadilla", address: "Centro Gubernamental de Aguadilla, Aguadilla, PR 00603", phone: "(787) 891-3050", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Humacao", name: "Registro Demográfico – Oficina Regional Humacao", address: "Centro Gubernamental de Humacao, Humacao, PR 00791", phone: "(787) 852-1055", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
  { county: "Guayama", name: "Registro Demográfico – Oficina Regional Guayama", address: "Centro Gubernamental de Guayama, Guayama, PR 00784", phone: "(787) 864-7575", hours: "Mon–Fri 7:30 AM – 3:30 PM" },
];
