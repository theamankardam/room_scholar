import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { HiArrowSmRight } from 'react-icons/hi'; // Sleeker arrow matching the mockup exactly

const PromoBanner = () => {
  return (
    <section className="px-4 pb-16 max-w-7xl mx-auto w-full">
      {/* Container Box with deep navy background */}
      <div className="bg-[#0A192F] text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
        
        {/* Left Side: Testimonial Section (5 Cols on Desktop) */}
        <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80">
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
              Loved by thousands of students
            </h3>
            <p className="text-slate-300 text-sm md:text-base italic leading-relaxed max-w-md">
              "Room Scholars made finding my accommodation in London so easy. The place is amazing and the support is excellent!"
            </p>
          </div>

          {/* User Profile & Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/40">
            {/* User Details */}
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120" 
                alt="Ananya Sharma" 
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
              />
              <div>
                <h4 className="text-sm font-semibold text-white">Ananya Sharma</h4>
                <p className="text-xs text-slate-400">Student, UCL</p>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center gap-3">
              <button className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1">
                <FiArrowLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
              </div>
              <button className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1">
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: CTA Banner (7 Cols on Desktop) */}
        {/* Fixed positioning by using an internal responsive grid structure instead of pure absolute overlays */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 relative overflow-hidden bg-gradient-to-br from-[#0A192F] to-[#0d203d]">
          
          {/* Text Content Block (Takes full width on mobile, 7 cols on desktop to leave breathing room for the image) */}
          <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between h-full z-10 relative">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 leading-tight">
                Ready to find your <br className="hidden lg:block"/>perfect stay?
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                Book your ideal student accommodation in London today.
              </p>
            </div>
            
            {/* Primary CTA Orange Button - Aligns beautifully at the bottom */}
            <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-300 w-full sm:w-fit group cursor-pointer shadow-lg shadow-orange-500/10 mt-auto">
              Explore Properties
              <HiArrowSmRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Fully Responsive Girl Image Column (Invisible on mobile, beautifully framed from md upwards) */}
          <div className="hidden md:block md:col-span-5 relative h-full min-h-[300px] lg:min-h-full">
            {/* Background Dot Matrix Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] z-0 pointer-events-none"></div>
            
            {/* Image aligned perfectly to the bottom right corner without breaking out */}
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800" 
              alt="Student" 
              className="hidden lg:flex absolute bottom-0 right-0 h-[100%] xl:h-[105%] w-full object-cover object-top select-none z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;