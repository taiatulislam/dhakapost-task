import Link from "next/link";
import Image from "next/image";
import { CiUser, CiCalendar, CiBookmark } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { formatPublishedDateTime } from "@/utils/timeConvertBangla";

export default function DetailsPage() {
  const article = {
    id: "1001",
    title: "বাংলাদেশে ভারী বৃষ্টির সম্ভাবনা, সতর্ক থাকার পরামর্শ",
    subtitle:
      "আগামী ২৪ ঘণ্টায় দেশের বিভিন্ন অঞ্চলে মাঝারি থেকে ভারী বৃষ্টিপাত হতে পারে বলে জানিয়েছে আবহাওয়া অধিদপ্তর।",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=660&h=440&q=80",
    source: "Demo News",
    author: "নিজস্ব প্রতিবেদক",
    category: "জাতীয়",
    published_at: "2026-06-29T11:20:00Z",
    read_time: "৪ মিনিট",
    content:
      "<p>আবহাওয়া অধিদপ্তরের সর্বশেষ পূর্বাভাস অনুযায়ী আগামী ২৪ ঘণ্টায় দেশের বিভিন্ন অঞ্চলে মাঝারি থেকে ভারী বৃষ্টিপাত হতে পারে। রাজধানীসহ বিভিন্ন জেলায় বজ্রসহ বৃষ্টির সম্ভাবনাও রয়েছে।</p><p>বিশেষজ্ঞদের মতে, বর্ষাকালের স্বাভাবিক সক্রিয়তার কারণে এই বৃষ্টিপাত হতে পারে এবং কোথাও কোথাও স্বল্প সময়ের জন্য জলাবদ্ধতা সৃষ্টি হতে পারে।</p><h2>যেসব এলাকায় বেশি বৃষ্টি হতে পারে</h2><ul><li>ঢাকা বিভাগ</li><li>চট্টগ্রাম বিভাগ</li><li>সিলেট বিভাগ</li><li>ময়মনসিংহ বিভাগের কিছু অংশ</li></ul><p>স্থানীয় প্রশাসনকে প্রয়োজনীয় প্রস্তুতি নিতে বলা হয়েছে এবং নাগরিকদের অপ্রয়োজনীয় ভ্রমণ এড়িয়ে চলার পরামর্শ দেওয়া হয়েছে।</p><blockquote>আবহাওয়ার সর্বশেষ পূর্বাভাস নিয়মিত অনুসরণ করার আহ্বান জানিয়েছে সংশ্লিষ্ট কর্তৃপক্ষ।</blockquote><p>বজ্রপাতের সময় খোলা মাঠ, নদী কিংবা বড় গাছের নিচে অবস্থান না করার পরামর্শও দেওয়া হয়েছে।</p>",
    tags: ["আবহাওয়া", "বৃষ্টি", "বাংলাদেশ", "সতর্কতা"],
    original_url: "https://example.com/news/1001",
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-180 px-6 py-12">
        <span className="inline-block rounded-sm bg-[#dce2f2] px-3 py-1 text-xs font-medium text-foreground/80">
          {article?.category}
        </span>
        <h1 className="mt-6 text-3xl font-bold text-foreground md:text-[42px]">
          {article?.title}
        </h1>
        <p className="mt-6 border-l-2 border-border pl-4 text-muted-foreground">
          {article?.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <CiUser className="h-3.5 w-3.5" />{" "}
              <span style={{ fontWeight: "700" }}>{article?.author}</span>
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-2">
              <CiCalendar className="h-3.5 w-3.5" />{" "}
              {formatPublishedDateTime(article?.published_at)}
            </span>
          </div>
          <span className="flex items-center gap-2">
            <GoClock className="h-3.5 w-3.5" /> {article?.read_time} পাঠ
          </span>
        </div>
        <figure className="mt-8">
          <Image
            src={article?.image}
            alt="দেশের উপকূলীয় জেলাগুলোতে বৃষ্টির দাপট বাড়ছে"
            height={200}
            width={200}
            className="w-full object-cover"
          />
          <figcaption className="mt-3 text-center text-xs italic text-muted-foreground">
            ছবি: দেশের উপকূলীয় জেলাগুলোতে বৃষ্টির দাপট বাড়ছে।
          </figcaption>
        </figure>
        <div
          className="
            mt-10
            text-[16px]
            text-foreground/85

            [&>p]:mb-4

            [&>h2]:mt-8
            [&>h2]:mb-4
            [&>h2]:text-xl
            [&>h2]:font-bold
            [&>h2]:text-[#0b1a31]

            [&>ul]:mb-6
            [&>ul]:ml-6
            [&>ul]:list-[square]
            [&>ul]:space-y-2

          [&>ul>li]:text-[14px]

            [&>blockquote]:my-6
            [&>blockquote]:border-l-4
            [&>blockquote]:border-[#0b1a31]
            [&>blockquote]:pl-5
            [&>blockquote]:italic
            [&>blockquote]:text-foreground/80
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          {article?.tags?.map((t) => (
            <Link
              key={t}
              href="#"
              className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground bg-[#f1f3ff]"
            >
              # {t}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between rounded-sm bg-[#f1f3ff] px-5 py-4">
          <span className="text-xs font-bold text-[#0b1a31]">
            নিবন্ধটি শেয়ার করুন:
          </span>
          <div className="flex items-center gap-4 text-muted-foreground">
            <button
              aria-label="share"
              className="transition-colors hover:text-foreground border border-border rounded-full p-1.5 cursor-pointer"
            >
              <IoShareSocialOutline className="h-4 w-4" />
            </button>
            <button
              aria-label="bookmark"
              className="transition-colors hover:text-foreground border border-border rounded-full p-1.5 cursor-pointer"
            >
              <CiBookmark className="h-4 w-4" />
            </button>
            <button
              aria-label="print"
              className="transition-colors hover:text-foreground border border-border rounded-full p-1.5 cursor-pointer"
            >
              <FiPrinter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
