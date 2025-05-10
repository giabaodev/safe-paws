import footerImg from '@/assets/images/footer_image.png';
import Image from 'next/image';
import Link from 'next/link';
import { LogoIcon } from '../icons/logo-icon';
import { Flex } from '../ui/flex';

export const Footer = () => {
  return (
    <div className="bg-arsenic">
      <Flex className="py-24 gap-6 mx-auto justify-center">
        <Image src={footerImg} alt="Footer Image" width={251} height={453} />
        <Flex className="flex-col justify-between">
          <Flex className="flex-col gap-6">
            <LogoIcon color="bg-red" />
            <p>
              We are always here for <br /> {`all your pet's good health.`}
            </p>
          </Flex>
          <Flex className="flex-col gap-3">
            <p>
              Follow us here:
              <br />
              Instagram
              <br />
              Facebook
            </p>
            <p>
              We’re available by phone <br /> and chat <br />
              {`Monday - Sunday`} <br /> 9 a.m - 6 p.m (GMT+7)
            </p>
            <p>
              Contact us: <br />
              <Link href="mailto:hello@safepaws.vn">hello@safepaws.vn</Link>
              <br /> (+84) 767 557 500
            </p>
          </Flex>
        </Flex>
        <Flex className="flex-col justify-end gap-12">
          <p className="text-oxley">
            Shipping <br /> Returns & Exchanges
          </p>
          <p>
            ©2025 SAFEPAWS ALL <br /> RIGHTS RESERVED
          </p>
        </Flex>
      </Flex>
    </div>
  );
};
