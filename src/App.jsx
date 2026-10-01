import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

import { PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route resolver
  const renderCurrentPage = () => {
    const path = currentPath.toLowerCase();

    if (path === '/' || path === '') {
      return <HomePage navigate={navigate} onOpenQuote={() => setIsQuoteOpen(true)} />;
    }
    if (path.startsWith('/about-us') || path.startsWith('/about')) {
      return <AboutPage navigate={navigate} onOpenQuote={() => setIsQuoteOpen(true)} />;
    }
    if (path.startsWith('/services')) {
      // Extract serviceId if present (e.g. /services/construction-materials)
      const parts = path.split('/').filter(Boolean);
      const serviceId = parts.length > 1 ? parts[1] : null;
      return <ServicesPage serviceId={serviceId} navigate={navigate} onOpenQuote={() => setIsQuoteOpen(true)} />;
    }
    if (path.startsWith('/industries')) {
      return <IndustriesPage navigate={navigate} onOpenQuote={() => setIsQuoteOpen(true)} />;
    }
    if (path.startsWith('/projects')) {
      return <ProjectsPage navigate={navigate} onOpenQuote={() => setIsQuoteOpen(true)} />;
    }
    if (path.startsWith('/resources')) {
      return <ResourcesPage navigate={navigate} onOpenQuote={() => setIsQuoteOpen(true)} />;
    }
    if (path.startsWith('/contact')) {
      return <ContactPage onOpenQuote={() => setIsQuoteOpen(true)} />;
    }

    // Default fallback to Home
    return <HomePage navigate={navigate} onOpenQuote={() => setIsQuoteOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#101C2C]">
      {/* Sticky Header */}
      <Header 
        currentPath={currentPath} 
        navigate={navigate} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Floating Quick Action Button for Mobile/Desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-[#071D36] text-[#E2B84A] border-2 border-[#E2B84A] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
          title={`Call ${COMPANY_INFO.phone}`}
        >
          <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="hidden sm:flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#D6A63A] to-[#C99832] text-[#071D36] font-bold text-xs uppercase tracking-wider shadow-2xl hover:from-[#E2B84A] hover:to-[#D6A63A] transition-all transform hover:-translate-y-0.5"
        >
          <span>Quick Quote</span>
        </button>
      </div>

      {/* Modal for Corporate Quotations */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />

      {/* Footer */}
      <Footer 
        navigate={navigate} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />
    </div>
  );
}
