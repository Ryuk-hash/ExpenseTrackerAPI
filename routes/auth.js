var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();

const {
  sendCode,
  verifyCode
} = authController;

router.route('/login').get(sendCode);
router.route('/verify').get(verifyCode);

module.exports = router;