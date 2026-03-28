import Link from "next/link";

/**
 * Navbar Component - Desktop Navigation
 *
 * Desktop navigation links and CTA button.
 * Hidden on mobile (<768px), visible on md+.
 *
 * @see DESIGN.md §5.5 (Navigation)
 * @see PRD.md §6 (PT-PT Localization)
 */

const navLinks = [
  { href: "#", label: "Arrendamento" },
  { href: "#", label: "Compra" },
  { href: "#", label: "Temporário" },
];

export function Navbar() {
  return (
    <>
      {/* Desktop Navigation Links */}
      <nav
        className="hidden md:flex items-center space-x-8"
        aria-label="Navegação principal"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className="text-base font-medium text-dark-gray hover:text-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 rounded px-2 py-1"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA Button - Publicar Imóvel */}
      <div className="hidden md:block">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-accent-400 hover:bg-accent-500 text-charcoal font-semibold h-7 px-2.5 text-[0.8rem] transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
        >
          Publicar Imóvel
        </Link>
      </div>
    </>
  );
}
