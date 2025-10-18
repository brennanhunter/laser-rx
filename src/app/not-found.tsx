import Link from 'next/link';
import { ArrowLeft, House, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-space-cadet via-space-cadet to-goldenrod/20 flex items-center justify-center px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-goldenrod/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-lavender/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-goldenrod/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* 404 Number with Gradient */}
        <div className="mb-8">
          <h1 className="font-young-serif text-[12rem] md:text-[16rem] font-bold leading-none">
            <span className="bg-gradient-to-r from-goldenrod via-pink-lavender to-goldenrod bg-clip-text text-transparent animate-pulse">
              404
            </span>
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="font-young-serif text-natural-white text-4xl md:text-5xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="font-bagnard text-natural-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Oops! It seems the page you&apos;re looking for has vanished like unwanted hair after our laser treatment. 
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Go Back Button */}
          <Link
            href="/"
            className="group font-oswald bg-gradient-to-r from-goldenrod to-pink-lavender hover:shadow-2xl hover:shadow-goldenrod/50 text-space-cadet px-8 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 flex items-center space-x-3"
          >
            <House className="w-6 h-6 group-hover:scale-110 transition-transform" weight="fill" />
            <span>Go Home</span>
          </Link>

          {/* Services Button */}
          <Link
            href="/services"
            className="group font-oswald bg-space-cadet/50 border-2 border-goldenrod/50 hover:bg-goldenrod/10 hover:border-goldenrod text-natural-white px-8 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 flex items-center space-x-3"
          >
            <MagnifyingGlass className="w-6 h-6 group-hover:scale-110 transition-transform" weight="bold" />
            <span>View Services</span>
          </Link>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="group font-oswald bg-space-cadet/50 border-2 border-pink-lavender/50 hover:bg-pink-lavender/10 hover:border-pink-lavender text-natural-white px-8 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 flex items-center space-x-3"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" weight="bold" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-16 pt-8 border-t border-natural-white/20">
          <p className="font-oswald text-natural-white/60 text-sm uppercase tracking-wider mb-4">
            Popular Pages
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#services"
              className="font-bagnard text-goldenrod hover:text-pink-lavender transition-colors text-sm"
            >
              Our Services
            </Link>
            <span className="text-natural-white/30">•</span>
            <Link
              href="/#why-us"
              className="font-bagnard text-goldenrod hover:text-pink-lavender transition-colors text-sm"
            >
              Why Choose Us
            </Link>
            <span className="text-natural-white/30">•</span>
            <Link
              href="/contact"
              className="font-bagnard text-goldenrod hover:text-pink-lavender transition-colors text-sm"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
