import { Currency, Rate } from "@/models";

export const formatCurrencies = (currencies: any) => {
  return Object.keys(currencies).map((curr) => ({
    ...currencies[curr],
    currency: curr,
  }));
};

export const formatRates = (rates: any) => {
  return {
    ...rates,
    rates: Object.keys(rates?.rates).map((item) => ({
      currency: item,
      rate: rates?.rates[item],
    })),
  };
};

export const findCurrency = (arg: string, currencies: Currency[]) =>
  currencies.find((curr) => curr.currency === arg);

export const findRate = (arg: string, rates: Rate[]): Rate =>
  rates?.find((rate: Rate) => rate.currency === arg)!;

export const getDate = (date: string) => new Date(date);
