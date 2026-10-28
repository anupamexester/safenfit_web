import React, { useState } from 'react';
import { Check, Calendar, ArrowRight, ShieldCheck, RefreshCw, Layers, Sparkles } from 'lucide-react';

interface SubscriptionSectionProps {
  onAddSubscriptionToBag: (plan: {
    frequency: '5-Day Workweek' | '7-Day Full Week' | '20-Day Monthly' | '30-Day Transformation';
    slots: ('Breakfast' | 'Lunch' | 'Dinner')[];
    startDate: string;
    totalPrice: number;
  }) => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ onAddSubscriptionToBag }) => {
  const [selectedFrequency, setSelectedFrequency] = useState<'5-Day Workweek' | '7-Day Full Week' | '20-Day Monthly' | '30-Day Transformation'>('7-Day Full Week');
  const [selectedSlots, setSelectedSlots] = useState<('Breakfast' | 'Lunch' | 'Dinner')[]>(['Lunch', 'Dinner']);
  const [startDate, setStartDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );

  const frequencies = [
    { id: '5-Day Workweek', days: 5, discount: '15% OFF', desc: 'Monday to Friday lunch/dinner box for busy office routines' },
    { id: '7-Day Full Week', days: 7, discount: '20% OFF', desc: 'Complete 7-day wellness commitment with full weekend coverage' },
    { id: '20-Day Monthly', days: 20, discount: '25% OFF', desc: 'Workday monthly saver package with rolled-over unused days' },
    { id: '30-Day Transformation', days: 30, discount: '30% OFF', desc: 'Maximum savings & total lifestyle transformation plan' },
  ] as const;

  const mealSlots = [
    { id: 'Breakfast', name: 'Morning Tiffin', time: '07:00 AM - 08:30 AM', pricePerMeal: 149 },
    { id: 'Lunch', name: 'Wholesome Lunch Thali', time: '12:00 PM - 01:30 PM', pricePerMeal: 199 },
    { id: 'Dinner', name: 'Light Evening Dinner Box', time: '07:00 PM - 08:30 PM', pricePerMeal: 189 },
  ] as const;

  const toggleSlot = (slotId: 'Breakfast' | 'Lunch' | 'Dinner') => {
    if (selectedSlots.includes(slotId)) {
      if (selectedSlots.length > 1) {
        setSelectedSlots(selectedSlots.filter((s) => s !== slotId));
      }
    } else {
      setSelectedSlots([...selectedSlots, slotId]);
    }
  };

  const getFreqMultiplier = () => {
    switch (selectedFrequency) {
      case '5-Day Workweek': return 5;
      case '7-Day Full Week': return 7;
      case '20-Day Monthly': return 20;
      case '30-Day Transformation': return 30;
    }
  };

  const basePricePerDay = selectedSlots.reduce((sum, slotId) => {
    const slotObj = mealSlots.find((s) => s.id === slotId);
    return sum + (slotObj ? slotObj.pricePerMeal : 0);
  }, 0);

  const daysCount = getFreqMultiplier();
  const rawSubtotal = basePricePerDay * daysCount;

  const getDiscountPercent = () => {
    switch (selectedFrequency) {
      case '5-Day Workweek': return 0.15;
      case '7-Day Full Week': return 0.20;
      case '20-Day Monthly': return 0.25;
      case '30-Day Transformation': return 0.30;
    }
  };

  const discountAmount = Math.round(rawSubtotal * getDiscountPercent());
  const finalSubscriptionPrice = rawSubtotal - discountAmount;

  const handleSubscribeAction = () => {
    onAddSubscriptionToBag({
      frequency: selectedFrequency,
      slots: selectedSlots,
      startDate,
      totalPrice: finalSubscriptionPrice,
    });
  };

  return (
    <section id="subscriptions-section" className="py-12 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#084D0C] text-[#A7D77A] text-xs font-bold">
            <Layers className="w-3.5 h-3.5" /> FLEXIBLE MEAL SUBSCRIPTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
            Automate Your Healthy Daily Eating
          </h2>
          <p className="text-sm text-[#2A2A2A]/80 max-w-2xl">
            Choose your weekly or monthly frequency, select your meal slots, and let safeNfit handle cooking and daily deliveries. Pause, skip, or modify meals anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configurator Steps */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* STEP 1: FREQUENCY */}
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-4">
              <h3 className="text-base font-bold text-[#2A2A2A]">1. Choose Plan Duration & Frequency</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {frequencies.map((freq) => {
                  const isSelected = selectedFrequency === freq.id;
                  return (
                    <button
                      key={freq.id}
                      onClick={() => setSelectedFrequency(freq.id)}
                      className={`p-4 rounded-xl border text-left transition-all space-y-2 ${
                        isSelected
                          ? 'bg-[#EBF6E4] border-[#084D0C] shadow-xs'
                          : 'bg-[#F6F1E7]/60 border-[#084D0C]/15 hover:bg-[#EBF6E4]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#2A2A2A]">{freq.id}</span>
                        <span className="bg-[#084D0C] text-[#A7D77A] text-[10px] font-extrabold px-2 py-0.5 rounded">
                          {freq.discount}
                        </span>
                      </div>
                      <p className="text-xs text-[#2A2A2A]/70">{freq.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: MEAL SLOTS */}
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-4">
              <h3 className="text-base font-bold text-[#2A2A2A]">2. Select Daily Meal Packages</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {mealSlots.map((slot) => {
                  const isSelected = selectedSlots.includes(slot.id);
                  return (
                    <button
                      key={slot.id}
                      onClick={() => toggleSlot(slot.id)}
                      className={`p-4 rounded-xl border text-left transition-all space-y-2 ${
                        isSelected
                          ? 'bg-[#EBF6E4] border-[#084D0C] shadow-xs'
                          : 'bg-[#F6F1E7]/60 border-[#084D0C]/15 hover:bg-[#EBF6E4]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#2A2A2A]">{slot.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#084D0C]" />}
                      </div>
                      <span className="text-[10px] text-[#2A2A2A]/60 block">{slot.time}</span>
                      <strong className="text-xs text-[#084D0C] font-mono block">₹{slot.pricePerMeal} / meal</strong>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: START DATE */}
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-3">
              <h3 className="text-base font-bold text-[#2A2A2A]">3. Subscription Start Date</h3>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#084D0C]" />
                <input
                  type="date"
                  value={startDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-4 py-2 text-xs font-bold text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                />
                <span className="text-xs text-[#2A2A2A]/70">First fresh meal will be delivered on this day.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#2A2A2A]">
              <div className="bg-white p-3 rounded-xl border border-[#084D0C]/15 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#084D0C] shrink-0" />
                <span>Rollover unused days anytime</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#084D0C]/15 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#084D0C] shrink-0" />
                <span>Zero cancellation penalty</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#084D0C]/15 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#084D0C] shrink-0" />
                <span>Earn 2x FitCoins on subscriptions</span>
              </div>
            </div>

          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-4 sticky top-24 text-left">
            <div className="bg-[#084D0C] text-white p-6 rounded-2xl border border-[#084D0C] shadow-lg space-y-6">
              
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#A7D77A]">Subscription Summary</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedFrequency}</h3>
                <p className="text-xs text-[#A7D77A]">{selectedSlots.join(' + ')} Package ({daysCount} Days)</p>
              </div>

              <div className="space-y-2 text-xs text-white/90 border-t border-b border-white/10 py-4">
                <div className="flex justify-between">
                  <span>Regular Subtotal ({daysCount} days):</span>
                  <span className="font-mono text-white">₹{rawSubtotal}</span>
                </div>
                <div className="flex justify-between text-[#A7D77A] font-bold">
                  <span>Subscription Savings ({(getDiscountPercent() * 100)}% OFF):</span>
                  <span className="font-mono text-[#A7D77A]">- ₹{discountAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Eco-Packaging & Thermal Delivery:</span>
                  <span className="text-[#A7D77A] font-bold">FREE</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#A7D77A]">Total Payable:</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-white font-mono tabular-nums">₹{finalSubscriptionPrice}</span>
                    <span className="text-[10px] text-[#A7D77A] block">~ ₹{Math.round(finalSubscriptionPrice / (daysCount * selectedSlots.length))}/meal</span>
                  </div>
                </div>

                <button
                  onClick={handleSubscribeAction}
                  className="w-full bg-[#A7D77A] hover:bg-[#96CB66] text-[#084D0C] font-extrabold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <span>Start {selectedFrequency}</span>
                  <ArrowRight className="w-4 h-4 text-[#084D0C]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
