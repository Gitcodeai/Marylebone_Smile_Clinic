'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Zap, Heart, Star, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations';

const services = [
  {
    id: 1,
    title: 'Cosmetic Consultation(s)',
    tagline: 'Expert Assessment',
    description: 'A comprehensive evaluation of your smile and aspirations to outline a bespoke treatment journey tailored to you.',
    icon: Heart,
    price: '£150',
    features: ['Finance is available', 'Personalized care', 'Expert clinicians']
  },
  {
    id: 2,
    title: 'Ceramics',
    tagline: 'Feather-Edge, Contact-Lens, Ultra-Thin',
    description: 'Elite ceramic restorations crafted to flawlessly mimic the translucency and strength of natural enamel.',
    icon: Star,
    price: 'From £995 per tooth',
    features: ['Finance is available', 'Ultra-thin profile', 'Natural aesthetics']
  },
  {
    id: 3,
    title: 'Porcelain/Ceramic Veneers',
    tagline: 'Signature Enhancements',
    description: 'Hand-crafted veneers designed to harmonize with your facial features and skin tone for a radiant look.',
    icon: Sparkles,
    price: 'From £995 per tooth',
    features: ['Finance is available', 'Hand-layered ceramic', 'Minimal prep']
  },
  {
    id: 4,
    title: 'Porcelain/Ceramic Crowns',
    tagline: 'Structural Integrity',
    description: 'Durable, highly aesthetic crowns that restore the natural form, function, and appearance of damaged teeth.',
    icon: ShieldCheck,
    price: 'From £995 per tooth',
    features: ['Finance is available', 'Optimal strength', 'Flawless integration']
  },
  {
    id: 5,
    title: 'Composite Bonding',
    tagline: 'Artistic Contouring',
    description: 'A minimally invasive procedure using premium composite resin to sculpt and perfect your natural smile.',
    icon: Layout,
    price: 'From £495 per tooth',
    features: ['Finance is available', 'Same-day results', 'No-drill technique']
  },
  {
    id: 6,
    title: 'Teeth Straightening – Invisalign',
    tagline: 'Discreet Correction',
    description: 'Virtually invisible aligners custom-modeled to refine your occlusion without the compromise of traditional braces.',
    icon: Heart,
    price: 'From £3995',
    features: ['Finance is available', 'iTero 3D scanning', 'Removable convenience']
  },
  {
    id: 7,
    title: 'Tooth Replacement – Dental Implants',
    tagline: 'Foundation of Confidence',
    description: 'Leading-edge titanium implants that feel, look, and function exactly like your natural teeth.',
    icon: ShieldCheck,
    price: 'From £3495 per tooth',
    features: ['Finance is available', 'Lifetime structural warranty', 'CBCT planning']
  },
  {
    id: 8,
    title: 'Bone Grafting',
    tagline: 'Structural Regeneration',
    description: 'Advanced grafting procedures designed to restore missing bone structure and prepare for successful implant placement.',
    icon: Star,
    price: 'From £995',
    features: ['Finance is available', 'Advanced biomaterials', 'Expert surgical care']
  },
  {
    id: 9,
    title: 'Gum Grafting',
    tagline: 'Soft Tissue Optimization',
    description: 'Specialized techniques to rebuild gum lines, enhancing both oral aesthetics and functional health.',
    icon: Heart,
    price: 'From £995',
    features: ['Finance is available', 'Minimally invasive', 'Predictable healing']
  },
  {
    id: 10,
    title: 'Gum Recession Graft',
    tagline: 'Protective Coverage',
    description: 'Targeted root coverage treatments designed to protect against sensitivity while restoring a balanced smile line.',
    icon: ShieldCheck,
    price: 'From £2495',
    features: ['Finance is available', 'Reduced sensitivity', 'Improved aesthetics']
  },
  {
    id: 11,
    title: 'Mini Smile Makeover',
    tagline: 'Refined Enhancements',
    description: 'A swift, targeted combination of cosmetic procedures focusing on the most immediately visible aspects of your smile.',
    icon: Sparkles,
    price: '£795',
    features: ['Finance is available', 'Quick transformation', 'Cost-effective']
  },
  {
    id: 12,
    title: 'Gummy Smile Makeover',
    tagline: 'Proportional Balance',
    description: 'Delicate reshaping of the gingival architecture to expose more tooth structure and create visual harmony.',
    icon: Layout,
    price: 'From £995',
    features: ['Finance is available', 'Laser precision', 'Symmetrical results']
  },
  {
    id: 13,
    title: 'White Spot Smile Makeover',
    tagline: 'Flawless Complexion',
    description: 'Innovative resin infiltration therapy to permanently erase white spots and unify your tooth coloration.',
    icon: Zap,
    price: '£795',
    features: ['Finance is available', 'Non-invasive', 'Immediate clarity']
  },
  {
    id: 14,
    title: 'Dental Health Check',
    tagline: 'Preventative Excellence',
    description: 'An exhaustive analysis of your oral health, ensuring a strong and perfectly maintained foundation over time.',
    icon: Heart,
    price: 'From £250',
    features: ['Finance is available', 'Comprehensive screening', 'Tailored advice']
  },
  {
    id: 15,
    title: 'Composite Bonding Maintenance',
    tagline: 'Enduring Brilliance',
    description: 'Professional repolishing and aesthetic fine-tuning to keep your composite bonding looking pristine.',
    icon: Sparkles,
    price: '£395',
    features: ['Finance is available', 'Restored luster', 'Extended longevity']
  },
  {
    id: 16,
    title: 'Home Whitening',
    tagline: 'Gradual Luminosity',
    description: 'Custom-fitted trays combined with professional-grade gels for safe, predictable lightening at your convenience.',
    icon: Zap,
    price: '£495',
    features: ['Finance is available', 'Custom-fit trays', 'Lasting brightness']
  },
  {
    id: 17,
    title: 'Gum Contouring',
    tagline: 'Architectural Framing',
    description: 'Gentle recontouring of irregular gum tissues to frame your teeth evenly and beautifully.',
    icon: Layout,
    price: '£695',
    features: ['Finance is available', 'Laser technology', 'Rapid recovery']
  },
  {
    id: 18,
    title: 'Tooth Contouring',
    tagline: 'Subtle Perfection',
    description: 'Minute adjustments to the enamel surface to smooth uneven edges and perfect the overall silhouette of your smile.',
    icon: Star,
    price: '£395',
    features: ['Finance is available', 'Painless procedure', 'Instant refinement']
  },
  {
    id: 19,
    title: 'Fixed Wire Retainers',
    tagline: 'Permanent Alignment',
    description: 'A discreet, permanent wire bonded to the inner arch to ensure your teeth remain in their perfect, aligned positions.',
    icon: ShieldCheck,
    price: '£495',
    features: ['Finance is available', 'Invisible support', 'Zero maintenance']
  },
  {
    id: 20,
    title: 'Removable Retainers',
    tagline: 'Flexible Protection',
    description: 'Custom-crafted clear aligners designed to be worn nightly, safeguarding your orthodontic investment.',
    icon: Layout,
    price: '£495',
    features: ['Finance is available', 'Durable material', 'Comfortable fit']
  },
  {
    id: 21,
    title: 'Night Guard',
    tagline: 'Vital Defense',
    description: 'A bespoke appliance to meticulously absorb grinding forces, protecting your restorations and natural teeth while you sleep.',
    icon: ShieldCheck,
    price: '£495',
    features: ['Finance is available', 'Protect investments', 'Alleviate tension']
  }
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="services" className="bg-secondary/20 min-h-screen w-[100vw] flex flex-col justify-center py-16 lg:py-24 selection:bg-accent/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

      <div className="max-w-[1600px] px-6 lg:px-12 mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-10 mb-10 sm:mb-12 lg:mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl max-[575px]:flex max-[575px]:flex-col max-[575px]:items-center max-[575px]:w-full"
          >

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-foreground tracking-tight leading-[1.1] max-[575px]:text-center"
              style={{
                fontSize: 'clamp(26px, 6vw, 60px)',
              }}
            >
              Bespoke Solutions <br /><span className="italic text-accent/80">Tailored to You.</span>
            </motion.h2>
          </motion.div>

          {/* Carousel Arrows */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="flex items-center gap-3 sm:gap-4 mt-[19px] md:mt-0 max-[575px]:w-full max-[575px]:justify-center"
          >
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border/60 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group min-h-[44px] min-w-[44px]"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border/60 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group min-h-[44px] min-w-[44px]"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Content */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex -ml-4 sm:-ml-6">
            {services.map((service, index) => (
              <div key={service.id} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 sm:pl-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-background border border-border/40 p-6 sm:p-8 md:p-10 h-full flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 relative overflow-hidden"
                >
                  {/* Subtle Background Icon */}
                  <service.icon className="absolute -right-8 -bottom-8 w-32 sm:w-40 h-32 sm:h-40 text-accent/5 rotate-12 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-0" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 flex items-center justify-center mb-6 sm:mb-8 border border-accent/20 group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-500">
                      <service.icon className="w-4 h-4 sm:w-5 h-5" />
                    </div>

                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2 sm:mb-3">{service.tagline}</p>
                    <h3 className="text-xl sm:text-2xl font-serif italic text-foreground mb-4 sm:mb-6">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow">{service.description}</p>

                    <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                      {service.features.map(f => (
                        <div key={f} className="flex items-center gap-2 sm:gap-3">
                          <CheckIcon />
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-foreground/80 font-semibold whitespace-nowrap">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 sm:pt-8 border-t border-border/40 flex items-center justify-between mt-auto">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{service.price}</span>
                      <button className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-foreground font-bold hover:text-accent transition-colors flex items-center gap-2 group/btn">
                        Inquire <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12 sm:mt-16">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] transition-all duration-700 ${i === selectedIndex ? 'w-10 sm:w-12 bg-accent' : 'w-4 sm:w-6 bg-border/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5L19 12L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
