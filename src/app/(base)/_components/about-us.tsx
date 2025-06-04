'use client';

import aboutUsDog from '@/assets/images/about-us-dog.png';
import { SectionContent } from '@/components/layouts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Flex,
} from '@/components/ui';
import { Text } from '@/components/ui/text';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';

const ourValuesContent = [
  {
    title: 'Supporting Animal Shelters',
    content:
      'A portion of each sale helps fund animal shelters and community veterinary services',
  },
  {
    title: 'Eco-Friendly Commitment',
    content:
      'Sustainable, biodegradable packaging and materials to protect the environment',
  },
  {
    title: 'Premium Pet Health Products',
    content:
      'Quality products and supplements from trusted global brands for pet wellness',
  },
];

export function AboutUs() {
  return (
    <SectionContent className="py-24">
      <Flex className="max-w-[800px] flex-col gap-18">
        <Flex className="gap-6 items-center flex-col md:flex-row px-6 md:px-0">
          <Text variant="titlehero">Who We Are?</Text>
          <Text variant="bodybase" className="text-arsenic">
            SafePaws is more than a pet brand, we’re a caring community
            committed to pet health and making a positive impact.
            <br />
            <br />
            Our work is to use our business as a force for good, ensuring a
            sustainable future with healthy ecosystems, meaningful work, and
            thriving communities.
          </Text>
        </Flex>
        <Image
          src={aboutUsDog}
          alt="About Us Pic"
          width={800}
          height={388}
          className="rounded-lg"
        />
        <div className="w-full">
          <p className="font-bold text-subtitle text-center mb-6">Our Values</p>
          <div className="px-6 md:px-0">
            <Accordion type="multiple">
              {ourValuesContent.map((item) => (
                <AccordionItem
                  value={item.title}
                  key={item.title}
                  className="border-b-0"
                >
                  <AccordionTrigger
                    className="text-base"
                    closedIcon={Plus}
                    openedIcon={Minus}
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-3">
                    <Text variant="bodybase">{item.content}</Text>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Flex>
    </SectionContent>
  );
}
