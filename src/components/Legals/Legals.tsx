import styles from "./legals.module.scss";

export interface LegalsInterface {}

const Legals: React.FC<LegalsInterface> = () => {
  return (
    <div className={styles.container}>
      <p>
        We use the mid-market rate for our Converter. This is for informational
        purposes only. You won't receive this rate when sending money.
      </p>
    </div>
  );
};

export default Legals;
