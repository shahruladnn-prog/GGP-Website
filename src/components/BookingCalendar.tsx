
import React, { useEffect, useRef } from 'react';
import { Calendar, CheckCircle, ShieldCheck, Star } from 'lucide-react';

const BookingCalendar: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Event listener for resizing the iframe based on postMessage from the booking engine
    const handleMessage = (e: MessageEvent) => {
      if (iframeRef.current && e.data) {
        // Ensure data is a number before parsing
        const height = parseInt(e.data, 10);
        if (!isNaN(height)) {
          // Minimum height of 350px as per original script
          const newHeight = height < 350 ? 350 : height;
          iframeRef.current.style.height = `${newHeight}px`;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="w-full bg-white shadow-2xl overflow-hidden border-t-4 border-brand-500 rounded-xl relative">
      {/* Decorative Brand Ribbon */}
      <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg z-10 shadow-sm">
        Official Site Best Rate
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Header / Sidebar Info */}
        <div className="bg-dark-900 md:w-1/4 p-6 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-800">
          <h3 className="font-display font-bold text-2xl uppercase leading-none mb-2">
            Check <span className="text-brand-500">Availability</span>
          </h3>
          <p className="text-gray-400 text-xs mb-6 leading-relaxed">
            Book directly with us for instant confirmation and exclusive seasonal offers.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
              <CheckCircle size={14} className="text-brand-500" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
              <ShieldCheck size={14} className="text-brand-500" />
              <span>Secure Payment</span>
            </div>
             <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
              <Star size={14} className="text-brand-500" />
              <span>Best Price Guarantee</span>
            </div>
          </div>
        </div>

        {/* Calendar Iframe */}
        <div className="flex-1 bg-white relative min-h-[400px]">
          <iframe 
            ref={iframeRef}
            src="https://live.ipms247.com/booking/availability_calender.php?HotelId=gopengglampingpark&lang_code=en&langtext=English&displaytype=RoomType&ShowInventory=true" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            name="re_califrame" 
            className="re_califrame w-full h-full" 
            id="re_califrame" 
            scrolling="no"
            title="Gopeng Glamping Park Availability"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
