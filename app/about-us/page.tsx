import type { Metadata } from 'next';
import { createPageMetadata } from '../metadata.config';
import Header from '@/components/header';
import Team from '@/components/team';
import Footer from '@/components/footer';

export const generateMetadata = (): Metadata => {
  return createPageMetadata({
    title: 'About Us | NYL Healing',
    description: 'Meet the experts behind NYL Healing. Learn about our clinical team and holistic treatment philosophy.',
  });
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-white pt-[112px]">
      <Header />
      <Team />
      <Footer />
    </main>
  );
}
