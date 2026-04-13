'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function BeforeAfterGallery() {
  return (
    <section id="before-after" className="bg-background w-[100vw] flex flex-col pt-16 pb-20 lg:pt-20 lg:pb-32 selection:bg-accent/30 overflow-x-hidden">
      <div className="max-w-[1600px] px-6 lg:px-12 w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-foreground tracking-tight leading-[1.1] text-left"
              style={{ fontSize: 'clamp(26px, 6vw, 60px)' }}
            >
              Concept of <br /><span className="italic text-accent/80">this treatment</span>
            </motion.h2>
          </motion.div>
        </div>

        {/* Floated Image and Wrapping Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm md:text-base text-muted-foreground font-light leading-relaxed clear-both flow-root"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="float-right ml-6 mb-6 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[550px] aspect-square relative bg-transparent overflow-hidden object-cover"
          >
            <Image
              src="/images/concept.png"
              alt="Concept of Treatment"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.p variants={fadeInUp} className="mb-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-8 mt-12 max-w-4xl">
            <h3 className="text-xl font-serif italic text-foreground border-b border-border/40 pb-4">Treatment Guidelines & Structure</h3>
            
            <div className="space-y-6">
              {[
                "To ensure the maximum efficacy of your energy healing, please refrain from using phones or electronic devices during the session. We recommend maintaining a \"receiving mode\" by following the specific sitting postures and methods outlined in our guide to help the energy flow unobstructed.",
                "The treatment is structured in progressive phases, with one complete session consisting of 11 individual sittings. Your practitioner will provide a personalized assessment to determine exactly how many sittings are required to achieve your specific recovery goals.",
                "Getting started involves a simple registration process followed by a transparent tiered fee structure. Detailed pricing for single sittings versus full 11-session blocks can be found below to help you plan your healing journey."
              ].map((text, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-accent/40 font-serif italic text-2xl leading-none pt-1">0{i + 1}</span>
                  <p className="flex-1 text-sm md:text-base leading-relaxed font-light">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
