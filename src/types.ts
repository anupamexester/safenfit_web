export type DietaryTag = 'High Protein' | 'Low Carb' | 'Keto' | 'Vegan' | 'Gluten-Free' | 'Pure Veg' | 'Diabetic Friendly';

export type MealCategory = 'Thalis' | 'Fitness Boxes' | 'Tiffin & Breakfast' | 'Detox & Cleanse' | 'Family & Sharing';

export interface Macros {
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fat: number; // in grams
  fiber: number; // in grams
}

export interface Meal {
  id: string;
  name: string;
  subtitle: string;
  category: MealCategory;
  price: number;
  subscriptionPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  dietaryTags: DietaryTag[];
  macros: Macros;
  prepTime: string;
  description: string;
  contents: string[];
  ingredients: string[];
  allergens: string[];
}

export interface CustomIngredient {
  id: string;
  name: string;
  category: 'base' | 'main' | 'side' | 'beverage';
  price: number;
  macros: Macros;
  dietaryTags: DietaryTag[];
  portionSize: string;
  image?: string;
}

export interface CartItem {
  id: string;
  type: 'standard' | 'custom' | 'subscription';
  meal?: Meal;
  customMealName?: string;
  customIngredients?: CustomIngredient[];
  subscriptionPlan?: {
    frequency: '5-Day Workweek' | '7-Day Full Week' | '20-Day Monthly' | '30-Day Transformation';
    slots: ('Breakfast' | 'Lunch' | 'Dinner')[];
    startDate: string;
  };
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  customNotes?: string;
  macros: Macros;
}

export type DeliverySlotTime = '07:00 AM - 08:30 AM' | '12:00 PM - 01:30 PM' | '07:00 PM - 08:30 PM';

export interface CalendarDayMeal {
  date: string; // YYYY-MM-DD
  status: 'scheduled' | 'delivered' | 'paused' | 'skipped';
  mealName: string;
  slotTime: DeliverySlotTime;
  address: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: 'Subscription' | 'Delivery' | 'Dietary / Food Quality' | 'Billing';
  status: 'Open' | 'In Progress' | 'Resolved';
  date: string;
  message: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Subscription' | 'Delivery' | 'Dietary' | 'Account & Coins';
}
