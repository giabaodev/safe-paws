import { cn } from '@/lib/utils';
import { ComponentProps, ComponentType, forwardRef } from 'react';
import { JSX } from 'react';

type ValidHTMLTags = keyof JSX.IntrinsicElements | ComponentType;

export type FlexProps<T extends ValidHTMLTags = 'div'> = {
  as?: T;
} & (T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : ComponentProps<T>);

export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
  { as: Tag = 'div', className, ...props },
  ref,
) {
  return <Tag ref={ref} className={cn('flex', className)} {...props} />;
}) as <T extends ValidHTMLTags = 'div'>(props: FlexProps<T>) => JSX.Element;
