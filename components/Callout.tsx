import { cn } from '@/lib/className';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const calloutVariants = cva(
  'not-prose my-6 flex items-start rounded-md border border-l-4 p-4',
  {
    variants: {
      type: {
        default:
          'border-stone-800 bg-stone-50 dark:border-stone-50 dark:bg-stone-900',
        warning: 'border-yellow-900 bg-yellow-50 text-yellow-700',
        danger: 'border-red-900 bg-red-50 text-red-700',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);
interface CalloutProps extends VariantProps<typeof calloutVariants> {
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ children, icon, type, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(calloutVariants({ type, className }))}
      {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  ),
);

Callout.displayName = 'Callout';

export { Callout };
