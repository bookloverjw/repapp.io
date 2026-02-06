import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Legal, PrivacyContent, TermsContent } from './components/Legal';

type Page = 'home' | 'privacy' | 'terms';

// Get initial page from URL hash
const getPageFromHash = (): Page => {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#privacy' || hash === '#/privacy') return 'privacy';
  if (hash === '#terms' || hash === '#/terms') return 'terms';
  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    // Update URL hash for direct linking
    if (page === 'privacy') {
      window.location.hash = '#privacy';
    } else if (page === 'terms') {
      window.location.hash = '#terms';
    } else {
      window.location.hash = '';
    }
    // State update will happen via hashchange listener
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white selection:bg-[#FF6B6B]/30 font-sans">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      {currentPage === 'home' && (
        <main>
          <Hero />
          <Features />
          <Screenshots />
          <Testimonials />
          <Pricing />
        </main>
      )}

      {currentPage === 'privacy' && (
        <Legal 
          title="Privacy Policy" 
          lastUpdated="February 6, 2026" 
          content={<PrivacyContent />} 
        />
      )}

      {currentPage === 'terms' && (
        <Legal 
          title="Terms of Service" 
          lastUpdated="February 6, 2026" 
          content={<TermsContent />} 
        />
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
