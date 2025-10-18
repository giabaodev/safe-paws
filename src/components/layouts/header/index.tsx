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
} from '@/components/ui';
import { Fragment, useEffect, useState } from 'react';
import { useCartStore } from '@/stores';
import { ProductInCart } from '@/components/molecules/product-in-cart';
import { Separator } from '@/components/ui/separator';

export const HEADER_HEIGHT = 64; // 16 * 4

export const Header = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { items, open, setOpen, total } = useCartStore();

  useEffect(() => {
    const target = document.getElementById('hero-image');
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowCart(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <>
      <div
        className="shrink-0 bg-seashell w-full"
        style={{ height: HEADER_HEIGHT }}
      >
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
          <Drawer
            direction="right"
            open={open}
            onOpenChange={setOpen}
            preventScrollRestoration={true}
          >
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
            <DrawerContent
              onCloseAutoFocus={(e) => e.preventDefault()}
              className="dark:bg-lightsilver"
            >
              <DrawerHeader className="px-6 py-3 gap-0 border-b border-lightsilver">
                <DrawerTitle className="text-base">Your cart</DrawerTitle>
                <DrawerDescription className="text-xs text-deepgreen">
                  Free delivery on all orders of 500.000 VND
                </DrawerDescription>
              </DrawerHeader>
              <Flex className="p-6 flex-1 flex-col overflow-auto">
                {items.map((item, index) => (
                  <Fragment key={`${item.id}-${item.selectedOption}`}>
                    <ProductInCart item={item} />
                    {index !== items.length - 1 && (
                      <Separator className="my-6 bg-lightsilver" />
                    )}
                  </Fragment>
                ))}
              </Flex>
              <DrawerFooter className="p-6 gap-6 border-t border-lightsilver">
                <Flex className="flex-col gap-1">
                  <Flex className="items-center justify-between text-base font-medium">
                    <span className="text-eerieblack">
                      Subtotal ({items.length})
                    </span>
                    <span className="text-fireopal">
                      {Number(total()).toFixed(2)}
                    </span>
                  </Flex>
                  <p className="text-xs">
                    Buy more $12,00 to get free shipping
                  </p>
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
      {showCart && (
        <Button
          size="icon"
          className="rounded-full p-4 bottom-5 right-5 border-black z-10 hidden md:flex fixed"
          variant="outline"
          onClick={() => setOpen(true)}
        >
          <CartIcon
            style={{
              width: '24px',
              height: '24px',
            }}
          />
        </Button>
      )}
    </>
  );
};
