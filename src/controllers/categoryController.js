const Category = require('../models/Category');

exports.viewCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      status: 'success',
      results: categories.length,
      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Error 404: File Not Found!',
    });
  }
};

exports.viewCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Error 404: File Not Found!',
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        category: newCategory,
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

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!(category.categoryName === 'Food' || category.categoryName === 'Travel' || category.categoryName === 'Shopping')) {
      await Category.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } else {
      throw new Error('Permanent category | Cannot delete!');
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `${err} :- Cannot delete specified category!`,
    });
  }
};
