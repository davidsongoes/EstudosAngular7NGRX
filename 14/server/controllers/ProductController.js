var ProductModel = require("../models/ProductModel.js");

module.export = {
  all: function (req, res) {
    ProductModel.find({})
      .lean()
      .exec(function (err, products) {
        if (err) return res.json([]);
        return res.json(products);
      });
  },
};
