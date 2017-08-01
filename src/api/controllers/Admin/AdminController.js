/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: function(req, res) {
        return res.view('admin/index', {
            baseUrl: sails.config.custom.baseUrl,
            apiToken: req.user.apiToken
        });
    }

};
