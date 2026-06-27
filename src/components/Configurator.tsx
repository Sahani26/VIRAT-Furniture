import React, { useState, useEffect, useMemo } from 'react';
import { WOOD_MATERIALS, FINISH_TYPES, UPHOLSTERY_OPTIONS } from '../data/furnitureData';
import { ConfigState, EstimateResult, WoodMaterial, FinishType, UpholsteryType } from '../types';
import { 
  Wrench, 
  Sparkles, 
  Calculator, 
  Clock, 
  ShieldAlert, 
  Send, 
  Check, 
  Layers, 
  FileCheck,
  RotateCcw,
  Info
} from 'lucide-react';

interface ConfiguratorProps {
  initialType?: 'sofa' | 'table' | 'bed' | 'cabinet' | 'desk';
  key?: number;
}

export default function Configurator({ initialType = 'sofa' }: ConfiguratorProps) {
  // State for user configuration
  const [config, setConfig] = useState<ConfigState>({
    furnitureType: initialType,
    width: 86,
    depth: 38,
    height: 32,
    materialId: 'teak',
    finishId: 'matte',
    upholsteryId: 'ivory_boucle',
    includePremiumPolish: false,
    extraDrawers: 0
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Jaipur',
    notes: ''
  });

  // Whenever furniture type changes, adjust default dimensions
  useEffect(() => {
    switch (config.furnitureType) {
      case 'sofa':
        setConfig(prev => ({ ...prev, width: 86, depth: 38, height: 32, extraDrawers: 0 }));
        break;
      case 'table':
        setConfig(prev => ({ ...prev, width: 72, depth: 36, height: 30, extraDrawers: 0 }));
        break;
      case 'bed':
        setConfig(prev => ({ ...prev, width: 84, depth: 78, height: 48, extraDrawers: 0 }));
        break;
      case 'cabinet':
        setConfig(prev => ({ ...prev, width: 66, depth: 18, height: 34, extraDrawers: 2 }));
        break;
      case 'desk':
        setConfig(prev => ({ ...prev, width: 60, depth: 28, height: 30, extraDrawers: 3 }));
        break;
    }
  }, [config.furnitureType]);

  // Dimension limits based on furniture type
  const dimensionLimits = useMemo(() => {
    switch (config.furnitureType) {
      case 'sofa':
        return { wMin: 60, wMax: 110, dMin: 30, dMax: 45, hMin: 28, hMax: 40 };
      case 'table':
        return { wMin: 48, wMax: 96, dMin: 28, dMax: 48, hMin: 28, hMax: 33 };
      case 'bed':
        return { wMin: 60, wMax: 84, dMin: 70, dMax: 88, hMin: 36, hMax: 80 };
      case 'cabinet':
        return { wMin: 36, wMax: 80, dMin: 16, dMax: 28, hMin: 30, hMax: 90 };
      case 'desk':
        return { wMin: 40, wMax: 72, dMin: 20, dMax: 36, hMin: 28, hMax: 32 };
    }
  }, [config.furnitureType]);

  // Selectors for convenience
  const selectedMaterial = useMemo(() => {
    return WOOD_MATERIALS.find(m => m.id === config.materialId) || WOOD_MATERIALS[0];
  }, [config.materialId]);

  const selectedFinish = useMemo(() => {
    return FINISH_TYPES.find(f => f.id === config.finishId) || FINISH_TYPES[0];
  }, [config.finishId]);

  const selectedUpholstery = useMemo(() => {
    return UPHOLSTERY_OPTIONS.find(u => u.id === config.upholsteryId) || UPHOLSTERY_OPTIONS[0];
  }, [config.upholsteryId]);

  // Calculate prices dynamically
  const estimate = useMemo<EstimateResult>(() => {
    let baseCost = 15000; // Base labor/carpentry cost
    let craftingDays = 14;

    // Type adjustments
    switch (config.furnitureType) {
      case 'sofa':
        baseCost = 22000;
        craftingDays = 16;
        break;
      case 'table':
        baseCost = 28000;
        craftingDays = 18;
        break;
      case 'bed':
        baseCost = 25000;
        craftingDays = 20;
        break;
      case 'cabinet':
        baseCost = 20000;
        craftingDays = 15;
        break;
      case 'desk':
        baseCost = 18000;
        craftingDays = 14;
        break;
    }

    // Material cost based on surface area proxy
    // Surface area of a cuboid logic: 2 * (wd + dh + hw)
    const widthFt = config.width / 12;
    const depthFt = config.depth / 12;
    const heightFt = config.height / 12;
    const surfaceAreaSqFt = 2 * (widthFt * depthFt + depthFt * heightFt + heightFt * widthFt);
    
    // Solid wood material cost
    const materialCost = Math.round(surfaceAreaSqFt * selectedMaterial.pricePerSqFt * 1.5);

    // Finish cost multiplier
    const finishCost = Math.round((baseCost + materialCost) * (selectedFinish.priceMultiplier - 1));

    // Upholstery cost (only applicable for sofas and beds)
    const hasUpholstery = config.furnitureType === 'sofa' || config.furnitureType === 'bed';
    const upholsteryCost = hasUpholstery ? selectedUpholstery.extraCost : 0;

    // Custom features & extras
    let customizationCost = 0;
    if (config.includePremiumPolish) {
      customizationCost += 3500; // Multi-stage premium coat
    }
    if ((config.furnitureType === 'cabinet' || config.furnitureType === 'desk') && config.extraDrawers > 0) {
      customizationCost += config.extraDrawers * 1800;
    }

    const totalCost = baseCost + materialCost + finishCost + upholsteryCost + customizationCost;

    // Adjust days based on extra features
    if (config.includePremiumPolish) craftingDays += 2;
    if (config.width > dimensionLimits.wMin + (dimensionLimits.wMax - dimensionLimits.wMin) / 2) craftingDays += 1;
    if (config.extraDrawers > 3) craftingDays += 2;

    return {
      baseCost,
      materialCost,
      finishCost,
      upholsteryCost,
      customizationCost,
      totalCost,
      craftingDays
    };
  }, [config, selectedMaterial, selectedFinish, selectedUpholstery, dimensionLimits]);

  // Handle resets
  const handleReset = () => {
    setConfig({
      furnitureType: 'sofa',
      width: 86,
      depth: 38,
      height: 32,
      materialId: 'teak',
      finishId: 'matte',
      upholsteryId: 'ivory_boucle',
      includePremiumPolish: false,
      extraDrawers: 0
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  // SVG Render of Furniture with Dynamic colors
  const renderFurniturePreview = () => {
    const woodColor = selectedMaterial.colorHex;
    const fabricColor = selectedUpholstery.colorHex;
    const isUpholstered = config.furnitureType === 'sofa' || config.furnitureType === 'bed';

    switch (config.furnitureType) {
      case 'sofa':
        return (
          <svg viewBox="0 0 160 100" className="w-full h-full max-h-56 object-contain drop-shadow-xl">
            {/* Wooden Base Legs */}
            <rect x="25" y="75" width="8" height="12" rx="2" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            <rect x="127" y="75" width="8" height="12" rx="2" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            <rect x="76" y="75" width="8" height="12" rx="2" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />

            {/* Wooden Under-plinth */}
            <rect x="20" y="70" width="120" height="6" rx="1.5" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />

            {/* Main Sofa Body (Upholstery color) */}
            <rect x="20" y="40" width="120" height="30" rx="4" fill={fabricColor} stroke="#2c2c2a" strokeWidth="1.5" />
            
            {/* Cushion Segments */}
            <rect x="23" y="55" width="36" height="13" rx="2" fill={fabricColor} opacity="0.9" stroke="#2c2c2a" strokeWidth="1" />
            <rect x="62" y="55" width="36" height="13" rx="2" fill={fabricColor} opacity="0.9" stroke="#2c2c2a" strokeWidth="1" />
            <rect x="101" y="55" width="36" height="13" rx="2" fill={fabricColor} opacity="0.9" stroke="#2c2c2a" strokeWidth="1" />

            {/* Rolled Armrests */}
            <path d="M12,42 C12,35 18,35 24,40 L24,70 C18,70 12,65 12,55 Z" fill={fabricColor} stroke="#2c2c2a" strokeWidth="1.5" />
            <path d="M148,42 C148,35 142,35 136,40 L136,70 C142,70 148,65 148,55 Z" fill={fabricColor} stroke="#2c2c2a" strokeWidth="1.5" />

            {/* Chesterfield Buttons (Tufted design lines) */}
            <circle cx="40" cy="46" r="1.5" fill="#111" opacity="0.4" />
            <circle cx="60" cy="46" r="1.5" fill="#111" opacity="0.4" />
            <circle cx="80" cy="46" r="1.5" fill="#111" opacity="0.4" />
            <circle cx="100" cy="46" r="1.5" fill="#111" opacity="0.4" />
            <circle cx="120" cy="46" r="1.5" fill="#111" opacity="0.4" />
          </svg>
        );

      case 'table':
        return (
          <svg viewBox="0 0 160 100" className="w-full h-full max-h-56 object-contain drop-shadow-xl">
            {/* Shadows */}
            <ellipse cx="80" cy="85" rx="55" ry="6" fill="#111" opacity="0.1" />

            {/* Heavy Wooden Legs */}
            <polygon points="25,44 18,85 28,85" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            <polygon points="135,44 142,85 132,85" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            
            {/* Crossbeam */}
            <rect x="26" y="52" width="108" height="5" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" opacity="0.9" />

            {/* Live edge Tabletop slab (beveled) */}
            <rect x="12" y="32" width="136" height="8" rx="2" fill={woodColor} stroke="#2c2c2a" strokeWidth="1.5" />
            <polygon points="12,40 18,44 142,44 148,40" fill={woodColor} opacity="0.85" stroke="#2c2c2a" strokeWidth="1" />

            {/* Wood grains detail */}
            <path d="M 20 35 Q 80 37 140 35" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.15" />
            <path d="M 15 37 Q 80 39 145 37" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.1" />
          </svg>
        );

      case 'bed':
        return (
          <svg viewBox="0 0 160 100" className="w-full h-full max-h-56 object-contain drop-shadow-xl">
            {/* Wooden Post/Pillars */}
            <rect x="15" y="15" width="8" height="75" rx="1" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            <rect x="137" y="15" width="8" height="75" rx="1" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />

            {/* Grand Headboard panel */}
            <rect x="23" y="28" width="114" height="32" rx="1" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            {/* Optional Upholstered insert for Bed */}
            <rect x="28" y="33" width="104" height="22" rx="2" fill={fabricColor} stroke="#2c2c2a" strokeWidth="1" />

            {/* Wooden bed frame box */}
            <rect x="23" y="60" width="114" height="20" rx="1" fill={woodColor} stroke="#2c2c2a" strokeWidth="1.5" />

            {/* Mattresses and sheets */}
            <rect x="25" y="55" width="110" height="9" rx="2" fill="#faf9f5" stroke="#2c2c2a" strokeWidth="1" />
            
            {/* Accent pillows */}
            <rect x="35" y="48" width="28" height="8" rx="1.5" fill={fabricColor} stroke="#2c2c2a" strokeWidth="0.75" />
            <rect x="97" y="48" width="28" height="8" rx="1.5" fill={fabricColor} stroke="#2c2c2a" strokeWidth="0.75" />

            {/* Top Canopy crossbar */}
            <rect x="12" y="15" width="136" height="4" rx="0.5" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
          </svg>
        );

      case 'cabinet':
        return (
          <svg viewBox="0 0 160 100" className="w-full h-full max-h-56 object-contain drop-shadow-xl">
            {/* Cabinet Outer Frame */}
            <rect x="35" y="12" width="90" height="72" rx="3" fill={woodColor} stroke="#2c2c2a" strokeWidth="1.5" />

            {/* Top crown molding */}
            <rect x="32" y="9" width="96" height="5" rx="1" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />

            {/* Glass panel panes */}
            <rect x="42" y="20" width="34" height="34" rx="2" fill="#EBF3F9" stroke="#2c2c2a" strokeWidth="1" />
            <rect x="84" y="20" width="34" height="34" rx="2" fill="#EBF3F9" stroke="#2c2c2a" strokeWidth="1" />

            {/* Glass diagonals details */}
            <line x1="42" y1="20" x2="76" y2="54" stroke="#fff" strokeWidth="1" opacity="0.7" />
            <line x1="84" y1="20" x2="118" y2="54" stroke="#fff" strokeWidth="1" opacity="0.7" />

            {/* Lower Drawers based on state */}
            <rect x="42" y="60" width="76" height="8" rx="1" fill={woodColor} opacity="0.9" stroke="#2c2c2a" strokeWidth="1" />
            <rect x="42" y="70" width="76" height="8" rx="1" fill={woodColor} opacity="0.9" stroke="#2c2c2a" strokeWidth="1" />

            {/* Handles (Brass circles) */}
            <circle cx="80" cy="64" r="1.5" fill="#E2B13C" stroke="#111" strokeWidth="0.5" />
            <circle cx="80" cy="74" r="1.5" fill="#E2B13C" stroke="#111" strokeWidth="0.5" />
            <circle cx="70" cy="37" r="1.5" fill="#E2B13C" stroke="#111" strokeWidth="0.5" />
            <circle cx="90" cy="37" r="1.5" fill="#E2B13C" stroke="#111" strokeWidth="0.5" />

            {/* Feet */}
            <rect x="42" y="84" width="10" height="6" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            <rect x="108" y="84" width="10" height="6" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
          </svg>
        );

      case 'desk':
        return (
          <svg viewBox="0 0 160 100" className="w-full h-full max-h-56 object-contain drop-shadow-xl">
            {/* Tabletop */}
            <rect x="20" y="30" width="120" height="7" rx="1.5" fill={woodColor} stroke="#2c2c2a" strokeWidth="1.5" />

            {/* Left Drawer Pedestal */}
            <rect x="25" y="37" width="28" height="42" rx="1.5" fill={woodColor} opacity="0.9" stroke="#2c2c2a" strokeWidth="1" />
            {/* Drawers layout */}
            <rect x="28" y="42" width="22" height="9" fill={woodColor} stroke="#2c2c2a" strokeWidth="0.75" />
            <rect x="28" y="53" width="22" height="9" fill={woodColor} stroke="#2c2c2a" strokeWidth="0.75" />
            <rect x="28" y="64" width="22" height="9" fill={woodColor} stroke="#2c2c2a" strokeWidth="0.75" />

            {/* Right solid panel leg */}
            <polygon points="127,37 137,37 137,79 127,79" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />

            {/* Back modesty panel */}
            <rect x="53" y="37" width="74" height="24" fill={woodColor} opacity="0.75" stroke="#2c2c2a" strokeWidth="0.75" />

            {/* Brass Handles */}
            <circle cx="39" cy="46.5" r="1.2" fill="#E2B13C" stroke="#111" strokeWidth="0.5" />
            <circle cx="39" cy="57.5" r="1.2" fill="#E2B13C" stroke="#111" strokeWidth="0.5" />
            <circle cx="39" cy="68.5" r="1.2" fill="#E2B13C" stroke="#111" strokeWidth="0.5" />

            {/* Support foot bars */}
            <rect x="23" y="79" width="32" height="4" rx="1" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
            <rect x="117" y="79" width="22" height="4" rx="1" fill={woodColor} stroke="#2c2c2a" strokeWidth="1" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section id="configurator" className="py-20 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-900 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Wrench className="h-3.5 w-3.5 text-brand-800" />
            <span>Artisan Interactive Planner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
            Design Your Bespoke Masterpiece
          </h2>
          <p className="font-sans text-gray-600">
            Tailor any piece to your specific space. Adjust standard metrics, select from cured solid-wood timbers, and watch your quotation update live in real-time.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Configurator inputs (Columns 7) */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100">
            
            {/* 1. Category selector */}
            <div className="space-y-3.5">
              <label className="block text-sm font-bold text-gray-800 uppercase tracking-wide">
                1. Select Furniture Core Template
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {(['sofa', 'table', 'bed', 'cabinet', 'desk'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    id={`btn-config-type-${type}`}
                    onClick={() => setConfig(prev => ({ ...prev, furnitureType: type }))}
                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider border-2 transition-all flex flex-col items-center justify-center space-y-1 ${
                      config.furnitureType === type
                        ? 'border-brand-800 bg-brand-50 text-brand-900 shadow-inner'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-brand-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="capitalize text-sm">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Custom Dimension Sliders */}
            <div className="space-y-5 border-t border-gray-100 pt-6">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  2. Calibrate Custom Dimensions (inches)
                </label>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center space-x-1 text-xs text-gray-500 hover:text-brand-800 font-semibold"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Width */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-gray-600 uppercase">Width</span>
                    <span className="font-mono font-bold text-brand-900">{config.width} in ({Math.round(config.width * 2.54)} cm)</span>
                  </div>
                  <input
                    type="range"
                    id="slider-width"
                    min={dimensionLimits.wMin}
                    max={dimensionLimits.wMax}
                    value={config.width}
                    onChange={(e) => setConfig(prev => ({ ...prev, width: parseInt(e.target.value) }))}
                    className="w-full accent-brand-800 h-2 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>Min: {dimensionLimits.wMin}"</span>
                    <span>Max: {dimensionLimits.wMax}"</span>
                  </div>
                </div>

                {/* Depth */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-gray-600 uppercase">Depth</span>
                    <span className="font-mono font-bold text-brand-900">{config.depth} in ({Math.round(config.depth * 2.54)} cm)</span>
                  </div>
                  <input
                    type="range"
                    id="slider-depth"
                    min={dimensionLimits.dMin}
                    max={dimensionLimits.dMax}
                    value={config.depth}
                    onChange={(e) => setConfig(prev => ({ ...prev, depth: parseInt(e.target.value) }))}
                    className="w-full accent-brand-800 h-2 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>Min: {dimensionLimits.dMin}"</span>
                    <span>Max: {dimensionLimits.dMax}"</span>
                  </div>
                </div>

                {/* Height */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-gray-600 uppercase">Height</span>
                    <span className="font-mono font-bold text-brand-900">{config.height} in ({Math.round(config.height * 2.54)} cm)</span>
                  </div>
                  <input
                    type="range"
                    id="slider-height"
                    min={dimensionLimits.hMin}
                    max={dimensionLimits.hMax}
                    value={config.height}
                    onChange={(e) => setConfig(prev => ({ ...prev, height: parseInt(e.target.value) }))}
                    className="w-full accent-brand-800 h-2 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>Min: {dimensionLimits.hMin}"</span>
                    <span>Max: {dimensionLimits.hMax}"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Wood Species Selector */}
            <div className="space-y-3.5 border-t border-gray-100 pt-6">
              <label className="block text-sm font-bold text-gray-800 uppercase tracking-wide">
                3. Choose Seasoned Solid Wood Species
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {WOOD_MATERIALS.map((wood) => (
                  <div
                    key={wood.id}
                    id={`wood-card-${wood.id}`}
                    onClick={() => setConfig(prev => ({ ...prev, materialId: wood.id }))}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between text-left ${
                      config.materialId === wood.id
                        ? 'border-brand-800 bg-brand-50/50 shadow-sm'
                        : 'border-gray-100 bg-white hover:border-brand-200 hover:bg-gray-50/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="font-semibold text-sm text-gray-900 flex items-center space-x-2">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-gray-300 block"
                            style={{ backgroundColor: wood.colorHex }}
                          />
                          <span>{wood.name}</span>
                        </span>
                        <p className="text-xs text-gray-500 leading-relaxed pr-2">
                          {wood.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-gray-100/70 flex justify-between items-center text-[11px] font-semibold text-gray-500">
                      <span>Source: {wood.origin}</span>
                      <span className="text-brand-800 font-mono font-bold">₹{wood.pricePerSqFt}/sq.ft</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Finish Rub Coating */}
            <div className="space-y-3.5 border-t border-gray-100 pt-6">
              <label className="block text-sm font-bold text-gray-800 uppercase tracking-wide">
                4. Select Artisan Hand-Rubbed Sealant
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {FINISH_TYPES.map((finish) => (
                  <button
                    key={finish.id}
                    type="button"
                    id={`btn-finish-${finish.id}`}
                    onClick={() => setConfig(prev => ({ ...prev, finishId: finish.id }))}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between h-full ${
                      config.finishId === finish.id
                        ? 'border-brand-800 bg-brand-50 text-brand-900 shadow-xs'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-brand-200 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <span className="block font-bold text-xs capitalize leading-snug">{finish.name}</span>
                      <span className="block text-[10px] text-gray-500 leading-snug mt-1">{finish.description}</span>
                    </div>
                    <span className="block mt-2.5 text-[10px] font-mono font-bold text-brand-800 uppercase">
                      {finish.priceMultiplier > 1 ? `+${Math.round((finish.priceMultiplier - 1) * 100)}% Cost` : 'Included'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Upholstery Selections (Only for Bed and Sofa) */}
            {(config.furnitureType === 'sofa' || config.furnitureType === 'bed') && (
              <div className="space-y-3.5 border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                    5. Select Premium Upholstery Fabric
                  </label>
                  <span className="text-xs bg-brand-100 text-brand-900 font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {selectedUpholstery.material}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {UPHOLSTERY_OPTIONS.map((upholstery) => (
                    <button
                      key={upholstery.id}
                      type="button"
                      id={`btn-upholstery-${upholstery.id}`}
                      onClick={() => setConfig(prev => ({ ...prev, upholsteryId: upholstery.id }))}
                      className={`p-2.5 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-between space-y-1.5 ${
                        config.upholsteryId === upholstery.id
                          ? 'border-brand-800 bg-brand-50 text-brand-900'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-brand-200 hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className="w-7 h-7 rounded-full border border-gray-300 shadow-inner block"
                        style={{ backgroundColor: upholstery.colorHex }}
                      />
                      <div>
                        <span className="block text-[10px] font-bold leading-tight">{upholstery.name}</span>
                        <span className="block text-[9px] text-gray-400 font-semibold">{upholstery.colorName}</span>
                      </div>
                      <span className="block text-[9px] font-mono font-bold text-brand-800">
                        +₹{upholstery.extraCost.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Hardware Add-ons */}
            <div className="space-y-4 border-t border-gray-100 pt-6">
              <label className="block text-sm font-bold text-gray-800 uppercase tracking-wide">
                6. Upgrades &amp; Hardware Add-ons
              </label>
              
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                {/* Premium Polish Checkbox */}
                <label className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100 flex-1 cursor-pointer hover:bg-gray-100/50 transition-colors">
                  <input
                    type="checkbox"
                    id="chk-premium-polish"
                    checked={config.includePremiumPolish}
                    onChange={(e) => setConfig(prev => ({ ...prev, includePremiumPolish: e.target.checked }))}
                    className="mt-0.5 w-4.5 h-4.5 text-brand-800 focus:ring-brand-500 border-gray-300 rounded-sm accent-brand-800"
                  />
                  <div className="text-left">
                    <span className="block font-bold text-xs text-gray-800">Crystalline Moisture Coating (+₹3,500)</span>
                    <span className="block text-[10px] text-gray-500 mt-0.5">Dual-action hydrophobic seal guarding against heavy spills and humidity warping.</span>
                  </div>
                </label>

                {/* Soft-close drawers (Only for cabinets and desks) */}
                {(config.furnitureType === 'cabinet' || config.furnitureType === 'desk') && (
                  <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 flex-1 flex flex-col justify-between text-left space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-gray-800">Soft-Close Drawers (+₹1,800/ea)</span>
                      <span className="font-mono font-extrabold text-brand-900">{config.extraDrawers} fitted</span>
                    </div>
                    <input
                      type="range"
                      id="slider-drawers"
                      min="0"
                      max="6"
                      value={config.extraDrawers}
                      onChange={(e) => setConfig(prev => ({ ...prev, extraDrawers: parseInt(e.target.value) }))}
                      className="w-full accent-brand-800 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 font-mono">
                      <span>Standard Drawer</span>
                      <span>Max 6 fitted drawers</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT: Live Visual stage & Pricing Quotation (Columns 5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Live Visual Stage Card */}
            <div className="bg-brand-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden border border-brand-900">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-200">Interactive Blueprint Stage</span>
                <span className="text-xs font-semibold text-brand-50 px-2 py-0.5 rounded-md bg-white/10 border border-white/10 flex items-center space-x-1 capitalize">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block" />
                  <span>{config.furnitureType}</span>
                </span>
              </div>

              {/* Central preview area */}
              <div className="relative z-10 w-full h-60 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4">
                {renderFurniturePreview()}

                {/* Dimension label badge on preview */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 text-[10px] font-mono text-brand-200 bg-brand-950 border border-brand-800 px-3 py-1 rounded-full shadow-md font-bold">
                  <span>W: {config.width}"</span>
                  <span className="text-brand-500">×</span>
                  <span>D: {config.depth}"</span>
                  <span className="text-brand-500">×</span>
                  <span>H: {config.height}"</span>
                </div>
              </div>

              {/* Wood Specs description snippet */}
              <div className="relative z-10 mt-4 text-left p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-brand-100 flex items-start space-x-2">
                  <Info className="h-4.5 w-4.5 text-brand-500 shrink-0 mt-0.5" />
                  <span>
                    Selected wood: <strong className="text-white">{selectedMaterial.name}</strong> ({selectedMaterial.grain} grain, naturally seasoned). Rub finish is set to <strong className="text-white">{selectedFinish.name}</strong>.
                  </span>
                </p>
              </div>
            </div>

            {/* Price Estimation breakdown card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 text-left space-y-6">
              
              <div className="flex items-center space-x-2 text-brand-950">
                <Calculator className="h-5 w-5 text-brand-800" />
                <h3 className="font-serif text-lg font-bold tracking-tight">Artisan Price Quotation</h3>
              </div>

              {/* Dynamic Table breakdown */}
              <div className="space-y-3 font-mono text-xs text-gray-600">
                
                <div className="flex justify-between items-center">
                  <span>Base Carpentry &amp; Labor:</span>
                  <span className="text-gray-900 font-bold">₹{estimate.baseCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-1">
                    <span>Seasoned Hardwood:</span>
                  </span>
                  <span className="text-gray-900 font-bold">₹{estimate.materialCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Rub Polish / Coating ({selectedFinish.name}):</span>
                  <span className="text-gray-900 font-bold">₹{estimate.finishCost.toLocaleString()}</span>
                </div>

                {/* Fabric surcharge if applicable */}
                {(config.furnitureType === 'sofa' || config.furnitureType === 'bed') && (
                  <div className="flex justify-between items-center">
                    <span>Upholstery ({selectedUpholstery.name}):</span>
                    <span className="text-gray-900 font-bold">+₹{estimate.upholsteryCost.toLocaleString()}</span>
                  </div>
                )}

                {/* Extras/Addons if applicable */}
                {estimate.customizationCost > 0 && (
                  <div className="flex justify-between items-center text-brand-800 font-semibold bg-brand-50/50 p-1 rounded-sm">
                    <span>Premium Add-ons &amp; Upgrades:</span>
                    <span>+₹{estimate.customizationCost.toLocaleString()}</span>
                  </div>
                )}

                <div className="border-t border-dashed border-gray-200 my-4" />

                {/* TOTAL */}
                <div className="flex justify-between items-baseline">
                  <span className="font-sans font-extrabold text-sm text-gray-900">Total Bespoke Estimate:</span>
                  <span className="font-display font-extrabold text-2xl text-brand-950">₹{estimate.totalCost.toLocaleString()}*</span>
                </div>

                {/* GST disclaimer */}
                <div className="text-[10px] text-gray-400 font-sans italic leading-none pt-1">
                  *Excluding shipping. Includes dynamic seasonal artisan discounts.
                </div>
              </div>

              {/* Crafting Time Details */}
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-xs">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-brand-600 shrink-0" />
                  <div>
                    <span className="block text-gray-400 font-medium text-[10px] uppercase">Est. Crafting Time</span>
                    <span className="font-bold text-gray-800">{estimate.craftingDays} Curing Days</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <FileCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="block text-gray-400 font-medium text-[10px] uppercase">Warranty Shield</span>
                    <span className="font-bold text-gray-800">5-Year Certified</span>
                  </div>
                </div>
              </div>

              {/* Quote Submit form inside column */}
              <form onSubmit={handleFormSubmit} className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full text-xs py-2.5 px-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none bg-gray-50 focus:bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full text-xs py-2.5 px-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none bg-gray-50 focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  id="btn-submit-config"
                  className="w-full flex items-center justify-center space-x-2 font-semibold text-white bg-brand-800 hover:bg-brand-900 shadow-md py-3 px-4 rounded-xl transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Order Configuration</span>
                </button>
              </form>

            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative text-center border border-gray-100 animate-in fade-in zoom-in duration-200">
            
            {/* Celebration Icon */}
            <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <Check className="h-8 w-8 text-emerald-600 stroke-[3]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-brand-950 mb-2">
              Configuration Submitted!
            </h3>
            <p className="font-sans text-sm text-gray-600 mb-6">
              Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our senior woodcarver artisan has received your dynamic specifications for the custom <strong className="text-brand-900 capitalize">{config.furnitureType}</strong>.
            </p>

            {/* Custom details summary box in modal */}
            <div className="bg-brand-50/70 p-4 rounded-2xl border border-brand-100 text-left mb-6 space-y-2 text-xs font-medium">
              <div className="flex justify-between text-gray-500">
                <span>Selected Core:</span>
                <span className="font-bold text-brand-950 capitalize">{config.furnitureType}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Timber Species:</span>
                <span className="font-bold text-brand-950">{selectedMaterial.name}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Calibrated Size:</span>
                <span className="font-bold text-brand-950">{config.width}"W × {config.depth}"D × {config.height}"H</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Finish / Polish:</span>
                <span className="font-bold text-brand-950">{selectedFinish.name}</span>
              </div>
              <div className="border-t border-brand-200/50 my-2 pt-2 flex justify-between items-baseline font-mono">
                <span className="font-sans text-gray-700 font-bold">Estimated Cost:</span>
                <span className="text-lg font-bold text-brand-900">₹{estimate.totalCost.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-6">
              A design representative will call you on <strong className="text-gray-700">{formData.phone}</strong> within 3 business hours to finalize wood seasoning specifics, measurements, and address shipment steps.
            </p>

            <button
              id="btn-close-success"
              onClick={() => {
                setShowSuccessModal(false);
                setFormData({ name: '', phone: '', email: '', city: 'Jaipur', notes: '' });
              }}
              className="w-full bg-brand-800 hover:bg-brand-900 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Back to Design Studio
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
