'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { fadeInUp, staggerContainer, fadeIn } from '@/lib/animations';

const testimonials = [
    {
        id: 1,
        name: 'Alexandra Holmes',
        role: 'Creative Director',
        content: 'The precision and artistry at Marylebone Smile is unlike any other. My veneers feel entirely natural, enhancing my features rather than overwhelming them.',
        location: 'Mayfair, London',
        rating: 5,
    },
    {
        id: 2,
        name: 'Michael Patterson',
        role: 'Managing Partner',
        content: 'A truly discreet and professional service. As someone in the public eye, the privacy and efficiency were as impressive as the final clinical results.',
        location: 'Marylebone, London',
        rating: 5,
    },
    {
        id: 3,
        name: 'Victoria Sterling',
        role: 'Interior Architect',
        content: 'Every touchpoint, from the initial digital preview to the final fitting, reflected a standard of excellence that is rare to find in modern healthcare.',
        location: 'Kensington, London',
        rating: 5,
    },
    {
        id: 4,
        name: 'James Harrison',
        role: 'Consultant',
        content: 'I was looking for a clinic that understood the "quiet luxury" ethos. Subtle, high-impact results with zero downtime. Exceptional.',
        location: 'Chelsea, London',
        rating: 5,
    },
];

export default function SocialProof() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
        slidesToScroll: 1,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const AUTOPLAY_DELAY_MS = 4000;

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        if (!emblaApi) return;
        if (autoplayRef.current) return;
        autoplayRef.current = setInterval(() => {
            emblaApi.scrollNext();
        }, AUTOPLAY_DELAY_MS);
    }, [emblaApi]);

    const onCardPointerEnter = useCallback(
        (e: React.PointerEvent) => {
            if (e.pointerType === 'mouse') stopAutoplay();
        },
        [stopAutoplay]
    );

    const onCardPointerLeave = useCallback(
        (e: React.PointerEvent) => {
            if (e.pointerType === 'mouse') startAutoplay();
        },
        [startAutoplay]
    );

    const onCardPointerDown = useCallback(
        (e: React.PointerEvent) => {
            if (e.pointerType !== 'mouse') stopAutoplay();
        },
        [stopAutoplay]
    );

    const onCardPointerUp = useCallback(() => {
        startAutoplay();
    }, [startAutoplay]);

    const onCardPointerCancel = useCallback(() => {
        startAutoplay();
    }, [startAutoplay]);

    // Auto-scroll
    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);

        startAutoplay();
        emblaApi.on('pointerDown', stopAutoplay);
        emblaApi.on('pointerUp', startAutoplay);

        return () => {
            stopAutoplay();
        };
    }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

    return (
        <section
            id="testimonials"
            className="bg-background min-h-[100dvh] flex flex-col justify-start lg:justify-center py-12 md:py-24 overflow-x-hidden relative selection:bg-accent/30"
        >
            {/* Background radial accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

            <div className="max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 mx-auto w-full">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 items-end">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-8"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 max-[575px]:justify-center">
                            <span className="h-[1px] w-12 bg-accent/60" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Patient Voice</span>
                        </motion.div>
                        <motion.h2
                            variants={fadeInUp}
                            className="font-serif text-foreground tracking-tight leading-[1.1] max-[575px]:text-center"
                            style={{ fontSize: 'clamp(22px, 6vw, 64px)' }}
                        >
                            Testimony of <br /><span className="italic text-accent/80">Refined Confidence.</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 max-[575px]:items-center"
                    >
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-start lg:items-end">
                                <div className="flex items-center gap-1 mb-1">
                                    <Star className="w-4 h-4 fill-accent text-accent" />
                                    <Star className="w-4 h-4 fill-accent text-accent" />
                                    <Star className="w-4 h-4 fill-accent text-accent" />
                                    <Star className="w-4 h-4 fill-accent text-accent" />
                                    <Star className="w-4 h-4 fill-accent text-accent" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.1em] sm:tracking-widest font-bold text-foreground max-[575px]:text-center">5.0 Based on 240+ Reviews</span>
                            </div>
                            <div className="h-10 w-px bg-border/60" />
                            <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center p-2">
                                <span className="text-xl font-serif italic text-accent">G</span>
                            </div>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground italic lg:text-right border-l lg:border-l-0 lg:border-r border-accent/30 pl-6 lg:pl-0 lg:pr-6 max-[575px]:border-l-0 max-[575px]:pl-0 max-[575px]:text-center">
                            "Discreet appointments available for high-profile clients."
                        </p>
                    </motion.div>
                </div>

                {/* Testimonial Carousel — 1 card xs, 2 sm, 3 md, 4 lg/xl */}
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex -ml-0 sm:-ml-5">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="embla__slide min-w-0 pr-4 sm:pr-0 sm:pl-5 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                            >
                                <div
                                    className="bg-secondary/20 border border-border/60 p-5 sm:p-8 lg:p-10 relative group h-full"
                                    onPointerEnter={onCardPointerEnter}
                                    onPointerLeave={onCardPointerLeave}
                                    onPointerDown={onCardPointerDown}
                                    onPointerUp={onCardPointerUp}
                                    onPointerCancel={onCardPointerCancel}
                                >
                                    <Quote className="absolute top-4 right-4 w-6 h-6 sm:top-8 sm:right-8 sm:w-12 sm:h-12 text-accent/8 -z-0" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-1 mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                                            <Star className="w-3 h-3 fill-accent text-accent" />
                                            <Star className="w-3 h-3 fill-accent text-accent" />
                                            <Star className="w-3 h-3 fill-accent text-accent" />
                                            <Star className="w-3 h-3 fill-accent text-accent" />
                                            <Star className="w-3 h-3 fill-accent text-accent" />
                                        </div>

                                        <blockquote className="text-sm sm:text-base lg:text-lg font-serif italic text-foreground leading-[1.6] mb-8">
                                            "{t.content}"
                                        </blockquote>

                                        <div className="pt-6 border-t border-border/40 flex items-center justify-between max-[575px]:flex-col max-[575px]:items-start max-[575px]:gap-3">
                                            <div className="space-y-1">
                                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground">{t.name}</p>
                                                <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-light">{t.role}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3 h-3 text-accent/60" />
                                                <span className="text-[9px] uppercase tracking-widest text-accent/60 font-bold">{t.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-center gap-12 mt-16">
                    <button
                        onClick={scrollPrev}
                        className="text-muted-foreground hover:text-accent transition-all duration-500 uppercase text-[10px] tracking-[0.5em] font-bold flex items-center gap-4 group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Prev
                    </button>

                    <div className="flex gap-4">
                        {testimonials.map((_, i) => (
                            <div key={i} className={`h-[2px] w-8 transition-all duration-700 ${i === selectedIndex ? 'bg-accent' : 'bg-border/40'}`} />
                        ))}
                    </div>

                    <button
                        onClick={scrollNext}
                        className="text-muted-foreground hover:text-accent transition-all duration-500 uppercase text-[10px] tracking-[0.5em] font-bold flex items-center gap-4 group"
                    >
                        Next <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
