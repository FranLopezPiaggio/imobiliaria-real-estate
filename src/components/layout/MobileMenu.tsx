"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

/**
 * MobileMenu Component - Mobile Navigation
 *
 * Hamburger menu for mobile devices (<768px).
 * Opens a dropdown with navigation links and CTA.
 *
 * @see DESIGN.md §5.5 (Navigation)
 * @see PRD.md §6 (PT-PT Localization)
 * @see WCAG 2.1 AA (Keyboard navigation, ARIA labels)
 */

const navLinks = [
  { href: "#", label: "Arrendamento" },
  { href: "#", label: "Compra" },
  { href: "#", label: "Temporário" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-lg text-dark-gray hover:bg-off-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 left-0 right-0 bg-white border-b border-light-gray shadow-lg"
          role="menu"
          aria-label="Navegação móvel"
        >
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={closeMenu}
                className="block py-2 px-3 text-base font-medium text-dark-gray hover:text-primary-500 hover:bg-off-white rounded-lg transition-colors"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button - Mobile */}
            <Link
              href="#"
              onClick={closeMenu}
              className="block w-full text-center py-3 px-4 mt-4 bg-accent-400 hover:bg-accent-500 text-charcoal font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
            >
              Publicar Imóvel
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
