import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "পেজ পাওয়া যায়নি | Dhaka Post",
  description: "আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-[#dce2f2]">৪০৪</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          পেজটি পাওয়া যায়নি
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে,
          অথবা এটি কখনো ছিল না।
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#0b1a31] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          ← হোমপেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
