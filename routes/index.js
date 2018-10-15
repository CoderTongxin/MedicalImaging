const express = require('express');
const router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index');
});


/* GET Clinical Examinations Log Sheet page. */
router.get('/clinicalExaminationsLogSheet', function(req, res, next) {
    res.render('clinicalLogBook',{type:'clinicalExaminationsLogSheet'});
});
/* GET Clinical  Examinations Total page. */
router.get('/clinicalExaminationsTotal', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalExaminationsTotal'});
});
/* GET Clinical  Examinations Category page. */
router.get('/clinicalExaminationsCategory', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalExaminationsCategory'});
});
/* GET Clinical  Examinations SubCategory page. */
router.get('/clinicalExaminationsSubcategory', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalExaminationsSubcategory'});
});


/* GET Clinical Hours Log Sheet page. */
router.get('/clinicalHoursLogSheet', function(req, res, next) {
    res.render('clinicalLogBook',{type:'clinicalHoursLogSheet'});
});
/* GET Clinical  Hours total page. */
router.get('/clinicalHoursTotal', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalHoursTotal'});
});
/* GET Clinical  Hours Month page. */
router.get('/clinicalHoursMonth', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalHoursMonth'});
});



/* GET LEP Assessments page. */
router.get('/lepAssessments', function(req, res, next) {
    res.render('lepAssessments');
});


/* GET Quarterly Progress Reports page. */
router.get('/quarterlyProgressReports', function(req, res, next) {
    res.render('quarterlyProgressReports');
});


/* GET Clinical Summary page. */
// router.get('/clinicalSummary', function(req, res, next) {
//     res.render('clinicalSummary');
// });
module.exports = router;
