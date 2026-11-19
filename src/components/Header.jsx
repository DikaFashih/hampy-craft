import React, { useState, useEffect } from 'react';
import { Ship, ShoppingBag, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

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
            <a href="#top" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-cream shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-cream" viewBox="0 0 32 32" fill="currentColor">
                  <rect x="9" y="10" width="3.2" height="18" rx="1"/>
                  <rect x="15" y="4" width="3.5" height="24" rx="1"/>
                  <path d="M9 17c-3.5-1-5.5-3.5-6-6 3 0 5.5 1.8 6 6z"/>
                  <path d="M18.5 12c3.5-1.5 6-4.5 6.5-7.5-3.2.5-5.8 2.8-6.5 7.5z"/>
                  <path d="M18.5 20c3.2-1 5.2-3.2 5.8-5.8-2.8.4-5 2.2-5.8 5.8z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-forest text-base leading-none">HAMPY CRAFT</span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase mt-0.5">Indonesian Lighting</span>
              </div>
            </a>

            {/* Dribbble-style Live Export Route Pill Badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amberBamboo animate-pulse"></span>
              <Ship className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'Export Route: Tanjung Priok ➔ Rotterdam' : 'Rute Ekspor: Tanjung Priok ➔ Rotterdam'}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 border border-sand/80 px-2 py-1.5 rounded-full shadow-xs">
            <a href="#about" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-all">
              {isEn ? 'About Us' : 'Tentang Kami'}
            </a>
            <a href="#studio" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-all">
              {isEn ? 'Lighting Studio' : 'Simulasi Cahaya'}
            </a>
            <a href="#logistics" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-all">
              {isEn ? 'Logistics Route' : 'Logistik Ekspor'}
            </a>
            <a href="#specs" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-all">
              {isEn ? 'Specifications' : 'Spesifikasi'}
            </a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-forest hover:bg-forest/5 transition-all">
              {isEn ? 'Contact' : 'Kontak'}
            </a>
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(isEn ? 'id' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sand text-xs font-bold text-neutral-700 hover:border-forest/40 hover:text-forest transition-colors bg-white/80"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500" />
              <span>{isEn ? 'EN' : 'ID'}</span>
            </button>

            {/* Request Quote Button (Dribbble 16pixel High Contrast) */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream hover:bg-forestDark text-xs font-bold transition-all shadow-sm hover:shadow group"
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
