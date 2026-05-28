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
    title: isFr ? 'Contact – Smash Dice' : 'Contact – Smash Dice',
    description: isFr ? 'Informations de contact pour le jeu Smash Dice.' : 'Contact information for the Smash Dice game.',
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const backHref = `/${locale}/games/smash-dice`;

  return (
    <main className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col items-center justify-center p-8">
      <header className="flex justify-between items-center w-full max-w-2xl border-b border-white/[0.04] pb-4 mb-4">
        <h1 className="font-display text-3xl text-white">{isFr ? 'Contact' : 'Contact'}</h1>
        <Link href={backHref} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
          ← {isFr ? 'Retour au jeu' : 'Back to Game'}
        </Link>
      </header>
      <section className="max-w-2xl w-full space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          {isFr
            ? "Pour toute question, demande de support ou problème concernant Smash Dice, vous pouvez contacter GG Games Labs par email."
            : "For any question, support request, or issue related to Smash Dice, you can contact GG Games Labs by email."}
        </p>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
          <div className="space-y-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-zinc-500">
                {isFr ? "Studio" : "Studio"}
              </p>
              <p className="text-white font-medium">GG Games Labs</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-zinc-500">
                Email
              </p>

              <a
                href="mailto:contact@gggameslabs.com"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                contact@gggameslabs.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-zinc-500">
                {isFr ? "Support" : "Support"}
              </p>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {isFr
                  ? "Nous faisons de notre mieux pour répondre dans un délai raisonnable."
                  : "We do our best to reply within a reasonable timeframe."}
              </p>
            </div>
          </div>
        </div>

        <div className="text-sm text-zinc-500">
          {isFr
            ? "Cette page concerne uniquement le jeu Smash Dice."
            : "This page is dedicated to the Smash Dice game only."}
        </div>
      </section>
    </main>
  );
}
