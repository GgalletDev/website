import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { translations } from '@/lib/translations';


type PageProps = {
  params: Promise<{ locale: string }>;
};

const documents = {
  fr: () => import('@/content/legal/smash-dice/terms/fr.mdx'),
  en: () => import('@/content/legal/smash-dice/terms/en.mdx'),
}


export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { locale } = await params;
  const dict = (translations as Record<string, any>)[locale];


  const title =
    locale === 'fr' ? "Conditions d'utilisation – Smash Dice" : "Terms of Service – Smash Dice";

  const description =
    dict?.termsMetaDesc || "Terms of service for the Smash Dice game.";

  return {
    title,
    description,
    alternates: {
      languages: {
        en: "/en/games/smash-dice/terms",
        fr: "/fr/games/smash-dice/terms",
      },
    },
  };
};

export default async function TermsPage({
  params,
}: PageProps) {
  const { locale } = await params;

  const loadDocument = documents[locale as keyof typeof documents];

  if (!loadDocument) {
    notFound();
  }

  const Content = (await loadDocument()).default;

  const backHref = `/${locale}/games/smash-dice`;

  return (
    <main className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col items-center p-8">
      <header className="flex justify-between items-center w-full max-w-2xl border-b border-white/[0.04] pb-4 mb-8">
        <h1 className="font-display text-3xl text-white">
          {locale === 'fr'
            ? 'Conditions d\'utilisation'
            : 'Terms of Use'}
        </h1>

        <Link
          href={backHref}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm"
        >
          ← {locale === 'fr'
            ? 'Retour au jeu'
            : 'Back to Game'}
        </Link>
      </header>

      <article className="prose prose-invert max-w-2xl w-full">
        <Content />
      </article>
    </main>
  );

}