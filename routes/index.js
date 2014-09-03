var request = require('request');
var express = require('express');
var router = express.Router();
var _ = require('lodash');

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
  var options = {
    url: 'https://api.flickr.com/services/feeds/photos_public.gne/?format=json&nojsoncallback=1',
    json: false
  }

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      console.log(body);
      // console.log(content.items);
      console.log(body.modified);

      var content = JSON.parse(body);
      console.log(content.modified);

      var itemURLs = [];

      _.forEach(content, function(item) {
        itemURLs.push(item.media.m);
      });

      // console.log(itemURLs);

      res.render('gallery', { title: 'Gallery', itemURLs: itemURLs});
    }
  })
});

module.exports = router;