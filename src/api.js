import axios from "axios";

export const getFavDayQuote = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/favquote");

    return [{
      author: response.data.quote.author,
      quote: response.data.quote.body,
    }];
  } catch (error) {
    console.error(error);
  }
};

export const getUserToken = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/session");

    return response.data["User-Token"];
  } catch (e) {
    console.error(e);
  }
};

export const getSpecificQuotes = async (paramsObject) => {
  try {
    let params = "";
    const keys = Object.keys(paramsObject);
    const values = Object.values(paramsObject);
    
    values.forEach((value, i) => {
      if (value) params += `${keys[i]}=${value}&`;
    })

    const response = await axios.get("http://localhost:3001/api/quotes/?" + params);

    const quotesList = [];

    response.quotes.forEach((quoteData) => {
      quotesList.push({
        author: quoteData.author,
        quote: quoteData.body,
      })
    });

    return quotesList;
  } catch (e) {
    console.error(e);
  }
};

export const destroySession = async () => {
  try {
    const response = await axios.delete("http://localhost:3001/api/session");

    return response.data;
  } catch (e) {
    console.error(e);
  }
};