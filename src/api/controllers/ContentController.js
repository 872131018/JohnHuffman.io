/**
 * ContentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    update: function(req, res) {
        Content.update({ id: req.param('id') }, {
            key: req.param('key'),
            header: req.param('header'),
            content: req.param('content')
        }).meta({ fetch: true })
        .then(function(result) {
            return res.send(result[0])
        }).catch(function(err) {
            return res.serverError(err)
        });
    },

    store: function(req, res) {
        Content.create({
            key: req.param('key'),
            header: req.param('header'),
            content: req.param('content')
        }).meta({ fetch: true })
        .then(function(result) {
            return res.send(result)
        }).catch(function(err) {
            return res.serverError(err)
        });
    },

    destroy: function(req, res) {
        Content.destroy({ id: req.param('id') }).meta({ fetch: true })
        .then(function(result) {
            return res.send(result)
        }).catch(function(err) {
            return res.serverError(err)
        });
    }

};
