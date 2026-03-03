'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeIn } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Background Cinematic Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)] z-10" />
        <Image
          src="/images/hero-banner.png"
          alt="Marylebone Smile Clinic Interior"
          fill
          className="object-cover object-center opacity-40 scale-105"
          priority
        />
      </div>

      <div className="relative z-20 max-w-[1600px] px-6 lg:pl-[150px] lg:pr-12 py-24 lg:py-32 w-full ml-0 mr-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
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
            className="text-5xl sm:text-7xl lg:text-8xl font-serif text-foreground leading-[1.05] mb-10 tracking-tight"
          >
            The Craft of <br />
            <span className="italic text-accent/90">Signature</span> Smiles.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl font-sans font-light tracking-wide"
          >
            Discreet, expert-led transformations in the heart of Marylebone.
            Experience a new standard of dental care where clinical excellence
            meets quiet luxury.
          </motion.p>

          {/* Key Features/Social Proof */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8 mb-14">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-accent/20" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="text-xs font-bold text-foreground">5.0</span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Google Reviews</span>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-border/60 hidden sm:block" />

            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground tracking-wider italic font-serif">Harley St. Trained</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Expert Clinicians</span>
            </div>
          </motion.div>

          {/* CTA Group */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground rounded-none px-12 py-8 text-xs uppercase tracking-[0.2em] font-bold group border border-primary transition-all duration-500 hover:scale-[1.02]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
              <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <button
              onClick={() => document.getElementById('before-after')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/70 hover:text-accent transition-all relative group py-2"
            >
              Explore Transformations
              <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
            </button>
          </motion.div>
        </motion.div>
      </div>


      {/* Decorative Orbs */}
      <div className="absolute -right-1/4 top-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-1/4 bottom-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
