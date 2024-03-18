import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/className';

import { TableBoilerplate } from '@/components/blog/TableBoilerplate';
import { Callout } from '@/components/Callout';
import { GradientButton } from '@/components/GradientButton';
import { ImageCaption } from '@/components/ImageCaption';
import { ImageKit } from '@/components/ImageKit';

const mdxComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        'group relative scroll-m-20 border-b border-b-stone-200 pb-1 font-heading tracking-wide first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        'group relative scroll-m-20 font-heading tracking-wide',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        'relative scroll-m-20 font-heading tracking-wide',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        'relative scroll-m-20 font-heading tracking-wide',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        'relative scroll-m-20 font-heading tracking-wide',
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn('group font-semibold underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={cn('', className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn('', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('', className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('', className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn('mt-6 border-l-2 border-stone-300 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn('rounded-md border border-stone-200', className)}
      alt={alt}
      {...props}
      loading="lazy"
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-stone-200 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        'm-0 border-t border-stone-300 p-0 even:bg-stone-100',
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border border-stone-200 px-4 py-2 text-left font-heading [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        'border border-stone-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg px-0 py-4',
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn('relative rounded border px-[0.3rem]', className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn(className)} {...props} />
  ),
  GradientButton,
  Image,
  ImageCaption,
  ImageKit,
  Link,
  Callout,
  TableBoilerplate,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="mdx">
      <MDXContent components={mdxComponents} />
    </div>
  );
}
