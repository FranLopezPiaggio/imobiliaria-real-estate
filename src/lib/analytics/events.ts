import { capture } from "./posthog";

export interface PropertyViewedEvent {
  property_id: string;
  property_type?: string;
  price?: number;
  location?: string;
  source?: string;
}

export interface WhatsAppClickedEvent {
  property_id: string;
  phone_number?: string;
  message_length?: number;
}

export interface SearchEvent {
  query?: string;
  filters?: Record<string, unknown>;
  results_count?: number;
}

export function trackPropertyViewed(event: PropertyViewedEvent): void {
  capture("property_viewed", {
    property_id: event.property_id,
    property_type: event.property_type,
    price_bucket: event.price
      ? Math.floor(event.price / 10000) * 10000
      : undefined,
    location: event.location,
    source: event.source,
  });
}

export function trackWhatsAppClicked(event: WhatsAppClickedEvent): void {
  capture("whatsapp_clicked", {
    property_id: event.property_id,
    message_length: event.message_length,
  });
}

export function trackSearch(event: SearchEvent): void {
  capture("search_performed", {
    has_query: !!event.query,
    results_count: event.results_count,
    filter_count: event.filters ? Object.keys(event.filters).length : 0,
  });
}
