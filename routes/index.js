const express = require('express');
const router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/clinicalLogBook', function(req, res, next) {
    res.render('clinicalLogBook');
});


router.get('/clinicalExaminationsTotal', function(req, res, next) {
    res.render('clinicalExaminations',{type:'total'});
});

router.get('/clinicalExaminationsCategory', function(req, res, next) {
    res.render('clinicalExaminations',{type:'category'});
});

router.get('/clinicalExaminationsSubcategory', function(req, res, next) {
    res.render('clinicalExaminations',{type:'subcategory'});
});

router.get('/clinicalHoursTotal', function(req, res, next) {
    res.render('clinicalHours',{type:'total'});
});
router.get('/clinicalHoursMonth', function(req, res, next) {
    res.render('clinicalHours',{type:'month'});
});
router.get('/clinicalHoursWeek', function(req, res, next) {
    res.render('clinicalHours',{type:'week'});
});

router.get('/clinicalSummary', function(req, res, next) {
    res.render('clinicalSummary');
});

router.get('/lepAssessments', function(req, res, next) {
    res.render('lepAssessments');
});

module.exports = router;
