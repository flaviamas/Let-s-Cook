var express = require("express");
var router = express.Router();
const request = require("request");
const apikey = "9f30fd6c33e0ab0ffcd0d2f1ae5c7099";
const appid = "e6ad82b4";

/* GET search page. */
router.get("/", function(req, res, next) {
  res.render("search", { title: "Express" });
});

router.post("/", function(req, res) {
  let name = req.body.name_field;
  let url =
    "https://api.edamam.com/search?q=" +
    name +
    "&app_id=" +
    appid +
    "&app_key=" +
    apikey;
  request(url, function(err, response, body) {
    if (err) {
      res.render("search", {
        recipe: null,
        error: "error, try with another ingredient"
      });
    } else {
      let fileJson = JSON.parse(body);
      let nres = fileJson["hits"].length;
      res.render("results", { jsonfile: fileJson, nres: nres });
    }
  });
});

router.get("/json=:food", function(req, res) {
  let url =
    "https://api.edamam.com/search?q=" +
    req.params.food +
    "&app_id=" +
    appid +
    "&app_key=" +
    apikey;
  request(url, function(err, response, body) {
    if (err) {
      res.json("search", {
        recipe: null,
        error: "error, try with another ingredient"
      });
    } else {
      let fileJson = JSON.parse(body);
      let nres = fileJson["hits"].length;
      if(nres == 0) {
        res.status(400);
        return res.json({});
      }
      res.json(fileJson);
    }
  });
});

module.exports = router;