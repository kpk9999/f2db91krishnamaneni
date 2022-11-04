var express = require('express');
var router = express.Router();
let times=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  times=times+1;
  res.send('Users Responce are: '+times);
});

module.exports = router;
