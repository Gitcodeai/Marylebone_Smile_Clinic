'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BeforeAfterSlider from '@/components/before-after-slider';
import { staggerContainer, fadeInUp, fadeIn } from '@/lib/animations';

const categories = ['All', 'Veneers', 'Invisalign', 'Whitening', 'Bridges'];

const caseStudies = [
  {
    id: 1,
    category: 'Veneers',
    title: 'Precision Porcelain Veneers',
    description: '10 Hand-crafted porcelain veneers for a natural, effortless aesthetic.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 2,
    category: 'Invisalign',
    title: 'Discreet Alignment Correction',
    description: 'Clear aligner therapy to correct crowding and refine the smile line.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 3,
    category: 'Bridges',
    title: 'Fixed Aesthetic Bridge',
    description: 'Graceful restoration of dental function and visual harmony.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 4,
    category: 'Whitening',
    title: 'Hydrated Laser Whitening',
    description: 'Pain-free, high-intensity whitening for a brilliant, clean finish.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 5,
    category: 'Veneers',
    title: 'The Signature Smile Makeover',
    description: 'Complete smile reconstruction focusing on facial symmetry.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 6,
    category: 'Whitening',
    title: 'Enamel-Safe Radiance',
    description: 'Gentle, professional brightening to lift existing composite work.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 7,
    category: 'Invisalign',
    title: 'Invisible Arch Expansion',
    description: 'Widening the smile to create a more youthfull, full appearance.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 8,
    category: 'Veneers',
    title: 'Minimal-Prep Ceramic',
    description: 'Preserving natural tooth structure while enhancing form and color.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 9,
    category: 'Bridges',
    title: 'Single-Unit Restoration',
    description: 'Single-visit restoration for emergency or immediate needs.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
  {
    id: 10,
    category: 'Veneers',
    title: 'Natural Character Veneers',
    description: 'Adding character and texture to veneers for true-to-life dentistry.',
    before: '/before-case-1.jpg',
    after: '/after-case-1.jpg',
  },
];

export default function BeforeAfterGallery() {
  const [filter, setFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCases = useMemo(() => {
    return filter === 'All'
      ? caseStudies
      : caseStudies.filter(c => c.category === filter);
  }, [filter]);

  // Adjust selected index if filtering changes the list
  const activeCase = useMemo(() => {
    return filteredCases[selectedIndex] || filteredCases[0];
  }, [filteredCases, selectedIndex]);

  return (
    <section id="before-after" className="bg-background py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-accent/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent antialiased">Transformation Showcase</span>
              <div className="h-px w-8 bg-accent/60" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-foreground tracking-tight max-w-2xl leading-tight">
              Evidence of <br /><span className="italic text-accent/80">Silent Perfection.</span>
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-light">Explore real patient journeys.</p>
          </motion.div>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setSelectedIndex(0); }}
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.4em] font-bold border transition-all duration-500 rounded-none ${filter === cat
                ? 'bg-primary text-primary-foreground border-primary scale-105 shadow-xl'
                : 'bg-transparent text-muted-foreground border-border/60 hover:border-accent/40 hover:text-accent'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main interactive area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Thumbnail Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter} // Re-animate on filter change
            className="lg:col-span-4 order-2 lg:order-1 grid grid-cols-5 lg:grid-cols-2 gap-4 h-fit"
          >
            {filteredCases.map((case_, idx) => (
              <motion.button
                key={case_.id}
                variants={fadeInUp}
                onClick={() => setSelectedIndex(idx)}
                className={`relative aspect-square overflow-hidden group transition-all duration-700 ${selectedIndex === idx
                  ? 'ring-1 ring-accent/60 ring-offset-4'
                  : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100'
                  }`}
              >
                <div className="absolute inset-0 bg-accent/5 z-0" />
                <div className="absolute inset-0 flex items-center justify-center border border-border/40 text-[9px] uppercase tracking-widest font-bold z-10 transition-colors group-hover:text-accent">
                  Case {idx + 1}
                </div>
                {/* Image Placeholder Reveal */}
                <div className="absolute inset-0 bg-secondary/20 z-0 transition-transform duration-500 group-hover:scale-110" />
              </motion.button>
            ))}
          </motion.div>

          {/* Right: The Main Stage */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            <BeforeAfterSlider
              caseIndex={activeCase?.id} // This will trigger the depth transition
              beforeImage={activeCase?.before}
              afterImage={activeCase?.after}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={activeCase?.id}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold px-3 py-1 border border-accent/20">{activeCase?.category}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Patient Study #{activeCase?.id}</span>
                </div>
                <h3 className="text-3xl font-serif text-foreground italic">{activeCase?.title}</h3>
                <p className="text-sm text-muted-foreground font-light max-w-lg leading-relaxed">{activeCase?.description}</p>
              </div>

              <div className="flex flex-col items-start lg:items-end border-l lg:border-l-0 lg:border-r border-accent/20 pl-6 lg:pl-0 lg:pr-6">
                <p className="text-[10px] uppercase tracking-widest text-foreground font-bold mb-2">Duration</p>
                <p className="text-sm font-serif italic text-muted-foreground">Approx. 4-6 Weeks</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
