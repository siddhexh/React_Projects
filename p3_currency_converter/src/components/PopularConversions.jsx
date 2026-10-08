import { popularConversions } from "../constants/currencyPairs";

function PopularConversions({
  rates,
  onSelect,
  loading,
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

      {popularConversions.map(({ from, to }) => {

        const rate = rates[from]?.[to];

        return (
          <button
            key={`${from}-${to}`}
            onClick={() => onSelect(from, to)}
            className="rounded-xl border border-stone-300 bg-stone-200 p-4 text-left transition hover:border-amber-700 hover:bg-stone-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-amber-400 dark:hover:bg-zinc-900"
          >

            <p className="text-xs text-zinc-500">
              {from} → {to}
            </p>

            <p className="mt-2 text-sm font-medium">

              {loading
                ? "Updating..."
                : rate !== undefined
                  ? `1 ${from} = ${rate.toFixed(4)} ${to}`
                  : "—"}

            </p>

          </button>
        );
      })}

    </div>
  );
}

export default PopularConversions;