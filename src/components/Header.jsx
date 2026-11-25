import React, { useState, useEffect } from 'react';
import { Ship, ShoppingBag, Globe, Menu } from 'lucide-react';

export default function Header({ lang, setLang, cartCount, onOpenQuote, onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isEn = lang === 'en';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-header py-3 shadow-sm border-b border-sand/70' : 'bg-[#FAF8F5]/90 py-4 border-b border-sand/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Route Tag */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#top" className="flex items-center group">
              <img
                src="images/logo.jpg"
                alt="Hampy Craft — Indonesian Handcrafted Lighting"
                className="h-9 sm:h-10 w-auto object-contain rounded-lg group-hover:opacity-90 transition-opacity"
              />
            </a>

            {/* Live Export Route Pill Badge */}
            <div className="hidden 2xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-amberBamboo animate-pulse"></span>
              <Ship className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'Export Route: Tanjung Priok ➔ Rotterdam' : 'Rute Ekspor: Tanjung Priok ➔ Rotterdam'}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-white/70 border border-sand/80 px-2 py-1.5 rounded-full shadow-xs shrink-0">
            <a href="#about" className="px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-colors whitespace-nowrap">
              {isEn ? 'About Us' : 'Tentang Kami'}
            </a>
            <a href="#studio" className="px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-colors whitespace-nowrap">
              {isEn ? 'Lighting Studio' : 'Simulasi Cahaya'}
            </a>
            <a href="#logistics" className="px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-colors whitespace-nowrap">
              {isEn ? 'Logistics Route' : 'Logistik Ekspor'}
            </a>
            <a href="#specs" className="px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-colors whitespace-nowrap">
              {isEn ? 'Specifications' : 'Spesifikasi'}
            </a>
            <a href="#contact" className="px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-colors whitespace-nowrap">
              {isEn ? 'Contact' : 'Kontak'}
            </a>
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(isEn ? 'id' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sand text-xs font-bold text-neutral-700 hover:border-forest/40 hover:text-forest transition-colors bg-white/80 whitespace-nowrap"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500" />
              <span>{isEn ? 'EN' : 'ID'}</span>
            </button>

            {/* Request Quote Button */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream hover:bg-forestDark text-xs font-bold transition-colors shadow-sm hover:shadow group whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amberBamboo group-hover:scale-110 transition-transform" />
              <span>{isEn ? 'Quotation Basket' : 'Keranjang Penawaran'}</span>
              <span className="w-5 h-5 rounded-full bg-amberBamboo text-cream text-[10px] font-extrabold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile RFQ quick icon */}
            <button
              onClick={onOpenQuote}
              className="sm:hidden relative w-9 h-9 rounded-full bg-forest text-cream flex items-center justify-center shadow-sm"
              title="Keranjang Penawaran"
            >
              <ShoppingBag className="w-4 h-4 text-amberBamboo" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amberBamboo text-cream text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-xl border border-sand text-neutral-700 hover:bg-sand/40"
              aria-label="Buka Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
