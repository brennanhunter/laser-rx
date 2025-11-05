'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface Promotion {
  _id: string
  title: string
  message: string
  isActive: boolean
  type: 'popup' | 'banner' | 'bottom-banner' | 'corner'
  ctaText?: string
  ctaLink?: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
}

interface PromotionModalProps {
  promotion: Promotion
  onClose: () => void
}

export default function PromotionModal({ promotion, onClose }: PromotionModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Show modal after a short delay for smooth animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Wait for animation to complete before calling onClose
    setTimeout(onClose, 300)
  }

  const handleCtaClick = () => {
    if (promotion.ctaLink) {
      window.open(promotion.ctaLink, '_blank')
    }
    handleClose()
  }

  if (promotion.type !== 'popup') return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-space-cadet/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-space-cadet border-2 border-goldenrod/50 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 transform transition-all duration-300 ${
        isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      }`}>
        {/* Header with brand colors */}
        <div className="bg-gradient-to-r from-goldenrod to-pink-lavender p-6 rounded-t-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-space-cadet hover:text-natural-white transition-colors z-10 bg-natural-white/20 rounded-full backdrop-blur-sm"
          >
            <X size={20} />
          </button>

          {/* Brand logo and title */}
          <div className="flex items-center space-x-3 mb-2">
            <div className="flex items-center space-x-1">
              <h4 className="font-young-serif text-xl font-bold text-space-cadet">
                Laser
              </h4>
              <Image
                src="/logo-blue.png"
                alt="RX Logo"
                width={40}
                height={16}
                className=""
              />
            </div>
          </div>
          
          <h3 className="font-oswald text-2xl font-bold text-space-cadet pr-8">
            {promotion.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Promotion Image - Only render on client to prevent hydration issues */}
          {isMounted && promotion.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src={urlFor(promotion.image).width(800).height(400).url()}
                alt={promotion.image.alt || promotion.title}
                width={800}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          )}
          
          <p className="font-bagnard text-natural-white/90 mb-6 leading-relaxed text-lg">
            {promotion.message}
          </p>

          {/* CTA Button */}
          {promotion.ctaText && (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCtaClick}
                className="flex-1 font-oswald bg-goldenrod hover:bg-pink-lavender text-space-cadet font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
              >
                {promotion.ctaText}
              </button>
              <button
                onClick={handleClose}
                className="font-bagnard px-6 py-3 text-natural-white/60 hover:text-natural-white transition-colors border border-goldenrod/30 rounded-lg hover:border-goldenrod/50"
              >
                Maybe Later
              </button>
            </div>
          )}

          {/* No CTA - just close button */}
          {!promotion.ctaText && (
            <button
              onClick={handleClose}
              className="w-full font-oswald bg-goldenrod hover:bg-pink-lavender text-space-cadet font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
            >
              Got it!
            </button>
          )}
        </div>
      </div>
    </div>
  )
}