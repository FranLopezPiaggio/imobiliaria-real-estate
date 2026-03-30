"use client";

import type { PropertyFeatures as PropertyFeaturesType } from "@/types/mock";

interface PropertyFeaturesProps {
  features: PropertyFeaturesType;
}

const featureIcons = {
  bedrooms: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  bathrooms: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  area: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    </svg>
  ),
  parking: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
  ),
  elevator: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  ),
  furnished: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
};

const energyLabels: Record<string, string> = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
};

function getRandomEnergyRating(): string {
  const ratings = ["A", "B", "C", "D", "E"];
  return ratings[Math.floor(Math.random() * ratings.length)];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  const energyRating = getRandomEnergyRating();

  const floorNumber = Math.floor(Math.random() * 10) + 1;
  const hasElevator = floorNumber > 2;

  const items = [
    {
      icon: featureIcons.area,
      label: "Área",
      value: `${features.area} m²`,
    },
    {
      icon: featureIcons.bedrooms,
      label: "Quartos",
      value:
        features.bedrooms === 0
          ? "T0"
          : `${features.bedrooms} ${features.bedrooms === 1 ? "quarto" : "quartos"}`,
    },
    {
      icon: featureIcons.bathrooms,
      label: "Casas de banho",
      value: `${features.bathrooms} ${features.bathrooms === 1 ? "casa de banho" : "casas de banho"}`,
    },
    {
      icon: featureIcons.parking,
      label: "Estacionamento",
      value:
        features.parking === 0
          ? "Não disponível"
          : `${features.parking} ${features.parking === 1 ? "lugar" : "lugares"}`,
    },
    {
      icon: featureIcons.elevator,
      label: "Elevador",
      value: hasElevator ? "Sim" : "Não",
    },
    {
      icon: featureIcons.furnished,
      label: "Mobiliado",
      value: features.furnished ? "Sim" : "Não",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 p-3 bg-off-white rounded-lg"
          >
            <div className="text-primary-500">{item.icon}</div>
            <div>
              <p className="text-xs text-medium-gray">{item.label}</p>
              <p className="font-medium text-charcoal">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4 bg-accent-50 rounded-lg border border-accent-200">
        <span className="text-sm text-dark-gray">Certificação energética:</span>
        <span className="px-2 py-1 bg-accent-500 text-white text-xs font-bold rounded">
          {energyLabels[energyRating]}
        </span>
        <span className="text-xs text-medium-gray">(estimativa)</span>
      </div>
    </div>
  );
}
