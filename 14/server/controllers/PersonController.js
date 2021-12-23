var PersonModel = require("../models/PersonModel.js");

module.export = {
  all: function (req, res) {
    PersonModel.find({})
      .lean()
      .exec(function (err, person) {
        if (err) return res.json([]);
        return res.json(person);
      });
  },
};
