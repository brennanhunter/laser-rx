'use client'

import { useState, useEffect } from 'react'

export default function TestimonialBanner() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const testimonials = [
    "\"The results exceeded my expectations. My skin looks 10 years younger!\" - Sarah M.",
    "\"Professional, safe, and amazing results. I couldn't be happier.\" - Jessica R.",
    "\"Best laser treatment I've ever had. The staff is incredible.\" - Maria L.",
    "\"FDA approved technology gave me confidence. Results speak for themselves.\" - Amanda K.",
    "\"Finally found a place I trust for laser treatments. Highly recommend!\" - Rachel P.",
    "\"Pain-free laser hair removal that actually works. Love the results!\" - Emma D.",
    "\"Skin rejuvenation treatment exceeded all my expectations.\" - Lisa K."
  ]

  // Generate floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 2}s`
  }))

  return (
    <section className="relative w-full overflow-hidden">
      {/* Enhanced Glassmorphism testimonial banner */}
      <div className="relative w-full overflow-hidden z-10">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-gradient-to-r from-pink-lavender/20 via-pink-lavender/30 to-pink-lavender/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(229,190,237,0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        {/* Main banner content */}
        <div className="relative backdrop-blur-xl bg-gradient-to-r from-pink-lavender/15 via-pink-lavender/25 to-pink-lavender/15 border-y border-pink-lavender/30 py-6 shadow-2xl">
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-lavender/70 to-transparent" />
          
          {/* Scrolling testimonials container */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="group inline-flex items-center justify-center mx-12 py-2 px-6 rounded-lg transition-all duration-500 hover:bg-pink-lavender/20 hover:backdrop-blur-2xl"
              >
                <span className="text-space-cadet/90 font-bagnard text-lg italic tracking-wide group-hover:text-natural-white group-hover:scale-105 transition-all duration-300 drop-shadow-lg">
                  {testimonial}
                </span>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-lavender/30 to-pink-lavender/40 blur-xl -z-10" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="group inline-flex items-center justify-center mx-12 py-2 px-6 rounded-lg transition-all duration-500 hover:bg-pink-lavender/20 hover:backdrop-blur-2xl"
              >
                <span className="text-space-cadet/90 font-bagnard text-lg italic tracking-wide group-hover:text-natural-white group-hover:scale-105 transition-all duration-300 drop-shadow-lg">
                  {testimonial}
                </span>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-lavender/30 to-pink-lavender/40 blur-xl -z-10" />
              </div>
            ))}
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-lavender/70 to-transparent" />
          
          {/* Side shimmer effects */}
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-pink-lavender/80 to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-pink-lavender/80 to-transparent animate-pulse" />
        </div>
        
        {/* Enhanced fade edges with brand colors */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-natural-white via-natural-white/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-natural-white via-natural-white/80 to-transparent pointer-events-none z-10" />
        
        {/* Floating particles effect - only render on client to avoid hydration mismatch */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isClient && particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-pink-lavender/30 rounded-full animate-float"
              style={{
                left: particle.left,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-float {
          animation: float var(--animation-duration, 3s) ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}