
import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BookingWidget: React.FC = () => {
  const { trans } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://live.ipms247.com/booking/book-rooms-gopengglampingpark', '_blank');
  };

  const showPicker = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.showPicker();
  };

  return (
    <div className="w-full shadow-2xl rounded-xl overflow-hidden font-sans">
      <div className="bg-dark-900 px-6 py-3 flex items-center justify-between border-b border-gray-800">
        <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
          {trans.booking.title}
        </span>
        <span className="text-gray-500 text-[10px] uppercase tracking-wide hidden sm:block">{trans.booking.guarantee}</span>
      </div>
      
      <form onSubmit={handleBooking} className="bg-white p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        
        <div className="relative group">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 group-focus-within:text-brand-600 transition-colors">{trans.booking.checkIn}</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-500 pointer-events-none" size={18} />
            <input 
              type="date" 
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block pl-10 p-2.5 uppercase font-medium outline-none transition-all cursor-pointer" 
              value={checkIn}
              onClick={showPicker}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>

        <div className="relative group">
           <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 group-focus-within:text-brand-600 transition-colors">{trans.booking.guests}</label>
           <div className="relative">
             <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-500" size={18} />
             <select 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block pl-10 p-2.5 appearance-none font-medium outline-none transition-all"
             >
               <option value="1">1 {trans.booking.camper}</option>
               <option value="2">2 {trans.booking.campers}</option>
               <option value="3">3 {trans.booking.campers}</option>
               <option value="4">4 {trans.booking.campers}</option>
               <option value="5">5+ {trans.booking.campers}</option>
             </select>
             <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
           </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-brand-600 hover:bg-brand-500 text-white font-display font-bold uppercase tracking-widest text-sm rounded-lg py-3 px-5 transition-all shadow-lg hover:shadow-brand-500/50 flex items-center justify-center gap-2 h-[42px]"
        >
          {trans.booking.checkRates} <Search size={18} />
        </button>
      </form>
    </div>
  );
};

export default BookingWidget;
