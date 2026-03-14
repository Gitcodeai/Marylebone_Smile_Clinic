'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import BeforeAfterSlider from '@/components/before-after-slider';
import { staggerContainer, fadeInUp, fadeIn } from '@/lib/animations';
import { ChevronDown } from 'lucide-react';

const categories = ['Veneers', 'Cosmetic Dentistry', 'Bridges'];

type CaseStudy = {
  id: number;
  category: string;
  title: string;
  description: string;
  before: string;
  after: string;
  portrait: string;
  label?: string;
};

const caseStudies: CaseStudy[] = [
  ...[
    "Veneers London", "Clip in Veneers", "Full Mouth Makeover", "Single Tooth Veneer Cost",
    "Replacement Veneers", "Non-Invasive Veneers", "Bottom Teeth Veneers", "Veneers for Narrow Smiles",
    "Veneers for Worn Teeth", "Veneers for Chipped Teeth", "Veneers for Underbites", "Veneers for Overbites",
    "Veneers for Peg Laterals", "Veneers for Crooked Teeth", "Veneers for Missing Teeth", "Veneers for Gaps in Teeth"
  ].map((label, index) => ({
    id: 10 + index,
    category: 'Veneers',
    title: label,
    description: `Discover how our bespoke ${label.toLowerCase()} approach can completely transform your smile with precision and elegance.`,
    before: '/images/before.png',
    after: '/images/after.png',
    portrait: '/images/case 1.png',
    label: label,
  })),
  ...[
    "Dental Implants", "Composite Bonding", "Mini Smile Makeover", "Gummy Smile Makeover",
    "Invisalign", "Teeth Contouring", "Gum Loss Treatment", "Fluorosis and White Spot Smile Makeover", "Teeth Whitening"
  ].map((label, index) => ({
    id: 30 + index,
    category: 'Cosmetic Dentistry',
    title: label,
    description: `Discover how our bespoke ${label.toLowerCase()} approach can completely transform your smile with precision and elegance.`,
    before: '/images/before.png',
    after: '/images/after.png',
    portrait: '/images/case 1.png',
    label: label,
  })),
  {
    id: 3,
    category: 'Bridges',
    title: 'Fixed Aesthetic Bridge',
    description: 'Graceful restoration of dental function and visual harmony.',
    before: '/images/before.png',
    after: '/images/after.png',
    portrait: '/images/case 1.png',
  }
];

export default function BeforeAfterGallery() {
  const [filter, setFilter] = useState('Veneers');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCases = useMemo(() => {
    return filter === 'All'
      ? caseStudies
      : caseStudies.filter(c => c.category === filter);
  }, [filter]);

  // Adjust selected index if filtering changes the list
  const activeCase = filteredCases[selectedIndex] || filteredCases[0];

  // Use stable IDs (not filtered indices) so labels remain correct when filtering.
  const caseLabelsById: Record<number, string> = {
    2: 'Case 2',
    3: 'Case 3',
  };

  return (
    <section id="before-after" className="bg-background min-h-screen w-[100vw] flex flex-col pt-16 pb-20 lg:pt-20 lg:pb-32 selection:bg-accent/30 overflow-x-hidden">
      <div className="max-w-[1600px] px-6 lg:px-12 w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 lg:mb-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl max-[575px]:w-full"
          >

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-foreground tracking-tight leading-[1.1] max-[575px]:text-center"
              style={{ fontSize: 'clamp(26px, 6vw, 60px)' }}
            >
              Evidence of <br /><span className="italic text-accent/80">Silent Perfection.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right leading-relaxed max-[575px]:text-center"
          >
            Explore real patient journeys.
          </motion.p>
        </div>

        {/* Filter Navigation - Desktop */}
        <div className="hidden md:flex flex-wrap justify-start gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setSelectedIndex(0); }}
              className={`px-8 py-3 text-xs uppercase tracking-[0.4em] font-bold border transition-all duration-500 rounded-none ${filter === cat
                ? 'text-foreground border-accent/60 scale-105'
                : 'bg-transparent text-muted-foreground border-border/60 hover:border-accent/40 hover:text-accent'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Navigation - Mobile Dropdown */}
        <div className="md:hidden relative mb-12 z-40">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-center relative px-6 pb-4 pt-[11px] bg-background border border-accent/80 text-xs uppercase tracking-[0.4em] font-bold text-foreground transition-all"
          >
            <span>{filter}</span>
            <ChevronDown className={`absolute right-6 w-4 h-4 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <>
                {/* Backdrop to close dropdown */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsDropdownOpen(false)}
                  className="fixed inset-0 z-30"
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute top-full left-0 w-full mt-[3px] bg-background border border-accent/80 shadow-2xl overflow-hidden z-40"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setFilter(cat);
                        setSelectedIndex(0);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-center px-6 py-4 text-xs uppercase tracking-[0.4em] font-bold transition-colors hover:bg-secondary/50 ${filter === cat ? 'text-foreground' : 'text-muted-foreground'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Main interactive area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Case selection - vertical stack of rectangles */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter} // Re-animate on filter change
            className="lg:col-span-3 order-1 lg:order-1 flex flex-col gap-3 w-full"
          >
            {filteredCases.map((caseStudy, idx) => (
              <motion.button
                key={caseStudy.id}
                variants={fadeInUp}
                onClick={() => setSelectedIndex(idx)}
                className={`w-full min-h-[56px] px-6 py-4 text-left text-xs uppercase tracking-widest font-bold border transition-all duration-500 rounded-none flex items-center justify-start ${selectedIndex === idx
                  ? 'border-accent/60 bg-accent/5 text-foreground'
                  : 'border-border/40 bg-secondary/10 text-muted-foreground hover:border-accent/30 hover:bg-secondary/20 hover:text-foreground'
                  }`}
              >
                {caseStudy.label ?? caseLabelsById[caseStudy.id] ?? `Case ${caseStudy.id}`}
              </motion.button>
            ))}
          </motion.div>

          {/* Center/Right: The Main Stage (Portrait + Vertical Slider) + Case Details inline below */}
          <div className="lg:col-span-9 order-2 lg:order-2 flex flex-col">
            {/* Images row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {/* Patient Portrait */}
              <motion.div
                key={`portrait-${activeCase?.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-[3/2] md:aspect-[3/4] bg-transparent md:bg-muted/30 overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={activeCase?.portrait || '/images/case 1.png'}
                  alt="Patient Portrait"
                  fill
                  className="object-contain md:object-cover"
                  priority
                />
              </motion.div>

              {/* Vertical Slider */}
              <div className="relative aspect-[3/2] md:aspect-[3/4] flex items-center justify-center">
                <BeforeAfterSlider
                  key={`slider-${activeCase?.id}`}
                  caseIndex={activeCase?.id}
                  beforeImage={activeCase?.before}
                  afterImage={activeCase?.after}
                  orientation="vertical"
                />
              </div>
            </div>

            {/* Case Details — directly below images with 7px gap on mobile, 10px on md+ */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={activeCase?.id}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-5 border-t border-border/40 mt-3 md:mt-4"
            >
              <div className="space-y-4 max-[575px]:text-center">
                <h3 className="text-3xl font-serif text-foreground italic">{activeCase?.title}</h3>
                <p className="text-sm text-muted-foreground font-light max-w-lg leading-relaxed">{activeCase?.description}</p>
              </div>
              <div className="flex flex-col items-start lg:items-end border-l lg:border-l-0 lg:border-r border-accent/20 pl-6 lg:pl-0 lg:pr-6 whitespace-nowrap max-[575px]:border-l-0 max-[575px]:pl-0 max-[575px]:items-center">
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
