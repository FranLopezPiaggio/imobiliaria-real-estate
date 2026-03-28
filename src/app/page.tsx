import { HeroSection, CategoriesGrid, ZonesGrid } from "@/components/home";

/**
 * Home Page
 *
 * Main landing page for the real estate marketplace.
 *
 * @see PRD.md §3.3 (Home User Stories)
 * @see DESIGN.md §5.1 (Hero Section)
 */

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategoriesGrid />
      <ZonesGrid />

      {/* Placeholder sections - will be implemented in future tasks */}
      <section id="sobre" className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
            Sobre Nós
          </h2>
          <p className="text-medium-gray">
            Em breve: mais informações sobre os nossos serviços.
          </p>
        </div>
      </section>
    </main>
  );
}
