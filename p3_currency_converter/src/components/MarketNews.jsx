import NewsCard from "./NewsCard";

function MarketNews({
  news,
  loading,
  error,
}) {
  return (
    <div>

      {loading && (
        <div className="space-y-1">

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="border-b border-stone-200 py-4 dark:border-zinc-800"
            >
              <div className="h-4 w-full animate-pulse rounded bg-stone-200 dark:bg-zinc-800" />
            </div>
          ))}

        </div>
      )}


      {error && (
        <p className="py-4 text-sm text-red-500">
          {error}
        </p>
      )}


      {!loading && !error && news.length === 0 && (
        <p className="py-4 text-sm text-zinc-500">
          No market news available.
        </p>
      )}


      {!loading &&
        !error &&
        news.map((article, index) => (
          <NewsCard
            key={article.url || index}
            article={article}
          />
        ))}

    </div>
  );
}

export default MarketNews;