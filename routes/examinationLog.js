const express = require('express');
const router = express.Router();


router.get('/examinationLog', function(req, res, next) {
  res.send('examinationLog');
});

module.exports = router;
