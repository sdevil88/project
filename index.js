const express = require("express");

const indexRouter = require("./routes");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.set("views", "./views");

app.use("/", indexRouter);

const port = 8080;

app.listen(port);

console.log("server is running on port ", port);
console.log("\ndownload ngrok from : https://ngrok.com/\n");
console.log(
  "install ngrok and stablish connection \n\n example: ngrok http 8080 "
);
