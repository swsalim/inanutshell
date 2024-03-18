import { SiteConfig } from 'types';

export const siteConfig: SiteConfig = {
  title: 'In a Nutshell',
  description: 'List of useful links in a nutshell',
  siteName: 'In a Nutshell',
  url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  openGraph: {
    image: '/images/og-default.png',
    imageAlt: 'Banner for inanutshell.com',
    width: '1200',
    height: '630',
  },
  creator: '@swsalim',
};
