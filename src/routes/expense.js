var express = require('express');
const expenseController = require('../controllers/expenseController');
var router = express.Router();

const {
  viewAllExpenses,
  createExpense
} = expenseController;

router.route('/').get(viewAllExpenses)
router.route('/addExpense').post(createExpense);

module.exports = router;