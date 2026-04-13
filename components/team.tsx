'use client';

import { motion } from 'framer-motion';
import { Award, Linkedin, Star, Instagram } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const team = [
  {
    id: 1,
    name: 'Nisar Yong Liang',
    role: 'Healer',
    credentials: 'Lead Practitioner',
    bio: 'Dedicated to the mastery of energy alignment and holistic recovery. Nisar specializes in identifying meridional blockages and restoring the vital flow of Qi through precise, traditional techniques.',
    image: '/images/concept.png',
  },
  {
    id: 2,
    name: 'Junaina Nisar',
    role: 'Healer',
    credentials: 'Clinical Practitioner',
    bio: 'Co-leading the sanctuary with a focus on spiritual harmony and physical restoration. Junaina brings a compassionate approach to distance and direct healing, ensuring every patient finds their natural balance.',
    image: '/images/experts/placeholder.jpg', // Placeholder for now
  }
];

export default function Team() {
  return (
    <section id="team" className="bg-secondary/20 min-h-screen w-[100vw] flex flex-col justify-center py-16 selection:bg-accent/30 overflow-x-hidden">
      <div className="max-w-[1600px] px-6 lg:px-12 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-12 lg:mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl max-[575px]:flex max-[575px]:flex-col max-[575px]:items-center max-[575px]:text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-foreground tracking-tight leading-[1.1] text-left"
              style={{ fontSize: 'clamp(26px, 6vw, 60px)' }}
            >
              The Healers of <br /><span className="italic text-accent/80">NYL Sanctuary.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right text-left"
          >
            Guided by tradition, dedicated to your natural harmony.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="group"
            >
              {/* Desktop & Mobile logic combined for simplicity in a 2-column layout */}
              <div className="flex flex-col items-start space-y-8">
                <div className="relative w-full aspect-[4/5] overflow-hidden transition-all duration-1000 border border-border/40 bg-accent/5">
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors z-10" />
                  {member.image !== '/images/experts/placeholder.jpg' ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                      <Star className="w-20 h-20 text-accent" />
                    </div>
                  )}
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
      </div>
    </section>
  );
}
