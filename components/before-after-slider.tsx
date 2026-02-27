'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  caseIndex: number;
  beforeImage?: string;
  afterImage?: string;
}

export default function BeforeAfterSlider({ 
  caseIndex, 
  beforeImage = '/before-case-1.jpg',
  afterImage = '/after-case-1.jpg'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSliderPosition(50);
  }, [caseIndex]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg aspect-video bg-muted cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before Image */}
      <Image
        src={beforeImage}
        alt="Before treatment"
        fill
        className="object-cover"
        priority
      />

      {/* After Image */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
        animate={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        transition={{ type: 'tween', duration: 0, ease: 'linear' }}
      >
        <Image
          src={afterImage}
          alt="After treatment"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Slider handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize select-none"
        style={{ left: `${sliderPosition}%` }}
        animate={{ left: `${sliderPosition}%` }}
        transition={{ type: 'tween', duration: 0, ease: 'linear' }}
      >
        {/* Handle circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center border-4 border-background"
          animate={{
            scale: isDragging ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Arrow icons */}
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-primary-foreground" />
            <div className="w-1 h-3 bg-primary-foreground" />
          </div>
        </motion.div>
      </motion.div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 text-xs font-medium text-foreground bg-black/30 px-2 py-1 rounded">
        Drag to compare
      </div>
    </div>
  );
}
