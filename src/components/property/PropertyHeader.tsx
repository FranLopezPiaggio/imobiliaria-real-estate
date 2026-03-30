"use client";

import type { PropertyLocation } from "@/types/mock";

interface PropertyHeaderProps {
  title: string;
  price: string;
  location: PropertyLocation;
  type: string;
  category: string;
}

export function PropertyHeader({
  title,
  price,
  location,
  type,
  category,
}: PropertyHeaderProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded">
          {type}
        </span>
        <span className="px-2 py-1 bg-light-gray text-dark-gray text-xs font-medium rounded">
          {category}
        </span>
      </div>

      <h1 className="font-heading text-2xl lg:text-3xl font-bold text-charcoal mb-2">
        {title}
      </h1>

      <div className="flex items-center gap-2 text-medium-gray mb-4">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>
          {location.address}, {location.postalCode}
        </span>
      </div>

      <p className="text-3xl lg:text-4xl font-bold text-primary-500">{price}</p>
    </div>
  );
}
