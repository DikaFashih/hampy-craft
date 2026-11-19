import React from 'react';
import { Hammer, PackageCheck, Truck, Ship, Store, ArrowRight, MapPin } from 'lucide-react';
import { SPECS } from '../data/specs';

export default function LogisticsFlow({ lang }) {
  const isEn = lang === 'en';

  const steps = [
    {
      num: '01',
      icon: Hammer,
      title: isEn ? 'Sleman Workshop Crafting' : 'Produksi & Anyaman Sleman',
      loc: 'Sleman, DI Yogyakarta',
      desc: isEn 
        ? 'Selected Petung & Apus bamboo treated in eco-friendly anti-borer bath (non-arsenic) and handwoven into symmetrical Ø35×40 cm domes.'
        : 'Bambu Petung & Apus pilihan direndam larutan ramah lingkungan bebas arsenik & kreosot, dianyam tangan menjadi kubah Ø35×40 cm.',
      tag: 'Kadar Air < 12%'
    },
    {
      num: '02',
      icon: PackageCheck,
      title: isEn ? 'Knock-Down 10-Pack Packing' : 'Kemasan Knock-Down 10-Pack',
      loc: 'Packaging Facility Sleman',
      desc: isEn
        ? '10 lampshades nested safely with honeycomb paper shock absorption & cotton bags. 5-Ply carton (50×50×45 cm, 13.5 kg netto / 14.75 kg palletized).'
        : '10 kap lampu ditumpuk bersusun dengan bantalan honeycomb paper dan kantong katun. Karton 5-ply (50×50×45 cm, 13,5 kg netto / 14,75 kg kargo berpalet).',
      tag: 'Bebas Plastik'
    },
    {
      num: '03',
      icon: Truck,
      title: isEn ? 'Inland Trucking & FOB Priok' : 'Angkutan Darat & FOB Priok',
      loc: 'Port of Tanjung Priok (IDTPP)',
      desc: isEn
        ? 'Overland trucking from Sleman to Tanjung Priok Port (Jakarta). Customs clearance (PPJK) and Bill of Lading documentation.'
        : 'Pengangkutan darat dari Sleman ke Pelabuhan Tanjung Priok (Jakarta). Proses kepabeanan PPJK dan penerbitan Bill of Lading.',
      tag: 'FOB Tanjung Priok'
    },
    {
      num: '04',
      icon: Ship,
      title: isEn ? 'Ocean Freight to Rotterdam' : 'Pelayaran Samudra ke Rotterdam',
      loc: 'Port of Rotterdam (NLRTM)',
      desc: isEn
        ? 'Container ocean transit route Tanjung Priok to Rotterdam (±8,500 nautical miles) with 30–40 sea transit days (total 36–50 days to warehouse).'
        : 'Pelayaran kontainer via jalur laut Tanjung Priok ke Rotterdam menempuh ±8.500 mil laut dengan estimasi 30–40 hari laut (total 36–50 hari sampai gudang Eropa).',
      tag: '30–40 Hari Laut'
    },
    {
      num: '05',
      icon: Store,
      title: isEn ? 'European Distribution' : 'Distribusi Pasar Eropa',
      loc: 'Rotterdam, Netherlands & EU',
      desc: isEn
        ? 'Unloaded at Port of Rotterdam for inland European distribution managed by the buyer/importer (FOB responsibility ends at Tanjung Priok).'
        : 'Bongkar kargo di Rotterdam untuk distribusi darat di Eropa oleh pihak importir/pembeli (tanggung jawab FOB berakhir di Pelabuhan Tanjung Priok).',
      tag: 'Oleh Importir'
    }
  ];

  return (
    <section id="logistics" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 border border-forest/15 text-forest text-xs font-bold uppercase tracking-wider mb-3">
              <Ship className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'STANDARDIZED EXPORT LOGISTICS' : 'RANTAI PASOK & LOGISTIK EKSPOR'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              {isEn ? 'Seamless Transport from Sleman to Rotterdam' : 'Alur Ekspor Terstandarisasi: Sleman ke Rotterdam'}
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {isEn 
                ? 'End-to-end logistics workflow ensuring zero damage, strict customs compliance, and predictable ocean freight schedules.'
                : 'Alur logistik ujung-ke-ujung yang dirancang menekan risiko kerusakan kargo, mematuhi dokumen kepabeanan, dan jadwal kapal terprediksi.'}
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-sand shadow-xs text-xs font-bold text-forest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Incoterms: FOB Tanjung Priok</span>
            </div>
          </div>
        </div>

        {/* 5-Step Visual Timeline Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-sand/80 shadow-xs flex flex-col justify-between card-hover relative group"
              >
                {/* Step Number & Badge */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-neutral-300 group-hover:text-amberBamboo transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sand/80 text-forest">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest mt-4 group-hover:bg-forest group-hover:text-cream transition-colors">
                    <Icon className="w-6 h-6 text-amberBamboo group-hover:text-cream transition-colors" />
                  </div>

                  {/* Title & Location */}
                  <h3 className="font-extrabold text-forest text-sm mt-4">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400 mt-1">
                    <MapPin className="w-3 h-3 text-amberBamboo shrink-0" />
                    <span>{step.loc}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom line connector */}
                <div className="mt-5 pt-3 border-t border-sand/60 flex items-center justify-between text-[11px] font-bold text-forest">
                  <span>Tahap {step.num}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amberBamboo group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Ocean Route Fact Banner */}
        <div className="mt-8 p-6 rounded-3xl bg-forest text-cream flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amberBamboo/20 border border-amberBamboo/40 flex items-center justify-center text-amberBamboo shrink-0">
              <Ship className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-cream">
                {isEn ? 'Official Freight Shipping Channel (Tanjung Priok ➔ Rotterdam)' : 'Rute Pengapalan Resmi (Pelabuhan Tanjung Priok ➔ Rotterdam)'}
              </h4>
              <p className="text-xs text-sand/80 mt-0.5">
                {isEn 
                  ? 'FCL 20ft (34.09% capacity) or 40ft HC with verified bill of lading & phytosanitary certificates.'
                  : 'Pilihan FCL 20ft (34,09% muatan kargo) atau 40ft HC dilengkapi sertifikat fumigasi, phytosanitary, dan B/L.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold text-sand/90">Syarat Pembayaran:</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 text-cream text-xs font-bold border border-white/15">
              T/T (30% DP, 70% Salinan B/L)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
