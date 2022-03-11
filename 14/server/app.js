var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var api = require("./routes/api");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://172.17.0.2:27017/auth_test", {
  useNewUrlParser: true,
});

// Routes
app.use("/api", api);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});
app.listen(3000);
