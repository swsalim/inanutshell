import { ImageKit } from '@/components/ImageKit';
import clsx from 'clsx';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React, { ElementType } from 'react';

function ChevronRightIcon({ ...props }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface CardProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function ProductCard({ as, className, children }: CardProps) {
  const Component: ElementType = as || 'div';
  return (
    <Component
      className={clsx(
        className,
        'group relative flex h-full flex-col items-start',
      )}>
      <div className="absolute -inset-1">
        <div className="h-full w-full rotate-180 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-0 blur-lg filter transition-all group-hover:opacity-15"></div>
      </div>
      <div className="relative flex h-full w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow group-hover:shadow-lg dark:border-[1px] dark:border-solid dark:border-stone-700/50 dark:bg-stone-800 group-hover:dark:border-stone-700/70">
        {children}
      </div>
    </Component>
  );
}

interface CardLinkProps {
  children: ReactNode;
  href: string;
  target?: '_blank' | '_self' | undefined;
}

ProductCard.Link = function ProductCardLink({
  children,
  target = undefined,
  ...props
}: CardLinkProps) {
  return (
    <>
      <Link
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

interface CardLogoProps {
  href: string;
  name: string;
}

ProductCard.Logo = function ProductCardLogo({
  href,
  name,
  ...props
}: CardLogoProps) {
  return (
    <div
      className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-transparent"
      {...props}>
      <ImageKit
        directory="Yuurrific/Logos"
        src={href}
        alt={name}
        width={200}
        height={200}
        className="h-10 w-10 rounded-md"
      />
    </div>
  );
};

interface CardTitleProps extends CardLinkProps {
  as?: React.ElementType;
}

ProductCard.Title = function ProductCardTitle({
  as,
  href,
  children,
  target = undefined,
}: CardTitleProps) {
  const Component = as || 'h2';
  return (
    <Component className="font-heading text-lg tracking-wide text-stone-800 dark:text-stone-100">
      {href ? (
        <ProductCard.Link href={href} target={target}>
          {children}
        </ProductCard.Link>
      ) : (
        children
      )}
    </Component>
  );
};

ProductCard.Description = function ProductCardDescription({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="relative z-10 mt-2 text-base text-stone-600 dark:text-stone-300">
      {children}
    </p>
  );
};

ProductCard.Cta = function ProductCardCta({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-violet-500">
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

interface CardEyebrowProps {
  as?: React.ElementType;
  decorate?: boolean;
  className?: string;
  children: ReactNode;
  dateTime?: string;
}

ProductCard.Eyebrow = function ProductCardEyebrow({
  as,
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  const Component = as || 'p';
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-stone-500 dark:text-stone-400',
        decorate && 'pl-3.5',
      )}
      {...props}>
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-stone-200 dark:bg-stone-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
