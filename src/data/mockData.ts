import { Meal, CustomIngredient, FAQItem } from '../types';

export const MOCK_MEALS: Meal[] = [
  {
    id: 'thali-01',
    name: 'Royal North Indian Fitness Thali',
    subtitle: 'Balanced protein & low-oil wholesome feast',
    category: 'Thalis',
    price: 249,
    subscriptionPrice: 199,
    rating: 4.9,
    reviewCount: 384,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
    badge: 'Bestseller',
    dietaryTags: ['High Protein', 'Pure Veg'],
    macros: { calories: 580, protein: 32, carbs: 64, fat: 14, fiber: 12 },
    prepTime: '20 mins',
    description: 'A traditional Indian comfort thali crafted for fitness enthusiasts. Made with 100% whole grain attas, cold-pressed oils, and minimal clarified ghee.',
    contents: [
      '2 Multigrain Ragi Rotis',
      'Paneer Tikka in Low-Oil Tomato Gravy (120g)',
      'Yellow Moong Dal Tadka with Cumin',
      'Organic Brown Basmati Rice',
      'Cucumber Mint Sprouts Raita',
      'Green Salad with Roasted Seeds'
    ],
    ingredients: ['Ragi', 'Whole Wheat', 'Paneer', 'Yellow Moong', 'Brown Rice', 'Curd', 'Cucumber', 'Cold-pressed Mustard Oil', 'Cumin'],
    allergens: ['Dairy', 'Gluten']
  },
  {
    id: 'box-02',
    name: 'Keto Power Muscle Box',
    subtitle: 'Ultra low carb, high healthy fats & clean protein',
    category: 'Fitness Boxes',
    price: 299,
    subscriptionPrice: 249,
    rating: 4.8,
    reviewCount: 219,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    badge: 'Low Carb',
    dietaryTags: ['Keto', 'Low Carb', 'High Protein', 'Gluten-Free'],
    macros: { calories: 520, protein: 42, carbs: 12, fat: 32, fiber: 9 },
    prepTime: '15 mins',
    description: 'Designed specifically for keto & lean muscle building goals. Loaded with healthy fats from Hass avocado, organic paneer or grilled tofu, and roasted nuts.',
    contents: [
      'Herb-Grilled Cottage Cheese or Tofu Steaks',
      'Half Fresh Hass Avocado',
      'Sautéed Cauliflower Rice with Herbs',
      'Steamed Broccoli & Zucchini Medley',
      'Toasted Pumpkin & Flaxseeds'
    ],
    ingredients: ['Paneer/Tofu', 'Avocado', 'Cauliflower', 'Broccoli', 'Zucchini', 'Extra Virgin Olive Oil', 'Pumpkin Seeds'],
    allergens: ['Dairy (optional Tofu sub available)', 'Tree Nuts']
  },
  {
    id: 'tiffin-03',
    name: 'Heritage South Indian Tiffin Box',
    subtitle: 'Fermented red rice idlis & oats dosa with sambar',
    category: 'Tiffin & Breakfast',
    price: 189,
    subscriptionPrice: 149,
    rating: 4.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    badge: 'Gut Friendly',
    dietaryTags: ['Pure Veg', 'Gluten-Free', 'Low Carb'],
    macros: { calories: 380, protein: 18, carbs: 54, fat: 8, fiber: 11 },
    prepTime: '15 mins',
    description: 'Gut-nourishing fermented breakfast made with probiotic red rice and fiber-rich oats. Served with drumstick vegetable sambar and fresh coconut mint chutney.',
    contents: [
      '3 Steamed Red Rice & Urad Idlis',
      '1 Crisp Mini Oats & Methi Dosa',
      'Slow-cooked Vegetable Sambar',
      'Fresh Roasted Coconut & Mint Chutney'
    ],
    ingredients: ['Red Rice', 'Urad Dal', 'Oats', 'Methi', 'Coconut', 'Drumstick', 'Pumpkin', 'Curry Leaves'],
    allergens: []
  },
  {
    id: 'cleanse-04',
    name: 'Detox Rainbow Superfood Cleanse',
    subtitle: 'Vibrant antioxidant salad with cold-pressed juice',
    category: 'Detox & Cleanse',
    price: 269,
    subscriptionPrice: 219,
    rating: 4.7,
    reviewCount: 164,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    badge: 'Detox',
    dietaryTags: ['Vegan', 'Gluten-Free', 'Low Carb'],
    macros: { calories: 340, protein: 16, carbs: 38, fat: 12, fiber: 14 },
    prepTime: '10 mins',
    description: 'Light, revitalizing bowl packed with raw enzymes, phytonutrients, and clean plant protein. Comes with a 250ml Cold-Pressed ABC (Apple Beet Carrot) juice.',
    contents: [
      'Rainbow Salad (Purple Cabbage, Edamame, Carrots, Beetroot)',
      'Sprouted Moong & Roasted Chickpea Crunch',
      'Pomegranate Seeds & Toasted Walnuts',
      'Lemon Mint Extra Virgin Olive Dressing',
      '250ml Fresh Cold-Pressed ABC Juice'
    ],
    ingredients: ['Purple Cabbage', 'Edamame', 'Sprouted Moong', 'Chickpeas', 'Beetroot', 'Walnuts', 'Pomegranate', 'Lemon'],
    allergens: ['Tree Nuts', 'Soy']
  },
  {
    id: 'thali-05',
    name: 'Diabetic-Friendly Whole Grain Thali',
    subtitle: 'Low Glycemic Index thali curated by nutritionists',
    category: 'Thalis',
    price: 259,
    subscriptionPrice: 209,
    rating: 4.9,
    reviewCount: 290,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    badge: 'Doctor Approved',
    dietaryTags: ['Diabetic Friendly', 'Pure Veg', 'High Protein'],
    macros: { calories: 450, protein: 28, carbs: 48, fat: 10, fiber: 16 },
    prepTime: '20 mins',
    description: 'Formulated with low GI grains like Bajra and Jowar to manage blood sugar spikes while providing steady energy and satiety throughout the day.',
    contents: [
      '2 Bajra & Methi Rotis',
      'Soya Nugget & Capsicum Dry Bhaji',
      'High-Fiber Black Chana Curry',
      'Steamed Quinoa Basmati Mix',
      'Flaxseed Flax-Dahi Raita'
    ],
    ingredients: ['Bajra Flour', 'Jowar', 'Soya Chunks', 'Black Chana', 'Quinoa', 'Curd', 'Flaxseed', 'Capsicum'],
    allergens: ['Soy', 'Dairy']
  },
  {
    id: 'box-06',
    name: 'High Protein Paneer & Grain Bowl',
    subtitle: '38g Protein packed everyday energy box',
    category: 'Fitness Boxes',
    price: 279,
    subscriptionPrice: 229,
    rating: 4.8,
    reviewCount: 410,
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    badge: 'Popular',
    dietaryTags: ['High Protein', 'Pure Veg'],
    macros: { calories: 590, protein: 38, carbs: 58, fat: 18, fiber: 10 },
    prepTime: '15 mins',
    description: 'Juicy spiced paneer cubes tossed with bell peppers over a bed of cilantro-lime quinoa and steamed beans. Drizzled with light sesame garlic yogurt.',
    contents: [
      '150g Marinated Grilled Cottage Cheese',
      'Cilantro Lime Quinoa & Brown Rice',
      'Sautéed Green Beans & Sweet Corn',
      'Roasted Peanuts & Garlic Dip'
    ],
    ingredients: ['Paneer', 'Quinoa', 'Brown Rice', 'Green Beans', 'Corn', 'Peanuts', 'Garlic Yogurt'],
    allergens: ['Dairy', 'Peanuts']
  }
];

export const BUILDER_INGREDIENTS: CustomIngredient[] = [
  // BASES
  {
    id: 'b-1',
    name: 'Multigrain Ragi Rotis (2 pcs)',
    category: 'base',
    price: 40,
    macros: { calories: 160, protein: 6, carbs: 32, fat: 2, fiber: 5 },
    dietaryTags: ['Pure Veg', 'High Protein'],
    portionSize: '2 rotis (80g)'
  },
  {
    id: 'b-2',
    name: 'Organic Brown Rice',
    category: 'base',
    price: 45,
    macros: { calories: 180, protein: 4, carbs: 38, fat: 2, fiber: 4 },
    dietaryTags: ['Vegan', 'Gluten-Free', 'Pure Veg'],
    portionSize: '1 bowl (150g)'
  },
  {
    id: 'b-3',
    name: 'Herb Quinoa & Millet Pilaf',
    category: 'base',
    price: 65,
    macros: { calories: 190, protein: 7, carbs: 34, fat: 3, fiber: 6 },
    dietaryTags: ['Vegan', 'Gluten-Free', 'High Protein'],
    portionSize: '1 bowl (150g)'
  },
  {
    id: 'b-4',
    name: 'Keto Cauliflower Rice',
    category: 'base',
    price: 70,
    macros: { calories: 45, protein: 3, carbs: 6, fat: 1, fiber: 3 },
    dietaryTags: ['Keto', 'Low Carb', 'Vegan', 'Gluten-Free'],
    portionSize: '1 bowl (140g)'
  },

  // MAINS / PROTEIN
  {
    id: 'm-1',
    name: 'Tandoori Spiced Grilled Paneer',
    category: 'main',
    price: 110,
    macros: { calories: 260, protein: 20, carbs: 6, fat: 18, fiber: 1 },
    dietaryTags: ['High Protein', 'Pure Veg', 'Gluten-Free'],
    portionSize: '130g'
  },
  {
    id: 'm-2',
    name: 'Slow-Cooked Yellow Dal Tadka',
    category: 'main',
    price: 70,
    macros: { calories: 140, protein: 9, carbs: 22, fat: 3, fiber: 6 },
    dietaryTags: ['Vegan', 'Gluten-Free', 'Pure Veg'],
    portionSize: '1 bowl (160g)'
  },
  {
    id: 'm-3',
    name: 'Organic Tofu Makhani (Low Oil)',
    category: 'main',
    price: 100,
    macros: { calories: 190, protein: 16, carbs: 8, fat: 11, fiber: 3 },
    dietaryTags: ['Vegan', 'High Protein', 'Gluten-Free'],
    portionSize: '140g'
  },
  {
    id: 'm-4',
    name: 'Black Chana & Sprouts Masala',
    category: 'main',
    price: 80,
    macros: { calories: 170, protein: 12, carbs: 26, fat: 3, fiber: 8 },
    dietaryTags: ['Vegan', 'Gluten-Free', 'Diabetic Friendly'],
    portionSize: '150g'
  },

  // SIDES & SALADS
  {
    id: 's-1',
    name: 'Cucumber Sprouts Mint Raita',
    category: 'side',
    price: 35,
    macros: { calories: 60, protein: 4, carbs: 6, fat: 2, fiber: 2 },
    dietaryTags: ['Pure Veg', 'Gluten-Free'],
    portionSize: '100g'
  },
  {
    id: 's-2',
    name: 'Steamed Broccoli & Roasted Seeds',
    category: 'side',
    price: 50,
    macros: { calories: 80, protein: 4, carbs: 7, fat: 4, fiber: 4 },
    dietaryTags: ['Vegan', 'Gluten-Free', 'Keto'],
    portionSize: '100g'
  },
  {
    id: 's-3',
    name: 'Crunchy Rainbow Salad',
    category: 'side',
    price: 40,
    macros: { calories: 45, protein: 2, carbs: 8, fat: 1, fiber: 3 },
    dietaryTags: ['Vegan', 'Gluten-Free', 'Low Carb'],
    portionSize: '100g'
  },

  // BEVERAGES
  {
    id: 'v-1',
    name: 'Fresh Jeera Mint Buttermilk',
    category: 'beverage',
    price: 35,
    macros: { calories: 40, protein: 2, carbs: 3, fat: 1, fiber: 0 },
    dietaryTags: ['Pure Veg', 'Gluten-Free'],
    portionSize: '250ml'
  },
  {
    id: 'v-2',
    name: 'Cold-Pressed Detox Green Juice',
    category: 'beverage',
    price: 60,
    macros: { calories: 65, protein: 2, carbs: 14, fat: 0, fiber: 3 },
    dietaryTags: ['Vegan', 'Gluten-Free'],
    portionSize: '250ml'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    category: 'Subscription',
    question: 'How do safeNfit subscriptions work?',
    answer: 'Select your preferred frequency (5-day workweek, 7-day, or 20/30-day monthly plan) and chosen meal slots (Breakfast, Lunch, Dinner). Meals are freshly prepared each morning and delivered in thermal eco-packaging.'
  },
  {
    category: 'Subscription',
    question: 'Can I pause or skip meals when traveling?',
    answer: 'Yes! You can pause or skip any day on your interactive Delivery Calendar with a single click up to 10:00 PM the night before. Unused meals are rolled over so you never lose your money.'
  },
  {
    category: 'Delivery',
    question: 'What are the delivery time slots available?',
    answer: 'We offer 3 fresh delivery slots daily: Morning Breakfast (07:00 AM - 08:30 AM), Lunch (12:00 PM - 01:30 PM), and Evening Dinner (07:00 PM - 08:30 PM).'
  },
  {
    category: 'Dietary',
    question: 'How are safeNfit meals kept low-oil and nutritious?',
    answer: 'We exclusively use cold-pressed mustard, sesame, and olive oil with strict 1-teaspoon caps per meal portion. No refined white sugar, zero artificial preservatives, and all sauces are made fresh in-house daily.'
  },
  {
    category: 'Account & Coins',
    question: 'How do FitCoins and Meal Streaks work?',
    answer: 'Every day you consume your planned safeNfit meal, you build your Healthy Streak. A 5-day streak rewards you with 150 FitCoins, which can be redeemed for free detox juices, extra protein add-ons, or direct discount vouchers.'
  }
];
