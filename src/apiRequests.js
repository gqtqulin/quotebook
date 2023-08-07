export const requestFavDayQuote = async () => {
  try {
    const response = await fetch("https://favqs.com/api/qotd");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
