'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface AboutSectionProps {
  teamwork: string;
  aboutMe: Array<{
    sectionTitle: string;
    content: string;
  }>;
}

export function AboutSection({ teamwork, aboutMe }: AboutSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section id='about' className='pb-10 mt-14 ' ref={sectionRef}>
      <motion.h2
        className='font-heading fluid-text-2xl font-bold mb-8 text-primary'
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>

      <motion.div variants={containerVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
        <Card className='border-none shadow-none'>
          <CardHeader>
            <motion.div variants={itemVariants}>
              <CardTitle className='font-heading text-2xl'>{teamwork.split('.')[0]}</CardTitle>
              <CardDescription className='text-xl mt-4'>{teamwork.split('.')[1]}</CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent>
            {aboutMe.map((section, index) => (
              <motion.div key={index} className='mb-4' variants={itemVariants}>
                <h3 className='font-heading fluid-text-xl font-bold mb-2'>{section.sectionTitle}</h3>
                {section.content.split('.').map(
                  (sentence, idx) =>
                    sentence.trim() && (
                      <p key={idx} className='text-justify'>
                        {sentence.trim()}.
                      </p>
                    ),
                )}
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
