var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const User = require('../models/User');
const { check } = require('express-validator/check');

const {
  getPage,
  postPage
} = indexController;

function findUserByEmail(email) {
  if (email) {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email })
        .exec((err, doc) => {
          if (err) return reject(err)
          if (doc) return reject(new Error('This email already exists. Please enter another email.'))
          else return resolve(email)
        })
    })
  }
}

router.route('/').get(getPage);

router.route('/register').post
  (
    postPage,
    [
      check('full_name', 'Name cannot be left blank').isLength({ min: 1 }), check('email')
        .isEmail().withMessage('Please enter a valid email address')
        .trim()
        .normalizeEmail()
        .custom(value => {
          return findUserByEmail(value).then(User => {
            //if user email already exists throw an error
          })
        }),
      check('gender', 'Please select gender')
        .isLength({ min: 1 }),
      // check('dob', 'Date of birth cannot be left blank')
      //   .isLength({ min: 1 }),
      check('terms', 'Please accept our terms and conditions').equals('yes'),
    ]
  );

module.exports = router;