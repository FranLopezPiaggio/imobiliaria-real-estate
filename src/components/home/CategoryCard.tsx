import Link from "next/link";
import Image from "next/image";
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
    image: string;
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
      className="group relative overflow-hidden rounded-xl aspect-square focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
      aria-label={`Ver ${category.label}: ${category.count} propriedades`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end p-4 text-center">
        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white mb-2 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>

        {/* Label */}
        <h3 className="font-heading text-base font-semibold text-white text-center mb-1 drop-shadow-md">
          {category.label}
        </h3>

        {/* Count */}
        <p className="text-sm text-white/80">{category.count} propriedades</p>
      </div>
    </Link>
  );
}
