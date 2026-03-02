'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, ShieldCheck } from 'lucide-react';

const plans = [
    {
        id: 1,
        title: 'The Signature Reveal',
        description: 'A transformative experience focusing on ceramic excellence.',
        price: 'From £9,500',
        finance: '0% interest available for 12 months',
        tag: 'Popular',
        icon: Sparkles,
        features: [
            'Comprehensive 3D Smile Design',
            '8 Professional Porcelain Veneers',
            'Dual-Arch Laser Whitening',
            'Lifetime Night Guard',
            'Concierge Post-Care Kit'
        ]
    },
    {
        id: 2,
        title: 'The Refined Correction',
        description: 'Precision alignment for a perfectly balanced smile line.',
        price: 'From £4,200',
        finance: 'Monthly plans from £350',
        tag: 'Elite Alignment',
        icon: ShieldCheck,
        features: [
            'iTero 5D Digital Scans',
            'Full Invisalign® Suite',
            'Unlimited Refinement Sets',
            'Fixed and Removable Retainers',
            'Professional Whitening Finish'
        ]
    }
];

export default function PricingSection() {
    return (
        <section id="pricing" className="bg-secondary/20 min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 lg:mb-32">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-accent/60" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Transparent Pricing</span>
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-6xl font-serif text-foreground tracking-tight leading-tight">
                            An Investment in <br /><span className="italic text-accent/80">Lasting Radiance.</span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        className="text-sm text-muted-foreground uppercase tracking-widest font-light lg:max-w-xs lg:text-right"
                    >
                        We offer bespoke financial planning for your dental dreams.
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            variants={fadeInUp}
                            className="group relative bg-background border border-border/40 p-10 lg:p-14 flex flex-col hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 translate-x-12 -translate-y-12 rotate-45 group-hover:bg-accent/10 transition-colors" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-10 border border-accent/20 group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-500">
                                    <plan.icon className="w-6 h-6" />
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4">{plan.tag}</p>
                                <h3 className="text-3xl font-serif italic text-foreground mb-4">{plan.title}</h3>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-10 flex-grow">{plan.description}</p>

                                <div className="mb-12">
                                    <div className="text-4xl font-serif italic text-foreground mb-4 line-through decoration-accent/40 decoration-1 text-2xl opacity-40">Previous Price</div>
                                    <div className="text-5xl font-serif italic text-foreground mb-2">{plan.price}</div>
                                    <p className="text-[10px] uppercase tracking-widest text-accent font-bold">{plan.finance}</p>
                                </div>

                                <div className="space-y-6 mb-12">
                                    {plan.features.map(f => (
                                        <div key={f} className="flex items-start gap-4">
                                            <div className="mt-1 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <Check className="w-2.5 h-2.5 text-accent" />
                                            </div>
                                            <span className="text-[10px] uppercase tracking-widest text-foreground/80 font-medium leading-loose">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className="w-full bg-primary hover:bg-primary/95 text-primary-foreground rounded-none py-8 text-xs uppercase tracking-[0.2em] font-bold border border-primary transition-all duration-500 hover:tracking-[0.3em]"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Confirm Availability
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold italic">
                        All prices are tailored to your unique anatomy. 0% finance subject to status and clinical suitability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
