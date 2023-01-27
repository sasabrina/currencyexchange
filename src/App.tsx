import { useContext, Suspense } from "react";
import { CurrencyContext } from "./context";
import {
  CurrencyDeatils,
  CurrencyExchange,
  Date,
  Form,
  Header,
  Legals,
} from "./components";
import styles from "./app.module.scss";

function App() {
  return (
    <main className="App">
      <Header />

      <Suspense fallback={<p>loading...</p>}>
        <section className={styles.container}>
          <CurrencyDeatils />

          <div className={styles.currencyWrapper}>
            <Form />

            <div className={styles.detailsWrapper}>
              <CurrencyExchange />

              <div className={styles.legalsWrapper}>
                <Legals />
                <Date />
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </main>
  );
}

export default App;
