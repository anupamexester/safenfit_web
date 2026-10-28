import React, { useState } from 'react';
import { Sparkles, Utensils, Calendar, ShieldCheck, ArrowRight, HeartPulse, Check, Leaf, Heart, Layers } from 'lucide-react';

interface HeroSectionProps {
  onExploreMeals: () => void;
  onOpenBuilder: () => void;
  onSelectGoal: (goal: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMeals,
  onOpenBuilder,
  onSelectGoal,
}) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('Weight Loss');

  const goals = [
    { id: 'Weight Loss', label: 'Weight Loss & Calorie Deficit', desc: '400-500 kcal, high fiber & low GI', icon: '🔥' },
    { id: 'Lean Muscle', label: 'Lean Muscle & High Protein', desc: '35g+ protein per thali box', icon: '💪' },
    { id: 'Keto Fit', label: 'Keto & Low Carb', desc: '<15g carbs, healthy fats', icon: '🥑' },
    { id: 'Everyday Balanced', label: 'Everyday Wholesome Thali', desc: 'Gut-friendly home-style thali', icon: '🥗' },
    { id: 'Diabetic Care', label: 'Diabetic Friendly & Low GI', desc: 'Doctor curated complex grains', icon: '🩺' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F1E7] via-[#EBF6E4]/50 to-[#F6F1E7] pt-8 pb-16 border-b border-[#084D0C]/10">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A7D77A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#084D0C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Brand Mission Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#084D0C] text-[#F6F1E7] text-xs font-bold shadow-xs">
            <Leaf className="w-3.5 h-3.5 text-[#A7D77A] fill-[#A7D77A]" />
            <span>Option 1 — Fresh & Natural: <span className="text-[#A7D77A]">Clean, Healthy & Trustworthy Food</span></span>
          </div>
        </div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Food-Led Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6E4] border border-[#A7D77A] text-[#084D0C] text-xs font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-[#084D0C]" />
              HEALTHY FOOD. HEALTHY YOU.
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A2A2A] tracking-tight leading-tight text-balance">
              Clean, Fresh <span className="text-[#084D0C]">Artisanal Thalis</span> & Custom Meal Boxes
            </h1>

            {/* Value Proposition Subtitle */}
            <p className="text-base sm:text-lg text-[#2A2A2A]/80 max-w-2xl leading-relaxed">
              Ideal for a balanced food lifestyle. Enjoy chef-crafted North Indian Thalis, high-protein fitness bowls, and fermented South Indian tiffins made with zero preservatives and fresh natural ingredients.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMeals}
                className="bg-[#084D0C] hover:bg-[#053308] text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm sm:text-base group"
              >
                <Utensils className="w-5 h-5 text-[#A7D77A]" />
                Explore Meal Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#A7D77A]" />
              </button>

              <button
                onClick={onOpenBuilder}
                className="bg-white hover:bg-[#EBF6E4] text-[#084D0C] font-bold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-sm sm:text-base border-2 border-[#084D0C] shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#084D0C]" />
                Build Custom Thali
              </button>
            </div>

            {/* Brand Motive & Pillars specified in Palette graphic */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#084D0C]/15">
              
              <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-[#A7D77A]/50">
                <div className="w-10 h-10 rounded-full bg-[#EBF6E4] flex items-center justify-center text-[#084D0C] shrink-0">
                  <Leaf className="w-5 h-5 fill-[#084D0C]" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#084D0C]">Healthy Food</h4>
                  <p className="text-[10px] text-[#2A2A2A]/70">Low GI & 100% Clean</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-[#A7D77A]/50">
                <div className="w-10 h-10 rounded-full bg-[#ECE5D8] flex items-center justify-center text-[#084D0C] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#084D0C]">Variety Food</h4>
                  <p className="text-[10px] text-[#2A2A2A]/70">Thalis & Macro Boxes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-[#A7D77A]/50">
                <div className="w-10 h-10 rounded-full bg-[#EBF6E4] flex items-center justify-center text-[#084D0C] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#084D0C]">Quality Food</h4>
                  <p className="text-[10px] text-[#2A2A2A]/70">Doctor Approved GI</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Goal Selector Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#084D0C] shadow-lg space-y-5 text-left">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">Step 1: Goal Finder</span>
                  <h3 className="text-xl font-bold text-[#2A2A2A]">What is your daily food goal?</h3>
                </div>
                <div className="bg-[#EBF6E4] p-2 rounded-lg text-[#084D0C]">
                  <HeartPulse className="w-5 h-5" />
                </div>
              </div>

              {/* Goal Choice Options */}
              <div className="space-y-2.5">
                {goals.map((goal) => {
                  const isSelected = selectedGoal === goal.id;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => {
                        setSelectedGoal(goal.id);
                        onSelectGoal(goal.id);
                      }}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#EBF6E4] border-[#084D0C] shadow-xs'
                          : 'bg-[#F6F1E7]/60 border-[#084D0C]/15 hover:bg-[#EBF6E4]/40'
                      }`}
                    >
                      <span className="text-xl shrink-0 mt-0.5">{goal.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${isSelected ? 'text-[#084D0C]' : 'text-[#2A2A2A]'}`}>
                            {goal.label}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] bg-[#084D0C] text-[#A7D77A] px-2 py-0.5 rounded font-bold">Selected</span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#2A2A2A]/70 truncate mt-0.5">{goal.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Goal Submission Action */}
              <button
                onClick={onExploreMeals}
                className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-xs"
              >
                <span>View Recommended {selectedGoal} Meals</span>
                <ArrowRight className="w-4 h-4 text-[#A7D77A]" />
              </button>

            </div>
          </div>

        </div>

        {/* 4-Column KPI Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#084D0C]/15">
          <div className="bg-white p-4 rounded-xl border border-[#084D0C]/15 text-center space-y-1">
            <p className="text-2xl font-extrabold text-[#084D0C] font-mono tabular-nums">4.9 ★</p>
            <p className="text-xs text-[#2A2A2A]/70 font-semibold">12,000+ Satisfied Diners</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#084D0C]/15 text-center space-y-1">
            <p className="text-2xl font-extrabold text-[#084D0C] font-mono tabular-nums">100%</p>
            <p className="text-xs text-[#2A2A2A]/70 font-semibold">Fresh Cooked Daily</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#084D0C]/15 text-center space-y-1">
            <p className="text-2xl font-extrabold text-[#084D0C] font-mono tabular-nums">35g+</p>
            <p className="text-xs text-[#2A2A2A]/70 font-semibold">Protein per Fitness Box</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#084D0C]/15 text-center space-y-1">
            <p className="text-2xl font-extrabold text-[#084D0C] font-mono tabular-nums">0%</p>
            <p className="text-xs text-[#2A2A2A]/70 font-semibold">Preservatives or White Sugar</p>
          </div>
        </div>

      </div>
    </section>
  );
};
