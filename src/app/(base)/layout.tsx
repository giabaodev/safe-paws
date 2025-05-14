import { Footer, Header } from '@/components/layouts';
import { Flex } from '@/components/ui/flex';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex className="light:bg-seashell dark:bg-black w-full flex-col h-screen">
      <Header />
      <main className="bg-transparent">{children}</main>
      <Footer />
    </Flex>
  );
}
