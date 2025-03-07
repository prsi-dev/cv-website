'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function AnimatedGridBackground() {
  // State for viewport dimensions
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Number of floating elements
  const numElements = 12;

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate random elements
  const elements = Array.from({ length: numElements }).map((_, i) => {
    // Random position
    const x = Math.random() * dimensions.width;
    const y = Math.random() * dimensions.height;

    // Random size (larger elements in the back for depth)
    const size = Math.random() * 300 + 100;

    // Random color - using more subtle colors that work well with text
    const colors = [
      'bg-emerald-200/15',
      'bg-blue-200/15',
      'bg-purple-200/15',
      'bg-pink-200/15',
      'bg-amber-200/15',
      'bg-indigo-200/15',
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Random animation duration
    const duration = Math.random() * 25 + 20;

    return { id: i, x, y, size, color, duration };
  });

  return (
    <div className='fixed inset-0 z-0 h-screen w-full overflow-hidden pointer-events-none bg-white/90'>
      {/* Gradient overlay to ensure text readability */}
      <div className='absolute inset-0 bg-gradient-to-b from-white/60 to-white/90' />

      {/* Animated elements */}
      {elements.map(element => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full blur-2xl ${element.color}`}
          style={{
            width: element.size,
            height: element.size,
            x: element.x,
            y: element.y,
            scale: 0.8,
          }}
          animate={{
            x: [element.x, element.x + (Math.random() * 150 - 75), element.x + (Math.random() * 150 - 75), element.x],
            y: [element.y, element.y + (Math.random() * 150 - 75), element.y + (Math.random() * 150 - 75), element.y],
            scale: [0.8, 1, 0.9, 0.8],
            opacity: [0.3, 0.5, 0.4, 0.3],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
