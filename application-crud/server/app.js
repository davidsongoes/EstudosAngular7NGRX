const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const department_controller = require("./department_controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/http-client", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("MongoDB Conectado");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/departments", department_controller);
// app.use("/products", product_controller);

app.listen(3000, () => console.log("Server ativo na porta 3000"));
