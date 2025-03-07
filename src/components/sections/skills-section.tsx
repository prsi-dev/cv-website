'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TechCarousel } from '@/components/ui/tech-carousel';

interface SkillsSectionProps {
  skills: {
    frontend: string[];
    backend: string[];
  };
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='skills' ref={sectionRef}>
      <motion.h2
        className='font-heading fluid-text-2xl font-bold mb-8 text-primary'
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Skills
      </motion.h2>
      <motion.div
        className='mb-12'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <TechCarousel />
      </motion.div>

      <motion.div
        className='mb-12'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            variants={cardVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='font-heading text-2xl'>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='pl-5 space-y-2'>
                  {skills.frontend.map(skill => (
                    <li key={skill} className='font-heading'>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='font-heading text-2xl'>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='pl-5 space-y-2'>
                  {skills.backend.map(skill => (
                    <li key={skill} className='font-heading'>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
