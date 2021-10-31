var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'..', 'htmls', 'index.html'));
}); //call back function



module.exports = router;
