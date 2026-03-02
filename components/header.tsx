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
    { href: '#before-after', label: 'Transformations', id: 'before-after' },
    { href: '#journey', label: 'The Experience', id: 'journey' },
    { href: '#team', label: 'Experts', id: 'team' },
    { href: '#contact', label: 'Contact', id: 'contact' },
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
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = navLinks.map(link => document.getElementById(link.id));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-accent/20 transition-all duration-500"
          >
            <span className="text-primary-foreground font-serif italic text-lg tracking-tighter">MS</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-foreground leading-none">
              Marylebone Smile
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1 font-sans">
              Clinic & Spa
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          variants={staggerContainer}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={fadeIn}>
              <Link
                href={link.href}
                className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 relative group ${activeSection === link.id ? 'text-accent' : 'text-foreground/70 hover:text-accent'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-6">
          <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="hidden sm:inline-flex bg-primary hover:bg-primary/95 text-primary-foreground rounded-none px-8 py-6 text-xs uppercase tracking-widest font-semibold border border-primary transition-all duration-500 hover:tracking-[0.15em]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consultation
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-accent/5">
                <Menu className="h-6 w-6 stroke-[1.5]" />
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-none py-8 text-sm uppercase tracking-widest"
                    onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}
                  >
                    Book Your Visit
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
