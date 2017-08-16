/**
 * AnalyticController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const moment = require('moment');

module.exports = {

    find: function(req, res) {
        let now = moment();
        let labels = [];
        for(let i = 0; i < 10; i++) {
            labels.unshift(now.subtract(i * 3, 'days').format('MMM, DD'));
        }

        let asyncs = [];
        for(let i = 0; i < 10; i++) {
            asyncs.push(function(callback) {
                let now = moment();
                let start = now.subtract(i * 3, 'days').valueOf();
                let end = now.subtract(i * 3 + 3, 'days').valueOf();
                Analytic.find({
                    page: 'Home',
                    createdAt: {
                        '<': start,
                        '>': end
                    }
                }).exec(function(err, results) {
                    callback(null, results.length);
                });
            });
        }

        for(let i = 0; i < 10; i++) {
            asyncs.push(function(callback) {
                let now = moment();
                let start = now.subtract(i * 3, 'days').valueOf();
                let end = now.subtract(i * 3 + 3, 'days').valueOf();
                Analytic.find({
                    page: 'Download',
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
            const visitSeries = results.slice(0,10).reverse();
            const downloadSeries = results.slice(10,20).reverse();

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
        let device = '';
        switch(req.device.type) {
            case 'phone':
                device = 'phone';
                break;
            case 'tablet':
                device = 'tablet';
                break;
            case 'desktop':
                device = 'desktop';
                break;
            default:
                device = 'unknown';
                break;
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
