import Link from 'next/link';

import { InnerContainer, OuterContainer } from '@/components/Container';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="transition hover:text-violet-500 dark:hover:text-violet-400">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <OuterContainer>
        <div className="border-t border-stone-100 pb-16 pt-10 dark:border-stone-700/40">
          <InnerContainer>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <p className="text-center text-sm text-stone-600 md:text-right dark:text-stone-400">
                &copy; {new Date().getFullYear()} Yuurrific. All rights
                reserved.
                <span className="mt-2 block text-stone-600 md:ml-2 md:mt-0 md:inline-block dark:text-inherit">
                  Privacy-friendly analytics by{' '}
                  <a
                    href="https://go.yuurrific.com/simpleanalytics"
                    className="inline-block rotate-0 rounded-md bg-violet-600 px-2 py-1 text-white transition duration-100 ease-out hover:-rotate-3 hover:ease-in"
                    target="_blank">
                    SimpleAnalytics
                  </a>
                </span>
              </p>
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  );
}
