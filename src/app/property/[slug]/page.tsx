import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPropertyBySlug } from "@/lib/mock/properties";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { PropertyHeader } from "@/components/property/PropertyHeader";
import { PropertyContact } from "@/components/property/PropertyContact";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Imóvel Não Encontrado | Portal Imobiliário",
    };
  }

  return {
    title: `${property.title} | Portal Imobiliário`,
    description: `${property.features.typology} em ${property.location.city} - ${property.priceType === "month" ? `${property.price}€/mês` : `${property.price}€`}`,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const priceFormatted =
    property.priceType === "month"
      ? `${property.price.toLocaleString("pt-PT")} €/mês`
      : `${property.price.toLocaleString("pt-PT")} €`;

  return (
    <div className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <nav className="mb-6">
          <a
            href="/search"
            className="inline-flex items-center gap-2 text-medium-gray hover:text-primary-600 transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar à pesquisa
          </a>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyGallery
              images={property.media.images}
              title={property.title}
            />

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <PropertyHeader
                title={property.title}
                price={priceFormatted}
                location={property.location}
                type={property.type}
                category={property.category}
              />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <PropertyDetails property={property} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <PropertyContact property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
