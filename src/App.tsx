import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { MealPlanCatalog } from './components/MealPlanCatalog';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactUsSection } from './components/ContactUsSection';
import { InteractiveMealBuilder } from './components/InteractiveMealBuilder';
import { SubscriptionSection } from './components/SubscriptionSection';
import { DeliveryCalendar } from './components/DeliveryCalendar';
import { LoyaltyStreaks } from './components/LoyaltyStreaks';
import { CustomerSupport } from './components/CustomerSupport';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';
import { Meal, CartItem } from './types';
import { CheckCircle2, Leaf, Clock, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation tabs: 'home' | 'menu' | 'how-it-works' | 'about-us' | 'contact-us' | 'builder' | 'subscriptions' | 'delivery' | 'rewards' | 'support'
  const [activeTab, setActiveTab] = useState<string>('home');

  // User auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<{
    name: string;
    phone: string;
    email: string;
    streak: number;
    coins: number;
  } | null>(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Cart & Orders State - empty until user logs in and adds meals
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [goalFinderOpen, setGoalFinderOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const streakDays = userProfile?.streak || 5;
  const fitCoins = userProfile?.coins || 380;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (meal: Meal, type: 'standard' | 'subscription') => {
    if (!isLoggedIn) {
      showToast('Please login to add meals to your bag.');
      setLoginModalOpen(true);
      return;
    }
    const price = type === 'subscription' ? meal.subscriptionPrice : meal.price;
    const newItem: CartItem = {
      id: `item-${Date.now()}`,
      type,
      meal,
      quantity: 1,
      unitPrice: price,
      totalPrice: price,
      macros: meal.macros,
    };
    setCartItems([...cartItems, newItem]);
    showToast(`Added ${meal.name} to your meal bag!`);
  };

  const handleAddCustomMealToCart = (item: CartItem) => {
    if (!isLoggedIn) {
      showToast('Please login to add your custom thali to your bag.');
      setLoginModalOpen(true);
      return;
    }
    setCartItems([...cartItems, item]);
    showToast(`Added custom thali "${item.customMealName}" to bag!`);
  };

  const handleAddSubscriptionToBag = (plan: {
    frequency: '5-Day Workweek' | '7-Day Full Week' | '20-Day Monthly' | '30-Day Transformation';
    slots: ('Breakfast' | 'Lunch' | 'Dinner')[];
    startDate: string;
    totalPrice: number;
  }) => {
    if (!isLoggedIn) {
      showToast('Please login to subscribe to a meal plan.');
      setLoginModalOpen(true);
      return;
    }
    const subItem: CartItem = {
      id: `sub-${Date.now()}`,
      type: 'subscription',
      subscriptionPlan: plan,
      quantity: 1,
      unitPrice: plan.totalPrice,
      totalPrice: plan.totalPrice,
      macros: { calories: 1200, protein: 65, carbs: 120, fat: 35, fiber: 22 },
    };
    setCartItems([...cartItems, subItem]);
    showToast(`Added ${plan.frequency} subscription package to bag!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.id === id) {
            const q = item.quantity + delta;
            if (q <= 0) return null;
            return {
              ...item,
              quantity: q,
              totalPrice: item.unitPrice * q,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  const handleRedeemCoins = (cost: number, rewardName: string) => {
    if (userProfile) {
      setUserProfile({ ...userProfile, coins: userProfile.coins - cost });
    }
    showToast(`Redeemed ${rewardName}!`);
  };

  const handleOrderSuccess = (orderId: string) => {
    setCartItems([]);
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        coins: userProfile.coins + 50,
        streak: userProfile.streak + 1
      });
    }
    showToast(`Order ${orderId} confirmed! +50 FitCoins added to your account!`);
  };

  const handleLogin = (userData: { name: string; phone: string; email: string; streak: number; coins: number }) => {
    setIsLoggedIn(true);
    setUserProfile(userData);
    showToast(`Welcome back, ${userData.name}!`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
    showToast('Signed out successfully');
  };

  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#2A2A2A] font-sans antialiased flex flex-col justify-between">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#084D0C] text-[#F6F1E7] px-5 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 border border-[#A7D77A] animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-[#A7D77A]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header with requested Menu: Home, Our Menu, How It Works, About Us, Contact Us + Right Login */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        openCart={() => setCartOpen(true)}
        openLogin={() => setLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userProfile?.name}
        streakDays={streakDays}
        fitCoins={fitCoins}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        
        {/* 1. HOME VIEW (dabbahwala.com style) */}
        {activeTab === 'home' && (
          <HomePage
            onAddToCart={handleAddToCart}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBuilder={() => {
              setActiveTab('builder');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 2. OUR MENU VIEW */}
        {activeTab === 'menu' && (
          <div className="space-y-8">
            <MealPlanCatalog
              onAddToCart={handleAddToCart}
              selectedGoal="All"
            />
          </div>
        )}

        {/* 3. HOW IT WORKS VIEW */}
        {activeTab === 'how-it-works' && (
          <HowItWorksSection
            onExploreMenu={() => {
              setActiveTab('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartSubscription={() => {
              setActiveTab('subscriptions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 4. ABOUT US VIEW */}
        {activeTab === 'about-us' && (
          <AboutUsSection />
        )}

        {/* 5. CONTACT US VIEW */}
        {activeTab === 'contact-us' && (
          <ContactUsSection />
        )}

        {/* Secondary Views (Accessible from CTAs, builder buttons, footer) */}
        {activeTab === 'builder' && (
          <InteractiveMealBuilder
            onAddCustomMealToCart={handleAddCustomMealToCart}
          />
        )}

        {(activeTab === 'subscriptions' || activeTab === 'meal-plans') && (
          <SubscriptionSection
            onAddSubscriptionToBag={handleAddSubscriptionToBag}
          />
        )}

        {activeTab === 'delivery' && (
          <DeliveryCalendar />
        )}

        {activeTab === 'rewards' && (
          <LoyaltyStreaks
            fitCoins={fitCoins}
            streakDays={streakDays}
            onRedeemCoins={handleRedeemCoins}
            onQuickReorder={() => {
              setActiveTab('menu');
            }}
          />
        )}

        {activeTab === 'support' && (
          <CustomerSupport />
        )}

      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        isLoggedIn={isLoggedIn}
        user={userProfile}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        fitCoins={fitCoins}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Footer built accordingly */}
      <Footer setActiveTab={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

    </div>
  );
}
