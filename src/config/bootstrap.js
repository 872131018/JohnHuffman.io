/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = function(done) {
    /**
    * check if seeding should occur
    */
    User.count().then(function(result) {
        if(result > 0) {
            return done();
        } else {
            var asyncs = [];
            const user = {
                name: 'John Huffman',
                email: 'j-huffman@hotmail.com',
                password: process.env.PASSWORD,
                apiToken: process.env.APITOKEN
            };
            asyncs.push(function(callback) {
                User.create(user).then(function(result) {
                    callback(null, result);
                }).catch(function(err) {
                    console.log(err);
                });
            });

            const tools = require('../database/seeds/Tools.js');
            for(let seed of tools) {
                asyncs.push(function(callback) {
                    Tool.create(seed).then(function(result) {
                        callback(null, result);
                    }).catch(function(err) {
                        console.log(err);
                    });
                });
            }

            const languages = require('../database/seeds/Languages.js');
            for(let seed of languages) {
                asyncs.push(function(callback) {
                    Language.create(seed).then(function(result) {
                        callback(null, result);
                    }).catch(function(err) {
                        console.log(err);
                    });
                });
            }

            const contents = require('../database/seeds/Content.js');
            for(let seed of contents) {
                asyncs.push(function(callback) {
                    Content.create(seed).then(function(result) {
                        callback(null, result);
                    }).catch(function(err) {
                        console.log(err);
                    });
                });
            }

            sails.config.globals.async.series(asyncs, function(err, results) {
                return done();
            });
        }
    }).catch(function(err) {
        console.log(err);
    });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  //return done();

};
