import { cn } from '@/lib/className';
import type { ReactNode } from 'react';

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className, 'prose dark:prose-invert')}>{children}</div>
  );
}
