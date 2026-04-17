
import React, { useState, lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import { AppSection } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

// Code-split heavy pages — only loaded when the user navigates to them
const ActivitiesSection  = lazy(() => import('./components/ActivitiesPage'));
const RatesPage          = lazy(() => import('./components/RatesPage'));
const TeamBuildingPage   = lazy(() => import('./components/TeamBuildingPage'));

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-dark-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" />
      <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Loading…</span>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);

  const handleNavigate = (section: AppSection) => {
    setActiveSection(section);
    
    if (section === AppSection.RATES || section === AppSection.TEAM_BUILDING) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section === AppSection.HOME ? 'root' : section);
      if (element) {
        if (section === AppSection.HOME) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleBook = () => {
    window.open('https://live.ipms247.com/booking/book-rooms-gopengglampingpark', '_blank');
  };

  const handleCorporateContact = () => {
    setActiveSection(AppSection.CONTACT);
    setTimeout(() => {
        document.getElementById(AppSection.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          {activeSection === AppSection.RATES ? (
            <RatesPage 
              onBook={handleBook} 
              onBack={() => handleNavigate(AppSection.STAY)}
            />
          ) : activeSection === AppSection.TEAM_BUILDING ? (
              <TeamBuildingPage 
                onBook={handleCorporateContact}
              />
          ) : (
            <>
              <Hero 
                onExplore={() => handleNavigate(AppSection.STAY)} 
                onWatchVideo={() => handleNavigate(AppSection.PLAY)}
              />
              <Features onNavigate={handleNavigate} />
              <section id={AppSection.PLAY}>
                <ActivitiesSection 
                  onBack={() => {}} 
                  onBook={handleBook}
                />
              </section>
              <Gallery />
              <Reviews />
              <Contact />
            </>
          )}
        </Suspense>
      </main>

      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
