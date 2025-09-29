'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import GlassContainer from '../GlassContainer';

export default function Hero() {
  // Business photos slideshow
  const images = [
    '/images/store-front.png',
    '/images/entryway.png', 
    '/images/waiting-room.png',
    '/images/hallway.png',
    '/images/procedure-room1.png',
    '/images/procedure-room2.png'
  ];
  const [currentImage, setCurrentImage] = useState(0);
  
  // Cycling tagline state
  const taglines = ['Precision', 'Performance', 'Perfection'];
  const [currentTagline, setCurrentTagline] = useState(0);

  // Image slideshow effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(imageInterval);
  }, [images.length]);

  // Cycling tagline effect
  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(taglineInterval);
  }, [taglines.length]);

  return (
    <section 
      role="banner"
      aria-label="Hero section with laser treatment introduction"
      className="relative h-screen overflow-hidden"
    >
      
      {/* Split Layout Container */}
      <div className="flex h-full">
        
        {/* Left Side - Content with Glass Container */}
        <div className="w-1/2 bg-natural-white flex items-center justify-center p-12 relative">
          <GlassContainer 
            taglines={taglines}
            currentTagline={currentTagline}
            className="max-w-lg"
          />
        </div>
        
        {/* Right Side - Image Slideshow with Left Fade */}
        <div className="w-1/2 relative">
          {images.map((image, index) => (
            <div
              key={image}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === currentImage ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
                zIndex: index === currentImage ? 5 : 4
              }}
            >
              <Image
                src={image}
                alt={`RX Laser facility - ${image.split('/').pop()?.replace('.png', '').replace('-', ' ')}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Left Fade Overlay */}
          <div className="absolute inset-0 z-10" style={{
            background: 'linear-gradient(to right, rgba(254,254,254,1) 0%, rgba(254,254,254,0.8) 15%, rgba(254,254,254,0.4) 35%, rgba(254,254,254,0.1) 60%, transparent 80%)'
          }}></div>
        </div>
        
      </div>
    </section>
  );
}
