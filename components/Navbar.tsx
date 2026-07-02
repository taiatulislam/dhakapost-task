import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const navLinks = [
    "বিশ্ব",
    "ব্যবসা",
    "প্রযুক্তি",
    "রাজনীতি",
    "সংস্কৃতি",
    "মতামত",
  ];

  return (
    <header className="border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-1.5">
        <Link
          href="/"
          className="text-[40px] text-darkblue font-bold tracking-tight"
        >
          ঢাকা পোস্ট
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((n) => (
            <Link
              key={n}
              href="#"
              className="text-sm text-foreground transition-colors hover:text-foreground"
            >
              {n}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-7 text-gray-500">
          <button
            aria-label="search"
            className="transition-colors hover:text-foreground"
          >
            <IoMdSearch className="h-4.5 w-4.5" />
          </button>
          <button
            aria-label="account"
            className="transition-colors hover:text-foreground"
          >
            <FaRegCircleUser className="h-4.5 w-4.5" />
          </button>
          <button
            aria-label="menu"
            className="transition-colors hover:text-foreground md:hidden"
          >
            <IoMdMenu className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
