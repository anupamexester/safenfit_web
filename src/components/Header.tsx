import React, { useState } from 'react';
import { ShoppingBag, User, LogIn, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openLogin: () => void;
  isLoggedIn: boolean;
  userName?: string;
  streakDays: number;
  fitCoins: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openLogin,
  isLoggedIn,
  userName,
  streakDays,
  fitCoins
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation menu: Home, Meal Plans, Our Menu, How It Works, About Us, Contact Us
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'meal-plans', label: 'Meal Plans' },
    { id: 'menu', label: 'Our Menu' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F1E7]/95 backdrop-blur-md border-b border-[#084D0C]/15 transition-all">
      {/* Top promocode ticker removed as requested */}

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-between gap-8">
        
        {/* Zone 1: Official Logo - Sized for high readability of wordmark and captions */}
        <div className="flex items-center gap-3 shrink-0 py-1">
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#084D0C]"
            aria-label="safeNfit Home"
          >
            <img 
              src="/assets/aistudio/image_09f3bc92.png" 
              alt="safeNfit - Healthy Food. Healthy You." 
              className="h-16 sm:h-20 md:h-24 w-auto max-w-[280px] sm:max-w-[360px] object-contain transition-transform hover:scale-[1.02]"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedPublic) {
                  target.dataset.triedPublic = 'true';
                  target.src = '/public/assets/aistudio/image_09f3bc92.png';
                }
              }}
            />
          </button>
        </div>

        {/* Zone 2: Navigation Links (Home, Our Menu, How It Works, About Us, Contact Us) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#2A2A2A]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative tracking-wide ${
                activeTab === link.id
                  ? 'text-[#084D0C] font-bold'
                  : 'text-[#2A2A2A]/80 hover:text-[#084D0C]'
              }`}
            >
              {link.label}
              {activeTab === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#084D0C]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Right Side (Login Button - and Bag ONLY post-login) */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Member streak indicator if logged in */}
          {isLoggedIn && (
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#084D0C]">
              <span>{streakDays}d Streak</span>
              <span className="text-[#2A2A2A]/30">/</span>
              <span>{fitCoins} Coins</span>
            </div>
          )}

          {/* Login Button on Right Side */}
          <button
            onClick={openLogin}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
              isLoggedIn
                ? 'bg-transparent text-[#084D0C] border border-[#084D0C] hover:bg-[#084D0C] hover:text-white'
                : 'bg-[#084D0C] text-white hover:bg-[#053308]'
            }`}
          >
            {isLoggedIn ? (
              <>
                <User className="w-4 h-4" />
                <span className="truncate max-w-[100px]">{userName?.split(' ')[0] || 'Account'}</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 text-[#A7D77A]" />
                <span>Login</span>
              </>
            )}
          </button>

          {/* Meal Bag Trigger - POST LOGIN ONLY */}
          {isLoggedIn && (
            <button
              onClick={openCart}
              className="relative p-2 text-[#084D0C] hover:text-[#053308] transition-colors flex items-center gap-1.5 font-bold text-xs sm:text-sm animate-fadeIn"
              aria-label="View Order Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="bg-[#084D0C] text-[#A7D77A] text-[10px] font-extrabold w-4 h-4 flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#084D0C] p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F1E7] border-b border-[#084D0C]/20 px-6 py-4 space-y-3 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-[#084D0C]/10">
            <button
              onClick={() => {
                openLogin();
                setMobileMenuOpen(false);
              }}
              className="text-xs bg-[#084D0C] text-white px-3 py-1.5 font-bold flex items-center gap-1"
            >
              <LogIn className="w-3.5 h-3.5 text-[#A7D77A]" />
              {isLoggedIn ? `Account (${userName})` : 'Login'}
            </button>
            {isLoggedIn && (
              <button
                onClick={() => {
                  openCart();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold text-[#084D0C] flex items-center gap-1"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Bag ({cartCount})</span>
              </button>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 text-sm font-semibold transition-colors ${
                  activeTab === link.id
                    ? 'text-[#084D0C] font-bold'
                    : 'text-[#2A2A2A] hover:text-[#084D0C]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
