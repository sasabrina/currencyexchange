import { ChangeEvent, FormEvent, useContext } from "react";
import { CurrencyContext } from "@/context";
import { Input } from "./Input";
import { Select } from "./Select";
import styles from "./form.module.scss";
import button from "@/assets/Button.svg";

export interface FormInterface {}

const Form: React.FC<FormInterface> = () => {
  const {
    currencyState,
    handleAmountChange,
    handleFromCurrency,
    handleToCurrency,
  } = useContext(CurrencyContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = Number(e.target.value);
    handleAmountChange(value > 0 ? value : 0);
  };

  const handleSelectFrom = (e: ChangeEvent<HTMLSelectElement>) => {
    handleFromCurrency(e.target.value);
  };

  const handleSelectTo = (e: ChangeEvent<HTMLSelectElement>) => {
    handleToCurrency(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Amount"
          name="amount"
          value={currencyState.amount || 0}
          onchange={handleInputChange}
        />

        <Select
          label="From"
          name="from"
          value={currencyState.from.currency}
          onchange={handleSelectFrom}
        />

        <figure className={styles.imgComtainer}>
          <img src={button} alt="" />
        </figure>

        <Select
          label="To"
          name="from"
          value={currencyState.to.currency}
          onchange={handleSelectTo}
        />
      </form>
    </>
  );
};

export default Form;
