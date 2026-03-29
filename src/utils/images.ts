export const propertyImages = [
  "/images/liam-mckay-VHWyqXsWHg0-unsplash.jpg",
  "/images/daniel-sessler-g3O3xWspoN4-unsplash.jpg",
  "/images/aayush-gupta-ljhCEaHYWJ8-unsplash.jpg",
  "/images/nick-karvounis-Prb-sjOUBFs-unsplash.jpg",
];

export function getRandomPropertyImage(): string {
  return propertyImages[Math.floor(Math.random() * propertyImages.length)];
}

export function getRandomImageForIndex(index: number): string {
  return propertyImages[index % propertyImages.length];
}
