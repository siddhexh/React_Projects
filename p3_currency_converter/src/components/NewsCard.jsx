function NewsCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-stone-300 py-4 transition last:border-b-0 dark:border-zinc-800"
    >

      <div className="flex items-start gap-3">

        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-400" />

        <p className="text-sm leading-6 text-zinc-700 transition group-hover:text-amber-700 dark:text-zinc-300 dark:group-hover:text-amber-400">
          {article.title}
        </p>

      </div>

    </a>
  );
}

export default NewsCard;