'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import { MapPin, Calendar, Camera, Heart, Sparkles, LucideIcon, IndianRupee, Info } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

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
        title: 'Direct Healing',
        description: 'Direct healing centers on the concept of Qi, the vital life force that flows through unseen pathways known as meridians. By focusing on the balance of Yin and Yang, this practice aims to clear blockages and restore the natural harmony between the body and the spirit.',
        icon: Heart
    },
    {
        id: '02',
        title: 'Distance Healing',
        description: 'Distance healing leverages the same concept of Qi from afar. By focusing on the balance of Yin and Yang, this remote practice aims to clear blockages and restore the natural harmony between the body and the spirit.',
        icon: Sparkles
    },
    {
        id: '03',
        title: 'Needling (optional)',
        description: 'We use acupuncture needles made of stainless steel which are .16mm thin, which is about the thickness of a human hair.',
        icon: Sparkles
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
        <section id="journey" className="bg-background min-h-screen w-[100vw] flex flex-col justify-center py-16 border-t border-border/40 relative overflow-x-hidden">
            <div className="max-w-[1600px] px-6 lg:px-12 mx-auto w-full">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-12">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >

                        <motion.h2
                            variants={fadeInUp}
                            className="font-serif text-foreground tracking-tight leading-[1.1]"
                            style={{ fontSize: 'clamp(26px, 6vw, 60px)' }}
                        >
                            Our Treatment <br /><span className="italic text-accent/80">Methods</span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right leading-relaxed"
                    >
                        Holistic approaches to restoring natural harmony.
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
                            <Dialog>
                                <DialogTrigger asChild>
                                    <motion.div
                                        initial={{ scale: 0.98, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        className="p-6 sm:p-10 border border-accent/20 bg-secondary/5 flex items-center justify-between group cursor-pointer hover:bg-secondary/10 transition-all duration-500"
                                    >
                                        <div className="space-y-2">
                                            <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Investment in Wellness</p>
                                            <p className="text-sm sm:text-base font-serif italic text-foreground leading-none">Treatment Fee Structure</p>
                                        </div>
                                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                            <IndianRupee className="w-5 h-5" />
                                        </div>
                                    </motion.div>
                                </DialogTrigger>
                                <DialogContent className="max-w-md bg-background border-border/40 selection:bg-accent/30">
                                    <DialogHeader>
                                        <DialogTitle className="font-serif text-3xl italic mb-2">Fee Structure</DialogTitle>
                                        <DialogDescription className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                                            Transparent pricing for your healing journey
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="mt-6 space-y-6">
                                        <div className="p-6 border border-accent/20 bg-secondary/5 space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium">Single Sitting</span>
                                                <span className="font-serif text-lg text-accent italic">₹500</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium">Full Course (11 Sittings)</span>
                                                    <span className="text-[10px] text-accent uppercase tracking-widest font-bold">Most Effective</span>
                                                </div>
                                                <span className="font-serif text-lg text-accent italic">₹5,500</span>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Info className="w-4 h-4 text-accent/60 mt-0.5" />
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    Initial consultation & assessment: <span className="text-foreground font-medium">₹1,000</span>.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Info className="w-4 h-4 text-accent/60 mt-0.5" />
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    Prices are inclusive of all clinical materials and expert precision.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button 
                                                onClick={() => {
                                                    const contact = document.getElementById('contact');
                                                    if (contact) {
                                                        contact.scrollIntoView({ behavior: 'smooth' });
                                                        // Close dialog (handled by radix automatically if we use a form button but for manual scroll we might need state if we want to be clean, but usually trigger asChild handles it)
                                                    }
                                                }}
                                                className="w-full bg-accent text-white py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent/90 transition-colors"
                                            >
                                                Book Consultation
                                            </button>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
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
                                src="/images/1.png"
                                alt="Direct Healing Treatment"
                                fill
                                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                            />
                        </div>
                        <div className="space-y-4 sm:space-y-8">
                            <div className="group relative aspect-square overflow-hidden bg-accent/10">
                                <Image
                                    src="/images/2.jpg"
                                    alt="Healing Preparation"
                                    fill
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 border-[15px] sm:border-[25px] border-background/20" />
                            </div>
                            <div className="group relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src="/images/3.jpg"
                                    alt="NYL Healing Environment"
                                    fill
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                                />

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
