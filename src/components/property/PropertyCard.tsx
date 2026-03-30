import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/types/mock";

function formatPrice(price: number, priceType: "month" | "total"): string {
  const formatted = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  if (priceType === "month") {
    return `${formatted}/mês`;
  }
  return formatted;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const imageUrl =
    property.media.images[0] ||
    "/images/nick-karvounis-Prb-sjOUBFs-unsplash.jpg";

  return (
    <Link
      href={`/property/${property.id}`}
      className="group block bg-white rounded-xl border border-light-gray overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary-200"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-light-gray">
        <Image
          src={imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary-500 text-white text-xs font-medium rounded-md">
          {property.type}
        </div>
        {property.features.furnished && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium rounded-md">
            Mobiliado
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-heading text-base font-semibold text-charcoal line-clamp-1 group-hover:text-primary-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-sm text-medium-gray mt-1 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {property.location.city}, {property.location.district}
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm text-dark-gray">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            {property.features.typology}
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            {property.features.bedrooms}{" "}
            {property.features.bedrooms === 1 ? "quarto" : "quartos"}
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                clipRule="evenodd"
              />
            </svg>
            {property.features.bathrooms}{" "}
            {property.features.bathrooms === 1
              ? "casa de banho"
              : "casas de banho"}
          </span>
        </div>

        <div className="pt-3 border-t border-light-gray">
          <p className="text-xl font-heading font-bold text-primary-600">
            {formatPrice(property.price, property.priceType)}
          </p>
        </div>
      </div>
    </Link>
  );
}
