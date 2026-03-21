import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birth Certificate Navigator",
  description:
    "Free step-by-step guide to getting your birth certificate in any US state or territory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <nav className="bg-white border-b border-slate-200 px-4 py-2">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-bold text-blue-800 hover:text-blue-700 transition-colors text-sm sm:text-base">
              <span className="sm:hidden">BCN</span>
              <span className="hidden sm:inline">Birth Certificate Navigator</span>
            </Link>
            <div className="flex gap-1 sm:gap-2 text-sm">
              <Link href="/quick" className="text-slate-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-lg active:bg-slate-100">
                Quick Lookup
              </Link>
              <Link href="/intake" className="text-slate-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-lg active:bg-slate-100">
                Guided Help
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
