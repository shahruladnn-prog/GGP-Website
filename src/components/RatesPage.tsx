import React, { useState } from 'react';
import { Check, X, Coffee, Utensils, Moon, Sun, AlertCircle, FileText, ArrowRight, ShieldAlert, Users, ZoomIn, Download } from 'lucide-react';
import { AppSection } from '../types';
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
    menu: "/images/rates-menu.png",
    cohabitation: "/images/rates-policy-mahram.jpg",
    rules: "/images/rates-policy-rules.jpg"
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
          <div className="bg-white p-1 rounded-full shadow-lg border border-gray-200 flex flex-row relative w-full md:w-auto md:min-w-[400px] max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('weekday')}
              className={`relative z-10 flex-1 px-2 md:px-8 py-3 rounded-full font-display font-bold uppercase tracking-wide transition-all duration-300 text-[10px] md:text-sm whitespace-normal md:whitespace-nowrap text-center flex items-center justify-center leading-tight ${
                activeTab === 'weekday' ? activeTabClass : inactiveTabClass
              }`}
            >
              {trans.rates.weekdayBtn}
            </button>
            <button
              onClick={() => setActiveTab('weekend')}
              className={`relative z-10 flex-1 px-2 md:px-8 py-3 rounded-full font-display font-bold uppercase tracking-wide transition-all duration-300 text-[10px] md:text-sm whitespace-normal md:whitespace-nowrap text-center flex items-center justify-center leading-tight ${
                activeTab === 'weekend' ? activeTabClass : inactiveTabClass
              }`}
            >
              {trans.rates.weekendBtn}
            </button>
            
            <div 
              className={`absolute top-1 bottom-1 rounded-full bg-brand-600 shadow-md transition-transform duration-300 ease-in-out w-[calc(50%-4px)] left-1 ${
                activeTab === 'weekday' ? 'translate-x-0' : 'translate-x-full'
              }`}
            ></div>
          </div>
        </div>

        {/* WEEKDAY CONTENT */}
        <div className={`transition-opacity duration-500 ${activeTab === 'weekday' ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <div className="text-center mb-10">
             <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg border border-blue-100 mb-4">
                <span className="font-bold flex items-center gap-2"><Moon size={18}/> {trans.rates.weekdayLabel}</span>
             </div>
             <p className="text-gray-500 text-sm">{trans.rates.weekdayDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-dark-900 text-white p-6 text-center">
                <h3 className="font-display text-2xl font-bold uppercase">{trans.features.tents.double.title}</h3>
                <p className="text-brand-500 text-sm font-medium">{trans.features.tents.double.price}</p>
              </div>
              <div className="p-8 text-center border-b border-gray-100">
                <span className="text-4xl font-display font-bold text-dark-900">RM 188</span>
                <span className="text-gray-400 text-sm block mt-1">{trans.rates.perNight}</span>
              </div>
              <div className="p-8 bg-gray-50 flex-grow">
                <ul className="space-y-4 text-sm text-gray-600 text-left">
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> 1 Queen Bed (Max 2 Pax)</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Breakfast for 2 Pax</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Air Conditioning</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Private Garden Area</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-brand-500 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 scale-105 z-10">
              <div className="bg-dark-900 text-white p-6 text-center relative">
                <h3 className="font-display text-2xl font-bold uppercase">{trans.features.tents.quad.title}</h3>
                <p className="text-brand-500 text-sm font-medium">{trans.features.tents.quad.price}</p>
              </div>
              <div className="p-8 text-center border-b border-gray-100">
                <span className="text-4xl font-display font-bold text-dark-900">RM 268</span>
                <span className="text-gray-400 text-sm block mt-1">{trans.rates.perNight}</span>
              </div>
              <div className="p-8 bg-gray-50 flex-grow">
                <ul className="space-y-4 text-sm text-gray-600 text-left">
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> 2 Queen Beds (Max 4 Pax)</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Breakfast for 4 Pax</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Air Conditioning</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Riverside View Available</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-dark-900 text-white p-6 text-center">
                <h3 className="font-display text-2xl font-bold uppercase">{trans.features.tents.deluxe.title}</h3>
                <p className="text-brand-500 text-sm font-medium">{trans.features.tents.deluxe.price}</p>
              </div>
              <div className="p-8 text-center border-b border-gray-100">
                <span className="text-4xl font-display font-bold text-dark-900">RM 448</span>
                <span className="text-gray-400 text-sm block mt-1">{trans.rates.perNight}</span>
              </div>
              <div className="p-8 bg-gray-50 flex-grow">
                <ul className="space-y-4 text-sm text-gray-600 text-left">
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> 4 Queen Beds (Max 8 Pax)</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Breakfast for 8 Pax</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Air Conditioning</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-brand-500 shrink-0"/> Large Common Area</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto mb-16">
             <h4 className="font-display font-bold text-dark-900 mb-4 flex items-center gap-2"><AlertCircle size={20} className="text-brand-500"/> {trans.rates.policies.notes}</h4>
             <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <ul className="space-y-2">
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></div> {trans.rates.policies.surchargeHoliday}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></div> {trans.rates.policies.surchargePax}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></div> {trans.rates.policies.sst}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></div> {trans.rates.policies.cpt}</li>
                </ul>
                <ul className="space-y-2">
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div> {trans.rates.policies.facilities}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div> {trans.rates.policies.deposit}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div> {trans.rates.policies.tourismTax}</li>
                </ul>
             </div>
          </div>
        </div>

        {/* WEEKEND CONTENT */}
        <div className={`transition-opacity duration-500 ${activeTab === 'weekend' ? 'block opacity-100' : 'hidden opacity-0'}`}>
           <div className="text-center mb-10">
             <div className="inline-block bg-brand-50 text-brand-700 px-4 py-2 rounded-lg border border-brand-100 mb-4">
                <span className="font-bold flex items-center gap-2"><Sun size={18}/> {trans.rates.weekendLabel}</span>
             </div>
             <p className="text-gray-500 text-sm">{trans.rates.weekendDesc}</p>
          </div>

          <div className="bg-dark-900 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-16 text-white relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
                   <h3 className="font-display text-3xl font-bold mb-2">{trans.rates.weekendRates}</h3>
                   <p className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-8">{trans.rates.fullBoard}</p>
                   
                   <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                        <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-2 font-bold">{trans.rates.friSun}</span>
                        <div className="flex justify-center items-baseline gap-1 mb-1">
                          <span className="text-3xl font-display font-bold text-white">RM 188</span>
                        </div>
                        <span className="text-[10px] text-gray-500">{trans.rates.perAdult}</span>
                      </div>

                      <div className="bg-white/5 border border-brand-500/30 rounded-xl p-6 text-center relative overflow-hidden hover:bg-white/10 transition-colors">
                        <div className="absolute top-0 right-0 bg-brand-600 text-[9px] font-bold px-2 py-0.5 text-white">{trans.rates.peak}</div>
                        <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-2 font-bold">{trans.rates.saturday}</span>
                        <div className="flex justify-center items-baseline gap-1 mb-1">
                          <span className="text-3xl font-display font-bold text-white">RM 198</span>
                        </div>
                        <span className="text-[10px] text-gray-500">{trans.rates.perAdult}</span>
                      </div>
                   </div>

                   <div className="bg-brand-900/20 border border-brand-500/20 rounded-xl p-5 flex items-start gap-4">
                       <div className="bg-brand-500/20 p-2 rounded-lg text-brand-500 shrink-0">
                          <AlertCircle size={20} />
                       </div>
                       <div className="flex-grow">
                           <h4 className="font-bold text-brand-400 text-xs uppercase mb-2 tracking-wide">{trans.rates.surchargeTitle}</h4>
                           <div className="space-y-2">
                              <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1">
                                <span className="text-gray-400">{trans.rates.friSun}</span>
                                <span className="text-white font-bold font-mono">+ RM 10 <span className="text-gray-500 font-normal">/{trans.rates.perAdult}</span></span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-400">{trans.rates.saturday}</span>
                                <span className="text-white font-bold font-mono">+ RM 20 <span className="text-gray-500 font-normal">/{trans.rates.perAdult}</span></span>
                              </div>
                           </div>
                       </div>
                   </div>
                </div>

                <div className="p-8 md:p-12 bg-gradient-to-br from-dark-900 to-dark-800 flex flex-col justify-center">
                   <h4 className="font-display font-bold text-xl mb-8 flex items-center gap-3">
                      <Utensils className="text-brand-500" /> {trans.rates.whatsIncluded}
                   </h4>
                   
                   <div className="space-y-8 relative pl-6 border-l border-gray-700 ml-2 mb-8">
                      <div className="relative group">
                         <div className="absolute -left-[31px] bg-dark-900 w-4 h-4 rounded-full border-4 border-brand-500 group-hover:scale-125 transition-transform"></div>
                         <h5 className="font-bold text-white text-sm mb-1">Hi-Tea Buffet</h5>
                      </div>
                      <div className="relative group">
                         <div className="absolute -left-[31px] bg-dark-900 w-4 h-4 rounded-full border-4 border-brand-500 group-hover:scale-125 transition-transform"></div>
                         <h5 className="font-bold text-white text-sm mb-1">BBQ Dinner Buffet</h5>
                      </div>
                      <div className="relative group">
                         <div className="absolute -left-[31px] bg-dark-900 w-4 h-4 rounded-full border-4 border-brand-500 group-hover:scale-125 transition-transform"></div>
                         <h5 className="font-bold text-white text-sm mb-1">Breakfast Buffet</h5>
                      </div>
                      <div className="relative group">
                         <div className="absolute -left-[31px] bg-dark-900 w-4 h-4 rounded-full border-4 border-brand-500 group-hover:scale-125 transition-transform"></div>
                         <h5 className="font-bold text-white text-sm mb-1">Lunch Buffet</h5>
                      </div>
                   </div>

                   <button 
                      onClick={() => setLightboxImage(URLS.menu)}
                      className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl p-4 flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center gap-3">
                         <div className="bg-brand-500 p-2 rounded text-white"><FileText size={16}/></div>
                         <div className="text-left">
                           <span className="block font-bold text-sm">{trans.rates.viewMenu}</span>
                           <span className="text-[10px] text-gray-400">{trans.rates.tapToView}</span>
                         </div>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all"/>
                   </button>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <h4 className="font-display font-bold text-dark-900 text-lg mb-2">{trans.features.tents.double.title}</h4>
                <p className="text-gray-500 text-sm">{trans.rates.occupancy.double}</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center border-b-4 border-b-brand-500">
                <h4 className="font-display font-bold text-dark-900 text-lg mb-2">{trans.features.tents.quad.title}</h4>
                <p className="text-gray-500 text-sm">{trans.rates.occupancy.quad}</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <h4 className="font-display font-bold text-dark-900 text-lg mb-2">{trans.features.tents.deluxe.title}</h4>
                <p className="text-gray-500 text-sm">{trans.rates.occupancy.deluxe}</p>
             </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center text-green-800 text-sm font-bold max-w-2xl mx-auto mb-8">
             <Check size={16} className="inline mr-2"/> {trans.rates.noSurcharge}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto mb-16">
             <h4 className="font-display font-bold text-dark-900 mb-4 flex items-center gap-2"><AlertCircle size={20} className="text-brand-500"/> {trans.rates.policies.notes}</h4>
             <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <ul className="space-y-2">
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></div> {trans.rates.policies.sst}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></div> {trans.rates.policies.cpt}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></div> {trans.rates.policies.tourismTax}</li>
                </ul>
                <ul className="space-y-2">
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div> {trans.rates.policies.facilities}</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div> {trans.rates.policies.deposit}</li>
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