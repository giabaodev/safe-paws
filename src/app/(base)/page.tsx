import dogHero from '@/assets/images/dog_hero.png';
import Image from 'next/image';
import { AboutUs } from './_components/about-us';
import { BusinessKey } from './_components/business-key';
import { Community } from './_components/community';
import { AllProduct } from './_components/all-product';

export default function HomePage() {
  return (
    <div className="relative flex flex-col">
      <Image
        src={dogHero}
        alt="Dog Hero"
        style={{
          aspectRatio: 1.8,
          width: '100%',
        }}
      />
      {/* <div className="absolute translate-y-1/2 rotate-90">
        <h5 className="text-white">Claim 10% Off</h5>
      </div> */}
      <BusinessKey />
      <AllProduct />
      <AboutUs />
      <Community />
    </div>
  );
}
