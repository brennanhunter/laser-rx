'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import PromotionModal from './PromotionModal'

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

export default function PromotionDisplay() {
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [currentModal, setCurrentModal] = useState<Promotion | null>(null)
  const [shownPromotions, setShownPromotions] = useState<Set<string>>(new Set())
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    fetchActivePromotions()
  }, [])

  const fetchActivePromotions = async () => {
    try {
      const query = `*[_type == "promotion" && isActive == true] {
        _id,
        title,
        message,
        isActive,
        type,
        ctaText,
        ctaLink,
        image {
          asset,
          alt
        }
      } | order(_createdAt desc)`
      const activePromotions = await client.fetch<Promotion[]>(query)
      setPromotions(activePromotions)
      
      // Show the first popup promotion that hasn't been shown yet
      const popupPromotion = activePromotions.find(
        p => p.type === 'popup' && !shownPromotions.has(p._id)
      )
      
      if (popupPromotion) {
        // Delay showing the modal for better UX
        setTimeout(() => {
          setCurrentModal(popupPromotion)
          setShownPromotions(prev => new Set(prev).add(popupPromotion._id))
        }, 2000) // Show after 2 seconds
      }
    } catch (error) {
      console.error('Error fetching promotions:', error)
    }
  }

  const handleCloseModal = () => {
    setCurrentModal(null)
  }

  // Render banner promotions
  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  const bannerPromotions = promotions.filter(p => p.type === 'banner')
  const bottomBannerPromotions = promotions.filter(p => p.type === 'bottom-banner')
  const cornerPromotions = promotions.filter(p => p.type === 'corner')

  return (
    <>
      {/* Top Banners */}
      {bannerPromotions.map(promotion => (
        <div key={promotion._id} className="bg-gradient-to-r from-goldenrod to-pink-lavender text-space-cadet text-center py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1">
              <span className="font-oswald font-bold">{promotion.title}</span>
              {promotion.message && (
                <span className="ml-2 font-bagnard opacity-90">{promotion.message}</span>
              )}
            </div>
            {promotion.ctaText && promotion.ctaLink && (
              <a
                href={promotion.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-space-cadet text-goldenrod px-4 py-1 rounded font-oswald font-bold hover:bg-space-cadet/80 transition-colors"
              >
                {promotion.ctaText}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Bottom Banners */}
      {bottomBannerPromotions.map(promotion => (
        <div key={promotion._id} className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-goldenrod to-pink-lavender text-space-cadet text-center py-3 px-4 z-40 border-t-2 border-space-cadet/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1">
              <span className="font-oswald font-bold">{promotion.title}</span>
              {promotion.message && (
                <span className="ml-2 font-bagnard opacity-90">{promotion.message}</span>
              )}
            </div>
            {promotion.ctaText && promotion.ctaLink && (
              <a
                href={promotion.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-space-cadet text-goldenrod px-4 py-1 rounded font-oswald font-bold hover:bg-space-cadet/80 transition-colors"
              >
                {promotion.ctaText}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Corner Notifications */}
      {cornerPromotions.map((promotion, index) => (
        <div 
          key={promotion._id} 
          className="fixed bottom-4 right-4 bg-natural-white border-2 border-goldenrod/30 rounded-lg shadow-lg p-4 max-w-sm z-40 backdrop-blur-md"
          style={{ bottom: `${4 + (index * 8)}rem` }}
        >
          <div className="bg-gradient-to-r from-goldenrod/10 to-pink-lavender/10 p-3 rounded-md mb-3">
            <h4 className="font-oswald font-bold text-space-cadet mb-2">{promotion.title}</h4>
            <p className="font-bagnard text-sm text-space-cadet/80 mb-3">{promotion.message}</p>
          </div>
          {promotion.ctaText && promotion.ctaLink && (
            <a
              href={promotion.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-goldenrod hover:bg-pink-lavender text-space-cadet px-3 py-1 rounded text-sm font-oswald font-bold transition-colors duration-300"
            >
              {promotion.ctaText}
            </a>
          )}
        </div>
      ))}

      {/* Modal Promotion */}
      {currentModal && (
        <PromotionModal 
          promotion={currentModal} 
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}