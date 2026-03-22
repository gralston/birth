"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { US_STATES, US_TERRITORIES } from "@/data/usStates";
import { getStateData } from "@/data/states";
import { hasCountyData, findCountyOffice } from "@/data/countyOffices";
import { getCountyFromZip } from "@/lib/zipToCounty";
import { CountyOffice, StateVitalRecords } from "@/types";
import { getFeedbackUrl } from "@/lib/feedback";
import { formatFee } from "@/lib/format";
import { localizeStateData } from "@/lib/localizeStateData";

export default function QuickPage() {
  const t = useTranslations("Quick");
  const tb = useTranslations("BornAbroad");
  const tc = useTranslations("Common");
  const tr = useTranslations("Results");

  const locale = useLocale();
  const [stateCode, setStateCode] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [showBornAbroad, setShowBornAbroad] = useState(false);

  const rawStateData = stateCode ? getStateData(stateCode) : undefined;
  const stateData = rawStateData ? localizeStateData(rawStateData, locale) : undefined;
  const showZip = stateCode && hasCountyData(stateCode);

  let countyOffice: CountyOffice | undefined;
  let countyName: string | undefined;
  if (zipCode.length === 5 && stateCode) {
    countyName = getCountyFromZip(zipCode, stateCode);
    if (countyName) {
      countyOffice = findCountyOffice(stateCode, countyName);
    }
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            {t("title")}
          </h1>
          <p className="text-slate-500">{t("subtitle")}</p>
        </div>

        {/* State + Zip selector */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                {t("stateLabel")}
              </label>
              <select
                id="state"
                value={stateCode}
                onChange={(e) => {
                  setStateCode(e.target.value);
                  setZipCode("");
                }}
                className="w-full p-3 border border-slate-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{t("statePlaceholder")}</option>
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
                className="mt-2 py-2 text-sm text-slate-500 hover:text-blue-700 underline transition-colors"
              >
                {t("bornAbroad")}
              </button>
            </div>
            {showZip && (
              <div className="sm:w-48">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  {t("zipLabel")}{" "}
                  <span className="text-slate-400">{t("zipOptional")}</span>
                </label>
                <input
                  id="zip"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={zipCode}
                  onChange={(e) =>
                    setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))
                  }
                  placeholder={t("zipPlaceholder")}
                  className="w-full p-3 border border-slate-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* Born abroad */}
        {showBornAbroad && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-2">{tb("title")}</h2>
            <p className="text-slate-500 mb-4">{tb("subtitle")}</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-4">
              <h3 className="font-semibold text-blue-800 mb-3">
                {tb("crbaTitle")}
              </h3>
              <p className="text-sm text-blue-700 mb-4">{tb("crbaDesc")}</p>
              <ul className="text-sm text-blue-700 space-y-2 list-disc list-outside ml-4">
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
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-600">
                <span className="font-medium">{tb("notSureTitle")}</span>{" "}
                {tb("notSureDesc")}
              </p>
            </div>
            <button
              onClick={() => setShowBornAbroad(false)}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2"
            >
              &larr; {tb("backToState")}
            </button>
          </div>
        )}

        {/* State not supported */}
        {stateCode && !stateData && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="font-semibold text-amber-800 mb-3">
              {t("noGuide", {
                state:
                  [...US_STATES, ...US_TERRITORIES].find(
                    (s) => s.code === stateCode
                  )?.name || stateCode,
              })}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <ResourceCard
                href="https://www.vitalchek.com/v/birth-certificates"
                title={t("vitalchekTitle")}
                desc={t("vitalchekDesc")}
                tag={t("fastest")}
              />
              <ResourceCard
                href="https://www.cdc.gov/nchs/w2w/index.htm"
                title={t("cdcTitle")}
                desc={t("cdcDesc")}
                tag={t("cheapest")}
              />
            </div>
          </div>
        )}

        {/* Results */}
        {stateData && (
          <QuickResults
            stateData={stateData}
            countyOffice={countyOffice}
            countyName={countyName}
            t={t}
            tCommon={tc}
            tResults={tr}
            locale={locale}
          />
        )}

        {/* Link to guided path */}
        <div className="text-center mt-8 space-y-3">
          <p className="text-slate-500 text-sm">
            {t("noPhotoIdPrompt")}
          </p>
          <Link
            href="/intake"
            className="inline-block text-blue-600 hover:text-blue-800 font-medium"
          >
            {t("useGuidedTool")} &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}

function QuickResults({
  stateData,
  countyOffice,
  countyName,
  t,
  tCommon,
  tResults,
  locale,
}: {
  stateData: StateVitalRecords;
  countyOffice?: CountyOffice;
  countyName?: string;
  t: ReturnType<typeof useTranslations>;
  tCommon: ReturnType<typeof useTranslations>;
  tResults: ReturnType<typeof useTranslations>;
  locale: string;
}) {
  const dateLocale = locale === "es" ? "es-US" : "en-US";
  return (
    <div>
      {/* Local office card */}
      {countyOffice && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg
                className="w-4 h-4"
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
              <p className="font-semibold text-green-800">
                {t("nearestOffice", { name: countyOffice.name })}
              </p>
              <div className="text-sm text-green-700 space-y-0.5">
                <p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(countyOffice.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {countyOffice.address}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${countyOffice.phone.replace(/[^\d+]/g, "")}`}
                    className="underline"
                  >
                    {countyOffice.phone}
                  </a>
                  {countyOffice.hours && ` · ${countyOffice.hours}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fee waiver callout */}
      {stateData.feeWaivers.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="font-semibold text-amber-800 mb-2">
            {stateData.feeWaivers.length === 1
              ? t("feeWaiverInfo")
              : t("feeWaiversAvailable")}
          </p>
          {stateData.feeWaivers.length === 1 ? (
            <p className="text-sm text-amber-700">
              <span className="font-medium">
                {stateData.feeWaivers[0].eligibility}:
              </span>{" "}
              {stateData.feeWaivers[0].howToClaim}
              {stateData.feeWaivers[0].citation && (
                <span className="text-amber-600">
                  {" "}
                  ({stateData.feeWaivers[0].citation})
                </span>
              )}
            </p>
          ) : (
            <ul className="text-sm text-amber-700 space-y-1.5 list-disc list-outside ml-4">
              {stateData.feeWaivers.map((w, i) => (
                <li key={i}>
                  <span className="font-medium">{w.eligibility}:</span>{" "}
                  {w.howToClaim}
                  {w.citation && (
                    <span className="text-amber-600"> ({w.citation})</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Method comparison cards */}
      <h2 className="font-bold text-lg mb-4">
        {t("howToGet", { state: stateData.stateName })}
      </h2>

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        {/* In Person */}
        {stateData.requestMethods.inPerson && (
          <MethodCard
            title={t("inPerson")}
            tag={t("fastest")}
            tagColor="green"
            cost={formatFee(
              stateData.requestMethods.inPerson.fee ?? stateData.fees.certified
            )}
            time={stateData.requestMethods.inPerson.processingTime}
            details={
              countyOffice
                ? t("visitOffice", { name: countyOffice.name })
                : t("visitOffice", { name: stateData.requestMethods.inPerson.locations })
            }
            note={stateData.requestMethods.inPerson.notes}
            cta={
              countyOffice?.website
                ? { url: countyOffice.website, label: t("officeWebsite") }
                : stateData.requestMethods.inPerson?.localOfficesUrl
                  ? {
                      url: stateData.requestMethods.inPerson.localOfficesUrl,
                      label: t("findLocalOffice"),
                    }
                  : undefined
            }
          />
        )}

        {/* Online */}
        {stateData.requestMethods.online && (
          <MethodCard
            title={t("online")}
            tag={t("mostConvenient")}
            tagColor="blue"
            cost={
              stateData.requestMethods.online.additionalFee
                ? t("serviceFee", { base: formatFee(stateData.requestMethods.online.fee ?? stateData.fees.certified), extra: formatFee(stateData.requestMethods.online.additionalFee) })
                : formatFee(
                    stateData.requestMethods.online.fee ??
                      stateData.fees.certified
                  )
            }
            time={t("onlineTime")}
            details={
              stateData.requestMethods.online.provider === "vitalchek"
                ? t("orderVitalchek")
                : t("orderStatePortal", { state: stateData.stateName })
            }
            note={stateData.requestMethods.online.notes}
            vendorListUrl={stateData.requestMethods.online.vendorListUrl}
            vendorListLabel={t("seeFullList")}
            cta={{
              url: stateData.requestMethods.online.url,
              label: t("orderOnline"),
            }}
          />
        )}

        {/* Mail */}
        {stateData.requestMethods.mail && (
          <MethodCard
            title={t("byMail")}
            tag={t("cheapest")}
            tagColor="amber"
            cost={formatFee(
              stateData.requestMethods.mail.fee ?? stateData.fees.certified
            )}
            time={stateData.requestMethods.mail.processingTime}
            details={t("mailTo", { address: stateData.requestMethods.mail.address })}
            note={stateData.requestMethods.mail.notes}
            cta={
              stateData.applicationFormUrl
                ? {
                    url: stateData.applicationFormUrl,
                    label: t("downloadFormPdf"),
                  }
                : undefined
            }
          />
        )}
      </div>

      {/* What you'll need */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <h3 className="font-semibold mb-3">{t("whatYouNeed")}</h3>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
          <div className="flex items-start gap-2">
            <span className="text-slate-400 mt-0.5">-</span>
            <span>{t("needPhotoId")}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-slate-400 mt-0.5">-</span>
            <span>
              {t("needPayment", {
                fee: formatFee(stateData.fees.certified),
                methods: stateData.fees.paymentMethods.join(", "),
              })}
            </span>
          </div>
          {stateData.applicationFormUrl && (
            <div className="flex items-start gap-2">
              <span className="text-slate-400 mt-0.5">-</span>
              <span>
                {t("needFormLabel")}{" "}
                <a
                  href={stateData.applicationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {t("applicationForm")}
                </a>
                {stateData.applicationFormUrlEs && (
                  <>
                    {" / "}
                    <a
                      href={stateData.applicationFormUrlEs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {t("formEsLabel")}
                    </a>
                  </>
                )}{" "}
                {t("forMailInPerson")}
              </span>
            </div>
          )}
          <div className="flex items-start gap-2">
            <span className="text-slate-400 mt-0.5">-</span>
            <span>{t("needBirthInfo")}</span>
          </div>
        </div>
      </div>

      {/* Footer: office contact, notes, disclaimer */}
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
              {tCommon("website")}
            </a>
          </p>
        </div>

        {stateData.specialNotes && stateData.specialNotes.length > 0 && (
          <ul className="text-xs sm:text-sm text-slate-500 space-y-1">
            {stateData.specialNotes.map((note, i) => (
              <li key={i}>* {note}</li>
            ))}
          </ul>
        )}

        <p className="text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-200">
          {t("infoDisclaimer")}
          {stateData.lastVerified &&
            stateData.lastVerified !== "unverified" && (
              <>
                {" "}
                {tResults("lastVerified", {
                  date: new Date(
                    stateData.lastVerified + "T00:00:00"
                  ).toLocaleDateString(dateLocale, {
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
            {tResults("seeError")}
          </a>
        </p>
      </div>
    </div>
  );
}

function MethodCard({
  title,
  tag,
  tagColor,
  cost,
  time,
  details,
  note,
  vendorListUrl,
  vendorListLabel,
  cta,
}: {
  title: string;
  tag: string;
  tagColor: "green" | "blue" | "amber";
  cost: string;
  time: string;
  details: string;
  note?: string;
  vendorListUrl?: string;
  vendorListLabel?: string;
  cta?: { url: string; label: string };
}) {
  const tagStyles = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    amber: "bg-amber-100 text-amber-700",
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${tagStyles[tagColor]}`}
        >
          {tag}
        </span>
      </div>
      <div className="flex gap-3 text-sm text-slate-500 mb-3">
        <span className="font-medium text-slate-700">{cost}</span>
        <span className="text-slate-300">|</span>
        <span>{time}</span>
      </div>
      <p className="text-sm text-slate-600 mb-3">{details}</p>
      {note && (
        <p className="text-xs text-slate-500 mb-3">
          {note}{" "}
          {vendorListUrl && (
            <a
              href={vendorListUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {vendorListLabel} &rarr;
            </a>
          )}
        </p>
      )}
      <div className="flex-1" />
      {cta && (
        <a
          href={cta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center bg-blue-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {cta.label} &rarr;
        </a>
      )}
    </div>
  );
}

function ResourceCard({
  href,
  title,
  desc,
  tag,
}: {
  href: string;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg border border-amber-200 p-4 hover:border-amber-400 transition-colors"
    >
      <div className="flex items-center justify-between mb-1">
        <p className="font-medium text-amber-800">{title}</p>
        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
          {tag}
        </span>
      </div>
      <p className="text-sm text-amber-600">{desc}</p>
    </a>
  );
}
