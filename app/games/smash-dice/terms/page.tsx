import { redirect } from 'next/navigation';

export default function TermsPage() {
  redirect('/en/games/smash-dice/terms');
  return null;
}

