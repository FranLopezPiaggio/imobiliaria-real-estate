import Link from "next/link";

/**
 * AboutSection Component - FE-010
 *
 * About us section for Home page.
 * Builds trust with users.
 *
 * @see DESIGN.md §1.2 (Design Principles)
 * @see PRD.md §3.3 (Home US-012)
 */

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-16 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            {/* Placeholder Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-primary-400 font-heading text-6xl font-bold mb-2">
                    IP
                  </span>
                  <span className="text-primary-500 text-lg">
                    Imobiliária Portugal
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-primary-200 opacity-50" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-accent-200 opacity-30" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2
              id="about-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6"
            >
              Quem Somos
            </h2>

            <div className="space-y-4 text-medium-gray">
              <p className="text-lg leading-relaxed">
                Na{" "}
                <strong className="text-charcoal">Imobiliária Portugal</strong>,
                acreditamos que encontrar o lar perfeito deve ser uma
                experiência simples e transparente. Somos uma equipa dedicada a
                ajudar milhares de famílias a encontrarem o imóvel dos seus
                sonhos em Portugal.
              </p>

              <p className="text-lg leading-relaxed">
                Com anos de experiência no mercado imobiliário português,
                especializamo-nos em arrendamento, compra e venda de imóveis em
                todo o país. O nosso objetivo é simplificar o processo e
                garantir a melhor experiência para os nossos clientes.
              </p>

              <p className="text-lg leading-relaxed">
                Comprometemo-nos com{" "}
                <strong className="text-charcoal">
                  transparência, profissionalismo e atendimento personalizado
                </strong>
                . Cada cliente é único e merece uma solução feita à medida das
                suas necessidades.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 pt-6 border-t border-light-gray">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* AMI License */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944 11.955 11.955 0 0112 20c5.418 0 9.382-3.982 9.382-9.382 0-1.624-4.096-2.976-9.382-3.338z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      AMI: 12345
                    </p>
                    <p className="text-xs text-medium-gray">Licença válida</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      contacto@imoportugal.pt
                    </p>
                    <p className="text-xs text-medium-gray">
                      Responderemos em 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Contactar
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
