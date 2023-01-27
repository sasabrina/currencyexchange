import { useContext, Suspense } from "react";
import { CurrencyContext } from "@/context";
import { findRate } from "@/helpers";
import styles from "./currencyExchange.module.scss";

export interface CurrencyExchangeInterface {}

const CurrencyExchange: React.FC<CurrencyExchangeInterface> = () => {
  const {
    currencyState: { to, total, amount },
    rates: { base, rates },
  } = useContext(CurrencyContext);

  const fromCurr = findRate(base, rates);
  const toCurr = findRate(to.currency, rates);

  return (
    <div>
      {fromCurr && toCurr && (
        <>
          <h3 className={styles.title}>
            <span>{`${amount} ${fromCurr.currency} =`}</span>{" "}
            <span>{`${total} ${toCurr.currency}`}</span>
          </h3>

          <p className={styles.rates}>
            <span>{`${fromCurr.rate} ${fromCurr.currency} =`}</span>{" "}
            <span>{`${toCurr.rate} ${toCurr.currency}`}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default CurrencyExchange;
