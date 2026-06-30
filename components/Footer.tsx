import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-[#dce2f2]/60">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          ঢাকা পোস্ট
        </Link>
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            আমাদের সম্পর্কে
          </a>
          <a href="#" className="hover:text-foreground">
            যোগাযোগ
          </a>
          <a href="#" className="hover:text-foreground">
            গোপনীয়তা নীতি
          </a>
          <a href="#" className="hover:text-foreground">
            বিজ্ঞাপন
          </a>
        </nav>
        <p className="mt-6 text-xs text-muted-foreground">
          © ২০২৬ মেট্রো নিউজ। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
