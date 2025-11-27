
import React from 'react';
import { AppSection } from '../types';
import { Instagram, ExternalLink } from 'lucide-react';

const galleryImages = [
  "https://gopengglampingpark.com/wp-content/uploads/2025/01/GGPGALLERY8.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2025/01/GGPGALLERY6.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2023/10/GOPENG-GLAMPING-PARK-ADVENTURE-ACTIVITY8.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2025/11/Screenshot-2025-11-26-044102.png",
  "https://gopengglampingpark.com/wp-content/uploads/2023/10/366234837_610069641233746_6201757870837643362_n.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2025/11/unnamed.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2025/01/GGPGALLERY3.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2024/06/440402985_18265456021224548_7998714459964710304_n.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2024/06/IMG_8509-scaled.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2023/10/GOPENG-GLAMPING-PARK-ADVENTURE-ACTIVITY17.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2023/10/GOPENG-GLAMPING-PARK-ADVENTURE-ACTIVITY13.jpg",
  "https://gopengglampingpark.com/wp-content/uploads/2023/10/GOPENG-GLAMPING-PARK-ADVENTURE-ACTIVITY6.jpg"
];

const Gallery: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/gopengglampingpark/?hl=en";

  const openInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank');
  };

  return (
    <section id={AppSection.GALLERY} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 cursor-pointer group" onClick={openInstagram}>
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block flex items-center justify-center gap-2">
            <Instagram size={16} /> @gopengglampingpark
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-dark-900 font-bold group-hover:text-brand-600 transition-colors">
            FOLLOW OUR ADVENTURE
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-6"></div>
        </div>

        {/* 
          Desktop: Columns (Masonry effect)
          Mobile: Flex Row (Horizontal Slider) 
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:block md:columns-2 lg:columns-4 md:space-y-4 hide-scrollbar pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {galleryImages.map((src, idx) => (
            <div 
                key={idx} 
                className="min-w-[85vw] md:min-w-0 snap-center break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-lg mb-4 md:mb-0"
                onClick={openInstagram}
            >
              <img 
                src={src} 
                alt={`Gopeng Glamping Park Instagram ${idx}`} 
                className="w-full h-[60vh] md:h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                 <Instagram size={32} className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all" />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-8">
            <button 
                onClick={openInstagram}
                className="inline-flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest text-sm border-b-2 border-brand-500 pb-1 hover:text-brand-700 hover:border-brand-700 transition-all"
            >
                View on Instagram <ExternalLink size={16}/>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
