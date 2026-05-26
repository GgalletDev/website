'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  currentLocale: string;
}

const locales = ['en', 'fr'] as const;

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getLocalizedPath = (locale: string) => {
    const segments = pathname.split('/');

    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => {
        const isActive = currentLocale === locale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            className={`px-2 py-1 rounded text-xs font-mono transition-colors ${isActive
                ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                : 'bg-zinc-950/30 text-zinc-400 hover:text-zinc-200'
              }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}