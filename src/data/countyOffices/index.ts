import { CountyOffice } from "@/types";
import { AK_COUNTIES } from "./AK";
import { AL_COUNTIES } from "./AL";
import { AR_COUNTIES } from "./AR";
import { AS_COUNTIES } from "./AS";
import { AZ_COUNTIES } from "./AZ";
import { CA_COUNTIES } from "./CA";
import { CO_COUNTIES } from "./CO";
import { CT_COUNTIES } from "./CT";
import { DC_COUNTIES } from "./DC";
import { DE_COUNTIES } from "./DE";
import { FL_COUNTIES } from "./FL";
import { GA_COUNTIES } from "./GA";
import { GU_COUNTIES } from "./GU";
import { HI_COUNTIES } from "./HI";
import { IA_COUNTIES } from "./IA";
import { ID_COUNTIES } from "./ID";
import { IL_COUNTIES } from "./IL";
import { IN_COUNTIES } from "./IN";
import { KS_COUNTIES } from "./KS";
import { KY_COUNTIES } from "./KY";
import { LA_COUNTIES } from "./LA";
import { MA_COUNTIES } from "./MA";
import { MD_COUNTIES } from "./MD";
import { ME_COUNTIES } from "./ME";
import { MI_COUNTIES } from "./MI";
import { MN_COUNTIES } from "./MN";
import { MO_COUNTIES } from "./MO";
import { MP_COUNTIES } from "./MP";
import { MS_COUNTIES } from "./MS";
import { MT_COUNTIES } from "./MT";
import { NC_COUNTIES } from "./NC";
import { ND_COUNTIES } from "./ND";
import { NE_COUNTIES } from "./NE";
import { NH_COUNTIES } from "./NH";
import { NJ_COUNTIES } from "./NJ";
import { NM_COUNTIES } from "./NM";
import { NV_COUNTIES } from "./NV";
import { NY_COUNTIES } from "./NY";
import { OH_COUNTIES } from "./OH";
import { OK_COUNTIES } from "./OK";
import { OR_COUNTIES } from "./OR";
import { PA_COUNTIES } from "./PA";
import { PR_COUNTIES } from "./PR";
import { RI_COUNTIES } from "./RI";
import { SC_COUNTIES } from "./SC";
import { SD_COUNTIES } from "./SD";
import { TN_COUNTIES } from "./TN";
import { TX_COUNTIES } from "./TX";
import { UT_COUNTIES } from "./UT";
import { VA_COUNTIES } from "./VA";
import { VI_COUNTIES } from "./VI";
import { VT_COUNTIES } from "./VT";
import { WA_COUNTIES } from "./WA";
import { WI_COUNTIES } from "./WI";
import { WV_COUNTIES } from "./WV";
import { WY_COUNTIES } from "./WY";

const countyData: Record<string, CountyOffice[]> = {
  AK: AK_COUNTIES,
  AL: AL_COUNTIES,
  AR: AR_COUNTIES,
  AS: AS_COUNTIES,
  AZ: AZ_COUNTIES,
  CA: CA_COUNTIES,
  CO: CO_COUNTIES,
  CT: CT_COUNTIES,
  DC: DC_COUNTIES,
  DE: DE_COUNTIES,
  FL: FL_COUNTIES,
  GA: GA_COUNTIES,
  GU: GU_COUNTIES,
  HI: HI_COUNTIES,
  IA: IA_COUNTIES,
  ID: ID_COUNTIES,
  IL: IL_COUNTIES,
  IN: IN_COUNTIES,
  KS: KS_COUNTIES,
  KY: KY_COUNTIES,
  LA: LA_COUNTIES,
  MA: MA_COUNTIES,
  MD: MD_COUNTIES,
  ME: ME_COUNTIES,
  MI: MI_COUNTIES,
  MN: MN_COUNTIES,
  MO: MO_COUNTIES,
  MP: MP_COUNTIES,
  MS: MS_COUNTIES,
  MT: MT_COUNTIES,
  NC: NC_COUNTIES,
  ND: ND_COUNTIES,
  NE: NE_COUNTIES,
  NH: NH_COUNTIES,
  NJ: NJ_COUNTIES,
  NM: NM_COUNTIES,
  NV: NV_COUNTIES,
  NY: NY_COUNTIES,
  OH: OH_COUNTIES,
  OK: OK_COUNTIES,
  OR: OR_COUNTIES,
  PA: PA_COUNTIES,
  PR: PR_COUNTIES,
  RI: RI_COUNTIES,
  SC: SC_COUNTIES,
  SD: SD_COUNTIES,
  TN: TN_COUNTIES,
  TX: TX_COUNTIES,
  UT: UT_COUNTIES,
  VA: VA_COUNTIES,
  VI: VI_COUNTIES,
  VT: VT_COUNTIES,
  WA: WA_COUNTIES,
  WI: WI_COUNTIES,
  WV: WV_COUNTIES,
  WY: WY_COUNTIES,
};

/**
 * Get all county offices for a state.
 */
export function getCountyOffices(stateCode: string): CountyOffice[] {
  return countyData[stateCode] || [];
}

/**
 * Find a county office by county name.
 */
export function findCountyOffice(
  stateCode: string,
  countyName: string
): CountyOffice | undefined {
  const offices = countyData[stateCode];
  if (!offices) return undefined;

  // Try exact match first, then case-insensitive
  return (
    offices.find((o) => o.county === countyName) ||
    offices.find(
      (o) => o.county.toLowerCase() === countyName.toLowerCase()
    )
  );
}

/**
 * Check if we have county office data for a state.
 */
export function hasCountyData(stateCode: string): boolean {
  return stateCode in countyData && countyData[stateCode].length > 0;
}
