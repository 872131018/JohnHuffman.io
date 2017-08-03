var passport = require('passport');

module.exports = function(req, res, next) {
    if(req.wantsJSON) {
        return passport.authenticate('bearer')(req, res, next);
    } else {
        return next();
    }
};
