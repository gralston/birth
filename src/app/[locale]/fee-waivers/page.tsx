"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { US_STATES, US_TERRITORIES } from "@/data/usStates";
import { getStateData, getAvailableStates } from "@/data/states";
import { trackFeeWaiverView } from "@/lib/analytics";

export default function FeeWaiversPage() {
  const t = useTranslations("FeeWaivers");
  const tc = useTranslations("Common");
  const [stateCode, setStateCode] = useState("");

  const stateData = stateCode ? getStateData(stateCode) : undefined;
  const waivers = stateData?.feeWaivers ?? [];
  const stateName =
    [...US_STATES, ...US_TERRITORIES].find((s) => s.code === stateCode)?.name ??
    stateCode;

  function handleStateChange(code: string) {
    setStateCode(code);
    if (code) trackFeeWaiverView(code);
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600">{t("subtitle")}</p>
        </div>

        {/* State selector */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
          <label
            htmlFor="waiver-state"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            {t("selectLabel")}
          </label>
          <select
            id="waiver-state"
            value={stateCode}
            onChange={(e) => handleStateChange(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">{t("selectPlaceholder")}</option>
            <optgroup label={tc("states")}>
              {US_STATES.filter((s) => getStateData(s.code)).map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </optgroup>
            <optgroup label={tc("territories")}>
              {US_TERRITORIES.filter((s) => getStateData(s.code)).map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Results */}
        {stateData && waivers.length > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-bold">
              {t("resultsTitle", { state: stateName })}
            </h2>
            <p className="text-slate-600 text-sm">{t("resultsSubtitle")}</p>

            {waivers.map((w, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-200 rounded-xl p-5"
              >
                <h3 className="font-semibold text-green-800 mb-2">
                  {w.eligibility}
                </h3>
                <p className="text-sm text-green-700 mb-2">{w.howToClaim}</p>
                {w.citation && (
                  <p className="text-xs text-green-600 italic">{w.citation}</p>
                )}
              </div>
            ))}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800 font-medium mb-1">
                {t("needHelp")}
              </p>
              <p className="text-sm text-blue-700">
                {t("needHelpDesc")}
              </p>
              <Link
                href="/intake"
                className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                {t("useGuidedTool")} &rarr;
              </Link>
            </div>
          </div>
        )}

        {stateData && waivers.length === 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-amber-800 mb-2">
              {t("noWaivers", { state: stateName })}
            </h2>
            <p className="text-sm text-amber-700 mb-4">
              {t("noWaiversDesc")}
            </p>
            <p className="text-sm text-amber-700">
              {t("contactOffice", {
                name: stateData.office.name,
                phone: stateData.office.phone,
              })}
            </p>
          </div>
        )}

        {/* General info */}
        <div className="bg-slate-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">{t("commonWaivers")}</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5" />
              <p>{t("waiverHomeless")}</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5" />
              <p>{t("waiverVoter")}</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5" />
              <p>{t("waiverVeterans")}</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5" />
              <p>{t("waiverIndigent")}</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5" />
              <p>{t("waiverFoster")}</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-500 text-center">
          {t("disclaimer")}
        </p>
      </div>
    </main>
  );
}
