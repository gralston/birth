import { ActionStep, CountyOffice, IntakeAnswers, RequestMethodOption, StateVitalRecords } from "@/types";
import { formatFee } from "@/lib/format";

type T = (key: string, params?: Record<string, string | number>) => string;

/**
 * Generate a personalized action plan based on user's intake answers
 * and the state's vital records data.
 *
 * Step order logic:
 *   1. Handle blockers (no ID, birth predates records)
 *   2. Fee waiver info
 *   3. Special circumstance prep (name change, adoption, etc.)
 *   4. Download and fill the application form
 *   5. Gather required documents
 *   6. Submit your request (the method step — online, mail, or in-person)
 *   7. State-specific notes
 *   8. What to do after you receive it
 */
export function generatePlan(
  answers: IntakeAnswers,
  stateData: StateVitalRecords,
  countyOffice: CountyOffice | undefined,
  t: T
): ActionStep[] {
  const steps: ActionStep[] = [];
  let order = 1;

  // --- BLOCKERS FIRST ---

  if (answers.circumstances.includes("born-abroad")) {
    steps.push({
      order: order++,
      title: t("bornAbroadTitle"),
      description: t("bornAbroadDesc"),
      critical: true,
      tips: [
        t("bornAbroadTip1"),
        t("bornAbroadTip2"),
        t("bornAbroadTip3"),
        t("bornAbroadTip4"),
        t("bornAbroadTip5"),
      ],
    });
  }

  if (answers.circumstances.includes("born-before-records")) {
    steps.push({
      order: order++,
      title: t("bornBeforeTitle"),
      description: t("bornBeforeDesc", {
        state: stateData.stateName,
        year: stateData.recordsAvailableFrom,
      }),
      critical: true,
      tips: [
        t("bornBeforeTip1"),
        t("bornBeforeTip2"),
        t("bornBeforeTip3", {
          office: stateData.office.name,
          phone: stateData.office.phone,
        }),
      ],
    });
  }

  if (!answers.hasGovernmentId || answers.circumstances.includes("no-id")) {
    steps.push({
      order: order++,
      title: t("noIdTitle"),
      description:
        stateData.noIdWorkaround ||
        t("noIdDesc", {
          office: stateData.office.name,
          phone: stateData.office.phone,
        }),
      critical: true,
      link: stateData.requirements.acceptableIdUrl
        ? {
            url: stateData.requirements.acceptableIdUrl,
            label: t("acceptableIdLink", { state: stateData.stateName }),
          }
        : undefined,
      tips: [
        t("noIdTip1"),
        t("noIdTip2"),
        t("noIdTip3"),
        t("noIdTip4"),
      ],
    });
  }

  // --- FEE WAIVERS ---

  const reasonWaivers = stateData.feeWaivers.filter(
    (w) => w.forReason && w.forReason === answers.reason
  );
  const circumstanceWaivers = stateData.feeWaivers.filter((w) => {
    if (w.forReason) return false;
    if (
      answers.circumstances.includes("homeless") &&
      w.eligibility.toLowerCase().includes("homeless")
    )
      return true;
    if (
      w.eligibility.toLowerCase().includes("veteran") ||
      w.eligibility.toLowerCase().includes("va purpose")
    )
      return true;
    if (
      answers.circumstances.includes("incarcerated") &&
      w.eligibility.toLowerCase().includes("incarcerat")
    )
      return true;
    return false;
  });

  if (reasonWaivers.length > 0) {
    steps.push({
      order: order++,
      title: t("feeWaivedTitle"),
      description: reasonWaivers
        .map((w) => `${w.howToClaim}${w.citation ? ` (${w.citation})` : ""}`)
        .join("\n\n"),
      critical: true,
    });
  }

  if (circumstanceWaivers.length > 0) {
    steps.push({
      order: order++,
      title: t("feeWaiverTitle"),
      description: circumstanceWaivers
        .map(
          (w) =>
            `${w.eligibility}: ${w.howToClaim}${w.citation ? ` (${w.citation})` : ""}`
        )
        .join("\n\n"),
      tips: [
        t("feeWaiverTip1"),
        t("feeWaiverTip2"),
      ],
    });
  }

  // --- SPECIAL CIRCUMSTANCES ---

  if (answers.circumstances.includes("name-change")) {
    steps.push({
      order: order++,
      title: t("nameChangeTitle"),
      description: t("nameChangeDesc"),
      tips: [
        t("nameChangeTip1"),
        t("nameChangeTip2"),
      ],
    });
  }

  if (answers.circumstances.includes("transgender")) {
    steps.push({
      order: order++,
      title: t("genderMarkerTitle"),
      description: t("genderMarkerDesc"),
      tips: [
        t("genderMarkerTip1", {
          office: stateData.office.name,
          phone: stateData.office.phone,
          state: stateData.stateName,
        }),
        t("genderMarkerTip2"),
        t("genderMarkerTip3"),
        t("genderMarkerTip4"),
      ],
    });
  }

  if (answers.circumstances.includes("adopted")) {
    steps.push({
      order: order++,
      title: t("adoptedTitle"),
      description: t("adoptedDesc"),
      tips: [
        t("adoptedTip1", {
          office: stateData.office.name,
          phone: stateData.office.phone,
          state: stateData.stateName,
        }),
        t("adoptedTip2"),
      ],
    });
  }

  if (answers.circumstances.includes("homeless")) {
    steps.push({
      order: order++,
      title: t("homelessTitle"),
      description: t("homelessDesc"),
      tips: [
        t("homelessTip1"),
        t("homelessTip2"),
        t("homelessTip3"),
        t("homelessTip4"),
      ],
    });
  }

  if (answers.circumstances.includes("incarcerated")) {
    steps.push({
      order: order++,
      title: t("incarceratedTitle"),
      description: t("incarceratedDesc"),
      tips: [
        t("incarceratedTip1"),
        t("incarceratedTip2"),
        t("incarceratedTip3"),
        t("incarceratedTip4", {
          office: stateData.office.name,
          phone: stateData.office.phone,
        }),
        t("incarceratedTip5"),
      ],
    });
  }

  // --- DOWNLOAD THE FORM ---

  if (stateData.applicationFormUrl) {
    steps.push({
      order: order++,
      title: t("downloadFormTitle"),
      description: t("downloadFormDesc", { state: stateData.stateName }),
      link: {
        url: stateData.applicationFormUrl,
        label: t("downloadFormLink"),
      },
      secondaryLink: stateData.applicationFormUrlEs
        ? { url: stateData.applicationFormUrlEs, label: t("formEsLink") }
        : undefined,
      tips: [
        t("downloadFormTip1"),
        t("downloadFormTip2"),
        t("downloadFormTip3"),
        t("downloadFormTip4"),
      ],
    });
  }

  // --- GATHER DOCUMENTS ---

  const gatherDescription = answers.hasGovernmentId
    ? t("gatherDocsDescWithId", {
        ids: stateData.requirements.primaryId.join(", "),
      })
    : t("gatherDocsDescWithoutId");

  steps.push({
    order: order++,
    title: t("gatherDocsTitle"),
    description: gatherDescription,
    link:
      answers.hasGovernmentId && stateData.requirements.acceptableIdUrl
        ? {
            url: stateData.requirements.acceptableIdUrl,
            label: t("acceptableIdLink", { state: stateData.stateName }),
          }
        : undefined,
    tips: [
      t("gatherDocsTip1"),
      t("gatherDocsTip2", {
        paymentMethods: stateData.fees.paymentMethods.join(", "),
      }),
    ],
  });

  // --- CHOOSE HOW TO SUBMIT ---

  const methodOptions: RequestMethodOption[] = [];

  if (stateData.requestMethods.inPerson) {
    const inPerson = stateData.requestMethods.inPerson;
    const inPersonContact = countyOffice
      ? {
          name: countyOffice.name,
          address: countyOffice.address,
          phone: countyOffice.phone,
          hours: countyOffice.hours,
          website: countyOffice.website,
        }
      : undefined;
    const inPersonFee = inPerson.fee ?? stateData.fees.certified;
    methodOptions.push({
      method: "inPerson",
      label: t("methodInPerson"),
      tag: answers.hasGovernmentId ? t("tagFastest") : t("tagRecommended"),
      cost: formatFee(inPersonFee),
      time: inPerson.processingTime,
      description: answers.hasGovernmentId
        ? t("inPersonDescWithId")
        : t("inPersonDescWithoutId"),
      contact: inPersonContact,
      link: inPerson.localOfficesUrl
        ? { url: inPerson.localOfficesUrl, label: t("findLocalOffice") }
        : undefined,
      tips: [
        ...(inPerson.notes ? [inPerson.notes] : []),
        ...(!answers.hasGovernmentId ? [t("inPersonTipNoId")] : []),
        ...(countyOffice
          ? [t("inPersonTipCounty", { office: stateData.office.name })]
          : []),
      ],
    });
  }

  if (stateData.requestMethods.online && answers.hasGovernmentId) {
    const online = stateData.requestMethods.online;
    const onlineFee = online.fee ?? stateData.fees.certified;
    const totalCost = online.additionalFee
      ? t("serviceFee", { base: formatFee(onlineFee), extra: formatFee(online.additionalFee) })
      : formatFee(onlineFee);
    methodOptions.push({
      method: "online",
      label: t("methodOnline"),
      tag: t("tagMostConvenient"),
      cost: totalCost,
      time: t("onlineTime"),
      description:
        online.provider === "vitalchek"
          ? t("onlineDescVitalchek")
          : t("onlineDescState", { state: stateData.stateName }),
      link: { url: online.url, label: t("goToOnlineOrdering") },
      secondaryLink: online.vendorListUrl
        ? { url: online.vendorListUrl, label: t("seeAllVendors") }
        : undefined,
      tips: [
        ...(online.notes ? [online.notes] : []),
        ...(online.additionalFee
          ? [t("onlineTipFee", { fee: formatFee(online.additionalFee) })]
          : []),
        ...(online.vendorListUrl
          ? [t("onlineTipVendors")]
          : []),
      ],
    });
  }

  if (stateData.requestMethods.mail) {
    const mail = stateData.requestMethods.mail;
    const mailFee = mail.fee ?? stateData.fees.certified;
    methodOptions.push({
      method: "mail",
      label: t("methodByMail"),
      tag: t("tagCheapest"),
      cost: formatFee(mailFee),
      time: mail.processingTime,
      description: answers.hasGovernmentId
        ? t("mailDescWithId")
        : t("mailDescWithoutId"),
      contact: {
        address: mail.address,
        phone: stateData.office.phone,
      },
      tips: [
        ...(mail.notes ? [mail.notes] : []),
        t("mailTipCertified"),
        ...(!answers.hasGovernmentId ? [t("mailTipCallFirst")] : []),
      ],
    });
  }

  steps.push({
    order: order++,
    title: t("submitTitle"),
    description: t("submitDesc"),
    methodOptions,
    tips: [
      t("submitTip1"),
      t("submitTip2"),
    ],
  });

  // --- STATE-SPECIFIC NOTES ---

  if (stateData.specialNotes && stateData.specialNotes.length > 0) {
    steps.push({
      order: order++,
      title: t("stateNotesTitle", { state: stateData.stateName }),
      description: stateData.specialNotes.join("\n\n"),
    });
  }

  // --- GET YOUR SOCIAL SECURITY CARD (for no-ID users) ---

  const needsSSCard =
    !answers.hasGovernmentId &&
    (answers.reason === "voter-id" ||
      answers.reason === "real-id" ||
      answers.reason === "employment" ||
      answers.reason === "benefits");

  if (needsSSCard) {
    steps.push({
      order: order++,
      title: t("ssCardTitle"),
      description: t("ssCardDesc"),
      tips: [
        t("ssCardTip1"),
        t("ssCardTip2"),
        t("ssCardTip3"),
        t("ssCardTip4"),
        t("ssCardTip5"),
      ],
    });
  }

  // --- AFTER YOU RECEIVE IT ---

  steps.push({
    order: order++,
    title: needsSSCard ? t("getStateIdTitle") : t("afterReceiveTitle"),
    description: needsSSCard
      ? t("getStateIdDesc") +
        "\n\n" +
        getNextStepsByReason(answers.reason, answers.hasGovernmentId, t)
      : getNextStepsByReason(answers.reason, answers.hasGovernmentId, t),
    tips: undefined,
  });

  return steps;
}

function getNextStepsByReason(
  reason: IntakeAnswers["reason"],
  hasId: boolean,
  t: T
): string {
  if (!hasId) {
    switch (reason) {
      case "voter-id":
        return t("nextVoterIdNoId");
      case "real-id":
        return t("nextRealIdNoId");
      case "passport":
        return t("nextPassportNoId");
      case "employment":
        return t("nextEmploymentNoId");
      case "benefits":
        return t("nextBenefitsNoId");
      default:
        return t("nextDefaultNoId");
    }
  }

  switch (reason) {
    case "voter-id":
      return t("nextVoterIdWithId");
    case "passport":
      return t("nextPassportWithId");
    case "real-id":
      return t("nextRealIdWithId");
    case "employment":
      return t("nextEmploymentWithId");
    case "benefits":
      return t("nextBenefitsWithId");
    default:
      return t("nextDefaultWithId");
  }
}
