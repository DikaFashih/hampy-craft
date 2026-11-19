import React from 'react';
import { Package, ShieldCheck, Sparkles, Check } from 'lucide-react';

export default function UnboxingSteps({ lang }) {
  const isEn = lang === 'en';

  const steps = [
    {
      num: '01',
      title: isEn ? 'Open 5-Ply Master Carton' : 'Buka Master Karton 5-Ply',
      desc: isEn
        ? 'Kraft paper tape is unsealed to reveal 10 lampshades nested safely with honeycomb paper shock absorption between each rim.'
        : 'Segel pita kertas kraft dibuka, memperlihatkan 10 kap lampu yang tersusun rapi dengan bantalan honeycomb paper peredam guncangan.'
    },
    {
      num: '02',
      title: isEn ? 'Remove Reusable Cotton Bags' : 'Lepas Kantong Katun Alami',
      desc: isEn
        ? 'Each shade is sleeved inside a breathable, unbleached cotton bag preventing friction abrasions during container handling.'
        : 'Setiap kap dilindungi kantong katun unbleached yang dapat digunakan kembali, mencegah gesekan antar anyaman bambu selama pelayaran.'
    },
    {
      num: '03',
      title: isEn ? 'Quick Assembly & Electrical Lock' : 'Pemasangan Komponen Elektrikal',
      desc: isEn
        ? 'Universal E27 socket and 1.5m fabric cable mount effortlessly onto the upper neck collar with a heavy-duty locking ring.'
        : 'Fitting E27 dan kabel kain 1,5 meter dipasang pada collar leher atas dengan cincin pengunci kokoh tanpa memerlukan peralatan khusus.'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 border border-forest/15 text-forest text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amberBamboo" />
            <span>{isEn ? 'UNBOXING EXPERIENCE' : 'PENGALAMAN UNBOXING'}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
            {isEn ? 'Effortless Unboxing & Fast Commercial Setup' : 'Momen Unboxing & Perakitan Cepat di Lokasi Proyek'}
          </h3>
          <p className="text-neutral-600 text-sm mt-2">
            {isEn
              ? 'Engineered for smooth unpacking by hotel contractors or retail staff with zero plastic disposal waste.'
              : 'Dirancang agar mudah dibuka oleh kontraktor hotel atau tim ritel furnitur tanpa menghasilkan sampah plastik.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#FAF8F5] border border-sand flex flex-col justify-between card-hover"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-forest text-cream font-mono font-extrabold text-sm flex items-center justify-center mb-4">
                  {st.num}
                </div>
                <h4 className="font-extrabold text-forest text-base mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-sand/70 flex items-center gap-2 text-[11px] font-bold text-forest">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Zero-Plastic Waste</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
