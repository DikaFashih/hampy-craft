export const SPECS = {
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
      treatment: 'Perendaman larutan ramah lingkungan bebas arsenik & kreosot (anti-bubuk/jamur)'
    },
    electrical: {
      socket: 'Universal E27 Ceramic Fitting',
      voltage: '110–240 V (50/60 Hz)',
      bulbRecommended: 'LED Filament Edison Warm White 2700K',
      dimmerRecommended: '85% Intensitas Rekomendasi',
      compliance: 'Dirancang mengacu pada standar keselamatan UE (CE sedang dipersiapkan)'
    },
    commercial: {
      moq: 50,
      leadTime: '30–45 hari',
      segment: 'Pasar Menengah Eropa (€60 – €250)',
      paymentTerms: 'T/T (Deposit 30% konfirmasi PO, pelunasan 70% terhadap salinan Bill of Lading)',
      incoterms: 'FOB Pelabuhan Tanjung Priok (Jakarta), CFR/CIF Rotterdam opsional'
    }
  },
  packaging: {
    type: 'Knock-down Packaging System',
    materials: 'Karton Gelombang Ganda 5-Ply + Honeycomb Cushioning Paper + Kantong Katun Unbleached (Kemasan Bebas Plastik)',
    cartonDimensions: {
      length: 50,
      width: 50,
      height: 45,
      unit: 'cm'
    },
    unitsPerCarton: 10,
    cartonCbm: 0.1125, // (50*50*45)/1000000 = 0.1125 CBM
    cartonNetWeightKg: 13.5, // 13,5 kg netto per karton isi 10 kap
    cartonGrossWeightKg: 14.75, // 14,75 kg estimasi bruto kargo berpalet
    batchStandard: {
      lamps: 1000,
      cartons: 100,
      totalCbm: 11.25,
      totalGrossWeightKg: 1475 // 100 karton berpalet kargo
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
    assumptionNote: 'Asumsi sistem nesting 10-pack knock-down (pengujian fisik ketahanan/drop test dilakukan pada sampel pertama sebelum produksi massal)'
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
