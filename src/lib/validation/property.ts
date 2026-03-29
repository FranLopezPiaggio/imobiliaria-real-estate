import { z } from "zod";

const propertyTypeSchema = z.enum([
  "Arrendamento",
  "Venda",
  "Arrendamento Temporário",
]);

const propertyCategorySchema = z.enum([
  "Apartamento",
  "Casa",
  "Duplex",
  "Studio",
]);

const typologySchema = z.enum(["T0", "T1", "T2", "T3", "T4", "T5"]);

const citySchema = z.enum(["Lisboa", "Porto", "Algarve", "Coimbra", "Braga"]);

const propertyStatusSchema = z.enum(["active", "pending", "sold", "rented"]);

const locationSchema = z.object({
  address: z.string().min(1, "Morada é obrigatória"),
  city: citySchema,
  district: z.string().min(1, "Distrito é obrigatório"),
  postalCode: z
    .string()
    .regex(/^\d{4}-\d{3}$/, "Código postal deve ter o formato XXXX-XXX"),
  coordinates: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
  }),
});

const featuresSchema = z.object({
  bedrooms: z.number().int().min(0),
  bathrooms: z.number().int().min(0),
  area: z.number().positive("Área deve ser positiva"),
  parking: z.number().int().min(0),
  furnished: z.boolean(),
  typology: typologySchema,
});

const mediaSchema = z.object({
  images: z
    .array(z.string().url())
    .min(1, "Pelo menos uma imagem é obrigatória"),
  virtualTour: z.string().url().optional(),
});

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(9, "Telefone deve ter pelo menos 9 dígitos"),
  email: z.string().email("Email inválido").optional(),
});

export const propertySchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  type: propertyTypeSchema,
  category: propertyCategorySchema,
  price: z.number().positive("Preço deve ser positivo"),
  priceType: z.enum(["month", "total"]),
  currency: z.literal("EUR"),
  location: locationSchema,
  features: featuresSchema,
  media: mediaSchema,
  contact: contactSchema,
  status: propertyStatusSchema,
  publishedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const propertyFiltersSchema = z.object({
  type: propertyTypeSchema.optional(),
  city: citySchema.optional(),
  category: propertyCategorySchema.optional(),
  typology: typologySchema.optional(),
  minPrice: z.number().positive().optional(),
  maxPrice: z.number().positive().optional(),
  bedrooms: z.number().int().min(0).max(5).optional(),
  furnished: z.boolean().optional(),
});

export type PropertyInput = z.infer<typeof propertySchema>;
export type PropertyFiltersInput = z.infer<typeof propertyFiltersSchema>;

export function validateProperty(data: unknown): {
  valid: boolean;
  data?: PropertyInput;
  errors?: z.ZodError;
} {
  const result = propertySchema.safeParse(data);

  if (result.success) {
    return {
      valid: true,
      data: result.data,
    };
  }

  return {
    valid: false,
    errors: result.error,
  };
}

export function validatePropertyFilters(data: unknown): {
  valid: boolean;
  data?: PropertyFiltersInput;
  errors?: z.ZodError;
} {
  const result = propertyFiltersSchema.safeParse(data);

  if (result.success) {
    return {
      valid: true,
      data: result.data,
    };
  }

  return {
    valid: false,
    errors: result.error,
  };
}

export function getValidationErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const issue of error.issues) {
    const path = issue.path.join(".");
    if (!errors[path]) {
      errors[path] = issue.message;
    }
  }

  return errors;
}
