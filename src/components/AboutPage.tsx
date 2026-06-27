import React from 'react';
import { ShieldCheck, Heart, Users, MapPin, Award, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
}

export default function AboutPage({ onBackToHome }: AboutPageProps) {
  // Update document title for SEO
  React.useEffect(() => {
    const originalTitle = document.title;
    document.title = "Our Heritage & Craftsmanship | Virat Furniture Surat";
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="bg-[#fcfbfa] pt-24 pb-16">
      
      {/* Hero Header */}
      <div className="relative py-16 bg-gradient-to-b from-brand-50 to-[#fcfbfa] border-b border-gray-150/60">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-100/60 border border-brand-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-900">
            <Award className="h-3.5 w-3.5 text-brand-850" />
            <span>Since 1991</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-950 tracking-tight">
            Our Heritage &amp; Handcraft Philosophy
          </h1>
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Deep-rooted in Surat's rich artisanal heritage, we unite veteran carpentry traditions with state-of-the-art timber engineering to carve pieces that live for generations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Row 1: The Core Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-800">
              The Woodcraft Vision
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-950 leading-tight">
              Bespoke Luxury Crafted from Nature’s Masterpieces
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              At Virat Furniture, we believe furniture is not merely a collection of functional objects. It is the solid, reassuring anchor of your family’s life. Every joint we assemble, every curvature we hand-shave, and every coat of protective organic linseed oil we rub is done with absolute commitment.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Our master craftsmen—descendants of generations of legendary woodworkers in Gujarat—select each log personally. We deal only in legally sourced, fully seasoned timber, ensuring your investments remain completely warp-free and highly resilient against Gujarat's variable coastal weather.
            </p>
          </div>
          <div className="bg-brand-50/70 border border-brand-100 rounded-3xl p-8 text-left space-y-6">
            <h3 className="font-serif text-lg font-bold text-brand-950">
              Our Core Promises
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-950">100% Genuine Certified Seasoned Wood</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Never mixed with engineered MDF, laminate fillers, or cheap rubberwood.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-950">Traditional Mortise &amp; Tenon Joinery</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">True mechanical joints that handle immense weight without loose screws or steel staples.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-950">Organic Termite &amp; Moisture Shielding</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Deep vacuum-chamber boron salt treatments that are completely child- and pet-safe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Stats Grid */}
        <div className="bg-brand-950 text-white rounded-3xl p-8 sm:p-12 text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-brand-300">35+</span>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Years Experience</span>
            </div>
            <div className="space-y-1">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-brand-300">12,000+</span>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Homes Furnished</span>
            </div>
            <div className="space-y-1">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-brand-300">100%</span>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Seasoned Timber</span>
            </div>
            <div className="space-y-1">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-brand-300">40+</span>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Verified Stories</span>
            </div>
          </div>
        </div>

        {/* Row 3: Meet Our Master Artisans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white border border-gray-150 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100">
              <Users className="h-5 w-5 text-brand-850" />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-950">Veteran Suthar Artisans</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our carpentry workshop is led by master artisans with over 30 years of traditional solid-wood craftsmanship. They hand-carve and align grains for supreme structural flow.
            </p>
          </div>
          <div className="bg-white border border-gray-150 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100">
              <ShieldCheck className="h-5 w-5 text-brand-850" />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-950">15-Year Structural Warranty</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Because of our seasoned kiln-drying techniques and heavy mortise and tenon joinery, we proudly issue written warranties covering wood warp, joint separations, and bugs.
            </p>
          </div>
          <div className="bg-white border border-gray-150 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100">
              <MapPin className="h-5 w-5 text-brand-850" />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-950">Surat Diamond Bourse Area HQ</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Based in Ichchhapore GIDC close to the world-famous Surat Diamond Bourse, our grand experience center serves clients searching for premium furniture configurations across Gujarat.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="border-t border-gray-150 pt-10 text-center space-y-4 pb-8">
          <h3 className="font-serif text-xl font-bold text-brand-950">Would you like to experience our craft in person?</h3>
          <p className="text-xs text-gray-500 max-w-lg mx-auto">
            Book an on-site visit or consultation today, and let our custom spatial architects design your dream interior with custom materials.
          </p>
          <div className="flex justify-center space-x-3 pt-2">
            <button
              onClick={onBackToHome}
              className="bg-brand-850 hover:bg-brand-950 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Explore Furniture Collections
            </button>
            <button
              onClick={() => {
                window.location.hash = '#consultation';
              }}
              className="bg-white hover:bg-[#faf9f6] text-brand-900 border border-gray-250/75 font-bold py-2.5 px-6 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Book Spatial Audit
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
