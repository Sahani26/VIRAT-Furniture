import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import ServicesSection from './components/ServicesSection';
import Configurator from './components/Configurator';
import Craftsmanship from './components/Craftsmanship';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ServiceDetail from './components/ServiceDetail';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { Sofa, MessageSquare, ArrowUp, CalendarRange, Phone, Wrench } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [configuratorType, setConfiguratorType] = useState<'sofa' | 'table' | 'bed' | 'cabinet' | 'desk'>('sofa');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<{ path: 'home' | 'product' | 'service' | 'services' | 'about' | 'contact'; slug: string }>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/product/')) {
      return { path: 'product', slug: hash.replace('#/product/', '') };
    }
    if (hash.startsWith('#/service/')) {
      return { path: 'service', slug: hash.replace('#/service/', '') };
    }
    if (hash === '#/services') {
      return { path: 'services', slug: '' };
    }
    if (hash === '#/about') {
      return { path: 'about', slug: '' };
    }
    if (hash === '#/contact') {
      return { path: 'contact', slug: '' };
    }
    return { path: 'home', slug: '' };
  });

  // Trigger state keys to force re-mounting/updating of the Configurator component when a catalog item is loaded
  const [configuratorKey, setConfiguratorKey] = useState(0);

  // Set up intersection observer, scroll listener, hash router listener & default homepage SEO tags
  useEffect(() => {
    // Dynamic home SEO tags
    if (currentRoute.path === 'home') {
      document.title = "Virat Furniture Surat | Bespoke Handcrafted Solid Wood Furniture Gujarat";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Bespoke solid wood sofas, dining tables, beds, and study desks in Surat, Gujarat. Carved from fully seasoned Indian Teak, walnut, and rosewood. Calculate custom specifications with our live planner.');
    } else if (currentRoute.path === 'services') {
      document.title = "Bespoke Woodcraft & Furniture Services Surat | Virat Furniture";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Explore 30 specialized wooden furniture & repair solutions in Surat. Custom hand-carved CP teak sofas, live-edge walnut tables, wooden wall paneling, and heritage restorations.');
    }

    const handleScroll = () => {
      // Show scroll-to-top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Highlight active navbar section
      const sections = ['hero', 'collections', 'services', 'configurator', 'craftsmanship', 'consultation'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/product/')) {
        const slug = hash.replace('#/product/', '');
        setCurrentRoute({ path: 'product', slug });
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (hash.startsWith('#/service/')) {
        const slug = hash.replace('#/service/', '');
        setCurrentRoute({ path: 'service', slug });
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (hash === '#/services') {
        setCurrentRoute({ path: 'services', slug: '' });
        setActiveSection('services');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (hash === '#/about') {
        setCurrentRoute({ path: 'about', slug: '' });
        setActiveSection('about');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (hash === '#/contact') {
        setCurrentRoute({ path: 'contact', slug: '' });
        setActiveSection('contact');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setCurrentRoute({ path: 'home', slug: '' });
        const sectionId = hash.replace('#', '');
        if (sectionId) {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial parse of hash on component mount
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentRoute.path]);

  const handleCustomizeFromCatalog = (category: 'sofa' | 'table' | 'bed' | 'cabinet' | 'desk') => {
    setConfiguratorType(category);
    // Increment key to reset/load the configurator with this default category
    setConfiguratorKey(prev => prev + 1);

    // Scroll smoothly to configurator
    const element = document.getElementById('configurator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFixedActionClick = (id: string) => {
    if (currentRoute.path !== 'home') {
      window.location.hash = `#${id}`;
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfdfb] font-sans antialiased text-gray-800 pb-20 md:pb-24">
      
      {/* Sticky Top Navbar */}
      <Navbar
        onNavigate={(id) => {
          setActiveSection(id);
          if (currentRoute.path !== 'home') {
            window.location.hash = id === 'hero' ? '' : `#${id}`;
          } else {
            scrollToSection(id);
          }
        }}
        activeSection={activeSection}
      />

      {/* Main Sections (flex-grow expands to keep the footer at bottom) */}
      <main className="flex-grow">
        {currentRoute.path === 'product' ? (
          <ProductDetail
            slug={currentRoute.slug}
            onBackToCollections={() => {
              window.location.hash = '#collections';
            }}
            onCustomizeItem={(category) => {
              window.location.hash = '#configurator';
              handleCustomizeFromCatalog(category);
            }}
          />
        ) : currentRoute.path === 'service' ? (
          <ServiceDetail
            slug={currentRoute.slug}
            onBackToHome={() => {
              window.location.hash = '#/services';
            }}
          />
        ) : currentRoute.path === 'services' ? (
          <div className="pt-28 pb-12 bg-[#fcfbfa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => {
                  window.location.hash = '';
                }}
                className="inline-flex items-center space-x-2 text-xs font-bold text-gray-500 hover:text-brand-950 bg-white border border-gray-200 px-4 py-2.5 rounded-xl transition-colors cursor-pointer mb-6 shadow-sm"
              >
                <span>← Back to Home</span>
              </button>
            </div>
            <ServicesSection onSelectService={(slug) => {}} />
          </div>
        ) : currentRoute.path === 'about' ? (
          <AboutPage
            onBackToHome={() => {
              window.location.hash = '';
            }}
          />
        ) : currentRoute.path === 'contact' ? (
          <ContactPage
            onBackToHome={() => {
              window.location.hash = '';
            }}
          />
        ) : (
          <>
            {/* 1. Hero Landing Section */}
            <Hero
              onStartPlanning={() => scrollToSection('configurator')}
              onExploreCollections={() => scrollToSection('collections')}
            />

            {/* 2. Collections Catalog */}
            <Collections onCustomizeItem={handleCustomizeFromCatalog} />

            {/* 3. Interactive Bespoke Studio Planner */}
            <Configurator key={configuratorKey} initialType={configuratorType} />

            {/* 4. Heritage Craftsmanship & Reviews */}
            <Craftsmanship />

            {/* 5. Measurement Consultation Booking */}
            <ConsultationForm />
          </>
        )}
      </main>

      {/* Elegant Footer */}
      <Footer onNavigate={(id) => {
        if (currentRoute.path !== 'home') {
          window.location.hash = id === 'hero' ? '' : `#${id}`;
        } else {
          scrollToSection(id);
        }
      }} />

      {/* Fixed Bottom Quick-Action Utility Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-5 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl bg-[#faf9f6]/95 backdrop-blur-md border-t md:border border-brand-200/50 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] md:rounded-2xl z-40 py-3 px-4 sm:px-6 flex items-center justify-between gap-3 transition-transform duration-300">
        
        {/* Planner Direct Link */}
        <button
          onClick={() => {
            window.location.hash = '#configurator';
            handleFixedActionClick('configurator');
          }}
          className="flex-1 flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-1.5 text-center text-gray-700 hover:text-brand-900 cursor-pointer py-1"
        >
          <Wrench className="h-4 w-4 text-brand-850" />
          <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">Custom Planner</span>
        </button>

        {/* Vertical divider */}
        <span className="h-6 w-px bg-gray-200" />

        {/* WhatsApp Quote */}
        <a
          href="https://wa.me/919825177240?text=Hi%20Virat%20Furniture%2C%20I%20am%20interested%20in%20customizing%20bespoke%20solid%20wood%20furniture."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-1.5 text-center text-emerald-700 hover:text-emerald-900 cursor-pointer py-1"
        >
          <MessageSquare className="h-4 w-4 fill-emerald-50 text-emerald-600" />
          <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">WhatsApp Quote</span>
        </a>

        {/* Vertical divider */}
        <span className="h-6 w-px bg-gray-200" />

        {/* Phone Call */}
        <a
          href="tel:+919825177240"
          className="flex-1 flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-1.5 text-center text-brand-900 hover:text-brand-950 cursor-pointer py-1"
        >
          <Phone className="h-4 w-4 text-brand-800" />
          <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">Call Expert</span>
        </a>

        {/* Vertical divider */}
        <span className="h-6 w-px bg-gray-200" />

        {/* Book Measurement */}
        <button
          onClick={() => {
            window.location.hash = '#consultation';
            handleFixedActionClick('consultation');
          }}
          className="flex-1.5 flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-1.5 text-center bg-brand-850 hover:bg-brand-950 text-white py-1.5 sm:py-2 px-3 rounded-xl transition-all font-bold cursor-pointer shadow-xs"
        >
          <CalendarRange className="h-4 w-4 text-brand-200 shrink-0 hidden sm:inline" />
          <span className="text-[9px] sm:text-xs uppercase tracking-wider text-center">Free Spatial Audit</span>
        </button>

      </div>

      {/* Floating Action Button: Scroll To Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-18 md:bottom-24 right-6 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="btn-scroll-top"
            className="p-3 bg-white/90 backdrop-blur-xs hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-full shadow-md transition-all hover:border-brand-300 cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      )}

    </div>
  );
}
