
import React from 'react';
import { Send, Phone, Mail, MapPin, Briefcase, Users, Tent } from 'lucide-react';
import BookingCalendar from './BookingCalendar';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { trans } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">{trans.contact.header}</span>
          <h2 className="font-display text-4xl md:text-5xl text-dark-900 font-bold mb-6">{trans.contact.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {trans.contact.subtitle}
          </p>
        </div>
        
        <div className="mb-16">
           <BookingCalendar />
        </div>

        <div className="bg-white shadow-xl flex flex-col md:flex-row overflow-hidden rounded-xl">
          
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center border-r border-gray-100">
            <h3 className="font-display text-2xl text-dark-900 font-bold mb-2">{trans.contact.general}</h3>
            <p className="text-gray-500 text-sm mb-8">
              {trans.contact.generalDesc}
            </p>
            
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">{trans.contact.form.name}</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all rounded" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">{trans.contact.form.phone}</label>
                  <input type="tel" placeholder="+60..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all rounded" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">{trans.contact.form.email}</label>
                <input type="email" placeholder="email@address.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all rounded" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">{trans.contact.form.message}</label>
                <textarea rows={4} placeholder="..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none rounded"></textarea>
              </div>

              <button type="button" className="group w-full bg-dark-900 hover:bg-brand-600 text-white font-bold font-display uppercase tracking-wider py-4 shadow-lg hover:shadow-xl transition-all mt-4 flex items-center justify-center gap-2 rounded">
                {trans.contact.form.send} <Send size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </form>
          </div>

          <div className="md:w-1/2 bg-dark-900 p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)'}}></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold mb-10 text-brand-500">{trans.contact.touch}</h3>
              
              <div className="space-y-10">
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-500 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2 text-white">{trans.contact.location}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                       Lot 10846 Jalan Besar Kg Chulek,<br/>31600 Gopeng, Perak. MALAYSIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-500 mt-1">
                    <Tent size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2 text-white">{trans.contact.sales}</h4>
                    <p className="text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
                       <Phone size={14} className="text-brand-500"/> +60 13-240 8857
                    </p>
                    <p className="text-gray-300 text-sm font-medium flex items-center gap-2">
                       <Mail size={14} className="text-brand-500"/> booking@gopengglampingpark.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-500 mt-1">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2 text-white">{trans.contact.corporate}</h4>
                    <p className="text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
                       <Phone size={14} className="text-brand-500"/> +60 13-453 8857
                    </p>
                    <p className="text-gray-300 text-sm font-medium flex items-center gap-2">
                       <Mail size={14} className="text-brand-500"/> corporate@gopengglampingpark.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-500 mt-1">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2 text-white">{trans.contact.hr}</h4>
                    <p className="text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
                       <Phone size={14} className="text-brand-500"/> +60 19-225 8857
                    </p>
                    <p className="text-gray-300 text-sm font-medium flex items-center gap-2">
                       <Mail size={14} className="text-brand-500"/> humanresource@gopengglampingpark.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
               <p className="text-xs text-gray-500">
                 {trans.contact.warning}
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
