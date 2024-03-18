import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/className';

const buttonVariants = cva(
  'inline-flex items-center gap-2 justify-center rounded-md outline-offset-2 transition active:transition-none',
  {
    variants: {
      variant: {
        primary:
          'bg-violet-800 font-semibold text-violet-100 hover:bg-violet-700 active:bg-violet-800 active:text-violet-100/70 dark:bg-violet-700 dark:hover:bg-violet-600 dark:active:bg-violet-700 dark:active:text-violet-100/70',
        secondary:
          'bg-stone-50 font-medium text-stone-800 hover:bg-stone-100 active:bg-stone-100 active:text-stone-800/60 dark:bg-stone-800/50 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50 dark:active:bg-stone-800/50 dark:active:text-stone-50/70',
        outline:
          'border border-slate-300/50 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-700 focus:border-blue-300 active:bg-slate-100 active:text-slate-700',
        ghost:
          'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-700 focus:border-blue-300 active:bg-slate-100 active:text-slate-700 no-underline font-medium',
        danger:
          'border border-solid border-transparent bg-red-600 text-white hover:bg-red-800 hover:text-white focus:border-red-800 focus:outline-none active:bg-red-800',
      },
      size: {
        default: 'py-2 px-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
