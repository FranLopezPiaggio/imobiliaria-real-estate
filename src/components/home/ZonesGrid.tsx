import { ZoneCard } from "./ZoneCard";

/**
 * ZonesGrid Component - FE-006
 *
 * Grid of popular location cards for Home page.
 * Displays 5 zones: Lisboa, Porto, Algarve, Coimbra, Braga.
 *
 * @see DESIGN.md §5.3 (Cards)
 * @see PRD.md §3.3 (Home US-010)
 * @see SCHEMA.md §3.3 (Location)
 */

const zones = [
  {
    id: "lisboa",
    name: "Lisboa",
    district: "Distrito de Lisboa",
    count: 892,
  },
  {
    id: "porto",
    name: "Porto",
    district: "Distrito do Porto",
    count: 567,
  },
  {
    id: "algarve",
    name: "Algarve",
    district: "Região do Algarve",
    count: 423,
  },
  {
    id: "coimbra",
    name: "Coimbra",
    district: "Distrito de Coimbra",
    count: 189,
  },
  {
    id: "braga",
    name: "Braga",
    district: "Distrito de Braga",
    count: 156,
  },
];

export function ZonesGrid() {
  return (
    <section className="py-16 bg-white" aria-labelledby="zones-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="zones-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Explore por Localização
          </h2>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Encontre o imóvel perfeito na região que procura
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {zones.map((zone) => (
            <ZoneCard key={zone.id} zone={zone} />
          ))}
        </div>
      </div>
    </section>
  );
}
