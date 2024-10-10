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
    <Carousel
      className='w-full max-w-xs mx-auto'
      plugins={[plugin.current]}
      opts={{
        align: 'center',
        loop: true,
      }}
    >
      <CarouselContent>
        {technologies.map((tech, index) => {
          const LogoComponent = tech.logo.type;
          return (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1 mx-3'>
                <LogoComponent className='w-16 h-16 object-contain' />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
