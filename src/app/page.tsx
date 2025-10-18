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
  "description": "Professional laser treatments including IPL therapy, hair removal, skin rejuvenation, body slimming, and anti-aging services",
  "url": "https://rx-laser.vercel.app",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your ZIP",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "YOUR_LATITUDE",
    "longitude": "YOUR_LONGITUDE"
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-17:00"
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
          "name": "IPL Therapy (Photofacial)",
          "description": "Intense pulsed light therapy improves skin color and texture without surgery"
        }
      },
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
          "name": "Skin Rejuvenation",
          "description": "Revitalize your skin with advanced treatments for face, chest, and hands"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Body Slimming (TrimLaze)",
          "description": "FDA cleared treatment that safely reduces fat in problem areas"
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
