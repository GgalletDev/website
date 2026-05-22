import React from 'react';
import Link from 'next/link';
import SmashDiceContent from "./SmashDiceContent";
import Head from 'next/head';

export const metadata = {
  title: 'Smash Dice – GG Games Labs',
  description: 'Fast‑paced arcade reflex game built with Flutter & Flame. Coming soon to Google Play Store.',
  openGraph: {
    title: 'Smash Dice – GG Games Labs',
    description: 'Fast‑paced arcade reflex game built with Flutter & Flame. Coming soon to Google Play Store.',
    images: ['/assets/smash-dice/placeholder-og.png']
  }
};

export default function SmashDicePage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <SmashDiceContent />
    </>
  );
}
