import React from 'react';
import { Box, Container, Calendar, Leaf } from 'lucide-react';
import { SPECS } from '../data/specs';

export default function MetricsBar({ lang }) {
  const isEn = lang === 'en';

  const metrics = [
    {
      icon: Box,
      value: '11,25 CBM',
      label: isEn ? 'Total Volume (1,000 Units)' : 'Total Volume Kargo (1.000 Unit)',
      desc: isEn ? '100 Master Cartons • 0.1125 CBM/box' : '100 Master Karton • 0,1125 CBM/box'
    },
    {
      icon: Container,
      value: '34,09%',
      label: isEn ? '20ft Container Utilization' : 'Utilisasi Kontainer 20 Kaki',
      desc: isEn ? 'Optimal knock-down nesting (84.4% space saved)' : 'Efisiensi tumpuk knock-down (hemat 84,4% ruang)'
    },
    {
      icon: Calendar,
      value: '30–45 Hari',
      label: isEn ? 'Standard Lead Time' : 'Waktu Produksi Standar',
      desc: isEn ? 'Handcrafted by Sleman artisans' : 'Kapasitas pengrajin lokal Sleman'
    },
    {
      icon: Leaf,
      value: 'Bebas Plastik',
      label: isEn ? 'Plastic-Free Packaging' : 'Kemasan Bebas Plastik',
      desc: isEn ? '5-Ply carton & honeycomb paper' : 'Karton gelombang & honeycomb paper'
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
