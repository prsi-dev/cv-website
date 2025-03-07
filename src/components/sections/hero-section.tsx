'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { AnimatedText } from '@/components/animations/animated-text';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Memoize arrays to prevent recreating them on each render
  const skills = useMemo(
    () => [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'GraphQL',
      'Redux',
      'Tailwind CSS',
      'Framer Motion',
      'NestJS',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Jest',
      'Cypress',
      'Storybook',
      'Shopify',
    ],
    [],
  );

  const colors = useMemo(
    () => [
      'text-blue-500', // TypeScript
      'text-cyan-500', // React
      'text-black', // Next.js
      'text-green-500', // Node.js
      'text-pink-500', // GraphQL
      'text-purple-600', // Redux
      'text-sky-500', // Tailwind CSS
      'text-violet-500', // Framer Motion
      'text-red-500', // NestJS
      'text-green-600', // MongoDB
      'text-blue-600', // PostgreSQL
      'text-blue-400', // Docker
      'text-amber-500', // Jest
      'text-indigo-500', // Cypress
      'text-orange-500', // Storybook
      'text-emerald-500', // Shopify
    ],
    [],
  );

  // Optimize interval with useCallback and visibility detection
  useEffect(() => {
    // Only run animations when tab is visible
    let intervalId: NodeJS.Timeout;

    const startInterval = () => {
      intervalId = setInterval(() => {
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % skills.length);
      }, 4000); // Significantly slowed down to 4 seconds for a more relaxed pace
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startInterval();
      } else if (intervalId) {
        clearInterval(intervalId);
      }
    };

    // Start interval initially
    startInterval();

    // Add visibility change listener
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [skills.length]);

  // Memoize motion variants to prevent recreating them on each render
  const introTextVariants = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5 } },
    }),
    [],
  );

  const buttonContainerVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } },
    }),
    [],
  );

  const buttonHoverVariants = useMemo(
    () => ({
      hover: { scale: 1.05 },
      tap: { scale: 0.95 },
    }),
    [],
  );

  // Scroll to about section with smooth animation
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Scroll indicator animation variants
  const scrollIndicatorVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: -20 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 2.0,
        },
      },
    }),
    [],
  );

  // Separate bounce animation
  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut',
    },
  };

  return (
    <section className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-gray-800'>
      {/* Content starts here */}
      <div className='z-10 flex flex-col items-center justify-center px-4 text-center'>
        {/* Animated intro text */}
        <motion.div
          variants={introTextVariants}
          initial='initial'
          animate='animate'
          className='mb-2 text-sm font-light tracking-widest sm:text-base overflow-hidden'
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
        >
          <AnimatedText text='HELLO, I AM PEDRO RODRIGUEZ' />
        </motion.div>

        {/* Animated heading with letter reveal */}
        <div className='mb-6 font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl overflow-hidden'>
          <AnimatedText text='Full Stack Developer' animation='reveal' delay={0.8} />
        </div>

        <div className='mb-8 h-16 overflow-hidden text-xl font-light sm:text-2xl md:text-3xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTextIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{
                duration: 1.2, // Slower transition between skills
                ease: 'easeInOut', // Smoother easing
              }}
              className='flex items-center justify-center gap-2'
              style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
            >
              <span className='text-primary'>I work with</span>
              <span className={`font-bold font-heading ${colors[currentTextIndex]}`}>{skills[currentTextIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          variants={buttonContainerVariants}
          initial='initial'
          animate='animate'
          className='flex flex-col gap-6 sm:flex-row'
        >
          <motion.div variants={buttonHoverVariants} whileHover='hover' whileTap='tap' onClick={scrollToAbout}>
            <Button variant={'outline'} size={'lg'}>
              View My CV
            </Button>
          </motion.div>

          <div className='flex items-center justify-center gap-4'>
            <Link href='https://github.com' target='_blank' rel='noopener noreferrer'>
              <motion.div variants={buttonHoverVariants} whileHover='hover' whileTap='tap'>
                <Button variant={'outline'} size={'icon'}>
                  <Github className='h-5 w-5' />
                </Button>
              </motion.div>
            </Link>
            <Link href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <motion.div variants={buttonHoverVariants} whileHover='hover' whileTap='tap'>
                <Button variant={'outline'} size={'icon'}>
                  <Linkedin className='h-5 w-5' />
                </Button>
              </motion.div>
            </Link>
            <Link href='mailto:prsi.developer@gmail.com' target='_blank' rel='noopener noreferrer'>
              <motion.div variants={buttonHoverVariants} whileHover='hover' whileTap='tap'>
                <Button variant={'outline'} size={'icon'}>
                  <Mail className='h-5 w-5' />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 flex flex-col items-center'
        variants={scrollIndicatorVariants}
        initial='initial'
        animate='animate'
        whileInView={bounceAnimation}
        onClick={scrollToAbout}
        style={{ cursor: 'pointer' }}
      >
        <span className='text-sm mb-2 opacity-70 font-heading'>Scroll Down</span>
        <ChevronDown className='h-6 w-6 opacity-70' />
      </motion.div>
    </section>
  );
}
