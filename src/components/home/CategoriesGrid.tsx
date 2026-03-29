import { CategoryCard } from "./CategoryCard";
import { getRandomImageForIndex } from "@/utils/images";

/**
 * CategoriesGrid Component - FE-005
 *
 * Grid of property category cards for Home page.
 * Displays 6 categories: Apartamento, Casa, Duplex, Studio, Terreno, Local.
 *
 * @see DESIGN.md §5.3 (Cards)
 * @see PRD.md §3.3 (Home US-010)
 * @see SCHEMA.md §3.2 (Property Category)
 */

const categories = [
  {
    id: "apartamento",
    label: "Apartamento",
    icon: "apartamento" as const,
    count: 423,
    image: getRandomImageForIndex(0),
  },
  {
    id: "casa",
    label: "Casa",
    icon: "casa" as const,
    count: 287,
    image: getRandomImageForIndex(1),
  },
  {
    id: "duplex",
    label: "Duplex",
    icon: "duplex" as const,
    count: 156,
    image: getRandomImageForIndex(2),
  },
  {
    id: "studio",
    label: "Studio",
    icon: "studio" as const,
    count: 89,
    image: getRandomImageForIndex(3),
  },
  {
    id: "terreno",
    label: "Terreno",
    icon: "terreno" as const,
    count: 67,
    image: getRandomImageForIndex(0),
  },
  {
    id: "local",
    label: "Local",
    icon: "local" as const,
    count: 45,
    image: getRandomImageForIndex(1),
  },
];

export function CategoriesGrid() {
  return (
    <section
      className="pt-20 pb-10 bg-off-white"
      aria-labelledby="categories-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="categories-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Explore por Tipo de Imóvel
          </h2>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Encontre o tipo de imóvel perfeito para as suas necessidades
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
