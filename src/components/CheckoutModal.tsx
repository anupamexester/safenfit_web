import React, { useState } from 'react';
import { CartItem } from '../types';
import { CheckCircle2, MapPin, Clock, CreditCard, Smartphone, Banknote, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess
}) => {
  const [name, setName] = useState('Anupam Sharma');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [address, setAddress] = useState('742 Park Avenue, Suite 4B, Tech Park');
  const [deliverySlot, setDeliverySlot] = useState('12:00 PM - 01:30 PM');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD'>('UPI');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `SNF-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setConfirmedOrder(orderId);
      onOrderSuccess(orderId);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 text-left border border-[#084D0C]/20 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#084D0C]">Guided Checkout</span>
            <h3 className="text-xl font-bold text-[#2A2A2A]">Delivery & Payment Confirmation</h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#2A2A2A] hover:text-[#084D0C] font-bold text-lg p-1"
          >
            ✕
          </button>
        </div>

        {confirmedOrder ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-[#084D0C] text-[#A7D77A] rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-[#2A2A2A]">Order Confirmed!</h3>
              <p className="text-sm font-extrabold text-[#084D0C]">Order ID: {confirmedOrder}</p>
            </div>
            <p className="text-xs text-[#2A2A2A]/80 max-w-md mx-auto leading-relaxed">
              Your safeNfit meal box is being prepared in our hygienic central kitchen with fresh organic ingredients and low-oil techniques.
            </p>

            <div className="bg-[#EBF6E4] p-4 rounded-xl border border-[#A7D77A] text-xs space-y-2 text-left">
              <p className="flex items-center gap-2 font-bold text-[#084D0C]">
                <Clock className="w-4 h-4 text-[#084D0C]" /> Delivery Slot: {deliverySlot}
              </p>
              <p className="flex items-center gap-2 text-[#2A2A2A]">
                <MapPin className="w-4 h-4 text-[#084D0C]" /> {address}
              </p>
            </div>

            <button
              onClick={onClose}
              className="bg-[#084D0C] text-white font-bold px-8 py-3 rounded-xl text-xs transition-colors shadow-xs"
            >
              Back to Home & Track Order
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-5">
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#084D0C] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#084D0C]" /> Delivery Address & Contact
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2A2A] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2A2A] mb-1">Mobile Phone</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#2A2A2A] mb-1">Street Address / Office Unit</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#084D0C] uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#084D0C]" /> Preferred Delivery Slot
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {['07:00 AM - 08:30 AM', '12:00 PM - 01:30 PM', '07:00 PM - 08:30 PM'].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setDeliverySlot(slot)}
                    className={`p-2.5 rounded-xl border text-[11px] font-bold transition-all ${
                      deliverySlot === slot
                        ? 'bg-[#EBF6E4] border-[#084D0C] text-[#084D0C]'
                        : 'bg-[#F6F1E7] border-[#084D0C]/15 text-[#2A2A2A]'
                    }`}
                  >
                    {slot.split('-')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">Payment Method</h4>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                    paymentMethod === 'UPI'
                      ? 'bg-[#084D0C] text-white border-[#084D0C]'
                      : 'bg-[#F6F1E7] text-[#2A2A2A] border-[#084D0C]/20'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-[#A7D77A]" /> UPI
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('Card')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                    paymentMethod === 'Card'
                      ? 'bg-[#084D0C] text-white border-[#084D0C]'
                      : 'bg-[#F6F1E7] text-[#2A2A2A] border-[#084D0C]/20'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#A7D77A]" /> Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                    paymentMethod === 'COD'
                      ? 'bg-[#084D0C] text-white border-[#084D0C]'
                      : 'bg-[#F6F1E7] text-[#2A2A2A] border-[#084D0C]/20'
                  }`}
                >
                  <Banknote className="w-4 h-4 text-[#A7D77A]" /> COD
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-[#084D0C]/10 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-[#2A2A2A]">Total Amount Payable:</span>
                <span className="text-xl font-extrabold text-[#084D0C] font-mono tabular-nums">₹{totalAmount}</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? 'Confirming Order...' : 'Confirm & Place Order'}
                <ArrowRight className="w-4 h-4 text-[#A7D77A]" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
