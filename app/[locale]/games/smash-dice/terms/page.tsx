import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? 'Conditions d\'utilisation – Smash Dice' : 'Terms of Service – Smash Dice',
    description: isFr ? 'Conditions d\'utilisation pour le jeu Smash Dice.' : 'Terms of service for the Smash Dice game.',
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const backHref = `/${locale}/games/smash-dice`;

  return (
    <main className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col items-center justify-center p-8">
      <header className="flex justify-between items-center w-full max-w-2xl border-b border-white/[0.04] pb-4 mb-4">
        <h1 className="font-display text-3xl text-white">{isFr ? 'Conditions d\'utilisation' : 'Terms of Service'}</h1>
        <Link href={backHref} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
          ← {isFr ? 'Retour au jeu' : 'Back to Game'}
        </Link>
      </header>
      <section className="max-w-2xl w-full">
        <p className="text-zinc-300">
          {isFr
            ? '[Contenu stub] Cette page contiendra les conditions d\'utilisation pour le jeu Smash Dice.'
            : '[Stub content] This page will contain the terms of service for the Smash Dice game.'}
        </p>
      </section>
    </main>
  );
}
