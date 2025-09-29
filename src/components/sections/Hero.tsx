'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

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
      style={{ position: 'relative', width: '100%', height: '100vh' }}
    >
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
            zIndex: index === currentImage ? 2 : 1
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
      
      {/* Dark overlay to dim images */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }}></div>
      
      {/* Subtle full-height fade with noise texture */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 80%, rgba(254,254,254,0.03) 0%, transparent 70%),
            radial-gradient(circle at 70% 85%, rgba(254,254,254,0.03) 0%, transparent 70%),
            radial-gradient(circle at 45% 90%, rgba(254,254,254,0.02) 0%, transparent 50%),
            linear-gradient(to bottom, 
              rgba(254,254,254,0) 0%, 
              rgba(254,254,254,0.005) 20%, 
              rgba(254,254,254,0.01) 35%, 
              rgba(254,254,254,0.03) 50%, 
              rgba(254,254,254,0.08) 65%, 
              rgba(254,254,254,0.20) 75%, 
              rgba(254,254,254,0.45) 85%, 
              rgba(254,254,254,0.75) 92%, 
              rgba(254,254,254,1) 100%
            )
          `,
          zIndex: 2
        }}
      ></div>
      
      {/* Logo on Glassmorphism Pane */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        textAlign: 'center',
        padding: '60px 80px',
        background: 'rgba(229, 190, 237, 0.12)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(229, 190, 237, 0.15)',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <h1 
            className="font-young-serif text-space-cadet text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide"
            style={{
              textShadow: `
                0 0 5px rgba(229, 190, 237, 0.8),
                0 0 10px rgba(229, 190, 237, 0.6),
                0 0 15px rgba(229, 190, 237, 0.4),
                0 0 20px rgba(229, 190, 237, 0.3),
                0 0 35px rgba(229, 190, 237, 0.2),
                0 0 40px rgba(229, 190, 237, 0.1)
              `,
              filter: 'drop-shadow(0 0 8px rgba(229, 190, 237, 0.4))'
            }}
          >
            Laser
          </h1>
          <Image
            src="/logo.png"
            alt="RX Logo"
            width={150}
            height={60}
            className="inline-block"
            priority
          />
        </div>
        
        {/* Cycling Tagline */}
        <div className="mb-6 h-16 flex items-center justify-center">
          <h2 
            key={currentTagline}
            className="font-young-serif text-space-cadet text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide animate-pulse"
            style={{
              textShadow: `
                0 0 3px rgba(152, 217, 194, 0.8),
                0 0 6px rgba(152, 217, 194, 0.6),
                0 0 9px rgba(152, 217, 194, 0.4),
                0 0 12px rgba(152, 217, 194, 0.3),
                0 0 18px rgba(152, 217, 194, 0.2)
              `,
              filter: 'drop-shadow(0 0 4px rgba(152, 217, 194, 0.4))',
              animation: 'fadeInOut 2s ease-in-out infinite'
            }}
          >
            {taglines[currentTagline]}.
          </h2>
        </div>
        
        <style jsx>{`
          @keyframes fadeInOut {
            0% { opacity: 0.7; transform: scale(0.98); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0.7; transform: scale(0.98); }
          }
        `}</style>
        
        <p className="font-bagnard text-space-cadet text-xl md:text-2xl lg:text-3xl mt-6 leading-relaxed">
          Your journey to confident, radiant skin starts here
        </p>
        <p className="font-bagnard text-space-cadet/80 text-lg md:text-xl lg:text-2xl mt-2 leading-relaxed">
          Safe, effective treatments designed just for you
        </p>
        <button 
          className="font-oswald text-natural-white bg-goldenrod hover:bg-yellow-600 px-10 py-4 mt-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open('tel:18109563272', '_self')}
        >
          Book Your Glow-Up! 💫
        </button>
      </div>
    </section>
  );
}
