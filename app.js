const express = require("express"),
  app = express();

app.use(express.static(__dirname + "/build"));

app.get("/todos", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: { todos: [{ name: "walk dog" }] } });
});

app.listen(3000);
