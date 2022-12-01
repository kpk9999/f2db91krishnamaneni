var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('Anaconda', { title: 'Search Results Anaconda' });

});
var express = require('express');
const Anaconda_controlers= require('../controllers/Anaconda');  
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
/* GET Anacondas */
router.get('/', Anaconda_controlers.Anaconda_view_all_Page );
/* GET detail Anaconda page */
router.get('/detail', secured,Anaconda_controlers.Anaconda_view_one_Page);
router.get('/create',secured, Anaconda_controlers.Anaconda_create_Page);
router.get('/update', secured,Anaconda_controlers.Anaconda_update_Page);
router.get('/delete', secured,Anaconda_controlers.Anaconda_delete_Page);
module.exports = router;
module.exports = router;