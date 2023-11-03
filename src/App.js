import { useEffect, useState } from "react";
import styles from "./App.module.css";
import QuoteCaller from "./components/QuoteCaller";
import QuoteContent from "./components/QuoteContent";
import { getUserToken } from "./api";

const App = () => {
  const [quoteText, setQuoteText] = useState();
  const [quoteAuthor, setQuoteAuthor] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    const start = async () => {
      setUserToken(await getUserToken());
    }
    
    start();
  }, []);

  return (
    <div className={styles.page}>
      <QuoteCaller setQuoteAuthor={setQuoteAuthor} setQuoteText={setQuoteText} />
      <QuoteContent quoteAuthor={quoteAuthor} quoteText={quoteText} />
    </div>
  );
}

export default App;
