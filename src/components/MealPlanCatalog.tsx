import React, { useState } from 'react';
import { Meal, DietaryTag } from '../types';
import { MOCK_MEALS } from '../data/mockData';
import { Clock, Star, Plus, Check, Info, Filter, Utensils, Leaf } from 'lucide-react';

interface MealPlanCatalogProps {
  onAddToCart: (meal: Meal, type: 'standard' | 'subscription') => void;
  selectedGoal?: string;
}

export const MealPlanCatalog: React.FC<MealPlanCatalogProps> = ({ onAddToCart, selectedGoal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [inspectMeal, setInspectMeal] = useState<Meal | null>(null);

  const categories: string[] = ['All', 'Thalis', 'Fitness Boxes', 'Tiffin & Breakfast', 'Detox & Cleanse'];
  const dietaryFilters: string[] = ['All', 'High Protein', 'Keto', 'Pure Veg', 'Low Carb', 'Vegan', 'Diabetic Friendly'];

  const filteredMeals = MOCK_MEALS.filter((meal) => {
    const matchesCategory = activeCategory === 'All' || meal.category === activeCategory;
    const matchesTag = selectedTag === 'All' || meal.dietaryTags.includes(selectedTag as DietaryTag);
    return matchesCategory && matchesTag;
  });

  return (
    <section id="meals-catalog" className="py-12 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-[#084D0C]">
            <Utensils className="w-4 h-4 text-[#084D0C]" />
            <span>NUTRITIONIST CURATED MENU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
            Discover Your Ideal Meal Package
          </h2>
          <p className="text-sm text-[#2A2A2A]/75 max-w-2xl">
            Choose from clean artisanal thalis, high-protein fitness bowls, and digestive cleansing packages. Every item is macro-calculated and prepared fresh.
          </p>
        </div>

        {/* Filter Bar Row */}
        <div className="space-y-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#084D0C]/15">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#084D0C] text-white shadow-xs'
                    : 'bg-white text-[#2A2A2A] hover:bg-[#EBF6E4] border border-[#084D0C]/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-[#2A2A2A]">
            <span className="font-bold text-[#084D0C] flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#084D0C]" /> Diet Filter:
            </span>
            {dietaryFilters.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedTag === tag
                    ? 'bg-[#A7D77A] text-[#084D0C]'
                    : 'bg-white border border-[#084D0C]/15 text-[#2A2A2A] hover:border-[#084D0C]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* Meal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-2xl border border-[#084D0C]/15 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge Area */}
                <div className="relative aspect-4/3 bg-[#EBF6E4] overflow-hidden">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 flex flex-col justify-between p-4 text-white">
                    <div className="flex items-center justify-between">
                      {meal.badge ? (
                        <span className="bg-[#084D0C] text-[#A7D77A] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                          <Leaf className="w-3 h-3 fill-[#A7D77A]" /> {meal.badge}
                        </span>
                      ) : <span />}
                      <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#A7D77A]" /> {meal.prepTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="flex items-center gap-1 text-amber-300 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-300" /> {meal.rating} ({meal.reviewCount})
                      </span>
                      <span className="bg-[#A7D77A] text-[#084D0C] px-2 py-0.5 rounded text-[10px] font-extrabold">
                        Fresh Daily
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3 text-left">
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#084D0C] font-bold">
                    <span>{meal.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{meal.dietaryTags.slice(0, 2).join(' · ')}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-[#2A2A2A] group-hover:text-[#084D0C] transition-colors">
                      {meal.name}
                    </h3>
                    <p className="text-xs text-[#2A2A2A]/70 line-clamp-2 mt-1">
                      {meal.subtitle}
                    </p>
                  </div>

                  {/* Contents Teaser */}
                  <div className="text-xs text-[#2A2A2A]/80 space-y-1">
                    <p className="font-bold text-[#084D0C] text-[11px] uppercase tracking-wider">Includes:</p>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-[#2A2A2A]/80 truncate">
                      {meal.contents.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="truncate">{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 space-y-2 border-t border-[#084D0C]/10 mt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#2A2A2A]/60 block text-left">Single Order</span>
                    <span className="text-lg font-bold text-[#2A2A2A] font-mono tabular-nums">₹{meal.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#084D0C] font-bold block uppercase">Subscription Rate</span>
                    <span className="text-lg font-bold text-[#084D0C] font-mono tabular-nums">₹{meal.subscriptionPrice} <span className="text-xs font-normal text-[#2A2A2A]/70">/meal</span></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setInspectMeal(meal)}
                    className="w-full bg-[#ECE5D8] hover:bg-[#D8C3A5] text-[#2A2A2A] text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5 text-[#084D0C]" /> Details
                  </button>
                  <button
                    onClick={() => onAddToCart(meal, 'standard')}
                    className="w-full bg-[#084D0C] hover:bg-[#053308] text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <Plus className="w-4 h-4 text-[#A7D77A]" /> Add to Order
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Inspect Meal Detail Modal */}
      {inspectMeal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 text-left border-2 border-[#084D0C]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-[#084D0C] uppercase tracking-wider">{inspectMeal.category}</span>
                <h3 className="text-xl font-bold text-[#2A2A2A]">{inspectMeal.name}</h3>
                <p className="text-xs text-[#2A2A2A]/70">{inspectMeal.subtitle}</p>
              </div>
              <button
                onClick={() => setInspectMeal(null)}
                className="text-[#2A2A2A] hover:text-[#084D0C] font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#2A2A2A] leading-relaxed">
              {inspectMeal.description}
            </p>

            {/* Contents List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#084D0C] uppercase">Full Thali Box Contents</h4>
              <ul className="space-y-1 text-xs text-[#2A2A2A]">
                {inspectMeal.contents.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#084D0C]" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs space-y-1 text-[#2A2A2A]/80 pt-2 border-t border-[#084D0C]/15">
              <p><strong>Ingredients:</strong> {inspectMeal.ingredients.join(', ')}</p>
              <p><strong>Allergen Info:</strong> {inspectMeal.allergens.length > 0 ? inspectMeal.allergens.join(', ') : 'None'}</p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  onAddToCart(inspectMeal, 'standard');
                  setInspectMeal(null);
                }}
                className="flex-1 bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3 rounded-xl transition-colors text-xs"
              >
                Add One-Time (₹{inspectMeal.price})
              </button>
              <button
                onClick={() => {
                  onAddToCart(inspectMeal, 'subscription');
                  setInspectMeal(null);
                }}
                className="flex-1 bg-[#A7D77A] hover:bg-[#96CB66] text-[#084D0C] font-bold py-3 rounded-xl transition-colors text-xs"
              >
                Subscribe (₹{inspectMeal.subscriptionPrice}/meal)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
