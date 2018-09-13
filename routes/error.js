const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/error', function(req, res, next) {
    res.send('error');
});

module.exports = router;