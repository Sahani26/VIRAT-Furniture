import React from 'react';
import { Sofa, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  
  const handleNavClick = (id: string) => {
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-brand-950 text-gray-300 pt-16 pb-8 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Logo & Info column */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('hero')}>
              <div className="bg-brand-800 text-white p-2 rounded-xl flex items-center justify-center">
                <Sofa className="h-5.5 w-5.5 stroke-[1.5]" />
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-tight text-white block">
                  VIRAT
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-500 font-bold block -mt-1">
                  Furniture
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              We translate solid Indian Teak, Walnut, and Sheesham timber into majestic handcrafted furniture. Engineered for absolute dimension fit, durability, and luxury lifestyle aesthetics.
            </p>

            <div className="flex items-center space-x-2 text-[10px] bg-white/5 border border-white/10 py-1.5 px-3 rounded-lg w-max text-brand-300">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified Wood Seasoning Guarantee</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Bespoke Studio</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button onClick={() => handleNavClick('hero')} className="hover:text-white transition-colors text-left">Home</button>
              <button onClick={() => handleNavClick('collections')} className="hover:text-white transition-colors text-left">Collections</button>
              <button onClick={() => { window.location.hash = '#/services'; }} className="hover:text-white transition-colors text-left">Services</button>
              <button onClick={() => handleNavClick('configurator')} className="hover:text-white transition-colors text-left">Custom Planner</button>
              <button onClick={() => { window.location.hash = '#/about'; }} className="hover:text-white transition-colors text-left">About Us</button>
              <button onClick={() => { window.location.hash = '#/contact'; }} className="hover:text-white transition-colors text-left">Contact Us</button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Surat Experience Center &amp; HQ</h4>
            <div className="space-y-3.5 text-xs text-gray-400">
              
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Plot 104, Ichchhapore GIDC, Near Surat Diamond Bourse, Surat, Gujarat - 395007</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-brand-500 shrink-0" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-brand-500 shrink-0" />
                <span>orders@viratfurniture.com</span>
              </div>

            </div>
          </div>

          {/* Hours and support */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Artisan Workshop Hours</h4>
            <div className="space-y-3 text-xs text-gray-400">
              
              <div className="flex items-start space-x-2.5">
                <Clock className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-semibold">Monday - Saturday</span>
                  <span className="block text-[10px] mt-0.5">09:00 AM - 08:30 PM IST</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-500 font-semibold">Sunday Workshop</span>
                  <span className="block text-[10px] mt-0.5">Closed for Wood Curing</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Legal info and credits */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Virat Furniture Pvt Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-1">
            <span>Handcrafted with pure devotion &amp; teak seasoning</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
          </div>

          <div className="flex space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer">Terms &amp; Craft Covenants</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy &amp; Timber Source Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
