export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-180 px-6 py-12">
        {/* Category badge */}
        <div className="h-6 w-20 animate-pulse rounded-sm bg-border" />

        {/* Title */}
        <div className="mt-6 space-y-3">
          <div className="h-9 w-full animate-pulse rounded-sm bg-border" />
          <div className="h-9 w-5/6 animate-pulse rounded-sm bg-border" />
          <div className="h-9 w-2/3 animate-pulse rounded-sm bg-border" />
        </div>

        {/* Subtitle */}
        <div className="mt-6 space-y-2 border-l-2 border-border pl-4">
          <div className="h-4 w-full animate-pulse rounded-sm bg-border" />
          <div className="h-4 w-5/6 animate-pulse rounded-sm bg-border" />
        </div>

        {/* Meta bar */}
        <div className="mt-6 flex items-center justify-between border-y border-border py-4">
          <div className="flex items-center gap-4">
            <div className="h-3.5 w-32 animate-pulse rounded-sm bg-border" />
            <div className="h-3.5 w-36 animate-pulse rounded-sm bg-border" />
          </div>
          <div className="h-3.5 w-24 animate-pulse rounded-sm bg-border" />
        </div>

        {/* Hero image */}
        <div className="mt-8 h-96 w-full animate-pulse rounded-sm bg-border" />

        {/* Article body */}
        <div className="mt-10 space-y-3">
          {[1, 0.9, 1, 0.85, 0.7, 1, 0.95, 0.6, 1, 0.8].map((w, i) => (
            <div
              key={i}
              className="h-4 animate-pulse rounded-sm bg-border"
              style={{ width: `${w * 100}%` }}
            />
          ))}
          {/* Heading */}
          <div className="mt-6 h-6 w-1/2 animate-pulse rounded-sm bg-border" />
          {[1, 0.9, 0.75, 1, 0.85].map((w, i) => (
            <div
              key={`b-${i}`}
              className="h-4 animate-pulse rounded-sm bg-border"
              style={{ width: `${w * 100}%` }}
            />
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          {[60, 80, 70, 90].map((w, i) => (
            <div
              key={i}
              className="h-7 animate-pulse rounded-sm bg-border"
              style={{ width: `${w}px` }}
            />
          ))}
        </div>

        {/* Share bar */}
        <div className="mt-8 h-14 w-full animate-pulse rounded-sm bg-border" />
      </main>
    </div>
  );
}
