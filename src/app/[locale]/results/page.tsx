"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IntakeAnswers, Circumstance, CountyOffice } from "@/types";
import { getStateData, getAvailableStates } from "@/data/states";
import { generatePlan } from "@/lib/generatePlan";
import { findCountyOffice, hasCountyData } from "@/data/countyOffices";
import { getCountyFromZip } from "@/lib/zipToCounty";
import { getFeedbackUrl } from "@/lib/feedback";
import { formatFee } from "@/lib/format";
import { localizeStateData } from "@/lib/localizeStateData";

function ResultsContent() {
  const params = useSearchParams();
  const t = useTranslations("Results");
  const tc = useTranslations("Common");
  const tp = useTranslations("Plan");
  const locale = useLocale();

  const stateCode = params.get("state") || "";
  const rawStateData = getStateData(stateCode);
  const stateData = rawStateData ? localizeStateData(rawStateData, locale) : undefined;
  const availableStates = getAvailableStates();

  // Parse answers from URL
  const answers: IntakeAnswers = {
    birthState: stateCode,
    hasGovernmentId: params.get("hasId") === "true",
    reason: (params.get("reason") || "personal") as IntakeAnswers["reason"],
    zipCode: params.get("zip") || undefined,
    circumstances: (params.get("circ") || "none").split(",") as Circumstance[],
  };

  // Look up county office if zip provided
  let countyOffice: CountyOffice | undefined;
  let countyName: string | undefined;
  if (answers.zipCode && stateCode) {
    countyName = getCountyFromZip(answers.zipCode, stateCode);
    if (countyName) {
      countyOffice = findCountyOffice(stateCode, countyName);
    }
  }

  // If state not in our database yet
  if (!stateData) {
    const stateName =
      availableStates.find((s) => s.code === stateCode)?.name || stateCode;
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4">
            {stateName
              ? t("notFoundTitle", { state: stateName })
              : t("notFoundState")}
          </h2>
          <p className="text-amber-700 mb-6">
            {t("notFoundGuides", {
              list: availableStates.map((s) => s.name).join(", "),
            })}
          </p>
          <p className="text-amber-700 mb-6">
            {t("notFoundHelp")}
          </p>
          <div className="space-y-4 text-left max-w-md mx-auto">
            <ResourceLink
              href="https://www.cdc.gov/nchs/w2w/index.htm"
              label={t("notFoundCdc")}
              desc={t("notFoundCdcDesc")}
            />
            <ResourceLink
              href="https://www.vitalchek.com/v/birth-certificates"
              label={t("notFoundVitalchek")}
              desc={t("notFoundVitalchekDesc")}
            />
            <ResourceLink
              href="https://www.usa.gov/birth-certificate"
              label={t("notFoundUsagov")}
              desc={t("notFoundUsagovDesc")}
            />
            <ResourceLink
              href="https://www.spreadthevote.org"
              label={t("notFoundSpread")}
              desc={t("notFoundSpreadDesc")}
            />
          </div>
        </div>
        <Link
          href="/intake"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {t("startOver")}
        </Link>
      </div>
    );
  }

  const plan = generatePlan(answers, stateData, countyOffice, tp);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-blue-800 text-white rounded-xl p-6 sm:p-8 mb-8">
        <h2 className="text-2xl font-bold mb-2">
          {t("yourPlan", { state: stateData.stateName })}
        </h2>
        <p className="text-blue-100">
          {answers.hasGovernmentId
            ? t("stepsWithId", { count: plan.length })
            : t("stepsWithoutId", { count: plan.length })}
          {stateData.feeWaivers.some((w) => w.forReason === answers.reason)
            ? ` ${t("feeWaived")}`
            : stateData.fees.certified
              ? ` ${t("fee", { fee: formatFee(stateData.fees.certified) })}`
              : ``}
        </p>
      </div>

      {/* Local County Office */}
      {countyOffice && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 text-lg mb-1">
                {t("nearestOffice", { name: countyOffice.name })}
              </h3>
              <p className="text-green-700 text-sm mb-3">
                {t("nearestOfficeDesc")}
              </p>
              <div className="space-y-1 text-sm text-green-700">
                <p>
                  <span className="font-medium">{t("address")}:</span>{" "}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(countyOffice.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-green-900"
                  >
                    {countyOffice.address}
                  </a>{" "}
                  ({t("directions")})
                </p>
                <p>
                  <span className="font-medium">{t("phone")}:</span>{" "}
                  <a
                    href={`tel:${countyOffice.phone.replace(/[^\d+]/g, "")}`}
                    className="underline hover:text-green-900"
                  >
                    {countyOffice.phone}
                  </a>
                </p>
                {countyOffice.hours && (
                  <p>
                    <span className="font-medium">{t("hours")}:</span>{" "}
                    {countyOffice.hours}
                  </p>
                )}
                {countyOffice.website && (
                  <p>
                    <a
                      href={countyOffice.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 font-medium underline hover:text-green-900"
                    >
                      {t("visitWebsite")} &rarr;
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No county match but state has county offices */}
      {!countyOffice &&
        hasCountyData(stateCode) &&
        answers.zipCode &&
        countyName && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-800 font-medium">
              {t("countyNoDetails", { county: countyName })}
            </p>
          </div>
        )}

      {/* Action Steps */}
      <div className="space-y-4 mb-8">
        {plan.map((step) => (
          <div
            key={step.order}
            className={`bg-white rounded-xl border p-6 ${
              step.critical ? "border-red-300 bg-red-50" : "border-slate-200"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  step.critical
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {step.order}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <div className="text-slate-600 whitespace-pre-line mb-3">
                  {step.description}
                </div>

                {/* Method comparison cards */}
                {step.methodOptions && step.methodOptions.length > 0 && (
                  <div
                    className={`grid gap-3 my-4 ${
                      step.methodOptions.length === 3
                        ? "sm:grid-cols-3"
                        : step.methodOptions.length === 2
                          ? "sm:grid-cols-2"
                          : ""
                    }`}
                  >
                    {step.methodOptions.map((opt) => {
                      const tagStyle =
                        opt.method === "inPerson"
                          ? "bg-green-100 text-green-700"
                          : opt.method === "online"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700";
                      return (
                        <div
                          key={opt.method}
                          className="border border-slate-200 rounded-lg p-4 flex flex-col"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-800">
                              {opt.label}
                            </span>
                            <span
                              className={`text-xs font-medium px-2 py-0.5 rounded-full ${tagStyle}`}
                            >
                              {opt.tag}
                            </span>
                          </div>
                          <div className="flex gap-3 text-sm text-slate-500 mb-3">
                            <span>{opt.cost}</span>
                            <span className="text-slate-300">|</span>
                            <span>{opt.time}</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-3">
                            {opt.description}
                          </p>

                          {/* Contact details */}
                          {opt.contact && (
                            <div className="text-xs text-slate-500 space-y-1 mb-3 bg-slate-50 rounded p-3">
                              {opt.contact.name && (
                                <p className="font-medium text-slate-600">
                                  {opt.contact.name}
                                </p>
                              )}
                              {opt.contact.address && (
                                <p>{opt.contact.address}</p>
                              )}
                              {opt.contact.phone && (
                                <p>
                                  <a
                                    href={`tel:${opt.contact.phone.replace(/[^\d+]/g, "")}`}
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    {opt.contact.phone}
                                  </a>
                                </p>
                              )}
                              {opt.contact.hours && (
                                <p>{opt.contact.hours}</p>
                              )}
                              {opt.contact.website && (
                                <p>
                                  <a
                                    href={opt.contact.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    {tc("website")} &rarr;
                                  </a>
                                </p>
                              )}
                            </div>
                          )}

                          {opt.link && (
                            <a
                              href={opt.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-center bg-blue-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors mb-2"
                            >
                              {opt.link.label} &rarr;
                            </a>
                          )}
                          {opt.secondaryLink && (
                            <a
                              href={opt.secondaryLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-center text-blue-600 hover:text-blue-800 text-xs font-medium mb-2"
                            >
                              {opt.secondaryLink.label} &rarr;
                            </a>
                          )}
                          {opt.tips && opt.tips.length > 0 && (
                            <ul className="text-xs text-slate-500 space-y-1 mt-auto pt-2 border-t border-slate-100 list-disc list-outside ml-3">
                              {opt.tips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Meta info */}
                <div className="flex flex-wrap gap-3 mb-3">
                  {step.cost && (
                    <span className="inline-flex items-center text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {t("cost", { cost: step.cost })}
                    </span>
                  )}
                  {step.estimatedTime && (
                    <span className="inline-flex items-center text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {t("time", { time: step.estimatedTime })}
                    </span>
                  )}
                </div>

                {/* Links */}
                {step.link && (
                  <div className="mb-3 space-y-1">
                    <a
                      href={step.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 hover:text-blue-800 font-medium py-2"
                    >
                      {step.link.label} &rarr;
                    </a>
                    {step.secondaryLink && (
                      <a
                        href={step.secondaryLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        {step.secondaryLink.label} &rarr;
                      </a>
                    )}
                  </div>
                )}

                {/* Tips */}
                {step.tips && step.tips.length > 0 && (
                  <div className="bg-slate-50 rounded-lg p-4 mt-2">
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      {t("tips")}
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1.5 list-disc list-outside ml-4">
                      {step.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-600 space-y-4">
        <div>
          <p className="font-medium text-slate-700">{stateData.office.name}</p>
          <p>{stateData.office.address}</p>
          <p>
            <a
              href={`tel:${stateData.office.phone.replace(/[^\d+]/g, "")}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {stateData.office.phone}
            </a>
            {" · "}
            <a
              href={stateData.office.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {tc("website")}
            </a>
          </p>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-200">
          {t("disclaimer")}
          {stateData.lastVerified &&
            stateData.lastVerified !== "unverified" && (
              <>
                {" "}
                {t("lastVerified", {
                  date: new Date(
                    stateData.lastVerified + "T00:00:00"
                  ).toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
                    month: "long",
                    year: "numeric",
                  }),
                })}
              </>
            )}{" "}
          <a
            href={getFeedbackUrl(stateData.stateName)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            {t("seeError")}
          </a>
        </p>
      </div>
      <div className="text-center mt-4">
        <Link
          href="/intake"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium py-2"
        >
          {t("startOver")}
        </Link>
      </div>
    </div>
  );
}

function ResourceLink({
  href,
  label,
  desc,
}: {
  href: string;
  label: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg border border-amber-200 p-4 hover:border-amber-400 transition-colors"
    >
      <p className="font-medium text-amber-800">{label}</p>
      <p className="text-sm text-amber-600">{desc}</p>
    </a>
  );
}

function ResultsLoading() {
  const t = useTranslations("Results");
  return (
    <div className="text-center text-slate-500">
      {t("loading")}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:py-16">
      <Suspense fallback={<ResultsLoading />}>
        <ResultsContent />
      </Suspense>
    </main>
  );
}
