'use client'

import { useState, useEffect } from 'react'

export default function TestimonialBanner() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    "\"The results exceeded my expectations. My skin looks 10 years younger!\" - Sarah M.",
    "\"Professional, safe, and amazing results. I couldn't be happier.\" - Jessica R.",
    "\"Best laser treatment I've ever had. The staff is incredible.\" - Maria L.",
    "\"FDA approved technology gave me confidence. Results speak for themselves.\" - Amanda K.",
    "\"Finally found a place I trust for laser treatments. Highly recommend!\" - Rachel P.",
    "\"Pain-free laser hair removal that actually works. Love the results!\" - Emma D.",
    "\"Skin rejuvenation treatment exceeded all my expectations.\" - Lisa K."
  ]

  // Change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Simple testimonial banner */}
      <div className="bg-gradient-to-r from-goldenrod/5 via-goldenrod/10 to-goldenrod/5 border-y border-goldenrod/20 py-8 sm:py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div 
              className="transition-all duration-1000 ease-in-out"
              key={currentTestimonial}
            >
              <p className="text-space-cadet/80 font-bagnard text-lg sm:text-xl lg:text-2xl italic leading-relaxed max-w-4xl mx-auto">
                {testimonials[currentTestimonial]}
              </p>
            </div>
            
            {/* Testimonial indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-goldenrod w-8' 
                      : 'bg-goldenrod/30 hover:bg-goldenrod/60'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}