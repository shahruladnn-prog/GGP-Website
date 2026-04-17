import React, { useState } from 'react';
import { ChevronDown, ArrowRight, PlayCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onExplore: () => void;
  onWatchVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore, onWatchVideo }) => {
  const { trans } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image — Cloudinary CDN, no lazy (LCP element) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/hero-bg_zbvzlr.jpg" 
          alt="Gopeng Glamping Park Atmosphere" 
          className="w-full h-full object-cover opacity-80 scale-105"
          style={{ animation: 'zoom 20s infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50"></div>
        <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-48 md:mt-10 pb-32">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/60 border border-brand-500/50 backdrop-blur-sm text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in-up shadow-lg">
          <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
          {trans.hero.welcome}
        </div>
        
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-9xl text-white mb-6 leading-none drop-shadow-2xl animate-fade-in-up delay-100">
          {trans.hero.gateway} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600">{trans.hero.nature}</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light drop-shadow-md text-shadow">
          {trans.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
          <button 
            onClick={onExplore}
            className="group min-w-[220px] bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded font-display font-bold text-lg tracking-widest transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] flex items-center justify-center gap-3 uppercase border border-transparent hover:-translate-y-1"
          >
            {trans.hero.tents}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => setShowVideo(true)}
            className="group min-w-[220px] bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded font-display font-bold text-lg tracking-widest transition-all uppercase flex items-center justify-center gap-3 hover:border-brand-500/50 hover:-translate-y-1"
          >
            <PlayCircle size={20} className="text-brand-500 group-hover:scale-110 transition-transform" />
            {trans.hero.video}
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-500">
        <ChevronDown size={40} />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600"></div>

      {/* Video Modal — YouTube embed (landscape 16:9) */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white hover:text-brand-500 transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LfUwQdAlJAI?autoplay=1&rel=0&modestbranding=1"
              title="Gopeng Glamping Park — Official Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

export default Hero;
