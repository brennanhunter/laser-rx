'use client';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import TestimonialBanner from '@/components/ui/Banner';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { BUSINESS_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { BusinessSettings } from '@/types/sanity';
import { convertToSchemaOrgHours, defaultBusinessHours } from '@/lib/businessHours';

export default function Home() {
  const [openingHours, setOpeningHours] = useState<string[]>(['Tu-Fr 09:00-17:00']);

  useEffect(() => {
    async function fetchBusinessHours() {
      try {
        const settings = await client.fetch<BusinessSettings>(BUSINESS_SETTINGS_QUERY);
        if (settings?.businessHours) {
          const hours = convertToSchemaOrgHours(settings.businessHours);
          if (hours.length > 0) {
            setOpeningHours(hours);
          }
        }
      } catch (error) {
        console.error('Error fetching business hours:', error);
        // Use default hours
        setOpeningHours(convertToSchemaOrgHours(defaultBusinessHours));
      }
    }

    fetchBusinessHours();
  }, []);

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
    "openingHours": openingHours,
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
