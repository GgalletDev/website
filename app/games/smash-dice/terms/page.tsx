import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service – Smash Dice',
  description: 'Terms of service for the Smash Dice game.',
};

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col items-center justify-center p-8">
        <header className="flex justify-between items-center w-full max-w-2xl border-b border-white/[0.04] pb-4 mb-4">
          <h1 className="font-display text-3xl text-white">Terms of Service</h1>
          <Link href="/games/smash-dice" className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
            ← Back to Game
          </Link>
        </header>
        <section className="max-w-2xl">
          <p className="text-zinc-300">[Stub content] This page will contain the terms of service for the Smash Dice game.</p>
        </section>
      </main>
    </>
  );
}
