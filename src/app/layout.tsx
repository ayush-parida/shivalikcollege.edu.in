import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import FooterColumns from "@/components/footer/FooterColumns";
import { getFooter, getNavigation } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, footer] = await Promise.all([
    getNavigation(),
    getFooter(),
  ]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-slate-50 text-slate-900`}>
        <Header navigation={navigation} />
        <div className="bg-slate-50/80">{children}</div>
        <FooterColumns footer={footer} />
      </body>
    </html>
  );
}
