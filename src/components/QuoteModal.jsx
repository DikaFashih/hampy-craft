import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Send, Mail, AlertCircle } from 'lucide-react';
import { SPECS } from '../data/specs';

export default function QuoteModal({ isOpen, onClose, lang, initialQuantity = 1000 }) {
  if (!isOpen) return null;

  const isEn = lang === 'en';

  const [qty, setQty] = useState(initialQuantity);
  const [incoterm, setIncoterm] = useState('FOB Tanjung Priok');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [dest, setDest] = useState('Port of Rotterdam, Netherlands');
  const [notes, setNotes] = useState('');

  // Update qty when initialQuantity changes
  useEffect(() => {
    if (initialQuantity) {
      setQty(initialQuantity);
    }
  }, [initialQuantity, isOpen]);

  const cartons = Math.ceil(qty / 10);
  const rawCbm = (cartons * SPECS.packaging.cartonCbm).toFixed(3);
  const totalCbmDisplay = isEn ? rawCbm : rawCbm.replace('.', ',');
  const totalNetWeight = Math.round(cartons * (SPECS.packaging.cartonNetWeightKg || 13.5));
  const totalGrossWeight = Math.round(cartons * SPECS.packaging.cartonGrossWeightKg);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*PERMINTAAN PENAWARAN EKSPOR (RFQ) — HAMPY LUMINA*\n` +
      `----------------------------------------\n` +
      `*Model:* Hampy Lumina PRK-01 (Ø35 x 40 cm)\n` +
      `*Jumlah:* ${qty} unit (${cartons} Master Karton)\n` +
      `*Total Kubikasi:* ${totalCbmDisplay} CBM\n` +
      `*Berat Bersih:* ${totalNetWeight} kg (Kotor: ${totalGrossWeight} kg)\n` +
      `*Incoterms:* ${incoterm}\n` +
      `*Pelabuhan Tujuan:* ${dest}\n` +
      `----------------------------------------\n` +
      `*Nama PIC:* ${name || '-'}\n` +
      `*Perusahaan:* ${company || '-'}\n` +
      `*Email:* ${email || '-'}\n` +
      `*Catatan:* ${notes || '-'}\n` +
      `----------------------------------------\n` +
      `(Rujukan Simulasi Praktikum Ekspor Sleman ke Rotterdam)`
    );
    window.open(`https://wa.me/62888899988?text=${text}`, '_blank');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[RFQ Export] Hampy Lumina - ${qty} units - ${company || name}`);
    const body = encodeURIComponent(
      `Halo Tim Ekspor Hampy Craft,\n\n` +
      `Saya ingin meminta penawaran harga resmi (Quotation) untuk produk Hampy Lumina:\n\n` +
      `- Model: Hampy Lumina PRK-01 (Ø35 x 40 cm)\n` +
      `- Jumlah: ${qty} Unit (${cartons} Master Karton)\n` +
      `- Estimasi Volume: ${totalCbmDisplay} CBM (Berat Kotor: ${totalGrossWeight} kg)\n` +
      `- Incoterms: ${incoterm}\n` +
      `- Pelabuhan Tujuan: ${dest}\n\n` +
      `Informasi Kontak:\n` +
      `- Nama: ${name}\n` +
      `- Perusahaan: ${company}\n` +
      `- Email: ${email}\n` +
      `- Catatan Tambahan: ${notes}\n\n` +
      `Terima kasih.`
    );
    window.location.href = `mailto:export@hampycraft.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sand z-10 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FAF8F5] border-b border-sand flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-forest text-cream flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-amberBamboo" />
            </div>
            <div>
              <h3 className="font-extrabold text-forest text-base sm:text-lg">
                {isEn ? 'Request for Quotation (RFQ)' : 'Permintaan Penawaran Resmi (RFQ)'}
              </h3>
              <p className="text-xs text-neutral-500">
                Hampy Lumina (PRK-01) • FOB Pelabuhan Tanjung Priok
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-sand flex items-center justify-center text-neutral-400 hover:text-charcoal hover:bg-sand/40"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5">
          
          {/* Order Summary Pill */}
          <div className="p-4 rounded-2xl bg-forest/5 border border-forest/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Jumlah Kap</span>
              <strong className="text-forest font-extrabold text-sm">{qty} Unit</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Master Karton</span>
              <strong className="text-forest font-extrabold text-sm">{cartons} Box</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Total Kubikasi</span>
              <strong className="text-amberBamboo font-extrabold text-sm">{totalCbmDisplay} CBM</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Berat Kotor</span>
              <strong className="text-forest font-extrabold text-sm">{totalGrossWeight.toLocaleString(isEn ? 'en-US' : 'id-ID')} kg</strong>
            </div>
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  {isEn ? 'Order Quantity (Units):' : 'Jumlah Pesanan (Unit, Min. 50):'}
                </label>
                <input
                  type="number"
                  min="50"
                  step="10"
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-[#FAF8F5] text-sm text-neutral-800 focus:outline-forest font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Incoterms:
                </label>
                <select
                  value={incoterm}
                  onChange={(e) => setIncoterm(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-[#FAF8F5] text-sm text-neutral-800 focus:outline-forest font-medium"
                >
                  <option value="FOB Tanjung Priok">FOB Pelabuhan Tanjung Priok (Standar)</option>
                  <option value="CFR Port of Rotterdam">CFR Port of Rotterdam</option>
                  <option value="CIF Port of Rotterdam">CIF Port of Rotterdam</option>
                  <option value="EXW Sleman Facility">EXW Sleman Workshop</option>
                </select>
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1">
                {isEn ? 'Destination Port / Country:' : 'Pelabuhan / Negara Tujuan:'}
              </label>
              <input
                type="text"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                placeholder="Contoh: Port of Rotterdam, Belanda"
                className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-[#FAF8F5] text-sm text-neutral-800 focus:outline-forest"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  {isEn ? 'Contact Person Name:' : 'Nama Lengkap (PIC):'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-[#FAF8F5] text-sm text-neutral-800 focus:outline-forest"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  {isEn ? 'Company / Studio Name:' : 'Nama Perusahaan / Studio:'}
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="PT / B.V. / Studio Interior"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-[#FAF8F5] text-sm text-neutral-800 focus:outline-forest"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1">
                Email Bisnis:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="buyer@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-[#FAF8F5] text-sm text-neutral-800 focus:outline-forest"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1">
                {isEn ? 'Special Requirements / Notes:' : 'Catatan Khusus / Kustomisasi:'}
              </label>
              <textarea
                rows="2"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Spesifikasi kabel, voltase khusus, atau jadwal proyek..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-[#FAF8F5] text-sm text-neutral-800 focus:outline-forest"
              />
            </div>

          </form>

          {/* Academic Transparency Note */}
          <div className="p-3.5 rounded-2xl bg-amberBamboo/10 border border-amberBamboo/20 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amberBamboo shrink-0 mt-0.5" />
            <div>
              <strong>Simulasi Praktikum Ekspor Mandiri:</strong> Seluruh rujukan pesanan dan data logistik diselaraskan dengan Laporan Praktikum PRK-01 (Kapasitas pengrajin Sleman, waktu produksi 30–45 hari, rute Tanjung Priok ke Rotterdam).
            </div>
          </div>

        </div>

        {/* Action Buttons in Footer */}
        <div className="p-5 sm:p-6 bg-[#FAF8F5] border-t border-sand flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSendWhatsApp}
            className="flex-1 py-3 px-4 rounded-xl bg-forest text-cream font-bold text-xs uppercase tracking-wider hover:bg-forestDark transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 text-amberBamboo" />
            <span>Kirim via WhatsApp (+62 888-899-988)</span>
          </button>
          
          <button
            onClick={handleSendEmail}
            className="sm:w-44 py-3 px-4 rounded-xl bg-white border border-sand font-bold text-xs text-forest hover:bg-sand/40 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-neutral-500" />
            <span>Kirim Email</span>
          </button>
        </div>

      </div>
    </div>
  );
}
