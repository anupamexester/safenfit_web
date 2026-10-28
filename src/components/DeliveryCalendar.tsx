import React, { useState } from 'react';
import { CalendarDayMeal } from '../types';
import { Calendar as CalendarIcon, Clock, MapPin, Truck, PauseCircle, SkipForward, ShieldCheck } from 'lucide-react';

export const DeliveryCalendar: React.FC = () => {
  const today = new Date();
  const daysInMonth = 14;

  const initialSchedule: CalendarDayMeal[] = Array.from({ length: daysInMonth }).map((_, idx) => {
    const d = new Date();
    d.setDate(today.getDate() + idx);
    const dateStr = d.toISOString().split('T')[0];
    
    let status: 'scheduled' | 'delivered' | 'paused' | 'skipped' = 'scheduled';
    if (idx === 0) status = 'delivered';
    if (idx === 3) status = 'paused';

    return {
      date: dateStr,
      status,
      mealName: idx % 2 === 0 ? 'Royal North Indian Fitness Thali' : 'Keto Power Muscle Box',
      slotTime: '12:00 PM - 01:30 PM',
      address: '742 Park Avenue, Suite 4B, Tech Park, City'
    };
  });

  const [schedule, setSchedule] = useState<CalendarDayMeal[]>(initialSchedule);
  const [selectedDay, setSelectedDay] = useState<CalendarDayMeal>(schedule[1]);
  const [liveTrackOpen, setLiveTrackOpen] = useState(false);

  const handleTogglePause = (dateStr: string) => {
    setSchedule(schedule.map(item => {
      if (item.date === dateStr) {
        const nextStatus = item.status === 'paused' ? 'scheduled' : 'paused';
        return { ...item, status: nextStatus };
      }
      return item;
    }));
    if (selectedDay.date === dateStr) {
      setSelectedDay({
        ...selectedDay,
        status: selectedDay.status === 'paused' ? 'scheduled' : 'paused'
      });
    }
  };

  const handleSkipDay = (dateStr: string) => {
    setSchedule(schedule.map(item => {
      if (item.date === dateStr) {
        return { ...item, status: 'skipped' };
      }
      return item;
    }));
    if (selectedDay.date === dateStr) {
      setSelectedDay({ ...selectedDay, status: 'skipped' });
    }
  };

  return (
    <section id="delivery-calendar" className="py-12 bg-gradient-to-b from-[#F6F1E7] to-[#EBF6E4]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#084D0C] text-[#A7D77A] text-xs font-bold">
            <CalendarIcon className="w-3.5 h-3.5" /> DELIVERY PREFERENCES & CALENDAR
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
            Manage Delivery Slots & Active Schedule
          </h2>
          <p className="text-sm text-[#2A2A2A]/80 max-w-2xl">
            Tap any date to pause deliveries, skip meals, swap menu choices, or track live delivery status.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Calendar Grid */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-[#084D0C]/10 pb-3">
              <h3 className="text-base font-bold text-[#2A2A2A] flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-[#084D0C]" /> Upcoming 14-Day Delivery Plan
              </h3>
              <span className="text-xs text-[#084D0C] font-bold">Active Subscription</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {schedule.map((item) => {
                const dateObj = new Date(item.date);
                const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                const dayNum = dateObj.getDate();
                const isSelected = selectedDay.date === item.date;

                let statusBadgeColor = 'bg-[#EBF6E4] text-[#084D0C] border-[#A7D77A]';
                if (item.status === 'paused') statusBadgeColor = 'bg-amber-50 text-amber-700 border-amber-300';
                if (item.status === 'skipped') statusBadgeColor = 'bg-gray-100 text-gray-500 border-gray-300';
                if (item.status === 'delivered') statusBadgeColor = 'bg-[#084D0C] text-[#A7D77A] border-[#084D0C]';

                return (
                  <button
                    key={item.date}
                    onClick={() => setSelectedDay(item)}
                    className={`p-3 rounded-xl border text-left transition-all space-y-1.5 ${
                      isSelected
                        ? 'border-2 border-[#084D0C] bg-[#EBF6E4] shadow-xs'
                        : 'border-[#084D0C]/15 bg-[#F6F1E7]/50 hover:bg-[#EBF6E4]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2A2A2A]">{dayName} {dayNum}</span>
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase border ${statusBadgeColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#2A2A2A]/80 truncate font-semibold">{item.mealName}</p>
                    <p className="text-[9px] text-[#2A2A2A]/60 font-mono">{item.slotTime.split('-')[0]}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Date Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-[#084D0C]/15 space-y-5">
              <div className="border-b border-[#084D0C]/10 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#084D0C] font-extrabold uppercase tracking-wider">Date Inspector</span>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">{selectedDay.date}</h3>
                </div>
                <span className="text-xs bg-[#084D0C] text-[#A7D77A] px-2.5 py-1 rounded font-bold uppercase">
                  {selectedDay.status}
                </span>
              </div>

              <div className="space-y-3 text-xs text-[#2A2A2A]">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#084D0C] shrink-0 mt-0.5" />
                  <div>
                    <strong>Delivery Slot:</strong> {selectedDay.slotTime}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#084D0C] shrink-0 mt-0.5" />
                  <div>
                    <strong>Delivery Address:</strong> {selectedDay.address}
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-[#EBF6E4] p-3 rounded-xl border border-[#A7D77A]">
                  <ShieldCheck className="w-4 h-4 text-[#084D0C] shrink-0 mt-0.5" />
                  <div>
                    <strong>Meal Planned:</strong> {selectedDay.mealName}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#084D0C]/10">
                <button
                  onClick={() => handleTogglePause(selectedDay.date)}
                  className="bg-[#EBF6E4] hover:bg-[#A7D77A]/40 text-[#084D0C] text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <PauseCircle className="w-4 h-4 text-[#084D0C]" />
                  {selectedDay.status === 'paused' ? 'Resume Delivery' : 'Pause Day'}
                </button>

                <button
                  onClick={() => handleSkipDay(selectedDay.date)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <SkipForward className="w-4 h-4 text-gray-500" />
                  Skip Meal
                </button>
              </div>

              <button
                onClick={() => setLiveTrackOpen(!liveTrackOpen)}
                className="w-full bg-[#084D0C] hover:bg-[#053308] text-white font-bold py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 text-xs"
              >
                <Truck className="w-4 h-4 text-[#A7D77A]" />
                {liveTrackOpen ? 'Hide Live Delivery Map' : 'Track Today\'s Live Delivery'}
              </button>
            </div>

            {liveTrackOpen && (
              <div className="bg-[#084D0C] text-white p-6 rounded-2xl border border-[#084D0C] space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#A7D77A]" />
                    <h4 className="font-bold text-sm">Live Order #SNF-9021</h4>
                  </div>
                  <span className="text-[10px] bg-[#A7D77A] text-[#084D0C] px-2 py-0.5 rounded font-bold">In Transit</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#A7D77A]">
                    <span>Chef Prepared (11:30 AM)</span>
                    <span className="text-white font-bold">Out for Delivery</span>
                    <span>Arrival ~ 12:20 PM</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#A7D77A] h-full w-3/4 rounded-full transition-all duration-1000" />
                  </div>
                </div>

                <div className="bg-white/10 p-3 rounded-xl text-xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Driver: Ramesh Kumar</p>
                    <p className="text-[10px] text-[#A7D77A]">EV Express Delivery · +91 91234 56789</p>
                  </div>
                  <span className="bg-[#A7D77A] text-[#084D0C] text-[10px] font-bold px-2 py-1 rounded">
                    On Time
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
