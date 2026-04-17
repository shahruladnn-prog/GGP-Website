import React, { useState, useEffect } from 'react';
import { Menu, X, Tent, Globe } from 'lucide-react';
import { AppSection } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { trans, setLanguage, language } = useLanguage();
  const BOOKING_URL = 'https://live.ipms247.com/booking/book-rooms-gopengglampingpark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    window.open(BOOKING_URL, '_blank');
    setIsOpen(false);
  };

  const navItems = [
    { id: AppSection.HOME, label: trans.nav.home },
    { id: AppSection.STAY, label: trans.nav.stay },
    { id: AppSection.RATES, label: trans.nav.rates },
    { id: AppSection.TEAM_BUILDING, label: trans.nav.team },
    { id: AppSection.PLAY, label: trans.nav.play },
    { id: AppSection.GALLERY, label: trans.nav.gallery },
    { id: AppSection.CONTACT, label: trans.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ms', label: 'MS' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-2 md:py-3 border-b border-white/10' : 'bg-gradient-to-b from-black via-black/60 to-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative min-h-[70px] md:min-h-[90px]">
          
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:inset-auto flex-shrink-0 z-20 flex items-center cursor-pointer group" 
            onClick={() => onNavigate(AppSection.HOME)}
          >
            {!logoError ? (
              <img 
                src="https://res.cloudinary.com/djrhlrd6k/image/upload/q_auto/f_auto/logo_voz7sp.png" 
                alt="Gopeng Glamping Park" 
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-16 md:h-20' : 'h-24 md:h-28'} group-hover:scale-105 drop-shadow-lg`}
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center">
                <div className={`p-2 md:p-3 rounded mr-3 transition-colors bg-brand-500 text-white`}>
                  <Tent size={32} strokeWidth={2.5} className="md:w-12 md:h-12" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-display font-bold text-xl md:text-3xl tracking-wide uppercase text-white leading-none">
                    Gopeng <span className="text-brand-500">Glamping</span>
                  </h1>
                </div>
              </div>
            )}
          </div>
          
          <div className="hidden md:flex flex-1 justify-end items-center pl-8">
            <div className="flex items-center space-x-1 lg:space-x-4 bg-black/40 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/5 shadow-2xl transition-all duration-300 hover:bg-black/60">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 text-[10px] lg:text-xs xl:text-sm font-bold tracking-widest uppercase transition-all duration-200 border-b-2 ${
                    activeSection === item.id
                      ? 'text-brand-500 border-brand-500'
                      : 'text-gray-300 hover:text-white border-transparent hover:border-brand-500/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Language Switcher Desktop */}
              <div className="flex items-center gap-2 border-l border-white/20 pl-4 ml-2">
                 {languages.map(lang => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`text-[10px] font-bold uppercase transition-colors ${language === lang.code ? 'text-brand-500' : 'text-gray-400 hover:text-white'}`}
                    >
                        {lang.label}
                    </button>
                 ))}
              </div>

              <button 
                onClick={handleBookNow}
                className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full font-display font-bold uppercase tracking-wider text-xs lg:text-sm shadow-lg hover:shadow-brand-500/50 transition-all transform hover:-translate-y-0.5 border border-brand-400/20 ml-2 whitespace-nowrap animate-pulse"
              >
                {trans.nav.book}
              </button>
            </div>
          </div>

          <div className="flex md:hidden z-20 ml-auto gap-4 items-center">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                {languages.map(lang => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-[10px] font-bold uppercase transition-colors ${language === lang.code ? 'text-brand-500' : 'text-gray-400 hover:text-white'}`}
                >
                    {lang.label}
                </button>
                ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brand-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-900 absolute w-full top-full left-0 border-t border-gray-800 shadow-2xl animate-in slide-in-from-top-5 duration-200 h-screen overflow-y-auto">
          <div className="px-4 pt-4 pb-20 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 rounded text-base font-bold uppercase tracking-wider border-l-4 ${
                  activeSection === item.id
                    ? 'text-brand-500 bg-white/5 border-brand-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/5 border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
             <button
                onClick={handleBookNow}
                className="block w-full text-center mt-6 bg-brand-600 text-white px-4 py-4 rounded font-bold uppercase tracking-wider shadow-lg"
              >
                {trans.nav.book}
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;