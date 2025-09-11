import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

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
    default: "RX Laser - Advanced Laser Treatments & Aesthetic Services",
    template: "%s | RX Laser"
  },
  description: "Professional laser treatments including IPL therapy, hair removal, skin rejuvenation, body slimming, and anti-aging services. State-of-the-art technology with proven results.",
  keywords: [
    "laser treatment",
    "IPL therapy",
    "laser hair removal", 
    "skin rejuvenation",
    "photofacial",
    "body slimming",
    "TrimLaze",
    "anti-aging",
    "aesthetic treatments",
    "medical spa",
    "laser clinic",
    "cosmetic procedures"
  ],
  authors: [{ name: "RX Laser" }],
  creator: "RX Laser",
  publisher: "RX Laser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rx-laser.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RX Laser - Advanced Laser Treatments & Aesthetic Services",
    description: "Professional laser treatments including IPL therapy, hair removal, skin rejuvenation, body slimming, and anti-aging services. State-of-the-art technology with proven results.",
    url: 'https://rx-laser.vercel.app',
    siteName: 'RX Laser',
    images: [
      {
        url: '/images/laser-treatment.jpg',
        width: 1200,
        height: 630,
        alt: 'RX Laser Professional Treatment Room',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RX Laser - Advanced Laser Treatments & Aesthetic Services",
    description: "Professional laser treatments including IPL therapy, hair removal, skin rejuvenation, body slimming, and anti-aging services.",
    images: ['/images/laser-treatment.jpg'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
