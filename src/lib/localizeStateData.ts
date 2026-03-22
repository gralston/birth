import { StateVitalRecords } from "@/types";
import { stateDataEs } from "@/data/stateDataEs";

/**
 * Returns a localized copy of the state data.
 * For English (or if no translation exists), returns the original data unchanged.
 * For Spanish, overlays translated strings on top of the English base data.
 */
export function localizeStateData(
  data: StateVitalRecords,
  locale: string
): StateVitalRecords {
  if (locale !== "es") return data;

  const t = stateDataEs[data.stateCode];
  if (!t) return data;

  return {
    ...data,
    noIdWorkaround: t.noIdWorkaround ?? data.noIdWorkaround,
    specialNotes: t.specialNotes ?? data.specialNotes,
    office: {
      ...data.office,
      hours: t.officeHours ?? data.office.hours,
    },
    fees: {
      ...data.fees,
      paymentMethods: t.paymentMethods ?? data.fees.paymentMethods,
    },
    requestMethods: {
      ...data.requestMethods,
      online: data.requestMethods.online
        ? {
            ...data.requestMethods.online,
            notes: t.onlineNotes ?? data.requestMethods.online.notes,
          }
        : undefined,
      mail: data.requestMethods.mail
        ? {
            ...data.requestMethods.mail,
            notes: t.mailNotes ?? data.requestMethods.mail.notes,
            processingTime:
              t.mailProcessingTime ??
              data.requestMethods.mail.processingTime,
          }
        : undefined,
      inPerson: data.requestMethods.inPerson
        ? {
            ...data.requestMethods.inPerson,
            notes: t.inPersonNotes ?? data.requestMethods.inPerson.notes,
            locations:
              t.inPersonLocations ??
              data.requestMethods.inPerson.locations,
            processingTime:
              t.inPersonProcessingTime ??
              data.requestMethods.inPerson.processingTime,
          }
        : undefined,
      phone: data.requestMethods.phone
        ? {
            ...data.requestMethods.phone,
            notes: t.phoneNotes ?? data.requestMethods.phone.notes,
          }
        : undefined,
    },
    requirements: {
      ...data.requirements,
      primaryId: t.primaryId ?? data.requirements.primaryId,
      notes: t.requirementsNotes ?? data.requirements.notes,
    },
    feeWaivers: data.feeWaivers.map((w, i) => ({
      ...w,
      eligibility: t.feeWaivers?.[i]?.eligibility ?? w.eligibility,
      howToClaim: t.feeWaivers?.[i]?.howToClaim ?? w.howToClaim,
    })),
  };
}
