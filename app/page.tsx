import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const news = [
    {
      id: "1001",
      title: "বাংলাদেশে ভারী বৃষ্টির সম্ভাবনা, সতর্ক থাকার পরামর্শ",
      summary:
        "আগামী ২৪ ঘণ্টায় দেশের বিভিন্ন অঞ্চলে মাঝারি থেকে ভারী বৃষ্টিপাতের পূর্বাভাস দিয়েছে আবহাওয়া অধিদপ্তর।",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=660&h=440&q=80",
      source: "Demo News",
      category: "জাতীয়",
      published_at: "2026-06-29T11:20:00Z",
      details_url: "/api/news/details/1001.json",
    },
    {
      id: "1002",
      title: "ঢাকায় নতুন মেট্রোরেল স্টেশনের নির্মাণকাজ দ্রুত এগোচ্ছে",
      summary:
        "নির্ধারিত সময়ের মধ্যেই নতুন স্টেশন চালুর লক্ষ্যে দিনরাত কাজ চলছে।",
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=660&h=440&q=80",
      source: "Demo News",
      category: "অবকাঠামো",
      published_at: "2026-06-29T10:10:00Z",
      details_url: "/api/news/details/1002.json",
    },
    {
      id: "1003",
      title: "কৃষকদের জন্য নতুন প্রণোদনা প্যাকেজ ঘোষণা",
      summary:
        "উৎপাদন বাড়াতে আধুনিক কৃষি প্রযুক্তি ব্যবহারে নতুন সহায়তা দেওয়া হবে।",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=660&h=440&q=80",
      source: "Demo News",
      category: "কৃষি",
      published_at: "2026-06-29T09:30:00Z",
      details_url: "/api/news/details/1003.json",
    },
    {
      id: "1004",
      title: "দেশীয় স্টার্টআপে বিনিয়োগ বাড়ছে প্রযুক্তি খাতে",
      summary:
        "নতুন উদ্যোক্তাদের জন্য আন্তর্জাতিক বিনিয়োগকারীদের আগ্রহ বেড়েছে।",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=660&h=440&q=80",
      source: "Demo News",
      category: "প্রযুক্তি",
      published_at: "2026-06-29T08:15:00Z",
      details_url: "/api/news/details/1004.json",
    },
    {
      id: "1005",
      title: "পর্যটন এলাকায় বেড়েছে দর্শনার্থীর ভিড়",
      summary:
        "ছুটির দিনে দেশের জনপ্রিয় পর্যটনকেন্দ্রগুলোতে পর্যটকদের উপস্থিতি বেড়েছে।",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=660&h=440&q=80",
      source: "Demo News",
      category: "ভ্রমণ",
      published_at: "2026-06-29T07:00:00Z",
      details_url: "/api/news/details/1005.json",
    },
    {
      id: "1006",
      title: "আন্তর্জাতিক বাজারে জ্বালানি তেলের দামে নতুন পরিবর্তন",
      summary:
        "বিশ্ববাজারে অপরিশোধিত তেলের দামে সাম্প্রতিক ওঠানামার প্রভাব পড়ছে আমদানিকারক দেশগুলোতে।",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=660&h=440&q=80",
      source: "Demo News",
      category: "অর্থনীতি",
      published_at: "2026-06-29T06:20:00Z",
      details_url: "/api/news/details/1006.json",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-10">
        <section className="grid gap-5 lg:grid-cols-3">
          <article className="flex h-full flex-col border-r-0 border-border pr-0 md:border-r md:pr-5 lg:col-span-2">
            <Image
              src={news?.[0]?.image}
              alt={news?.[0]?.title}
              width={500}
              height={200}
              loading="eager"
              className="h-87.5 w-full object-cover"
            />

            <h1 className="mt-5 text-[24px] font-bold text-foreground">
              {news?.[0]?.title}
            </h1>

            <p className="mt-3 text-xs">{news?.[0]?.summary}</p>
          </article>

          <aside className="flex h-full flex-col">
            {news?.slice(1, 4)?.map((n) => (
              <Link
                key={n.id}
                href={`/${n.id}`}
                className="flex flex-1 items-start gap-4 border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0"
              >
                <Image
                  src={n.image}
                  alt={n.title}
                  width={300}
                  height={500}
                  className="h-full w-26 shrink-0 border border-border object-cover"
                />

                <h3 className="text-foreground">{n.title}</h3>
              </Link>
            ))}
          </aside>
        </section>

        <hr className="my-7 border-border" />

        {/* Bottom Section */}
        <section className="grid gap-10 md:grid-cols-2">
          {news?.slice(4, 6)?.map((n) => (
            <Link
              key={n.id}
              href={`/${n.id}`}
              className="grid grid-cols-[1fr_1.2fr] gap-5 border-border border-r-0 md:border-r last:border-0 pr-5"
            >
              <Image
                src={n.image}
                alt={n.title}
                width={300}
                height={300}
                className="w-full object-cover"
              />
              <div>
                <h2 className="text-[17px] font-bold text-foreground">
                  {n.title}
                </h2>
                <p className="mt-2 text-[11px]">{n.summary}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
