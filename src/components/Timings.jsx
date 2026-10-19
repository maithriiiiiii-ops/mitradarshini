import { siteData } from "@/data/site";
import { Sunrise, Sunset, Utensils } from "lucide-react";

export default function Timings() {
  return (
    <section id="timings" className="py-20 bg-brand-green relative text-brand-cream overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-brand-gold) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-brand-gold"></span>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
              Operating Hours
            </span>
            <span className="h-[1px] w-8 bg-brand-gold"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">
            Our Timings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Morning */}
          <div className="bg-brand-brown/40 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
              <Sunrise className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Morning</h3>
            <p className="text-brand-cream/70 text-sm mb-4">Breakfast & Tiffin</p>
            <p className="text-3xl font-bold text-brand-gold">{siteData.timings.morning}</p>
          </div>

          {/* Lunch */}
          <div className="bg-brand-brown/60 backdrop-blur-sm border border-brand-gold/40 rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1 scale-105 shadow-2xl relative">
            <div className="absolute -top-4 bg-brand-gold text-brand-text text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Main Course
            </div>
            <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center mb-6 shadow-lg">
              <Utensils className="w-8 h-8 text-brand-text" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Lunch</h3>
            <p className="text-brand-cream/70 text-sm mb-4">South Indian Meals</p>
            <p className="text-3xl font-bold text-brand-gold">{siteData.timings.lunch}</p>
          </div>

          {/* Evening */}
          <div className="bg-brand-brown/40 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
              <Sunset className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Evening</h3>
            <p className="text-brand-cream/70 text-sm mb-4">Snacks & Dinner</p>
            <p className="text-3xl font-bold text-brand-gold">Till {siteData.timings.evening}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
