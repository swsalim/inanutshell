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

export function Card({ as, className, children }: CardProps) {
  const Component: ElementType = as || 'div';
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}>
      {children}
    </Component>
  );
}

interface CardLinkProps {
  children: ReactNode;
  href: string;
  target?: '_blank' | '_self' | undefined;
}

Card.Link = function CardLink({
  children,
  target = undefined,
  ...props
}: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-stone-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-stone-800/70" />
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

interface CardTitleProps extends CardLinkProps {
  as?: React.ElementType;
}

Card.Title = function CardTitle({
  as,
  href,
  children,
  target = undefined,
}: CardTitleProps) {
  const Component = as || 'h2';
  return (
    <Component className="font-heading text-base tracking-wide text-stone-800 dark:text-stone-100">
      {href ? (
        <Card.Link href={href} target={target}>
          {children}
        </Card.Link>
      ) : (
        children
      )}
    </Component>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="relative z-10 mt-2 text-sm text-stone-600 dark:text-stone-300">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({ children }: { children: ReactNode }) {
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

Card.Eyebrow = function CardEyebrow({
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
