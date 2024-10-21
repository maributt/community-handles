import { RedirectType, redirect } from 'next/navigation';

const RedirectPage = () => {
  redirect('https://bsky.app/profile/renny.ismywhole.life', RedirectType.replace);
  return null;
};
