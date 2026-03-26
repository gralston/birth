import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ForOrganizationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ForOrgs");

  return (
    <main className="min-h-screen px-4 py-8 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600">{t("subtitle")}</p>
        </div>

        {/* What we do */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{t("whatTitle")}</h2>
          <p className="text-slate-600 mb-4">{t("whatDesc")}</p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-2" />
              {t("whatPoint1")}
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-2" />
              {t("whatPoint2")}
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-2" />
              {t("whatPoint3")}
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-2" />
              {t("whatPoint4")}
            </li>
          </ul>
        </section>

        {/* How to use */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            {t("useTitle")}
          </h2>
          <div className="space-y-4 text-sm text-blue-700">
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">
                {t("useLinkTitle")}
              </h3>
              <p>{t("useLinkDesc")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">
                {t("useReferTitle")}
              </h3>
              <p>{t("useReferDesc")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">
                {t("useQuickTitle")}
              </h3>
              <p>{t("useQuickDesc")}</p>
            </div>
          </div>
        </section>

        {/* Who uses this */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{t("whoTitle")}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: t("whoShelters"), desc: t("whoSheltersDesc") },
              { title: t("whoLegal"), desc: t("whoLegalDesc") },
              { title: t("whoReentry"), desc: t("whoReentryDesc") },
              { title: t("whoVoter"), desc: t("whoVoterDesc") },
              { title: t("whoSocial"), desc: t("whoSocialDesc") },
              { title: t("whoLibraries"), desc: t("whoLibrariesDesc") },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-lg p-4"
              >
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contribute */}
        <section className="bg-slate-50 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-3">{t("contributeTitle")}</h2>
          <p className="text-slate-600 mb-4">{t("contributeDesc")}</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full shrink-0 mt-1.5" />
              {t("contributeData")}
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full shrink-0 mt-1.5" />
              {t("contributeTranslate")}
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full shrink-0 mt-1.5" />
              {t("contributeFeedback")}
            </li>
          </ul>
          <a
            href="https://github.com/gralston/birth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            {t("viewGithub")} &rarr;
          </a>
        </section>

        {/* Partner orgs */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">{t("partnersTitle")}</h2>
          <p className="text-sm text-slate-600 mb-4">{t("partnersDesc")}</p>
          <div className="space-y-3">
            <a
              href="https://www.spreadthevote.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
            >
              <p className="font-semibold">Spread the Vote</p>
              <p className="text-sm text-slate-600">
                {t("partnerSpread")}
              </p>
            </a>
            <a
              href="https://www.voteriders.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
            >
              <p className="font-semibold">VoteRiders</p>
              <p className="text-sm text-slate-600">
                {t("partnerVoteRiders")}
              </p>
            </a>
            <a
              href="https://www.lambdalegal.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
            >
              <p className="font-semibold">Lambda Legal</p>
              <p className="text-sm text-slate-600">
                {t("partnerLambda")}
              </p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/intake"
            className="inline-block bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("tryCta")}
          </Link>
          <p className="text-xs text-slate-500 mt-3">{t("ctaNote")}</p>
        </div>
      </div>
    </main>
  );
}
