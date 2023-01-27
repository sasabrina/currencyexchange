import { ChangeEvent } from "react";
import { CurrencyState } from "@/models";
import styles from "../form.module.scss";

export interface InputInterface {
  label: string;
  name: string;
  value: CurrencyState["amount"] | string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputInterface> = ({ name, label, value, onchange }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        pattern="^[0-9]+[0-9]*$"
        value={value || ""}
        onChange={onchange}
        className={styles.input}
      />

      <span className={styles.symbol}>$</span>
    </div>
  );
};

export default Input;
