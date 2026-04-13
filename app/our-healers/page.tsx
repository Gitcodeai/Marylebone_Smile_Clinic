import type { Metadata } from 'next';
import { createPageMetadata } from '../metadata.config';
import Header from '@/components/header';
import Team from '@/components/team';
import Footer from '@/components/footer';

export const generateMetadata = (): Metadata => {
  return createPageMetadata({
    title: 'Our Healers | NYL Healing',
    description: 'Meet the master practitioners at NYL Sanctuary. Discover the experts behind our Sujok Acupuncture and precise meridional alignment.',
  });
};

export default function HealersPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-white pt-[112px]">
      <Header />
      
      {/* Experts Section */}
      <Team />

      {/* Our Achievements Section */}
      <section className="bg-background py-20 lg:py-32 border-t border-border/40">
        <div className="max-w-[1240px] px-6 lg:px-12 mx-auto">
          <div className="flex flex-col gap-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
               <h2 className="font-serif text-4xl sm:text-5xl text-foreground italic">Our Achievements</h2>
               <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Years of Dedicated Practice</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-8 p-8 lg:p-12 bg-secondary/5 border border-border/40 hover:bg-secondary/10 transition-colors duration-500">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-foreground italic">Nisar</h3>
                  <div className="h-[1px] w-12 bg-accent" />
                </div>
                <p className="text-muted-foreground font-light leading-relaxed text-sm lg:text-base">
                  Expert in Sujok Acupuncture and meridional restoration. With years of clinical practice, Nisar has pioneered techniques in energy alignment and physical restoration, helping thousands find relief and balance.
                </p>
              </div>

              <div className="space-y-8 p-8 lg:p-12 bg-secondary/5 border border-border/40 hover:bg-secondary/10 transition-colors duration-500">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-foreground italic">Junaina</h3>
                  <div className="h-[1px] w-12 bg-accent" />
                </div>
                <p className="text-muted-foreground font-light leading-relaxed text-sm lg:text-base">
                  Master of holistic recovery and patient-centered healing. Junaina specializes in bespoke therapy plans that integrate traditional wisdom with modern wellness standards, ensuring a complete healing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
