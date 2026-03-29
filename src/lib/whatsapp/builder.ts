import { validatePortugueseNumber } from "./validator";
import { buildDefaultMessage, type PropertyContext } from "./templates/default";

export interface WhatsAppLinkOptions {
  number: string;
  property: PropertyContext;
}

export function buildWhatsAppLink(options: WhatsAppLinkOptions): string {
  const { number, property } = options;

  const validation = validatePortugueseNumber(number);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const message = buildDefaultMessage({ property });
  const encodedMessage = encodeURIComponent(message);

  const cleanNumber = number.replace(/^\+/, "");

  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
