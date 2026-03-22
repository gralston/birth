import type { Metadata } from "next";
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
  return children;
}
