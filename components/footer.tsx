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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24"
        >
          {/* Brand & Slogan Column */}
          <motion.div variants={fadeInUp} className="md:col-span-1 lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-10">
            <Link href="/" className="inline-block group transition-opacity hover:opacity-90">
              <img
                src="/images/logo.png"
                alt="NYL Healing Logo"
                className="h-16 sm:h-20 w-auto object-contain mix-blend-multiply dark:mix-blend-normal"
              />
            </Link>
            <div className="space-y-6">
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed font-light italic border-l-2 lg:border-l-2 border-accent/20 pl-6 lg:pl-6 max-w-sm mx-auto lg:mx-0">
                "Experience the mastery of Qi and meridional alignment, where ancient healing traditions meet modern clinical restoration."
              </p>
              <div className="flex flex-col gap-1 items-center lg:items-start">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">The NYL Sanctuary</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic opacity-60">A dedicated space for deep restorative recovery.</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Columns Wrapper */}
          <div className="md:col-span-1 lg:col-span-4 grid grid-cols-2 gap-12 text-center lg:text-left">
            {/* Quick Links */}
            <motion.div variants={fadeInUp} className="space-y-8 flex flex-col items-center lg:items-start">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-foreground opacity-90">Navigation</h3>
              <ul className="space-y-5 flex flex-col items-center lg:items-start">
                {[
                  { label: 'Home', href: '/#hero' },
                  { label: 'Healers', href: '/our-healers' },
                  { label: 'Testimonials', href: '/testimonials' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Courses', href: '/courses' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-8 flex flex-col items-center lg:items-start">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-foreground opacity-90">Follow</h3>
              <div className="flex flex-col gap-6 items-center lg:items-start">
                {[
                  { label: 'Instagram', href: 'https://instagram.com/nylhealing', icon: Instagram },
                  { label: 'Facebook', href: 'https://facebook.com/nylhealing', icon: Facebook },
                  { label: 'YouTube', href: 'https://youtube.com/@nylhealing', icon: Youtube },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-all duration-300 group"
                  >
                    <div className="p-2 border border-border/40 group-hover:border-accent/40 rounded-full transition-colors">
                      <social.icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Details Column */}
          <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-4 flex flex-col items-center lg:items-start space-y-10 text-center lg:text-left">
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-foreground opacity-90">Get In Touch</h3>
            
            <div className="w-full space-y-10">
              {/* Centres and Concierge Side by Side on Mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10 w-full">
                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Centres</p>
                  <div className="space-y-6 flex flex-col items-center lg:items-start">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                      <MapPin className="w-4 h-4 text-accent/60 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground">Kochi</p>
                        <p className="text-[10px] text-muted-foreground font-light leading-relaxed mt-1">Muppathadam Rd</p>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                      <MapPin className="w-4 h-4 text-accent/60 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground">Ponjassery</p>
                        <p className="text-[10px] text-muted-foreground font-light leading-relaxed mt-1">Perumbavoor</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Concierge</p>
                  <div className="space-y-8 flex flex-col items-center lg:items-start">
                    <a href="mailto:concierge@nylhealing.com" className="flex flex-col items-center lg:items-start gap-3 text-[10px] text-muted-foreground hover:text-accent transition-colors">
                      <Mail className="w-4 h-4 text-accent/60" />
                      <span className="break-all">Email us</span>
                    </a>
                    <div className="space-y-3 flex flex-col items-center lg:items-start">
                      <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Support</p>
                      <a href="tel:+917306627729" className="flex flex-col items-center lg:items-start gap-3 text-[10px] text-muted-foreground hover:text-accent transition-colors">
                        <Phone className="w-4 h-4 text-accent/60" />
                        +91 73066 27729
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
