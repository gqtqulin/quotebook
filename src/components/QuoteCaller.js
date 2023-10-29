import { getFavDayQuote } from "../apiRequests";

const QuoteCaller = ({ setQuoteAuthor, setQuoteText }) => {
  const start = async () => {
    const favDayQuote = await getFavDayQuote();
    setQuoteAuthor(favDayQuote.author);
    setQuoteText(favDayQuote.body);
  };

  return (
    <div>
      <input type="text" value=""></input>
      <button onClick={start}>start</button>
    </div>
  );
};

export default QuoteCaller;