export type PropertyType = "Arrendamento" | "Venda" | "Arrendamento Temporário";
export type PropertyCategory = "Apartamento" | "Casa" | "Duplex" | "Studio";
export type Typology = "T0" | "T1" | "T2" | "T3" | "T4" | "T5";
export type City = "Lisboa" | "Porto" | "Algarve" | "Coimbra" | "Braga";
export type PropertyStatus = "active" | "pending" | "sold" | "rented";

export interface PropertyLocation {
  address: string;
  city: City;
  district: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  area: number;
  parking: number;
  furnished: boolean;
  typology: Typology;
}

export interface PropertyMedia {
  images: string[];
  virtualTour?: string;
}

export interface PropertyContact {
  name: string;
  phone: string;
  email?: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: PropertyType;
  category: PropertyCategory;
  price: number;
  priceType: "month" | "total";
  currency: "EUR";
  location: PropertyLocation;
  features: PropertyFeatures;
  media: PropertyMedia;
  contact: PropertyContact;
  status: PropertyStatus;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  type?: PropertyType;
  city?: City;
  category?: PropertyCategory;
  typology?: Typology;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  furnished?: boolean;
}

export type SortField = "price" | "publishedAt";
export type SortOrder = "asc" | "desc";

export interface PaginationMetadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: PaginationMetadata;
}
