import Link from "next/link";
import { SearchBarHome } from "./SearchBarHome";

/**
 * HeroSection Component - FE-003
 *
 * Main hero section for Home page.
 * Drives user to search page.
 *
 * @see DESIGN.md §5.1 (Hero), §3 (Typography)
 * @see PRD.md §3.3 (Home Stories)
 */

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Subtle geometric overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline - H1 per DESIGN.md */}
          <h1
            id="hero-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
            }}
          >
            Encontra o teu lar em{" "}
            <span className="text-primary-500">Portugal</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-medium-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Arrendamento, venda e temporário em todo o Portugal continental e
            ilhas. Encontre a casa perfeita para si.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA - Search */}
            <Link
              href="/search"
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
            >
              Procurar propriedades
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>

            {/* Secondary CTA - Learn More */}
            <Link
              href="#sobre"
              className="inline-flex items-center justify-center bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
            >
              Saber mais
            </Link>
          </div>

          {/* Trust Indicators - Below CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-medium-gray">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Mais de 1000 imóveis</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Proprietários verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Contacto direto via WhatsApp</span>
            </div>
          </div>

          {/* Search Bar - Below Trust Indicators */}
          <div className="mt-12">
            <SearchBarHome />
          </div>
        </div>
      </div>
    </section>
  );
}
