"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { translations, TranslationDict } from "@/lib/translations";

interface SmashDiceContentProps {
  locale: "en" | "fr";
}

export default function SmashDiceContent({ locale }: SmashDiceContentProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const screenshots = [
    '/images/smash-dice/Screenshot_main_menu.jpg',
    '/images/smash-dice/Screenshot_global_leaderboard.jpg',
    '/images/smash-dice/Screenshot_personal_scores.jpg',
    '/images/smash-dice/Screenshot_bonus_life.png',
    '/images/smash-dice/Screenshot_malus.png',
    '/images/smash-dice/Screenshot_malus_activated.png',
  ];

  const dict = translations[locale] || translations.en;
  const t = (key: keyof TranslationDict): string => {
    const value = dict[key];
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value || (translations.en[key] as string) || "";
  };

  return (
    <div className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col font-sans relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[140px] animate-float-medium pointer-events-none" />
      <div className="absolute top-[50%] left-[10%] w-[60%] h-[60%] bg-blue-950/10 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />

      <main className="z-10 flex-1 max-w-4xl mx-auto w-full px-6 py-8 space-y-12">
        {/* Header with back link */}
        <header className="flex items-center justify-between border-b border-white/[0.04] pb-4">
          <h1 className="font-display text-3xl text-white uppercase">{t('game1Title')}</h1>
          <Link href={`/${locale}`} className="text-sm text-zinc-400 hover:text-blue-300 transition-colors">
            ← {locale === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
          </Link>
        </header>

        {/* Media section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video */}
          <div className="relative aspect-[9/17] rounded-xl bg-zinc-950/80 border border-white/[0.06] overflow-hidden flex items-center justify-center">
            <video className="w-full h-full object-cover" src="/images/smash-dice/SmashDice_Teaser.mp4" controls />
          </div>
          {/* Screenshots */}
          <div className="grid grid-cols-3 gap-3">
            {screenshots.map((src, i) => (
              <button
                key={i}
                type="button"
                className="focus:outline-none"
                onClick={() => setSelectedIndex(i)}
              >
                <Image
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  width={200}
                  height={112}
                  className="rounded-lg bg-zinc-950/40 border border-dashed border-white/[0.06]"
                />
              </button>
            ))}
          </div>
          {selectedIndex !== null && (
            <div
              className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4 sm:p-6"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-white text-3xl z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
              >
                ✕
              </button>

              {/* Previous */}
              <button
                className="
        absolute left-2 sm:left-6
        text-white text-4xl
        bg-black/40 hover:bg-black/60
        rounded-full
        w-12 h-12
        flex items-center justify-center
        z-20
      "
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(
                    (selectedIndex - 1 + screenshots.length) % screenshots.length
                  );
                }}
              >
                ‹
              </button>

              {/* Next */}
              <button
                className="
        absolute right-2 sm:right-6
        text-white text-4xl
        bg-black/40 hover:bg-black/60
        rounded-full
        w-12 h-12
        flex items-center justify-center
        z-20
      "
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(
                    (selectedIndex + 1) % screenshots.length
                  );
                }}
              >
                ›
              </button>

              {/* Image */}
              <div
                className="relative w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={screenshots[selectedIndex]}
                  alt={`Screenshot ${selectedIndex + 1}`}
                  width={1600}
                  height={900}
                  className="
          rounded-xl
          border border-white/10
          shadow-2xl
          w-auto
          h-auto
          max-w-[95vw]
          sm:max-w-[85vw]
          lg:max-w-[1100px]
          max-h-[85vh]
          object-contain
        "
                />
              </div>
            </div>
          )}
        </section>

        {/* Description */}
        <section>
          <p className="text-zinc-300 text-base leading-relaxed max-w-2xl">
            {t('game1Desc')}
          </p>
        </section>

        {/* CTA – Google Play Store (disabled) */}
        <section className="flex items-center space-x-4">
          <button className="px-6 py-2 rounded-md bg-zinc-800/60 text-zinc-400 cursor-not-allowed opacity-70 flex items-center">
            Google Play Store
            <span className="ml-2 px-2 py-0.5 bg-zinc-700 text-xs text-zinc-300 rounded">Coming Soon</span>
          </button>
        </section>

        {/* Data‑usage section */}
        <section className="flex flex-wrap gap-4">
          <Link href={`/${locale}/games/smash-dice/privacy`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
            {t('privacyPolicy')}
          </Link>
          <Link href={`/${locale}/games/smash-dice/terms`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
            {t('termsOfService')}
          </Link>
          <Link href={`/${locale}/games/smash-dice/contact`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
            {t('contact')}
          </Link>
          <Link href={`/${locale}/games/smash-dice/delete-data`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
            {t('deleteData')}
          </Link>
        </section>
      </main>
    </div>
  );
}
