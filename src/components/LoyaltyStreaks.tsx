import React, { useState } from 'react';
import { Flame, Coins, Award, Gift, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface LoyaltyStreaksProps {
  fitCoins: number;
  streakDays: number;
  onRedeemCoins: (cost: number, rewardName: string) => void;
  onQuickReorder: () => void;
}

export const LoyaltyStreaks: React.FC<LoyaltyStreaksProps> = ({
  fitCoins,
  streakDays,
  onRedeemCoins,
  onQuickReorder
}) => {
  const [redeemedAlert, setRedeemedAlert] = useState<string | null>(null);

  const rewards = [
    { id: 'rw-1', name: 'Free Cold-Pressed Detox Juice', cost: 200, desc: 'Fresh 250ml ABC or Green Juice with your next meal' },
    { id: 'rw-2', name: 'Extra Tandoori Cottage Cheese Add-on', cost: 250, desc: '100g extra paneer protein added to your thali' },
    { id: 'rw-3', name: '₹150 Off Subscription Discount Voucher', cost: 400, desc: 'Flat ₹150 instant discount on weekly or monthly renewal' },
    { id: 'rw-4', name: 'Free Dessert: Low-Sugar Oats Kheer', cost: 180, desc: 'Guilt-free stevia sweetened warm oats kheer' },
  ];

  const handleRedeem = (cost: number, name: string) => {
    if (fitCoins >= cost) {
      onRedeemCoins(cost, name);
      setRedeemedAlert(`Successfully redeemed ${name}! Applied to your next order.`);
      setTimeout(() => setRedeemedAlert(null), 4000);
    } else {
      alert(`You need ${cost - fitCoins} more FitCoins to redeem this reward. Keep your streak going!`);
    }
  };

  return (
    <section id="loyalty-streaks" className="py-12 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#084D0C] text-[#A7D77A] text-xs font-bold">
            <Award className="w-3.5 h-3.5" /> REWARDS & HEALTHY MEAL STREAKS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
            Eat Healthy, Maintain Streaks & Earn FitCoins
          </h2>
          <p className="text-sm text-[#2A2A2A]/80 max-w-2xl">
            Every consecutive day you enjoy a safeNfit meal, your streak grows. Unlock bonus FitCoins and redeem them for free juices, extra protein, or cash discounts!
          </p>
        </div>

        {/* Top Summary Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
          
          {/* Streak Card */}
          <div className="bg-gradient-to-br from-[#084D0C] to-[#053308] text-white p-6 rounded-2xl border border-[#084D0C] shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#A7D77A] uppercase tracking-wider">Current Healthy Streak</span>
              <Flame className="w-6 h-6 text-[#A7D77A] fill-[#A7D77A] animate-pulse" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono tabular-nums">{streakDays}</span>
              <span className="text-base text-[#A7D77A]">Consecutive Days 🔥</span>
            </div>
            <p className="text-xs text-[#A7D77A]/90">
              Only 2 days left to hit your 7-Day Streak Goal and earn <strong>+200 bonus FitCoins</strong>!
            </p>
          </div>

          {/* FitCoins Wallet */}
          <div className="bg-white p-6 rounded-2xl border-2 border-[#084D0C] shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">FitCoins Wallet</span>
              <Coins className="w-6 h-6 text-[#084D0C]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-[#2A2A2A] font-mono tabular-nums">{fitCoins}</span>
              <span className="text-base font-bold text-[#084D0C]">FitCoins</span>
            </div>
            <p className="text-xs text-[#2A2A2A]/80">
              10 FitCoins = ₹1 value. Redeem instantly on any thali box or subscription!
            </p>
          </div>

          {/* Quick Reorder Box */}
          <div className="bg-[#EBF6E4] p-6 rounded-2xl border border-[#A7D77A] flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-[#084D0C]" /> 1-Click Quick Reorder
              </span>
              <h4 className="text-sm font-bold text-[#2A2A2A] mt-1">Royal North Indian Fitness Thali</h4>
              <p className="text-xs text-[#2A2A2A]/70">Reorder your last favorite thali box in 1 tap!</p>
            </div>
            <button
              onClick={onQuickReorder}
              className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A7D77A]" /> Quick Reorder (₹249)
            </button>
          </div>

        </div>

        {/* Alert notification */}
        {redeemedAlert && (
          <div className="mb-6 p-4 rounded-xl bg-[#084D0C] text-white font-bold text-xs flex items-center gap-2 shadow-sm animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-[#A7D77A]" />
            <span>{redeemedAlert}</span>
          </div>
        )}

        {/* Rewards Store */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#084D0C]/15 space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-[#2A2A2A]">Redeem FitCoins Store</h3>
              <p className="text-xs text-[#2A2A2A]/70">Tap any item below to redeem your coins for instant perks</p>
            </div>
            <span className="text-xs bg-[#EBF6E4] text-[#084D0C] font-bold px-3 py-1 rounded-full">
              Your Balance: {fitCoins} Coins
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((rw) => {
              const canAfford = fitCoins >= rw.cost;
              return (
                <div
                  key={rw.id}
                  className="p-4 rounded-xl border border-[#084D0C]/15 bg-[#F6F1E7]/50 flex items-center justify-between gap-4 hover:border-[#084D0C] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-[#084D0C]" />
                      <h4 className="text-xs font-bold text-[#2A2A2A]">{rw.name}</h4>
                    </div>
                    <p className="text-[11px] text-[#2A2A2A]/70 leading-snug">{rw.desc}</p>
                    <span className="text-xs font-extrabold text-[#084D0C] font-mono block">{rw.cost} FitCoins</span>
                  </div>

                  <button
                    onClick={() => handleRedeem(rw.cost, rw.name)}
                    className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
                      canAfford
                        ? 'bg-[#084D0C] hover:bg-[#053308] text-white shadow-xs'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {canAfford ? 'Redeem' : 'Need More Coins'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
