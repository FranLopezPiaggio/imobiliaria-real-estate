"use client";

import { Popup, Marker } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

/**
 * MapMarker Component
 *
 * Individual property marker on the map.
 * Displays property title and price in popup.
 *
 * @see DESIGN.md §5.5 (Map)
 */

// Fix for default marker icons in Leaflet with Next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface PropertyMarker {
  id: string;
  title: string;
  price: number;
  lat: number;
  lng: number;
}

interface MapMarkerProps {
  property: PropertyMarker;
}

// Format price in EUR with PT-PT formatting
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export function MapMarker({ property }: MapMarkerProps) {
  return (
    <Marker
      position={[property.lat, property.lng]}
      eventHandlers={{
        click: () => {
          console.log("Marker clicked:", property.id);
        },
      }}
    >
      <Popup>
        <div className="min-w-[180px]">
          <Link
            href={`/property/${property.id}`}
            className="block hover:text-primary-500"
          >
            <h3 className="font-semibold text-charcoal text-sm mb-1 line-clamp-2">
              {property.title}
            </h3>
            <p className="text-primary-500 font-bold">
              {formatPrice(property.price)}
            </p>
          </Link>
        </div>
      </Popup>
    </Marker>
  );
}
