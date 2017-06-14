import express from 'express';
import Content from '../database/models/Content';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.xhr) {
        Content.find({}, (error, contents) => {
            let about = [];
            let interests = [];

            contents.map( content => {
                switch(content.group) {
                    case 'about':
                        about.push(content);
                        break;
                    case 'interests':
                        interests.push(content);
                        break;
                }
            });

            res.json({
                about: about,
                interests: interests
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
