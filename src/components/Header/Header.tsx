import styles from "./header.module.scss";
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Currency exchange</h1>
    </header>
  );
};

export default Header;
