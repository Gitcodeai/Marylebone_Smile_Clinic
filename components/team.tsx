'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Cosmetic Dentist',
    credentials: 'BDS, MJDF RCS, Cosmetic Dentistry Diploma',
    bio: 'Specialist in smile design and cosmetic transformations with 15+ years of experience.',
    image: '/team-member-1.jpg',
  },
  {
    id: 2,
    name: 'Dr. James Chen',
    role: 'Restorative Specialist',
    credentials: 'BDS, MSc Prosthodontics, MJDF RCS',
    bio: 'Expert in implant placement and comprehensive dental restoration.',
    image: '/team-member-1.jpg',
  },
  {
    id: 3,
    name: 'Dr. Emma Watson',
    role: 'Orthodontic Specialist',
    credentials: 'BDS, Diploma in Orthodontics, MJDF RCS',
    bio: 'Pioneering invisible aligner treatments with precision and artistry.',
    image: '/team-member-1.jpg',
  },
];

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="team" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Meet Our Team
            </span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-4"
          >
            Award-Winning Dentists
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Highly skilled professionals dedicated to your smile
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Team Member Card */}
              <div className="relative bg-card border border-border rounded-lg overflow-hidden mb-4">
                <div className="aspect-square relative bg-gradient-to-br from-accent/20 via-secondary/10 to-muted group-hover:from-accent/30 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-1">
                <h3 className="text-lg font-serif text-foreground mb-1">
                  {member.name}
                </h3>

                <p className="text-sm font-medium text-accent mb-3">
                  {member.role}
                </p>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {member.credentials}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional team info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            All team members hold advanced qualifications and continue professional development
          </p>
        </motion.div>
      </div>
    </section>
  );
}
