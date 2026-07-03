export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-10">
        {/* Hero + sidebar skeleton */}
        <section className="grid gap-5 lg:grid-cols-3">
          {/* Main article skeleton */}
          <div className="flex h-full flex-col border-r-0 border-border pr-0 lg:border-r lg:pr-5 lg:col-span-2">
            <div className="h-55 lg:h-87.5 w-full animate-pulse rounded-sm bg-border" />
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
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="grid grid-cols-[104px_1fr] gap-5 lg:grid-cols-[1fr_1.2fr]"
            >
              <div className="h-26 w-26 overflow-hidden rounded-sm bg-border animate-pulse lg:h-full lg:w-full lg:min-h-50" />

              <div className="space-y-3 pt-1">
                <div className="h-5 w-full rounded-sm bg-border animate-pulse" />
                <div className="h-5 w-4/5 rounded-sm bg-border animate-pulse" />

                <div className="mt-3 space-y-2">
                  <div className="h-3 w-full rounded-sm bg-border animate-pulse" />
                  <div className="h-3 w-11/12 rounded-sm bg-border animate-pulse" />
                  <div className="h-3 w-4/5 rounded-sm bg-border animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
