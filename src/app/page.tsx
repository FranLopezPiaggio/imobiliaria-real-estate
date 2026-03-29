import {
  HeroSection,
  CategoriesGrid,
  ZonesGrid,
  BlogPreview,
  AboutSection,
} from "@/components/home";

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
      <AboutSection />
      <BlogPreview />

      {/* Footer is in layout.tsx */}
    </main>
  );
}
