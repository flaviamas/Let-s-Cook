var express = require("express");
var router = express.Router();
const request = require("request");

/* GET search page. */
router.get("/", function(req, res, next) {
  res.render("searchCocktail", { title: "Express" });
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
    }
  });
});

router.get("/json=:cocktail", function(req, res) {
  let url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
    req.params.cocktail;
  request(url, function(err, response, body) {
    if (err) {
      res.json("search", {
        recipe: null,
        error: "error, try with another ingredient"
      });
    } else {
      let fileJson = JSON.parse(body);
      let flag = fileJson["drinks"];
      if (flag == null) {
        res.status(400);
        return res.json({});
      }
      res.json(fileJson);
    }
  });
});

module.exports = router;