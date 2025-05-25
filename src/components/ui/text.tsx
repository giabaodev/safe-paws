import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const textVariants = cva('text-eerieblack', {
  variants: {
    variant: {
      titlehero: 'font-medium text-title-hero',
      subtitle: 'font-medium text-subtitle',
      bodysmall: 'font-light text-sm',
      bodybase: 'font-light text-base',
      bodystrong: 'font-medium text-base',
    },
  },
  defaultVariants: {
    variant: 'bodybase',
  },
});

interface DefaultVariantsKey {
  [key: string]: keyof React.JSX.IntrinsicElements;
}

const defaultVariants: DefaultVariantsKey = {
  default: 'p',
  titlehero: 'h1',
  subtitle: 'h2',
  bodysmall: 'h6',
  bodybase: 'h4',
  bodystrong: 'h5',
};

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant = 'bodybase', ...props }, ref) => {
    const Comp = variant
      ? defaultVariants[variant]
      : defaultVariants['bodybase'];

    return React.createElement(Comp, {
      className: cn(textVariants({ variant }), className),
      ref,
      ...props,
    });
  },
);

Text.displayName = 'Text';
export { Text, textVariants };
