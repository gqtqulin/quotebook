import { useState } from "react";
import styles from "./QuoteContent.module.css";

const QuoteContent = ({ quoteContent }) => {
  if (quoteContent) {
    const jsxQuoteList = quoteContent.map((quote) => {
      return (
        <div class={styles.quote}>
          <h2>{quote.author}</h2>
          <p>{quote.quote}</p>
        </div>
      );
    });

    return <div className={styles.content}>{jsxQuoteList}</div>;
  }
};

export default QuoteContent;
