import { PropertyCard } from "@/components/property/PropertyCard";
import { SearchPagination } from "./SearchPagination";
import { EmptyState } from "./EmptyState";
import type { Property, PaginationMetadata } from "@/types/mock";

interface SearchResultsListProps {
  properties: Property[];
  pagination?: PaginationMetadata;
}

export function SearchResultsList({
  properties,
  pagination,
}: SearchResultsListProps) {
  const { page = 1, total = 0, limit = 12 } = pagination || {};
  const totalPages = Math.ceil(total / limit);

  if (properties.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-medium-gray">
          <span className="font-medium text-charcoal">{total}</span>{" "}
          {total === 1 ? "propriedade encontrada" : "propriedades encontradas"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {pagination && <SearchPagination page={page} totalPages={totalPages} />}
    </div>
  );
}
