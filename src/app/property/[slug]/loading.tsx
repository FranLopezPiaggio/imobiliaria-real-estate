import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyLoading() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <Skeleton className="h-6 w-40 mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <Skeleton className="aspect-[16/10] w-full rounded-xl" />
              <div className="grid grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="aspect-[4/3] rounded-lg" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-2 mb-3">
                <Skeleton className="h-6 w-20 rounded" />
                <Skeleton className="h-6 w-24 rounded" />
              </div>
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-10 w-40" />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-16 rounded-lg" />
                ))}
              </div>
              <Skeleton className="h-6 w-24 mt-4" />
              <Skeleton className="h-20 w-full rounded-lg" />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-light-gray">
                <div className="text-center mb-6">
                  <Skeleton className="w-16 h-16 mx-auto rounded-full mb-3" />
                  <Skeleton className="h-5 w-32 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </div>
                <Skeleton className="h-14 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
