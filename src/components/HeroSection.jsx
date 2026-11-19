import React, { useState } from 'react';
import { Ship, Box, ShieldCheck, Clock, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SPECS } from '../data/specs';

export default function HeroSection({ lang, onOpenQuote }) {
  const isEn = lang === 'en';

  // Calculator State in Hero
  const [containerType, setContainerType] = useState('20ft'); // '20ft' | '40ft' | 'lcl'
  const [quantity, setQuantity] = useState(1000); // default standard 1000 pcs (100 cartons)

  const cartons = Math.ceil(quantity / 10);
  const totalCbm = parseFloat((cartons * SPECS.packaging.cartonCbm).toFixed(3));
  const totalWeight = Math.round(cartons * SPECS.packaging.cartonGrossWeightKg);

  // Container capacity calculation
  const containerMaxCbm = containerType === '20ft' ? 33 : (containerType === '40ft' ? 68 : 15);
  const utilizationPercent = Math.min(100, parseFloat(((totalCbm / containerMaxCbm) * 100).toFixed(1)));

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
                'Artisanal knock-down bamboo pendant lamps crafted from Sleman Petung & Apus bamboo. Engineered for ocean freight cubic optimization (10 lamps per carton), 100% plastic-free, ready for Rotterdam Port delivery.'
              ) : (
                'Kap lampu gantung knock-down artisanal dari bambu Petung & Apus Sleman. Dirancang hemat kubikasi logistik laut (10 kap per karton), 100% bebas plastik, siap kirim ke Pelabuhan Rotterdam.'
              )}
            </p>

            {/* Trust Chips / Report Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 w-full max-w-xl">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sand shadow-xs">
                <MapPin className="w-4 h-4 text-amberBamboo shrink-0" />
                <span className="text-xs font-bold text-forest">{isEn ? 'Sleman, YGY' : 'Sleman, DIY'}</span>
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
                <span className="text-xs font-bold text-forest">{isEn ? 'EU Standard' : 'Acuan UE'}</span>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 w-full sm:w-auto">
              <a
                href="#studio"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-forest text-cream font-bold text-sm shadow-md hover:bg-forestDark transition-all group"
              >
                <Sparkles className="w-4 h-4 text-amberBamboo group-hover:rotate-12 transition-transform" />
                <span>{isEn ? 'Open 3D Prototype' : 'Buka Prototipe 3D'}</span>
              </a>
              <a
                href="#logistics"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-forest/20 text-forest font-bold text-sm hover:bg-sand/50 transition-all shadow-xs"
              >
                <span>{isEn ? 'View Logistics Flow' : 'Pelajari Rantai Pasok'}</span>
                <ArrowRight className="w-4 h-4 text-amberBamboo" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: DRIBBBLE 16PIXEL FREIGHT & CARGO ESTIMATOR CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-sand/80 relative">
              
              {/* Card Header & Badge */}
              <div className="flex items-start justify-between pb-4 border-b border-sand">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest">
                      {isEn ? 'Instant Freight Simulator' : 'Simulasi Kargo Instan'}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-forest mt-0.5">
                    {isEn ? 'Container Load Estimator' : 'Estimator Muatan Ekspor'}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-[11px] font-bold text-forest flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-amberBamboo" />
                  <span>IDTPP ➔ NLRTM</span>
                </div>
              </div>

              {/* Container Selector Tabs */}
              <div className="mt-5">
                <label className="text-xs font-bold text-neutral-500 block mb-2">
                  {isEn ? 'Select Container Type:' : 'Pilih Jenis Kontainer:'}
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-sand/60 rounded-xl">
                  <button
                    onClick={() => setContainerType('20ft')}
                    className={`py-2 px-1 text-xs font-bold rounded-lg transition-all ${
                      containerType === '20ft' 
                        ? 'bg-forest text-cream shadow-xs' 
                        : 'text-neutral-600 hover:text-forest'
                    }`}
                  >
                    20ft (33 CBM)
                  </button>
                  <button
                    onClick={() => setContainerType('40ft')}
                    className={`py-2 px-1 text-xs font-bold rounded-lg transition-all ${
                      containerType === '40ft' 
                        ? 'bg-forest text-cream shadow-xs' 
                        : 'text-neutral-600 hover:text-forest'
                    }`}
                  >
                    40ft HC (68 CBM)
                  </button>
                  <button
                    onClick={() => setContainerType('lcl')}
                    className={`py-2 px-1 text-xs font-bold rounded-lg transition-all ${
                      containerType === 'lcl' 
                        ? 'bg-forest text-cream shadow-xs' 
                        : 'text-neutral-600 hover:text-forest'
                    }`}
                  >
                    LCL Consol
                  </button>
                </div>
              </div>

              {/* Quantity Stepper & Slider */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-neutral-700">{isEn ? 'Order Quantity:' : 'Jumlah Kap Lampu:'}</span>
                  <span className="text-forest text-sm font-extrabold">{quantity.toLocaleString()} {isEn ? 'Pcs' : 'Unit'}</span>
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
                  <span className="text-[10px] text-neutral-500">10 kap / box (50×50×45cm)</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-sand">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {isEn ? 'Cargo Volume' : 'Total Kubikasi'}
                  </span>
                  <strong className="text-base font-extrabold text-amberBamboo mt-0.5 block">
                    {totalCbm} CBM
                  </strong>
                  <span className="text-[10px] text-neutral-500">Gross: {totalWeight.toLocaleString()} kg</span>
                </div>
              </div>

              {/* Visual Container Fill Meter */}
              <div className="mt-4 p-3.5 rounded-2xl bg-forest/5 border border-forest/15">
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-forest">
                    {isEn ? 'Container Space Occupied:' : 'Kapasitas Kontainer Terisi:'}
                  </span>
                  <span className="text-amberBamboo font-extrabold">{utilizationPercent}%</span>
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
                    isEn ? '★ Exact export report benchmark: 100 cartons fill 34.09% of a 20ft container.' : '★ Sesuai data laporan: 100 karton mengisi 34,09% kontainer 20 kaki.'
                  ) : (
                    isEn ? `Occupies ${totalCbm} of ${containerMaxCbm} CBM total capacity.` : `Mengisi ${totalCbm} dari total ${containerMaxCbm} CBM kapasitas kontainer.`
                  )}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenQuote}
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
