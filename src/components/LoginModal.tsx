import React, { useState } from 'react';
import { X, Lock, Phone, User, CheckCircle2, Sparkles, ArrowRight, LogOut, Flame, Coins } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  user: { name: string; phone: string; email: string; streak: number; coins: number } | null;
  onLogin: (userData: { name: string; phone: string; email: string; streak: number; coins: number }) => void;
  onLogout: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  user,
  onLogin,
  onLogout
}) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [name, setName] = useState('Anupam Sharma');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      name: name || 'Valued Customer',
      phone: phone || '+91 98765 43210',
      email: 'customer@safenfit.com',
      streak: 5,
      coins: 380
    });
    setStep('phone');
    onClose();
  };

  const handleQuickDemoLogin = () => {
    onLogin({
      name: 'Anupam Sharma',
      phone: '+91 98765 43210',
      email: 'anupam@safenfit.com',
      streak: 6,
      coins: 430
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 text-left border-2 border-[#084D0C] shadow-2xl relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#2A2A2A] hover:text-[#084D0C] font-bold text-xl p-1"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoggedIn && user ? (
          /* User Profile View */
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-[#084D0C]/15 pb-4">
              <div className="w-12 h-12 rounded-full bg-[#084D0C] text-[#A7D77A] font-extrabold text-xl flex items-center justify-center">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">{user.name}</h3>
                <p className="text-xs text-[#2A2A2A]/70">{user.phone} · {user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-[#EBF6E4] p-3 rounded-xl border border-[#A7D77A]">
                <span className="text-[10px] font-bold text-[#084D0C] uppercase flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#084D0C]" /> Healthy Streak
                </span>
                <p className="text-xl font-extrabold text-[#084D0C] font-mono mt-1">{user.streak} Days</p>
              </div>
              <div className="bg-[#EBF6E4] p-3 rounded-xl border border-[#A7D77A]">
                <span className="text-[10px] font-bold text-[#084D0C] uppercase flex items-center justify-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-[#084D0C]" /> FitCoins
                </span>
                <p className="text-xl font-extrabold text-[#084D0C] font-mono mt-1">{user.coins}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#2A2A2A]">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F1E7]">
                <span>Active Subscription:</span>
                <strong className="text-[#084D0C]">7-Day Full Week Dabbah</strong>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F1E7]">
                <span>Preferred Slot:</span>
                <strong>12:00 PM - 01:30 PM (Lunch)</strong>
              </div>
            </div>

            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full bg-red-50 hover:bg-red-100 text-red-700 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 border border-red-200"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        ) : (
          /* Login Form */
          <div className="space-y-5">
            <div className="flex flex-col items-start gap-3">
              <img 
                src="/assets/aistudio/image_09f3bc92.png" 
                alt="safeNfit - Healthy Food. Healthy You." 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedPublic) {
                    target.dataset.triedPublic = 'true';
                    target.src = '/public/assets/aistudio/image_09f3bc92.png';
                  }
                }}
              />
              <div>
                <span className="text-[10px] font-extrabold uppercase text-[#084D0C] tracking-wider">Welcome Back</span>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Sign In to Your Account</h3>
                <p className="text-xs text-[#2A2A2A]/70 mt-1">
                  Manage your daily dabbah deliveries, pause meals, and track FitCoins rewards.
                </p>
              </div>
            </div>

            {step === 'phone' ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#084D0C] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl pl-9 pr-3 py-2.5 text-xs font-semibold text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                      placeholder="e.g. Anupam Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Mobile Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#084D0C] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl pl-9 pr-3 py-2.5 text-xs font-semibold text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Continue with OTP</span>
                  <ArrowRight className="w-4 h-4 text-[#A7D77A]" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Enter 4-Digit OTP sent to {phone}</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#084D0C] absolute left-3 top-3" />
                    <input
                      type="text"
                      maxLength={4}
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl pl-9 pr-3 py-2.5 text-sm font-mono tracking-widest text-center font-bold text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                      placeholder="1234"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#A7D77A]" />
                  Verify & Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  className="text-xs text-[#084D0C] font-bold hover:underline block mx-auto"
                >
                  Change phone number
                </button>
              </form>
            )}

            {/* Quick 1-Click Demo Login */}
            <div className="pt-3 border-t border-[#084D0C]/10 text-center">
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full bg-[#EBF6E4] hover:bg-[#A7D77A]/40 text-[#084D0C] font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 border border-[#A7D77A]"
              >
                <Sparkles className="w-4 h-4" /> 1-Click Demo Member Login
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
