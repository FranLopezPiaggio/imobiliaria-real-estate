"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

/**
 * SearchHeader Component - FE-012
 *
 * Search header with breadcrumb, search bar, result count, and sort dropdown.
 *
 * @see DESIGN.md §5.4 (Filter Sidebar), §6 (Responsive)
 * @see PRD.md §3.1 (Search US-001 to US-005)
 */

const propertyTypes = [
  { value: "", label: "Todos os tipos" },
  { value: "arrendamento", label: "Arrendamento" },
  { value: "arrendamento-temporario", label: "Arrendamento Temporário" },
  { value: "venda", label: "Venda" },
];

const sortOptions = [
  { value: "relevance", label: "Relevância" },
  { value: "price_asc", label: "Preço: Crescente" },
  { value: "price_desc", label: "Preço: Decrescente" },
  { value: "newest", label: "Mais recentes" },
];

interface SearchHeaderProps {
  resultCount?: number;
}

export function SearchHeader({ resultCount = 0 }: SearchHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [sortBy, setSortBy] = useState("relevance");

  useEffect(() => {
    const sort = searchParams.get("sort");
    if (sort && sortOptions.some((opt) => opt.value === sort)) {
      setSortBy(sort);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location.trim()) {
      params.set("location", location.trim());
    }
    if (type) {
      params.set("type", type);
    }
    const queryString = params.toString();
    router.push(`/search${queryString ? `?${queryString}` : ""}`);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white border-b border-light-gray">
      <div className="container mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-medium-gray hover:text-primary-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-medium-gray" aria-hidden="true">
              &gt;
            </li>
            <li className="text-charcoal font-medium" aria-current="page">
              Resultados de Pesquisa
            </li>
          </ol>
        </nav>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-3 mb-4"
          role="search"
          aria-label="Pesquisar imóveis"
        >
          <div className="flex-1">
            <label htmlFor="search-location" className="sr-only">
              Localização
            </label>
            <input
              id="search-location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Município, freguesia, metro..."
              className="w-full px-4 py-2.5 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
            />
          </div>
          <div className="w-full md:w-48">
            <label htmlFor="search-type" className="sr-only">
              Tipo
            </label>
            <select
              id="search-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2.5 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors bg-white"
            >
              {propertyTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          >
            Procurar
          </button>
        </form>

        {/* Results Count and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-medium-gray">
            <span className="font-semibold text-charcoal">{resultCount}</span>{" "}
            {resultCount === 1
              ? "propriedade encontrada"
              : "propriedades encontradas"}
          </p>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort-select"
              className="text-sm text-medium-gray whitespace-nowrap"
            >
              Ordenar por:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 bg-white"
              aria-label="Ordenar resultados"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
