var express = require("express");
var router = express.Router();

/* GET search page. */
router.get("/", function(req, res, next) {
  res.render("SignIn", { title: "Express" }); //mostra una pagina HTML, cerca search nella /views e lo mostra
});

module.exports = router;
