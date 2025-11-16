import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SecondaryHeader } from "@/components/navigation/SecondaryHeader";
import { MainHeader } from "@/components/navigation/MainHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivalik College of Engineering",
  description:
    "Official experience site for Shivalik College showcasing academics, admissions, placements, campus life, and innovation hubs.",
  metadataBase: new URL("https://shivalikcollege.edu.in"),
  openGraph: {
    title: "Shivalik College of Engineering",
    description:
      "Explore academics, admissions, placements, research, and CBII/iHUB at Shivalik College, Dehradun.",
    url: "https://shivalikcollege.edu.in",
    siteName: "Shivalik College of Engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-[var(--surface)] text-slate-900">
          <SecondaryHeader />
          <MainHeader />
          <div className="flex-1">
            {children}
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
