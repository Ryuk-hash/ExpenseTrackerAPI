const config = require('../config');
const client = require('twilio')(config.accountSID, config.authToken);

exports.sendCode = (req, res) => {
  console.log(config);
  client
    .verify
    .services(config.serviceID)
    .verifications
    .create({
      to: `+${req.query.phonenumber}`,
      channel: req.query.channel
    })
    .then((data) => {
      res.status(200).send(data);
    })
};

exports.verifyCode = (req, res) => {
  client
    .verify
    .services(config.serviceID)
    .verificationChecks
    .create({
      to: `+${req.query.phonenumber}`,
      code: req.query.code
    })
    .then((data) => {
      res.status(200).send(data);
    });
};