var mongoose = require("mongoose");
var faker = require("faker");
var ProductModel = require("../models/ProductModel");

mongoose.connect("mongodb://172.17.0.2:27017/auth_test", {
  useNewUrlParser: true,
});

async function add(numberOfRecords) {
  try {
    for (let i = 0; i < numberOfRecords; i++) {
      const product = new ProductModel();
      product.name = faker.commerce.productName();
      product.department = faker.commerce.department();
      product.price = faker.commerce.price();
      await product.save();
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}

add(100).then(() => {
  console.log("Products createds with success!");
  mongoose.disconnect();
});
