import { getFavDayQuote } from "../apiRequests";
import styles from "./QuoteCaller.module.css";

const QuoteCaller = ({ setQuoteAuthor, setQuoteText }) => {
  const start = async () => {
    const favDayQuote = await getFavDayQuote();
    setQuoteAuthor(favDayQuote.author);
    setQuoteText(favDayQuote.body);
  };

  return (
    <div className={styles.caller}>
      <input type="text" value=""></input>
      <button className={styles.button} onClick={start}>start</button>
    </div>
  );
};

export default QuoteCaller;