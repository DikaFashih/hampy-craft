export const SPECS = {
  links: {
    prototype3dExternal: 'https://sites.google.com/view/prototipe-3d-hampylumina/full-page-embed'
  },
  product: {
    name: 'Hampy Lumina',
    code: 'PRK-01',
    dimensions: {
      diameter: '35 cm',
      height: '40 cm',
      suspensionCable: '1,5 m (Fabric-Braided)'
    },
    material: {
      bamboo: 'Bambu Petung & Bambu Apus Pilihan',
      origin: 'Sleman, D.I. Yogyakarta, Indonesia',
      moistureTarget: '< 12%',
      treatment: 'Pengawetan tanpa arsenik dan kreosot serta lapisan pernis berbasis air (water-based clear matte coating)'
    },
    electrical: {
      socket: 'Universal E27 Fitting',
      voltage: '110–240 V (50/60 Hz)',
      bulbRecommended: 'LED Warm White 2700K',
      dimmerRecommended: '85% Intensitas Rekomendasi',
      compliance: 'Dirancang mengacu pada ketentuan keselamatan UE (CE sedang dipersiapkan)'
    },
    commercial: {
      moq: 50,
      leadTime: '30–45 hari',
      segment: 'Pasar Menengah Eropa (€60 – €250)',
      paymentTerms: 'T/T: 30% DP setelah kontrak & persetujuan sampel, 70% sebelum pemuatan setelah laporan inspeksi akhir (opsi alternatif: terhadap salinan B/L atau L/C at sight)',
      paymentTermsShortId: 'T/T 30% DP, 70% Sebelum Muat (opsi salinan B/L)',
      paymentTermsShortEn: 'T/T 30% Deposit, 70% Pre-Loading (B/L copy option)',
      incoterms: 'FOB Pelabuhan Tanjung Priok (Jakarta), CFR/CIF Rotterdam opsional'
    }
  },
  packaging: {
    type: 'Knock-down Packaging System',
    materials: 'Karton Gelombang Ganda 5-Ply + Honeycomb Paper + Kantong Katun Alami (Kemasan Kertas Tanpa Plastik Sekali Pakai)',
    cartonDimensions: {
      length: 50,
      width: 50,
      height: 45,
      unit: 'cm'
    },
    unitsPerCarton: 10,
    unitNetWeightKg: 1.2, // 1,2 kg per unit
    cartonCbm: 0.1125, // (50*50*45)/1000000 = 0.1125 CBM
    cartonNetWeightKg: 12, // Berat produk 10 kap = 10 × 1,2 kg = 12 kg bersih
    cartonGrossWeightKg: 13.5, // Berat kotor 1 karton (produk + kemasan) = 13,5 kg
    cartonsPerPallet: 16, // 4 lapis × 4 karton per lapis = 16 karton/palet (tinggi 195 cm < pintu 228 cm)
    palletWeightKg: 18, // ~18 kg per palet ISPM 15 (7 palet = 125 kg sesuai packing list)
    batchStandard: {
      lamps: 1000,
      cartons: 100,
      pallets: 7,
      totalCbm: 11.25,
      totalNetWeightKg: 1200, // 1.000 × 1,2 kg
      totalCartonGrossWeightKg: 1350, // 100 × 13,5 kg
      totalPalletWeightKg: 125, // 7 palet ISPM 15
      totalShipmentGrossWeightKg: 1475 // 1.350 + 125 kg (sesuai Tabel 2.4 & 5.4)
    },
    container20ft: {
      capacityCbm: 33,
      utilizationPercent: 34.09, // 11.25 / 33 * 100 = 34.09%
      maxPayloadKg: 28000
    },
    container40ftHc: {
      capacityCbm: 68,
      utilizationPercent: 16.54, // 11.25 / 68 * 100 = 16.54%
      maxPayloadKg: 28600
    },
    sensitivity1Pack: {
      cartonDimensions: '38 × 38 × 42 cm',
      cartonCbm: 0.072,
      total1000Cbm: 72.0,
      container20ftUtilization: 218.1,
      savingsPercent: 84.4 // (72 - 11.25) / 72 = 84.375% ~ 84.4%
    },
    assumptionNote: 'Asumsi sistem nesting 10-pack knock-down (validasi pengujian fisik / drop test disyaratkan pada sampel pertama sebelum produksi massal)'
  },
  logistics: {
    originFacility: 'Sentra Kerajinan Bambu Sleman, DI Yogyakarta',
    portOfLoading: 'Port of Tanjung Priok, Jakarta (IDTPP)',
    portOfDischarge: 'Port of Rotterdam, Netherlands (NLRTM)',
    routeDistanceNm: '± 8.500 Nautical Miles',
    seaTransitTime: '30–40 Hari Pelayaran Laut (Total 36–50 hari hingga gudang Eropa/Amsterdam)'
  },
  contact: {
    brand: 'Hampy Craft',
    address: 'Kecamatan Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581, Indonesia',
    whatsapp: '+62 888-899-988',
    whatsappUrl: 'https://wa.me/62888899988?text=Halo%20Hampy%20Craft,%20saya%20tertarik%20dengan%20katalog%20ekspor%20Hampy%20Lumina',
    email: 'export@hampycraft.com',
    secondaryEmail: 'customercare@hampycraft.com',
    repTarget: 'Target Pasar Awal: Uni Eropa (Fokus Belanda)'
  }
};

export function calculateShipmentMetrics(quantity, isEn = false) {
  const safeQty = Math.max(0, Number(quantity) || 0);
  const cartons = Math.ceil(safeQty / SPECS.packaging.unitsPerCarton);
  const pallets = cartons > 0 ? Math.ceil(cartons / SPECS.packaging.cartonsPerPallet) : 0;
  const rawCbm = cartons * SPECS.packaging.cartonCbm;

  const locale = isEn ? 'en-US' : 'id-ID';
  const cbmFormatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(rawCbm);

  // Exact product net weight: 1,2 kg per unit (12 kg per 10-pack carton)
  const totalNetWeightKg = Math.round(safeQty * SPECS.packaging.unitNetWeightKg);
  // Exact carton gross weight: 13,5 kg per carton
  const totalCartonGrossWeightKg = Math.round(cartons * SPECS.packaging.cartonGrossWeightKg);
  // Exact pallet weight: 7 pallets = 125 kg (standard packing list), otherwise ~18 kg/pallet
  const palletWeightKg = cartons === 100 ? 125 : pallets * SPECS.packaging.palletWeightKg;
  const totalShipmentGrossWeightKg = totalCartonGrossWeightKg + palletWeightKg;

  return {
    cartons,
    pallets,
    rawCbm,
    cbmFormatted,
    totalNetWeightKg,
    totalCartonGrossWeightKg,
    palletWeightKg,
    totalShipmentGrossWeightKg
  };
}
