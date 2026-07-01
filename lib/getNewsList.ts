type NewsItem = {
  id: string;
  title: string;
  summary: string;
  image: string;
  source: string;
  category: string;
  published_at: string;
  details_url: string;
};

interface NewsResponse {
  status: boolean;
  updated_at: string;
  total: number;
  news: NewsItem[];
}

export default async function getNewsList(): Promise<NewsResponse> {
  const res = await fetch("https://news-json.vercel.app/home.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news list");
  }

  return res.json();
}
