import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactUsSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Weekly Subscription Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F6F1E7] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#084D0C] uppercase">
            CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2A2A2A] tracking-tight leading-tight">
            We are here to help.
          </h2>
          <p className="text-base sm:text-lg text-[#2A2A2A]/80 leading-relaxed">
            Have questions about our rotating menu, delivery slots, diet customizations, or corporate office tiffins? Reach out directly to our kitchen helpline team.
          </p>
        </div>

        {/* Contact Split - Open 2 Columns (No Boxed Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-[#084D0C]/15 pt-10">
          
          {/* Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 text-sm text-[#2A2A2A]">
              
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#084D0C] uppercase font-mono">Toll-Free Helpline & WhatsApp</span>
                <p className="text-2xl font-bold text-[#2A2A2A]">844-432-2224</p>
                <p className="text-xs text-[#2A2A2A]/60">Mon-Sun: 7:00 AM - 9:30 PM</p>
              </div>

              <div className="space-y-1 border-t border-[#084D0C]/10 pt-4">
                <span className="text-xs font-bold text-[#084D0C] uppercase font-mono">Support Email</span>
                <p className="text-base font-semibold text-[#2A2A2A]">support@safenfit.com</p>
                <p className="text-xs text-[#2A2A2A]/60">Fast response within 2 hours</p>
              </div>

              <div className="space-y-1 border-t border-[#084D0C]/10 pt-4">
                <span className="text-xs font-bold text-[#084D0C] uppercase font-mono">Central Kitchen Facility</span>
                <p className="text-sm text-[#2A2A2A]">4015 Holcomb Bridge Road, Suite 120</p>
                <p className="text-xs text-[#2A2A2A]/60">Norcross, GA 30071 / Central Hub</p>
              </div>

              <div className="space-y-1 border-t border-[#084D0C]/10 pt-4">
                <span className="text-xs font-bold text-[#084D0C] uppercase font-mono">Delivery Windows</span>
                <p className="text-xs text-[#2A2A2A]/80">Morning: 07:00 AM - 08:30 AM</p>
                <p className="text-xs text-[#2A2A2A]/80">Lunch: 12:00 PM - 01:30 PM</p>
                <p className="text-xs text-[#2A2A2A]/80">Dinner: 07:00 PM - 08:30 PM</p>
              </div>

            </div>

            <div className="border-t border-[#084D0C]/10 pt-4 text-xs text-[#2A2A2A]/80 space-y-1">
              <strong className="block text-[#084D0C] font-bold">Corporate & Office Lunch Catering:</strong>
              <p>We supply healthy lunch dabbahs for tech teams, corporate campuses, and events. Contact us for group billing.</p>
            </div>
          </div>

          {/* Form (7 cols) - Open, clean input styling, no card border */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-[#2A2A2A]">Send an Inquiry</h3>

            {submitted && (
              <div className="p-4 bg-[#084D0C] text-white text-xs font-bold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-[#A7D77A]" />
                <span>Thank you! Your message has been sent to our kitchen team. We will respond shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2A2A2A]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#084D0C]/20 px-3.5 py-2.5 text-xs font-medium text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                    placeholder="e.g. Rahul Verma"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2A2A2A]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#084D0C]/20 px-3.5 py-2.5 text-xs font-medium text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2A2A2A]">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#084D0C]/20 px-3.5 py-2.5 text-xs font-medium text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2A2A2A]">Inquiry Topic</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-white border border-[#084D0C]/20 px-3.5 py-2.5 text-xs font-medium text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                  >
                    <option value="Weekly Subscription Inquiry">Weekly Subscription Inquiry</option>
                    <option value="Corporate / Office Catering">Corporate / Office Lunch Catering</option>
                    <option value="Dietary & Allergen Customization">Dietary & Allergen Customization</option>
                    <option value="Delivery Schedule Question">Delivery Schedule / Address Change</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#2A2A2A]">Your Message or Special Request *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-[#084D0C]/20 p-3.5 text-xs font-medium text-[#2A2A2A] focus:outline-none focus:border-[#084D0C]"
                  placeholder="Tell us about your meal requirements or questions..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#084D0C] hover:bg-[#053308] text-white font-bold px-8 py-3.5 text-xs tracking-wide transition-colors flex items-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 text-[#A7D77A]" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
