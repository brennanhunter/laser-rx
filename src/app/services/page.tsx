'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle } from '@phosphor-icons/react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pricing: string;
  features: string[];
  image: string;
  packages?: string;
}

const services: Service[] = [
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    subtitle: 'Permanent Hair Reduction',
    description: 'Achieve smooth, hair-free skin with our advanced laser technology. Our precision treatments target hair follicles for long-lasting results.',
    pricing: '$50 - $325',
    packages: '6-10 treatment packages available with 10-20% discount',
    features: [
      'Small areas: $50-$150',
      'Medium areas: $150-$225', 
      'Large areas: $250-$325',
      'FDA approved technology',
      'Minimal discomfort',
      'Quick treatment sessions'
    ],
    image: '/images/removal.png'
  },
  {
    id: 'hydra-facial',
    title: 'Hydra Facial',
    subtitle: 'Deep Cleansing & Hydration',
    description: 'Experience our award-winning facial treatment that cleanses, exfoliates, and hydrates your skin with advanced technology.',
    pricing: '$100 - $300',
    packages: 'Custom pricing based on individual needs',
    features: [
      'Deep pore cleansing',
      'Gentle exfoliation',
      'Intense hydration',
      'Lymphatic drainage',
      'LED light therapy',
      'Immediate visible results'
    ],
    image: '/images/hydra-spa.png'
  },
  {
    id: 'body-contouring',
    title: 'Body Contouring',
    subtitle: 'Heat Sculpting Technology',
    description: 'Advanced body sculpting treatments to reduce fat in problem areas using FDA-cleared technology for safe and effective results.',
    pricing: '$400 - $500',
    packages: 'Multi-session packages available with 10-20% discount',
    features: [
      'FDA cleared treatment',
      'Non-invasive procedure',
      'Targets stubborn fat areas',
      'No downtime required',
      'Customized treatment plans',
      'Visible results after sessions'
    ],
    image: '/images/slimming.png'
  },
  {
    id: 'skin-rejuvenation',
    title: 'Skin Rejuvenation',
    subtitle: 'IPL Hyperpigmentation Treatment',
    description: 'IPL laser treatment for hyperpigmentation, sun damage, and overall skin texture improvement for a more youthful appearance.',
    pricing: '$150 - $300',
    packages: 'Treatment packages available with 10-20% discount',
    features: [
      'Reduces hyperpigmentation',
      'Treats sun damage',
      'Improves skin texture',
      'Minimizes fine lines',
      'Even skin tone',
      'Stimulates collagen production'
    ],
    image: '/images/IPL.jpeg'
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-cadet via-space-cadet/95 to-natural-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-space-cadet text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/decoration.png"
            alt=""
            width={400}
            height={400}
            className="absolute top-10 left-10 rotate-45"
          />
          <Image
            src="/images/decoration.png"
            alt=""
            width={300}
            height={300}
            className="absolute bottom-10 right-10 -rotate-12"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-young-serif text-5xl lg:text-7xl font-bold text-goldenrod mb-6">
              Our Services
            </h1>
            <p className="font-bagnard text-xl lg:text-2xl text-natural-white/90 mb-8 leading-relaxed">
              Advanced laser treatments designed to enhance your natural beauty with state-of-the-art technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:18109563272"
                className="inline-flex items-center justify-center space-x-2 font-oswald text-natural-white bg-goldenrod hover:bg-pink-lavender px-8 py-4 rounded-lg font-bold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Book Consultation</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center space-x-2 font-oswald text-goldenrod bg-transparent border-2 border-goldenrod hover:bg-goldenrod hover:text-natural-white px-8 py-4 rounded-lg font-bold transition-all duration-300"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-natural-white to-pink-lavender/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-natural-white via-natural-white/98 to-pink-lavender/20 border-2 border-goldenrod/20 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-goldenrod/20 shadow-xl ${
                  selectedService === service.id ? 'ring-2 ring-goldenrod' : ''
                }`}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/80 via-space-cadet/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-young-serif text-2xl lg:text-3xl font-bold text-natural-white mb-2">
                      {service.title}
                    </h3>
                    <p className="font-oswald text-goldenrod font-bold text-lg">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="font-bagnard text-space-cadet/90 text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-oswald text-space-cadet font-bold text-lg">
                        Pricing
                      </span>
                      <span className="font-oswald text-goldenrod font-bold text-xl">
                        {service.pricing}
                      </span>
                    </div>
                    {service.packages && (
                      <p className="font-bagnard text-space-cadet/70 text-sm">
                        {service.packages}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-oswald text-space-cadet font-bold text-base mb-4">
                      Treatment Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-goldenrod flex-shrink-0" weight="fill" />
                          <span className="font-bagnard text-space-cadet/80 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:18109563272"
                      className="flex-1 font-oswald text-natural-white bg-goldenrod hover:bg-pink-lavender px-6 py-3 rounded-lg font-bold transition-colors duration-300 text-center"
                    >
                      Book Now
                    </a>
                    <button
                      onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                      className="flex-1 font-oswald text-goldenrod bg-transparent border-2 border-goldenrod hover:bg-goldenrod hover:text-natural-white px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center"
                    >
                      {selectedService === service.id ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {selectedService === service.id && (
                    <div className="mt-6 pt-6 border-t border-goldenrod/20 animate-in slide-in-from-top-2 duration-300">
                      <div className="bg-goldenrod/5 rounded-lg p-4">
                        <h5 className="font-oswald text-space-cadet font-bold text-base mb-3">
                          What to Expect
                        </h5>
                        <div className="space-y-2 text-sm">
                          <p className="font-bagnard text-space-cadet/80">
                            <strong>Consultation:</strong> Free initial assessment to determine the best treatment plan for your needs.
                          </p>
                          <p className="font-bagnard text-space-cadet/80">
                            <strong>Treatment Time:</strong> Sessions typically range from 15-60 minutes depending on the area.
                          </p>
                          <p className="font-bagnard text-space-cadet/80">
                            <strong>Recovery:</strong> Minimal to no downtime required for most treatments.
                          </p>
                          <p className="font-bagnard text-space-cadet/80">
                            <strong>Results:</strong> Most patients see improvement after the first session, with optimal results after a series of treatments.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-space-cadet text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-young-serif text-4xl lg:text-5xl font-bold text-goldenrod mb-6">
              Ready to Transform Your Skin?
            </h2>
            <p className="font-bagnard text-xl text-natural-white/90 mb-8 leading-relaxed">
              Schedule your complimentary consultation today and discover how our advanced treatments can help you achieve your aesthetic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:18109563272"
                className="inline-flex items-center justify-center space-x-2 font-oswald text-natural-white bg-goldenrod hover:bg-pink-lavender px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>(810) 956-3272</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center space-x-2 font-oswald text-goldenrod bg-transparent border-2 border-goldenrod hover:bg-goldenrod hover:text-natural-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
