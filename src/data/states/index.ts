import { StateVitalRecords } from "@/types";
import { CA } from "./CA";
import { TX } from "./TX";
import { NY } from "./NY";
import { FL } from "./FL";
import { OH } from "./OH";
import { PA } from "./PA";

const stateData: Record<string, StateVitalRecords> = {
  CA,
  TX,
  NY,
  FL,
  OH,
  PA,
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
