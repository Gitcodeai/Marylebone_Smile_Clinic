'use client';

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import { MoveLeft, MoveRight, MoveUp, MoveDown } from 'lucide-react';

interface BeforeAfterSliderProps {
  caseIndex: number;
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function BeforeAfterSlider({
  caseIndex,
  beforeImage = '/before-case-1.jpg',
  afterImage = '/after-case-1.jpg',
  title = "Transformation",
  orientation = 'horizontal'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0);
  const prevIndex = useRef(caseIndex);

  // Smooth handle movement
  const springPos = useSpring(50, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (caseIndex !== prevIndex.current) {
      setDirection(caseIndex > prevIndex.current ? 1 : -1);
      setSliderPosition(50);
      springPos.set(50);
      prevIndex.current = caseIndex;
    }
  }, [caseIndex, springPos]);

  const handleMove = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition: number;

    if (orientation === 'horizontal') {
      newPosition = ((clientX - rect.left) / rect.width) * 100;
    } else {
      newPosition = ((clientY - rect.top) / rect.height) * 100;
    }

    const clamped = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(clamped);
    springPos.set(clamped);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX, e.clientY);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  // Prevent page scroll while dragging on touch devices
  // Must use a native DOM listener with { passive: false } — React synthetic events cannot preventDefault on touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const preventScroll = (e: globalThis.TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    el.addEventListener('touchmove', preventScroll, { passive: false });
    return () => el.removeEventListener('touchmove', preventScroll);
  }, [isDragging]);

  const clipPathStyle = orientation === 'horizontal'
    ? { clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }
    : { clipPath: `inset(0 0 ${100 - sliderPosition}% 0)` };

  const handleStyle = orientation === 'horizontal'
    ? { left: `${sliderPosition}%`, top: 0, bottom: 0, width: '2px', height: '100%' }
    : { top: `${sliderPosition}%`, left: 0, right: 0, height: '2px', width: '100%' };

  return (
    <div className="relative w-full h-full overflow-hidden bg-transparent md:bg-muted group/container shadow-2xl">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={caseIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction * 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -direction * 50, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
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
          {/* Before Image (Revealed Layer) */}
          <motion.div
            className="absolute inset-0 z-10 overflow-hidden"
            style={clipPathStyle}
          >
            <div className="relative w-full h-full">
              <Image
                src={beforeImage}
                alt="Before Treatment"
                fill
                className="object-contain md:object-cover transition-transform duration-1000 md:group-hover/container:scale-[1.02]"
                priority
              />
              <div className="absolute top-4 left-[20%] md:top-6 md:left-6 px-2 py-1 md:px-6 md:py-3 bg-accent/40 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-[7px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white drop-shadow-md">Before</span>
              </div>
            </div>
          </motion.div>

          {/* After Image (Static Layer) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={afterImage}
              alt="After Treatment"
              fill
              className="object-contain md:object-cover transition-transform duration-1000 md:group-hover/container:scale-[1.02]"
              priority
            />
            <div className="absolute bottom-4 left-[20%] md:bottom-6 md:left-6 px-2 py-1 md:px-6 md:py-3 bg-accent/40 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-[7px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white drop-shadow-md">After</span>
            </div>
          </div>

          {/* Drag Handle (Luxury Edition) */}
          <motion.div
            className="absolute z-30 bg-white/40 cursor-grab active:cursor-grabbing group"
            style={handleStyle}
          >
            <div className={`absolute ${orientation === 'horizontal' ? 'inset-y-0 -left-4 -right-4' : 'inset-x-0 -top-4 -bottom-4'} flex items-center justify-center`}>
              <div className={`w-12 h-12 rounded-full bg-background/50 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center gap-1 transition-transform group-hover:scale-110 ${orientation === 'vertical' ? 'flex-col rotate-90' : ''}`}>
                <div className="w-1 h-1 rounded-full bg-white/60" />
                <div className="w-1 h-1 rounded-full bg-white/60" />
                <div className="w-1 h-1 rounded-full bg-white/60" />
              </div>
            </div>
            {/* Visual glow line */}
            <div className={`absolute ${orientation === 'horizontal' ? 'inset-y-0 left-1/2 -translate-x-1/2 w-[4px]' : 'inset-x-0 top-1/2 -translate-y-1/2 h-[4px]'} bg-accent/20 blur-sm`} />
          </motion.div>

          {/* Custom Hint Label */}
          <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-40 opacity-0 group-hover/container:opacity-100 transition-opacity">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 py-2 bg-primary/80 backdrop-blur-md border border-primary-foreground/10 rounded-none items-center gap-4 whitespace-nowrap"
            >
              {orientation === 'horizontal' ? (
                <>
                  <MoveLeft className="w-3 h-3 text-primary-foreground/60" />
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-primary-foreground">Slide horizontally</span>
                  <MoveRight className="w-3 h-3 text-primary-foreground/60" />
                </>
              ) : (
                <>
                  <MoveUp className="w-3 h-3 text-primary-foreground/60" />
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-primary-foreground">Slide vertically</span>
                  <MoveDown className="w-3 h-3 text-primary-foreground/60" />
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
