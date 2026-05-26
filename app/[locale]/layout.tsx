import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "../globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { ReactNode } from "react";

// LayoutProps for the locale layout
type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gggameslabs.com"),
  title: "GG Games Labs | Indie Game Studio",
  description: "Crafting immersive, gameplay-first interactive experiences. The adventure is loading.",
  keywords: ["GG Games Labs", "indie game studio", "game development", "gaming website", "coming soon"],
};

export default async function LocaleRootLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${manrope.variable} antialiased scroll-smooth`}
    >
      <body className="relative min-h-screen">
        <header className="fixed top-4 right-4 z-50">
          <LanguageSwitcher currentLocale={locale} />
        </header>
        {children}
      </body>
    </html>
  );
}

