import React from 'react';
import { Camera, Eye, ArrowUpRight } from 'lucide-react';

export default function VisualStudies({ lang }) {
  const isEn = lang === 'en';

  const studies = [
    {
      img: 'images/artisan-craft.jpg',
      tag: isEn ? 'Artisan Weaving' : 'Pengrajin Sleman',
      title: isEn ? 'Authentic Bamboo Weaving Process' : 'Keahlian Anyaman Pengrajin Lokal',
      desc: isEn ? 'Handwoven bamboo strips crafted with traditional mastery in Sleman, Yogyakarta.' : 'Bilah bambu Petung dianyam tangan oleh pengrajin berpengalaman di Sleman, Yogyakarta.'
    },
    {
      img: 'images/shadow-wall.jpg',
      tag: isEn ? 'Light Projection Test' : 'Uji Efek Cahaya',
      title: isEn ? 'Warm Geometrical Shadow Cast' : 'Proyeksi Bayangan Geometris Hangat',
      desc: isEn ? 'Creates relaxing, diffuse ambient patterns on walls and ceiling surfaces.' : 'Pancaran bayangan silang yang menciptakan suasana tenang dan estetis pada dinding dan plafon.'
    },
    {
      img: 'images/commercial-cafe.jpg',
      tag: isEn ? 'Architectural Fit' : 'Studi Visual Ruang',
      title: isEn ? 'Hospitality & Dining Ambiance' : 'Kesesuaian Suasana Komersial & Residensial',
      desc: isEn ? 'Harmonizes with Japandi, Scandinavian, and modern tropical interior aesthetics.' : 'Menyatu serasi dengan interior bergaya Japandi, Skandinavia, maupun tropis modern.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF8F5] border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 border border-forest/15 text-forest text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'AUTHENTIC VISUAL STUDIES' : 'STUDI VISUAL & KERAJINAN ASLI'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              {isEn ? 'Craftsmanship & Lighting Aesthetics' : 'Dokumentasi Kerajinan & Studi Pencahayaan'}
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'Authentic workshop documentation and visual lighting studies from our production center in Sleman, Yogyakarta.'
                : 'Dokumentasi asli dari sentra produksi Sleman dan studi efek pencahayaan pada prototipe kap lampu.'}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-bold text-forest px-3 py-1.5 rounded-full bg-sand/60 border border-sand">
              {isEn ? 'Sleman Heritage • Modern Quality' : 'Warisan Sleman • Mutu Teruji'}
            </span>
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-sand/80 shadow-xs flex flex-col justify-between card-hover group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-sand/30">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-forest/90 backdrop-blur-md text-cream text-[10px] font-bold tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-extrabold text-forest text-base group-hover:text-amberBamboo transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
