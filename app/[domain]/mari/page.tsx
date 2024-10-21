import { RedirectType, redirect } from 'next/navigation';

const RedirectPage = () => {
  redirect('https://bsky.app/profile/mari.ismywhole.life', RedirectType.replace);
  return null;
};

export default RedirectPage;