/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var passport = require('passport');

module.exports = {
    /**
    * `UserController.login()`
    */
    login: function (req, res) {
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
           req.logIn(user, function(err) {
               if (err) res.send(err);
               return res.send({
                   message: info.message,
                   user: user
               });
           });

       })(req, res);
    },

    /**
    * `UserController.logout()`
    */
    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    }

};
