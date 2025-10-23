'use client';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import TestimonialBanner from '@/components/ui/Banner';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Laser RX",
  "description": "Professional laser treatments including laser hair removal, hydra facial, body contouring, and skin rejuvenation services",
  "url": "https://rx-laser.vercel.app",
  "telephone": "+1-810-956-3272",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "46825 Garfield Rd",
    "addressLocality": "Macomb Township",
    "addressRegion": "MI",
    "postalCode": "48044",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.6543210",
    "longitude": "-82.9876543"
  },
  "openingHours": [
    "Tu-We 10:00-17:00",
    "Th 10:00-19:30",
    "Fr 10:00-17:00",
    "Sa 12:00-16:00"
  ],
  "priceRange": "$$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Laser Treatment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Laser Hair Removal",
          "description": "Permanent solution to unwanted hair, leaving skin smooth and hair-free"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hydra Facial",
          "description": "Deep cleansing and hydration treatment for radiant, healthy skin"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Body Contouring",
          "description": "Non-invasive body sculpting to reduce fat and contour your body"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Skin Rejuvenation",
          "description": "Revitalize your skin with advanced treatments for face, chest, and hands"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
};

export default function Home() {
  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <TestimonialBanner />
      <Services />
      <WhyUs />
      <Contact />
    </div>
  );
}
