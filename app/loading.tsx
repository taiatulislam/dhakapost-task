export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-10">
        {/* Hero + sidebar skeleton */}
        <section className="grid gap-5 lg:grid-cols-3">
          {/* Main article skeleton */}
          <div className="flex h-full flex-col border-r-0 border-border pr-0 lg:border-r lg:pr-5 lg:col-span-2">
            <div className="h-87.5 w-full animate-pulse rounded-sm bg-border" />
            <div className="mt-5 h-7 w-3/4 animate-pulse rounded-sm bg-border" />
            <div className="mt-3 space-y-2">
              <div className="h-3 w-full animate-pulse rounded-sm bg-border" />
              <div className="h-3 w-5/6 animate-pulse rounded-sm bg-border" />
            </div>
          </div>

          {/* Sidebar skeleton */}
          <aside className="flex h-full flex-col">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-1 items-start gap-4 border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div className="h-26 w-26 shrink-0 animate-pulse rounded-sm bg-border" />
                <div className="flex-1 space-y-2 pt-1">
                  <div className="h-3 w-full animate-pulse rounded-sm bg-border" />
                  <div className="h-3 w-4/5 animate-pulse rounded-sm bg-border" />
                </div>
              </div>
            ))}
          </aside>
        </section>

        <hr className="my-7 border-border" />

        {/* Bottom two cards skeleton */}
        <section className="grid gap-10 md:grid-cols-2">
          {[0, 1].map((i) => (
            <div key={i} className="grid grid-cols-[1fr_1.2fr] gap-5">
              <div className="h-32 w-full animate-pulse rounded-sm bg-border" />
              <div className="space-y-2 pt-1">
                <div className="h-4 w-full animate-pulse rounded-sm bg-border" />
                <div className="h-4 w-5/6 animate-pulse rounded-sm bg-border" />
                <div className="h-3 w-full animate-pulse rounded-sm bg-border" />
                <div className="h-3 w-4/5 animate-pulse rounded-sm bg-border" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
