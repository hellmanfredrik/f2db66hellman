var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('costumedetail', { title: 'Costumes' });
});

module.exports = router;
