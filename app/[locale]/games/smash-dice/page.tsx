import React from 'react';
import type { Metadata } from 'next';
import SmashDiceContent from "@/app/games/smash-dice/SmashDiceContent";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? 'Smash Dice – GG Games Labs' : 'Smash Dice – GG Games Labs',
    description: isFr
      ? 'Jeu d\'arcade d\'action et de réflexes rapide développé en solo avec Flutter & Flame (moteur physique Forge2D).'
      : 'A fast-paced arcade action and reflex game built solo with Flutter & Flame (Forge2D physics).',
    openGraph: {
      title: 'Smash Dice – GG Games Labs',
      description: isFr
        ? 'Jeu d\'arcade d\'action et de réflexes rapide développé en solo avec Flutter & Flame (moteur physique Forge2D).'
        : 'A fast-paced arcade action and reflex game built solo with Flutter & Flame (Forge2D physics).',
      images: ['/assets/smash-dice/placeholder-og.png']
    }
  };
}

export default async function SmashDicePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (locale === "fr" ? "fr" : "en") as "en" | "fr";

  return <SmashDiceContent locale={validLocale} />;
}
