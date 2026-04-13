'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations';
import { Check, ArrowRight, ArrowLeft, Sparkles, Calendar as CalendarIcon, Upload, CreditCard, Clock, Globe, Loader2 } from 'lucide-react';
import { format } from "date-fns";

const steps = [
  { id: 'type', label: 'Consultation Type' },
  { id: 'details', label: 'Information' },
  { id: 'availability', label: 'Schedule' },
  { id: 'status', label: 'Registration' },
  { id: 'payment', label: 'Finalize' },
];

const countries = [
  "United Kingdom", "United States", "Canada", "Australia", 
  "Germany", "France", "United Arab Emirates", "India", "Other"
];

const clinicHours = [
  { day: 'Monday - Friday', hours: '09:00 - 18:00' },
  { day: 'Saturday', hours: '10:00 - 16:00' },
  { day: 'Sunday', hours: 'Closed' }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

export default function LeadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [healingType, setHealingType] = useState<'direct' | 'distance' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [uploadedPhotoName, setUploadedPhotoName] = useState<string | null>(null);
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);
  const [isInitialConsultation, setIsInitialConsultation] = useState<boolean | null>(null);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      reason: '',
      healingType: 'direct',
      country: '',
      slot: '',
    },
  });

  const nextStep = async () => {
    if (currentStep === 1) {
      const fieldsToValidate: (keyof LeadFormValues)[] = ['name', 'email', 'phone', 'reason'];
      if (healingType === 'distance') {
        fieldsToValidate.push('country');
      }
      const isValid = await form.trigger(fieldsToValidate);
      if (!isValid) return;

      if (healingType === 'distance' && !uploadedPhotoName) {
        toast.error("Please upload a photo of the focus area to continue.");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  async function onSubmit(values: LeadFormValues) {
    setShowPaymentAlert(true);
    // Form submission logic is paused while payment gateway is being finalized
  }

  const handleTypeSelection = (type: 'direct' | 'distance') => {
    setHealingType(type);
    form.setValue('healingType', type);
    nextStep();
  };

  return (
    <section id="contact" className="bg-secondary/20 min-h-screen flex flex-col justify-center py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] -z-10" />
      <div className="max-w-[1240px] px-6 lg:px-12 mx-auto w-full">
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
              style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
            >
              Book a <br /><span className="italic text-accent/80">Consultation</span>
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-light max-w-xl">
              Begin your path to alignment and restoration with a personalized session.
            </p>
          </motion.div>
        </motion.div>

        <div className="bg-background border border-border/40 shadow-2xl relative min-h-[600px] flex flex-col">
          {/* Progress Indicator */}
          {!isSuccess && (
            <div className="flex border-b border-border/40">
              {steps.map((step, idx) => (
                <div 
                  key={step.id} 
                  className={`flex-1 py-4 text-center text-[10px] uppercase tracking-widest font-bold transition-colors ${
                    idx <= currentStep ? 'text-accent' : 'text-muted-foreground/40'
                  }`}
                >
                  <span className="hidden sm:inline">{step.label}</span>
                  <span className="sm:hidden">{idx + 1}</span>
                  {idx <= currentStep && (
                    <motion.div layoutId="active-step" className="h-0.5 bg-accent mt-2 mx-4" />
                  )}
                </div>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key={steps[currentStep].id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="p-8 lg:p-16 flex-1 flex flex-col"
              >
                {currentStep === 0 && (
                  <div className="flex-1 flex flex-col justify-center items-center gap-12">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-serif italic">Choose your healing path</h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest">Select the mode that resonates with you</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                      <button 
                        onClick={() => handleTypeSelection('direct')}
                        className="group p-10 border border-border/60 hover:border-accent/60 bg-secondary/5 transition-all text-center space-y-6"
                      >
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent group-hover:text-white transition-all">
                          <Sparkles className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-serif italic">Direct Healing</h4>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">In-person session at our clinic</p>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleTypeSelection('distance')}
                        className="group p-10 border border-border/60 hover:border-accent/60 bg-secondary/5 transition-all text-center space-y-6"
                      >
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent group-hover:text-white transition-all">
                          <Globe className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-serif italic">Distance Healing</h4>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Remote energy alignment anywhere</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="flex-1 overflow-y-auto max-h-[500px] pr-4">
                    <Form {...form}>
                      <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your name" className="bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm rounded-none" {...field} />
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
                                  <Input placeholder="name@example.com" className="bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm rounded-none" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Contact Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 00000 00000" className="bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0 pb-4 text-sm rounded-none" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {healingType === 'distance' && (
                            <FormField
                              control={form.control}
                              name="country"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Your Country</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-transparent border-0 border-b border-border rounded-none focus:ring-0 px-0 pb-4 text-sm">
                                        <SelectValue placeholder="Select your country" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {countries.map(c => (
                                        <SelectItem key={c} value={c.toLowerCase()}>{c}</SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>

                        <FormField
                          control={form.control}
                          name="reason"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Reason for the Treatment</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Briefly describe what you would like to address..." 
                                  className="bg-transparent border border-border/40 focus-visible:ring-0 focus-visible:border-accent min-h-[100px] text-sm rounded-none translate-y-2"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {healingType === 'distance' && (
                          <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block">Upload Photo (Required)</label>
                            <div 
                              className="border-2 border-dashed border-border/40 p-8 text-center cursor-pointer hover:bg-secondary/5 transition-all group"
                              onClick={() => document.getElementById('photo-upload')?.click()}
                            >
                              <input 
                                id="photo-upload" 
                                type="file" 
                                className="hidden" 
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    setUploadedPhotoName(file.name);
                                    form.setValue('image', file);
                                  }
                                }}
                              />
                              {uploadedPhotoName ? (
                                <div className="flex items-center justify-center gap-2">
                                  <Check className="w-4 h-4 text-accent" />
                                  <span className="text-sm font-medium">{uploadedPhotoName}</span>
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  <Upload className="w-6 h-6 text-muted-foreground mx-auto group-hover:text-accent transition-colors" />
                                  <p className="text-xs text-muted-foreground">Select a focus area photo. <br /><span className="text-accent italic font-medium">See the guide to know how you should take the photo.</span></p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </form>
                    </Form>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="flex-1 flex flex-col md:flex-row gap-12 items-start justify-center">
                    <div className="space-y-8 w-full md:w-auto">
                      <div className="space-y-4">
                        <h4 className="text-base uppercase tracking-widest font-bold text-foreground">Clinic Availability</h4>
                        <div className="space-y-2">
                          {clinicHours.map((h, i) => (
                            <div key={i} className="flex justify-between gap-8 text-xs">
                              <span className="text-muted-foreground">{h.day}</span>
                              <span className="font-medium">{h.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border border-border/40 bg-secondary/5">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-none border-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-6 flex-1 w-full max-w-sm">
                      <div className="flex items-center gap-2 text-accent">
                        <Clock className="w-4 h-4" />
                        <h4 className="text-sm uppercase tracking-[0.2em] font-bold">Select a time slot</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-3 text-xs tracking-widest border transition-all ${
                              selectedSlot === slot 
                                ? 'bg-accent text-white border-accent' 
                                : 'border-border/60 hover:border-accent/60'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      {selectedDate && selectedSlot && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4 text-center">
                          <p className="text-xs text-muted-foreground">
                            You have selected <span className="text-foreground font-semibold">{format(selectedDate, 'PPP')}</span> at <span className="text-foreground font-semibold">{selectedSlot}</span>
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="flex-1 flex flex-col justify-center items-center gap-12">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CalendarIcon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-serif italic">Is this your initial consultation?</h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest max-w-sm mx-auto">Help us prepare for your session</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
                      <button 
                        onClick={() => {
                          setIsInitialConsultation(true);
                          nextStep();
                        }}
                        className={`p-8 border transition-all text-center space-y-2 ${
                          isInitialConsultation === true ? 'border-accent bg-accent/5' : 'border-border/60 hover:border-accent/40'
                        }`}
                      >
                        <span className="text-xl font-serif italic block">Yes</span>
                        <span className="text-[9px] text-muted-foreground uppercase tracking-widest">First time at NYL</span>
                      </button>
                      <button 
                        onClick={() => {
                          setIsInitialConsultation(false);
                          nextStep();
                        }}
                        className={`p-8 border transition-all text-center space-y-2 ${
                          isInitialConsultation === false ? 'border-accent bg-accent/5' : 'border-border/60 hover:border-accent/40'
                        }`}
                      >
                        <span className="text-xl font-serif italic block">No</span>
                        <span className="text-[9px] text-muted-foreground uppercase tracking-widest">Returning patient</span>
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="flex-1 flex flex-col justify-center items-center gap-12 text-center">
                    <div className="space-y-4">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                        <CreditCard className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-3xl font-serif italic">Secure your appointment</h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest max-w-sm">
                        A small consultation fee is required to finalize your booking.
                      </p>
                    </div>

                    <div className="w-full max-w-md p-8 border border-accent/20 bg-secondary/5 space-y-8">
                      <div className="flex justify-between items-center text-sm border-b border-border/40 pb-4">
                        <span className="text-muted-foreground uppercase tracking-widest">
                          {isInitialConsultation ? 'Initial Consultation' : 'Follow-up Session'}
                        </span>
                        <span className="font-serif italic text-lg text-foreground">
                          {isInitialConsultation ? '₹1000.00' : '₹300.00'}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest italic leading-relaxed">
                          Your payment information is processed securely. We accept all major cards and digital wallets.
                        </p>
                        <Button 
                          onClick={form.handleSubmit(onSubmit)}
                          disabled={isSubmitting}
                          className="w-full bg-accent hover:bg-accent/90 text-white rounded-none py-8 text-[11px] uppercase tracking-[0.3em] font-bold shadow-xl shadow-accent/10"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Processing...</span>
                            </div>
                          ) : (
                            'Process Payment & Book'
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Controls */}
                {currentStep > 0 && (
                  <div className="flex items-center justify-between pt-10 mt-auto border-t border-border/40">
                    <Button
                      variant="ghost"
                      onClick={prevStep}
                      className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground p-0 h-auto flex items-center gap-2"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </Button>
                    {currentStep < 4 && (
                      <Button
                        onClick={nextStep}
                        disabled={(currentStep === 2 && !selectedSlot) || (currentStep === 3 && isInitialConsultation === null)}
                        className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-bold h-auto flex items-center gap-2"
                      >
                        Continue <ArrowRight className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 text-center space-y-10 flex-1 flex flex-col justify-center"
              >
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-serif italic text-foreground">Expect the <br />Extraordinary.</h3>
                  <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed uppercase tracking-[0.15em]">
                    Your healing journey has begun. You will receive a confirmation email with all the details shortly.
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setIsSuccess(false);
                    setCurrentStep(0);
                    form.reset();
                    setHealingType(null);
                    setSelectedSlot(null);
                  }}
                  variant="ghost"
                  className="text-[10px] uppercase tracking-widest font-bold text-accent"
                >
                  Book another session
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Stylized Centered Alert */}
      <AnimatePresence>
        {showPaymentAlert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="max-w-md w-full bg-background border border-accent/30 p-10 text-center space-y-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              {/* Gold Accent Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl -z-10" />
              
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-serif italic text-foreground tracking-tight">Step in Progress</h3>
                <div className="h-[1px] w-12 bg-accent mx-auto" />
                <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-[0.15em] font-light">
                  Our payment gateway is being finalized to ensure total security. Once complete, you will receive a unique <span className="text-foreground font-bold italic">Healing Token</span> upon booking.
                </p>
              </div>

              <Button
                onClick={() => setShowPaymentAlert(false)}
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-none py-7 text-[10px] uppercase tracking-[0.3em] font-bold transition-all shadow-xl shadow-accent/10"
              >
                Return to Clinic
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
