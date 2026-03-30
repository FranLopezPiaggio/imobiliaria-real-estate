"use client";

import { useRouter } from "next/navigation";

interface EmptyStateProps {
  onClearFilters?: () => void;
}

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  const router = useRouter();

  const handleClearFilters = () => {
    if (onClearFilters) {
      onClearFilters();
    } else {
      router.push("/search");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 mb-6 rounded-full bg-light-gray flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-medium-gray"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
        Nenhuma propriedade encontrada
      </h3>

      <p className="text-sm text-medium-gray mb-6 max-w-md">
        Tente ajustar os filtros para ver mais resultados
      </p>

      <button
        onClick={handleClearFilters}
        className="px-6 py-2.5 text-sm font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
      >
        Limpar filtros
      </button>
    </div>
  );
}
