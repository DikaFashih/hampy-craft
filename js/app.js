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
      doc_desc: 'Lampu gantung arsitektural anyaman bambu dan rotan alam dari Sleman, Yogyakarta. Dirancang khusus untuk hotel butik, villa mewah, restoran, dan ekspor internasional.',

      // Top Announcement Bar
      announcement_text: '🌏 Pengiriman Ekspor ke Seluruh Dunia dari Workshop Sleman, Yogyakarta • Siap Menerima Pesanan Grosir & Proyek Hospitality',
      announcement_link_est: 'Estimator CBM',
      announcement_link_pkg: 'Kemasan Ekspor',
      announcement_link_wa: 'WhatsApp Sales',

      // Header & Navigation
      brand_tagline: 'Indonesian Handcrafted Lighting',
      nav_about: 'Tentang Kami',
      nav_studio: 'Simulasi Cahaya',
      nav_gallery: 'Galeri Aplikasi',
      nav_packaging: 'Kemasan Ekspor',
      nav_estimator: 'Estimator Kargo',
      nav_reviews: 'Ulasan Buyer',
      nav_contact: 'Kontak / RFQ',
      quote_basket_btn: 'Quote Basket',

      // Mobile Drawer
      drawer_lang_label: 'Bahasa / Language:',
      drawer_wa_btn: 'Chat WhatsApp Trade',

      // Hero Section
      hero_badge_text: 'Sleman, Yogyakarta • Handwoven Lighting',
      hero_h1: 'Handwoven bamboo and rattan lamps, made in Sleman, Yogyakarta.',
      hero_lead: 'Architectural pendant lighting untuk hotel butik internasional, villa mewah, restoran, dan importir lampu. Dianyam dengan ketelitian tangan di Sleman, Yogyakarta dan dikirim ke seluruh dunia.',
      hero_btn_gallery: 'Lihat Galeri Aplikasi',
      hero_btn_studio: 'Coba Simulasi Cahaya',
      hero_btn_pkg: 'Standar Ekspor',
      trust_kiln: 'Bambu Kering Oven (Kiln-Dried)',
      trust_breakage: '0% Kerusakan Kargo (Knock-Down)',
      trust_cert: 'Sertifikasi CE / UL / SAA',

      // Lighting Studio Section
      studio_badge: 'Studio Eksperimen Interaktif',
      studio_h2: 'Simulasi Pendaran Cahaya & Suasana Ruangan',
      studio_lead: 'Uji bagaimana anyaman kisi bambu dan rotan Hampy Craft memancarkan bayangan hangat pada berbagai temperatur warna dan intensitas cahaya dimmer.',
      studio_controls_tag: 'Lighting Controls',
      studio_controls_title: 'Atur Karakteristik Lampu',
      studio_controls_desc: 'Pilih spektrum kelvin atau sesuaikan peredup (dimmer) untuk melihat adaptasi ruang.',
      studio_temp_title: 'Temperatur Warna (Kelvin)',
      temp_amber_name: '2200K Golden Amber',
      temp_amber_desc: 'Intimate Dining / Cafe Bar',
      temp_warm_name: '2700K Warm Sunset',
      temp_warm_desc: 'Boutique Resort / Suite',
      temp_soft_name: '3000K Soft White',
      temp_soft_desc: 'Lounge / Living Corner',
      temp_daylight_name: '4000K Clean White',
      temp_daylight_desc: 'Inspeksi Detail Arsitektur',
      temp_off_name: 'Lampu Padam (Off)',
      temp_off_desc: 'Tampilan anyaman alami di siang hari',
      studio_dimmer_title: 'Intensitas Cahaya (Dimmer)',
      studio_callout_html: '<strong>💡 Catatan Arsitektural:</strong> Seluruh kap lampu Hampy Craft kompatibel dengan dimmer Trailing-Edge / Triac 220V–240V dan 110V (pasar US/Japan).',

      // About Section
      about_badge: 'Workshop Sleman, Yogyakarta',
      about_h2: 'Kami menganyam kap lampu, Anda menentukan skala & atmosfer ruang.',
      about_p1: 'Hampy Craft lahir dari tradisi kriya luhur Sleman, Daerah Istimewa Yogyakarta. Kami memproduksi kap lampu gantung arsitektural dari belahan bambu apus pilihan dan rotan alami berkualitas tinggi.',
      about_p2: 'Arsitek interior, tim pengadaan hotel butik, dan distributor internasional mempercayakan pesanan skala proyek maupun pesanan kontainer penuh kepada kami karena setiap kap dianyam di atas rangka melingkar struktural yang menjamin stabilitas bentuk di iklim tropis berkelembapan tinggi maupun ruang ber-AC.',
      stat_1_lbl: 'Bambu & Rotan Alami Terbarukan',
      stat_2_lbl: 'Risiko Kerusakan Kargo (Knock-down)',
      stat_3_val: '15+ Hari',
      stat_3_lbl: 'Pengeringan Oven & Anti-Bubuk',
      stat_4_lbl: 'Kota & Negara Tujuan Ekspor',
      about_btn: 'Diskusikan Kebutuhan Proyek Anda',
      stamp_title: 'Hampy Craft Sleman',
      stamp_subtitle: 'Autentik Handcrafted Yogyakarta',

      // Values / Export Standards
      values_badge: 'Standar Manufaktur Ekspor',
      values_h2: 'Spesifikasi Ketat untuk Pengiriman Internasional',
      values_lead: 'Protokol produksi terstandarisasi yang dirancang khusus untuk mematuhi regulasi kargo laut dan keselamatan instalasi komersial.',
      val1_title: 'Perlakuan Bambu Anti-Bubuk & Oven Kering',
      val1_desc: 'Bambu dipanen selektif, direndam larutan ramah lingkungan anti-borer (hama bubuk), dan dikeringkan hingga ambang kadar air stabil (kiln-dried) agar tidak melengkung atau retak saat menghadapi musim dingin di negara tujuan.',
      val2_title: 'Kotak Komponen Elektrikal Terpisah',
      val2_desc: 'Fitting keramik E27, kabel gantung vintage berbalut kain, dan bohlam filamen Edison dikemas dalam kotak sub-internal khusus untuk menghilangkan risiko gesekan terhadap kubah anyaman selama pelayaran kontainer.',
      val3_title: 'Efisiensi Kargo Sistem Knock-Down',
      val3_desc: 'Selubung kertas kraft bertekstur, bantalan busa berkontur pada tepi anyaman, dan karton bergelombang 5-ply memaksimalkan kepadatan muatan kontainer 20ft & 40ft HC tanpa mengorbankan keamanan.',

      // Applications Gallery
      gallery_badge: 'Portofolio & Fixtur',
      gallery_h2: 'Galeri Aplikasi Ruang & Koleksi Model',
      gallery_lead: 'Lihat bagaimana lampu anyaman bambu dan rotan Hampy Craft dipasang pada hotel butik, resort tepi pantai, villa privat, dan restoran ternama.',
      filter_all: 'Semua Ruangan',
      filter_hotel: 'Hotels & Resorts',
      filter_residence: 'Luxury Residences',
      filter_dining: 'Restaurants & Cafes',
      search_placeholder: 'Cari model atau material...',
      unit_metric: 'Metric (cm/kg)',
      unit_imperial: 'Imperial (in/lbs)',
      card_btn_quote: '+ Tambah ke Quote',
      card_btn_added: '✓ Dipilih di Quote',
      card_btn_spec: 'Lihat Spesifikasi',

      // Packaging Section (Hampy Lumina)
      pkg_badge: 'Hampy Lumina Architecture',
      pkg_h2: 'Kemasan dan Identitas Produk: Hampy Lumina',
      pkg_lead: 'Dirancang khusus untuk keamanan pengiriman ekspor jarak jauh sekaligus menghadirkan pengalaman unboxing premium beridentitas hijau tua, putih, dan logo resmi Hampy Craft.',
      pkg_banner_title: 'Arsitektur Kemasan Eksklusif & Pengalaman Unboxing',
      pkg_fig_cap: '<strong>Visualisasi Resmi Kemasan Hampy Lumina:</strong> Proteksi internal berlapis & kotak ritel/ekspor beridentitas hijau tua & putih.',
      pkg_fig_dim: 'Dimensi Kubah: Ø35 cm × T 40 cm • 4 pcs / Master Karton',
      unbox_title: 'Momen Unboxing Interaktif (Langkah Demi Langkah):',
      unbox_tab1: '1. Buka Kotak Ekspor',
      unbox_tab2: '2. Busa Pelindung & Rangka',
      unbox_tab3: '3. Pasang Fitting & Gantung',
      unbox_s1_h4: 'Langkah 1: Segel Luar & Identitas Merek',
      unbox_s1_p: 'Karton tebal 5-ply beridentitas hijau tua & putih dengan marka internasional (This Way Up, Fragile, Keep Dry). Segel anti-rusak menjaga integritas isi paket selama perjalanan lintas benua.',
      unbox_s1_li1: 'Karton kraft tahan beban tumpuk kontainer',
      unbox_s1_li2: 'Label batch produksi dan nomor seri terdaftar',
      unbox_s1_li3: 'Pita segel pengaman merek Hampy Craft',
      unbox_s2_h4: 'Langkah 2: Angkat Busa & Ambil Kotak Listrik',
      unbox_s2_p: 'Busa pelindung atas (top foam cushion) berkontur khusus menahan kap lampu agar tidak berguncang. Di bagian atas, kotak komponen elektrikal terpisah dapat diangkat dengan mudah.',
      unbox_s2_li1: 'Kabel kain vintage & fitting keramik E27 terlindung rapat',
      unbox_s2_li2: 'Bohlam filamen Edison dalam wadah anti-pecah',
      unbox_s2_li3: 'Kertas kraft pembungkus bambu dibuka tanpa meninggalkan bekas',
      unbox_s3_h4: 'Langkah 3: Sambungkan Fitting & Lampu Siap Menyala',
      unbox_s3_p: 'Pasang cincin penahan fitting kuningan ke rangka kubah bambu. Gantung pada kanopi plafon dan nikmati pendaran bayangan kisi bambu yang anggun.',
      unbox_s3_li1: 'Pemasangan cepat tanpa alat bantu rumit (< 5 menit per lampu)',
      unbox_s3_li2: 'Cincin bambu struktural menjaga kelengkungan simetris',
      unbox_s3_li3: 'Pancaran cahaya 2700K langsung menghidupkan suasana ruang',
      kd_bar_h4: 'Pemberlakuan Prinsip Knock-Down',
      kd_bar_p: 'Efisiensi ruang kargo kontainer, kemudahan perakitan di lokasi proyek hotel, dan minim risiko kerusakan pada bagian rentan.',
      kd_s1_title: '1. Buka Kemasan',
      kd_s1_desc: 'Keluarkan kotak komponen listrik & angkat busa pelindung atas.',
      kd_s2_title: '2. Pasang Fitting',
      kd_s2_desc: 'Sambungkan kabel gantung kain, rangka melingkar, dan bohlam Edison.',
      kd_s3_title: '3. Siap Digantung',
      kd_s3_desc: 'Kap lampu bambu terpasang dengan pendaran cahaya hangat sempurna.',

      // Container & Cargo Estimator
      est_badge: 'Kalkulator Logistik Ekspor',
      est_h2: 'Estimator Volume Kargo CBM & Master Karton',
      est_lead: 'Hitung estimasi volume kubikasi kargo (CBM), jumlah master box, berat kotor, serta estimasi keterisian kontainer 20ft / 40ft untuk pesanan proyek Anda.',
      est_label_model: 'Pilih Model Fixtur Lampu',
      est_label_qty: 'Jumlah Pesanan (Pcs)',
      est_btn_calc: 'Hitung Estimasi Kargo',
      est_note: '*Estimasi didasarkan pada packing density standar ekspor Hampy Craft. Packing list final akan disesuaikan saat finalisasi order.',
      est_res_title: 'Hasil Kalkulasi Kargo',
      est_res_row_cartons: 'Estimasi Master Karton',
      est_res_row_cbm: 'Total Kubikasi (CBM)',
      est_res_row_weight: 'Estimasi Berat Kotor (Gross Weight)',
      gauge_20_title: 'Keterisian Kontainer 20ft FCL',
      gauge_40_title: 'Keterisian Kontainer 40ft High Cube FCL',

      // Commercial Terms
      terms_h2: 'Ketentuan Perdagangan & Pengadaan (Trading Terms)',
      terms_lead: 'Panduan standar untuk pemesanan grosir, proyek arsitektur, dan ekspor kontainer.',
      term1_title: 'Minimum Order Quantity (MOQ)',
      term1_desc: '10 pcs per model / 30 pcs kombinasi untuk pesanan ekspor. Pesanan custom arsitektur tersedia berdasarkan kesepakatan.',
      term2_title: 'Waktu Produksi (Lead Time)',
      term2_desc: '3–5 minggu untuk batch 100–300 pcs. 6–8 minggu untuk 1x20ft / 40ft kontainer penuh.',
      term3_title: 'Ketentuan Pembayaran',
      term3_desc: 'T/T Deposit 50% pada konfirmasi pesanan, pelunasan 50% terhadap salinan Bill of Lading (B/L) atau L/C at sight.',
      term4_title: 'Pelabuhan Muat & Incoterms',
      term4_desc: 'Semarang (Pelabuhan Tanjung Mas) atau Surabaya (Tanjung Perak) • FOB, CIF, atau EXW Workshop Sleman.',

      // Reviews
      reviews_badge: 'Testimoni Internasional',
      reviews_h2: 'Ulasan Pembeli & Arsitek Pengadaan',
      reviews_lead: 'Kesan dari direktur procurement perhotelan, arsitek resort mewah, dan distributor lampu global.',
      rev1_quote: '“Kemasan knock-down Hampy Lumina dengan kotak elektrikal terpisah dan bantalan busa terbukti menghasilkan zero breakage pada pengiriman 120 kap lampu ke resort kami.”',
      rev1_role: 'Procurement Director, Eco-Resort Bali & Lombok',
      rev2_quote: '“Kami menentukan model Ombak dan Jala untuk enam villa mewah di Canggu. Anyaman bambu alami dan pendaran Edison hangat berpadu sempurna dengan dinding batu hijau kami.”',
      rev2_role: 'Principal Interior Architect, Studio Kriya Tropis',
      rev3_quote: '“Kotak ritel hijau tua dengan logo emblem Hampy Craft memberikan impresi unboxing yang sangat berkelas di showroom kami di Australia. Sangat direkomendasikan.”',
      rev3_role: 'Head of Purchasing, Melbourne Home & Lighting Importers',

      // Contact & Quotation
      contact_badge: 'Inquiry & Penawaran',
      contact_h2: 'Kirimkan Rencana Proyek Anda',
      contact_lead: 'Sampaikan kebutuhan fixtur, estimasi kuantitas, serta pelabuhan tujuan kargo. Tim kami di Sleman akan menyusun penawaran resmi, jadwal produksi, dan rincian kubikasi kargo.',
      contact_ws_title: 'Workshop Hampy Craft:',
      contact_address_html: 'Kawasan Kerajinan Sleman, D.I. Yogyakarta 55581, Indonesia',
      contact_hours_title: 'Jam Layanan Dagang:',
      contact_hours_val: 'Senin – Sabtu, 08:00 – 17:00 WIB (UTC+7)',
      contact_email_lbl: 'Email Dagang:',
      contact_wa_lbl: 'WhatsApp Ekspor:',
      quick_wa_title: '💬 Respon Cepat via WhatsApp',
      quick_wa_desc: 'Klik tombol di bawah untuk langsung terhubung dengan tim pengadaan dan kalkulasi penawaran via WhatsApp.',
      quick_wa_btn: 'Buka WhatsApp dengan Item Terpilih',
      basket_header: 'Fixtur yang Anda Pilih untuk Penawaran:',
      basket_empty: 'Belum ada fixtur yang dipilih. Klik "+ Tambah ke Quote" pada galeri produk di atas untuk menambahkan model.',
      form_name_lbl: 'Nama Lengkap *',
      form_name_ph: 'Nama Anda',
      form_company_lbl: 'Perusahaan / Studio *',
      form_company_ph: 'PT / CV / Studio Desain',
      form_email_lbl: 'Alamat Email *',
      form_email_ph: 'nama@email.com',
      form_phone_lbl: 'Nomor WhatsApp / Telp',
      form_phone_ph: '+62 812...',
      form_port_lbl: 'Kota / Pelabuhan Tujuan Pengiriman (Opsional)',
      form_port_ph: 'Contoh: Jakarta / Port of Rotterdam / Sydney',
      form_msg_lbl: 'Rincian Proyek & Kebutuhan Kuantitas',
      form_msg_ph: 'Jelaskan kebutuhan hotel, villa, atau pesanan grosir, target waktu instalasi, dll.',
      form_submit_btn: 'Kirim Inquiry Resmi',
      form_wa_btn: 'Chat WA Langsung',
      form_alert_success: 'Terima kasih! Inquiry resmi Anda berhasil dikirim. Tim kami di Sleman akan membalas penawaran dalam 24 jam hari kerja.',

      // Footer
      footer_brand_tag: 'Indonesian Handcrafted Lighting',
      footer_brand_desc: 'Manufaktur kap lampu arsitektural anyaman bambu & rotan berbasis di Sleman, Yogyakarta. Diciptakan dengan keaslian kriya tangan nusantara untuk ruang berkelas dunia.',
      footer_col_nav: 'Navigasi',
      footer_col_coll: 'Koleksi Fixtur',
      footer_col_ws: 'Workshop Sleman',
      footer_address_html: 'Kawasan Kerajinan Sleman, D.I. Yogyakarta 55581, Indonesia<br>Email: <a href="mailto:trade@hampycraft.com" style="color: var(--kraft);">trade@hampycraft.com</a><br>WA: <a href="https://wa.me/6281234567890" style="color: var(--kraft);">+62 812-3456-7890</a>',
      footer_copyright: '© 2026 Hampy Craft. Seluruh hak cipta dilindungi. Handcrafted in Sleman, Yogyakarta.',
      footer_standards: 'Standar Ekspor ISO/CE • Knock-Down Packaging Architecture',

      // Modal Dialog
      modal_tag: 'Spesifikasi Model',
      modal_pkg_title: 'Standar Proteksi Ekspor Hampy Lumina:',
      modal_pkg_desc: 'Kap lampu dibungkus kertas kraft bertekstur, cincin pelindung tepi anyaman, busa atas (top foam cushion), serta kotak terpisah untuk fitting dan bohlam Edison.',
      modal_btn_quote: '+ Tambahkan ke Request Quote',
      modal_btn_added: '✓ Telah Ditambahkan ke Quote',
      modal_btn_pkg: 'Pelajari Arsitektur Kemasan',
      modal_lbl_dims: 'Dimensi Produk',
      modal_lbl_mat: 'Material & Rangka',
      modal_lbl_unit_wt: 'Berat Bersih / Unit',
      modal_lbl_carton_wt: 'Berat Kotor / Master Box',
      modal_lbl_carton_qty: 'Isi per Master Karton',
      modal_lbl_cbm: 'Volume Kubikasi Kargo',
      modal_lbl_app: 'Aplikasi Ruang Ideal'
    },

    en: {
      // Document
      doc_title: 'Hampy Craft | Indonesian Handcrafted Lighting — Sleman, Yogyakarta',
      doc_desc: 'Architectural handwoven bamboo and rattan pendant lighting crafted in Sleman, Yogyakarta, Indonesia. Designed for boutique hotels, luxury villas, restaurants, and global export.',

      // Top Announcement Bar
      announcement_text: '🌏 Worldwide Export Shipping from Sleman Workshop, Yogyakarta • Wholesale & Hospitality Project Orders Welcome',
      announcement_link_est: 'CBM Estimator',
      announcement_link_pkg: 'Export Packaging',
      announcement_link_wa: 'WhatsApp Sales',

      // Header & Navigation
      brand_tagline: 'Indonesian Handcrafted Lighting',
      nav_about: 'About Us',
      nav_studio: 'Light Studio',
      nav_gallery: 'Applications Gallery',
      nav_packaging: 'Export Packaging',
      nav_estimator: 'Freight Estimator',
      nav_reviews: 'Buyer Reviews',
      nav_contact: 'Contact / RFQ',
      quote_basket_btn: 'Quote Basket',

      // Mobile Drawer
      drawer_lang_label: 'Language / Bahasa:',
      drawer_wa_btn: 'Chat WhatsApp Trade',

      // Hero Section
      hero_badge_text: 'Sleman, Yogyakarta • Handwoven Lighting',
      hero_h1: 'Handwoven bamboo and rattan lamps, made in Sleman, Yogyakarta.',
      hero_lead: 'Architectural pendant lighting crafted for international boutique hotels, luxury villas, restaurants, and lighting importers. Handwoven with master precision in Sleman, Yogyakarta and exported worldwide.',
      hero_btn_gallery: 'Explore Applications',
      hero_btn_studio: 'Try Lighting Studio',
      hero_btn_pkg: 'Export Standards',
      trust_kiln: 'Kiln-Dried Bamboo (Anti-Borer)',
      trust_breakage: '0% Cargo Breakage (Knock-Down)',
      trust_cert: 'CE / UL / SAA Electrical Standards',

      // Lighting Studio Section
      studio_badge: 'Interactive Experiment Studio',
      studio_h2: 'Lighting Atmosphere & Ambient Simulation',
      studio_lead: 'Experience how Hampy Craft handwoven bamboo and rattan fixtures cast warm intricate lattice shadows across varied color temperatures and dimmer levels.',
      studio_controls_tag: 'Lighting Controls',
      studio_controls_title: 'Adjust Fixture Ambience',
      studio_controls_desc: 'Select color temperature presets or dial the dimmer to preview room adaptation.',
      studio_temp_title: 'Color Temperature (Kelvin)',
      temp_amber_name: '2200K Golden Amber',
      temp_amber_desc: 'Intimate Dining / Bar Counter',
      temp_warm_name: '2700K Warm Sunset',
      temp_warm_desc: 'Boutique Resort / Suite',
      temp_soft_name: '3000K Soft White',
      temp_soft_desc: 'Lounge & Living Space',
      temp_daylight_name: '4000K Clean White',
      temp_daylight_desc: 'Architectural Inspection',
      temp_off_name: 'Fixture Turned Off',
      temp_off_desc: 'Natural handwoven texture in daylight',
      studio_dimmer_title: 'Light Intensity (Dimmer)',
      studio_callout_html: '<strong>💡 Architectural Note:</strong> All Hampy Craft pendant fixtures are fully compatible with Trailing-Edge / Triac dimmers for 220V–240V and 110V (US/Japan markets).',

      // About Section
      about_badge: 'Workshop Sleman, Yogyakarta',
      about_h2: 'We weave the lampshades; you define the scale & spatial atmosphere.',
      about_p1: 'Hampy Craft stems from the rich artisan craftsmanship of Sleman, Yogyakarta, Indonesia. We manufacture architectural pendant fixtures woven from hand-selected Apus bamboo and high-grade natural rattan.',
      about_p2: 'Interior architects, boutique hotel procurement teams, and global lighting distributors trust us with bespoke project batches and full container loads. Each shade is formed over reinforced structural rings ensuring geometric stability in both tropical humidity and air-conditioned interiors.',
      stat_1_lbl: 'Renewable Natural Bamboo & Rattan',
      stat_2_lbl: 'Cargo Damage Rate (Knock-Down)',
      stat_3_val: '15+ Days',
      stat_3_lbl: 'Kiln-Drying & Anti-Borer Treatment',
      stat_4_lbl: 'Global Export Destination Markets',
      about_btn: 'Discuss Your Project Requirements',
      stamp_title: 'Hampy Craft Sleman',
      stamp_subtitle: 'Authentic Handcrafted Yogyakarta',

      // Values / Export Standards
      values_badge: 'Export Manufacturing Standards',
      values_h2: 'Rigorous Specifications for Global Shipping',
      values_lead: 'Standardized production protocols designed specifically to comply with ocean freight regulations and commercial installation safety.',
      val1_title: 'Anti-Borer Treatment & Kiln-Drying',
      val1_desc: 'Bamboo is harvested sustainably, treated with non-toxic anti-borer solutions, and kiln-dried to equilibrium moisture content to prevent warping or splitting in cold destination climates.',
      val2_title: 'Independent Electrical Component Box',
      val2_desc: 'Ceramic E27 sockets, vintage fabric-braided suspension cords, and Edison filament bulbs are packed inside dedicated internal boxes, eliminating rubbing against the woven dome during ocean transit.',
      val3_title: 'Knock-Down Space Efficiency',
      val3_desc: 'Textured kraft paper wrapping, contoured rim foam cushioning, and heavy-duty 5-ply corrugated export cartons maximize loading density in 20ft & 40ft HC containers without sacrificing safety.',

      // Applications Gallery
      gallery_badge: 'Portfolio & Fixtures',
      gallery_h2: 'Spatial Applications & Collection Gallery',
      gallery_lead: 'Explore how Hampy Craft handcrafted bamboo and rattan fixtures elevate boutique hotels, coastal beach resorts, luxury private villas, and dining spaces.',
      filter_all: 'All Spaces',
      filter_hotel: 'Hotels & Resorts',
      filter_residence: 'Luxury Residences',
      filter_dining: 'Restaurants & Cafes',
      search_placeholder: 'Search fixtures or materials...',
      unit_metric: 'Metric (cm/kg)',
      unit_imperial: 'Imperial (in/lbs)',
      card_btn_quote: '+ Add to Quote',
      card_btn_added: '✓ Added to Quote',
      card_btn_spec: 'View Specifications',

      // Packaging Section (Hampy Lumina)
      pkg_badge: 'Hampy Lumina Architecture',
      pkg_h2: 'Packaging Architecture & Product Identity: Hampy Lumina',
      pkg_lead: 'Engineered specifically for safe long-haul ocean freight while delivering a premium unboxing experience featuring deep green, white, and the official Hampy Craft emblem.',
      pkg_banner_title: 'Exclusive Packaging Architecture & Unboxing Experience',
      pkg_fig_cap: '<strong>Official Hampy Lumina Packaging Visualization:</strong> Multi-tier internal protection & signature deep forest green and white export cartons.',
      pkg_fig_dim: 'Dome Dimensions: Ø35 cm × H 40 cm • 4 pcs / Master Carton',
      unbox_title: 'Interactive Unboxing Journey (Step by Step):',
      unbox_tab1: '1. Open Export Carton',
      unbox_tab2: '2. Protective Foam & Ring',
      unbox_tab3: '3. Connect Fitting & Hang',
      unbox_s1_h4: 'Step 1: Outer Seal & Brand Identity',
      unbox_s1_p: 'Heavy-duty 5-ply corrugated carton in signature deep green & white with international handling marks (This Way Up, Fragile, Keep Dry). Tamper-evident seals preserve cargo integrity across continents.',
      unbox_s1_li1: 'Kraft carton withstands high container stacking pressure',
      unbox_s1_li2: 'Registered production batch and serial tracking label',
      unbox_s1_li3: 'Official Hampy Craft security seal tape',
      unbox_s2_h4: 'Step 2: Lift Foam & Remove Electrical Box',
      unbox_s2_p: 'Custom contoured top foam cushion secures the woven dome in place. Directly above, the independent electrical component box is lifted effortlessly.',
      unbox_s2_li1: 'Vintage fabric cord & ceramic E27 socket shielded securely',
      unbox_s2_li2: 'Edison filament bulb encased in anti-shatter packaging',
      unbox_s2_li3: 'Textured kraft paper reveals bamboo weaving residue-free',
      unbox_s3_h4: 'Step 3: Secure Socket & Hang Fixture',
      unbox_s3_p: 'Fasten the brass socket retainer ring to the dome frame. Mount to the ceiling canopy and immerse in delicate ambient bamboo lattice shadows.',
      unbox_s3_li1: 'Fast installation without complex tools (< 5 mins per shade)',
      unbox_s3_li2: 'Structural bamboo ring maintains symmetrical curvature',
      unbox_s3_li3: 'Warm 2700K glow immediately enlivens the spatial ambience',
      kd_bar_h4: 'Knock-Down Architecture Implementation',
      kd_bar_p: 'Container space efficiency, effortless on-site assembly for hotel projects, and near-zero damage to fragile components.',
      kd_s1_title: '1. Open Carton',
      kd_s1_desc: 'Remove electrical component sub-box & lift top foam cushion.',
      kd_s2_title: '2. Install Socket',
      kd_s2_desc: 'Connect fabric cord, structural ring, and Edison bulb.',
      kd_s3_title: '3. Ready to Hang',
      kd_s3_desc: 'Woven bamboo fixture installed with exquisite warm amber glow.',

      // Container & Cargo Estimator
      est_badge: 'Export Logistics Calculator',
      est_h2: 'CBM Cargo Volume & Master Carton Estimator',
      est_lead: 'Calculate estimated cubic meter volume (CBM), master carton count, gross weight, and 20ft / 40ft HC container fill rates for your project order.',
      est_label_model: 'Select Fixture Model',
      est_label_qty: 'Order Quantity (Pcs)',
      est_btn_calc: 'Calculate Freight Estimate',
      est_note: '*Estimates based on Hampy Craft standard export packing density. Final packing list confirmed upon order placement.',
      est_res_title: 'Cargo Calculation Results',
      est_res_row_cartons: 'Estimated Master Cartons',
      est_res_row_cbm: 'Total Volume (CBM)',
      est_res_row_weight: 'Estimated Gross Weight',
      gauge_20_title: '20ft FCL Container Utilization',
      gauge_40_title: '40ft High Cube FCL Utilization',

      // Commercial Terms
      terms_h2: 'Commercial Trading Terms & Ordering Guide',
      terms_lead: 'Standard guidelines for wholesale distribution, hospitality projects, and container freight.',
      term1_title: 'Minimum Order Quantity (MOQ)',
      term1_desc: '10 pcs per model / 30 pcs assorted for export shipments. Bespoke custom architectural designs available upon inquiry.',
      term2_title: 'Production Lead Time',
      term2_desc: '3–5 weeks for batches of 100–300 pcs. 6–8 weeks for 1x20ft or 40ft full container loads (FCL).',
      term3_title: 'Payment Terms',
      term3_desc: 'T/T 50% deposit upon order confirmation, balance 50% upon presentation of Bill of Lading (B/L) copy or confirmed L/C at sight.',
      term4_title: 'Port of Loading & Incoterms',
      term4_desc: 'Semarang (Tanjung Mas Port) or Surabaya (Tanjung Perak Port) • FOB, CIF, or EXW Sleman Workshop.',

      // Reviews
      reviews_badge: 'International Testimonials',
      reviews_h2: 'Buyer Reviews & Specifier Endorsements',
      reviews_lead: 'Feedback from hospitality procurement directors, luxury resort architects, and global lighting distributors.',
      rev1_quote: '“Hampy Lumina’s knock-down packaging with independent electrical boxes and custom foam achieved zero breakage across 120 pendant shades shipped to our resort.”',
      rev1_role: 'Procurement Director, Eco-Resort Bali & Lombok',
      rev2_quote: '“We specified the Ombak and Jala models for six luxury villas in Canggu. The organic bamboo weave and warm Edison filaments pair effortlessly with our natural green stone walls.”',
      rev2_role: 'Principal Interior Architect, Studio Kriya Tropis',
      rev3_quote: '“The forest green retail packaging with the Hampy Craft circular seal delivers an upscale unboxing impression in our Australian showrooms. Highly recommended.”',
      rev3_role: 'Head of Purchasing, Melbourne Home & Lighting Importers',

      // Contact & Quotation
      contact_badge: 'Inquiry & Quotations',
      contact_h2: 'Submit Your Project Specifications',
      contact_lead: 'Share your fixture requirements, estimated quantities, and destination port. Our team in Sleman will prepare a formal quote, production schedule, and cargo volume breakdown.',
      contact_ws_title: 'Hampy Craft Workshop:',
      contact_address_html: 'Sleman Artisan Quarter, D.I. Yogyakarta 55581, Indonesia',
      contact_hours_title: 'Trade Service Hours:',
      contact_hours_val: 'Monday – Saturday, 08:00 – 17:00 WIB (UTC+7)',
      contact_email_lbl: 'Trade Email:',
      contact_wa_lbl: 'Export WhatsApp:',
      quick_wa_title: '💬 Instant WhatsApp Inquiry',
      quick_wa_desc: 'Click below to connect directly with our export procurement specialists with your selected items preloaded.',
      quick_wa_btn: 'Open WhatsApp with Selected Fixtures',
      basket_header: 'Selected Fixtures for Quotation:',
      basket_empty: 'No fixtures selected yet. Click "+ Add to Quote" on the gallery cards above to build your quotation list.',
      form_name_lbl: 'Full Name *',
      form_name_ph: 'Your full name',
      form_company_lbl: 'Company / Studio *',
      form_company_ph: 'Company, Hotel or Design Studio',
      form_email_lbl: 'Business Email *',
      form_email_ph: 'name@company.com',
      form_phone_lbl: 'WhatsApp / Phone Number',
      form_phone_ph: '+62 812...',
      form_port_lbl: 'Destination City / Port of Discharge (Optional)',
      form_port_ph: 'e.g., Rotterdam / Sydney / Los Angeles / Singapore',
      form_msg_lbl: 'Project Details & Quantity Requirements',
      form_msg_ph: 'Describe your hotel, villa or wholesale requirements, target handover timeline, etc.',
      form_submit_btn: 'Submit Official RFQ',
      form_wa_btn: 'Direct WhatsApp RFQ',
      form_alert_success: 'Thank you! Your official inquiry has been submitted. Our team in Sleman will reply with a formal quote within 24 business hours.',

      // Footer
      footer_brand_tag: 'Indonesian Handcrafted Lighting',
      footer_brand_desc: 'Manufacturer of architectural handwoven bamboo and rattan lighting fixtures based in Sleman, Yogyakarta, Indonesia. Crafted with authentic Indonesian heritage for world-class spaces.',
      footer_col_nav: 'Navigation',
      footer_col_coll: 'Fixture Collections',
      footer_col_ws: 'Sleman Workshop',
      footer_address_html: 'Sleman Artisan Quarter, D.I. Yogyakarta 55581, Indonesia<br>Email: <a href="mailto:trade@hampycraft.com" style="color: var(--kraft);">trade@hampycraft.com</a><br>WA: <a href="https://wa.me/6281234567890" style="color: var(--kraft);">+62 812-3456-7890</a>',
      footer_copyright: '© 2026 Hampy Craft. All rights reserved. Handcrafted in Sleman, Yogyakarta.',
      footer_standards: 'Export Standards ISO/CE • Knock-Down Packaging Architecture',

      // Modal Dialog
      modal_tag: 'Model Specifications',
      modal_pkg_title: 'Hampy Lumina Export Protection Standard:',
      modal_pkg_desc: 'Lampshade wrapped in textured kraft paper, woven rim shield, top foam cushion, and dedicated sub-box for electrical fitting and Edison filament bulb.',
      modal_btn_quote: '+ Add to Quotation Request',
      modal_btn_added: '✓ Added to Quotation Request',
      modal_btn_pkg: 'Explore Packaging Architecture',
      modal_lbl_dims: 'Product Dimensions',
      modal_lbl_mat: 'Materials & Frame',
      modal_lbl_unit_wt: 'Net Weight / Unit',
      modal_lbl_carton_wt: 'Gross Weight / Master Box',
      modal_lbl_carton_qty: 'Master Box Capacity',
      modal_lbl_cbm: 'Cubic Freight Volume',
      modal_lbl_app: 'Ideal Spatial Application'
    }
  };

  // ==========================================================================
  // Gallery Applications Data (Bilingual ID / EN)
  // ==========================================================================
  const GALLERY_APPLICATIONS = [
    {
      id: 'hc-lumina',
      anchor: 'boutique-hotel-suite',
      title_id: 'Boutique Hotel Suite & High-Ceiling Dining',
      title_en: 'Boutique Hotel Suite & High-Ceiling Dining',
      settingLabel_id: 'Hotels & Resorts',
      settingLabel_en: 'Hotels & Resorts',
      cat: 'hotel',
      spanClass: 'featured',
      lampUsed_id: 'Hampy Lumina Woven Bamboo Dome',
      lampUsed_en: 'Hampy Lumina Woven Bamboo Dome',
      dimCm: 'Ø35 × H40 cm',
      dimIn: 'Ø13.8 × H15.7 in',
      weightUnitCm: '1.4 kg',
      weightUnitIn: '3.1 lbs',
      weightCartonCm: '6.8 kg',
      weightCartonIn: '15.0 lbs',
      cartonQty: '4 pcs (Knock-down)',
      cbm: '0.14 CBM',
      img: 'images/dining-pendant.jpg',
      d_id: 'Signature Hampy Lumina dome dengan anyaman kisi bambu silang (cross-woven), cincin dasar bambu kokoh, kabel gantung kain bertekstur, dan bohlam filamen Edison hangat. Dikemas dalam kotak ekspor knock-down eksklusif hijau tua & putih.',
      d_en: 'Signature Hampy Lumina dome featuring cross-woven natural bamboo lattice, reinforced structural bamboo base ring, textured fabric cord, and warm Edison filament glow. Encased in proprietary knock-down export cartons.',
      mat_id: 'Anyaman bambu apus pilihan, cincin bambu struktural, fitting kuningan E27, kabel fabric vintage',
      mat_en: 'Selected Apus bamboo, structural bamboo frame ring, brass E27 socket, vintage fabric cable'
    },
    {
      id: 'hc-02',
      anchor: 'luxury-villa-living',
      title_id: 'Private Luxury Villa & High-Ceiling Living Lounge',
      title_en: 'Private Luxury Villa & High-Ceiling Living Lounge',
      settingLabel_id: 'Luxury Residences',
      settingLabel_en: 'Luxury Residences',
      cat: 'residence',
      spanClass: 'compact',
      lampUsed_id: 'Ombak Wide-Brim Rattan Pendant',
      lampUsed_en: 'Ombak Wide-Brim Rattan Pendant',
      dimCm: 'Ø85 × H26 cm',
      dimIn: 'Ø33.4 × H10.2 in',
      weightUnitCm: '1.8 kg',
      weightUnitIn: '4.0 lbs',
      weightCartonCm: '9.8 kg',
      weightCartonIn: '21.6 lbs',
      cartonQty: '5 pcs',
      cbm: '0.18 CBM',
      img: 'images/living-lounge.jpg',
      d_id: 'Dirancang untuk ruang keluarga berplafon tinggi dan kitchen island. Bentuk tepian bergelombang lebar mendistribusikan cahaya ke bawah secara merata tanpa menghalangi pandangan visual ruangan.',
      d_en: 'Engineered for high-ceiling family living lounges and kitchen islands. The broad undulating brim diffuses warm downward ambient light without obstructing spatial sightlines.',
      mat_id: 'Rotan alam (natural rattan core) dan lilitan kulit rotan halus',
      mat_en: 'Natural rattan core with hand-wrapped fine rattan peel bindings'
    },
    {
      id: 'hc-03',
      anchor: 'coastal-restaurant-dining',
      title_id: 'Fine Dining Restaurant & Open-Air Garden Bar',
      title_en: 'Fine Dining Restaurant & Open-Air Garden Bar',
      settingLabel_id: 'Restaurants & Cafes',
      settingLabel_en: 'Restaurants & Cafes',
      cat: 'dining',
      spanClass: 'compact',
      lampUsed_id: 'Jala Ribbed Dome Pendant Cluster',
      lampUsed_en: 'Jala Ribbed Dome Pendant Cluster',
      dimCm: 'Ø50 × H42 cm',
      dimIn: 'Ø19.6 × H16.5 in',
      weightUnitCm: '2.1 kg',
      weightUnitIn: '4.6 lbs',
      weightCartonCm: '11.0 kg',
      weightCartonIn: '24.2 lbs',
      cartonQty: '4 pcs',
      cbm: '0.15 CBM',
      img: 'images/restaurant-cluster.jpg',
      d_id: 'Ideal digantung berderet di atas meja makan panjang restoran terbuka menghadap taman tropis. Kisi anyaman bambu membiaskan bayangan radial dramatis ke dinding dan langit-langit kayu untuk suasana santap malam intim.',
      d_en: 'Ideal in linear clusters above long solid timber dining tables and open-air garden bars. Vertical bamboo ribs cast dramatic radial lattice shadows across timber ceilings for an intimate dining ambience.',
      mat_id: 'Bambu petung kering oven (kiln-dried) dengan perlakuan anti-bubuk & cuaca tropis',
      mat_en: 'Kiln-dried Petung bamboo with non-toxic anti-borer and tropical weather treatment'
    },
    {
      id: 'hc-04',
      anchor: 'master-suite-cabana',
      title_id: 'Japandi Dining Room & Minimalist Residence',
      title_en: 'Japandi Dining Room & Minimalist Residence',
      settingLabel_id: 'Hotels & Resorts',
      settingLabel_en: 'Hotels & Resorts',
      cat: 'hotel',
      spanClass: 'featured',
      lampUsed_id: 'Lumbung Double-Wall Lantern',
      lampUsed_en: 'Lumbung Double-Wall Lantern',
      dimCm: 'Ø48 × H64 cm',
      dimIn: 'Ø18.8 × H25.1 in',
      weightUnitCm: '2.6 kg',
      weightUnitIn: '5.7 lbs',
      weightCartonCm: '13.5 kg',
      weightCartonIn: '29.7 lbs',
      cartonQty: '4 pcs',
      cbm: '0.24 CBM',
      img: 'images/japandi-dining.jpg',
      d_id: 'Menghadirkan harmoni estetika Jepang-Skandinavia dengan bayangan kisi bambu artistik yang terpancar dramatis ke permukaan meja makan kayu solid dan panel dinding shoji.',
      d_en: 'Combines Japanese-Scandinavian aesthetics with artistic bamboo lattice shadows cast gracefully across solid wood dining tables and sliding shoji screens.',
      mat_id: 'Anyaman lapis ganda (double-wall) bambu apus dan simpai rotan alami',
      mat_en: 'Double-wall woven Apus bamboo lattice and natural rattan hoop accents'
    },
    {
      id: 'hc-05',
      anchor: 'penthouse-dining-terrace',
      title_id: 'Modern Penthouse Dining Room & Covered Veranda',
      title_en: 'Modern Penthouse Dining Room & Covered Veranda',
      settingLabel_id: 'Luxury Residences',
      settingLabel_en: 'Luxury Residences',
      cat: 'residence',
      spanClass: 'compact',
      lampUsed_id: 'Tirtayasa Tiered Rattan Chandelier',
      lampUsed_en: 'Tirtayasa Tiered Rattan Chandelier',
      dimCm: 'Ø70 × H55 cm',
      dimIn: 'Ø27.5 × H21.6 in',
      weightUnitCm: '3.1 kg',
      weightUnitIn: '6.8 lbs',
      weightCartonCm: '14.2 kg',
      weightCartonIn: '31.3 lbs',
      cartonQty: '4 pcs',
      cbm: '0.26 CBM',
      img: 'images/dining-pendant.jpg',
      d_id: 'Menghadirkan kehangatan organik pada arsitektur modern minimalis berbahan beton, kaca, dan marmer. Sangat cocok untuk ruang makan penthouse atau beranda santai beratap.',
      d_en: 'Introduces organic artisanal warmth to minimalist architectural spaces of concrete, glass, and marble. Perfectly suited for penthouse dining suites and sheltered verandas.',
      mat_id: 'Rotan alam bertekstur alami dengan rangka cincin baja finish kuningan antik',
      mat_en: 'Textured natural rattan with antique brass-finished steel structural armature'
    },
    {
      id: 'hc-06',
      anchor: 'artisan-workshop',
      title_id: 'Master Artisan Atelier & Sleman Workshop',
      title_en: 'Master Artisan Atelier & Sleman Workshop',
      settingLabel_id: 'Restaurants & Cafes',
      settingLabel_en: 'Restaurants & Cafes',
      cat: 'dining',
      spanClass: 'compact',
      lampUsed_id: 'Sleman Handwoven Craftsmanship',
      lampUsed_en: 'Sleman Handwoven Craftsmanship',
      dimCm: 'Ø95 × H32 cm',
      dimIn: 'Ø37.4 × H12.6 in',
      weightUnitCm: '2.2 kg',
      weightUnitIn: '4.8 lbs',
      weightCartonCm: '11.5 kg',
      weightCartonIn: '25.3 lbs',
      cartonQty: '4 pcs',
      cbm: '0.25 CBM',
      img: 'images/artisan-craft.jpg',
      d_id: 'Dianyam satu per satu secara manual oleh empu pengrajin Sleman menggunakan teknik kriya turun-temurun, ketelitian kisi-kisi anyam simetris, dan pahatan ring kayu halus berkualitas ekspor.',
      d_en: 'Handcrafted one by one by master artisans in Sleman, Yogyakarta utilizing generational weaving techniques, precise symmetrical lattice spacing, and export-grade structural rim carving.',
      mat_id: 'Bambu apus pilihan, simpai pengunci kayu mahoni, dan tali rotan pengikat',
      mat_en: 'Selected Apus bamboo splits, carved mahogany locking hoops, and peeled rattan ties'
    }
  ];

  // ==========================================================================
  // Hero Slides Data (Bilingual ID / EN)
  // ==========================================================================
  const SLIDES_DATA = [
    {
      title_id: 'Handwoven bamboo and rattan lamps, made in Sleman, Yogyakarta.',
      title_en: 'Handwoven bamboo and rattan lamps, made in Sleman, Yogyakarta.',
      lead_id: 'Architectural pendant lighting untuk hotel butik internasional, villa mewah, restoran, dan importir lampu. Dianyam dengan ketelitian tangan di Sleman, Yogyakarta dan dikirim ke seluruh dunia.',
      lead_en: 'Architectural pendant lighting crafted for international boutique hotels, luxury villas, restaurants, and lighting importers. Handwoven with master precision in Sleman, Yogyakarta and exported worldwide.',
      img: 'images/dining-pendant.jpg',
      caption_id: 'Boutique Dining Suite — Hampy Lumina Bamboo Dome',
      caption_en: 'Boutique Dining Suite — Hampy Lumina Bamboo Dome'
    },
    {
      title_id: 'Suasana santap malam intim di restoran tropis terbuka.',
      title_en: 'Intimate evening dining in open-air tropical restaurants.',
      lead_id: 'Dari deretan meja makan kayu panjang hingga bar terazzo santap malam, kluster lampu gantung anyaman bambu menghadirkan pendaran hangat keemasan saat senja tiba.',
      lead_en: 'From long timber dining tables to terrazzo evening bars, clusters of handwoven bamboo pendants create an inviting golden amber glow as dusk falls.',
      img: 'images/restaurant-cluster.jpg',
      caption_id: 'Fine Dining Ambient Setting — Tropical Restaurant Cluster',
      caption_en: 'Fine Dining Ambient Setting — Tropical Restaurant Cluster'
    },
    {
      title_id: 'Estetika ruang santai bernuansa hangat & alami.',
      title_en: 'Warm organic aesthetic for luxury living lounges.',
      lead_id: 'Harmoni kap lampu bambu artisanal di ruang keluarga berplafon tinggi, menghadirkan ketenangan visual berpadu selaras dengan tanaman indoor dan perabot kayu.',
      lead_en: 'Artisanal bamboo pendant lamps suspended in high-ceiling living spaces deliver visual tranquility, blending seamlessly with indoor greenery and wood furnishings.',
      img: 'images/living-lounge.jpg',
      caption_id: 'Luxury Villa Living Lounge — Hampy Craft Natural Pendant',
      caption_en: 'Luxury Villa Living Lounge — Hampy Craft Natural Pendant'
    },
    {
      title_id: 'Kemasan ekspor knock-down berstandar internasional.',
      title_en: 'International standard knock-down export packaging.',
      lead_id: 'Setiap kap lampu Hampy Lumina dibalut kertas kraft bertekstur, bantalan busa berkontur, serta kotak elektrikal terpisah untuk keamanan kargo kontainer optimal.',
      lead_en: 'Each Hampy Lumina lampshade is wrapped in textured kraft paper, shielded by contoured foam cushions, with separate electrical boxes for zero ocean freight breakage.',
      img: 'images/hampy-lumina-packaging.svg',
      caption_id: 'Hampy Lumina Packaging Architecture & Unboxing',
      caption_en: 'Hampy Lumina Packaging Architecture & Unboxing'
    }
  ];

  // ==========================================================================
  // Lighting Atmosphere Presets (Bilingual ID / EN)
  // ==========================================================================
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
      name_id: 'Hampy Lumina Dome — Knock-Down (Ø35 × H40 cm)',
      name_en: 'Hampy Lumina Dome — Knock-Down (Ø35 × H40 cm)',
      pcsPerCarton: 4,
      cbmPerCarton: 0.14,
      kgPerCarton: 6.8
    },
    'hc-02': {
      name_id: 'Ombak Wide-Brim Rattan — Luxury Villa (Ø85 × H26 cm)',
      name_en: 'Ombak Wide-Brim Rattan — Luxury Villa (Ø85 × H26 cm)',
      pcsPerCarton: 5,
      cbmPerCarton: 0.18,
      kgPerCarton: 9.8
    },
    'hc-03': {
      name_id: 'Jala Ribbed Dome — Fine Dining (Ø50 × H42 cm)',
      name_en: 'Jala Ribbed Dome — Fine Dining (Ø50 × H42 cm)',
      pcsPerCarton: 4,
      cbmPerCarton: 0.15,
      kgPerCarton: 11.0
    },
    'hc-04': {
      name_id: 'Lumbung Lantern — Resort Suite (Ø48 × H64 cm)',
      name_en: 'Lumbung Lantern — Resort Suite (Ø48 × H64 cm)',
      pcsPerCarton: 4,
      cbmPerCarton: 0.24,
      kgPerCarton: 13.5
    },
    'hc-05': {
      name_id: 'Tirtayasa Chandelier — Penthouse (Ø70 × H55 cm)',
      name_en: 'Tirtayasa Chandelier — Penthouse (Ø70 × H55 cm)',
      pcsPerCarton: 4,
      cbmPerCarton: 0.26,
      kgPerCarton: 14.2
    },
    'hc-06': {
      name_id: 'Sleman Handwoven Craftsmanship (Ø95 × H32 cm)',
      name_en: 'Sleman Handwoven Craftsmanship (Ø95 × H32 cm)',
      pcsPerCarton: 4,
      cbmPerCarton: 0.25,
      kgPerCarton: 11.5
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
    updateLightingStudioText();
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
  // 1. Interactive Lighting Atmosphere Studio
  // ==========================================================================
  function applyLighting() {
    const preset = LIGHTING_PRESETS[activeStudioPreset];
    if (!preset) return;

    const aura = $('stageLightAura');
    const bloom = $('fixtureGlowBloom');
    const roomBg = $('stageRoomBg');

    const factor = activeStudioDimmer / 100;
    const opacity = activeStudioPreset === 'off' ? 0 : factor * 0.9;

    if (aura) {
      aura.style.background = `radial-gradient(circle at 50% 45%, ${preset.glow} 0%, transparent 70%)`;
      aura.style.opacity = opacity;
    }

    if (bloom) {
      bloom.style.background = preset.core;
      bloom.style.opacity = opacity;
      bloom.style.filter = `blur(${12 + factor * 14}px)`;
      bloom.style.transform = `translateX(-50%) scale(${0.7 + factor * 0.5})`;
    }

    if (roomBg) {
      roomBg.style.opacity = Math.max(0.12, preset.roomBg * (0.4 + factor * 0.6));
    }

    updateLightingStudioText();
  }

  function updateLightingStudioText() {
    const indicatorText = $('indicatorText');
    const dimmerVal = $('dimmerVal');
    const preset = LIGHTING_PRESETS[activeStudioPreset];
    if (!preset) return;

    const label = currentLang === 'en' ? preset.label_en : preset.label_id;
    if (indicatorText) {
      indicatorText.textContent = `${label} (${activeStudioDimmer}%)`;
    }
    if (dimmerVal) {
      dimmerVal.textContent = `${activeStudioDimmer}%`;
    }
  }

  function initLightingStudio() {
    const dimmer = $('dimmerSlider');
    const tempBtns = document.querySelectorAll('.temp-btn');

    tempBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tempBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeStudioPreset = btn.getAttribute('data-temp') || 'warm';
        applyLighting();
      });
    });

    if (dimmer) {
      dimmer.addEventListener('input', e => {
        activeStudioDimmer = parseInt(e.target.value, 10) || 0;
        applyLighting();
      });
    }

    applyLighting();
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
      const desc = currentLang === 'en' ? p.d_en : p.d_id;

      const btnQuoteText = isSelected ? dict.card_btn_added : dict.card_btn_quote;

      return `
        <article class="gallery-card ${p.spanClass}" id="${p.anchor}" data-id="${p.id}">
          <div class="card-img-wrap">
            <img src="${p.img}" alt="${title}" loading="lazy" onerror="this.src='images/dining-pendant.jpg'">
            <span class="card-tag">${settingLabel}</span>
          </div>

          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <p class="card-desc">${desc}</p>

            <table class="card-specs-table">
              <tr>
                <td>${dict.modal_lbl_dims}</td>
                <td>${dim}</td>
              </tr>
              <tr>
                <td>${dict.modal_lbl_unit_wt}</td>
                <td>${wtUnit} (${wtCarton} / box)</td>
              </tr>
              <tr>
                <td>${dict.modal_lbl_carton_qty}</td>
                <td>${p.cartonQty} • ${p.cbm}</td>
              </tr>
            </table>

            <div class="card-actions">
              <button class="btn btn-secondary card-spec-btn" data-id="${p.id}" type="button">
                ${dict.card_btn_spec}
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
    grid.querySelectorAll('.card-spec-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openSpecModal(id);
      });
    });

    grid.querySelectorAll('.card-quote-btn').forEach(btn => {
      btn.addEventListener('click', () => {
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

    const cbm20Cap = 28.0;
    const cbm40Cap = 68.0;

    const fill20 = Math.min(100, Math.round((totalCbm / cbm20Cap) * 100));
    const fill40 = Math.min(100, Math.round((totalCbm / cbm40Cap) * 100));

    if ($('resCartons')) $('resCartons').textContent = `${cartons} Master Karton`;
    if ($('resCbm')) $('resCbm').textContent = `${totalCbm} CBM`;
    if ($('resWeight')) $('resWeight').textContent = `${totalWeightKg} kg`;

    if ($('gaugeFill20')) $('gaugeFill20').style.width = `${fill20}%`;
    if ($('gaugeText20')) {
      $('gaugeText20').textContent = currentLang === 'en'
        ? `${fill20}% filled (~28 CBM cap.)`
        : `${fill20}% terisi (~28 CBM kap.)`;
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
    const phone = '6281234567890';
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
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSpecModal() {
    const overlay = $('specModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
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
    const backToTop = $('backToTopBtn');

    if (menuToggle && drawer) {
      menuToggle.addEventListener('click', () => {
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (drawerClose && drawer) {
      drawerClose.addEventListener('click', () => {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    if (drawer) {
      drawer.querySelectorAll('.drawer-links a').forEach(link => {
        link.addEventListener('click', () => {
          drawer.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }

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
  });
})();
