import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Dev server must strictly run on port 3000 per AI Studio environment constraints
const portArgIndex = process.argv.indexOf('--port');
const portFromArg = portArgIndex !== -1 ? Number(process.argv[portArgIndex + 1]) : null;
const PORT = portFromArg || 3000;

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), port: PORT });
});

// Initialize Gemini Client
const aiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (aiKey) {
  aiClient = new GoogleGenAI({ apiKey: aiKey });
}

// API Route: AI Nutrition & Meal Plan Advisor
app.post('/api/ai-advisor', async (req, res) => {
  try {
    const { userGoal, weight, height, age, gender, dietPreference, question } = req.body;

    if (!aiClient) {
      // Fallback recommendation if no key set
      return res.json({
        advice: `Based on your goal (${userGoal || 'Healthy Lifestyle'}) and preference (${dietPreference || 'Balanced'}), we recommend our Royal North Indian Fitness Thali for lunch and High Protein Paneer Bowl for dinner. Target calories ~1800-2000 kcal/day with 80g+ protein.`,
        recommendedMeals: ['thali-01', 'box-06', 'box-02'],
        suggestedMacros: { calories: 1850, protein: 95, carbs: 180, fat: 55 }
      });
    }

    const prompt = `You are the lead certified Sports Nutritionist and Chef for "safeNfit" (Healthy Food. Healthy You.).
User Profile & Query:
- Main Goal: ${userGoal || 'Wellness'}
- Weight: ${weight ? weight + ' kg' : 'Not specified'}
- Height: ${height ? height + ' cm' : 'Not specified'}
- Age/Gender: ${age || ''} ${gender || ''}
- Dietary Preference: ${dietPreference || 'Flexitarian / Any'}
- Question/Prompt: "${question || 'Suggest my daily safeNfit meal plan and macro goals'}"

Provide a warm, highly encouraging, structured 3-paragraph recommendation in natural text:
1. Exact daily Macro Targets (Calories, Protein in g, Carbs in g, Healthy Fats in g) based on their profile.
2. Recommended safeNfit Meal Combination (e.g., Tiffin Breakfast + High Protein Thali + Detox Evening Juice).
3. Practical advice on timing, hydration, and maintaining healthy streaks.

Keep response inspiring, professional, and under 250 words. Do not use code blocks.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const adviceText = response.text || 'Nourish your body with clean, fresh safeNfit thalis and fitness boxes!';

    return res.json({
      advice: adviceText,
      recommendedMeals: ['thali-01', 'box-02', 'box-06'],
      suggestedMacros: { calories: 1800, protein: 90, carbs: 170, fat: 50 }
    });
  } catch (err: any) {
    console.error('Gemini API error:', err?.message || err);
    return res.status(500).json({
      advice: 'Our AI Nutritionist suggests a balanced intake of 30g+ protein per meal with our Royal North Indian Fitness Thali and High Protein Power Box!',
      recommendedMeals: ['thali-01', 'box-06'],
      error: err?.message
    });
  }
});

async function startServer() {
  try {
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.resolve(__dirname, 'dist')));
      app.get('*', (_req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
      });
    } else {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      app.use(vite.middlewares);
    }

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`safeNfit server running on http://0.0.0.0:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();
