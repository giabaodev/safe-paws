import {
  EcoFriendlyIcon,
  SustainablePackIcon,
  UsefulDesignIcon,
} from '@/components/icons';
import { HealthyProductIcon } from '@/components/icons/healthy-product';
import { SectionContent } from '@/components/layouts';
import { Flex } from '@/components/ui/flex';
import { SvgIconProps } from '@/components/ui/svg-icon';
import { cn } from '@/lib/utils';
import { JSX, ReactElement } from 'react';

interface BusinessKeyContent {
  icon: (props: SvgIconProps) => JSX.Element;
  description: ReactElement;
}

const textStyle = cn('text-center', 'text-base', 'font-medium', 'text-arsenic');

const BUSINESS_KEY_CONTENT: BusinessKeyContent[] = [
  {
    icon: HealthyProductIcon,
    description: (
      <p className={textStyle}>
        Healthy <br /> Products
      </p>
    ),
  },
  {
    icon: UsefulDesignIcon,
    description: (
      <p className={textStyle}>
        Useful <br /> Designs
      </p>
    ),
  },
  {
    icon: EcoFriendlyIcon,
    description: (
      <p className={textStyle}>
        Eco-friendly <br /> Manufacturing
      </p>
    ),
  },
  {
    icon: SustainablePackIcon,
    description: (
      <p className={textStyle}>
        Sustainable <br /> Packaging
      </p>
    ),
  },
];

export function BusinessKey() {
  return (
    <SectionContent className="flex-col md:flex-row gap-6 py-[72px]">
      {BUSINESS_KEY_CONTENT.map((item, index) => (
        <Flex key={index} className="flex-col items-center gap-4 min-w-[182px]">
          <item.icon size={96} />
          {item.description}
        </Flex>
      ))}
    </SectionContent>
  );
}
