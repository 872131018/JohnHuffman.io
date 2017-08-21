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
    * Clear collection
    */
    const abouts = require('../database/seeds/Abouts.js');
    for(let seed of abouts) {
        About.create(seed).exec(function(err) {
            //
        });
    }
    /**
    * Clear collection
    */
    const interests = require('../database/seeds/Interests.js');
    for(let seed of interests) {
        Interest.create(seed).exec(function(err) {
            //
        });
    }
    /**
    * Clear collection
    */
    User.create({
        name: 'John Huffman',
        email: 'j-huffman@hotmail.com',
        password: process.env.PASSWORD,
        apiToken: process.env.APITOKEN
    }).exec(function(err) {
        //
    });


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
