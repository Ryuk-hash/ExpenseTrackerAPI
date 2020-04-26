const Expense = require('../models/Expense');

exports.viewAllExpenses = async (req, res) => {
  try {

    // BUILD QUERY

    // 1) FILTERING -------
    // We can easily query day or category using this basic filter method.
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // 2) ADVANCED FILTERING -------
    // We can easily query amount ranges using this slightly advanced filter method.
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    const query = Expense.find(JSON.parse(queryStr));

    //EXECUTE QUERY
    const expenses = await query;

    res.status(200).json({
      status: 'success',
      results: expenses.length,
      data: {
        expenses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Error 404: File Not Found!',
    });
  }
};

exports.createExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        expense: newExpense,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message:
        "Invalid data sent and/or field(s) provided aren't sufficient.",
    });
  }
};