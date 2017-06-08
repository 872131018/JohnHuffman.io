var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('frontend', {
        title: 'Express',
        csrf: req.csrfToken(),
        base_url: process.env.APP_URL
    });
});

module.exports = router;
