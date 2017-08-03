/**
 * AnalyticController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    store: function(req, res) {
        var device = '';
        if(req.device.type == 'phone') {
            device = 'phone';
        } else if(req.device.type == 'tablet') {
            device = 'tablet';
        } else if(req.device.type == 'desktop') {
            device = 'desktop';
        } else {
            device = 'unknown';
        }

        Analytic.create({
            page: req.params.page,
            device: device,
            ip: req.ip
        }).exec(function(err) {
            if(err) {
                return res.serverError(err);
            } else {
                return res.ok();
            }

        });
    }

};
