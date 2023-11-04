import { useState } from "react";
import { getFavDayQuote, getSpecificQuotes } from "../api";
import styles from "./QuoteCaller.module.css";
import { getUserToken } from "../api";

const QuoteCaller = ({ setQuoteContent }) => {
  const [selectState, setSelectState] = useState();
  const [authorName, setAuthorName] = useState();
  const [numberOfPages, setNumberOfPages] = useState();
  const [tags, setTags] = useState();
  const [filterWord, setFilterWord] = useState();

  const handlerChangeSelect = (e) => setSelectState(e.target.value);

  const handlerChangeAuthorName = (e) => setAuthorName(e.target.value);
  const handlerChangeNumberOfPages = (e) => setNumberOfPages(e.target.value);
  const handlerChangeTags = (e) => setTags(e.target.value);
  const handlerChangeFilterWord = (e) => setFilterWord(e.target.value);

  const start = async () => {
    let response;

    // eslint-disable-next-line default-case
    switch (selectState) {
      case "favourite":
        console.log('fav q start')
        response = await getFavDayQuote();
        break;
      case "specific":
        response = await getSpecificQuotes({
          authorName: {authorName},
          numberOfPages: {numberOfPages},
          tags: {tags},
          filterWord: {filterWord},
        });
        break;
    }

    setQuoteContent(response);
  };

  return (
    <div className={styles.caller}>
      <select onChange={handlerChangeSelect}>
        <option>Select</option>
        <option value="favourite">Favourite day quote</option>
        <option value="specific">Specific quote</option>
      </select>

      {selectState === "specific" ? (
        <div className={styles.options}>
          <input type="text" placeholder="author name" value={authorName} onChange={handlerChangeAuthorName}></input>
          <input type="number" placeholder="# of pages" value={numberOfPages} onChange={handlerChangeNumberOfPages}></input>
          <input type="text" placeholder="tags" value={tags} onChange={handlerChangeTags}></input>
          <input type="text" placeholder="filter word" value={filterWord} onChange={handlerChangeFilterWord}></input>
        </div>
      ) : null}

      <div className={styles.button}>
        <button onClick={start}>start</button>
      </div>
    </div>
  );
};

export default QuoteCaller;
