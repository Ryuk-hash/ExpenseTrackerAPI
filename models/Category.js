var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: [true, 'Category must be provided!'], unique: true },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
