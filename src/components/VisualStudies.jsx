import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export default function VisualStudies({ lang }) {
  const isEn = lang === 'en';

  const studies = [
    {
      img: 'images/artisan-craft.jpg',
      imgPosition: 'object-[center_45%]',
      tag: isEn ? 'Craft Concept' : 'Konsep Pengrajin',
      title: isEn ? 'Handwoven Bamboo Craftsmanship' : 'Keahlian Anyaman Pengrajin Sleman',
      desc: isEn 
        ? 'Illustration of bamboo strip handweaving process by Sleman artisans for the Hampy Lumina dome shade.'
        : 'Ilustrasi proses anyaman tangan bilah bambu oleh pengrajin di Sleman, Yogyakarta untuk kap kubah Hampy Lumina.'
    },
    {
      img: 'images/shadow-wall.jpg',
      imgPosition: 'object-center',
      tag: isEn ? 'Lighting Simulation' : 'Simulasi Difusi Cahaya',
      title: isEn ? 'Warm Geometrical Shadow Cast' : 'Proyeksi Bayangan Geometris Hangat',
      desc: isEn 
        ? 'Illustrates warm diffuse ambient patterns projected onto surrounding walls and ceilings under LED warm white light.'
        : 'Ilustrasi pancaran bayangan silang yang membentuk suasana hangat pada dinding dan plafon dengan cahaya LED warm white.'
    },
    {
      img: 'images/commercial-cafe.jpg',
      imgPosition: 'object-center',
      tag: isEn ? 'Commercial Illustration' : 'Ilustrasi Ruang Komersial',
      title: isEn ? 'Hospitality & Dining Ambiance' : 'Kesesuaian Ruang Komersial & Hunian',
      desc: isEn 
        ? 'Concept placement showing multiple shades hung at staggered heights in tropical dining and hospitality interiors.'
        : 'Ilustrasi penempatan beberapa kap lampu pada ketinggian berbeda di ruang makan, kafe, restoran, dan resor.'
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
              <span>{isEn ? 'VISUAL STUDIES & CONCEPT ILLUSTRATIONS' : 'STUDI VISUAL & ILUSTRASI KONSEP'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              {isEn ? 'Visual Studies & Lighting Concepts' : 'Simulasi Visual & Konsep Pencahayaan'}
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'Concept illustrations and lighting studies for residential and hospitality interiors. Actual product photographs will replace illustrations once the physical sample is completed.'
                : 'Ilustrasi konsep dan studi pencahayaan kap lampu bambu untuk interior hunian maupun hospitality. Foto produk asli akan menggantikan ilustrasi setelah sampel fisik selesai.'}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-bold text-forest px-3.5 py-1.5 rounded-full bg-sand/60 border border-sand inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amberBamboo" />
              <span>{isEn ? 'Design Illustrations' : 'Ilustrasi & Render Desain'}</span>
            </span>
          </div>
        </div>

        {/* Gallery Cards — uniform aspect-[4/3] eliminates vertical card mismatch & empty space */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {studies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-sand/80 shadow-xs flex flex-col card-hover group"
            >
              {/* Clean full-bleed 4:3 image container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/30 shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.imgPosition} group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-forest/90 backdrop-blur-md text-cream text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Tight, well-balanced card body without excess whitespace */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="font-extrabold text-forest text-base group-hover:text-amberBamboo transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-sand/50 text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                  {isEn ? 'Concept Illustration / Design Study' : 'Ilustrasi Konsep / Studi Visual'}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
