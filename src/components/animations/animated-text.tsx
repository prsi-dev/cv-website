'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import type { FC } from 'react';
import { useMemo } from 'react';

interface AnimatedTextProps {
  text: string;
  animation?: 'typewriter' | 'reveal' | 'bounce';
  delay?: number;
}

// Memoize the component to prevent unnecessary re-renders
export const AnimatedText: FC<AnimatedTextProps> = memo(({ text, animation = 'typewriter', delay = 0 }) => {
  // Split text into an array of letters - memoized to avoid recalculation
  const letters = useMemo(() => Array.from(text), [text]);

  // Variants for container animation
  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: i,
      transition: {
        staggerChildren: 0.04, // Slightly slower stagger for better performance
        delayChildren: delay,
      },
    }),
  };

  // Variants for each letter animation - optimized for performance
  const child = {
    // Typewriter effect
    typewriter: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          damping: 15, // Increased damping for less computation
          stiffness: 80, // Reduced stiffness for smoother animation
        },
      },
    },
    // Reveal from bottom effect
    reveal: {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          damping: 15,
          stiffness: 80,
        },
      },
    },
    // Bounce effect
    bounce: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          damping: 15,
          stiffness: 80,
        },
      },
    },
  };

  // Choose the animation variant based on the prop
  const selectedAnimation = child[animation];

  return (
    <motion.div
      style={{
        display: 'flex',
        overflow: 'hidden',
        willChange: 'transform, opacity', // Hardware acceleration hint
      }}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={selectedAnimation}
          className='text-primary'
          style={{
            display: 'inline-block', // Better for transforms
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
});

// Add display name for debugging
AnimatedText.displayName = 'AnimatedText';
