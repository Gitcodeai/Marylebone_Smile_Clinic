'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 selection:bg-accent/30 tracking-tight">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 py-20 lg:py-24"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="md:col-span-5 flex flex-col items-start gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif italic text-lg tracking-tighter">MS</span>
              </div>
              <div className="flex flex-col">
                <p className="font-serif text-2xl tracking-tight text-foreground">Marylebone Smile</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1 font-sans">Clinic & Spa</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] font-light max-w-sm border-l border-accent/30 pl-6 lg:pl-8 italic">
              "Experience world-class dental care with stunning, natural-looking results, nestled in the heart of London."
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">The Marylebone Standard</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic">Discreet appointments available for public figures.</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Transformations', href: '#before-after' },
                { label: 'The Experience', href: '#journey' },
                { label: 'Experts', href: '#team' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="md:col-span-5">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground mb-8">The Clinic</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Location</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    24 Marylebone High St.<br />
                    London W1U 4AD<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Contact</p>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground font-light">
                    <a href="tel:+442012345678" className="hover:text-accent transition-colors">+44 (0)20 7946 0123</a>
                    <a href="mailto:hello@marylebonesmile.com" className="hover:text-accent transition-colors">concierge@marylebonesmile.com</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border/40 py-10 flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            © {currentYear} Marylebone Smile Clinic. Crafting perfection.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
              { label: 'Accessibility', href: '#' },
              { label: 'Cookie Policy', href: '#' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
