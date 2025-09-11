'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-natural-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className={`font-young-serif text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-space-cadet' : 'text-natural-white drop-shadow-lg'
              }`}>
                Laser RX
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-bagnard font-medium transition-colors duration-300 hover:text-goldenrod ${
                  isScrolled ? 'text-space-cadet' : 'text-natural-white drop-shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side - Social, Phone, CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 mr-4">
              <a
                href="#"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'bg-pink-lavender/20 text-space-cadet hover:bg-pink-lavender/30' 
                    : 'bg-natural-white/20 text-natural-white hover:bg-natural-white/30'
                }`}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'bg-pink-lavender/20 text-space-cadet hover:bg-pink-lavender/30' 
                    : 'bg-natural-white/20 text-natural-white hover:bg-natural-white/30'
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:18109563272"
              className={`flex items-center space-x-2 font-bagnard font-medium transition-colors duration-300 hover:text-goldenrod ${
                isScrolled ? 'text-space-cadet' : 'text-natural-white drop-shadow-md'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(810) 956-3272</span>
            </a>

            {/* CTA Button */}
            <button className="font-oswald text-natural-white bg-goldenrod hover:bg-yellow-600 px-6 py-2 rounded-lg font-bold transition-colors duration-300">
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-space-cadet' : 'text-natural-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-natural-white/95 backdrop-blur-md border-t border-pink-lavender/20">
            <div className="py-4 space-y-4">
              {/* Mobile Navigation */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block font-bagnard text-space-cadet hover:text-goldenrod transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social & Contact */}
              <div className="px-4 pt-4 border-t border-pink-lavender/20">
                {/* Social Icons */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className="font-oswald text-space-cadet text-sm font-bold">Follow Us:</span>
                  <a
                    href="#"
                    className="w-8 h-8 bg-pink-lavender/20 text-space-cadet rounded-full flex items-center justify-center hover:bg-pink-lavender/30 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-pink-lavender/20 text-space-cadet rounded-full flex items-center justify-center hover:bg-pink-lavender/30 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                {/* Mobile Phone */}
                <a
                  href="tel:18109563272"
                  className="flex items-center space-x-2 font-bagnard text-space-cadet hover:text-goldenrod transition-colors duration-300 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>(810) 956-3272</span>
                </a>

                {/* Mobile CTA */}
                <button className="w-full font-oswald text-natural-white bg-goldenrod hover:bg-yellow-600 px-6 py-3 rounded-lg font-bold transition-colors duration-300">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
