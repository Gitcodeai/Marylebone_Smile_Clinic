'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Top accent */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Premium Dental Transformations
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-6"
          >
            Your Smile,{' '}
            <span className="text-accent">Perfected</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
          >
            Award-winning cosmetic and restorative dentistry in Marylebone. 
            Experience world-class dental care with stunning, natural-looking results.
          </motion.p>

          {/* Social proof badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-sm text-foreground font-medium">
              5.0 Google Reviews • 200+ Transformations
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary rounded-full px-8"
            >
              View Transformations
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
