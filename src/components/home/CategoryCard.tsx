import Link from "next/link";
import {
  Building2,
  Home,
  Building,
  Warehouse,
  Mountain,
  Store,
} from "lucide-react";

/**
 * CategoryCard Component
 *
 * Individual category card for CategoriesGrid.
 * Displays icon, label, and mock property count.
 *
 * @see DESIGN.md §5.3 (Cards)
 */

interface CategoryCardProps {
  category: {
    id: string;
    label: string;
    icon: "apartamento" | "casa" | "duplex" | "studio" | "terreno" | "local";
    count: number;
  };
}

const iconMap = {
  apartamento: Building2,
  casa: Home,
  duplex: Building,
  studio: Warehouse,
  terreno: Mountain,
  local: Store,
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <Link
      href={`/search?category=${category.id}`}
      className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-light-gray shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
      aria-label={`Ver ${category.label}: ${category.count} propriedades`}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200 mb-3">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>

      {/* Label */}
      <h3 className="font-heading text-base font-semibold text-charcoal text-center mb-1">
        {category.label}
      </h3>

      {/* Count */}
      <p className="text-sm text-medium-gray">{category.count} propriedades</p>
    </Link>
  );
}
