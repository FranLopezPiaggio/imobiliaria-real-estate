import type {
  Property,
  PropertyType,
  PropertyCategory,
  Typology,
  City,
} from "@/types/mock";

const propertyData: Array<{
  title: string;
  description: string;
  city: City;
  district: string;
  address: string;
  postalCode: string;
  type: PropertyType;
  category: PropertyCategory;
  typology: Typology;
  bedrooms: number;
  bathrooms: number;
  area: number;
  parking: number;
  furnished: boolean;
  price: number;
  priceType: "month" | "total";
}> = [
  {
    title: "T2 em Alvalade, Lisboa",
    description:
      "Apartamento moderno T2 com 75m², completamente mobilado e equipado. Located in the heart of Alvalade, close to metro station and all amenities. Very bright and spacious.",
    city: "Lisboa",
    district: "Lisboa",
    address: "Rua de São João de Deus, 45",
    postalCode: "1700-123",
    type: "Arrendamento",
    category: "Apartamento",
    typology: "T2",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    parking: 1,
    furnished: true,
    price: 1200,
    priceType: "month",
  },
  {
    title: "Moradia T3 no Algarve",
    description:
      "Moradia independente T3 com piscina privativa e vista para o mar. Acabamentos de alta qualidade, cozinha equipada, ar condicionado e alarm. Quintal privado com churrasqueira.",
    city: "Algarve",
    district: "Faro",
    address: "Urbanização Quinta do Lago, 88",
    postalCode: "8135-024",
    type: "Venda",
    category: "Casa",
    typology: "T3",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    parking: 2,
    furnished: false,
    price: 485000,
    priceType: "total",
  },
  {
    title: "T1 no Centro do Porto",
    description:
      "Excelente apartamento T1 junto à Praça da Batalha, totalmente restaurado com materiais de qualidade. Perfeito para investimento ou habitação própria.",
    city: "Porto",
    district: "Porto",
    address: "Praça da Batalha, 23",
    postalCode: "4000-101",
    type: "Arrendamento",
    category: "Apartamento",
    typology: "T1",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    parking: 0,
    furnished: true,
    price: 850,
    priceType: "month",
  },
  {
    title: "T4 em Cascais",
    description:
      "Luxuosa moradia T4 em condomínio privativo com segurança 24h. Suite master com walk-in closet, cozinha americana, garagem para 2 carros e jardim cuidado.",
    city: "Lisboa",
    district: "Lisboa",
    address: "Avenida Marginal, 5678",
    postalCode: "2750-424",
    type: "Venda",
    category: "Casa",
    typology: "T4",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    parking: 2,
    furnished: false,
    price: 750000,
    priceType: "total",
  },
  {
    title: "Studio em Coimbra",
    description:
      "Studio moderno靠近大学城，非常适合学生。设施齐全，地理位置优越，公共交通便利。",
    city: "Coimbra",
    district: "Coimbra",
    address: "Rua da Sofia, 156",
    postalCode: "3000-432",
    type: "Arrendamento Temporário",
    category: "Studio",
    typology: "T0",
    bedrooms: 0,
    bathrooms: 1,
    area: 35,
    parking: 0,
    furnished: true,
    price: 500,
    priceType: "month",
  },
  {
    title: "Duplex T3 em Braga",
    description:
      "Espaçoso duplex T3 em zona residencial calma, perto de escolas e supermercados. two floors with private rooftop terrace. Acabamentos modernos e eficientes energéticos.",
    city: "Braga",
    district: "Braga",
    address: "Rua do Raio, 289",
    postalCode: "4710-243",
    type: "Venda",
    category: "Duplex",
    typology: "T3",
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    parking: 1,
    furnished: false,
    price: 185000,
    priceType: "total",
  },
  {
    title: "T2 em Alfama, Lisboa",
    description:
      "Encantador apartamento T2 no coração de Alfama, com vista para o Tejo. Características tradicionais portuguesas combinadas com conforto moderno.",
    city: "Lisboa",
    district: "Lisboa",
    address: "Becinho do Tejo, 12",
    postalCode: "1100-045",
    type: "Arrendamento",
    category: "Apartamento",
    typology: "T2",
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    parking: 0,
    furnished: true,
    price: 1100,
    priceType: "month",
  },
  {
    title: "Casa T5 em Sintra",
    description:
      "Imponente moradia T5 classificada, com piscina, garden and garage. Histórica property with modern renovations maintaining original character.",
    city: "Lisboa",
    district: "Lisboa",
    address: "Estrada da Circumvalação, 850",
    postalCode: "2710-405",
    type: "Venda",
    category: "Casa",
    typology: "T5",
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    parking: 3,
    furnished: false,
    price: 1200000,
    priceType: "total",
  },
  {
    title: "T1 com Terraço no Porto",
    description:
      "Moderno apartamento T1 na Foz do Douro, com amplo terraço virado a sul. Acabamentos de topo, smart home e vista mar parcial.",
    city: "Porto",
    district: "Porto",
    address: "Rua de Gondarém, 567",
    postalCode: "4150-373",
    type: "Arrendamento",
    category: "Apartamento",
    typology: "T1",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    parking: 1,
    furnished: true,
    price: 950,
    priceType: "month",
  },
  {
    title: "T3 Apartamento no Algarve",
    description:
      "Spacious 3-bedroom apartment in golden triangle, with communal pool and gym. Modern finishes, air conditioning throughout, close to golf courses.",
    city: "Algarve",
    district: "Faro",
    address: "Urbanização Vale do Lobo, 42",
    postalCode: "8135-864",
    type: "Venda",
    category: "Apartamento",
    typology: "T3",
    bedrooms: 3,
    bathrooms: 2,
    area: 130,
    parking: 1,
    furnished: true,
    price: 320000,
    priceType: "total",
  },
  {
    title: "T2 em Aveiro",
    description:
      "Apartamento T2 na margem da ria, com varanda eplace de parking. Acabamentos modernos, próximo do centro histórico e da estação de comboios.",
    city: "Coimbra",
    district: "Aveiro",
    address: "Rua da Lourenciana, 34",
    postalCode: "3810-156",
    type: "Arrendamento",
    category: "Apartamento",
    typology: "T2",
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    parking: 1,
    furnished: false,
    price: 700,
    priceType: "month",
  },
  {
    title: "Casa de Campo T4 em Évora",
    description:
      "Traditional alentejo house with modern comforts. 4 bedrooms, swimming pool, extensive land with olive and cork trees. Perfect for rural tourism or permanent residence.",
    city: "Coimbra",
    district: "Évora",
    address: "Estrada de São Miguel de Machede, s/n",
    postalCode: "7005-841",
    type: "Venda",
    category: "Casa",
    typology: "T4",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    parking: 2,
    furnished: false,
    price: 390000,
    priceType: "total",
  },
  {
    title: "T0 Studio em Lisboa",
    description:
      "Eficiente studio em zona Prime da Avenida da República. Fully equipped, ideal for young professionals. Proximity to services and transport.",
    city: "Lisboa",
    district: "Lisboa",
    address: "Avenida da República, 1456",
    postalCode: "1050-099",
    type: "Arrendamento",
    category: "Studio",
    typology: "T0",
    bedrooms: 0,
    bathrooms: 1,
    area: 30,
    parking: 0,
    furnished: true,
    price: 800,
    priceType: "month",
  },
  {
    title: "T3 Duplex na Maia",
    description:
      "Duplex moderno com acabamentos premium, em condomínio fechado com piscina. Excelente localização, perto do metro e centros comerciais.",
    city: "Porto",
    district: "Porto",
    address: "Rua de Camões, 445",
    postalCode: "4420-088",
    type: "Venda",
    category: "Duplex",
    typology: "T3",
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    parking: 2,
    furnished: false,
    price: 275000,
    priceType: "total",
  },
  {
    title: "Moradia T2 em Olhão",
    description:
      "Authentic Algarve house with roof terrace, walking distance to marina and beaches. Traditional architecture with modern interior renovation.",
    city: "Algarve",
    district: "Faro",
    address: "Rua do Emigrante, 78",
    postalCode: "8700-012",
    type: "Arrendamento Temporário",
    category: "Casa",
    typology: "T2",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    parking: 0,
    furnished: true,
    price: 1800,
    priceType: "month",
  },
  {
    title: "T1 Adapted em Braga",
    description:
      "Modern apartment adapted for mobility, no architectural barriers. Located in historic center, close to everything. High accessibility standards.",
    city: "Braga",
    district: "Braga",
    address: "Rua do Souto, 67",
    postalCode: "4700-029",
    type: "Arrendamento",
    category: "Apartamento",
    typology: "T1",
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    parking: 0,
    furnished: true,
    price: 600,
    priceType: "month",
  },
  {
    title: "Penthouse T4 em Lisboa",
    description:
      "Exclusive penthouse with panoramic views of Tagus River. Private rooftop with jacuzzi, 4 en-suite bedrooms, smart home system, 3 parking spaces.",
    city: "Lisboa",
    district: "Lisboa",
    address: "Praça do Marquês de Pombal, 12",
    postalCode: "1250-098",
    type: "Venda",
    category: "Apartamento",
    typology: "T4",
    bedrooms: 4,
    bathrooms: 4,
    area: 320,
    parking: 3,
    furnished: false,
    price: 1800000,
    priceType: "total",
  },
  {
    title: "Casa Rústica T3 em Guimarães",
    description:
      "Stone house with traditional architecture, fully renovated. Large fireplace, exposed stone walls, garden and annex for storage.",
    city: "Braga",
    district: "Braga",
    address: "Lugar de Costa, 23",
    postalCode: "4805-631",
    type: "Venda",
    category: "Casa",
    typology: "T3",
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    parking: 1,
    furnished: false,
    price: 165000,
    priceType: "total",
  },
];

function generateSlug(title: string, id: string): string {
  const normalized = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return `${normalized}-${id}`;
}

function generateCoordinates(city: City): { lat: number; lng: number } {
  const coords: Record<City, { lat: number; lng: number }> = {
    Lisboa: { lat: 38.7223, lng: -9.1393 },
    Porto: { lat: 41.1579, lng: -8.6291 },
    Algarve: { lat: 37.0194, lng: -7.9302 },
    Coimbra: { lat: 40.2033, lng: -8.4103 },
    Braga: { lat: 41.5454, lng: -8.4265 },
  };
  const base = coords[city];
  return {
    lat: base.lat + (Math.random() - 0.5) * 0.1,
    lng: base.lng + (Math.random() - 0.5) * 0.1,
  };
}

export function generateMockProperties(): Property[] {
  const now = new Date();

  return propertyData.map((data, index) => {
    const id = `prop-${String(index + 1).padStart(4, "0")}`;
    const publishedDate = new Date(
      now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000,
    );

    return {
      id,
      slug: generateSlug(data.title, id),
      title: data.title,
      description: data.description,
      type: data.type,
      category: data.category,
      price: data.price,
      priceType: data.priceType,
      currency: "EUR" as const,
      location: {
        address: data.address,
        city: data.city,
        district: data.district,
        postalCode: data.postalCode,
        coordinates: generateCoordinates(data.city),
      },
      features: {
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        area: data.area,
        parking: data.parking,
        furnished: data.furnished,
        typology: data.typology,
      },
      media: {
        images: [
          `https://images.unsplash.com/photo-${1560448204 + index}-e02f11c3d0e2?w=800`,
          `https://images.unsplash.com/photo-${1560448205 + index}-e02f11c3d0e2?w=800`,
          `https://images.unsplash.com/photo-${1560448206 + index}-e02f11c3d0e2?w=800`,
        ],
      },
      contact: {
        name: "Portal Imobiliário",
        phone: "+351 212 123 456",
        email: "contacto@portalimobiliario.pt",
      },
      status: "active" as const,
      publishedAt: publishedDate.toISOString(),
      createdAt: publishedDate.toISOString(),
      updatedAt: now.toISOString(),
    };
  });
}

export const mockProperties = generateMockProperties();

export function getMockProperties(): Property[] {
  return mockProperties;
}

export function getPropertyById(id: string): Property | undefined {
  return mockProperties.find((p) => p.id === id);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return mockProperties.find((p) => p.slug === slug);
}
