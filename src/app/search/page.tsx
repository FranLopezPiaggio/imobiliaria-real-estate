"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { FilterSidebar, SearchHeader } from "@/components/search";

/**
 * Search Page - FE-012
 *
 * Two-column search layout: FilterSidebar (left) + Results (right).
 * Foundation for search flow demo.
 *
 * @see DESIGN.md §5.4 (Filter Sidebar), §6 (Responsive)
 * @see PRD.md §3.1 (Search US-001 to US-005)
 * @see ARC_SYS.md §4.1 (Search Flow)
 */

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceType: "month" | "total";
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  images: string[];
}

const mockProperties: Property[] = [];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [properties, setProperties] = useState<Property[]>(mockProperties);

  const location = searchParams.get("location") || "";
  const type = searchParams.get("type") || "";

  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(mockProperties);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchParams.toString()]);

  const handleFilterToggle = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-off-white">
      <SearchHeader resultCount={properties.length} />

      <div className="container mx-auto px-4 py-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            type="button"
            onClick={handleFilterToggle}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-light-gray rounded-lg text-sm font-medium text-charcoal hover:bg-light-gray transition-colors"
            aria-label="Abrir filtros"
            aria-expanded={isSidebarOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filtros
          </button>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </div>

          {/* Filter Sidebar - Mobile Modal */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={handleCloseSidebar}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-light-gray">
                  <h2 className="font-heading text-lg font-semibold text-charcoal">
                    Filtros
                  </h2>
                  <button
                    type="button"
                    onClick={handleCloseSidebar}
                    className="p-2 text-medium-gray hover:text-charcoal transition-colors"
                    aria-label="Fechar filtros"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <FilterSidebar isOpen={true} onClose={handleCloseSidebar} />
                </div>
              </div>
            </div>
          )}

          {/* Results Area */}
          <div className="flex-1">
            {/* Results Grid */}
            {properties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-light-gray p-8 text-center">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 mx-auto text-light-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                  Nenhum imóvel encontrado
                </h3>
                <p className="text-medium-gray mb-4">
                  Tente ajustar os filtros ou fazer uma nova pesquisa
                </p>
                <div className="text-sm text-medium-gray">
                  {location && <p>Localização: {location}</p>}
                  {type && <p>Tipo: {type}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="bg-white rounded-xl border border-light-gray overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] bg-light-gray relative">
        <img
          src={property.images[0] || "/placeholder-property.jpg"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded">
            {property.type}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-charcoal mb-1 line-clamp-1">
          {property.title}
        </h3>
        <p className="text-sm text-medium-gray mb-3">{property.location}</p>
        <div className="flex gap-4 text-sm text-dark-gray mb-3">
          <span>{property.bedrooms} quartos</span>
          <span>{property.bathrooms} casas de banho</span>
          <span>{property.area} m²</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-primary-500">
            {property.priceType === "month"
              ? `${property.price}€/mês`
              : `${property.price}€`}
          </span>
          <button
            type="button"
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}
