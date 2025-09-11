'use client'

interface StackingCard {
  id: string
  title: string
  description: string
  price: string
}

const cards: StackingCard[] = [
  {
    id: 'ipl-therapy',
    title: 'IPL Therapy (Photofacial)',
    description: 'Intense pulsed light therapy improves skin color and texture without surgery. Undoes visible sun damage.',
    price: 'Call for pricing'
  },
  {
    id: 'skin-rejuvenation',
    title: 'Skin Rejuvenation',
    description: 'Revitalize your skin with advanced treatments for face, chest, and hands. Photo facials, chest treatments, and hand rejuvenation.',
    price: 'Starting at $123'
  },
  {
    id: 'allegra-laser',
    title: 'Allegra Laser Treatments',
    description: 'Tighten skin on face and body with minimal pain or recovery. Reduces fine lines, wrinkles, varicose veins, and age spots.',
    price: 'Starting at $129'
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Permanent solution to unwanted hair, leaving skin smooth and hair-free. Full body coverage available.',
    price: 'Varies by location'
  },
  {
    id: 'body-slimming',
    title: 'Body Slimming (TrimLaze)',
    description: 'FDA cleared treatment that safely reduces fat in problem areas. Customized treatment plans with optical energy therapy.',
    price: 'Starting at $213'
  },
  {
    id: 'hydra-spa',
    title: 'Hydra Spa Treatments',
    description: 'Award-winning system that cleanses, exfoliates, and hydrates your skin with lymphatic drainage and LED light therapy.',
    price: 'Starting at $199'
  },
  {
    id: 'acne-treatments',
    title: 'Acne Face Treatments',
    description: 'Specialized Allegra laser treatments targeting acne and improving overall skin clarity and texture.',
    price: 'Call for pricing'
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging Treatments',
    description: 'Comprehensive anti-aging solutions including lip rejuvenation, hand rejuvenation, and facial tightening.',
    price: 'Starting at $251'
  },
  {
    id: 'body-lifting',
    title: 'Body Lifting Treatments',
    description: 'Advanced lifting treatments for neck, arms, and brow areas to tighten and rejuvenate your appearance.',
    price: 'Call for pricing'
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
            <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/5 to-transparent pointer-events-none"></div>
            <div className="relative h-full p-10 flex flex-col justify-between text-center">
              <div>
                <h3 className="font-young-serif text-space-cadet text-3xl font-bold mb-5 leading-tight">
                  {card.title}
                </h3>
                <p className="font-bagnard text-space-cadet/90 text-lg mb-8 leading-relaxed max-w-md mx-auto">
                  {card.description}
                </p>
              </div>
              <div>
                <div className="bg-natural-white/20 backdrop-blur-sm rounded-xl py-3 px-6 mb-6 inline-block">
                  <p className="font-oswald text-space-cadet text-xl font-bold">
                    {card.price}
                  </p>
                </div>
                <button className="font-oswald text-space-cadet bg-natural-white/90 hover:bg-natural-white hover:shadow-lg px-10 py-4 rounded-xl font-bold transition-all duration-300 mx-auto backdrop-blur-sm border border-natural-white/30">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
