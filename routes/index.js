const express = require('express');
const router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/clinicalExaminations', function(req, res, next) {
    res.render('clinicalExaminations');
});

module.exports = router;
