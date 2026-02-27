'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/before-after-slider';

const caseStudies = [
  {
    id: 1,
    title: 'Complete Smile Makeover',
    description: 'Veneers and whitening',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 2,
    title: 'Alignment Correction',
    description: 'Invisible aligners',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 3,
    title: 'Restoration Excellence',
    description: 'Crown placement',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 4,
    title: 'Whitening Transformation',
    description: 'Professional whitening',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 5,
    title: 'Full Mouth Rehabilitation',
    description: 'Multiple treatments',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 6,
    title: 'Cosmetic Refinement',
    description: 'Bonding and shaping',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 7,
    title: 'Implant Success Story',
    description: 'Dental implants',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 8,
    title: 'Smile Design',
    description: 'Comprehensive treatment',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 9,
    title: 'Gum Contouring',
    description: 'Aesthetic enhancement',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 10,
    title: 'Perfect Smile',
    description: 'Full transformation',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
];

export default function BeforeAfterGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Proven Results
            </span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-4"
          >
            See Our Transformations
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real patient transformations showcasing the power of modern dentistry
          </motion.p>
        </motion.div>

        {/* Main slider - Featured case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <BeforeAfterSlider 
            caseIndex={selectedIndex}
            beforeImage={caseStudies[selectedIndex].before}
            afterImage={caseStudies[selectedIndex].after}
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-serif text-foreground">
              {caseStudies[selectedIndex].title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {caseStudies[selectedIndex].description}
            </p>
          </div>
        </motion.div>

        {/* Case thumbnails grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {caseStudies.map((case_, index) => (
            <motion.button
              key={case_.id}
              variants={itemVariants}
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-lg aspect-square transition-all ${
                selectedIndex === index
                  ? 'ring-2 ring-accent'
                  : 'hover:ring-2 hover:ring-border'
              }`}
            >
              <div
                className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-muted-foreground text-center px-2">
                  Case {index + 1}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
