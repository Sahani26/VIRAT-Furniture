import React, { useState, useEffect } from 'react';
import { CATALOG_ITEMS, WOOD_MATERIALS, FINISH_TYPES, UPHOLSTERY_OPTIONS } from '../data/furnitureData';
import { CatalogItem, WoodMaterial, FinishType, UpholsteryType } from '../types';
import { ArrowLeft, Check, Sparkles, Sliders, CalendarRange, Ruler, HelpCircle, Share2, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailProps {
  slug: string;
  onBackToCollections: () => void;
  onCustomizeItem: (category: 'sofa' | 'table' | 'bed' | 'cabinet' | 'desk') => void;
}

export default function ProductDetail({ slug, onBackToCollections, onCustomizeItem }: ProductDetailProps) {
  // Find product by slug (id is used as slug)
  const product = CATALOG_ITEMS.find((item) => item.id === slug);

  // Dynamic SEO setup for loaded product specification
  useEffect(() => {
    if (!product) return;
    
    // Update Document Title
    const originalTitle = document.title;
    document.title = `${product.name} - Bespoke Custom Specification | Virat Furniture`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    const customDesc = `Tailor the dimensions, wood stain, and polyurethane polish of the handcrafted ${product.name}. Calculate real-time estimates with our responsive tool.`;
    metaDesc.setAttribute('content', customDesc);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28">
        <h2 className="font-serif text-2xl font-bold text-brand-950 mb-2">Item Not Found</h2>
        <p className="text-gray-600 mb-6">The furniture specification you are looking for might have been moved or updated.</p>
        <button
          onClick={onBackToCollections}
          className="bg-brand-850 hover:bg-brand-950 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors cursor-pointer"
        >
          Return to Collections
        </button>
      </div>
    );
  }

  // Live calculator states on product detail page
  const [selectedWood, setSelectedWood] = useState<WoodMaterial>(WOOD_MATERIALS[0]);
  const [selectedFinish, setSelectedFinish] = useState<FinishType>(FINISH_TYPES[0]);
  const [selectedUpholstery, setSelectedUpholstery] = useState<UpholsteryType>(UPHOLSTERY_OPTIONS[0]);
  
  const [customWidth, setCustomWidth] = useState(product.dimensions.w);
  const [customDepth, setCustomDepth] = useState(product.dimensions.d);
  const [customHeight, setCustomHeight] = useState(product.dimensions.h);

  const [copied, setCopied] = useState(false);

  // Determine if product needs upholstery
  const hasUpholstery = product.imageType === 'sofa' || product.imageType === 'bed';

  // Live Estimate calculation
  const calculatePrice = () => {
    const basePrice = product.basePrice;
    
    // Volume/size multiplier (relative to default volume)
    const defaultVolume = product.dimensions.w * product.dimensions.d * product.dimensions.h;
    const currentVolume = customWidth * customDepth * customHeight;
    const sizeMultiplier = currentVolume / defaultVolume;
    
    // Wood factor
    const woodSqFtEst = (customWidth * customDepth) / 144; // rough footprint
    const woodCost = woodSqFtEst * selectedWood.pricePerSqFt * 12; // complexity factor
    
    // Upholstery
    const upholsteryCost = hasUpholstery ? selectedUpholstery.extraCost : 0;
    
    // Total calculation
    const calculatedBase = basePrice * (0.6 + sizeMultiplier * 0.4);
    const subtotal = calculatedBase + woodCost + upholsteryCost;
    const finalPrice = Math.round(subtotal * selectedFinish.priceMultiplier);
    
    return finalPrice;
  };

  const shareProduct = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#/product/${product.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleBookConsultation = () => {
    // Scroll and populate form
    window.location.hash = '#/consultation';
    setTimeout(() => {
      const formEl = document.getElementById('consultation');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Attempt to auto-fill product details in description/comments if available
      const descInput = document.getElementById('notes-input') as HTMLTextAreaElement;
      if (descInput) {
        descInput.value = `Interested in custom ${product.name} crafted in ${selectedWood.name} with ${selectedFinish.name} polish. Custom Dimensions: ${customWidth}"W x ${customDepth}"D x ${customHeight}"H.`;
        // Trigger standard change event for react
        const event = new Event('input', { bubbles: true });
        descInput.dispatchEvent(event);
      }
    }, 150);
  };

  const handleOpenInStudio = () => {
    onCustomizeItem(product.imageType);
  };

  // Helper to draw clean SVG icons for catalog cards based on item's type
  const renderItemGraphics = (type: string) => {
    switch (type) {
      case 'sofa':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-900 fill-current p-8">
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
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-900 fill-current p-8">
            <rect x="12" y="22" width="76" height="5" rx="1" />
            <polygon points="18,27 24,52 28,52 22,27" />
            <polygon points="82,27 76,52 72,52 78,27" />
            <rect x="25" y="27" width="50" height="3" opacity="0.5" />
          </svg>
        );
      case 'bed':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-900 fill-current p-8">
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
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-900 fill-current p-8">
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
          <svg viewBox="0 0 100 60" className="w-full h-full text-brand-900 fill-current p-8">
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
    <div className="pt-24 pb-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Header */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <button
            onClick={onBackToCollections}
            className="inline-flex items-center space-x-2 text-xs font-bold text-brand-900 bg-white shadow-xs border border-gray-200 py-2.5 px-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Collections</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={shareProduct}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-700 bg-white border border-gray-200 py-2.5 px-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <ClipboardCheck className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">Copied Link!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>Share Specs</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2 Column Main Presentation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Premium Graphic Canvas / Core Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-square bg-gradient-to-br from-brand-100 to-brand-50/50 rounded-3xl border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#8b562c_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              
              <div className="w-64 h-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                {renderItemGraphics(product.imageType)}
              </div>

              {/* Decorative brand crest */}
              <div className="absolute top-6 left-6 inline-flex items-center space-x-1.5 bg-white/90 backdrop-blur-md text-[10px] text-brand-950 font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-brand-200/50">
                <Sparkles className="h-3 w-3 text-brand-700" />
                <span>Bespoke Template</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="bg-brand-950/95 text-white/90 font-mono text-[10px] px-2.5 py-1 rounded-md tracking-wider">
                  MODEL SKU: VT-{product.id.toUpperCase()}
                </span>
                <span className="bg-white/95 text-brand-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-gray-200 shadow-xs">
                  {product.category === 'living' ? 'Living' : product.category === 'bedroom' ? 'Bedroom' : product.category === 'dining' ? 'Dining & Living' : 'Study'}
                </span>
              </div>
            </div>

            {/* Solid Structural Integrity Features */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/60 shadow-xs space-y-5 text-left">
              <h4 className="font-serif text-base font-bold text-brand-950 flex items-center space-x-2">
                <Ruler className="h-4 w-4 text-brand-800" />
                <span>Grand Architectural Heritage Standards</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#faf9f6] p-4.5 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Seasoning Process</span>
                  <span className="text-xs font-bold text-gray-800 block">100% Seasoned Timber</span>
                  <span className="text-[10px] text-gray-500 leading-relaxed block">Moisture stabilized below 8-12% protecting from warping.</span>
                </div>
                
                <div className="bg-[#faf9f6] p-4.5 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Warranty Cover</span>
                  <span className="text-xs font-bold text-gray-800 block">5-Year Structural</span>
                  <span className="text-[10px] text-gray-500 leading-relaxed block">Covers wood durability, joinery joints, and termite safety.</span>
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-brand-800">What makes this item special</h5>
                <div className="space-y-2.5">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-gray-600">
                      <Check className="h-4 w-4 text-brand-700 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start space-x-2.5 text-xs text-gray-600">
                    <Check className="h-4 w-4 text-brand-700 shrink-0 mt-0.5" />
                    <span>Joints secured with traditional dowels & tongue-and-groove engineering.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Specification Calculator & Bespoke Studio Access */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="font-sans text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            {/* Live interactive configuration preview box */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6.5 shadow-xs space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="space-y-0.5">
                  <h3 className="font-serif text-lg font-bold text-brand-950 flex items-center space-x-1.5">
                    <Sliders className="h-4.5 w-4.5 text-brand-800" />
                    <span>Live Interactive Spec Calculator</span>
                  </h3>
                  <p className="text-[11px] text-gray-500">Calculate custom quotes and timber adjustments instantly.</p>
                </div>
                <span className="bg-brand-50 border border-brand-200 text-brand-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Instant Quote
                </span>
              </div>

              {/* Slider inputs for sizing */}
              <div className="space-y-5.5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-900">1. Adjust Dimensions (Inches)</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Width slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-600">Width</span>
                      <span className="font-mono font-bold text-brand-950">{customWidth}"</span>
                    </div>
                    <input
                      type="range"
                      min={Math.round(product.dimensions.w * 0.8)}
                      max={Math.round(product.dimensions.w * 1.3)}
                      value={customWidth}
                      onChange={(e) => setCustomWidth(Number(e.target.value))}
                      className="w-full accent-brand-800"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 font-semibold uppercase font-mono">
                      <span>Min: {Math.round(product.dimensions.w * 0.8)}"</span>
                      <span>Max: {Math.round(product.dimensions.w * 1.3)}"</span>
                    </div>
                  </div>

                  {/* Depth slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-600">Depth</span>
                      <span className="font-mono font-bold text-brand-950">{customDepth}"</span>
                    </div>
                    <input
                      type="range"
                      min={Math.round(product.dimensions.d * 0.8)}
                      max={Math.round(product.dimensions.d * 1.3)}
                      value={customDepth}
                      onChange={(e) => setCustomDepth(Number(e.target.value))}
                      className="w-full accent-brand-800"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 font-semibold uppercase font-mono">
                      <span>Min: {Math.round(product.dimensions.d * 0.8)}"</span>
                      <span>Max: {Math.round(product.dimensions.d * 1.3)}"</span>
                    </div>
                  </div>

                  {/* Height slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-600">Height</span>
                      <span className="font-mono font-bold text-brand-950">{customHeight}"</span>
                    </div>
                    <input
                      type="range"
                      min={Math.round(product.dimensions.h * 0.8)}
                      max={Math.round(product.dimensions.h * 1.3)}
                      value={customHeight}
                      onChange={(e) => setCustomHeight(Number(e.target.value))}
                      className="w-full accent-brand-800"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 font-semibold uppercase font-mono">
                      <span>Min: {Math.round(product.dimensions.h * 0.8)}"</span>
                      <span>Max: {Math.round(product.dimensions.h * 1.3)}"</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wood selection */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-900">2. Select Premium Wood (Fully Seasoned)</h4>
                  <span className="text-[10px] font-mono text-gray-400 font-semibold">Origin: {selectedWood.origin}</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {WOOD_MATERIALS.map((wood) => (
                    <button
                      key={wood.id}
                      onClick={() => setSelectedWood(wood)}
                      className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                        selectedWood.id === wood.id
                          ? 'border-brand-800 bg-brand-50/20 ring-1 ring-brand-800'
                          : 'border-gray-200 hover:border-gray-300 bg-[#faf9f6]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 block"
                          style={{ backgroundColor: wood.colorHex }}
                        />
                        <span className="text-[11px] font-bold text-gray-800 truncate block">{wood.name.split(' (')[0]}</span>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-brand-800 block">₹{wood.pricePerSqFt}/sq.ft</span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 italic mt-1">{selectedWood.description}</p>
              </div>

              {/* Polish Finish Selection */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-900">3. Select Polish Sealant Finish</h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FINISH_TYPES.map((finish) => (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedFinish.id === finish.id
                          ? 'border-brand-800 bg-brand-50/20 ring-1 ring-brand-800'
                          : 'border-gray-200 hover:border-gray-300 bg-[#faf9f6]'
                      }`}
                    >
                      <span className="text-[11px] font-bold text-gray-800 block mb-0.5">{finish.name.split(' Premium')[0]}</span>
                      <span className="text-[9px] font-mono text-gray-400 uppercase font-semibold">
                        {finish.priceMultiplier === 1 ? 'Base Cost' : `+${Math.round((finish.priceMultiplier - 1) * 100)}% Cost`}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 italic mt-1">{selectedFinish.description}</p>
              </div>

              {/* Upholstery Choice (Conditional) */}
              {hasUpholstery && (
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-900">4. Select Luxurious Fabric</h4>
                    <span className="text-[10px] font-mono text-gray-400 font-semibold">{selectedUpholstery.material}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {UPHOLSTERY_OPTIONS.map((uph) => (
                      <button
                        key={uph.id}
                        onClick={() => setSelectedUpholstery(uph)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedUpholstery.id === uph.id
                            ? 'border-brand-800 bg-brand-50/20 ring-1 ring-brand-800'
                            : 'border-gray-200 hover:border-gray-300 bg-[#faf9f6]'
                        }`}
                      >
                        <div className="flex items-center space-x-1.5 mb-1">
                          <span
                            className="w-3.5 h-3.5 rounded-md border border-black/10 shrink-0 block"
                            style={{ backgroundColor: uph.colorHex }}
                          />
                          <span className="text-[10px] font-bold text-gray-800 truncate block">{uph.name.split(' ')[0]}</span>
                        </div>
                        <span className="text-[9px] text-gray-400 truncate block">{uph.colorName}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Real-time Dynamic Cost Output Frame */}
              <div className="bg-brand-950 text-white rounded-2xl p-5 sm:p-6.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-200 block">Custom Estimate (GST Incl.)</span>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">₹{calculatePrice().toLocaleString()}</span>
                    <span className="text-xs font-mono text-brand-300 italic">Bespoke Price</span>
                  </div>
                  <span className="text-[10px] text-brand-200/80 block mt-1 leading-normal">
                    Includes hand-polishing, 5-year warrantied joints, and doorstep packaging.
                  </span>
                </div>

                <div className="w-full sm:w-auto shrink-0 flex flex-col space-y-2">
                  {/* Book Home measurement consultation */}
                  <button
                    onClick={handleBookConsultation}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <CalendarRange className="h-4 w-4 text-brand-100" />
                    <span>Book Custom Order</span>
                  </button>

                  {/* Continue customizing in detailed studio */}
                  <button
                    onClick={handleOpenInStudio}
                    className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Design Studio Planner</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand-200" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
