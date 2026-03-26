import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const barriers = [
    t("barrier1"),
    t("barrier2"),
    t("barrier3"),
    t("barrier4"),
    t("barrier5"),
    t("barrier6"),
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-800 text-white px-4 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
            {t("subtitle")}
          </p>

          {/* Two paths */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <Link
              href="/quick"
              className="bg-white text-blue-800 rounded-xl p-6 text-left hover:bg-blue-50 transition-colors"
            >
              <p className="font-bold text-lg mb-1">{t("hasId")}</p>
              <p className="text-sm text-blue-600">{t("hasIdDesc")}</p>
            </Link>
            <Link
              href="/intake"
              className="bg-blue-700 text-white rounded-xl p-6 text-left hover:bg-blue-600 transition-colors border border-blue-500"
            >
              <p className="font-bold text-lg mb-1">{t("noId")}</p>
              <p className="text-sm text-blue-200">{t("noIdDesc")}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why you might need this */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">
          {t("whyTitle")}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: t("vote"), desc: t("voteDesc") },
            { title: t("passport"), desc: t("passportDesc") },
            { title: t("realId"), desc: t("realIdDesc") },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Barriers section */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            {t("barriersTitle")}
          </h2>
          <p className="text-center text-slate-600 mb-10">
            {t("barriersSubtitle")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {barriers.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/intake"
              className="inline-block bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("getHelp")}
            </Link>
          </div>
        </div>
      </section>

      {/* Fee waivers callout */}
      <section className="px-4 py-12">
        <div className="max-w-xl mx-auto text-center">
          <Link
            href="/fee-waivers"
            className="block bg-green-50 border border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors"
          >
            <p className="font-bold text-lg text-green-800 mb-1">
              {t("feeWaiverCta")}
            </p>
            <p className="text-sm text-green-700">
              {t("feeWaiverCtaDesc")}
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500">
        <p className="mb-2">{t("footerDisclaimer")}</p>
        <p className="mb-4">{t("footerPrivacy")}</p>
        <div className="flex justify-center gap-4 text-slate-400">
          <Link href="/for-organizations" className="hover:text-slate-600">
            {t("footerOrgs")}
          </Link>
          <span>&middot;</span>
          <a
            href="https://mymarriagecert.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-600"
          >
            {t("footerSister")}
          </a>
        </div>
      </footer>
    </main>
  );
}
