'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#before-after', label: 'Transformation', id: 'before-after' },
    { href: '#team', label: 'Experts', id: 'team' },
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
    { href: '#contact', label: 'Consultation', id: 'contact' },
    { href: '#footer', label: 'Contact', id: 'footer' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect when middle of section is in viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'hero' || id === 'journey') {
            setActiveSection('');
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionsToObserve = ['hero', 'journey', ...navLinks.map(link => link.id)];
    const observedElements = sectionsToObserve
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    observedElements.forEach(el => observer.observe(el));

    return () => {
      observedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <nav className="w-full h-20 flex items-center">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo - Far Left */}
        <Link href="/" className="flex items-center group transition-opacity hover:opacity-90">
          <div className="h-14 sm:h-16 w-auto relative flex items-center justify-center">
            <img 
              src="/images/logo.png" 
              alt="NYL Healing Logo" 
              className="h-full w-auto object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </Link>

        {/* Right Aligned Navigation + CTA */}
        <div className="flex items-center gap-10 lg:gap-16">
          {/* Desktop Navigation */}
          <motion.div
            variants={staggerContainer}
            className="hidden lg:flex items-center gap-8 lg:gap-10"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={fadeIn}>
                <Link
                  href={link.href}
                  className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group ${activeSection === link.id ? 'text-accent' : 'text-foreground/70 hover:text-accent'}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-6">

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-accent/5 -mr-2">
                  <Menu className="h-7 w-7 stroke-[1.5] text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] border-l border-border/40 bg-background/95 backdrop-blur-xl">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-8 mt-20 px-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-3xl font-serif italic ${activeSection === link.id ? 'text-accent' : 'text-foreground hover:text-accent'} transition-colors`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        </div>
      </nav>
    </motion.header>
  );
}
