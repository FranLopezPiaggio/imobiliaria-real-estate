"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { MapMarker } from "./MapMarker";
import "leaflet/dist/leaflet.css";

/**
 * MapComponent - FE-008
 *
 * Leaflet map for Search page.
 * Displays property locations as static pins with popups.
 *
 * @see DESIGN.md §5.5 (Map)
 * @see PRD.md §3.2 (Search US-003)
 * @see TECH_STACK.md §2.3 (Maps)
 */

// Mock property data for MVP
const mockProperties = [
  {
    id: "1",
    title: "T2 em Alvalade, Lisboa",
    price: 1200,
    lat: 38.7578,
    lng: -9.1481,
  },
  {
    id: "2",
    title: "T3 no Parque das Nações",
    price: 250000,
    lat: 38.7756,
    lng: -9.0959,
  },
  {
    id: "3",
    title: "Studio em Campo Grande",
    price: 800,
    lat: 38.7667,
    lng: -9.1667,
  },
  {
    id: "4",
    title: "T1 em Benfica",
    price: 950,
    lat: 38.7167,
    lng: -9.2167,
  },
  {
    id: "5",
    title: "Casa T4 em Cascais",
    price: 450000,
    lat: 38.7167,
    lng: -9.4167,
  },
];

interface MapComponentProps {
  properties?: typeof mockProperties;
  center?: [number, number];
  zoom?: number;
}

export function MapComponent({
  properties = mockProperties,
  center = [38.7223, -9.1393], // Lisbon center
  zoom = 12,
}: MapComponentProps) {
  return (
    <div
      className="w-full h-96 rounded-xl overflow-hidden border border-light-gray"
      role="application"
      aria-label="Mapa de propriedades"
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* OpenStreetMap Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Property Markers */}
        {properties.map((property) => (
          <MapMarker key={property.id} property={property} />
        ))}
      </MapContainer>
    </div>
  );
}
