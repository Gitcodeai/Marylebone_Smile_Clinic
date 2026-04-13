'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { fadeIn, staggerContainer } from '@/lib/animations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '/#hero', label: 'Home', id: 'hero' },
    { 
      label: 'About Us', 
      id: 'about-us',
      dropdown: [
        { href: '/our-healers', label: 'Our Healers' },
        { href: '/testimonials', label: 'Patient Testimonials' },
        { href: '/courses', label: 'Our Courses' },
      ]
    },
    { href: '/contact', label: 'Contact', id: 'contact' },
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
          if (id === 'journey' || id === 'contact') {
            setActiveSection('');
          } else if (id === 'team') {
            setActiveSection('about-us');
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionsToObserve = ['hero', 'journey', 'team', 'contact'];
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
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/20 backdrop-blur-md border-b border-border/40"
    >
      <nav className="w-full h-28 flex items-center">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center group transition-opacity hover:opacity-90">
            <div className="h-20 sm:h-24 w-auto relative flex items-center justify-center">
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
                <motion.div key={link.label} variants={fadeIn}>
                  {link.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className={`flex items-center gap-2 text-[14px] uppercase tracking-[0.25em] font-medium transition-all duration-300 outline-none group ${
                        activeSection === link.id || link.dropdown.some(d => d.href === pathname)
                          ? 'text-accent' 
                          : 'text-foreground/70 hover:text-accent'
                      }`}>
                        {link.label}
                        <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all group-data-[state=open]:rotate-180" />
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                          activeSection === link.id || link.dropdown.some(d => d.href === pathname)
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="start" 
                        className="bg-background/95 backdrop-blur-xl border border-border/40 p-2 min-w-[240px] rounded-none shadow-2xl mt-4"
                      >
                        {link.dropdown.map((sub) => (
                          <DropdownMenuItem key={sub.href} asChild>
                            <Link
                              href={sub.href}
                              className="w-full flex items-center justify-between px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-accent hover:bg-accent/5 transition-all outline-none cursor-pointer group/item"
                            >
                              {sub.label}
                              <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-accent" />
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={link.href!}
                      className={`text-[14px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group ${
                        activeSection === link.id || (link.href === pathname) || (pathname === '/' && link.id === 'hero' && activeSection === 'hero')
                          ? 'text-accent' 
                          : 'text-foreground/70 hover:text-accent'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                        activeSection === link.id || (link.href === pathname) || (pathname === '/' && link.id === 'hero' && activeSection === 'hero')
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div variants={fadeIn}>
                <Link
                  href="/#contact"
                  className="bg-zinc-950 text-white px-6 py-3 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-zinc-900 transition-all duration-300 ml-4 hover:scale-[1.02] shadow-lg shadow-black/10"
                >
                  Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-6">

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-accent/5 -mr-2">
                    <Menu className="h-9 w-9 stroke-[1.5] text-foreground" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] border-l border-border/40 bg-background/95 backdrop-blur-xl">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col gap-8 mt-20 px-4">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col gap-4"
                      >
                        {link.dropdown ? (
                          <>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-2">{link.label}</p>
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`text-2xl font-serif italic ${
                                  pathname === sub.href ? 'text-accent' : 'text-foreground hover:text-accent'
                                } transition-colors pl-4 border-l border-accent/20`}
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </>
                        ) : (
                          <Link
                            href={link.href!}
                            className={`text-3xl font-serif italic ${
                              activeSection === link.id || (link.href === pathname) || (pathname === '/' && link.id === 'hero' && activeSection === 'hero')
                                ? 'text-accent' 
                                : 'text-foreground hover:text-accent'
                            } transition-colors`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="pt-8"
                    >
                      <Link
                        href="/#contact"
                        className="inline-block bg-zinc-950 text-white px-10 py-5 text-sm uppercase tracking-[0.25em] font-bold hover:bg-zinc-900 transition-all text-center w-full shadow-2xl shadow-black/20"
                        onClick={() => setIsOpen(false)}
                      >
                        Consultation
                      </Link>
                    </motion.div>
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
