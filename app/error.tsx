"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-5xl font-bold text-darkblue">⚠️</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          কিছু একটা সমস্যা হয়েছে
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          পেজটি লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>
        {error?.digest && (
          <p className="mt-2 text-xs text-muted-foreground/60">
            Error ID: {error.digest}
          </p>
        )}
        <button
          onClick={unstable_retry}
          className="mt-6 inline-flex items-center gap-2 rounded-sm bg-darkblue px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80 cursor-pointer"
        >
          আবার চেষ্টা করুন
        </button>
      </div>
    </div>
  );
}
