import axios from 'axios'

export const getFavDayQuote = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/favquote');
    
    return {
      author: response.data.quote.author,
      body: response.data.quote.body
    };
  } catch (error) {
    console.error(error);
  }
};

export const getUserToken = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/session');

    return response.data['User-Token'];
  } catch (e) {
    console.error(e);
  }
}

export const getSpecificQuotes = async () => {

}

export const destroySession = async () => {
  try {
    const response = await axios.delete('http://localhost:3001/api/session');

    return response.data;
  } catch (e) {
    console.error(e);
  }
}



export const requestSpecificAuthorQuote = async (name) => {
  //if (!name) throw new Error("name input is empty");
  //const authorNameForResponse = name.replaceAll(" ", "+");
  try {
    const response = await fetch(
      `https://favqs.com/api/quotes/?filter=Aristotle&type=author`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Authorization': 'Token token="cae24442e08f28dd3950239a3331b158"',
        }
      }
    );
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
