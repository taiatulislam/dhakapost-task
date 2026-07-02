import getNewsList from "@/lib/getNewsList";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const newsList = await getNewsList();
  const news = newsList.news;

  return (
    <div className="bg-background">
      <main className="mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-10">
        <section className="grid gap-5 lg:grid-cols-3">
          <Link
            href={`/${news?.[0]?.id}`}
            className="group block h-full lg:col-span-2"
          >
            <article className="flex h-full flex-col border-r-0 border-border pr-0 md:border-r md:pr-5">
              <div className="overflow-hidden">
                <Image
                  src={news?.[0]?.image}
                  alt={news?.[0]?.title}
                  width={500}
                  height={200}
                  loading="eager"
                  className="h-87.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-5 text-[24px] font-bold text-foreground group-hover:text-hoverColor">
                {news?.[0]?.title}
              </h2>

              <p className="mt-3 text-xs">{news?.[0]?.summary}</p>
            </article>
          </Link>

          <aside className="flex h-full flex-col">
            {news?.slice(1, 4)?.map((n) => (
              <Link
                key={n.id}
                href={`/${n.id}`}
                className="group flex flex-1 items-start gap-4 border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div className="h-full w-26 shrink-0 overflow-hidden border border-border">
                  <Image
                    src={n.image}
                    alt={n.title}
                    width={300}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-foreground group-hover:text-hoverColor">
                  {n.title}
                </h3>
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
              className="group grid grid-cols-[1fr_1.2fr] gap-5 border-border border-r-0 md:border-r last:border-0 pr-5"
            >
              <div className="h-full shrink-0 overflow-hidden border border-border">
                <Image
                  src={n.image}
                  alt={n.title}
                  width={300}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-[17px] font-bold text-foreground group-hover:text-hoverColor">
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
