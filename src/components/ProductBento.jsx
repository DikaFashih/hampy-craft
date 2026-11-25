import React from 'react';
import { Ruler, Package, Shield, Zap, Check } from 'lucide-react';

export default function ProductBento({ lang }) {
  const isEn = lang === 'en';

  return (
    <section id="specs" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 border border-forest/15 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Ruler className="w-3.5 h-3.5 text-amberBamboo" />
            <span>{isEn ? 'ENGINEERING & PACKAGING' : 'ARSITEKTUR & KETEKNIKAN PRODUK'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            {isEn ? 'Precision Engineered for Export Integrity' : 'Spesifikasi Teknik & Arsitektur Kemasan'}
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            {isEn
              ? 'Every dimension, structural ring, and packaging layer is designed for sea cargo transit and container volume efficiency.'
              : 'Setiap dimensi, cincin penguat bambu, dan lapisan kemasan dirancang untuk ketahanan pengiriman laut dan efisiensi kubikasi kontainer.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: BLUEPRINT SKETCH & PROPORTIONS (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-xs flex flex-col justify-between card-hover">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sand">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center text-forest">
                    <Ruler className="w-4 h-4 text-amberBamboo" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-forest text-base sm:text-lg">
                      {isEn ? 'Design Engineering Blueprint' : 'Sketsa Teknik & Proporsi Kubah'}
                    </h3>
                    <p className="text-[11px] text-neutral-500">PRK-01 • Indonesian Handcrafted Lighting</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-sand/60 text-forest text-xs font-bold">
                  Ø35 × 40 cm
                </span>
              </div>

              {/* Blueprint Image Preview */}
              <div className="mt-6 rounded-2xl bg-[#FAF8F5] border border-sand p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                <img
                  src="images/blueprint.png"
                  alt="Sketsa Rancangan Teknik Hampy Lumina (Ø35 × 40 cm, Kabel 1,5 m)"
                  className="max-h-72 w-auto object-contain rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Technical Annotations */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 text-xs">
                <div className="p-3 rounded-xl bg-sand/30 border border-sand/60">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {isEn ? 'Dome Diameter' : 'Diameter Kubah'}
                  </span>
                  <strong className="text-forest font-bold text-sm">Ø 35 cm</strong>
                </div>
                <div className="p-3 rounded-xl bg-sand/30 border border-sand/60">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {isEn ? 'Shade Height' : 'Tinggi Kap'}
                  </span>
                  <strong className="text-forest font-bold text-sm">40 cm</strong>
                </div>
                <div className="p-3 rounded-xl bg-sand/30 border border-sand/60 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {isEn ? 'Suspension Cord' : 'Kabel Gantung'}
                  </span>
                  <strong className="text-forest font-bold text-sm">1,5 m (Fabric)</strong>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-600 mt-5 pt-4 border-t border-sand leading-relaxed">
              {isEn
                ? 'Symmetrical handwoven dome reinforced with a lower laminated bamboo ring, woven neck collar, and E27 fitting with 1.5 m fabric cord (net weight ~1.2 kg/unit).'
                : 'Struktur anyaman simetris diperkuat cincin bambu laminasi di bagian bawah, leher anyam rapat, dan dudukan fitting E27 dengan kabel kain 1,5 m (berat bersih ±1,2 kg/unit).'}
            </p>
          </div>

          {/* CARD 2: PACKAGING ARCHITECTURE (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-xs flex flex-col justify-between card-hover">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sand gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center text-forest shrink-0">
                    <Package className="w-4 h-4 text-amberBamboo" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-forest text-base sm:text-lg leading-tight">
                      {isEn ? '10-Pack Knock-Down' : 'Arsitektur Kemasan 10-Pack'}
                    </h3>
                    <p className="text-[11px] text-neutral-500">50 × 50 × 45 cm • 0,1125 CBM</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold shrink-0">
                  {isEn ? '84.4% Space Saved' : '84,4% Hemat Ruang'}
                </span>
              </div>

              {/* Packaging Diagram */}
              <div className="mt-6 rounded-2xl bg-[#FAF8F5] border border-sand p-3 flex items-center justify-center overflow-hidden">
                <img
                  src="images/hampy-lumina-packaging.svg"
                  alt="Diagram Kemasan Knock-Down 10 Kap Lampu"
                  className="w-full h-auto max-h-60 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Packaging Specs List */}
              <ul className="space-y-2 mt-5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{isEn ? '5-Ply Double Wall Corrugated Carton (50×50×45 cm)' : 'Karton Gelombang Ganda 5-Ply (50×50×45 cm)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{isEn ? 'Honeycomb Paper Cushioning & Natural Cotton Bags' : 'Bantalan Honeycomb Paper & Kantong Katun Alami'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{isEn ? 'Paper-based packaging without single-use plastic' : 'Kemasan berbasis kertas tanpa plastik sekali pakai'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{isEn ? 'Saves 84.4% volume (11.25 CBM vs ~72 CBM for 1-pack)' : 'Hemat 84,4% ruang (11,25 CBM vs ±72 CBM bila 1 kap/box)'}</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 space-y-2">
              <div className="p-3 rounded-xl bg-forest/5 text-[11px] text-forest font-semibold leading-relaxed">
                {isEn
                  ? 'Weight per carton: 12 kg net (10 shades) • 13.5 kg carton gross. 100 cartons (1,350 kg) + 7 pallets (125 kg) = 1,475 kg shipment gross.'
                  : 'Berat per karton: 12 kg bersih (10 kap) • 13,5 kg berat kotor karton. 100 karton (1.350 kg) + 7 palet (125 kg) = 1.475 kg berat kotor muatan.'}
              </div>
              <p className="text-[10px] text-neutral-500 italic">
                {isEn
                  ? '*Assumes 10-shade knock-down nesting; physical stack & drop testing on the first sample is required prior to mass production.'
                  : '*Asumsi 10 kap per karton (knock-down); validasi pengujian fisik (drop test & uji tumpuk) disyaratkan pada sampel pertama.'}
              </p>
            </div>
          </div>

          {/* CARD 3: MATERIAL & PRESERVATION (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-sand/80 shadow-xs flex flex-col justify-between card-hover">
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-sand">
                <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center text-forest">
                  <Shield className="w-4 h-4 text-amberBamboo" />
                </div>
                <div>
                  <h4 className="font-extrabold text-forest text-base">
                    {isEn ? 'Bamboo Quality & Preservation' : 'Kualitas Bambu & Pengawetan'}
                  </h4>
                  <p className="text-[11px] text-neutral-500">Bambu Petung &amp; Apus asal Sleman, Yogyakarta</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-neutral-600 leading-relaxed">
                <p>
                  {isEn
                    ? 'Selected bamboo is inspected for target moisture content below 12% prior to weaving to limit moisture and mold risks during 30–40 days of sea transit.'
                    : 'Bambu pilihan diperiksa kadar airnya (target di bawah 12%) sebelum dianyam guna menekan risiko lembap dan jamur selama pelayaran laut 30–40 hari.'}
                </p>
                <p>
                  {isEn
                    ? 'Preserved without arsenic or creosote and finished with water-based clear matte coating accompanied by material safety data sheets (REACH alignment).'
                    : 'Diawetkan tanpa arsenik dan kreosot serta dilapisi pernis berbasis air (water-based clear matte coating) dengan lembar data keselamatan sesuai ketentuan REACH.'}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sand flex items-center justify-between text-xs font-bold text-forest">
              <span>{isEn ? 'Target Moisture: <12%' : 'Target Kadar Air: <12%'}</span>
              <span className="text-amberBamboo font-semibold">{isEn ? 'Arsenic & Creosote Free' : 'Bebas Arsenik & Kreosot'}</span>
            </div>
          </div>

          {/* CARD 4: ELECTRICAL SAFETY (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-sand/80 shadow-xs flex flex-col justify-between card-hover">
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-sand">
                <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center text-forest">
                  <Zap className="w-4 h-4 text-amberBamboo" />
                </div>
                <div>
                  <h4 className="font-extrabold text-forest text-base">
                    {isEn ? 'Universal Electrical Fixture' : 'Standar Kelistrikan Universal'}
                  </h4>
                  <p className="text-[11px] text-neutral-500">Fitting E27 • 110–240 V AC • Kabel Kain 1,5 m</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-neutral-600 leading-relaxed">
                <p>
                  {isEn
                    ? 'Equipped with a universal E27 fitting supporting 110–240 V and a warm white LED bulb included in the package. Designed to align with EU electrical directives (CE in preparation with importer).'
                    : 'Dilengkapi fitting E27 universal (110–240 V) dan bohlam LED warm white yang sudah termasuk dalam paket. Dirancang mengacu pada ketentuan keselamatan UE (CE sedang dipersiapkan bersama importir).'}
                </p>
                <p>
                  {isEn
                    ? 'Supplied with a 1.5-meter fabric-braided suspension cord packed separately inside the knock-down partition box to prevent damage during shipping.'
                    : 'Menggunakan kabel kepang kain sepanjang 1,5 meter yang dikemas terpisah di dalam sekat karton knock-down untuk menjaga komponen selama pengiriman.'}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sand flex items-center justify-between text-xs font-bold text-forest">
              <span>{isEn ? 'Bulb: Warm White LED (Included)' : 'Bohlam: LED Warm White (Termasuk)'}</span>
              <span className="text-amberBamboo font-semibold">{isEn ? 'CE Preparation (EN 60598)' : 'Persiapan CE (EN 60598)'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
