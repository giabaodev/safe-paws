'use client';

import { MenuNavList } from '@/configs';
import { PATH_NAMES } from '@/constants';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { CartIcon, LogoIcon } from '@/components/icons';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { Button, Flex } from '@/components/ui';

export const Header = () => {
  return (
    <div className="h-16 shrink-0">
      <Flex className="justify-between items-center h-full md:px-[200px] px-6">
        <Link href={PATH_NAMES.HOME}>
          <LogoIcon width={72} height={44} color="red" />
        </Link>
        <Flex className="gap-6 hidden md:flex px-4">
          {MenuNavList.map((item) => (
            <Link
              key={item.label}
              href={item.path || '/'}
              className={cn('relative', styles['hover-underline'])}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
        <Button variant="ghost" className="hidden md:flex">
          <CartIcon
            style={{
              width: '24px',
              height: '24px',
            }}
          />
          Cart
        </Button>
        <Menu className="md:hidden" />
      </Flex>
    </div>
  );
};
