import { useEffect, useState } from "react";
import { getFavDayQuote, getUserToken } from "./apiRequests";

//g4taul1n@gmail.com
//eb0a08a7e73d65b0fc8
//cae24442e08f28dd3950239a3331b158
//https://favqs.com/api/qotd - цитата дня

function App() {
  const [quoteText, setQuoteText] = useState();
  const [quoteAuthor, setQuoteAuthor] = useState();
  const [userToken, setUserToken] = useState();

  const start = async () => {
    const favDayQuote = await getFavDayQuote();
    setQuoteAuthor(favDayQuote.author);
    setQuoteText(favDayQuote.body);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h2>{quoteAuthor}</h2>
      <p>{quoteText}</p>
      <button onClick={start}>get quote</button>
    </div>
  );
}

export default App;
