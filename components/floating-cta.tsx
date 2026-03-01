'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show after 500px scroll
            if (currentScrollY > 500) {
                // Show if scrolling up OR at the bottom
                if (currentScrollY < lastScrollY || (window.innerHeight + currentScrollY) >= document.body.offsetHeight - 100) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0, x: '-50%' }}
                    animate={{ y: 0, opacity: 1, x: '-50%' }}
                    exit={{ y: 100, opacity: 0, x: '-50%' }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-3rem)] max-w-sm sm:hidden"
                >
                    <Button
                        onClick={scrollToContact}
                        className="w-full bg-primary hover:bg-primary/95 text-primary-foreground rounded-none py-8 shadow-2xl flex items-center justify-between px-8 border border-primary transition-all duration-500 hover:scale-[1.02] group"
                    >
                        <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Secure Your Slot</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <div className="absolute -inset-2 bg-accent/5 blur-xl -z-10 rounded-full" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
