import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { Flex } from '@/components/ui/flex';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex className="light:bg-seashell dark:bg-black w-full flex-col h-full">
      <Header />
      <main className="bg-transparent h-full">{children}</main>
      <Footer />
    </Flex>
  );
}
