"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * FilterSection Component
 *
 * Reusable collapsible filter section.
 *
 * @see DESIGN.md §5.4 (Filters)
 */

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-light-gray pb-4 mb-4 last:border-b-0">
      {/* Section Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 rounded"
        aria-expanded={isOpen}
        aria-controls={`filter-section-${title.toLowerCase()}`}
      >
        <span className="font-semibold text-charcoal">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-medium-gray" aria-hidden="true" />
        ) : (
          <ChevronDown
            className="w-4 h-4 text-medium-gray"
            aria-hidden="true"
          />
        )}
      </button>

      {/* Section Content */}
      {isOpen && (
        <div
          id={`filter-section-${title.toLowerCase()}`}
          className="pt-2 space-y-3"
        >
          {children}
        </div>
      )}
    </div>
  );
}
