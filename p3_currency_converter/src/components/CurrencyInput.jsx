function CurrencyInput({ amount, setAmount }) {
  return (
    <div>

      <label className="mb-2 block text-sm text-zinc-500">
        Amount
      </label>

      <input
        type="number"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full rounded-xl border border-stone-300 bg-stone-200 px-4 py-3 text-zinc-900 outline-none transition focus:border-amber-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-400"
      />

    </div>
  );
}

export default CurrencyInput;