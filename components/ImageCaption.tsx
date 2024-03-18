import Link from 'next/link';

import { cn } from '@/lib/className';
import { ImageKit } from './ImageKit';

interface ImageCaptionProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  priority: boolean;
  fullBleed?: boolean;
  showAttribute?: boolean;
  authorName?: string;
  authorLink?: string;
  isPortrait?: boolean;
  className?: string;
  noMarginTop?: boolean;
  directory?: string;
}

export function ImageCaption({
  src,
  alt,
  width = 400,
  height = 400,
  caption,
  priority,
  fullBleed,
  showAttribute,
  authorName,
  authorLink,
  isPortrait = false,
  className,
  noMarginTop = false,
  directory,
}: ImageCaptionProps) {
  return (
    <>
      {fullBleed && (
        <div className="full-bleed my-7">
          <div className="group relative">
            <figure className={cn({ 'mt-0': noMarginTop })}>
              <div
                className={cn(
                  'relative w-full overflow-hidden sm:rounded-2xl',
                  {
                    'aspect-h-4 aspect-w-3': isPortrait,
                    'aspect-auto': !isPortrait,
                  },
                  className,
                )}>
                <ImageKit
                  directory={directory}
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="mt-0 object-cover"
                  priority={priority}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-zinc-900/10 sm:rounded-2xl dark:ring-zinc-100/10" />
              </div>
              <figcaption className="mt-2 block text-center text-sm text-stone-500">
                {!showAttribute && caption}
                {showAttribute && authorLink && (
                  <span>
                    Photo by{' '}
                    <Link href={authorLink} target="_blank" rel="noreferrer">
                      {authorName}
                    </Link>
                  </span>
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
      {!fullBleed && (
        <div className="group relative">
          <figure className="text-center">
            <div
              className={cn(
                'relative inline-block max-w-full overflow-hidden rounded-2xl',
                {
                  'aspect-h-4 aspect-w-3': isPortrait,
                  'aspect-auto': !isPortrait,
                },
                className,
              )}>
              <ImageKit
                directory={directory}
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="mt-0 object-cover"
                priority={priority}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
            </div>
            <figcaption className="mt-2 block text-center text-sm text-stone-500">
              {!showAttribute && caption}
              {showAttribute && authorLink && (
                <span>
                  Photo by{' '}
                  <Link href={authorLink} target="_blank" rel="noreferrer">
                    {authorName}
                  </Link>
                </span>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
