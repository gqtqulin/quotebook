import { useState } from 'react';
import { getFavDayQuote } from "../api";
import styles from "./QuoteCaller.module.css";
import { getUserToken } from "../api";

const QuoteCaller = ({ setQuoteAuthor, setQuoteText }) => {
  const [isSpecificQuote, setSpecificQuote] = useState(false);

  const handlerChangeSelect = (e) => {
    e.target.value === "specific" ? setSpecificQuote(true) : setSpecificQuote(false);
  }

  const start = async () => {
    const favDayQuote = await getFavDayQuote();
    setQuoteAuthor(favDayQuote.author);
    setQuoteText(favDayQuote.body);
  };

  return (
    <div className={styles.caller}>
      <select onChange={handlerChangeSelect}>
        <option value="favourite">Favourite day quote</option>
        <option value="specific">Specific quote</option>
      </select>

      {isSpecificQuote ? (<div className={styles.options}>
        <input type="text" placeholder="author name"></input>
        <input type="number" placeholder="# of pages"></input>
        <input type="text" placeholder="tags"></input>
      </div>) : null}

      <div className={styles.button}>
        <button onClick={start}>start</button>
      </div>
    </div>
  );
};

export default QuoteCaller;
