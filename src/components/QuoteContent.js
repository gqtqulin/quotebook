
const QuoteContent = ({ quoteAuthor, quoteText }) => {
  return (
    <div>
      <h2>{quoteAuthor}</h2>
      <p>{quoteText}</p>
    </div>
  );
};

export default QuoteContent;