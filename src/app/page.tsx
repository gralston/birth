import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-800 text-white px-4 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Get Your Birth Certificate
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
            Free guide to ordering your birth certificate in any US state or territory.
            For voting, passports, REAL ID, and more.
          </p>

          {/* Two paths */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <Link
              href="/quick"
              className="bg-white text-blue-800 rounded-xl p-6 text-left hover:bg-blue-50 transition-colors"
            >
              <p className="font-bold text-lg mb-1">
                I have a government-issued photo ID
              </p>
              <p className="text-sm text-blue-600">
                Driver&apos;s license, passport, or military ID. Get your
                options in 30 seconds.
              </p>
            </Link>
            <Link
              href="/intake"
              className="bg-blue-700 text-white rounded-xl p-6 text-left hover:bg-blue-600 transition-colors border border-blue-500"
            >
              <p className="font-bold text-lg mb-1">
                I don&apos;t have a photo ID, or I need help
              </p>
              <p className="text-sm text-blue-200">
                No ID, can&apos;t afford fees, complicated situation? We&apos;ll
                guide you step by step.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why you might need this */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">
          Why You Might Need a Birth Certificate
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "To Vote",
              desc: "Many states now require photo ID to vote. A birth certificate is the first step to getting that ID.",
            },
            {
              title: "For a Passport",
              desc: "A certified birth certificate is required for your first US passport application.",
            },
            {
              title: "For REAL ID",
              desc: "Now required for domestic flights. Your birth certificate is the key document you need.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
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
            Facing Barriers?
          </h2>
          <p className="text-center text-slate-600 mb-10">
            Millions of Americans struggle to get their birth certificate.
            Our guided path helps with:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "No photo ID (the catch-22)",
              "Can't afford the fees",
              "Experiencing homelessness",
              "Name has changed",
              "Was adopted",
              "Recently incarcerated",
            ].map((item) => (
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
              Get Personalized Help
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500">
        <p className="mb-2">
          This is a free, open-source tool. We are not affiliated with any
          government agency.
        </p>
        <p>
          We do not collect, store, or sell your personal information. All
          processing happens in your browser.
        </p>
      </footer>
    </main>
  );
}
