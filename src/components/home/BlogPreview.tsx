import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { getRandomImageForIndex } from "@/utils/images";

/**
 * BlogPreview Component - FE-009
 *
 * Blog article preview section for Home page.
 * Displays latest articles to inform users.
 *
 * @see DESIGN.md §5.3 (Cards)
 * @see PRD.md §3.3 (Home US-011)
 */

// Mock blog articles for MVP
const blogArticles = [
  {
    id: "1",
    title: "Como poupar na compra do seu primeiro imóvel em Portugal",
    excerpt:
      "Descubra as principais dicas e estratégias para economizar na aquisição da sua casa nova, desde a escolha do financiamento até à negociação.",
    date: "2026-03-20",
    readTime: "5 min de leitura",
    slug: "como-poupar-compra-primeiro-imovel",
    image: getRandomImageForIndex(0),
  },
  {
    id: "2",
    title: "Documentos necessários para arrendamento em Portugal",
    excerpt:
      "Saiba quais os documentos obrigatórios e opcionais que precisa apresentar quando pretende arrendar um imóvel em Portugal.",
    date: "2026-03-15",
    readTime: "4 min de leitura",
    slug: "documentos-arrendamento-portugal",
    image: getRandomImageForIndex(1),
  },
  {
    id: "3",
    title: "Guia completo: zonas mais procuradas em Lisboa",
    excerpt:
      "Explore as melhores zonas de Lisboa para viver, desde o centro histórico até aos bairros mais modernos e familiares.",
    date: "2026-03-10",
    readTime: "6 min de leitura",
    slug: "zonas-mais-procuradas-lisboa",
    image: getRandomImageForIndex(2),
  },
];

export function BlogPreview() {
  return (
    <section className="py-16 bg-off-white" aria-labelledby="blog-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="blog-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Coisas a saber antes de alugar/comprar
          </h2>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Dicas e informações para ajudar na sua decisão
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
          >
            Ver mais notícias
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
