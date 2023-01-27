import { CurrencyState, Rate } from "@/models";

type CurrencyAction =
  | { type: "changeAmount"; payload: CurrencyState["amount"] }
  | { type: "changeFrom"; payload: CurrencyState["from"] }
  | { type: "changeTo"; payload: CurrencyState["to"] }
  | { type: "getTotal"; payload: Rate["rate"] };

export const currencyReducer = (
  state: CurrencyState,
  action: CurrencyAction
): CurrencyState => {
  switch (action.type) {
    case "changeAmount":
      return { ...state, amount: action.payload };

    case "changeFrom":
      return { ...state, from: action.payload };

    case "changeTo":
      return { ...state, to: action.payload };

    case "getTotal":
      return { ...state, total: action.payload };
  }
};
