import { useEffect, useState } from "react";
import styles from "./App.module.css";
import QuoteCaller from "./components/QuoteCaller";
import QuoteContent from "./components/QuoteContent";
import { getUserToken } from "./api";

const App = () => {
  // массив обектов Quote
  const [quoteContent, setQuoteContent] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    const start = async () => {
      setUserToken(await getUserToken());
    }
    
    start();
  }, []);

  return (
    <div className={styles.page}>
      <QuoteCaller className={styles.caller} setQuoteContent={setQuoteContent} />
      <QuoteContent className={styles.content} quoteContent={quoteContent} />
    </div>
  );
}

export default App;
