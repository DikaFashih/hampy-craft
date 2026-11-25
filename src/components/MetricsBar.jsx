import React from 'react';
import { Box, Container, Calendar, PackageCheck } from 'lucide-react';

export default function MetricsBar({ lang }) {
  const isEn = lang === 'en';

  const metrics = [
    {
      icon: Box,
      value: isEn ? '11.25 CBM' : '11,25 CBM',
      label: isEn ? 'Total Volume (1,000 Units)' : 'Total Volume Kargo (1.000 Unit)',
      desc: isEn ? '100 Master Cartons • 0.1125 CBM/box' : '100 Master Karton • 0,1125 CBM/box'
    },
    {
      icon: Container,
      value: isEn ? '34.1%' : '34,1%',
      label: isEn ? '20ft Container Utilization' : 'Utilisasi Kontainer 20 Kaki',
      desc: isEn ? '7 ISPM 15 pallets (1,475 kg gross)' : '7 palet ISPM 15 (1.475 kg berat kotor)'
    },
    {
      icon: Calendar,
      value: isEn ? '30–45 Days' : '30–45 Hari',
      label: isEn ? 'Standard Lead Time' : 'Waktu Produksi Standar',
      desc: isEn ? 'Handcrafted by Sleman artisans' : 'Dianyam tangan pengrajin lokal Sleman'
    },
    {
      icon: PackageCheck,
      value: isEn ? 'Paper Pack' : 'Berbasis Kertas',
      label: isEn ? 'No Single-Use Plastic' : 'Tanpa Plastik Sekali Pakai',
      desc: isEn ? '5-Ply carton, honeycomb & cotton bag' : 'Karton 5-ply, honeycomb & kantong katun'
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-sand/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-sand/70 card-hover flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                    <Icon className="w-5 h-5 text-amberBamboo" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                    BENCHMARK
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight">
                    {item.value}
                  </h4>
                  <p className="text-xs font-bold text-neutral-800 mt-1">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
