import footerImg from '@/assets/images/footer_image.png';
import Image from 'next/image';
import Link from 'next/link';
import { LogoIcon } from '../../icons/logo-icon';
import { Flex } from '../../ui/flex';

export const Footer = () => {
  return (
    <div className="bg-arsenic mt-auto text-white">
      <Flex className="py-24 gap-6 mx-auto justify-center">
        <Image src={footerImg} alt="Footer Image" width={251} height={453} />
        <Flex className="flex-col justify-between">
          <Flex className="flex-col gap-6">
            <LogoIcon width={113} height={69} color="white" />
            <p>
              We are always here for <br /> {`all your pet's good health.`}
            </p>
          </Flex>
          <Flex className="flex-col gap-3">
            <p>
              Follow us here:
              <br />
              <Link
                href="https://www.facebook.com/"
                className="text-oxley hover:underline"
              >
                Instagram
              </Link>
              <br />
              <Link
                href="https://www.facebook.com/"
                className="text-oxley hover:underline"
              >
                Facebook
              </Link>
            </p>
            <p>
              We’re available by phone <br /> and chat <br />
              <span className="text-oxley">
                {`Monday - Sunday`} <br /> 9 a.m - 6 p.m (GMT+7)
              </span>
            </p>
            <p>
              Contact us: <br />
              <span className="text-oxley">
                <Link
                  href="mailto:hello@safepaws.vn"
                  className="hover:underline"
                >
                  hello@safepaws.vn
                </Link>
                <br /> (+84) 767 557 500
              </span>
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
