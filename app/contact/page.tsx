'use client';

import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const clinics = [
    {
      name: "Kochi Main Center",
      title: "NYL HEALING - Sujok Acupuncture & Research Centre",
      address: "1st Floor, Panchayat Jn, Shah Regency, Muppathadam Rd, Kochi, Kerala 683110, India",
      phone: "+91 73066 27729",
      email: "concierge@nylhealing.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.031267807775!2d76.3149095!3d10.0965289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ef617d53123%3A0x4c97b10953987e26!2sNYL%20HEALING%20-%20Sujok%20Acupuncture%20%26%20Research%20Centre.!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
    },
    {
      name: "Perumbavoor Branch",
      title: "NYL HEALING - Sujok Acupuncture & Research Centre Perumbavoor",
      address: "Thandekkad, P.O, Ponjassery, Perumbavoor, Kerala 683547, India",
      phone: "+91 83010 85091",
      email: "concierge@nylhealing.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125696.88372691891!2d76.23508323419041!3d10.097015820464223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0809a209de5a4d%3A0x57a53616053b74de!2sNYL%20HEALING%20-%20Sujok%20Acupuncture%20%26%20Research%20Centre.Perumbavoor!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
    }
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-white pt-[112px]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-border/40">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] -z-10" />
        <div className="max-w-[1240px] px-6 lg:px-12 mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <motion.p variants={fadeInUp} className="text-xs sm:text-sm text-accent uppercase tracking-[0.4em] font-bold">
              Find Your Sanctuary
            </motion.p>
            <motion.h1 
              variants={fadeInUp} 
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-foreground tracking-tight leading-[1.1]"
            >
              Our <span className="italic text-accent/90">Clinics.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light text-base lg:text-lg leading-relaxed uppercase tracking-[0.1em]">
              Professional care across Kerala. Visit us for traditional expertise and meridional alignment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 lg:py-32 bg-secondary/10">
        <div className="max-w-[1400px] px-6 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {clinics.map((clinic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col gap-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Branch 0{index + 1}</span>
                      <div className="h-[1px] w-12 bg-accent/30" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-serif italic text-foreground leading-tight">
                      {clinic.title}
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                          <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                          <p className="text-sm font-light leading-relaxed tracking-wide">
                            {clinic.address}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                          <Phone className="w-5 h-5 text-accent shrink-0" />
                          <a href={`tel:${clinic.phone.replace(/\s/g, '')}`} className="text-sm font-light tracking-widest hover:text-accent transition-colors">
                            {clinic.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                          <Mail className="w-5 h-5 text-accent shrink-0" />
                          <a href={`mailto:${clinic.email}`} className="text-sm font-light tracking-wide hover:text-accent transition-colors">
                            {clinic.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <Clock className="w-5 h-5 text-accent shrink-0" />
                          <p className="text-[10px] uppercase tracking-widest font-bold">Mon - Sat: 09:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Wrapper */}
                  <div className="relative aspect-[16/9] lg:aspect-square w-full grayscale-[0.8] hover:grayscale-0 transition-all duration-700 overflow-hidden border border-border/40 shadow-2xl">
                    <iframe
                      src={clinic.mapUrl}
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Communication Section */}
      <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--accent)_0%,_transparent_40%)] opacity-[0.03]" />
        <div className="max-w-[1240px] px-6 lg:px-12 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-12"
          >
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-accent" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl lg:text-5xl font-serif italic text-foreground tracking-tight">Global Enquiries</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-light max-w-xl mx-auto leading-relaxed">
                For patient concierge, remote healing sessions, or international clinics, please reach out to our central desk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-8">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Office Email</p>
                <a href="mailto:concierge@nylhealing.com" className="text-xl font-light hover:text-accent transition-colors">concierge@nylhealing.com</a>
              </div>
              <div className="hidden sm:block h-16 w-[1px] bg-border/40" />
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">WhatsApp Desk</p>
                <a href="https://wa.me/917306627729" target="_blank" rel="noopener noreferrer" className="text-xl font-light hover:text-accent transition-colors">+91 73066 27729</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
