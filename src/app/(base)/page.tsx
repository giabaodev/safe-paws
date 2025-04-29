import Image from 'next/image';
import dogHero from '@/assets/images/dog_hero.png';

export default function HomePage() {
  return (
    <div className="relative flex flex-col">
      <Image
        src={dogHero}
        alt="Dog Hero"
        style={{
          width: '100%',
          height: '642px',
        }}
      />
      <div className="absolute translate-y-1/2 rotate-90">
        <h5 className="text-white">Claim 10% Off</h5>
      </div>
    </div>
  );
}
