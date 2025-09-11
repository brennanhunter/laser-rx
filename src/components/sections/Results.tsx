'use client';
import Image from 'next/image';

interface BeforeAfterPair {
  id: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const results: BeforeAfterPair[] = [
  {
    id: 'skin-rejuvenation-1',
    category: 'Skin Rejuvenation',
    beforeImage: '/images/before.png',
    afterImage: '/images/after.png',
    description: 'IPL treatment for sun damage and age spots'
  },
  {
    id: 'skin-rejuvenation-2',
    category: 'Skin Rejuvenation',
    beforeImage: '/images/before.png',
    afterImage: '/images/after.png',
    description: 'Photo facial for improved skin texture'
  },
  {
    id: 'hair-removal-1',
    category: 'Hair Removal',
    beforeImage: '/images/before.png',
    afterImage: '/images/after.png',
    description: 'Laser hair removal - legs'
  },
  {
    id: 'hair-removal-2',
    category: 'Hair Removal',
    beforeImage: '/images/before.png',
    afterImage: '/images/after.png',
    description: 'Laser hair removal - underarms'
  },
  {
    id: 'body-slimming-1',
    category: 'Body Slimming',
    beforeImage: '/images/before.png',
    afterImage: '/images/after.png',
    description: 'TrimLaze treatment - abdomen'
  },
  {
    id: 'body-slimming-2',
    category: 'Body Slimming',
    beforeImage: '/images/before.png',
    afterImage: '/images/after.png',
    description: 'TrimLaze treatment - thighs'
  }
];

export default function Results() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-lavender/10 to-natural-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-young-serif text-space-cadet text-5xl font-bold mb-6">
            Real Results
          </h2>
          <p className="font-bagnard text-space-cadet text-xl max-w-3xl mx-auto leading-relaxed">
            See the transformative power of our advanced laser treatments. 
            These real patient results showcase the precision and effectiveness of our services.
          </p>
        </div>

        {/* Before/After Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {results.map((result) => (
            <div key={result.id} className="group">
              {/* Category Tag */}
              <div className="mb-4">
                <span className="font-oswald text-goldenrod text-sm font-bold uppercase tracking-wide">
                  {result.category}
                </span>
              </div>
              
              {/* Before/After Images */}
              <div className="relative bg-natural-white rounded-2xl shadow-lg overflow-hidden border border-pink-lavender/20 group-hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-2">
                  {/* Before Image */}
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-space-cadet text-natural-white px-3 py-1 rounded-full text-sm font-bold">
                        BEFORE
                      </span>
                    </div>
                    <div className="aspect-[4/5] relative bg-gray-200">
                      <Image
                        src={result.beforeImage}
                        alt={`Before ${result.description}`}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          // Fallback for missing images
                          e.currentTarget.style.backgroundColor = '#e5e7eb';
                          e.currentTarget.alt = 'Before - Image coming soon';
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-goldenrod text-natural-white px-3 py-1 rounded-full text-sm font-bold">
                        AFTER
                      </span>
                    </div>
                    <div className="aspect-[4/5] relative bg-gray-200">
                      <Image
                        src={result.afterImage}
                        alt={`After ${result.description}`}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          // Fallback for missing images
                          e.currentTarget.style.backgroundColor = '#E5BEED';
                          e.currentTarget.alt = 'After - Image coming soon';
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-4">
                  <p className="font-bagnard text-space-cadet text-center">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-bagnard text-space-cadet text-lg mb-6">
            Ready to see your own transformation?
          </p>
          <button className="font-oswald text-natural-white bg-goldenrod hover:bg-yellow-600 px-8 py-4 rounded-lg text-lg font-bold tracking-wide transition-colors duration-300">
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
