import React, { useState, useRef } from 'react';
import { Calendar, MapPin, UploadCloud, CheckCircle, Clock, BookOpen, AlertCircle, Trash2 } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: 'living',
    woodPreference: 'teak',
    visitDate: '',
    timeSlot: '11:00-14:00',
    address: '',
    notes: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <section id="consultation" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 text-brand-900 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5 text-brand-800" />
                <span>Complimentary Home Service</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
                Book a Free Home Measurement &amp; Design Consultation
              </h2>
              
              <p className="font-sans text-gray-600 leading-relaxed">
                Struggling to fit standard catalog items into your specific architectural layout? Our senior design engineer and carpenters will visit your home with timber sample blocks, measure your spaces, and provide 2D sketches.
              </p>

              {/* Service details list */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="bg-brand-50 text-brand-850 p-2.5 rounded-xl border border-brand-100 shrink-0 mt-0.5">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 leading-tight">1. On-Site Measurement</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-snug">Laser precision sizing for perfect custom fit.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="bg-brand-50 text-brand-850 p-2.5 rounded-xl border border-brand-100 shrink-0 mt-0.5">
                    <BookOpen className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 leading-tight">2. Timber Sample Box</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-snug">Touch and see Teak, Walnut, and Sheesham polishes live in your home's natural lighting.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="bg-brand-50 text-brand-850 p-2.5 rounded-xl border border-brand-100 shrink-0 mt-0.5">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 leading-tight">3. Sketch &amp; Quotation</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-snug">Get a detailed layout catalog sketch and dynamic quote estimate on-the-spot.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support notes tag */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-500">
              <span className="font-semibold text-gray-700 block mb-0.5">Currently serving:</span>
              Surat and surrounding areas in Gujarat (including Vesu, Adajan, Piplod, Althan, Pal, City Light, etc.).
            </div>
          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#fdfbfa] border border-brand-100 p-6 sm:p-10 rounded-3xl shadow-lg relative h-full">
              
              {!isBooked ? (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sunil Sahani"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:border-brand-600 focus:outline-none bg-white shadow-xs"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 99999 88888"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:border-brand-600 focus:outline-none bg-white shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Room Category */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Select Room Space</label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value }))}
                        className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:border-brand-600 focus:outline-none bg-white shadow-xs"
                      >
                        <option value="living">Living Room Suite</option>
                        <option value="bedroom">Bedroom Set</option>
                        <option value="dining">Dining &amp; Kitchen Lounge</option>
                        <option value="office">Executive Study Room</option>
                        <option value="all">Full House Bespoke Woodwork</option>
                      </select>
                    </div>

                    {/* Wood species preference */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Timber Preference</label>
                      <select
                        value={formData.woodPreference}
                        onChange={(e) => setFormData(prev => ({ ...prev, woodPreference: e.target.value }))}
                        className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:border-brand-600 focus:outline-none bg-white shadow-xs"
                      >
                        <option value="teak">Premium Teak (Sagwan)</option>
                        <option value="walnut">Dark Walnut</option>
                        <option value="sheesham">Indian Rosewood (Sheesham)</option>
                        <option value="oak">White Ash / Golden Oak</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Visit date */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Preferred Visit Date</label>
                      <input
                        type="date"
                        required
                        value={formData.visitDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, visitDate: e.target.value }))}
                        className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:border-brand-600 focus:outline-none bg-white shadow-xs"
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Time Slot</label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeSlot: e.target.value }))}
                        className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:border-brand-600 focus:outline-none bg-white shadow-xs"
                      >
                        <option value="09:00-11:00">Early Morning (09:00 AM - 11:00 AM)</option>
                        <option value="11:00-14:00">Midday (11:00 AM - 02:00 PM)</option>
                        <option value="14:00-17:00">Afternoon (02:00 PM - 05:00 PM)</option>
                        <option value="17:00-20:00">Late Evening (05:00 PM - 08:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Home / Construction Site Address</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="e.g. Flat 304, Block-B, Royal Residency, Vesu, Surat"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:border-brand-600 focus:outline-none bg-white shadow-xs resize-none"
                    />
                  </div>

                  {/* USABILITY PATTERN: File Upload with Drag & Drop */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Upload Layout Blueprint / Sketch (Optional)
                    </label>
                    
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
                        isDragging
                          ? 'border-brand-800 bg-brand-50'
                          : uploadedFile
                          ? 'border-emerald-500 bg-emerald-50/20'
                          : 'border-gray-200 hover:border-brand-500 hover:bg-gray-50/50'
                      }`}
                      onClick={triggerFileInput}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        className="hidden"
                        accept="image/*,.pdf"
                      />
                      
                      {!uploadedFile ? (
                        <div className="space-y-2">
                          <UploadCloud className="mx-auto h-8 w-8 text-brand-600" />
                          <p className="text-xs font-semibold text-gray-700">
                            Drag &amp; drop file here, or <span className="text-brand-800 underline">browse</span>
                          </p>
                          <p className="text-[10px] text-gray-400">
                            Supports PNG, JPG, PDF (Max 12MB)
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-white border border-emerald-200 rounded-lg p-3.5 shadow-xs">
                          <div className="flex items-center space-x-3 text-left">
                            <CheckCircle className="h-6 w-6 text-emerald-600" />
                            <div>
                              <span className="block text-xs font-bold text-gray-800 truncate max-w-[200px]">
                                {uploadedFile.name}
                              </span>
                              <span className="block text-[10px] text-gray-400">
                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </div>
                          </div>
                          
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveFile();
                            }}
                            className="p-1.5 bg-red-50 hover:bg-red-100 rounded-lg text-red-600 transition-all cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="btn-book-consultation"
                    className="w-full font-semibold text-white bg-brand-850 hover:bg-brand-950 shadow-md py-4 rounded-xl transition-all cursor-pointer text-center"
                  >
                    Schedule Home Visit Now
                  </button>

                </form>
              ) : (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-200">
                  <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <CheckCircle className="h-10 w-10 stroke-[2.5]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-brand-950">
                      Measurement Visit Confirmed!
                    </h3>
                    <p className="font-sans text-sm text-gray-600">
                      Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your free home design consultation appointment has been scheduled.
                    </p>
                  </div>

                  {/* Summary card */}
                  <div className="bg-brand-50/70 p-5 rounded-2xl border border-brand-100 text-left space-y-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Room Category:</span>
                      <span className="font-bold text-brand-950 capitalize">{formData.roomType} space</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Scheduled Date:</span>
                      <span className="font-bold text-brand-950">{formData.visitDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Allocated Hour:</span>
                      <span className="font-bold text-brand-950">{formData.timeSlot}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium shrink-0">Address:</span>
                      <span className="font-bold text-brand-950 text-right truncate max-w-[240px]">{formData.address}</span>
                    </div>
                    {uploadedFile && (
                      <div className="flex justify-between items-center text-emerald-800 font-semibold bg-emerald-50/60 p-1.5 rounded-md mt-2">
                        <span>Attached Blueprint:</span>
                        <span className="truncate max-w-[150px]">{uploadedFile.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Our designated executive planner will call you shortly on <strong className="text-gray-900">{formData.phone}</strong>.</p>
                    <p>Please keep some electrical plug points clear for our dynamic laser measurement tools.</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsBooked(false);
                      setUploadedFile(null);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        roomType: 'living',
                        woodPreference: 'teak',
                        visitDate: '',
                        timeSlot: '11:00-14:00',
                        address: '',
                        notes: ''
                      });
                    }}
                    className="w-full bg-brand-800 hover:bg-brand-900 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Schedule Another Consultation
                  </button>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
