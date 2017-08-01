var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id }, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    }, function(email, password, done) {
        User.findOne({ email: email }).exec(function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user || password != user.password) {
                return done(null, false, {
                    message: 'Invalid email or password'
                });
            }
            return done(null, user, {
                message: 'Logged In Successfully'
            });
        });
    }
));
