
import React, { useEffect, useRef, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { AppSection } from '../types';

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  avatarUrl: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Mohd Hafiz",
    role: "Local Guide",
    text: "Alhamdulillah, the place is clean and comfortable. The staff are very friendly and helpful. The food is delicious especially the BBQ dinner. The toilet is clean. Highly recommended for family gathering. Will come again insyaallah. 5 stars!",
    avatarUrl: "https://ui-avatars.com/api/?name=Mohd+Hafiz&background=f97316&color=fff"
  },
  {
    id: 2,
    name: "radd Radzi",
    role: "Team Building",
    text: "We were here for company team building. We had so much fun. The place is well maintained, clean, well-lit, the toilets are regularly cleaned. The resort offers many activities (at cost) eg white water rafting, ATV ride, abseiling, tour to Gua Tempurung n etc. You can swim at the pool & river at the back of the resort. We took package with meals. So no need to leave the resort to look for food outside. The staff are attentive. All activities are with good safety SOP, well maintained equipment & accompanied by several staff. Recommended to all esp for team building & family day.",
    avatarUrl: "https://ui-avatars.com/api/?name=radd+Radzi&background=c2410c&color=fff"
  },
  {
    id: 3,
    name: "Jason Lee",
    role: "Team Building",
    text: "Organized our company trip here. The management was super professional from booking to checkout. Activities were fun and safe. The cleanliness of the common bathrooms really surprised me - hotel standard! Kudos.",
    avatarUrl: "https://ui-avatars.com/api/?name=Jason+Lee&background=ea580c&color=fff"
  },
  {
    id: 4,
    name: "Sarah Abdullah",
    role: "Verified Guest",
    text: "Very strategic location. Peaceful atmosphere. The food buffet spread was good and refill was fast. Staff were always smiling and greeting us. If you want a nature escape without sacrificing comfort, this is the place.",
    avatarUrl: "https://ui-avatars.com/api/?name=Sarah+Abdullah&background=9a3412&color=fff"
  },
  {
    id: 5,
    name: "Kumar R.",
    role: "Adventure Seeker",
    text: "White water rafting was exhilarating! The guides were experienced and funny, made us feel very safe. Glamping tent was cozy with air purifier and fan. Waking up to fresh air was amazing.",
    avatarUrl: "https://ui-avatars.com/api/?name=Kumar+R&background=7c2d12&color=fff"
  }
];

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 350; // Match the card width approx
    
    const intervalId = setInterval(() => {
      if (!isPaused && scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
          // Reset to start smoothly
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll next
          scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section id={AppSection.REVIEWS} className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">Guest Love</span>
            <h2 className="font-display text-4xl md:text-5xl text-dark-900 font-bold">WHAT THEY SAY</h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-brand-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <span className="font-bold text-dark-900 text-lg">4.8/5.0</span>
              <span className="text-gray-500 text-sm">(Google Reviews)</span>
            </div>
          </div>
          
          <a 
            href="https://maps.app.goo.gl/HuUi5EamZY6MfGN39" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 flex items-center gap-2 text-dark-900 font-bold border-b-2 border-brand-500 hover:text-brand-600 transition-colors pb-1 uppercase tracking-wide text-sm"
          >
            Read All Reviews <ExternalLink size={16} />
          </a>
        </div>

        {/* Scrolling Container Wrapper to enforce bounds */}
        <div className="relative w-full overflow-hidden">
            {/* Inner Scrollable List */}
            <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            >
            {reviews.map((review) => (
                <div 
                key={review.id} 
                className="w-[85vw] sm:w-[350px] md:w-[400px] bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 relative snap-center flex-shrink-0 transition-transform hover:scale-[1.02] duration-300"
                >
                <div className="text-brand-200 absolute top-4 right-6 text-6xl font-serif leading-none opacity-50">"</div>
                <div className="flex text-brand-500 mb-4">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic text-sm md:text-base whitespace-normal break-words line-clamp-6">
                    {review.text}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                    <img 
                        src={review.avatarUrl} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div>
                    <h4 className="font-bold text-dark-900 text-sm">{review.name}</h4>
                    <span className="text-xs text-brand-500 font-medium">{review.role}</span>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
