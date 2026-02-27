'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 py-12 sm:py-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MS</span>
              </div>
              <span className="font-semibold text-foreground">
                Marylebone Smile
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium dental care in the heart of London. Transforming smiles with excellence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#' },
                { label: 'Services', href: '#services' },
                { label: 'Team', href: '#team' },
                { label: 'Gallery', href: '#gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Cosmetic Dentistry',
                'Restorative Treatment',
                'Teeth Alignment',
                'General Dentistry',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Marylebone, London
                <br />
                United Kingdom
              </p>
              <p>
                <a
                  href="tel:+442012345678"
                  className="hover:text-accent transition-colors"
                >
                  +44 (0)20 1234 5678
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@marylebone-smile.co.uk"
                  className="hover:text-accent transition-colors"
                >
                  hello@marylebone-smile.co.uk
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} Marylebone Smile Clinic. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Accessibility
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
