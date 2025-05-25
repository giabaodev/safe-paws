'use client';

import { MenuNavList } from '@/configs';
import { PATH_NAMES } from '@/constants';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { CartIcon, LogoIcon } from '@/components/icons';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { Button, Flex } from '@/components/ui';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export const Header = () => {
  return (
    <div className="h-16 shrink-0">
      <Flex className="justify-between items-center h-full md:px-[200px] px-6">
        <Link href={PATH_NAMES.HOME}>
          <LogoIcon width={72} height={44} color="red" />
        </Link>
        <Flex className="gap-6 hidden md:flex px-4 items-center">
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
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost" className="hidden md:flex font-light">
              <CartIcon
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
              Cart
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="px-6 py-3 gap-0 border-b border-lightsilver">
              <DrawerTitle className="text-base">Your cart</DrawerTitle>
              <DrawerDescription className="text-xs text-deepgreen">
                Free delivery on all orders of 500.000 VND
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="p-6 gap-6">
              <Flex className="flex-col gap-1">
                <Flex className="items-center justify-between text-base font-medium">
                  <span className="text-eerieblack">Subtotal (2 items)</span>
                  <span className="text-fireopal">6,00</span>
                </Flex>
                <p className="text-xs">Buy more $12,00 to get free shipping </p>
              </Flex>
              <Button className="bg-deepgreen rounded-full hover:bg-deepgreen/90">
                Checkout Now
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Button className="md:hidden" variant="ghost">
          <Menu />
        </Button>
      </Flex>
    </div>
  );
};
