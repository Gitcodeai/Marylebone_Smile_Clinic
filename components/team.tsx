'use client';

import { motion } from 'framer-motion';
import { Award, Linkedin, Star, Instagram } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const team = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    role: 'Principal Cosmetic Artist',
    credentials: 'BDS (Lond), MJDF RCS Eng, PG Dip Aesthetic Med',
    bio: 'With over 15 years in practice, Dr. Mitchell combines clinical precision with an artist\'s eye to create uniquely symmetrical smile transformations.',
    image: '/images/team-member-1.jpg',
  },
  {
    id: 2,
    name: 'Dr. James Chen',
    role: 'Specialist Prosthodontist',
    credentials: 'MSc Implantology, BDS, LDS RCS (Eng)',
    bio: 'Dr. Chen is a leading authority on multi-unit dental restorations, focusing on structural longevity and biocompatible aesthetics.',
    image: '/images/team-member-1.jpg',
  },
  {
    id: 3,
    name: 'Dr. Emma Watson',
    role: 'Orthodontic Lead',
    credentials: 'BDS, MSc Orthodontics (Distinction)',
    bio: 'Emma specializes in adult orthodontic solutions, using advanced 3D modeling to achieve perfect occlusion with minimal intervention.',
    image: '/team-member-1.jpg',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-background py-32 lg:py-48 selection:bg-accent/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 lg:mb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-accent/60" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Our Experts</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-6xl font-serif text-foreground tracking-tight leading-tight">
              Crafted by <br /><span className="italic text-accent/80">Masters of the Smile.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right"
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
              className="group flex flex-col items-start space-y-8"
            >
              {/* Image Container with Elegant Mask */}
              <div className="relative w-full aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Visual Accent */}
                <div className="absolute bottom-6 right-6 z-20 w-12 h-12 bg-background/50 backdrop-blur-md border border-white/20 flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                  <Award className="w-5 h-5 text-accent" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif text-foreground italic">{member.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{member.role}</p>
                </div>

                <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium pb-2 border-b border-border/40 inline-block">{member.credentials}</p>

                <p className="text-sm text-muted-foreground font-light leading-relaxed pt-2">
                  {member.bio}
                </p>

                <div className="flex items-center gap-6 pt-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <Instagram className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
                  <Linkedin className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
                  <Star className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
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
