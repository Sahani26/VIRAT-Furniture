import React, { useState, useEffect } from 'react';
import { Sofa, Menu, X, PhoneCall, CalendarDays, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'collections', label: 'Our Collections' },
    { id: 'services', label: 'Services' },
    { id: 'configurator', label: 'Custom Planner' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'about' || id === 'contact' || id === 'services') {
      window.location.hash = `#/${id}`;
      setIsOpen(false);
      return;
    }

    if (id === 'hero' && window.location.hash.startsWith('#/')) {
      window.location.hash = '';
      setIsOpen(false);
      return;
    }

    onNavigate(id);
    setIsOpen(false);
    
    // Smooth scroll if element is present
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            id="navbar-logo"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('hero')}
          >
            <div className="bg-brand-800 text-white p-2 rounded-xl shadow-inner flex items-center justify-center">
              <Sofa className="h-6 w-6 stroke-[1.5]" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-brand-950 block">
                VIRAT
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-600 font-bold block -mt-1">
                Furniture
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm font-medium transition-colors relative py-1 ${
                  activeSection === item.id
                    ? 'text-brand-800'
                    : 'text-gray-600 hover:text-brand-800'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              id="navbar-phone-btn"
              href="tel:+919825177240"
              className="flex items-center space-x-1.5 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 py-2 px-3.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-brand-600" />
              <span>+91 98251 77240</span>
            </a>
            <button
              id="navbar-cta-btn"
              onClick={() => handleNavClick('configurator')}
              className="flex items-center space-x-1.5 text-xs font-semibold text-white bg-brand-800 hover:bg-brand-900 shadow-md py-2 px-4 rounded-lg transition-all transform hover:-translate-y-0.5"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Design Studio</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Instant Call */}
          <div className="md:hidden flex items-center space-x-2.5">
            <a
              href="tel:+919825177240"
              className="text-brand-850 hover:text-brand-950 p-2 rounded-xl bg-brand-50 hover:bg-brand-100 flex items-center justify-center border border-brand-100/60 transition-colors cursor-pointer"
              title="Call Craft Expert"
            >
              <PhoneCall className="h-4 w-4 animate-pulse" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-800 focus:outline-none p-1.5 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-nav-menu" className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-item-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-brand-50 text-brand-800 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-brand-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2.5 px-3">
            <a
              href="tel:+919825177240"
              className="flex items-center space-x-2 text-gray-700 text-sm hover:text-brand-850 font-semibold cursor-pointer"
            >
              <PhoneCall className="h-4 w-4 text-brand-600" />
              <span>Call Us: +91 98251 77240</span>
            </a>
            <button
              id="mobile-nav-cta"
              onClick={() => handleNavClick('configurator')}
              className="w-full text-center text-sm font-semibold text-white bg-brand-800 hover:bg-brand-900 py-3 rounded-lg shadow-md transition-all"
            >
              Go to Custom Planner
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
