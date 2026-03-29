import { Skeleton } from "@/components/ui/skeleton";

/**
 * Search Loading - FE-012
 *
 * Skeleton loading state for search page.
 *
 * @see DESIGN.md §5.4 (Filter Sidebar), §6 (Responsive)
 */

export default function SearchLoading() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-light-gray">
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-4 w-32 mb-4" />
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <Skeleton className="flex-1 h-10 rounded-lg" />
            <Skeleton className="w-full md:w-48 h-10 rounded-lg" />
            <Skeleton className="w-24 h-10 rounded-lg" />
          </div>
          <Skeleton className="h-5 w-48" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Skeleton */}
          <div className="lg:w-72 hidden lg:block">
            <div className="bg-white rounded-xl border border-light-gray p-6">
              <Skeleton className="h-6 w-16 mb-4" />
              <Skeleton className="h-5 w-24 mb-3" />
              <div className="space-y-2 mb-6">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-5 w-16 mb-3" />
              <Skeleton className="h-10 w-full mb-6" />
              <Skeleton className="h-5 w-20 mb-3" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          {/* Results Skeleton */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-light-gray overflow-hidden"
                >
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-3" />
                    <div className="flex gap-4 mb-3">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
