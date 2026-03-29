import Link from "next/link";
import Image from "next/image";
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
      className="relative w-full max-h-[400px] flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/liam-mckay-VHWyqXsWHg0-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline - H1 per DESIGN.md */}
          <h1
            id="hero-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
            }}
          >
            Encontra o teu lar em{" "}
            <span className="text-primary-300">Portugal</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Arrendamento, venda e temporário em todo o Portugal continental e
            ilhas. Encontre a casa perfeita para si.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA - Search */}
            <Link
              href="/search"
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-charcoal"
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
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              Saber mais
            </Link>
          </div>

          {/* Trust Indicators - Below CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary-300"
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
                className="w-5 h-5 text-primary-300"
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
                className="w-5 h-5 text-primary-300"
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

        </div>
      </div>

      {/* Search Bar - Overlapping bottom edge */}
      <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-30 px-4 w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <SearchBarHome />
        </div>
      </div>
    </section>
  );
}
