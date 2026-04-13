'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Instagram, Facebook, Youtube, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-background border-t border-border/40 selection:bg-accent/30 tracking-tight relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--accent)_0%,_transparent_50%)] opacity-[0.02] pointer-events-none" />

      <div className="max-w-[1600px] px-6 lg:px-12 mx-auto pt-24 pb-12">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24"
        >
          {/* Brand & Slogan Column */}
          <motion.div variants={fadeInUp} className="md:col-span-1 lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
            <Link href="/" className="inline-block group transition-opacity hover:opacity-90">
              <img
                src="/images/logo.png"
                alt="NYL Healing Logo"
                className="h-16 lg:h-20 w-auto object-contain mix-blend-multiply dark:mix-blend-normal"
              />
            </Link>
            <div className="space-y-6">
              <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed font-light italic border-l-2 border-accent/20 pl-6 max-w-sm mx-auto lg:mx-0">
                "Ancient healing traditions meeting modern clinical restoration."
              </p>
              <div className="flex flex-col gap-1 items-center lg:items-start text-[9px] uppercase tracking-[0.3em] font-medium">
                <p className="text-accent underline decoration-accent/20 underline-offset-4 font-bold">The NYL Sanctuary</p>
                <p className="text-muted-foreground/60 italic">Master-led restorative recovery.</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation & Follow Columns */}
          <div className="md:col-span-1 lg:col-span-4 grid grid-cols-2 gap-8 text-center lg:text-left">
            {/* Quick Links */}
            <motion.div variants={fadeInUp} className="space-y-6 flex flex-col items-center lg:items-start">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground">Navigation</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Home', href: '/#hero' },
                  { label: 'Healers', href: '/our-healers' },
                  { label: 'Testimonials', href: '/testimonials' },
                  { label: 'Courses', href: '/courses' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-6 flex flex-col items-center lg:items-start">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground">Follow</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Instagram', href: 'https://instagram.com/nylhealing' },
                  { label: 'Facebook', href: 'https://facebook.com/nylhealing' },
                  { label: 'YouTube', href: 'https://youtube.com/@nylhealing' },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-all duration-300"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Details Column */}
          <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-4 flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground">Get In Touch</h3>
            
            <div className="w-full grid grid-cols-2 lg:grid-cols-1 gap-10">
              {/* Centres Block */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                    <MapPin className="w-3.5 h-3.5 text-accent/60" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-foreground">Kochi Centre</p>
                      <p className="text-[9px] text-muted-foreground font-light mt-0.5">Muppathadam Rd, Panchayat Jn</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                    <MapPin className="w-3.5 h-3.5 text-accent/60" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-foreground">Ponjassery Centre</p>
                      <p className="text-[9px] text-muted-foreground font-light mt-0.5">Thandekkad, Perumbavoor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concierge & Support Block */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-accent font-bold">Concierge</p>
                  <a href="mailto:concierge@nylhealing.com" className="text-[9px] text-muted-foreground hover:text-accent transition-colors tracking-wider">
                    concierge@nylhealing.com
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-accent font-bold">WhatsApp Support</p>
                  <a href="tel:+917306627729" className="text-[9px] text-muted-foreground hover:text-accent transition-colors tracking-widest">
                    +91 73066 27729
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-border/40 flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
              © {currentYear} NYL Healing. All Rights Reserved.
            </p>
            <div className="hidden lg:block w-[1px] h-3 bg-border/40" />
            <div className="flex gap-6">
              {[
                { label: 'Privacy', href: '#' },
                { label: 'Terms', href: '#' },
                { label: 'Cookies', href: '#' },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 hover:text-accent transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-accent/80 hover:text-accent transition-all"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:border-accent/40 group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 -rotate-45" />
            </div>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
