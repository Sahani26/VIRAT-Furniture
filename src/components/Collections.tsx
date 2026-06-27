import React, { useState } from 'react';
import { CATALOG_ITEMS } from '../data/furnitureData';
import { CatalogItem, CategoryType } from '../types';
import { Sparkles, ArrowUpRight, Check } from 'lucide-react';

interface CollectionsProps {
  onCustomizeItem: (category: 'sofa' | 'table' | 'bed' | 'cabinet' | 'desk') => void;
}

export default function Collections({ onCustomizeItem }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredItems = CATALOG_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Collections' },
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom Sanctuary' },
    { id: 'dining', label: 'Dining & Credenza' },
    { id: 'office', label: 'Executive Study' },
  ];

  // Helper to draw clean SVG icons for catalog cards based on item's type
  const renderItemGraphics = (type: string) => {
    switch (type) {
      case 'sofa':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-800/80 fill-current p-6">
            <rect x="15" y="28" width="70" height="20" rx="3" />
            <rect x="18" y="38" width="20" height="8" rx="1" fill="#fff" opacity="0.15" />
            <rect x="40" y="38" width="20" height="8" rx="1" fill="#fff" opacity="0.15" />
            <rect x="62" y="38" width="20" height="8" rx="1" fill="#fff" opacity="0.15" />
            <path d="M10,32 C10,25 15,22 18,25 L18,48 C15,48 10,44 10,38 Z" />
            <path d="M90,32 C90,25 85,22 82,25 L82,48 C85,48 90,44 90,38 Z" />
            <line x1="16" y1="48" x2="16" y2="52" stroke="currentColor" strokeWidth="2.5" />
            <line x1="84" y1="48" x2="84" y2="52" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        );
      case 'table':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-800/80 fill-current p-6">
            <rect x="12" y="22" width="76" height="5" rx="1" />
            <polygon points="18,27 24,52 28,52 22,27" />
            <polygon points="82,27 76,52 72,52 78,27" />
            <rect x="25" y="27" width="50" height="3" opacity="0.5" />
          </svg>
        );
      case 'bed':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-800/80 fill-current p-6">
            <rect x="15" y="10" width="4" height="42" fill="currentColor" />
            <rect x="81" y="10" width="4" height="42" fill="currentColor" />
            <rect x="19" y="22" width="62" height="20" fill="currentColor" opacity="0.9" />
            <rect x="23" y="38" width="54" height="10" fill="currentColor" opacity="0.5" />
            <rect x="25" y="34" width="50" height="4" fill="#fff" opacity="0.8" />
            <rect x="32" y="28" width="14" height="5" fill="#aaa" rx="1" />
            <rect x="54" y="28" width="14" height="5" fill="#aaa" rx="1" />
          </svg>
        );
      case 'cabinet':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-800/80 fill-current p-6">
            <rect x="25" y="10" width="50" height="42" rx="2" />
            <line x1="50" y1="10" x2="50" y2="52" stroke="#fff" strokeWidth="1" opacity="0.5" />
            <rect x="30" y="15" width="16" height="18" rx="1" fill="#fff" opacity="0.1" />
            <rect x="54" y="15" width="16" height="18" rx="1" fill="#fff" opacity="0.1" />
            <rect x="30" y="38" width="40" height="8" rx="1" fill="#000" opacity="0.2" />
            <circle cx="47" cy="24" r="1" fill="#FFC107" />
            <circle cx="53" cy="24" r="1" fill="#FFC107" />
            <circle cx="50" cy="42" r="1" fill="#FFC107" />
          </svg>
        );
      case 'desk':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-800/80 fill-current p-6">
            <rect x="15" y="20" width="70" height="4" rx="0.5" />
            <rect x="20" y="24" width="16" height="24" rx="1" opacity="0.9" />
            <rect x="64" y="24" width="16" height="24" rx="1" opacity="0.9" />
            <line x1="23" y1="29" x2="33" y2="29" stroke="#fff" strokeWidth="1" opacity="0.5" />
            <line x1="23" y1="36" x2="33" y2="36" stroke="#fff" strokeWidth="1" opacity="0.5" />
            <line x1="23" y1="43" x2="33" y2="43" stroke="#fff" strokeWidth="1" opacity="0.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 text-brand-900 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-brand-800" />
              <span>Bespoke Product Collections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
              Handcrafted Architectural Classics
            </h2>
            <p className="font-sans text-gray-600">
              Browse our masterfully designed base collections. Every item below serves as a custom template — you can load it into the Design Studio to modify its length, timber species, or polishing sealant.
            </p>
          </div>

          {/* Categories Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-800 text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`collection-card-${item.id}`}
              className="group bg-[#fcfbfa] hover:bg-white rounded-3xl overflow-hidden border border-gray-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <a
                href={`#/product/${item.id}`}
                className="block group/link"
              >
                {/* Visual Concept frame */}
                <div className="relative aspect-video bg-gradient-to-br from-brand-100 to-brand-50/50 flex items-center justify-center overflow-hidden border-b border-gray-100/50">
                  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#8b562c_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
                  <div className="transform group-hover/link:scale-105 transition-transform duration-500 w-36 h-36 flex items-center justify-center">
                    {renderItemGraphics(item.imageType)}
                  </div>
                  
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-[10px] text-brand-950 font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-gray-100">
                    {item.category === 'living' ? 'Living Room' : item.category === 'bedroom' ? 'Bedroom' : item.category === 'dining' ? 'Dining & Living' : 'Study Office'}
                  </span>

                  {/* Standard Dimensions overlay */}
                  <span className="absolute bottom-4 right-4 bg-brand-950 text-brand-200 font-mono text-[9px] px-2 py-0.5 rounded-md border border-brand-800">
                    {item.dimensions.w}"W × {item.dimensions.d}"D × {item.dimensions.h}"H
                  </span>
                </div>

                {/* Content details */}
                <div className="p-6 text-left space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-brand-950 group-hover/link:text-brand-800 transition-colors flex items-center justify-between">
                      <span>{item.name}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity text-brand-800" />
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>

                {/* Features list bullet points */}
                <div className="px-6 pb-4 text-left space-y-1.5">
                  {item.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[11px] text-gray-600 font-medium">
                      <Check className="h-3.5 w-3.5 text-brand-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              {/* Price & Action footer */}
              <div className="px-6 pb-6 pt-3.5 border-t border-gray-100/80 flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-mono text-gray-400 font-semibold uppercase leading-none">Standard Base Price</span>
                  <span className="text-lg font-extrabold text-brand-950 font-sans tracking-tight">₹{item.basePrice.toLocaleString()}</span>
                </div>

                <button
                  id={`btn-customize-${item.id}`}
                  onClick={() => onCustomizeItem(item.imageType)}
                  className="flex items-center space-x-1.5 text-xs font-bold text-brand-800 bg-brand-50 border border-brand-200 py-2.5 px-4 rounded-xl hover:bg-brand-800 hover:text-white transition-all cursor-pointer group-hover:shadow-md"
                >
                  <span>Bespoke Customise</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
