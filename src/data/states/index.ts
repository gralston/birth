import { StateVitalRecords } from "@/types";
import { AK } from "./AK";
import { AL } from "./AL";
import { AR } from "./AR";
import { AS } from "./AS";
import { AZ } from "./AZ";
import { CA } from "./CA";
import { CO } from "./CO";
import { CT } from "./CT";
import { DC } from "./DC";
import { DE } from "./DE";
import { TX } from "./TX";
import { NY } from "./NY";
import { FL } from "./FL";
import { OH } from "./OH";
import { PA } from "./PA";
import { IL } from "./IL";
import { GA } from "./GA";
import { NC } from "./NC";
import { MI } from "./MI";
import { MA } from "./MA";
import { MD } from "./MD";
import { ME } from "./ME";
import { NJ } from "./NJ";
import { TN } from "./TN";
import { VA } from "./VA";
import { WA } from "./WA";
import { WI } from "./WI";
import { MN } from "./MN";
import { IN } from "./IN";
import { KS } from "./KS";
import { KY } from "./KY";
import { LA } from "./LA";
import { MO } from "./MO";
import { MS } from "./MS";
import { MT } from "./MT";
import { NE } from "./NE";
import { NH } from "./NH";
import { NM } from "./NM";
import { NV } from "./NV";
import { IA } from "./IA";
import { OK } from "./OK";
import { OR } from "./OR";
import { PR } from "./PR";
import { RI } from "./RI";
import { SC } from "./SC";
import { SD } from "./SD";
import { UT } from "./UT";
import { VI } from "./VI";
import { VT } from "./VT";
import { WV } from "./WV";
import { WY } from "./WY";
import { GU } from "./GU";
import { HI } from "./HI";
import { ID_ } from "./ID";
import { MP } from "./MP";
import { ND } from "./ND";

const stateData: Record<string, StateVitalRecords> = {
  AK,
  AL,
  AR,
  AS,
  AZ,
  CA,
  CO,
  CT,
  DC,
  DE,
  TX,
  NY,
  FL,
  OH,
  PA,
  IL,
  GA,
  IA,
  NC,
  IN,
  KS,
  KY,
  LA,
  MI,
  MA,
  MD,
  ME,
  MN,
  MO,
  MS,
  MT,
  NE,
  NH,
  NM,
  NV,
  NJ,
  OK,
  OR,
  PR,
  RI,
  SC,
  SD,
  TN,
  UT,
  VI,
  VT,
  VA,
  WA,
  WI,
  WV,
  WY,
  GU,
  HI,
  ID: ID_,
  MP,
  ND,
};

export function getStateData(stateCode: string): StateVitalRecords | undefined {
  return stateData[stateCode.toUpperCase()];
}

export function getAvailableStates(): { code: string; name: string }[] {
  return Object.values(stateData)
    .map((s) => ({ code: s.stateCode, name: s.stateName }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getAllStateCodes(): string[] {
  return Object.keys(stateData);
}

export default stateData;
