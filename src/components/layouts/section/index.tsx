import { Flex } from '@/components/ui/flex';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SectionContent({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <Flex className={cn('items-center', 'mx-auto', className)} {...props}>
      {children}
    </Flex>
  );
}
