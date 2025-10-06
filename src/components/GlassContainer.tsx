'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface GlassContainerProps {
  taglines: string[];
  currentTagline: number;
  className?: string;
}

export default function GlassContainer({ taglines, currentTagline, className = '' }: GlassContainerProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Utility functions from example.md
  const centerOfElement = (el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  };

  const pointerPositionRelativeToElement = (el: HTMLElement, e: React.PointerEvent) => {
    const pos = [e.clientX, e.clientY];
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = pos[0] - left;
    const y = pos[1] - top;
    const px = clamp((100 / width) * x);
    const py = clamp((100 / height) * y);
    return { pixels: [x, y], percent: [px, py] };
  };

  const angleFromPointerEvent = (el: HTMLElement, dx: number, dy: number) => {
    let angleRadians = 0;
    let angleDegrees = 0;
    if (dx !== 0 || dy !== 0) {
      angleRadians = Math.atan2(dy, dx);
      angleDegrees = angleRadians * (180 / Math.PI) + 90;
      if (angleDegrees < 0) {
        angleDegrees += 360;
      }
    }
    return angleDegrees;
  };

  const distanceFromCenter = (el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = centerOfElement(el);
    return [x - cx, y - cy];
  };

  const closenessToEdge = (el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = centerOfElement(el);
    const [dx, dy] = distanceFromCenter(el, x, y);
    let k_x = Infinity;
    let k_y = Infinity;
    if (dx !== 0) {
      k_x = cx / Math.abs(dx);
    }
    if (dy !== 0) {
      k_y = cy / Math.abs(dy);
    }
    return clamp(1 / Math.min(k_x, k_y), 0, 1);
  };

  const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));
  const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

  // Card update function from example.md
  const cardUpdate = (e: React.PointerEvent) => {
    if (!cardRef.current) return;
    
    const position = pointerPositionRelativeToElement(cardRef.current, e);
    const [px, py] = position.pixels;
    const [perx, pery] = position.percent;
    const [dx, dy] = distanceFromCenter(cardRef.current, px, py);
    const edge = closenessToEdge(cardRef.current, px, py);
    const angle = angleFromPointerEvent(cardRef.current, dx, dy);

    cardRef.current.style.setProperty('--pointer-x', `${round(perx)}%`);
    cardRef.current.style.setProperty('--pointer-y', `${round(pery)}%`);
    cardRef.current.style.setProperty('--pointer-°', `${round(angle)}deg`);
    cardRef.current.style.setProperty('--pointer-d', `${round(edge * 100)}`);
    
    setIsAnimating(false);
  };

  // Animation functions from example.md
  const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
  const easeInCubic = (x: number) => x * x * x;

  const animateNumber = (options: {
    startValue?: number;
    endValue?: number;
    duration?: number;
    delay?: number;
    onUpdate?: (value: number) => void;
    ease?: (t: number) => number;
    onStart?: () => void;
    onEnd?: () => void;
  }) => {
    const {
      startValue = 0,
      endValue = 100,
      duration = 1000,
      delay = 0,
      onUpdate = () => {},
      ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      onStart = () => {},
      onEnd = () => {},
    } = options;

    const startTime = performance.now() + delay;

    function update() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      const easedValue = startValue + (endValue - startValue) * ease(t);

      onUpdate(easedValue);

      if (t < 1) {
        requestAnimationFrame(update);
      } else if (t >= 1) {
        onEnd();
      }
    }
    
    setTimeout(() => {
      onStart();
      requestAnimationFrame(update);
    }, delay);
  };

  const playAnimation = () => {
    if (!cardRef.current) return;
    
    const angleStart = 110;
    const angleEnd = 465;

    cardRef.current.style.setProperty('--pointer-°', `${angleStart}deg`);
    setIsAnimating(true);

    animateNumber({
      ease: easeOutCubic,
      duration: 500,
      onUpdate: (v) => {
        cardRef.current?.style.setProperty('--pointer-d', v.toString());
      }
    });

    animateNumber({
      ease: easeInCubic,
      delay: 0,
      duration: 1500,
      endValue: 50,
      onUpdate: (v) => {
        const d = (angleEnd - angleStart) * (v / 100) + angleStart;
        cardRef.current?.style.setProperty('--pointer-°', `${d}deg`);
      }
    }); 

    animateNumber({
      ease: easeOutCubic,
      delay: 1500,
      duration: 2250,
      startValue: 50,
      endValue: 100,
      onUpdate: (v) => {
        const d = (angleEnd - angleStart) * (v / 100) + angleStart;
        cardRef.current?.style.setProperty('--pointer-°', `${d}deg`);
      }
    });

    animateNumber({
      ease: easeInCubic,
      duration: 1500,
      delay: 2500,
      startValue: 100,
      endValue: 0,
      onUpdate: (v) => {
        cardRef.current?.style.setProperty('--pointer-d', v.toString());
      },
      onEnd: () => {
        setIsAnimating(false);
      }
    });
  };

  // Intro animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      playAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div 
      ref={cardRef}
      onPointerMove={cardUpdate}
      className={`glass-card ${isAnimating ? 'animating' : ''} ${className}`}
      style={{
        // CSS variables
        '--glow-sens': '30',
        '--dark': '#fefefe', 
        '--card-bg': 'linear-gradient(8deg, color-mix(in hsl, hsl(200, 50%, 85%), #1a1a1a 2.5%) 75%, hsl(200, 50%, 85%) 75.5%)',
        '--blend': 'darken',
        '--glow-blend': 'luminosity',
        '--glow-color': '200deg 80% 75%',
        '--glow-boost': '15%',
        '--pads': '40px',
        '--color-sens': 'calc(30 + 20)',
        '--pointer-°': '45deg',
        '--pointer-x': '50%',
        '--pointer-y': '50%',
        '--pointer-d': '0',

        // Main card styles
        position: 'relative',
        width: 'clamp(280px, calc(100vw - 40px), 600px)',
        height: 'auto',
        minHeight: 'clamp(350px, 60vh, 400px)',
        borderRadius: '1.768em',
        isolation: 'isolate',
        transform: 'translate3d(0, 0, 0.01px)',
        display: 'grid',
        border: '1px solid rgb(255 255 255 / 25%)',
        background: 'var(--card-bg)',
        backgroundRepeat: 'no-repeat',
        
        // Box shadow
        boxShadow: `
          rgba(0, 0, 0, 0.1) 0px 1px 2px, 
          rgba(0, 0, 0, 0.1) 0px 2px 4px, 
          rgba(0, 0, 0, 0.1) 0px 4px 8px, 
          rgba(0, 0, 0, 0.1) 0px 8px 16px, 
          rgba(0, 0, 0, 0.1) 0px 16px 32px, 
          rgba(0, 0, 0, 0.1) 0px 32px 64px
        `
      } as React.CSSProperties & Record<string, string>}
    >
      {/* ::before equivalent - mesh gradient border */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          borderRadius: 'inherit',
          zIndex: -1,
          border: '1px solid transparent',
          background: `
            linear-gradient(var(--card-bg) 0 100%) padding-box,
            linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box,
            radial-gradient(at 80% 55%, hsla(200,80%,76%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 69% 34%, hsla(210,70%,74%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 8% 6%, hsla(195,85%,78%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 41% 38%, hsla(205,90%,64%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 86% 85%, hsla(190,80%,74%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 82% 18%, hsla(215,75%,65%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 51% 4%, hsla(0,0%,20%,1) 0px, transparent 50%) border-box,
            linear-gradient(#87CEEB 0 100%) border-box
          `,
          opacity: 'calc((var(--pointer-d) - var(--color-sens)) / (100 - var(--color-sens)))',
          maskImage: 'conic-gradient(from var(--pointer-°) at center, black 25%, transparent 40%, transparent 60%, black 75%)',
          WebkitMaskImage: 'conic-gradient(from var(--pointer-°) at center, black 25%, transparent 40%, transparent 60%, black 75%)'
        }}
      />

      {/* ::after equivalent - mesh gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          borderRadius: 'inherit',
          zIndex: -1,
          border: '1px solid transparent',
          background: `
            radial-gradient(at 80% 55%, hsla(200,80%,76%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 69% 34%, hsla(210,70%,74%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 8% 6%, hsla(195,85%,78%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 41% 38%, hsla(205,90%,64%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 86% 85%, hsla(190,80%,74%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 82% 18%, hsla(215,75%,65%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 51% 4%, hsla(0,0%,20%,1) 0px, transparent 50%) padding-box,
            linear-gradient(#87CEEB 0 100%) padding-box
          `,
          opacity: 'calc((var(--pointer-d) - var(--color-sens)) / (100 - var(--color-sens)))',
          mixBlendMode: 'darken',
          maskImage: `
            linear-gradient(to bottom, black, black),
            radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%),
            radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%),
            radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%),
            radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%),
            radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%),
            conic-gradient(from var(--pointer-°) at center, transparent 5%, black 15%, black 85%, transparent 95%)
          `,
          WebkitMaskImage: `
            linear-gradient(to bottom, black, black),
            radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%),
            radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%),
            radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%),
            radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%),
            radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%),
            conic-gradient(from var(--pointer-°) at center, transparent 5%, black 15%, black 85%, transparent 95%)
          `,
          maskComposite: 'subtract, add, add, add, add, add'
        }}
      />

      {/* .glow element */}
      <div 
        className="glow-element absolute pointer-events-none transition-opacity duration-300"
        style={{
          inset: 'calc(-1 * var(--pads))',
          borderRadius: 'inherit',
          zIndex: 1,
          opacity: 'calc((var(--pointer-d) - var(--glow-sens)) / (100 - var(--glow-sens)))',
          mixBlendMode: 'luminosity',
          maskImage: 'conic-gradient(from var(--pointer-°) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)',
          WebkitMaskImage: 'conic-gradient(from var(--pointer-°) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)'
        }}
      >
        <div 
          className="absolute"
          style={{
            inset: 'var(--pads)',
            borderRadius: 'inherit',
            boxShadow: `
              inset 0 0 0 1px hsl(var(--glow-color) / 100%), 
              
              inset 0 0 1px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 60%)), 
              inset 0 0 3px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 50%)), 
              inset 0 0 6px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 40%)), 
              inset 0 0 15px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 30%)), 
              inset 0 0 25px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 20%)), 
              inset 0 0 50px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 10%)), 
              
              0 0 1px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 60%)), 
              0 0 3px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 50%)), 
              0 0 6px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 40%)), 
              0 0 15px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 30%)), 
              0 0 25px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 20%)), 
              0 0 50px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 10%))
            `
          }}
        />
      </div>

      {/* Inner content */}
      <div 
        className="inner"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'auto',
          zIndex: 1,
          padding: '1em'
        }}
      >
        {/* Content */}
        <div 
          className="content"
          style={{
            padding: '1em',
            fontWeight: 300,
            textAlign: 'left',
            lineHeight: 1.4,
            color: 'black',
            overflow: 'auto',
            scrollbarWidth: 'none',
            maskImage: 'linear-gradient(to top, transparent 5px, black 2em)'
          }}
        >
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4">
            <h1 
              className="font-young-serif text-space-cadet text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-wide"
              style={{
                textShadow: `
                  0 0 5px rgba(135, 206, 235, 0.8),
                  0 0 10px rgba(135, 206, 235, 0.6),
                  0 0 15px rgba(135, 206, 235, 0.4),
                  0 0 20px rgba(135, 206, 235, 0.3),
                  0 0 35px rgba(135, 206, 235, 0.2),
                  0 0 40px rgba(135, 206, 235, 0.1)
                `,
                filter: 'drop-shadow(0 0 8px rgba(135, 206, 235, 0.4))'
              }}
            >
              Laser
            </h1>
            <Image
              src="/logo-black.png"
              alt="RX Logo"
              width={120}
              height={48}
              className="inline-block w-[80px] h-auto sm:w-[100px] lg:w-[120px]"
              priority
            />
          </div>

          {/* Cycling Tagline */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-center sm:text-left"
            style={{
              color: 'inherit',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 4vw, 2em)',
              marginBlock: '0.5em',
              textShadow: '0 1px 1px lightslategray'
            }}
          >
            <span 
              className="font-young-serif text-space-cadet"
              style={{
                textShadow: `
                  0 0 3px rgba(26, 26, 26, 0.8),
                  0 0 6px rgba(26, 26, 26, 0.6),
                  0 0 9px rgba(26, 26, 26, 0.4),
                  0 0 12px rgba(26, 26, 26, 0.3),
                  0 0 18px rgba(26, 26, 26, 0.2)
                `,
                filter: 'drop-shadow(0 0 4px rgba(26, 26, 26, 0.4)'
              }}
            >
              {taglines[currentTagline]}.
            </span>
          </h2>

          {/* Simplified Content */}
          <p 
            className="mb-6 text-base sm:text-lg text-center sm:text-left"
            style={{
              opacity: 0,
              animation: 'fadeContent 1.5s ease-in-out 2s both',
              color: 'rgba(0, 0, 0, 0.8)'
            }}
          >
            Safe, effective treatments for hair removal, skin rejuvenation, and more. 
            Experience state-of-the-art laser technology in our comfortable, modern facility.
          </p>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8 text-center sm:text-left">
            <button
              onClick={() => window.open('tel:18109563272', '_self')}
              className="font-oswald bg-goldenrod text-natural-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-pink-lavender hover:text-natural-white transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeContent {
          to {
            opacity: 1;
          }
        }
        
        .glass-card:not(:hover):not(.animating) .absolute {
          opacity: 0;
          transition: opacity 0.75s ease-in-out;
        }

        .glass-card .absolute {
          transition: opacity 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
