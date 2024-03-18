import { SiteConfig } from 'types';

export const siteConfig: SiteConfig = {
  title: 'Frontend Developer',
  description:
    'I’m Yuyu, a front-end developer based in Singapore. I am passionate about creating user-friendly and visually appealing websites, and I enjoy incorporating elements of UI/UX and SEO optimization into my work.',
  siteName: 'Yuurrific',
  url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  openGraph: {
    image: '/images/og-default.png',
    imageAlt: 'Banner for Yuurrific.com',
    width: '1200',
    height: '630',
  },
  creator: '@swsalim',
};
