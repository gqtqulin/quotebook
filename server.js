const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;

const cors = require("cors");
app.use(cors(), express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/api", (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
