import { SectionContent } from '@/components/layouts';
import { Flex, Text } from '@/components/ui';
import dogImage from '@/assets/images/dog_community.png';
import Image from 'next/image';

export const Community = () => {
  return (
    <SectionContent className="py-24">
      <Flex className="flex-col gap-18 px-6 md:px-0">
        <div className="mx-auto">
          <Text variant="subtitle">Meet Our Community!</Text>
          <Text className="mt-6 text-center text-arsenic" variant="bodybase">
            Get inspired or share best moment with us
            <br />
            @safepaws.vn
          </Text>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Image
              key={index}
              src={dogImage}
              width={182}
              height={182}
              alt=""
              className="rounded-xl"
            />
          ))}
        </div>
      </Flex>
    </SectionContent>
  );
};
