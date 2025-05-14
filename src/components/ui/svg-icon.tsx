import React, { ReactElement, SVGProps } from 'react';

interface SvgIconType extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
  children: ReactElement<SVGProps<SVGSVGElement>>;
}

export const SvgIcon = ({
  size = 24,
  color = 'currentColor',
  children,
  ...props
}: SvgIconType) => {
  if (!children) return null;
  return React.cloneElement(children, {
    width: size,
    height: size,
    fill: children.props.fill ?? color,
    ...props,
  });
};

export type SvgIconProps = Omit<SvgIconType, 'children'>;
