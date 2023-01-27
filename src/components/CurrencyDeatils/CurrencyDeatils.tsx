import { useContext } from "react";
import { CurrencyContext } from "@/context";
import styles from "./currencyDeatils.module.scss";

export interface CurrencyDeatilsInterface {}

const CurrencyDeatils: React.FC<CurrencyDeatilsInterface> = () => {
  const {
    currencyState: { amount, from, to },
  } = useContext(CurrencyContext);

  return (
    <div className={styles.container}>
      <h2
        className={styles.title}
      >{`${amount} ${from.currency} to ${to.currency} - Convert ${from.name} to  ${to.name}`}</h2>
    </div>
  );
};

export default CurrencyDeatils;
