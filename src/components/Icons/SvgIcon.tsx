import React, { ReactElement, SVGProps } from 'react';
import { cn } from '@/lib/utils';

interface SvgIconType extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
  children: ReactElement<SVGProps<SVGSVGElement>>;
}

export const SvgIcon = ({
  size = 24,
  color = 'currentColor',
  className,
  children,
  ...props
}: SvgIconType) => {
  if (!children) return null;
  console.log('children', children);
  return React.cloneElement(children, {
    width: size,
    height: size,
    fill: children.props.fill ?? color,
    className: cn('inline-block', children.props.className, className),
    ...props,
  });
};

export type SvgIconProps = Omit<SvgIconType, 'children'>;
