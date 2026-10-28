import React, { useState } from 'react';
import { MOCK_FAQS } from '../data/mockData';
import { FAQItem, SupportTicket } from '../types';
import { HelpCircle, Bot, Send, Sparkles, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const CustomerSupport: React.FC = () => {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState<'Subscription' | 'Delivery' | 'Dietary / Food Quality' | 'Billing'>('Subscription');
  const [ticketMessage, setTicketMessage] = useState('');
  const [submittedTickets, setSubmittedTickets] = useState<SupportTicket[]>([
    {
      id: 'TCK-8012',
      subject: 'Request to swap Thursday dinner item',
      category: 'Subscription',
      status: 'Resolved',
      date: 'Yesterday',
      message: 'I would like to swap Thursday evening dinner to Keto Power Box.'
    }
  ]);
  const [ticketSuccess, setTicketSuccess] = useState(false);

  const [userGoal, setUserGoal] = useState('Weight Loss & Lean Fitness');
  const [userWeight, setUserWeight] = useState('68');
  const [userHeight, setUserHeight] = useState('172');
  const [userDiet, setUserDiet] = useState('Pure Veg');
  const [userQuery, setUserQuery] = useState('How much protein should I eat daily and which safeNfit thali box fits me?');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);

  const categories = ['All', 'Subscription', 'Delivery', 'Dietary', 'Account & Coins'];

  const filteredFaqs = MOCK_FAQS.filter((faq) => {
    if (activeFaqCategory === 'All') return true;
    return faq.category === activeFaqCategory;
  });

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return;

    const newTicket: SupportTicket = {
      id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: ticketSubject,
      category: ticketCategory,
      status: 'Open',
      date: 'Just now',
      message: ticketMessage
    };

    setSubmittedTickets([newTicket, ...submittedTickets]);
    setTicketSubject('');
    setTicketMessage('');
    setTicketSuccess(true);
    setTimeout(() => setTicketSuccess(false), 4000);
  };

  const handleConsultAiAdvisor = async (e: React.FormEvent) => {
    e.preventDefault();
    setAiLoading(true);
    setAiAdvice(null);

    try {
      const response = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userGoal,
          weight: userWeight,
          height: userHeight,
          dietPreference: userDiet,
          question: userQuery
        })
      });

      const data = await response.json();
      setAiAdvice(data.advice || 'A balanced intake of 25-30g protein per meal is recommended.');
    } catch (err) {
      setAiAdvice('Our nutritionist suggests starting with our Royal North Indian Fitness Thali for lunch and High Protein Paneer Bowl for dinner to achieve a balanced 80g+ daily protein target!');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="support-section" className="py-12 bg-gradient-to-b from-[#F6F1E7] to-[#EBF6E4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#084D0C] text-[#A7D77A] text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" /> CUSTOMER SUPPORT & ASSISTANCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
            How Can We Help You Today?
          </h2>
          <p className="text-sm text-[#2A2A2A]/80 max-w-2xl">
            Ask our AI Nutrition Advisor for personalized meal planning, explore common FAQs, or submit a support request directly to our kitchen manager.
          </p>
        </div>

        {/* AI Nutrition Advisor Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#084D0C] shadow-md space-y-6 text-left mb-12">
          <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#084D0C] text-white p-2.5 rounded-xl">
                <Bot className="w-6 h-6 text-[#A7D77A]" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-[#084D0C] tracking-wider">AI Powered Assistant</span>
                <h3 className="text-lg font-bold text-[#2A2A2A]">safeNfit AI Nutrition Advisor</h3>
              </div>
            </div>
            <span className="text-xs bg-[#EBF6E4] text-[#084D0C] font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#084D0C]" /> Instant Guidance
            </span>
          </div>

          <form onSubmit={handleConsultAiAdvisor} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Fitness Goal</label>
                <select
                  value={userGoal}
                  onChange={(e) => setUserGoal(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                >
                  <option value="Weight Loss & Lean Fitness">Weight Loss & Fat Loss</option>
                  <option value="Muscle Gain & High Protein">Muscle Gain & Bulking</option>
                  <option value="Keto & Low Carb">Keto & Low Carb</option>
                  <option value="Diabetic Care & GI Balance">Diabetic Care & GI Balance</option>
                  <option value="General Health & Wellness">General Health & Wellness</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Weight (kg)</label>
                <input
                  type="number"
                  value={userWeight}
                  onChange={(e) => setUserWeight(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Height (cm)</label>
                <input
                  type="number"
                  value={userHeight}
                  onChange={(e) => setUserHeight(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Diet Preference</label>
                <select
                  value={userDiet}
                  onChange={(e) => setUserDiet(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                >
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="High Protein Tofu / Paneer">High Protein Vegetarian</option>
                  <option value="Eggitarian">Eggitarian</option>
                  <option value="Jain / Pure Herbal">Jain (No Onion Garlic)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Ask Dietary Question / Describe Routine</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="flex-1 bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-4 py-2 text-xs font-bold text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                  placeholder="e.g. Recommend my ideal lunch thali and daily calorie intake"
                />
                <button
                  type="submit"
                  disabled={aiLoading}
                  className="bg-[#084D0C] hover:bg-[#053308] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-xs whitespace-nowrap"
                >
                  {aiLoading ? 'Analyzing...' : 'Ask AI Nutritionist'}
                  <Send className="w-3.5 h-3.5 text-[#A7D77A]" />
                </button>
              </div>
            </div>
          </form>

          {aiAdvice && (
            <div className="bg-[#EBF6E4] p-5 rounded-xl border border-[#A7D77A] space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-[#084D0C]">
                <Bot className="w-4 h-4" /> safeNfit Nutritionist Recommendation:
              </div>
              <p className="text-xs text-[#2A2A2A] leading-relaxed whitespace-pre-line">
                {aiAdvice}
              </p>
            </div>
          )}
        </div>

        {/* FAQs & Ticket Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-5 text-left">
            <h3 className="text-lg font-bold text-[#2A2A2A] border-b border-[#084D0C]/10 pb-3">
              Frequently Asked Questions
            </h3>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFaqCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                    activeFaqCategory === cat
                      ? 'bg-[#084D0C] text-white'
                      : 'bg-[#F6F1E7] text-[#2A2A2A] hover:bg-[#EBF6E4]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#084D0C]/15 rounded-xl overflow-hidden bg-[#F6F1E7]/40"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-xs text-[#2A2A2A] flex items-center justify-between gap-3 hover:bg-[#EBF6E4]/30 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#084D0C] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#2A2A2A]/60 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-[#2A2A2A]/80 leading-relaxed border-t border-[#084D0C]/10 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-5 text-left">
            <h3 className="text-lg font-bold text-[#2A2A2A] border-b border-[#084D0C]/10 pb-3">
              Submit Support Request
            </h3>

            {ticketSuccess && (
              <div className="p-3 bg-[#084D0C] text-white rounded-xl text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A7D77A]" /> Support Ticket Submitted! Response within 2 hours.
              </div>
            )}

            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Issue Category</label>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value as any)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                >
                  <option value="Subscription">Subscription Rules / Modification</option>
                  <option value="Delivery">Delivery Slot / Driver Instructions</option>
                  <option value="Dietary / Food Quality">Dietary Preferences / Food Quality</option>
                  <option value="Billing">Billing / FitCoins Refund</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Subject / Summary</label>
                <input
                  type="text"
                  required
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                  placeholder="Brief description of your query"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2A2A] mb-1">Detailed Message</label>
                <textarea
                  required
                  rows={3}
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  className="w-full bg-[#F6F1E7] border border-[#084D0C]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2A2A2A]"
                  placeholder="Provide specific details..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-xs"
              >
                Submit Support Ticket
              </button>
            </form>

            <div className="pt-4 border-t border-[#084D0C]/10 space-y-2">
              <h4 className="text-xs font-bold text-[#2A2A2A] uppercase">Your Support Tickets</h4>
              {submittedTickets.map((t) => (
                <div key={t.id} className="bg-[#F6F1E7] p-3 rounded-xl border border-[#084D0C]/10 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#2A2A2A]">{t.id}: {t.subject}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${t.status === 'Resolved' ? 'bg-[#084D0C] text-[#A7D77A]' : 'bg-amber-500 text-white'}`}>
                      {t.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#2A2A2A]/70 line-clamp-1">{t.message}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
