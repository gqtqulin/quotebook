import { useState } from "react";
import { getFavDayQuote, getSpecificQuotes } from "../api";
import styles from "./QuoteCaller.module.css";
import { getUserToken } from "../api";

const QuoteCaller = ({ setQuoteAuthor, setQuoteText }) => {
  const [selectState, setSelectState] = useState();

  const handlerChangeSelect = (e) => {
    setSelectState(e.target.value);
  };

  const start = async () => {
    let response;

    // eslint-disable-next-line default-case
    switch (selectState) {
      case "favourite":
        response = await getFavDayQuote();
        break;
      case "specific":
        response = await getSpecificQuotes();
        break;
    }

    setQuoteAuthor(response.author);
    setQuoteText(response.body);
  };

  return (
    <div className={styles.caller}>
      <select onChange={handlerChangeSelect}>
        <option value="favourite">Favourite day quote</option>
        <option value="specific">Specific quote</option>
      </select>

      {selectState === "specific" ? (
        <div className={styles.options}>
          <input type="text" placeholder="author name"></input>
          <input type="number" placeholder="# of pages"></input>
          <input type="text" placeholder="tags"></input>
        </div>
      ) : null}

      <div className={styles.button}>
        <button onClick={start}>start</button>
      </div>
    </div>
  );
};

export default QuoteCaller;
