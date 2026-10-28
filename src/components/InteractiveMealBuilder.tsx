import React, { useState } from 'react';
import { BUILDER_INGREDIENTS } from '../data/mockData';
import { CustomIngredient, CartItem, Macros } from '../types';
import { Sparkles, Check, RefreshCw, ShoppingBag, Leaf } from 'lucide-react';

interface InteractiveMealBuilderProps {
  onAddCustomMealToCart: (item: CartItem) => void;
}

export const InteractiveMealBuilder: React.FC<InteractiveMealBuilderProps> = ({ onAddCustomMealToCart }) => {
  const [mealName, setMealName] = useState('My Custom Fresh Thali');
  const [selectedIngredients, setSelectedIngredients] = useState<CustomIngredient[]>([
    BUILDER_INGREDIENTS[0], // Ragi Rotis
    BUILDER_INGREDIENTS[4], // Tandoori Paneer
    BUILDER_INGREDIENTS[8], // Cucumber Raita
  ]);

  const toggleIngredient = (ingredient: CustomIngredient) => {
    const exists = selectedIngredients.some((i) => i.id === ingredient.id);
    if (exists) {
      setSelectedIngredients(selectedIngredients.filter((i) => i.id !== ingredient.id));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const totalMacros: Macros = selectedIngredients.reduce(
    (acc, curr) => ({
      calories: acc.calories + curr.macros.calories,
      protein: acc.protein + curr.macros.protein,
      carbs: acc.carbs + curr.macros.carbs,
      fat: acc.fat + curr.macros.fat,
      fiber: acc.fiber + curr.macros.fiber,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );

  const totalPrice = selectedIngredients.reduce((acc, curr) => acc + curr.price, 0);

  const bases = BUILDER_INGREDIENTS.filter((i) => i.category === 'base');
  const mains = BUILDER_INGREDIENTS.filter((i) => i.category === 'main');
  const sides = BUILDER_INGREDIENTS.filter((i) => i.category === 'side');
  const beverages = BUILDER_INGREDIENTS.filter((i) => i.category === 'beverage');

  const handleAddCustomToBag = () => {
    if (selectedIngredients.length === 0) return;
    const item: CartItem = {
      id: `custom-${Date.now()}`,
      type: 'custom',
      customMealName: mealName || 'Custom Fresh Thali Box',
      customIngredients: selectedIngredients,
      quantity: 1,
      unitPrice: totalPrice,
      totalPrice: totalPrice,
      macros: totalMacros,
    };
    onAddCustomMealToCart(item);
  };

  return (
    <section id="custom-builder" className="py-12 bg-gradient-to-b from-[#F6F1E7] to-[#EBF6E4]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-left space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#084D0C] text-[#A7D77A] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" /> INTERACTIVE THALI & MEAL BUILDER
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
            Craft Your Custom Macro Meal Box
          </h2>
          <p className="text-sm text-[#2A2A2A]/80 max-w-2xl">
            Mix and match clean bases, protein curries, sides, and gut-friendly cold-pressed drinks. Live macro calculator updates every portion in real-time.
          </p>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Ingredient Selector Steps */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Custom Name Field */}
            <div className="bg-white p-4 rounded-2xl border border-[#084D0C]/20 flex items-center gap-3">
              <label htmlFor="customMealNameInput" className="text-xs font-bold text-[#084D0C] whitespace-nowrap">Name Your Thali:</label>
              <input
                id="customMealNameInput"
                type="text"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
                className="flex-1 bg-[#F6F1E7] border border-[#084D0C]/20 rounded-lg px-3 py-1.5 text-sm font-bold text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                placeholder="e.g. My High Protein Friday Thali"
              />
            </div>

            {/* STEP 1: BASES */}
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-4">
              <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#2A2A2A]">1. Select Your Base Grains</h3>
                  <p className="text-xs text-[#2A2A2A]/70">Low GI millets, multigrain rotis, or keto cauliflower rice</p>
                </div>
                <span className="text-xs bg-[#EBF6E4] text-[#084D0C] font-bold px-2.5 py-1 rounded-md">Step 1 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bases.map((item) => {
                  const isSelected = selectedIngredients.some((i) => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIngredient(item)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${
                        isSelected
                          ? 'bg-[#EBF6E4] border-[#084D0C] shadow-xs'
                          : 'bg-[#F6F1E7]/50 border-[#084D0C]/15 hover:bg-[#EBF6E4]/40'
                      }`}
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#2A2A2A]">{item.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#084D0C] shrink-0" />}
                        </div>
                        <p className="text-[11px] text-[#2A2A2A]/70">{item.portionSize} · ₹{item.price}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded shrink-0 ${isSelected ? 'bg-[#084D0C] text-white' : 'bg-[#EBF6E4] text-[#084D0C]'}`}>
                        {isSelected ? 'Added' : '+ Add'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: MAINS */}
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-4">
              <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#2A2A2A]">2. Select Main Curries</h3>
                  <p className="text-xs text-[#2A2A2A]/70">Low-oil grilled cottage cheese, dal tadkas, or tofu makhani</p>
                </div>
                <span className="text-xs bg-[#EBF6E4] text-[#084D0C] font-bold px-2.5 py-1 rounded-md">Step 2 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mains.map((item) => {
                  const isSelected = selectedIngredients.some((i) => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIngredient(item)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${
                        isSelected
                          ? 'bg-[#EBF6E4] border-[#084D0C] shadow-xs'
                          : 'bg-[#F6F1E7]/50 border-[#084D0C]/15 hover:bg-[#EBF6E4]/40'
                      }`}
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#2A2A2A]">{item.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#084D0C] shrink-0" />}
                        </div>
                        <p className="text-[11px] text-[#2A2A2A]/70">{item.portionSize} · ₹{item.price}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded shrink-0 ${isSelected ? 'bg-[#084D0C] text-white' : 'bg-[#EBF6E4] text-[#084D0C]'}`}>
                        {isSelected ? 'Added' : '+ Add'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: SIDES */}
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-4">
              <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#2A2A2A]">3. Add Fiber Sides & Salads</h3>
                  <p className="text-xs text-[#2A2A2A]/70">Fresh cucumber mint raita, steamed broccoli, or rainbow salad</p>
                </div>
                <span className="text-xs bg-[#EBF6E4] text-[#084D0C] font-bold px-2.5 py-1 rounded-md">Step 3 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sides.map((item) => {
                  const isSelected = selectedIngredients.some((i) => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIngredient(item)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${
                        isSelected
                          ? 'bg-[#EBF6E4] border-[#084D0C] shadow-xs'
                          : 'bg-[#F6F1E7]/50 border-[#084D0C]/15 hover:bg-[#EBF6E4]/40'
                      }`}
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#2A2A2A]">{item.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#084D0C] shrink-0" />}
                        </div>
                        <p className="text-[11px] text-[#2A2A2A]/70">{item.portionSize} · ₹{item.price}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded shrink-0 ${isSelected ? 'bg-[#084D0C] text-white' : 'bg-[#EBF6E4] text-[#084D0C]'}`}>
                        {isSelected ? 'Added' : '+ Add'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: BEVERAGES */}
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-4">
              <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#2A2A2A]">4. Choose Gut-Healthy Drink (Optional)</h3>
                  <p className="text-xs text-[#2A2A2A]/70">Jeera Mint buttermilk or Cold-Pressed Detox Green Juice</p>
                </div>
                <span className="text-xs bg-[#EBF6E4] text-[#084D0C] font-bold px-2.5 py-1 rounded-md">Step 4 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {beverages.map((item) => {
                  const isSelected = selectedIngredients.some((i) => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIngredient(item)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${
                        isSelected
                          ? 'bg-[#EBF6E4] border-[#084D0C] shadow-xs'
                          : 'bg-[#F6F1E7]/50 border-[#084D0C]/15 hover:bg-[#EBF6E4]/40'
                      }`}
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#2A2A2A]">{item.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#084D0C] shrink-0" />}
                        </div>
                        <p className="text-[11px] text-[#2A2A2A]/70">{item.portionSize} · ₹{item.price}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded shrink-0 ${isSelected ? 'bg-[#084D0C] text-white' : 'bg-[#EBF6E4] text-[#084D0C]'}`}>
                        {isSelected ? 'Added' : '+ Add'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Persistent Order Summary Sidebar */}
          <div className="lg:col-span-4 sticky top-24 space-y-6 text-left">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#084D0C] shadow-md space-y-5">
              
              <div className="border-b border-[#084D0C]/15 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#084D0C]">Persistent Summary</span>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">{mealName || 'Custom Thali'}</h3>
                </div>
                <button
                  onClick={() => setSelectedIngredients([])}
                  className="text-xs text-[#2A2A2A]/60 hover:text-[#084D0C] flex items-center gap-1 font-bold"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Chosen Ingredients */}
              <div className="space-y-2 min-h-[120px]">
                {selectedIngredients.length === 0 ? (
                  <p className="text-xs text-[#2A2A2A]/50 italic text-center py-6">
                    No items selected yet. Tap any item on the left to add it to your custom thali box.
                  </p>
                ) : (
                  selectedIngredients.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs bg-[#F6F1E7] p-2.5 rounded-lg">
                      <div className="min-w-0 pr-2">
                        <span className="font-bold text-[#2A2A2A] block truncate">{item.name}</span>
                        <span className="text-[11px] text-[#2A2A2A]/70">{item.portionSize}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-bold text-[#2A2A2A]">₹{item.price}</span>
                        <button
                          onClick={() => toggleIngredient(item)}
                          className="text-red-500 hover:text-red-700 font-bold px-1"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Total Price & Add to Bag */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#2A2A2A]/80 font-bold">Custom Thali Total:</span>
                  <span className="text-2xl font-extrabold text-[#084D0C] font-mono tabular-nums">₹{totalPrice}</span>
                </div>

                <button
                  onClick={handleAddCustomToBag}
                  disabled={selectedIngredients.length === 0}
                  className={`w-full font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm ${
                    selectedIngredients.length > 0
                      ? 'bg-[#084D0C] hover:bg-[#053308] text-white shadow-md'
                      : 'bg-[#A7D77A]/40 text-[#2A2A2A]/50 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 text-[#A7D77A]" />
                  Add Custom Thali to Bag
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
