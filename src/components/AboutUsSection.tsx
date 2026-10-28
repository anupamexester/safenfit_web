import React from 'react';

export const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F6F1E7] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        
        {/* Hero Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#084D0C] uppercase">
            ABOUT US & OUR STORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2A2A2A] tracking-tight leading-tight">
            Revolutionizing meal prep with the warmth of homestyle cooking.
          </h2>
          <p className="text-base sm:text-lg text-[#2A2A2A]/80 leading-relaxed">
            safeNfit was born out of a genuine love for comforting Indian cuisine and a deep understanding of the daily challenges facing busy working professionals, students, and families.
          </p>
        </div>

        {/* Problem vs Solution - Open 2-Column Editorial (No Box Containers) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-[#084D0C]/15 pt-10">
          
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#2A2A2A]/50 uppercase tracking-wider font-mono">01 / The Modern Dilemma</span>
            <h3 className="text-2xl font-bold text-[#2A2A2A]">The Exhausting Meal Prep Cycle</h3>
            <p className="text-sm text-[#2A2A2A]/80 leading-relaxed">
              Between long office hours, grueling commutes, and family responsibilities, average people spend over <strong>15 to 20 hours every week</strong> planning groceries, shopping, chopping, cooking, and washing dishes.
            </p>
            <p className="text-sm text-[#2A2A2A]/80 leading-relaxed">
              Too often, this fatigue leads to an expensive and unhealthy cycle of greasy restaurant takeout, heavy sodium, and hidden preservatives that leave you feeling sluggish.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider font-mono">02 / The safeNfit Solution</span>
            <h3 className="text-2xl font-bold text-[#084D0C]">The Comfort of Home, Delivered Daily</h3>
            <p className="text-sm text-[#2A2A2A]/80 leading-relaxed">
              Inspired by the world-famous dabbahwala delivery tradition, safeNfit brings authentic, clean, home-cooked food straight to your table without lifting a finger.
            </p>
            <p className="text-sm text-[#2A2A2A]/80 leading-relaxed">
              Every meal is cooked from scratch each morning in our hygienic central kitchen using organic pulses, seasonal vegetables, low-oil tempering, and whole grain rotis. Macro-calculated for your wellness goals.
            </p>
          </div>

        </div>

        {/* 3 Brand Pillars - Open Columns */}
        <div className="pt-12 border-t border-[#084D0C]/15 space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider font-mono">Core Standards</span>
            <h3 className="text-2xl font-bold text-[#2A2A2A]">Option 1 — Fresh & Natural Motives</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-t border-[#084D0C]/20 pt-4">
              <h4 className="text-base font-bold text-[#084D0C]">Healthy Food</h4>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">
                Strict limit of 1 teaspoon cold-pressed mustard or olive oil per portion. Zero refined white sugar, low glycemic index grains (Ragi, Bajra, Brown Rice), and rich fiber.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#084D0C]/20 pt-4">
              <h4 className="text-base font-bold text-[#084D0C]">Variety Food</h4>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">
                Rotating daily menu featuring 50+ comforting Indian recipes. From slow-cooked yellow moong dal to South Indian red rice idlis, high-protein paneer bowls, and detox salads.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#084D0C]/20 pt-4">
              <h4 className="text-base font-bold text-[#084D0C]">Quality Food</h4>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">
                Prepared in spotless, FSSAI-certified central kitchens with daily ingredient audits. Tamper-evident thermal packaging protects every meal during transit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
