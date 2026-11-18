/**
 * Hampy Craft — Modern Interactive Luxury Lighting Application
 * Handcrafted Indonesian Lighting • Sleman, Yogyakarta
 * ES6+ Clean Architecture with Complete Bilingual Support (ID / EN)
 */

(function () {
  'use strict';

  // ==========================================================================
  // Bilingual i18n Dictionary (Indonesian & English)
  // ==========================================================================
  const I18N = {
                id: {
      // Document
      doc_title: 'Hampy Craft | Indonesian Handcrafted Lighting — Sleman, Yogyakarta',
      doc_desc: 'Lampu gantung berbahan anyaman bambu apus dan petung dari Sleman, Yogyakarta. Desain kontemporer untuk pencahayaan interior ramah lingkungan.',

      // Top Announcement Bar
      announcement_text: '🌏 Pengiriman Ekspor dari Workshop Sleman, Yogyakarta • Siap Menerima Pesanan Grosir & Proyek Hospitality Internasional',
      announcement_link_est: 'Estimator CBM',
      announcement_link_pkg: 'Kemasan Ekspor',
      announcement_link_wa: 'WhatsApp Sales',

      // Header & Navigation
      brand_tagline: 'Indonesian Handcrafted Lighting',
      nav_about: 'Tentang Kami',
      nav_studio: 'Simulasi Cahaya',
      nav_gallery: 'Galeri Aplikasi',
      nav_packaging: 'Kemasan Ekspor',
      nav_estimator: 'Kalkulator CBM',
      nav_terms: 'Ketentuan Ekspor',
      nav_contact: 'Kontak',
      drawer_wa_btn: 'Chat WhatsApp Trade',

      // Hero Section
      hero_badge: 'Kriya Bambu Ramah Lingkungan • Sleman, D.I. Yogyakarta',
      hero_h1: 'Kap Lampu Gantung Anyaman Bambu dari Sleman, Yogyakarta',
      hero_lead: 'Lampu gantung anyaman bambu alami khas Sleman, Yogyakarta dengan pendaran cahaya hangat menenangkan. Dirancang untuk interior kontemporer ramah lingkungan, ruang makan hunian, kafe, dan resor—siap ekspor ke pasar Eropa & Belanda.',
      hero_btn_studio: 'Uji Simulasi Cahaya',
      hero_btn_gallery: 'Lihat Galeri Aplikasi',
      trust_kiln: 'Target Kadar Air Bambu <12%',
      trust_breakage: 'Perlindungan Kargo Laut (Sistem Knock-Down)',
      trust_cert: 'Dirancang Mengacu Regulasi UE (CE Dalam Persiapan)',

      // Lighting Studio Section
      studio_badge: 'Studio Eksperimen Pencahayaan',
      studio_3d_title: 'Prototipe 3D Interaktif Hampy Lumina (Ø35 × H40 cm)',
      studio_3d_fullscreen: '⛶ Buka Layar Penuh',
      studio_h2: 'Simulasi Efek Cahaya & Pantulan Bayangan Geometris',
      studio_lead: 'Uji bagaimana pendaran cahaya bohlam menembus celah anyaman bambu apus, menciptakan pantulan bayangan geometris pada dinding, serta menghidupkan suasana ruang makan hunian maupun kafe bertema alami.',
      ctrl_kelvin_lbl: 'Suhu Warna Cahaya (Kelvin):',
      ctrl_dimmer_lbl: 'Intensitas Cahaya (Dimmer):',
      ctrl_scene_lbl: 'Pilih Sudut Pandang Simulasi:',
      temp_warm_desc: 'Standar Ekspor (2700K)',
      temp_amber_desc: 'Pencahayaan Hangat (2200K)',
      temp_soft_desc: 'Pencahayaan Netral (4000K)',
      temp_cool_desc: 'Lampu Padam (Siang Hari)',
      scene_dining: 'Ruang Makan Hunian (Gambar 2.2)',
      scene_lounge: 'Kafe & Restoran (Gambar 2.3)',
      scene_island: 'Uji Bayangan Dinding (Gambar 2.1)',
      sc_badge: 'Dokumentasi Eksperimen Cahaya',
      sc_h3: 'Hasil Pengujian Efek Cahaya & Suasana Ruang',
      sc_lead: 'Karakteristik proyeksi bayangan dan dispersi cahaya lampu Hampy Lumina berdasarkan dokumentasi pengujian teknis:',
      sc1_title: 'Uji Pantulan Bayangan Dinding (Jarak 1 Meter)',
      sc1_desc: 'Kisi silang bambu apus membiaskan bayangan geometris tegas namun lembut pada dinding, menghasilkan kedalaman visual tanpa menyilaukan mata.',
      sc2_title: 'Simulasi Ruang Makan Hunian',
      sc2_desc: 'Digantung pada ketinggian 75–85 cm di atas meja makan 4–6 kursi, menghasilkan pencahayaan meja merata dengan pendaran hangat keemasan.',
      sc3_title: 'Simulasi Kafe & Restoran Natural',
      sc3_desc: 'Diaplikasikan secara berderet (linear cluster 3 unit) di atas meja komunal kafe, memperkuat identitas ramah lingkungan ruang komersial.',
      sc4_title: 'DOME LAMPSHADE BLUEPRINT',
      sc4_desc: 'Engineering Sketch & Proportions: Sketsa rancangan kubah anyaman simetris Ø35 cm × T 40 cm, rangka bambu penguat bawah, dan dudukan fitting E27.',
      sc1_btn: '💡 Uji di Simulator',
      sc2_btn: '💡 Uji di Simulator',
      sc3_btn: '💡 Uji di Simulator',
      sc4_btn: '🎋 Uji di Simulator',

      // About Section
      about_badge: 'Identitas & Nilai Kriya',
      about_h2: 'Kriya Anyaman Bambu Sleman untuk Interior Kontemporer',
      about_p1: 'Hampy Craft lahir dari sentra pengrajin anyaman bambu di Sleman, Daerah Istimewa Yogyakarta. Berangkat dari kepedulian terhadap kelestarian lingkungan dan tradisi anyam nusantara, kami memproduksi kap lampu arsitektural berbahan bambu apus dan bambu petung pilihan.',
      about_p2: 'Melalui model Hampy Lumina, kami menggabungkan keindahan pendaran cahaya alami dengan keunggulan rekayasa logistik: sistem knock-down yang dapat ditumpuk hingga 10 unit per karton 0,1125 CBM, secara signifikan menekan biaya pengapalan kontainer laut internasional.',
      about_stat1: 'Kapasitas Produksi Bulanan',
      about_stat2: 'Volume per Master Box 10 Unit',
      about_stat3: 'Efisiensi Ruang Kemasan',
      stat_1_val: 'Bambu',
      stat_1_lbl: 'Apus & Petung Pilihan',
      stat_1_desc: 'Kadar air terkontrol <12% & perlakuan ramah lingkungan bebas arsenik/kreosot',
      stat_2_val: 'Knock-Down',
      stat_2_lbl: 'Sistem Kemasan Ekspor',
      stat_2_desc: '10 kap lampu ditumpuk efisien dalam satu karton 50×50×45 cm (0,1125 CBM)',
      stat_3_val: 'E27 / 110–240V',
      stat_3_lbl: 'Standar Elektrikal',
      stat_3_desc: 'Fitting E27 & kabel tekstil berinsulasi siap uji keselamatan elektrikal',
      stat_4_val: '9405.99.20*',
      stat_4_lbl: 'Perkiraan Kode HS',
      stat_4_desc: 'Perkiraan klasifikasi kap lampu bambu (konfirmasi PPJK/forwarder)',
      val1_title: 'Material Bambu Alami Berkelanjutan',
      val1_desc: 'Bambu apus (Gigantochloa apus) dan bambu petung (Dendrocalamus asper) dipanen dari rumpun bambu rakyat di lereng Gunung Merapi Sleman. Material terbarukan dengan siklus panen cepat dan jejak karbon sangat rendah.',
      val2_title: 'Suhu Warna & Uji Bayangan Presisi',
      val2_desc: 'Dirancang spesifik untuk bohlam LED E27 Warm White 2700K dengan dimmer 85%. Kisi anyaman telah teruji membiaskan bayangan geometris proporsional tanpa menimbulkan bayangan silau yang mengganggu mata.',
      val3_title: 'Kemasan Knock-Down Bebas Plastik Sekali Pakai',
      val3_desc: 'Kombinasi Cotton Dust Bag katun alami, bantalan kertas sarang lebah (honeycomb paper wrap), sekat karton gelombang ganda, dan master box 5-ply (50×50×45 cm). Dirancang minim plastik sekali pakai.',

      // Gallery Section
      gallery_badge: 'Studi Visual & Dokumentasi',
      gallery_h2: 'Dokumentasi Visual & Rancang Bangun Hampy Lumina',
      gallery_lead: 'Eksplorasi konsep penempatan kap lampu Hampy Lumina serta ragam eksplorasi desain pencahayaan interior ramah lingkungan.',
      filter_all: 'Semua Tampilan',
      filter_residence: 'Konsep Hunian',
      filter_dining: 'Kafe & Komersial',
      filter_craft: 'Teknis & Pengrajin',
      search_placeholder: 'Cari model atau material...',
      card_btn_spec: 'Detail & Spesifikasi',
      card_btn_quote: '+ Tambah ke Permintaan',
      card_btn_added: '✓ Telah Ditambahkan',

      // Packaging Section
      pkg_badge: 'Rekayasa Kemasan Ekspor',
      pkg_h2: 'Arsitektur Kemasan Knock-Down 10 Unit per Master Box',
      pkg_lead: 'Didesain secara presisi untuk menekan risiko kerusakan kargo laut serta mengoptimalkan efisiensi kubikasi kontainer 20ft dan 40ft secara signifikan.',
      unbox_s1_badge: 'Lapisan 1 — Kotak Luar',
      unbox_s1_h3: 'Master Box Karton Gelombang Ganda 5-Ply',
      unbox_s1_p: 'Karton berkekuatan tinggi (50 × 50 × 45 cm, volume 0,1125 CBM) dengan identitas resmi hijau tua & putih gading. Dilengkapi simbol penanganan internasional (This Way Up, Fragile, Keep Dry) serta sertifikasi karantina.',
      unbox_s1_li1: 'Karton luar 5-ply tahan benturan dan beban tumpuk kontainer',
      unbox_s1_li2: 'Label identitas produksi dan instruksi penanganan kargo',
      unbox_s1_li3: 'Setiap karton memuat 10 kap lampu (berat kotor ~14,75 kg, total 1.475 kg per 100 karton)',
      unbox_s2_badge: 'Lapisan 2 — Proteksi Primer',
      unbox_s2_h3: 'Bantalan Honeycomb Paper & Kantong Katun Alami',
      unbox_s2_p: 'Setiap kap lampu dibungkus kain katun alami (cotton dust bag) halus anti-debu dan dilindungi bantalan kertas sarang lebah (honeycomb paper wrap) peredam getaran serta cincin pelindung tepi anyaman bambu.',
      unbox_s2_li1: 'Cotton dust bag berlogo Hampy Craft melindungi serat anyaman dari gesekan',
      unbox_s2_li2: 'Kertas sarang lebah (honeycomb wrap) peredam impak mekanis kargo laut',
      unbox_s2_li3: 'Cincin penguat tepi bawah bambu menjaga keutuhan bentuk kap kubah',
      unbox_s3_badge: 'Lapisan 3 — Sub-Box Elektrikal',
      unbox_s3_h3: 'Kotak Terpisah Komponen Fitting E27 & Bohlam',
      unbox_s3_p: 'Komponen listrik (fitting E27, kabel kain berinsulasi, kanopi gantung plafon, dan bohlam LED 2700K) dikemas dalam sub-box terpisah di bagian atas karton.',
      unbox_s3_li1: 'Perakitan sistem knock-down praktis di lokasi pemasangan',
      unbox_s3_li2: 'Kabel tekstil tergulung rapi lengkap dengan terminal insulasi keselamatan',
      unbox_s3_li3: 'Buku panduan instalasi bergambar dwibahasa (ID / EN) disertakan lengkap',
      kd_title: '4 Langkah Mudah Perakitan Knock-Down di Lokasi:',
      kd_s1_title: 'Buka Karton & Angkat Komponen',
      kd_s1_desc: 'Keluarkan kotak komponen listrik terpisah & angkat bantalan honeycomb pelindung.',
      kd_s2_title: 'Keluarkan Kap Lampu Anyaman',
      kd_s2_desc: 'Angkat kap lampu bambu bertumpuk satu per satu dari kantong katun pelindungnya.',
      kd_s3_title: 'Pasang Ring Penyangga Fitting',
      kd_s3_desc: 'Kaitkan cincin fitting E27 ke slot penyangga bambu kokoh di puncak bagian dalam kap.',
      kd_s4_title: 'Gantung & Pasang Bohlam',
      kd_s4_desc: 'Sambungkan kabel ke kanopi plafon, pasang bohlam LED E27 Warm White, nyalakan.',

      // Estimator Section
      est_badge: 'Kalkulator Logistik Pengapalan',
      est_h2: 'Estimator Kubikasi Kargo (CBM) & Kebutuhan Kontainer',
      est_lead: 'Hitung estimasi volume kubikasi kargo (CBM), jumlah master box karton, berat kotor, serta estimasi keterisian kontainer 20ft / 40ft berdasarkan parameter resmi ekspor Hampy Lumina.',
      est_label_model: 'Model Fixtur Lampu Ekspor',
      est_label_qty: 'Jumlah Pesanan (Pcs)',
      est_btn_calc: 'Hitung Estimasi Kargo',
      est_note: '*Perhitungan didasarkan pada master carton 50×50×45 cm (10 kap/karton, 0,1125 CBM). Asumsi perencanaan pemuatan awal, konfirmasi akhir melalui PPJK/forwarder.',
      est_res_title: 'Ringkasan Rencana Pemuatan Kargo',
      est_res_row_model: 'Model Terpilih',
      est_res_row_pcs: 'Total Kap Lampu',
      est_res_row_cartons: 'Jumlah Master Box',
      est_res_row_cbm: 'Total Kubikasi (CBM)',
      est_res_row_gw: 'Estimasi Berat Kotor (Gross Weight)',
      gauge_20_title: 'Keterisian Kontainer 20ft FCL (~33 CBM kap.)',
      gauge_40_title: 'Keterisian Kontainer 40ft High Cube FCL (~68 CBM kap.)',

      // Terms Section
      terms_badge: 'Prosedur Perdagangan Luar Negeri',
      terms_h2: 'Ketentuan Perdagangan & Pemesanan Ekspor',
      terms_lead: 'Pedoman standar untuk importir, distributor grosir, dan pengadaan proyek interior pencahayaan komersial.',
      term1_title: 'Jumlah Pesanan Minimum (MOQ)',
      term1_val: '50 Unit (Pesanan Standar)',
      term1_desc: 'Untuk menjamin efisiensi pengemasan 5 master box (10 pcs/box, total 0,56 CBM).',
      term2_title: 'Waktu Produksi (Lead Time)',
      term2_val: '30–45 Hari',
      term2_desc: '30–45 hari untuk pemenuhan batch pesanan ekspor (50–1.000 unit), disesuaikan dengan kapasitas produksi pengrajin di Sleman.',
      term3_title: 'Syarat Pembayaran (Payment Terms)',
      term3_val: 'T/T Deposit 50% atau L/C',
      term3_desc: 'T/T (Deposit 50% saat konfirmasi PO, pelunasan 50% sebelum pengapalan kargo / terhadap salinan dokumen B/L) atau Irrevocable L/C at Sight.',
      term4_title: 'Pelabuhan Muat & Incoterms',
      term4_val: 'FOB Tanjung Priok / CFR / CIF',
      term4_desc: 'FOB Pelabuhan Tanjung Priok (Jakarta) dengan opsi CFR/CIF Port of Rotterdam (Belanda) berdasarkan kesepakatan.',

      // Contact Section
      contact_badge: 'Hubungi Kami',
      contact_h2: 'Mulai Diskusi Pengadaan & Konsultasi Ekspor',
      contact_lead: 'Tim representatif Hampy Craft siap membantu rincian spesifikasi teknis, sampel produk, kalkulasi ongkos kargo, dan jadwal pengiriman kontainer.',
      contact_ws_title: 'Workshop Hampy Craft:',
      contact_address_html: 'Sentra Kerajinan Bambu Sleman, Daerah Istimewa Yogyakarta 55581, Indonesia',
      contact_target_title: 'Fokus Wilayah Ekspor:',
      contact_target_val: 'Kawasan Eropa (khususnya Belanda) dan pasar internasional ramah lingkungan.',
      contact_hours_title: 'Jam Layanan Dagang:',
      contact_hours_val: 'Senin – Sabtu, 08:00 – 17:00 WIB (UTC+7)',
      contact_email_lbl: 'Email Layanan & Dagang:',
      contact_ig_lbl: 'Instagram Resmi:',
      contact_wa_lbl: 'WhatsApp Ekspor:',
      quick_wa_title: '💬 Respon Cepat via WhatsApp',
      quick_wa_p: 'Hubungi divisi ekspor kami secara langsung melalui WhatsApp untuk konsultasi cepat katalog, harga grosir, dan sampel kurir udara.',
      quick_wa_btn: 'Hubungi Sales via WhatsApp',
      form_title: 'Formulir Permintaan Penawaran Resmi (RFQ)',
      form_company: 'Nama Perusahaan / Importir',
      form_name: 'Nama Lengkap Kontak',
      form_email: 'Alamat Email Bisnis',
      form_phone: 'Nomor WhatsApp / Telepon',
      form_country: 'Negara & Pelabuhan Tujuan',
      form_model: 'Model yang Diminati',
      form_qty: 'Perkiraan Jumlah Pesanan (Unit)',
      form_incoterm: 'Preferensi Incoterm',
      form_notes: 'Catatan Spesifik / Jadwal Proyek',
      form_btn_submit: 'Kirimkan Permintaan Penawaran Ekspor',
      basket_title: 'Daftar Fixtur Terpilih untuk Penawaran:',
      basket_empty: 'Belum ada model fixtur yang dipilih. Klik "+ Tambah ke Permintaan" pada galeri.',
      basket_btn_clear: 'Kosongkan Pilihan',

      // Footer
      footer_brand_desc: 'Manufaktur kap lampu berbahan anyaman bambu apus dan petung berbasis di Sleman, Yogyakarta. Diciptakan dengan keaslian kriya tangan nusantara untuk interior kontemporer ramah lingkungan.',
      footer_head_nav: 'Navigasi Cepat',
      footer_head_specs: 'Dokumen & Spesifikasi',
      footer_spec_link1: 'Spesifikasi Teknis Hampy Lumina (PDF)',
      footer_spec_link2: 'Panduan Pemuatan Kargo Laut (CBM)',
      footer_spec_link3: 'Prosedur Uji Fitosanitari Bambu',
      footer_spec_link4: 'Ketentuan Kemasan Ekspor 10-Unit',
      footer_head_contact: 'Workshop & Representasi',
      footer_copyright: '© 2026 Hampy Craft. Seluruh hak cipta dilindungi. Handcrafted in Sleman, Yogyakarta.',
      footer_standards: 'Sistem Kemasan Ekspor Knock-Down • Desain Ramah Lingkungan',

      // Modal
      modal_lbl_dims: 'Dimensi Produk (Ø × T)',
      modal_lbl_mat: 'Komposisi Material',
      modal_lbl_unit_wt: 'Berat Bersih Satuan',
      modal_lbl_carton_wt: 'Berat Kotor per Karton',
      modal_lbl_carton_qty: 'Isi per Master Box',
      modal_lbl_cbm: 'Volume Kubikasi Kargo',
      modal_lbl_app: 'Kategori Aplikasi Ruang',
      modal_pkg_title: 'Standar Proteksi Ekspor Hampy Lumina:',
      quote_basket_btn: "Keranjang Penawaran",
      drawer_lang_label: "Bahasa / Language:",
      hero_badge_text: "Sleman, Yogyakarta • Kriya Anyaman Bambu",
      hero_btn_pkg: "Standar Kemasan Ekspor",
      studio_controls_tag: "Studio Kontrol Pencahayaan",
      studio_controls_title: "Eksplorasi Suasana Ruang",
      studio_controls_desc: "Pilih skenario ruang, sesuaikan temperatur warna kelvin, atau atur intensitas peredup (dimmer).",
      studio_scene_title: "1. Pilih Skenario Ruang",
      scene_shadow_name: "🌟 Pantulan Bayangan Dinding",
      scene_shadow_sub: "Studi Efek Geometris (Gbr 2.1)",
      scene_res_name: "🏡 Area Hunian (Dining)",
      scene_res_sub: "Ruang Makan Keluarga (Gbr 2.2)",
      scene_comm_name: "☕ Area Komersial (Kafe)",
      scene_comm_sub: "Kafe & Bistro Alami (Gbr 2.3)",
      scene_fix_name: "🎋 Struktur Kap Kubah",
      scene_fix_sub: "Sketsa Desain & Proporsi",
      studio_temp_title: "2. Karakteristik Warna Cahaya (Kelvin)",
      temp_amber_name: "2200K Golden Amber",
      temp_warm_name: "2700K Warm White",
      temp_daylight_name: "4000K Neutral Daylight",
      temp_daylight_desc: "Inspeksi Detail & Pemasangan",
      temp_off_name: "Lampu Padam (Siang Hari)",
      temp_off_desc: "Tekstur Alami Siang Hari",
      studio_dimmer_title: "3. Intensitas Dimmer & Kontras Bayangan",
      studio_callout_html: "Pendaran cahaya bohlam LED Warm White menembus kisi silang bambu apus, menghasilkan pola bayangan geometris teratur yang menenangkan pandangan.",
      showcase_badge: "Studi Visual & Konsep Penempatan",
      showcase_h3: "Studi Pencahayaan & Konsep Penempatan Ruang",
      showcase_desc: "Dokumentasi visual pengujian bayangan dinding, sketsa rancangan awal, serta ilustrasi konsep penempatan kap lampu Hampy Lumina pada interior residensial dan komersial.",
      sc1_badge: "Uji Efek Cahaya",
      sc2_badge: "Konsep Hunian",
      sc3_badge: "Konsep Komersial",
      sc4_badge: "DESIGN ENGINEERING BLUEPRINT",
      about_btn: "Diskusikan Kebutuhan Pengadaan Anda",
      stamp_title: "Hampy Craft Sleman",
      stamp_subtitle: "Autentik Handcrafted Yogyakarta",
      values_badge: "Standar Manufaktur Ekspor",
      values_h2: "Spesifikasi Ketat untuk Pengiriman Internasional",
      values_lead: "Protokol produksi terstandarisasi yang dirancang khusus untuk mematuhi regulasi kargo laut dan keselamatan instalasi pencahayaan.",
      pkg_banner_title: "Arsitektur Kemasan Eksklusif & Pengalaman Unboxing",
      pkg_fig_cap: "Struktur Kemasan Knock-Down 10 Kap Lampu per Master Karton",
      pkg_fig_dim: "Dimensi Kubah: Ø35 cm × T 40 cm • 10 pcs / Master Karton (50 × 50 × 45 cm • 0.1125 CBM)",
      unbox_title: "Momen Unboxing Interaktif (Langkah Demi Langkah):",
      unbox_tab1: "1. Buka Kotak Ekspor",
      unbox_tab2: "2. Bantalan Honeycomb & Sekat Karton",
      unbox_tab3: "3. Pasang Fitting & Gantung",
      unbox_s1_h4: "Langkah 1: Segel Luar & Identitas Merek",
      unbox_s2_h4: "Langkah 2: Angkat Bantalan Honeycomb & Kompartemen Listrik",
      unbox_s3_h4: "Langkah 3: Pemasangan Fitting E27 & Gantung Sempurna",
      kd_bar_h4: "Pemberlakuan Prinsip Knock-Down",
      kd_bar_p: "Efisiensi ruang kargo kontainer, kemudahan perakitan di lokasi proyek, dan meminimalkan risiko kerusakan kargo laut.",
      est_res_row_weight: "Estimasi Berat Kotor (Gross Weight)",
      est_res_row_pallets: "Konfigurasi Palet Ekspor",
      est_res_row_route: "Rute & Pelabuhan Tujuan",
      quick_wa_desc: "Klik tombol di bawah untuk langsung terhubung dengan tim pengadaan dan kalkulasi penawaran via WhatsApp.",
      basket_header: "Fixtur yang Anda Pilih untuk Penawaran:",
      form_name_lbl: "Nama Lengkap *",
      form_name_ph: "Nama lengkap Anda",
      form_company_lbl: "Perusahaan / Studio *",
      form_company_ph: "Nama bisnis / importir",
      form_email_lbl: "Alamat Email *",
      form_email_ph: "email@perusahaan.com",
      form_phone_lbl: "Nomor WhatsApp / Telp",
      form_phone_ph: "+62...",
      form_port_lbl: "Kota / Pelabuhan Tujuan Pengiriman (Opsional)",
      form_port_ph: "Contoh: Port of Rotterdam",
      form_msg_lbl: "Rincian Proyek & Kebutuhan Kuantitas",
      form_msg_ph: "Tuliskan kebutuhan jumlah unit, jadwal proyek, dll.",
      form_submit_btn: "Kirim Permintaan Penawaran Resmi",
      form_wa_btn: "Chat WhatsApp Trade",
      footer_col_nav: "Navigasi",
      footer_col_coll: "Koleksi Produk",
      footer_col_ws: "Workshop Sleman",
      footer_address_html: "Sentra Kerajinan Bambu Sleman, D.I. Yogyakarta 55581, Indonesia",
      modal_tag: "Spesifikasi Fixtur",
      modal_btn_quote: "+ Tambahkan ke Permintaan Penawaran",
      modal_btn_pkg: "Pelajari Arsitektur Kemasan",
            studio_player_title: '4. Pemutar Simulasi Animasi Suasana',
      player_status_manual: 'Mode Manual',
      player_status_auto: '▶ Memutar Suasana (Siklus Berjalan)',
      player_status_paused: '⏸ Dijeda',
      studio_play_start: 'Putar Animasi Suasana',
      studio_play_pause: 'Jeda Animasi',
      studio_switch_on: 'Lampu: MENYALA',
      studio_switch_off: 'Lampu: PADAM',
      stage_drag_hint: '👆 Sentuh & Ayunkan Lampu',
      phase_morning: 'Pagi',
      phase_noon: 'Siang',
      phase_sunset: 'Senja',
      phase_evening: 'Malam (2700K)',
      phase_night: 'Larut (2200K)',
      fx_sway_label: 'Ayunan Angin',
      fx_particles_label: 'Partikel Debu',
      fx_pulse_label: 'Pendar Alami',
      modal_pkg_desc: 'Kap lampu dibungkus kantong katun alami (cotton dust bag), bantalan kertas sarang lebah (honeycomb paper wrap), sekat karton gelombang ganda, serta sub-box terpisah untuk fitting E27 dan bohlam LED Warm White.'
    },

    en: {
      // Document
      doc_title: 'Hampy Craft | Indonesian Handcrafted Lighting — Sleman, Yogyakarta',
      doc_desc: 'Handcrafted bamboo pendant lamps from Sleman, Yogyakarta. Contemporary design for eco-friendly interior lighting.',

      // Top Announcement Bar
      announcement_text: '🌏 Worldwide Maritime Shipments from Sleman, Yogyakarta Workshop • Accepting Wholesale Orders & Hospitality Inquiries',
      announcement_link_est: 'CBM Estimator',
      announcement_link_pkg: 'Export Packaging',
      announcement_link_wa: 'WhatsApp Sales',

      // Header & Navigation
      brand_tagline: 'Indonesian Handcrafted Lighting',
      nav_about: 'About Us',
      nav_studio: 'Lighting Studio',
      nav_gallery: 'Application Gallery',
      nav_packaging: 'Export Packaging',
      nav_estimator: 'CBM Calculator',
      nav_terms: 'Export Terms',
      nav_contact: 'Contact',
      drawer_wa_btn: 'Chat WhatsApp Trade',

      // Hero Section
      hero_badge: 'Sustainable Handwoven Bamboo • Sleman, D.I. Yogyakarta',
      hero_h1: 'Handcrafted Bamboo Lighting from Sleman, Yogyakarta',
      hero_lead: 'Handcrafted natural bamboo pendant lighting from Sleman, Yogyakarta with soothing warm ambient glow. Designed for eco-friendly contemporary interiors, residential dining, cafes, and hospitality spaces—tailored for the European and Netherlands markets.',
      hero_btn_studio: 'Launch Lighting Simulator',
      hero_btn_gallery: 'Explore Applications',
      trust_kiln: 'Target Bamboo Moisture <12%',
      trust_breakage: 'Ocean Cargo Protection (Knock-Down)',
      trust_cert: 'Designed to EU Safety Standards (CE in Prep)',

      // Lighting Studio Section
      studio_badge: 'Lighting Experiment Studio',
      studio_3d_title: 'Interactive 3D Prototype Hampy Lumina (Ø35 × H40 cm)',
      studio_3d_fullscreen: '⛶ Open Fullscreen 3D',
      studio_h2: 'Simulate Light Effects & Geometric Shadow Projections',
      studio_lead: 'Test how light diffuses through handcrafted bamboo lattice, projecting geometric shadows and elevating natural residential dining and commercial cafe atmospheres.',
      ctrl_kelvin_lbl: 'Light Color Temperature (Kelvin):',
      ctrl_dimmer_lbl: 'Luminous Intensity (Dimmer):',
      ctrl_scene_lbl: 'Select Perspective Angle:',
      temp_warm_desc: 'Export Standard (2700K)',
      temp_amber_desc: 'Warm Ambient (2200K)',
      temp_soft_desc: 'Neutral Ambient (4000K)',
      temp_cool_desc: 'Daylight Off (0K)',
      scene_dining: 'Residential Dining (Figure 2.2)',
      scene_lounge: 'Cafe & Restaurant (Figure 2.3)',
      scene_island: 'Wall Shadow Test (Figure 2.1)',
      sc_badge: 'Lighting Experiment Documentation',
      sc_h3: 'Light Effect Test Results & Spatial Ambiance',
      sc_lead: 'Shadow projection characteristics and luminous diffusion of Hampy Lumina based on technical test documentation:',
      sc1_title: 'Wall Shadow Projection Test (1-Meter Distance)',
      sc1_desc: 'Cross-woven Apus bamboo lattice diffuses crisp, graceful geometric shadows onto vertical wall surfaces, establishing visual depth without glare.',
      sc2_title: 'Residential Dining Space Placement',
      sc2_desc: 'Suspended 75–85 cm above a 4–6 seat dining table, providing uniform tabletop illumination wrapped in an inviting golden glow.',
      sc3_title: 'Natural Cafe & Restaurant Placement',
      sc3_desc: 'Installed in linear clusters of 3 units above communal dining tables, reinforcing the sustainable identity of modern hospitality interiors.',
      sc4_title: 'DOME LAMPSHADE BLUEPRINT',
      sc4_desc: 'Engineering Sketch & Proportions: Initial concept sketch with symmetrical Ø35 cm × H40 cm woven dome, reinforced base ring, and E27 fitting.',
      sc1_btn: '💡 Test in Simulator',
      sc2_btn: '💡 Test in Simulator',
      sc3_btn: '💡 Test in Simulator',
      sc4_btn: '🎋 Test in Simulator',

      // About Section
      about_badge: 'Artisanal Heritage & Brand Values',
      about_h2: 'Sleman Bamboo Craftsmanship for Contemporary Interiors',
      about_p1: 'Hampy Craft was founded in the artisan bamboo heartland of Sleman, Yogyakarta. Dedicated to environmental sustainability and Indonesian weaving heritage, we craft architectural pendant lighting from selected Apus and Petung bamboo.',
      about_p2: 'Through the Hampy Lumina model, we unite natural light projection with logistical engineering: a stackable knock-down system nesting 10 lampshades into a 0.1125 CBM master carton, drastically reducing international maritime shipping costs.',
      about_stat1: 'Monthly Production Capacity',
      about_stat2: 'Volume per 10-Unit Master Box',
      about_stat3: 'Packaging Space Efficiency',
      stat_1_val: 'Bamboo',
      stat_1_lbl: 'Selected Apus & Petung',
      stat_1_desc: 'Controlled moisture <12% with eco-friendly arsenic/creosote-free treatment',
      stat_2_val: 'Knock-Down',
      stat_2_lbl: 'Export Packaging System',
      stat_2_desc: '10 lampshades nested compactly in a single 50×50×45 cm carton (0.1125 CBM)',
      stat_3_val: 'E27 / 110–240V',
      stat_3_lbl: 'Electrical Standards',
      stat_3_desc: 'E27 fitting & insulated textile cable prepared for electrical safety testing',
      stat_4_val: '9405.99.20*',
      stat_4_lbl: 'Estimated HS Code',
      stat_4_desc: 'Estimated bamboo lampshade classification (subject to customs/forwarder verification)',
      val1_title: 'Sustainable Natural Bamboo',
      val1_desc: 'Apus bamboo (Gigantochloa apus) and Petung bamboo (Dendrocalamus asper) harvested from community groves on the slopes of Mount Merapi, Sleman. Fast-regenerating materials with minimal carbon footprint.',
      val2_title: 'Precision Color Temperature & Shadow Testing',
      val2_desc: 'Specifically calibrated for E27 Warm White 2700K LED bulbs at 85% dimmer. Bamboo lattice spacing is mathematically tuned to project rhythmic geometric shadows without distracting visual glare.',
      val3_title: 'Knock-Down Zero Single-Use Plastic Packaging',
      val3_desc: 'Combination of natural cotton dust bags, protective honeycomb paper wrap, double-wall corrugated dividers, and 5-ply master cartons (50×50×45 cm). Designed to minimize single-use plastics.',

      // Gallery Section
      gallery_badge: 'Visual Studies & Documentation',
      gallery_h2: 'Visual Documentation & Engineering of Hampy Lumina',
      gallery_lead: 'Explore spatial placement concepts for Hampy Lumina and contemporary eco-friendly interior lighting studies.',
      filter_all: 'All Displays',
      filter_residence: 'Residential Concepts',
      filter_dining: 'Dining & Commercial',
      filter_craft: 'Technical & Artisans',
      search_placeholder: 'Search model or material...',
      card_btn_spec: 'Details & Specs',
      card_btn_quote: '+ Add to Quote',
      card_btn_added: '✓ Added to Quote',

      // Packaging Section
      pkg_badge: 'Packaging Engineering',
      pkg_h2: 'Knock-Down Packaging Architecture (10 Units per Master Box)',
      pkg_lead: 'Engineered specifically for ocean container freight safety while delivering a plastic-free unboxing experience wrapped in signature Hampy Craft branding.',
      unbox_s1_badge: 'Layer 1 — Outer Carton',
      unbox_s1_h3: 'Heavy-Duty 5-Ply Double-Wall Corrugated Master Box',
      unbox_s1_p: 'High-strength corrugated carton (50 × 50 × 45 cm, 0.1125 CBM volume) bearing official dark green & ivory white branding. Features international handling symbols (This Way Up, Fragile, Keep Dry) and quarantine compliance markings.',
      unbox_s1_li1: '5-ply outer carton engineered for ocean container stacking resistance',
      unbox_s1_li2: 'Production identity label and cargo handling marks',
      unbox_s1_li3: 'Each carton accommodates 10 nested lampshades (gross weight ~14.75 kg, total 1,475 kg per 100 cartons)',
      unbox_s2_badge: 'Layer 2 — Primary Protection',
      unbox_s2_h3: 'Honeycomb Paper Cushioning & Natural Cotton Dust Bag',
      unbox_s2_p: 'Each lampshade is wrapped in an anti-dust natural cotton dust bag, shielded by impact-absorbing honeycomb paper wrap and a protective bamboo rim collar.',
      unbox_s2_li1: 'Vintage fabric cord & E27 fitting securely protected in a dedicated sub-box',
      unbox_s2_li2: 'Honeycomb paper padding absorbs maritime vibrations and mechanical shock',
      unbox_s2_li3: 'Base rim reinforcing collar maintains the structural form of the dome',
      unbox_s3_badge: 'Layer 3 — Electrical Sub-Box',
      unbox_s3_h3: 'Dedicated Sub-Box for E27 Fitting & Cable Assembly',
      unbox_s3_p: 'Electrical hardware (international standard ceramic E27 socket, insulated fabric cable, ceiling canopy, and 2700K LED bulb) is safely packed in a separate top sub-box.',
      unbox_s3_li1: 'Practical knock-down assembly at installation site',
      unbox_s3_li2: 'Fabric-braided cable neatly bundled with safety insulation terminals',
      unbox_s3_li3: 'Complete bilingual installation booklet (ID / EN) included in every carton',
      kd_title: '4 Simple Steps for On-Site Knock-Down Assembly:',
      kd_s1_title: 'Unpack Master Box & Remove Hardware',
      kd_s1_desc: 'Remove separate electrical sub-box & lift protective honeycomb paper pad.',
      kd_s2_title: 'Unnest Bamboo Lampshades',
      kd_s2_desc: 'Lift nested bamboo lampshades one by one from their protective cotton dust bags.',
      kd_s3_title: 'Mount Structural Socket Ring',
      kd_s3_desc: 'Lock the ceramic E27 socket ring onto the structural bamboo mount inside the dome crown.',
      kd_s4_title: 'Suspend & Install Bulb',
      kd_s4_desc: 'Connect cable to ceiling canopy, insert E27 Warm White LED bulb, switch on.',

      // Estimator Section
      est_badge: 'Shipping Logistics Calculator',
      est_h2: 'Cargo Cubic Volume (CBM) & Container Occupancy Estimator',
      est_lead: 'Calculate cubic volume (CBM), total master cartons, gross weight, and container occupancy for 20ft / 40ft ocean shipments based on official Hampy Lumina export parameters.',
      est_label_model: 'Export Lighting Fixture Model',
      est_label_qty: 'Order Quantity (Pcs)',
      est_btn_calc: 'Calculate Shipping Estimate',
      est_note: '*Calculations based on 50×50×45 cm master cartons (10 units/carton, 0.1125 CBM). Preliminary loading plan math; final confirmation via customs broker or freight forwarder.',
      est_res_title: 'Cargo Loading Plan Summary',
      est_res_row_model: 'Selected Model',
      est_res_row_pcs: 'Total Lampshades',
      est_res_row_cartons: 'Master Carton Count',
      est_res_row_cbm: 'Total Volume (CBM)',
      est_res_row_gw: 'Estimated Gross Weight',
      gauge_20_title: '20ft FCL Container Utilization (~33 CBM cap.)',
      gauge_40_title: '40ft High Cube FCL Container Utilization (~68 CBM cap.)',

      // Terms Section
      terms_badge: 'Foreign Trade Protocols',
      terms_h2: 'Standard Export Trade & Ordering Terms',
      terms_lead: 'Standard commercial guidelines for overseas importers, wholesale distributors, and hospitality lighting procurement.',
      term1_title: 'Minimum Order Quantity (MOQ)',
      term1_val: '50 Units (Standard Order)',
      term1_desc: 'Designed to ensure packing efficiency across 5 master cartons (10 pcs/box, total 0.56 CBM).',
      term2_title: 'Production Lead Time',
      term2_val: '30–45 Days',
      term2_desc: '30–45 days for export batch order fulfillment (50–1,000 units), aligned with Sleman artisan production scheduling.',
      term3_title: 'Payment Terms',
      term3_val: 'T/T 50% Deposit or L/C',
      term3_desc: 'T/T (50% deposit upon PO confirmation, 50% balance before shipment / against B/L copy) or Irrevocable L/C at Sight.',
      term4_title: 'Port of Loading & Incoterms',
      term4_val: 'FOB Tanjung Priok / CFR / CIF',
      term4_desc: 'FOB Tanjung Priok Port (Jakarta) with optional CFR/CIF Port of Rotterdam (Netherlands) upon agreement.',

      // Contact Section
      contact_badge: 'Get in Touch',
      contact_h2: 'Initiate Procurement Discussion & Export Inquiries',
      contact_lead: 'Hampy Craft trade representatives are available to assist with technical specifications, samples, freight calculations, and production schedules.',
      contact_ws_title: 'Hampy Craft Workshop:',
      contact_address_html: 'Sentra Kerajinan Bambu Sleman, D.I. Yogyakarta 55581, Indonesia',
      contact_target_title: 'Target Export Region:',
      contact_target_val: 'European region (specifically Netherlands) and eco-friendly international markets.',
      contact_hours_title: 'Trade Service Hours:',
      contact_hours_val: 'Monday – Saturday, 08:00 – 17:00 WIB (UTC+7)',
      contact_email_lbl: 'Trade & Inquiries Email:',
      contact_ig_lbl: 'Official Instagram:',
      contact_wa_lbl: 'Export WhatsApp:',
      quick_wa_title: '💬 Instant WhatsApp Response',
      quick_wa_p: 'Connect directly with our export division via WhatsApp for rapid catalog requests, wholesale price matrices, and courier sample shipments.',
      quick_wa_btn: 'Connect via WhatsApp',
      form_title: 'Request for Quotation (RFQ)',
      form_company: 'Company / Importer Name',
      form_name: 'Contact Full Name',
      form_email: 'Business Email Address',
      form_phone: 'WhatsApp / Phone Number',
      form_country: 'Destination Country & Port',
      form_model: 'Model of Interest',
      form_qty: 'Estimated Quantity (Units)',
      form_incoterm: 'Preferred Incoterm',
      form_notes: 'Specific Notes / Project Timeline',
      form_btn_submit: 'Submit Export Quotation Request',
      basket_title: 'Selected Fixtures for Quotation:',
      basket_empty: 'No fixtures selected yet. Click "+ Add to Quote" on the gallery.',
      basket_btn_clear: 'Clear Selection',

      // Footer
      footer_brand_desc: 'Manufacturer of handcrafted Apus and Petung bamboo pendant lampshades based in Sleman, Yogyakarta. Crafted with artisanal heritage for contemporary eco-conscious interiors.',
      footer_head_nav: 'Quick Navigation',
      footer_head_specs: 'Documents & Specs',
      footer_spec_link1: 'Hampy Lumina Technical Specs (PDF)',
      footer_spec_link2: 'Maritime Cargo Loading Plan (CBM)',
      footer_spec_link3: 'Bamboo Phytosanitary Test Guidelines',
      footer_spec_link4: '10-Unit Export Packaging Guidelines',
      footer_head_contact: 'Workshop & Contact',
      footer_copyright: '© 2026 Hampy Craft. All rights reserved. Handcrafted in Sleman, Yogyakarta.',
      footer_standards: 'Knock-Down Export Packaging System • Sustainable Design',

      // Modal
      modal_lbl_dims: 'Dimensions (Ø × H)',
      modal_lbl_mat: 'Material Composition',
      modal_lbl_unit_wt: 'Net Unit Weight',
      modal_lbl_carton_wt: 'Gross Carton Weight',
      modal_lbl_carton_qty: 'Quantity per Master Box',
      modal_lbl_cbm: 'Cubic Freight Volume',
      modal_lbl_app: 'Application Category',
      modal_pkg_title: 'Hampy Lumina Export Protection Standard:',
      quote_basket_btn: "Quote Basket",
      drawer_lang_label: "Language / Bahasa:",
      hero_badge_text: "Sleman, Yogyakarta • Handcrafted Bamboo Lighting",
      hero_btn_pkg: "Export Packaging Standard",
      studio_controls_tag: "Lighting Control Studio",
      studio_controls_title: "Spatial Atmosphere Exploration",
      studio_controls_desc: "Select space scenario, adjust Kelvin color temperature, or regulate dimmer intensity.",
      studio_scene_title: "1. Select Space Scenario",
      scene_shadow_name: "🌟 Wall Shadow Reflection",
      scene_shadow_sub: "Geometric Effect Study (Fig 2.1)",
      scene_res_name: "🏡 Residential Dining Area",
      scene_res_sub: "Family Dining Space (Fig 2.2)",
      scene_comm_name: "☕ Commercial Area (Cafe)",
      scene_comm_sub: "Natural Cafe & Bistro (Fig 2.3)",
      scene_fix_name: "🎋 Dome Structure",
      scene_fix_sub: "Design Blueprint & Proportions",
      studio_temp_title: "2. Color Temperature Characteristics (Kelvin)",
      temp_amber_name: "2200K Golden Amber",
      temp_warm_name: "2700K Warm White",
      temp_daylight_name: "4000K Neutral Daylight",
      temp_daylight_desc: "Detail & Installation Inspection",
      temp_off_name: "Daylight Off (0K)",
      temp_off_desc: "Natural Ambient Daylight Texture",
      studio_dimmer_title: "3. Dimmer Intensity & Shadow Contrast",
      studio_callout_html: "Warm White LED illumination diffuses through Apus bamboo weave, projecting structured geometric shadows that soothe the eye.",
      showcase_badge: "Visual Studies & Spatial Concepts",
      showcase_h3: "Lighting Studies & Spatial Placement Concepts",
      showcase_desc: "Visual documentation of wall shadow tests, engineering blueprints, and spatial concept illustrations for Hampy Lumina across residential and commercial interiors.",
      sc1_badge: "Light Effect Test",
      sc2_badge: "Residential Concept",
      sc3_badge: "Commercial Concept",
      sc4_badge: "DESIGN ENGINEERING BLUEPRINT",
      about_btn: "Discuss Your Procurement Needs",
      stamp_title: "Hampy Craft Sleman",
      stamp_subtitle: "Authentic Handcrafted Yogyakarta",
      values_badge: "Export Manufacturing Standards",
      values_h2: "Stringent Specifications for International Shipping",
      values_lead: "Standardized production protocols engineered specifically to comply with ocean container freight and lighting installation safety.",
      pkg_banner_title: "Exclusive Packaging Architecture & Unboxing Experience",
      pkg_fig_cap: "Knock-Down Packaging Architecture (10 Lampshades per Master Carton)",
      pkg_fig_dim: "Dome Dimensions: Ø35 cm × H 40 cm • 10 pcs / Master Carton (50 × 50 × 45 cm • 0.1125 CBM)",
      unbox_title: "Interactive Unboxing Experience (Step by Step):",
      unbox_tab1: "1. Open Export Master Box",
      unbox_tab2: "2. Honeycomb Cushioning & Dividers",
      unbox_tab3: "3. Install Fitting & Hang",
      unbox_s1_h4: "Step 1: Outer Seal & Brand Identity",
      unbox_s2_h4: "Step 2: Lift Honeycomb Cushion & Electrical Compartment",
      unbox_s3_h4: "Step 3: Mount E27 Socket & Complete Suspension",
      kd_bar_h4: "Knock-Down Principle Implementation",
      kd_bar_p: "Container cargo space efficiency, ease of assembly on project site, and minimized ocean cargo breakage risks.",
      est_res_row_weight: "Estimated Gross Weight",
      est_res_row_pallets: "Export Pallet Configuration",
      est_res_row_route: "Shipping Route & Port",
      quick_wa_desc: "Click below to connect directly with our export and procurement team via WhatsApp.",
      basket_header: "Fixtures Selected for Quotation:",
      form_name_lbl: "Full Name *",
      form_name_ph: "Your full name",
      form_company_lbl: "Company / Studio *",
      form_company_ph: "Business or importer name",
      form_email_lbl: "Business Email *",
      form_email_ph: "email@company.com",
      form_phone_lbl: "WhatsApp / Phone Number",
      form_phone_ph: "+...",
      form_port_lbl: "Destination City / Port (Optional)",
      form_port_ph: "e.g. Port of Rotterdam",
      form_msg_lbl: "Project Scope & Quantity Requirements",
      form_msg_ph: "Enter unit volume, project timeline, etc.",
      form_submit_btn: "Submit Official RFQ",
      form_wa_btn: "Chat via WhatsApp",
      footer_col_nav: "Navigation",
      footer_col_coll: "Product Collection",
      footer_col_ws: "Sleman Workshop",
      footer_address_html: "Sentra Kerajinan Bambu Sleman, D.I. Yogyakarta 55581, Indonesia",
      modal_tag: "Fixture Specifications",
      modal_btn_quote: "+ Add to Quotation Request",
      modal_btn_pkg: "Explore Packaging Architecture",
            studio_player_title: '4. Interactive Ambiance Simulation Player',
      player_status_manual: 'Manual Mode',
      player_status_auto: '▶ Playing Atmospheric Cycle',
      player_status_paused: '⏸ Paused',
      studio_play_start: 'Play Ambiance Simulation',
      studio_play_pause: 'Pause Simulation',
      studio_switch_on: 'Lamp: ON',
      studio_switch_off: 'Lamp: OFF',
      stage_drag_hint: '👆 Drag & Swing Lampshade',
      phase_morning: 'Morning',
      phase_noon: 'Noon',
      phase_sunset: 'Sunset',
      phase_evening: 'Evening (2700K)',
      phase_night: 'Night (2200K)',
      fx_sway_label: 'Breeze Sway',
      fx_particles_label: 'Light Dust',
      fx_pulse_label: 'Organic Breathing',
      modal_pkg_desc: 'Lampshade protected in a natural cotton dust bag, honeycomb paper cushioning, double-wall corrugated partitions, and a dedicated sub-box for E27 fitting and Warm White LED bulb.'
    }
  };

  // ==========================================================================
  // Gallery Applications Data (Bilingual ID / EN)
  // ==========================================================================
  const GALLERY_APPLICATIONS = [
    {
      id: 'hc-lumina',
      anchor: 'hampy-lumina-standard',
      title_id: 'Hampy Lumina — Kap Lampu Gantung Bambu',
      title_en: 'Hampy Lumina — Handcrafted Bamboo Pendant Lampshade',
      settingLabel_id: 'Model Standar Ekspor',
      settingLabel_en: 'Standard Export Model',
      cat: 'residence',
      spanClass: 'featured',
      lampUsed_id: 'Hampy Lumina (Bambu Apus & Petung)',
      lampUsed_en: 'Hampy Lumina (Apus & Petung Bamboo)',
      dimCm: 'Ø35 × H40 cm',
      dimIn: 'Ø13.8 × H15.7 in',
      weightUnitCm: '1.2 kg',
      weightUnitIn: '2.6 lbs',
      weightCartonCm: '14.75 kg',
      weightCartonIn: '32.5 lbs',
      cartonQty: '10 pcs (Knock-down)',
      cbm: '0.1125 CBM',
      img: 'images/dining-pendant.jpg',
      d_id: 'Model standar siap ekspor: kap lampu gantung kubah elips berbahan anyaman bambu apus berpola kisi silang rapi. Cincin penguat struktural bambu petung, fitting standar E27, dan kabel gantung kain bertekstur. Dikemas dalam sistem knock-down hemat volume kargo.',
      d_en: 'Standard export-ready model: elliptical dome pendant lampshade featuring fine cross-woven Apus bamboo lattice. Reinforced with Petung bamboo structural rim, standard E27 socket, and textured fabric cord in a space-saving knock-down pack.',
      mat_id: 'Bambu apus (Gigantochloa apus) & bambu petung (kadar air <12%), fitting E27 keramik, kabel kain berinsulasi',
      mat_en: 'Selected Apus & Petung bamboo (moisture <12%), ceramic E27 socket, fabric-braided insulated cord'
    },
    {
      id: 'hc-sim-shadow',
      anchor: 'shadow-projection',
      title_id: 'Eksperimen Bayangan Dinding Geometris',
      title_en: 'Geometric Wall Shadow Experiment',
      settingLabel_id: 'Dokumentasi Teknis (Gambar 2.1)',
      settingLabel_en: 'Technical Study (Figure 2.1)',
      cat: 'craft',
      spanClass: 'compact',
      lampUsed_id: 'Uji Penetrasi & Refleksi Cahaya',
      lampUsed_en: 'Light Diffusion & Shadow Projection',
      dimCm: 'Ø35 × H40 cm',
      dimIn: 'Ø13.8 × H15.7 in',
      weightUnitCm: '1.2 kg',
      weightUnitIn: '2.6 lbs',
      weightCartonCm: '14.75 kg',
      weightCartonIn: '32.5 lbs',
      cartonQty: '10 pcs (Knock-down)',
      cbm: '0.1125 CBM',
      img: 'images/shadow-wall.jpg',
      d_id: 'Eksperimen pencahayaan riil: pendaran cahaya bohlam LED menembus kisi celah bambu apus pada jarak 1 meter dari bidang datar, menghasilkan pola proyeksi geometris eksotis yang menenangkan suasana interior.',
      d_en: 'Physical lighting test: Warm White LED rays penetrating Apus bamboo lattice at 1-meter distance from a flat surface, producing calm, exotic geometric shadow projections.',
      mat_id: 'Anyaman bambu apus kisi teratur, bohlam LED Warm White 2700K (Fitting E27)',
      mat_en: 'Precision Apus bamboo weave, Warm White 2700K LED bulb (E27 fitting)'
    },
    {
      id: 'hc-sim-residential',
      anchor: 'residential-dining',
      title_id: 'Konsep Aplikasi Ruang Makan Hunian',
      title_en: 'Residential Dining Concept',
      settingLabel_id: 'Ilustrasi Konsep (Gambar 2.2)',
      settingLabel_en: 'Concept Illustration (Figure 2.2)',
      cat: 'residence',
      spanClass: 'compact',
      lampUsed_id: 'Simulasi Penataan Meja Makan',
      lampUsed_en: 'Dining Table Spatial Placement',
      dimCm: 'Ø35 × H40 cm',
      dimIn: 'Ø13.8 × H15.7 in',
      weightUnitCm: '1.2 kg',
      weightUnitIn: '2.6 lbs',
      weightCartonCm: '14.75 kg',
      weightCartonIn: '32.5 lbs',
      cartonQty: '10 pcs (Knock-down)',
      cbm: '0.1125 CBM',
      img: 'images/residential-dining.jpg',
      d_id: 'Ilustrasi konsep instalasi kap lampu Hampy Lumina tunggal di atas meja makan 4-6 kursi. Ketinggian gantung ideal 75–85 cm di atas meja menciptakan titik fokus visual yang hangat tanpa menyilaukan mata.',
      d_en: 'Concept rendering of a single Hampy Lumina suspended above a 4-6 seat dining table. Recommended 75–85 cm hanging height above the tabletop creates a warm focal point without glare.',
      mat_id: 'Kap anyaman bambu apus, kanopi gantung plafon, kabel tekstil fleksibel',
      mat_en: 'Apus bamboo lampshade, ceiling canopy, flexible textile cord'
    },
    {
      id: 'hc-sim-commercial',
      anchor: 'commercial-cafe',
      title_id: 'Konsep Aplikasi Kafe & Bistro Alami',
      title_en: 'Natural Cafe & Bistro Concept',
      settingLabel_id: 'Ilustrasi Konsep (Gambar 2.3)',
      settingLabel_en: 'Concept Illustration (Figure 2.3)',
      cat: 'dining',
      spanClass: 'featured',
      lampUsed_id: 'Simulasi Kluster Komersial',
      lampUsed_en: 'Commercial Cluster Placement',
      dimCm: 'Ø35 × H40 cm',
      dimIn: 'Ø13.8 × H15.7 in',
      weightUnitCm: '1.2 kg',
      weightUnitIn: '2.6 lbs',
      weightCartonCm: '14.75 kg',
      weightCartonIn: '32.5 lbs',
      cartonQty: '10 pcs (Knock-down)',
      cbm: '0.1125 CBM',
      img: 'images/commercial-cafe.jpg',
      d_id: 'Ilustrasi konsep penataan deret (linear cluster) 3 unit Hampy Lumina di atas meja komunal restoran atau kafe bernuansa tropis alami. Menghadirkan identitas visual ramah lingkungan dan keintiman bersantap.',
      d_en: 'Concept rendering of a linear cluster of 3 Hampy Lumina units above communal cafe dining tables. Establishes an eco-conscious visual identity and warm hospitality dining atmosphere.',
      mat_id: 'Bambu apus & petung treated, insulasi kabel standar keselamatan internasional',
      mat_en: 'Treated Apus & Petung bamboo, international safety-standard cable insulation'
    },
    {
      id: 'hc-design-sketch',
      anchor: 'design-sketch',
      title_id: 'Sketsa Rancang Bangun & Proporsi',
      title_en: 'Engineering Sketch & Proportions',
      settingLabel_id: 'Dokumentasi Rancang Bangun',
      settingLabel_en: 'Design Engineering Blueprint',
      cat: 'craft',
      spanClass: 'compact',
      lampUsed_id: 'Rancangan Teknis Kap Kubah',
      lampUsed_en: 'Dome Lampshade Blueprint',
      dimCm: 'Ø35 × H40 cm',
      dimIn: 'Ø13.8 × H15.7 in',
      weightUnitCm: '1.2 kg',
      weightUnitIn: '2.6 lbs',
      weightCartonCm: '14.75 kg',
      weightCartonIn: '32.5 lbs',
      cartonQty: '10 pcs (Knock-down)',
      cbm: '0.1125 CBM',
      img: 'images/blueprint.png',
      d_id: 'Dokumentasi rancang bangun teknis: perhitungan kurvatur lengkung elips, kerapatan anyaman kisi bambu apus, diameter cincin kerangka bambu petung, dan sistem penyangga fitting knock-down.',
      d_en: 'Design blueprint: mathematical curve calculation of the elliptical dome, bamboo lattice density, Petung bamboo structural ring diameter, and knock-down socket mount.',
      mat_id: 'Kerangka bambu petung, bilah anyaman bambu apus pilihan',
      mat_en: 'Petung bamboo structural ribs, selected Apus bamboo weave strips'
    },
    {
      id: 'hc-workshop-sleman',
      anchor: 'artisan-workshop',
      title_id: 'Kriya Tangan Pengrajin Sleman',
      title_en: 'Handcrafted Sleman Artisans',
      settingLabel_id: 'Dokumentasi Produksi Kriya',
      settingLabel_en: 'Craft Production Process',
      cat: 'craft',
      spanClass: 'compact',
      lampUsed_id: 'Kriya Anyaman Bambu Tradisional',
      lampUsed_en: 'Traditional Bamboo Weaving',
      dimCm: 'Kapasitas 100–300 pcs/bln',
      dimIn: 'Capacity 100–300 pcs/mo',
      weightUnitCm: '1.2 kg',
      weightUnitIn: '2.6 lbs',
      weightCartonCm: '14.75 kg',
      weightCartonIn: '32.5 lbs',
      cartonQty: '10 pcs (Knock-down)',
      cbm: '0.1125 CBM',
      img: 'images/artisan-craft.jpg',
      d_id: 'Dianyam secara cermat oleh pengrajin lokal di sentra anyaman bambu Sleman, Yogyakarta. Menggunakan bambu apus yang dikeringkan terkontrol (kadar air <12%) dan diawetkan tanpa arsenik/kreosot.',
      d_en: 'Carefully handwoven by local artisans in Sleman bamboo craft center, Yogyakarta. Uses controlled-dried Apus bamboo (<12% moisture) treated without arsenic or creosote.',
      mat_id: 'Bambu apus lestari perkebunan rakyat Sleman, Yogyakarta',
      mat_en: 'Sustainably sourced Apus bamboo from community groves in Sleman'
    }
  ];

  // ==========================================================================
  // Hero Slides Data (Bilingual ID / EN)
  // ==========================================================================
  const SLIDES_DATA = [
    {
      title_id: 'Kap Lampu Anyaman Bambu Alami dari Sleman, Yogyakarta',
      title_en: 'Handcrafted Natural Bamboo Pendant Lamps from Sleman, Yogyakarta',
      lead_id: 'Pencahayaan interior kontemporer ramah lingkungan dengan keindahan kriya anyaman bambu apus khas Sleman. Dirancang dengan sistem kemasan knock-down untuk efisiensi kargo ekspor.',
      lead_en: 'Contemporary eco-friendly interior lighting showcasing the beauty of handcrafted Apus bamboo from Sleman. Engineered with knock-down packaging for efficient export shipping.',
      img: 'images/dining-pendant.jpg',
      caption_id: 'Hampy Lumina — Kap Lampu Gantung Anyaman Bambu Ø35 × H40 cm',
      caption_en: 'Hampy Lumina — Handcrafted Bamboo Pendant Lampshade Ø35 × H40 cm'
    },
    {
      title_id: 'Simulasi Pencahayaan & Refleksi Bayangan Geometris',
      title_en: 'Lighting Simulation & Geometric Shadow Reflections',
      lead_id: 'Pendaran cahaya bohlam LED Warm White menembus kisi bambu apus, membiaskan pola bayangan geometris teratur yang menghangatkan ruang makan hunian maupun kafe.',
      lead_en: 'Warm White LED illumination diffuses through Apus bamboo lattice, projecting ordered geometric shadows that enrich dining and cafe spaces.',
      img: 'images/shadow-wall.jpg',
      caption_id: 'Uji Pendaran Cahaya & Pantulan Bayangan Dinding Geometris (Gambar 2.1)',
      caption_en: 'Light Diffusion & Geometric Wall Shadow Projection Test (Figure 2.1)'
    },
    {
      title_id: 'Rancang Bangun Kokoh & Kadar Air Bambu Terkontrol',
      title_en: 'Engineered Structure & Moisture-Controlled Bamboo',
      lead_id: 'Bambu apus dan petung pilihan dengan kadar air terkontrol di bawah 12% serta perlakuan pengawetan ramah lingkungan bebas arsenik dan kreosot.',
      lead_en: 'Selected Apus and Petung bamboo with moisture content below 12% and eco-friendly treatment free from arsenic and creosote.',
      img: 'images/residential-dining.jpg',
      caption_id: 'Konsep Aplikasi Ruang Makan Hunian (Gambar 2.2)',
      caption_en: 'Residential Dining Space Placement Concept (Figure 2.2)'
    },
    {
      title_id: 'Kemasan Ekspor Knock-Down Bebas Plastik',
      title_en: 'Plastic-Free Knock-Down Export Packaging',
      lead_id: 'Kap lampu dilindungi kantong katun dan bantalan kertas sarang lebah (honeycomb paper), fitting dikemas terpisah untuk menekan risiko kerusakan kargo laut.',
      lead_en: 'Lampshades protected in cotton dust bags and honeycomb paper wrap, with electrical fittings in separate sub-boxes to minimize maritime freight risks.',
      img: 'images/hampy-lumina-packaging.svg',
      caption_id: 'Sistem Kemasan Ekspor 10 Kap per Karton (0.1125 CBM)',
      caption_en: 'Export Packaging System 10 Units per Carton (0.1125 CBM)'
    }
  ];

const SCENES_DATA = {
    shadow: {
      bg: 'images/shadow-wall.jpg',
      showVectorFixture: false,
      label_id: 'Efek Bayangan Dinding (Gambar 2.2)',
      label_en: 'Wall Shadow Effect (Figure 2.2)',
      baseBrightness: 0.35,
      maxBrightness: 1.15
    },
    residential: {
      bg: 'images/residential-dining.jpg',
      showVectorFixture: false,
      label_id: 'Area Hunian Dining (Gambar 2.3)',
      label_en: 'Residential Dining (Figure 2.3)',
      baseBrightness: 0.40,
      maxBrightness: 1.10
    },
    commercial: {
      bg: 'images/commercial-cafe.jpg',
      showVectorFixture: false,
      label_id: 'Area Komersial Kafe (Gambar 2.3)',
      label_en: 'Commercial Cafe (Figure 2.3)',
      baseBrightness: 0.40,
      maxBrightness: 1.15
    },
    fixture: {
      bg: 'images/japandi-dining.jpg',
      showVectorFixture: true,
      label_id: 'Struktur Kap Kubah (Gambar 2.1)',
      label_en: 'Dome Canopy Fixture (Figure 2.1)',
      baseBrightness: 0.25,
      maxBrightness: 1.00
    }
  };

  const LIGHTING_PRESETS = {
    amber: {
      glow: 'rgba(255, 158, 44, 0.75)',
      core: '#FFC875',
      roomBg: 0.25,
      label_id: '2200K Golden Amber • Intimate Dining',
      label_en: '2200K Golden Amber • Intimate Dining'
    },
    warm: {
      glow: 'rgba(255, 187, 85, 0.75)',
      core: '#FFE3A8',
      roomBg: 0.45,
      label_id: '2700K Warm Sunset • Boutique Resort',
      label_en: '2700K Warm Sunset • Boutique Resort'
    },
    soft: {
      glow: 'rgba(255, 215, 158, 0.75)',
      core: '#FFF4DC',
      roomBg: 0.65,
      label_id: '3000K Soft Ambient • Luxury Residence',
      label_en: '3000K Soft Ambient • Luxury Residence'
    },
    daylight: {
      glow: 'rgba(255, 240, 212, 0.65)',
      core: '#FFFFFF',
      roomBg: 0.85,
      label_id: '4000K Clean Daylight • Inspection',
      label_en: '4000K Clean Daylight • Inspection'
    },
    off: {
      glow: 'rgba(0, 0, 0, 0)',
      core: 'rgba(100, 100, 100, 0.2)',
      roomBg: 0.1,
      label_id: 'Lampu Padam (Off) • Natural Day',
      label_en: 'Fixture Turned Off • Natural Day'
    }
  };

  // ==========================================================================
  // Estimator Shipping Data
  // ==========================================================================
        const ESTIMATOR_DATA = {
    'hc-lumina': {
      name_id: 'Hampy Lumina — Standar Knock-Down (10 Kap/Karton, Ø35 × H40 cm)',
      name_en: 'Hampy Lumina — Standard Knock-Down (10 Units/Carton, Ø35 × H40 cm)',
      pcsPerCarton: 10,
      cbmPerCarton: 0.1125,
      kgPerCarton: 14.75
    },
    'hc-lumina-single': {
      name_id: 'Hampy Lumina — Uji Sensitivitas (1 Kap/Karton Utuh)',
      name_en: 'Hampy Lumina — Sensitivity Analysis (1 Unit/Individual Carton)',
      pcsPerCarton: 1,
      cbmPerCarton: 0.049,
      kgPerCarton: 1.8
    }
  };

  // ==========================================================================
  // Application State
  // ==========================================================================
  let currentLang = localStorage.getItem('hampy_lang') || 'id';
  let selectedQuoteItems = [];
  let currentUnit = 'metric'; // 'metric' or 'imperial'
  let currentFilter = 'all';
  let searchQuery = '';
  let activeSlide = 0;
  let slideTimer = null;
  let activeStudioPreset = 'warm';
  let activeStudioScene = 'shadow';
  let activeStudioDimmer = 85;
  let activeModalProduct = null;

  const $ = id => document.getElementById(id);

  // ==========================================================================
  // Internationalization (i18n) Engine
  // ==========================================================================
  function setLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'id';
    localStorage.setItem('hampy_lang', currentLang);
    document.documentElement.lang = currentLang;

    // Update active button state on all switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });

    const dict = I18N[currentLang];
    if (dict) {
      // Static textContent elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.textContent = dict[key];
        }
      });

      // Static innerHTML elements
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });

      // Placeholder attributes
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
          el.setAttribute('placeholder', dict[key]);
        }
      });

      // Meta and Title
      if (dict.doc_title) document.title = dict.doc_title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && dict.doc_desc) metaDesc.setAttribute('content', dict.doc_desc);
    }

    // Refresh dynamic components
    updateHeroSlideTexts();
    renderGallery();
    updateEstimatorSelectOptions();
    calculateEstimator();
    renderQuoteBasket();
    updateModalContent();
    updateUnitSwitchButtonLabel();
  }

  function initI18n() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLang) {
          setLanguage(targetLang);
        }
      });
    });

    // Initial language application
    setLanguage(currentLang);
  }

  // ==========================================================================
  // 1. Interactive Lighting Studio Engine (Three.js 3D Viewer & Showcase Integration)
  // ==========================================================================
  function initLightingStudio() {
    const showcaseCards = document.querySelectorAll('[data-scene-trigger]');

    showcaseCards.forEach(card => {
      card.addEventListener('click', () => {
        const studioSec = $('studio');
        if (studioSec) {
          studioSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ==========================================================================
  // 2. Dynamic Hero Slider
  // ==========================================================================
  function updateHeroSlideTexts() {
    const heroH1 = $('heroHeadline');
    const heroLead = $('heroLead');
    const current = SLIDES_DATA[activeSlide];
    if (!current) return;

    if (heroH1) {
      heroH1.textContent = currentLang === 'en' ? current.title_en : current.title_id;
    }
    if (heroLead) {
      heroLead.textContent = currentLang === 'en' ? current.lead_en : current.lead_id;
    }
  }

  function initHeroSlider() {
    const sliderContainer = $('heroSliderWrap');
    const dotsContainer = $('sliderDots');
    const prevBtn = $('sliderPrev');
    const nextBtn = $('sliderNext');

    if (!sliderContainer || !dotsContainer) return;

    // Render slides HTML
    sliderContainer.innerHTML = SLIDES_DATA.map((s, idx) => {
      const caption = currentLang === 'en' ? s.caption_en : s.caption_id;
      return `
        <div class="slide-item ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
          <img src="${s.img}" alt="${caption}" loading="${idx === 0 ? 'eager' : 'lazy'}" onerror="this.src='images/dining-pendant.jpg'">
          <div class="slide-caption-overlay">
            <strong>${caption}</strong>
            <span>Sleman Workshop Export Spec</span>
          </div>
        </div>
      `;
    }).join('');

    // Render dots
    dotsContainer.innerHTML = SLIDES_DATA.map((_, idx) => `
      <div class="slider-dot ${idx === 0 ? 'active' : ''}" data-dot="${idx}" aria-label="Go to slide ${idx + 1}"></div>
    `).join('');

    const slides = sliderContainer.querySelectorAll('.slide-item');
    const dots = dotsContainer.querySelectorAll('.slider-dot');

    function goToSlide(n) {
      activeSlide = (n + slides.length) % slides.length;
      slides.forEach((sl, idx) => sl.classList.toggle('active', idx === activeSlide));
      dots.forEach((dt, idx) => dt.classList.toggle('active', idx === activeSlide));
      updateHeroSlideTexts();
    }

    function startTimer() {
      stopTimer();
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        slideTimer = setInterval(() => goToSlide(activeSlide + 1), 6500);
      }
    }

    function stopTimer() {
      if (slideTimer) clearInterval(slideTimer);
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startTimer();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(activeSlide - 1);
        startTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(activeSlide + 1);
        startTimer();
      });
    }

    sliderContainer.addEventListener('mouseenter', stopTimer);
    sliderContainer.addEventListener('mouseleave', startTimer);

    // Touch Swipe support
    let touchStartX = 0;
    sliderContainer.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        goToSlide(activeSlide + 1);
        startTimer();
      } else if (touchEndX - touchStartX > 45) {
        goToSlide(activeSlide - 1);
        startTimer();
      }
    }, { passive: true });

    startTimer();
  }

  // ==========================================================================
  // 3. Applications Gallery & Unit Switcher
  // ==========================================================================
  function updateUnitSwitchButtonLabel() {
    const btn = $('unitSwitchBtn');
    if (!btn) return;
    const dict = I18N[currentLang];
    btn.textContent = currentUnit === 'metric' ? dict.unit_metric : dict.unit_imperial;
  }

  function renderGallery() {
    const grid = $('galleryGrid');
    if (!grid) return;

    const q = searchQuery.toLowerCase().trim();
    const dict = I18N[currentLang];

    const filtered = GALLERY_APPLICATIONS.filter(item => {
      const title = (currentLang === 'en' ? item.title_en : item.title_id).toLowerCase();
      const lamp = (currentLang === 'en' ? item.lampUsed_en : item.lampUsed_id).toLowerCase();
      const mat = (currentLang === 'en' ? item.mat_en : item.mat_id).toLowerCase();

      const matchCat = currentFilter === 'all' || item.cat === currentFilter;
      const matchSearch = !q || title.includes(q) || lamp.includes(q) || mat.includes(q);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-strong);">
          <p style="font-size: 16px; color: var(--ink-muted);">
            ${currentLang === 'en' ? 'No fixtures matched your search. Try another keyword or clear the filter.' : 'Tidak ada fixtur yang cocok dengan pencarian Anda. Coba kata kunci lain atau reset filter.'}
          </p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const isSelected = selectedQuoteItems.some(item => item.id === p.id);
      const isMetric = currentUnit === 'metric';
      const dim = isMetric ? p.dimCm : p.dimIn;
      const wtUnit = isMetric ? p.weightUnitCm : p.weightUnitIn;
      const wtCarton = isMetric ? p.weightCartonCm : p.weightCartonIn;

      const title = currentLang === 'en' ? p.title_en : p.title_id;
      const settingLabel = currentLang === 'en' ? p.settingLabel_en : p.settingLabel_id;
      const lampUsed = currentLang === 'en' ? p.lampUsed_en : p.lampUsed_id;

      const btnQuoteText = isSelected ? dict.card_btn_added : dict.card_btn_quote;
      const hintText = currentLang === 'en' ? 'Click for Details' : 'Klik untuk Detail';

      return `
        <article class="gallery-card" id="${p.anchor}" data-id="${p.id}">
          <div class="card-img-wrap" title="${currentLang === 'en' ? 'Click to view full details' : 'Klik untuk melihat detail lengkap'}">
            <img src="${p.img}" alt="${title}" loading="lazy" onerror="this.src='images/dining-pendant.jpg'">
            <span class="card-tag">${settingLabel}</span>
            <div class="card-img-overlay-hint">
              <span>🔍 ${hintText}</span>
            </div>
          </div>

          <div class="card-body">
            <span class="card-lamp-name">${lampUsed}</span>
            <h3 class="card-title">${title}</h3>

            <div class="card-quick-meta">
              <span class="meta-pill">📏 ${dim}</span>
              <span class="meta-pill">📦 ${p.cartonQty}</span>
            </div>

            <div class="card-actions">
              <button class="btn btn-secondary card-spec-btn" data-id="${p.id}" type="button">
                🔍 ${dict.card_btn_spec}
              </button>
              <button class="btn card-quote-btn ${isSelected ? 'btn-active' : ''}" data-id="${p.id}" type="button">
                ${btnQuoteText}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Listeners
    // 1. Click image to open detail modal
    grid.querySelectorAll('.card-img-wrap').forEach(wrap => {
      wrap.addEventListener('click', () => {
        const card = wrap.closest('.gallery-card');
        if (card) {
          const id = card.getAttribute('data-id');
          openSpecModal(id);
        }
      });
    });

    // 2. Click spec button to open detail modal
    grid.querySelectorAll('.card-spec-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openSpecModal(id);
      });
    });

    // 3. Click quote button
    grid.querySelectorAll('.card-quote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        toggleQuoteItem(id);
      });
    });
  }

  function initGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = $('gallerySearch');
    const unitSwitchBtn = $('unitSwitchBtn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter') || 'all';
        renderGallery();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', e => {
        searchQuery = e.target.value;
        renderGallery();
      });
    }

    if (unitSwitchBtn) {
      unitSwitchBtn.addEventListener('click', () => {
        currentUnit = currentUnit === 'metric' ? 'imperial' : 'metric';
        updateUnitSwitchButtonLabel();
        renderGallery();
        updateModalContent();
      });
    }

    renderGallery();
  }

  // ==========================================================================
  // 4. Interactive Unboxing Tabs
  // ==========================================================================
  function initUnboxingTabs() {
    const tabs = document.querySelectorAll('.unbox-tab-btn');
    const panes = document.querySelectorAll('.unbox-tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const activePane = $(targetId);
        if (activePane) activePane.classList.add('active');
      });
    });
  }

  // ==========================================================================
  // 5. Container & CBM Estimator
  // ==========================================================================
  function updateEstimatorSelectOptions() {
    const select = $('estModelSelect');
    if (!select) return;
    const currentVal = select.value || 'hc-lumina';

    select.innerHTML = Object.keys(ESTIMATOR_DATA).map(key => {
      const item = ESTIMATOR_DATA[key];
      const name = currentLang === 'en' ? item.name_en : item.name_id;
      return `<option value="${key}" ${key === currentVal ? 'selected' : ''}>${name}</option>`;
    }).join('');
  }

  function calculateEstimator() {
    const modelKey = $('estModelSelect') ? $('estModelSelect').value : 'hc-lumina';
    const qtyInput = $('estQtyInput');
    const qty = Math.max(1, parseInt(qtyInput ? qtyInput.value : 50, 10) || 50);

    const data = ESTIMATOR_DATA[modelKey] || ESTIMATOR_DATA['hc-lumina'];
    const cartons = Math.ceil(qty / data.pcsPerCarton);
    const totalCbm = (cartons * data.cbmPerCarton).toFixed(2);
    const totalWeightKg = (cartons * data.kgPerCarton).toFixed(1);

    const cbm20Cap = 33.0; // Kapasitas kontainer 20ft standar
    const cbm40Cap = 68.0; // Kapasitas kontainer 40ft HC

    const fill20 = Math.min(100, Math.round((totalCbm / cbm20Cap) * 100));
    const fill40 = Math.min(100, Math.round((totalCbm / cbm40Cap) * 100));
    const pallets = Math.ceil(cartons / 16);

    if ($('resCartons')) {
      $('resCartons').textContent = currentLang === 'en' ? `${cartons} Master Cartons` : `${cartons} Master Karton`;
    }
    if ($('resCbm')) $('resCbm').textContent = `${totalCbm} CBM`;
    if ($('resWeight')) {
      const formattedWt = Number(totalWeightKg).toLocaleString(currentLang === 'en' ? 'en-US' : 'id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      $('resWeight').textContent = `${formattedWt} kg`;
    }
    if ($('resPallets')) {
      $('resPallets').textContent = currentLang === 'en' ? `${pallets} Export Pallets (100 × 120 cm)` : `${pallets} Palet (100 × 120 cm)`;
    }
    if ($('resRoute')) {
      $('resRoute').textContent = 'Sleman → Tanjung Priok → Port of Rotterdam';
    }

    if ($('gaugeFill20')) $('gaugeFill20').style.width = `${fill20}%`;
    if ($('gaugeText20')) {
      $('gaugeText20').textContent = currentLang === 'en'
        ? `${fill20}% filled (~33 CBM cap.)`
        : `${fill20}% terisi (~33 CBM kap.)`;
    }

    if ($('gaugeFill40')) $('gaugeFill40').style.width = `${fill40}%`;
    if ($('gaugeText40')) {
      $('gaugeText40').textContent = currentLang === 'en'
        ? `${fill40}% filled (~68 CBM cap.)`
        : `${fill40}% terisi (~68 CBM kap.)`;
    }
  }

  function initEstimator() {
    const calcBtn = $('estCalcBtn');
    const modelSelect = $('estModelSelect');
    const qtyInput = $('estQtyInput');

    if (calcBtn) calcBtn.addEventListener('click', calculateEstimator);
    if (modelSelect) modelSelect.addEventListener('change', calculateEstimator);
    if (qtyInput) qtyInput.addEventListener('input', calculateEstimator);

    updateEstimatorSelectOptions();
    calculateEstimator();
  }

  // ==========================================================================
  // 6. Quote Cart & WhatsApp Generator
  // ==========================================================================
  function toggleQuoteItem(id) {
    const idx = selectedQuoteItems.findIndex(i => i.id === id);
    if (idx >= 0) {
      selectedQuoteItems.splice(idx, 1);
    } else {
      const prod = GALLERY_APPLICATIONS.find(p => p.id === id);
      if (prod) {
        selectedQuoteItems.push({
          id: prod.id,
          title_id: prod.title_id,
          title_en: prod.title_en,
          lampUsed_id: prod.lampUsed_id,
          lampUsed_en: prod.lampUsed_en,
          dim: prod.dimCm
        });
      }
    }
    renderQuoteBasket();
    renderGallery();
    updateModalContent();
  }

  function renderQuoteBasket() {
    const basketContainer = $('quoteBasketItems');
    const badge = $('headerQuoteCount');
    const hiddenInput = $('hiddenQuoteInput');
    const dict = I18N[currentLang];

    if (badge) badge.textContent = selectedQuoteItems.length;

    if (hiddenInput) {
      hiddenInput.value = selectedQuoteItems.map(i => currentLang === 'en' ? i.lampUsed_en : i.lampUsed_id).join(', ');
    }

    if (!basketContainer) return;

    if (selectedQuoteItems.length === 0) {
      basketContainer.innerHTML = `<p class="quote-empty-text">${dict.basket_empty}</p>`;
      return;
    }

    basketContainer.innerHTML = selectedQuoteItems.map(item => {
      const name = currentLang === 'en' ? item.lampUsed_en : item.lampUsed_id;
      return `
        <div class="quote-item-chip">
          <span>${name} (${item.dim})</span>
          <button class="quote-remove-btn" data-id="${item.id}" type="button" aria-label="Hapus item">&times;</button>
        </div>
      `;
    }).join('');

    basketContainer.querySelectorAll('.quote-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleQuoteItem(btn.getAttribute('data-id'));
      });
    });
  }

  function generateWhatsAppMessage() {
    const phone = '62888899988';
    const name = ($('inqName') ? $('inqName').value.trim() : '') || (currentLang === 'en' ? 'Potential Buyer' : 'Calon Klien');
    const company = ($('inqCompany') ? $('inqCompany').value.trim() : '') || '-';
    const port = ($('inqPort') ? $('inqPort').value.trim() : '') || '-';
    const msg = ($('inqMsg') ? $('inqMsg').value.trim() : '') || '-';

    let text = '';
    if (currentLang === 'en') {
      text += `Hello Hampy Craft Sleman Team,\nI would like to inquire about an order for handcrafted lighting:\n\n`;
      text += `*Buyer Details:*\n- Name: ${name}\n- Company/Studio: ${company}\n- Destination Port: ${port}\n\n`;
      if (selectedQuoteItems.length > 0) {
        text += `*Selected Fixtures:*\n`;
        selectedQuoteItems.forEach((it, idx) => {
          text += `${idx + 1}. ${it.lampUsed_en} (${it.dim})\n`;
        });
        text += '\n';
      }
      text += `*Project Notes:*\n${msg}\n\nKindly share a formal quotation, production lead time, and export packing list.`;
    } else {
      text += `Halo Tim Hampy Craft Sleman,\nSaya tertarik untuk berdiskusi mengenai pemesanan lampu:\n\n`;
      text += `*Detail Pemesan:*\n- Nama: ${name}\n- Perusahaan/Studio: ${company}\n- Pelabuhan/Kota Tujuan: ${port}\n\n`;
      if (selectedQuoteItems.length > 0) {
        text += `*Model Fixtur Terpilih:*\n`;
        selectedQuoteItems.forEach((it, idx) => {
          text += `${idx + 1}. ${it.lampUsed_id} (${it.dim})\n`;
        });
        text += '\n';
      }
      text += `*Catatan Proyek:*\n${msg}\n\nMohon informasi penawaran resmi, jadwal produksi, dan rincian kargo.`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  function initContactAndWa() {
    const waQuickBtn = $('directWaInquiryBtn');
    const waSubmitBtn = $('waSubmitInquiryBtn');
    const form = $('inquiryForm');
    const alertBox = $('formAlertBox');

    if (waQuickBtn) {
      waQuickBtn.addEventListener('click', () => {
        window.open(generateWhatsAppMessage(), '_blank', 'noopener,noreferrer');
      });
    }

    if (waSubmitBtn) {
      waSubmitBtn.addEventListener('click', () => {
        window.open(generateWhatsAppMessage(), '_blank', 'noopener,noreferrer');
      });
    }

    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.className = 'form-alert success';
          alertBox.textContent = I18N[currentLang].form_alert_success;
        }
        form.reset();
        selectedQuoteItems = [];
        renderQuoteBasket();
        renderGallery();
      });
    }
  }

  // ==========================================================================
  // 7. Specification Modal Dialog
  // ==========================================================================
  function openSpecModal(id) {
    const prod = GALLERY_APPLICATIONS.find(p => p.id === id);
    if (!prod) return;
    activeModalProduct = prod;

    const overlay = $('specModalOverlay');
    if (!overlay) return;

    updateModalContent();
    overlay.classList.add('active'); overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSpecModal() {
    const overlay = $('specModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('active'); overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateModalContent() {
    if (!activeModalProduct) return;
    const prod = activeModalProduct;
    const dict = I18N[currentLang];
    const isMetric = currentUnit === 'metric';

    const title = currentLang === 'en' ? prod.title_en : prod.title_id;
    const lampUsed = currentLang === 'en' ? prod.lampUsed_en : prod.lampUsed_id;
    const desc = currentLang === 'en' ? prod.d_en : prod.d_id;
    const mat = currentLang === 'en' ? prod.mat_en : prod.mat_id;
    const setting = currentLang === 'en' ? prod.settingLabel_en : prod.settingLabel_id;

    const dim = isMetric ? prod.dimCm : prod.dimIn;
    const wtUnit = isMetric ? prod.weightUnitCm : prod.weightUnitIn;
    const wtCarton = isMetric ? prod.weightCartonCm : prod.weightCartonIn;

    const modalImg = $('modalImg');
    if (modalImg) {
      modalImg.src = prod.img;
      modalImg.alt = title;
    }
    if ($('modalTitle')) $('modalTitle').textContent = `${lampUsed} — ${title}`;
    if ($('modalDesc')) $('modalDesc').textContent = desc;

    const table = $('modalSpecsTable');
    if (table) {
      table.innerHTML = `
        <tr>
          <td>${dict.modal_lbl_dims}</td>
          <td>${dim}</td>
        </tr>
        <tr>
          <td>${dict.modal_lbl_mat}</td>
          <td>${mat}</td>
        </tr>
        <tr>
          <td>${dict.modal_lbl_unit_wt}</td>
          <td>${wtUnit}</td>
        </tr>
        <tr>
          <td>${dict.modal_lbl_carton_wt}</td>
          <td>${wtCarton}</td>
        </tr>
        <tr>
          <td>${dict.modal_lbl_carton_qty}</td>
          <td>${prod.cartonQty}</td>
        </tr>
        <tr>
          <td>${dict.modal_lbl_cbm}</td>
          <td>${prod.cbm}</td>
        </tr>
        <tr>
          <td>${dict.modal_lbl_app}</td>
          <td>${setting}</td>
        </tr>
      `;
    }

    const modalAddQuoteBtn = $('modalAddQuoteBtn');
    if (modalAddQuoteBtn) {
      const isSelected = selectedQuoteItems.some(i => i.id === prod.id);
      modalAddQuoteBtn.textContent = isSelected ? dict.modal_btn_added : dict.modal_btn_quote;
      modalAddQuoteBtn.onclick = () => {
        toggleQuoteItem(prod.id);
      };
    }

    const modalPkgBtn = $('modalExplorePackagingBtn');
    if (modalPkgBtn) {
      modalPkgBtn.onclick = () => {
        closeSpecModal();
        const pkgSection = $('packaging');
        if (pkgSection) pkgSection.scrollIntoView({ behavior: 'smooth' });
      };
    }
  }

  function initModal() {
    const overlay = $('specModalOverlay');
    const closeBtn = $('modalCloseBtn');

    if (closeBtn) closeBtn.addEventListener('click', closeSpecModal);

    if (overlay) {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) closeSpecModal();
      });
    }

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
        closeSpecModal();
      }
    });

    window.closeSpecModal = closeSpecModal;
    window.openSpecModal = openSpecModal;
  }

  // ==========================================================================
  // 8. Mobile Navigation Drawer & Back to Top
  // ==========================================================================
  function initNavAndDrawer() {
    const menuToggle = $('menuToggleBtn');
    const drawer = $('mobileNavDrawer');
    const drawerClose = $('drawerCloseBtn');
    const backdrop = $('drawerBackdrop');
    const backToTop = $('backToTopBtn');

    function openDrawer() {
      if (!drawer) return;
      drawer.classList.add('active');
      drawer.classList.add('open');
      if (backdrop) {
        backdrop.classList.add('active');
        backdrop.classList.add('open');
      }
      if (menuToggle) menuToggle.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (!drawer) return;
      drawer.classList.remove('active');
      drawer.classList.remove('open');
      if (backdrop) {
        backdrop.classList.remove('active');
        backdrop.classList.remove('open');
      }
      if (menuToggle) menuToggle.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (drawer && (drawer.classList.contains('active') || drawer.classList.contains('open'))) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    if (drawerClose) {
      drawerClose.addEventListener('click', closeDrawer);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    if (drawer) {
      drawer.querySelectorAll('.drawer-links a, .btn-wa').forEach(link => {
        link.addEventListener('click', closeDrawer);
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer && (drawer.classList.contains('active') || drawer.classList.contains('open'))) {
        closeDrawer();
      }
    });

    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }, { passive: true });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
  // ==========================================================================
  // 9. Premium Smooth Scroll Engine
  // ==========================================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        if (href === '#top') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (history.pushState) history.pushState(null, '', '#top');
          return;
        }

        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const header = document.getElementById('siteHeader');
          const headerHeight = (header ? header.offsetHeight : 70) + 16;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: 'smooth'
          });

          if (history.pushState) {
            history.pushState(null, '', href);
          }
        }
      });
    });
  }

  // ==========================================================================
  // Application Bootstrap
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initHeroSlider();
    initLightingStudio();
    initGallery();
    initUnboxingTabs();
    initEstimator();
    initContactAndWa();
    initModal();
    initNavAndDrawer();
    initSmoothScroll();
  });
})();
