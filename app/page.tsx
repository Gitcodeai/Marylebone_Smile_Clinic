import type { Metadata } from 'next';
import { createPageMetadata } from './metadata.config';
import Header from '@/components/header';
import Hero from '@/components/hero';
import PatientJourney from '@/components/patient-journey';
import BeforeAfterGallery from '@/components/before-after-gallery';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';

export const generateMetadata = (): Metadata => {
  return createPageMetadata();
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <Header />
      <Hero />
      <PatientJourney />
      <BeforeAfterGallery />
      <LeadForm />
      <Footer />
    </main>
  );
}
