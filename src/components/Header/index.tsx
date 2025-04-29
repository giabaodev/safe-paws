import safePawsLogo from '@/assets/svgs/safe_paws_logo.svg';
import { MenuNavList } from '@/configs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CartIcon } from '../Icons';
import { PATH_NAMES } from '@/constants';

export const Header = () => {
  return (
    <div className="h-16 w-full">
      <div className="flex justify-between items-center h-full px-[200px]">
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
        <div className="flex gap-6">
          {MenuNavList.map((item) => (
            <Link key={item.label} href={item.path || '/'}>
              {item.label}
            </Link>
          ))}
        </div>
        <Button variant="ghost">
          <CartIcon
            style={{
              width: '24px',
              height: '24px',
            }}
          />
          Cart
        </Button>
      </div>
    </div>
  );
};
