import React, { useState } from 'react';
import { Tent, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const { trans } = useLanguage();

  return (
    <footer className="bg-dark-950 text-gray-400 pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              {!logoError ? (
                <img 
                  src="/images/logo.png" 
                  alt="Gopeng Glamping Park" 
                  className="h-16 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2 mb-6 text-white group cursor-pointer">
                  <div className="bg-brand-600 p-1.5 rounded">
                    <Tent size={24} />
                  </div>
                  <span className="font-display text-2xl font-bold uppercase tracking-wide">Gopeng <span className="text-brand-500">Glamping</span></span>
                </div>
              )}
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-500">
              {trans.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-600 hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">{trans.footer.explore}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">{trans.nav.home}</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">{trans.nav.stay}</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">{trans.nav.rates}</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">{trans.nav.gallery}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">{trans.footer.info}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="hover:text-brand-500 transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowPrivacy(true)} 
                  className="hover:text-brand-500 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Safety Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">{trans.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">{trans.footer.office}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-500" />
                <span>Lot 10846 Jalan Besar Kg Chulek,<br/>31600 Gopeng, Perak.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500" />
                <span className="text-white font-medium">+60 13-240 8857</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500" />
                <span>booking@gopengglampingpark.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} {trans.footer.rights}</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {trans.footer.official}</span>
          </div>
        </div>
      </div>
      
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
};

export default Footer;