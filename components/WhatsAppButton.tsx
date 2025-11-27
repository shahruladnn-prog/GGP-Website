
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  // Official number from the footer/contact info
  const PHONE_NUMBER = '60132408857'; 
  const MESSAGE = 'Hi, I would like to inquire about a booking at Gopeng Glamping Park.';

  const handleClick = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all transform hover:scale-110 flex items-center gap-2 group border-2 border-white/20 animate-in slide-in-from-bottom-10 fade-in duration-500 delay-500"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.5} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm uppercase tracking-wide">
        WhatsApp Us
      </span>
    </button>
  );
};

export default WhatsAppButton;
