"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function SmashDiceContent() {
  const { t } = useTranslation();

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
          <Link href="/" className="text-sm text-zinc-400 hover:text-blue-300 transition-colors">← Back to Home</Link>
        </header>

        {/* Media section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video placeholder */}
          <div className="relative aspect-video rounded-xl bg-zinc-950/80 border border-white/[0.06] overflow-hidden flex items-center justify-center text-center p-6">
            <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-30" />
            <span className="text-zinc-500 text-sm">Video placeholder (MP4/WebM)</span>
          </div>
          {/* Screenshots grid */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-video rounded-lg bg-zinc-950/40 border border-dashed border-white/[0.06] flex items-center justify-center">
                <span className="text-zinc-600 text-xs">Screenshot {i}</span>
              </div>
            ))}
          </div>
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
        <section>
          <h2 className="font-display text-xl text-white mb-2">Data Usage</h2>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus eget urna facilisis placerat. Nulla facilisi. Integer at turpis vitae neque viverra venenatis.
          </p>
        </section>
      </main>
    </div>
  );
}
