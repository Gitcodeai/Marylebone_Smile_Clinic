'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeIn } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen lg:max-h-[950px] xl:max-h-[1000px] flex items-center bg-background overflow-hidden pt-20">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)] z-10" />
        <Image
          src="/images/hero-banner.png"
          alt="Marylebone Smile Clinic Interior"
          fill
          className="object-cover opacity-55 scale-105 transition-all duration-700"
          style={{ objectPosition: 'clamp(50%, 70%, 80%) center' }}
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-20 lg:py-32 flex items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full lg:max-w-4xl"
        >
          {/* Top Label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-accent/60" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-accent antialiased">
              London's Premier Cosmetic Dental Studio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-foreground tracking-tight mb-8 sm:mb-10"
            style={{
              fontSize: 'clamp(36px, 7.5vw, 84px)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em'
            }}
          >
            The Craft of <br />
            <span className="italic text-accent/90 pr-2">Signature</span> Smiles.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-sans font-light tracking-wide"
          >
            Discreet, expert-led transformations in the heart of Marylebone.
            Experience a new standard of dental care where clinical excellence
            meets quiet luxury.
          </motion.p>

          {/* Key Features/Social Proof */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 sm:gap-10 mb-12 sm:mb-16">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  { src: '/images/avatar-1.png', alt: 'Patient Review 1' },
                  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', alt: 'Patient Review 2' },
                  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', alt: 'Patient Review 3' }
                ].map((avatar, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-[1.5px] border-background shadow-sm overflow-hidden relative z-[10-i] ring-1 ring-accent/10 bg-secondary">
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      className="object-cover"
                      unoptimized={avatar.src.startsWith('http')}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="text-xs font-bold text-foreground">5.0</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Google Reviews</span>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-[1px] bg-border/40" />

            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-foreground tracking-wider italic font-serif">Harley St. Trained</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Expert Clinicians</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Group */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-8 sm:gap-14 mt-12 sm:mt-16"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto sm:min-w-[340px] bg-primary hover:bg-primary/95 text-primary-foreground rounded-2xl px-12 py-9 text-[11px] uppercase tracking-[0.25em] font-bold group border border-primary transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Free E-Consultation
              <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

          </motion.div>
        </motion.div>
      </div>

      {/* Explore Transformations / Scroll Indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <button
          onClick={() => document.getElementById('before-after')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-foreground/60 hover:text-accent transition-all relative group py-2"
        >
          Explore Transformations
          <span className="absolute bottom-0 left-0 w-8 h-[1.5px] bg-accent transition-all duration-500 group-hover:w-full" />
        </button>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="text-accent/60"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute -right-1/4 top-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-1/4 bottom-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />


    </section>
  );
}
