import React, { useRef, useState } from 'react';
import { Activity } from '../types';
import { Clock, Shield, ChevronRight, ChevronLeft, MapPin, Play, X, Download, FileImage } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Carbon fibre texture as inline CSS (no external CDN dependency)
const CARBON_TEXTURE_STYLE: React.CSSProperties = {
  backgroundImage: `repeating-linear-gradient(
    45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px
  ), repeating-linear-gradient(
    -45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px
  )`
};

interface ActivitiesSectionProps {
  onBack: () => void;
  onBook: () => void;
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ onBook }) => {
  const { trans } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // activeVideo now stores a YouTube video ID (string) instead of a file path
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const allActivities: Activity[] = [
    {
      id: 'rafting-standard',
      title: trans.activities.items.rafting.title,
      description: trans.activities.items.rafting.desc,
      duration: '3 Hours',
      difficulty: 'Moderate',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-rafting_bthxhw.jpg',
      price: 'RM 150',
      priceUnit: trans.activities.perPerson,
      videoUrl: 'j3BzX5QWBVc'
    },
    {
      id: 'rafting-funtrip',
      title: trans.activities.items.funtrip.title,
      description: trans.activities.items.funtrip.desc,
      duration: '2 Hours',
      difficulty: 'Easy',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-funtrip_kwa5vb.jpg',
      price: 'RM 350',
      priceUnit: `${trans.activities.perBoat} (Max 5)`,
      videoUrl: 'sQc4kYHG8LM'
    },
    {
      id: 'abseiling',
      title: trans.activities.items.abseil.title,
      description: trans.activities.items.abseil.desc,
      duration: '3 Hours',
      difficulty: 'Hard',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-abseil_lgtvpz.png',
      price: 'RM 90',
      priceUnit: `${trans.activities.perPerson} (Min 10)`,
      videoUrl: 'XM_EChRkj5U'
    },
    {
      id: 'atv',
      title: trans.activities.items.atv.title,
      description: trans.activities.items.atv.desc,
      duration: '1.5 Hours',
      difficulty: 'Moderate',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-atv_hd2m20.jpg',
      price: 'RM 120',
      priceUnit: `${trans.activities.perUnit} (2 Pax)`,
      videoUrl: '4O40cASb9GA'
    },
    {
      id: 'hiking',
      title: trans.activities.items.hiking.title,
      description: trans.activities.items.hiking.desc,
      duration: '2 Hours',
      difficulty: 'Moderate',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-hiking_mugun4.png',
      price: 'RM 55',
      priceUnit: trans.activities.perPerson,
      videoUrl: 'NQLauvPoMu0'
    },
    {
      id: 'caving',
      title: trans.activities.items.cave.title,
      description: trans.activities.items.cave.desc,
      duration: '3 Hours',
      difficulty: 'Moderate',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-caving.jpg_wtt1bl.jpg',
      price: 'RM 65',
      priceUnit: '(MyKad) | RM 95 (Intl)',
      videoUrl: 'UI8ihUiImgc'
    },
    {
      id: 'paintball',
      title: trans.activities.items.paintball.title,
      description: trans.activities.items.paintball.desc,
      duration: '2 Hours',
      difficulty: 'Moderate',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-paintball_zwzzg2.jpg',
      price: 'RM 90',
      priceUnit: `${trans.activities.perPerson} (Min 4)`,
      videoUrl: 'QcP2Pq4I36k'
    },
    {
      id: 'buggy',
      title: trans.activities.items.buggy.title,
      description: trans.activities.items.buggy.desc,
      duration: '30 Mins',
      difficulty: 'Moderate',
      imageUrl: 'https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/activity-buggy_b6mr9o.jpg',
      price: 'RM 180',
      priceUnit: `${trans.activities.perUnit} (2 Pax)`,
      videoUrl: 'ajNO_O4_5a4'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 600;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleDescription = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleWatch = (videoId: string | undefined) => {
    if (videoId) {
      setActiveVideo(videoId);
    } else {
      onBook(); 
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'bg-green-500';
      case 'Moderate': return 'bg-brand-500';
      case 'Hard': return 'bg-red-600';
      case 'Extreme': return 'bg-purple-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-dark-950 min-h-screen flex flex-col relative overflow-hidden py-24">
      
      {/* Carbon fibre texture — inline CSS, no external CDN */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={CARBON_TEXTURE_STYLE}></div>

      <div className="relative z-20 px-6 md:px-12 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
           <span className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-2 block">{trans.activities.header}</span>
           <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-wider">
             {trans.activities.title}
          </h2>
        </div>
        
        <p className="text-xs text-gray-400 uppercase tracking-widest hidden sm:block mb-2">{trans.activities.scroll}</p>
      </div>

      <div className="relative flex-1 flex flex-col justify-center z-10">
        
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/50 hover:bg-brand-600 text-white border border-white/20 hover:border-brand-500 backdrop-blur-md transition-all shadow-2xl group"
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/50 hover:bg-brand-600 text-white border border-white/20 hover:border-brand-500 backdrop-blur-md transition-all shadow-2xl group"
        >
          <ChevronRight size={24} className="md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 px-6 md:px-20 pb-8 hide-scrollbar snap-x snap-mandatory h-[60vh] md:h-[65vh] items-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
           {allActivities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="relative min-w-[85vw] md:min-w-[500px] lg:min-w-[700px] h-full rounded-[2rem] overflow-hidden snap-center group shadow-2xl border border-white/10 flex-shrink-0 cursor-default select-none"
            >
              <div className="absolute inset-0">
                 <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay"></div>
              </div>

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                
                <div className="absolute top-8 left-8 hidden md:flex flex-col items-start gap-3">
                   <div className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-2">
                      <span className="text-brand-500">#0{index + 1}</span> 
                      Adventure
                   </div>
                   <div className={`${getDifficultyColor(activity.difficulty)} text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg`}>
                      {activity.difficulty}
                   </div>
                </div>

                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  
                  <div className="flex md:hidden items-center gap-3 mb-3">
                     <div className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
                        <span className="text-brand-500">#0{index + 1}</span> 
                        Adventure
                     </div>
                     <div className={`${getDifficultyColor(activity.difficulty)} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg`}>
                        {activity.difficulty}
                     </div>
                  </div>

                  <div className="flex justify-between items-end mb-4 border-b border-white/20 pb-4">
                    <h2 className="font-display text-3xl md:text-6xl font-bold text-white uppercase leading-none drop-shadow-lg">
                      {activity.title}
                    </h2>
                    <div className="text-right ml-4">
                       <p className="text-brand-500 font-bold text-2xl md:text-3xl font-display whitespace-nowrap">{activity.price}</p>
                       <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider">{activity.priceUnit}</p>
                    </div>
                  </div>
                  
                   <div className="flex items-center gap-6 text-gray-300 mb-6 text-sm font-medium">
                    <span className="flex items-center gap-2"><Clock size={16} className="text-brand-500" /> {activity.duration}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-500" /> Gopeng, Perak</span>
                  </div>

                   <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl opacity-90 hidden sm:block">
                    {activity.description}
                  </p>
                  
                  <div className="sm:hidden mb-6 max-w-xl">
                   <p className={`text-gray-300 text-sm leading-relaxed opacity-90 ${expandedDescriptions.has(activity.id) ? '' : 'line-clamp-3'}`}>
                      {activity.description}
                    </p>
                    <button 
                      onClick={(e) => toggleDescription(activity.id, e)}
                      className="text-brand-500 text-xs font-bold uppercase tracking-wider mt-2 focus:outline-none"
                    >
                      {expandedDescriptions.has(activity.id) ? trans.activities.showLess : trans.activities.readMore}
                    </button>
                  </div>

                  <button 
                    onClick={() => handleWatch(activity.videoUrl)}
                    className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all flex items-center gap-3 w-full md:w-auto justify-center group/btn"
                  >
                    {trans.activities.watch}
                    <Play size={18} className="group-hover/btn:fill-current fill-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="min-w-[300px] h-full flex items-center justify-center snap-center">
            <div className="text-center p-8">
                <Shield size={48} className="text-brand-500 mx-auto mb-4 opacity-50" />
               <h3 className="text-white font-display text-xl font-bold uppercase mb-2">{trans.activities.endTitle}</h3>
               <p className="text-gray-500 text-sm mb-6">{trans.activities.endDesc}</p>
               <button onClick={() => scrollContainerRef.current?.scrollTo({left: 0, behavior: 'smooth'})} className="text-brand-500 hover:text-brand-400 uppercase text-xs font-bold tracking-widest border-b border-brand-500 pb-1">{trans.activities.backStart}</button>
            </div>
           </div>

        </div>
      </div>
      
      <div className="relative z-20 px-6 max-w-7xl mx-auto w-full mt-4">
        <div className="bg-gradient-to-r from-brand-900/50 to-brand-800/30 border border-brand-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
           <div className="flex items-center gap-4">
              <div className="bg-brand-500 p-3 rounded-xl text-white shadow-lg shadow-brand-500/20">
                 <FileImage size={32} />
              </div>
              <div>
                 <h3 className="text-white font-display font-bold text-xl uppercase tracking-wide">{trans.activities.brochureTitle}</h3>
                 <p className="text-brand-200 text-sm">{trans.activities.brochureDesc}</p>
              </div>
           </div>
           <button 
             onClick={() => setLightboxImage("https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/ADVENTURE_ACTIVITIES_2_xoxiph.png")}
             className="bg-white hover:bg-brand-50 text-brand-600 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-all w-full md:w-auto justify-center shadow-lg"
           >
              <Download size={18} /> {trans.activities.viewBrochure}
            </button>
        </div>
      </div>

      {/* YouTube Shorts Modal — portrait 9:16 format */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
           <button 
             onClick={() => setActiveVideo(null)}
             className="absolute top-6 right-6 text-white hover:text-brand-500 transition-colors p-2 bg-white/10 rounded-full z-50"
            >
             <X size={32} />
           </button>
           
           <div className="flex flex-col items-center gap-4">
             {/* Portrait container for YouTube Shorts */}
             <div 
               className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
               style={{ width: 'min(360px, 85vw)', aspectRatio: '9/16', maxHeight: '80vh' }}
             >
               <iframe
                 src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                 className="w-full h-full"
                 title="Activity Video"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
               />
             </div>
             <p className="text-center text-gray-400 text-sm uppercase tracking-widest animate-pulse">Playing Adventure Preview</p>
           </div>
        </div>
      )}

      {/* Brochure Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setLightboxImage(null)}>
          <div className="absolute top-4 right-4 flex items-center gap-3 z-50">
             <a 
               href={lightboxImage}
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-brand-500 transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
               title="Download"
               onClick={(e) => e.stopPropagation()}
             >
                <Download size={24} />
             </a>
             <button 
                onClick={() => setLightboxImage(null)}
                className="text-white hover:text-brand-500 transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
             >
                <X size={24} />
             </button>
          </div>
          
          <div className="max-w-[95vw] max-h-[95vh] relative" onClick={(e) => e.stopPropagation()}>
             <img 
               src={lightboxImage} 
               alt="Document Preview" 
               className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
               loading="lazy"
             />
          </div>
        </div>
       )}

    </div>
  );
};

export default ActivitiesSection;