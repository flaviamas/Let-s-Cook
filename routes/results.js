var express = require('express');
var router = express.Router();

/* GET results page. */
router.get('/', function(req, res, next) {
  res.render('results', { title: 'Express' });
});

module.exports = router;
