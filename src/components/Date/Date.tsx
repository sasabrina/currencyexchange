import { useContext } from "react";
import { CurrencyContext } from "@/context";
import { getDate } from "@/helpers";
import styles from "./date.module.scss";

export interface DateInterface {}

const Date: React.FC<DateInterface> = () => {
  const {
    currencyState: { to, from },
    rates,
  } = useContext(CurrencyContext);

  const date = getDate(rates.date).toLocaleDateString("en-EN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
    timeZoneName: "short",
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.container}>
      <p>{`${from.name} to ${to.name} conversion — Last updated ${date}`}</p>
    </div>
  );
};

export default Date;
