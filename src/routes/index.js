import express from 'express';
import Content from '../database/models/Content';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.xhr) {
        Content.find({}, (error, content) => {
            res.json({
                about: content
            });
        });
    } else {
        res.render('frontend', {
            title: 'Express',
            csrf: req.csrfToken(),
            base_url: process.env.APP_URL
        });
    }
});

module.exports = router;
