var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Bread'});
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About'});
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact'});
});

router.get('/gallery', function(req, res) {
  res.render('gallery', { title: 'Gallery'});
});

module.exports = router;
