var mongoose = require("mongoose");
var faker = require("faker");
var PersonModel = require("../models/PersonModel");

mongoose.connect("mongodb://localhost:27017/auth_test", {
  useNewUrlParser: true,
});

async function add(numberOfRecords) {
  try {
    for (let i = 0; i < numberOfRecords; i++) {
      //   const person = new PersonModel();
      //   person.name = faker.commerce.productName();
      //   person.department = faker.commerce.department();
      //   person.price = faker.commerce.price();
      await person.save();
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}

add(100).then(() => {
  console.log("Persons createds with success!");
});
