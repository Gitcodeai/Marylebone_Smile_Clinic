'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Alexandra Holmes',
    role: 'Marketing Executive',
    content: 'My smile transformation with Marylebone Smile has completely boosted my confidence. The attention to detail is exceptional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Patterson',
    role: 'Investment Banker',
    content: 'Professional, discreet, and the results speak for themselves. Dr. Chen is an absolute master of his craft.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Victoria Sterling',
    role: 'Fashion Designer',
    content: 'The entire experience was luxurious from start to finish. Every detail reflected the premium quality I expected.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Robert Thompson',
    role: 'Barrister',
    content: 'Outstanding results with minimal downtime. Highly recommend for anyone serious about their smile.',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoplay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Patient Stories
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Trusted by Hundreds
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative bg-background border border-border rounded-lg p-8 sm:p-12 mb-8"
        >
          {/* Quote marks */}
          <div className="absolute -top-6 -left-6 text-6xl text-accent/20 font-serif">
            "
          </div>

          {/* Star rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-accent text-accent"
              />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 font-serif">
            {current.content}
          </blockquote>

          {/* Author */}
          <div className="border-t border-border pt-6">
            <p className="font-medium text-foreground">
              {current.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {current.role}
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {/* Left button */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full h-10 w-10 border-border hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-accent w-8'
                    : 'bg-border w-2 hover:bg-border/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right button */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full h-10 w-10 border-border hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Indicator text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          {currentIndex + 1} of {testimonials.length}
        </motion.p>
      </div>
    </section>
  );
}
