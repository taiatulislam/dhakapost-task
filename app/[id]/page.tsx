import Link from "next/link";
import Image from "next/image";
import { CiUser, CiCalendar, CiBookmark } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { formatPublishedDateTime } from "@/utils/timeConvertBangla";
import { getNewsDetails } from "@/lib/getNewsDetails";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const news = await getNewsDetails(id);
  const article = news?.article;

  if (!article) {
    return {
      title: "নিবন্ধ পাওয়া যায়নি | Dhaka Post",
    };
  }

  return {
    title: `${article.title} | Dhaka Post`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      images: [
        { url: article.image, width: 660, height: 440, alt: article.title },
      ],
      type: "article",
      publishedTime: article.published_at,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      images: [article.image],
    },
  };
}

export default async function DetailsPage({ params }: Props) {
  const { id } = await params;

  const news = await getNewsDetails(id);
  console.log("news", news);
  const article = news.article;

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
            [&>h2]:text-darkblue

            [&>ul]:mb-6
            [&>ul]:ml-6
            [&>ul]:list-[square]
            [&>ul]:space-y-2

          [&>ul>li]:text-[14px]

            [&>blockquote]:my-6
            [&>blockquote]:border-l-4
            [&>blockquote]:border-darkblue
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
          <span className="text-xs font-bold text-darkblue">
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
