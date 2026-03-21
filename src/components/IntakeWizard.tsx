"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IntakeAnswers, Circumstance } from "@/types";
import { US_STATES } from "@/data/usStates";
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

const REASONS = [
  { value: "voter-id", label: "Get a voter ID" },
  { value: "passport", label: "Apply for a passport" },
  { value: "real-id", label: "Get a REAL ID" },
  { value: "employment", label: "Employment verification" },
  { value: "benefits", label: "Apply for benefits" },
  { value: "personal", label: "Personal records" },
  { value: "other", label: "Other" },
] as const;

const CIRCUMSTANCES = [
  { value: "none" as Circumstance, label: "None of these apply" },
  {
    value: "no-id" as Circumstance,
    label: "I have no government-issued ID at all",
  },
  {
    value: "homeless" as Circumstance,
    label: "I am experiencing homelessness",
  },
  { value: "name-change" as Circumstance, label: "My name has changed" },
  { value: "adopted" as Circumstance, label: "I was adopted" },
  {
    value: "incarcerated" as Circumstance,
    label: "I am or was recently incarcerated",
  },
  {
    value: "born-before-records" as Circumstance,
    label: "I was born before modern record-keeping",
  },
  {
    value: "transgender" as Circumstance,
    label: "I need to update the gender marker",
  },
] as const;

export default function IntakeWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
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
      const params = new URLSearchParams({
        state: answers.birthState!,
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

  return (
    <div className="max-w-lg mx-auto">
      {/* Step content */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        {stepName === "birthState" && (
          <StepContainer
            title="Where were you born?"
            subtitle="Select the US state or territory where you were born."
          >
            <select
              value={answers.birthState || ""}
              onChange={(e) => update("birthState", e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a state...</option>
              {US_STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
            {answers.birthState && !getStateData(answers.birthState) && (
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-semibold text-amber-800 mb-2">
                  We don&apos;t have a detailed guide for{" "}
                  {US_STATES.find((s) => s.code === answers.birthState)?.name ||
                    answers.birthState}{" "}
                  yet.
                </p>
                <p className="text-amber-700 text-sm mb-3">
                  We currently support:{" "}
                  {getAvailableStates()
                    .map((s) => s.name)
                    .join(", ")}
                  . More states coming soon.
                </p>
                <p className="text-amber-700 text-sm font-medium mb-2">
                  In the meantime, these resources can help:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.cdc.gov/nchs/w2w/index.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      CDC &quot;Where to Write&quot; Directory
                    </a>{" "}
                    — find your state&apos;s vital records office
                  </li>
                  <li>
                    <a
                      href="https://www.vitalchek.com/v/birth-certificates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      VitalChek
                    </a>{" "}
                    — order online (service fees apply)
                  </li>
                  <li>
                    <a
                      href="https://www.usa.gov/birth-certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      USAGov Birth Certificate Guide
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </StepContainer>
        )}

        {stepName === "zipCode" && (
          <StepContainer
            title="What's your zip code?"
            subtitle={`${US_STATES.find((s) => s.code === answers.birthState)?.name || "Your state"} has local offices that can issue birth certificates — often same-day. We'll find the one nearest you.`}
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
              placeholder="e.g. 90210"
              className="w-full p-3 border border-slate-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {answers.zipCode && answers.zipCode.length === 5 && answers.birthState && (
              <div className="mt-3 text-sm text-slate-500">
                {getCountyFromZip(answers.zipCode, answers.birthState)
                  ? `We'll show you the ${getCountyFromZip(answers.zipCode, answers.birthState)} County office on your results page.`
                  : "We'll show you all available local offices on your results page."}
              </div>
            )}
            <button
              onClick={next}
              className="mt-4 text-sm text-slate-400 hover:text-slate-600 underline"
            >
              Skip — just show me the state office
            </button>
          </StepContainer>
        )}


        {stepName === "reason" && (
          <StepContainer
            title="Why do you need a birth certificate?"
            subtitle="This helps us tailor your action plan."
          >
            <div className="space-y-3">
              {REASONS.map((r) => (
                <RadioOption
                  key={r.value}
                  selected={answers.reason === r.value}
                  onClick={() => update("reason", r.value)}
                  label={r.label}
                />
              ))}
            </div>
          </StepContainer>
        )}

        {stepName === "circumstances" && (
          <StepContainer
            title="Do any of these apply to you?"
            subtitle="Select all that apply. This helps us find fee waivers and special resources."
          >
            <div className="space-y-3">
              {CIRCUMSTANCES.map((c) => (
                <CheckboxOption
                  key={c.value}
                  checked={answers.circumstances?.includes(c.value) || false}
                  onChange={() => toggleCircumstance(c.value)}
                  label={c.label}
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
            Back
          </button>
          <button
            onClick={next}
            disabled={!canAdvance()}
            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {currentStep === steps.length - 1 ? "Get My Plan" : "Next"}
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
            checked
              ? "bg-blue-600 border-blue-600"
              : "border-slate-300"
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
