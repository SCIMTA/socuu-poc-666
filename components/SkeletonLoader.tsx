export function SkeletonLoader() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative pb-24 animate-pulse">
      {/* Top Bar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/90 border-b border-slate-100 px-4 h-16 flex items-center gap-3 shadow-sm">
        <div className="w-10 h-10 bg-slate-200 rounded-full shrink-0"></div>
        <div className="h-6 bg-slate-200 rounded w-1/2 flex-1"></div>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-6">
        {/* Warning Banner Skeleton */}
        <div className="bg-red-50/50 border border-red-100 rounded-2xl p-4 flex gap-3 shadow-sm">
          <div className="w-6 h-6 bg-red-200 rounded-full shrink-0 mt-0.5"></div>
          <div className="flex-1">
            <div className="h-4 bg-red-200 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-red-200 rounded w-full mb-1"></div>
            <div className="h-4 bg-red-200 rounded w-5/6"></div>
          </div>
        </div>

        {/* Steps List Skeleton */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
          <div className="h-6 bg-slate-200 rounded w-1/2 mb-6"></div>
          
          <div className="relative border-l-2 border-slate-100 ml-5 space-y-8 pb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative pl-8">
                {/* Step Circle Skeleton */}
                <div className="absolute -left-[21px] top-0 w-10 h-10 bg-slate-200 rounded-full border-4 border-white"></div>
                
                {/* Step Content Skeleton */}
                <div className="pt-1">
                  <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6 mb-4"></div>
                  
                  {/* Image Skeleton */}
                  <div className="w-full aspect-video bg-slate-200 rounded-xl border border-slate-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FAB Skeleton */}
      <div className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-red-200 rounded-full shadow-lg"></div>
    </div>
  );
}
