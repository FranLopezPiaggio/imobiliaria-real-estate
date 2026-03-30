"use client";

interface PropertyMapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
}

export function PropertyMap({ coordinates, address }: PropertyMapProps) {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.01}%2C${coordinates.lat - 0.01}%2C${coordinates.lng + 0.01}%2C${coordinates.lat + 0.01}&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`;

  return (
    <div className="relative w-full h-64">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
        title={`Mapa de ${address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg text-xs text-medium-gray">
          Em breve: mapa interativo
        </div>
      </div>
    </div>
  );
}
