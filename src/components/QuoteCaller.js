import { getFavDayQuote } from "../api";
import styles from "./QuoteCaller.module.css";
import { getUserToken } from "../api";

const QuoteCaller = ({ setQuoteAuthor, setQuoteText }) => {
  const start = async () => {
    const favDayQuote = await getFavDayQuote();
    setQuoteAuthor(favDayQuote.author);
    setQuoteText(favDayQuote.body);
  };

  return (
    <div className={styles.caller}>
      <input type="text" placeholder="Author name"></input>
      <input type="number" value="1"></input>
      <button className={styles.button} onClick={start}>start</button>
    </div>
  );
};

export default QuoteCaller;