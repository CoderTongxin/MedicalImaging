const express = require('express');
const router = express.Router();
const fs=require('fs');
const readline = require('readline');


/* GET home page. */

router.get('/', function(req, res, next) {

    res.render('index');
});


router.get('/clinicalExaminationsLogSheet', function(req, res, next) {
    res.render('clinicalLogBook',{type:'clinicalExaminationsLogSheet'});
});

router.get('/clinicalHoursLogSheet', function(req, res, next) {
    res.render('clinicalLogBook',{type:'clinicalHoursLogSheet'});
});

router.get('/clinicalExaminationsTotal', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalExaminationsTotal'});
});

router.get('/clinicalExaminationsCategory', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalExaminationsCategory'});
});

router.get('/clinicalExaminationsSubcategory', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalExaminationsSubcategory'});
});

router.get('/clinicalHoursTotal', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalHoursTotal'});
});
router.get('/clinicalHoursMonth', function(req, res, next) {
    res.render('clinicalChart',{type:'clinicalHoursMonth'});
});
router.get('/clinicalSummary', function(req, res, next) {
    res.render('clinicalSummary');
});

router.get('/lepAssessments', function(req, res, next) {
    res.render('lepAssessments');
});

router.get('/quarterlyProgressReports', function(req, res, next) {
    res.render('quarterlyProgressReports');
});


module.exports = router;
