import React from 'react';
import { X, Ship, ShoppingBag, Globe, ArrowRight } from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose, lang, setLang, cartCount, onOpenQuote }) {
  if (!isOpen) return null;

  const isEn = lang === 'en';

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div className="fixed top-0 right-0 bottom-0 w-[84vw] max-w-sm bg-[#FAF8F5] shadow-2xl flex flex-col z-50 p-6 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5 border-b border-sand">
          <div className="flex items-center gap-2.5">
            <img
              src="images/logo.jpg"
              alt="Hampy Craft"
              className="h-8 w-auto object-contain rounded-md"
            />
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-sand flex items-center justify-center text-neutral-600 hover:text-forest hover:bg-sand"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Route status badge in drawer */}
        <div className="mt-4 p-3 rounded-2xl bg-forest/5 border border-forest/10 flex items-center gap-2 text-xs font-semibold text-forest">
          <Ship className="w-4 h-4 text-amberBamboo shrink-0" />
          <span>{isEn ? 'Export Route: Tanjung Priok ➔ Rotterdam' : 'Rute: Tanjung Priok ➔ Rotterdam'}</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 mt-6">
          <a 
            href="#about" 
            onClick={handleLinkClick}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-neutral-800 hover:bg-forest/5 hover:text-forest transition-colors"
          >
            <span>{isEn ? 'About Us' : 'Tentang Kami'}</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
          <a 
            href="#studio" 
            onClick={handleLinkClick}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-neutral-800 hover:bg-forest/5 hover:text-forest transition-colors"
          >
            <span>{isEn ? 'Lighting Studio 3D' : 'Simulasi Cahaya 3D'}</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
          <a 
            href="#logistics" 
            onClick={handleLinkClick}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-neutral-800 hover:bg-forest/5 hover:text-forest transition-colors"
          >
            <span>{isEn ? 'Export Logistics' : 'Logistik Ekspor'}</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
          <a 
            href="#specs" 
            onClick={handleLinkClick}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-neutral-800 hover:bg-forest/5 hover:text-forest transition-colors"
          >
            <span>{isEn ? 'Specifications & Blueprint' : 'Spesifikasi & Blueprint'}</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-neutral-800 hover:bg-forest/5 hover:text-forest transition-colors"
          >
            <span>{isEn ? 'Contact' : 'Kontak'}</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
        </nav>

        {/* Action Controls */}
        <div className="mt-auto pt-6 border-t border-sand flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest text-cream font-bold text-sm shadow-md"
          >
            <ShoppingBag className="w-4 h-4 text-amberBamboo" />
            <span>{isEn ? 'Quotation Basket' : 'Keranjang Penawaran'}</span>
            <span className="w-5 h-5 rounded-full bg-amberBamboo text-cream text-[10px] font-extrabold flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          <button
            onClick={() => setLang(isEn ? 'id' : 'en')}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-sand bg-white text-xs font-bold text-neutral-700"
          >
            <Globe className="w-4 h-4 text-neutral-500" />
            <span>{isEn ? 'Ganti Bahasa (Bahasa Indonesia)' : 'Switch Language (English)'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
