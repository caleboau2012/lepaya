var express = require("express");
var router = express.Router();
var generatorController = require("../controllers/generateController");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Memory Game" });
});

router.get("/generate/:no", generatorController);

module.exports = router;
