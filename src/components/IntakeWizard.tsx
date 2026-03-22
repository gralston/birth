"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { IntakeAnswers, Circumstance } from "@/types";
import { US_STATES, US_TERRITORIES } from "@/data/usStates";
import { getStateData, getAvailableStates } from "@/data/states";
import { hasCountyData } from "@/data/countyOffices";
import { getCountyFromZip } from "@/lib/zipToCounty";

const BASE_STEPS = [
  "birthState",
  "zipCode",
  "reason",
  "circumstances",
] as const;

type StepName = (typeof BASE_STEPS)[number];

const REASON_KEYS = [
  { value: "voter-id", key: "reasonVoterId" },
  { value: "passport", key: "reasonPassport" },
  { value: "real-id", key: "reasonRealId" },
  { value: "employment", key: "reasonEmployment" },
  { value: "benefits", key: "reasonBenefits" },
  { value: "personal", key: "reasonPersonal" },
  { value: "other", key: "reasonOther" },
] as const;

const CIRCUMSTANCE_KEYS = [
  { value: "none" as Circumstance, key: "circNone" },
  { value: "no-id" as Circumstance, key: "circNoId" },
  { value: "homeless" as Circumstance, key: "circHomeless" },
  { value: "name-change" as Circumstance, key: "circNameChange" },
  { value: "adopted" as Circumstance, key: "circAdopted" },
  { value: "incarcerated" as Circumstance, key: "circIncarcerated" },
  { value: "born-before-records" as Circumstance, key: "circBornBefore" },
  { value: "transgender" as Circumstance, key: "circTransgender" },
] as const;

export default function IntakeWizard() {
  const t = useTranslations("Wizard");
  const tb = useTranslations("BornAbroad");
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [showBornAbroad, setShowBornAbroad] = useState(false);
  const [answers, setAnswers] = useState<Partial<IntakeAnswers>>({
    circumstances: [],
  });

  // Dynamically determine which steps to show based on state selection
  const steps = BASE_STEPS.filter((step) => {
    if (step === "zipCode") {
      return answers.birthState && hasCountyData(answers.birthState);
    }
    return true;
  });

  const stepName = steps[currentStep];

  function update(field: string, value: unknown) {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance(): boolean {
    switch (stepName) {
      case "birthState":
        return !!answers.birthState && !!getStateData(answers.birthState);
      case "reason":
        return !!answers.reason;
      case "zipCode":
        return !answers.zipCode || /^\d{5}$/.test(answers.zipCode);
      case "circumstances":
        return (answers.circumstances?.length ?? 0) > 0;
      default:
        return false;
    }
  }

  function next() {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      // Submit — encode answers as URL params
      // Derive hasId from circumstances: if they didn't check "no-id", they have ID
      const hasId = !answers.circumstances!.includes("no-id");
      const params = new URLSearchParams({
        state: answers.birthState!,
        hasId: String(hasId),
        reason: answers.reason!,
        circ: answers.circumstances!.join(","),
      });
      if (answers.zipCode) params.set("zip", answers.zipCode);
      router.push(`/results?${params.toString()}`);
    }
  }

  function back() {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }

  function toggleCircumstance(c: Circumstance) {
    const current = answers.circumstances || [];
    if (c === "none") {
      update("circumstances", ["none"]);
      return;
    }
    const filtered = current.filter((x) => x !== "none");
    if (filtered.includes(c)) {
      update(
        "circumstances",
        filtered.filter((x) => x !== c)
      );
    } else {
      update("circumstances", [...filtered, c]);
    }
  }

  if (showBornAbroad) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            {tb("title")}
          </h2>
          <p className="text-slate-500 mb-6">{tb("subtitle")}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <h3 className="font-semibold text-blue-800 mb-3">
              {tb("crbaTitle")}
            </h3>
            <p className="text-sm text-blue-700 mb-4">{tb("crbaDesc")}</p>
            <ul className="text-sm text-blue-700 space-y-2 list-disc list-outside ml-4 mb-4">
              <li>
                {tb.rich("applyOnline", {
                  link: () => (
                    <a
                      href="https://travel.state.gov/content/travel/en/records-and-authentications/requesting-a-vital-record/replace-amend-CRBA.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-900"
                    >
                      {tb("travelStateGov")}
                    </a>
                  ),
                })}
              </li>
              <li>{tb("fee")}</li>
              <li>{tb("neverRegistered")}</li>
              <li>{tb("parentsCitizens")}</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-slate-700 mb-2">
              {tb("notSureTitle")}
            </p>
            <p className="text-sm text-slate-600">{tb("notSureDesc")}</p>
          </div>
          <button
            onClick={() => setShowBornAbroad(false)}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2"
          >
            &larr; {tb("backToState")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Step content */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        {stepName === "birthState" && (
          <StepContainer
            title={t("birthStateTitle")}
            subtitle={t("birthStateSubtitle")}
          >
            <select
              value={answers.birthState || ""}
              onChange={(e) => update("birthState", e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{t("selectPlaceholder")}</option>
              <optgroup label={t("statesGroup")}>
                {US_STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label={t("territoriesGroup")}>
                {US_TERRITORIES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
            </select>
            <button
              onClick={() => setShowBornAbroad(true)}
              className="mt-3 py-2 text-sm text-slate-500 hover:text-blue-700 underline transition-colors"
            >
              {t("bornAbroad")}
            </button>
            {answers.birthState && !getStateData(answers.birthState) && (
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-semibold text-amber-800 mb-2">
                  {t("unsupportedTitle", {
                    state:
                      [...US_STATES, ...US_TERRITORIES].find(
                        (s) => s.code === answers.birthState
                      )?.name || answers.birthState,
                  })}
                </p>
                <p className="text-amber-700 text-sm mb-3">
                  {t("unsupportedList", {
                    list: getAvailableStates()
                      .map((s) => s.name)
                      .join(", "),
                  })}
                </p>
                <p className="text-amber-700 text-sm font-medium mb-2">
                  {t("unsupportedHelp")}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.cdc.gov/nchs/w2w/index.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {t("unsupportedCdc")}
                    </a>{" "}
                    {t("unsupportedCdcDesc")}
                  </li>
                  <li>
                    <a
                      href="https://www.vitalchek.com/v/birth-certificates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {t("unsupportedVitalchek")}
                    </a>{" "}
                    {t("unsupportedVitalchekDesc")}
                  </li>
                  <li>
                    <a
                      href="https://www.usa.gov/birth-certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {t("unsupportedUsagov")}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </StepContainer>
        )}

        {stepName === "zipCode" && (
          <StepContainer
            title={t("zipTitle")}
            subtitle={t("zipSubtitle", {
              state:
                [...US_STATES, ...US_TERRITORIES].find(
                  (s) => s.code === answers.birthState
                )?.name || "",
            })}
          >
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={5}
              value={answers.zipCode || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 5);
                update("zipCode", val);
              }}
              placeholder={t("zipPlaceholder")}
              className="w-full p-3 border border-slate-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {answers.zipCode &&
              answers.zipCode.length === 5 &&
              answers.birthState && (
                <div className="mt-3 text-sm text-slate-500">
                  {getCountyFromZip(answers.zipCode, answers.birthState)
                    ? t("zipCountyFound", {
                        county:
                          getCountyFromZip(
                            answers.zipCode,
                            answers.birthState
                          ) ?? "",
                      })
                    : t("zipCountyNotFound")}
                </div>
              )}
            <button
              onClick={next}
              className="mt-4 py-2 text-sm text-slate-400 hover:text-slate-600 underline"
            >
              {t("skipZip")}
            </button>
          </StepContainer>
        )}

        {stepName === "reason" && (
          <StepContainer
            title={t("reasonTitle")}
            subtitle={t("reasonSubtitle")}
          >
            <div className="space-y-3">
              {REASON_KEYS.map((r) => (
                <RadioOption
                  key={r.value}
                  selected={answers.reason === r.value}
                  onClick={() => update("reason", r.value)}
                  label={t(r.key)}
                />
              ))}
            </div>
          </StepContainer>
        )}

        {stepName === "circumstances" && (
          <StepContainer
            title={t("circumstancesTitle")}
            subtitle={t("circumstancesSubtitle")}
          >
            <div className="space-y-3">
              {CIRCUMSTANCE_KEYS.map((c) => (
                <CheckboxOption
                  key={c.value}
                  checked={answers.circumstances?.includes(c.value) || false}
                  onChange={() => toggleCircumstance(c.value)}
                  label={t(c.key)}
                />
              ))}
            </div>
          </StepContainer>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={back}
            disabled={currentStep === 0}
            className="px-6 py-3 text-slate-600 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            {t("back")}
          </button>
          <button
            onClick={next}
            disabled={!canAdvance()}
            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {currentStep === steps.length - 1 ? t("getPlan") : t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}

function StepContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-slate-500 mb-6">{subtitle}</p>
      {children}
    </div>
  );
}

function RadioOption({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
        selected
          ? "border-blue-600 bg-blue-50 text-blue-800"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected ? "border-blue-600" : "border-slate-300"
          }`}
        >
          {selected && <div className="w-3 h-3 rounded-full bg-blue-600" />}
        </div>
        <span className="font-medium">{label}</span>
      </div>
    </button>
  );
}

function CheckboxOption({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onChange}
      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
        checked
          ? "border-blue-600 bg-blue-50 text-blue-800"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded border flex items-center justify-center ${
            checked ? "bg-blue-600 border-blue-600" : "border-slate-300"
          }`}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <span className="font-medium">{label}</span>
      </div>
    </button>
  );
}
