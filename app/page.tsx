import Header from '@/components/header';
import Hero from '@/components/hero';
import BeforeAfterGallery from '@/components/before-after-gallery';
import Services from '@/components/services';
import Team from '@/components/team';
import TestimonialCarousel from '@/components/testimonial-carousel';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BeforeAfterGallery />
      <Services />
      <Team />
      <TestimonialCarousel />
      <LeadForm />
      <Footer />
    </main>
  );
}
