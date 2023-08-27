const express = require("express");

const indexRouter = require("./routes");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.set("views", "./views");

app.use("/", indexRouter);

const port = 8080;

app.listen(port);

console.log("install ngrok from :https://ngrok.com/ \n run it in port ", port);

console.log("Example:  ngrok http 8080");

console.log(" ready for attack ");
