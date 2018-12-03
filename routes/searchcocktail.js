var express = require("express");
var router = express.Router();
const request = require("request");


/* GET search page. */
router.get("/", function(req, res, next) {
  res.render("searchCocktail", { title: "Express" }); //mostra una pagina HTML, cerca search nella /views e lo mostra
});

router.post("/", function(req, res) {
  let name = req.body.name_field;
  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;
  request(url, function(err, response, body) {
    if (err) {
      res.render("searchCocktail", {
        recipe: null,
        error: "error, try with another ingredient"
      });
    } else {
      let fileJson = JSON.parse(body);
      res.render("resultscocktail", { jsonfile: fileJson });
     // res.json(fileJson); //vede se la richiesta è andata a buon fine, res.render fa il rendere, res.json fa il render del json
    }
  });
});

module.exports = router;
