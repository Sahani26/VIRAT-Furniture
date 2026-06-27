import React from 'react';
import { Compass, Hammer, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartPlanning: () => void;
  onExploreCollections: () => void;
}

export default function Hero({ onStartPlanning, onExploreCollections }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-brand-50 via-[#fefdfb] to-[#fcfaf7]"
    >
      {/* Decorative background vectors/shades */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-radial from-brand-100/40 to-transparent pointer-events-none -mr-20 -mt-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-radial from-brand-200/20 to-transparent pointer-events-none -ml-20 -mb-20 rounded-full blur-3xl" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#8b562c_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-100/75 border border-brand-200 px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="h-4 w-4 text-brand-800" />
              <span className="font-sans text-xs font-semibold text-brand-900 tracking-wide uppercase">
                Luxury Handcrafted Bespoke Woodwork
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-950 leading-[1.1]">
                Masterfully Crafted <br />
                <span className="text-brand-800 font-serif italic font-normal">Wooden Furniture</span> <br />
                Tailored for Your Spaces
              </h1>
              <p className="font-sans text-lg text-gray-600 max-w-xl leading-relaxed">
                Transforming premium raw Indian Teak, Dark Walnut, and Sheesham into ancestral family treasures. Customise every single dimension, wood grain, and polish to match your home perfectly.
              </p>
            </div>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center space-x-2.5">
                <div className="bg-emerald-50 text-emerald-800 p-2 rounded-lg">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-semibold text-sm text-gray-900 leading-none">5-Yr Structural Warranty</span>
                  <span className="text-[11px] text-gray-500 font-medium">Termite &amp; wrap proofed</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="bg-amber-50 text-amber-800 p-2 rounded-lg">
                  <Hammer className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-semibold text-sm text-gray-900 leading-none">Bespoke Dimensioning</span>
                  <span className="text-[11px] text-gray-500 font-medium">Custom scaled design</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="bg-blue-50 text-blue-800 p-2 rounded-lg">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-semibold text-sm text-gray-900 leading-none">Free Home Visit</span>
                  <span className="text-[11px] text-gray-500 font-medium">Measurement &amp; planning</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-start-btn"
                onClick={onStartPlanning}
                className="flex items-center justify-center space-x-2 font-semibold text-white bg-brand-800 hover:bg-brand-900 shadow-xl shadow-brand-900/10 hover:shadow-brand-900/20 py-4 px-8 rounded-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Interactive Custom Planner</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-explore-btn"
                onClick={onExploreCollections}
                className="flex items-center justify-center space-x-2 font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 py-4 px-8 rounded-xl shadow-sm transition-all hover:border-brand-300"
              >
                <span>Browse Collections</span>
              </button>
            </div>

            {/* Quick stats counter in hero */}
            <div className="border-t border-brand-100 pt-6 flex items-center space-x-12">
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-brand-950">35+</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Years Artisan Legacy</span>
              </div>
              <div className="w-px h-8 bg-brand-200" />
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-brand-950">12K+</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Happy Homes Styled</span>
              </div>
              <div className="w-px h-8 bg-brand-200" />
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-brand-950">100%</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Solid Seasoned Timber</span>
              </div>
            </div>
          </div>

          {/* Right Showcase: Visual Concept Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-brand-950 to-brand-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 border-4 border-brand-200/50">
              {/* Wooden planks textured overlay container */}
              <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Tag overlay */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <span className="text-[10px] text-white font-mono uppercase tracking-widest">Handcrafted Item No. 102</span>
                </div>
                <div className="bg-brand-500 text-brand-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                  Signature Teak
                </div>
              </div>

              {/* Dynamic decorative graphic of furniture structure / wood layers */}
              <div className="relative z-10 flex flex-col items-center justify-center py-6">
                <div className="relative w-64 h-48 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xs flex items-center justify-center p-4">
                  {/* Styled SVG of a luxury furniture piece in the frame */}
                  <svg viewBox="0 0 100 60" className="w-full h-full text-brand-200 fill-current opacity-90 drop-shadow-lg">
                    {/* Sofa design representation */}
                    <path d="M10,40 C10,35 15,32 20,32 L80,32 C85,32 90,35 90,40 L90,48 C90,52 87,54 84,54 L16,54 C13,54 10,52 10,48 Z" />
                    <rect x="18" y="22" width="64" height="11" rx="2" />
                    <rect x="22" y="10" width="56" height="13" rx="3" />
                    <line x1="16" y1="54" x2="16" y2="58" stroke="#d4a373" strokeWidth="3" strokeLinecap="round" />
                    <line x1="84" y1="54" x2="84" y2="58" stroke="#d4a373" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <div className="absolute -bottom-3 bg-brand-100 text-brand-950 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-brand-200">
                    W: 86" x D: 38" x H: 32"
                  </div>
                </div>
              </div>

              {/* Detail tag */}
              <div className="relative z-10 text-left space-y-1">
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">Virat Royal Chesterfield</h3>
                <p className="font-sans text-xs text-brand-100/80">
                  Fully custom built in selected solid wood species, featuring soft-close technology and custom dimensions.
                </p>
                <div className="flex items-center space-x-2 pt-2 text-xs">
                  <span className="font-mono text-brand-200 font-bold">EST. STARTING RANGE</span>
                  <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded-md">₹58,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
