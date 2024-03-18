'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

import { trackReferral } from '@/lib/saTracker';

interface SimpleLinkProps {
  page: string;
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
}

export function SimpleLink({ page, ...props }: SimpleLinkProps) {
  return (
    <>
      <Link
        {...props}
        onClick={() => {
          trackReferral(page);
        }}
      />
    </>
  );
}
