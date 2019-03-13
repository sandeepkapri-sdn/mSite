// const twilioConfig = require('../config/twilio')
const common = require('../helper/common')
const Users = require('../models/users');
// const twilio = require('twilio');
// const client = require('twilio')(twilioConfig.accSId, twilioConfig.authToken);
const Response = require('../lib/response')

exports.register = function (req, res, next) {
    Request = req.body ? req.body : {};
    const data = { phone: Request.phone, OTP: common.OTP() }
    const saveData = new Users(data);
    saveData.save((err, val) => {
        if (err) {
            return res.json(Response(404, "Failed", 'Failed', err));
        } else {
            return res.json(Response(404, "Success", 'Success', val));
            // if(Request.phone) {
            //     client.messages
            //         .create({
            //             body: 'OTP is ' + data.OTP,
            //             from: twilioConfig.twilioNo,
            //             to: data.phone
            //         })
            //         .then(message => {
            //             return res.json(Response(200, "Success", 'Success', val));
            //         });
            // }
        }
    })
}

exports.setPassword = function (req, res, next) {
    Request = req.body ? req.body : {};

    const query = { phone: Request.phone, OTP: Request.OTP }
    const update = { $set: { password: Request.password } }
    Users.update(query, update).exec(function (err, user) {
        if (err) {
            return res.json(Response(404, "Failed", 'Failed', err));
        } else {
            return res.json(Response(404, "Success", 'Success', ''));
        }
    })
}