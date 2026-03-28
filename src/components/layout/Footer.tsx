import Link from "next/link";

/**
 * Footer Component - FE-002
 *
 * Reusable footer for all pages.
 * 3-column layout (desktop) / stacked (mobile).
 *
 * @see DESIGN.md §2 (Colors - Charcoal background)
 * @see PRD.md §6 (PT-PT Localization)
 */

const footerLinks = {
  about: [
    { href: "#", label: "Sobre Nós" },
    { href: "#", label: "Contactos" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Carreiras" },
  ],
  services: [
    { href: "#", label: "Arrendamento" },
    { href: "#", label: "Compra" },
    { href: "#", label: "Arrendamento Temporário" },
    { href: "#", label: "Avaliação Imobiliária" },
  ],
  legal: [
    { href: "#", label: "Termos e Condições" },
    { href: "#", label: "Política de Privacidade" },
    { href: "#", label: "Política de Cookies" },
    { href: "#", label: "Declaração de Rendas" },
  ],
};

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-accent-400 transition-colors"
              aria-label="Imobiliária Portugal - Página Inicial"
            >
              Imobiliária Portugal
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Encontra o teu lar em Portugal. A tua imobiliária de confiança
              para arrendamento, compra e arrendamento temporário.
            </p>
            <div className="pt-2">
              <span className="text-xs text-gray-400">AMI: 12345</span>
            </div>
          </div>

          {/* Column 2: About Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Sobre Nós
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 rounded px-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 rounded px-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Contactos
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contacto@imoportugal.pt"
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 rounded px-1"
                >
                  contacto@imoportugal.pt
                </a>
              </li>
              <li>
                <a
                  href="tel:+351212345678"
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 rounded px-1"
                >
                  +351 212 345 678
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/351912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 rounded px-1"
                  aria-label="Contactar via WhatsApp"
                >
                  <span>WhatsApp</span>
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} ImoPortugal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
