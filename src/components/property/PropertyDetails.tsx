"use client";

import type { Property } from "@/types/mock";
import { PropertyFeatures } from "./PropertyFeatures";
import { PropertyMap } from "./PropertyMap";

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-xl font-semibold text-charcoal mb-4">
          Características
        </h2>
        <PropertyFeatures features={property.features} />
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-charcoal mb-4">
          Descrição
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-dark-gray leading-relaxed">
            {property.description}
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-charcoal mb-4">
          Localização
        </h2>
        <div className="bg-light-gray rounded-xl overflow-hidden">
          <PropertyMap
            coordinates={property.location.coordinates}
            address={property.location.address}
          />
        </div>
        <p className="mt-3 text-medium-gray text-sm">
          {property.location.address}, {property.location.postalCode} •{" "}
          {property.location.city}
        </p>
      </section>
    </div>
  );
}
