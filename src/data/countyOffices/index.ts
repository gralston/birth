import { CountyOffice } from "@/types";
import { CA_COUNTIES } from "./CA";
import { TX_COUNTIES } from "./TX";

const countyData: Record<string, CountyOffice[]> = {
  CA: CA_COUNTIES,
  TX: TX_COUNTIES,
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
