import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export default function UnboxingSteps({ lang }) {
  const isEn = lang === 'en';

  const steps = [
    {
      num: '01',
      title: isEn ? 'Open 5-Ply Master Carton' : 'Buka Master Karton 5-Ply',
      desc: isEn
        ? 'Kraft paper tape is unsealed to reveal 10 lampshades packed with honeycomb paper cushioning between each rim.'
        : 'Segel pita kertas kraft dibuka, memperlihatkan 10 kap lampu yang tersusun rapi dengan bantalan honeycomb paper peredam guncangan.'
    },
    {
      num: '02',
      title: isEn ? 'Remove Natural Cotton Bags' : 'Lepas Kantong Katun Alami',
      desc: isEn
        ? 'Each shade is sleeved inside a breathable natural cotton bag preventing friction abrasions during container handling.'
        : 'Setiap kap dilindungi kantong katun alami yang dapat digunakan kembali, mencegah gesekan antar anyaman bambu selama pelayaran.'
    },
    {
      num: '03',
      title: isEn ? 'Assemble Electrical Components' : 'Pemasangan Komponen Elektrikal',
      desc: isEn
        ? 'The E27 fitting, 1.5 m fabric-braided cord, and warm white LED bulb (all included in the separate partition) assemble cleanly onto the upper collar.'
        : 'Fitting E27, kabel kain 1,5 meter, dan bohlam LED warm white (dikemas terpisah dalam satu paket) dipasang pada leher kubah tanpa alat khusus.'
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
            {isEn ? 'Practical Unboxing & Knock-Down Assembly' : 'Tahapan Unboxing & Perakitan Knock-Down'}
          </h3>
          <p className="text-neutral-600 text-sm mt-2">
            {isEn
              ? 'Designed for straightforward unpacking by retail teams and hospitality contractors using paper-based packaging without single-use plastic.'
              : 'Dirancang agar praktis dibuka oleh tim ritel maupun kontraktor proyek dengan kemasan berbasis kertas tanpa plastik sekali pakai.'}
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
                <span>{isEn ? 'No Single-Use Plastic Packaging' : 'Tanpa Plastik Sekali Pakai'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
