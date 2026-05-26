import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "GG Games Labs | Studio de jeux indépendant" : "GG Games Labs | Indie Game Studio",
    description: isFr
      ? "Création d'expériences interactives immersives et axées sur le gameplay. L'aventure est en cours de chargement."
      : "Crafting immersive, gameplay-first interactive experiences. The adventure is loading.",
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  
  // Validate that the locale is either 'en' or 'fr'
  const validLocale = (locale === "fr" ? "fr" : "en") as "en" | "fr";

  return <LandingPageClient locale={validLocale} />;
}
