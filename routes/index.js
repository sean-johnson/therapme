var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TherapMe' });
});

router.get('/mood-start', function(req, res, next) {
  res.render('mood-start', { title: "How are you feeling?"});
});

router.get('/interface', function(req, res, next) {
  res.render('interface', { title: "Play. Create."});
});

module.exports = router;
