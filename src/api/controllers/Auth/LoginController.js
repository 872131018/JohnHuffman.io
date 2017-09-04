/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var passport = require('passport');

module.exports = {

    index: function(req, res) {
        return res.view('login/index', {
            baseUrl: sails.config.custom.baseUrl,
            errors: req.flash('errors')
        });
    },

    login: function (req, res) {
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                req.flash('errors', info.message);
                return res.redirect('/login');
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.redirect('/admin/dashboard');
            });

        })(req, res);
    },

    logout: function (req, res) {
        req.logout();
        return res.ok();
    }

};
