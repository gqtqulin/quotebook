
import styles from './QuoteContent.module.css';

const QuoteContent = ({ quoteAuthor, quoteText }) => {
  return (
    <div class={styles.content}>
      <h2>{quoteAuthor}</h2>
      <p>{quoteText}</p>
    </div>
  );
};

export default QuoteContent;