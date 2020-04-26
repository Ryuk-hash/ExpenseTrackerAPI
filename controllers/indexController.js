const User = require('../models/User');
const { validationResult } = require('express-validator/check');

exports.getPage = (req, res) => {
  res.render('index', { title: 'Login Form' });
};

exports.postPage = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ status: "error", message: errors.array() });
    } else {
      var document = {
        full_name: req.body.full_name,
        email: req.body.email,
        // dob: req.body.dob,
        gender: req.body.gender,
      };
      var user = new User(document);
      user.save(function (error) {
        if (error) {
          throw error;
        }
        res.json({ message: "Data saved successfully.", status: "success", data: document });
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message:
        "Invalid data sent and/or field(s) provided aren't sufficient.",
    });
  }
};