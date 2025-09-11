'use client'

import Image from 'next/image';

interface StackingCard {
  id: string
  title: string
  description: string
  price: string
  image: string
}

const cards: StackingCard[] = [
  {
    id: 'ipl-therapy',
    title: 'IPL Therapy (Photofacial)',
    description: 'Intense pulsed light therapy improves skin color and texture without surgery. Undoes visible sun damage.',
    price: 'Call for pricing',
    image: '/images/IPL.jpeg'
  },
  {
    id: 'skin-rejuvenation',
    title: 'Skin Rejuvenation',
    description: 'Revitalize your skin with advanced treatments for face, chest, and hands. Photo facials, chest treatments, and hand rejuvenation.',
    price: 'Starting at $123',
    image: '/images/rejuvenation.png'
  },
  {
    id: 'allegra-laser',
    title: 'Allegra Laser Treatments',
    description: 'Tighten skin on face and body with minimal pain or recovery. Reduces fine lines, wrinkles, varicose veins, and age spots.',
    price: 'Starting at $129',
    image: '/images/laser-treatment.jpg'
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Permanent solution to unwanted hair, leaving skin smooth and hair-free. Full body coverage available.',
    price: 'Varies by location',
    image: '/images/removal.png'
  },
  {
    id: 'body-slimming',
    title: 'Body Slimming (TrimLaze)',
    description: 'FDA cleared treatment that safely reduces fat in problem areas. Customized treatment plans with optical energy therapy.',
    price: 'Starting at $213',
    image: '/images/slimming.png'
  },
  {
    id: 'hydra-spa',
    title: 'Hydra Spa Treatments',
    description: 'Award-winning system that cleanses, exfoliates, and hydrates your skin with lymphatic drainage and LED light therapy.',
    price: 'Starting at $199',
    image: '/images/hydra-spa.png'
  },
  {
    id: 'acne-treatments',
    title: 'Acne Face Treatments',
    description: 'Specialized Allegra laser treatments targeting acne and improving overall skin clarity and texture.',
    price: 'Call for pricing',
    image: '/images/acne.jpg'
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging Treatments',
    description: 'Comprehensive anti-aging solutions including lip rejuvenation, hand rejuvenation, and facial tightening.',
    price: 'Starting at $251',
    image: '/images/aging.jpg'
  },
  {
    id: 'body-lifting',
    title: 'Body Lifting Treatments',
    description: 'Advanced lifting treatments for neck, arms, and brow areas to tighten and rejuvenate your appearance.',
    price: 'Call for pricing',
    image: '/images/lifting.jpg'
  }
]

export default function StackingCards() {
  const cardHeight = '50vh'
  const cardMargin = '2rem'
  const cardTopOffset = '1rem'
  const numCards = cards.length

  return (
    <div 
      className="w-4/5 mx-auto grid grid-cols-1"
      style={{
        gridTemplateRows: `repeat(${numCards}, ${cardHeight})`,
        paddingBottom: `calc(${numCards} * ${cardTopOffset})`,
        marginBottom: cardMargin
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="sticky will-change-transform relative"
          style={{
            top: '120px',
            paddingTop: cardTopOffset,
            transformOrigin: '50% 0%'
          }}
        >
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-lavender via-pink-lavender/95 to-pink-lavender/80 border-2 border-natural-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-lavender/30 h-full shadow-xl">
            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/5 to-transparent pointer-events-none"></div>
            
            {/* Card content - side by side layout */}
            <div className="relative h-full flex">
              {/* Content - Left side (67% width) */}
              <div className="w-2/3 p-6 flex flex-col justify-center">
                <h3 className="font-young-serif text-space-cadet text-2xl font-bold mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="font-bagnard text-space-cadet/90 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                
                {/* Price and button container - side by side with no padding */}
                <div className="flex items-center gap-4">
                  <div className="bg-natural-white/30 backdrop-blur-sm rounded-lg py-2 px-4">
                    <p className="font-oswald text-space-cadet text-base font-bold">
                      {card.price}
                    </p>
                  </div>
                  <button className="font-oswald text-space-cadet bg-natural-white/90 hover:bg-natural-white hover:shadow-lg px-6 py-2 rounded-lg font-bold transition-all duration-300 backdrop-blur-sm border border-natural-white/30 text-sm">
                    LEARN MORE
                  </button>
                </div>
              </div>
              
              {/* Service Image - Right side (33% width, full height) */}
              <div className="w-1/3 relative overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,1) 60%)',
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,1) 60%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
