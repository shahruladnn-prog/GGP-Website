import React, { useState } from 'react';
import { Check, X, Utensils, AlertCircle, FileText, ArrowRight, ShieldAlert, Users, ZoomIn, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RatesPageProps {
  onBook: () => void;
  onBack: () => void;
}

const RatesPage: React.FC<RatesPageProps> = ({ onBook, onBack }) => {
  const { trans } = useLanguage();
  const activeTabClass = "text-white";
  const inactiveTabClass = "text-gray-500 hover:text-brand-500";
  const [activeTab, setActiveTab] = useState<'weekday' | 'weekend'>('weekday');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const URLS = {
    menu: "https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/rates-menu_gg3mun.png",
    cohabitation: "https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/rates-policy-mahram_yzg9o4.jpg",
    rules: "https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/rates-policy-rules_wuae6h.jpg",
    weekdayPoster: "https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/WEEKDAYS_PACKAGE_1_ctw5vj.png",
    weekendPoster: "https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/WEEKEND_PACKAGE_1_pb15jt.png",
  };

  return (
    <section className="bg-gray-50 min-h-screen pt-44 md:pt-48 lg:pt-52 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">{trans.rates.header}</span>
          <h2 className="font-display text-4xl md:text-5xl text-dark-900 font-bold mb-6">{trans.rates.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {trans.rates.subtitle}
          </p>
        </div>

        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white p-1.5 rounded-full shadow-lg border border-gray-200 flex flex-row relative w-full md:w-auto md:min-w-[520px] max-w-lg mx-auto">
            <button
              onClick={() => setActiveTab('weekday')}
              className={`relative z-10 flex-1 px-4 md:px-10 py-4 rounded-full font-display font-bold uppercase tracking-wide transition-all duration-300 text-xs md:text-base whitespace-nowrap text-center flex items-center justify-center ${
                activeTab === 'weekday' ? activeTabClass : inactiveTabClass
              }`}
            >
              {trans.rates.weekdayBtn}
            </button>
            <button
              onClick={() => setActiveTab('weekend')}
              className={`relative z-10 flex-1 px-4 md:px-10 py-4 rounded-full font-display font-bold uppercase tracking-wide transition-all duration-300 text-xs md:text-base whitespace-nowrap text-center flex items-center justify-center ${
                activeTab === 'weekend' ? activeTabClass : inactiveTabClass
              }`}
            >
              {trans.rates.weekendBtn}
            </button>
            
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-full bg-brand-600 shadow-md transition-transform duration-300 ease-in-out w-[calc(50%-6px)] left-1.5 ${
                activeTab === 'weekday' ? 'translate-x-0' : 'translate-x-full'
              }`}
            ></div>
          </div>
        </div>

        {/* WEEKDAY CONTENT */}
        <div className={`transition-opacity duration-500 ${activeTab === 'weekday' ? 'block opacity-100' : 'hidden opacity-0'}`}>

          {/* View Poster Button */}
          <div className="flex justify-center mb-10">
            <button
              onClick={() => setLightboxImage(URLS.weekdayPoster)}
              className="group flex items-center gap-3 bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-500/50 px-6 py-3 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="bg-brand-600 p-1.5 rounded text-white group-hover:bg-brand-500 transition-colors">
                <ZoomIn size={16} />
              </div>
              <div className="text-left">
                <span className="block font-bold text-sm">View Package Poster</span>
                <span className="text-[10px] text-gray-400">Weekdays Bed &amp; Breakfast</span>
              </div>
              <ArrowRight size={14} className="text-gray-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all ml-2" />
            </button>
          </div>

          {/* Hero label */}
          <div className="bg-dark-900 rounded-3xl overflow-hidden shadow-2xl mb-8 relative">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="px-8 md:px-12 py-8 border-b border-white/10">
              <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Room Night Basis</span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase leading-none mb-1">WEEKDAYS BED &amp; BREAKFAST</h3>
              <p className="text-brand-400 font-display font-bold text-xl italic mb-4">Package</p>
              <p className="text-gray-400 text-sm">Sunday, Monday, Tuesday, Wednesday &amp; Thursday</p>
            </div>

            {/* 3-column tent cards */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { title: 'Double Tent', beds: '1 queen bed',  breakfast: '2', price: '198', min: 'Max 2 Pax' },
                { title: 'Quad Tent',   beds: '2 queen beds', breakfast: '4', price: '278', min: 'Max 4 Pax', featured: true },
                { title: 'Deluxe Tent', beds: '4 queen beds', breakfast: '8', price: '468', min: 'Max 8 Pax' },
              ].map(tent => (
                <div key={tent.title} className={`p-8 md:p-10 flex flex-col gap-6 ${tent.featured ? 'bg-white/[0.04]' : ''}`}>
                  <div>
                    <h4 className="font-display font-bold text-xl text-white uppercase mb-1">{tent.title}</h4>
                    <p className="text-gray-500 text-xs">{tent.min}</p>
                  </div>

                  <ul className="space-y-2.5 text-sm text-gray-300 flex-1">
                    <li className="flex items-start gap-2">
                      <Check size={15} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>2 days 1 night accommodation in glamping tent with <span className="text-brand-400 font-bold">{tent.beds}</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={15} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>Inclusive breakfast for <span className="text-brand-400 font-bold">{tent.breakfast} person</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={15} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>Price excluded 8% SST</span>
                    </li>
                  </ul>

                  {/* Price badge */}
                  <div className="bg-brand-500/15 border border-brand-500/30 rounded-2xl py-4 px-5 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-brand-400 font-bold text-lg align-top leading-none">RM</span>
                      <span className="font-display font-bold text-5xl text-brand-400 leading-none">{tent.price}</span>
                    </div>
                    <span className="text-brand-300/60 text-xs font-bold uppercase tracking-widest mt-1 block">/tent (2D1N)</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Fine print */}
            <div className="px-8 md:px-12 py-6 border-t border-white/10 bg-dark-950/50">
              <ul className="space-y-1.5 text-xs text-gray-500">
                <li>* Additional person charge of <span className="text-gray-400 font-medium">RM58</span> (FOC breakfast, no extra bed) per night</li>
                <li>* School and Public Holiday surcharge of <span className="text-gray-400 font-medium">RM58</span> per tent/night (weekdays only)</li>
                <li>* All prices subject to Local services charge (CPT) <span className="text-gray-400 font-medium">RM3/tent/night</span> (collect upon check-in)</li>
                <li>* All prices shown subject to <span className="text-gray-400 font-medium">8% SST</span></li>
              </ul>
            </div>
          </div>

          {/* Policies */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 max-w-4xl mx-auto mb-8">
            <h4 className="font-display font-bold text-dark-900 mb-4 flex items-center gap-2 text-sm">
              <AlertCircle size={16} className="text-brand-500"/> {trans.rates.policies.notes}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.sst}</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.cpt}</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.tourismTax}</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.facilities}</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.deposit}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WEEKEND CONTENT */}
        <div className={`transition-opacity duration-500 ${activeTab === 'weekend' ? 'block opacity-100' : 'hidden opacity-0'}`}>

          {/* View Poster Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setLightboxImage(URLS.weekendPoster)}
              className="group flex items-center gap-3 bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-500/50 px-6 py-3 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="bg-brand-600 p-1.5 rounded text-white group-hover:bg-brand-500 transition-colors">
                <ZoomIn size={16} />
              </div>
              <div className="text-left">
                <span className="block font-bold text-sm">View Package Poster</span>
                <span className="text-[10px] text-gray-400">Weekend Fullboard Package</span>
              </div>
              <ArrowRight size={14} className="text-gray-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all ml-2" />
            </button>
          </div>

          {/* ─── HERO HEADER CARD ─── */}
          <div className="bg-dark-900 rounded-3xl overflow-hidden shadow-2xl mb-8 relative">
            {/* Decorative blobs */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-0">
              {/* Left: Title */}
              <div className="p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">2D1N · Fri–Sat &amp; Sat–Sun</span>
                <h3 className="font-display font-bold text-4xl md:text-5xl text-white leading-none mb-1 uppercase tracking-wide">WEEKEND</h3>
                <h3 className="font-display font-bold text-4xl md:text-5xl text-white leading-none mb-1 uppercase tracking-wide">FULLBOARD</h3>
                <p className="text-brand-400 font-display font-bold text-2xl italic mb-6">Package</p>
                <div className="flex flex-wrap gap-3">
                  {['Air-Con Tent','Hi-Tea','BBQ Dinner','Breakfast','Lunch','Fireshow','Campfire','Free Facilities'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              {/* Right: What's included detail */}
              <div className="p-8 md:p-10 max-w-xs w-full">
                <h4 className="font-display font-bold text-brand-500 text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Utensils size={14} /> What's Included
                </h4>
                <ul className="space-y-3 text-sm text-gray-300 mb-6">
                  {[
                    '2D1N Air-Conditioning Tent',
                    '1× Hi Tea Buffet',
                    '1× BBQ Dinner Buffet',
                    '1× Breakfast Buffet',
                    '1× Lunch Buffet',
                    'Fireshow (Fri–Sat)',
                    'Campfire',
                    'Free access to all park facilities',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-brand-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setLightboxImage(URLS.menu)}
                  className="w-full bg-white/5 hover:bg-brand-600/20 border border-white/10 hover:border-brand-500/40 text-white rounded-xl p-3 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-600 p-1.5 rounded text-white"><FileText size={14}/></div>
                    <span className="font-bold text-xs">{trans.rates.viewMenu}</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all"/>
                </button>
              </div>
            </div>
          </div>

          {/* ─── PRICING TABLE ─── */}
          <div className="bg-dark-900 rounded-3xl overflow-hidden shadow-2xl mb-6">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-dark-950 px-6 md:px-10 py-4 border-b border-white/10">
              <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Tent Type</div>
              <div className="text-center text-brand-400 text-xs uppercase tracking-widest font-bold">Adult</div>
              <div className="text-center text-gray-400 text-xs uppercase tracking-widest font-bold">Kid <span className="text-gray-600 normal-case">6–12 yrs</span></div>
            </div>

            {/* Row: Double */}
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center px-6 md:px-10 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
              <div>
                <p className="font-display font-bold text-white text-lg uppercase">Double Tent</p>
                <p className="text-gray-500 text-xs mt-0.5">2 Person</p>
                <p className="text-gray-600 text-[10px]">(Min pax: 2 Adults)</p>
              </div>
              <div className="text-center">
                <span className="text-gray-300 text-sm font-bold align-top leading-none mr-0.5">RM</span>
                <span className="font-display font-bold text-brand-400 text-4xl md:text-5xl leading-none">228</span>
                <span className="text-gray-500 text-xs block mt-1">/adult</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400 text-sm font-bold align-top leading-none mr-0.5">RM</span>
                <span className="font-display font-bold text-white text-3xl md:text-4xl leading-none">118</span>
                <span className="text-gray-500 text-xs block mt-1">/kid</span>
              </div>
            </div>

            {/* Row: Quad (highlighted) */}
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center px-6 md:px-10 py-6 border-b border-white/5 bg-white/[0.04]">
              <div>
                <p className="font-display font-bold text-white text-lg uppercase">Quad Tent</p>
                <p className="text-gray-500 text-xs mt-0.5">4 Person</p>
                <p className="text-gray-600 text-[10px]">(Min pax: 3 Adults)</p>
              </div>
              <div className="text-center">
                <span className="text-gray-300 text-sm font-bold align-top leading-none mr-0.5">RM</span>
                <span className="font-display font-bold text-brand-400 text-4xl md:text-5xl leading-none">208</span>
                <span className="text-gray-500 text-xs block mt-1">/adult</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400 text-sm font-bold align-top leading-none mr-0.5">RM</span>
                <span className="font-display font-bold text-white text-3xl md:text-4xl leading-none">118</span>
                <span className="text-gray-500 text-xs block mt-1">/kid</span>
              </div>
            </div>

            {/* Row: Deluxe */}
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center px-6 md:px-10 py-6 hover:bg-white/[0.02] transition-colors">
              <div>
                <p className="font-display font-bold text-white text-lg uppercase">Deluxe Tent</p>
                <p className="text-gray-500 text-xs mt-0.5">8 Person</p>
                <p className="text-gray-600 text-[10px]">(Min pax: 6 Adults)</p>
              </div>
              <div className="text-center">
                <span className="text-gray-300 text-sm font-bold align-top leading-none mr-0.5">RM</span>
                <span className="font-display font-bold text-brand-400 text-4xl md:text-5xl leading-none">208</span>
                <span className="text-gray-500 text-xs block mt-1">/adult</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400 text-sm font-bold align-top leading-none mr-0.5">RM</span>
                <span className="font-display font-bold text-white text-3xl md:text-4xl leading-none">118</span>
                <span className="text-gray-500 text-xs block mt-1">/kid</span>
              </div>
            </div>

            {/* Bonus banner */}
            <div className="bg-brand-600/10 border-t border-brand-500/20 px-6 md:px-10 py-4 flex items-center gap-3">
              <div className="bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shrink-0">BONUS</div>
              <p className="text-brand-200 text-sm font-medium">
                Add on any adventure activities and get <span className="text-brand-400 font-bold">RM 10,000 insurance coverage</span> for 2 Days 1 Night
              </p>
            </div>
          </div>

          {/* ─── FINE PRINT ─── */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 max-w-4xl mx-auto mb-10">
            <h4 className="font-display font-bold text-dark-900 mb-4 flex items-center gap-2 text-sm"><AlertCircle size={16} className="text-brand-500"/> {trans.rates.policies.notes}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.sst}</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"/>Local services charge (CPT) RM3/tent/night (collect upon check-in)</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.tourismTax}</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.facilities}</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"/>{trans.rates.policies.deposit}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
           <h3 className="font-display font-bold text-center mb-6 text-gray-400 text-sm uppercase tracking-widest">{trans.rates.policies.title}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => setLightboxImage(URLS.cohabitation)}
                className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:bg-brand-50 hover:border-brand-300 transition-all shadow-sm group"
              >
                 <Users size={20} className="text-brand-500" />
                 <span className="font-bold text-dark-900 group-hover:text-brand-700">{trans.rates.policies.cohab}</span>
                 <ZoomIn size={14} className="text-gray-400" />
              </button>
              
              <button 
                onClick={() => setLightboxImage(URLS.rules)}
                className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:bg-brand-50 hover:border-brand-300 transition-all shadow-sm group"
              >
                 <ShieldAlert size={20} className="text-brand-500" />
                 <span className="font-bold text-dark-900 group-hover:text-brand-700">{trans.rates.policies.rules}</span>
                 <ZoomIn size={14} className="text-gray-400" />
              </button>
           </div>
        </div>

        <div className="mt-8 text-center">
           <button 
             onClick={onBook}
             className="bg-brand-600 hover:bg-brand-500 text-white font-display font-bold text-xl uppercase tracking-widest px-12 py-5 rounded-full shadow-2xl hover:shadow-brand-500/50 transition-all transform hover:-translate-y-1 animate-pulse"
           >
             {trans.rates.cta}
           </button>
           <p className="mt-4 text-gray-400 text-xs">{trans.rates.terms}</p>
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
               alt="Document Preview" 
               className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
             />
          </div>
        </div>
      )}
    </section>
  );
};

export default RatesPage;