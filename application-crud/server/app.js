const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

mongoose.connect("mongodb://localhost:27017/http_app", {
  useNewUrlParser: true,
});

app.use("/departments", departament_controller);
app.use("/products", product_controller);

app.listen(3000);
