'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Instagram, Star, Quote, ChevronRight, ChevronLeft, Play, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

// Mock social media posts
const socialPosts = [
  {
    author: "@sarah_wellness",
    content: "The healing session at NYL was transformative. My back pain of 5 years vanished after just three sessions. #NYLHealing #Sujok",
    image: "/images/testimonials/social-1.jpg",
    likes: "1.2k",
    date: "2 days ago",
    videoUrl: "https://www.youtube.com/embed/Sc6S8o2Z8tM" // Mock video
  },
  {
    author: "@dr_vimal_k",
    content: "As a medical professional, I was skeptical. But Nisar's understanding of meridians is unparalleled. Truly a master.",
    image: "/images/testimonials/social-2.jpg",
    likes: "850",
    date: "1 week ago",
    videoUrl: "https://www.youtube.com/embed/Sc6S8o2Z8tM"
  },
  {
    author: "@priyanka_nair",
    content: "The sanctuary in Kochi is so peaceful. Junaina's approach to holistic wellness is exactly what I needed. Highly recommend!",
    image: "/images/testimonials/social-3.jpg",
    likes: "3.4k",
    date: "3 days ago",
    videoUrl: "https://www.youtube.com/embed/Sc6S8o2Z8tM"
  },
  {
    author: "@rahul_travels",
    content: "Managed to book a distance healing session from Dubai. Incredible results. The energy alignment is real.",
    image: "/images/testimonials/social-1.jpg",
    likes: "540",
    date: "2 weeks ago",
    videoUrl: "https://www.youtube.com/embed/Sc6S8o2Z8tM"
  }
];

const writtenTestimonials = [
  {
    name: "Thomas Abraham",
    role: "CEO, Tech Solutions",
    content: "I've visited many clinics across the globe, but the precision and dedication at NYL are world-class. The Sujok treatments have changed my life.",
    rating: 5
  },
  {
    name: "Meera Krishnan",
    role: "Classical Dancer",
    content: "For a dancer, physical alignment is everything. NYL Healing helped me recover from a career-threatening injury with traditional wisdom.",
    rating: 5
  }
];

export default function TestimonialsView() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
            <motion.p variants={fadeInUp} className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">
              Voices of the Sanctuary
            </motion.p>
            <motion.h1 
              variants={fadeInUp} 
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-foreground tracking-tight leading-[1.1]"
            >
              Patient <span className="italic text-accent/90">Testimonials.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light text-base lg:text-lg leading-relaxed uppercase tracking-[0.1em]">
              Real stories of restoration, alignment, and extraordinary recovery from our global community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Carousel Section */}
      <section className="py-24 lg:py-40 bg-secondary/10 relative overflow-hidden">
        <div className="max-w-[1600px] px-6 lg:px-12 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
            <div className="space-y-4 text-left w-full lg:w-auto">
              <h2 className="text-3xl lg:text-4xl font-serif italic text-foreground leading-tight text-left">Social Updates</h2>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-light text-left">Fresh insights from our digital community</p>
            </div>
          </div>

          <div className="relative">
            <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="embla__container flex">
              {socialPosts.map((post, index) => (
                <div key={index} className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3 lg:px-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background border border-border/40 group hover:border-accent/40 transition-all duration-500 overflow-hidden"
                  >
                    <div 
                      className="aspect-[4/5] sm:aspect-square relative overflow-hidden cursor-pointer"
                      onClick={() => setActiveVideo(post.videoUrl)}
                    >
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center z-10 transition-all duration-700">
                          <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm mb-4 scale-75 group-hover:scale-100 transition-transform duration-500">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">Watch Story</span>
                       </div>
                       <div className="absolute inset-0 bg-neutral-200" /> {/* Placeholder for real images */}
                    </div>
                    <div className="p-8 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{post.author}</span>
                        <span className="text-[10px] text-muted-foreground/60">{post.date}</span>
                      </div>
                      <p className="text-sm font-light leading-relaxed italic text-foreground/80">
                        "{post.content}"
                      </p>
                      <div className="flex items-center gap-2 pt-2 border-t border-border/20">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{post.likes} Appreciation</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            </div>

            {/* Side Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-0 lg:-mx-16 z-20">
              <button 
                onClick={scrollPrev}
                className="p-4 hover:text-accent transition-all group pointer-events-auto"
              >
                <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={scrollNext}
                className="p-4 hover:text-accent transition-all group pointer-events-auto"
              >
                <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Book a Consultation CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link 
              href="/#contact" 
              className="inline-block bg-accent hover:bg-accent/90 text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold transition-all shadow-xl shadow-accent/20 hover:scale-[1.02]"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Written Testimonials Section */}
      <section className="py-24 lg:py-40 bg-background">
        <div className="max-w-[1240px] px-6 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-12">
                <Quote className="w-16 h-16 text-accent/20" />
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-serif text-foreground leading-tight italic">What our patients say about us.</h2>
                  <p className="text-muted-foreground font-light text-base lg:text-lg leading-relaxed uppercase tracking-[0.1em]">
                    Real clinical results observed and documented by our practitioners and patients.
                  </p>
                </div>
                <div className="pt-8">
                  <button className="text-xs uppercase tracking-[0.3em] font-bold text-accent border-b border-accent/20 pb-2 hover:border-accent transition-all">
                    Browse all clinical cases
                  </button>
                </div>
             </div>

             <div className="space-y-12">
               {writtenTestimonials.map((t, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: index * 0.2 }}
                   className="p-10 bg-secondary/5 border border-border/40 relative"
                 >
                   <div className="flex gap-1 mb-6">
                     {[...Array(t.rating)].map((_, i) => (
                       <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                     ))}
                   </div>
                   <p className="text-base lg:text-lg font-light leading-relaxed italic text-foreground mb-8">
                     "{t.content}"
                   </p>
                   <div>
                     <p className="text-sm font-bold text-foreground">{t.name}</p>
                     <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.role}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-black relative border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-16 right-0 text-white flex items-center gap-3 group"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-0 group-hover:opacity-100 transition-all">Close Sanctuary Story</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                  <X className="w-4 h-4" />
                </div>
              </button>
              <iframe
                src={`${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
