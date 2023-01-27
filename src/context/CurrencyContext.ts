import { CurrencyState, Rate } from "@/models";
import { createContext } from "react";

type CurrencyContextProps = {
  rates: any;
  currencies: any;
  currencyState: CurrencyState;
  handleAmountChange: (amount: CurrencyState["amount"]) => void;
  handleFromCurrency: (arg: string) => void;
  handleToCurrency: (arg: string) => void;
  calculateTotal: (rates: Rate[]) => void;
};

export const CurrencyContext = createContext<CurrencyContextProps>(
  {} as CurrencyContextProps
);
