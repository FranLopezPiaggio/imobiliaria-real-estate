import Link from "next/link";

/**
 * ZoneCard Component
 *
 * Individual zone card for ZonesGrid.
 * Displays background image/gradient, zone name, and mock property count.
 *
 * @see DESIGN.md §5.3 (Cards)
 */

interface ZoneCardProps {
  zone: {
    id: string;
    name: string;
    district: string;
    count: number;
  };
}

// Background gradients for each zone (Portugal-themed)
const zoneGradients: Record<string, string> = {
  lisboa: "from-primary-600 to-primary-800",
  porto: "from-blue-600 to-blue-800",
  algarve: "from-amber-500 to-orange-600",
  coimbra: "from-purple-600 to-purple-800",
  braga: "from-green-600 to-green-800",
};

export function ZoneCard({ zone }: ZoneCardProps) {
  const gradient = zoneGradients[zone.id] || "from-primary-500 to-primary-700";

  return (
    <Link
      href={`/search?city=${zone.id}`}
      className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
      aria-label={`Ver imóveis em ${zone.name}: ${zone.count} propriedades`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-300 group-hover:scale-105`}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-4">
        {/* Zone Name */}
        <h3 className="font-heading text-xl md:text-2xl font-bold mb-1 drop-shadow-md">
          {zone.name}
        </h3>

        {/* District */}
        <p className="text-sm text-white/80 mb-2">{zone.district}</p>

        {/* Property Count */}
        <p className="text-sm font-medium text-white/90">
          {zone.count} propriedades
        </p>
      </div>

      {/* Border on focus */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-focus:border-white/50 transition-colors duration-200" />
    </Link>
  );
}
