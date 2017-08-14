/**
 * AnalyticController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var moment = require('moment');

module.exports = {

    find: function(req, res) {
        var now = moment();

        var labels = [];
        for(var i = 0; i < 10; i++) {
            labels.unshift(now.subtract(i * 3, 'days').format('MMM, DD'));
        }

        now = moment();
        var asyncs = [];
        for(var i = 0; i < 10; i++) {
            asyncs.push(function(callback) {
                var start = now.subtract(i * 3, 'days').valueOf();
                var end = now.subtract(i * 3 + 3, 'days').valueOf();
                Analytic.find({
                    //page: 'Home',
                    createdAt: {
                        '>': start,
                        '<': end
                    }
                }).exec(function(err, results) {
                    callback(null, results.length);
                });
            });
        }
        /*
        now = moment();
        for(var i = 0; i < 10; i++) {
            asyncs.push(function(callback) {
                var start = now.subtract(i * 3, 'days').valueOf();
                var end = now.subtract(i * 3 + 3, 'days').valueOf();
                Analytic.find({
                    //page: 'Download',
                    createdAt: {
                        '<': start,
                        '>': end
                    }
                }).exec(function(err, results) {
                    callback(null, results.length);
                });
            });
        }
        */
        sails.config.globals.async.series(asyncs, function(err, results) {
            var visitSeries = results.slice(0,10).reverse();
            var downloadSeries = results.slice(10,20).reverse();
            return res.json({
                visit: {
                    labels: labels,
                    series: visitSeries
                },
                download: {
                    labels: labels,
                    series: downloadSeries
                }
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
            page: req.param('page'),
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
