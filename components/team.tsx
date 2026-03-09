'use client';

import { motion } from 'framer-motion';
import { Award, Linkedin, Star, Instagram } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const team = [
  {
    id: 1,
    name: 'Dr Sahil Patel',
    role: 'Principal Dentist',
    credentials: 'BDS ABACD',
    bio: 'An award-winning cosmetic dentist and clinical lead. Dr Patel combines advanced digital planning with a meticulous approach to facial-aesthetic harmony.',
    image: '/images/experts/Dr Sahil Patel.jpg',
  },
  {
    id: 2,
    name: 'Rania Scott',
    role: 'Patient Care Lead',
    credentials: 'Patient Care Lead RDN',
    bio: 'A dedicated patient advocate who ensures your journey is seamless. Rania coordinates complex clinical treatments with compassionate, luxury-standard care.',
    image: '/images/experts/Rania Scott.jpg',
  },
  {
    id: 3,
    name: 'Dr Chloe Kassis-Crowe',
    role: 'Associate Dentist',
    credentials: 'BDentSc Trinity',
    bio: 'Specializing in restorative excellence and aesthetic alignment. Dr Kassis-Crowe is renowned for her gentle clinical manner and high-precision ceramic artistry.',
    image: '/images/experts/Dr Chloe Kassis-Crowe.jpg',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-secondary/20 min-h-screen w-[100vw] flex flex-col justify-center py-24 selection:bg-accent/30 overflow-x-hidden">
      <div className="max-w-[1600px] px-6 lg:px-12 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 lg:mb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl max-[575px]:flex max-[575px]:flex-col max-[575px]:items-center max-[575px]:text-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 max-[575px]:justify-center">
              <span className="h-[1px] w-12 bg-accent/60" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Our Experts</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-foreground tracking-tight leading-[1.1] max-[575px]:text-center"
              style={{ fontSize: 'clamp(26px, 6vw, 60px)' }}
            >
              Crafted by <br /><span className="italic text-accent/80">Masters of the Smile.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right max-[575px]:text-center"
          >
            Our clinicians are hand-picked for their clinical depth and aesthetic sensitivity.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="group"
            >
              {/* Mobile (xs/sm): Float layout vertically centered next to text, with rest flowing under */}
              <div className="md:hidden clearfix text-left">
                <div className="float-left mr-4 mb-3 relative w-[100px] h-[100px] overflow-hidden transition-all duration-1000 flex-shrink-0">
                  <div className="absolute inset-0 bg-accent/10 hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-foreground italic">{member.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{member.role}</p>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium pb-2 border-b border-border/40 inline-block">{member.credentials}</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed pt-2">{member.bio}</p>
                </div>
              </div>

              {/* Desktop (md+): Vertical stack layout */}
              <div className="hidden md:flex flex-col items-start space-y-8">
                <div className="relative w-full aspect-[4/5] overflow-hidden transition-all duration-1000">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-foreground italic">{member.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{member.role}</p>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium pb-2 border-b border-border/40 inline-block">{member.credentials}</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed pt-2">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-32 pt-16 border-t border-border/40 flex flex-wrap items-center justify-center gap-x-20 gap-y-10 brightness-50 opacity-50 grayscale"
        >
          {/* Mock Logos */}
          <span className="text-xs uppercase tracking-[0.5em] font-bold">VOGUE</span>
          <span className="text-xs uppercase tracking-[0.5em] font-bold">TATLER</span>
          <span className="text-xs uppercase tracking-[0.5em] font-bold">GQ</span>
          <span className="text-xs uppercase tracking-[0.5em] font-bold">FORBES</span>
        </motion.div>
      </div>
    </section>
  );
}
