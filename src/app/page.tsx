'use client';

import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { Hero } from '@/components/sections/hero-section';
import cvData from '@/lib/cv.json';
export default function Home() {
  return (
    <main className='max-w-screen-lg mx-auto px-4'>
      <Hero />
      <AboutSection teamwork={cvData.teamwork} aboutMe={cvData.aboutMe} />
      <SkillsSection skills={cvData.skills} />
      <ExperienceSection experience={cvData.experience} />
    </main>
  );
}
