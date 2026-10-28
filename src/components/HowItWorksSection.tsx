import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onExploreMenu: () => void;
  onStartSubscription: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onExploreMenu,
  onStartSubscription
}) => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Dabbah Plan',
      description: 'Explore our rotating weekly menus. Choose a single meal or opt for our flexible 5-Day Workweek, 7-Day Full Week, or Monthly Saver subscription plans.',
      highlight: 'Save up to 30% on subscriptions'
    },
    {
      number: '02',
      title: 'Customize Your Schedule & Slots',
      description: 'Pick your preferred delivery slots—Breakfast (7 AM), Lunch (12 PM), or Dinner (7 PM). Set your start date and choose between home or office delivery.',
      highlight: 'Pause or skip days anytime'
    },
    {
      number: '03',
      title: 'Cooked Fresh Every Morning',
      description: 'Our culinary team cooks your meals fresh daily from scratch using 100% natural spices, cold-pressed oils, and zero artificial preservatives.',
      highlight: '100% homestyle nutrition'
    },
    {
      number: '04',
      title: 'Insulated Dabbah Delivery',
      description: 'Meals are packed in temperature-retaining eco-friendly dabbahs and delivered right to your doorstep on time. Just unpack, warm up, and enjoy!',
      highlight: 'Free delivery on weekly plans'
    }
  ];

  const features = [
    {
      title: 'Daily Rotating Menus',
      desc: 'Never get bored with repetitive food. We publish our rotating menus weekly with comforting regional curries, daals, and whole grains.'
    },
    {
      title: '1-Click Pause & Rollover',
      desc: 'Traveling or dining out? Pause or skip any meal on your calendar up to 10:00 PM the night before. Unused meals are rolled over.'
    },
    {
      title: 'Dietary Flexibility',
      desc: 'Choose between Pure Veg, High Protein Fitness, Low GI Diabetic Care, or Keto Low Carb boxes. Custom macro-calculated by nutritionists.'
    },
    {
      title: 'Central Kitchen Hygiene',
      desc: 'Prepared in certified, spotless commercial kitchens with strict temperature control, organic sourcing, and eco-thermal packaging.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F1E7] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#084D0C] uppercase">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A2A2A] tracking-tight">
            Simple, reliable homestyle meal delivery.
          </h2>
          <p className="text-sm sm:text-base text-[#2A2A2A]/80 leading-relaxed">
            Taking the stress out of everyday grocery shopping, meal preparation, and cleaning. Fresh, authentic Indian homestyle meals delivered seamlessly to your schedule.
          </p>
        </div>

        {/* 4 Steps - Open Editorial Columns (No Boxed Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="space-y-3 border-t border-[#084D0C]/20 pt-4">
              <span className="font-mono text-2xl font-black text-[#084D0C]">{step.number}</span>
              <h3 className="text-base font-bold text-[#2A2A2A]">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/75 leading-relaxed">{step.description}</p>
              <span className="text-[11px] font-bold text-[#084D0C] block pt-1 font-mono">
                ✓ {step.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Features - Open 4-Column Layout */}
        <div className="pt-12 border-t border-[#084D0C]/15 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider font-mono">The Homestyle Advantage</span>
            <h3 className="text-2xl font-bold text-[#2A2A2A]">Why Busy Professionals Rely on safeNfit</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="space-y-2 border-l border-[#084D0C]/20 pl-4">
                <h4 className="text-sm font-bold text-[#2A2A2A]">{f.title}</h4>
                <p className="text-xs text-[#2A2A2A]/75 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreMenu}
              className="bg-[#084D0C] text-white hover:bg-[#053308] font-bold px-6 py-3 text-xs sm:text-sm tracking-wide transition-colors flex items-center gap-2"
            >
              <span>View Daily Menu</span>
              <ArrowRight className="w-4 h-4 text-[#A7D77A]" />
            </button>
            <button
              onClick={onStartSubscription}
              className="border border-[#084D0C] text-[#084D0C] hover:bg-[#084D0C] hover:text-white font-bold px-6 py-3 text-xs sm:text-sm tracking-wide transition-colors"
            >
              Subscribe & Save 20%
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
