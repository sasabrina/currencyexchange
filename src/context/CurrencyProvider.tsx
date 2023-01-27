import { useState, useEffect, useReducer } from "react";
import { fetchCurrency } from "@/api/apiCurrency";
import { CurrencyState, Rate, Rates, Currency } from "@/models";
import { findCurrency, formatCurrencies, formatRates } from "@/helpers";
import { CurrencyContext } from "./CurrencyContext";
import { currencyReducer } from "./currencyReducer";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: CurrencyState = {
  amount: 1.0,
  from: {
    currency: "USD",
    name: "US Dollars",
    symbol: "$",
  },
  to: {
    currency: "EUR",
    name: "Euros",
    symbol: "",
  },
  total: 0,
};

export const CurrencyProvider = ({ children }: props) => {
  const [rates, setRates] = useState<Rates>({} as Rates);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [currencyState, dispatch] = useReducer(currencyReducer, INITIAL_STATE);

  const getCurrencyData = async (currency?: string) => {
    try {
      if (!currency) {
        const [rates, currencies] = await Promise.all([
          fetchCurrency("rates?base=USD"),
          fetchCurrency("currencies"),
        ]);

        setRates(formatRates(rates));
        setCurrencies(formatCurrencies(currencies));
        calculateTotal(formatRates(rates).rates);
      } else {
        await fetchCurrency(`rates?base=${currency}`).then((res) => {
          setRates(formatRates(res));
          calculateTotal(formatRates(res).rates);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmountChange = (amount: CurrencyState["amount"]) => {
    dispatch({ type: "changeAmount", payload: amount });
  };

  const handleFromCurrency = (arg: string) => {
    const currency: CurrencyState["from"] = findCurrency(arg, currencies)!;
    getCurrencyData(currency?.currency);
    dispatch({ type: "changeFrom", payload: { ...currency } });
  };

  const handleToCurrency = (arg: string) => {
    const currency: CurrencyState["to"] = findCurrency(arg, currencies)!;
    dispatch({ type: "changeTo", payload: currency });
  };

  const calculateTotal = (rates: Rate[]) => {
    if (rates) {
      const toCurr = rates.filter(
        (rate) => rate.currency === currencyState.to.currency
      )[0]?.rate;

      dispatch({ type: "getTotal", payload: currencyState.amount * toCurr });
    }
  };

  useEffect(() => {
    getCurrencyData();
  }, []);

  useEffect(() => {
    calculateTotal(rates.rates);
  }, [currencyState.amount, currencyState.to]);

  return (
    <CurrencyContext.Provider
      value={{
        rates,
        currencies,
        currencyState,
        handleAmountChange,
        handleFromCurrency,
        handleToCurrency,
        calculateTotal,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
