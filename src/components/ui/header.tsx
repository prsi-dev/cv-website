'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toogle';
import { Button } from '@/components/ui/button';
import DownloadPDFButton from './download-pdf-button';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  // Track scroll direction and update header visibility
  useMotionValueEvent(scrollY, 'change', latest => {
    // Always show header at the top of the page
    if (latest <= 0) {
      setIsVisible(true);
      setLastScrollY(latest);
      return;
    }

    // Show header when scrolling up, hide when scrolling down
    const isScrollingUp = latest < lastScrollY;
    setIsVisible(isScrollingUp);
    setLastScrollY(latest);
  });

  return (
    <motion.header
      className='sticky top-0 z-40 w-full border-b bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <div className='flex h-14 items-center justify-end sm:justify-between flex-grow w-full px-6'>
        <div className='mr-4 hidden md:flex'>
          <nav className='flex items-center space-x-6 text-sm font-medium'>
            <a className='transition-colors hover:text-foreground text-foreground/60' href='#about'>
              About
            </a>
            <a className='transition-colors hover:text-foreground text-foreground/60' href='#skills'>
              Skills
            </a>
            <a className='transition-colors hover:text-foreground text-foreground/60' href='#experience'>
              Experience
            </a>
          </nav>
        </div>
        <div className='flex items-center space-x-2'>
          <DownloadPDFButton />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
