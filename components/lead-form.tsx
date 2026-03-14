'use client';

import { useState } from 'react';
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
import { Check, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const treatments = [
  'Signature Veneers',
  'Invisalign® Alignment',
  'Laser Teeth Whitening',
  'Bespoke Bridges',
  'Dental Implants',
  'General Consultation',
];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interest: '',
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

  const nextStep = async () => {
    const fields = step === 1 ? ['interest'] : ['name', 'email', 'phone'];
    const isValid = await form.trigger(fields as any);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

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
              Begin Your <br /><span className="italic text-accent/80">Transformation.</span>
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-light max-w-xl">Our concierge team will guide you through a personalized assessment of your smile goals.</p>
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
                {/* Progress Bar */}
                <div className="w-full h-[2px] bg-secondary/20 mb-16 relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-accent"
                    initial={{ width: '33.33%' }}
                    animate={{ width: step === 1 ? '33.33%' : '66.66%' }}
                  />
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                    {step === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-10"
                      >
                        <div className="space-y-4 max-[575px]:text-center">
                          <h3 className="text-2xl font-serif italic text-foreground">Select your primary interest</h3>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest">Which transformation fits your vision?</p>
                        </div>

                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {treatments.map((t) => (
                                  <div
                                    key={t}
                                    onClick={() => field.onChange(t)}
                                    className={`cursor-pointer px-6 py-5 border transition-all duration-500 flex items-center justify-between group ${field.value === t
                                      ? 'bg-primary text-primary-foreground border-primary'
                                      : 'bg-transparent border-border/60 hover:border-accent/40'
                                      }`}
                                  >
                                    <span className="text-[10px] uppercase tracking-widest font-bold">{t}</span>
                                    {field.value === t && <Check className="w-4 h-4" />}
                                    {field.value !== t && <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                  </div>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex justify-end pt-8 max-[575px]:justify-center">
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-primary hover:bg-primary/95 text-primary-foreground rounded-none px-12 py-8 text-[10px] uppercase tracking-[0.2em] font-bold"
                          >
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-12"
                      >
                        <div className="space-y-4 max-[575px]:text-center">
                          <h3 className="text-2xl font-serif italic text-foreground">A few final details</h3>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest">To provide the most personalized experience.</p>
                        </div>

                        <div className="flex flex-col gap-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold max-[575px]:block max-[575px]:text-center">Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your name" className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm max-[575px]:text-center" {...field} />
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
                                  <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold max-[575px]:block max-[575px]:text-center">Priority Email</FormLabel>
                                  <FormControl>
                                    <Input placeholder="name@example.com" className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm max-[575px]:text-center" {...field} />
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
                                <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold max-[575px]:block max-[575px]:text-center">Preferred Contact Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+44 (0) 000 000 000" className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm max-[575px]:text-center" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Smile Upload Section */}
                          <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold max-[575px]:block max-[575px]:text-center">PREVIEW YOUR POTENTIAL</FormLabel>
                                <FormControl>
                                  <div
                                    className="relative group cursor-pointer"
                                    onClick={() => document.getElementById('smile-upload')?.click()}
                                  >
                                    <input
                                      id="smile-upload"
                                      type="file"
                                      className="hidden"
                                      accept="image/*"
                                      onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) field.onChange(file);
                                      }}
                                    />
                                    <div className="border-2 border-dashed border-border/60 aspect-square w-full max-w-[240px] mx-auto md:mx-0 flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/5">
                                      {field.value ? (
                                        <div className="relative w-full h-full p-2">
                                          <img
                                            src={URL.createObjectURL(field.value)}
                                            alt="Smile Preview"
                                            className="w-full h-full object-cover"
                                          />
                                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <p className="text-[10px] text-white uppercase tracking-widest font-bold">Change Photo</p>
                                          </div>
                                        </div>
                                      ) : (
                                        <>
                                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <Sparkles className="w-5 h-5 text-accent/60" />
                                          </div>
                                          <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">Upload your smile photo</p>
                                        </>
                                      )}
                                    </div>
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
                                <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold max-[575px]:block max-[575px]:text-center">Your Vision (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Describe the smile you've always imagined..."
                                    className="bg-transparent border border-border/60 rounded-none focus-visible:ring-0 focus-visible:border-accent min-h-[120px] p-4 text-sm max-[575px]:text-center"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex items-center justify-between pt-10 border-t border-border/40 max-[575px]:flex-col max-[575px]:gap-6">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors max-[575px]:justify-center max-[575px]:w-full"
                          >
                            <ArrowLeft className="w-3 h-3" /> Back
                          </button>
                          <Button
                            disabled={isSubmitting}
                            className="bg-primary hover:bg-primary/95 text-primary-foreground rounded-none px-12 py-8 text-[10px] uppercase tracking-[0.2em] font-bold"
                          >
                            {isSubmitting ? 'Encrypting & Sending...' : 'Request Consultation'}
                          </Button>
                        </div>
                      </motion.div>
                    )}
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
