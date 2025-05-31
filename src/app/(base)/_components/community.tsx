import { SectionContent } from '@/components/layouts';
import { Flex } from '@/components/ui';
import { Text } from '@/components/ui/text';

export const Community = () => {
  return (
    <SectionContent className="py-24">
      <Flex className="flex-col gap-6 items-center">
        <Text className="" variant="subtitle">
          Meet Our Community!
        </Text>
        <Text className="text-center text-arsenic" variant="bodybase">
          Get inspired or share best moment with us
          <br />
          @safepaws.vn
        </Text>
      </Flex>
    </SectionContent>
  );
};
