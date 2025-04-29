import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-seashell w-full flex flex-col h-full">
      <Header />
      <main className="bg-transparent h-full">{children}</main>
      <Footer />
    </div>
  );
}
