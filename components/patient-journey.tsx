'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import { MapPin, Calendar, Camera, Heart, Sparkles, LucideIcon } from 'lucide-react';

interface Step {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const StepItem = ({ step }: { step: Step }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            variants={fadeInUp}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -10 }}
            transition={{ duration: 0.5 }}
            className="group relative flex items-start gap-6 sm:gap-12 pl-16 sm:pl-44 lg:pl-52 transition-all duration-700"
        >
            {/* Index Overlay */}
            <span className={`absolute left-4 top-0 text-4xl sm:text-9xl font-serif italic -z-0 transition-colors leading-none select-none ${isInView ? 'text-accent/30' : 'text-accent/10'}`}>
                {step.id}
            </span>

            <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                    <step.icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-opacity ${isInView ? 'text-accent opacity-100' : 'text-accent/40 opacity-40'}`} />
                    <h3 className={`text-xl sm:text-3xl font-serif italic tracking-tight leading-none transition-colors ${isInView ? 'text-foreground' : 'text-foreground/40'}`}>
                        {step.title}
                    </h3>
                </div>
                <p className={`text-sm sm:text-base font-light leading-relaxed max-w-sm transition-colors ${isInView ? 'text-muted-foreground' : 'text-muted-foreground/40'}`}>
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
};

const steps = [
    {
        id: '01',
        title: 'Consultation & 3D Preview',
        description: 'A bespoke discussion with your artist-clinician. We use digital scanning to show you a simulated "after" before we touch a single tooth.',
        icon: Camera
    },
    {
        id: '02',
        title: 'Precision Artistry',
        description: 'Using the finest hand-layered porcelain or clear aligner technology, we craft your restoration to exact facial specifications.',
        icon: Sparkles
    },
    {
        id: '03',
        title: 'The Final Reveal',
        description: 'Transformative fitting in our private Marylebone suite. Experience the immediate confidence boost of a truly perfected smile.',
        icon: Heart
    }
];

export default function PatientJourney() {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="journey" className="bg-background min-h-screen flex flex-col justify-center py-20 lg:py-32 selection:bg-accent/30 tracking-tight overflow-hidden">
            <div className="max-w-[1600px] px-6 lg:px-12 mx-auto w-full">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6 sm:mb-8">
                            <span className="h-[1px] w-12 bg-accent/60" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">The Marylebone Standard</span>
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-6xl font-serif text-foreground tracking-tight leading-tight">
                            An Architectural <br /><span className="italic text-accent/80">Journey to Perfection.</span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right leading-relaxed"
                    >
                        Three steps from anticipation to enduring clinical excellence.
                    </motion.p>
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start mt-8">
                    {/* Left: Interactive Step Stack */}
                    <div ref={containerRef} className="lg:col-span-5 space-y-12 lg:space-y-16 relative">
                        {/* Vertical Progress Bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent/10" />
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-accent origin-top z-10"
                        />

                        {steps.map((step) => (
                            <StepItem key={step.id} step={step} />
                        ))}

                        <div className="pt-8 lg:pt-12 pl-4 sm:pl-0">
                            <motion.div
                                initial={{ scale: 0.98, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="p-6 sm:p-10 border border-accent/20 bg-secondary/5 flex items-center justify-between group cursor-pointer hover:bg-secondary/10 transition-all duration-500"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Priority Status</p>
                                    <p className="text-sm sm:text-base font-serif italic text-foreground leading-none">Check Next Available Slot</p>
                                </div>
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                    <Calendar className="w-5 h-5" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Gallery Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 relative mt-12 lg:mt-0"
                    >
                        <div className="group relative aspect-[3/4] overflow-hidden translate-y-12">
                            <Image
                                src="/images/clinic-1.png"
                                alt="Marylebone Clinic Suite"
                                fill
                                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                            />
                        </div>
                        <div className="space-y-4 sm:space-y-8">
                            <div className="group relative aspect-square overflow-hidden bg-accent/10">
                                <Image
                                    src="/images/clinic-2.png"
                                    alt="Restorative Detail"
                                    fill
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 border-[15px] sm:border-[25px] border-background/20" />
                            </div>
                            <div className="group relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src="/images/hero-banner.png"
                                    alt="Clinic Interior"
                                    fill
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-3 px-4 py-2 bg-background/60 backdrop-blur-md">
                                    <MapPin className="w-4 h-4 text-accent" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">W1, Marylebone</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
