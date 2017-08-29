/**
 * FrontendController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: function(req, res) {
        return res.view('frontend/index', {
            baseUrl: process.env.BASE_URL,
            googleApiKey: process.env.GOOGLE_API_KEY
        });
    }

};
