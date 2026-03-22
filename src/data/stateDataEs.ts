import { StateTranslationEs } from "./stateTranslationTypes";
import { batch1 } from "./stateTranslations_batch1";
import { batch2 } from "./stateTranslations_batch2";
import { batch3 } from "./stateTranslations_batch3";
import { batch4 } from "./stateTranslations_batch4";

export const stateDataEs: Record<string, StateTranslationEs> = {
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
};
