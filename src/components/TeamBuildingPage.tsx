import React, { useState } from 'react';
import { FileText, Download, Lock, Users, Briefcase, Award, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TeamBuildingPageProps {
  onBook: () => void;
}

const TeamBuildingPage: React.FC<TeamBuildingPageProps> = ({ onBook }) => {
  const { trans } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const BROCHURES = [
    {
      id: 'day-trip',
      title: trans.team.packages.day.title,
      description: trans.team.packages.day.desc,
      type: 'image',
      url: '/images/tb-daytrip.jpg'
    },
    {
      id: '2d1n',
      title: trans.team.packages.d2n1.title,
      description: trans.team.packages.d2n1.desc,
      type: 'pdf',
      url: '/documents/tb-2d1n.pdf'
    },
    {
      id: '3d2n',
      title: trans.team.packages.d3n2.title,
      description: trans.team.packages.d3n2.desc,
      type: 'pdf',
      url: '/documents/tb-3d2n.pdf'
    },
    {
      id: 'family-day',
      title: trans.team.packages.family.title,
      description: trans.team.packages.family.desc,
      type: 'pdf',
      url: '/documents/tb-family.pdf'
    },
    {
      id: 'hrdf',
      title: trans.team.packages.hrdf.title,
      description: trans.team.packages.hrdf.desc,
      type: 'coming-soon',
      url: '#'
    }
  ];

  const GALLERY_IMAGES = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg"
  ];

  const handleOpenBrochure = (item: typeof BROCHURES[0]) => {
    if (item.type === 'coming-soon') return;
    if (item.type === 'image') {
      setLightboxImage(item.url);
    } else {
      window.open(item.url, '_blank');
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen pt-44 md:pt-48 lg:pt-52 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">{trans.team.header}</span>
          <h2 className="font-display text-4xl md:text-5xl text-dark-900 font-bold mb-6">{trans.team.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {trans.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {BROCHURES.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transition-all ${item.type === 'coming-soon' ? 'opacity-70' : 'hover:-translate-y-2 hover:shadow-xl'}`}
            >
              <div className={`p-4 rounded-full mb-4 ${item.type === 'coming-soon' ? 'bg-gray-100 text-gray-400' : 'bg-brand-50 text-brand-600'}`}>
                {item.id === 'family-day' ? <Users size={32} /> : 
                 item.id === 'hrdf' ? <Award size={32} /> : 
                 <Briefcase size={32} />}
              </div>
              
              <h3 className="font-display font-bold text-xl text-dark-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">{item.description}</p>
              
              <button 
                onClick={() => handleOpenBrochure(item)}
                disabled={item.type === 'coming-soon'}
                className={`w-full py-3 rounded-lg font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors ${
                  item.type === 'coming-soon' 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-dark-900 text-white hover:bg-brand-600'
                }`}
              >
                {item.type === 'coming-soon' ? (
                  <><Lock size={14} /> {trans.team.comingSoon}</>
                ) : (
                  <><Download size={14} /> {trans.team.download}</>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mb-12">
           <h3 className="font-display font-bold text-3xl text-dark-900 mb-8 text-center uppercase">{trans.team.events}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMAGES.map((src, idx) => (
                 <div key={idx} className="rounded-xl overflow-hidden shadow-md group relative">
                    <img 
                      src={src} 
                      alt={`Team Building ${idx}`} 
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ filter: 'contrast(1.1) saturate(0.9)' }} 
                    />
                    <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
              ))}
           </div>
        </div>

        <div className="bg-brand-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'}}></div>
           <div className="relative z-10">
             <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">{trans.team.plan}</h3>
             <p className="max-w-2xl mx-auto mb-8 text-brand-100">
               {trans.team.planDesc}
             </p>
             <button 
               onClick={onBook}
               className="bg-white text-brand-600 hover:bg-brand-50 font-bold uppercase tracking-widest px-8 py-3 rounded-full shadow-lg transition-all"
             >
               {trans.team.contactCorp}
             </button>
           </div>
        </div>

      </div>

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
               alt="Brochure Preview" 
               className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
             />
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamBuildingPage;