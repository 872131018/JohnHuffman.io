/**
 * AnalyticController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var moment = require('moment');

module.exports = {

    find: function(req, res) {
        var labels = [];
        var now = moment();
        for(let i = 0; i < 10; i++) {
            labels.unshift(now.subtract(i * 3, 'days').format('MMM, DD'));
        }

        var series = [];
        now = moment();
        var asyncs = [];
        for(let i = 0; i < 10; i++) {
            asyncs.push(function(callback) {
                var start = now.subtract(i * 3, 'days').valueOf();
                var end = now.subtract(i * 3 + 3, 'days').valueOf();
                Analytic.find({
                    createdAt: {
                        '<': start,
                        '>': end
                    }
                }).exec(function(err, results) {
                    callback(null, results.length);
                });
            });
        }
        sails.config.globals.async.series(asyncs, function(err, results) {
            series = results.reverse();
            return res.json({
                labels: labels,
                series: series
            });
        });
    },

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
