import { useEffect, useState } from "react";

function useCurrency(currencyPairs) {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currencyPairs || currencyPairs.length === 0) {
      return;
    }

    const fetchRates = async () => {
      try {
        setLoading(true);
        setError(null);

        const groupedCurrencies = {};

        currencyPairs.forEach(({ from, to }) => {
          if (from === to) {
            return;
          }

          if (!groupedCurrencies[from]) {
            groupedCurrencies[from] = [];
          }

          if (!groupedCurrencies[from].includes(to)) {
            groupedCurrencies[from].push(to);
          }
        });

        const requests = Object.entries(
          groupedCurrencies
        ).map(async ([from, targets]) => {

          const quotes = targets.join(",");

          const response = await fetch(
            `https://api.frankfurter.dev/v2/rates?base=${from}&quotes=${quotes}`
          );

          if (!response.ok) {
            throw new Error(
              `Failed to fetch ${from} rates`
            );
          }

          const data = await response.json();

          return {
            from,
            data,
          };
        });

        const results = await Promise.all(requests);

        const formattedRates = {};

        results.forEach(({ from, data }) => {

          formattedRates[from] = {};

          data.forEach((item) => {
            formattedRates[from][item.quote] =
              item.rate;
          });

        });

        setRates(formattedRates);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();

  }, [currencyPairs]);

  return {
    rates,
    loading,
    error,
  };
}

export default useCurrency;