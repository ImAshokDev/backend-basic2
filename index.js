const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HELLOW WORLD");
});

app.listen(port, () => console.log("APP LISTENING AT " + port));
