"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
}

export function SearchPagination({ page, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > totalPages) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(newPage));
      router.push(`/search?${params.toString()}`);
    },
    [router, searchParams, totalPages],
  );

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = page - 1; i <= page + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <nav
      className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
      aria-label="Navegação de páginas"
    >
      <p className="text-sm text-medium-gray order-2 sm:order-1">
        Página {page} de {totalPages}
      </p>

      <div className="flex items-center gap-1 order-1 sm:order-2">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          className="px-3 py-2 text-sm font-medium rounded-lg border border-light-gray text-charcoal disabled:opacity-40 disabled:cursor-not-allowed hover:bg-light-gray transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
          aria-label="Página anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((p, idx) =>
            p === "..." ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 py-2 text-sm text-medium-gray"
              >
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`min-w-[36px] px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 ${
                  p === page
                    ? "bg-primary-500 text-white"
                    : "text-charcoal border border-light-gray hover:bg-light-gray"
                }`}
                aria-label={`Página ${p}`}
                aria-current={p === page ? "page" : undefined}
              >
                {p}
              </button>
            ),
          )}
        </div>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className="px-3 py-2 text-sm font-medium rounded-lg border border-light-gray text-charcoal disabled:opacity-40 disabled:cursor-not-allowed hover:bg-light-gray transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
          aria-label="Próxima página"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
