import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ClientOnlyPromotions from "@/components/ClientOnlyPromotions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Laser RX - Professional Laser Hair Removal & Skin Treatments | Macomb Township, MI",
    template: "%s | Laser RX"
  },
  description: "Expert laser hair removal, hydra facial, body contouring, and skin rejuvenation in Macomb Township, Michigan. FDA-cleared technology, experienced professionals, and proven results. Call (810) 956-3272 for your consultation.",
  keywords: [
    // Primary Focus - Laser Hair Removal
    "laser hair removal Macomb Township",
    "Macomb Township laser hair removal",
    "permanent hair removal Macomb MI",
    "laser hair removal near me",
    "best laser hair removal Macomb",
    "professional laser hair removal Michigan",
    
    // Location-Based Keywords
    "laser hair removal Macomb County",
    "Macomb Michigan laser hair removal",
    "laser hair removal Shelby Township",
    "laser hair removal Sterling Heights",
    "laser hair removal Warren MI",
    "laser hair removal Clinton Township",
    
    // Spa Treatment Keywords
    "medical spa Macomb Township",
    "spa treatments Macomb",
    "aesthetic spa Michigan",
    "luxury spa treatments Macomb County",
    "medspa Macomb Township",
    "day spa Macomb Michigan",
    
    // Related Services
    "hydrafacial Macomb Township",
    "body contouring Macomb",
    "skin rejuvenation Macomb MI",
    "facial treatments Macomb",
    "anti-aging spa Macomb",
    "cosmetic treatments Michigan",
    
    // Treatment Specific
    "permanent hair removal",
    "FDA approved laser hair removal",
    "pain-free hair removal",
    "Brazilian laser hair removal Macomb",
    "full body laser hair removal",
    "laser hair removal for men",
    "laser hair removal for women",
    
    // Competitor/Alternative Search Terms
    "waxing alternative Macomb",
    "electrolysis vs laser Macomb",
    "IPL hair removal Michigan",
    
    // General
    "Laser RX Macomb",
    "professional skin care Macomb",
    "cosmetic procedures Macomb Township"
  ],
  authors: [{ name: "Laser RX", url: "https://laserrx.com" }],
  creator: "Laser RX",
  publisher: "Laser RX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.macomblaserhairremoval.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Laser RX - Professional Laser Hair Removal & Skin Treatments | Macomb Township, MI",
    description: "Expert laser hair removal, hydra facial, body contouring, and skin rejuvenation in Macomb Township. FDA-cleared technology with proven results. Call (810) 956-3272 today.",
    url: 'https://www.macomblaserhairremoval.com',
    siteName: 'Laser RX - Macomb Laser Hair Removal',
    images: [
      {
        url: '/logo-blue.png',
        width: 1200,
        height: 630,
        alt: 'Laser RX - Professional Laser Treatments in Macomb Township, Michigan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Laser RX - Professional Laser Hair Removal & Skin Treatments",
    description: "Expert laser hair removal, hydra facial, body contouring, and skin rejuvenation in Macomb Township, MI. FDA-cleared technology. Call (810) 956-3272.",
    images: ['/logo-blue.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  verification: {
    // Add your actual verification codes from Google Search Console, etc.
    // google: 'your-google-verification-code',
  },
  category: 'Health & Beauty',
  classification: 'Medical Spa & Aesthetic Services',
  other: {
    'geo.region': 'US-MI',
    'geo.placename': 'Macomb Township',
    'geo.position': '42.6543210;-82.9876543',
    'ICBM': '42.6543210, -82.9876543',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-MI" />
        <meta name="geo.placename" content="Macomb Township" />
        <meta name="geo.position" content="42.6543210;-82.9876543" />
        <meta name="ICBM" content="42.6543210, -82.9876543" />
        
        {/* Business Contact */}
        <meta name="contact" content="info@laserrx.com" />
        <meta name="phone" content="+1-810-956-3272" />
        
        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Laser RX" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#87CEEB" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ClientOnlyPromotions />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
