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
              className="font-serif text-foreground tracking-tight leading-[1.1] max-[575px]:text-center"
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
            className="float-right ml-6 mb-6 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] aspect-square relative bg-transparent overflow-hidden object-cover"
          >
            <Image
              src="/images/concept.png"
              alt="Concept of Treatment"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.p variants={fadeInUp} className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
