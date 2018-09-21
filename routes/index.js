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
    res.render('clinicalExaminations',{type:'clinicalExaminationsTotal'});
});

router.get('/clinicalExaminationsCategory', function(req, res, next) {
    res.render('clinicalExaminations',{type:'clinicalExaminationsCategory'});
});

router.get('/clinicalExaminationsSubcategory', function(req, res, next) {
    res.render('clinicalExaminations',{type:'clinicalExaminationsSubcategory'});
});

router.get('/clinicalHoursTotal', function(req, res, next) {
    res.render('clinicalHours',{type:'clinicalHoursTotal'});
});
router.get('/clinicalHoursMonth', function(req, res, next) {
    res.render('clinicalHours',{type:'clinicalHoursMonth'});
});

// router.get('/clinicalHoursWeek', function(req, res, next) {
//     res.render('clinicalHours',{type:'clinicalHoursWeek'});
// });

router.get('/clinicalSummary', function(req, res, next) {
    res.render('clinicalSummary');
});

router.get('/lepAssessments', function(req, res, next) {
    res.render('lepAssessments');
});

module.exports = router;
