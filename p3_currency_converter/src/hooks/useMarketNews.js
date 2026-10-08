import { useEffect, useState } from "react";

function useMarketNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchNews = async () => {

      try {

        setLoading(true);
        setError(null);

        const apiKey =
          import.meta.env.VITE_NEWS_API_KEY;

        if (!apiKey) {
          throw new Error(
            "News API key is missing."
          );
        }

        const query = encodeURIComponent(
          "currency OR forex OR foreign exchange OR exchange rates"
        );

        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=10`,
          {
            headers: {
              "X-Api-Key": apiKey,
            },
          }
        );

        const data = await response.json();

        if (!response.ok || data.status !== "ok") {
          throw new Error(
            data.message || "Failed to fetch market news."
          );
        }

        /*
          Remove articles that don't have
          a usable title or URL.
        */
        const validArticles = data.articles.filter(
          (article) =>
            article.title &&
            article.url &&
            article.title !== "[Removed]"
        );

        setNews(validArticles);

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }
    };

    fetchNews();

  }, []);

  return {
    news,
    loading,
    error,
  };
}

export default useMarketNews;