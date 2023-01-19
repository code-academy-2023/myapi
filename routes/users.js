var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Tämä on siis esimerkki');
});

module.exports = router;
