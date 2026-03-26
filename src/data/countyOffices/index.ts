import { CountyOffice } from "@/types";
import { AZ_COUNTIES } from "./AZ";
import { CA_COUNTIES } from "./CA";
import { FL_COUNTIES } from "./FL";
import { GA_COUNTIES } from "./GA";
import { IL_COUNTIES } from "./IL";
import { IN_COUNTIES } from "./IN";
import { MA_COUNTIES } from "./MA";
import { MI_COUNTIES } from "./MI";
import { NC_COUNTIES } from "./NC";
import { NJ_COUNTIES } from "./NJ";
import { NY_COUNTIES } from "./NY";
import { OH_COUNTIES } from "./OH";
import { PA_COUNTIES } from "./PA";
import { TN_COUNTIES } from "./TN";
import { TX_COUNTIES } from "./TX";
import { VA_COUNTIES } from "./VA";
import { WA_COUNTIES } from "./WA";

const countyData: Record<string, CountyOffice[]> = {
  AZ: AZ_COUNTIES,
  CA: CA_COUNTIES,
  FL: FL_COUNTIES,
  GA: GA_COUNTIES,
  IL: IL_COUNTIES,
  IN: IN_COUNTIES,
  MA: MA_COUNTIES,
  MI: MI_COUNTIES,
  NC: NC_COUNTIES,
  NJ: NJ_COUNTIES,
  NY: NY_COUNTIES,
  OH: OH_COUNTIES,
  PA: PA_COUNTIES,
  TN: TN_COUNTIES,
  TX: TX_COUNTIES,
  VA: VA_COUNTIES,
  WA: WA_COUNTIES,
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
