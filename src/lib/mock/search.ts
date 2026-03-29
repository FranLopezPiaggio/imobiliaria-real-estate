import type {
  Property,
  PropertyFilters,
  SortField,
  SortOrder,
  PaginatedResult,
  PaginationMetadata,
} from "@/types/mock";

export function filterProperties(
  data: Property[],
  filters: PropertyFilters,
): Property[] {
  return data.filter((property) => {
    if (filters.type && property.type !== filters.type) {
      return false;
    }

    if (filters.city && property.location.city !== filters.city) {
      return false;
    }

    if (filters.category && property.category !== filters.category) {
      return false;
    }

    if (filters.typology && property.features.typology !== filters.typology) {
      return false;
    }

    if (filters.minPrice !== undefined && property.price < filters.minPrice) {
      return false;
    }

    if (filters.maxPrice !== undefined && property.price > filters.maxPrice) {
      return false;
    }

    if (filters.bedrooms !== undefined) {
      if (filters.bedrooms === 4 && property.features.bedrooms < 4) {
        return false;
      }
      if (
        filters.bedrooms < 4 &&
        property.features.bedrooms !== filters.bedrooms
      ) {
        return false;
      }
    }

    if (
      filters.furnished !== undefined &&
      property.features.furnished !== filters.furnished
    ) {
      return false;
    }

    return true;
  });
}

export function sortProperties(
  data: Property[],
  sortBy: SortField = "publishedAt",
  sortOrder: SortOrder = "desc",
): Property[] {
  const sorted = [...data];

  sorted.sort((a, b) => {
    let comparison = 0;

    if (sortBy === "price") {
      comparison = a.price - b.price;
    } else if (sortBy === "publishedAt") {
      comparison =
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  return sorted;
}

export function paginateProperties(
  data: Property[],
  page: number = 1,
  limit: number = 10,
): PaginatedResult<Property> {
  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const hasNext = page < totalPages;
  const hasPrevious = page > 1;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  const pagination: PaginationMetadata = {
    page,
    limit,
    total,
    totalPages,
    hasNext,
    hasPrevious,
  };

  return {
    data: paginatedData,
    pagination,
  };
}

export function searchProperties(
  data: Property[],
  query: string,
  filters?: PropertyFilters,
  sortBy?: SortField,
  sortOrder?: SortOrder,
  page?: number,
  limit?: number,
): PaginatedResult<Property> {
  let results = data;

  if (query && query.trim()) {
    const searchTerm = query.toLowerCase().trim();
    results = results.filter((property) => {
      return (
        property.title.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm) ||
        property.location.city.toLowerCase().includes(searchTerm) ||
        property.location.district.toLowerCase().includes(searchTerm) ||
        property.location.address.toLowerCase().includes(searchTerm) ||
        property.features.typology.toLowerCase().includes(searchTerm)
      );
    });
  }

  if (filters) {
    results = filterProperties(results, filters);
  }

  if (sortBy) {
    results = sortProperties(results, sortBy, sortOrder);
  }

  return paginateProperties(results, page ?? 1, limit ?? 10);
}

export function formatPricePT(
  price: number,
  priceType: "month" | "total",
): string {
  const formatted = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  if (priceType === "month") {
    return `${formatted}/mês`;
  }

  return formatted;
}

export function formatDatePT(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatShortDatePT(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("pt-PT").format(date);
}
