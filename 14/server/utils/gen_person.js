var mongoose = require("mongoose");
var faker = require("faker");
var PersonModel = require("../models/PersonModel");

mongoose.connect("mongodb://172.17.0.2:27017/auth_test", {
  useNewUrlParser: true,
});

async function add(numberOfRecords) {
  try {
    for (let i = 0; i < numberOfRecords; i++) {
      const person = new PersonModel();
      person.name = faker.name.name();
      person.country = faker.address.conuntry();
      person.mail = faker.internet.email();
      person.company = faker.commerce.company();
      await person.save();
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}

add(100).then(() => {
  console.log("Persons createds with success!");
  mongoose.disconnect();
});
