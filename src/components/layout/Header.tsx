import Link from "next/link";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";

/**
 * Header/Navbar Component - FE-001
 *
 * First UI component of MVP.
 * Sticky header with logo, navigation links, and CTA button.
 *
 * @see DESIGN.md §5.5 (Navigation)
 * @see DESIGN.md §2 (Color Palette - Ocean Blue, Portuguese Sun)
 */

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-light-gray shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-primary-500 hover:text-primary-600 transition-colors"
            aria-label="Imobiliária Portugal - Página Inicial"
          >
            <span className="hidden sm:inline">Imobiliária Portugal</span>
            <span className="sm:hidden">IP</span>
          </Link>

          {/* Desktop Navigation */}
          <Navbar />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
