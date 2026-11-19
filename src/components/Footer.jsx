import React from 'react';
import { Ship, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { SPECS } from '../data/specs';

export default function Footer({ lang }) {
  const isEn = lang === 'en';

  return (
    <footer id="contact" className="bg-[#112519] text-cream pt-16 pb-12 border-t border-forestDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Origin (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex flex-col items-start gap-2">
              <div className="bg-white px-3.5 py-1.5 rounded-xl border border-white/20 shadow-sm inline-block">
                <img
                  src="images/logo.jpg"
                  alt="Hampy Craft — Indonesian Handcrafted Lighting"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-[11px] text-sand/70 tracking-widest uppercase font-mono">
                Hampy Lumina (PRK-01)
              </span>
            </div>

            <p className="mt-4 text-xs text-sand/80 leading-relaxed max-w-sm">
              {isEn
                ? 'Artisanal Indonesian bamboo lighting manufacturer in Sleman, Yogyakarta. Focused on sustainable, space-saving knock-down exports to the European hospitality and design market.'
                : 'Pusat produksi kap lampu bambu artisanal asal Sleman, D.I. Yogyakarta. Fokus pada pencahayaan berkelanjutan bersistem knock-down hemat ruang untuk pasar ekspor Eropa.'}
            </p>

            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-sand/90">
              <Ship className="w-3.5 h-3.5 text-amberBamboo" />
              <span>Rute Kargo: Tanjung Priok ➔ Rotterdam</span>
            </div>
          </div>

          {/* Col 2: Export Terms & Specs (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm text-cream uppercase tracking-wider mb-4">
              Ketentuan Ekspor Resmi
            </h4>
            <ul className="space-y-2 text-xs text-sand/80">
              <li>• Model: Hampy Lumina (Ø35 × 40 cm)</li>
              <li>• Model lain: Dalam Pengembangan</li>
              <li>• MOQ: 50 Unit</li>
              <li>• Waktu Produksi: 30–45 Hari</li>
              <li>• Pembayaran: T/T (30% DP, 70% Salinan B/L)</li>
              <li>• Incoterms: FOB Pelabuhan Tanjung Priok</li>
              <li>• Waktu Pelayaran: 30–40 Hari Laut</li>
              <li>• Standar: Mengacu Keselamatan UE (CE Proses)</li>
            </ul>
          </div>

          {/* Col 3: Packaging & CBM (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm text-cream uppercase tracking-wider mb-4">
              Arsitektur Kargo
            </h4>
            <ul className="space-y-2 text-xs text-sand/80">
              <li>• 10 Kap / Master Karton</li>
              <li>• Box: 50 × 50 × 45 cm</li>
              <li>• Volume: 0,1125 CBM / box</li>
              <li>• Berat: 13,5 kg / box (14,75 kg kargo berpalet)</li>
              <li>• 1.000 Unit = 11,25 CBM (1.475 kg)</li>
              <li>• Muatan: 34% Kontainer 20ft</li>
              <li>• Kemasan Bebas Plastik</li>
            </ul>
          </div>

          {/* Col 4: Official Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm text-cream uppercase tracking-wider mb-4">
              Kontak & Fasilitas Sleman
            </h4>
            <div className="space-y-3 text-xs text-sand/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amberBamboo shrink-0 mt-0.5" />
                <span>Kecamatan Sleman, Kabupaten Sleman, D.I. Yogyakarta 55581, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amberBamboo shrink-0" />
                <a href="https://wa.me/62888899988" className="hover:text-amberBamboo transition-colors">
                  +62 888-899-988 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amberBamboo shrink-0" />
                <a href="mailto:export@hampycraft.com" className="hover:text-amberBamboo transition-colors">
                  export@hampycraft.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Academic Practical Disclaimer Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-sand/70 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amberBamboo shrink-0" />
            <span>
              <strong>Transparansi Akademis:</strong> Website ini merupakan dokumen simulasi praktikum ekspor mandiri (PRK-01 Hampy Lumina) yang diselaraskan secara akurat dengan rencana kemasan dan rencana kargo Tanjung Priok – Rotterdam.
            </span>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-sand/50">PRK-01</span>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-sand/60 gap-3">
          <p>© 2026 Hampy Craft. Seluruh Hak Dilindungi.</p>
          <p className="text-amberBamboo/80">Diproduksi dengan bangga di Sleman, D.I. Yogyakarta, Indonesia.</p>
        </div>

      </div>
    </footer>
  );
}
