import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Legal, PrivacyContent, TermsContent } from './components/Legal';

type Page = 'home' | 'privacy' | 'terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    if (page === 'privacy') setCurrentPage('privacy');
    else if (page === 'terms') setCurrentPage('terms');
    else setCurrentPage('home');
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
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
