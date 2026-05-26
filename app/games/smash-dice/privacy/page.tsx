import { redirect } from 'next/navigation';

export default function PrivacyPage() {
  redirect('/en/games/smash-dice/privacy');
  return null;
}

