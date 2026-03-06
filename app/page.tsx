import type { Metadata } from 'next';
import { createPageMetadata } from './metadata.config';
import Header from '@/components/header';
import Hero from '@/components/hero';
import PatientJourney from '@/components/patient-journey';
import Services from '@/components/services';
import BeforeAfterGallery from '@/components/before-after-gallery';
import Team from '@/components/team';
import SocialProof from '@/components/social-proof';
import LeadForm from '@/components/lead-form';
import FloatingCTA from '@/components/floating-cta';
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
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <Services />
      </div>
      <BeforeAfterGallery />
      <Team />
      <SocialProof />
      <LeadForm />
      <Footer />
    </main>
  );
}

