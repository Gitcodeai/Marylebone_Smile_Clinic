'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, LeadFormValues } from '@/lib/form-schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations';
import { Check, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, Zap, X, Loader2 } from 'lucide-react';
import BeforeAfterSlider from '@/components/before-after-slider';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const analysisIntervalRef = useRef<any>(null);

  const resetImage = () => {
    if (analysisIntervalRef.current) clearInterval(analysisIntervalRef.current);
    setPreviewImage(null);
    setShowResult(false);
    setIsScanning(false);
    setAnalysisProgress(0);
    form.setValue('image', null);
  };

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      image: null,
    },
  });

  async function onSubmit(values: LeadFormValues) {
    setIsSubmitting(true);
    // Simulate luxury concierge processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Concierge Lead Received:', values);
    setIsSuccess(true);
    setIsSubmitting(false);
  }

  const handleImageUpload = (file: File | null) => {
    if (file) {
      if (analysisIntervalRef.current) clearInterval(analysisIntervalRef.current);
      setIsScanning(true);
      setShowResult(false);
      setPreviewImage(URL.createObjectURL(file));
      setAnalysisProgress(0);

      analysisIntervalRef.current = setInterval(() => {
        setAnalysisProgress((prev) => {
          if (prev >= 98) {
            if (analysisIntervalRef.current) clearInterval(analysisIntervalRef.current);
            return 98;
          }
          return prev + Math.floor(Math.random() * 8) + 1;
        });
      }, 600);
    } else {
      resetImage();
    }
  };

  return (
    <section id="contact" className="bg-secondary/20 min-h-screen flex flex-col justify-center py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] -z-10" />
      <div className="max-w-[1240px] px-6 lg:px-12 mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6">

            <h2
              className="font-serif text-foreground tracking-tight leading-[1.1]"
              style={{ fontSize: 'clamp(26px, 6vw, 64px)' }}
            >
              Your Signature <br /><span className="italic text-accent/80">Smile Preview</span>
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-light max-w-xl">Experience a real-time AI assessment of your dental possibilities.</p>
          </motion.div>
        </motion.div>

        <div className="bg-background border border-border/40 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 lg:p-16"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                    <div className="space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your name" className="bg-transparent border-0 border-b border-border rounded-md focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Priority Email</FormLabel>
                              <FormControl>
                                <Input placeholder="name@example.com" className="bg-transparent border-0 border-b border-border rounded-md focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Preferred Contact Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+44 (0) 000 000 000" className="bg-transparent border-0 border-b border-border rounded-md focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* AI Transformation Dual-Panel */}
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold text-center block mb-8">AI Smile Analysis</FormLabel>
                            <FormControl>
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                                  {/* Left Panel: Original */}
                                  <div className="flex flex-col gap-3">
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-accent/60">Original</span>
                                    <div
                                      className="relative group cursor-pointer aspect-[4/3] border border-border/60 bg-secondary/5 flex items-center justify-center overflow-hidden"
                                      onClick={() => document.getElementById('smile-upload')?.click()}
                                    >
                                      <input
                                        id="smile-upload"
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0] || null;
                                          field.onChange(file);
                                          handleImageUpload(file);
                                        }}
                                      />
                                      {previewImage ? (
                                        <div className="relative w-full h-full">
                                          <img
                                            src={previewImage}
                                            alt="Original Smile"
                                            className="w-full h-full object-cover"
                                          />
                                          {isScanning && (
                                            <motion.div
                                              initial={{ top: '-10%' }}
                                              animate={{ top: '110%' }}
                                              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                              className="absolute left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.8)] z-10"
                                            />
                                          )}
                                          {previewImage && (
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                resetImage();
                                              }}
                                              className="absolute top-3 right-3 z-30 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 backdrop-blur-sm group/reset"
                                              title="Remove Image"
                                            >
                                              <X className="w-3.5 h-3.5 transition-transform group-hover/reset:rotate-90" />
                                            </button>
                                          )}
                                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 items-center justify-center">
                                            <p className="text-[10px] text-white uppercase tracking-widest font-bold">Change Photo</p>
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="flex flex-col items-center gap-4 transition-all duration-500 group-hover:bg-accent/5 w-full h-full justify-center">
                                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <Sparkles className="w-5 h-5 text-accent/60" />
                                          </div>
                                          <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">Upload Your Smile Photo</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Right Panel: AI Simulation */}
                                  <div className="flex flex-col gap-3">
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-accent/60">AI Simulation</span>
                                    <div className="relative aspect-[4/3] border border-border/40 bg-secondary/5 flex items-center justify-center overflow-hidden">
                                      {showResult ? (
                                        <div className="absolute inset-0">
                                          <BeforeAfterSlider
                                            caseIndex={999}
                                            beforeImage={previewImage || ''}
                                            afterImage="/images/after.png"
                                            orientation="vertical"
                                          />
                                        </div>
                                      ) : isScanning ? (
                                        <div className="flex flex-col items-center gap-6 w-full px-12">
                                          <div className="w-full h-[2px] bg-accent/10 overflow-hidden relative">
                                            <motion.div
                                              initial={{ width: 0 }}
                                              animate={{ width: `${analysisProgress}%` }}
                                              className="absolute left-0 top-0 h-full bg-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]"
                                            />
                                          </div>
                                          <div className="flex flex-col items-center gap-2 text-center">
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent animate-pulse">
                                              {analysisProgress < 98 ? `AI Diagnostic in Progress... ${analysisProgress}%` : 'Analysis Complete. Awaiting Review.'}
                                            </p>
                                            <p className="text-[9px] text-muted-foreground uppercase tracking-widest leading-relaxed">
                                              Analyzing dental proportions & facial harmony
                                            </p>
                                          </div>
                                          <Loader2 className="w-4 h-4 text-accent/40 animate-spin" />
                                        </div>
                                      ) : (
                                        <div className="text-center p-8">
                                          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40 animate-pulse-slow">Awaiting Image</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <p className="text-[9px] italic text-muted-foreground/60 text-center">
                                  *This is an AI-generated simulation of your dental possibilities; it does not constitute a clinical diagnosis.
                                </p>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Your Vision (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the smile you've always imagined..."
                                className="bg-transparent border border-border/60 rounded-md focus-visible:ring-0 focus-visible:border-accent min-h-[120px] p-4 text-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex items-center justify-end pt-6 border-t border-border/40">
                      <Button
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary/95 text-primary-foreground rounded-none px-12 py-8 text-[10px] uppercase tracking-[0.2em] font-bold"
                      >
                        {isSubmitting ? 'Encrypting & Sending...' : 'BOOK A FREE E-CONSULTATION'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 text-center space-y-10"
              >
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-serif italic text-foreground">Expect the <br />Extraordinary.</h3>
                  <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed uppercase tracking-[0.15em]">
                    Your request has been received. Our clinical concierge will contact you within the next 2 hours to arrange your virtual preview.
                  </p>
                </div>
                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent/60" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Discreet Service</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Zap className="w-4 h-4 text-accent/60" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Priority Reply</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent/60" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Expert Led</span>
                  </div>
                </div>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="ghost"
                  className="text-[10px] uppercase tracking-widest font-bold text-accent"
                >
                  Send another request
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
