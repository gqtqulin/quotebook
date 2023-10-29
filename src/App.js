import { useEffect, useState } from "react";
import styles from "./App.module.css";
import QuoteCaller from "./components/QuoteCaller";
import QuoteContent from "./components/QuoteContent";
import { getUserToken } from "./api";

//g4taul1n@gmail.com
//eb0a08a7e73d65b0fc8
//cae24442e08f28dd3950239a3331b158
//https://favqs.com/api/qotd - цитата дня

function App() {
  const [quoteText, setQuoteText] = useState();
  const [quoteAuthor, setQuoteAuthor] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    const start = async () => {
      console.log(await getUserToken());
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
