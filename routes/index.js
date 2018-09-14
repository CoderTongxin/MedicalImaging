const express = require('express');
const router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/clinicalLogBook', function(req, res, next) {
    res.render('clinicalLogBook');
});


router.get('/clinicalExaminations', function(req, res, next) {
    res.render('clinicalExaminations');
});

router.get('/clinicalHours', function(req, res, next) {
    res.render('clinicalHours');
});

router.get('/clinicalSummary', function(req, res, next) {
    res.render('clinicalSummary');
});

router.get('/lepAssessments', function(req, res, next) {
    res.render('lepAssessments');
});

module.exports = router;
