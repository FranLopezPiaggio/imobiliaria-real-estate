"use client";

import { useState } from "react";
import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayImages =
    images.length > 0 ? images : ["/placeholder-property.jpg"];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-light-gray">
        <Image
          src={displayImages[selectedIndex]}
          alt={`${title} - Imagem ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {displayImages.slice(0, 4).map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-200 ${
              selectedIndex === index
                ? "ring-2 ring-primary-500 ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
            aria-label={`Ver imagem ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} - Miniatura ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 200px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
