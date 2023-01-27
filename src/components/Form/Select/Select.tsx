import { Currency } from "@/models";
import { ChangeEvent, useContext } from "react";
import { CurrencyContext } from "@/context";
import styles from "../form.module.scss";

export interface SelectInterface {
  label: string;
  name: string;
  value: string;
  onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectInterface> = ({
  label,
  name,
  value,
  onchange,
}) => {
  const { currencies } = useContext(CurrencyContext);

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value || ""}
        onChange={onchange}
        className={styles.select}
      >
        {currencies.map((item: Currency) => (
          <option key={item.currency} value={item.currency}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
