var express = require('express');
var router = express.Router();
/**
* Add CSRF protection
*/
//import csrf from 'csurf';
var csrf = require('csurf');
/**
* Add csrf protection middleware
*/
//app.use(csrf());
var csrfProtection = csrf();

/* GET home page. */
router.get('/', csrfProtection, function(req, res, next) {
    res.render('frontend', {
        title: 'Express',
        csrf: req.csrfToken()
    });
});

module.exports = router;
