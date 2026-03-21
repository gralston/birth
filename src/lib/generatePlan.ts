import { ActionStep, CountyOffice, IntakeAnswers, RequestMethodOption, StateVitalRecords } from "@/types";
import { formatFee } from "@/lib/format";

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
  countyOffice?: CountyOffice
): ActionStep[] {
  const steps: ActionStep[] = [];
  let order = 1;

  // --- BLOCKERS FIRST ---

  if (answers.circumstances.includes("born-abroad")) {
    steps.push({
      order: order++,
      title: "You May Need a Consular Report of Birth, Not a State Certificate",
      description:
        "If you are a US citizen born outside the United States, your birth was not recorded by any US state. Instead, you need a Consular Report of Birth Abroad (FS-240 or DS-1350) from the US Department of State.",
      critical: true,
      tips: [
        "If your birth was registered with a US embassy or consulate, request a replacement FS-240 from the US Department of State.",
        "Apply online at travel.state.gov or call 1-888-407-4747.",
        "Fee: $50 for a replacement Consular Report of Birth Abroad.",
        "If your birth was never registered with a US consulate, you may need to apply for a Certificate of Citizenship (Form N-600) through USCIS.",
        "If one or both parents were US citizens at the time of your birth, you may still qualify for a CRBA — contact the nearest US embassy.",
      ],
    });
  }

  if (answers.circumstances.includes("born-before-records")) {
    steps.push({
      order: order++,
      title: "Your Birth May Predate State Records",
      description: `${stateData.stateName} state records begin in ${stateData.recordsAvailableFrom}. If you were born before then, your birth record may not be in the state system.`,
      critical: true,
      tips: [
        "Contact the county clerk or registrar in the county where you were born — they may have earlier records.",
        "You may need to file for a 'delayed birth certificate,' which requires supporting evidence (census records, hospital records, baptismal records, school records, family bibles, affidavits from relatives).",
        `Contact ${stateData.office.name} at ${stateData.office.phone} for guidance on delayed registration.`,
      ],
    });
  }

  if (!answers.hasGovernmentId || answers.circumstances.includes("no-id")) {
    const noIdTips = [
      "This is the most common barrier — you're not alone.",
      "Ask specifically about alternative verification options.",
      "A social worker, homeless services provider, or legal aid organization may be able to help vouch for your identity.",
      "Some states allow a notarized statement from someone who can verify your identity.",
    ];
    steps.push({
      order: order++,
      title: "Address the ID Situation First",
      description:
        stateData.noIdWorkaround ||
        `Contact ${stateData.office.name} at ${stateData.office.phone} to discuss options for requesting a birth certificate without a government-issued photo ID. Many states accept alternative forms of identification.`,
      critical: true,
      link: stateData.requirements.acceptableIdUrl
        ? { url: stateData.requirements.acceptableIdUrl, label: `See ${stateData.stateName}'s full list of acceptable IDs` }
        : undefined,
      tips: noIdTips,
    });
  }

  // --- FEE WAIVERS ---

  // Separate reason-specific waivers (e.g., free birth cert for voter ID)
  // from general circumstance-based waivers
  const reasonWaivers = stateData.feeWaivers.filter(
    (w) => w.forReason && w.forReason === answers.reason
  );
  const circumstanceWaivers = stateData.feeWaivers.filter((w) => {
    if (w.forReason) return false; // handled above
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

  // Reason-specific waivers get their own prominent step
  if (reasonWaivers.length > 0) {
    steps.push({
      order: order++,
      title: "Your Birth Certificate Fee Is Waived",
      description: reasonWaivers
        .map((w) => `${w.howToClaim}${w.citation ? ` (${w.citation})` : ""}`)
        .join("\n\n"),
      critical: true,
    });
  }

  // General circumstance-based waivers
  if (circumstanceWaivers.length > 0) {
    steps.push({
      order: order++,
      title: "You May Qualify for a Fee Waiver",
      description: circumstanceWaivers
        .map(
          (w) =>
            `${w.eligibility}: ${w.howToClaim}${w.citation ? ` (${w.citation})` : ""}`
        )
        .join("\n\n"),
      tips: [
        "Apply for the fee waiver BEFORE submitting your application to avoid paying unnecessarily.",
        "Keep documentation of your eligibility (e.g., letter from shelter, VA documentation).",
      ],
    });
  }

  // --- SPECIAL CIRCUMSTANCES ---

  if (answers.circumstances.includes("name-change")) {
    steps.push({
      order: order++,
      title: "Prepare Name Change Documentation",
      description:
        "Since your name has changed from what appears on your birth certificate, you'll need documentation linking your current legal name to your birth name.",
      tips: [
        "Acceptable documents: marriage certificate, divorce decree, court order for name change.",
        "You may need certified copies of these documents — not photocopies.",
      ],
    });
  }

  if (answers.circumstances.includes("transgender")) {
    steps.push({
      order: order++,
      title: "Updating the Gender Marker on Your Birth Certificate",
      description:
        "The process to amend the gender marker on a birth certificate varies significantly by state. Some states allow it with a simple form, others require a court order, and a few do not allow changes.",
      tips: [
        `Contact ${stateData.office.name} at ${stateData.office.phone} for ${stateData.stateName}'s specific requirements.`,
        "The National Center for Transgender Equality (transequality.org/documents) maintains a state-by-state guide to updating identity documents.",
        "Lambda Legal (lambdalegal.org) can provide legal assistance if you encounter difficulties.",
        "Note: you may want to get your current birth certificate first, then apply for the amendment as a separate step.",
      ],
    });
  }

  if (answers.circumstances.includes("adopted")) {
    steps.push({
      order: order++,
      title: "Note for Adopted Individuals",
      description:
        "As an adopted person, you will receive your amended birth certificate (showing your adoptive parents). Access to your original birth certificate varies by state.",
      tips: [
        `Contact ${stateData.office.name} at ${stateData.office.phone} for information on adoptee birth certificate access in ${stateData.stateName}.`,
        "Organizations like the Adoptee Rights Law Center (adopteerightslaw.com) can provide state-specific guidance.",
      ],
    });
  }

  if (answers.circumstances.includes("homeless")) {
    steps.push({
      order: order++,
      title: "Resources for People Experiencing Homelessness",
      description:
        "Several organizations can help you obtain your birth certificate at no cost and assist with the ID catch-22.",
      tips: [
        "Contact a local homeless services provider or shelter — they may be able to request your certificate on your behalf.",
        "Spread the Vote (spreadthevote.org) helps people without ID in 20 states.",
        "VoteRiders (voteriders.org) provides free assistance with ID and birth certificates for voting purposes.",
        "Ask about the SchoolhouseConnection 'I Am Here' legal hotline for youth.",
      ],
    });
  }

  if (answers.circumstances.includes("incarcerated")) {
    steps.push({
      order: order++,
      title: "Requesting a Birth Certificate While Incarcerated",
      description:
        "You can request your birth certificate from a correctional facility, though the process may take longer. Many facilities have social workers or reentry coordinators who can help.",
      tips: [
        "Ask your facility's social worker, case manager, or reentry coordinator for help with the application.",
        "Some states allow the facility to submit the request on your behalf.",
        "Legal aid organizations that serve incarcerated people can often assist — ask your facility's law library for contacts.",
        `Contact ${stateData.office.name} at ${stateData.office.phone} to ask about their process for incarcerated applicants.`,
        "Many reentry programs include birth certificate assistance — ask about available programs before release.",
      ],
    });
  }

  // --- DOWNLOAD THE FORM ---

  if (stateData.applicationFormUrl) {
    steps.push({
      order: order++,
      title: "Download and Complete the Application Form",
      description: `Download the official ${stateData.stateName} birth certificate application form and fill it out completely.\n\nYou'll need to know:\n• Your full name at birth (before any name changes)\n• Date of birth\n• City and county of birth\n• Mother's full maiden name\n• Father's full name (if listed on the certificate)\n• Your current mailing address\n• Purpose for requesting the certificate`,
      link: {
        url: stateData.applicationFormUrl,
        label: "Download application form (PDF)",
      },
      secondaryLink: stateData.applicationFormUrlEs
        ? { url: stateData.applicationFormUrlEs, label: "Formulario en español (PDF)" }
        : undefined,
      tips: [
        "Fill out every field — incomplete applications cause delays.",
        "If you're unsure of exact details (like county of birth), enter your best guess — the office can often look it up.",
        "If your name has changed, include the name change documentation you gathered.",
        "Sign and date the form.",
      ],
    });
  }

  // --- GATHER DOCUMENTS ---

  const gatherDescription = answers.hasGovernmentId
    ? `You'll need one of the following: ${stateData.requirements.primaryId.join(", ")}. Make a clear photocopy to include with your application.`
    : `Gather the alternative ID documents described above (you'll need at least two). Also prepare your payment and completed application form.`;

  steps.push({
    order: order++,
    title: "Gather Your Required Documents",
    description: gatherDescription,
    link: answers.hasGovernmentId && stateData.requirements.acceptableIdUrl
      ? { url: stateData.requirements.acceptableIdUrl, label: `See ${stateData.stateName}'s full list of acceptable IDs` }
      : undefined,
    tips: [
      "Photocopies must be legible — if the copy is blurry, your application may be rejected.",
      `Payment methods accepted: ${stateData.fees.paymentMethods.join(", ")}.`,
    ],
  });

  // --- CHOOSE HOW TO SUBMIT ---

  const methodOptions: RequestMethodOption[] = [];

  if (stateData.requestMethods.inPerson) {
    const inPerson = stateData.requestMethods.inPerson;
    // Only show contact details when we have a specific local office.
    // The state office address is often a PO Box and not useful for walk-ins.
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
      label: "In Person",
      tag: answers.hasGovernmentId ? "Fastest" : "Recommended",
      cost: formatFee(inPersonFee),
      time: inPerson.processingTime,
      description: answers.hasGovernmentId
        ? `Bring your completed application, ID, and payment.`
        : `Going in person lets you talk to staff about alternative ID options.`,
      contact: inPersonContact,
      link: inPerson.localOfficesUrl
        ? { url: inPerson.localOfficesUrl, label: "Find a local office near you" }
        : undefined,
      tips: [
        ...(inPerson.notes ? [inPerson.notes] : []),
        ...(!answers.hasGovernmentId
          ? ["Best option when you don't have a photo ID — staff can help you find a solution."]
          : []),
        ...(countyOffice
          ? [`This is your local office based on your zip code. The ${stateData.office.name} also accepts requests.`]
          : []),
      ],
    });
  }

  // Only show online if user has ID — VitalChek and most state portals
  // require government-issued photo ID for identity verification.
  if (stateData.requestMethods.online && answers.hasGovernmentId) {
    const online = stateData.requestMethods.online;
    const onlineFee = online.fee ?? stateData.fees.certified;
    const totalCost = online.additionalFee
      ? `${formatFee(onlineFee)} + ${formatFee(online.additionalFee)} service fee`
      : formatFee(onlineFee);
    methodOptions.push({
      method: "online",
      label: "Online",
      tag: "Most Convenient",
      cost: totalCost,
      time: "5–10 business days typical",
      description: online.provider === "vitalchek"
        ? `Order through VitalChek, an authorized online vendor.`
        : `Order through ${stateData.stateName}'s online portal.`,
      link: { url: online.url, label: "Go to online ordering" },
      tips: [
        ...(online.notes ? [online.notes] : []),
        ...(online.additionalFee
          ? [`VitalChek charges a ${formatFee(online.additionalFee)} service fee on top of the state fee.`]
          : []),
        ...(online.vendorListUrl
          ? [`See all authorized vendors at ${online.vendorListUrl}`]
          : []),
      ],
    });
  }

  if (stateData.requestMethods.mail) {
    const mail = stateData.requestMethods.mail;
    const mailFee = mail.fee ?? stateData.fees.certified;
    methodOptions.push({
      method: "mail",
      label: "By Mail",
      tag: "Cheapest",
      cost: formatFee(mailFee),
      time: mail.processingTime,
      description: answers.hasGovernmentId
        ? `Mail your completed application, a photocopy of your ID, and payment.`
        : `Mail your completed application, alternative ID documentation, and payment.`,
      contact: {
        address: mail.address,
        phone: stateData.office.phone,
      },
      tips: [
        ...(mail.notes ? [mail.notes] : []),
        "Send by certified mail so you have a tracking number.",
        ...(!answers.hasGovernmentId
          ? ["Call first to confirm what alternative documentation they accept by mail."]
          : []),
      ],
    });
  }

  steps.push({
    order: order++,
    title: "Choose How to Submit Your Request",
    description: "You have your documents ready. Now pick the method that works best for you:",
    methodOptions,
    tips: [
      "Consider ordering 2–3 certified copies — many processes require an original certified copy, not a photocopy.",
      "Store your birth certificate in a safe, dry place (fireproof safe or safe deposit box).",
    ],
  });

  // --- STATE-SPECIFIC NOTES ---

  if (stateData.specialNotes && stateData.specialNotes.length > 0) {
    steps.push({
      order: order++,
      title: `Important Notes for ${stateData.stateName}`,
      description: stateData.specialNotes.join("\n\n"),
    });
  }

  // --- GET YOUR SOCIAL SECURITY CARD (for no-ID users) ---

  const needsSSCard = !answers.hasGovernmentId && (
    answers.reason === "voter-id" ||
    answers.reason === "real-id" ||
    answers.reason === "employment" ||
    answers.reason === "benefits"
  );

  if (needsSSCard) {
    steps.push({
      order: order++,
      title: "Next: Get a Replacement Social Security Card",
      description:
        "You'll need your Social Security card for the next step (getting a state ID). " +
        "Now that you have your birth certificate, you can request a replacement SS card from the Social Security Administration.",
      tips: [
        "Visit your local Social Security office with your birth certificate. Find your nearest office at ssa.gov/locator.",
        "You can also apply online at ssa.gov/myaccount if you can create an account.",
        "A replacement Social Security card is FREE — there is no fee.",
        "You're allowed up to 3 replacement cards per year and 10 in your lifetime.",
        "Processing takes 10–14 business days by mail. Some offices can verify your number on the spot.",
      ],
    });
  }

  // --- AFTER YOU RECEIVE IT ---

  steps.push({
    order: order++,
    title: needsSSCard
      ? "Get Your State ID"
      : "After You Receive Your Birth Certificate",
    description: needsSSCard
      ? "Once you have both your birth certificate and Social Security card, you're ready for the final step."
        + "\n\n"
        + getNextStepsByReason(answers.reason, answers.hasGovernmentId)
      : getNextStepsByReason(answers.reason, answers.hasGovernmentId),
    tips: undefined,
  });

  return steps;
}

function getNextStepsByReason(reason: IntakeAnswers["reason"], hasId: boolean): string {
  if (!hasId) {
    // No-ID path: guide them through the full document chain
    switch (reason) {
      case "voter-id":
        return "You're building your way to a voter ID:\n\n1. Birth certificate — done!\n2. Social Security card — visit your local SSA office (free)\n3. State photo ID — visit your DMV with your birth certificate, Social Security card, and proof of address (utility bill, bank statement, or shelter letter)";
      case "real-id":
        return "You're building your way to a REAL ID:\n\n1. Birth certificate — done!\n2. Social Security card — visit your local SSA office (free)\n3. REAL ID — visit your DMV with your birth certificate, Social Security card, and two proofs of address";
      case "passport":
        return "You can apply for a US passport using your birth certificate — no state ID required:\n\n1. Birth certificate — done!\n2. Find your nearest passport acceptance facility at travel.state.gov\n3. Bring your birth certificate, a passport photo, and a witness who can verify your identity";
      case "employment":
        return "Your birth certificate is a List C document for Form I-9 employment verification:\n\n1. Birth certificate — done!\n2. Social Security card (also List C) — visit your local SSA office (free)\n3. Check with your employer about accepted document combinations";
      case "benefits":
        return "You can now use your birth certificate to apply for benefits:\n\n1. Birth certificate — done!\n2. For Social Security benefits — bring your birth certificate to your local SSA office\n3. For Medicaid and other programs — contact the specific agency to confirm what documents they need";
      default:
        return "You now have your birth certificate — a critical foundation document. From here:\n\n1. Birth certificate — done!\n2. Social Security card — visit ssa.gov or your local SSA office (free)\n3. State ID — visit your DMV with your birth certificate and Social Security card\n4. Passport — apply at travel.state.gov with your birth certificate and photo ID";
    }
  }

  switch (reason) {
    case "voter-id":
      return "Next steps to get your voter ID:\n\n1. Birth certificate — done!\n2. Visit your state's DMV or ID-issuing office with your birth certificate, Social Security card, and proof of address";
    case "passport":
      return "Next steps to get your passport:\n\n1. Birth certificate — done!\n2. Find your nearest passport acceptance facility at travel.state.gov\n3. Bring your birth certificate, a passport photo, and proof of identity";
    case "real-id":
      return "Next steps to get your REAL ID:\n\n1. Birth certificate — done!\n2. Visit your state's DMV with your birth certificate, Social Security card, and two proofs of address";
    case "employment":
      return "Your certified birth certificate can be used as a List C document for Form I-9 employment verification. Bring it to your employer along with other required documents.";
    case "benefits":
      return "You can now use your birth certificate to apply for benefits. Contact the specific agency (Social Security, Medicaid, etc.) to confirm what additional documents they require.";
    default:
      return "Keep your certified birth certificate in a safe place. It can be used for many purposes including ID applications, passport applications, benefits enrollment, and more.";
  }
}
