const express = require('express');
const router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/examinationLog', function(req, res, next) {
    res.send('examinationLog');
});

module.exports = router;
