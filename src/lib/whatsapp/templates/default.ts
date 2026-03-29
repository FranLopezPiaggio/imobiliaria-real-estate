export interface PropertyContext {
  title: string;
  id: string;
  price?: number;
  location?: string;
}

export interface MessageOptions {
  property: PropertyContext;
  locale?: "pt-PT";
}

export function buildDefaultMessage({
  property,
  locale = "pt-PT",
}: MessageOptions): string {
  if (locale !== "pt-PT") {
    throw new Error(
      `Locale ${locale} not supported. Only pt-PT is available for V1.`,
    );
  }

  let message = `Olá, vi a propriedade "${property.title}" (Ref: ${property.id})`;

  if (property.location) {
    message += ` em ${property.location}`;
  }

  message += " no Portal Imobiliário e gostaria de mais informações.";

  if (property.price) {
    message += `\n\nPreço: €${property.price.toLocaleString("pt-PT")}`;
  }

  return message;
}
