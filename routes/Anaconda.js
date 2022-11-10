var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('Anaconda', { title: 'Search Results Anaconda' });

});
var express = require('express');
const Anaconda_controlers= require('../controllers/Anaconda');
var router = express.Router();
/* GET Anacondas */
router.get('/', Anaconda_controlers.Anaconda_view_all_Page );
module.exports = router;
module.exports = router;