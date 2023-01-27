export type Currency = {
  currency: string;
  name: string;
  symbol: string;
};

export type CurrencyState = {
  amount: number;
  from: Currency;
  to: Currency;
  total: number;
};

export type Rate = {
  currency: string;
  rate: number;
};

export type Rates = {
  base: string;
  date: string;
  rates: Rate[];
};
