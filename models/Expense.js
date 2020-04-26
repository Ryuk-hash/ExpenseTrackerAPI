var mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({

  amount: { type: Number, required: [true, 'Amount must be provided!'] },
  category: { type: String, required: [true, 'Category must be provided!'] },
  day: { type: Number, min: 1, max: 31, required: [true, 'Day must be provided!'] },
  month: { type: Number, min: 1, max: 12, required: [true, 'Month must be provided!'] }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
