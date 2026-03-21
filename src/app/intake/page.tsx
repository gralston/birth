import IntakeWizard from "@/components/IntakeWizard";

export default function IntakePage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:py-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Let&apos;s Get Your Birth Certificate
        </h1>
        <p className="text-slate-500">
          Answer a few quick questions and we&apos;ll create your personalized
          action plan.
        </p>
      </div>
      <IntakeWizard />
    </main>
  );
}
