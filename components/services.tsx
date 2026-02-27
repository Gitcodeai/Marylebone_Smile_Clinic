'use client';

import { motion } from 'framer-motion';
import { Smile, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Cosmetic Dentistry',
    description: 'Veneers, whitening, and smile design to enhance your natural beauty.',
    icon: Smile,
    price: 'From £600',
  },
  {
    id: 2,
    title: 'Restorative Treatment',
    description: 'Crown placement, implants, and comprehensive dental restoration.',
    icon: ShieldCheck,
    price: 'From £1,200',
  },
  {
    id: 3,
    title: 'Teeth Alignment',
    description: 'Invisible aligners and orthodontic solutions for a perfect smile.',
    icon: Zap,
    price: 'From £3,500',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Our Services
            </span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-4"
          >
            Premier Dental Solutions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive dental services designed for your unique needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-medium text-accent">
                      {service.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to learn more about financing options?
          </p>
          <div className="inline-flex items-center gap-4">
            <span className="text-sm font-medium text-accent">
              0% Finance Available
            </span>
            <div className="h-px w-8 bg-border" />
            <p className="text-sm text-foreground">
              Flexible payment plans to suit your budget
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
