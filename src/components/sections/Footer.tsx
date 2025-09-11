import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Skin Rejuvenation',
    'Laser Hair Removal', 
    'Hydra Spa Treatments',
    'Body Slimming',
    'Allegra Laser Treatments',
    'IPL Photofacial'
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#why-us' },
    { name: 'Contact', href: '#contact' }
  ];

  const businessHours = [
    { day: 'Mon', hours: 'Closed' },
    { day: 'Tue-Wed', hours: '10am-5pm' },
    { day: 'Thu', hours: '10am-7:30pm' },
    { day: 'Fri', hours: '10am-5pm' },
    { day: 'Sat', hours: '12pm-4pm' },
    { day: 'Sun', hours: 'Closed' }
  ];

  return (
    <footer className="bg-space-cadet text-natural-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-young-serif text-3xl font-bold text-pink-lavender mb-4">
              Laser RX
            </h3>
            <p className="font-bagnard text-natural-white/80 mb-6 leading-relaxed">
              Precision. Performance. Perfection. Transform your confidence with our 
              state-of-the-art laser treatments and personalized care.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-lavender/20 rounded-full flex items-center justify-center hover:bg-pink-lavender/30 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-lavender/20 rounded-full flex items-center justify-center hover:bg-pink-lavender/30 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-lavender/20 rounded-full flex items-center justify-center hover:bg-pink-lavender/30 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-oswald text-goldenrod text-lg font-bold mb-4 uppercase tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="font-bagnard text-natural-white/80 hover:text-pink-lavender transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-goldenrod text-lg font-bold mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-bagnard text-natural-white/80 hover:text-pink-lavender transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Legal Links */}
            <div className="mt-6 space-y-2">
              <a 
                href="/privacy" 
                className="block font-bagnard text-natural-white/60 hover:text-pink-lavender transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="block font-bagnard text-natural-white/60 hover:text-pink-lavender transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-oswald text-goldenrod text-lg font-bold mb-4 uppercase tracking-wide">
              Contact Info
            </h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-pink-lavender mt-0.5" />
                <div>
                  <a 
                    href="tel:18109563272" 
                    className="font-bagnard text-natural-white hover:text-pink-lavender transition-colors duration-300"
                  >
                    (810) 956-3272
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-lavender mt-0.5" />
                <div>
                  <p className="font-bagnard text-natural-white/80 text-sm">
                    46825 Garfield Rd<br />
                    Macomb Township, MI 48044
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-pink-lavender mt-0.5" />
                <div>
                  <p className="font-bagnard text-goldenrod text-sm font-bold mb-1">By Appointment Only</p>
                  <div className="space-y-0.5">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="font-bagnard text-natural-white/80">{schedule.day}</span>
                        <span className={`font-bagnard ml-2 ${schedule.hours === 'Closed' ? 'text-natural-white/50' : 'text-natural-white/80'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-natural-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bagnard text-natural-white/60 text-sm">
              © {currentYear} Laser RX. All rights reserved.
            </p>
            <p className="font-bagnard text-natural-white/60 text-sm mt-2 md:mt-0">
              Professional Laser Treatments • Macomb Township, Michigan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
