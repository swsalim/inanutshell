import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';

export default function MarketingLayout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-stone-100 dark:bg-stone-900 dark:ring-stone-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Container className="mt-16 sm:mt-32">{children}</Container>
        </main>
        <Footer />
      </div>
    </>
  );
}
