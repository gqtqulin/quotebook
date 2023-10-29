import axios from 'axios'

const userToken = "cae24442e08f28dd3950239a3331b158";

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








export const startSession = () => {

}

export const destroySession = () => {
  
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
    console.log('123');
    return data;
  } catch (error) {
    console.error(error);
  }
};
