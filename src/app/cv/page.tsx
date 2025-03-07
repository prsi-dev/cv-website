'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import cvData from '@/lib/cv.json';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  // Set up smooth scrolling for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <NavBar />
      <main className='max-w-screen-lg mx-auto px-4'>
        <motion.div initial='hidden' animate='visible' variants={fadeInUp}>
          <HeroSection name={cvData.name} title={cvData.title} />
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <AboutSection teamwork={cvData.teamwork} aboutMe={cvData.aboutMe} />
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <SkillsSection skills={cvData.skills} />
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <ExperienceSection experience={cvData.experience} />
        </motion.div>
      </main>
      <ScrollToTopButton />
    </>
  );
}
