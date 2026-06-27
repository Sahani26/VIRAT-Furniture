import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

export default function ContactPage({ onBackToHome }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bespoke Custom Furniture Request',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    const originalTitle = document.title;
    document.title = "Contact Us | Surat Experience Center & HQ | Virat Furniture";
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Bespoke Custom Furniture Request',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="bg-[#fcfbfa] pt-24 pb-16">
      
      {/* Header Banner */}
      <div className="py-12 bg-gradient-to-b from-brand-50 to-[#fcfbfa] border-b border-gray-150/60">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            Get in Touch with Our Craft Experts
          </h1>
          <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Have questions about timber seasoning, custom layouts, or sizing? Drop us a line or visit our experience showroom in Surat.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-brand-950 text-white rounded-3xl p-8 space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Surat Showroom &amp; HQ</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Located close to the Surat Diamond Bourse inside Ichchhapore GIDC, we exhibit curated collections of solid wood masterpieces.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brand-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-gray-200">Address</span>
                    <span className="text-gray-400">Plot 104, Ichchhapore GIDC, Near Surat Diamond Bourse, Surat, Gujarat - 395007</span>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-brand-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-gray-200">Phone &amp; WhatsApp</span>
                    <span className="text-gray-400 block">+91 98251 77240 (Bespoke Orders)</span>
                    <span className="text-gray-400 block">+91 261 289 4440 (Front Desk)</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-brand-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-gray-200">Emails</span>
                    <span className="text-gray-400 block">consult@viratfurniture.com</span>
                    <span className="text-gray-400 block">support@viratfurniture.com</span>
                  </div>
                </div>

                {/* Clock */}
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-brand-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-gray-200">Showroom Hours</span>
                    <span className="text-gray-400 block">Monday – Saturday: 10:00 AM – 8:00 PM</span>
                    <span className="text-gray-400 block">Sunday: 11:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex items-center space-x-3 text-[10px] text-gray-400">
                <ShieldCheck className="h-4 w-4 text-brand-300" />
                <span>Complimentary VIP Valet Parking available</span>
              </div>
            </div>

            {/* Micro FAQ pill */}
            <div className="bg-white border border-gray-150 p-6 rounded-3xl">
              <h4 className="font-serif text-sm font-bold text-brand-950 mb-1">Quick Custom Timelines</h4>
              <p className="text-[11px] text-gray-500 leading-normal">
                Standard bespoke build timelines range between 18 to 25 days depending on the structural carving details. We deliver fully-crated pieces to ensure damage-free transit.
              </p>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-250/70 p-8 rounded-3xl text-left shadow-xs">
            <h3 className="font-serif text-lg font-bold text-brand-950 mb-1">Send a Direct Message</h3>
            <p className="text-xs text-gray-500 mb-6">Our design architects will respond to your custom query with a tailored spec sheet within 4 hours.</p>

            {isSubmitted ? (
              <div className="bg-brand-50 border border-brand-100 p-8 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 bg-brand-850 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-base font-bold text-brand-950">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out, <strong>{formData.name || 'valued customer'}</strong>. Our master artisan coordinator will call you shortly to discuss your custom furniture specifications.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-850 hover:text-brand-950 text-xs font-bold underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sunil Sahani"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full text-xs py-2.5 px-3.5 bg-[#faf9f6] border border-gray-200 focus:border-brand-800 focus:outline-none rounded-xl"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98251 77240"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full text-xs py-2.5 px-3.5 bg-[#faf9f6] border border-gray-200 focus:border-brand-800 focus:outline-none rounded-xl"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. sunil@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full text-xs py-2.5 px-3.5 bg-[#faf9f6] border border-gray-200 focus:border-brand-800 focus:outline-none rounded-xl"
                  />
                </div>

                {/* Subject Selector */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Purpose of Inquiry</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full text-xs py-2.5 px-3.5 bg-[#faf9f6] border border-gray-200 focus:border-brand-800 focus:outline-none rounded-xl cursor-pointer font-medium"
                  >
                    <option value="Bespoke Custom Furniture Request">📐 Bespoke Custom Furniture Request</option>
                    <option value="Sizing &amp; Spatial Audit">📏 Sizing &amp; Spatial Audit (Surat)</option>
                    <option value="Corporate Office &amp; Boardroom Fit-out">🏢 Corporate Office Fit-out</option>
                    <option value="Wood Seasoning &amp; Materials Query">🪵 Wood Seasoning &amp; Materials</option>
                    <option value="Antique Wood Restoration">🔨 Antique Restoration Service</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Describe Your Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details such as desired wood (Teak, Walnut, Rosewood), room space dimensions, or customized polishing/upholstery preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full text-xs py-2.5 px-3.5 bg-[#faf9f6] border border-gray-200 focus:border-brand-800 focus:outline-none rounded-xl resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-850 hover:bg-brand-950 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Spec Sheet Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
