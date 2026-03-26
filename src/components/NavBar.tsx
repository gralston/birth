"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { trackLanguageSwitch } from "@/lib/analytics";

export default function NavBar() {
  const t = useTranslations("Nav");
  const tc = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLanguage() {
    const target = locale === "en" ? "es" : "en";
    trackLanguageSwitch(locale, target);
    router.replace(pathname, { locale: target });
  }

  return (
    <nav className="bg-white border-b border-slate-200 px-4 py-2">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-blue-800 hover:text-blue-700 transition-colors text-sm sm:text-base"
        >
          <span className="sm:hidden">{t("brandShort")}</span>
          <span className="hidden sm:inline">{t("brand")}</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link
            href="/quick"
            className="text-slate-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-lg active:bg-slate-100"
          >
            {t("quick")}
          </Link>
          <Link
            href="/intake"
            className="text-slate-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-lg active:bg-slate-100"
          >
            {t("guided")}
          </Link>
          <Link
            href="/fee-waivers"
            className="hidden sm:block text-slate-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-lg active:bg-slate-100"
          >
            {t("feeWaivers")}
          </Link>
          <button
            onClick={switchLanguage}
            className="text-blue-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-lg active:bg-slate-100 font-medium"
          >
            {tc("language")}
          </button>
        </div>
      </div>
    </nav>
  );
}
