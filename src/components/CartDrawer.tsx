import React, { useState } from 'react';
import { CartItem } from '../types';
import { ShoppingBag, Trash2, Plus, Minus, Tag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
  fitCoins: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  fitCoins,
}) => {
  const [promoCode, setPromoCode] = useState('SAFENFIT20');
  const [promoApplied, setPromoApplied] = useState(true);
  const [useFitCoins, setUseFitCoins] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const promoDiscount = promoApplied ? Math.round(rawSubtotal * 0.2) : 0;
  const coinsDiscount = useFitCoins ? Math.min(fitCoins, 100) : 0;
  const finalTotal = Math.max(0, rawSubtotal - promoDiscount - coinsDiscount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="bg-[#F6F1E7] w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-[#084D0C]/20 text-left">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#084D0C]/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#2A2A2A]">
            <ShoppingBag className="w-5 h-5 text-[#084D0C]" />
            <h3 className="text-lg font-bold">Your Meal Bag ({cartItems.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#2A2A2A] hover:text-[#084D0C] p-1 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#084D0C]/30 mx-auto" />
              <p className="text-sm font-bold text-[#2A2A2A]">Your meal bag is currently empty</p>
              <p className="text-xs text-[#2A2A2A]/60">Explore our clean thali packages or build your custom meal box!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl border border-[#084D0C]/15 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#2A2A2A]">
                      {item.type === 'standard' && item.meal?.name}
                      {item.type === 'custom' && item.customMealName}
                      {item.type === 'subscription' && `${item.subscriptionPlan?.frequency} Package`}
                    </h4>

                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-400 hover:text-red-600 p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {item.type === 'custom' && item.customIngredients && (
                  <div className="text-[10px] text-[#2A2A2A]/80 bg-[#EBF6E4] p-2 rounded">
                    <strong>Includes:</strong> {item.customIngredients.map(i => i.name).join(', ')}
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-[#084D0C]/10 pt-2">
                  <div className="flex items-center gap-2 bg-[#F6F1E7] rounded-lg p-1 border border-[#084D0C]/15">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 text-[#2A2A2A] hover:text-[#084D0C]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 text-[#2A2A2A] hover:text-[#084D0C]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="text-sm font-bold text-[#2A2A2A] font-mono tabular-nums">
                    ₹{item.totalPrice}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-[#084D0C]/15 space-y-4">
            
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-4 h-4 text-[#084D0C] absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl pl-9 pr-3 py-2 text-xs font-bold uppercase text-[#2A2A2A]"
                  placeholder="Promo Code"
                />
              </div>
              <button
                onClick={() => setPromoApplied(!promoApplied)}
                className="bg-[#084D0C] text-white px-3 py-2 rounded-xl text-xs font-bold"
              >
                {promoApplied ? 'Applied' : 'Apply'}
              </button>
            </div>

            {fitCoins > 0 && (
              <label className="flex items-center gap-2 text-xs font-bold text-[#084D0C] cursor-pointer">
                <input
                  type="checkbox"
                  checked={useFitCoins}
                  onChange={() => setUseFitCoins(!useFitCoins)}
                  className="rounded text-[#084D0C] focus:ring-0"
                />
                <span>Redeem 100 FitCoins for ₹100 discount</span>
              </label>
            )}

            <div className="space-y-1.5 text-xs text-[#2A2A2A]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono">₹{rawSubtotal}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-[#084D0C] font-bold">
                  <span>Promo Discount (20% OFF):</span>
                  <span className="font-mono">- ₹{promoDiscount}</span>
                </div>
              )}
              {coinsDiscount > 0 && (
                <div className="flex justify-between text-[#084D0C] font-bold">
                  <span>FitCoins Discount:</span>
                  <span className="font-mono">- ₹{coinsDiscount}</span>
                </div>
              )}
              <div className="flex justify-between text-[#084D0C] font-bold">
                <span>Thermal Delivery & Taxes:</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#2A2A2A] border-t border-[#084D0C]/10 pt-2">
                <span>Total Amount:</span>
                <span className="font-mono tabular-nums text-lg text-[#084D0C]">₹{finalTotal}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#A7D77A]" />
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
