import React from 'react';
import { Ruler, Package, Shield, Zap, Check, ArrowUpRight } from 'lucide-react';
import { SPECS } from '../data/specs';

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
              ? 'Every dimension, joinery curve, and packaging layer is designed to withstand sea cargo humidity and reduce freight costs.'
              : 'Setiap dimensi, kurva anyaman, dan struktur kemasan dirancang untuk menahan kelembapan kargo laut dan menekan biaya logistik.'}
          </p>
        </div>

        {/* Bento Grid (Dribbble 16pixel Bento Box Layout) */}
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
                    <p className="text-[11px] text-neutral-500">PRK-01 • Skala Proporsional Kerajinan</p>
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
                  alt="Sketsa Rancangan Teknik Hampy Lumina"
                  className="max-h-72 w-auto object-contain rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Technical Annotations */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 text-xs">
                <div className="p-3 rounded-xl bg-sand/30 border border-sand/60">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">Diameter Kubah</span>
                  <strong className="text-forest font-bold text-sm">Ø 35 cm</strong>
                </div>
                <div className="p-3 rounded-xl bg-sand/30 border border-sand/60">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">Tinggi Kap</span>
                  <strong className="text-forest font-bold text-sm">40 cm</strong>
                </div>
                <div className="p-3 rounded-xl bg-sand/30 border border-sand/60 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">Kabel Gantung</span>
                  <strong className="text-forest font-bold text-sm">1,5 m (Fabric)</strong>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-600 mt-5 pt-4 border-t border-sand leading-relaxed">
              {isEn
                ? 'Structured with a lower circular bamboo ring frame, dense neck collar weave, and universal E27 ceramic fixture mount.'
                : 'Struktur anyaman simetris diperkuat rangka bambu melingkar di bagian bawah, collar leher anyam rapat, dan dudukan fitting E27.'}
            </p>
          </div>

          {/* CARD 2: PACKAGING ARCHITECTURE (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-xs flex flex-col justify-between card-hover">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sand">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center text-forest">
                    <Package className="w-4 h-4 text-amberBamboo" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-forest text-base sm:text-lg">
                      {isEn ? '10-Pack Knock-Down' : 'Arsitektur Kemasan 10-Pack'}
                    </h3>
                    <p className="text-[11px] text-neutral-500">50 × 50 × 45 cm • 0,1125 CBM</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold">
                  81,4% Hemat Ruang
                </span>
              </div>

              {/* Packaging Diagram */}
              <div className="mt-6 rounded-2xl bg-[#FAF8F5] border border-sand p-4 flex items-center justify-center">
                <img
                  src="images/hampy-lumina-packaging.svg"
                  alt="Diagram Kemasan Knock-Down 10 Kap Lampu"
                  className="max-h-56 w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Packaging Specs List */}
              <ul className="space-y-2 mt-5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Karton Gelombang Ganda 5-Ply (K200/M150/K200)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bantalan Honeycomb Paper & Kantong Katun Unbleached</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Bebas Plastik & Stereofoam</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-forest/5 text-[11px] text-forest font-semibold">
              Berat Kotor: 14,75 kg per karton (100 karton = 1.475 kg total)
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
                  <p className="text-[11px] text-neutral-500">Bambu Petung & Apus asal Sleman, Yogyakarta</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-neutral-600 leading-relaxed">
                <p>
                  {isEn
                    ? 'Harvested at optimum maturity (3–4 years), carbonized/cured with target moisture content <12% to prevent mold growth during long sea transit.'
                    : 'Bambu dipanen pada usia optimal (3–4 tahun) dengan target kadar air di bawah 12% guna mencegah risiko timbulnya jamur saat pelayaran laut 30 hari.'}
                </p>
                <p>
                  {isEn
                    ? 'Immersion treatment uses eco-friendly non-arsenic and non-creosote solutions, maintaining safety for commercial indoor environments.'
                    : 'Perendaman menggunakan formula pengawet ramah lingkungan bebas arsenik dan kreosot, aman untuk pemasangan interior komersial.'}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sand flex items-center justify-between text-xs font-bold text-forest">
              <span>Target Kadar Air: &lt;12%</span>
              <span className="text-amberBamboo">Bebas Bahan Kimia Berbahaya</span>
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
                  <p className="text-[11px] text-neutral-500">Universal E27 Socket • 110–240 V AC</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-neutral-600 leading-relaxed">
                <p>
                  {isEn
                    ? 'Equipped with heavy-duty E27 ceramic base compatible with 110V–240V grids. Engineered in reference to European safety guidelines (CE preparation).'
                    : 'Dilengkapi fitting keramik E27 universal yang mendukung tegangan 110V–240V. Dirancang mengacu pada ketentuan keselamatan UE (CE sedang dipersiapkan).'}
                </p>
                <p>
                  {isEn
                    ? 'Features double insulated fabric-braided suspension cable (1.5 meters) with adjustable brass cord grip and ceiling rose.'
                    : 'Menggunakan kabel gantung kepang kain berinsulasi ganda sepanjang 1,5 meter dengan cincin pengunci kokoh untuk memudahkan instalasi plafon.'}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sand flex items-center justify-between text-xs font-bold text-forest">
              <span>Fitting: Keramik E27 Universal</span>
              <span className="text-amberBamboo">LED Warm White 2700K</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
