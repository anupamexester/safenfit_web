import React from 'react';
import { Meal } from '../types';
import { ArrowRight, Check, CookingPot, Sparkles, PackageCheck, CalendarRange } from 'lucide-react';

interface HomePageProps {
  onAddToCart: (meal: Meal, type: 'standard' | 'subscription') => void;
  onNavigateTab: (tab: string) => void;
  onOpenBuilder: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateTab
}) => {
  return (
    <div className="text-left bg-[#F6F1E7] text-[#2A2A2A]">
      
      {/* ============================================================ */}
      {/* 1. HOME BANNER AND HERO (Open, Simplistic, No Boxed Cards) */}
      {/* ============================================================ */}
      <section className="pt-10 md:pt-16 pb-16 md:pb-24 border-b border-[#084D0C]/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          
          {/* Hero Main Grid: Text on Left, Transparent Platter on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2A2A2A] tracking-tight leading-[1.12]">
                Fresh, Healthy Meals. Delivered Daily.
              </h1>

              <p className="text-base sm:text-lg text-[#2A2A2A]/80 max-w-2xl leading-relaxed">
                Delivering daily set meal subscriptions for breakfast, lunch, and dinner from combos or curated choices — freshly prepared, nutritionally balanced, and delivered hot to your doorstep.
              </p>

              {/* Minimal, unboxed flat action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigateTab('menu')}
                  className="bg-[#084D0C] text-white hover:bg-[#053308] font-bold px-7 py-3.5 text-xs sm:text-sm tracking-wide transition-colors flex items-center gap-2"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#A7D77A]" />
                </button>

                <button
                  onClick={() => onNavigateTab('how-it-works')}
                  className="border border-[#084D0C] text-[#084D0C] hover:bg-[#084D0C] hover:text-white font-bold px-7 py-3.5 text-xs sm:text-sm tracking-wide transition-colors"
                >
                  How to Place Order
                </button>
              </div>
            </div>

            {/* Right: Transparent Platter positioned freely aligned to right corner (No box / No container) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <img
                src="/assets/alt_hero_platter.png"
                alt="Fresh wholesome Indian meal platter with bowls, curries, basmati rice, and warm naan"
                className="w-full max-w-[480px] lg:max-w-none lg:w-[130%] lg:-mr-14 xl:-mr-20 object-contain select-none pointer-events-none drop-shadow-2xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedPublic) {
                    target.dataset.triedPublic = 'true';
                    target.src = '/public/assets/alt_hero_platter.png';
                  }
                }}
              />
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHY SUBSCRIBE? (Dish on Left Extreme Corner, 2x2 Cards on Right) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 border-b border-[#084D0C]/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Extreme Corner: Dish over hot plate in transparent bg floating freely */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start">
              <img
                src="/assets/alt_why_subscribe_dish.png"
                alt="Cooked fresh homestyle Indian dish on rustic wooden hot plate"
                className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-none lg:w-[125%] lg:-ml-14 xl:-ml-20 object-contain select-none pointer-events-none drop-shadow-xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedPublic) {
                    target.dataset.triedPublic = 'true';
                    target.src = '/public/assets/alt_why_subscribe_dish.png';
                  }
                }}
              />
            </div>

            {/* Right: Heading + 2 Cards in 2 Rows (Up & Down) */}
            <div className="lg:col-span-7 space-y-8">
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#C66B45] tracking-tight">
                Why Subscribe?
              </h2>

              {/* 2 Cards in 2 Rows: 2 up, 2 down (Title & Icon only, no description) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Card 1: Fresh from Our Kitchen */}
                <div className="bg-white rounded-2xl border border-[#084D0C]/15 p-6 sm:p-7 flex flex-col justify-between min-h-[140px] shadow-xs hover:border-[#084D0C]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF6E4] flex items-center justify-center text-[#084D0C]">
                    <CookingPot className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2A2A2A] mt-4">
                    Fresh from Our Kitchen
                  </h3>
                </div>

                {/* Card 2: Thoughtfully Prepared */}
                <div className="bg-white rounded-2xl border border-[#084D0C]/15 p-6 sm:p-7 flex flex-col justify-between min-h-[140px] shadow-xs hover:border-[#084D0C]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF6E4] flex items-center justify-center text-[#084D0C]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2A2A2A] mt-4">
                    Thoughtfully Prepared
                  </h3>
                </div>

                {/* Card 3: Sustainable Delivery */}
                <div className="bg-white rounded-2xl border border-[#084D0C]/15 p-6 sm:p-7 flex flex-col justify-between min-h-[140px] shadow-xs hover:border-[#084D0C]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF6E4] flex items-center justify-center text-[#084D0C]">
                    <PackageCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2A2A2A] mt-4">
                    Sustainable Delivery
                  </h3>
                </div>

                {/* Card 4: Set Meal Plans */}
                <div className="bg-white rounded-2xl border border-[#084D0C]/15 p-6 sm:p-7 flex flex-col justify-between min-h-[140px] shadow-xs hover:border-[#084D0C]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF6E4] flex items-center justify-center text-[#084D0C]">
                    <CalendarRange className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2A2A2A] mt-4">
                    Set Meal Plans
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. HOW TO PLACE ORDER (Clean Linear Walkthrough, No Boxes)  */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 border-b border-[#084D0C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#084D0C] uppercase">
              HOW TO PLACE ORDER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A2A2A] tracking-tight">
              Four simple steps to your daily warm dabbah.
            </h2>
            <p className="text-sm sm:text-base text-[#2A2A2A]/80 leading-relaxed">
              Ordering is quick and effortless. Choose single orders or set your subscription once and let fresh food arrive automatically.
            </p>
          </div>

          {/* 4 Steps Row with Simple Number Headers (Open, No Card Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-3 border-l-2 border-[#084D0C] pl-4">
              <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">Step 1</span>
              <h3 className="text-base font-bold text-[#2A2A2A]">Choose a Plan</h3>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">
                Order a single dabbah or select a 5-day workweek, 7-day full week, or 20-day monthly saver subscription plan.
              </p>
            </div>

            <div className="space-y-3 border-l-2 border-[#084D0C] pl-4">
              <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">Step 2</span>
              <h3 className="text-base font-bold text-[#2A2A2A]">Set Your Schedule</h3>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">
                Pick your delivery window (Morning, Lunch 12 PM, or Dinner 7 PM) and enter your home or office address.
              </p>
            </div>

            <div className="space-y-3 border-l-2 border-[#084D0C] pl-4">
              <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">Step 3</span>
              <h3 className="text-base font-bold text-[#2A2A2A]">Central Kitchen Cooking</h3>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">
                Our culinary team prepares your meal fresh from scratch every morning using whole grain flours, organic dals, and cold-pressed oils.
              </p>
            </div>

            <div className="space-y-3 border-l-2 border-[#084D0C] pl-4">
              <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">Step 4</span>
              <h3 className="text-base font-bold text-[#2A2A2A]">Doorstep Delivery</h3>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">
                Arrives hot and fresh in reusable thermal dabbahs right on schedule. Unpack, enjoy comfort food, and leave cleanup behind.
              </p>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigateTab('menu')}
              className="bg-[#084D0C] text-white hover:bg-[#053308] font-bold px-6 py-3 text-xs sm:text-sm tracking-wide transition-colors flex items-center gap-2"
            >
              <span>View Today's Menu</span>
              <ArrowRight className="w-4 h-4 text-[#A7D77A]" />
            </button>
            <button
              onClick={() => onNavigateTab('how-it-works')}
              className="border border-[#084D0C]/30 text-[#2A2A2A] hover:border-[#084D0C] font-semibold px-6 py-3 text-xs sm:text-sm tracking-wide transition-colors"
            >
              Read Detailed Delivery Policy
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TESTIMONIALS (Clean Editorial Quotes, No Shadow Cards)   */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 border-b border-[#084D0C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#084D0C] uppercase">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A2A2A] tracking-tight">
              Loved by working professionals, fitness enthusiasts, and families.
            </h2>
            <p className="text-sm sm:text-base text-[#2A2A2A]/80 leading-relaxed">
              Real feedback from diners who rely on safeNfit for their daily nutrition.
            </p>
          </div>

          {/* 3 Open Editorial Testimonials separated by hairlines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4">
            
            <div className="space-y-4 border-t border-[#084D0C]/20 pt-6">
              <p className="text-sm sm:text-base text-[#2A2A2A]/90 leading-relaxed italic">
                “Living away from home, safeNfit has been a genuine lifesaver. The yellow moong dal and ragi rotis taste like mom's cooking. No oily restaurant heaviness, just pure comfort.”
              </p>
              <div>
                <strong className="text-sm font-bold text-[#084D0C] block">Pooja Sharma</strong>
                <span className="text-xs text-[#2A2A2A]/60">Senior Software Engineer · 7-Day Subscriber</span>
              </div>
            </div>

            <div className="space-y-4 border-t border-[#084D0C]/20 pt-6">
              <p className="text-sm sm:text-base text-[#2A2A2A]/90 leading-relaxed italic">
                “The high-protein keto dabbah delivers 35g+ clean protein every single lunch. It always arrives warm and punctual at my office, saving me 2 hours every evening.”
              </p>
              <div>
                <strong className="text-sm font-bold text-[#084D0C] block">Vikram Patel</strong>
                <span className="text-xs text-[#2A2A2A]/60">Fitness Consultant · Monthly Subscriber</span>
              </div>
            </div>

            <div className="space-y-4 border-t border-[#084D0C]/20 pt-6">
              <p className="text-sm sm:text-base text-[#2A2A2A]/90 leading-relaxed italic">
                “Being able to pause days with one click whenever I travel for business is fantastic. Zero wasted meals, zero penalty, and their WhatsApp support is super fast.”
              </p>
              <div>
                <strong className="text-sm font-bold text-[#084D0C] block">Ananya Deshmukh</strong>
                <span className="text-xs text-[#2A2A2A]/60">Product Designer · Weekly Subscriber</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
