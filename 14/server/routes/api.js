var express = require("express");
var router = express.Router();
var PersonController = require("../controllers/PersonController");
var ProductController = require("../controllers/PersonController");

router.get("/person", PersonController.all);
router.get("/product", ProductController.all);

module.exports = router;
