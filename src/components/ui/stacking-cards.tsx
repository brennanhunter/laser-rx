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
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Permanent solution to unwanted hair. Small areas ($50-150), Medium areas ($150-225), Large areas ($250-325). Packages available with 10-20% discount.',
    price: '$50-$325',
    image: '/images/removal.png'
  },
  {
    id: 'hydra-facial',
    title: 'Hydra Facial',
    description: 'Custom pricing based on individual needs. Advanced facial treatment that cleanses, exfoliates, and hydrates your skin.',
    price: '$100-$300',
    image: '/images/hydra-spa.png'
  },
  {
    id: 'body-contouring',
    title: 'Body Contouring / Heat Sculpting',
    description: 'Advanced body sculpting treatments. Packages available with 10-20% discount off total.',
    price: '$400-$500',
    image: '/images/slimming.png'
  },
  {
    id: 'skin-rejuvenation-ipl',
    title: 'Skin Rejuvenation / Hyperpigmentation Treatment',
    description: 'IPL laser treatment for hyperpigmentation and skin rejuvenation. Packages available with 10-20% discount off total.',
    price: '$150-$300',
    image: '/images/IPL.jpeg'
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
