"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * SearchBarHome Component - FE-004
 *
 * Search bar for Hero section.
 * Drives users to search results page with query params.
 *
 * @see DESIGN.md §5.2 (Search Bar)
 * @see PRD.md §3.1 (Search Stories US-001)
 */

const propertyTypes = [
  { value: "", label: "Todos os tipos" },
  { value: "arrendamento", label: "Arrendamento" },
  { value: "arrendamento-temporario", label: "Arrendamento Temporário" },
  { value: "venda", label: "Venda" },
];

export function SearchBarHome() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query params
    const params = new URLSearchParams();
    if (location.trim()) {
      params.set("location", location.trim());
    }
    if (type) {
      params.set("type", type);
    }

    // Navigate to search page with params
    const queryString = params.toString();
    router.push(`/search${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row gap-4"
        role="search"
        aria-label="Pesquisar imóveis"
      >
        {/* Location Input */}
        <div className="flex-1">
          <label
            htmlFor="search-location"
            className="block text-sm font-medium text-dark-gray mb-2"
          >
            Localização
          </label>
          <input
            id="search-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Município, freguesia, metro..."
            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
            aria-describedby="location-hint"
          />
          <span id="location-hint" className="sr-only">
            Digite o nome de um município, freguesia ou estação de metro
          </span>
        </div>

        {/* Type Selector */}
        <div className="w-full md:w-56">
          <label
            htmlFor="search-type"
            className="block text-sm font-medium text-dark-gray mb-2"
          >
            Tipo
          </label>
          <select
            id="search-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors bg-white"
            aria-label="Selecionar tipo de imóvel"
          >
            {propertyTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          >
            Procurar
          </button>
        </div>
      </form>
    </div>
  );
}
