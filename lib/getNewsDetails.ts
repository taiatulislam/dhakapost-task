type NewsItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  source: string;
  author: string;
  category: string;
  published_at: string;
  read_time: string;
  content: string;
  tags: string[];
  original_url: string;
};

interface NewsDetailsResponse {
  status: boolean;
  article: NewsItem;
}

export async function getNewsDetails(id: string): Promise<NewsDetailsResponse> {
  const res = await fetch(`https://news-json.vercel.app/details/${id}.json`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news details");
  }

  return res.json();
}
