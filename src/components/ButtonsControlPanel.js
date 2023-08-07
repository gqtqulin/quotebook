import Button from "@mui/material/Button";
import { requestFavDayQuote } from "../apiRequests";

const ButtonsControlPanel = ({ setQuoteText, setQuoteAuthor }) => {

  const handlerButtonClick = async () => {
    const data = await requestFavDayQuote();
    if (data) {
      setQuoteText(data.quote.body);
      setQuoteAuthor(data.quote.author);
    } else {
      console.error("data is undefined");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handlerButtonClick}>
        response quote
      </Button>
    </div>
  );
};

export default ButtonsControlPanel;
