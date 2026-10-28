import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#084D0C] text-[#F6F1E7] pt-12 md:pt-16 pb-10 border-t border-[#084D0C] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        
        {/* Main Links Grid - Clean, open, uncluttered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Brand & Wordmark (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => setActiveTab('home')}
              className="block focus:outline-none"
              aria-label="safeNfit Home"
            >
              <img 
                src="/assets/aistudio/image_09f3bc92.png" 
                alt="safeNfit - Healthy Food. Healthy You." 
                className="h-16 sm:h-20 md:h-22 w-auto max-w-[280px] sm:max-w-[340px] object-contain bg-white px-3 py-1.5 shadow-2xs"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedPublic) {
                    target.dataset.triedPublic = 'true';
                    target.src = '/public/assets/aistudio/image_09f3bc92.png';
                  }
                }}
              />
            </button>

            <p className="text-xs text-[#F6F1E7]/80 leading-relaxed max-w-sm">
              Fresh homestyle Indian meal delivery to your doorstep. Clean, healthy, and trustworthy food crafted for balanced living.
            </p>

            <div className="text-[11px] font-bold text-[#A7D77A] tracking-wider uppercase font-mono">
              HEALTHY FOOD. HEALTHY YOU.
            </div>
          </div>

          {/* Concise Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#A7D77A] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#F6F1E7]/80 font-medium">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('menu')} className="hover:text-white transition-colors">
                  Our Menu
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about-us')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact-us')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Dabbahs & Plans (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#A7D77A] uppercase tracking-wider">
              Meal Dabbahs
            </h4>
            <ul className="space-y-2 text-xs text-[#F6F1E7]/80 font-medium">
              <li>
                <button onClick={() => setActiveTab('menu')} className="hover:text-white transition-colors">
                  North Indian Thali
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('menu')} className="hover:text-white transition-colors">
                  Keto Power Box
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('menu')} className="hover:text-white transition-colors">
                  South Indian Tiffin
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('subscriptions')} className="hover:text-white transition-colors">
                  Weekly Subscriptions
                </button>
              </li>
            </ul>
          </div>

          {/* Kitchen Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#A7D77A] uppercase tracking-wider">
              Kitchen & Support
            </h4>
            
            <div className="space-y-2 text-xs text-[#F6F1E7]/80">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A7D77A] shrink-0" />
                <span className="font-bold text-white">844-432-2224</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A7D77A] shrink-0" />
                <span>support@safenfit.com</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A7D77A] shrink-0 mt-0.5" />
                <span>4015 Holcomb Bridge Road, Suite 120, Norcross, GA 30071</span>
              </p>
              <p className="text-[11px] text-[#A7D77A] pt-1">
                Mon-Sun Delivery: 7 AM · 12 PM · 7 PM
              </p>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6F1E7]/50 gap-4">
          <p>© {new Date().getFullYear()} safeNfit Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Refund Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
