import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@src/utils';

const inputVariants = cva(
  'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        loginSignUp:
          'w-[290px] px-[15px] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#f2f4f7]',
      },
      size: {
        default: '',
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, asChild = false, type = 'text', ...props }, ref) => {
    const Comp = asChild ? Slot : 'input';

    return <Comp className={cn(inputVariants({ variant, size, className }))} ref={ref} type={type} {...props} />;
  }
);

Input.displayName = 'Input';

export { Input };
