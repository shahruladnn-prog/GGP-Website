import React, { useState, useRef } from 'react';
import { Accommodation, AppSection } from '../types';
import { Users, ChevronRight, ChevronLeft, X, ZoomIn } from 'lucide-react';
import BookingWidget from './BookingWidget';
import { useLanguage } from '../contexts/LanguageContext';

interface FeaturesProps {
  onNavigate: (section: AppSection) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const { trans } = useLanguage();
  const [activeImageIndices, setActiveImageIndices] = useState<{[key: string]: number}>({
    '1': 0, '2': 0, '3': 0
  });
  const [lightboxImage, setLightboxImage] = useState<{tentId: string, index: number} | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const accommodations: Accommodation[] = [
    {
      id: '1',
      title: trans.features.tents.double.title,
      description: trans.features.tents.double.desc,
      price: trans.features.tents.double.price,
      capacity: '2 Pax',
      features: ['1 Queen Bed', 'Air Conditioning', 'Fan Cooling', 'Air Purifier', 'Plug Points', 'Table & Chairs'],
      images: [
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-double-1_lz0z7i.jpg',
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-double-2_ntxtme.jpg',
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-double-3_mgqpyf.jpg'
      ]
    },
    {
      id: '2',
      title: trans.features.tents.quad.title,
      description: trans.features.tents.quad.desc,
      price: trans.features.tents.quad.price,
      capacity: '4 Pax',
      features: ['2 Queen Beds', 'Air Conditioning', 'Fan Cooling', 'Air Purifier', 'Plug Points', 'Table & Chairs'],
      images: [
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-quad-1_toimyj.jpg',
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-quad-2_sdeysn.jpg',
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-quad-3_ykknma.jpg'
      ]
    },
    {
      id: '3',
      title: trans.features.tents.deluxe.title,
      description: trans.features.tents.deluxe.desc,
      price: trans.features.tents.deluxe.price,
      capacity: '8 Pax',
      features: ['4 Queen Beds', 'Air Conditioning', 'Fan Cooling', 'Air Purifier', 'Plug Points', 'Large Common Area'],
      images: [
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-deluxe-1_vyqzaq.jpg',
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-deluxe-2_yruh22.jpg',
        'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/tent-deluxe-3_vopqut.jpg'
      ]
    }
  ];

  const nextImage = (id: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices(prev => ({
      ...prev,
      [id]: (prev[id] + 1) % max
    }));
  };

  const prevImage = (id: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices(prev => ({
      ...prev,
      [id]: (prev[id] - 1 + max) % max
    }));
  };

  const handleLightboxNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxImage) return;
    const currentTentIndex = accommodations.findIndex(acc => acc.id === lightboxImage.tentId);
    if (currentTentIndex === -1) return;

    const currentTent = accommodations[currentTentIndex];
    if (lightboxImage.index < currentTent.images.length - 1) {
      setLightboxImage({ tentId: lightboxImage.tentId, index: lightboxImage.index + 1 });
    } else {
      const nextTentIndex = (currentTentIndex + 1) % accommodations.length;
      setLightboxImage({ tentId: accommodations[nextTentIndex].id, index: 0 });
    }
  };

  const handleLightboxPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxImage) return;

    const currentTentIndex = accommodations.findIndex(acc => acc.id === lightboxImage.tentId);
    if (currentTentIndex === -1) return;
    if (lightboxImage.index > 0) {
       setLightboxImage({ tentId: lightboxImage.tentId, index: lightboxImage.index - 1 });
    } else {
       const prevTentIndex = (currentTentIndex - 1 + accommodations.length) % accommodations.length;
       const prevTent = accommodations[prevTentIndex];
       setLightboxImage({ tentId: prevTent.id, index: prevTent.images.length - 1 });
    }
  };

  const scrollAccommodations = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.9 : 500;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const currentLightboxAccommodation = lightboxImage 
    ? accommodations.find(acc => acc.id === lightboxImage.tentId) 
    : null;

  return (
    <div className="bg-white relative">
      <div id="booking-widget-top" className="relative -mt-24 z-30 px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <BookingWidget />
        </div>
      </div>
      
      <div className="pb-20 pt-4 px-4 text-center max-w-6xl mx-auto">
        <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 font-display">{trans.features.introTitle}</h2>
        <h3 className="font-display text-4xl md:text-5xl text-dark-900 font-bold mb-8">{trans.features.awardTitle}</h3>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-4xl mx-auto">
          {trans.features.introText}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 justify-center items-start">
           <div className="flex flex-col items-center group">
              <div className="h-32 w-full flex items-center justify-center mb-4 px-2">
                 <img 
                    src="https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/award-iso21101_jbtjvh.png" 
                    alt="ISO 21101" 
                    className="max-h-full max-w-[140px] object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
                    loading="lazy"
                 />
              </div>
              <div className="text-center px-2">
                <span className="block font-display font-bold text-dark-900 text-lg mb-2 h-7 flex items-center justify-center">ISO 21101</span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide block leading-tight">{trans.features.awards.safety}</span>
              </div>
           </div>

           <div className="flex flex-col items-center group">
              <div className="h-32 w-full flex items-center justify-center mb-4 px-2">
                <img 
                    src="https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/award-iso9001_jpnlcs.png" 
                    alt="ISO 9001" 
                    className="max-h-full max-w-[140px] object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
                 />
              </div>
              <div className="text-center px-2">
                <span className="block font-display font-bold text-dark-900 text-lg mb-2 h-7 flex items-center justify-center">ISO 9001</span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide block leading-tight">{trans.features.awards.quality}</span>
              </div>
           </div>

           <div className="flex flex-col items-center group">
              <div className="h-32 w-full flex items-center justify-center mb-4 px-2">
                 <img 
                    src="https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/award-halal_cqz2ae.png" 
                    alt="Halal" 
                    className="max-h-full max-w-[140px] object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
                 />
              </div>
              <div className="text-center px-2">
                <span className="block font-display font-bold text-dark-900 text-lg mb-2 h-7 flex items-center justify-center">MS 1500 : 2019</span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide block leading-tight">{trans.features.awards.halal}</span>
              </div>
           </div>

           <div className="flex flex-col items-center group">
              <div className="h-32 w-full flex items-center justify-center mb-4 px-2">
                 <img 
                    src="https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/award-tourism_imjmp1.png" 
                    alt="Perak Tourism Award" 
                    className="max-h-full max-w-[140px] object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
                 />
              </div>
              <div className="text-center px-2">
                <span className="block font-display font-bold text-dark-900 text-lg mb-2 h-7 flex items-center justify-center">WINNER 2024</span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide block leading-tight">{trans.features.awards.tourism}</span>
              </div>
           </div>
        </div>
      </div>

      <section id="stay" className="py-20 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-between items-end">
           <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900">{trans.features.accomTitle}</h2>
             <p className="text-gray-500 mt-2">{trans.features.accomSub}</p>
             <div className="h-1 w-24 bg-brand-500 mt-4"></div>
           </div>
           
           <div className="hidden md:flex gap-2">
              <button onClick={() => scrollAccommodations('left')} className="p-3 bg-white border border-gray-200 rounded-full hover:bg-brand-50 hover:text-brand-600 transition-colors shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollAccommodations('right')} className="p-3 bg-white border border-gray-200 rounded-full hover:bg-brand-50 hover:text-brand-600 transition-colors shadow-sm">
                <ChevronRight size={24} />
              </button>
           </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-12 snap-x snap-mandatory hide-scrollbar relative z-10" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {accommodations.map((acc) => (
              <div key={acc.id} className="min-w-[90vw] md:min-w-[450px] lg:min-w-[500px] bg-white rounded-2xl shadow-xl overflow-hidden snap-center flex flex-col border border-gray-100 group">
                
                <div 
                  className="relative h-[300px] bg-gray-200 cursor-pointer group/image"
                  onClick={() => setLightboxImage({ tentId: acc.id, index: activeImageIndices[acc.id] })}
                >
                   <img 
                      src={acc.images[activeImageIndices[acc.id]]} 
                      alt={acc.title} 
                      className="w-full h-full object-cover transition-opacity duration-500"
                      loading="lazy"
                   />

                   {/* Zoom Hint Overlay */}
                   <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100 pointer-events-none z-10">
                      <ZoomIn size={48} className="text-white drop-shadow-lg transform scale-75 group-hover/image:scale-100 transition-transform duration-300" />
                   </div>
                   
                   <button 
                      onClick={(e) => prevImage(acc.id, acc.images.length, e)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 pointer-events-auto"
                   >
                     <ChevronLeft size={20} />
                   </button>
                   <button 
                      onClick={(e) => nextImage(acc.id, acc.images.length, e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 pointer-events-auto"
                   >
                      <ChevronRight size={20} />
                   </button>
                   
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                     {acc.images.map((_, idx) => (
                       <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeImageIndices[acc.id] ? 'bg-brand-500 w-4' : 'bg-white/60'}`}
                       />
                     ))}
                   </div>
                   
                   <div className="absolute top-4 right-4 bg-brand-600 text-white px-3 py-1 font-display font-bold text-sm shadow-lg rounded uppercase tracking-wider z-20">
                     {acc.price}
                   </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-3xl font-bold text-dark-900">{acc.title}</h3>
                      <div className="flex items-center gap-1 text-brand-600 bg-brand-50 px-2 py-1 rounded">
                        <Users size={16} />
                        <span className="font-bold text-sm">{acc.capacity}</span>
                      </div>
                   </div>
                   
                   <p className="text-gray-600 mb-6 text-sm leading-relaxed">{acc.description}</p>
                   
                   <div className="space-y-3 mb-8 flex-grow">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400">{trans.features.amenities}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {acc.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-dark-800 font-medium">
                            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0"></span>
                             {feat}
                          </div>
                        ))}
                      </div>
                   </div>

                   <button 
                    onClick={() => onNavigate(AppSection.RATES)}
                    className="w-full py-4 border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white font-bold font-display uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2"
                    >
                     {trans.features.discover}
                   </button>
                </div>
              </div>
            ))}
             <div className="min-w-[20px]"></div>
        </div>

        <div className="md:hidden absolute inset-y-0 left-0 flex items-center pl-2 z-20 pointer-events-none">
           <button 
             onClick={() => scrollAccommodations('left')} 
             className="bg-white/80 p-2 rounded-full shadow-lg text-brand-600 pointer-events-auto border border-gray-100 backdrop-blur-sm"
           >
             <ChevronLeft size={24} />
           </button>
        </div>
        <div className="md:hidden absolute inset-y-0 right-0 flex items-center pr-2 z-20 pointer-events-none">
           <button 
             onClick={() => scrollAccommodations('right')} 
             className="bg-white/80 p-2 rounded-full shadow-lg text-brand-600 pointer-events-auto border border-gray-100 backdrop-blur-sm"
           >
             <ChevronRight size={24} />
           </button>
        </div>

      </section>

      {/* Lightbox Modal with Details */}
      {lightboxImage && currentLightboxAccommodation && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md animate-in fade-in duration-200 flex flex-col md:flex-row" onClick={() => setLightboxImage(null)}>
          
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-brand-500 transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
          >
            <X size={32} />
          </button>
          
          {/* Main Image Area */}
          <div className="flex-1 relative flex items-center justify-center h-[50vh] md:h-full p-4 md:p-12">
             <img 
               src={currentLightboxAccommodation.images[lightboxImage.index]} 
               alt={currentLightboxAccommodation.title} 
               className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
               onClick={(e) => e.stopPropagation()}
               loading="lazy"
             />
             
             {/* Navigation Overlay */}
             <button 
                onClick={handleLightboxPrev}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-600 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-20"
             >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={handleLightboxNext}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-600 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-20"
             >
                <ChevronRight size={24} />
             </button>
          </div>

          {/* Details Sidebar */}
          <div 
            className="md:w-[400px] bg-dark-900 border-t md:border-t-0 md:border-l border-gray-800 p-8 flex flex-col justify-center overflow-y-auto h-[50vh] md:h-full"
            onClick={(e) => e.stopPropagation()}
          >
              <div className="mb-6">
                <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-2 block">{currentLightboxAccommodation.price}</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{currentLightboxAccommodation.title}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-6 bg-white/5 p-2 rounded-lg inline-flex">
                   <Users size={16} className="text-brand-500" />
                   {currentLightboxAccommodation.capacity}
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">{currentLightboxAccommodation.description}</p>
              </div>

              <div>
                 <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-4">{trans.features.amenities}</h4>
                 <div className="grid grid-cols-1 gap-3">
                    {currentLightboxAccommodation.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0"></span>
                        {feat}
                      </div>
                    ))}
                  </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
                  <span>Image {lightboxImage.index + 1} / {currentLightboxAccommodation.images.length}</span>
                  <span>Swipe for next tent</span>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;