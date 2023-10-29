const express = require("express");
const axios = require("axios");

const userToken = "cae24442e08f28dd3950239a3331b158";
const email = "g4taul1n@gmail.com";
const password = "eb0a08a7e73d65b0fc8";

const app = express();
const port = 3001;

const cors = require("cors");
app.use(cors(), express.json());

app.get("/", (req, res) => {
  res.send("is alive");
});

app.get("/api/favquote", (req, res) => {
  const apiUrl = "https://favqs.com/api/qotd";

  axios
    .get(apiUrl)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      // Обработка ошибки, если запрос к внешнему API не удался
      console.error("Ошибка при запросе к внешнему API:", error);
      res
        .status(500)
        .json({ error: "Не удалось получить данные из внешнего API" });
    });
});

app.get("/api/session", (req, res) => {
  const apiUrl = "https://favqs.com/api/session";

  const options = {
    method: 'POST',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token="${userToken}"`,
    },
    data: { 
      "user": {
        "login": email,
        "password": password
      }
    },
  };

  axios(options)
  .then((response) => {
    res.json(response.data);
  })
  .catch((error) => {
    console.error("Ошибка при запросе к внешнему API:", error);
    res
      .status(500)
      .json({ error: "Не удалось получить данные из внешнего API" });
  });
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
