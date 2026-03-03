'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import { MapPin, Calendar, Camera, Heart, CheckCircle2 } from 'lucide-react';

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
    return (
        <section id="journey" className="bg-background min-h-screen flex flex-col justify-center py-24 selection:bg-accent/30 tracking-tight overflow-hidden">
            <div className="max-w-[1600px] px-6 lg:px-12 mx-auto">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 lg:mb-32">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
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
                        className="text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right"
                    >
                        Three steps from anticipation to enduring clinical excellence.
                    </motion.p>
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
                    {/* Left: Interactive Step Stack */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-16"
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.id}
                                variants={fadeInUp}
                                className="group relative flex items-start gap-12 border-l border-border/40 pl-12 lg:pl-16 hover:border-accent transition-all duration-700 pb-4"
                            >
                                {/* Index Overlay */}
                                <span className="absolute -left-4 top-0 text-7xl font-serif italic text-accent/5 -z-0 group-hover:text-accent/10 transition-colors">{step.id}</span>

                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <step.icon className="w-5 h-5 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                                        <h3 className="text-2xl font-serif italic text-foreground tracking-tight">{step.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="pt-10">
                            <motion.div
                                initial={{ scale: 0.98, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="p-8 border border-accent/20 bg-secondary/5 flex items-center justify-between group cursor-pointer hover:bg-secondary/10 transition-colors"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Priority Status</p>
                                    <p className="text-sm font-serif italic text-foreground leading-loose">Check Next Available Slot</p>
                                </div>
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Calendar className="w-5 h-5 text-accent" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Gallery Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 grid grid-cols-2 gap-6 relative"
                    >
                        <div className="group relative aspect-[3/4] overflow-hidden translate-y-12">
                            <Image
                                src="/images/clinic-1.png"
                                alt="Marylebone Clinic Suite"
                                fill
                                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                                <p className="text-[9px] uppercase tracking-widest text-white/80 font-bold italic">The Private Suite</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="group relative aspect-square overflow-hidden bg-accent/10">
                                <Image
                                    src="/images/clinic-2.png"
                                    alt="Restorative Detail"
                                    fill
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 border-[20px] border-background/20" />
                            </div>
                            <div className="group relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src="/images/hero-banner.png"
                                    alt="Clinic Interior"
                                    fill
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-background/50 backdrop-blur-md">
                                    <MapPin className="w-3 h-3 text-accent" />
                                    <span className="text-[9px] uppercase tracking-widest font-bold">W1, Marylebone</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Sparkles({ className }: { className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.4 7.2L19.6 9.6L14.4 12L12 17.2L9.6 12L4.4 9.6L9.6 7.2L12 2Z" fill="currentColor" />
            <path d="M21 15L22 17.5L24.5 18.5L22 19.5L21 22L20 19.5L17.5 18.5L20 17.5L21 15Z" fill="currentColor" />
            <path d="M4 14L5 16.5L7.5 17.5L5 18.5L4 21L3 18.5L0.5 17.5L3 16.5L4 14Z" fill="currentColor" />
        </svg>
    );
}
