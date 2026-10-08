import { useEffect, useMemo, useState } from "react";

import aurexLogo from "./assets/logo.png";

import useCurrency from "./hooks/useCurrency";
import useMarketNews from "./hooks/useMarketNews";
import useTheme from "./hooks/useTheme";

import CurrencyInput from "./components/CurrencyInput";
import CurrencySelect from "./components/CurrencySelect";
import PopularConversions from "./components/PopularConversions";
import MarketNews from "./components/MarketNews";

import popularConversions from "./constants/currencyPairs";

function App() {
  const { theme, toggleTheme } = useTheme();

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [isSwapped, setIsSwapped] = useState(false);
  const [displayRate, setDisplayRate] = useState(null);

  const currencies = [
    "USD",
    "INR",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
  ];

  const currencyPairs = useMemo(() => {
    return [
      ...popularConversions,
      {
        from: fromCurrency,
        to: toCurrency,
      },
    ];
  }, [fromCurrency, toCurrency]);

  const {
    rates,
    loading: currencyLoading,
    error: currencyError,
  } = useCurrency(currencyPairs);

  const {
    news,
    loading: newsLoading,
    error: newsError,
  } = useMarketNews();

  const rate = rates[fromCurrency]?.[toCurrency];

  useEffect(() => {
    if (rate !== undefined) {
      setDisplayRate(rate);
    }
  }, [rate]);

  const convertedAmount =
    displayRate !== null
      ? Number(amount) * displayRate
      : null;

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setIsSwapped((previous) => !previous);
  };

  const handlePopularConversion = (from, to) => {
    setFromCurrency(from);
    setToCurrency(to);
  };

  return (
    <div className="min-h-screen bg-stone-200 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">

      <div className="flex min-h-screen">

        {/* SIDEBAR */}

        <aside className="hidden w-64 shrink-0 flex-col border-r border-stone-300 bg-stone-200 dark:border-zinc-800 dark:bg-zinc-950 lg:flex">

          {/* LOGO */}

          <div className="flex h-24 items-center border-b border-stone-300 px-7 dark:border-zinc-800">

            <img
              src={aurexLogo}
              alt="AUREX"
              className="h-auto w-36 object-contain"
            />

          </div>

          {/* NAVIGATION */}

          <div className="flex-1 px-4 py-8">

            <p className="mb-3 px-3 text-xs uppercase tracking-widest text-zinc-500">
              General
            </p>

            <nav className="space-y-1">

              <button className="w-full rounded-xl bg-stone-50 px-4 py-3 text-left text-sm text-zinc-900 transition dark:bg-zinc-900 dark:text-white">
                Overview
              </button>

              <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-500 transition hover:bg-stone-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                Converter
              </button>

              <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-500 transition hover:bg-stone-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                Market News
              </button>

            </nav>

            <p className="mb-3 mt-9 px-3 text-xs uppercase tracking-widest text-zinc-500">
              Tools
            </p>

            <nav className="space-y-1">

              <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-500 transition hover:bg-stone-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                Currency Pairs
              </button>

              <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-500 transition hover:bg-stone-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                Market Trends
              </button>

            </nav>

            <p className="mb-3 mt-9 px-3 text-xs uppercase tracking-widest text-zinc-500">
              Others
            </p>

            <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-500 transition hover:bg-stone-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
              Settings
            </button>

            {/* MARKET STATUS */}

            <div className="mt-10 rounded-xl border border-stone-300 bg-stone-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">

              <div className="flex items-center justify-between">

                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Market Status
                </p>

                <span className="h-2 w-2 rounded-full bg-green-500" />

              </div>

              <div className="mt-3">

                <p className="text-sm font-medium">
                  Markets Active
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Exchange rates are available
                </p>

              </div>

            </div>

          </div>

        </aside>

        {/* MAIN CONTENT */}

        <main className="min-w-0 flex-1">

          {/* TOP BAR */}

          <header className="flex h-24 items-center justify-between border-b border-stone-300 px-6 dark:border-zinc-800 lg:px-10">

            <div>

              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Financial Dashboard
              </p>

              <h1 className="mt-1 text-2xl font-medium">
                Overview
              </h1>

            </div>

            <div className="flex items-center gap-3">

              {/* SEARCH */}

              <div className="hidden h-10 w-64 items-center rounded-xl border border-stone-300 bg-stone-50 px-4 text-sm text-zinc-400 md:flex dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
                Search markets...
              </div>

              {/* THEME TOGGLE */}

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300 bg-stone-50 text-zinc-700 transition hover:bg-stone-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-amber-400 dark:hover:bg-zinc-800"
              >
                <span className="text-lg">
                  {theme === "dark" ? "☀" : "☾"}
                </span>
              </button>

            </div>

          </header>

          {/* DASHBOARD CONTENT */}

          <div className="mx-auto max-w-7xl p-6 lg:p-10">

            {/* MARKET CARDS */}

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

              {popularConversions
                .slice(0, 3)
                .map(({ from, to }) => {

                  const pairRate = rates[from]?.[to];

                  return (
                    <div
                      key={`${from}-${to}`}
                      className="rounded-2xl border border-stone-300 bg-stone-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                    >

                      <p className="text-sm text-zinc-500">
                        {from} / {to}
                      </p>

                      <div className="mt-5 flex items-end justify-between">

                        <p className="text-3xl font-light">
                          {pairRate
                            ? pairRate.toFixed(4)
                            : "—"}
                        </p>

                        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
                          Live
                        </span>

                      </div>

                    </div>
                  );
                })}

            </div>

            {/* MAIN GRID */}

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">

              {/* CONVERTER */}

              <section className="rounded-2xl border border-stone-300 bg-stone-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:p-8 xl:col-span-3">

                <div className="mb-8 flex items-start justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Currency Exchange
                    </p>

                    <h2 className="mt-2 text-2xl font-medium">
                      Currency Converter
                    </h2>

                  </div>

                  <span className="rounded-lg bg-amber-100 px-3 py-1.5 text-xs text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
                    Live rates
                  </span>

                </div>

                <CurrencyInput
                  amount={amount}
                  setAmount={setAmount}
                />

                {/* CURRENCY SELECTORS */}

                <div className="mt-6 flex items-end gap-3">

                  <div className="min-w-0 flex-1">

                    <CurrencySelect
                      label="From"
                      currency={fromCurrency}
                      setCurrency={setFromCurrency}
                      currencies={currencies}
                    />

                  </div>

                  {/* SWAP */}

                  <button
                    onClick={swapCurrencies}
                    aria-label="Swap currencies"
                    className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-700 text-amber-700 transition hover:bg-amber-100 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10"
                  >

                    <span
                      className={`text-xl transition-transform duration-300 ${
                        isSwapped ? "rotate-180" : ""
                      }`}
                    >
                      ⇄
                    </span>

                  </button>

                  <div className="min-w-0 flex-1">

                    <CurrencySelect
                      label="To"
                      currency={toCurrency}
                      setCurrency={setToCurrency}
                      currencies={currencies}
                    />

                  </div>

                </div>

                {/* RESULT */}

                <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-200 p-6 dark:border-zinc-800 dark:bg-zinc-950">

                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Converted Amount
                  </p>

                  <div className="mt-4 flex items-end justify-between">

                    <div>

                      <h3 className="text-4xl font-light lg:text-5xl">

                        {convertedAmount !== null
                          ? convertedAmount.toFixed(2)
                          : "—"}

                        <span className="ml-2 text-lg text-zinc-500">
                          {toCurrency}
                        </span>

                      </h3>

                      <p className="mt-3 text-sm text-zinc-500">
                        1 {fromCurrency} ={" "}
                        {displayRate !== null
                          ? displayRate.toFixed(4)
                          : "—"}{" "}
                        {toCurrency}
                      </p>

                    </div>

                    {currencyLoading && (
                      <span className="text-xs text-zinc-500">
                        Updating
                      </span>
                    )}

                  </div>

                </div>

                {/* ERROR */}

                {currencyError && (
                  <p className="mt-3 text-sm text-red-500">
                    {currencyError}
                  </p>
                )}

                {/* POPULAR CONVERSIONS */}

                <div className="mt-8">

                  <div className="mb-4 flex items-center justify-between">

                    <h3 className="text-sm font-medium">
                      Popular Conversions
                    </h3>

                    <span className="text-xs text-zinc-500">
                      Quick select
                    </span>

                  </div>

                  <PopularConversions
                    rates={rates}
                    loading={currencyLoading}
                    onSelect={handlePopularConversion}
                  />

                </div>

              </section>

              {/* MARKET NEWS */}

              <section className="rounded-2xl border border-stone-300 bg-stone-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:p-8 xl:col-span-2">

                <div className="mb-6 flex items-start justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Market Intelligence
                    </p>

                    <h2 className="mt-2 text-2xl font-medium">
                      Currency News
                    </h2>

                  </div>

                  <span className="rounded-lg bg-stone-200 px-3 py-1.5 text-xs text-zinc-500 dark:bg-zinc-800">
                    Latest
                  </span>

                </div>

                <div className="max-h-96 overflow-y-auto">

                  <MarketNews
                    news={news}
                    loading={newsLoading}
                    error={newsError}
                  />

                </div>

              </section>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;