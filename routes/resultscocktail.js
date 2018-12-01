var express = require("express");
var router = express.Router();

/* GET results page. */
router.get("/", function(req, res, next) {
  res.render("resultscocktail", { title: "Express" });
});

module.exports = router;
