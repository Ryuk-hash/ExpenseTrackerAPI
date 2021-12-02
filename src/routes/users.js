var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

const {
  getAllUsers,
  getUser,
  updateUser
} = userController;

router.route('/').get(getAllUsers);
router.route('/:id').get(getUser).patch(updateUser);

module.exports = router;
