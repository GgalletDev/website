import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { translations } from '@/lib/translations';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = translations[locale as 'en' | 'fr'] || translations.en;
  return {
    title: `${dict.deletePageTitle} – Smash Dice`,
    description: dict.deletePageDesc,
  };
}

export default async function DeleteDataPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = translations[locale as 'en' | 'fr'] || translations.en;
  const backHref = `/${locale}/games/smash-dice`;

  return (
    <main className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col items-center p-8">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-2xl border-b border-white/[0.04] pb-4 mb-8">
        <h1 className="font-display text-2xl sm:text-3xl text-white">
          {dict.deletePageTitle}
        </h1>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm shrink-0 text-sm"
        >
          ← {dict.backToGame}
        </Link>
      </header>

      {/* Main Content */}
      <section className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Explanation Column */}
        <div className="space-y-6">
          <p className="text-zinc-300 leading-relaxed">
            {dict.deletePageDesc}
          </p>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm space-y-4">
            <h2 className="text-lg font-semibold text-white">
              {dict.deletePageStepsTitle}
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-zinc-300 text-sm">
              <li>{dict.deletePageStep1}</li>
              <li>{dict.deletePageStep2}</li>
              <li>{dict.deletePageStep3}</li>
              <li>{dict.deletePageStep4}</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/20 text-red-300/80 text-xs">
            <p className="font-semibold mb-1">
              {dict.deletePageWarningTitle}
            </p>
            <p>
              {dict.deletePageWarningDesc}
            </p>
          </div>
        </div>

        {/* Image / Screenshot Column */}
        <div className="flex flex-col items-center space-y-4">
          <span className="text-sm font-medium text-zinc-400">
            {dict.deletePageInGameView}
          </span>
          <div className="relative aspect-[9/19] w-full max-w-[260px] rounded-2xl bg-zinc-950/60 border border-white/[0.06] overflow-hidden shadow-xl">
            <Image
              src="/images/smash-dice/Screenshot_settings_datadeletion.png"
              alt={dict.deletePageScreenshot}
              fill
              className="object-cover"
              sizes="260px"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
