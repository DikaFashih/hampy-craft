import React, { useState } from 'react';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import HeroSection from './components/HeroSection';
import MetricsBar from './components/MetricsBar';
import LogisticsFlow from './components/LogisticsFlow';
import ThreeStudio from './components/ThreeStudio';
import ProductBento from './components/ProductBento';
import UnboxingSteps from './components/UnboxingSteps';
import VisualStudies from './components/VisualStudies';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('id'); // 'id' | 'en'
  const [cartCount, setCartCount] = useState(1); // 1 item (Hampy Lumina)
  const [quoteQuantity, setQuoteQuantity] = useState(1000); // synced with slider
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenQuote = (qty) => {
    if (typeof qty === 'number' && qty > 0) {
      setQuoteQuantity(qty);
    }
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242423]">
      {/* Sticky Frosted Header */}
      <Header
        lang={lang}
        setLang={setLang}
        cartCount={cartCount}
        onOpenQuote={() => handleOpenQuote()}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Off-canvas Mobile Navigation */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        lang={lang}
        setLang={setLang}
        cartCount={cartCount}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Split Hero with Integrated Instant Freight Estimator */}
        <HeroSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* 4-Card Export & Cargo Metrics Strip */}
        <MetricsBar lang={lang} />

        {/* 5-Step Export Supply Chain & Route Timeline */}
        <LogisticsFlow lang={lang} />

        {/* WebGL 3D Studio & Lighting Simulation */}
        <ThreeStudio lang={lang} />

        {/* Product Architecture, Blueprint & Bento Grid */}
        <ProductBento lang={lang} />

        {/* Unboxing Moments & Quick Assembly */}
        <UnboxingSteps lang={lang} />

        {/* Authentic Sleman Craft Visual Studies & 3D Renders */}
        <VisualStudies lang={lang} />
      </main>

      {/* Official Footer */}
      <Footer lang={lang} />

      {/* RFQ & Commercial Quotation Modal with dynamic slider quantity */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        lang={lang}
        initialQuantity={quoteQuantity}
      />

      {/* Floating Official WhatsApp Action Button */}
      <a
        href="https://wa.me/62888899988?text=Halo%20Hampy%20Craft,%20saya%20tertarik%20dengan%20katalog%20ekspor%20Hampy%20Lumina"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center group"
        title="Hubungi WhatsApp Resmi"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
}
