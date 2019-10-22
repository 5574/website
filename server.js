const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/portfolio", function(request, response) {
  response.sendFile(__dirname + "/views/portfolio.html");
});

app.get("/references", function(request, response) {
  response.sendFile(__dirname + "/views/references.html");
});

//send the pippin page upon read more request or HTTP GET
app.get("/article/pippin", function(request, response) {
  response.sendFile(__dirname + "/views/pippin-page.html");
});


const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
