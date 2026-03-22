import { getTranslations, setRequestLocale } from "next-intl/server";
import IntakeWizard from "@/components/IntakeWizard";

export default async function IntakePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Intake");

  return (
    <main className="min-h-screen px-4 py-8 sm:py-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{t("title")}</h1>
        <p className="text-slate-500">{t("subtitle")}</p>
      </div>
      <IntakeWizard />
    </main>
  );
}
