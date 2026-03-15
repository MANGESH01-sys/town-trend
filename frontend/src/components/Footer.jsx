import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/towntrend-logo.png" 
                alt="TownTrend Marketing" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm">
              Digital marketing solutions that help your business grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Services</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href="tel:+919424057785" className="hover:text-emerald-400 transition-colors">+91 9424057785</a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:towntrendmarketing@gmail.com" className="hover:text-emerald-400 transition-colors break-all">towntrendmarketing@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Pandhurna, MP, India (480-334)</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/creatorpsycho_ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.facebook.com/share/18JynA7GE4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="http://www.youtube.com/@crecketlivestudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mangesh-dhurve-937750258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Copyright © {currentYear} TownTrend Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
