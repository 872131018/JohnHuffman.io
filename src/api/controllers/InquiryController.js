/**
 * InquiryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const nodemailer = require('nodemailer');
 const smtpTransport = require('nodemailer-smtp-transport');

module.exports = {

    store: function(req, res) {

        Inquiry.create({
            name: req.param('name'),
            email: req.param('name'),
            message: req.param('message'),
            likes: req.param('likes')
        }).exec(function(err) {
            if(err) {
                return res.serverError(err);
            } else {
                return res.ok();
            }
        });

        var transport = nodemailer.createTransport(smtpTransport({
            host: 'email-smtp.us-west-2.amazonaws.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.AWS_ACCESS_KEY_ID,
                pass: process.env.AWS_SECRET_ACCESS_KEY
            }
        }));

        var mailOptions = {
            from: 'John <j-huffman@hotmail.com>', // sender address
            to: 'supertestemail@mailinator.com', // list of receivers
            subject: 'Hello', // Subject line
            text: 'Hello world', // plaintext body
            html: '<b>Hello world</b>' // html body
        };

        transport.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
    }
};
