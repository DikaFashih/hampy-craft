import React, { useState } from 'react';
import { Ship, Box, ShieldCheck, Clock, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SPECS } from '../data/specs';

export default function HeroSection({ lang, onOpenQuote }) {
  const isEn = lang === 'en';

  // Calculator State in Hero
  const [containerType, setContainerType] = useState('20ft'); // '20ft' | '40ft' | 'lcl'
  const [quantity, setQuantity] = useState(1000); // default standard 1000 pcs (100 cartons)

  const cartons = Math.ceil(quantity / 10);
  const rawCbm = (cartons * SPECS.packaging.cartonCbm).toFixed(3);
  const totalCbmDisplay = isEn ? rawCbm : rawCbm.replace('.', ',');
  const totalNetWeight = Math.round(cartons * (SPECS.packaging.cartonNetWeightKg || 13.5));
  const totalGrossWeight = Math.round(cartons * SPECS.packaging.cartonGrossWeightKg);

  // Container capacity calculation
  const containerMaxCbm = containerType === '20ft' ? 33 : (containerType === '40ft' ? 68 : 15);
  const utilizationPercent = Math.min(100, parseFloat(((parseFloat(rawCbm) / containerMaxCbm) * 100).toFixed(1)));
  const utilizationDisplay = isEn ? `${utilizationPercent}%` : `${utilizationPercent.toString().replace('.', ',')}%`;

  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-radial from-sand/30 via-cream to-cream">
      {/* Decorative Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3F2B08_1px,transparent_1px),linear-gradient(to_bottom,#1E3F2B08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Left Hero Content + Right Dribbble Freight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: B2B VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Academic & Origin Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/15 text-forest text-xs font-extrabold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-amberBamboo" />
              <span>{isEn ? 'PRK-01 • SLEMAN ARTISANAL BAMBOO B2B EXPORT' : 'PRK-01 • EKSPOR B2B KERANGKA BAMBU SLEMAN'}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold text-forest leading-[1.15] tracking-tight">
              {isEn ? (
                <>Sustainable Handcrafted Lighting for <span className="text-amberBamboo italic">European Global</span> Export.</>
              ) : (
                <>Pencahayaan Bambu Ramah Lingkungan untuk Pasar <span className="text-amberBamboo italic">Ekspor Eropa</span>.</>
              )}
            </h1>

            {/* Description */}
            <p className="mt-5 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {isEn ? (
                'Artisanal knock-down bamboo pendant lamps crafted from Sleman Petung & Apus bamboo. Engineered for ocean freight cubic optimization (10 lamps per carton), plastic-free packaging, ready for Rotterdam Port delivery.'
              ) : (
                'Kap lampu gantung knock-down artisanal dari bambu Petung & Apus Sleman. Dirancang hemat kubikasi logistik laut (10 kap per karton), kemasan bebas plastik, siap kirim ke Pelabuhan Rotterdam.'
              )}
            </p>

            {/* Trust Chips / Report Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 w-full max-w-xl">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sand shadow-xs">
                <MapPin className="w-4 h-4 text-amberBamboo shrink-0" />
                <span className="text-xs font-bold text-forest">{isEn ? 'Sleman, DIY' : 'Sleman, DIY'}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sand shadow-xs">
                <Box className="w-4 h-4 text-amberBamboo shrink-0" />
                <span className="text-xs font-bold text-forest">MOQ 50 Unit</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sand shadow-xs">
                <Clock className="w-4 h-4 text-amberBamboo shrink-0" />
                <span className="text-xs font-bold text-forest">30–45 Hari</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sand shadow-xs">
                <ShieldCheck className="w-4 h-4 text-amberBamboo shrink-0" />
                <span className="text-xs font-bold text-forest">{isEn ? 'Acuan UE (CE)' : 'Acuan UE (CE)'}</span>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href="#studio"
                className="px-6 py-3.5 rounded-full bg-forest text-cream font-bold text-sm hover:bg-forestDark transition-all shadow-md flex items-center gap-2.5 group"
              >
                <Sparkles className="w-4 h-4 text-amberBamboo group-hover:rotate-12 transition-transform" />
                <span>{isEn ? 'Explore 3D Prototype' : 'Buka Prototipe 3D'}</span>
              </a>

              <a
                href="#specs"
                className="px-6 py-3.5 rounded-full bg-white border border-sand font-bold text-sm text-neutral-800 hover:bg-sand/40 hover:text-forest transition-colors flex items-center gap-2"
              >
                <span>{isEn ? 'Technical Specifications' : 'Spesifikasi Teknis'}</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Academic Simulation Notice */}
            <div className="mt-7 flex items-center gap-2 text-xs text-neutral-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {isEn
                  ? 'Academic Coursework Project (PRK-01): Specifications verified against export feasibility report.'
                  : 'Dokumen Simulasi Praktikum Ekspor (PRK-01): Data diselaraskan dengan laporan perencanaan ekspor.'}
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: DRIBBLE 16PIXEL FREIGHT & CBM ESTIMATOR CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sand/80 relative">
              
              {/* Card Header & Route Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-sand">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                    <Ship className="w-5 h-5 text-amberBamboo" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-forest text-base">
                      {isEn ? 'Cargo & Container Estimator' : 'Kalkulator Muatan Kargo'}
                    </h3>
                    <p className="text-[11px] text-neutral-500">
                      Tanjung Priok (ID) ➔ Rotterdam (NL)
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-forest text-cream">
                  FOB Priok
                </span>
              </div>

              {/* Container Selector Tabs */}
              <div className="mt-5">
                <label className="text-xs font-bold text-neutral-700 block mb-2">
                  {isEn ? 'Container Mode:' : 'Pilihan Kontainer:'}
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-sand/40 rounded-xl border border-sand">
                  <button
                    onClick={() => setContainerType('20ft')}
                    className={`py-2 px-1 text-center text-xs font-extrabold rounded-lg transition-all ${
                      containerType === '20ft' 
                        ? 'bg-forest text-cream shadow-xs' 
                        : 'text-neutral-600 hover:text-forest'
                    }`}
                  >
                    20ft (33 CBM)
                  </button>
                  <button
                    onClick={() => setContainerType('40ft')}
                    className={`py-2 px-1 text-center text-xs font-extrabold rounded-lg transition-all ${
                      containerType === '40ft' 
                        ? 'bg-forest text-cream shadow-xs' 
                        : 'text-neutral-600 hover:text-forest'
                    }`}
                  >
                    40ft HC (68 CBM)
                  </button>
                  <button
                    onClick={() => setContainerType('lcl')}
                    className={`py-2 px-1 text-center text-xs font-extrabold rounded-lg transition-all ${
                      containerType === 'lcl' 
                        ? 'bg-forest text-cream shadow-xs' 
                        : 'text-neutral-600 hover:text-forest'
                    }`}
                  >
                    LCL Kargo
                  </button>
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-neutral-700">{isEn ? 'Order Quantity:' : 'Jumlah Kap Lampu:'}</span>
                  <span className="text-forest text-sm font-extrabold">
                    {quantity.toLocaleString(isEn ? 'en-US' : 'id-ID')} {isEn ? 'Pcs' : 'Unit'}
                  </span>
                </div>

                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full accent-forest cursor-pointer"
                />

                {/* Quick Presets */}
                <div className="flex items-center justify-between gap-1.5 mt-2">
                  {[100, 300, 500, 1000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setQuantity(preset)}
                      className={`text-[10px] font-bold px-2 py-1 rounded-md border transition-all ${
                        quantity === preset 
                          ? 'bg-amberBamboo text-cream border-amberBamboo' 
                          : 'border-sand text-neutral-600 hover:border-forest/40'
                      }`}
                    >
                      {preset} pcs
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Metrics Bento Grid inside Card */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-sand">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {isEn ? 'Master Cartons' : 'Jumlah Karton'}
                  </span>
                  <strong className="text-base font-extrabold text-forest mt-0.5 block">
                    {cartons} {isEn ? 'Boxes' : 'Karton'}
                  </strong>
                  <span className="text-[10px] text-neutral-500">10 kap / box (50×50×45 cm)</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-sand">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {isEn ? 'Cargo Volume' : 'Total Kubikasi'}
                  </span>
                  <strong className="text-base font-extrabold text-amberBamboo mt-0.5 block">
                    {totalCbmDisplay} CBM
                  </strong>
                  <span className="text-[10px] text-neutral-500">
                    {totalNetWeight.toLocaleString(isEn ? 'en-US' : 'id-ID')} kg (Gross: {totalGrossWeight.toLocaleString(isEn ? 'en-US' : 'id-ID')} kg)
                  </span>
                </div>
              </div>

              {/* Visual Container Fill Meter */}
              <div className="mt-4 p-3.5 rounded-2xl bg-forest/5 border border-forest/15">
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-forest">
                    {isEn ? 'Container Space Occupied:' : 'Kapasitas Kontainer Terisi:'}
                  </span>
                  <span className="text-amberBamboo font-extrabold">{utilizationDisplay}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-2.5 bg-sand rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-forest rounded-full transition-all duration-500"
                    style={{ width: `${utilizationPercent}%` }}
                  />
                </div>
                
                <p className="text-[10px] text-neutral-600 mt-2 leading-tight">
                  {containerType === '20ft' && quantity === 1000 ? (
                    isEn ? '★ Benchmark laporan ekspor: 100 karton mengisi 34,09% kontainer 20 kaki (hemat 84,4% ruang dibanding pengiriman utuh).' : '★ Benchmark laporan ekspor: 100 karton mengisi 34,09% kontainer 20 kaki (hemat 84,4% ruang dibanding pengiriman utuh).'
                  ) : (
                    isEn ? `Occupies ${totalCbmDisplay} of ${containerMaxCbm} CBM total capacity.` : `Mengisi ${totalCbmDisplay} dari total ${containerMaxCbm} CBM kapasitas kontainer.`
                  )}
                </p>
              </div>

              {/* CTA Button — carries exact slider quantity */}
              <button
                onClick={() => onOpenQuote(quantity)}
                className="w-full mt-5 py-3.5 px-4 rounded-2xl bg-amberBamboo text-cream font-extrabold text-xs uppercase tracking-wider hover:bg-amber-600 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>{isEn ? 'Request Official FOB Quote' : 'Minta Penawaran FOB Resmi'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
