import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export default function VisualStudies({ lang }) {
  const isEn = lang === 'en';

  const studies = [
    {
      img: 'images/artisan-craft.jpg',
      tag: isEn ? 'Craft Concept' : 'Konsep Pengrajin',
      title: isEn ? 'Authentic Bamboo Weaving Process' : 'Keahlian Anyaman Pengrajin Sleman',
      desc: isEn 
        ? 'Handwoven bamboo strips crafted with traditional mastery in Sleman, Yogyakarta (simulation model).'
        : 'Bilah bambu Petung dianyam tangan oleh pengrajin di Sleman, Yogyakarta untuk prototipe kubah.'
    },
    {
      img: 'images/shadow-wall.jpg',
      tag: isEn ? 'Lighting Simulation' : 'Simulasi Difusi Cahaya',
      title: isEn ? 'Warm Geometrical Shadow Cast' : 'Proyeksi Bayangan Geometris Hangat',
      desc: isEn 
        ? 'Creates relaxing, diffuse ambient patterns on walls and ceiling surfaces under warm LED illumination.'
        : 'Pancaran bayangan silang yang menciptakan suasana tenang dan estetis pada dinding dan plafon ruang.'
    },
    {
      img: 'images/commercial-cafe.jpg',
      tag: isEn ? 'Architectural Concept' : 'Ilustrasi Ruang Komersial',
      title: isEn ? 'Hospitality & Dining Ambiance' : 'Kesesuaian Suasana Komersial & Residensial',
      desc: isEn 
        ? 'Harmonizes with Japandi, Scandinavian, and modern tropical interior aesthetics in cafe and dining projects.'
        : 'Menyatu serasi dengan interior bergaya Japandi, Skandinavia, maupun tropis modern pada proyek kafe dan restoran.'
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
              <span>{isEn ? 'VISUAL STUDIES & 3D RENDERS' : 'STUDI VISUAL & RENDER KONSEP'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              {isEn ? 'Visual Studies & Lighting Concepts' : 'Simulasi Visual & Konsep Pencahayaan'}
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'Render concepts, lighting simulations, and architectural mockups designed for European commercial & hospitality interiors.'
                : 'Render konsep 3D dan studi pencahayaan kap lampu bambu untuk simulasi pengaplikasian interior komersial dan hospitality.'}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-bold text-forest px-3.5 py-1.5 rounded-full bg-sand/60 border border-sand inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'Render & Design Illustration' : 'Render & Ilustrasi Desain'}</span>
            </span>
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {studies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-sand/80 shadow-xs flex flex-col h-full card-hover group"
            >
              {/* Image Container with Top-Right Badge to avoid covering bottom text */}
              <div className="relative aspect-4/3 overflow-hidden bg-sand/30 shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-forest/90 backdrop-blur-md text-cream text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Text Container with flex-1 so all cards align perfectly */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-forest text-base group-hover:text-amberBamboo transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-sand/50 text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                  Ilustrasi / Render Konsep 3D
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
