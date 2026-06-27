import React, { useState, useMemo } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { Hammer, Compass, Shield, Wrench, Sparkles, ArrowRight, Search, LayoutGrid, Palette, Trees } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'furniture' | 'styling' | 'protection'>('all');

  // Map icons to standard lucide components
  const getIcon = (iconName: string) => {
    const classes = "h-6 w-6 text-brand-800";
    switch (iconName) {
      case 'carpenter':
        return <Hammer className={classes} />;
      case 'compass':
        return <Compass className={classes} />;
      case 'shield':
        return <Shield className={classes} />;
      case 'hammer':
        return <Wrench className={classes} />;
      default:
        return <Sparkles className={classes} />;
    }
  };

  const handleServiceClick = (slug: string) => {
    window.location.hash = `#/service/${slug}`;
    onSelectService(slug);
  };

  // Assign internal categories to services for filtering
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter(service => {
      // Category filter
      let matchesCategory = true;
      if (selectedCategory === 'furniture') {
        matchesCategory = [
          'bespoke-sofas', 'live-edge-tables', 'royal-canopy-beds', 'executive-desks',
          'wooden-temples', 'heritage-jhulas', 'solid-bookcases', 'tv-consoles',
          'modular-wardrobes', 'vanity-dressers', 'bar-cabinets', 'kids-bunkbeds',
          'walnut-credenzas', 'curved-teak-swing'
        ].includes(service.id);
      } else if (selectedCategory === 'styling') {
        matchesCategory = [
          'spatial-planning', 'wooden-paneling', 'room-dividers', 'floating-shelving',
          'pegged-seating', 'carved-bench-seating', 'executive-boardrooms'
        ].includes(service.id);
      } else if (selectedCategory === 'protection') {
        matchesCategory = [
          'antique-restoration', 'spill-shielding', 'wood-polishing-sp', 'termite-shielding-sp',
          'acoustic-studios', 'wooden-decking', 'velvet-headboards'
        ].includes(service.id);
      }

      // Search filter
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.seoDescription.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-brand-700 animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-900">
              30 Specialized Woodcraft Solutions
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
            Our Complete Furniture &amp; Woodcraft Services
          </h2>
          
          <p className="font-sans text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From custom hand-carved CP teak sofas and grand live-edge dining tables to non-toxic termite shielding and spatial planning layouts across Surat.
          </p>
        </div>

        {/* Dynamic Filtering Panel */}
        <div className="bg-[#faf9f6] border border-gray-150/75 p-5 rounded-3xl mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-brand-950 text-white shadow-sm'
                  : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>All ({SERVICES_DATA.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('furniture')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                selectedCategory === 'furniture'
                  ? 'bg-brand-950 text-white shadow-sm'
                  : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              <Trees className="h-3.5 w-3.5" />
              <span>Bespoke Furniture</span>
            </button>
            <button
              onClick={() => setSelectedCategory('styling')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                selectedCategory === 'styling'
                  ? 'bg-brand-950 text-white shadow-sm'
                  : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Panels &amp; Space Styling</span>
            </button>
            <button
              onClick={() => setSelectedCategory('protection')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                selectedCategory === 'protection'
                  ? 'bg-brand-950 text-white shadow-sm'
                  : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              <Palette className="h-3.5 w-3.5" />
              <span>Restoration &amp; Protection</span>
            </button>
          </div>

          {/* Interactive Search input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search custom services (e.g. Teak, table)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs bg-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-250/75 focus:outline-none focus:border-brand-850"
            />
          </div>

        </div>

        {/* Count and Filter Reset indicator */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          <span>
            Showing <strong className="text-brand-950">{filteredServices.length}</strong> of <strong className="text-brand-950">{SERVICES_DATA.length}</strong> specialized service configurations
          </span>
          {(searchTerm !== '' || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-brand-800 hover:text-brand-950 font-bold underline cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="bg-[#faf9f6] border border-dashed border-gray-200 rounded-3xl p-12 text-center max-w-lg mx-auto my-8">
            <Search className="h-8 w-8 text-gray-400 mx-auto mb-3" />
            <h4 className="font-serif text-base font-bold text-brand-950 mb-1">No services found</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We couldn't find any specialized woodcraft configurations matching "{searchTerm}". Please try checking your spelling or selecting another category tab.
            </p>
          </div>
        )}

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#fcfbfa] hover:bg-white border border-gray-100 hover:border-brand-100 p-6 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center border border-brand-100">
                  {getIcon(service.iconName)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-sm font-bold text-brand-950 group-hover:text-brand-850 transition-colors line-clamp-2 min-h-[40px]">
                    {service.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Micro highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.benefits.slice(0, 2).map((b, idx) => (
                    <span key={idx} className="bg-brand-50/50 text-[9px] font-semibold text-brand-900 px-2 py-0.5 rounded-md truncate max-w-[125px]">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Price and Link */}
              <div className="mt-6 pt-4 border-t border-gray-150/50 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">Starts at</span>
                  <span className="text-xs font-extrabold text-brand-950 font-mono">{service.startingPrice}</span>
                </div>

                <button
                  onClick={() => handleServiceClick(service.slug)}
                  className="inline-flex items-center space-x-1 text-xs font-extrabold text-brand-800 group-hover:text-brand-950 hover:underline cursor-pointer"
                >
                  <span>Specs</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
