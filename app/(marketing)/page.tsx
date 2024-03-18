import { Card } from '@/components/Card';
import { PageHeader } from '@/components/PageHeader';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import Image from 'next/image';

const config = {
  title: 'List of Awesome Things',
  description: 'Curated list of SaaS projects, tools, and websites.',
  url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: config.url,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    images: [
      {
        url: new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`,
        ),
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: siteConfig.openGraph.imageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: config.title,
    description: config.description,
    card: 'summary_large_image',
    creator: siteConfig.creator,
    images: [siteConfig.openGraph.image],
  },
};

const projects: {
  name: string;
  description: string;
  link: { href: string; label: string; target?: undefined | '_blank' };
  logo: string;
  badge?: string;
}[] = [
  {
    name: 'OpenGraph',
    description:
      'OpenGraph is the easiest way to preview and generate open graph meta tags for any website.',
    link: {
      href: 'https://www.opengraph.xyz/?ref=inanutshell',
      label: 'opengraph.xyz',
      target: '_blank',
    },
    logo: '/images/logos/opengraph.png',
    badge: 'sold',
  },
  {
    name: 'Clinic Geek',
    description:
      'Need medical assistance? Find the best health care providers in your Singapore and check out its opening hours and location!',
    link: {
      href: 'https://www.clinicgeek.com/?ref=inanutshell',
      label: 'clinicgeek.com',
      target: '_blank',
    },
    logo: '/images/logos/clinicgeek.png',
  },
  {
    name: 'Bye Indonesia',
    description:
      'Renunciation of Indonesian citizenship process changed in 2020. This site aims to answer all your questions on the new process.',
    link: {
      href: 'https://www.byeindonesia.com/?ref=inanutshell',
      label: 'byeindonesia.com',
      target: '_blank',
    },
    logo: '/images/logos/byeindonesia.png',
  },
  {
    name: 'Cottage for Tots',
    description: 'Nurturing Young Minds with Playful Learning',
    link: {
      href: 'https://www.cottagefortots.com/?ref=inanutshell',
      label: 'cottagefortots.com',
      target: '_blank',
    },
    logo: '/images/logos/cottage.png',
  },
  {
    name: 'Mainan',
    description: 'Learn Through Play',
    link: {
      href: 'https://www.mainan.fun/?ref=inanutshell',
      label: 'mainan.fun',
      target: '_blank',
    },
    logo: '/images/logos/mainan.png',
  },
  {
    name: 'Water a Day',
    description: 'Calculate Your Optimal Daily Hydration Needs in Second',
    link: {
      href: 'https://www.wateraday.com/?ref=inanutshell',
      label: 'wateraday.com',
      target: '_blank',
    },
    logo: '/images/logos/wateraday.png',
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="From Ideas to Execution"
        intro="Discover the projects that encapsulate my passion for web development and SaaS innovation."></PageHeader>

      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-50 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={200}
                    height={200}
                    className="h-8 w-8"
                  />
                </div>
                <div className="mt-6 flex gap-x-2">
                  <h2 className="font-heading text-base text-stone-800 dark:text-stone-100">
                    <Card.Link
                      href={project.link.href}
                      target={project.link.target}>
                      {project.name}
                    </Card.Link>
                  </h2>
                  {project.badge && (
                    <span className="inline-block rotate-0 rounded-md bg-rose-600 px-2 py-1 text-sm font-medium uppercase text-white transition duration-100 ease-out hover:-rotate-3 hover:ease-in">
                      {project.badge}
                    </span>
                  )}
                </div>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-stone-400 transition group-hover:text-violet-500 dark:text-stone-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            );
          })}
        </ul>
      </div>
    </>
  );
}
