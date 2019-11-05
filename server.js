const express = require("express");
const app = express();
app.use(express.static("public"));


app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/portfolio", function (request, response) {
  response.sendFile(__dirname + "/views/portfolio.html");
});

app.get("/references", function (request, response) {
  response.sendFile(__dirname + "/views/references.html");
});

app.get("/data/json", function (request, response) {
  response.sendFile(__dirname + "/public/data.json");
});
