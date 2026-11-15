# Hampy Craft — Indonesian Handcrafted Lighting
**Lampu Gantung Anyaman Bambu & Rotan Arsitektural • Sleman, Yogyakarta, Indonesia**

Website resmi **Hampy Craft** yang dirancang dengan estetika mewah, modern, dinamis, dan teroptimasi untuk pasar internasional (hotel butik, villa mewah, restoran, dan importir pencahayaan global).

---

## 📁 Struktur Berkas Proyek

```
web hampy/
├── index.html                   # Halaman utama semantik, multi-bahasa & SEO-ready
├── css/
│   └── style.css                # Sistem desain luxury craft, animasi & tata letak responsif
├── js/
│   └── app.js                   # Logika interaktif: i18n dwibahasa (ID/EN), simulasi cahaya, filter galeri, CBM kalkulator, RFQ
├── images/
│   ├── logo.jpg                 # Logo resmi circular emblem Hampy Craft (3 batang bambu)
│   ├── dining-pendant.jpg       # Foto autentik dining pendant lamp di atas meja makan kayu
│   ├── living-lounge.jpg        # Foto autentik suasana living lounge sofa & tanaman hias
│   ├── restaurant-cluster.jpg   # Foto autentik kluster lampu restoran terbuka saat senja
│   ├── japandi-dining.jpg       # Foto autentik interior Japandi dengan bayangan kisi bambu artistik
│   ├── artisan-craft.jpg        # Foto autentik master pengrajin menganyam di workshop Sleman
│   ├── hampy-lumina-packaging.svg # Diagram vektor arsitektur proteksi kemasan ekspor & unboxing
│   └── logo.svg                 # Logo vektor alternatif
└── README.md                    # Dokumentasi lengkap proyek
```

---

## ✨ Fitur Interaktif & Dinamis Unggulan

1. **Dukungan Multi-Bahasa Dwibahasa (ID / EN) Instan**:
   - Saklar bahasa di header navigasi desktop dan mobile drawer (`ID` ↔ `EN`).
   - Seluruh teks, deskripsi produk galeri, carousel, kontrol pencahayaan, formulir RFQ, kalkulator kontainer, dan template pesan WhatsApp otomatis berubah secara real-time tanpa memuat ulang halaman (*zero reload*).
   - Preferensi bahasa otomatis tersimpan di `localStorage`.

2. **Studio Eksperimen Pencahayaan Interaktif (`#studio`)**:
   - Pilihan preset temperatur kelvin riil:
     - `2200K Golden Amber`: Suasana santap malam intim / cafe bar.
     - `2700K Warm Sunset`: Standar hospitality resort & hotel suite.
     - `3000K Soft White`: Sudut baca & lounge residensial.
     - `4000K Clean White`: Inspeksi detail arsitektur bambu.
     - `Lampu Padam (Off)`: Tampilan serat bambu alami siang hari.
   - Slider dimmer interaktif (0% - 100%) dengan pendaran cahaya realistis (*bloom glow effect* & adaptasi suasana ruangan).

3. **Galeri Portofolio & Fixtur Dinamis (`#gallery`)**:
   - Filter instan berdasarkan kategori ruang (*Hotels & Resorts*, *Luxury Residences*, *Restaurants & Cafes*).
   - Pencarian langsung (*real-time search*) berdasarkan nama model, material, atau dimensi.
   - Saklar satuan unit instan (*Metric cm/kg* ↔ *Imperial in/lbs*).
   - Kartu produk interaktif dengan tombol *Spesifikasi & Ekspor* serta *+ Request Quote*.

4. **Kalkulator Kargo CBM & Estimator Kontainer (`#estimator`)**:
   - Pilihan model lampu dan input kuantitas otomatis.
   - Menghitung secara instan: Jumlah master karton, Total volume kubikasi kargo (CBM), dan Estimasi berat kotor.
   - Indikator visual progres keterisian kontainer 20ft FCL (~28 CBM) dan 40ft High Cube FCL (~68 CBM).

5. **Arsitektur Kemasan & Unboxing Stepper Interaktif (`#packaging`)**:
   - Infografis vektor sistem proteksi berlapis Hampy Lumina (*knock-down packaging*).
   - Tiga tahap unboxing interaktif: *1. Buka Kotak Ekspor* ➔ *2. Busa Pelindung & Rangka* ➔ *3. Pasang Fitting & Gantung*.

6. **Quote Basket & Generator Pesanan WhatsApp Cepat (`#contact`)**:
   - Keranjang seleksi produk (*RFQ Basket*) yang otomatis tersinkronisasi.
   - Tombol instan WhatsApp terintegrasi yang menyusun pesan terformat rapi (dalam bahasa Indonesia atau Inggris sesuai pilihan pengguna) berisi daftar item, nama pemesan, perusahaan, dan pelabuhan tujuan langsung ke tim penjualan Hampy Craft Sleman.
   - Formulir inquiry formal dengan feedback visual instan.

7. **Responsif & Aksesibel**:
   - Menu drawer mobile yang halus (*off-canvas*) dengan selektor bahasa.
   - Modal dialog spesifikasi dengan penanganan navigasi keyboard (Escape, Focus trap).
   - Tombol *Back to Top* otomatis saat pengguna menggulir halaman.
