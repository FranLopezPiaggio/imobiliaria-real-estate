"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FilterSection } from "./FilterSection";

/**
 * FilterSidebar Component - FE-007
 *
 * Filter sidebar for Search page.
 * Allows users to filter properties by various criteria.
 *
 * @see DESIGN.md §5.4 (Filters)
 * @see PRD.md §3.2 (Search US-002)
 * @see SCHEMA.md §4.2 (Search Filters)
 */

interface FilterState {
  // Type
  types: string[];

  // Price
  priceMin: string;
  priceMax: string;

  // Bedrooms
  bedrooms: string;

  // Bathrooms
  bathrooms: string;

  // Area
  areaMin: string;
  areaMax: string;

  // Features
  features: string[];
}

const initialFilters: FilterState = {
  types: [],
  priceMin: "",
  priceMax: "",
  bedrooms: "",
  bathrooms: "",
  areaMin: "",
  areaMax: "",
  features: [],
};

const propertyTypes = [
  { id: "arrendamento", label: "Arrendamento" },
  { id: "arrendamento-temporario", label: "Arrendamento Temporário" },
  { id: "venda", label: "Venda" },
];

const bedroomOptions = [
  { value: "", label: "Qualquer" },
  { value: "0", label: "T0" },
  { value: "1", label: "T1" },
  { value: "2", label: "T2" },
  { value: "3", label: "T3" },
  { value: "4", label: "T4" },
  { value: "5", label: "T5+" },
];

const bathroomOptions = [
  { value: "", label: "Qualquer" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4+" },
];

const features = [
  { id: "parking", label: "Estacionamento" },
  { id: "furnished", label: "Mobiliado" },
  { id: "balcony", label: "Varanda" },
  { id: "elevator", label: "Elevador" },
  { id: "garden", label: "Jardim" },
  { id: "pool", label: "Piscina" },
];

interface FilterSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function FilterSidebar({ isOpen = true, onClose }: FilterSidebarProps) {
  const router = useRouter();

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleType = (typeId: string) => {
    const current = filters.types;
    const updated = current.includes(typeId)
      ? current.filter((t) => t !== typeId)
      : [...current, typeId];
    updateFilter("types", updated);
  };

  const toggleFeature = (featureId: string) => {
    const current = filters.features;
    const updated = current.includes(featureId)
      ? current.filter((f) => f !== featureId)
      : [...current, featureId];
    updateFilter("features", updated);
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filters.types.length > 0) {
      params.set("types", filters.types.join(","));
    }
    if (filters.priceMin) {
      params.set("priceMin", filters.priceMin);
    }
    if (filters.priceMax) {
      params.set("priceMax", filters.priceMax);
    }
    if (filters.bedrooms) {
      params.set("bedrooms", filters.bedrooms);
    }
    if (filters.bathrooms) {
      params.set("bathrooms", filters.bathrooms);
    }
    if (filters.areaMin) {
      params.set("areaMin", filters.areaMin);
    }
    if (filters.areaMax) {
      params.set("areaMax", filters.areaMax);
    }
    if (filters.features.length > 0) {
      params.set("features", filters.features.join(","));
    }

    const queryString = params.toString();
    router.push(`/search${queryString ? `?${queryString}` : ""}`);

    if (onClose) {
      onClose();
    }
  };

  return (
    <aside
      className={`
        w-full lg:w-72 bg-white p-4 lg:p-6 rounded-xl border border-light-gray
        ${isOpen ? "block" : "hidden"}
        lg:block
      `}
      aria-label="Filtros de pesquisa"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-lg font-semibold text-charcoal">
          Filtros
        </h2>
      </div>

      {/* Property Type */}
      <FilterSection title="Tipo de Imóvel">
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <label
              key={type.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.types.includes(type.id)}
                onChange={() => toggleType(type.id)}
                className="w-4 h-4 text-primary-500 rounded border-medium-gray focus:ring-primary-300"
              />
              <span className="text-sm text-dark-gray">{type.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Preço">
        <div className="flex gap-2 items-center">
          <div className="flex-1">
            <label htmlFor="price-min" className="sr-only">
              Preço mínimo
            </label>
            <input
              id="price-min"
              type="number"
              placeholder="Mín"
              value={filters.priceMin}
              onChange={(e) => updateFilter("priceMin", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            />
          </div>
          <span className="text-medium-gray">-</span>
          <div className="flex-1">
            <label htmlFor="price-max" className="sr-only">
              Preço máximo
            </label>
            <input
              id="price-max"
              type="number"
              placeholder="Máx"
              value={filters.priceMax}
              onChange={(e) => updateFilter("priceMax", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            />
          </div>
        </div>
      </FilterSection>

      {/* Bedrooms */}
      <FilterSection title="Quartos">
        <select
          value={filters.bedrooms}
          onChange={(e) => updateFilter("bedrooms", e.target.value)}
          className="w-full px-3 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 bg-white"
          aria-label="Número de quartos"
        >
          {bedroomOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FilterSection>

      {/* Bathrooms */}
      <FilterSection title="Casas de Banho">
        <select
          value={filters.bathrooms}
          onChange={(e) => updateFilter("bathrooms", e.target.value)}
          className="w-full px-3 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 bg-white"
          aria-label="Número de casas de banho"
        >
          {bathroomOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FilterSection>

      {/* Area */}
      <FilterSection title="Área (m²)">
        <div className="flex gap-2 items-center">
          <div className="flex-1">
            <label htmlFor="area-min" className="sr-only">
              Área mínima
            </label>
            <input
              id="area-min"
              type="number"
              placeholder="Mín"
              value={filters.areaMin}
              onChange={(e) => updateFilter("areaMin", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            />
          </div>
          <span className="text-medium-gray">-</span>
          <div className="flex-1">
            <label htmlFor="area-max" className="sr-only">
              Área máxima
            </label>
            <input
              id="area-max"
              type="number"
              placeholder="Máx"
              value={filters.areaMax}
              onChange={(e) => updateFilter("areaMax", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            />
          </div>
        </div>
      </FilterSection>

      {/* Features */}
      <FilterSection title="Características">
        <div className="space-y-2">
          {features.map((feature) => (
            <label
              key={feature.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.features.includes(feature.id)}
                onChange={() => toggleFeature(feature.id)}
                className="w-4 h-4 text-primary-500 rounded border-medium-gray focus:ring-primary-300"
              />
              <span className="text-sm text-dark-gray">{feature.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-4 mt-4 border-t border-light-gray">
        <button
          type="button"
          onClick={clearFilters}
          className="flex-1 px-4 py-2 text-sm font-medium text-medium-gray border border-light-gray rounded-lg hover:bg-light-gray transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
        >
          Limpar Filtros
        </button>
        <button
          type="button"
          onClick={applyFilters}
          className="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
        >
          Aplicar
        </button>
      </div>
    </aside>
  );
}
