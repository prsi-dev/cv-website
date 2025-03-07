'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description?: string[];
  techStack: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='experience' className='pb-20' ref={sectionRef}>
      <motion.h2
        className='font-heading fluid-text-2xl font-bold mb-8 text-primary'
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Experience
      </motion.h2>

      <motion.div variants={containerVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
        {experience.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className='mb-8 border-none shadow-none'>
              <CardHeader>
                <CardTitle className='font-heading text-3xl'>{exp.position}</CardTitle>
                <CardDescription className='text-2xl text-primary'>
                  {exp.company}, {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground mb-4'>{exp.period}</p>
                <ul className='list-disc pl-5 space-y-2 mb-4'>
                  {exp.description?.map((sentence, index) => (
                    <li key={index} className='list-disc'>
                      {sentence}
                    </li>
                  ))}
                </ul>
                <p className='font-heading font-semibold text-primary'>Tech Stack:</p>
                <ul className='pl-5 space-y-1'>
                  {exp.techStack.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
