import safePawsLogo from '@/assets/svgs/safe_paws_logo.svg';
import { MenuNavList } from '@/configs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CartIcon } from '../icons';
import { PATH_NAMES } from '@/constants';
import { Flex } from '../ui/flex';

export const Header = () => {
  return (
    <div className="h-16 w-full">
      <Flex className="justify-between items-center h-full px-[200px]">
        <Link href={PATH_NAMES.HOME}>
          <Image
            src={safePawsLogo}
            alt="Safe Paws Logo"
            priority
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
        </Link>
        <Flex className="gap-6">
          {MenuNavList.map((item) => (
            <Link key={item.label} href={item.path || '/'}>
              {item.label}
            </Link>
          ))}
        </Flex>
        <Button variant="ghost">
          <CartIcon
            style={{
              width: '24px',
              height: '24px',
            }}
          />
          Cart
        </Button>
      </Flex>
    </div>
  );
};
