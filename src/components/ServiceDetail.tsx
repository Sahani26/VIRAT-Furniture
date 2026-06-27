import React, { useEffect, useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { ArrowLeft, Check, Compass, Shield, Wrench, Hammer, Sparkles, HelpCircle, Calendar, ChevronRight, MessageSquare } from 'lucide-react';

interface ServiceDetailProps {
  slug: string;
  onBackToHome: () => void;
}

export default function ServiceDetail({ slug, onBackToHome }: ServiceDetailProps) {
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  // Dynamic SEO Setup
  useEffect(() => {
    if (!service) return;

    // Update Document Title
    const originalTitle = document.title;
    document.title = service.seoTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', service.seoDescription);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, [service]);

  // Track active FAQ accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28 bg-[#faf9f6]">
        <h2 className="font-serif text-2xl font-bold text-brand-950 mb-2">Service Route Not Found</h2>
        <p className="text-gray-600 mb-6">The woodcrafting service specification you requested is not currently active.</p>
        <button
          onClick={onBackToHome}
          className="bg-brand-850 hover:bg-brand-950 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors cursor-pointer"
        >
          Return to Virat Furniture Home
        </button>
      </div>
    );
  }

  // Helper to render lucide icon
  const renderServiceIcon = (iconName: string) => {
    const classes = "h-8 w-8 text-brand-800";
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

  const handleBookService = () => {
    // Navigate to consultation section
    window.location.hash = '#/consultation';
    setTimeout(() => {
      const formEl = document.getElementById('consultation');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }

      // Pre-fill notes field
      const descInput = document.getElementById('notes-input') as HTMLTextAreaElement;
      if (descInput) {
        descInput.value = `Interested in booking the "${service.name}" service. Please contact me regarding the starting price ${service.startingPrice} and next steps.`;
        const event = new Event('input', { bubbles: true });
        descInput.dispatchEvent(event);
      }
    }, 150);
  };

  return (
    <div className="pt-24 pb-20 bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Header Area */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-xs font-bold text-brand-900 bg-white shadow-xs border border-gray-200 py-2.5 px-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home Page</span>
          </button>
        </div>

        {/* Hero Section Container */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-xs text-left mb-8 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
              {renderServiceIcon(service.iconName)}
            </div>
            <div>
              <span className="text-[10px] font-bold text-brand-800 uppercase tracking-widest block">Premium Service Offering</span>
              <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-brand-950 mt-1 leading-tight">
                {service.name}
              </h1>
            </div>
          </div>

          <p className="font-sans text-gray-600 leading-relaxed text-sm sm:text-base border-l-4 border-brand-700 pl-4">
            {service.longDescription}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
            <div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Est. Starting Price</span>
              <span className="text-xl sm:text-2xl font-black text-brand-950 font-mono mt-0.5 block">{service.startingPrice}</span>
            </div>

            <button
              onClick={handleBookService}
              className="bg-brand-850 hover:bg-brand-950 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all flex items-center space-x-2 shadow-xs cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment & Site Survey</span>
            </button>
          </div>
        </div>

        {/* 2 Column Details: Key Benefits & Crafting Process */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 text-left">
          
          {/* Key Advantages / Benefits */}
          <div className="md:col-span-5 bg-white rounded-3xl border border-gray-200/80 p-6 space-y-5">
            <h3 className="font-serif text-lg font-bold text-brand-950 flex items-center space-x-2">
              <Shield className="h-4.5 w-4.5 text-brand-700" />
              <span>Service Guarantees</span>
            </h3>

            <div className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs leading-relaxed text-gray-600">
                  <div className="mt-0.5 p-1 bg-green-50 rounded-full text-green-700 shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 bg-brand-50/20 -mx-6 -mb-6 p-6 rounded-b-3xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-800 block">Quality Assured</span>
              <p className="text-[11px] text-gray-500 mt-1">
                Every customized furniture installation is backed by Virat Furniture's traditional 5-year wood warranty against termites and joinery splits.
              </p>
            </div>
          </div>

          {/* Chronological Process Steps */}
          <div className="md:col-span-7 bg-white rounded-3xl border border-gray-200/80 p-6 space-y-6">
            <h3 className="font-serif text-lg font-bold text-brand-950 flex items-center space-x-2">
              <Wrench className="h-4.5 w-4.5 text-brand-700" />
              <span>Step-by-Step Execution Journey</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-brand-100 space-y-6">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Step counter node */}
                  <span className="absolute -left-[31px] top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-brand-800 text-white text-[9px] font-mono font-black">
                    {idx + 1}
                  </span>

                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Interactive FAQ Accordion Panel */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 text-left space-y-6">
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-brand-800" />
            <h3 className="font-serif text-lg font-bold text-brand-950">
              Frequently Asked Service Questions
            </h3>
          </div>

          <div className="divide-y divide-gray-100">
            {service.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center py-2 text-left text-xs font-bold text-gray-800 hover:text-brand-800 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight className={`h-4 w-4 text-brand-700 transition-transform ${isOpen ? 'transform rotate-90' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <p className="mt-2 text-xs text-gray-500 leading-relaxed bg-[#faf9f6] p-3 rounded-xl border border-gray-100">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
