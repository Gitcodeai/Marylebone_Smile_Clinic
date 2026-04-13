import type { Metadata } from 'next';
import { createPageMetadata } from '../metadata.config';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

export const generateMetadata = (): Metadata => {
  return createPageMetadata({
    title: 'Learn the Mastery of Healing',
    description: 'Learn the ancient arts of Sujok and energy alignment. Join our masterclasses and gain professional certification in meridional therapy.',
  });
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-white pt-[112px]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-border/40">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] -z-10" />
        <div className="max-w-[1240px] px-6 lg:px-12 mx-auto text-center space-y-8">
           <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">The NYL Academy</p>
           <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-foreground tracking-tight leading-[1.1]">
             Our <span className="italic text-accent/90">Courses.</span>
           </h1>
           <p className="text-muted-foreground font-light text-base lg:text-lg leading-relaxed uppercase tracking-[0.1em] max-w-2xl mx-auto">
             Empowering the next generation of healers through deep clinical knowledge and ancient wisdom.
           </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 lg:py-40 bg-secondary/5">
        <div className="max-w-[1240px] px-6 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Fundamentals of Sujok", 
                desc: "An entry-level journey into the world of Sujok therapy and hand-ear correspondences.",
                icon: BookOpen 
              },
              { 
                title: "Advanced Meridians", 
                desc: "Deep dive into energy channels, flow optimization, and systemic alignment techniques.",
                icon: GraduationCap 
              },
              { 
                title: "Master Certification", 
                desc: "The ultimate certification for practitioners seeking professional-grade clinical mastery.",
                icon: Award 
              }
            ].map((course, i) => (
              <div key={i} className="p-10 bg-background border border-border/40 space-y-8 hover:border-accent/40 transition-all duration-500 group">
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <course.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif italic text-foreground">{course.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {course.desc}
                  </p>
                </div>
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Enquire for next intake</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
