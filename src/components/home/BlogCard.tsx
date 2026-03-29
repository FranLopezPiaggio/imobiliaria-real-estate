import Link from "next/link";
import Image from "next/image";

/**
 * BlogCard Component
 *
 * Individual blog article card.
 *
 * @see DESIGN.md §5.3 (Cards)
 */

interface BlogCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    image: string;
  };
}

// Format date in PT-PT
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-light-gray overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-medium-gray mb-3">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-medium-gray mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 rounded group"
        >
          Ler mais
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
    </article>
  );
}
