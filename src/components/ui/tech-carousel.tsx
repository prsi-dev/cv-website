'use client';

import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { GrGraphQl } from 'react-icons/gr';
import { DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiNestjs } from 'react-icons/si';
import { FaReact, FaShopify, FaNodeJs } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';

const technologies = [
  { name: 'React', logo: <FaReact /> },
  { name: 'Next.js', logo: <RiNextjsFill /> },
  { name: 'TypeScript', logo: <SiTypescript /> },
  { name: 'Node.js', logo: <FaNodeJs /> },
  { name: 'NestJs', logo: <SiNestjs /> },
  { name: 'GraphQl', logo: <GrGraphQl /> },
  { name: 'PostgreSQL', logo: <DiPostgresql /> },
  { name: 'Tailwind CSS', logo: <RiTailwindCssFill /> },
  { name: 'Shopify', logo: <FaShopify /> },
];

export function TechCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true, stopOnFocusIn: true }));

  return (
    <div className='w-full mt-8 overflow-hidden'>
      <Carousel
        className='w-full'
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
          containScroll: 'trimSnaps',
        }}
      >
        <CarouselContent className='-ml-2 md:-ml-4'>
          {technologies.map((tech, index) => {
            const LogoComponent = tech.logo.type;
            return (
              <CarouselItem key={index} className='pl-2 md:pl-4 basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/8'>
                <div className='flex flex-col items-center justify-center p-2 h-full'>
                  <div className='bg-background/50 rounded-full p-3 mb-2'>
                    <LogoComponent className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary' />
                  </div>
                  <span className='text-xs sm:text-sm text-center font-medium'>{tech.name}</span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
