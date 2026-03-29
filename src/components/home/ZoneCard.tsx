import Link from "next/link";
import Image from "next/image";

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
    image: string;
  };
}

// Background gradients for each zone (Portugal-themed) as overlay
const zoneOverlays: Record<string, string> = {
  lisboa: "from-primary-900/70 to-primary-600/50",
  porto: "from-blue-900/70 to-blue-600/50",
  algarve: "from-amber-900/70 to-orange-600/50",
  coimbra: "from-purple-900/70 to-purple-600/50",
  braga: "from-green-900/70 to-green-600/50",
};

export function ZoneCard({ zone }: ZoneCardProps) {
  const overlay = zoneOverlays[zone.id] || "from-charcoal/70 to-charcoal/50";

  return (
    <Link
      href={`/search?city=${zone.id}`}
      className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
      aria-label={`Ver imóveis em ${zone.name}: ${zone.count} propriedades`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={zone.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${overlay}`} />
      </div>

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
