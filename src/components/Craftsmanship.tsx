import React, { useState } from 'react';
import { ShieldCheck, Hammer, Sparkles, Award, Star, Flame, Trophy, Search, SlidersHorizontal, MapPin } from 'lucide-react';
import { COMPREHENSIVE_TESTIMONIALS } from '../data/testimonialsData';

export default function Craftsmanship() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState<number | 'all'>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  // Derive unique locations for the select dropdown filter
  const locations = Array.from(new Set(COMPREHENSIVE_TESTIMONIALS.map((t) => t.location))).sort();

  // Filter logic
  const filteredTestimonials = COMPREHENSIVE_TESTIMONIALS.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRating = ratingFilter === 'all' ? true : t.rating === ratingFilter;
    const matchesLocation = locationFilter === 'all' ? true : t.location === locationFilter;

    return matchesSearch && matchesRating && matchesLocation;
  });

  const displayedTestimonials = filteredTestimonials.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setRatingFilter('all');
    setLocationFilter('all');
    setVisibleCount(6);
  };
  return (
    <section id="craftsmanship" className="py-24 bg-gradient-to-b from-[#fdfdfb] to-[#f7f5f2] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-900 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Award className="h-3.5 w-3.5 text-brand-800" />
            <span>Honorable Legacy Carpentry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
            A Living Heritage of Solid Timber Woodwork
          </h2>
          <p className="font-sans text-gray-600">
            We don't do mass production. Each piece of Virat Furniture is a slow, methodical creation of seasoned wood, meticulously hand-selected and crafted to endure generations of family stories.
          </p>
        </div>

        {/* Crafting Processes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-left">
          
          {/* 1. Wood Seasoning */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-brand-800">
              <Flame className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-brand-950 mb-3">
              100% Cured &amp; Seasoned Wood
            </h3>
            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              Every timber plank undergoes 45 days of controlled kiln chamber seasoning to bring moisture levels down to a stable 8-12%. This guarantees the wood will never warp, expand, or split, regardless of humidity.
            </p>
          </div>

          {/* 2. Mortise & Tenon Joinery */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-brand-800">
              <Hammer className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-brand-950 mb-3">
              Traditional Joint Artistry
            </h3>
            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              Our master artisans use age-old interlocking Mortise &amp; Tenon joints, complemented by elegant wood-pegged alignments. We reject cheap staples, glue-only bindings, or basic metallic screw structures.
            </p>
          </div>

          {/* 3. Termite Shield */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-brand-800">
              <ShieldCheck className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-brand-950 mb-3">
              Organic Termite Shielding
            </h3>
            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              Timbers are treated inside a vacuum chamber with environment-safe botanical borate compounds. This organic protection runs deep into the wood fibers, completely securing it against pests for decades.
            </p>
          </div>

        </div>

        {/* Splendid Testimonials Block */}
        <div className="border-t border-brand-200/50 pt-20">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 bg-brand-100/65 border border-brand-200 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-brand-900 mb-3">
              <Trophy className="h-3.5 w-3.5 text-brand-800" />
              <span>Artisan Stories &amp; Testimonials</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-950">
              Loved by Discerning Families
            </h3>
            <p className="text-xs text-gray-500 mt-2 font-sans">
              Browse through our collection of 40 verified stories from happy homeowners, architects, and designers across India.
            </p>
          </div>

          {/* Interactive Search & Filter Bar */}
          <div className="bg-white rounded-3xl border border-gray-250/60 p-6 mb-10 text-left shadow-xs space-y-4">
            <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
              <SlidersHorizontal className="h-4 w-4 text-brand-800" />
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-900">
                Filter Verified Client Stories
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              {/* Search input */}
              <div className="sm:col-span-6 relative">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search reviews by name, keyword, or role (e.g. 'Chesterfield', 'Teak', 'Architect')..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleCount(6);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#faf9f6] border border-gray-250/70 rounded-xl text-xs font-medium focus:ring-1 focus:ring-brand-800 focus:outline-none"
                />
              </div>

              {/* Rating Filter */}
              <div className="sm:col-span-3">
                <select
                  value={ratingFilter}
                  onChange={(e) => {
                    const val = e.target.value;
                    setRatingFilter(val === 'all' ? 'all' : Number(val));
                    setVisibleCount(6);
                  }}
                  className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-gray-250/70 rounded-xl text-xs font-bold text-gray-700 focus:ring-1 focus:ring-brand-800 focus:outline-none cursor-pointer"
                >
                  <option value="all">⭐ All Ratings</option>
                  <option value="5">5 Stars Rating Only</option>
                  <option value="4">4 Stars Rating Only</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="sm:col-span-3">
                <select
                  value={locationFilter}
                  onChange={(e) => {
                    setLocationFilter(e.target.value);
                    setVisibleCount(6);
                  }}
                  className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-gray-250/70 rounded-xl text-xs font-bold text-gray-700 focus:ring-1 focus:ring-brand-800 focus:outline-none cursor-pointer"
                >
                  <option value="all">📍 All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-2 text-[11px] text-gray-500 font-medium gap-2">
              <span className="bg-brand-50 border border-brand-100 text-brand-900 px-3 py-1 rounded-md">
                Showing <strong>{displayedTestimonials.length}</strong> of <strong>{filteredTestimonials.length}</strong> verified reviews
              </span>
              
              {(searchTerm || ratingFilter !== 'all' || locationFilter !== 'all') && (
                <button
                  onClick={handleResetFilters}
                  className="text-brand-800 hover:text-brand-950 font-bold underline cursor-pointer"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Testimonials Grid */}
          {displayedTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  id={`testimonial-card-${testimonial.id}`}
                  className="bg-[#faf9f6]/85 backdrop-blur-xs p-6 rounded-3xl border border-brand-200/30 text-left flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3.5">
                    {/* Rating and Date */}
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-amber-500 fill-amber-500" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-gray-200" />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">{testimonial.date}</span>
                    </div>
                    {/* Quote */}
                    <p className="font-sans text-xs italic text-gray-700 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Avatar and Info */}
                  <div className="flex items-center space-x-3 pt-4 mt-5 border-t border-brand-200/20">
                    <div className="w-9 h-9 bg-brand-850 text-white font-bold rounded-xl flex items-center justify-center font-display shadow-inner shrink-0 text-xs uppercase">
                      {testimonial.avatarLetter}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-bold text-gray-900 truncate">{testimonial.name}</span>
                      <span className="block text-[10px] text-gray-500 font-medium truncate">
                        {testimonial.role} · <span className="font-semibold text-brand-850 inline-flex items-center"><MapPin className="h-2.5 w-2.5 mr-0.5 inline" />{testimonial.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results Empty State */
            <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center max-w-lg mx-auto">
              <Search className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <h4 className="font-serif text-lg font-bold text-brand-950 mb-1.5">No Matching Reviews Found</h4>
              <p className="text-xs text-gray-500 mb-5 leading-normal">
                We couldn't find any reviews matching "{searchTerm || 'selected filter'}" criteria. Try clearing or expanding your selection filter.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-brand-850 hover:bg-brand-950 text-white font-bold py-2 px-5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredTestimonials.length > visibleCount && (
            <div className="mt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="bg-white hover:bg-[#faf9f6] text-brand-900 border border-gray-200 hover:border-brand-200 font-bold py-3 px-8 rounded-xl text-xs transition-all shadow-xs cursor-pointer inline-flex items-center space-x-2"
              >
                <span>Load More Verified Reviews</span>
                <span className="bg-brand-100 text-brand-900 text-[10px] px-2 py-0.5 rounded-full font-mono">
                  {filteredTestimonials.length - visibleCount} left
                </span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
