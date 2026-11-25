import React from 'react';
import { Sparkles, Maximize2, Sun, Layers, Ruler, RotateCw, ExternalLink, Package } from 'lucide-react';
import { SPECS } from '../data/specs';

export default function ThreeStudio({ lang }) {
  const isEn = lang === 'en';
  const externalUrl = SPECS.links.prototype3dExternal;

  return (
    <section id="studio" className="py-20 bg-white border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 border border-forest/15 text-forest text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'WEBGL 3D INTERACTIVE STUDIO' : 'SIMULASI CAHAYA & PROTOTIPE 3D'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              {isEn ? 'Interactive Lighting & Material Inspection' : 'Simulasi Pencahayaan & Inspeksi 3D'}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-2xl">
              {isEn
                ? 'Inspect 360° bamboo weave, test room ambiance & LED color temperatures (2200K / 2700K / 4000K), cord colors, and the knock-down packaging simulation.'
                : 'Putar model 360°, uji latar ruang & suhu warna LED (2200K / 2700K / 4000K), warna kabel kain 1,5 m, serta simulasi kemasan knock-down.'}
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-2.5">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-forest text-cream font-bold text-xs hover:bg-forestDark transition-colors shadow-sm"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'Open Fullscreen 3D (Google Sites)' : 'Buka Layar Penuh (Google Sites)'}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* 3D Studio Card Frame */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-sand shadow-lg overflow-hidden flex flex-col">
          
          {/* Top Info Bar inside frame */}
          <div className="px-5 py-3.5 bg-sand/40 border-b border-sand/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-bold text-forest">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Prototipe Interaktif 3D
              </span>
              <span className="hidden sm:inline text-neutral-400">|</span>
              <span className="hidden sm:inline text-neutral-600 font-medium">
                Model: <strong>Hampy Lumina (PRK-01)</strong> • Ø35 × 40 cm
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-white border border-sand text-[11px] font-bold text-forest">
                CCT: 2200K / 2700K / 4000K
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-sand text-[11px] font-bold text-amberBamboo">
                Dimmer &amp; Knock-Down 3D
              </span>
            </div>
          </div>

          {/* Interactive WebGL Iframe Container (Mirrors Google Sites prototype without X-Frame-Options block) */}
          <div className="relative w-full h-[580px] sm:h-[660px] bg-[#14171A]">
            <iframe
              key={lang}
              src={`prototype-3d.html?lang=${lang}`}
              title="Prototipe Interaktif 3D Hampy Lumina"
              className="w-full h-full border-0"
              loading="lazy"
              allow="accelerometer; gyroscope; autoplay"
            />
          </div>

          {/* Bottom Interactive Feature Chips */}
          <div className="p-4 bg-white border-t border-sand grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-neutral-700">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-sand/30">
              <Sun className="w-4 h-4 text-amberBamboo shrink-0" />
              <span>{isEn ? '4 Room Scenes & 3 CCTs' : '4 Latar Ruang & 3 Suhu Warna'}</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-sand/30">
              <Package className="w-4 h-4 text-amberBamboo shrink-0" />
              <span>{isEn ? 'Knock-Down Simulation' : 'Simulasi Kemasan Knock-Down'}</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-sand/30">
              <Layers className="w-4 h-4 text-amberBamboo shrink-0" />
              <span>{isEn ? 'Finishes & 1.5 m Cords' : 'Pilihan Finishing & Kabel 1,5 m'}</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-sand/30">
              <Ruler className="w-4 h-4 text-amberBamboo shrink-0" />
              <span>{isEn ? 'Dimensions & Hotspots' : 'Mode Dimensi & Titik Detail'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
