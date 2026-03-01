'use client';

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import { MoveLeft, MoveRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  caseIndex: number;
  beforeImage?: string;
  afterImage?: string;
  title?: string;
}

export default function BeforeAfterSlider({
  caseIndex,
  beforeImage = '/before-case-1.jpg',
  afterImage = '/after-case-1.jpg',
  title = "Transformation"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0);
  const prevIndex = useRef(caseIndex);

  // Smooth handle movement
  const springX = useSpring(50, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (caseIndex !== prevIndex.current) {
      setDirection(caseIndex > prevIndex.current ? 1 : -1);
      setSliderPosition(50);
      springX.set(50);
      prevIndex.current = caseIndex;
    }
  }, [caseIndex, springX]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(clamped);
    springX.set(clamped);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-muted group/container rounded-sm shadow-2xl">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={caseIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction * 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -direction * 50, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square md:aspect-video"
          ref={containerRef}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => { setShowCursor(false); setIsDragging(false); }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={onMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={onTouchMove}
        >
          {/* Before Image (Static Layer) */}
          <div className="absolute inset-0">
            <Image
              src={beforeImage}
              alt="Before Treatment"
              fill
              className="object-cover transition-transform duration-1000 group-hover/container:scale-[1.02]"
              priority
            />
            <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-background/20 backdrop-blur-md border border-white/10 rounded-full">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white drop-shadow-md">Before</span>
            </div>
          </div>

          {/* After Image (Revealed Layer) */}
          <motion.div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="relative w-full h-full">
              <Image
                src={afterImage}
                alt="After Treatment"
                fill
                className="object-cover transition-transform duration-1000 group-hover/container:scale-[1.02]"
                priority
              />
              <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-accent/30 backdrop-blur-md border border-accent/20 rounded-full">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white drop-shadow-md">After</span>
              </div>
            </div>
          </motion.div>

          {/* Drag Handle (Luxury Edition) */}
          <motion.div
            className="absolute top-0 bottom-0 z-30 w-[2px] bg-white/40 cursor-grab active:cursor-grabbing group"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center gap-1 transition-transform group-hover:scale-110">
                <div className="w-[1px] h-4 bg-white/60" />
                <div className="w-[1px] h-4 bg-white/60" />
                <div className="w-[1px] h-4 bg-white/60" />
              </div>
            </div>
            {/* Visual glow line */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[4px] bg-accent/20 blur-sm" />
          </motion.div>

          {/* Custom Hint Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 py-2 bg-primary/80 backdrop-blur-md border border-primary-foreground/10 rounded-none flex items-center gap-4"
            >
              <MoveLeft className="w-3 h-3 text-primary-foreground/60" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-primary-foreground">Slide to reveal transformation</span>
              <MoveRight className="w-3 h-3 text-primary-foreground/60" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
